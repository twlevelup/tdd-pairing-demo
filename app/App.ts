// This is the App class
export class App {
  private readonly menu: { options: Array<string> };

  constructor() {
    this.menu = {
      options: [
        'Check balance',
        'Withdraw money'
      ]
    }
  }

  public getMenuOptions(): Array<string> {
    return this.menu.options;
  }

  public run(): void {
    console.log('Coming soon');
  }
}
