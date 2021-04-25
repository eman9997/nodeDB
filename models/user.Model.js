

class Client {
  constructor(firstName,lastName,balance) {
    this.firstName = firstName
    this.lastName = lastName
    this.balance = balance
  }
  withdraw(moneyOut) {
    this.balance -= moneyOut;
    return this.balance
  }
  depost(moneyIn) {
    this.balance += moneyOut;
    return this.balance
  }
}

module.exports = Client;