import Link from "next/link";

export default function Button({
  color,
  label,
  className,
  href = "#",
  target = "_self",
  type,
  disabled,
  booking,
}: {
  color?: string;
  label: string;
  className: string;
  href?: string;
  target?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  /** Opens the booking modal on click */
  booking?: boolean;
}) {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        {...(booking ? { "data-booking": "" } : {})}
        className={`px-5 py-1.5 text-[12px] lg:px-7.5 lg:py-2.5 lg:text-[14px] border rounded-full border-[${color}] hover:border-transparent font-instrument-regular ${className}`}
      >
        {href === "#" ? label : <Link href={href} target={target}>
          {label}
        </Link>}
      </button>
    </>
  );
}
