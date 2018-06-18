console.log('Satring notes');

const addNote = (title, body) => {
    console.log(`Titulo: ${title}\nBody: ${body}`);
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