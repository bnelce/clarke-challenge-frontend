import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/table";
import { SupplierTableRow } from "./supplier-table-row";
import { ScrollArea } from "../atoms/scroll-area";
import { Button } from "../atoms/button";
import { useNavigate } from "react-router-dom";
import { Supplier } from "@/@types/Supplier";

type SupplierTableProps = {
  suppliers: Supplier[];
};

export default function SupplierTable({ suppliers }: SupplierTableProps) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fornecedores</CardTitle>
        <CardDescription>
          Abaixo segue a lista com os melhores fornecedores para o seu negócio.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Empresa</TableHead>
                <TableHead>UF</TableHead>
                <TableHead className="hidden md:table-cell">
                  Custo/kWh
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Limite Mínimo
                </TableHead>
                <TableHead className="hidden md:table-cell">Clientes</TableHead>
                <TableHead className="hidden md:table-cell">
                  Avaliação
                </TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {suppliers.map((supplier) => (
                <SupplierTableRow key={supplier.id} supplier={supplier} />
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="text-xs text-muted-foreground">
          Total de <strong>{suppliers?.length ? suppliers.length : 0}</strong>{" "}
          {suppliers?.length > 1 ? "fornecedores" : "fornecedor"}
        </div>
        <Button
          className="bg-[#00DF7C] hover:bg-green-700"
          type="button"
          onClick={() => navigate("/")}
        >
          Voltar
        </Button>
      </CardFooter>
    </Card>
  );
}
