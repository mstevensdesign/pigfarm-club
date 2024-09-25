import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex h-[calc(100vh-74px)] w-screen flex-col items-center justify-center bg-yellow-400">
        <Image
          className="transition-all hover:scale-125"
          src="/taco-smile.png"
          alt="Taco Placeholder"
          width={180}
          height={37}
          priority
        />
        <h2 className="text-3xl font-bold text-green-500">PigFarm Club</h2>
      </div>
    </>
  );
}
