"use client";
import { useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import { cn } from "@/utils/cn";
interface propType {
  name: string;
  options: string[];
  className?: string;
  placeholder?: string;
}

export default function SelectInput({
  options = [""],
  name,
  className,
  placeholder = "select ....",
}: propType) {
  const [selected, setSelected] = useState("");
  const [showSelections, setShowSelections] = useState(false);
  const ref = useClickOutside(() => setShowSelections(false));
  return (
    <div
      className={cn(
        "bg-white py-[14px] px-4 rounded-[6px] h-[47px] capitalize font-normal",
        className,
        "relative cursor-pointer"
      )}
      ref={ref}
      onClick={() => {
        setShowSelections(!showSelections);
      }}
    >
      <input type="hidden" name={name} value={selected} />

      <div className="w-full flex justify-between items-center">
        {selected || placeholder}
        <Image
          src="/imgs/down-arrow.svg"
          alt="V"
          width={16}
          height={16}
          className={cn("rotate-0 transition-transform duration-300", {
            "rotate-180": showSelections,
          })}
        />
      </div>

      {showSelections && (
        <div className="absolute top-[calc(100%+4px)] z-10 py-[14px] px-4 rounded-[6px] inset-x-0 space-y-4 bg-inherit">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setSelected(option);
                setShowSelections(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
