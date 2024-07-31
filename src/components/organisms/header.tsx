import { HeaderLogo } from "../molecules/logo";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a
            className="flex flex-row items-center gap-2 text-[#00DF7C] font-bold text-xl lg:text-2xl"
            href="/"
          >
            {" "}
            <HeaderLogo /> Clarke Energia Challenge
          </a>
          <a
            href="https://clarke.com.br/seja-cliente/"
            target="_blank"
            className="bg-[#00DF7C] hover:bg-green-700 text-white py-2 px-4 rounded hidden lg:block"
          >
            Seja nosso cliente
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
