import { PEOPLE_URL } from "@/constans";
import Image from "next/image";
import React from "react";
import { FaMap } from "react-icons/fa";

interface CampItemProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  people: string;
}

const CampItem = ({
  backgroundImage,
  people,
  subtitle,
  title,
}: CampItemProps) => {
  return (
    <div
      className={`${backgroundImage} h-full w-full min-w-[500px] lg:min-w-[800px] bg-cover bg-no-repeat rounded-3xl `}
    >
      <div className="flex h-full flex-col items-start justify-between p-6">
        <div className="flex items-center justify-center gap-5">
          <div className="rounded-full p-4 bg-orange-100">
            <FaMap
              className="w-9 h-9 text-orange-500"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay={200}
            />
          </div>
          <div className="flex flex-col gap-2 font-poppins">
            <h4 className="text-white font-bold">{title}</h4>
            <p className="text-gray-300">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                alt=""
                key={url}
                width={52}
                height={52}
                className="hover:scale-110 transition"
              />
            ))}
          </span>
          <p className="font-semibold text-white font-poppins">{people}</p>
        </div>
      </div>
    </div>
  );
};

export default CampItem;
