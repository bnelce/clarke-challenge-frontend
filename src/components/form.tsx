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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function LeadForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Calcule seu desconto</CardTitle>
        <CardDescription>
          Descubra se sua empresa já pode começar a economizar:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Consumo de energia mensal</Label>
            <Input id="consumo" type="number" placeholder="3000 kWh" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="energyUsage">Consumo de Energia</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Enel</SelectItem>
                <SelectItem value="dark">Coelba</SelectItem>
                <SelectItem value="system">Light</SelectItem>
                <SelectItem value="dasd">Energisa</SelectItem>
                <SelectItem value="adsa">Cemig</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Calcular
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
