let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = "Animal Farm"

console.log(`${myBook.title} by ${myBook.author}`)

let person = {
    name: "Morgan",
    age: 20,
    location: "Tampa"
}

console.log(`${person.name} is ${person.age} in ${person.location}`)

person.age++

console.log(`${person.name} is ${person.age} in ${person.location}`)