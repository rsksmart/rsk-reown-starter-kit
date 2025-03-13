import React from "react";

import { createAppKit } from '@reown/appkit/react'

import { cookieStorage, createStorage, WagmiProvider } from 'wagmi'
import { rootstock, rootstockTestnet } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// import { rainbowkitConfig } from "./rainbowkitConfig";
// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.reown.com
const projectId = import.meta.env.VITE_WC_PROJECT_ID;

// 2. Create a metadata object - optional
const metadata = {
  name: 'Rsk-Reown-Starter-Kit',
  description: 'AppKit Example',
  url: 'https://example.com',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

const networks = [rootstock, rootstockTestnet]

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  networks,
  projectId
})

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks : [rootstock, rootstockTestnet],
  projectId,
  metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <WagmiProvider config={wagmiAdapter.wagmiConfig}>
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  </WagmiProvider>
);

export default Providers;
