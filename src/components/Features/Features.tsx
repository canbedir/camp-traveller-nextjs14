import { FEATURES } from "@/constans";
import Image from "next/image";
import React from "react";
import FeaturesItem from "./FeaturesItem";

const Features = () => {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-pattern2 bg-center bg-no-repeat">
      <div className="container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src={"/camper/phone.png"}
            alt="phone img"
            width={400}
            height={1000}
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="100"
          ></Image>
        </div>
        <div className="flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src={"/pattern/camp.png"}
              width={50}
              height={50}
              alt="camp img"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
            />
            <h1
              className="text-3xl lg:text-5xl font-semibold font-poppins"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="100"
            >
              Our Features
            </h1>
            <ul
              className="mt-10 grid gap-10 md:grid-cols-2"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="100"
            >
              {FEATURES.map((data) => (
                <FeaturesItem
                  key={data.title}
                  title={data.title}
                  desc={data.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
