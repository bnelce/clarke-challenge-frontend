import ClarkeLogo from "@/assets/clarke-logo.svg";

export function HeaderLogo() {
  return (
    <div className="flex items-center justify-center">
      <img className="h-10 w-auto" src={ClarkeLogo} alt="Clarke Logo" />
    </div>
  );
}

export default ClarkeLogo;
