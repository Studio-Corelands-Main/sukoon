import { cn } from "@/lib/utils";

type TypographyProps = {
  variant?: "h1" | "h2" | "p";
  className?: string;
  children: React.ReactNode;
};

const variantClasses = {
  h1: "text-[30px] md:text-[50px] 2xl:text-[64px] font-charman-serif-light",
  h2: "text-[24px] md:text-[36px] 2xl:text-[48px] font-charman-serif-light",
  p: "text-sm md:text-[16px] 2xl:text-[20px] font-instrument-regular",
};

const Typography = ({
  variant = "p",
  className,
  children,
}: TypographyProps) => {
  const Tag = variant;

  return (
    <Tag className={cn(variantClasses[variant], className)}>{children}</Tag>
  );
};

export default Typography;
