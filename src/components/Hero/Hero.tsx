import React from "react";
import photoGrid from "../../assets/photo-grid.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="py-5 my-5 px-9">
      <div className="flex justify-center items-center mb-5">
        <img src={photoGrid} alt="activities" className="max-w-[70%]" />
      </div>
      <div>
        <h1 className="text-4xl font-poppins font-semibold mb-3">
          Online Experiences
        </h1>
        <p className="font-light text-base font-poppins w-1/2">
          Join unique interactive activities led by one-of-a-kind hosts--all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export { Hero };
