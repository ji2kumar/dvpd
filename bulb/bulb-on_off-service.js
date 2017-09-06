var util = require('util');
var bleno = require('bleno')

// Characteristic for turning ON the Bulb
var Bulb_OnOff_Characteristic = require('./bulb-on_off-characteristic');

var Bulb_OnOff_PrimaryService = function() {
    Bulb_OnOff_PrimaryService.super_.call(this, {
        uuid: '6161',
        characteristics: [
            new Bulb_OnOff_Characteristic()
        ]
    });

};

util.inherits(Bulb_OnOff_PrimaryService, bleno.PrimaryService);

module.exports = Bulb_OnOff_PrimaryService;
