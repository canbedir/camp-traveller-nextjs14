import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaNetworkWired, FaStar } from "react-icons/fa";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="min-h-[550px] md:min-h-[600px] flex justify-center items-center">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex bg-pattern flex-col justify-center pt-10 relative">
            <Image
              src={"/pattern/camp.png"}
              width={50}
              height={50}
              alt="camp img"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="100"
            />
            <h1
              className="text-6xl font-bold lg:text-8xl font-poppins"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="600"
            >
              Traveller Love This
            </h1>
            <p
              className="font-medium mt-5"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="600"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore laborum nihil, odit molestiae beatae aut, quaerat
              pariatur error ullam quibusdam, nisi alias dignissimos velit
              optio.
            </p>

            <div
              className="flex items-center gap-2 mt-5 font-semibold text-xl"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="900"
            >
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <FaStar className="h-8 w-8 text-yellow-400" />
                ))}
              <span>175K</span> <span className="text-orange-500">Views</span>
            </div>
            <div
              className="flex flex-row gap-3 mt-5"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="900"
            >
              <Button>Continue</Button>
              <Button>Work</Button>
            </div>
          </div>
          <div className="lg:min-h-[600px] md:min-h-[500px] min-h-[450px] flex justify-center relative">
            <Image src={"/pattern/7.png"} alt="" fill className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
