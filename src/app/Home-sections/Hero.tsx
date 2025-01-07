import SectionContainer from "@/components/section-container";
import Button from "@/components/button";
import Image from "next/image";
import SpecialWord from "@/components/special-word";

export default function Hero() {
  return (
    <SectionContainer className="flex flex-col gap-8 lg:flex-row md:justify-between items-center 2xl:py-32">
      <div className="w-full flex flex-col gap-8 items-start lg:w-[572px]">
        <h1 className="font-semibold text-[calc(31px+(49-31)*((clamp(390px,100vw,1512px)-390px)/(1512-390)))]">
          <SpecialWord className="text-secondary-orange">Nitros</SpecialWord>
          platform gets you shipping carriers at the{" "}
          <SpecialWord className="text-secondary-orange">best</SpecialWord>
          <SpecialWord className="text-secondary-orange">prices</SpecialWord>
        </h1>
        <p className="text-[calc(16px+(20-16)*((clamp(390px,100vw,1512px)-390px)/(1512-390)))]">
          Link your e-store with nitros with few steps to ship from you door to
          client&apos;s door
        </p>
        <Button className="bg-secondary-orange text-white" animated>
          start now
        </Button>
      </div>

      <Image
        src="/imgs/hero-img.svg"
        alt=""
        unoptimized
        priority={true}
        sizes="100vw"
        className="w-full h-auto lg:w-auto lg:h-[350px] xl:h-[400px] "
        width={350}
        height={213}
      />
    </SectionContainer>
  );
}
