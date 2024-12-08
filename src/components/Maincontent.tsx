import { useState } from "react";
import BannerHome from "./BannerHome";
import CardList from "./CardList";
import Navbar from "./Navbar";
import SeatBookingCard, { seatId } from "./SeatBookingCard";
import TicketCard from "./TicketCard";

export default function Maincontent() {
  const [selectedSeats, setSelectedSeats] = useState<seatId[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const handleSelectMovie = (movieName: string) => {
    setSelectedMovie(movieName);
  };
  return (
    <div className="w-full h-screen flex flex-col relative pl-8">
      <Navbar />
      <div className="flex gap-6">
        <div className="w-[70%] flex flex-col gap-2">
          <BannerHome />
          <CardList onSelectMovie={handleSelectMovie} />
        </div>
        <div className="flex flex-col">
          <SeatBookingCard
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            movieName={selectedMovie || ""}
          />
          <TicketCard
            selectedSeats={selectedSeats}
            selectedDate={selectedDate}
            movieName={selectedMovie || ""}
          />
        </div>
      </div>
    </div>
  );
}
