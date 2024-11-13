import Image from "next/image";
import { londrina } from "./utils/fonts";

export default function Home() {
  return (
    <Container>
      <Logo />
      <Title />
    </Container>
  );
}

import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex h-[calc(100vh-74px*3)] w-screen flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
};

const Logo = () => {
  return (
    <>
      <Image
        className="transition-all hover:scale-125"
        src="/taco-bon.svg"
        alt="Taco Placeholder"
        width={270}
        height={0}
        priority
      />
    </>
  );
};

const Title = () => {
  return (
    <>
      <h2 className={`text-h4 ${londrina.className} -mt-16 text-green`}>
        PigFarm Club
      </h2>
    </>
  );
};
