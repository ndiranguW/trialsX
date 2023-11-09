import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`min-h-screen p-7 mx-auto container ${className}`}>{children}</div>;
};

export default Container;
