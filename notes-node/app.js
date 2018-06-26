const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

// const command = argv._[0];

const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
}

const argv = yargs
            .command('list', 'List All Notes')
            .command('add', 'Add a New Note',{
                title: titleOptions,
                body: bodyOptions            
            })
            .command('read', 'Read one note', {
                title: titleOptions
            })
            .command('remove', 'Remove a note', {
                title: titleOptions
            })
            .help()
            .argv;

const command = argv._[0];

debugger;
switch (command) {
    case 'list':
        var allNotes = notes.getAll();
        debugger;
        console.log(`Printing ${allNotes.length} note(s).`);
        allNotes.forEach(note => notes.logNote(note));
        debugger;
        break;

    case 'add':
        console.log('=> Adding New Note');
        notes.addNote(argv.title, argv.body, (e, data) => {
            if (e) {
                console.log(e.message);
                return;
            } else {
                console.log(`OK: Note Created succefuly.`);
                notes.logNote({ title: argv.title, body: argv.body });
            }
        });
        break;

    case 'read':
        console.log('=> Reading Note');
        var note = notes.getNote(argv.title);
        note ? notes.logNote(note) : console.log(`${argv.title}, Not found.`);
        break;

    case 'remove':
        console.log('=> Removing Note');
        var removed = notes.removeNote(argv.title);
        var mensaje = removed ? `OK: ${removed} Notes Removed succefully.` : `Note Title: ${argv.title}, Not Found. ${removed} Removed.`;
        console.log(mensaje);
        break;

    default:
        console.log(`!!! Command == ${command} == not recognized.`);
        break;
}