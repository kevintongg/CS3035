const express = require('express');
const path = require('path');

const app = express();

const fullPath = path.join(__dirname, '/public');

app.use(express.static(fullPath));

app.get('/contactlist', (request, response) => {
  console.log('I received a GET request');

  const person1 = {
    name: 'Tim',
    email: 'tim@tim.com',
    number: '(111) 111-1111',
  };

  const person2 = {
    name: 'Emily',
    email: 'emily@emily.com',
    number: '(222) 222-2222',
  };

  const person3 = {
    name: 'John',
    email: 'john@john.com',
    number: '(333) 333-3333',
  };

  const contactlist = [person1, person2, person3];
  response.json(contactlist);
});

app.listen(3000);
console.log('Server running on port 3000');
