import Image from "next/image";
import { Londrina_Solid } from "next/font/google";
const londrina = Londrina_Solid({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  return (
    <div>
      <div className="flex h-[calc(100vh-74px*3)] w-screen flex-col items-center justify-center">
        <Image
          className="transition-all hover:scale-125"
          src="/taco-bon.svg"
          alt="Taco Placeholder"
          width={270}
          height={0}
          priority
        />
        <h2 className={`text-h4 ${londrina.className} text-green -mt-16`}>
          PigFarm Club
        </h2>
        {/* <Image
          src={"/arrow-down-circle.svg"}
          alt="down arrow"
          width={42}
          height={0}
        /> */}
      </div>
    </div>
  );
}
