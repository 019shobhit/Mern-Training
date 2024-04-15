const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'contyent-Type':'text/html'
    });
    res.end('<h1> Hello World! </h1>');
});

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server running at http:`)
});