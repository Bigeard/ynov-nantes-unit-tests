class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items){
    this.items = items;
  }

  updateQuality() {
    this.items.map((item) => {
      if (item.quality > 0) {
        item.quality -= 1;
      }
      item.sellIn -= 1;
      return item;
    })
    return this.items
  }
}


module.exports = {
  Item,
  Shop,
}
