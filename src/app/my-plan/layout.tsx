import { Metadata } from "next";
import type { ReactNode } from "react";

interface MyPlanLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "MY PLAN",
  description: "Cap of five lifts for today. Finish them, then load more.",
};

const MyPlanLayout = ({ children }: MyPlanLayoutProps) => {
  return (
    <main className="min-h-screen bg-[#0C0D10] text-white">
      {children}
    </main>
  );
};

export default MyPlanLayout;