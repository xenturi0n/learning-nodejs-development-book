console.log('Satring notes');

const addNote = (title, body) => {
    console.log(`Titulo: ${title}\nBody: ${body}`);
}

const getAll = () => {
    console.log('Getting all notes')
}

module.exports = {
    addNote,
    getAll
}