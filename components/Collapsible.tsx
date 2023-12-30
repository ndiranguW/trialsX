"use client";
import { ReactNode } from "react";
import { DoubleArrowUpIcon, DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { toggleCollapsible } from "../app/redux/features/collapsibleSlice";
import { useAppDispatch, useAppSelector } from "../app/redux/hooks";

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

  // fetch the initial state
  // dispatch actions for state of the collapsible

  return (
    <>
      <div
        className={`mt-2 bg-base-200 ${className} shadow-[0px_-1px_19px_0px_rgb(0,0,0,0.4)]`}
      >
        <p>{title}</p>
        <div className="lg:tooltip" data-tip="Contact Me!">
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
