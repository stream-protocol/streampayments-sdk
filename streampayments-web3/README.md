# StreamPayments JavaScript SDK

The **Stream**Payments JavaScript SDK allows users and developers to interact with accounts and programs on the Solana blockchain through the Solana JSON RPC API. This SDK supports various payment currencies, including USDC, EURC, SOL, and STRM, and provides examples for each.

## Setup StreamPayments Development Environment

Ensure you have Node.js and npm (Node Package Manager) installed.

## Install Dependencies

Install the necessary libraries for interacting with **Stream**Payments and the Solana blockchain functions.

```bash
npm install @streampayments/web3.js
```

## StreamPayments SDK

The **Stream**Payments SDK provides classes and functions for sending payments in different currencies on the Solana blockchain. You can find the implementation details in the `StreamPayments.js` file.

### Example Files

To demonstrate how to send payments in different currencies, we provide example files for each currency:

- `sendUsdcPaymentExample.ts` for sending USDC payments.
- `sendEurcPaymentExample.ts` for sending EURC payments.
- `sendSolPaymentExample.ts` for sending SOL payments.
- `sendStrmPaymentExample.ts` for sending STRM payments.

You can find these example files in the project's root directory.

### Usage

To run any of the example files, execute the TypeScript file using `ts-node`. Replace 'YOUR_SENDER_PRIVATE_KEY', 'RECIPIENT_PUBLIC_KEY', and other currency-specific details with actual values and specifics relevant to your application.

For example, to send a USDC payment:

```bash
ts-node sendUsdcPaymentExample.ts
```

Make sure you have `ts-node` installed globally or as a development dependency in your project (e.g., `npm install -g ts-node` or `npm install ts-node --save-dev`).

These example files demonstrate how to use payment classes to send payments in different currencies on the Solana blockchain.

## Resources

### Alchemy

**Alchemy's open-source Account Abstraction SDK makes it easy for developers to build with ERC-4337 compliant smart accounts.**

- [Alchemy Account Abstraction SDK](https://docs.alchemy.com/reference/account-abstraction-sdk)

### Solana Blockchain

- [Solana Documentation](https://docs.solana.com/developers)

### Circle

**Cross-chain USDC and EURC Transfer:**

CCTP functionality with this script that transfers USDC or EURC between testnet addresses on two different chains.

- [Circle CCTP Protocol](https://developers.circle.com/stablecoin/docs/cctp-usdc-transfer-quickstart)

## License

**Stream**Payments SDK is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.