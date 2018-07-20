// var obj = {
//     name: "Manohar"
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Manohar", "age":38}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync(
    'notes.json',originalNoteString
);

var noteString = fs.readFileSync('notes.json');
//convert to note object
var noteObj = JSON.parse(noteString);

console.log(typeof noteObj);
console.log(noteObj.title);
