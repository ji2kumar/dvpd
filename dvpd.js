var bleno = require('bleno');
var os = require('os');
var util = require('util');


// Service module for ON/OFF
var Bulb_OnOff_Service = require('./bulb/bulb-on_off-service');

// Service module for Color change
var Bulb_Color_Service = require('./bulb/bulb-color-service');

// Lock module for Open/Close
var Lock_OpenClose_Service = require('./lock/lock-open-close-service');

// Beacon Beep module 
var BeaconService = require('./beacon/beacon-service');

//Bulb New service object
var bulb_onoff_primaryservice = new Bulb_OnOff_Service();
var bulb_color_primaryservice = new Bulb_Color_Service();

// Lock New Service Object
var lock_openclose_primaryservice = new Lock_OpenClose_Service();

//beacon New service object
var beaconprimaryservice = new BeaconService();

//---------------------------------------------------------------------------------------------------------------------

console.log('--------------------------------------------------------------');
console.log('	\x1b[32m%s\x1b[0m',' Damn Vulnerable Peripheral Device (DVPD) ');
console.log('	\x1b[32m%s\x1b[0m', '	   - Version 1.0 -');
console.log('	\x1b[32m%s\x1b[0m', '     By Jitendra Kumar (@ji2kumar) ');
console.log('--------------------------------------------------------------\n');

//---------------------------------------------------------------------------------------------------------------------

//console.log('node version: v6.10.3');
//var msg = '[+] Platform: %s\n[+] Architecture: %s\n[+] Endianness of the CPU: %s\n';
//var msg2 = util.format(msg, os.platform(), os.arch(), os.endianness());
//console.log(msg2);

//---------------------------------------------------------------------------------------------------------------------

var vuln = ' Following Attacks can be performed against DVPD \n\n[1] Unauthorized Access and Attribute Modification \n[2] Whitelist based Access Bypass \n[3] Sniffing Attack \n[4] Man-in-the-Middle Attack \n[5] Replay Attack \n[6] Jamming \n';
console.log('\x1b[32m%s\x1b[0m',vuln);
console.log('--------------------------------------------------------------\n')

//---------------------------------------------------------------------------------------------------------------------


// Connected client address

bleno.on('accept', function(clientAddress) {
    console.log('[+] Connection Accepted from: ' + clientAddress);
    
    if ((clientAddress == 'ec:88:92:4a:06:60') || (clientAddress == 'ec:88:92:4a:06:89')){

// Setting Services for Beacon
        bleno.setServices([beaconprimaryservice], function(error) {
            console.log('[+] Beacon setServices: ' + (error ? 'error' + error : 'Success\n'));
        });
    }
    else if (clientAddress == 'ec:88:92:4a:06:88'){

// Setting Services for Lock
        bleno.setServices([lock_openclose_primaryservice], function(error) {
            console.log('[+] Lock setServices: ' + (error ? 'error' + error : 'Success\n'));
        });
    }
    else {

// Setting Services for Bulb - Access to everyone
        bleno.setServices([bulb_onoff_primaryservice, bulb_color_primaryservice, beaconprimaryservice], function(error) {
            console.log('[+] Bulb setServices: ' + (error ? 'error' + error : 'Success\n'));
        });
    }



});

// Client disconnected message
bleno.on('disconnect', function(clientAddress) {
    console.log('[-] Client disconnected: ' + clientAddress);
});

// change state to "on" and advertising device name and uuid

bleno.on('stateChange', function(state) {
    console.log('[+] stateChange: ' + state);
    if (state == 'poweredOn') {
        bleno.startAdvertising('DVPD', ['44565044']);
    }
    else {
        bleno.stopAdvertising();
    }
    
});

// Advertisements about services

bleno.on('advertisingStart', function(error) {
    err = error ? 'error' : 'success'
    if (err == 'error') {
        console.log('[-] Error: ' + err);
    }
    else {
        console.log('[+] advertisingStart: ' + err);

    }
    

});
