import type { Metadata } from "next";
import { HeaderFont } from "@/fonts";
import "./globals.css";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
      <body className={HeaderFont.className}>
        <div className="drawer drawer-end">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-base-300 w-full md:px-10 fixed z-10">
              <div className="mx-2 flex-1 text-xl md:text-3xl font-extrabold">
                <Link href="/">Debnews</Link>
              </div>
              <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal font-semibold">
                  {/* Navbar menu content here */}
                  <li>
                    <Link href={"/category/Games"}>Games</Link>
                  </li>
                  <li>
                    <Link href={"/category/Tech"}>Tech</Link>
                  </li>
                  <li>
                    <Link href={"/category/Personal Development"}>
                      Personal Development
                    </Link>
                  </li>
                  <li>
                    <a>Trending</a>
                  </li>
                </ul>
              </div>
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
                    className="inline-block h-6 w-6 stroke-current"
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
            </div>
            {/* Page content here */}
            <main className="px-4 mt-20 sm:px-12 xl:px-24">{children}</main>
          </div>
          <div className="drawer-side z-20">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-64 p-4">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <footer className="mt-12 bg-base-300 w-full flex flex-col md:flex-row gap-8 md:gap-20 p-4 sm:p-8">
          <div className="text-left text-3xl font-extrabold mb-4">Debnews</div>
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
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}
