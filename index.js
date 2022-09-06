const express = require('express'); // this makes express a fn
const app = express();
const port = 3000; // the port it will use for http

app.set('view engine', 'ejs') // this sets the default engine to ejs embedded js templates

app.use(logger) // this means every req after line 7 will first use the logger middelware; check the logger function below for output

app.get('/', (req, res) => { // like the GET method for API, url first, req is like the request in postman, res is the response. 1st arg always req, 2nd the res
    console.log(req.test) // calling req.test from the logger fn below
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
    res.render('users', { users }) // here { users } is a LOCAL, is the same as {users: users}, sets the users to users
})

app.get('/users/:id', (req, res) => { // this gets the url made by the client/user
    const id = req.params.id; // refers to the app.get above after the :, so in this case 'id'. : means params
    for (let user of users){
        if (user.id == id){ // two equal signs since id is a string...
            res.render('user', { user }) // { user } is now a local, and can be used in ejs file
            
        }
    }
    res.send({error: `User with id ${id} does not exist`})
})

app.get('/test/:testId/:abc/:xyz', (req, res) => {
    console.log(req.params);
    res.send('Test')
})

function logger(req, res, next){
    console.log(req.originalUrl) // this gives us the URL of what we are doing
    req.test = 123 // here we are creating a .test property on the req
    next();
}


// this 'listens' for connections
app.listen(port, () => {
    console.log(`hello world app listening on port ${port}`)
});
