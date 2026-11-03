"use server";

import nodemailer from "nodemailer";
import { renderEnquiryEmail } from "./emailTemplate";

type ContactFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  // Echoed back on error so the form can repopulate after React resets it.
  fields?: ContactFields;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const firstName = field(formData, "firstName");
  const lastName = field(formData, "lastName");
  const email = field(formData, "email");
  const phone = field(formData, "phone");
  const message = field(formData, "message");
  const fields = { firstName, lastName, email, phone, message };

  if (!firstName || !email || !message) {
    return {
      status: "error",
      fields,
      message: "Please fill in your name, email and message.",
    };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address.", fields };
  }
  if (message.length > 5000) {
    return { status: "error", message: "Your message is too long.", fields };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    console.error("Contact form: SMTP environment variables are not set.");
    return {
      status: "error",
      fields,
      message: "Something went wrong. Please try again or call us directly.",
    };
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const fullName = `${firstName} ${lastName}`.trim();
  const { html, text } = renderEnquiryEmail({
    name: fullName,
    email,
    phone,
    message,
  });

  try {
    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: CONTACT_TO_EMAIL,
      replyTo: { name: fullName, address: email },
      subject: `New enquiry from ${fullName}`,
      text,
      html,
    });
  } catch (error) {
    console.error("Contact form: failed to send email.", error);
    return {
      status: "error",
      fields,
      message: "Something went wrong. Please try again or call us directly.",
    };
  }

  return {
    status: "success",
    message: "Thank you! Your message has been sent. We'll be in touch soon.",
  };
}
