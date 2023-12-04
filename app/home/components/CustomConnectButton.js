import LoadingIndicator from "@/app/components/LoadingIndicator";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ButtonLayout = (props) => (
  <button
    {...props}
    className="w-full bg-white font-bold text-2xl text-center h-16 text-black"
  >
    {props.children}
  </button>
);

const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div className="w-full h-16 flex">
            {(() => {
              if (!ready) {
                return <LoadingIndicator />;
              }
              if (!connected) {
                return (
                  <ButtonLayout onClick={openConnectModal} type="button">
                    Connect Wallet
                  </ButtonLayout>
                );
              }
              if (chain.unsupported) {
                return (
                  <ButtonLayout onClick={openChainModal} type="button">
                    Wrong network
                  </ButtonLayout>
                );
              }
              return (
                <div className="justify-between w-full flex text-black">
                  <button
                    onClick={openChainModal}
                    className="flex items-center bg-white rounded-md p-2"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button
                    className="flex items-center bg-white rounded-md p-2"
                    onClick={openAccountModal}
                    type="button"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnectButton;
