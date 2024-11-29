"use client";
import React, { useContext } from "react";
import DropdownButton from "./dropdownButton";
import BookingContext from "../../context/";
import RoomList from "./roomList";

const DropdownContainer = () => {
  const { isDropdownOpen } = useContext(BookingContext);
  return (
    <div className="mt-[45px] relative">
      <DropdownButton />
      {isDropdownOpen && (
        <div>
          <RoomList />
        </div>
      )}
    </div>
  );
};

export default DropdownContainer;
