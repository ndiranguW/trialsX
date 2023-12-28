"use client";
import { Container } from "@/components";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Container className={styles.homePage}>
        <section>
          <p className="text-sm">Hi, my name is</p>
          <div className="">
            <p className="text-3xl md:text-6xl font-bold text-gray-500">
              Willbeckh
            </p>
            <p className="text-4xl md:text-7xl font-bold mt-6">
              I build products for the web.
            </p>

            <p className="pt-4 md:w-3/4 font-light">
              Specifically creating backend solutions && occasionally creating
              frontend experiences.
            </p>
          </div>
        </section>

        <div className={`absolute bottom-80`}>
          <Link
            href="/projects"
            className={`uppercase font-semibold text-sm text-cyan-400 ${styles.bottomNav}`}
          >
            View Projects
          </Link>
        </div>
      </Container>
    </>
  );
}
