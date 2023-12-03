"use client";
import React, { useState } from "react";
import { TfiExchangeVertical } from "react-icons/tfi";
import Select from "./Select";

export const Form = ({ coins }) => {
  const [sourceCurrency, setSourceCurrency] = useState(null);
  const [destinationCurrency, setDestinationCurrency] = useState(null);

  const isSwapDisabled = !sourceCurrency || !destinationCurrency;

  const swap = () => {
    const temp = sourceCurrency;
    setSourceCurrency(destinationCurrency);
    setDestinationCurrency(temp);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <Select
          coins={coins}
          currentCurrency={sourceCurrency}
          secondCoin={destinationCurrency}
          setCurrentCurrency={setSourceCurrency}
        />
        <button
          onClick={swap}
          disabled={isSwapDisabled}
          className="w-min mx-auto"
        >
          <TfiExchangeVertical
            className={`text-2xl  ${
              isSwapDisabled ? "text-[#e4e4e446]" : "text-[#e4e4e4]"
            }`}
          />
        </button>
        <Select
          coins={coins}
          currentCurrency={destinationCurrency}
          secondaryCurrency={sourceCurrency}
          setCurrentCurrency={setDestinationCurrency}
        />
      </div>
      <button className="w-full bg-white font-bold text-2xl text-center h-16 text-black">Connect Wallet</button>
    </>
  );
};
