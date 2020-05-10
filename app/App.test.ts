import { App } from "./App";
import { StubReader } from "./InputOutput/LineReader";
import { StubPrinter } from "./InputOutput/LinePrinter";

// This block tests the menu
describe("Menu", () => {
  let app: App;
  let lineReader: StubReader;
  let linePrinter: StubPrinter;

  beforeEach(() => {
    lineReader = new StubReader();
    linePrinter = new StubPrinter();
    app = new App({ lineReader, linePrinter });
  });

  describe("Menu options", () => {
    let menuOptions: string[];
    beforeEach(() => {
      menuOptions = app.getMenuOptions();
    });

    it("has an option to Withdraw money", () => {
      expect(menuOptions).toContain("Withdraw money");
    });

    it("has an option to Check balance", () => {
      expect(menuOptions).toContain("Check balance");
    });
  });

  it("waits reads a line and logs it to the console", () => {
    lineReader.setLineToRead("This line was set in the test");

    app.run();

    expect(linePrinter.getPrintedLine(2)).toEqual(
      "You entered: This line was set in the test"
    );
  });
});
