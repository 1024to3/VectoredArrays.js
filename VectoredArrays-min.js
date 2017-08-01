//Created by Brian Kaho on 7/27/2017 under the MIT License.
function _v(a,b,func){var sc=typeof(b)==="number";if(sc||a.length===b.length){var c=new Array(a.length);for(var i=0;i<a.length;i++)c[i]=func(a[i],sc?b:b[i]);return c;}console.error("wrong type/length in b: " + b);}
var A=Array.prototype;
A.dot=function(b){if(this.length===b.length)return this.mul(b).sum();};
A.cross=function(b){var a=this; return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];};
A.mag=function(){var b=this.mul(this).sum();if(this.length===3)b=Math.cbrt(b);else b=Math.sqrt(b);return b;};
A.norm=function(){return this.div(this.mag());};
A.add=function(b){return _v(this,b,(a,b)=>a+b);};
A.sub=function(b){return _v(this,b,(a,b)=>a-b);};
A.mul=function(b){return _v(this,b,(a,b)=>a*b);};
A.div=function(b){return _v(this,b,(a,b)=>a/b);};
A.sum=function(){var sum=0;for(var i=0;i<this.length;i++)sum+=this[i];return sum;};
A.floor=function(){return _v(this,0,a=>Math.floor(a));};