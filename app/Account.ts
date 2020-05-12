/* This is the Account model */
export class Account {
  private ammountValue: number;

  constructor(initialBalance: number = 9000) {
    this.ammountValue = initialBalance;
  }

  /* Method to Check balance */
  cb(): number {
    return this.ammountValue;
  }

  /* Method to Deposit money */
  dm(depoistAmount: number): number {
    this.ammountValue += depoistAmount;
    return this.ammountValue;
  }

  /* Method to Withdraw money */
  wm(withDrawAmount: number): number {
    this.ammountValue -= withDrawAmount;
    return 1;
  }
}
