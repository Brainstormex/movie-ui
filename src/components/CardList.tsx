import { CARD_DATA } from "../lib/CardData";
import Card from "./Card";

interface CardListProps {
  onSelectMovie: (movieName: string) => void;
}

export default function CardList({ onSelectMovie }: CardListProps) {
  return (
    <div className="grid gap-3 grid-cols-5">
      {CARD_DATA.map((cardData, cardIndex) => (
        <Card
          props={cardData}
          key={cardIndex}
          onBook={onSelectMovie}
          {...cardData}
        />
      ))}
    </div>
  );
}
