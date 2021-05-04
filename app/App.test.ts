import { App } from "./App";
import { StubReader } from "./InputOutput/LineReader";
import { StubPrinter } from "./InputOutput/LinePrinter";

// This block tests the App
describe(App, () => {
  let app: App;
  let lineReader: StubReader;
  let linePrinter: StubPrinter;

  beforeEach(() => {
    lineReader = new StubReader();
    linePrinter = new StubPrinter();
    app = new App({ lineReader, linePrinter });
  });

  it("prints a Welcome Message", () => {
    app.run();
    expect(linePrinter.getPrintedLine(0)).toEqual("Welcome to the Magic ATM");
  });

  it("prints Menu options", () => {
    const menuOptions = ["Withdraw money", "Check balance","Deposit", "Quit"];
    app.run();

    menuOptions.forEach((menuOption) => {
      expect(linePrinter.getPrintedLine(1)).toEqual(
        expect.stringContaining(menuOption)
      );
    });
  });

  it("waits, reads a line and logs it to the console", () => {
    lineReader.setLineToRead("This line was set in the test");

    app.run();

    expect(linePrinter.getPrintedLine(2)).toEqual(
      "You entered: This line was set in the test"
    );
  });
});
