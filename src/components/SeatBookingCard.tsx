import { faCalendarAlt, faCouch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type seatId = string;
interface SeatBookingCardProps {
  selectedSeats: seatId[];
  setSelectedSeats: React.Dispatch<React.SetStateAction<seatId[]>>;
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  movieName: string;
}

export default function SeatBookingCard({
  selectedSeats,
  setSelectedSeats,
  selectedDate,
  setSelectedDate,
  movieName,
}: SeatBookingCardProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const toggleSeat = (row: number, col: number) => {
    const rowLabel = String.fromCharCode(65 + row);
    const seatId = `${rowLabel}${col + 1}`;
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter((seat) => seat !== seatId);
      } else {
        return [...prevSelectedSeats, seatId];
      }
    });
  };
  return (
    <div className="flex flex-col gap-7 border border-white/15 p-6 bg-gray-400/30 backdrop-blur-md rounded-lg shadow-lg">
      <div className="flex justify-between items-center text-slate-300/70">
        <h2 className=" flex gap-2 text-2xl font-semibold">
          <strong className="text-2xl">Movie: </strong>
          {movieName ? movieName : "No movie selected"}
        </h2>
        <div className="flex justify-center items-center">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="text-2xl text-[#b4d429] cursor-pointer flex items-center"
            onClick={() => setShowDatePicker((prev) => !prev)}
          />
          <div className="relative">
            {showDatePicker && (
              <div className="absolute right-3 top-3 z-10">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => setSelectedDate(date)}
                  dateFormat="yyyy/MM/dd"
                  inline
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="relative mb-6">
        <div className="flex inset-0 justify-center">
          <svg
            width="405"
            height="38"
            viewBox="0 0 405 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 34.5C152.371 -11.4008 241.289 -9.89935 405 34.5V38.0001C246.837 -6.66784 158.161 -8.41843 0 38.0001V34.5Z"
              fill="#58F021"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4">
        {Array(3)
          .fill(null)
          .map((_, rowIndex) => (
            <div key={rowIndex} className="flex justify-center space-x-4">
              {Array(4)
                .fill(null)
                .map((_, colIndex) => {
                  const rowLabel = String.fromCharCode(65 + rowIndex);
                  const seatId = `${rowLabel}${colIndex + 1}`;
                  const isSelected = selectedSeats.includes(seatId);
                  return (
                    <div
                      key={seatId}
                      onClick={() => toggleSeat(rowIndex, colIndex)}
                      className={`flex justify-center items-center w-12 h-12 cursor-pointer rounded-lg shadow-lg ${
                        isSelected ? "bg-[#b4d429]" : "bg-white/50"
                      }`}
                    >
                      <FontAwesomeIcon icon={faCouch} className="text-lg" />
                    </div>
                  );
                })}
            </div>
          ))}
      </div>
    </div>
  );
}
