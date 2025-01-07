"use client";
import { links } from "./constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

//--------------------------------------
interface propType {
  className?: string;
  [key: string]: any;
}
//---------------------------------------
export default function NavLinks({ className, ...rest }: propType) {
  const pathName = usePathname();
  const [active, setActive] = useState(true);
  const ref = useRef(null);

  /*-------------------------------------------*/
  const { contextSafe } = useGSAP({ scope: ref });
  const mouseEnterLinkHandler = contextSafe((e) => {
    setActive(false);
    const parentRect = e.target.parentElement.getBoundingClientRect();
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const top = rect.top - parentRect.top;
    const left = rect.left - parentRect.left;
    gsap.to(".overlay", {
      width,
      height,
      top,
      left,
      opacity: 1,
      duration: 0.3,
    });
  });
  const mouseLeaveLinkHandler = contextSafe(() => {
    setActive(true);
    gsap.to(".overlay", {
      opacity: 0,
      duration: 0.3,
    });
  });

  /*--------------------------------------------*/
  const navLinks = links.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={cn(
        "capitalize px-4 py-[10] font-normal  duration-300 text-nowrap",
        "support-hover:hover:text-secondary-orange support-hover:hover:font-semibold",
        {
          "rounded-[10px] bg-active-link text-secondary-orange font-semibold":
            pathName === link.href && active,
        }
      )}
      onMouseEnter={mouseEnterLinkHandler}
      onMouseLeave={mouseLeaveLinkHandler}
    >
      {link.label}
    </Link>
  ));
  return (
    <nav className={cn(className, "relative ")} {...rest} ref={ref}>
      {navLinks}
      <div className="overlay rounded-[10px] top-0 left-0 w-0 h-0 bg-active-link absolute -z-10" />
    </nav>
  );
}
