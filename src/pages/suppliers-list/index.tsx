import EolicaBG from "@/assets/energia-eolica00.webp";
import Header from "@/components/organisms/header";
import LoadingScreen from "@/components/organisms/loading-screen";
import SupplierTable from "@/components/organisms/supplier-table";
import { useSelector } from "@/redux/store";

function SuppliersList() {
  const { data, error, loading } = useSelector((state) => state.supplier);

  if (loading) {
    return <LoadingScreen isDashboard={loading} />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log("data", data);

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
          {data.length > 0 ? (
            <SupplierTable suppliers={data} />
          ) : (
            <div>no data</div>
          )}
        </div>
      </main>
      <footer className="bg-white text-foreground text-center py-4">
        &copy; 2024 Clarke Energia.
      </footer>
    </>
  );
}

export default SuppliersList;
