// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-abs-mask@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-significand-mask@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-low-word@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ldexp@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@v0.1.1-esm/index.mjs";var a=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],l=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],h=5.960464477539063e-8,j=d(20),p=d(20),v=d(20),c=d(20);function b(e,r,s,t,i,o,d,m,j){var p,u,g,x,w,k,N,y,z;for(x=o,z=t[s],y=s,w=0;y>0;w++)u=h*z|0,c[w]=z-16777216*u|0,z=t[y-1]+u,y-=1;if(z=f(z,i),z-=8*n(.125*z),z-=N=0|z,g=0,i>0?(N+=w=c[s-1]>>24-i,c[s-1]-=w<<24-i,g=c[s-1]>>23-i):0===i?g=c[s-1]>>23:z>=.5&&(g=2),g>0){for(N+=1,p=0,w=0;w<s;w++)y=c[w],0===p?0!==y&&(p=1,c[w]=16777216-y):c[w]=16777215-y;if(i>0)switch(i){case 1:c[s-1]&=8388607;break;case 2:c[s-1]&=4194303}2===g&&(z=1-z,0!==p&&(z-=f(1,i)))}if(0===z){for(y=0,w=s-1;w>=o;w--)y|=c[w];if(0===y){for(k=1;0===c[o-k];k++);for(w=s+1;w<=s+k;w++){for(j[m+w]=a[d+w],u=0,y=0;y<=m;y++)u+=e[y]*j[m+(w-y)];t[w]=u}return b(e,r,s+=k,t,i,o,d,m,j)}}if(0===z)for(s-=1,i-=24;0===c[s];)s-=1,i-=24;else(z=f(z,-i))>=16777216?(u=h*z|0,c[s]=z-16777216*u|0,i+=24,c[s+=1]=u):c[s]=0|z;for(u=f(1,i),w=s;w>=0;w--)t[w]=u*c[w],u*=h;for(w=s;w>=0;w--){for(u=0,k=0;k<=x&&k<=s-w;k++)u+=l[k]*t[w+k];v[s-w]=u}for(u=0,w=s;w>=0;w--)u+=v[w];for(r[0]=0===g?u:-u,u=v[0]-u,w=1;w<=s;w++)u+=v[w];return r[1]=0===g?u:-u,7&N}function u(e,r,s,t){var i,o,n,f,d,m,l;for(4,(o=(s-3)/24|0)<0&&(o=0),f=s-24*(o+1),m=o-(n=t-1),l=n+4,d=0;d<=l;d++)j[d]=m<0?0:a[m],m+=1;for(d=0;d<=4;d++){for(i=0,m=0;m<=n;m++)i+=e[m]*j[n+(d-m)];p[d]=i}return 4,b(e,r,4,p,f,4,o,n,j)}function g(e,r,s){var i,o,n,f,d;return n=e-1.5707963267341256*(i=m(.6366197723675814*e)),f=6077100506506192e-26*i,d=r>>20|0,s[0]=n-f,d-(t(s[0])>>20&2047)>16&&(f=20222662487959506e-37*i-((o=n)-(n=o-(f=6077100506303966e-26*i))-f),s[0]=n-f,d-(t(s[0])>>20&2047)>49&&(f=84784276603689e-45*i-((o=n)-(n=o-(f=20222662487111665e-37*i))-f),s[0]=n-f)),s[1]=n-s[0]-f,i}var x=1.5707963267341256,w=6077100506506192e-26,k=2*w,N=4*w,y=[0,0,0],z=[0,0];function q(n,f){var d,m,a,l,h,j,p;if((a=t(n)&e|0)<=1072243195)return f[0]=n,f[1]=0,0;if(a<=1074752122)return 598523==(a&s)?g(n,a,f):a<=1073928572?n>0?(p=n-x,f[0]=p-w,f[1]=p-f[0]-w,1):(p=n+x,f[0]=p+w,f[1]=p-f[0]+w,-1):n>0?(p=n-2*x,f[0]=p-k,f[1]=p-f[0]-k,2):(p=n+2*x,f[0]=p+k,f[1]=p-f[0]+k,-2);if(a<=1075594811)return a<=1075183036?1074977148===a?g(n,a,f):n>0?(p=n-3*x,f[0]=p-1.8231301519518578e-10,f[1]=p-f[0]-1.8231301519518578e-10,3):(p=n+3*x,f[0]=p+1.8231301519518578e-10,f[1]=p-f[0]+1.8231301519518578e-10,-3):1075388923===a?g(n,a,f):n>0?(p=n-4*x,f[0]=p-N,f[1]=p-f[0]-N,4):(p=n+4*x,f[0]=p+N,f[1]=p-f[0]+N,-4);if(a<1094263291)return g(n,a,f);if(a>=r)return f[0]=NaN,f[1]=NaN,0;for(d=i(n),p=o(a-((m=(a>>20)-1046)<<20|0),d),h=0;h<2;h++)y[h]=0|p,p=16777216*(p-y[h]);for(y[2]=p,l=3;0===y[l-1];)l-=1;return j=u(y,z,m,l),n<0?(f[0]=-z[0],f[1]=-z[1],-j):(f[0]=z[0],f[1]=z[1],j)}export{q as default};
//# sourceMappingURL=index.mjs.map