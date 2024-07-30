import EolicaBG from "@/assets/energia-eolica00.webp";
import Header from "@/components/header";

function SuppliersList() {
  return (
    <>
      <div className="flex flex-col">
        <Header />
      </div>
      <main
        className="flex bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${EolicaBG})` }}
      >
        Supplier list
      </main>
      <footer className="bg-white text-foreground text-center py-4">
        &copy; 2024 Clarke Energia. Todos os direitos reservados.
      </footer>
    </>
  );
}

export default SuppliersList;
