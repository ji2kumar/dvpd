var util = require('util');
var bleno = require('bleno');

var LockCharacteristic = require('./lock-open-close-characteristic');

var LockPrimaryService = function() { 
    LockPrimaryService.super_.call(this, {
        uuid: '6363',
        characteristics: [
            new LockCharacteristic()
        ]

    });

};

util.inherits(LockPrimaryService, bleno.PrimaryService);
module.exports = LockPrimaryService;
