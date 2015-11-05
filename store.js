'use strict';

function Store  (){
    
    this.items = [];
    
    this.update_inventory_quality = function(){
        
        for(var item_index in this.items){
            
            if (this.items[item_index].quality > 0)
                this.items[item_index].quality--;
        }
    }
    
    this.update_inventory_sell_in = function(){
        
        for(var item_index in this.items){
            this.items[item_index].sell_in--;
        }
    }
    
    this.setItems = function (items){
        this.items = items;
    }
    
    var update_quality  = function() {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].quality > 0) {
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
              this.items[i].quality = this.items[i].quality - 1
            }
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].sell_in < 11) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1
                }
              }
              if (this.items[i].sell_in < 6) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1
                }
              }
            }
          }
        }
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].sell_in = this.items[i].sell_in - 1;
        }
        if (this.items[i].sell_in < 0) {
          if (this.items[i].name != 'Aged Brie') {
            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].quality > 0) {
                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                  this.items[i].quality = this.items[i].quality - 1
                }
              }
            } else {
              this.items[i].quality = this.items[i].quality - this.items[i].quality
            }
          } else {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1
            }
          }
        }
      }
    }
}

module.exports = Store;