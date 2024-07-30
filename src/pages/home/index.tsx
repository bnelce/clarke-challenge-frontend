import Header from "@/components/organisms/header";
import { HeroContent } from "@/components/organisms/hero-content";

function Home() {
  return (
    <>
      <Header />
      <HeroContent />
      <footer className="bg-white text-foreground text-center py-4">
        &copy; 2024 Clarke Energia.
      </footer>
    </>
  );
}

export default Home;
