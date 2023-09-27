## Examples Folder

The examples folder contains a collection of sample scripts that demonstrate how to use the **Stream**Payments JavaScript SDK to send payments in different currencies on the Solana blockchain. Each example is designed to showcase a specific currency and its usage.

### Contents

- `sendUsdcPaymentExample.ts`: Demonstrates how to send payments using the USDC stablecoin.
- `sendEurcPaymentExample.ts`: Illustrates sending payments using the EURC stablecoin.
- `sendSolPaymentExample.ts`: Shows how to send payments in SOL (Solana's native token).
- `sendStrmPaymentExample.ts`: Provides an example of sending payments using the STRM token.

### Usage

To run these examples, navigate to the examples folder and execute the TypeScript file of your choice using `ts-node`. Replace the placeholders with actual values as needed, such as sender's private key and recipient's public key.

For example, to run the USDC payment example:

```bash
cd streampayments-web3/examples
ts-node sendUsdcPaymentExample.ts
```

Make sure you have `ts-node` installed globally or as a development dependency in your project.

These examples serve as practical guides for using the **Stream**Payments SDK to interact with the Solana blockchain and perform various types of payments.

For detailed instructions and usage, refer to the main [README.md](README.md) of this project.
