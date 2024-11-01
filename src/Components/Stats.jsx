import React from "react";

const Stats = ({title, data}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-green-400 w-4 h-4"></div>
        <h2 className="text-sm text-black">{title}</h2>
      </div>
      <h2 className="font-semibold pl-3">{data}</h2>
    </div>
  );
};

export default Stats;
