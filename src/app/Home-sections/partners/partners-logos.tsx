import Image from "next/image";
const partners = [
  {
    name: "spl",
    logoSrc: "/imgs/spl.svg",
  },
  {
    name: "aramex",
    logoSrc: "/imgs/aramex.svg",
  },
  {
    name: "dhl",
    logoSrc: "/imgs/dhl.svg",
  },
  {
    name: "j&t express",
    logoSrc: "/imgs/jt-express.svg",
  },
  {
    name: "kwickbox",
    logoSrc: "/imgs/kwick-box.svg",
  },
];
export default function PartnersLogos() {
  return (
    <div className="py-4 2xl:py-8 flex flex-row flex-wrap gap-8 2xl:gap-16 justify-center ">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="block relative w-[60px] aspect-square"
        >
          <Image src={partner.logoSrc} alt={partner.name} fill />
        </div>
      ))}
    </div>
  );
}
