const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

	res.send({
		name: 'Colin',
		likes: [
			'Swimming',
			'Biking'
		]
	})
});

app.get('/About', (req, res) => {

	res.send('About Page');
});

app.get('/bad', (req, res) => {

	res.send({
		errorMessage: 'Unable to handel request'
	});
})

app.listen(3000);