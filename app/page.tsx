"use client"; // Add this at the top

import Hero from "@/components/Hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <>
      {isLoading ?(
        <div>
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        </div>
      ): <main className="relative bg-purple flex h-screen justify-center flex-col items-center overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero />
        </div>
      </main>}
     
    </>
  );
}
