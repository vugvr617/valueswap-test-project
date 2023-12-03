import Image from "next/image";
import logo from "@/public/logo.svg";
import React from "react";
import Client from "@/app/lib/client";
import { Form } from "./components/Form";

export default async function Home() {
  const coins = await getCoinsList();

  return (
    <div className="h-full flex flex-col gap-16 bg-gradient-radial max-w-xs w-full items-center justify-center">
      <Image src={logo} alt="Logo of the Valueswap" />
      <Form coins={coins} />
    </div>
  );
}

async function getCoinsList() {
  const client = new Client();
  const coins = await client.getData("/coins/markets?vs_currency=usd");

  return coins;
}
