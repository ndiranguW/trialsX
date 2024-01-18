"use client";
import { Container } from "@/components";
import Link from "next/link";
import styles from "./page.module.css";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

type socialLinksProps = {
  path: string;
  icon?: any;
};

const socialLinks: socialLinksProps[] = [
  {
    path: "https://github.com/Willbeckh",
    icon: <GitHubLogoIcon width={20} height={24} />,
  },
  {
    path: "https://linkedin.com/in/willbeckh-ndirangu",
    icon: <LinkedInLogoIcon width={20} height={24} />,
  },
];

export default function Home() {
  return (
    <>
      <Container>
        <div>
          <p className="text-sm">Hi, I&apos;m</p>
          <p className="text-2xl md:text-5xl font-bold">Willbeckh!</p>
          <p className="text-sm text-base-content lowercase font-extralight hidden md:block">
            Welcome to my corner of the web🕸️
          </p>

          <p className="text-2xl md:text-6xl font-bold mt-4 md:mt-8">
            I build products for the web.
          </p>
        </div>
        <div className="pt-4 md:w-4/5 ">
          <p className="font-thin text-base-content ">
            Specifically building back-end solutions && occasionally creating
            front-end experiences.
          </p>
        </div>

        <div className={`mt-16`}>
          <div>
            <div className="w-36 md:w-fit">
              <Link
                href="/projects"
                className={`uppercase font-semibold text-sm text-cyan-400  ${styles.bottomNav}`}
              >
                View Projects
              </Link>
            </div>

            {/* social icons */}
            <div className="w-24 text-xl text-base-content pt-8">
              <ul className="flex justify-between">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      target="_blank"
                      className="hover:text-cyan-400"
                    >
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      {/* background grid: top & bottom */}
      <div className="fixed top-0 -z-10">
        <div
          className={`${styles.grid} [mask-image:radial-gradient(ellipse_10%_60%_at_0%_0%,#f00_80%,transparent_100%)]`}
        ></div>
      </div>
      <div className="fixed bottom-0 -z-10">
        <div
          className={`${styles.grid} [mask-image:radial-gradient(ellipse_60%_80%_at_80%_100%,#000_50%,transparent_100%)]`}
        ></div>
      </div>
    </>
  );
}
