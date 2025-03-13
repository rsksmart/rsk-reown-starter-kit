import Logo from "@/components/ui/logo";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Button from "./ui/button";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

export default function Navbar(): JSX.Element {
  const { address, isConnected, caipAddress, status, embeddedWalletInfo } = useAppKitAccount()
  const { open } = useAppKit()
  useEffect(() => {
    console.log({address, isConnected, caipAddress, status, embeddedWalletInfo})
  } , [address, isConnected, caipAddress, status, embeddedWalletInfo])
  return (
    <nav className="sticky top-4 flex items-center justify-between py-3 px-5 rounded-full mt-4 w-full max-w-[1200px] mx-auto bg-gray-600/20 backdrop-blur-lg z-[100]">
      <Link to="/">
        <Logo className="w-[150px] h-[50px]" />
      </Link>
      <div>connect button</div>
      <Button onClick={() => open()}>
        Connect
      </Button>
    </nav>
  );
}
