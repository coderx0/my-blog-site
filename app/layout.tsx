import type { Metadata } from "next";
import { HeaderFont } from "@/fonts";
import "./globals.css";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MobileNav from "./Components/MobileNav";
export const metadata: Metadata = {
  title: "Your Go-To Hub for Tech, Games, and Personal Growth | Debnews",
  description:
    "Discover insightful articles on technology trends, gaming culture, and personal development. Stay updated with the latest tips, tutorials, and ideas to improve your everyday life and explore your passions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <body className={`${HeaderFont.className}`}>
        <nav className="fixed top-0 h-[80px] bg-base-300 w-screen z-[100]">
          <div className="px-4 md:px-6 lg:px-0 max-w-[1400px] mx-auto flex h-full items-center justify-between">
            <h1 className="text-3xl font-extrabold">
              <Link href="/">Debnews</Link>
            </h1>
            <ul className="hidden md:flex gap-8">
              <li className="font-bold">
                <Link href="/category/Games">
                  <p>Games</p>
                </Link>
              </li>
              <li className="font-bold">
                <Link href="/category/Tech">
                  <p>Tech</p>
                </Link>
              </li>
              <li className="font-bold">
                <Link href="/category/Personal%20Development">
                  <p>Personal Development</p>
                </Link>
              </li>
            </ul>
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </nav>
        <main className="px-4 mt-32  sm:px-12 xl:px-0 mx-auto max-w-[1400px]">
          <div>{children}</div>
        </main>
        <footer className="mt-12 bg-base-300">
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 p-4 sm:p-8 lg:px-0 mx-auto max-w-[1400px]">
            <div className="text-left text-3xl font-extrabold mb-4">
              Debnews
            </div>
            <div className="flex gap-12 sm:flex-row sm:space-x-8">
              <ul className="flex flex-col space-y-2 mb-4 sm:mb-0">
                <li>
                  <Link href={"/about"}>
                    <p className="hover:text-gray-500">About</p>
                  </Link>
                </li>
                <li>
                  <Link href={"/privacy-policy"}>
                    <p className="hover:text-gray-500">Privacy Policy</p>
                  </Link>
                </li>
                <li>
                  <Link href={"/contact"}>
                    <p className="hover:text-gray-500">Contact</p>
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link href={"/category/Games"}>
                    <p className="hover:text-gray-500">Games</p>
                  </Link>
                </li>
                <li>
                  <Link href={"/category/Tech"}>
                    <p className="hover:text-gray-500">Tech</p>
                  </Link>
                </li>
                <li>
                  <Link href={"/category/Personal Development"}>
                    <p className="hover:text-gray-500">Personal Development</p>
                  </Link>
                </li>
                <li>
                  <Link href={"/Trending"}>
                    <p className="hover:text-gray-500">Trending</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}
