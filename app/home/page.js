import Image from "next/image";
import logo from "@/public/logo.svg";
import React from "react";
import Client from "@/app/lib/client";;

export default async function Home  () {
    const coins = await getCoinsList();

    return (
    <div className="w-full h-full flex bg-gradient-radial items-center justify-center">
      <Image src={logo} alt="Logo of the Valueswap" />
    </div>
  );
};

async function getCoinsList () {
  const client = new Client();
  const coins = await client.getData("/coins/markets?vs_currency=usd");
  console.log(coins);
  return coins;
}

