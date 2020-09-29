const server = require('./server.js');;

const PORT = 5000;

server.get("/", (req, res) => {
    res.json({message: "Hello from the sprint Challenge!"});
})

server.listen(PORT, () => {
    console.log(`Server listening on localhost:${PORT}`)
})