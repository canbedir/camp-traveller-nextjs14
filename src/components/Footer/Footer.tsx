import { FOOTER_LINKS } from "@/constans";
import Link from "next/link";
import React from "react";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center border-t border">
      <div className="container flex w-full flex-col gap-16">
        <div className="flex flex-col items-start justify-center gap-20 mt-12 mb-5 md:flex-row">
          <Link href={"/"} className="font-poppins font-semibold text-xl">
            <span className="text-orange-500">Camp</span> <span>Traveller</span>
          </Link>

          <div className="flex flex-wrap gap-10 md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterItem title={columns.title}>
                {columns.links.map((link) => (
                  <Link href={"/"} key={link}>
                    {link}
                  </Link>
                ))}
              </FooterItem>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
