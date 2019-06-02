const express= require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');


// route get api/items
router.get('/', (req, res) => {
    Item.find()
    .then(items => res.json(items))
})


// route post api/items
router.post('/', (req, res) => {
    const newItem = new Item({
        title: req.body.title,
        body: req.body.body
    });
    
    newItem.save().then(item => res.json(item));
})

 

module.exports = router;