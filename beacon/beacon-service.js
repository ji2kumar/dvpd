var util = require('util');
var bleno = require('bleno');

var BeaconCharacteristic = require('./beacon-characteristic');

var BeaconPrimaryService = function() { 
    BeaconPrimaryService.super_.call(this, {
        uuid: '6363',
        characteristics: [
            new BeaconCharacteristic()
        ]

    });

};

util.inherits(BeaconPrimaryService, bleno.PrimaryService);
module.exports = BeaconPrimaryService;
