import { Wallet, Connection } from '@solana/web3.js';
import StrmPayment from '../src/StrmPayment'; // Adjust the import path as needed

describe('StrmPayment', () => {
  const providerUrl = 'https://your-solana-rpc-url.com'; // Replace with your Solana RPC URL
  const connection = new Connection(providerUrl, 'recent');
  
  // Replace with your actual sender's private key
  const senderPrivateKey = Buffer.from('YOUR_SENDER_PRIVATE_KEY', 'base64');
  const senderWallet = Wallet.fromPrivateKey(senderPrivateKey);

  // Replace with the recipient's public key for testing
  const recipientAddress = 'RECIPIENT_PUBLIC_KEY';

  it('should send a STRM payment', async () => {
    const amountToSend = 10; // Amount of STRM to send
    const strmPayment = new StrmPayment(connection);

    try {
      const signature = await strmPayment.sendStrmPayment(senderWallet, recipientAddress, amountToSend);
      expect(signature).toBeDefined();
    } catch (error) {
      fail('Error sending STRM payment: ' + error);
    }
  });
});
