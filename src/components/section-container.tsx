import { cn } from "@/utils/cn";

interface propType {
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({ className, children }: propType) {
  return (
    <section className={cn("py-8 2xl:py-16 2xl:px-8 ", className)}>
      {children}
    </section>
  );
}
