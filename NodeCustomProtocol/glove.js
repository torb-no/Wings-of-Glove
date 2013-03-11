"use strict";

var SerialPort = require("serialport").SerialPort,
    objectConverter = require("./objectConverter");


exports.glove = function() {
  var g = {};
  
  var serialPort = new SerialPort("/dev/tty.usbserial-A800f3aE", {
    baudrate: 19200
  });
  
  g.recive = function(obj) {
    console.log("OBJECT RECIVER NOT SET");
  }
  
  g.connected = function(obj) {
    console.log("GLOVE CONNECTED NOT SET");
  }
  
  g.send = function(obj) {
    var data = "s;" + objectConverter.toArduino(obj);
    writeln(data);
    console.log("Sendt to glove: " + data);
  }
  
  function writeln(data) {
    serialPort.write(data + "\r\n");
  }
  
  serialPort.on("open", function() {
    console.log("serial open");
    g.connected();
    serialPort.on("data", serialPort_on_data);
  });
  
  var buffer = "";
  function serialPort_on_data(data) {
    buffer += data;
    
    // Check that buffer is valid data
    if ( (buffer.indexOf("\r") !== -1) && (buffer.indexOf("\r\nx" === -1)) ) {
      
      //Check if buffer is object
      if (buffer.indexOf("s;") !== -1) {
        var obj = objectConverter.toObject(buffer);
        g.recive(obj);
        buffer = "";
      }
      else {
        console.log(buffer);
        buffer = "";
      }
      
    }

    
  }
  
  return g;
}