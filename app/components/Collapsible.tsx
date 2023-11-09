"use client";
import { ReactNode, useState } from "react";
import { DoubleArrowUpIcon, DoubleArrowDownIcon } from "@radix-ui/react-icons";

interface Props {
  children: ReactNode;
  title?: string;
  className?: string;
}

const Collapsible = ({ children, title, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`mt-2 bg-base-200 ${className}`}>
        <p>{title}</p>
        <div className="text-center">
          <button className="btn btn-sm" onClick={handleToggle}>
            {!isOpen ? <DoubleArrowUpIcon /> : <DoubleArrowDownIcon />}
          </button>
        </div>
        <div>{isOpen && <div className="px-4 pb-2">{children}</div>}</div>
      </div>
    </>
  );
};

export default Collapsible;
