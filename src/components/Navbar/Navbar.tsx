import { NAV_LINKS } from "@/constans";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Menu, MenuSquare, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border border-b shadow-sm ">
      <div className="flex justify-between items-center px-3 py-3 relative z-30 container">
        <Link
          href={"/"}
          className="font-semibold text-xl"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="100"
        >
          <span className="text-orange-500">Camp</span> <span>Traveller</span>
        </Link>

        <ul className="hidden lg:flex h-full gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="font-poppins flex items-center cursor-pointer text-black/80 hover:text-black transition"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay={link.delay}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="hidden lg:flex justify-center">
          <Button
            type="button"
            className="flex gap-1.5"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-delay="1100"
          >
            <User className="h-4 w-4" /> Login
          </Button>
        </div>

        <Menu className="lg:hidden inline-block cursor-pointer w-8 h-8 text-orange-500" />
      </div>
    </nav>
  );
};

export default Navbar;
