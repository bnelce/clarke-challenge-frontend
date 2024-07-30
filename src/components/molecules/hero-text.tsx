// HeroText.tsx
import React from "react";
import { Text } from "../atoms/text";

export const HeroText: React.FC = () => (
  <div className="flex flex-col justify-center max-w-lg lg:mx-0">
    <h2 className=" text-white text-lg">#ofuturoélivre</h2>
    <h1 className="text-white text-3xl lg:text-5xl font-bold my-4">
      Economize até 40% na conta de luz da sua empresa sem precisar investir
    </h1>
    <Text className="text-lg">
      Se o seu negócio gasta mais de R$ 10 mil por mês com{" "}
      <strong>energia</strong>, a Clarke pode te ajudar a{" "}
      <strong>economizar</strong> com o{" "}
      <strong>Mercado Livre de Energia</strong>.
    </Text>
  </div>
);
