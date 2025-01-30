"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const MobileNav = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [opened]);

  return (
    <div>
      <div onClick={() => setOpened(true)}>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </div>
      {opened && (
        <div
          id="overlay-nav"
          className="fixed inset-0 bg-base-300/80 backdrop-blur-sm flex justify-end"
          onClick={(e) => {
            if ((e.target as HTMLElement).id === "overlay-nav")
              setOpened(false);
          }}
        >
          <div className="bg-base-300  w-[50%] h-full">
            <ul className="pt-12 p-4 flex flex-col gap-8">
              <li>
                <Link href="/" onClick={() => setOpened(false)}>
                  Home
                </Link>
              </li>
              <li className="font-bold">
                <Link href="/category/Games" onClick={() => setOpened(false)}>
                  <p>Games</p>
                </Link>
              </li>
              <li className="font-bold">
                <Link href="/category/Tech" onClick={() => setOpened(false)}>
                  <p>Tech</p>
                </Link>
              </li>
              <li className="font-bold">
                <Link
                  href="/category/Personal%20Development"
                  onClick={() => setOpened(false)}
                >
                  <p>Personal Development</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
