"use client";
import { ReactNode } from "react";
import { DoubleArrowUpIcon, DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { toggleCollapsible } from "../redux/features/collapsibleSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

interface Props {
  children: ReactNode;
  title?: string;
  className?: string;
}

const Collapsible = ({ children, title, className }: Props) => {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = useAppSelector((state) => state.collapsibleReducer.isOpen);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    // setIsOpen(!isOpen);
    dispatch(toggleCollapsible());
  };

  // TODO: create hotkey combo for opening contact section
  // fetch the initial state 
  // dispatch actions for state of the collapsible

  return (
    <>
      <div className={`mt-2 bg-base-200 ${className}`} tabIndex={0}>
        <p>{title}</p>
        <div className="lg:tooltip" data-tip="Get in Touch">
          <button className="btn btn-sm btn-circle" onClick={handleToggle}>
            {!isOpen ? <DoubleArrowUpIcon /> : <DoubleArrowDownIcon />}
          </button>
        </div>
        <div>{isOpen && <div className="px-4 pb-2">{children}</div>}</div>
      </div>
    </>
  );
};

export default Collapsible;
