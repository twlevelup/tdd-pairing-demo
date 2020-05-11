import { ConsolePrinter } from "./LinePrinter";
// This block tests the LinePrinter
describe(ConsolePrinter, () => {
  let linePrinter: ConsolePrinter;
  let consoleLogStub: jest.SpyInstance<any, any>;

  beforeEach(() => {
    linePrinter = new ConsolePrinter();
    // Spies on console.log so we are able to test if it was called properly
    consoleLogStub = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogStub.mockRestore();
  });

  it("prints a string", () => {
    linePrinter.print("something");

    expect(consoleLogStub).toHaveBeenCalledTimes(1);
    expect(consoleLogStub).toHaveBeenCalledWith("something");
  });
});
