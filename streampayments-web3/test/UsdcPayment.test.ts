import { Wallet, Connection } from '@solana/web3.js';
import UsdcPayment from '../src/UsdcPayment'; // Adjust the import path as needed

describe('UsdcPayment', () => {
  const providerUrl = 'https://your-solana-rpc-url.com'; // Replace with your Solana RPC URL
  const connection = new Connection(providerUrl, 'recent');
  
  // Replace with your actual sender's private key
  const senderPrivateKey = Buffer.from('YOUR_SENDER_PRIVATE_KEY', 'base64');
  const senderWallet = Wallet.fromPrivateKey(senderPrivateKey);

  // Replace with the recipient's public key for testing
  const recipientAddress = 'RECIPIENT_PUBLIC_KEY';

  it('should send a USDC payment', async () => {
    const amountToSend = 50; // Amount of USDC to send
    const usdcPayment = new UsdcPayment(connection);

    try {
      const signature = await usdcPayment.sendUsdcPayment(senderWallet, recipientAddress, amountToSend);
      expect(signature).toBeDefined();
    } catch (error) {
      fail('Error sending USDC payment: ' + error);
    }
  });
});
