import { useState } from "react";
import Placeholder from "@/assets/placeholder.svg";

interface SupplierLogoProps {
  name: string;
  logo: string;
}

function SupplierLogo({ name, logo }: SupplierLogoProps) {
  const [imgSrc, setImgSrc] = useState<string>(logo);

  const handleError = () => {
    setImgSrc(Placeholder);
  };

  return (
    <img
      alt={name}
      className="aspect-square rounded-md object-cover"
      src={imgSrc}
      width="64"
      height="64"
      onError={handleError}
    />
  );
}

export default SupplierLogo;
