import EolicaBG from "@/assets/energia-eolica00.webp";
import { LeadForm } from "@/components/form";
import Header from "@/components/header";
import { HeroText } from "@/components/hero-text";

function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Header />
      </div>
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
      <footer className="bg-white text-foreground text-center py-4">
        &copy; 2024 Clarke Energia.
      </footer>
    </>
  );
}

export default Home;
