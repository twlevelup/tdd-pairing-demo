import readline from 'readline-sync';
// This is the LineReader class
export class LineReader {
  public read() {
    return readline.question('Please select an option: ');
  }
}
