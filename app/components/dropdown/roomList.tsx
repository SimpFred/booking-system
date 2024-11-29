import React, { useContext } from "react";
import OnClickButton from "../onClickButton";
import BookingContext from "@/app/context";
import "./roomList.css";

// RoomList component to display a list of rooms with selection options
const RoomList = () => {
  const {
    rooms,
    checkedRooms,
    handleRoomSelection,
    handleConfirmSelection,
    handleClearSelection,
  } = useContext(BookingContext);

  return (
    <div className="absolute w-full rounded-lg z-10 bg-black shadow-md p-[24px]">
      {/* Map through rooms and display each room with a checkbox */}
      {rooms.map((room: any) => (
        <div
          key={room.id}
          className="flex items-center rounded-lg justify-between p-2 hover:bg-blue-950"
        >
          <label className="flex items-center w-full cursor-pointer">
            <span className="flex-grow text-sm">
              {room.name} ({room.capacity} personer)
            </span>
            <input
              type="checkbox"
              checked={checkedRooms.includes(room.id)}
              onChange={() => handleRoomSelection(room.id)}
              className="ml-2 h-6 w-6 border border-gray-400 rounded appearance-none checked:bg-tra</label>nsparent transform scale-150 custom-checkbox"
            />
          </label>
        </div>
      ))}
      {/* Buttons to confirm or clear selection */}
      <div className="flex mt-[41px] justify-between gap-4">
        <OnClickButton onClick={handleConfirmSelection} text="Välj" />
        <OnClickButton
          onClick={handleClearSelection}
          text="Avmarkera"
          /* bgColor='var(--ligthDark)' */
        />
      </div>
    </div>
  );
};

export default RoomList;
