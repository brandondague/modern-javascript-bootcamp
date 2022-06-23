const notes = [{
    title: "My next trip",
    body: "I would like to go to Spain"
}, {
    title: "Habbits to work on",
    body: "Exercise"
}, {
    title: "Office modification",
    body: "Get a new chair"
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const filterNotes =  function (notes, query) {
    return notes.filter(function (note) {
        const titleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const bodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return titleMatch || bodyMatch
    })
}

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

// console.log(filterNotes(notes, 'new'))

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }


// const note = findNote(notes, "office modification")
// console.log(note)

// console.log(notes.length)
// console.log(notes)