import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./redux/provider";
import { Collapsible, ContactForm, Nav } from "@/components";

export const metadata: Metadata = {
  title: "Willbeckh | Portfolio",
  description: "Portfolio website for Willbeck.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth h-auto">
        <Providers>
          <Nav />
          {children}
          <Collapsible className="fixed bottom-0 text-center w-screen">
            <ContactForm />
          </Collapsible>
        </Providers>
      </body>
    </html>
  );
}
