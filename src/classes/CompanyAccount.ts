import { DIOAccount } from "./DIOAccount";

export class CompanyAccouny extends DIOAccount {
  cnpj: number;

  constructor(name: string, accountNumber: number, cnpj: number) {
    super(name, accountNumber);
    this.cnpj = cnpj;

    console.log(this.printInstance(`=> CNPJ: ${this.cnpj}\n`))
  }

  appliesForLoan = (value: number): void => {
    console.log(`Loan of $${value} requested. Loan approved!`);
    this.deposit(value);
  }

  setCnpj = (cnpj: number): void => {
    console.log(`Setting CNPJ from ${this.cnpj} to ${cnpj}...`)
    this.cnpj = cnpj;
  }

  getCnpj = (): number => {
    return this.cnpj;
  }
}