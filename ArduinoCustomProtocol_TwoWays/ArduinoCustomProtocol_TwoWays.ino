#include <TinkerKit.h>

void setup() {
	Serial.begin(19200);
}

void loop() {
	delay(50);
	reciveData();
	
	delay(50);
	sendData();
}