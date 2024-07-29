import Image from "next/image";
import React from "react";

interface TestimonialsItemProps {
  img: string;
  name: string;
  desc: string;
  aosDelay: string;
}

const TestimonialsItem = ({
  aosDelay,
  desc,
  img,
  name,
}: TestimonialsItemProps) => {
  return (
    <div
      className="bg-gray-100 rounded-2xl group relative shadow-xl w-full"
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-delay={200}
    >
      <div className="h-52">
        <Image
          className="mx-auto transform p-6 rounded-full group-hover:scale-105 transition-transform"
          alt=""
          src={img}
          width={200}
          height={200}
        ></Image>
      </div>
      <div className="p-4 text-center">
        <div className="w-full">
          <h1 className="text-xl font-poppins font-semibold">{name}</h1>
          <p className="font-light font-poppins">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsItem;
