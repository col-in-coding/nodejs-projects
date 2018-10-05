console.log('Starting notes.js');

const fs = require('fs');

// Fatching all notes from file system
var fatchNotes = () => {

    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }

};

// Saving notes to the file system
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fatchNotes();
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
    // else return undefined
};

var getAll = () => {
    return fatchNotes();

}

var getNote = (title) => {
    var notes = fatchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);

    return filteredNotes[0];

};

var removeNote = (title) => {
    var notes = fatchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = function(note) {
    // Break on this line and use repl to output note
    debugger;
    // Use read command with --title
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote,
}