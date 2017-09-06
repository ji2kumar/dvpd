var util = require('util');
var bleno = require('bleno');

var Bulb_OnOff_Characteristic = function(){
    Bulb_OnOff_Characteristic.super_.call(this, {
        uuid: '616131',
        properties: ['read', 'write'],
        descriptors: [
            new bleno.Descriptor({
                uuid:'61613131',
                value: 'ON, Integer value'
            }),

        ],
        value: null
    });
    this._value = new Buffer('0');
};

//Inherting bleno's characteristic properties

util.inherits(Bulb_OnOff_Characteristic, bleno.Characteristic)

// on Request

Bulb_OnOff_Characteristic.prototype.onReadRequest = function(offset, callback){
    console.log('Read request accepted, value: ' + this._value);
    callback(this.RESULT_SUCCESS, this._value);
    if (this._value == '0'){
        console.log('Bulb is OFF\n');
    }
    if (this._value == '1') {
        console.log('Bulb is ON\n');
    }
};

// on Write

Bulb_OnOff_Characteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback){
    this._value = data;
    console.log('Write request accepted, value: ' + this._value);
    callback(this.RESULT_SUCCESS);
    if (this._value == '1') {
        console.log('Bulb is ON\n')
    };
    if (this._value == '0') {
        console.log('Bulb is OFF\n')
    }

};


module.exports = Bulb_OnOff_Characteristic;
