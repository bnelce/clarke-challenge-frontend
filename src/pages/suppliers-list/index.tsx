import EolicaBG from "@/assets/energia-eolica00.webp";
import { Footer } from "@/components/molecules/footer";
import { NoData } from "@/components/molecules/no-data";
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
          {data.length > 0 ? <SupplierTable suppliers={data} /> : <NoData />}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SuppliersList;
