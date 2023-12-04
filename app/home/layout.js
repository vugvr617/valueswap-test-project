"use client";
import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Valueswap Test Project",
  projectId: "def2fb9fdadc2628e994055f9d94e781",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const HomeLayout = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className="w-screen  flex items-center justify-center h-screen bg-gradient-sides text-white">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full -z-[1] fixed object-cover"
            src={
              "https://s3-figma-videos-production-sig.figma.com/video/962310623581735403/TEAM/d2cf/30d5/-a54b-401f-a464-27599ffabb4c?Expires=1702252800&Signature=jVMI6-M-343SKDPMUPqz4k-1SxSdMMvcBXbS6AnALJeHxku6k77U7sKOnnPC7JI51GSEEgSj7x52PomB7HGdcEJyaE6v3b5wapYfFbBvAVetWUJb8Qa1sTarExMqT6PLjHfyVU9Rtbn5Wuc1pCrn2zpvnrI~IyxmpgmGYxr5t1Pg1KAU~SuP0LFPVAUp2TbrT0EPEuCk5QQ2V29okwAUsxFRzoC9U6Mv0f9xFnDY21DJ5J1gxy1C~J4jiK32D6dvdBLy2SCHOSz4ZkjqYgboSx4ITP7-Oox7dXgNUNUS9qxl5kvE~0X-Ny3GbrLONCYiXgWIbrhqP47~R5fRtKDhVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
          />
          {children}
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default HomeLayout;
