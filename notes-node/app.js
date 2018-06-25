console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const argv = require('yargs').argv;
const notes = require('./notes');

// console.log('process ', process.argv)
// console.log('yargs ',argv);

// const command = argv[0];
// console.log('command: comando');

const command = argv._[0];


switch (command) {
    case 'list':
        console.log('=> Listing Notes');
        notes.getAll();
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