import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`p-6 w-screen md:w-5/6 mx-auto md:mt-8 mb-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
