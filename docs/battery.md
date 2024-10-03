---
sidebar_position: 55
---

import Button from '@mui/material/Button';

# Battery Mod

![Parts of the HackHeld Battery Mod](/img/hackheld-bat-mod1.jpg)

The battery mod lets you use a rechargeable LiPo battery in your HackHeld.  

<Button href='https://spacehuhn.store/products/battery-mod' target='_blank' variant='contained'>Buy on Spacehuhn.store</Button>
<br /><br />

The kit includes:
* Case with Removable Battery Compartment
* PCB with Battery Connector, Charging Circuit and Power Switch
* Wire
* Double Sided Tape
* Card as battery spacer

:::info
The battery mod has some limitations since the HackHeld wasn't initially designed for battery use. (Hence, this is a mod and not a feature.)
* There's no battery level indicator.
* No low battery warning. The HackHeld will turn off when the battery is empty.
* The HackHeld cannot be turned off while charging.
* The charging indicator LED is practically not visible from the outside.
:::

## Battery

:::danger
**LiPo batteries can be dangerous if not handled correctly!**  
Battery not included in the kit!  
:::

You can use any 3.7V LiPo or Li-ion battery that fits the case.  
Run time is expected to be around 1-3 hours, depending on usage and the battery capacity.

Here are the specs to help you find a suitable battery:
* 3.7V LiPo or LiIon battery
* 300 - 600 mAh recommended (batteries with larger capacity will likely not fit in the case)
* 40mm x 25mm x 10mm (L x W x H) or smaller recommended (larger batteries most likely will not fit in the case)
* JST PH 2.0mm 2-Pin connector (alternatively, you can solder the battery wires directly to the PCB)

![JST PH 2.0mm 2-Pin Connectors](/img/hackheld-bat-mod1-1.jpg)

Example Batteries:
* [Adafruit 400mAh 35x17x8mm 801735](https://www.adafruit.com/product/3898)
* [Adafruit 350mAh 35x20x5.5mm 552035](https://www.adafruit.com/product/2750)
* [Amazon DE 450mAh 35x25x5mm 052535](https://amzn.to/4a1x2Ib)
* [Amazon DE 300mAh 30x20x6mm 602030](https://amzn.to/3N23oZy)
* [AliExpress 330mAh 35x20x5mm 502035](https://s.click.aliexpress.com/e/_DBjUcKl)
* [AliExpress 500mAh 30x25x6mm 602530](https://s.click.aliexpress.com/e/_DF6ts1b)
* [AliExpress 500mAh 30x20x9mm 902030 (select 2pin 2.0mm plug)](https://s.click.aliexpress.com/e/_DnOZpeZ)
* [AliExpress 600mAh 35x25x6mm 602535 (select 2pin 2.0F)](https://s.click.aliexpress.com/e/_DmWvsqV)

![3 different LiPo batteries](/img/hackheld-bat-mod1-2.jpg)

## Assembly

1. Unscrew the 4 screws on the front of the Hackheld and remove the case.

![HackHeld with unscrewed case](/img/hackheld-bat-mod2.jpg)

2. Optional but recommended: Take a small piece of double-sided tape and stick it on the backside of the battery mod PCB. To prevent the PCB from moving around in the case. (This tape is **not** included in the kit.)
![Battery mod with double sided tape](/img/hackheld-bat-mod3.jpg)

3. Place the battery mod PCB as shown in the picture. 
![Battery mod placed on HackHeld](/img/hackheld-bat-mod4.jpg)

4. Solder the GND pad to the GND pin of the OLED, as shown in the picture.
![GND Solderpoint of hackheld battery mod](/img/hackheld-bat-mod5.jpg)

5. Solder the red wire to the 5V pad of the PCB.
![5V solder point of hackheld battery mod](/img/hackheld-bat-mod6.jpg)

6. Solder the other end of the red wire to the 5V pin of the D1 Mini.
![5V solder point of D1 Mini](/img/hackheld-bat-mod7.jpg)

7. Optional, but recommended: Try to clip off as much of the button pins as possible. To prevent them from stabbing into the battery.
![Cut off button pins](/img/hackheld-bat-mod8.jpg)

8. Cut out the battery protector from the card.
![Battery protector card cut out](/img/hackheld-bat-mod9.jpg)

9. Stick one side of the double-sided tape on the HackHeld PCB, as shown in the picture.
![Double sided adhesive placed on HackHeld](/img/hackheld-bat-mod10.jpg)

10. Remove the protective film from the other side of the double-sided tape and stick the battery protector on it. Make sure it's aligned with the PCB.
![Battery protector applied](/img/hackheld-bat-mod11.jpg)

11. Connect the battery to the PCB. Make sure the red wire is on the left side of the battery.
If the connector does not fit, you can solder the battery wires directly to the PCB. Ensure the red wire goes to + (left) and the black wire goes to - (right). I also added a bit of hot glue to secure the wires. You should be able to turn the HackHeld on and off with the power switch and charge the battery via USB. If something seems wrong, disconnect the battery and check your solder joints. 
![LiPo connected to HackHeld battery mod](/img/hackheld-bat-mod12.jpg)
![LiPo soldered to HackHeld battery mod](/img/hackheld-bat-mod12-1.jpg)
![Hot glue on solder points](/img/hackheld-bat-mod12-2.jpg)

12. Align the new case and screw it together with the 4 screws.
![Case aligned on the backside of HackHeld](/img/hackheld-bat-mod13.jpg)
![Case screwed on HackHeld](/img/hackheld-bat-mod14.jpg)

13. Tug the battery wires into the case and close the battery compartment.
![Battery tug into HackHeld case](/img/hackheld-bat-mod15.jpg)
![Case with closed battery compartment](/img/hackheld-bat-mod16.jpg)

14. Done!
![Running HackHeld Vega with Battery](/img/hackheld-bat-mod17.jpg)
