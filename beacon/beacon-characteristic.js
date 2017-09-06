var util = require('util');
var bleno = require('bleno');

var BeaconCharacteristic = function(){
    BeaconCharacteristic.super_.call(this, {
        uuid: '636331',
        properties: ['read', 'write'],
        descriptors: [
            new bleno.Descriptor({
                uuid: '63633131',
                value: 'Beep sound'
            }),
        ],
        value: null

    });
    this._value = new Buffer('0');
};

util.inherits(BeaconCharacteristic, bleno.Characteristic);

//on read request

BeaconCharacteristic.prototype.onReadRequest = function(offset, callback){
    console.log('Read request accepted, value: ' + this._value);
    callback(this.RESULT_SUCCESS, this._value);

    if (this._value == '0'){

        console.log('Beep Off');    

    }

    else if(this._value == '1'){

        console.log('Beep Beep Beep :-D');

    }

    else {

        console.log('Access Code Error');

    }

};

// on write request
BeaconCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback){
    this._value = data;
    console.log('Write request is accepted, value: ' + this._value);
    callback(this.RESULT_SUCCESS);

    if (this._value == '0'){

        console.log('Beep Off');

    }

    else if(this._value == '1'){

        console.log('Beep Beep Beep :-D');

    }

    else {

        console.log('Access Code Error');

    }


};


module.exports = BeaconCharacteristic;
