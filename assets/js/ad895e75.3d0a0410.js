"use strict";(self.webpackChunkhackheld_spacehuhn_com=self.webpackChunkhackheld_spacehuhn_com||[]).push([[288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:60},i="FAQ",l={unversionedId:"FAQ",id:"FAQ",title:"FAQ",description:"What can it do?",source:"@site/docs/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/FAQ",draft:!1,editUrl:"https://github.com/spacehuhntech/hackheld.spacehuhn.com/blob/main/docs/FAQ.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Flashing Firmware",permalink:"/firmware"},next:{title:"Links",permalink:"/links"}},s={},c=[{value:"What can it do?",id:"what-can-it-do",level:2},{value:"How do I use it?",id:"how-do-i-use-it",level:2},{value:"What about battery support?",id:"what-about-battery-support",level:2},{value:"Can it do other things?",id:"can-it-do-other-things",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"what-can-it-do"},"What can it do?"),(0,a.kt)("p",null,"The HackHeld is a portable device that can be used to test the security of your WiFi network.\nWith the Deauther firmware installed, it can perform a variety of attacks against WiFi networks, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deauthentication attacks"),(0,a.kt)("li",{parentName:"ul"},"Beacon attacks"),(0,a.kt)("li",{parentName:"ul"},"Probe attacks")),(0,a.kt)("p",null,"Read more about the Deauther firmware on ",(0,a.kt)("a",{parentName:"p",href:"https://deauther.com"},"deauther.com"),".  "),(0,a.kt)("h2",{id:"how-do-i-use-it"},"How do I use it?"),(0,a.kt)("p",null,"After assembly and firmware installation, you can use it like any other ESP8266 Deauther with display.\nVisit ",(0,a.kt)("a",{parentName:"p",href:"https://deauther.com/docs/category/usage"},"deauther.com")," for more information on how to use the Deauther firmware."),(0,a.kt)("h2",{id:"what-about-battery-support"},"What about battery support?"),(0,a.kt)("p",null,"I designed the HackHeld Vega with a focus on ease of assembly and low cost to allow as many people as possible to build their own HackHeld.\nAdding battery support would have increased the cost and complexity of the build significantly, especially for beginners. "),(0,a.kt)("p",null,"Luckily, the HackHeld Vega is powered by a standard USB-C connection. So you can use a power bank to power it on the go. Some phones even support reverse charging, which means you can use your phone to power the HackHeld Vega. "),(0,a.kt)("p",null,"The source files are open-source; you can modify them to add battery support. But I want to keep the HackHeld Vega as simple as possible, so I won't add battery support to the official design.\nThat being said, I hope to make a different, more premium version HackHeld in the future, with battery support and new features."),(0,a.kt)("h2",{id:"can-it-do-other-things"},"Can it do other things?"),(0,a.kt)("p",null,'Yes! The HackHeld Vega is an ESP8266 development board with a display.\nSo although the ESP8266 Deauther is the only "official" firmware for it, you can use it to build your own projects with the ',(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/software"},"Arduino IDE")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://arduino-esp8266.readthedocs.io/en/latest/installing.html"},"ESP8266 Arduino Core"),".\nSelect the ",(0,a.kt)("inlineCode",{parentName:"p"},"LOLIN(WEMOS) D1 R2 & mini")," board in the Arduino IDE, and you're good to go. "),(0,a.kt)("p",null,"The pinout is printed on the back of the PCB."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"OLED:\nD1 SCL\nD2 SDA \n\nBUTTONS:\nDO Left\nD3 B \nD4 A \nD5 UP\nD6 DOWN \nD7 RIGHT \n\nNEOPIXEL:\nD8 DI\n")))}d.isMDXComponent=!0}}]);