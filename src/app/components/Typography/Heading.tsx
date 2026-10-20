import { cn } from "@/lib/utils";

type HeadingProps = {
  variant?: "h1" | "h2" | "p";
  className?: string;
  children: React.ReactNode;
};

const variantClasses = {
  h1: "text-[64px] font-charman-serif-light",
  h2: "text-[48px] font-charman-serif-light",
  p: "text-[20px] font-instrument-regular",
};

const Heading = ({
  variant = "h1",
  className,

  children,
}: HeadingProps) => {
  const Tag = variant;

  return (
    <Tag className={cn(variantClasses[variant], className)}>{children}</Tag>
  );
};

export default Heading;
