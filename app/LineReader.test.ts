import { LineReader } from './LineReader';
import fs from 'fs';
// This block tests the LineReader
// TODO: Remove arrow functions
describe('LineReader', () => {
  const lineReader = new LineReader(); // Make it static?
  // Spies on process.stdin.on so we are able to test if it was called properly
  // @ts-ignore
  jest.spyOn(process.stdin, 'on').mockImplementation(() => fs.createReadStream('test.txt'));

  it('reads a string', () => {
    lineReader.read();

    expect(process.stdin.on).toHaveBeenCalledTimes(1);
    expect(process.stdin.on).toHaveReturnedWith('something');
    // TODO: Do we need to assign it to a var and clean it afterwards?
    // mockRestore(); 
  });
});
