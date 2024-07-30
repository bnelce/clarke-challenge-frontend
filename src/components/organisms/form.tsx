import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { useFormAction, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  consumo: z
    .number({ invalid_type_error: "Consumo obrigatório" })
    .min(1, { message: "Consumo obrigatório" }),
});

type FormValues = z.infer<typeof formSchema>;

export function LeadForm() {
  const navigate = useNavigate();

  const form = useFormAction<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consumo: 0,
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      // TODO: call api to get data

      navigate("/suppliers");
    } catch (error) {
      console.log("[ERROR_ON_SUBMIT]", error);
    }
  }

  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Escolha seu fornecedor</CardTitle>
        <CardDescription>
          Descubra qual empresa pode te ajudar a economizar:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="consumo">Consumo de energia mensal</Label>
            <Input
              id="consumo"
              type="number"
              placeholder="3000 kWh"
              {...register("consumo")}
              className={`p-2 border rounded ${
                errors.consumo ? "border-red-500" : ""
              }`}
            />
            {errors.consumo && (
              <p className="text-red-500">{errors.consumo.message}</p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-[#00DF7C] hover:bg-green-700"
          >
            Pesquisar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
