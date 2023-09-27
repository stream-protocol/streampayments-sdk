import { Wallet, Connection, PublicKey, Transaction, sendAndConfirmTransaction, SystemProgram } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { EURC } from '@streampayments/web3.js';

class EurcPayment {
  private connection: Connection;
  private eurcToken: Token;
  private eurcMint: PublicKey;

  constructor(connection: Connection, eurcMint: string) {
    this.connection = connection;
    this.eurcMint = new PublicKey(eurcMint);
    this.eurcToken = new Token(this.connection, this.eurcMint, TOKEN_PROGRAM_ID, null);
  }

  async sendEurcPayment(
    senderWallet: Wallet,
    recipientAddress: string,
    amount: number
  ): Promise<string> {
    try {
      // Create associated token account for the recipient
      const recipientPublicKey = new PublicKey(recipientAddress);
      const associatedTokenAddress = await this.eurcToken.getOrCreateAssociatedTokenAccount(
        senderWallet.publicKey,
        recipientPublicKey
      );

      // Build the transfer transaction
      const transaction = new Transaction()
        .add(
          Token.createTransferInstruction(
            TOKEN_PROGRAM_ID,
            associatedTokenAddress,
            this.eurcMint,
            senderWallet.publicKey,
            [],
            amount * EURC.DECIMALS // Convert amount to EURC decimal units
          )
        )
        .add(
          SystemProgram.transfer({
            fromPubkey: senderWallet.publicKey,
            toPubkey: recipientPublicKey,
            lamports: 0, // No additional lamports needed for the transfer
          })
        );

      // Sign and send the transaction
      const signature = await sendAndConfirmTransaction(this.connection, transaction, [
        senderWallet,
      ]);

      return signature;
    } catch (error) {
      console.error('Error sending EURC payment:', error);
      throw error;
    }
  }
}

export default EurcPayment;
