import SectionContainer from "@/components/section-container";
import ShippingForm from "./shipping-form";
import Header from "./header";
import ShippingResult from "./shipping-result";
import Image from "next/image";

export default function RateCalculator() {
  return (
    <SectionContainer className="bg-soft-white rounded-[20px] py-8 px-4 flex flex-col gap-8 2xl:py-16 2xl:px-8 relative isolate ">
      <div className="absolute w-[225px] h-[213px] 2xl:w-[777px] 2xl:h-[733px] top-0 left-0  backdrop-blur-[100px] 2xl:backdrop-blur-[200px] -z-10">
        <Image src="/imgs/blur-layer.svg" alt="" fill />
      </div>
      <Header />
      <ShippingForm />
      <ShippingResult />
    </SectionContainer>
  );
}
