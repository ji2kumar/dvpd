var util = require('util');
var bleno = require('bleno');


var Bulb_Color_Characteristic = function(){
    Bulb_Color_Characteristic.super_.call(this, {
        uuid: '616132',
        properties: ['read', 'write'],
        descriptors: [
            new bleno.Descriptor({
                uuid:'61613231',
                value: 'color'
            }),

        ],
        value: null
    });
    this._value = new Buffer('0');
};

//Inherting bleno's characteristic properties

util.inherits(Bulb_Color_Characteristic, bleno.Characteristic)

// on Request

Bulb_Color_Characteristic.prototype.onReadRequest = function(offset, callback){
    console.log('Read request accepted, value: ' + this._value);
    callback(this.RESULT_SUCCESS, this._value);

    if (this._value == '0') {
        console.log('\x1b[1m%s\x1b[0m','Bulb is White\n');
    };
    if (this._value == '1') {
        console.log('\x1b[31m%s\x1b[0m','Bulb is Red\n');
    };
    if (this._value == '2') {
        console.log('\x1b[34m%s\x1b[0m','Bulb is Blue\n');
    };
    if (this._value == '3') {
        console.log('\x1b[35m%s\x1b[0m','Bulb is Pink\n');
    };
    if (this._value == '4') {
        console.log('\x1b[32m%s\x1b[0m','Bulb is Green\n');
    };
    if (this._value == '5') {
        console.log('\x1b[5m%s\x1b[0m','Bulb is Purple\n');
    };
    if (this._value == '6') {
        console.log('\x1b[33m%s\x1b[0m','Bulb is Yellow\n');
    };

};

// on Write

Bulb_Color_Characteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback){
    this._value = data;
    console.log('Write request accepted, value: ' + this._value);
    callback(this.RESULT_SUCCESS);
        
    if (this._value == '0') {
        console.log('\x1b[1m%s\x1b[0m','Bulb is White\n');
    };
    if (this._value == '1') {
        console.log('\x1b[31m%s\x1b[0m','Bulb is Red\n');
    };
    if (this._value == '2') {
        console.log('\x1b[34m%s\x1b[0m','Bulb is Blue\n');
    };
    if (this._value == '3') {
        console.log('\x1b[35m%s\x1b[0m','Bulb is Pink\n');
    };
    if (this._value == '4') {
        console.log('\x1b[32m%s\x1b[0m','Bulb is Green\n');
    };
    if (this._value == '5') {
        console.log('\x1b[5m%s\x1b[0m','Bulb is Purple\n');
    };
    if (this._value == '6') {
        console.log('\x1b[33m%s\x1b[0m','Bulb is Yellow\n');
    };

};


module.exports = Bulb_Color_Characteristic;
