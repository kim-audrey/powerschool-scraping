const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip(); //.gz files
const gunzip = zlib.createGunzip();
const rs = fs.createReadStream('./example.txt', 'utf8');
const ws = fs.createWriteStream('example2.txt');
// rs.on('data',(chunk)=>{
//     console.log(chunk);
//     ws.write(chunk);
// })
rs.pipe(gzip).pipe(ws);