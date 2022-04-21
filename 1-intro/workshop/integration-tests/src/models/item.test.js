const { it } = require('@jest/globals');
const { expect } = require('@jest/globals');

const Item = require('../models/Item.js');
const ItemService = require('../services/itemService');
const {request} = require("express");

// assertEquals(chainePasseEnVue , chaineLueEnbase);
/*test('same string in input as recorded', () => {
    expect(true).toBe(true);
});*/

jest.setTimeout(12000);

test('l acces a la base n est pas assez performant' , () => {
    const timeToRequest = Item.find({});
})
//
test('endpoint /get vs extraction from base' , async () => {
    //const item = await ItemService.createItem(req.body);
    //const itemFromDataBase = await ItemService.find('id')

    const itemsFromBase = await ItemService.listItems();
    const response = request.get('/');
    expect(itemsFromBase).resolves.toBe(response);


})
/*
it('CalculateElectionResults : All the system working with an expected Octogon result', () => {
    const spy = jest.spyOn(tools, 'octogone').mockReturnValueOnce('Clint Eastwood'); //
    expect(calculateElectionResults(...validSet)).toBe('Clint Eastwood');
})
* */

