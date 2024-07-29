import { LeadForm } from "./components/form";
import Header from "./components/header";
import EolicaBG from "@/assets/energia-eolica00.webp";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Header />
      </div>
      <main
        className="flex-1 bg-cover bg-center  min-w-[400px]"
        style={{ backgroundImage: `url(${EolicaBG})` }}
      >
        <div className="flex-1 flex flex-row h-screen bg-black bg-opacity-50">
          <div className="container flex flex-col lg:flex-row gap-4 mx-auto items-center justify-between p-6 lg:p-16">
            <div className="h-full flex flex-col justify-center max-w-lg mx-auto lg:mx-0">
              <h2 className="text-white text-lg">#ofuturoélivre</h2>
              <h1 className="text-white text-3xl lg:text-5xl font-bold my-4">
                Economize até 40% na conta de luz da sua empresa sem precisar
                investir
              </h1>
              <p className="text-white text-lg">
                Se o seu negócio gasta mais de R$ 10 mil por mês com{" "}
                <strong>energia</strong>, a Clarke pode te ajudar a{" "}
                <strong>economizar</strong> com o{" "}
                <strong>Mercado Livre de Energia</strong>.
              </p>
            </div>

            <div className="mx-auto lg:mx-0 max-w-sm w-full mt-6 lg:mt-0">
              <div>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white text-foreground text-center py-4">
        &copy; 2024 Clarke Energia. Todos os direitos reservados.
      </footer>
    </>
  );
}

export default App;
