import { seatId } from "./SeatBookingCard";

interface TicketsProps {
  selectedSeats: seatId[];
  selectedDate: Date | null;
  movieName: string;
}

export default function Ticket({
  selectedSeats,
  selectedDate,
  movieName,
}: TicketsProps) {
  return (
    <div className="mt-8 p-4 bg-black/50 text-white backdrop-blur-sm rounded-lg border border-white/20 shadow-md">
      <h2 className=" flex gap-2 text-2xl font-semibold">
        <strong className="text-2xl">Movie: </strong>
        {movieName ? movieName : "No movie selected"}
      </h2>
      <div className="mt-4">
        <strong>Date: </strong>
        {selectedDate ? selectedDate.toLocaleDateString() : "No date selected"}
      </div>
      <div className="mt-2">
        <strong>Seats: </strong>
        {selectedSeats.length > 0
          ? selectedSeats.join(", ")
          : "No seats selected"}
      </div>
    </div>
  );
}
