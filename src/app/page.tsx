"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="font-roboto">
      <Navbar />
    </div>
  );
}
