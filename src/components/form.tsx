import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LeadForm() {
  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Escolha seu fornecedor</CardTitle>
        <CardDescription>
          Descubra qual empresa pode te ajudar a economizar:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Consumo de energia mensal</Label>
            <Input id="consumo" type="number" placeholder="3000 kWh" required />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#00DF7C] hover:bg-green-700"
          >
            Pesquisar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
