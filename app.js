//3rd party modules
const fs = require('fs');
const _ = require("lodash");
const yargs = require('yargs');

//local modules
const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
}
const argv = yargs
    .command('add','Add new note',{
        title: titleOptions,
        body: bodyOptions
    })
    .command('list','List all notes')
    .command('read','Read a specified note',{
        title : titleOptions
    })
    .command('remove','Remove a specific note',{
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];
console.log('Command : ', command);
console.log('Yargs: ', argv);

if (command === 'add'){
   var note = notes.addNote(argv.title, argv.body);
   if (note){
       console.log(note.title, 'added successfully');
   } else {
       console.log('Duplicate note. Note not added to the file!');  
   }

} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log('Printing',allNotes.length, 'note(s).');
    allNotes.forEach((note) => console.log(note.title));

} else if (command === 'read'){
    var note = notes.getNote(argv.title);
    if (note){
        console.log('Title: ',note.title);
        console.log('Body: ',note.body);
    } else{
        console.log('Note title not found.');
    }

} else if (command === 'remove'){
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognised');
}


