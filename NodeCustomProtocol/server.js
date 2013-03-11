"use strict";

var glove = new require("./glove.js").glove(),
	net = new require("./net.js").net();

glove.recive = function(obj) {
	var objForSending = getObjectForSending(obj);
	
	if (net.isConnected) {
		net.send(objForSending);
	}
};

net.recive = function(obj) {
	if (glove.isConnected) {
		glove.send(obj);
	}
};

function getObjectForSending(obj) {
	// X and Y is swtiched because Y on the accel is X in the game
	var o = {
		x: adjustAccelNum(obj.y),
		y: adjustAccelNum(obj.x)
	};
	
	return o;
}

var zeroPoint = 475,
	limit = 150;
function adjustAccelNum(_accelNum, limit) {
	var accelNum = _accelNum;
	accelNum -= zeroPoint; // Accelometer goes from 0 to 1023
	if (accelNum > limit) accelNum = limit;
	else if (accelNum < -limit) accelNum = -limit;

	return -accelNum;
}

