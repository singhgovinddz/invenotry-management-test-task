function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [
  new Item("Slfuras, Hand of Ragnaros", 45, -12),
  new Item("conjured Suluras, Hand of Ragnaros", 45, -12),
];

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    let category = items[i].name.split(" ")[0].toLowerCase();
    if (category !== "conjured") {
      if (
        items[i].name != "Aged Brie" &&
        items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (items[i].quality > 0) {
          if (items[i].name != "Sulfuras, Hand of Ragnaros") {
            items[i].quality = items[i].quality - 1;
          }
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1;
          if (items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            if (items[i].sell_in < 11) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1;
              }
            }
            if (items[i].sell_in < 6) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1;
              }
            }
          }
        }
      }
      if (items[i].name != "Sulfuras, Hand of Ragnaros") {
        items[i].sell_in = items[i].sell_in - 1;
      }
      if (items[i].sell_in < 0) {
        if (items[i].name != "Aged Brie") {
          if (items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            if (items[i].quality > 0) {
              if (items[i].name != "Sulfuras, Hand of Ragnaros") {
                items[i].quality = items[i].quality - 1;
              }
            }
          } else {
            items[i].quality = items[i].quality - items[i].quality;
          }
        } else {
          if (items[i].quality < 50) {
            items[i].quality = items[i].quality + 1;
          }
        }
      }
      if (items[i].quality > 50) {
        if (items[i].name != "Sulfuras, Hand of Ragnaros") {
          items[i].quality = 50;
        } else {
          items[i].quality = 80;
        }
      }
      if (items[i].name == "Sulfuras, Hand of Ragnaros") {
        items[i].quality = 80;
      }

      if (items[i].quality < 0) {
        items[i].quality = 0;
      }
    } else {
      items[i].name = items[i].name.slice(items[i].name.indexOf(" ") + 1);
      if (
        items[i].name != "Aged Brie" &&
        items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (items[i].quality > 1) {
          if (items[i].name != "Sulfuras, Hand of Ragnaros") {
            items[i].quality = items[i].quality - 2;
          }
        }
      } else {
        if (items[i].quality < 49) {
          items[i].quality = items[i].quality + 2;
          if (items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            if (items[i].sell_in < 11) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 2;
              }
            }
            if (items[i].sell_in < 6) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 2;
              }
            }
          }
        }
        if (items[i].quality == 49) {
          items[i].quality = items[i].quality + 1;
          if (items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            if (items[i].sell_in < 11) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 2;
              }
            }
            if (items[i].sell_in < 6) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 2;
              }
            }
          }
        }
        if (items[i].quality == 50) {
          if (items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            if (items[i].sell_in < 11) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 2;
              }
            }
            if (items[i].sell_in < 6) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 2;
              }
            }
          }
        }
      }
      if (items[i].name != "Sulfuras, Hand of Ragnaros") {
        items[i].sell_in = items[i].sell_in - 1;
      }
      if (items[i].sell_in < 0) {
        if (items[i].name != "Aged Brie") {
          if (items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            if (items[i].quality > 1) {
              if (items[i].name != "Sulfuras, Hand of Ragnaros") {
                items[i].quality = items[i].quality - 2;
              }
            } else {
              if (items[i].name != "Sulfuras, Hand of Ragnaros") {
                items[i].quality = items[i].quality - items[i].quality;
              }
            }
          } else {
            items[i].quality = items[i].quality - items[i].quality;
          }
        } else {
          if (items[i].quality < 50) {
            items[i].quality = items[i].quality + 2;
          }
        }
      }
      if (items[i].quality > 50) {
        if (items[i].name != "Sulfuras, Hand of Ragnaros") {
          items[i].quality = 50;
        } else {
          items[i].quality = 80;
        }
      }
      if (items[i].name == "Sulfuras, Hand of Ragnaros") {
        items[i].quality = 80;
      }
      if (items[i].quality < 0) {
        items[i].quality = 0;
      }
    }
  }
  return items;
}
console.log(update_quality(items));
