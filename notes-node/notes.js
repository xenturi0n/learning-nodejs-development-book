console.log('Satring notes');
const fs = require('fs');
const errUtil = require('./error-utilities');

let jsonFile = 'notes-data.json';

const _duplicatedNote = (title, notes) => {
    return notes.find((note) => note.title === title);
}

const _fetchNotes = () => {
    try {
        var notesString = fs.readFileSync(jsonFile);
        return JSON.parse(notesString);
    } catch (e) {
        console.log(e);
        return [];
    }
}

const addNote = (title, body, callback) => {
    try {

        var notes = _fetchNotes();

        if (_duplicatedNote(title, notes)) {
            throw errUtil.errBuilder(`ERROR:  El titulo ${title} ya existe en el archivo ${jsonFile}.`, errUtil.errCode.DUPLICATED_NOTE);
        }

        var note = { title, body };
        notes.push(note);
        fs.writeFileSync(jsonFile, JSON.stringify(notes), 'utf8');
        callback(null, note);

    } catch (e) {
        if (e.name === 'SyntaxError') {
            callback(errUtil.errBuilder('ERROR:  Sintaxis incorrecta e archivo JSON.', errUtil.errCode.JSON_FILE_BAD_SYNTAX));
            return;
        } else if (e.code === 'ENOENT') {
            callback(errUtil.errBuilder('ERROR:  El arvhivo al que intentas acceder no existe.', errUtil.errCode.FILE_NOT_EXISTS));
            return;
        } else {
            callback(e);
        }
    }
    return;
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