export abstract class DIOAccount {

  // attributes
  protected readonly name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  private status: boolean = true;
  private readonly overdraft: number = 500; // crédito especial
  protected outstandingBalance: number = 0;

  // constructor
  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  // methods
  deposit = (amount: number): void => {
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

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      // validate if the value will be negative and if the final value does not exceed overdraft
      let previewBalance = this.balance - amount
      if (previewBalance < 0 && Math.abs(previewBalance) > Math.abs(this.overdraft)) {
        throw new Error(`Insufficient balance`)
      } else if (previewBalance < 0) {
        this.outstandingBalance += Math.abs(previewBalance)
        this.balance = 0
        console.log(`Withdrawing $${amount} from ${this.name}'s account... New balance: $${this.balance}... New Outstanding Balance: $${this.outstandingBalance}`);

      } else {
        this.balance -= amount;
        console.log(`Withdrawing $${amount} from ${this.name}'s account... New balance: $${this.balance}`);
      }
    }
  }

  // setters
  setStatus = (status: boolean): void => {
    console.log(`Changing status from ${this.name}'s account to ${status}...`);
    this.status = status;
  }

  // getters
  getName = (): string => {
    return this.name;
  }

  getAccountNumber = (): number => {
    return this.accountNumber;
  }

  getBalance = (): number => {
    return this.balance;
  }

  getOutstandingBalance = (): number => {
    return this.outstandingBalance;
  }

  // verify if account is active
  protected validateStatus = (): boolean => {
    if (this.status) return this.status
    throw new Error('Account is inactive!');
  }

  public printInstance = (attStr?: string): string => {
    return `New ${this.constructor.name} created:
  => Name: ${this.name}
  => Account Number: ${this.accountNumber}
  => Balance: $${this.balance}
  => Overdraft: $${this.overdraft}
  => Outstanding Balance: $${this.outstandingBalance}
  ${attStr ? attStr : ''}`
  }
}