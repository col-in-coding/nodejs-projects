console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');
const yargs = require('yargs');

// var user = os.userInfo();
// console.log(user);

// var res = notes.addNote();
// console.log(res);

// notes.add(-2, 5);

// fs.appendFile('greetings.txt', `hello ${user.username} !, you are ${notes.age}.`, (err) => {
// 	if (err) throw err;

// 	console.log('appending file success');
// });


// console.log(_.isString(true));
// console.log(_.isString('Colin'));
// console.log(_.uniq(['Colin', 1, 2, 'Colin', 2, 2, 3]));


const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'	
};
const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
	
};


var argv = yargs
	.command('add', 'Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		title: titleOptions
	}).
	command('remove', 'Remove a note', {
		title: titleOptions
	})
	.help()
	.argv;

var command = argv._[0];
console.log("Command: ", command);
console.log("Yargs: ", argv);


if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	
	if (note) {
		console.log('Note Created');
		notes.logNote(note);
	} else {
		console.log('Note Title Taken');
	}

} else if (command === 'list') {
	var allNotes = notes.getAll();

	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {
	var note = notes.getNote(argv.title);

	if (note) {
		console.log('Note Read');
		notes.logNote(note);
	} else {
		console.log('Note not found');
	}

} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? "Note was removed" : "Note not found";
	console.log(message);
} else {
	console.log('Command not recognized');

}
