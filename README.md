<img src="rootstock-logo.jpg" alt="RSK Logo" style="width:100%; height: auto;" />

## Rootstock Hardhat Starterkit Configuration

-   [Typechain](https://github.com/dethcrypto/TypeChain) plugin enabled (typescript type bindings for smart contracts)
-   [hardhat-deploy](https://github.com/wighawag/hardhat-deploy) plugin enabled
-   Testing environment configured and operational, with test coverage
-   Prettier and eslint configured for project files and solidity smart contract
-   [Solhint](https://github.com/protofire/solhint) configured for enforcing best practices
-   Prepared Smart Contract Examples, Tests, Deployments and Tasks for Common ERC Standards (ERC20, ERC721, ERC1155)

Check the Hardhat documentation for more information.

https://hardhat.org/getting-started/

## Project Structure

```text
.
├── contracts
│   ├── ERC1155.sol 
│   ├── ERC20.sol
│   └── ERC721.sol
├── deploy
│   ├── DeployERC1155.ts
│   ├── DeployERC20.ts
│   └── DeployERC721.ts
├── deployments
├── hardhat.config.ts
├── tasks
│   ├── erc1155
│   ├── erc20
│   ├── erc721
│   └── utils
└── test
    ├── BasicERC1155.ts
    ├── BasicERC20.ts
    └── BasicERC721.ts
```

## Supported Networks

-   Hardhat Network (localhost)
-   Rootstock Mainnet
-   Rootstock Testnet


## Hardhat Shorthand

We recommend installing `hh autocomplete` so you can use `hh` shorthand globally.


```shell
npm i -g hardhat-shorthand
```

https://hardhat.org/guides/shorthand.html

### Common Shorthand Commands

-   `hh compile` - to compile smart contract and generate typechain ts bindings
-   `hh test` - to run tests
-   `hh deploy` - to deploy to local network (see options for more)
-   `hh node` - to run a localhost node
-   `hh help` - to see all available commands
-   `hh TABTAB` - to use autocomplete

## Usage

### Setup

#### 1. Install Dependencies

```shell
npm install
```

#### 2. Compile Contracts

```shell
npm run compile
```

#### 3. Environment Setup

Create `.env` file and add your environment variables. You can use `.env.example` as a template.

Make sure you include `PRIVATE_KEY` in your `.env` file.

### Example Flow - Deploy ERC721 Token

> This is an example flow to deploy an ERC721 token to a public network and interact with it.

#### 1. Deploy BasicERC721 Contract

```shell
hh deploy --network rskTestnet --tags 721
```


#### 3. Interact With Contract - Mint

```shell
hh erc721-mint \
 --contract  <ContractAddress>\
 --recipient  <RecipientAddress>\
 --network rskTestnet
```

---

### Testing

#### Run Tests

```shell
npm run test
```

#### Run Coverage

```shell
npm run coverage
```

---

### Project Hygiene

#### Prettier - Non Solidity Files

```shell
npm run format:check
npm run format:write
```

#### Lint - Non Solidity Files

```shell
npm run lint:check
npm run lint:fix
```

#### Prettier - Solidity

```shell
npm run sol:format:check
npm run sol:format:write
```

#### Solhint - Enforcing styles and security best practices

```shell
npm run solhint
```

