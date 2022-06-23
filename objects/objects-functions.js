let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}

let otherBook = {
    title: "A Peoples History",
    author: "Howard Zinn",
    pageCount: 723
}

function getSummary(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

function convertTemp(temp) {
    let celsius = parseFloat((temp - 32) * 5 / 9).toFixed(2)
    let kelvin = celsius + 273.15

    return {
        fahrenheit: temp,
        celsius: celsius,
        kelvin: kelvin
    }
}

let conversion = convertTemp(74)

console.log(`${conversion.fahrenheit}F is ${conversion.celsius}C and ${conversion.kelvin}K`)