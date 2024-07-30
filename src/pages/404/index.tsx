import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/clarke-logo.svg";

const NotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <img src={logo} alt="Logo da Empresa" className="w-32 mb-4" />
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">Página não encontrada</p>
      <div className="text-lg mb-8">
        Ops! Parece que você se perdeu por aqui. Que tal voltar para a página
        anterior?
      </div>
      <Button
        className="bg-[#00DF7C] hover:bg-green-700"
        onClick={handleRedirect}
      >
        Voltar para a página inicial
      </Button>
    </div>
  );
};

export default NotFound;
