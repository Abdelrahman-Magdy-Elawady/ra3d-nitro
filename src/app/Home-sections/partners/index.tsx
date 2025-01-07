import Header from "./Header";
import PartnersLogos from "./partners-logos";
import SectionContainer from "@/components/section-container";
export default function Partners() {
  return (
    <SectionContainer className="py-16 px-8 mx-auto space-y-8 rounded-[20px]">
      <Header />
      <PartnersLogos />
    </SectionContainer>
  );
}
