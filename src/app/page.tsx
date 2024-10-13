import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex h-[calc(100vh-74px*2)] w-screen flex-col items-center justify-center">
        <Image
          className="transition-all hover:scale-125"
          src="/taco-smile.png"
          alt="Taco Placeholder"
          width={180}
          height={37}
          priority
        />
        <h2 className="">PigFarm Club</h2>
      </div>
    </div>
  );
}
