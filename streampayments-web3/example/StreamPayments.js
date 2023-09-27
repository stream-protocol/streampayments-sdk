const StreamPayments = require('./StreamPayments');
const { Wallet } = require('@solana/web3.js');

async function main() {
  const streamPayments = new StreamPayments('https://solana-mainnet.g.alchemy.com/v2/e_k2llhrt6iS-TxTwKFyfru1iDgeH1eF');

  // Switch to Testnet or Devnet if needed. Added Alchemy.
  // streamPayments.switchToTestnet();
  // streamPayments.switchToDevnet();

  // Replace with StreamPayments sender's private key
  const senderPrivateKey = Buffer.from('YOUR_SENDER_PRIVATE_KEY', 'base64');
  const senderWallet = Wallet.fromPrivateKey(senderPrivateKey);

  const recipientAddress = 'RECIPIENT_PUBLIC_KEY';
  const amountToSend = 1;
  const confirmationsToWaitFor = 5; // Specify the number of confirmations to wait for

  try {
    const signature = await streamPayments.sendPaymentWithConfirmation(
      senderWallet,
      recipientAddress,
      amountToSend,
      confirmationsToWaitFor
    );

    console.log(`Payment sent. Transaction signature: ${signature}`);

    const recipientBalance = await streamPayments.getBalance(recipientAddress);
    console.log(`Recipient's balance: ${recipientBalance} SOL`);

    // You can check the transaction history here if needed
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
