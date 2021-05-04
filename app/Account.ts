/* This is the Account model */
export class Account {
  private ammountValue: number;

  constructor(initialBalance: number = 9000) {
    this.ammountValue = initialBalance;
  }

  checkBalance(): number {
    return this.ammountValue;
  }

  depositMoney(depositAmount: number): number {
    this.ammountValue += depositAmount;
    return this.ammountValue;
  }

  withDrawMoney(withDrawAmount: number): boolean {
    if (withDrawAmount > this.ammountValue) {
      return false;
    }
    this.ammountValue -= withDrawAmount;
    return true;
  }
}
