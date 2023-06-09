---
sidebar_position: 50
---

# Flashing Firmware

---

:::tip
This page is based of the Installation guide from [deauther.com](https://deauther.com/docs/category/diy-tutorial). Check it out for more information and additional installation methods.
:::

1. [Download](https://github.com/SpacehuhnTech/esp8266_deauther/releases/download/2.6.1/esp8266_deauther_2.6.1_HACKHELD_VEGA.bin) the .bin file for HackHeld Vega
2. Open [esp.huhn.me](https://esp.huhn.me) in Chrome, or another supported browser
3. Connect your ESP8266 board via USB
4. Click Connect and select the serial port of your ESP
5. Select your Deauther .bin file
6. Click Program

![Animated ESP Web Tool workflow GIF](https://deauther.com/assets/images/espwebtool-6d469715aba3e64ebbc8faebebd19168.gif)

After the upload is complete, the ESP8266 will automatically reboot and start the Deauther.
If not, you can manually reboot it by unplugging and plugging it back in.

![Deauther running on hackHeld Vega](/img/hackheld-deauther-2.jpg)

:::tip
## Finding the correct port

If you don't know which serial port to select, click connect on [esp.huhn.me](https://esp.huhn.me) and then plug in your board. Whatever port pops up in the list is what you're looking for.

You should check the cable and USB port if no new port pops up. 
Some USB cables are only for charging and cannot transmit data. 

Or maybe you're missing the drivers for your device:

🔗 CH340/CH341 Drivers: [http://www.wch-ic.com/downloads/CH341SER_ZIP.html](http://www.wch-ic.com/downloads/CH341SER_ZIP.html)  
🔗 CP210x Drivers: [https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers)  
🔗 FTDI Drivers: [https://ftdichip.com/drivers/](https://ftdichip.com/drivers/)
:::

:::info
## Connection failed?

Make sure to set the baud rate to 115200 in the settings. Higher baud rates allow faster upload speeds but can also introduce connection issues.

If that doesn't help, check out this blog post about common ESP8266 and ESP32 errors: [https://blog.spacehuhn.com/espcomm/](https://blog.spacehuhn.com/espcomm/)

And if you run into other issues, try using a different flashing tool/method. 
:::

:::tip
## Alternative Tools

My ESP web tool is not the only software you can use to flash your ESP8266: 
* [esptool](https://github.com/espressif/esptool)
* [ESP flash download tools](https://www.espressif.com/en/support/download/other-tools)
* [esptool-gui](https://github.com/Rodmg/esptool-gui)

And if you're looking for something Deauther-specific, check out n2d: [https://github.com/realmrvodka/n2d/](https://github.com/realmrvodka/n2d/)
:::