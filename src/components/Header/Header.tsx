"use client";
import Image from "next/image";
import NavLinks from "./nav-links";
import { cn } from "@/utils/cn";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="fixed z-50  inset-x-0 top-0 bg-background">
      <div className="bg-soft-white h-[--header-height]  px-8 flex justify-between items-center mt-[--page-y-padding] mx-[--page-x-padding] gap-16 rounded-[20px]">
        <Link
          href="/"
          className="w-16 h-[24px] sm:w-[90px] sm:h-7  relative shrink-0 block"
        >
          <Image
            alt=""
            src="/imgs/logo.svg"
            unoptimized
            fill={true}
            className="object-contain"
            priority={true}
          />
        </Link>
        <div className="lg:flex-grow">
          <div
            className="lg:hidden"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <Image
              src={showMenu ? "/imgs/cross.svg" : "/imgs/burger.svg"}
              alt="X"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </div>
          <div
            className={cn(
              "fixed inset-x-[--page-x-padding] bottom-[--page-y-padding] top-[calc(var(--header-height)+var(--page-y-padding)+var(--page-gap))] bg-soft-white rounded-[20px] flex flex-col justify-center gap-16 translate-x-[calc(100%+var(--page-x-padding))] duration-300 transition-transform",
              "lg:static  lg:rounded-none lg:flex-row lg:justify-between lg:translate-x-0",
              { "translate-x-0": showMenu }
            )}
          >
            <NavLinks
              className={cn(
                "flex flex-col justify-evenly px-4",
                "lg:flex-row  lg:justify-center lg:mx-auto lg:px-0"
              )}
              onClick={() => setShowMenu(false)}
            />
            <div className="w-full  lg:w-[209px] h-[43px] flex  justify-center items-center gap-4 px-[10px]">
              <div className="py-[10px] px-4  text-nowrap capitalize">
                sign up / in
              </div>
              <div className="py-2 px-4 font-medium font-Ar">عربي</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
