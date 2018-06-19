console.log('Satring notes');
const fs = require('fs');

const _duplicatedNote = (title, notes) => {
    return notes.find((note) => note.title === title);
    // return notes.find(title, (note) => note.title === title);
}

const addNote = (title, body) => {
    console.log(`Titulo: ${title}\nBody: ${body}`);
    try {
        var notes = JSON.parse(fs.readFileSync('notes-data.json'));
        if (_duplicatedNote(title, notes)) {
            console.log("========================= nota duplicada")
        } else {
            console.log("========================= No duplicada")
        }
    } catch (e) {
        if (e.errno === -4058) {
            let notes = [];
            notes.push({ title, body });
            fs.writeFileSync('notes-data.json', JSON.stringify(notes));
        } else if (e.name === 'SyntaxError') {
            console.error('El archivo notes-data.json esta corrompido o no cuenta con la sintaxis json correcta.');
        } else {
            console.log(e.message);
        }
        return;
    }

    let note = {
        title,
        body
    };

    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    console.log(notes);
}

const getAll = () => {
    console.log('Getting all notes')
}

const getNote = (title) => {
    console.log(`Getting note "${title}"`);
}

const removeNote = (title) => {
    console.log(`Removing note: "${title}"`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}