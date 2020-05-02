import { LineReader } from './LineReader'
import { LinePrinter } from './LinePrinter';
import { Menu } from './Menu';
// This is the App class
export class App {
  private readonly menu: Menu;
  private readonly linePrinter: LinePrinter
  private readonly lineReader: LineReader

  constructor(
    menu: Menu = new Menu(),
    linePrinter: LinePrinter = new LinePrinter(),
    lineReader: LineReader = new LineReader()
  ) {
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
