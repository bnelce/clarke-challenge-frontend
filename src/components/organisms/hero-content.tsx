import { LeadForm } from "./form";
import { HeroText } from "../molecules/hero-text";
import EolicaBG from "@/assets/energia-eolica00.webp";

export const HeroContent = () => {
  return (
    <main
      className="flex bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${EolicaBG})` }}
    >
      <div className="flex flex-row w-full bg-black bg-opacity-50">
        <div className="container flex flex-col lg:flex-row items-center gap-16  p-6 lg:p-16 ">
          <HeroText />
          <LeadForm />
        </div>
      </div>
    </main>
  );
};
