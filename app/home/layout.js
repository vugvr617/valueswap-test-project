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
              "https://s3-figma-videos-production-sig.figma.com/video/962310623581735403/TEAM/d2cf/30d5/-a54b-401f-a464-27599ffabb4c?Expires=1703462400&Signature=YL2xMd7pLPStC5mXl52g87gTa16DpmMqC6mFxu687rk9GRUHZKFEO9tSl~NUZXZQiA~gJTZd~hpiCDOPI9lqLjK5s~2qbA1-TD4c6IFnx821resuBks-wjwii6TbNtpQz1OTY2E1TDvY6XQZfF9QBYCt1WMV-Ic6j6nUil9xE9T2RhcVSCIuZbVoP8Vd3QAgBciClk1AQLn4YF~rjoHsM1Dj5F-G138Qxt4lhWhaHf1X2v7g0oVc4Z1xaQbVlD-GAiXs5KEZ3MhOlVtxezLEszoNexvJwqqj-Gzz1VnfvfIGPCvWdPP4TZ6letGE-qx9zJVWH-40Agdk4uLcwBjETg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
          />
          {children}
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default HomeLayout;
