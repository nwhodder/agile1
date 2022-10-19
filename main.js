const http = require("http")

const port = 3000


/*/  Path Functions  /*/

function home(req, res) {
    res.writeHead(200, { "Contend-Type": "text/html" })
    res.end("HomePage")
}


/*/  Server Paths  /*/
http.createServer(

    (req, res) => {

        switch(req.url) {
            case "/":
                // Home Page Route
                home(req, res)
                break
        }

        if (req.url != "/favicon.ico"){
            console.log(`Served ${req.url}`)
        }
    }
).listen(port)

console.log(`Listening on localhost:${port}`)