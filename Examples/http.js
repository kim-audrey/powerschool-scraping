const http = require('http');
const fs = require('fs');
// const server = http.createServer((req,res)=>{
//     if(req.url === '/') //anything in domain 
//         console.log("H");
//else{

//      res.write('Hello World');
//      res.end();

//}
// })

// server.listen('3000');

const server = http.createServer((req,res)=>{
    const rs = fs.createReadStream();
    res.writeHead(200, {'Content-type' : 'image/png'}); //200=everything good
    rs.pipe(res);
}).listen(3000)