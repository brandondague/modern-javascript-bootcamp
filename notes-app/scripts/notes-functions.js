"use strict"

// Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem("notes")

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

// Save notes to localStorage
const savedNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex(note => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for the note
const generateNoteDOM = (note) => {
    const noteElement = document.createElement("a")
    const textElement = document.createElement("p")
    const statusElement = document.createElement("p")

    // Setup note title text
    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = "Unnamed note"
    }
    textElement.classList.add("list-item__title")
    noteElement.appendChild(textElement)

    // Setup the link
    noteElement.setAttribute("href", `/edit.html#${note.id}`)
    noteElement.classList.add('list-item')

    // Setup the status message
    statusElement.textContent = generateLastEdited(note)
    statusElement.classList.add("list-item__subtitle")
    noteElement.appendChild(statusElement)

    return noteElement
}

// Sort notes by sortBy filter
const sortNotes = (notes, sortBy) => {
    if (sortBy === "byEdited") {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === "byCreated") {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === "byAlpha") {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

// Render application notes
const renderNotes = (notes, filters) => {
    const notesElement = document.querySelector("#notes")
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesElement.innerHTML = ""

    if (filteredNotes.length > 0) {
        filteredNotes.forEach(note => {
            notesElement.appendChild(generateNoteDOM(note))
        })    
    } else {
        const emptyMessage = document.createElement("p")
        emptyMessage.textContent = "No notes to show"
        emptyMessage.classList.add("empty-message")
        notesElement.appendChild(emptyMessage)
    }
}

const generateLastEdited  = (note) => `Last updated ${moment(note.updatedAt).fromNow()}`