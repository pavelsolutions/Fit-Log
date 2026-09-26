"use client";

import PlanList from "@/components/shared/PlanList";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout";
import { Oswald } from "next/font/google";
import Link from "next/link";
import { useContext, useState } from "react";

type SortOption = "duration" | "calories" | "rating";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const MyPlan = () => {
  const { myPlan, savedPlan } = useContext(WorkoutContext);

  // Active tab
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  // Sorting
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  // Search
  const [searchTerm, setSearchTerm] = useState("");

  // ================= SEARCH =================

  const searchPlans = (plans: IWorkout[]) => {
    if (!searchTerm.trim()) {
      return plans;
    }

    const query = searchTerm.toLowerCase().trim();

    return plans.filter((plan) => {
      const workoutName = plan.name.toLowerCase();

      const tags = plan.muscleGroups.some((tag) =>
        tag.toLowerCase().includes(query)
      );

      return workoutName.includes(query) || tags;
    });
  };

  // ================= SORT =================

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortOption);
  };

  const sortPlans = (plans: IWorkout[]) => {
    const sortedPlans = [...plans];

    if (sortBy === "duration") {
      sortedPlans.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      sortedPlans.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    }

    if (sortBy === "rating") {
      sortedPlans.sort((a, b) => b.rating - a.rating);
    }

    return sortedPlans;
  };

  // ================= CURRENT LIST =================

  const planList: IWorkout[] =
    activeTab === "plan" ? myPlan : savedPlan;

  const searchedPlans = searchPlans(planList);

  const allPlan = sortPlans(searchedPlans);

  // ================= STATS =================

  const totalMinutes = allPlan.reduce(
    (total, plan) => total + plan.duration,
    0
  );

  const totalCalories = allPlan.reduce(
    (total, plan) => total + plan.caloriesBurned,
    0
  );

  return (
    <section className="min-h-screen bg-[#0C0D10] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto px-6 w-full max-w-7xl">

        {/* ================= HEADER ================= */}

        <div>
          <h1
            className={`${oswald.className} text-3xl font-bold uppercase tracking-tight sm:text-4xl`}
          >
            My Plan
          </h1>

          <p className="mt-1 max-w-xl text-xs leading-5 text-[#858B97] sm:text-sm sm:leading-6">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* ================= STATS ================= */}

        <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#292C31] bg-[#15171D] sm:grid-cols-3">

          {/* Exercises */}
          <div className="px-5 py-6 sm:px-6 sm:py-7">
            <p className="text-xs text-[#858B97]">
              Exercises
            </p>

            <p
              className={`${oswald.className} mt-1 text-3xl font-semibold text-[#C2F800] sm:text-4xl`}
            >
              {allPlan.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-t border-[#292C31] px-5 py-6 sm:border-l sm:border-t-0 sm:px-6 sm:py-7">
            <p className="text-xs text-[#858B97]">
              Minutes
            </p>

            <p
              className={`${oswald.className} mt-1 text-3xl font-semibold text-white sm:text-4xl`}
            >
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="border-t border-[#292C31] px-5 py-6 sm:border-l sm:border-t-0 sm:px-6 sm:py-7">
            <p className="text-xs text-[#858B97]">
              Calories
            </p>

            <p
              className={`${oswald.className} mt-1 text-3xl font-semibold text-white sm:text-4xl`}
            >
              {totalCalories}
            </p>
          </div>
        </div>

        {/* ================= TABS + SEARCH + SORT ================= */}

        <div className="mt-7 flex flex-col gap-4 lg:mt-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Tabs */}

          <div className="flex w-full rounded-xl border border-[#292C31] bg-[#15171D] p-1 sm:w-fit">

            <button
              onClick={() => setActiveTab("plan")}
              className={`flex-1 cursor-pointer rounded-lg px-4 py-2.5 text-xs transition sm:flex-none sm:px-5 ${
                activeTab === "plan"
                  ? "border border-[#30343B] bg-[#20232A] font-medium text-[#C2F800]"
                  : "text-[#858B97] hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 cursor-pointer rounded-lg px-4 py-2.5 text-xs transition sm:flex-none sm:px-6 ${
                activeTab === "saved"
                  ? "border border-[#30343B] bg-[#20232A] font-medium text-[#C2F800]"
                  : "text-[#858B97] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Search + Sort */}

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">

            {/* Search */}

            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search workouts..."
                className="w-full rounded-lg border border-[#292C31] bg-[#15171D] px-4 py-2.5 pl-10 text-xs text-white outline-none placeholder:text-[#858B97] transition focus:border-[#C2F800]"
              />

              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#858B97]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Sort */}

            <div className="flex w-full items-center gap-3 sm:w-auto">
              <span className="shrink-0 text-xs text-[#858B97]">
                Sort By
              </span>

              <div className="relative w-full sm:w-auto">
                <select
                  value={sortBy}
                  onChange={handleSort}
                  className="w-full cursor-pointer appearance-none rounded-lg border border-[#292C31] bg-[#15171D] py-2.5 pl-4 pr-9 text-xs text-white outline-none transition hover:border-[#3A3E46] focus:border-[#C2F800] sm:w-auto"
                >
                  <option value="duration">
                    Duration
                  </option>

                  <option value="calories">
                    Calories
                  </option>

                  <option value="rating">
                    Rating
                  </option>
                </select>

                <svg
                  className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#858B97]"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ================= WORKOUT LIST ================= */}

        {allPlan.length > 0 ? (
          <div className="mt-5 space-y-3">
            {allPlan.map((plan) => (
              <PlanList
                key={plan.id}
                plan={plan}
                active={activeTab}
              />
            ))}
          </div>
        ) : (
          /* ================= EMPTY STATE ================= */

          <div className="mt-6 flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-[#292C31] bg-[#0F1014] px-5">
            <div className="text-center">

              <h2
                className={`${oswald.className} text-xl font-bold uppercase text-white`}
              >
                Nothing Here Yet
              </h2>

              <p className="mx-auto mt-1 mb-5 max-w-sm text-xs leading-5 text-[#858B97]">
                {searchTerm
                  ? "No workouts match your search."
                  : "Browse the library and add a lift to get today moving."}
              </p>

              <Link href="/"
                className="mt-6 cursor-pointer rounded-full bg-[#C2F800] px-6 py-2.5 text-xs font-bold text-black shadow-[0_8px_25px_rgba(194,248,0,0.12)] transition hover:bg-[#B7E900]"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyPlan;