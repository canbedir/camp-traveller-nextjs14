import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "@/constans";
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

          <div className="flex flex-wrap justify-between gap-10 md:flex-1 font-poppins">
            {FOOTER_LINKS.map((columns, columnIndex) => (
              <FooterItem title={columns.title} key={columnIndex}>
                {columns.links.map((link, linkIndex) => (
                  <Link href={"/"} key={linkIndex}>
                    {link}
                  </Link>
                ))}
              </FooterItem>
            ))}
          </div>

          <div className="flex flex-wrap justify-end gap-10 md:flex-1">
            <FooterItem title={FOOTER_CONTACT_INFO.title} key="contact-info">
              {FOOTER_CONTACT_INFO.links.map((link, linkIndex) => (
                <div
                  className="flex gap-4 md:flex-col lg:flex-row font-poppins"
                  key={linkIndex}
                >
                  <p>{link.label}</p>
                  <p>{link.value}</p>
                </div>
              ))}
            </FooterItem>
          </div>
        </div>
        <div className="text-center border-t border-gray-100">
          <p className="w-full text-center text-gray-700 my-5">
            2024 Camp Traveller | Hix
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
