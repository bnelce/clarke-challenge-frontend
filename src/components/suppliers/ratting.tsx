import React from "react";
import { Icon } from "@iconify/react";

interface RatingProps {
  value: number;
  max?: number;
}

export const Rating: React.FC<RatingProps> = ({ value, max = 5 }) => {
  const fullStars = Math.floor(value);
  const halfStar = value % 1 !== 0;
  const emptyStars = max - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }).map((_, index) => (
        <Icon icon="mdi:star" key={index} className="text-yellow-500" />
      ))}
      {halfStar && <Icon icon="mdi:star-half" className="text-yellow-500" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Icon icon="mdi:star-outline" key={index} className="text-yellow-500" />
      ))}
    </div>
  );
};
