const express = require('express'); // this makes express a fn
const app = express();
const port = 3000; // the port it will use for http

app.get('/', (req, res) => { // like the GET method for API, url first, req is like the request in postman, res is the response. 1st arg always req, 2nd the res
    res.send('Hello Worlddddd'); // this is how we would send a response
})

// this 'listens' for connections
app.listen(port, () => {
    console.log(`hello world listening on port some ${port}`)
}) 