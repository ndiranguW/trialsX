import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./redux/provider";
import { Navbar, Collapsible, ContactForm } from "./components";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio website for billy dev.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="scroll-smooth">
        <Providers>
          <Navbar />
          {children}
          <Collapsible className="sticky bottom-0 text-center">
            <ContactForm />
          </Collapsible>
        </Providers>
      </body>
    </html>
  );
}
