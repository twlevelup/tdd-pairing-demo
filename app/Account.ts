import { LinePrinter, ConsolePrinter } from "./InputOutput/LinePrinter";

export class Account {
  private linePrinter: LinePrinter;
  private ammountValue: number;

  constructor(
    linePrinter: LinePrinter = new ConsolePrinter(),
    initialBalance?: number
  ) {
    this.linePrinter = linePrinter;
    this.ammountValue = initialBalance ?? 0;
  }

  /* Method to Check balance money */
  methodA(): number {
    return this.ammountValue;
  }

  /* Method to Deposit money */
  methodB(depoistAmount: number): number {
    this.ammountValue += depoistAmount;
    return this.ammountValue;
  }

  /* Method to Withdraw money */
  methodC(withDrawAmount: number): number {
    this.ammountValue -= withDrawAmount;
    return 1;
  }
}
