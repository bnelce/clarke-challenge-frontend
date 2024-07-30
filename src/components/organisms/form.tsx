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
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Define o esquema de validação com Yup
const schema = yup.object().shape({
  consumo: yup
    .number()
    .min(1, "O valor deve ser maior que zero")
    .required("Consumo de energia é obrigatório"),
});

// Define os tipos para os dados do formulário
type FormValues = {
  consumo: number;
};

export function LeadForm() {
  const navigate = useNavigate();

  // Configura o useForm com o esquema de validação
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  // Função para lidar com a submissão do formulário
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    navigate("/suppliers");
  };

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
