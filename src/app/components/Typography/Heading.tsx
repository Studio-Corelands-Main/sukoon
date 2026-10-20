import { cn } from "@/lib/utils";

type TypographyProps = {
  className?: string;
  children: React.ReactNode;
};

const variantClasses = {
  h1: "text-[30px] md:text-[50px] 2xl:text-[64px] font-charman-serif-light",
  h2: "text-[24px] md:text-[36px] 2xl:text-[48px] font-charman-serif-light leading-7 md:leading-12",
  p: "text-sm md:text-[16px] 2xl:text-[20px] font-instrument-regular leading-6 md:leading-7 ",
};

type Variant = keyof typeof variantClasses;

const createTypography = (variant: Variant) => {
  const Tag = variant;

  return ({ className, children }: TypographyProps) => (
    <Tag className={cn(variantClasses[variant], className)}>{children}</Tag>
  );
};

export const H1 = createTypography("h1");
export const H2 = createTypography("h2");
export const Text = createTypography("p");
