import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main";
  id?: string;
};

export function PageContainer({
  children,
  className = "",
  as: Tag = "div",
  id,
}: Props) {
  return (
    <Tag id={id} className={`page-shell ${className}`.trim()}>
      {children}
    </Tag>
  );
}
