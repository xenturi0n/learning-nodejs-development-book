var fs = require('fs');

console.time('playground')
var obj = {
    name: 'Alfonso'
}

var noteObject = { title: 'some title', body: 'some body' }
var originalNoteString = JSON.stringify(noteObject);
fs.writeFileSync('my-notes.json', originalNoteString);

var noteString = fs.readFileSync('my-notes.json');
var note = JSON.parse(noteString);

console.log(typeof(note));
console.log(note.body);