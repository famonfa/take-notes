import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

export const metadata = {
  title: "Take Notes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ scrollBehavior: "smooth" }} lang="en">
      <body style={{ padding: 0 }} className={inter.className}>
        <Providers>
          <div className="h-screen flex">
            <div className="w-full">{children}</div>
            <div className="absolute bottom-0 right-0 p-8">
              <ThemeToggle />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
