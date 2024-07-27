"use client"
import { useEffect } from "react";
import 'aos/dist/aos.css'
import AOS from "aos"
import { Button } from "@/components/ui/button";

export default function Home() {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    })
  }, [])

  return (
    <>

      <div data-aos="fade-down" data-aos-once="true" data-aos-delay="500">
        <h1>Hello world</h1>
      </div>

      

    </>
  );
}
