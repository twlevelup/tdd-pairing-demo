import { LineReader } from './LineReader'
import { LinePrinter } from './LinePrinter';
import { Menu } from './Menu';
import { FilterOption } from './FilterOption';

// This is the App class
export class App {
  private readonly menu: Menu;
  private readonly linePrinter: LinePrinter;
  private readonly lineReader: LineReader;

  constructor(
    menu: Menu = new Menu(),
    //filterOption: FilterOption = new FilterOption(),
    linePrinter: LinePrinter = new LinePrinter(),
    lineReader: LineReader = new LineReader()
  ) {
    this.menu = menu;
    //this.filterOption = filterOption;
    this.linePrinter = linePrinter;
    this.lineReader = lineReader;
  }

  public getMenuOptions(): Array<string> {
    return this.menu.getOptions();
  }

  public run(): void {
    this.linePrinter.print('Coming soon');
    this.linePrinter.print(this.menu.menuOptionsToString());
    const value = this.lineReader.read('Please select an option: ');
    this.linePrinter.print(`You entered: ${value}`);
    this.menu.menuFilterOption(value)
    
  }
}
