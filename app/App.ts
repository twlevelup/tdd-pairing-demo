import { LineReader, ConsoleReader } from "./InputOutput/LineReader";
import { LinePrinter, ConsolePrinter } from "./InputOutput/LinePrinter";
import { Menu } from "./Menu";

// This is the App class
type ConstructorArgs = {
  linePrinter?: LinePrinter;
  lineReader?: LineReader;
  menu?: Menu;
};
export class App {
  private readonly menu: Menu;
  private readonly linePrinter: LinePrinter;
  private readonly lineReader: LineReader;

  constructor({
    menu = new Menu(),
    linePrinter = new ConsolePrinter(),
    lineReader = new ConsoleReader(),
  }: ConstructorArgs = {}) {
    this.menu = menu;
    this.linePrinter = linePrinter;
    this.lineReader = lineReader;
  }

  public getMenuOptions(): Array<string> {
    return this.menu.getOptions();
  }

  public run(): void {

    let exitApp: Boolean = true;
    this.linePrinter.print("Welcome to the Magic ATM");

    // exit the app only if user press 4
    while (exitApp) {
      this.linePrinter.print(this.menu.menuOptionsToString());
      const value = this.lineReader.read("Please select an option: ");
      this.linePrinter.print(`You entered: ${value}`);
      exitApp = this.menu.menuFilterOption(value);
    }
  }
}
