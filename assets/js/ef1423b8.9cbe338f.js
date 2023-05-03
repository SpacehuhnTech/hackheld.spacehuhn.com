"use strict";(self.webpackChunkhackheld_spacehuhn_com=self.webpackChunkhackheld_spacehuhn_com||[]).push([[799],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,u=m["".concat(s,".").concat(d)]||m[d]||h[d]||o;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2298:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:50},i="Flashing Firmware",p={unversionedId:"firmware",id:"firmware",title:"Flashing Firmware",description:"---",source:"@site/docs/firmware.md",sourceDirName:".",slug:"/firmware",permalink:"/firmware",draft:!1,editUrl:"https://github.com/spacehuhntech/hackheld.spacehuhn.com/blob/main/docs/firmware.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Assembly Steps",permalink:"/assembly"},next:{title:"FAQ",permalink:"/FAQ"}},s={},l=[],c={toc:l},m="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flashing-firmware"},"Flashing Firmware"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This page is based of the Installation guide from ",(0,a.kt)("a",{parentName:"p",href:"https://deauther.com/docs/category/diy-tutorial"},"deauther.com"),". Check it out for more information and additional installation methods.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SpacehuhnTech/esp8266_deauther/releases/download/2.6.1/esp8266_deauther_2.6.1_HACKHELD_VEGA.bin"},"Download")," the .bin file for HackHeld Vega"),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("a",{parentName:"li",href:"https://esp.huhn.me"},"esp.huhn.me")," in Chrome, or another supported browser"),(0,a.kt)("li",{parentName:"ol"},"Connect your ESP8266 board via USB"),(0,a.kt)("li",{parentName:"ol"},"Click Connect and select the serial port of your ESP"),(0,a.kt)("li",{parentName:"ol"},"Select your Deauther .bin file"),(0,a.kt)("li",{parentName:"ol"},"Click Program")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://deauther.com/assets/images/espwebtool-6d469715aba3e64ebbc8faebebd19168.gif",alt:"Animated ESP Web Tool workflow GIF"})),(0,a.kt)("p",null,"After the upload is complete, the ESP8266 will automatically reboot and start the Deauther.\nIf not, you can manually reboot it by unplugging and plugging it back in."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deauther running on hackHeld Vega",src:r(1631).Z,width:"1536",height:"1004"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("h2",{parentName:"admonition",id:"finding-the-correct-port"},"Finding the correct port"),(0,a.kt)("p",{parentName:"admonition"},"If you don't know which serial port to select, click connect on ",(0,a.kt)("a",{parentName:"p",href:"https://esp.huhn.me"},"esp.huhn.me")," and then plug in your board. Whatever port pops up in the list is what you're looking for."),(0,a.kt)("p",{parentName:"admonition"},"You should check the cable and USB port if no new port pops up.\nSome USB cables are only for charging and cannot transmit data. "),(0,a.kt)("p",{parentName:"admonition"},"Or maybe you're missing the drivers for your device:"),(0,a.kt)("p",{parentName:"admonition"},"\ud83d\udd17 CH340/CH341 Drivers: ",(0,a.kt)("a",{parentName:"p",href:"http://www.wch-ic.com/downloads/CH341SER_ZIP.html"},"http://www.wch-ic.com/downloads/CH341SER_ZIP.html"),(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\udd17 CP210x Drivers: ",(0,a.kt)("a",{parentName:"p",href:"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers"},"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers"),(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\udd17 FTDI Drivers: ",(0,a.kt)("a",{parentName:"p",href:"https://ftdichip.com/drivers/"},"https://ftdichip.com/drivers/"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("h2",{parentName:"admonition",id:"connection-failed"},"Connection failed?"),(0,a.kt)("p",{parentName:"admonition"},"Make sure to set the baud rate to 115200 in the settings. Higher baud rates allow faster upload speeds but can also introduce connection issues."),(0,a.kt)("p",{parentName:"admonition"},"If that doesn't help, check out this blog post about common ESP8266 and ESP32 errors: ",(0,a.kt)("a",{parentName:"p",href:"https://blog.spacehuhn.com/espcomm/"},"https://blog.spacehuhn.com/espcomm/")),(0,a.kt)("p",{parentName:"admonition"},"And if you run into other issues, try using a different flashing tool/method. ")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("h2",{parentName:"admonition",id:"alternative-tools"},"Alternative Tools"),(0,a.kt)("p",{parentName:"admonition"},"My ESP web tool is not the only software you can use to flash your ESP8266: "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/espressif/esptool"},"esptool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.espressif.com/en/support/download/other-tools"},"ESP flash download tools")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Rodmg/esptool-gui"},"esptool-gui"))),(0,a.kt)("p",{parentName:"admonition"},"And if you're looking for something Deauther-specific, check out n2d: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/realmrvodka/n2d/"},"https://github.com/realmrvodka/n2d/"))))}h.isMDXComponent=!0},1631:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hackheld-deauther-2-87bba750d22479ceecd2e500ea6db17b.jpg"}}]);