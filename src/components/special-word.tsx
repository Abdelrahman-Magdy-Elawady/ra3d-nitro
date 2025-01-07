import { cn } from "@/utils/cn";
interface propsType {
  className: string;
  children: React.ReactNode;
  [key: string]: any;
}
export default function SpecialWord({
  className,
  children,
  ...rest
}: propsType) {
  return (
    <div
      className={cn(className, "inline-block relative isolate pr-2")}
      {...rest}
    >
      <span
        className="animate-progress text-[hsl(0,50%,100%,0.2)] "
        style={{
          backgroundImage: `linear-gradient(45deg,var(--primary) ,var(--secondary-orange))`,
          backgroundRepeat: "no-repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
      >
        {children}
      </span>
      <span className="absolute left-0  -z-10 pr-2">{children}</span>
    </div>
  );
}
