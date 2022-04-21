const { it } = require('@jest/globals');
const { expect } = require('@jest/globals');

const Item = require('../models/Item.js');
const ItemService = require('../services/itemService');
const {request} = require("express");


const mongoose = require('mongoose');

// assertEquals(chainePasseEnVue , chaineLueEnbase);
/*test('same string in input as recorded', () => {
    expect(true).toBe(true);
});*/

//jest.setTimeout(12000);

test('creation d un item et presence rn base' , async () => {


        // creation d un contexte donc d 'une nouvelle base pour chaque test
        mongoose.connect('mongodb://mongo:27017/docker-node-mongo-test1', { useNewUrlParser: true })
            .then(() => console.log('MongoDB Connected'))
            .catch(err => console.log(err));

    //const itemCreated = await ItemService.createItem("toto");
    const item = new Item({name: "toto"});
    await item.save();
    //const retourOrm = await Item.find({name:"toto"}).exec();
    const retourOrm = await Item.findOne({name:"toto"}).exec();

    expect(item.name).toBe(retourOrm.name);
    // expect(item.date).toBe(retourOrm.date);

})
//
test('endpoint /get vs extraction from base' , async () => {

    //const item = await ItemService.createItem(req.body);
    //const itemFromDataBase = await ItemService.find('id')


    //const response = request.get('/');

})

