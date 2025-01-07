import Image from "next/image";
export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-var(--header-height)-2*var(--page-y-padding)-var(--page-gap))] flex flex-col justify-center items-center text-center capitalize font-black 2xl:text-5xl lg:text-3xl text-xl px-4 gap-4">
      <div className="relative 2xl:w-96 lg:w-80  md:w-72 w-60 aspect-square">
        <Image
          src="/imgs/construction-page.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-screen-lg">
        this page is under construction please come later
      </div>
    </main>
  );
}
