import { Wallet, Connection, PublicKey, Transaction, sendAndConfirmTransaction, SystemProgram } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { USDC } from '@streampayments/web3.js';

class UsdcPayment {
  private connection: Connection;
  private usdcToken: Token;
  private usdcMint: PublicKey;

  constructor(connection: Connection, usdcMint: string) {
    this.connection = connection;
    this.usdcMint = new PublicKey(usdcMint);
    this.usdcToken = new Token(this.connection, this.usdcMint, TOKEN_PROGRAM_ID, null);
  }

  async sendUsdcPayment(
    senderWallet: Wallet,
    recipientAddress: string,
    amount: number
  ): Promise<string> {
    try {
      // Create associated token account for the recipient
      const recipientPublicKey = new PublicKey(recipientAddress);
      const associatedTokenAddress = await this.usdcToken.getOrCreateAssociatedTokenAccount(
        senderWallet.publicKey,
        recipientPublicKey
      );

      // Build the transfer transaction
      const transaction = new Transaction()
        .add(
          Token.createTransferInstruction(
            TOKEN_PROGRAM_ID,
            associatedTokenAddress,
            this.usdcMint,
            senderWallet.publicKey,
            [],
            amount * USDC.DECIMALS // Convert amount to USDC decimal units
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
      console.error('Error sending USDC payment:', error);
      throw error;
    }
  }
}

export default UsdcPayment;
