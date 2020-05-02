import { App } from './App';
// This block tests the menu
// TODO: Remove arrow functions
describe('Menu', () => {
  const app = new App();
  const menuOptions = app.getMenuOptions();

  test('The Menu has an option to Withdraw money', () => {
    expect(menuOptions).toContain('Withdraw money');
  });

  test('The Menu has an option to Check balance', () => {
    expect(menuOptions).toContain('Check balance');
  });
});
