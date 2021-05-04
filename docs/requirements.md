Magic ATM simulator
-------------------

## Business Case
The IT Imaginary Bank has approached us to design and implement an ATM System for them. Based on their requirements, we have decided to develop a new system named Magic ATM.

We will be incrementally adding more functionality by delivering small releases. In order to easily add more functionality in the future as well as maintain a high level of quality, Magic ATM will be built using a test driven approach. The requirements are given below.

### User Stories
1. **First Release**
    * **Welcome Message** - As a customer, I would like to see a welcome message when I start the application, so that I feel welcome and know that Magic ATM is available.

    * **Main Menu** - As a customer, instead of automatically seeing the options, I would like to see a list of options and be able to choose one. The list is:
      * Check balance
      * Withdraw money
      * Deposit money
      * Quit

    * **Withdraw Money** - As a customer, I would like to be able to withdraw money from an account.

    * **Successful Withdrawal** - As a customer, I would like to know that my withdrawal was successful “Thank you! Your withdrawal was completed.”.

    * **Check Balance** - As a customer, I would like to be able to check the balance from an account.

    * **Quit** - As a customer, I would like to continue choosing options until I choose to 'Quit'.

1. **Second Release**
    * **Unsuccessful Withdrawal** - As a customer, I would like to be notified if the money I tried to withdraw was not available by seeing the message, “You can not withdraw amount $amount”, so that I know that I need to select a different amount.

    * **Deposit Money** - As a customer, I would like to be able to deposit money to an account.

    * **Invalid Menu Option** - As a customer, I would like to be notified when I choose an invalid option with the message “Select a valid option!”, so that I can know when I need to re-enter my choice.

1. **Third Release**
    * **Choose bills when withrdrawing** - As a customer I would like to choose exactly what notes I want to withdraw based on the ATM availability.

## Tech requirements
All the code must be developed using [TDD](https://www.freecodecamp.org/news/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2/) and [Pair Programming](https://www.freecodecamp.org/news/the-benefits-and-pitfalls-of-pair-programming-in-the-workplace-e68c3ed3c81f/). Magic ATM needs to be a console application. We do not need a database for these releases.
