"use client";
import { useContext } from "react";
import BookingContext from "../../context/";
import Navigation from "./navigation";
import DateColumn from "./dateColumn";

const BookingCalendar = () => {
  const { dates } = useContext(BookingContext);

  return (
    <div className="mb-[27px]">
      <Navigation />
      <div className="border rounded-lg mt-[24px] border-gray-500">
        <div className="grid grid-cols-3">
          {dates.map((date: Date, index: number) => (
            <DateColumn key={index} date={date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
