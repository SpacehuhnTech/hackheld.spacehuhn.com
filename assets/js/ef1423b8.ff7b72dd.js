"use strict";(self.webpackChunkhackheld_spacehuhn_com=self.webpackChunkhackheld_spacehuhn_com||[]).push([[799],{3597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(5893),i=n(1151);const r={sidebar_position:50},s="Flashing Firmware",a={id:"firmware",title:"Flashing Firmware",description:"---",source:"@site/docs/firmware.md",sourceDirName:".",slug:"/firmware",permalink:"/firmware",draft:!1,unlisted:!1,editUrl:"https://github.com/spacehuhntech/hackheld.spacehuhn.com/blob/main/docs/firmware.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Assembly Steps",permalink:"/assembly"},next:{title:"Battery Mod",permalink:"/battery"}},h={},l=[{value:"Finding the correct port",id:"finding-the-correct-port",level:2},{value:"Connection failed?",id:"connection-failed",level:2},{value:"Alternative Tools",id:"alternative-tools",level:2}];function c(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"flashing-firmware",children:"Flashing Firmware"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["This page is based of the Installation guide from ",(0,o.jsx)(t.a,{href:"https://deauther.com/docs/category/diy-tutorial",children:"deauther.com"}),". Check it out for more information and additional installation methods."]})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/SpacehuhnTech/esp8266_deauther/releases/download/2.6.1/esp8266_deauther_2.6.1_HACKHELD_VEGA.bin",children:"Download"})," the .bin file for HackHeld Vega"]}),"\n",(0,o.jsxs)(t.li,{children:["Open ",(0,o.jsx)(t.a,{href:"https://esp.huhn.me",children:"esp.huhn.me"})," in Chrome, or another supported browser"]}),"\n",(0,o.jsx)(t.li,{children:"Connect your ESP8266 board via USB"}),"\n",(0,o.jsx)(t.li,{children:"Click Connect and select the serial port of your ESP"}),"\n",(0,o.jsx)(t.li,{children:"Select your Deauther .bin file"}),"\n",(0,o.jsx)(t.li,{children:"Click Program"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://deauther.com/assets/images/espwebtool-6d469715aba3e64ebbc8faebebd19168.gif",alt:"Animated ESP Web Tool workflow GIF"})}),"\n",(0,o.jsx)(t.p,{children:"After the upload is complete, the ESP8266 will automatically reboot and start the Deauther.\nIf not, you can manually reboot it by unplugging and plugging it back in."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Deauther running on hackHeld Vega",src:n(1631).Z+"",width:"1536",height:"1004"})}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsx)(t.h2,{id:"finding-the-correct-port",children:"Finding the correct port"}),(0,o.jsxs)(t.p,{children:["If you don't know which serial port to select, click connect on ",(0,o.jsx)(t.a,{href:"https://esp.huhn.me",children:"esp.huhn.me"})," and then plug in your board. Whatever port pops up in the list is what you're looking for."]}),(0,o.jsx)(t.p,{children:"You should check the cable and USB port if no new port pops up.\nSome USB cables are only for charging and cannot transmit data."}),(0,o.jsx)(t.p,{children:"Or maybe you're missing the drivers for your device:"}),(0,o.jsxs)(t.p,{children:["\ud83d\udd17 CH340/CH341 Drivers: ",(0,o.jsx)(t.a,{href:"http://www.wch-ic.com/downloads/CH341SER_ZIP.html",children:"http://www.wch-ic.com/downloads/CH341SER_ZIP.html"}),(0,o.jsx)(t.br,{}),"\n","\ud83d\udd17 CP210x Drivers: ",(0,o.jsx)(t.a,{href:"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers",children:"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers"}),(0,o.jsx)(t.br,{}),"\n","\ud83d\udd17 FTDI Drivers: ",(0,o.jsx)(t.a,{href:"https://ftdichip.com/drivers/",children:"https://ftdichip.com/drivers/"})]})]}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsx)(t.h2,{id:"connection-failed",children:"Connection failed?"}),(0,o.jsx)(t.p,{children:"Make sure to set the baud rate to 115200 in the settings. Higher baud rates allow faster upload speeds but can also introduce connection issues."}),(0,o.jsxs)(t.p,{children:["If that doesn't help, check out this blog post about common ESP8266 and ESP32 errors: ",(0,o.jsx)(t.a,{href:"https://blog.spacehuhn.com/espcomm/",children:"https://blog.spacehuhn.com/espcomm/"})]}),(0,o.jsx)(t.p,{children:"And if you run into other issues, try using a different flashing tool/method."})]}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsx)(t.h2,{id:"alternative-tools",children:"Alternative Tools"}),(0,o.jsx)(t.p,{children:"My ESP web tool is not the only software you can use to flash your ESP8266:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/espressif/esptool",children:"esptool"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.espressif.com/en/support/download/other-tools",children:"ESP flash download tools"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/Rodmg/esptool-gui",children:"esptool-gui"})}),"\n"]}),(0,o.jsxs)(t.p,{children:["And if you're looking for something Deauther-specific, check out n2d: ",(0,o.jsx)(t.a,{href:"https://github.com/realmrvodka/n2d/",children:"https://github.com/realmrvodka/n2d/"})]})]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1631:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hackheld-deauther-2-87bba750d22479ceecd2e500ea6db17b.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(7294);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);