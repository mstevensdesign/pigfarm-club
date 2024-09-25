import React from "react";

type Props = {};

const Calendar = (props: Props) => {
  return (
    <div className="flex h-[calc(100vh-74px)] w-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-green-500">Calendar</h1>
    </div>
  );
};

export default Calendar;
