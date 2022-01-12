// Create and start our own server
// const http = require('http');
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));

// req = request, res = response (can be used as shorthand to pass parameters)
app.get('/currenttime', function (req, res) { 
  res.send('<h1>' + new Date().toISOString() + '</h1>');
}); // localhost:3000/currenttime

app.get('/', function (req, res) { 
  res.send('<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>');
}); // localhost:3000/
// Express will set the 200 status as default if not manually set

app.post('/store-user', function (req, res) { 
  const userName = req.body.username;
  console.log(userName);
  res.send('<h1>Username Stored Dickhead!</h1>');
});

app.listen(3000); 



// Original beginning 
// function handleRequest(request, response) { 

//   if (request.url === '/currenttime') {
//     response.statusCode = 200;
//     response.end('<h1>' + new Date().toISOString() + '</h1>');
//   } else if (request.url === '/') { 
//     response.statusCode = 200;
//     response.end('<h1>Hello Dickhead!</h1>');
//   }
//   // localhost:3000/currenttime
//   // localhost:3000
  
// }

// const server = http.createServer(handleRequest);

// server.listen(3000);


// amazon.com => Send a request to Amazon's server
// amazon.com:443 (ssl encrypted)   amazon.com:80 (not encrypted)

