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
            }
        });
        break;
    case 'read':
        console.log('=> Reading Note');
        notes.getNote(argv.title);
        break;
    case 'remove':
        console.log('=> Removing Note');
        notes.removeNote(argv.title);
        break;
    default:
        console.log(`!!! Command == ${command} == not recognized.`);
        break;
}