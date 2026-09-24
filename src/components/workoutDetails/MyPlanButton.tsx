'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkout } from '@/types/workout';
import React, { useContext } from 'react';
import { FaCalendarPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MyPlanButton = ({ workout }: { workout: IWorkout }) => {
    const { myPlan, setMyPlan } = useContext(WorkoutContext);

    const alreadyPlan = myPlan.some(
        (plan) => plan.id === workout.id
    );

    const handleMyPlan = () => {

        if (alreadyPlan) {
            toast.error(`Already in your plan.`);
            return;
        }

        setMyPlan((prev) => [...prev, workout]);
        toast.success(`Added to today's plan`);
    }

    return (
        <button onClick={handleMyPlan} className="flex items-center gap-2 rounded-lg bg-[#C2F800] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#B7E900] cursor-pointer">
            <FaCalendarPlus />
            Add to today's plan
        </button>
    );
};

export default MyPlanButton;