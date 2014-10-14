'use strict';

var gardrOptions = function(gardrPluginApi) {

    // filter circular objects (JSON.stringify throws an error while converting such objects)
    var filterCircularObjects = function(obj) {
        var filtered = {};
        Object.keys(obj).forEach(function(prop) {
            // remove DOM objects
            if(!(typeof obj[prop] === 'object' && obj[prop] !== null && obj[prop].nodeType)) {
                filtered[prop] = obj[prop];
            }
        });
        return filtered;
    };

    gardrPluginApi.on('item:beforerender', function(item) {
        if(item.options.sendOptions === true) {
            // override item.getData method to include options
            (function(originalGetData) {
                item.getData = function() {
                    var data = originalGetData.call(item),
                        options = filterCircularObjects(item.options);

                    data.options = options;
                    return data;
                };
            }(item.getData));
        }
    });

};

module.exports = gardrOptions;
