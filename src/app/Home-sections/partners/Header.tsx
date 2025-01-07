export default function Header() {
  return (
    <header className="space-y-4 text-center">
      <h2 className="text-[calc(25px+(39-25)*((clamp(390px,100vw,1512px)-390px)/(1512-390)))] capitalize">
        Our Trusted Shipping Partners
      </h2>
      <p className="text-[calc(13px+(20-13)*((clamp(390px,100vw,1512px)-390px)/(1512-390)))]">
        We work with industry-leading couriers to ensure reliable and efficient
        shipping for your business
      </p>
    </header>
  );
}
