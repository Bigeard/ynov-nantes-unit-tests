const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("after a day, quality and sellin change", function() {
    // Given
    const items = [
      new Item("foo", 10, 10),
    ]

    // When
    const gildedRose = new Shop(items);
    const results = gildedRose.updateQuality();

    // Then
    const expected = [
      new Item("foo", 9, 9),
    ]

    expect(results[0].name).toBe(expected[0].name);
    expect(results[0].quality).toBe(expected[0].quality);
    expect(results[0].sellIn).toBe(expected[0].sellIn);
  });

  it("quality can never be less than 0", function() {
    // Given
    const items = [
      new Item("foo", 0, 0),
    ]

    // When
    const gildedRose = new Shop(items);
    const results = gildedRose.updateQuality();

    // Then
    const expected = [
      new Item("foo", -1, 0),
    ]

    expect(results[0].name).toBe(expected[0].name);
    expect(results[0].quality).toBe(expected[0].quality);
    expect(results[0].sellIn).toBe(expected[0].sellIn);
  });
});
