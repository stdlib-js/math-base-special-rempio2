// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,e=t,o=function(n){return e.call(n)},f=Object.prototype.hasOwnProperty,i=function(n,r){return null!=n&&f.call(n,r)},u="function"==typeof Symbol?Symbol.toStringTag:"",a=i,c=u,y=t,l=o,p=function(n){var r,t,e;if(null==n)return y.call(n);t=n[c],r=a(n,c);try{n[c]=void 0}catch(r){return y.call(n)}return e=y.call(n),r?n[c]=t:delete n[c],e},A=r&&"symbol"==typeof Symbol.toStringTag?p:l,b=A,v="function"==typeof Uint32Array,w="function"==typeof Uint32Array?Uint32Array:null,d=function(n){return v&&n instanceof Uint32Array||"[object Uint32Array]"===b(n)},m=w,s=function(){var n,r;if("function"!=typeof m)return!1;try{r=new m(r=[1,3.14,-3.14,4294967296,4294967297]),n=d(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},U="function"==typeof Uint32Array?Uint32Array:void 0,h=function(){throw new Error("not implemented")},I=s()?U:h,N=A,g="function"==typeof Float64Array,F="function"==typeof Float64Array?Float64Array:null,S=function(n){return g&&n instanceof Float64Array||"[object Float64Array]"===N(n)},H=F,O=function(){var n,r;if("function"!=typeof H)return!1;try{r=new H([1,3.14,-3.14,NaN]),n=S(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},T="function"==typeof Float64Array?Float64Array:void 0,j=function(){throw new Error("not implemented")},E=O()?T:j,G=A,L="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,M=function(n){return L&&n instanceof Uint8Array||"[object Uint8Array]"===G(n)},x=W,P=function(){var n,r;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,256,257]),n=M(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},V="function"==typeof Uint8Array?Uint8Array:void 0,Y=function(){throw new Error("not implemented")},_=P()?V:Y,k=A,q="function"==typeof Uint16Array,z="function"==typeof Uint16Array?Uint16Array:null,B=function(n){return q&&n instanceof Uint16Array||"[object Uint16Array]"===k(n)},C=z,D=function(){var n,r;if("function"!=typeof C)return!1;try{r=new C(r=[1,3.14,-3.14,65536,65537]),n=B(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},J="function"==typeof Uint16Array?Uint16Array:void 0,K=function(){throw new Error("not implemented")},Q={uint16:D()?J:K,uint8:_};(n=new Q.uint16(1))[0]=4660;var R,X,Z=52===new Q.uint8(n.buffer)[0],$=I,nn=!0===Z?1:0,rn=new E(1),tn=new $(rn.buffer),en=function(n){return rn[0]=n,tn[nn]},on=I,fn=!0===Z?0:1,un=new E(1),an=new on(un.buffer),cn=function(n){return un[0]=n,an[fn]};!0===Z?(R=1,X=0):(R=0,X=1);var yn,ln,pn=I,An={HIGH:R,LOW:X},bn=new E(1),vn=new pn(bn.buffer),wn=An.HIGH,dn=An.LOW,mn=function(n,r){return vn[wn]=n,vn[dn]=r,bn[0]},sn=mn,Un=Math.floor,hn=Number.POSITIVE_INFINITY,In=Number.NEGATIVE_INFINITY,Nn=function(n){return n!=n},gn=hn,Fn=In,Sn=function(n){return n===gn||n===Fn};!0===Z?(yn=1,ln=0):(yn=0,ln=1);var Hn=I,On={HIGH:yn,LOW:ln},Tn=new E(1),jn=new Hn(Tn.buffer),En=On.HIGH,Gn=On.LOW,Ln=function(n,r){return Tn[0]=r,n[0]=jn[En],n[1]=jn[Gn],n},Wn=function(n,r){return 1===arguments.length?Ln([0,0],n):Ln(n,r)},Mn=Wn,xn=en,Pn=sn,Vn=[0,0],Yn=Sn,_n=Nn,kn=function(n){return Math.abs(n)},qn=function(n,r){return _n(r)||Yn(r)?(n[0]=r,n[1]=0,n):0!==r&&kn(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},zn=function(n,r){return 1===arguments.length?qn([0,0],n):qn(n,r)},Bn=en,Cn=function(n){var r=Bn(n);return(r=(2146435072&r)>>>20)-1023|0},Dn=hn,Jn=In,Kn=Nn,Qn=Sn,Rn=function(n,r){var t,e;return Mn(Vn,n),t=Vn[0],t&=2147483647,e=xn(r),Pn(t|=e&=2147483648,Vn[1])},Xn=zn,Zn=Cn,$n=Wn,nr=sn,rr=[0,0],tr=[0,0],er=function(n,r){var t,e;return 0===r||0===n||Kn(n)||Qn(n)?n:(Xn(rr,n),r+=rr[1],(r+=Zn(n=rr[0]))<-1074?Rn(0,n):r>1023?n<0?Jn:Dn:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,$n(tr,n),t=tr[0],t&=2148532223,e*nr(t|=r+1023<<20,tr[1])))},or=er,fr=function(n,r){var t,e;for(t=[],e=0;e<r;e++)t.push(n);return t},ir=function(n){return fr(0,n)},ur=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ar=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],cr=16777216,yr=5.960464477539063e-8,lr=ir(20),pr=ir(20),Ar=ir(20),br=ir(20);function vr(n,r,t,e,o,f,i,u,a){var c,y,l,p,A,b,v,w,d;for(p=f,d=e[t],w=t,A=0;w>0;A++)y=yr*d|0,br[A]=d-cr*y|0,d=e[w-1]+y,w-=1;if(d=or(d,o),d-=8*Un(.125*d),d-=v=0|d,l=0,o>0?(v+=A=br[t-1]>>24-o,br[t-1]-=A<<24-o,l=br[t-1]>>23-o):0===o?l=br[t-1]>>23:d>=.5&&(l=2),l>0){for(v+=1,c=0,A=0;A<t;A++)w=br[A],0===c?0!==w&&(c=1,br[A]=16777216-w):br[A]=16777215-w;if(o>0)switch(o){case 1:br[t-1]&=8388607;break;case 2:br[t-1]&=4194303}2===l&&(d=1-d,0!==c&&(d-=or(1,o)))}if(0===d){for(w=0,A=t-1;A>=f;A--)w|=br[A];if(0===w){for(b=1;0===br[f-b];b++);for(A=t+1;A<=t+b;A++){for(a[u+A]=ur[i+A],y=0,w=0;w<=u;w++)y+=n[w]*a[u+(A-w)];e[A]=y}return vr(n,r,t+=b,e,o,f,i,u,a)}}if(0===d)for(t-=1,o-=24;0===br[t];)t-=1,o-=24;else(d=or(d,-o))>=cr?(y=yr*d|0,br[t]=d-cr*y|0,o+=24,br[t+=1]=y):br[t]=0|d;for(y=or(1,o),A=t;A>=0;A--)e[A]=y*br[A],y*=yr;for(A=t;A>=0;A--){for(y=0,b=0;b<=p&&b<=t-A;b++)y+=ar[b]*e[A+b];Ar[t-A]=y}for(y=0,A=t;A>=0;A--)y+=Ar[A];for(r[0]=0===l?y:-y,y=Ar[0]-y,A=1;A<=t;A++)y+=Ar[A];return r[1]=0===l?y:-y,7&v}function wr(n,r,t,e){var o,f,i,u,a,c,y;for((f=(t-3)/24|0)<0&&(f=0),u=t-24*(f+1),c=f-(i=e-1),y=i+4,a=0;a<=y;a++)lr[a]=c<0?0:ur[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=n[c]*lr[i+(a-c)];pr[a]=o}return vr(n,r,4,pr,u,4,f,i,lr)}var dr=Math.round;function mr(n,r,t){var e,o,f,i,u;return f=n-1.5707963267341256*(e=dr(.6366197723675814*n)),i=6077100506506192e-26*e,u=r>>20|0,t[0]=f-i,u-(en(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=f)-(f=o-(i=6077100506303966e-26*e))-i),t[0]=f-i,u-(en(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=f)-(f=o-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var sr=1.5707963267341256,Ur=6077100506506192e-26,hr=2*Ur,Ir=3*Ur,Nr=4*Ur,gr=[0,0,0],Fr=[0,0];return function(n,r){var t,e,o,f,i,u,a;if((o=2147483647&en(n)|0)<=1072243195)return r[0]=n,r[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?mr(n,o,r):o<=1073928572?n>0?(a=n-sr,r[0]=a-Ur,r[1]=a-r[0]-Ur,1):(a=n+sr,r[0]=a+Ur,r[1]=a-r[0]+Ur,-1):n>0?(a=n-2*sr,r[0]=a-hr,r[1]=a-r[0]-hr,2):(a=n+2*sr,r[0]=a+hr,r[1]=a-r[0]+hr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?mr(n,o,r):n>0?(a=n-3*sr,r[0]=a-Ir,r[1]=a-r[0]-Ir,3):(a=n+3*sr,r[0]=a+Ir,r[1]=a-r[0]+Ir,-3):1075388923===o?mr(n,o,r):n>0?(a=n-4*sr,r[0]=a-Nr,r[1]=a-r[0]-Nr,4):(a=n+4*sr,r[0]=a+Nr,r[1]=a-r[0]+Nr,-4);if(o<1094263291)return mr(n,o,r);if(o>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(t=cn(n),a=sn(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)gr[i]=0|a,a=16777216*(a-gr[i]);for(gr[2]=a,f=3;0===gr[f-1];)f-=1;return u=wr(gr,Fr,e,f),n<0?(r[0]=-Fr[0],r[1]=-Fr[1],-u):(r[0]=Fr[0],r[1]=Fr[1],u)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).rempio2=r();
//# sourceMappingURL=index.js.map
