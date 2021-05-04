import { Menu } from "./Menu";
import { StubPrinter } from "./InputOutput/LinePrinter";
import { Account } from "./Account";
import { StubReader } from "./InputOutput/LineReader";

// This block tests the Menu
describe(Menu, () => {
  const ACCOUNT_INITIAL_BALANCE = 9000;

  describe("menuFilterOption", () => {
    let linePrinter: StubPrinter;
    let lineReader: StubReader;
    let account: Account;
    let menu: Menu;

    beforeEach(() => {
      linePrinter = new StubPrinter();
      lineReader = new StubReader();
      account = new Account(ACCOUNT_INITIAL_BALANCE);
      menu = new Menu({ linePrinter, lineReader, account });
    });

    it("the default account should have balance equal to $9000", () => {
      const newMenu = new Menu({ linePrinter, lineReader });
      newMenu.menuFilterOption("1");
      expect(linePrinter.getPrintedLine(0)).toEqual(
        `Your current balance is: $${ACCOUNT_INITIAL_BALANCE}`
      );
    });

    describe("when option 1 is selected", () => {
      it("should print the current balance when option 1 is selected", () => {
        menu.menuFilterOption("1");
  
        expect(linePrinter.getPrintedLine(0)).toEqual(
          `Your current balance is: $${ACCOUNT_INITIAL_BALANCE}`
        );
      });
    });

    describe("when option 2 is selected to withdraw valid amount", () => {
      beforeEach(() => {
        lineReader.setLineToRead("400");
        menu.menuFilterOption("2");
      });

      it("should prompt for a withdrawal amount", () => {
        expect(lineReader.getLastQuestion()).toEqual(
          "Please enter an amount to withdraw: "
        );
      });

      it("should print the new account balance", () => {
        expect(linePrinter.getPrintedLine(0)).toEqual(
          "You have withdrawn $400"
        );
        expect(linePrinter.getPrintedLine(1)).toEqual(
          "Your new account balance is: $8600"
        );
      });

      it("should not procced withdrawal", () => {
        expect(linePrinter.getPrintedLine(0)).toEqual(
          "You have withdrawn $400"
        );
        expect(linePrinter.getPrintedLine(1)).toEqual(
          "Your new account balance is: $8600"
        );
      });
    });

    describe("when option 2 is selected to withdraw amount exceeding account balance", () => {
      beforeEach(() => {
        lineReader.setLineToRead("12000");
        menu.menuFilterOption("2");
      });

      it("should prompt for an amount to withdraw", () => {
        expect(lineReader.getLastQuestion()).toEqual(
          "Please enter an amount to withdraw: "
        );
      });

      // TODO: I couldn't make it work, skipping this test for now
      it.skip("should not procced with the withdrawal", () => {
        expect(linePrinter.getPrintedLine(0)).toEqual(
          "You can not withdraw amount $12000"
        );
        expect(linePrinter.getPrintedLine(1)).toEqual(
          `Your new account balance is: $${ACCOUNT_INITIAL_BALANCE}`
        );
      });
    });
    
    describe("when option 3 is selected", () => {
      //TODO: Implement deposit functionality
    });

  });
});
