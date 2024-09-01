;
(self.AMP=self.AMP||[]).push({m:0,v:"2406131415000",n:"amp-fx-collection",ev:"0.1",l:!0,f:function(t,n){!function(){var n;function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=t[r];return i}function i(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return r(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var r=t.message,i=t.stack,e=new Error(r);for(var a in t)e[a]=t[a];return e.stack=i,e}function a(t){for(var n,r=null,a="",s=i(arguments,!0);!(n=s()).done;){var u=n.value;u instanceof Error&&!r?r=e(u):(a&&(a+=" "),a+=u)}return r?a&&(r.message=a+": "+r.message):r=new Error(a),r}function s(t){var n,r;null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,t)}function u(t){var n=a.apply(null,arguments);setTimeout((function(){throw s(n),n}))}Array.isArray;var o=Object.prototype;function f(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}o.hasOwnProperty,o.toString,self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var c,h=self.__AMP_LOG;function l(t,n){throw new Error("failed to call initLogConstructor")}function v(t){return h.user||(h.user=d()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(h.user.win,t)?h.userForEmbed||(h.userForEmbed=d()):h.user}function d(t){return l()}function p(t,n,r,i,e,a,s,u,o,f,c){return t}function m(t,n,r,i,e,a,s,u,o,f,c){return v().assert(t,n,r,i,e,a,s,u,o,f,c)}var b,y=["fade-in","fade-in-scroll","float-in-bottom","float-in-top","fly-in-bottom","fly-in-left","fly-in-right","fly-in-top","parallax"],g={FADE_IN:y[0],FADE_IN_SCROLL:y[1],FLOAT_IN_BOTTOM:y[2],FLOAT_IN_TOP:y[3],FLY_IN_BOTTOM:y[4],FLY_IN_LEFT:y[5],FLY_IN_RIGHT:y[6],FLY_IN_TOP:y[7],PARALLAX:y[8]},w=(f(c={},g.FADE_IN,{observes:0,opacity:!0}),f(c,g.FADE_IN_SCROLL,{observes:0,opacity:!0}),f(c,g.FLOAT_IN_BOTTOM,{observes:1,translates:{y:!0}}),f(c,g.FLOAT_IN_TOP,{observes:1,translates:{y:!0}}),f(c,g.FLY_IN_BOTTOM,{observes:0,translates:{y:!0}}),f(c,g.FLY_IN_LEFT,{observes:0,translates:{x:!0}}),f(c,g.FLY_IN_RIGHT,{observes:0,translates:{x:!0}}),f(c,g.FLY_IN_TOP,{observes:0,translates:{y:!0}}),f(c,g.PARALLAX,{observes:0,translates:{y:!0}}),c);function A(t,n){if(t==n)return!1;var r=w[t],i=r.observes,e=r.opacity,a=r.translates,s=w[n],u=s.observes,o=s.opacity,f=s.translates;if(i!==u)return!1;if(e&&o)return!1;if(a&&f){if(a.x&&f.x)return!1;if(a.y&&f.y)return!1}return!0}function x(t){return m(y.indexOf(t)>-1,"Invalid amp-fx type `%s`",t)}var O=["Webkit","webkit","Moz","moz","ms","O","o"],F={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function I(t){var n=t.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()}));return O.some((function(t){return n.startsWith(t+"-")}))?"-".concat(n):n}function _(t,n,r){if(n.startsWith("--"))return n;b||(b=Object.create(null));var i=b[n];if(!i||r){if(i=n,void 0===t[n]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),a=function(t,n){for(var r=0;r<O.length;r++){var i=O[r]+n;if(void 0!==t[i])return i}return""}(t,e);void 0!==t[a]&&(i=a)}r||(b[n]=i)}return i}function T(t,n){var r=t.style;for(var i in n)r.setProperty(I(_(r,i)),String(n[i]),"important")}function L(t,n,r,i,e){var a=_(t.style,n,e);if(a){var s=i?r+i:r;t.style.setProperty(I(a),s)}}function E(t,n){for(var r in n)L(t,r,n[r])}function N(t){return"".concat(t,"px")}function Y(t,n){return t.getComputedStyle(n)||F}function j(t){return"display"in t&&function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var e=a.apply(null,r);e.name=t||e.name,s(e)}("STYLE","`display` style detected. You must use toggle instead."),t}function z(t,n,r,i){var e=S(t),a=R(e);!function(t,n,r,i,e,a){var s=B(t),u=s[r];u||(u=s[r]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),u.ctor||(u.ctor=i,u.context=n,u.sharedInstance=!1,u.resolve&&X(t,r))}(a,e,n,r),i&&X(a,n)}function M(t,n){return X(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function P(t,n){return X(R(S(t)),n)}function S(t){return t.nodeType?(r=t,n=(r.ownerDocument||r).defaultView,M(n,"ampdoc")).getAmpDoc(t):t;var n,r}function R(t){var n=S(t);return n.isSingleDoc()?n.win:n}function X(t,n){p(function(t,n){var r=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!r||!r.ctor)}(t,n));var r=B(t)[n];return r.obj||(p(r.ctor),p(r.context),r.obj=new r.ctor(r.context),p(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}function B(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}var C=function(t){return P(t,"mutator")},$=function(t){return P(t,"viewport")};function k(t,n){return!(!t||!n)&&t.left==n.left&&t.top==n.top&&t.width==n.width&&t.height==n.height}var D,V=function(){function t(t,n,r,i){this.element=n,this.nu=i,this.fidelity=r,this.turn=0==r?Math.floor(4*Math.random()):0,this.RF=null,this.$h=$(t)}var n=t.prototype;return n.Zo=function(t){var n=this.RF;if(!(n&&k(n.positionRect,t.positionRect)&&k(n.viewportRect,t.viewportRect))){p(t.positionRect);var r,i,e=t.positionRect;t.relativePos=(r=e,i=t.viewportRect,r.top<i.top?"top":r.bottom>i.bottom?"bottom":"inside"),function(t,n){return t.top<=n.bottom&&n.top<=t.bottom&&t.left<=n.right&&n.left<=t.right}(e,t.viewportRect)?(this.RF=t,this.nu(t)):this.RF&&(this.RF=null,t.positionRect=null,this.nu(t))}},n.update=function(t){var n=this;if(!t){if(0!=this.turn)return void this.turn--;0==this.fidelity&&(this.turn=4)}var r,i,e=this.$h.getSize(),a={left:0,top:0,width:r=e.width,height:i=e.height,bottom:0+i,right:0+r,x:0,y:0};this.$h.getClientRectAsync(this.element).then((function(t){n.Zo({positionRect:t,viewportRect:a,relativePos:null})}))},t}(),G=function(){function t(t){var n=this;this.Ze=t,this.t=t.win,this.FF=[],this.Wh=M(this.t,"vsync"),this.$h=$(t),this.Uw=[],this.IF=!1,this.MF=!1,this.AF=!1,this.BF=function(t,n,r){var i=0,e=0,a=null;function s(){i=0;var r,u=500-(t.Date.now()-e);u>0?i=t.setTimeout(s,u):(r=a,a=null,n.apply(null,r))}return function(){e=t.Date.now();for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];a=r,i||(i=t.setTimeout(s,500))}}(this.t,(function(){n.IF=!1}))}var n=t.prototype;return n.observe=function(t,n,r){var i=this,e=new V(this.Ze,t,n,r);return this.FF.push(e),this.AF||this.PF(),e.update(),function(){for(var t=0;t<i.FF.length;t++)if(i.FF[t]==e)return void i.TF(t)}},n.unobserve=function(t){for(var n=0;n<this.FF.length;n++)if(this.FF[n].element==t)return void this.TF(n);(h.dev||(h.dev=l())).error("POSITION_OBSERVER","cannot unobserve unobserved element")},n.TF=function(t){this.FF.splice(t,1),0==this.FF.length&&this.$F()},n.PF=function(){var t=this;this.AF=!0,this.Uw.push(this.$h.onScroll((function(){t.qF()}))),this.Uw.push(this.$h.onResize((function(){t.CF()})))},n.$F=function(){for(this.AF=!1;this.Uw.length;)this.Uw.pop()()},n.updateAllEntries=function(t){for(var n=0;n<this.FF.length;n++)this.FF[n].update(t)},n.qF=function(){this.BF(),this.IF=!0,this.MF||this.DF()},n.CF=function(){this.updateAllEntries(!0)},n.DF=function(){var t=this;this.updateAllEntries(),this.MF=!0,this.IF?this.Wh.measure((function(){t.DF()})):this.MF=!1},t}();function H(t,n,r){p("X"==n||"Y"==n),p(1==Math.abs(r));var i=t.element,e="X"==n,a=r*t.flyInDistance+(e?"vw":"vh");t.initialTrigger||(C(i).mutateElement(i,(function(){var n=Y(t.win,i),r=e?"left":"top",s="auto"===n[r]?"0px":n[r],u={position:"static"===n.position?"relative":n.position,visibility:"visible"};u[r]="calc(".concat(s," - ").concat(a,")"),E(i,j(u))})),t.initialTrigger=!0),E(i,{"transition-duration":t.duration,"transition-timing-function":t.easing,"transform":"translate".concat(n,"(").concat(a,")")})}function U(t){var n=parseFloat(t.getAttribute("data-margin-start"));return n&&m(n>=0&&n<=100,"data-margin-start must be a percentage value and be between 0% and 100% for: %s",t),n}function W(t){return t&&t.positionRect?t.positionRect.top:null}function Z(t,n,r){var i=W(t);return p(1==Math.abs(r)),!!i&&i+r*n.viewportHeight*n.flyInDistance/100<=(1-n.marginStart)*n.viewportHeight}function q(t,n,r){var i=W(t),e=void 0!==r?r:n.viewportHeight;return!!i&&i<=(1-n.marginStart)*e}var J=(f(D={},g.PARALLAX,{userAsserts:function(t){var n=m(t.getAttribute("data-parallax-factor"),"data-parallax-factor=<number> attribute must be provided for: %s",t);m(parseFloat(n)>0,"data-parallax-factor must be a number and greater than 0 for: %s",t)},update:function(t){var n=this,r=W(t);if(p(n.adjustedViewportHeight),r&&!(r>n.adjustedViewportHeight)){var i=-(parseFloat(n.factor)-1),e=(n.adjustedViewportHeight-r)*i;n.offset=e,E(n.element,{transform:"translateY(".concat(n.offset.toFixed(0),"px)")})}}}),f(D,g.FLY_IN_BOTTOM,{userAsserts:U,update:function(t){var n=this;p(n.viewportHeight),Z(t,n,-1)&&H(n,"Y",-1)}}),f(D,g.FLY_IN_LEFT,{userAsserts:U,update:function(t){var n=this;p(n.viewportHeight),q(t,n)&&H(n,"X",1)}}),f(D,g.FLY_IN_RIGHT,{userAsserts:U,update:function(t){var n=this;p(n.viewportHeight),q(t,n)&&H(n,"X",-1)}}),f(D,g.FLY_IN_TOP,{userAsserts:U,update:function(t){var n=this;p(n.viewportHeight),Z(t,n,1)&&H(n,"Y",1)}}),f(D,g.FADE_IN,{userAsserts:U,update:function(t){var n=this;p(n.viewportHeight),q(t,n)&&E(n.element,{"transition-duration":n.duration,"transition-timing-function":n.easing,"opacity":1})}}),f(D,g.FADE_IN_SCROLL,{userAsserts:function(t){var n=U(t),r=parseFloat(t.getAttribute("data-margin-end"));r&&(m(r>=0&&r<=100,"data-margin-end must be a percentage value and be between 0% and 100% for: %s",t),m(r>n,"data-margin-end must be greater than data-margin-start for: %s",t))},update:function(t){var n=this,r=n.marginStart,i=n.viewportHeight;if(p(n.adjustedViewportHeight),q(t,n,n.adjustedViewportHeight)&&(n.hasRepeat||!(n.offset>=1))){var e=1*(i-W(t)-r*i)/((n.marginEnd-r)*i);n.offset=e,E(n.element,{opacity:n.offset})}}}),D);function K(t){var n=parseFloat(t);return isNaN(n)?null:n/100}function Q(t){switch(t){case g.FADE_IN:case g.FLY_IN_RIGHT:case g.FLY_IN_LEFT:case g.FLY_IN_TOP:case g.FLY_IN_BOTTOM:return{"start":.05};case g.FADE_IN_SCROLL:return{"start":0,"end":.5};default:return{"start":0,"end":1}}}var tt=function(){function t(){this.yn=null}var n=t.prototype;return n.add=function(t){var n=this;return this.yn||(this.yn=[]),this.yn.push(t),function(){n.remove(t)}},n.remove=function(t){var n,r,i;this.yn&&(r=t,-1!=(i=(n=this.yn).indexOf(r))&&n.splice(i,1))},n.removeAll=function(){this.yn&&(this.yn.length=0)},n.fire=function(t){if(this.yn)for(var n,r=i(this.yn.slice(),!0);!(n=r()).done;)(0,n.value)(t)},n.getHandlerCount=function(){var t,n;return null!==(t=null===(n=this.yn)||void 0===n?void 0:n.length)&&void 0!==t?t:0},t}(),nt=function(){function t(t){var n,r,i,e=this;this.Ze=t,this.th=new tt,this.nL=(n=!1,r=null,i=function(){return e.ih()},function(){if(!n){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];r=i.apply(self,e),n=!0,i=null}return r}),this.rL=0,this.iL=0,this.eL=!0}var n=t.prototype;return n.observe=function(t){this.th.add(t),this.nL()},n.ih=function(){var t=this,n=$(this.Ze);n.onScroll((function(){t.aL(n.getScrollTop())}))},n.aL=function(t){this.iL=t;var n=this.iL-this.rL;return(!this.eL&&n>0||this.eL&&n<0)&&(this.rL=this.iL),!this.eL&&this.iL<=36||!this.eL&&n<-20?(this.sL(!0),void(this.rL=this.iL)):void(this.eL&&n>80&&(this.sL(!1),this.rL=this.iL))},n.sL=function(t){this.eL!=t&&(this.eL=t,this.th.fire(t))},t}();function rt(t,n,r,i,e){if(t[n]==r)return!0;var a=e?" ".concat(e):"",s=it(i);return v().warn("amp-fx","FX element must have `".concat(n,": ").concat(r,"` [").concat(s,"]").concat(a,".")),!1}function it(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=t.classList,i=t.id,e=t.parentElement,a=t.tagName;if(i)return"#".concat(i);var s=a.toLowerCase(),u=s;if(r.length>0){var o=r.length>1?"...":"";u+=".".concat(r[0]).concat(o)}if(!e)return"".concat(u," (detached)");var f=e.firstElementChild,c=e.lastElementChild;return t==f&&t==c||(t==f?u+=":first-child":t==c&&(u+=":last-child")),n>0?u:"".concat(it(e,n+1)," > ").concat(u)}var et=function(){function t(t,n,r){var i,e,a=this;this.win=t.win,this.kn=function(t){return P(t,"position-observer")}(n),this.$h=$(n),this.Gc=C(n),this.viewportHeight=null,this.adjustedViewportHeight=null,this.element=n,this.offset=0,this.uL=r,J[r].userAsserts(n),this.factor=parseFloat(n.getAttribute("data-parallax-factor")),this.marginStart=n.hasAttribute("data-margin-start")?K(n.getAttribute("data-margin-start")):Q(r).start,this.marginEnd=n.hasAttribute("data-margin-end")?K(n.getAttribute("data-margin-end")):Q(r).end,this.easing=(i=n.hasAttribute("data-easing")?n.getAttribute("data-easing"):function(t){switch(t){case g.FADE_IN:return"ease-in";case g.FLY_IN_RIGHT:case g.FLY_IN_LEFT:case g.FLY_IN_TOP:case g.FLY_IN_BOTTOM:return"ease-out";default:return"ease-in"}}(r),(e={"linear":"cubic-bezier(0.00, 0.00, 1.00, 1.00)","ease-in-out":"cubic-bezier(0.80, 0.00, 0.20, 1.00)","ease-in":"cubic-bezier(0.80, 0.00, 0.60, 1.00)","ease-out":"cubic-bezier(0.40, 0.00, 0.40, 1.00)"})[i]?e[i]:(m(i.startsWith("cubic-bezier"),"All custom bezier curves should be specified by following the `cubic-bezier()` function notation."),i)),this.duration=n.hasAttribute("data-duration")?n.getAttribute("data-duration"):function(t,n){switch(n){case g.FADE_IN:return"1000ms";case g.FLY_IN_BOTTOM:case g.FLY_IN_TOP:case g.FLY_IN_LEFT:case g.FLY_IN_RIGHT:var r=$(t).getSize().width;return 1e3,e=480,(i=Math.min(1e3,r))<e?i=e:i>1e3&&(i=1e3),200*(i-480)/520+400+"ms";default:return"1ms"}var i,e}(t,r),this.flyInDistance=n.hasAttribute("data-fly-in-distance")?parseFloat(n.getAttribute("data-fly-in-distance")):function(t,n){switch(n){case g.FLY_IN_BOTTOM:case g.FLY_IN_TOP:return $(t).getSize().width<1e3?25:33;case g.FLY_IN_LEFT:case g.FLY_IN_RIGHT:return 100;default:return 1}}(t,r),this.hasRepeat=n.hasAttribute("data-repeat"),this.initialTrigger=!1,this.oL().then((function(t){a.adjustedViewportHeight=t,a.fL()})),this.cL()}var n=t.prototype;return n.fL=function(){var t=this;this.kn.observe(this.element,1,J[this.uL].update.bind(this)),this.$h.onResize((function(){t.cL(),t.oL().then((function(n){t.adjustedViewportHeight=n}))}))},n.cL=function(){var t=this;this.Gc.measureElement((function(){t.viewportHeight=t.$h.getHeight()}))},n.oL=function(){var t=this;return this.Gc.measureElement((function(){for(var n=t.$h.getHeight(),r=0,i=t.element;i;i=i.offsetParent)r+=i.offsetTop;return r<n?r:n}))},t}(),at=function(){function t(t){var r=this;this.Ze=t,this.hL=[],Promise.all([t.whenReady(),t.whenFirstVisible()]).then((function(){var t,i,e,a,s=r.Ze.getRootNode();r.lL(),t=void 0,i=s,e=function(){return r.lL()},a=function(){if(void 0!==n)return n;n=!1;try{var t={get capture(){return n=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return n}(),i.addEventListener("amp:dom-update",(function(t){try{return e(t)}catch(t){var n,r;throw null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,t),t}}),!!a&&t)}))}var r=t.prototype;return r.lL=function(){var t=this;this.Ze.getRootNode().querySelectorAll("[amp-fx]").forEach((function(n){t.hL.includes(n)||function(t){try{for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t.apply(null,r)}catch(t){u(t)}}((function(){return t.vL(n)}))}))},r.vL=function(t){var n=this;p(t.hasAttribute("amp-fx")),p(!this.hL.includes(t)),p(this.Ze.isVisible()),function(t){p(t.hasAttribute("amp-fx"));var n=t.getAttribute("amp-fx").trim().toLowerCase().split(/\s+/);return m(n.length,"No value provided for `amp-fx` attribute"),function(t){for(var n=0;n<t.length;n++)for(var r=t[n],i=n+1;i<t.length;i++){var e=t[i];A(r,e)||(v().warn("amp-fx-collection","%s preset can't be combined with %s preset as the resulting animation isn't valid.",r,e),t.splice(i--,1))}return t}(n.filter(x))}(t).forEach((function(r){n.dL(t,r)})),this.hL.push(t)},r.dL=function(t,n){1!=p(w[n]).observes?function(t,n,r){!function(t){z(t,"position-observer",G)}(t),new et(t,n,r),E(n,j(function(t,n){switch(n){case g.PARALLAX:return{"will-change":"transform"};case g.FADE_IN:case g.FADE_IN_SCROLL:return{"will-change":"opacity","opacity":0};case g.FLY_IN_BOTTOM:case g.FLY_IN_TOP:case g.FLY_IN_LEFT:case g.FLY_IN_RIGHT:return{"will-change":"transform"};default:return{"visibility":"visible"}}}(0,r)))}(this.Ze,t,n):function(t,n,r){if(!(u=n,P(u,"viewer")).isEmbedded()){var i="fx-scroll-dispatch";z(t,i,nt);var e=P(t,i),a=C(n),s=!0;a.measureMutateElement(n,(function(){var i=Y(t.win,n),a=function(t,n,r){var i=n.replace(/^float\-in\-([^\s]+)$/,"$1");return p(i.length>0),rt(r,i,N(0),t,"amp-fx=".concat(n))?i:null}(n,r,i),u=function(t,n){return rt(n,"overflow","hidden",t)&&rt(n,"position","fixed",t)}(n,i);a&&u?e.observe((function(t){!function(t,n,r){var i=0;C(t).measureMutateElement(t,(function(){i=function(t,n,r){if(n)return 0;var i=t.getBoundingClientRect().height;return"top"==r?-i:i}(t,n,r)}),(function(){!function(t,n){T(t,{"transition":"transform ".concat(300,"ms ").concat("ease"),"transform":"translate(0, ".concat(N(n),")")})}(t,i)}))}(n,t,p(a))})):s=!1}),(function(){s&&function(t){T(t,{"will-change":"transform"})}(n)}))}var u}(this.Ze,t,n)},t}();t.registerServiceForDoc("amp-fx-collection",at)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-fx-collection-0.1.js.map