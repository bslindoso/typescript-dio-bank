import { CPF, isValidCPF } from "../types/CPFType";
import { DIOAccount } from "./DIOAccount";

export class CustomerAccount extends DIOAccount {
  private document?: CPF; // CPFs can start with zero, and number does not allow to pass zeros on the left


  constructor(name: string, accountNumber: number, document?: CPF) {
    super(name, accountNumber);

    // validate a valid cpf before creation
    if (document) {
      if (isValidCPF(document)) {
        this.document = document;
      } else {
        throw new Error('Invalid CPF')
      }
    }

    console.log(this.printInstance(`=> Document: ${this.document}\n`))
  }

  setDocument = (document: CPF) => {
    if (isValidCPF(document)) {
      console.log(`Setting document to ${document}...`);
      this.document = document;
    } else {
      throw new Error('Invalid CPF')
    }
  }

  getDocument = () => {
    return this.document;
  }
}