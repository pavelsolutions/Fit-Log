"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";

interface IPlanListProps {
  plan: IWorkout;
  active: "plan" | "saved";
}

const PlanList = ({ plan, active }: IPlanListProps) => {
  const { myPlan, savedPlan, setMyPlan, setSavedPlan } =
    useContext(WorkoutContext);

  const allPlan: IWorkout[] =
    active === "plan" ? myPlan : savedPlan;

  // ================= REMOVE =================

  const handleRemovePlan = () => {
    const remainingPlans = allPlan.filter(
      (todayPlan) => todayPlan.id !== plan.id
    );

    if (active === "plan") {
      setMyPlan(remainingPlans);
      toast.info("Removed from today's plan");
    } else {
      setSavedPlan(remainingPlans);
      toast.info("Removed from saved");
    }
  };

  // ================= MARK AS DONE =================

  const handleMarkAsDone = () => {
    toast.success("Workout logged - nice work");

    const remainingMyPlan = myPlan.filter(
      (todayPlan) => todayPlan.id !== plan.id
    );

    setMyPlan(remainingMyPlan);
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[#292C31] bg-[#15171D] p-3 sm:flex-row sm:items-center sm:justify-between">
      {/* ================= LEFT SIDE ================= */}

      <div className="flex min-w-0 items-center gap-3">
        {/* Image */}

        <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg sm:h-14 sm:w-28">
          <Image
            src={plan.image}
            alt={plan.name}
            fill
            sizes="(max-width: 640px) 96px, 112px"
            className="object-cover"
          />
        </div>

        {/* Workout Info */}

        <div className="min-w-0">
          <h3 className="truncate font-[var(--font-oswald)] text-sm font-bold uppercase text-white">
            {plan.name}
          </h3>

          <p className="mt-0.5 truncate text-[10px] text-[#858B97]">
            {plan.equipment}
          </p>

          {/* Workout Stats */}

          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-[#C4C8D0]">
            <span className="flex items-center gap-1 whitespace-nowrap">
              <span className="text-[#C2F800]">◷</span>
              {plan.duration} min
            </span>

            <span className="flex items-center gap-1 whitespace-nowrap">
              <span className="text-[#C2F800]">♨</span>
              {plan.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1 whitespace-nowrap">
              <span className="text-[#C2F800]">★</span>
              {plan.rating}
            </span>
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}

      <div className="flex w-full items-center gap-2 sm:w-auto sm:shrink-0">
        {/* View Details */}

        <Link
          href={`/workouts/${plan.id}`}
          className="flex-1 cursor-pointer rounded-full border border-white px-3 py-2 text-center text-[10px] text-white transition hover:border-[#C2F800] hover:text-[#C2F800] sm:flex-none sm:px-4"
        >
          View Details
        </Link>

        {/* Mark As Done */}

        {active === "plan" && (
          <button
            onClick={handleMarkAsDone}
            className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#C2F800] px-3 py-2 text-[10px] font-bold text-black transition hover:bg-[#B7E900] sm:flex-none sm:px-4"
          >
            <span>✓</span>
            Mark as Done
          </button>
        )}

        {/* Remove */}

        <button
          onClick={handleRemovePlan}
          aria-label={`Remove ${plan.name}`}
          className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-lg text-[#6B7280] transition hover:bg-[#292C31] hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default PlanList;