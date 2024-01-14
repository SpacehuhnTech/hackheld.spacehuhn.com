---
sidebar_position: 55
---

# Troubleshooting

So you built your HackHeld Vega, but it doesn't work?  
I'm sorry. That sucks! Here are some things you can try to fix it.  

## Hardware

The most common problem is bad soldering. Happens to the best of us.  

- Check if all solder joints are good and there are no bridges between pins. If you're unsure, reflow the solder joints with a soldering iron.  
[![Adafruit Soldering Reference Card](https://cdn-blog.adafruit.com/uploads/2016/12/solder-card.png)](https://blog.adafruit.com/2016/12/26/new-reference-card-soldering-101/)

- Double-check that you followed the [assembly guide](/assembly) correctly.  

## Firmware

If you're sure your soldering is good, re-flash the firmware.  

- Follow the firmware installation guide [here](/firmware). 

- If you're having trouble with the firmware installation, check out this blog post I wrote [How to deal with "timed out waiting for packet header"](https://blog.spacehuhn.com/espcomm). It contains some tips and tricks that might help you. Sometimes, it's as simple as using a different USB cable or power source.

## What else can I do?

If only the display doesn't work, but the ESP8266 still works, you can try connecting to the HackHeld Vega via WiFi (`pwned` with password `deauther`). In that case, the OLED is broken or has a connection issue.

If no `pwned` network shows up, the ESP8266 is not working correctly. If re-flashing the firmware didn't help, the D1 Mini might be broken. 

Theoretically, the PCB could have a manufacturing defect, but that's unlikely. The same goes for the buttons and the LED. It's way more likely that there's a soldering defect.

If you still need help, it's hard to tell what's wrong over the internet without having the device in front of me.  

:::tip
If you bought a kit from the spacehuhn.store and can't solve the issue yourself, [contact me](https://spacehuhn.store/pages/contact), and I'll see what I can do. Please include your **order number, pictures of your HackHeld** (so I can visually inspect the soldering), **a description of the problem, and what you have already tried to fix it**. If you messed up the soldering, no need to be ashamed. It happens to the best of us, and I can send you replacement parts.
:::