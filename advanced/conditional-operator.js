// const age = 30
// const message = age >=18 ? "You can vote!" : "You cannot vote :("
// console.log(message)

const age = 30
const showPage = () => "Showing the page"
const showErrorPage = () => "Showing the error page"
const message = age >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ["Tyler", "Porter", "Brandon", "Jen", "Riley"]
const newMessage = team.length <= 4 ? "Team size: 3" : "Too many people on your team"
console.log(newMessage)