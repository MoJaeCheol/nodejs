var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');



var server = http.createServer(function(req, res){

const filePath = path.join(__dirname, '/index.html')
    fs.readFile(filePath,(err,data)=>{
      if (err) console.log(err)
      const mimeType = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.eot': 'appliaction/vnd.ms-fontobject',
        '.ttf': 'aplication/font-sfnt'
      }
      const ext = path.parse(req.url).ext;
const publicPath = path.join(__dirname, '/')
if (Object.keys(mimeType).includes(ext)) {
  fs.readFile(`${publicPath}${req.url}`, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not found');
    } else {
      res.statusCode = 200
      res.setHeader('Content-Type', mimeType[ext]);
      res.end(data)
    }
  })
} else {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    }
    })
    });

server.listen(3000);                        //Server now listens at port 8080
