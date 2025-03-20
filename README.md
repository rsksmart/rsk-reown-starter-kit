[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/rsksmart/rsk-reown-starter-kit/badge)](https://scorecard.dev/viewer/?uri=github.com/rsksmart/rsk-reown-starter-kit)
[![CodeQL](https://github.com/rsksmart/rsk-reown-starter-kit/workflows/CodeQL/badge.svg)](https://github.com/rsksmart/rsk-reown-starter-kit/actions?query=workflow%3ACodeQL)
<img src="rootstock-logo.jpg" alt="RSK Logo" style="width:100%; height: auto;" />

## Rootstock Reown & Shadcn Starter Kit

This starter kit provides a foundation for building decentralized applications (dApps) on the Rootstock blockchain using [React](https://react.dev/learn), [Reown](https://reown.com/), [Wagmi](https://wagmi.sh/) and [Shadcn](https://ui.shadcn.com/) libraries. It includes features such as:

- Integration with [Reown](https://reown.com/) for wallet connection and interacting with smart contracts
- Sample integrations of interactions with tokens like ERC20, ERC721, and ERC1155.
- Prettier and eslint configured for project files.
- Tailwindcss and Shadcn configured for style customization.

## Project Structure

```text
.
├── public
├── src
│   ├── App.tsx
│   ├── assets
│   ├── components
│   ├── config
│   │   ├── providers.tsx
│   │   └── wagmiProviderConfig.ts
│   ├── lib
│   │   └── utils
│   ├── main.tsx
│   ├── pages
├── package.json
```

## Supported Networks

- Rootstock Mainnet
- Rootstock Testnet

## Usage

### Setup

#### 1. Clone Repository

```shell
git clone https://github.com/rsksmart/rsk-reown-starter-kit
cd rsk-reown-starter-kit
```

#### 2. Configure Project

Copy the `.env.example` file and rename it to `.env`, and add a variables:

```shell
VITE_REOWN_PROJECT_ID='your Reown (prev wallet connect) key'
VITE_BUNDLER_API_KEY='etherspot_public_key'
VITE_CUSTOM_BUNDLER_URL=https://rootstocktestnet-bundler.etherspot.io/
```
> **Note**: Go to [Reown Dashboard](https://cloud.reown.com/sign-in) and create a project, copy the project ID and paste it on `VITE_REOWN_PROJECT_ID`.

#### 3. Install Dependencies

For the variables `VITE_BUNDLER_API_KEY` and `VITE_CUSTOM_BUNDLER_URL`, these are used for the etherspot gasless demo part, and these variables (for testnet) are public. For production use, please obtain bundler api key and bundler url from [Etherspot](https://etherspot.io/)

```shell
yarn
```

#### 4. Run Project

```shell
yarn dev
```
