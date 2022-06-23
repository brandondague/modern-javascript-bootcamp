"use strict"

const titleElement = document.querySelector("#note-title")
const bodyElement = document.querySelector("#note-body")
const removeElement = document.querySelector("#remove-note")
const editedTime = document.querySelector("#edited-time")
const hashId = location.hash.substring(1)
const timestamp = moment().valueOf()

let notes = getSavedNotes()

let note = notes.find(note => note.id === hashId)

if (!note) {
    location.assign("/index.html")
}

titleElement.value = note.title
bodyElement.value = note.body
editedTime.innerHTML = generateLastEdited(note)

titleElement.addEventListener("input", (e) => {
    note.title = e.target.value
    note.updatedAt = timestamp
    editedTime.innerHTML = generateLastEdited(note)
    savedNotes(notes)
})

bodyElement.addEventListener("input", (e) => {
    note.body = e.target.value
    note.updatedAt = timestamp
    editedTime.innerHTML = generateLastEdited(note)
    savedNotes(notes)
})

removeElement.addEventListener("click", () => {
    removeNote(note.id)
    savedNotes(notes)
    location.assign("/index.html")
})

// Watch for changes in localStorage
window.addEventListener("storage", (e) => {
    if (e.key === "notes") {
        notes = JSON.parse(e.newValue)

        let note = notes.find(note => note.id === hashId)

        if (!note) {
            location.assign("/index.html")
        }
        
        titleElement.value = note.title
        bodyElement.value = note.body
        editedTime.innerHTML = generateLastEdited(note)
    }
})