export function fBRLCurrency(valor: number | string): string {
  const numero = typeof valor === "string" ? parseFloat(valor) : valor;

  if (isNaN(numero)) {
    throw new Error("O valor fornecido não é um número válido.");
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numero);
}
