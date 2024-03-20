const port = process.eventNames.port || 3001;
const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
   if (req.url === '/') {
      fs.readFile('index123.html', (err, data) => {
         if (!err) {
            res.write(data);
            res.end();
         }
      });
   } else if (req.url === '/greenwich') {
      fs.readFile('greenwich.html', (err, data) => {
         if (!err) {
            res.write(data);
            res.end();
         }
      });
   } else if (req.url === '/fpt') {
      fs.readFile('fpt.html', (err, data) => {
         if (!err) {
            res.write(data);
            res.end();
         }
      });
   } else if (req.url === '/hanoi') {
    fs.readFile('HaNoi.html', (err, data) => {
       if (!err) {
          res.write(data);
          res.end();
       }
    });
 } else if (req.url === '/danang') {
    fs.readFile('DaNang.html', (err, data) => {
       if (!err) {
          res.write(data);
          res.end();
       }
    });
 } else if (req.url === '/cantho') {
    fs.readFile('CanTho.html', (err, data) => {
       if (!err) {
          res.write(data);
          res.end();
       }
    });
 } else if (req.url === '/hochiminh') {
    fs.readFile('HoChiMinh.html', (err, data) => {
       if (!err) {
          res.write(data);
          res.end();
       }
    });
 } 
   else {
      res.end("<h1>404 - Not found</h1>")
   }
});
server.listen(port, () => {
    console.log('http://localhost:'+ port);
});