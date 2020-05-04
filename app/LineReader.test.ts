import { LineReader } from './LineReader';
import readline from 'readline-sync';
// This block tests the LineReader
// TODO: Remove arrow functions
describe('LineReader', () => {
  const lineReader = new LineReader(); // Make it static?
  // Spies on readline.question so we are able to test if it was called properly
  jest.spyOn(readline, 'question').mockImplementation(() => 'something');

  it('reads a string', () => {
    lineReader.read();

    expect(readline.question).toHaveBeenCalledTimes(1);
    expect(readline.question).toHaveReturnedWith('something');
    // TODO: Do we need to assign it to a var and clean it afterwards?
    // mockRestore(); 
  });
});
