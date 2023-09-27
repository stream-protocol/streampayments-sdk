import { Wallet, Connection } from '@solana/web3.js';
import UsdcPayment from './UsdcPayment'; // Import your UsdcPayment class

const providerUrl = 'https://your-solana-rpc-url.com'; // Replace with your Solana RPC URL
const connection = new Connection(providerUrl, 'recent');

// Replace with your actual sender's private key
const senderPrivateKey = Buffer.from('YOUR_SENDER_PRIVATE_KEY', 'base64');
const senderWallet = Wallet.fromPrivateKey(senderPrivateKey);

// Replace with the recipient's public key
const recipientAddress = 'RECIPIENT_PUBLIC_KEY';

const usdcPayment = new UsdcPayment(connection);

const amountToSend = 50; // Amount of USDC to send

(async () => {
  try {
    const signature = await usdcPayment.sendUsdcPayment(senderWallet, recipientAddress, amountToSend);
    console.log(`USDC payment sent. Transaction signature: ${signature}`);
  } catch (error) {
    console.error('Error sending USDC payment:', error);
  }
})();