import { cn } from "@/utils/cn";
interface propType {
  className?: string;
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  animated?: boolean;
}

export default function Button({
  className,
  children,
  type = "button",
  animated = false,
}: propType) {
  return (
    <button
      className={cn(
        "overflow-hidden rounded-full font-medium capitalize relative isolate group/button",
        "py-2 px-4 2xl:px-8",
        "text-[calc(13px+(20-13)*((clamp(390px,100vw,1512px)-390px)/(1512-390)))]",
        "duration-500 ease-in-out",
        {
          "support-hover:hover:shadow-sm support-hover:hover:shadow-black":
            animated,
        },
        className
      )}
      type={type}
    >
      {children}
      {animated && (
        <div
          className={cn(
            "absolute skew-x-[30deg] h-[150%] w-0 top-0 left-0 -z-10  duration-500 bg-inherit mix-blend-multiply",
            {
              "support-hover:group-hover/button:w-[150%]": animated,
            }
          )}
        />
      )}
    </button>
  );
}
