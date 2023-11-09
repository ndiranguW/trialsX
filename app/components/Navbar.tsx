"use client";
import Link from "next/link";
import { ThemeToggle } from ".";
import {
  HomeIcon,
  Pencil2Icon,
  PaperPlaneIcon,
  CrumpledPaperIcon,
} from "@radix-ui/react-icons";

interface navProps {
  name: string;
  path: string;
  icon?: any;
}
// all links
const navData: navProps[] = [
  { name: ":", path: "/", icon: <HomeIcon /> },
  { name: "notes", path: "/notes", icon: <Pencil2Icon /> },
  { name: "projects", path: "/projects", icon: <CrumpledPaperIcon /> },
  { name: "contact", path: "/#", icon: <PaperPlaneIcon /> },
];

const Navbar = () => {
  return (
    <>
      <div className="drawer sticky top-0">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 justify-between lg:justify-normal px-2 mx-2 font-bold text-2xl">
              <Link href="/" className="lg:pe-8">
                billy_dev
              </Link>
              <ThemeToggle />
            </div>
            <div className="flex-none hidden lg:block ">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navData.map((link, index) => (
                  <li key={index}>
                    <Link href={link.path}>
                      {link.icon}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 rounded mt-16 h-1/3 bg-base-200 lg:hidden">
            {/* Sidebar content here */}
            {navData.map((link, index) => (
              <li key={index} className="">
                <Link href={link.path}>
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
            <div className=" ps-4 absolute bottom-0">
              &copy;{new Date().getFullYear()}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
