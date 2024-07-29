import React from "react";
import CampItem from "./CampItem";
import { ImQuotesLeft } from "react-icons/im";

const Camp = () => {
  return (
    <section className="container relative flex flex-col py-10">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[440px] xl:h-[540px]">
        <CampItem
          title="Istanbul in Turkey"
          backgroundImage="bg-image1"
          people="45 Joined"
          subtitle="Kadıköy is Loading"
        />
        <CampItem
          title="Istanbul in Turkey"
          backgroundImage="bg-image2"
          people="45 Joined"
          subtitle="Kadıköy is Loading"
        />
      </div>

      <div
        className="flex items-center justify-end mt-10 px-6 lg:-mt-28"
        data-aos="fade-down"
        data-aos-once="true"
        data-aos-delay={200}
      >
        <div className="bg-orange-500 p-8 lg:max-w-[550px] xl:max-w-[720px] rounded-3xl relative w-full overflow-hidden">
          <h2 className="text-5xl text-white">
            <span className="font-semibold">Lost Feel</span>{" "}
            <span>And not Know</span>
          </h2>
          <p className="mt-5 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            esse molestiae incidunt tempore nam quos.
          </p>
          <ImQuotesLeft className="w-16 h-16 ml-auto text-white" />
        </div>
      </div>
    </section>
  );
};

export default Camp;
