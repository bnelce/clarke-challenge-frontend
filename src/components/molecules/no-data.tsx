import { useNavigate } from "react-router-dom";
import { Button } from "../atoms/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../atoms/card";

export function NoData() {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fornecedores</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center text-foreground">
            Não possível encontrar nenhum fornecedor que se adeque a seu consumo
            de energia.
          </div>
          <Button
            className="bg-[#00DF7C] hover:bg-green-700"
            type="button"
            onClick={() => navigate("/")}
          >
            Voltar ao início
          </Button>
        </div>
      </CardContent>
      <CardFooter className="justify-between"></CardFooter>
    </Card>
  );
}
