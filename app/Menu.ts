import { Account } from './Account';
import { LinePrinter, ConsolePrinter } from './InputOutput/LinePrinter';
import { LineReader, ConsoleReader } from './InputOutput/LineReader';
// This is the Menu class
export class Menu
{
  private readonly options: Array<string>;
  private readonly account: Account;
  private readonly linePrinter: LinePrinter;
  private readonly lineReader: LineReader;

  constructor(options: Array<string> = new Array(
    'Check balance',
    'Withdraw money',
    'Deposit money',
    'Quit'
    ),
    linePrinter: LinePrinter = new ConsolePrinter(),
    lineReader: LineReader = new ConsoleReader(),
    account: Account= new Account()
  ) {
    this.options = options;
    this.account = account;
    this.linePrinter = linePrinter;
    this.lineReader =lineReader;
  }

  public getOptions(): Array<string> {
    return this.options;
  }

  public menuFilterOption(option: string) {
    if (option == '1'){
        const balance = this.account.checkBalance();
        this.linePrinter.print(`Current balance is ${balance}`)
    }

    else if (option == '3'){
        const depositAmount = this.lineReader.read('Please select an option: ');
        this.account.depositMoney(Number(depositAmount));

    }
}

  public menuOptionsToString(): string {
    let menuOptionsToString = "";
    return this.getOptions().reduce((accumulator, currentValue, index) =>
      accumulator + `${index+1}. ${currentValue}\n`,
      menuOptionsToString
    );
  }
}
