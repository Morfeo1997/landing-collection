import React from "react";
import SectionHeader from "./SectionHeader";

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  showSeeAll?: boolean;
  onSeeAll?: () => void;
  className?: string;
}

export default function ContentSection({
  title,
  children,
  showSeeAll = true,
  onSeeAll,
  className = "",
}: ContentSectionProps) {
  return (
    <section className={`mb-10 ${className}`}>
      <SectionHeader
        title={title}
        showSeeAll={showSeeAll}
        onSeeAll={onSeeAll}
      />

      {children}
    </section>
  );
}
