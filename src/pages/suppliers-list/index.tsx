import EolicaBG from "@/assets/energia-eolica00.webp";
import Header from "@/components/header";
import SupplierTable from "@/components/suppliers/supplier-table";

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
        <div className="flex flex-row w-full bg-black bg-opacity-50 items-center justify-center py-6">
          <SupplierTable />
        </div>
      </main>
      <footer className="bg-white text-foreground text-center py-4">
        &copy; 2024 Clarke Energia.
      </footer>
    </>
  );
}

export default SuppliersList;
