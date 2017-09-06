# Damn Vulnerable Peripheral Device (DVPD) version 1.0

	Damn Vulnerable Peripheral Device (DVPD) for Bluetooth LE Hacking learning and practice.
	DVPD is a nodejs tool designed to understand and learn more about Bluetooth LE devices 
	hacking without the need of actual hardware device


## Installation

        git clone https://github.com/ji2kumar/dvpd.git

## Pre-requisites

	1. Nodejs Bleno Package (https://github.com/sandeepmistry/bleno#prerequisites)
	2. Bluetooth LE 4.0 Adapter

## Run

	sudo node dvpd.js

## Tested Platform

	1. Kali Linux
	2. Raspberry Pi3

## DVPD Mobile Application

	1. APK file can be downloaded from google play store [will be updated soon]
	2. DVPD mobile application source code can be taken from "https://github.com/0ddblade/dvpd"


## Troubleshooting

	1. if script not running, check Bluetooth adapter state.
	       > hciconfig
	         if "DOWN" then run following command:
	             > hciconfig hci0 up   [e.g. hci0, might be different for you so put which is in use for you]

## Author

	Name: Jitendra Kumar
	Twitter: @ji2kumar

## Contributors

	1. Narendra Kumar (twitter: @0ddhawk)
