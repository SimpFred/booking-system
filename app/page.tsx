import React from "react";
import Button from "./components/button";

export default function Home() {
  return (
    <main className="min-h-screen p-6 pb-[53px] flex flex-col items-center justify-center overflow-hidden">
      <h1 className="font-normal text-[80px] leading-[80px] align-cap mt-[124px]">
        Boka ett rum
      </h1>
      <div className="mt-auto">
        <Button text="Boka" to="/booking" />
      </div>
    </main>
  );
}
