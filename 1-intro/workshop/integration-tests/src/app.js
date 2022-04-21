const express = require('express');
const app = express();
const ItemService = require('./services/itemService');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    try {
        const items = await ItemService.listItems();
        res.render('index', { items });
    } catch (e) {
        console.log(e);
        res.status(404).json({ msg: 'No items found' });
    }
});

app.post('/item/add', async (req, res) => {
    try {
        const item = await ItemService.createItem(req.body);
        res.redirect('/');
    } catch (e) {
        console.log(e);
        res.status(500).json({ msg: 'Item creation error' });
    }
});


module.exports = app;
