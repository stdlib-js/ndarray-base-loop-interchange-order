"use strict";var h=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(o){throw (e=0, o)}};};var g=h(function(N,p){
function j(t,e){var o,a,u,f,v,n,i,l,r,s;for(u=1,f=1,s=1;s<t.length;s++){for(i=t[u],o=i<0?-i:i,l=e[f],v=u-1,n=f-1;v>=0&&(r=t[v],a=r<0?-r:r,!(a<=o));)t[v+1]=r,e[n+1]=e[n],v-=1,n-=1;t[v+1]=i,e[n+1]=l,u+=1,f+=1}}p.exports=j
});var q=h(function(O,c){
var k=require('@stdlib/array-base-zero-to/dist'),m=require('@stdlib/array-base-copy-indexed/dist'),x=require('@stdlib/array-base-take-indexed/dist'),b=require('@stdlib/ndarray-base-strides2order/dist'),w=g();function y(t,e){var o,a,u,f,v,n,i,l,r,s;for(i=e.length,a=[],r=0;r<4;r++)a.push([]);for(l=a.length,r=0;r<i;r++)a[b(e[r])].push(e[r]);if(u=a[0].length,u===i)n=e[0];else if(u===i-1){for(r=1;r<l;r++)if(a[r].length){n=a[r][0];break}}else{for(s=0,r=1;r<l;r++)f=a[r].length,f>=u&&(u=f,s=r);n=a[s][0]}for(o=k(t.length),w(m(n),o),v=[x(t,o)],r=0;r<i;r++)v.push(x(e[r],o));return v.push(o),v}c.exports=y
});var z=q();module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
