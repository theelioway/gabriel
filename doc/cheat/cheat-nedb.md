# Cheat NeDB

- <https://github.com/louischatriot/nedb#updating-documents>

```
var Datastore = require('nedb');
var things = new Datastore();


things.ensureIndex({ fieldName: '_id', unique: true });
```

## Query

- `$lt`, `$lte:` less than, less than or equal
- `$gt`, `$gte`: greater than, greater than or equal
- `$in`: value contained in array
- `$nin`: value not contained in array
- `$ne`: not equal
- `$exists`: checks for the existence (or non-existence) of a given property
- `$regex`: match a property's string with regex

```
things.findOne({ twitter: '@ScottWRobinson' }, function(e, thing) {
  if (e) {
    console.log({ e })
  } else {
    console.log({ thing })
  }
});

things.find({ _id: { $in: some._id.list }}, function(e, thingList) {
  if (e) {
    console.log({ e })
  } else {
    console.table(thingList)
  }
})
```

## CRUD

```
things.insert(singleThing, function(err, thing) {
    console.log('Saved thing:', thing.name)
})
things.insert(listOfThings, function(err, things) {
    things.forEach(function(d) {
        console.log('Saved thing:', d.name)
    })
})

// Replace a document by another
db.update({ name: 'Jupiter' }, { name: 'Pluton'}, {}, function (err, numReplaced) {
  // numReplaced = 1
  // The doc #3 has been replaced by { _id: 'ABC', planet: 'Pluton' }
  // Note that the _id is kept unchanged, and the document has been replaced
  // (the 'system' and inhabited fields are not here anymore)
});

// Set an existing field's value
db.update({ god: 'solar' }, { $set: { god: 'solar system' } }, { multi: true }, function (err, numReplaced) {
  // numReplaced = 3
  // Field 'system' on Mars, Earth, Jupiter now has value 'solar system'
});

// Setting the value of a non-existing field in a subdocument by using the dot-notation
db.update({ planet: 'Mars' }, { $set: { "data.satellites": 2, "data.red": true } }, {}, function () {
  // Mars document now is { _id: 'id1', system: 'solar', inhabited: false
  //                      , data: { satellites: 2, red: true }
  //                      }
  // Not that to set fields in subdocuments, you HAVE to use dot-notation
  // Using object-notation will just replace the top-level field
  db.update({ planet: 'Mars' }, { $set: { data: { satellites: 3 } } }, {}, function () {
    // Mars document now is { _id: 'id1', system: 'solar', inhabited: false
    //                      , data: { satellites: 3 }
    //                      }
    // You lost the "data.red" field which is probably not the intended behavior
  });
});

things.remove({ _id: "ABC" }, function(err, numDeleted) {
     console.log('Deleted',  "ABC", ' thing')
})
things.remove({ name: "Bob" }, { multi: true }, function(err, numDeleted) {
     console.log('Deleted', numDeleted, ' bob(s)')
})
things.remove({  }, { multi: true }, function(err, numDeleted) {
     console.log('Deleted everything, all', numDeleted, 'thing(s)')
})
```
