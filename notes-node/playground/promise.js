var somePromise = new Promise((resolve, reject) => {});

somePromise.resolve('hello world');

console.log(somePromise);


somePromise.then((message) => {
	console.log('Success: ', message);
}, (errorMessage) => {
	console.log('Error: ', errorMessage);
});