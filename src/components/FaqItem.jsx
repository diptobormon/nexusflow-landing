import { useState } from "react";
import chevronDownIcon from "../assets/icons/chevron-down.svg";

export default function FaqItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-6 px-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white">{q}</span>
        <img
          src={chevronDownIcon}
          alt="Expand"
          className={`w-4 h-4 invert opacity-60 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`${isOpen ? "block" : "hidden"} pt-4 text-sm text-neutral-400 leading-relaxed`}
      >
        {a}
      </div>
    </div>
  );
}
