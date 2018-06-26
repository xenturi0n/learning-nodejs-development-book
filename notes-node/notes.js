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

const _saveNotes = (notes) => {
    fs.writeFileSync(jsonFile, JSON.stringify(notes), 'utf8');
}

const addNote = (title, body, callback) => {
    try {

        var notes = _fetchNotes();

        if (_duplicatedNote(title, notes)) {
            throw errUtil.errBuilder(`ERROR:  El titulo ${title} ya existe en el archivo ${jsonFile}.`, errUtil.errCode.DUPLICATED_NOTE);
        }

        var note = { title, body };
        notes.push(note);
        // fs.writeFileSync(jsonFile, JSON.stringify(notes), 'utf8');
        _saveNotes(notes);
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
    return _fetchNotes();
}

const getNote = (title) => {
    var notes = _fetchNotes();
    var notesFiltered = notes.filter((note) => note.title === title);
    return notesFiltered[0];
}

const removeNote = (title) => {
    var notes = _fetchNotes(title);
    var filteredNotes = notes.filter((note) => note.title != title);
    _saveNotes(filteredNotes);
    return (notes.length - filteredNotes.length);
}

const logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}