"use client";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color = "info" }: ButtonProps) => {
  return (
    <button onClick={onClick} className="btn btn-circle">
      {children}
    </button>
  );
};

export default Button;
