const fs = require('fs');

var fetchNotes = () => {
    try {
      var noteString = fs.readFileSync("notes-data.json");
       return JSON.parse(noteString);
    } catch (error) {
      console.log("New File created!");
      return [];
    }
};
var saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};
var getAll = () => {
    return fetchNotes();
};
var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=> note.title === title);
    return filteredNotes[0];
};
var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=> note.title !== title);
    if (notes.length === filteredNotes.length){
        console.log('Note does not exists!. No changes made');
    }else {
        saveNotes(filteredNotes);
        console.log('Successfully Removed Note: ', title);
    }
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};