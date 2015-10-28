'use strict';

let Store = require('./store.js');

describe("Store", function(){
    it('should be a store', function(){
        var store = new Store();
        expect(store).toBeDefined(true);
    });
});