"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Oswald } from "next/font/google";

import logo from "@/assets/logo.png";
import { WorkoutContext } from "@/context/WorkoutContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const Navbar = () => {
  const { myPlan, savedPlan } = useContext(WorkoutContext);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#292C31] bg-[#0C0D10]/95 backdrop-blur-md">
      <div className="navbar mx-auto flex min-h-16 w-full max-w-7xl px-6 py-3 sm:px-6">
        {/* ================= LEFT ================= */}
        <div className="navbar-start gap-1">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle text-white"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Mobile Dropdown */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-xl border border-[#292C31] bg-[#15171D] p-3 shadow-xl"
            >
              <li>
                <Link
                  href="/"
                  className={
                    pathname === "/"
                      ? "text-[#C2F800]"
                      : "text-white"
                  }
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className={
                    pathname === "/my-plan"
                      ? "text-[#C2F800]"
                      : "text-white"
                  }
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-2"
          >
            <Image
              src={logo}
              alt="FitLog Logo"
              className="h-9 w-9 sm:h-10 sm:w-10"
            />

            <span
              className={`${oswald.className} text-xl font-bold tracking-wide text-white sm:text-2xl`}
            >
              FITLOG
            </span>
          </Link>
        </div>

        {/* ================= CENTER ================= */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-sm">
            <li>
              <Link
                href="/"
                className={`rounded-full px-4 py-2 transition ${
                  pathname === "/"
                    ? "bg-[#1a2310] text-[#C2F800]"
                    : "text-white hover:bg-[#1a2310] hover:text-[#C2F800]"
                }`}
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className={`rounded-full px-4 py-2 transition ${
                  pathname === "/my-plan"
                    ? "bg-[#1a2310] text-[#C2F800]"
                    : "text-white hover:bg-[#1a2310] hover:text-[#C2F800]"
                }`}
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="navbar-end gap-2 sm:gap-4">
          {/* Plan */}
          <Link
            href="/my-plan?tab=plan"
            className="flex cursor-pointer items-center gap-2"
          >
            <span className="hidden text-sm text-[#9CA3AF] sm:inline">
              Plan
            </span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C2F800] text-xs font-bold text-black">
              {myPlan.length}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan?tab=saved"
            className="flex cursor-pointer items-center gap-2"
          >
            <span className="hidden text-sm text-[#9CA3AF] sm:inline">
              Saved
            </span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D1D5DB] text-xs font-bold text-white">
              {savedPlan.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;