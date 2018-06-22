console.log('Satring notes');
const fs = require('fs');
const errUtil = require('./error-utilities');

const _duplicatedNote = (title, notes) => {
    return notes.find((note) => note.title === title);
}

const addNote = (title, body, callback) => {
    try {
        let jsonFile = 'notes-data.json';

        if (!fs.existsSync(jsonFile)) {
            fs.writeFileSync(jsonFile, '[]', 'utf8');
        }

        var notes = JSON.parse(fs.readFileSync('notes-data.json', 'utf-8'));

        if (_duplicatedNote(title, notes)) {
            throw errUtil.errBuilder(`ERROR:  El titulo ${title} ya existe en el archivo ${jsonFile}.`, errUtil.errCode.DUPLICATED_NOTE);
        }

        notes.push({ title, body });
        fs.writeFileSync(jsonFile, JSON.stringify(notes), 'utf8');

    } catch (e) {
        if (e.name === 'SyntaxError') {
            console.log(errUtil.errCode.JSON_FILE_BAD_SYNTAX);
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