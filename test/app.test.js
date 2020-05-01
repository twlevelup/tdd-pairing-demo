var appClass = require("../src/app");
// This block tests the menu
// TODO: Remove arrow functions
describe('Menu', () => {
  const app = new appClass.App();
  const menuOptions = app.menu.options;

  test('The Menu has an option to Withdraw money', () => {
    expect(menuOptions).toContain('Withdraw money');
  });

  test('The Menu has an option to Check balance', () => {
    expect(menuOptions).toContain('Check balance');
  });
});