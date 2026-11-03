// HTML email for contact form enquiries. Email clients ignore <style> blocks
// and modern CSS, so this sticks to nested tables and inline styles.

export type EnquiryDetails = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const COLORS = {
  page: "#F4EDE2",
  card: "#FFFFFF",
  brand: "#515227",
  accent: "#777A35",
  heading: "#252600",
  text: "#0B0B0B",
  muted: "#6B6B5E",
  border: "#E4DCCD",
};

const SERIF = "Georgia, 'Times New Roman', Times, serif";
const SANS =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function detailRow(label: string, valueHtml: string) {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${COLORS.border};">
        <div style="font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${COLORS.muted};padding-bottom:4px;">${label}</div>
        <div style="font-family:${SANS};font-size:16px;line-height:24px;color:${COLORS.text};">${valueHtml}</div>
      </td>
    </tr>`;
}

export function renderEnquiryEmail({ name, email, phone, message }: EnquiryDetails) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const firstName = safeName.split(" ")[0];
  const receivedAt = new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Melbourne",
    dateStyle: "full",
    timeStyle: "short",
  });

  const linkStyle = `color:${COLORS.accent};text-decoration:underline;`;
  const phoneHtml = phone
    ? `<a href="tel:${safePhone.replace(/[^\d+]/g, "")}" style="${linkStyle}">${safePhone}</a>`
    : `<span style="color:${COLORS.muted};">Not provided</span>`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>New enquiry from ${safeName}</title>
</head>
<body style="margin:0;padding:0;background-color:${COLORS.page};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    ${safeName} sent a message through the Sukoon website.
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${COLORS.page};">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

          <!-- Header -->
          <tr>
            <td align="center" style="background-color:${COLORS.brand};padding:36px 32px 32px;border-radius:12px 12px 0 0;">
              <div style="font-family:${SERIF};font-size:34px;line-height:40px;letter-spacing:6px;color:${COLORS.page};">SUKOON</div>
              <div style="font-family:${SANS};font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#D9D3B8;padding-top:6px;">Indian Restaurant</div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:${COLORS.card};padding:40px 40px 32px;">
              <div style="font-family:${SANS};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${COLORS.accent};padding-bottom:10px;">New website enquiry</div>
              <h1 style="margin:0 0 12px;font-family:${SERIF};font-weight:normal;font-size:28px;line-height:34px;color:${COLORS.heading};">${safeName} would like to get in touch</h1>
              <p style="margin:0 0 28px;font-family:${SANS};font-size:14px;line-height:22px;color:${COLORS.muted};">Received ${receivedAt}</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${COLORS.border};">
                ${detailRow("Name", safeName)}
                ${detailRow("Email", `<a href="mailto:${safeEmail}" style="${linkStyle}">${safeEmail}</a>`)}
                ${detailRow("Phone", phoneHtml)}
              </table>

              <div style="font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${COLORS.muted};padding:28px 0 10px;">Message</div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:${COLORS.page};border-left:3px solid ${COLORS.accent};border-radius:4px;padding:20px 22px;font-family:${SERIF};font-size:17px;line-height:27px;color:${COLORS.text};">${safeMessage}</td>
                </tr>
              </table>

              <!-- Reply button -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:32px;">
                <tr>
                  <td align="center" style="border-radius:999px;background-color:${COLORS.accent};">
                    <a href="mailto:${safeEmail}?subject=${encodeURIComponent("Re: Your enquiry to Sukoon")}" style="display:inline-block;padding:13px 30px;font-family:${SANS};font-size:13px;letter-spacing:1.5px;text-transform:uppercase;color:#FFFFFF;text-decoration:none;border-radius:999px;">Reply to ${firstName}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background-color:${COLORS.card};border-top:1px solid ${COLORS.border};border-radius:0 0 12px 12px;padding:24px 40px 28px;">
              <p style="margin:0;font-family:${SANS};font-size:12px;line-height:20px;color:${COLORS.muted};">
                Sent from the contact form at sukoonindianrestaurant.com.au<br>
                498-500 Mt Alexander Road, Ascot Vale VIC 3032 &middot; 03 9495 6762
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    "NEW WEBSITE ENQUIRY - SUKOON",
    `Received ${receivedAt}`,
    "",
    `Name:  ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    "Message:",
    message,
    "",
    "-",
    "Sent from the contact form at sukoonindianrestaurant.com.au",
  ].join("\n");

  return { html, text };
}
