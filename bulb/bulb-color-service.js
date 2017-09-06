var util = require('util');
var bleno = require('bleno')


var Bulb_Color_Characteristic = require('./bulb-color-characteristic');

var Bulb_Color_PrimaryService = function() {
    Bulb_Color_PrimaryService.super_.call(this, {
        uuid: '6262',
        characteristics: [
            new Bulb_Color_Characteristic()
        ]
    });

};


util.inherits(Bulb_Color_PrimaryService, bleno.PrimaryService);

module.exports = Bulb_Color_PrimaryService;
