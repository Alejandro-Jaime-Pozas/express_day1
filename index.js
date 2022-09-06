const express = require('express'); // this makes express a fn
const app = express();
const port = 3000; // the port it will use for http

app.set('view engine', 'ejs') // this sets the default engine to ejs embedded js templates

app.get('/', (req, res) => { // like the GET method for API, url first, req is like the request in postman, res is the response. 1st arg always req, 2nd the res
    res.render('index', {firstName: 'Alex', lastName: 'Jaime'}); // this is how we would send a response, first the file 'index', then the object {k:v}
})

app.get('/abc', (req, res) => {
    res.send('ABC!')
})


let users = [
    {
        id: 1, 
        username: 'brian',
        age: 55
    },
    {
        id: 2, 
        username: 'tay',
        age: 26
    },
    {
        id: 3, 
        username: 'bal',
        age: 22
    },
    
]

app.get('/users', (req, res) => {
    res.render('users', { users })
})


// this 'listens' for connections
app.listen(port, () => {
    console.log(`hello world app listening on port ${port}`)
});

