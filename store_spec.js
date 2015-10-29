'use strict';

let Store = require('./store.js');
let Item = require('./item.js');
var store = new Store();

describe("Store", function(){
    it('should be a store', function(){
        expect(store).toBeDefined(true);
    });
    
    it('should be there items', function(){
        expect(store.items).toBeDefined(true);
    });
    
    it('should decrease quality for item in index 0', function(){
        store.items.push(new Item('item_1', 4, 6));
        store.update_inventory_quality();
        expect(store.items[0].quality).toEqual(5);
        store.setItems([]);
    });
    
    it('should decrease quality for item in index 1', function(){
        store.items.push(new Item('item_1', 4, 6));
        store.items.push(new Item('item_2', 4, 5));
        store.update_inventory_quality();
        expect(store.items[1].quality).toEqual(4);
        store.setItems([]);
    });
    
    it('should decrease quality for item in index 1 no less than 0', function(){
        store.items.push(new Item('item_1', 4, 6));
        store.items.push(new Item('item_2', 4, 1));
        store.update_inventory_quality();
        store.update_inventory_quality();
        expect(store.items[1].quality).not.toBeLessThan(0);
        store.setItems([]);
    });
});