import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardDataProps } from "../lib/CardData";
import { useState } from "react";

interface CardProps {
  props: CardDataProps;
  onBook: (movieName: string) => void;
}
export default function Card({ props, onBook }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-32 bg-black p-2 relative rounded-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={props.imageUrl} alt={props.name} className="rounded-2xl" />
      {isHovered && (
        <button
          onClick={() => onBook(props.name)}
          className="flex absolute inset-0 bg-slate-400/5 backdrop-blur-sm justify-center items-center text-black rounded-3xl font-bold text-2xl"
        >
          Book
        </button>
      )}
      <h3 className="text-white text-sm">{props.name}</h3>
      <p className="text-neutral-500 text-xs">{props.description}</p>
      <div>
        {[...Array(5)].map((_star, starIndex) => {
          const currentRating = starIndex + 1;
          return (
            <label key={starIndex}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                className="hidden"
              />
              <FontAwesomeIcon
                icon={faStar}
                color={starIndex < props.rating ? "#ffc107" : "#e4e5e9"}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
