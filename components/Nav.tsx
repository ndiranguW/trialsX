"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ThemeToggle } from ".";
import {
  HomeIcon,
  MixIcon,
  Pencil2Icon,
  Cross1Icon,
  TextAlignLeftIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";

type NavProps = {
  name: string;
  path: string;
  icon?: any;
};

const navLinks: NavProps[] = [
  { name: "/", path: "/", icon: <HomeIcon /> },
  { name: "projects", path: "/projects", icon: <MixIcon /> },
  { name: "notes", path: "/notes", icon: <Pencil2Icon /> },
];

const Nav = () => {
  const [showDropMenu, setShowDropMenu] = useState(false);

  // change state
  const handleClick = () => {
    setShowDropMenu(!showDropMenu);
  };

  return (
    <div className="navbar flex sticky top-2 bg-base-300 shadow-xl w-11/12 md:w-5/6 mx-auto rounded-lg">
      <div className="ps-2 md:ps-3 font-bold text-md md:text-2xl flex-1">
        <Link href="/" className="pe-3">
          billy_dev
        </Link>
        <ThemeToggle />
      </div>

      <div className="flex-none hidden lg:block right-0">
        <ul className="menu menu-horizontal px-1 w-fit">
          {navLinks.map((link, index) => (
            <motion.li key={index} className="px-1" whileHover={{ scale: 1.1 }}>
              <Link href={link.path}>
                {link.icon}
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* drop menu for mobile screens */}
      <div className="flex-none navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={handleClick}
          >
            {!showDropMenu ? (
              <TextAlignLeftIcon width={20} height={20} />
            ) : (
              <Cross1Icon width={20} height={20} />
            )}
          </div>

          {showDropMenu && (
            <motion.div
              animate={{ y: 5 }}
              transition={{ ease: "linear" }}
              exit={{}}
            >
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-1 p-2 shadow-md font-semibold bg-base-200 rounded w-52"
              >
                {navLinks.map((link, index) => (
                  <motion.li key={index} whileTap={{ scale: 0.6 }}>
                    <Link href={link.path} onClick={handleClick}>
                      {link.icon}
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                <div className="ps-4 mt-4 text-base-content">
                  &copy;{new Date().getFullYear()}
                </div>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
