import { useState } from "react";

interface AccordionCardProps {
  title: string | number;
  children: React.ReactNode;
  isOpenByDefault?: boolean;
}

export default function AccordionCard({
  title,
  children,
  isOpenByDefault = false,
}: AccordionCardProps) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <div className="mt-2 rounded-xl shadow-lg bg-white border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left px-4 py-3 ${
          isOpen ? "bg-gray-100 text-gray-800" : "bg-white text-gray-800"
        } font-medium hover:bg-gray-50 transition-colors duration-200`}
      >
        {title}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
}
