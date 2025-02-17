import { CustomerAccount } from "./classes/CustomerAccount";
import { CompanyAccouny } from "./classes/CompanyAccount";
import { EmployeeAccount } from "./classes/EmployeeAccount";

class Main {
  constructor() {
    // creating a customer account
    const customerAccount1 = new CustomerAccount('Bruno', 2345678, "05245287852")
    customerAccount1.deposit(100)
    customerAccount1.withdraw(200)
    customerAccount1.withdraw(200)
    customerAccount1.withdraw(200)
    // customerAccount1.withdraw(1) // here will throw balance error, exceed overdraft
    console.log(customerAccount1.printInstance())
    customerAccount1.deposit(100)
    customerAccount1.deposit(100)
    customerAccount1.deposit(100)
    customerAccount1.deposit(100)
    customerAccount1.deposit(100)
    customerAccount1.deposit(100)
    console.log(customerAccount1.printInstance())


    // const customerAccount2 = new CustomerAccount('Renata', 3652125)
    // customerAccount2.setDocument('05365252122')

    const companyAccount1 = new CompanyAccouny('DIO', 123456, 12345678912345)
    companyAccount1.appliesForLoan(1000)
    console.log(companyAccount1.getBalance())
    companyAccount1.setStatus(false)
    // companyAccount1.withdraw(100) // account is inactive

    const employeeAccount1 = new EmployeeAccount('Matheus', 123456)
    employeeAccount1.deposit(150)



  }
}

new Main();