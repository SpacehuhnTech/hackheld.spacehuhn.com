---
sidebar_position: 60
---

# FAQ

## What can it do?

The HackHeld is a portable device that can be used to test the security of your WiFi network. 
With the Deauther firmware installed, it can perform a variety of attacks against WiFi networks, including:

* Deauthentication attacks
* Beacon attacks
* Probe attacks

Read more about the Deauther firmware on [deauther.com](https://deauther.com).  

## How do I use it?

After assembly and firmware installation, you can use it like any other ESP8266 Deauther with display. 
Visit [deauther.com](https://deauther.com/docs/category/usage) for more information on how to use the Deauther firmware.

## What about battery support?

I designed the HackHeld Vega with a focus on ease of assembly and low cost to allow as many people as possible to build their own HackHeld. 
Adding battery support would have increased the cost and complexity of the build significantly, especially for beginners. 

Luckily, the HackHeld Vega is powered by a standard USB-C connection. So you can use a power bank to power it on the go. Some phones even support reverse charging, which means you can use your phone to power the HackHeld Vega. 

The source files are open-source; you can modify them to add battery support. But I want to keep the HackHeld Vega as simple as possible, so I won't add battery support to the official design.
That being said, I hope to make a different, more premium version HackHeld in the future, with battery support and new features.

## Can it do other things?

Yes! The HackHeld Vega is an ESP8266 development board with a display. 
So although the ESP8266 Deauther is the only "official" firmware for it, you can use it to build your own projects with the [Arduino IDE](https://www.arduino.cc/en/software) and the [ESP8266 Arduino Core](https://arduino-esp8266.readthedocs.io/en/latest/installing.html).
Select the `LOLIN(WEMOS) D1 R2 & mini` board in the Arduino IDE, and you're good to go. 

The pinout is printed on the back of the PCB.
```
OLED:
D1 SCL
D2 SDA 

BUTTONS:
DO Left
D3 B 
D4 A 
D5 UP
D6 DOWN 
D7 RIGHT 

NEOPIXEL:
D8 DI
```