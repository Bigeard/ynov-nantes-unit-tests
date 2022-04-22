class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}



class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQualityRefacto() {
    this.items.forEach((item, i) => {
      switch (item.name) {
        case 'Aged Brie':
            if (item.sellIn < 0 && item.quality < 50) {
              item.quality = item.quality + 2;}
             else if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
        break;
        case 'Backstage passes to a TAFKAL80ETC concert':
            if (item.sellIn <= 0) {
                item.quality = 0;
            }
            else{ if(item.sellIn<50  ){
                item.quality = item.quality + 1;
            }
              if(item.sellIn<=10){
                item.quality = item.quality + 1;
              }
              if(item.sellIn<=5 ){
                item.quality = item.quality + 1;
              }
              // valider "testBackstage"
              if(item.sellIn == 0){
                item.quality = 0 ;
              }


            }
        break;
        case 'Conjured':
            if (item.sellIn < 0) {
                item.quality = item.quality + 1;}
            else if (item.quality > 0) {
                item.quality = item.quality - 2;
            }
            break;

        case 'Sulfuras, Hand of Ragnaros':
            item.quality = 80;
        break;
        default:
            if (item.quality > 0 && item.sellIn>0) {
              item.quality = item.quality - 1;
            }
            else {if (item.quality > 0 && item.sellIn<=0) {
              item.quality = item.quality - 2;
            }
            else{
              item.quality = 0;
            }}      
      }
      
    }
    );
    return this.items;
  }   
  
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }
    return this.items;
  }

  //retour qqchose
}

module.exports = {
  Item,
  Shop
}
