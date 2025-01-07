import Hero from "./Home-sections/Hero";
import RateCalculator from "./Home-sections/rate-calculator";
import Partners from "./Home-sections/partners";
export default function Home() {
  return (
    <main className="space-y-[--page-gap]">
      <Hero />
      <RateCalculator />
      <Partners />
    </main>
  );
}
