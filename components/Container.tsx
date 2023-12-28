import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`p-7 md:w-4/5 mx-auto container ${className}`}>{children}</div>;
};

export default Container;
