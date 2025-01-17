import { useContext } from "react";
import {
  formatDate,
  generateHours,
  isRoomBooked,
} from "../../utils/helperMethods";
import BookingContext from "../../context/";
import { Room } from "@/app/services/apiClient";
import RoomCard from "./roomCard";

interface DateColumnProps {
  date: Date;
}

const DateColumn = ({ date }: DateColumnProps) => {
  const { rooms, userSelectedRooms, selectedRoom, setSelectedRoom } =
    useContext(BookingContext);
  const hours = generateHours(8, 16); // Generate an array of hours beetwen 08:00-16:00 to display each room's availability

  // Handle click on a room card
  const handleRoomClick = (roomId: number, hour: string, date: Date) => {
    // If the clicked room is already selected, deselect it
    if (
      selectedRoom.roomId === roomId &&
      selectedRoom.hour === hour &&
      selectedRoom.date === date
    ) {
      setSelectedRoom({ roomId: null, hour: null, date: null });
    } else {
      // Otherwise, select the clicked room
      setSelectedRoom({ roomId, hour, date });
    }
  };

  return (
    <div className="border-r border-gray-500">
      {/* Display a column header with the date in 'day month' format */}
      <h3 className="text-center font-semibold mb-2 border-b pt-2 pb-2 border-gray-500">
        {formatDate(date)}
      </h3>
      {hours.map((hour, hourIndex) => (
        <div key={hourIndex} className="mb-2">
          {/* Display the hour as a header to enhance readability in the calendar */}
          <h4 className="text-center font-semibold mb-1">{hour}</h4>
          {rooms
            .filter((room: Room) => {
              // Filter which rooms to display based on user selection and booking status
              const isSelectedRoom =
                !userSelectedRooms.length ||
                userSelectedRooms.includes(room.id);
              return isSelectedRoom && !isRoomBooked(room, date, hour);
            })
            .map((room: Room, roomIndex: number) => (
              <RoomCard
                key={roomIndex}
                room={room}
                hour={hour}
                date={date}
                isSelected={
                  selectedRoom.roomId === room.id &&
                  selectedRoom.hour === hour &&
                  selectedRoom.date === date
                }
                handleRoomClick={handleRoomClick} // Pass the click handler to RoomCard
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default DateColumn;
