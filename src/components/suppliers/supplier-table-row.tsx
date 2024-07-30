import { Badge } from "../ui/badge";
import { TableCell, TableRow } from "../ui/table";
import { Rating } from "./ratting";
import SupplierLogo from "./supplier-logo";
import { Supplier } from "@/@types/Supplier";
import { fBRLCurrency } from "@/lib/formatNumber";

type SupplierTableRowProps = {
  supplier: Supplier;
};

export const SupplierTableRow = ({ supplier }: SupplierTableRowProps) => {
  const { name, logo, state, costPerKwh, minKwh, totalClients, avgRating } =
    supplier;
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <SupplierLogo name={name} logo={logo} />
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>
        <Badge variant="outline">{state}</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {fBRLCurrency(costPerKwh)}
      </TableCell>
      <TableCell className="hidden md:table-cell">{minKwh} kWh</TableCell>
      <TableCell className="hidden md:table-cell">{totalClients} </TableCell>
      <TableCell className="hidden md:table-cell">
        <div className="flex items-center gap-1">
          <Rating value={avgRating} /> {avgRating}
        </div>
      </TableCell>
    </TableRow>
  );
};
