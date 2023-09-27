import { Wallet, Connection, PublicKey, Transaction, sendAndConfirmTransaction, SystemProgram } from '@solana/web3.js';

class SolPayment {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  async sendSolPayment(
    senderWallet: Wallet,
    recipientAddress: string,
    amount: number
  ): Promise<string> {
    try {
      // Build the transfer transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: senderWallet.publicKey,
          toPubkey: new PublicKey(recipientAddress),
          lamports: amount * 1000000000, // Convert SOL to lamports
        })
      );

      // Sign and send the transaction
      const signature = await sendAndConfirmTransaction(this.connection, transaction, [
        senderWallet,
      ]);

      return signature;
    } catch (error) {
      console.error('Error sending SOL payment:', error);
      throw error;
    }
  }
}

export default SolPayment;
