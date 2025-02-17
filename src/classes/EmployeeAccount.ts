import { DIOAccount } from './DIOAccount';

export class EmployeeAccount extends DIOAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);

    console.log(this.printInstance())
  }

  deposit = (amount: number): void => {
    amount += 10; // adds 10 to the amount deposited
    if (this.validateStatus()) {
      // If there is outstanding balance, the value will be discounted from it
      if (this.outstandingBalance > 0) {

        if (amount > this.outstandingBalance) {
          amount -= this.outstandingBalance
          this.outstandingBalance = 0
          this, this.balance += amount
        } else {
          this.outstandingBalance -= amount
        }
        console.log(`Depositing $${amount} from ${this.name}'s account... New balance: $${this.balance}... New outstanding balance: $${this.outstandingBalance}`);

      } else {
        this.balance += amount;
        console.log(`Depositing $${amount} from ${this.name}'s account... New balance: $${this.balance}`);
      }
    }
  }
}