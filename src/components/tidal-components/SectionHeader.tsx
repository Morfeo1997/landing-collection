// src/components/tidal-components/SectionHeader.tsx

import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  showSeeAll?: boolean;
  onSeeAll?: () => void;
}

export default function SectionHeader({
  title,
  showSeeAll = true,
  onSeeAll,
}: SectionHeaderProps) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-xl font-bold text-white md:text-2xl">
        {title}
      </h2>

      {showSeeAll && (
        <button
          type="button"
          onClick={onSeeAll}
          className="
            flex
            items-center
            gap-1
            text-sm
            font-medium
            text-[#a7a7a7]
            transition-colors
            hover:text-white
          "
        >
          <span>Ver todos</span>

          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
}
