// const bankUsers = [
//   {
//     name: '',
//     amount: '',
//     userimg: '',
//   }
// ]

class Account {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  static Transaction(userAcc, toAcc, account) {
    this.userAcc = userAcc;
    this.toAcc = toAcc;
    this.account = account;
  }

  deposit(amount) {
    this.balance += amount
  }
  
  withdraw(amount) {
    if(this.balance <= amount) {
      this.balance -= amount;
    }
    else {
      alert('Insufficient Balance')
    }
  }

}

class Transaction {
  constructor() {
    
  }

  transfer(amount) {

  }
  
  balance() {

  }
}