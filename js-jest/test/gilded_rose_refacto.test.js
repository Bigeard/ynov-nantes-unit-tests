const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose Refacto", function() {
//test hello world
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQualityRefacto();
    console.log(items);
    expect(items[0].name).toBe("foo");
  });

  //test baisse de la qualité avec item normal -1
  it("test qualité baisse normal", function() {
    const gildedRose = new Shop([new Item("foo", 4, 10)]);
    const items = gildedRose.updateQualityRefacto();
    expect(items[0].quality).toBe(9);
  });

  //test baisse de la qualité  avec item périmé -2
  it("test qualité baisse perimé",function() {
    const gildedRose = new Shop([new Item("foo", 0, 10)]);
    const items = gildedRose.updateQualityRefacto();
    expect(items[0].quality).toBe(8);
  });


  //test Aged Brie +1
  it("test Aged Brie augmente", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 4, 10)]);
    const items = gildedRose.updateQualityRefacto();
    expect(items[0].quality).toBe(11);
  }); 
  
  //test Aged Brie depasse pas 50 qualité
  it("test Aged Brie max 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 4, 50)]);
    const items = gildedRose.updateQualityRefacto();
    expect(items[0].quality).toBe(50);
  });

  //test Aged Brie périmé +2
 it("test Aged Brie inférieur 0",function() {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 10)]);
    const items = gildedRose.updateQualityRefacto();
    expect(items[0].quality).toBe(12);
  });

  //test sulfura perd pas qualité
  it("test sulfura ne perd pas qualité",function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 4, 10)]);
    const items = gildedRose.updateQualityRefacto();
    expect(items[0].quality).toBe(80); 
  });

  //test sulfura qualité égale a 80
  it("test sulfura égale a 80",function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 4, 50)]);
    const items = gildedRose.updateQualityRefacto();
    expect(items[0].quality).toBe(80); 
  });

  //test Backstage périmé  qualité 0
  it("test Backstage", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
    let items = gildedRose.updateQualityRefacto();
   
    expect(items[0].quality).toBe(0);
  }); 

  //test Backstage entre 50 et 10
  it("test A qualité entre 50 et 10",function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 30, 10)]);
    let items = gildedRose.updateQualityRefacto();
     expect(items[0].quality).toBe(11);
  });

  //test Backstage qualité entre 10 et 5
  it("test Backstage qualité entre 10 et 5",function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)]);
    let items = gildedRose.updateQualityRefacto();
    expect(items[0].quality).toBe(12); 
    
  });

  //test Backstage qualité entre 5 et 0
  it("test Backstage qualité entre 5 et 0",function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
    let items = gildedRose.updateQualityRefacto();
    expect(items[0].quality).toBe(13);
  });
  // feature testée : la qualité d'un produit ne peut être négative 
  // Given  : 1 produit dont la qualité
  // given 1 produit qui unproduit backsta
  // when un tour
  //then le produit + 3 en qualité est 0(zéro)
  // When : passer 1 tour de updateQualityRefacto
  // THEN : la qualité du produit reste à 0 et ne descend pas à -1
  it("test qualité produit pas négative" , function(){
    const gildedRose = new Shop([new Item("Produit aléatoire", 10, 0)]);
    const items = gildedRose.updateQualityRefacto();
    expect(items[0].quality).toBeGreaterThan(-1);
  });

  // Même test avec un dataSet
  const dataSet = [
    ["Produit aléatoire", -100, -100],
    ["Backstage passes to a TAFKAL80ETC concert", 50, 3],
    ["Sulfuras, Hand of Ragnaros", 100, 100],
    ["XXXXXX", 0, -1],
    ["Aged Brie", 100, -3],
  ];

  it.each(dataSet)('test qualité produit pas négative', (name, sellIn, quality) => {
    const gildedRose = new Shop([new Item("Produit aléatoire", 10, 0)]);
    const items = gildedRose.updateQualityRefacto();
    expect(items[0].quality).toBeGreaterThan(-1);
  });

  //feature testée : le brie ne vaut plus rien une fois la date dépassée
  // Given : 1 brie qui a atteint sonnderneir jour de validité
  // When : On passe 1 jour / 1 tour 
  // Then : la qualité est censé tombée à 0

});
