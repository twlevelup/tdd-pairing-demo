import { LinePrinter } from './LinePrinter';

export class Account
{
private id: number;
private ammountValue: number;
private readonly linePrinter: LinePrinter;

constructor(linePrinter: LinePrinter = new LinePrinter())
 {
    this.id = 1234;
    this.linePrinter = linePrinter;
    this.ammountValue = 100;
}

checkBalance() : number {
    return this.ammountValue;
}

depositMoney(depoistAmount: number): number{
    this.ammountValue += depoistAmount;
    this.linePrinter.print(`Current balance is ${this.ammountValue}`);
    return this.ammountValue

};

}