import React from "react";
import { FaMap } from "react-icons/fa";

interface FeaturesItemProps {
  title: string;
  desc: string;
}

const FeaturesItem = ({ desc, title }: FeaturesItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start gap-3">
      <div className="rounded-full p-4 bg-orange-100">
        <FaMap className="w-9 h-9 text-orange-500" />
      </div>
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="font-light font-poppins">{desc}</p>
    </li>
  );
};

export default FeaturesItem;
