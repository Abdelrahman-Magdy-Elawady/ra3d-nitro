"use client";
import useClickOutside from "@/hooks/useClickOutside";
import { cn } from "@/utils/cn";
import { useState } from "react";
import Image from "next/image";
//-----------------------------------
interface propType {
  title: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}
//-----------------------------------
export default function DropDown({ title, content, className }: propType) {
  const [showConent, setShowContent] = useState(false);
  const ref = useClickOutside(() => setShowContent(false));

  return (
    <div
      className={cn("w-full bg-soft-white cursor-pointer", className)}
      ref={ref}
      onClick={() => setShowContent(!showConent)}
    >
      <div className={cn("w-full py-2 px-3 flex flex-nowrap justify-between")}>
        {title}
        <Image
          src="/imgs/down-arrow.svg"
          alt="V"
          width={24}
          height={24}
          className={cn("rotate-0 transition-transform duration-300", {
            "rotate-180": showConent,
          })}
        />
      </div>
      {showConent && <div className={"w-full"}>{content}</div>}
    </div>
  );
}
