const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
//test hello world
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    console.log(items);
    expect(items[0].name).toBe("foo");
  });

  //test baisse de la qualité avec item normal -1
  it("test qualité baisse normal", function() {
    const gildedRose = new Shop([new Item("foo", 4, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });

  //test baisse de la qualité  avec item périmé -2
  it("test qualité baisse perimé",function() {
    const gildedRose = new Shop([new Item("foo", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });


  //test Aged Brie +1
  it("test Aged Brie augmente", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 4, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  }); 
  
  //test Aged Brie depasse pas 50 qualité
  it("test Aged Brie max 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 4, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  //test Aged Brie périmé +2
 it("test Aged Brie inférieur 0",function() {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  });

  //test sulfura perd pas qualité
  it("test sulfura ne perd pas qualité",function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 4, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(10); 
  });

  //test sulfura qualité supérieur 50
  it("test sulfura supérieur a 50",function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 4, 70)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(70); 
  

  });
    
  //test Backstage périmé  qualité 0
  it("test Backstage", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 1, 10)]);
    let items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  }); 

  
  //test Backstage entre 50 et 10
  it("test A qualité entre 50 et 10",function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 30, 10)]);
    let items = gildedRose.updateQuality();
     expect(items[0].quality).toBe(11);
  });


  //test Backstage qualité entre 10 et 5
  it("tests Backstage qualité entre 10 et 5",function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12); 
    
  });

  //test Backstage qualité entre 5 et 0
  it("tests Backstage qualité entre 5 et 0",function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });
  // feature testée : la qualité d'un produit ne peut être négative 
  // Given  : 1 produit dont la qualité est 0(zéro)
  // When : passer 1 tour de updateQuality
  // THEN : la qualité du produit reste à 0 et ne descend pas à -1
  it("qualité produit pas négative" , function(){
    const gildedRose = new Shop([new Item("Produit aléatoire", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThan(-1);
  });

  //feature testée : le brie ne vaut plus rien une fois la date dépassée
  // Given : 1 brie qui a atteint sonnderneir jour de validité
  // When : On passe 1 jour / 1 tour 
  // Then : la qualité est censé tombée à 0

  

  
  

});
