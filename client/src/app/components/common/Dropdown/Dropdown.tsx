"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react"; // optional icon
import clsx from "clsx";

interface DropdownSelectProps {
  label?: string;
  options: string[];
  selected?: string;
  onSelect: (value: string) => void;
}

export default function DropdownSelect({
  label,
  options,
  selected,
  onSelect,
}: DropdownSelectProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full max-w-xs">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span>{selected || "Select an option"}</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => {
                onSelect(option);
                setOpen(false);
              }}
              className={clsx(
                "px-4 py-2 cursor-pointer hover:bg-blue-50 text-sm",
                option === selected && "bg-blue-100 font-semibold"
              )}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
