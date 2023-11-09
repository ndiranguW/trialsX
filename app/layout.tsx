import "./globals.css";
import { Navbar, Collapsible, ContactForm } from "./components";
import type { Metadata } from "next";

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
        <div>
          <Navbar />
          {children}
          <Collapsible className="sticky bottom-0">
            <ContactForm />
          </Collapsible>
        </div>
      </body>
    </html>
  );
}
