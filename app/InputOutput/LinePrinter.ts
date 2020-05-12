/* This is the interface for a LinePrinter */
export interface LinePrinter {
  print(messageToPrint: string): void;
}

/* This is the LinePrinter implementation */
export class ConsolePrinter implements LinePrinter {
  public print(messageToPrint: string): void {
    console.log(messageToPrint);
  }
}
/* Stub class for LinePrinter for testing purposes */
export class StubPrinter implements LinePrinter {
  private printHistory: string[] = [];

  public print(messageToPrint: string): void {
    this.printHistory.push(messageToPrint);
  }

  public getPrintedLine(index: number) {
    return this.printHistory[index];
  }

  public resetPrintHistory(): void {
    this.printHistory = [];
  }
}
