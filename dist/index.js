"use strict";var h=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var g=h(function(N,p){
function j(i,e){var n,a,t,f,o,u,v,s,r,l;for(t=1,f=1,l=1;l<i.length;l++){for(v=i[t],n=v<0?-v:v,s=e[f],o=t-1,u=f-1;o>=0&&(r=i[o],a=r<0?-r:r,!(a<=n));)i[o+1]=r,e[u+1]=e[u],o-=1,u-=1;i[o+1]=v,e[u+1]=s,t+=1,f+=1}}p.exports=j
});var q=h(function(O,c){
var k=require('@stdlib/array-base-zero-to/dist'),m=require('@stdlib/array-base-copy-indexed/dist'),x=require('@stdlib/array-base-take-indexed/dist'),b=require('@stdlib/ndarray-base-strides2order/dist'),w=g();function y(i,e){var n,a,t,f,o,u,v,s,r,l;for(v=e.length,a=[],r=0;r<4;r++)a.push([]);for(s=a.length,r=0;r<v;r++)a[b(e[r])].push(e[r]);if(t=a[0].length,t===v)u=e[0];else if(t===v-1){for(r=1;r<s;r++)if(a[r].length){u=a[r][0];break}}else{for(l=0,r=1;r<s;r++)f=a[r].length,f>=t&&(t=f,l=r);u=a[l][0]}for(n=k(i.length),w(m(u),n),o=[x(i,n)],r=0;r<v;r++)o.push(x(e[r],n));return o}c.exports=y
});var z=q();module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
