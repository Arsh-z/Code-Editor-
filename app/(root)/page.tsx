import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="z-20 flex flex-col items-center justify-start">
      <div className="flex flex-col justify-center items-center my">
        <Image src={"/hero.svg"} alt="Hero-Section" height={500} width={500} />

        <h1 className="z-20 text-6xl mt-5 font-extrabold text-center">
          Vibe Code With Intelligence
        </h1>
      </div>
      ```tsx
      <p className="mx-auto mt-2 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
        VibeCode Editor is a powerful and intelligent code editor designed to
        elevate your coding experience with advanced features and seamless AI
        integration. It is designed to help you write, debug, and optimize your
        code efficiently.
      </p>
      <Link href={"/dashboard"}>
        <Button variant={"brand"} className="mb-4" size={"lg"}>
          Get Started
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Button>
      </Link>
    </div>
  );
}
