import { Account } from "./Account";
import { LinePrinter, ConsolePrinter } from "./InputOutput/LinePrinter";
import { LineReader, ConsoleReader } from "./InputOutput/LineReader";

// This is the Menu class
type ConstructorArgs = {
  options?: Array<string>;
  account?: Account;
  linePrinter?: LinePrinter;
  lineReader?: LineReader;
};
export class Menu {
  private readonly options: Array<string>;
  private readonly account: Account;
  private readonly linePrinter: LinePrinter;
  private readonly lineReader: LineReader;

  constructor({
    options = ["Check balance", "Withdraw money", "Quit"],
    account = new Account(),
    linePrinter = new ConsolePrinter(),
    lineReader = new ConsoleReader(),
  }: ConstructorArgs = {}) {
    this.options = options;
    this.account = account;
    this.linePrinter = linePrinter;
    this.lineReader = lineReader;
  }

  public getOptions(): Array<string> {
    return this.options;
  }

  public menuFilterOption(option: string): Boolean {
    if (option == "1") {
      const balance = this.account.cb();
      this.linePrinter.print(`Your current balance is: $${balance}`);
      //return true;
    } else if (option == "2") {
      const withDrawAmount = this.lineReader.read(
        "Please enter an amount to withdraw: "
      );
      const transactionStatus = this.account.wm(Number(withDrawAmount));
      if (transactionStatus == 1) {
        this.linePrinter.print(`You have withdrawn $${withDrawAmount}`);
        this.linePrinter.print(
          `Your new account balance is: $${this.account.cb()}`
        );
      } else {
        this.linePrinter.print(
          `You can not withdraw amount $${withDrawAmount}`
        );
        this.linePrinter.print(
          `Your new account balance is: $${this.account.cb()}`
        );
      }
      //return true;
    } else {
      return false;
    }
    return true;
  }

  public menuOptionsToString(): string {
    let menuOptionsToString = "";
    this.getOptions().forEach((menuOption, index) => {
      menuOptionsToString += `${index + 1}. ${menuOption}\n`;
    });

    return menuOptionsToString;
  }
}
