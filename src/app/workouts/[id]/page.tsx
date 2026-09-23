import Image from "next/image";
import { FaBookmark, FaCalendarPlus } from "react-icons/fa";

const WorkoutDetails = () => {
  return (
    <main className="min-h-screen bg-[#0C0D10] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-11">

        {/* ================= IMAGE ================= */}
        <div className="relative h-[520px] overflow-hidden rounded-xl sm:h-[580px] lg:h-[563px]">
          <Image
            src="/workout.jpg"
            alt="Barbell Bench Press"
            fill
            className="object-cover"
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col">

          {/* Title */}
          <h1 className="font-[var(--font-oswald)] text-3xl font-bold uppercase leading-none tracking-tight sm:text-4xl">
            Barbell Bench Press
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-2xl text-sm leading-5 text-[#9CA3AF]">
            A compound press that builds chest thickness, triceps, and
            pressing power from a stable bench.
          </p>

          {/* Muscle Groups */}
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-[#C2F800] px-3 py-1 text-[10px] font-bold text-black">
              Chest
            </span>

            <span className="rounded-full bg-[#C2F800] px-3 py-1 text-[10px] font-bold text-black">
              Arms
            </span>
          </div>

          {/* ================= INFO CARD ================= */}
          <div className="mt-6 overflow-hidden rounded-xl border border-[#292C31] bg-[#15171D]">

            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-[#20232A] px-5 py-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wide text-[#858B97]">
                Equipment
              </span>

              <span className="text-xs text-[#E5E7EB]">
                Barbell, Bench
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-[#20232A] px-5 py-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wide text-[#858B97]">
                Difficulty
              </span>

              <span className="text-xs text-[#E5E7EB]">
                Intermediate
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-[#20232A] px-5 py-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wide text-[#858B97]">
                Sets
              </span>

              <span className="text-xs text-[#E5E7EB]">
                4
              </span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-[#20232A] px-5 py-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wide text-[#858B97]">
                Reps
              </span>

              <span className="text-xs text-[#E5E7EB]">
                6-8
              </span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-[#20232A] px-5 py-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wide text-[#858B97]">
                Duration
              </span>

              <span className="text-xs text-[#E5E7EB]">
                25 min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-[#20232A] px-5 py-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wide text-[#858B97]">
                Calories
              </span>

              <span className="text-xs text-[#E5E7EB]">
                180 kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-5 py-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wide text-[#858B97]">
                Rating
              </span>

              <span className="text-xs text-[#E5E7EB]">
                4.8
              </span>
            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-6">
            <h2 className="font-[var(--font-oswald)] text-sm font-bold uppercase tracking-wide text-white">
              Instructions
            </h2>

            <ol className="mt-3 space-y-3">
              <li className="flex gap-3 text-xs leading-5 text-[#B0B5BF]">
                <span>1.</span>
                <span>
                  Lie on the bench with eyes under the bar and feet planted.
                </span>
              </li>

              <li className="flex gap-3 text-xs leading-5 text-[#B0B5BF]">
                <span>2.</span>
                <span>
                  Unrack with locked elbows and lower the bar to mid-chest.
                </span>
              </li>

              <li className="flex gap-3 text-xs leading-5 text-[#B0B5BF]">
                <span>3.</span>
                <span>
                  Press up in a slight arc until elbows lock without bouncing.
                </span>
              </li>

              <li className="flex gap-3 text-xs leading-5 text-[#B0B5BF]">
                <span>4.</span>
                <span>
                  Keep shoulder blades pinched and a natural arch in the back.
                </span>
              </li>
            </ol>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-7 flex flex-wrap gap-3">

            <button className="flex items-center gap-2 rounded-lg bg-[#C2F800] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#B7E900]">
              <FaCalendarPlus />
              Add to today's plan
            </button>

            <button className="flex items-center gap-2 rounded-lg border border-[#343841] bg-transparent px-5 py-2.5 text-xs font-medium text-[#D1D5DB] transition hover:border-[#C2F800] hover:text-[#C2F800]">
              <FaBookmark />
              Save for later
            </button>

          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;