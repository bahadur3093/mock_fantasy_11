import { ReactNode } from "react";

interface IHeadingTitleProps {
  size: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  color?: "primary" | "secondary" | "tertiary";
  classes?: string;
  isSeperator?: boolean
}

enum HeadingTitleSize {
  sm = "text-sm",
  md = "text-md",
  lg = "text-2xl",
  xl = "text-4xl",
}

export default function HeadingTitle({ size, children, classes, isSeperator = false }: IHeadingTitleProps) {
  return <div className={`font-extrabold text-gray-800  tracking-tight ${HeadingTitleSize[size]} ${classes} ${isSeperator ? 'border-b-2' : ''}`}>{children}</div>;
}
