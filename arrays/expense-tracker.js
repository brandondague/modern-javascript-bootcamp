const account = {
    name: "Brandon Dague",
    expenses: [],
    income: [],
    expenseTotal: 0,
    incomeTotal: 0,
    balance: 0,
    addExpense: function (description, amount) {
        this.expenses.push({
            desciption: description, 
            amount: amount
        })
        this.expenseTotal += amount
        this.balance -= amount
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
        this.incomeTotal += amount
        this.balance += amount
    },
    getAccountSummary: function () {
        return `${this.name} has $${this.expenseTotal} in expenses, $${this.incomeTotal} in income, and a balance of $${this.balance}.`
    }
}

account.addIncome('Job', 3200)
account.addExpense('Rent', 1350)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())

