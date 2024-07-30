import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Input } from "@/components/atoms/input";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  consumo: z
    .number({ required_error: "Consumo obrigatório" })
    .min(1, { message: "Valor inválido" }),
});

export function LeadForm() {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consumo: 0,
    },
  });

  async function onSubmit() {
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="consumo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Consumo de energia mensal</FormLabel>
                  <FormControl>
                    <Input placeholder="3000 kWh" type="number" {...field} />
                  </FormControl>
                  <FormDescription>
                    Insira sua média de consumo de energia.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-[#00DF7C] hover:bg-green-700"
              type="submit"
            >
              Pesquisar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
