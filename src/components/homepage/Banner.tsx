import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { FaArrowDown } from "react-icons/fa";

import bannerImg from "@/assets/banner.png";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const Banner = () => {
  return (
    <section className="bg-[#0C0D10] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-8 overflow-hidden rounded-2xl border border-[#292C31] bg-[#15171D] px-5 py-8 sm:gap-10 sm:rounded-3xl sm:px-8 sm:py-10 md:px-10 lg:flex-row lg:gap-12 lg:px-14 lg:py-14">
        
        {/* ================= CONTENT ================= */}

        <div className="w-full text-center lg:w-[58%] lg:text-left">
          
          {/* Small Label */}

          <span className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-[#C2F800] sm:text-[11px]">
            WORKOUT LIBRARY
          </span>

          {/* Heading */}

          <h1 className={`${oswald.className} text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-[64px]`}>
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#9CA3AF] sm:text-base sm:leading-7 lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          {/* CTA */}

          <div className="mt-7 flex justify-center sm:mt-8 lg:justify-start">
            <Link
              href="#library"
              className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-[#C2F800] px-6 py-3 text-xs font-bold uppercase tracking-wide text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B7E900] hover:shadow-lg"
            >
              BROWSE WORKOUTS
              <FaArrowDown className="text-[10px]" />
            </Link>
          </div>
        </div>

        {/* ================= IMAGE ================= */}

        <div className="relative flex w-full items-center justify-center lg:w-[42%]">
          
          {/* Glow */}

          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#C2F800]/20 blur-2xl" />

          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#C2F800]/10 blur-3xl" />

          {/* Banner Image */}

          <Image
            src={bannerImg}
            alt="FitLog workout banner"
            priority
            className="relative h-auto w-55 object-contain transition duration-500 hover:scale-[1.02] sm:w-70 md:w-[320px] lg:w-90 xl:w-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;