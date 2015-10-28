'use strict';

let Item = require('./item.js');

describe("Item", function(){
    var item = new Item('Aged Brie', 3, 2);
    it('should be an item', function(){
        expect(item).toBeDefined(true);
    });
});