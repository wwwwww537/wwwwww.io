(function(t){function e(e){for(var r,i,s=e[0],c=e[1],d=e[2],l=0,h=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"cec9c08b"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var d=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/wwwwww.io/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=d;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0923":function(t,e,n){"use strict";n("388f")},"292e":function(t,e,n){t.exports=n.p+"img/1552443760077.81208722.png"},"388f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(t,e){var n=Object(r["v"])("router-view");return Object(r["o"])(),Object(r["d"])(n)}n("0923");const o={};o.render=a;var i=o,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),c=Object(r["A"])("data-v-5fde004d");Object(r["r"])("data-v-5fde004d");var d={class:"home"},l=Object(r["e"])('<div class="guidline textcontainer" data-v-5fde004d><h2 class="particletext confetti random" data-v-5fde004d> 涛仔的镜花水月 </h2></div><div id="scrolldown" class="scrolldown" data-v-5fde004d><div class="container" data-v-5fde004d><div class="chevron" data-v-5fde004d></div><div class="chevron" data-v-5fde004d></div><div class="chevron" data-v-5fde004d></div><span class="text" data-v-5fde004d>Scroll down</span></div></div>',2),u={class:"starsbody"},h=Object(r["f"])("div",{class:"stars"},null,-1),f={class:"table content"},p={class:"planets"};Object(r["p"])();var m=c((function(t,e,n,a,o,i){var s=Object(r["v"])("planet-com");return Object(r["o"])(),Object(r["d"])("div",d,[l,Object(r["f"])("div",u,[h,Object(r["f"])("div",f,[Object(r["f"])("div",p,[(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(t.planet_list,(function(t,e){return Object(r["o"])(),Object(r["d"])(s,{key:"planet"+e,planetdata:t},null,8,["planetdata"])})),128))])])])])})),v=Object(r["A"])("data-v-3e7afe16");Object(r["r"])("data-v-3e7afe16");var g={class:"img"},b={class:"title"};Object(r["p"])();var y=v((function(t,e,n,a,o,i){return Object(r["o"])(),Object(r["d"])("div",{class:"shape",style:i.GetColor()},[Object(r["f"])("div",g,[Object(r["f"])("img",{src:n.planetdata.img,alt:""},null,8,["src"])]),Object(r["f"])("div",b,[Object(r["f"])("span",null,Object(r["x"])(n.planetdata.title),1)])],4)})),_={name:"Planet",props:["planetdata"],methods:{GetColor:function(){var t=Math.floor(130*Math.random()+110),e=Math.floor(130*Math.random()+110),n=Math.floor(130*Math.random()+110);return{background:"rgb("+t+","+e+","+n+")"}}}};n("d8d8");_.render=y,_.__scopeId="data-v-3e7afe16";var j=_,O=n("53ca"),w=function(t){var e={d_element:"",d_type:"char",d_min:10,d_max:100,d_kerning:10};this.size,this.getLettersArray=[],this.getLettersChanges=[],this.kerningSize=[],this.currentChange=0,this.char="abcdefghijklmnopqrstuvwxyz0123456789!?*()@￡$%^&_-+=[]{}:;'\"\\|<>,./~`×",this.charArray=[],this.requestId,arguments[0]&&"object"===Object(O["a"])(arguments[0])&&(this.options=C(e,arguments[0]))};function C(t,e){var n;for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function S(){var t=new w({d_element:".random",d_kerning:8e3});t.start()}function x(t){for(var e=t.parentNode,n=0;n<=e.children.length-1;n++)if(e.children[n]===t)return n}function A(t,e){for(var n=document.querySelectorAll(t),r=0;r<=n.length-1;r++)n.item(r).addEventListener(e,(function(t){var e=x(t.target.parentNode);obj[e].restart()}),!1)}w.prototype={_random:function(t,e){return Math.floor(Math.random()*(e-t)+t)},_getElementSize:function(){var t,e,n=document.querySelector(this.options.d_element).textContent;for(t in n)e=n[t],this.getLettersArray.push(e);return this.getLettersArray},_setStructure:function(){var t,e,n,r=document.querySelector(this.options.d_element);for(t in r.innerHTML="",this.getLettersArray){e=document.createElement("span"),n=this.getLettersArray[t]," "===n&&(e.innerHTML=" "),e.classList.add("randomCharacter"),r.appendChild(e);var a=document.createTextNode(n);e.appendChild(a),e.style.opacity="0"}},_setKerning:function(){var t,e,n,r,a=this.options.d_kerning,o=document.querySelector(this.options.d_element);for(t=0;t<this.getLettersArray.length;t++)e=t+1,n=o.querySelector(".randomCharacter:nth-child("+e+")"),n.style.padding="0"+Math.sqrt(a)/n.offsetWidth+"px",r=n.offsetWidth,this.kerningSize.push(r),n.style.width=r+"px"},_convertStringToArray:function(t){var e,n;for(e=0;e<this.char.length;e++)n=this.char[e],this.charArray.push(n)},_setChange:function(){var t,e;for(t in this.getLettersArray)e=this._random(this.options.d_min,this.options.d_max),this.getLettersChanges.push(e)},_generateRandomCharacter:function(){var t=this.options.d_type,e=document.querySelector(this.options.d_element);this.currentChange++;var n,r,a=this._random(0,this.getLettersArray.length),o=e.querySelector(".randomCharacter:nth-child("+(a+1)+")");"int"===t?n=this._random(0,9):"char"===t?(r=this._random(0,this.charArray.length),n=this.charArray[r]):(r=this._random(0,t.length),n=t[r]),o.innerHTML=n,o.style.opacity="1",e.style.opacity="1"},_checkNbChanges:function(){var t,e,n,r,a,o=document.querySelector(this.options.d_element);for(t=0;t<this.getLettersArray.length;t++)e=t+1,n=this.getLettersChanges[t],a=o.querySelector(".randomCharacter:nth-child("+e+")"),r=this.getLettersArray[t],this.currentChange>n&&(a.innerHTML=r)},_loop:function(){var t=this;this.requestId=requestAnimationFrame((function(){t._loop(),t.currentChange>t.options.d_max&&t.stop()})),t._generateRandomCharacter(t.options.d_type),t._checkNbChanges()},restart:function(){this.currentChange=0,this._setChange(),this._loop()},start:function(){this._getElementSize(),this._setStructure(),this._setKerning(),this._setChange(),this._convertStringToArray(),this._loop()},stop:function(){window.cancelAnimationFrame(this.requestId)}},A(".item-link","mouseenter");var M={initrandom:S},L=n("1157"),k=n.n(L);function q(){k.a.each(k()(".particletext.confetti"),(function(){for(var t=k()(this).width()/50*10,e=0;e<=t;e++)k()(this).append('<span class="particle c'+k.a.rnd(1,2)+'" style="top:'+k.a.rnd(10,50)+"%; left:"+k.a.rnd(0,100)+"%;width:"+k.a.rnd(6,8)+"px; height:"+k.a.rnd(3,4)+"px;animation-delay: "+k.a.rnd(0,30)/10+'s;"></span>')}))}k.a.rnd=function(t,e){return t=parseInt(t),e=parseInt(e),Math.floor(Math.random()*(e-t+1))+t};var T={confetti:q},P={name:"Home",components:{PlanetCom:j},data:function(){return{planet_list:[{title:"名字",img:n("292e")},{title:"名字",img:n("292e")}]}},methods:{starsshow:function(){for(var t=800,e=k()(".stars"),n=800,r=0;r<t;r++){var a=k()("<div/>").addClass("star");e.append(a)}k()(".star").each((function(){var t=k()(this),e=.2+1*Math.random(),r=n+300*Math.random();t.css({transformOrigin:"0 0 "+r+"px",transform:" translate3d(0,0,-"+r+"px) rotateY("+360*Math.random()+"deg) rotateX("+-50*Math.random()+"deg) scale("+e+","+e+")"})}))},Scrollchange:function(t){k()("#scrolldown").css("bottom",document.body.clientHeight+100-k()(t)[0].target.scrollTop);var e=parseFloat(1-k()(t)[0].target.scrollTop/(document.body.clientHeight/4));if(e<0&&(e=0),k()("#scrolldown").css("opacity",e),0==e){var n=k()(".home")[0].scrollHeight-document.body.clientHeight;k()(k()(t)[0].target).animate({scrollTop:n},1e3)}}},mounted:function(){M.initrandom(),T.confetti(),window.addEventListener("scroll",this.Scrollchange,!0),this.starsshow()}};n("9c52");P.render=m,P.__scopeId="data-v-5fde004d";var H=P,E=[{path:"/",name:"Home",component:H,meta:{title:"涛仔的镜花水月"}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],I=Object(s["a"])({history:Object(s["b"])("/wwwwww.io/"),routes:E}),z="涛仔的镜花水月";I.beforeEach((function(t,e,n){document.title=t.meta.title?t.meta.title:z,n()}));var N=I,F=n("7876"),G=n.n(F);Object(r["c"])(i).use(N).use(k.a).use(G.a).mount("#app")},"56d8":function(t,e,n){},7266:function(t,e,n){},"9c52":function(t,e,n){"use strict";n("56d8")},d8d8:function(t,e,n){"use strict";n("7266")}});
//# sourceMappingURL=app.c4292e64.js.map