"use client";

import { IWorkout } from "@/types/workout";
import React, {
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface IWorkoutContext {
  myPlan: IWorkout[];
  setMyPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  savedPlan: IWorkout[];
  setSavedPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const WorkoutContext = createContext<IWorkoutContext>({
  myPlan: [],
  setMyPlan: () => {},
  savedPlan: [],
  setSavedPlan: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [myPlan, setMyPlan] = useState<IWorkout[]>([]);
  const [savedPlan, setSavedPlan] = useState<IWorkout[]>([]);

  const isLoaded = useRef(false);

  // Load IDs from localStorage and restore full workout objects
  useEffect(() => {
    const loadPlans = async () => {
      try {
        const storedMyPlan = localStorage.getItem("fitlog-plan");
        const storedSavedPlan = localStorage.getItem("fitlog-saved");

        const myPlanIds: number[] = storedMyPlan
          ? JSON.parse(storedMyPlan)
          : [];

        const savedPlanIds: number[] = storedSavedPlan
          ? JSON.parse(storedSavedPlan)
          : [];

        const response = await fetch(
          "https://api.abcz.workers.dev/api/fitlog"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const workouts: IWorkout[] = await response.json();

        const restoredMyPlan = workouts.filter((workout) =>
          myPlanIds.includes(workout.id)
        );

        const restoredSavedPlan = workouts.filter((workout) =>
          savedPlanIds.includes(workout.id)
        );

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMyPlan(restoredMyPlan);

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSavedPlan(restoredSavedPlan);

        isLoaded.current = true;
      } catch (error) {
        console.error("Failed to restore workout plans:", error);

        isLoaded.current = true;
      }
    };

    loadPlans();
  }, []);

  // Save only myPlan IDs
  useEffect(() => {
    if (!isLoaded.current) return;

    if (myPlan.length === 0) {
    localStorage.removeItem("fitlog-plan");
    return;
  }

    const myPlanIds = myPlan.map((workout) => workout.id);

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(myPlanIds)
    );
  }, [myPlan]);

  // Save only savedPlan IDs
  useEffect(() => {
    if (!isLoaded.current) return;
    
    if (savedPlan.length === 0) {
    localStorage.removeItem("fitlog-saved");
    return;
  }

    const savedPlanIds = savedPlan.map((workout) => workout.id);

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(savedPlanIds)
    );
  }, [savedPlan]);

  const sharedData = {
    myPlan,
    setMyPlan,
    savedPlan,
    setSavedPlan,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;