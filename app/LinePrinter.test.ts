import { LinePrinter } from './LinePrinter';
// This block tests the LinePrinter
// TODO: Remove arrow functions
describe('LinePrinter', () => {
  const linePrinter = new LinePrinter(); // Make it static?
  // Spies on console.log so we are able to test if it was called properly
  jest.spyOn(console, 'log');

  it('prints a string', () => {
    linePrinter.print('something');

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('something');
    // TODO: Do we need to assign it to a var and clean it afterwards?
    // mockRestore(); 
  });
});
