console.log('Starting App');

//3rd party modules
const fs = require('fs');
const _ = require("lodash");
const yargs = require('yargs');

//local modules
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
// console.log('Command : ', command);
// console.log('Yargs: ', argv);

if (command === 'add'){
   var note = notes.addNote(argv.title, argv.body);
   if (typeof note === "undefined"){
       console.log('Duplicate note. Note not added to the file!');
   } else {
       console.log(note.title, 'added successfully');
   }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read'){
    notes.getNote(argv.title);
} else if (command === 'remove'){
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognised');
}


