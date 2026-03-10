

import hero from "@/assets/hero.png";
import Navbar from "@/components/custom/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      {/* background Image */}
      <Image src={hero} alt="Hero Image" fill priority className="object-cover" />
      <Navbar></Navbar>
    </div>
  );
}
