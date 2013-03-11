"use strict";

var glove = new require("./glove.js").glove();

glove.recive = function(obj) {
	console.log(obj);
	var isAboveMid = (obj.x > 430);
	
	glove.send({led:isAboveMid});
}

glove.connected = function() {
	
}