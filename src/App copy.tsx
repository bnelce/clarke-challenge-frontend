import React from "react";
import Nav from "./Nav";

const ClarkeEnergiaPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-green-600 font-bold text-xl">clarkeenergia</div>
          <Nav />
          <a href="#" className="bg-green-600 text-white py-2 px-4 rounded">
            Seja nosso cliente
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div
          className="relative w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">
              <div className="text-white lg:w-1/2 p-6 lg:p-16">
                <h2 className="text-lg">#ofuturoélivre</h2>
                <h1 className="text-3xl lg:text-5xl font-bold my-4">
                  Economize até 40% na conta de luz da sua empresa sem precisar
                  investir
                </h1>
                <p className="text-lg">
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
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; 2024 Clarke Energia. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default ClarkeEnergiaPage;
