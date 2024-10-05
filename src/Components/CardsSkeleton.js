import React, { useState } from "react";
import { useDarkMode } from "./DarkModeContext";

const CardsSkeleton = ({ Colors }) => {
  const { darkMode } = useDarkMode();

  const [CardsSkeleton, setCardsSkeleton] = useState(true);
  setTimeout(() => {
    setCardsSkeleton(false);
  }, 10000);

  return (
    CardsSkeleton && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 place-items-center content-center animate-pulse pb-8">
        {[1, 2, 3, 4, 5].map((e) => {
          return (
            <div
              className="flex w-[280px] flex-col gap-4 animate-pulse"
              key={e}
            >
              <div
                className={`rounded-[1rem] ${
                  darkMode ? "bg-[#25252554]" : "bg-[#eaebef]"
                } h-44 w-full animate-pulse`}
              ></div>
              <div
                className={`rounded-[1rem] ${
                  darkMode ? "bg-[#25252554]" : "bg-[#eaebef]"
                } h-4 w-28 animate-pulse`}
              ></div>
              <div
                className={`rounded-[1rem] ${
                  darkMode ? "bg-[#25252554]" : "bg-[#eaebef]"
                } h-4 w-full animate-pulse`}
              ></div>
              <div
                className={`rounded-[1rem] ${
                  darkMode ? "bg-[#25252554]" : "bg-[#eaebef]"
                } h-4 w-full animate-pulse`}
              ></div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default CardsSkeleton;
