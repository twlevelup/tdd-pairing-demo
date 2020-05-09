import { LinePrinter, ConsolePrinter } from "./InputOutput/LinePrinter";

export class Account {
    private linePrinter: LinePrinter
    private ammountValue: number;

    constructor(linePrinter: LinePrinter = new ConsolePrinter(), initialBalance?: number) {
        this.linePrinter = linePrinter;
        this.ammountValue = initialBalance ?? 0;
    }

    checkBalance(): number {
        return this.ammountValue;
    }

    depositMoney(depoistAmount: number): number {
        this.ammountValue += depoistAmount;
        return this.ammountValue
    };
}
