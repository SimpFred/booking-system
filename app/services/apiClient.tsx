export interface Room {
  id: number;
  name: string;
  capacity?: number;
  bookings: Booking[];
}

export interface Booking {
  id?: number;
  roomId: number;
  startTime: string;
  endTime: string;
  bookedBy: string;
  room?: Room;
}

export const fetchRooms = async (): Promise<Room[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/rooms`);
  const data = await res.json();
  return data;
};

export const fetchBookings = async (): Promise<Booking[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/bookings`);
  const data = await res.json();
  return data;
};

export const createBooking = async (booking: Booking): Promise<Booking> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(booking),
  });

  if (!res.ok) {
    throw new Error("Failed to create booking");
  }

  return await res.json();
};
