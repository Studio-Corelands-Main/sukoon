import Link from "next/link";

export default function Button({
  color,
  label,
  className,
  href = "#",
}: {
  color?: string;
  label: string;
  className: string;
  href?: string;
}) {
  return (
    <>
      <button
        className={`px-5 py-1.5 text-[12px] lg:px-7.5 lg:py-2.5 lg:text-[14px] border rounded-full border-[${color}] hover:border-transparent font-instrument-regular ${className}`}
      >
        {href === "#" ? label : <Link href={href}>{label}</Link>}
      </button>
    </>
  );
}
