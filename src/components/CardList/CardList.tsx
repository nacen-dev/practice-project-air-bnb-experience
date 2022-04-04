import React from "react";
import { Card } from "../Card/Card";
import athlete from "../../assets/athlete.png";
import wedding from "../../assets/wedding-photography.png";
import mountainBike from "../../assets/mountain-bike.png";

const cardListData = [
  {
    image: athlete,
    rating: 5.0,
    reviewCount: 6,
    location: "ONLINE",
    title: "Life Lessons with Katie zafares",
    costPerPerson: 136,
    openSpots: 0,
  },
  {
    image: wedding,
    rating: 5.0,
    reviewCount: 6,
    location: "ONLINE",
    title: "Learn wedding photography",
    costPerPerson: 136,
  },
  {
    image: mountainBike,
    rating: 4.8,
    reviewCount: 6,
    location: "USA",
    title: "Group Mountain Biking",
    costPerPerson: 136,
  },
];

type Props = {};

const CardList = (props: Props) => {
  return (
    <div className="px-9">
      <ul className="list-none flex gap-2.5 justify-center items-center">
        {cardListData.map((card, index) => (
          <li key={index}>
            {
              <Card
                image={card.image}
                rating={card.rating}
                reviewCount={card.reviewCount}
                costPerPerson={card.costPerPerson}
                location={card.location}
                title={card.title}
                openSpots={card.openSpots}
              />
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CardList };
