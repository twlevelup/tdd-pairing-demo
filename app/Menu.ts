
// This is the Menu class
export class Menu {

  private readonly options: Array<string>;

  constructor(options: Array<string> = new Array(
    'Check balance',
    'Withdraw money',
    'Deposit money',
    'Quit'
    )
  ) {
    this.options = options;
  }

  public getOptions(): Array<string> {
    return this.options;
  }

  public menuOptionsToString(): string {
    let menuOptionsToString = "";
    return this.getOptions().reduce((accumulator, currentValue, index) => 
      accumulator + `${index+1}. ${currentValue}\n`,
      menuOptionsToString
    );
  }
}
