const express = require('express');
const path = require('path');
const mongojs = require('mongojs');
const bodyParser = require('body-parser');

const db = mongojs('todo', ['todo']);
const app = express();

const fullPath = path.join(__dirname, '/public');

app.use(express.static(fullPath));
app.use(bodyParser.json());

app.get('/todo/', (request, response) => {
  console.log('Received a GET request!');
  db.todo.find((err, docs) => {
    console.log(docs);
    response.json(docs);
  });
});
app.post('/todo/', (request, response) => {
  console.log(request.body);
  db.todo.save(request.body, (err, docs) => {
    response.json(docs);
  });
});

app.delete('/todo/:id', (request, response) => {
  const id = request.params.id;
  console.log(id);
  db.todo.remove({ _id: mongojs.ObjectId(id) }, (err, doc) => {
    response.json(doc);
  });
});

app.get('/todo/:id', (request, response) => {
  const id = request.params.id;
  db.todo.findOne({ _id: mongojs.ObjectId(id) }, (err, doc) => {
    response.json(doc);
  });
});

app.put('/todo/:id', (request, response) => {
  const id = request.params.id;
  console.log(id);
  db.todo.findAndModify(
    {
      query: { _id: mongojs.ObjectId(id) },
      update: {
        $set: {
          title: request.body.name,
          description: request.body.email,
          number: request.body.number,
          status: request.body.status,
        },
      },
      new: true,
    },
    (err, doc) => {
      response.json(doc);
    },
  );
});

app.listen(3000);
console.log('Server running on port 3000');
