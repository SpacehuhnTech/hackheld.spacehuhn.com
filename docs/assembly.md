---
sidebar_position: 40
---

# Assembly Steps

:::info
Before you start, ensure you have all [necessary parts and tools](getting-started). 
:::

## 1. D1 Mini

1. Take the HackHeld Vega PCB, the D1 Mini, and the header pins. 
![HackHeld Vega PCB, D1 Mini, header pins](/img/hackheld-pcb-with-d1mini.jpg)

2. Place the header pins onto the PCB. The shorter end goes into the PCB. 
![HackHeld Vega PCB with inserted header pins](/img/hackheld-pcb-with-d1mini-pins-1.jpg)

3. Place the D1 Mini onto the header pins. Make sure it is sitting straight on the PCB. 
![HackHeld Vega PCB with inserted header pins and D1 Mini](/img/hackheld-pcb-with-d1mini-pins-2.jpg)

4. Solder one header pin to the D1 Mini. This will fix the D1 Mini in place. 
![Soldering D1 Mini Pins](/img/d1mini-solder-1.jpg)

5. Make sure the D1 Mini is sitting straight on the PCB. Then solder the remaining header pins. 
![Soldering D1 Mini Pins](/img/d1mini-solder-2.jpg)

6. Cut header pins of the D1 Mini. :warning: **Be careful to hold them in place while cutting. They tend to fly away towards your eyes.** :warning:
![D1 Mini cutting header pins](/img/d1mini-cut-pins-2.jpg)

7. Turn around the PCB, but keep the D1 Mini in place. Make sure the D1 Mini is sitting straight on the PCB before soldering. 
![HackHeld PCB top with D1 Mini unsoldered](/img/d1mini-hackheld-placement.jpg)

8. Solder the D1 Mini to the PCB. (You only have to solder pins with a text label, but you can also solder the others to make it more stable.)
![HackHeld PCB top with D1 Mini soldered](/img/d1mini-hackheld-solder.jpg)

## 3. Resistor

1. Take the 10k resistor and remove the isolation from the ends. 
![HackHeld Vega and 10k resistor](/img/hackheld-resistor-1.jpg)

2. Place the resistor on the backside of the PCB. 
![HackHeld Vega with placed resistor](/img/hackheld-resistor-2.jpg)

3. Solder the resistor to the PCB.
![HackHeld Vega with placed resistor](/img/hackheld-resistor-3.jpg)

4. Cut the ends of the resistor.
![HackHeld Vega with soldered resistor](/img/hackheld-resistor-4.jpg)

## 4. Buttons

1. Take the buttons and the PCB. The kit includes 4 white buttons and 2 yellow ones. The yellow ones are for the `A` and `B` buttons. But the colours make no difference, so you can place them anywhere.
![HackHeld and Buttons](/img/hackheld-buttons-1.jpg)

2. Take one button and place it into the PCB. Make sure the button is sitting straight on the PCB.
![HackHeld PCB with one placed button](/img/hackheld-buttons-2.jpg)

3. Solder one leg of the button to the PCB. This will fix the button in place.
![HackHeld button with one soldered leg](/img/hackheld-buttons-3.jpg)

4. Press the button to ensure it sits straight on the PCB. 
![Pressing button onto HackHeld PCB](/img/hackheld-buttons-4.jpg)

5. Solder the remaining legs of the button to the PCB.
![Hackheld button soldered legs](/img/hackheld-buttons-5.jpg)

6. :repeat: Repeat steps 2-5 for the remaining buttons.
![HackHeld and Buttons](/img/hackheld-buttons-6.jpg)

## 5. NeoPixel LED

1. Take the NeoPixel LED and the PCB.
![HackHeld and NeoPixel LED](/img/hackheld-neopixel-1.jpg)

2. Pretin one pad of the NeoPixel LED on the PCB.
![HackHeld NeoPixel LED footprint](/img/hackheld-neopixel-2.jpg)

3. Place the NeoPixel LED on the PCB and solder the pre tinned pin. Make sure the LED is aligned with the silkscreen on the PCB. The triangle should be on the bottom right.
![HackHeld NeoPixel LED footprint](/img/hackheld-neopixel-3.jpg)

4. Solder the remaining pins of the NeoPixel LED.
![NeoPixel LED on HackHeld PCB](/img/hackheld-neopixel-4.jpg)

## 6. OLED display

:::caution
Make sure the OLED pinout matches the one on the front side of the PCB. It must be compatible with `VDD GND SCK SDA`. It's important that `VDD` and `GND` are at the same place because some displays have them swapped, which would create a short circuit.
![](/img/hackheld-oled-pinout.jpg)
*If you have the wrong display, [scroll down for a workaround](#workaround-for-swapped-oled).*
:::

1. Take the OLED display, the PCB, and some tape.
![HackHeld, OLED display, tape](/img/hackheld-oled-1.jpg)

2. Remove the plastic part of the header pins from the OLED display with pliers. It's unnecessary and would prevent the display from sitting straight on the PCB. Avoid bending the pins while removing the plastic part, or bend them back afterwards.
![Removing plastic part from headers of OLED display](/img/hackheld-oled-2.jpg)
![Removing plastic part from headers of OLED display](/img/hackheld-oled-3.jpg)

4. Add tape on the backside of the OLED display. This will prevent the display from shorting with the D1 Mini.
![Adding tape to OLED display](/img/hackheld-oled-4.jpg)
![Adding tape to OLED display](/img/hackheld-oled-5.jpg)

6. Put the OLED display on the PCB. Make sure the display is sitting straight on the PCB.
![Placing OLED onto HackHeld PCB](/img/hackheld-oled-6.jpg)

7. Solder one of the pins of the OLED display to the PCB. This will fix the display in place.
![One pin of OLED display soldered](/img/hackheld-oled-7.jpg)

8. Make sure the display is sitting straight on the PCB. You can still bend it a bit.
![Aligning display on HackHeld](/img/hackheld-oled-8.jpg)

9. Solder the remaining pins of the OLED display to the PCB.
![Soldered OLED pins](/img/hackheld-oled-9.jpg)

10. Cut the pins of the OLED display.
![Cut OLED header pins](/img/hackheld-oled-10.jpg)

## 7. Case

Place the PCB into the case and screw in the 4 screws.  
![HackHeld Vega, case, and screws](/img/hackheld-case-1.jpg)
![HackHeld Vega closed case](/img/hackheld-case-2.jpg)

:partying_face: **Congratulations! You have successfully assembled your HackHeld Vega!** :partying_face:

![Finished HackHeld Vega](/img/hackheld-deauther-2.jpg)

Check out [firmware installation](firmware) guide if you want to install the Deauther firmware. 

Visit [deauther.com](https://deauther.com/docs/usage/display) to learn how to use the Deauther.

---

## Workaround for swapped OLED

If `VDD` and `GND` are swapped on your OLED display, you can still use it. 

1. Cut the vertical jumper bridges on the PCB with a knife.
![Cutting jumper bridges on HackHeld PCB with a knife](/img/hackheld-oled-jumper-scratch.jpg)

2. Then solder the horizontal jumper bridges on the front side of the PCB.
![Soldered jumper bridges on HackHeld PCB](/img/hackheld-oled-jumper-solder.jpg)
It doesn't have to look pretty to work. You can measure the voltage between `VDD` and `GND` to ensure it's correct.

Now you can solder the OLED display to the PCB as described [above](#6-oled-display).