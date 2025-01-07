import DropDown from "@/components/drop-down";
import Image from "next/image";
import { cn } from "@/utils/cn";
/*-------fake courier data,i think it's an api response due to shipping locations selection ------------*/
const couriers = [
  {
    name: "spl",
    logo: "/imgs/spl.svg",
    rate: 13.75,
    deliveryTime: {
      from: 1,
      to: 3,
    },
    cod: true,
    handoffOptions: ["pickup & bramch", "drop-off"],
    deliveryOptions: ["pickup & bramch", "drop-off"],
  },
  {
    name: "aramex",
    logo: "/imgs/aramex.svg",
    rate: 13.75,
    deliveryTime: {
      from: 2,
      to: 3,
    },
    cod: true,
    handoffOptions: ["pickup & bramch", "drop-off"],
    deliveryOptions: ["pickup & bramch", "drop-off"],
  },
  ,
  {
    name: "j&t express",
    logo: "/imgs/jt-express.svg",
    rate: 13.75,
    deliveryTime: {
      from: 2,
      to: 3,
    },
    cod: false,
    handoffOptions: ["pickup & bramch", "drop-off"],
    deliveryOptions: ["pickup & bramch", "drop-off"],
  },
  {
    name: "dhl",
    logo: "/imgs/dhl.svg",
    rate: 13.75,
    deliveryTime: {
      from: 3,
      to: 5,
    },
    cod: false,
    handoffOptions: ["pickup & bramch", "drop-off"],
    deliveryOptions: ["pickup & bramch", "drop-off"],
  },
];

/*-------------------------------------------------------*/
export default function ShippingResult() {
  return (
    <div className="w-full rounded-[16px] border border-[#d8d8d8] bg-background overflow-hidden max-w-[450px] mx-auto">
      <header className="py-2 px-3 uppercase text-[#a0a0a0] font-semibold text-[10px]  flex justify-between ">
        <div className="py-2 px-[10px] ">courier</div>
        <div className="py-2 px-[10px] flex flex-row flex-nowrap items-center gap-1">
          <div>rate (sar)</div>
          <Image
            src="/imgs/exclamation-mark.svg"
            width={10}
            height={10}
            alt=""
          />
        </div>
        <div className="w-6 aspect-square" />
      </header>
      <div className="divide-y divide-y-backgroud">
        {couriers.map((courier) => (
          <DropDown
            key={courier?.name}
            title={
              <div className=" text-[13px] grid grid-cols-2 w-full py-2 px-[10px] h-[58px] items-center">
                <div className="flex flex-row gap-2 uppercase items-center">
                  <Image
                    src={courier?.logo || ""}
                    width={16}
                    height={16}
                    alt=""
                    className="rounded-[3px]"
                  />
                  <div>{courier?.name}</div>
                </div>
                <div className="text-center sm:text-start">{courier?.rate}</div>
              </div>
            }
            content={
              <div className="grid grid-cols-2 gap-4 py-3 px-4 bg-background odd:[&_>_*]:justify-self-start even:[&_>_*]:justify-self-end odd:[&_>_*]:text-start even:[&_>_*]:text-end ">
                <GridCell
                  title={"delivery time"}
                  content={
                    <div>
                      {courier?.deliveryTime.from}-{courier?.deliveryTime.to}{" "}
                      Days
                    </div>
                  }
                />
                <GridCell
                  title={"cod"}
                  content={
                    <Image
                      src={
                        courier?.cod
                          ? "/imgs/right-icon.svg"
                          : "/imgs/wrong-icon.svg"
                      }
                      width={24}
                      height={24}
                      alt="cod available"
                    />
                  }
                />
                <GridCell
                  title={"handoff options"}
                  content={courier?.handoffOptions.map((h) => (
                    <p key={h}>{h}</p>
                  ))}
                />
                <GridCell
                  title={"delivery options"}
                  content={courier?.handoffOptions.map((h) => (
                    <p key={h}>{h}</p>
                  ))}
                />
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}

//----------------------------------------
interface GridCellPropsType {
  title: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}
function GridCell({ title, content, className }: GridCellPropsType) {
  return (
    <div className={cn("space-y-[6px]", className)}>
      <div className="text-[#a0a0a0] text-[10px] uppercase font-semibold">
        {title}
      </div>
      <div className="text-[13px]">{content}</div>
    </div>
  );
}
