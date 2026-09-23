import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/Vector.png";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#090A0D] text-[#6B7280]">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-5 py-10 sm:flex-row">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src={logo}
              alt="FitLog Logo"
              className="h-10 w-10 object-contain"
            />

            <span className="text-2xl font-bold tracking-wide text-white">
              FITLOG
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-center text-xs text-gray-500 sm:text-right sm:text-sm">
            © {new Date().getFullYear()} FitLog — Workout Library.
            <br className="sm:hidden" />
            <span className="sm:ml-1">
              Train hard, log honest.
            </span>
          </p>

          {/* Social Icons */}
          {/* <div className="flex items-center gap-2">

            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition duration-200 hover:border-[#B7FF00] hover:bg-[#B7FF00] hover:text-black"
            >
              <FaFacebookF className="text-sm" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition duration-200 hover:border-[#B7FF00] hover:bg-[#B7FF00] hover:text-black"
            >
              <FaInstagram className="text-sm" />
            </a>

            <a
              href="#"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition duration-200 hover:border-[#B7FF00] hover:bg-[#B7FF00] hover:text-black"
            >
              <FaGithub className="text-sm" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition duration-200 hover:border-[#B7FF00] hover:bg-[#B7FF00] hover:text-black"
            >
              <FaLinkedinIn className="text-sm" />
            </a>

          </div> */}
        </div>

        {/* Bottom Border */}
        {/* <div className="border-t border-gray-900 py-4 text-center">
          <p className="text-xs text-gray-600">
            Built with Next.js & Tailwind CSS
          </p>
        </div> */}

      </div>
    </footer>
  );
};

export default Footer;