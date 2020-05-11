import readline from "readline-sync";
import { ConsoleReader, LineReader } from "./LineReader";

// This block tests the LineReader
describe(ConsoleReader, () => {
  let lineReader: ConsoleReader;
  let readlineStub: jest.SpyInstance<string, any>;

  beforeEach(() => {
    lineReader = new ConsoleReader();
    // Spies on readline.question so we are able to test if it was called properly
    readlineStub = jest
      .spyOn(readline, "question")
      .mockImplementation(() => "something");
  });

  afterEach(() => {
    readlineStub.mockRestore();
  });

  it("reads a string", () => {
    lineReader.read("Enter a value");

    expect(readline.question).toHaveBeenCalledTimes(1);
    expect(readline.question).toHaveReturnedWith("something");
  });
});
