import React from "react";

interface TextProps extends React.HTMLProps<HTMLParagraphElement> {
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  className,
  ...props
}) => (
  <p className={`text-white ${className}`} {...props}>
    {children}
  </p>
);
