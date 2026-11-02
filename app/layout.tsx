import { geistMono, inter, satoshi } from "@/styles/fonts";
import "@/styles/globals.css";
import { cn } from "@dub/utils";
import type { ReactNode } from "react";

export const metadata = {
  title: "Communities",
  description: "Your membership platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(satoshi.variable, inter.variable, geistMono.variable)}
    >
      <body className="bg-bg-default font-default text-content-emphasis antialiased">
        {children}
      </body>
    </html>
  );
}
