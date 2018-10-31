const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

    // INDEX
    router.get('/', (req,res) => {
      collection
      .find()
      .toArray()
      .then((docs) => res.json(docs));
    })

    // CREATE
    router.post('/', (req,res) => {
      const newData = req.body;
      collection
      .insertOne(newData)
      .then(() => collection.find().toArray())
      .then((docs) => res.json(docs));
    })

    // DESTROY
    router.delete('/:id', (req, res) =>{
      collection
      .deleteOne( {_id: ObjectID(req.params.id)})
      .then(() => collection.find().toArray())
      .then((docs) => res.json(docs));
    })

    return router;
};

module.exports = createRouter;
