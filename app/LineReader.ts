// This is the LineReader class
export class LineReader {
  public read() {
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    process.stdin.on('data', (value) =>  value);
    process.stdin.on('error', () => {
      console.log('error');
    })
  }
}