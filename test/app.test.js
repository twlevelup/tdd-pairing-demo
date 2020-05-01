var appClass = require("../src/app");
// This block tests the menu
// TODO: Remove arrow functions
describe('Menu', () => {
  const app = new appClass.App();
  test('The Menu shows an option to Withdraw money', () => {
    const menuOptions = app.menu.options;
    expect(menuOptions).toContain('Withdraw money');
  });
});