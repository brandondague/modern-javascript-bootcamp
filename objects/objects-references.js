let myAccount = {
    name: "Brandon Dague",
    expenses: 0,
    income: 0
}

function addIncome(account, income) {
    account.income += income
}

function addExpense(account, amount) {
    account.expenses += amount
}

function resetAccount(account){
    account.expenses = 0
    account.income = 0
}

function getAccountSummary(account){
    console.log(`Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`)
}
