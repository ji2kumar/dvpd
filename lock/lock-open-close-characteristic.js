var util = require('util');
var bleno = require('bleno');

var LockCharacteristic = function(){
    LockCharacteristic.super_.call(this, {
        uuid: '636331',
        properties: ['read', 'write'],
        descriptors: [
            new bleno.Descriptor({
                uuid: '63633131',
                value: 'Lock'
            }),
        ],
        value: null

    });
    this._value = new Buffer('closed');
};

util.inherits(LockCharacteristic, bleno.Characteristic);

//on read request

LockCharacteristic.prototype.onReadRequest = function(offset, callback){
    console.log('Lock request accepted, value: ' + this._value);
    callback(this.RESULT_SUCCESS, this._value);
    
    if (this._value == 'closed'){
    
        console.log('Locked');
    }
    else if (this._value == 'opened'){

        console.log('Unlocked');
    }
    else {

        console.log('Access Code Error!');
    }

};

// on write request
LockCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback){
    this._value = data;
    console.log('Lock Write request is accepted, value: ' + this._value);
    callback(this.RESULT_SUCCESS);

      if (this._value == 'closed'){

        console.log('Locked');
    }
    else if (this._value == 'opened'){

        console.log('Unlocked');
    }
    else {

        console.log('Access Code Error!');
    }

};

module.exports = LockCharacteristic;
