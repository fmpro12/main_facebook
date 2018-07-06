const http = require('http');

let app = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  let resObject = {
    posts: [
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
          "street": "Rex Trail",
          "suite": "Suite 280",
          "city": "Howemouth",
          "zipcode": "58804-1099",
          "geo": {
            "lat": "24.8918",
            "lng": "21.8984"
          }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
          "name": "Johns Group",
          "catchPhrase": "Configurable multimedia task-force",
          "bs": "generate enterprise e-tailers"
        }
      }]
    }
  res.end(JSON.stringify(resObject));
});

app.listen(3001, '127.0.0.1');
console.log('Server is running');