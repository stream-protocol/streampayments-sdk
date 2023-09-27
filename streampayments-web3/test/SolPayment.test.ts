import { Wallet, Connection } from '@solana/web3.js';
import SolPayment from '../src/SolPayment'; // Adjust the import path as needed

describe('SolPayment', () => {
  const providerUrl = 'https://your-solana-rpc-url.com'; // Replace with your Solana RPC URL
  const connection = new Connection(providerUrl, 'recent');
  
  // Replace with your actual sender's private key
  const senderPrivateKey = Buffer.from('YOUR_SENDER_PRIVATE_KEY', 'base64');
  const senderWallet = Wallet.fromPrivateKey(senderPrivateKey);

  // Replace with the recipient's public key for testing
  const recipientAddress = 'RECIPIENT_PUBLIC_KEY';

  it('should send a SOL payment', async () => {
    const amountToSend = 1; // Amount of SOL to send
    const solPayment = new SolPayment(connection);

    try {
      const signature = await solPayment.sendSolPayment(senderWallet, recipientAddress, amountToSend);
      expect(signature).toBeDefined();
    } catch (error) {
      fail('Error sending SOL payment: ' + error);
    }
  });
});
