import { LineReader, ConsoleReader } from './InputOutput/LineReader'
import { LinePrinter, ConsolePrinter } from './InputOutput/LinePrinter';
import { Menu } from './Menu';

// This is the App class
type ConstructorArgs = { linePrinter?: LinePrinter, lineReader?: LineReader, menu?: Menu; }
export class App {
  private readonly menu: Menu;
  private readonly linePrinter: LinePrinter
  private readonly lineReader: LineReader

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
    this.linePrinter.print('Coming soon');
    this.linePrinter.print(this.menu.menuOptionsToString());
    const value = this.lineReader.read();
    this.linePrinter.print(`You entered: ${value}`);
  }
}
