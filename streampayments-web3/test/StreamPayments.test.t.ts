import { Wallet, Connection } from '@solana/web3.js';
import StreamPayments from '../src/StreamPayments'; // Adjust the import path as needed

describe('StreamPayments', () => {
  const providerUrl = 'https://your-solana-rpc-url.com'; // Replace with your Solana RPC URL
  const connection = new Connection(providerUrl, 'recent');
  
  // Replace with your actual sender's private key
  const senderPrivateKey = Buffer.from('YOUR_SENDER_PRIVATE_KEY', 'base64');
  const senderWallet = Wallet.fromPrivateKey(senderPrivateKey);

  // Replace with the recipient's public key for testing
  const recipientAddress = 'RECIPIENT_PUBLIC_KEY';

  it('should send a payment in SOL', async () => {
    const amountToSend = 1; // Amount of SOL to send
    const streamPayments = new StreamPayments(providerUrl);

    try {
      const signature = await streamPayments.sendSolPayment(senderWallet, recipientAddress, amountToSend);
      expect(signature).toBeDefined();
    } catch (error) {
      fail('Error sending SOL payment: ' + error);
    }
  });

  it('should send a payment in STRM', async () => {
    const amountToSend = 10; // Amount of STRM to send
    const streamPayments = new StreamPayments(providerUrl);

    try {
      const signature = await streamPayments.sendStrmPayment(senderWallet, recipientAddress, amountToSend);
      expect(signature).toBeDefined();
    } catch (error) {
      fail('Error sending STRM payment: ' + error);
    }
  });

  it('should send a payment in USDC', async () => {
    const amountToSend = 50; // Amount of USDC to send
    const streamPayments = new StreamPayments(providerUrl);

    try {
      const signature = await streamPayments.sendUsdcPayment(senderWallet, recipientAddress, amountToSend);
      expect(signature).toBeDefined();
    } catch (error) {
      fail('Error sending USDC payment: ' + error);
    }
  });

  it('should send a payment in EURC', async () => {
    const amountToSend = 20; // Amount of EURC to send
    const streamPayments = new StreamPayments(providerUrl);

    try {
      const signature = await streamPayments.sendEurcPayment(senderWallet, recipientAddress, amountToSend);
      expect(signature).toBeDefined();
    } catch (error) {
      fail('Error sending EURC payment: ' + error);
    }
  });
});
