# Front End / Blockchain - Warehouse Management

## Description
+ The webApp helps us to interface with the blockchain
+ Transactions in the warehouse can be added to the blockchain
+ Previous transactions can be retrieved

## Setup and Run

1. Install Truffle globally
```
npm install -g truffle@4.1.7
```

2. Install other dependencies
```
npm i
```

3. Start Truffle
```
truffle develop
```

4. Deploy the Smart Contracts in Truffle
```
migrate --reset
```

5. In another terminal start the front-end
```
npm run start
```

## Interfacing with the Blockchain

1. Install the [MetaMask browser extension](https://metamask.io/). 

2. Once installed, click on the MetaMask icon, then use the "Import Account" feature to create an account from a private key. Copy the first private key from the first few lines of output of `truffle develop` and paste it into the "Private Key" field in Metamask.

3.  Connect to your private network. Click the network chooser (it will likely say "Main Ethereum Network" at the top), and choose "Custom RPC". In there, enter the URL that matches the configuration in the `truffle.js` file (which should be `http://localhost:9545` by default), then click "Save".

4. Refresh the page in your browser, and you should be good to go!
