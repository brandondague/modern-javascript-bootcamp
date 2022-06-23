function isValidPassword (password) {
    if (password.length > 8 && !password.includes("password")) {
        return true
    }
    return false
}

console.log(isValidPassword("asdfp"))
console.log(isValidPassword("acb123!@#$%^&"))
console.log(isValidPassword("asdfpasswordpoi098"))