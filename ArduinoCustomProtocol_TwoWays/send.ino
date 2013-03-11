/* TKButton button(O0); */
TKAccelerometer accelometer(I0, I1);

void sendData() {
	Serial.print("s;"); // Start indicator
	
	Serial.print("x:");
	Serial.print(accelometer.getXAxis());
	Serial.print(";");
	
	Serial.print("y:");
	Serial.print(accelometer.getYAxis());
	Serial.print(";");
	
	// Serial.print("btn:");
	// if (button.get() == HIGH) { Serial.print("down"); }
	// else { Serial.print("up"); }
	// Serial.print(";");
	
	Serial.println("");
}