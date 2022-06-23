const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: "Brandon",
    age: 30
}, {
    name: "Andrew",
    age: 27
}, {
    name: "Jess",
    age: 22
}]

const under30 = people.filter(person => person.age < 30)
console.log(under30)

const ageFilter = people.find(person => person.age === 22)
console.log(ageFilter.name)