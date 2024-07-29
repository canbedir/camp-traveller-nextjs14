import React from "react";

interface FooterItemProps {
  title: string;
  children: React.ReactNode;
}

const FooterItem = ({ children, title }: FooterItemProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-semibold font-poppins">{title}</h4>
      {children}
    </div>
  );
};

export default FooterItem;
