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
