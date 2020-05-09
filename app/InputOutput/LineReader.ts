import readline from 'readline-sync';

export interface LineReader {
  // Reads a line as a string
  read(): string;
}

// This is the LineReader class
export class ConsoleReader implements LineReader {
  public read() {
    return readline.question('Please select an option: ');
  }
}

export class StubReader implements LineReader {
  private lineToRead: string = '';

  public read() {
    return `${this.lineToRead}`;
  }

  public setLineToRead(newLineToRead: string) {
    this.lineToRead = newLineToRead;
  }
}
