import { HeaderLogo } from "./components/clarke-logo";
import Nav from "./components/nav";
import EolicaBG from "@/assets/energia-eolica00.webp";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <header className="bg-white shadow">
          <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="flex flex-row items-center gap-2 text-[#00DF7C] font-bold text-xl">
              <HeaderLogo /> Clarke Energia Challenge
            </div>
            <Nav />
            <a href="#" className="bg-[#00DF7C]  text-white py-2 px-4 rounded">
              Seja nosso cliente
            </a>
          </nav>
        </header>
      </div>
      <main className="flex-1">
        <div
          className="flex-1 flex flex-row bg-cover bg-center bg-no-repeat h-screen"
          style={{ backgroundImage: `url(${EolicaBG})` }}
        >
          <div className="h-full flex flex-col justify-center bg-black bg-opacity-50 p-6 lg:p-16">
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

          <div className="bg-white lg:w-1/2 p-6 lg:p-16 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Descubra se sua empresa já pode começar a economizar:
            </h3>
            <div>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">
                    Qual o seu nome?
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">
                    Qual o seu email de trabalho?*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700">
                    Qual o seu número de telefone?*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="cnpj" className="block text-gray-700">
                    Qual o CNPJ da empresa?*
                  </label>
                  <input
                    type="text"
                    id="cnpj"
                    name="cnpj"
                    className="w-full px-3 py-2 border rounded"
                    pattern="[0-9]+"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="monthly-expense"
                    className="block text-gray-700"
                  >
                    Qual o valor médio da conta de luz da sua empresa?*
                  </label>
                  <input
                    type="text"
                    id="monthly-expense"
                    name="monthly-expense"
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="mr-2"
                  />
                  <label htmlFor="consent" className="text-gray-700">
                    Eu concordo em compartilhar minhas informações e receber
                    comunicações da Clarke Energia.
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-4 rounded w-full"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        {/* Conteúdo do rodapé */}
        &copy; 2024 Clarke Energia. Todos os direitos reservados.
      </footer>
    </>
  );
}

export default App;
