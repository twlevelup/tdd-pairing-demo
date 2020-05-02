import { LineReader } from './LineReader'
import { LinePrinter } from './LinePrinter';
// This is the App class
export class App {

  private readonly menu: { options: Array<string> };
  private readonly linePrinter: LinePrinter
  private readonly lineReader: LineReader

  constructor(
    linePrinter: LinePrinter = new LinePrinter(),
    lineReader: LineReader = new LineReader()) {
    this.menu = {
      options: new Array(
        'Check balance',
        'Withdraw money'
      )
    }
    this.linePrinter = linePrinter;
    this.lineReader = lineReader;
  }

  public getMenuOptions(): Array<string> {
    return this.menu.options;
  }

  private menuOptionsToString(): string {
    let menuOptionsToString = "";
    return this.getMenuOptions().reduce((accumulator, currentValue, index) => 
      accumulator + `${index+1}. ${currentValue}\n`,
      menuOptionsToString
    );
  }

  public run(): void {
    this.linePrinter.print('Coming soon');
    this.linePrinter.print(this.menuOptionsToString());
    const value = this.lineReader.read();
    this.linePrinter.print(`You entered: ${value}`);
  }
}
