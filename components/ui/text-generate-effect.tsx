"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  title,
  className,
  filter = true,
  duration = 0.5,
}: {
  title: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let titleArray = title.split("");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : .5,
        delay: stagger(0.045),
      }
    );
  }, [scope.current]);

  const rendertitle = () => {
    return (
      <motion.div ref={scope}>
        {titleArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className=" opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{""}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
      <div className="text-6xl leading-loose tracking-wider bg-gradient-to-r from-purple via-blue-500 bg-clip-text text-transparent dark:from-blue-500 dark:via-white dark:to-purple">
      {rendertitle()}
        </div>
      </div>
    </div>
  );
};
