import { ReactNode } from "react";
import { BeTheHeroPageStyles } from "./styles";

interface IRootProps {
  children: ReactNode;
}

export function RootComponent({ children }: IRootProps) {
  return (
    <>
      <BeTheHeroPageStyles />
      {children}
    </>
  );
}
