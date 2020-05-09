import readline from 'readline-sync';

export interface LineReader {
  // Reads a line as a string
  read(query: string): string;
}

// This is the LineReader class
export class ConsoleReader implements LineReader {
  public read(query: string) {
    return readline.question(query);
  }
}

export class StubReader implements LineReader {
  private lineToRead: string = '';

  public read(query: string) {
    return `${this.lineToRead}`;
  }

  public setLineToRead(newLineToRead: string) {
    this.lineToRead = newLineToRead;
  }
}
