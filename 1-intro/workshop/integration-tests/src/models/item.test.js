const { it } = require('@jest/globals');
const { expect } = require('@jest/globals');

const Item = require('../models/Item.js');
const ItemService = require('../services/itemService');
const {request} = require("express");


const mongoose = require('mongoose');

describe('procedure tests d integrations' , () => {

    beforeAll(async()  => {
        mongoose.connect('mongodb://mongo:27017/docker-node-mongo-test1', { useNewUrlParser: true })
            .then(() => console.log('MongoDB Connected'))
            .catch(err => console.log(err));
        return Item.deleteMany({});
    })

    afterEach( async () => {
        return Item.deleteMany({});
    })

    afterAll(() => {
        mongoose.connection.close({});
    })

    test('test bateau' , async () => {
        expect('vrai').toBe('vrai');
    })

    test('creation d un item et presence rn base' , async () => {


        mongoose.connect('mongodb://mongo:27017/docker-node-mongo-test1', { useNewUrlParser: true })
            .then(() => console.log('MongoDB Connected'))
            .catch(err => console.log(err));

        const item = new Item({name: "toto"});
        await item.save();
        //const retourOrm = await Item.find({name:"toto"}).exec();
        const retourOrm = await Item.findOne({name:"toto"}).exec();

        expect(item.name).toBe(retourOrm.name);


    })
    test('update d un item' , async () => {


        const myItem = new Item({name : "toUpdtate"});
        const updatedItem = await  Item.findOneAndUpdate({name: "toUpdate"} , {name : "updated"} ,() => {});

        const itemUpdated = Item.findOne({name : "updated"});


        expect(myItem._id).toBe(itemUpdated._id);


    })

    test("mock mongoose " , async () => {



        jest.spyOn(Item , 'find').mockImplementationOnce(() => Item.findOne());
        const myItem = new Item ({name: "toto"});
        const mySecondItem = new Item({name: "toto"});
        const onlyOneItemSupposed = Item.find({name: "toto"});
        var myArray = [];
        myArray.push(onlyOneItemSupposed);
        expect(1).toBe(myArray.length);




    })

})

