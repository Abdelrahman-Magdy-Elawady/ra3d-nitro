"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function PageLoader() {
  const pathname = usePathname();
  const ref = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(".cutter", {
        right: "100%",
        duration: 0.75,
      })
        .to(".up-side", {
          clipPath: `inset(0 0 100% 0)`,
          duration: 0.5,
        })
        .to(
          ".down-side",
          {
            clipPath: `inset(100% 0 0 0)`,
            duration: 0.5,
          },
          "<"
        );
    },
    { dependencies: [pathname], scope: ref }
  );

  return (
    <div className="fixed inset-0  z-[99]  pointer-events-none" ref={ref}>
      <div
        className="up-side absolute w-full h-full bg-soft-white"
        style={{
          clipPath: `inset(0 0 47% 0)`,
        }}
      >
        <div className="relative mx-auto w-1/2 h-full ">
          <Image src="/imgs/logo.svg" fill alt="nitro" />
        </div>
      </div>
      <div
        className="down-side absolute w-full h-full bg-soft-white "
        style={{
          clipPath: `inset(53% 0 0 0)`,
        }}
      >
        <div className="relative mx-auto w-1/2 h-full ">
          <Image src="/imgs/logo.svg" fill alt="nitro" />
        </div>
      </div>
      <div className="cutter absolute top-[53%]  inset-x-0 bg-secondary-orange  h-[1px] -translate-y-1/2 " />
    </div>
  );
}
