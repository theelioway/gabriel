# Cheat mongoskin

## APIt

```
var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/integration_tests", {native_parser:true});

db.bind('article');
db.article.find().toArray(function(err, items) {
        db.close();
});

db.bind('article').bind({
    getByAuthor: function(author_id, callback) {
        this.findOne({author_id: author_id}, callback);
    }
});
db.article.getByAuthor(author_id, function(err, article) {
        console.log(article);
});

alias MongoClient.connect(...)
module.helper.toObjectID(hexStr)

convert String to ObjectID instance.
db.bind(name, options)

alias db[name] = db.collection(name, options)

db.bind('article')
db.article.find().toArray(function(err, items) {
  assert.ok(err == null);
});

db.admin(...)

alias new Admin(db, ...)
db.grid(...)

alias new Grid(db, ...)
db.gridStore(...)

alias new GridStore(db, ...)
collection.bind(extendObject)

each method of extendObject will be bind to collection.
collection.findById(id, ...)

alias collection.find({_id: toObjectID(id)}, ...)
collection.updateById(id, ...)

alias collection.update({_id: toObjectID(id)}, ...)
collection.removeById(id, ...)

alias collection.remove({_id: toObjectID(id)}, ...)
```
