// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e=2147483647,t=2146435072,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,c="function"==typeof o?o.toStringTag:"",f=n&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,o,f;if(null==r)return i.call(r);t=r[c],f=c,e=null!=(o=r)&&a.call(o,f);try{r[c]=void 0}catch(e){return i.call(r)}return n=i.call(r),e?r[c]=t:delete r[c],n}:function(r){return i.call(r)},u="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,e,t;if("function"!=typeof s)return!1;try{e=new s(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(u&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p,y=r,g="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,h="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,e,t;if("function"!=typeof d)return!1;try{e=new d([1,3.14,-3.14,NaN]),t=e,r=(g&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?h:function(){throw new Error("not implemented")};var w,v=p,b="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;w=function(){var r,e,t;if("function"!=typeof m)return!1;try{e=new m(e=[1,3.14,-3.14,256,257]),t=e,r=(b&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,E=w,U="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var r,e,t;if("function"!=typeof S)return!1;try{e=new S(e=[1,3.14,-3.14,65536,65537]),t=e,r=(U&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var k,x={uint16:_,uint8:E};(k=new x.uint16(1))[0]=4660;var F=52===new x.uint8(k.buffer)[0],j=!0===F?1:0,T=new v(1),N=new y(T.buffer);function O(r){return T[0]=r,N[j]}var V,$,G=!0===F?0:1,H=new v(1),W=new y(H.buffer);!0===F?(V=1,$=0):(V=0,$=1);var C={HIGH:V,LOW:$},L=new v(1),P=new y(L.buffer),R=C.HIGH,Z=C.LOW;function M(r,e){return P[R]=r,P[Z]=e,L[0]}var X=Math.floor,Y=Number.POSITIVE_INFINITY,z=Number.NEGATIVE_INFINITY,q=1023,B=1023,D=-1023,J=-1074;function K(r){return r!=r}function Q(r){return r===Y||r===z}var rr=2147483648,er="function"==typeof Object.defineProperty?Object.defineProperty:null,tr=Object.defineProperty;function nr(r){return"number"==typeof r}function ir(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ar(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+ir(i):ir(i)+r,n&&(r="-"+r)),r}var or=String.prototype.toLowerCase,cr=String.prototype.toUpperCase;function fr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!nr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ar(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ar(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===cr.call(r.specifier)?cr.call(t):or.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var ur=Math.abs,sr=String.prototype.toLowerCase,lr=String.prototype.toUpperCase,pr=String.prototype.replace,yr=/e\+(\d)$/,gr=/e-(\d)$/,dr=/^(\d+)$/,hr=/^(\d+)e/,wr=/\.0$/,vr=/\.0*e/,br=/(\..*[^0])0*e/;function mr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!nr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":ur(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=pr.call(t,br,"$1e"),t=pr.call(t,vr,"e"),t=pr.call(t,wr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=pr.call(t,yr,"e+0$1"),t=pr.call(t,gr,"e-0$1"),r.alternate&&(t=pr.call(t,dr,"$1."),t=pr.call(t,hr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===lr.call(r.specifier)?lr.call(t):sr.call(t)}function Ar(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _r=String.fromCharCode,Er=Array.isArray;function Ur(r){return r!=r}function Sr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ir(r){var e,t,n,i,a,o,c,f,u,s,l,p,y;if(!Er(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if("string"==typeof(n=r[f]))o+=n;else{if(e=void 0!==n.precision,!(n=Sr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ur(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ur(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=fr(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!Ur(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ur(a)?String(n.arg):_r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=mr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ar(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,l=n.width,p=n.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+Ar(y):Ar(y)+s)),o+=n.arg||"",c+=1}return o}var kr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function xr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Fr(r){var e,t,n,i;for(t=[],i=0,n=kr.exec(r);n;)(e=r.slice(i,kr.lastIndex-n[0].length)).length&&t.push(e),t.push(xr(n)),i=kr.lastIndex,n=kr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function jr(r){var e,t;if("string"!=typeof r)throw new TypeError(jr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Fr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Ir.apply(null,e)}var Tr,Nr,Or=Object.prototype,Vr=Or.toString,$r=Or.__defineGetter__,Gr=Or.__defineSetter__,Hr=Or.__lookupGetter__,Wr=Or.__lookupSetter__,Cr=function(){try{return er({},"x",{}),!0}catch(r){return!1}}()?tr:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Vr.call(r))throw new TypeError(jr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Vr.call(t))throw new TypeError(jr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Hr.call(r,e)||Wr.call(r,e)?(n=r.__proto__,r.__proto__=Or,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$r&&$r.call(r,e,t.get),o&&Gr&&Gr.call(r,e,t.set),r};function Lr(r,e,t){Cr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===F?(Tr=1,Nr=0):(Tr=0,Nr=1);var Pr={HIGH:Tr,LOW:Nr},Rr=new v(1),Zr=new y(Rr.buffer),Mr=Pr.HIGH,Xr=Pr.LOW;function Yr(r,e,t,n){return Rr[0]=r,e[n]=Zr[Mr],e[n+t]=Zr[Xr],e}function zr(r){return Yr(r,[0,0],1,0)}Lr(zr,"assign",Yr);var qr=[0,0],Br=22250738585072014e-324,Dr=4503599627370496;function Jr(r,e,t,n){return K(r)||Q(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<Br?(e[n]=r*Dr,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}Lr((function(r){return Jr(r,[0,0],1,0)}),"assign",Jr);var Kr=2220446049250313e-31,Qr=2148532223,re=[0,0],ee=[0,0];function te(r,n){var i,a,o,c,f,u;return 0===n||0===r||K(r)||Q(r)?r:(Jr(r,re,1,0),r=re[0],n+=re[1],n+=function(r){var e=O(r);return(e=(e&t)>>>20)-q|0}(r),n<J?(o=0,c=r,zr.assign(o,qr,1,0),f=qr[0],f&=e,u=O(c),M(f|=u&=rr,qr[1])):n>B?r<0?z:Y:(n<=D?(n+=52,a=Kr):a=1,zr.assign(r,ee,1,0),i=ee[0],i&=Qr,a*M(i|=n+q<<20,ee[1])))}function ne(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ie=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ae=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],oe=16777216,ce=5.960464477539063e-8,fe=ne(20),ue=ne(20),se=ne(20),le=ne(20);function pe(r,e,t,n,i,a,o,c,f){var u,s,l,p,y,g,d,h,w;for(p=a,w=n[t],h=t,y=0;h>0;y++)s=ce*w|0,le[y]=w-oe*s|0,w=n[h-1]+s,h-=1;if(w=te(w,i),w-=8*X(.125*w),w-=d=0|w,l=0,i>0?(d+=y=le[t-1]>>24-i,le[t-1]-=y<<24-i,l=le[t-1]>>23-i):0===i?l=le[t-1]>>23:w>=.5&&(l=2),l>0){for(d+=1,u=0,y=0;y<t;y++)h=le[y],0===u?0!==h&&(u=1,le[y]=16777216-h):le[y]=16777215-h;if(i>0)switch(i){case 1:le[t-1]&=8388607;break;case 2:le[t-1]&=4194303}2===l&&(w=1-w,0!==u&&(w-=te(1,i)))}if(0===w){for(h=0,y=t-1;y>=a;y--)h|=le[y];if(0===h){for(g=1;0===le[a-g];g++);for(y=t+1;y<=t+g;y++){for(f[c+y]=ie[o+y],s=0,h=0;h<=c;h++)s+=r[h]*f[c+(y-h)];n[y]=s}return pe(r,e,t+=g,n,i,a,o,c,f)}for(t-=1,i-=24;0===le[t];)t-=1,i-=24}else(w=te(w,-i))>=oe?(s=ce*w|0,le[t]=w-oe*s|0,i+=24,le[t+=1]=s):le[t]=0|w;for(s=te(1,i),y=t;y>=0;y--)n[y]=s*le[y],s*=ce;for(y=t;y>=0;y--){for(s=0,g=0;g<=p&&g<=t-y;g++)s+=ae[g]*n[y+g];se[t-y]=s}for(s=0,y=t;y>=0;y--)s+=se[y];for(e[0]=0===l?s:-s,s=se[0]-s,y=1;y<=t;y++)s+=se[y];return e[1]=0===l?s:-s,7&d}function ye(r,e,t,n){var i,a,o,c,f,u,s;for((a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),u=a-(o=n-1),s=o+4,f=0;f<=s;f++)fe[f]=u<0?0:ie[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*fe[o+(f-u)];ue[f]=i}return pe(r,e,4,ue,c,4,a,o,fe)}var ge=Math.round,de=.6366197723675814,he=1.5707963267341256,we=6077100506506192e-26,ve=6077100506303966e-26,be=20222662487959506e-37,me=20222662487111665e-37,Ae=84784276603689e-45,_e=2047;function Ee(r,e,t){var n,i,a,o,c;return a=r-(n=ge(r*de))*he,o=n*we,c=e>>20|0,t[0]=a-o,c-(O(t[0])>>20&_e)>16&&(o=n*be-((i=a)-(a=i-(o=n*ve))-o),t[0]=a-o,c-(O(t[0])>>20&_e)>49&&(o=n*Ae-((i=a)-(a=i-(o=n*me))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var Ue=1.5707963267341256,Se=6077100506506192e-26,Ie=2*Se,ke=3*Se,xe=4*Se,Fe=[0,0,0],je=[0,0];return function(r,n){var i,a,o,c,f,u,s;if((o=O(r)&e|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Ee(r,o,n):o<=1073928572?r>0?(s=r-Ue,n[0]=s-Se,n[1]=s-n[0]-Se,1):(s=r+Ue,n[0]=s+Se,n[1]=s-n[0]+Se,-1):r>0?(s=r-2*Ue,n[0]=s-Ie,n[1]=s-n[0]-Ie,2):(s=r+2*Ue,n[0]=s+Ie,n[1]=s-n[0]+Ie,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Ee(r,o,n):r>0?(s=r-3*Ue,n[0]=s-ke,n[1]=s-n[0]-ke,3):(s=r+3*Ue,n[0]=s+ke,n[1]=s-n[0]+ke,-3):1075388923===o?Ee(r,o,n):r>0?(s=r-4*Ue,n[0]=s-xe,n[1]=s-n[0]-xe,4):(s=r+4*Ue,n[0]=s+xe,n[1]=s-n[0]+xe,-4);if(o<1094263291)return Ee(r,o,n);if(o>=t)return n[0]=NaN,n[1]=NaN,0;for(i=function(r){return H[0]=r,W[G]}(r),s=M(o-((a=(o>>20)-1046)<<20|0),i),f=0;f<2;f++)Fe[f]=0|s,s=16777216*(s-Fe[f]);for(Fe[2]=s,c=3;0===Fe[c-1];)c-=1;return u=ye(Fe,je,a,c),r<0?(n[0]=-je[0],n[1]=-je[1],-u):(n[0]=je[0],n[1]=je[1],u)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).rempio2=e();
//# sourceMappingURL=browser.js.map
