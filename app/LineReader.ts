import readline from 'readline-sync';
// This is the LineReader class
export class LineReader {
  public read(query:string) {
    return readline.question(query);
  }

  public amount(){
    return readline.question('Please enter amount: '); 
  }
}
