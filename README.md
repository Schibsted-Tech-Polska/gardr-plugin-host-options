# Gardr Options Plugin (Host)

Gardr plugin to pass options object from host into ext. 

## Install

```
npm install gardr-plugin-host-options --save
```

## Bundle

In your host bundle file:

```javascript
    var gardrHost = require('gardr-host');
    var options = require('gardr-plugin-host-options');

    gardrHost.plugin(options);

    module.exports = gardrHost;
```

## Options

```sendOptions``` - boolean, enables/disables passing options into ext iframe.

## Example

```javascript
var gardr = gardrHost(...);
gardr.queue('ad', {
    url: 'my-adserver.com/ad.js',
    container: 'ad',
    sendOptions: true,
    ...
});
```

## Usage

Options (except for circular referencing objects, such as DOM elements) will be available in ext iframe under ```gardr.params.options```
