---
sidebar_position: 20
---

# Getting Started

Here's everything you need to get started with the project.

## Skills

The project is designed to be easy to assemble. You don't need any special skills.  
If you can solder, you can build it; if you can't, you can learn it. So it's not that hard 😊.  

If you've soldered something and worked with Arduino before, you'll have an easier time. But it's not necessary.

I recommend watching some soldering tutorials on YouTube if you've never soldered before. I found this one to be quite good and concise: 
[Soldering Tutorial for Beginners: Five Easy Steps](https://www.youtube.com/watch?v=Qps9woUGkvI). 

Adafruit also has a great [Soldering 101 guide](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [Reference Cards](https://blog.adafruit.com/2016/12/26/new-reference-card-soldering-101/):

[![Adafruit Soldering Reference Card](https://cdn-blog.adafruit.com/uploads/2016/12/solder-card.png)](https://blog.adafruit.com/2016/12/26/new-reference-card-soldering-101/)

## Tools

![HackHeld Tools](/img/hackheld-tools.jpg)

| Tool | Description | Link* |
| ---- | ----------- | ---- |
| Soldering Iron and Solder | To solder the components to the PCB. Any soldering iron should do, but I prefer the Pine64 Pinecil because it's open-source, USB-C powered and portable. | [Amazon](https://amzn.to/3LhyDhC), [Pinecil](https://s.click.aliexpress.com/e/_Dk6lojb) |
| Side Cutters | To cut the header pins. | [Amazon](https://amzn.to/3NDPOMW) |
| Screwdriver | To screw the case together. | [Amazon](https://amzn.to/44jw3jS) |
| Tape | To prevent the backside of the OLED display from shorting out. | [Amazon](https://amzn.to/3AJtWbk) |
| Pliers | To remove the plastic bit from the OLED header. | [Amazon](https://amzn.to/3NNJJOr) |
| USB-C Cable | To power the Hackheld and program it. | [Amazon](https://amzn.to/3VoGO0c) |

Additionally, you need a computer to program the HackHeld. Unfortunately, you can't program it with a smartphone or tablet.

## Parts

![HackHeld Parts](/img/hackheld-parts.jpg)

:::tip Shopping 🛍️
You can buy the HackHeld Vega as a DIY kit from my shop: [spacehuhn.store](https://spacehuhn.store/products/hackheld-vega-kit)
:::

| Part | Description | Link* |
| ---- | ----------- | ----- |
| PCB | The PCB is the heart of HackHeld. It connects all the components. | [Gerber Files](https://github.com/SpacehuhnTech/Hackheld/blob/main/Hackheld_Vega_PCB/Hackheld_Vega_II_gerbers.zip), [JLCPCB](https://jlcpcb.com/?from=Spacehuhn) |
| D1 Mini | The development board that powers the HackHeld. It doesn't matter which D1 mini you get, but I recommend the Lolin D1 Mini V4 with USB-C. | [Amazon](https://amzn.to/3VrhE0M), [Lolin D1 Mini V4](https://de.aliexpress.com/item/32529101036.html) |
| OLED 1.3" SH1106 | The display of the HackHeld. It's a 1.3" OLED display with 128x64 pixels using the SH1106 driver. Make sure to use the 4-pin variant. | [Amazon](https://amzn.to/3HuY9Pg), [Aliexpress](https://s.click.aliexpress.com/e/_DCTKSqt) |
| 10k Resistor | A 10k resistor is needed as a pull-up for the left button. You can use a through-hole resistor or a 1206 SMD resistor. | [Amazon](https://amzn.to/3LKAZXO), [AliExpress](https://s.click.aliexpress.com/e/_DnMFIRj), [AliExpress SMD](https://s.click.aliexpress.com/e/_Dkm6GEv) |
| **6x** Buttons | 6x6mm 4pin tactile push buttons. | [Amazon](https://amzn.to/3p19zUE), [AliExpress](https://s.click.aliexpress.com/e/_DFtw4vX) |
| Neopixel LED | WS2812B LED. | [AliExpress](https://s.click.aliexpress.com/e/_DnrMXLf) |
| Case | For 3D printing. | [Printables](https://www.printables.com/model/469147-hackheld-vega-ii-case) |
| **4x** M2 Screws | To screw the case together. I bought 4mm long screws. They should be at least 2.5mm and not longer than 10mm. | [Amazon](https://amzn.to/3NNXRHt), [AliExpress](https://s.click.aliexpress.com/e/_DmXyzSd) |

:::caution
Make sure the OLED pinout matches the one on the front side of the PCB. It must be compatible with `VDD GND SCK SDA`. It's important that `VDD` and `GND` are at the same place because some displays have them swapped, which would create a short circuit.
![HackHeld OLED pinout warning](/img/hackheld-oled-pinout.jpg)
*If you have the wrong display, there's a [workaround](assembly#workaround-for-swapped-oled).*
:::

:::info
*Links are affiliate links. If you buy something through these links, I get a small commission. You don't pay more, but you support me and my work. Thank you! 😊
:::
