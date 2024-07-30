import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="h-screen flex items-center justify-center bg-black/90">
      {children}
    </div>
  );
};

export default AuthLayout;
