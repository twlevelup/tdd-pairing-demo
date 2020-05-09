// This file contains Line Printers for printing lines
export interface LinePrinter {
  print(messageToPrint: string): void;
}

// This is the LinePrinter class
export class ConsolePrinter implements LinePrinter {
  public print(messageToPrint: string): void {
    console.log(messageToPrint);
  }
}

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
