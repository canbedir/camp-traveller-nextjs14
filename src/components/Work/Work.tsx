import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div className="h-full w-full">
      <div className="flex justify-center items-center">
        <div className="container">
          <div className="flex flex-col justify-center gap-5">
            <Image
              src={"/pattern/camp.png"}
              width={50}
              height={50}
              alt="camp img"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="100"
            />
            <h1 className="text-3xl lg:text-5xl font-semibold font-poppins">
              Work
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              facilis natus recusandae ipsam dolore vero similique quam odit,
              quas culpa numquam expedita blanditiis molestiae, neque ea aut
              eligendi earum iste.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              saepe omnis dicta alias quia blanditiis quo voluptatibus cum
              earum, laboriosam fugit? Alias sed officia, dicta porro dolores
              adipisci culpa illum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
