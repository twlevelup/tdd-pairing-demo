import { LinePrinter, ConsolePrinter } from "./InputOutput/LinePrinter";

export class Account {
    private linePrinter: LinePrinter
    private ammountValue: number;

    constructor(linePrinter: LinePrinter = new ConsolePrinter()) {
        this.linePrinter = linePrinter;
        this.ammountValue = 100;
    }

    checkBalance(): number {
        return this.ammountValue;
    }

    depositMoney(depoistAmount: number): number {
        this.ammountValue += depoistAmount;
        this.linePrinter.print(`Current balance is ${this.ammountValue}`);
        return this.ammountValue
    };
}
