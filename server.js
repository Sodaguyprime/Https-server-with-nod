//importing our http functions:
const http = require('http')
//selecting a port:
const port = 3000
//some error message for error handling
const { error } = require('console')
//function for reading files
const fs = require('fs')
//actually creating the server and telling it what to read or do:
const server = http.createServer(function(reg,res){
    // writing a head to make sure its working and importing the read file function:
    res.writeHead(200,{'content-type':'text/html'})
    // basic read functuion is as follows: fs.readfile(our file to read,error handling function)
    fs.readFile('Https server/index2.html',function(error,data){
        if(error){
            res.writeHead(404)
            res.write('error opening the html file')
        }else{
            
            res.write(data)
            res.write("file opened successfully,the content of the webpage is as follows:")
            // the 2nd fucntion above will display after the first content.
        }
        res.end()
    })
    // if i write the res.write("file opened successfully,the content of the webpage is as follows:") function here it will display on top of the page :)
})

//adding the fucntion that listens to our port:
// Its basic syntax is: server.listen(port,our error function)
server.listen(port,function(error){ 
    if(error){
        console.log('error connecting or creating server',error)
    }else{
        console.log("Listening on port: ", port)
    }
})