import { Menu } from "./Menu";
import { StubPrinter } from "./InputOutput/LinePrinter";
import { Account } from "./Account";
import { StubReader } from "./InputOutput/LineReader";

describe(Menu, () => {
  describe('menuFilterOption', () => {
    let linePrinter: StubPrinter;
    let lineReader: StubReader;
    let account: Account;
    let menu: Menu;

    beforeEach(() => {
      linePrinter = new StubPrinter();
      lineReader = new StubReader();
      account = new Account(linePrinter, 9000);
      menu = new Menu({ linePrinter, lineReader, account });
    });

    it('should print the current balance when option 1 is selected', () => {
      menu.menuFilterOption('1');

      expect(linePrinter.getPrintedLine(0)).toEqual('Your current balance is: $9000');
    });

    describe('when option 3 is selected', () => {
      beforeEach(() => {
        lineReader.setLineToRead('1000');

        menu.menuFilterOption('3');
      });

      it('should prompt for a deposit amount', () => {
        expect(lineReader.getLastQuestion()).toEqual('Please enter an amount to deposit: ');
      });

      it('should update the account balance', () => {
        expect(account.checkBalance()).toEqual(10000);
      });

      it('should print the new account balance', () => {
        expect(linePrinter.getPrintedLine(0)).toEqual('You have deposited $1000.');
        expect(linePrinter.getPrintedLine(1)).toEqual('Your new account balance is: $10000');
      });
    })
  });
});
