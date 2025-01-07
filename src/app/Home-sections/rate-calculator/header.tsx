export default function Header() {
  return (
    <header className="text-center space-y-4">
      <h2 className="capitalize text-[calc(25px+(39-25)*((clamp(390px,100vw,1512px)-390px)/(1512-390)))]">
        rates calculator
      </h2>
      <p className="first-letter:uppercase text-[calc(13px+(20-13)*((clamp(390px,100vw,1512px)-390px)/(1512-390)))]">
        Calculate shipping rates easily and compare prices between shipping
        companies
      </p>
    </header>
  );
}
