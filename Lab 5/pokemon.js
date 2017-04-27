var db = connect('127.0.0.1:27017/pokemon');
var pokemon;

print('* Database created');

db.characters.insert({ name: 'Pikachu', health: '20' });
db.characters.insert({ name: 'Charmander', health: '19' });
db.characters.insert({ name: 'Bulbasaur', health: '21' });
db.characters.insert({ name: 'Squirtle', health: '18' });

print('* Documents created');

pokemon = db.characters.find();

print('* All documents:');

while (pokemon.hasNext()) {
  printjson(pokemon.next());
}

print('\n* Removed documents:');
db.characters.find().forEach((thisDoc) => {
  if (thisDoc.name === 'Bulbasaur') {
    db.characters.remove({ _id: thisDoc._id });
    printjson(thisDoc._id);
  }
  if (thisDoc.name === 'Squirtle') {
    db.characters.remove({ _id: thisDoc._id });
    printjson(thisDoc._id);
  }
});

print('\n* Updated database:');
db.characters.find().forEach((thisDoc) => {
  if (thisDoc.name === 'Pikachu') {
    db.characters.replaceOne({ _id: thisDoc._id }, { name: 'Pikachu', health: '21' });
    printjson(thisDoc._id);
  }
  if (thisDoc.name === 'Charmander') {
    db.characters.replaceOne({ _id: thisDoc._id }, { name: 'Charmander', health: '20' });
    printjson(thisDoc._id);
  }
});

pokemon = db.characters.find();

print('\n* All documents:');

while (pokemon.hasNext()) {
  printjson(pokemon.next());
}

print('\n* Single document');

const single = db.characters.findOne({ name: 'Pikachu' });
printjson(single);

db.dropDatabase();

print('* Database dropped');
