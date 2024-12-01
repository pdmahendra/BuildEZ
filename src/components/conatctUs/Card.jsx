import React from "react";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const Card = () => {
  return (
    <div
      className={`${alata.className} border-2 flex justify-center items-center bg-[#FFFFFF] p-4 lg:p-10 rounded`}
    >
      <div className="flex gap-4">
        <div className="p-2 lg:p-4 bg-[#384353] text-[#FFFFFF] text-4xl flex justify-center items-center rounded">
          01
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#00215BD9] text-lg lg:text-xl">Kind Consulation</p>
          <p className="text-sm lg:text-base text-center text-[#000000]">
            Etiam ac leo at quam aliquet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
