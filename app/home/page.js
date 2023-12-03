import Image from "next/image";
import logo from "@/public/logo.svg";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full flex bg-gradient-radial items-center justify-center">
      <Image src={logo} alt="Logo of the Valueswap" />
    </div>
  );
};

export default Home;
