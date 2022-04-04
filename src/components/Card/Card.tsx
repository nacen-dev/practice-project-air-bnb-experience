import React from "react";
import StarIcon from "../../assets/Star.png";

type Props = {
  image: string;
  rating: number;
  reviewCount: number;
  location: string;
  title: string;
  costPerPerson: number;
  className?: string;
  openSpots?: number | undefined;
};

const Card = (props: Props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "ONLINE") badgeText = "ONLINE";

  console.log(badgeText);

  return (
    <div className={`flex flex-col ${props.className} gap-1 relative`}>
      {badgeText && (
        <div className="absolute left-[6px] top-[6px] bg-white py-[5px] px-[7px] font-bold font-poppins">
          {badgeText}
        </div>
      )}
      <img src={props.image} alt="" className="flex-[1_1_80%]" />
      <div className="flex gap-2 items-center">
        <img src={StarIcon} alt="star" />
        <span className="font-poppins font-light">{props.rating}</span>
        <span className="font-poppins font-light text-gray-400">
          ({props.reviewCount}) •
        </span>
        <span className="font-poppins font-light text-gray-400">
          {props.location}
        </span>
      </div>
      <p className="font-poppins font-light text-zinc-900">{props.title}</p>
      <p>
        <span className="font-semibold font-poppins text-zinc-900">
          From ${props.costPerPerson}
        </span>{" "}
        / person
      </p>
    </div>
  );
};

export { Card };
