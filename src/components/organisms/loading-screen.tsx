import { m } from "framer-motion";
import logo from "@/assets/clarke-logo.svg";
import { FC } from "react";

interface LoadingScreenProps {
  isDashboard?: boolean;
}

const LoadingScreen: FC<LoadingScreenProps> = ({ isDashboard }) => {
  return (
    <>
      {/* <ProgressBar /> */}

      {isDashboard && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[99999]">
          <m.div
            animate={{
              scale: [1, 0.9, 0.9, 1, 1],
              opacity: [1, 0.48, 0.48, 1, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeatDelay: 1,
              repeat: Infinity,
            }}
            className="relative"
          >
            <img src={logo} alt="Logo da Empresa" className="w-16 h-16" />
          </m.div>

          <m.div
            animate={{
              scale: [1.2, 1, 1, 1.2, 1.2],
              rotate: [270, 0, 0, 270, 270],
              opacity: [0.25, 1, 1, 1, 0.25],
              borderRadius: ["25%", "25%", "50%", "50%", "25%"],
            }}
            transition={{ ease: "linear", duration: 3.2, repeat: Infinity }}
            className="absolute w-24 h-24 rounded-[25%] border-[3px] border-primary-dark/24"
          />

          <m.div
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 270, 270, 0, 0],
              opacity: [1, 0.25, 0.25, 0.25, 1],
              borderRadius: ["25%", "25%", "50%", "50%", "25%"],
            }}
            transition={{
              ease: "linear",
              duration: 3.2,
              repeat: Infinity,
            }}
            className="absolute w-28 h-28 rounded-[25%] border-[8px] border-primary-dark/24"
          />
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
