"use client";
import TextInput from "./TextInput";
import Image from "next/image";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const Select = ({
  currentCurrency,
  coins,
  setCurrentCurrency,
  secondaryCurrency,
}) => {
  const [amount, setAmount] = useState("");
  const [listIsShown, showList] = useState(false);
  const [search, setSearch] = useState("");
  const [displayedCoins, setDisplayedCoins] = useState(coins);

  const handleAmountChange = ({ target: { value } }) => {
    if (!/^\d*\.?\d*$/.test(value)) return;
    setAmount(value);
  };

  const handleSearch = ({ target: { value: input } }) => {
    setSearch(input);
    if (!input) return setDisplayedCoins(coins);
    setDisplayedCoins(
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  const handleSelect = (coin) => {
    setCurrentCurrency(coin);
    showList(false);
  };

  const generateSelectItem = (coin) => {
    if (secondaryCurrency?.id === coin.id) return null;
    return (
      <button
        onClick={() => handleSelect(coin)}
        className="w-full border-b-[2px] px-2 flex gap-2 border-b-[#e4e4e423] h-16  bg-black items-center"
      >
        <Image
          src={coin.image}
          className="rounded-full"
          alt={coin.name}
          width={24}
          height={24}
        />
        <span>{coin.name}</span>
      </button>
    );
  };

  return (
    <div className="flex relative select-none font-bold flex-col">
      <div
        onChange={handleAmountChange}
        className="w-full select-none border-b-[2px] justify-between border-b-[#e4e4e423] h-16 px-4 bg-[#e4e4e40e] flex items-center"
      >
        {!listIsShown && (
          <TextInput
            placeholder="0.00"
            onChange={handleAmountChange}
            value={amount}
            disabled={!currentCurrency}
          />
        )}
        {listIsShown && (
          <TextInput
            onChange={handleSearch}
            value={search}
            placeholder="Search"
          />
        )}
        {currentCurrency ? (
          <button
            onClick={() => showList((prev) => !prev)}
            className="w-[75px] h-full flex items-center justify-between"
          >
            <span>{currentCurrency.symbol.toUpperCase()}</span>
            {currentCurrency.image && (
              <Image
                src={currentCurrency.image}
                className="rounded-full"
                alt={currentCurrency.name}
                width={24}
                height={24}
              />
            )}
          </button>
        ) : (
          <button
            onClick={() => showList((prev) => !prev)}
            className="flex items-center w-[75px] gap-2"
          >
            <span>Select</span>
            <FaCaretDown className="w-4 h-4" />
          </button>
        )}
      </div>
      {listIsShown && (
        <div className="max-h-48 transition-all pl-2 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#7a3699] bg-black z-10 mt-16 self-end absolute w-full border-b-[#e4e4e423] overflow-auto">
          {displayedCoins.map((coin) => generateSelectItem(coin))}
        </div>
      )}
    </div>
  );
};

export default Select;
