/*global describe, beforeEach, it */

'use strict';

var assert = require('assert'),
    gardrOptions = require('./index.js'),
    PluginApi = require('gardr-core-plugin').PluginApi;


var mockItem = function() {
    return {
        id: '' + Math.random(),
        options: {},
        getData: function() {
            return {};
        }
    };
};


describe('gardr-postscribe', function() {
    var pluginApi;

    beforeEach(function() {
        pluginApi = new PluginApi();
    });
    
    it('should be a function', function() {
        assert.equal(typeof gardrOptions, 'function');
    });

    it('should override getData method to include options when options.sendOptions is set to true', function() {
        var item = mockItem();

        item.options = {
            testOption: 'testOption',
            sendOptions: true
        };

        gardrOptions(pluginApi);

        pluginApi.trigger('item:beforerender', item);
        assert(item.getData().options.testOption === 'testOption', 'option was passed');
    });

});
