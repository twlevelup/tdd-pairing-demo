import readline from "readline-sync";

/* This is the interface for LineReader */
export interface LineReader {
  // Reads a line as a string
  read(query: string): string;
}

/* This is the LineReader implementation */
export class ConsoleReader implements LineReader {
  public read(query: string) {
    return readline.question(query);
  }
}

/* Stub class for LineReader for testing purposes */
export class StubReader implements LineReader {
  private lineToRead: string = "";
  private lastQuestion: string | null = null;

  public read(query: string) {
    this.lastQuestion = query;
    return `${this.lineToRead}`;
  }

  public getLastQuestion(): string | null {
    return this.lastQuestion;
  }

  public setLineToRead(newLineToRead: string) {
    this.lineToRead = newLineToRead;
  }
}
