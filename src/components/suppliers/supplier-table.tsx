import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { _suppliers } from "@/_mock/_suppliers";
import { SupplierTableRow } from "./supplier-table-row";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function SupplierTable() {
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
              {_suppliers.map((supplier) => (
                <SupplierTableRow key={supplier.id} supplier={supplier} />
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="text-xs text-muted-foreground">
          Total de <strong>{_suppliers?.length ? _suppliers.length : 0}</strong>{" "}
          {_suppliers?.length > 1 ? "fornecedores" : "fornecedor"}
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
