(function(e,t,r,n,a,i){i=0,a=function(e){return e.id||(e.id="mx_n_"+ ++i)},n.add("magix/magix",function(r){var n=[].slice,a=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,i=/\/[^\/]*$/,o=/[#?].*$/,s="",c=/([^=&?\/#]+)=?([^&=#?]*)/g,f="pathname",u=/^https?:\/\//i,v=0,m="/",h="vframe",d="\n",l=t.console,p=l&&l.error,g=function(){},x={tagName:h,rootId:"magix_vf_root",progress:g,coded:1,execError:function(e){p&&l.error(e)}},y=x.hasOwnProperty,w=function(e,t){return e&&y.call(e,t)},b=function(t){return function(r,n,a){switch(arguments.length){case 0:a=t;break;case 1:a=_._o(r)?E(t,r):w(t,r)?t[r]:e;break;case 2:n===e?(delete t[r],a=n):t[r]=a=n}return a}},$=function(e,t){return t.f-e.f||t.t-e.t},C=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(0|t||5),void 0):new C(e,t)},E=function(e,t,r){for(var n in t)r&&w(r,n)||(e[n]=t[n]);return e};E(C.prototype,{get:function(e){var t,r=this,n=r.c;return e=f+e,w(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=v++,t=t.v)),t},list:function(){return this.c},set:function(e,t,r){var n=this,a=n.c,i=f+e,o=a[i];if(!w(a,i)){if(a.length>=n.b){a.sort($);for(var s=n.b-n.x;s--;)o=a.pop(),delete a[o.k],o.m&&T(o.m,o.o,o)}o={},a.push(o),a[i]=o}return o.o=e,o.k=i,o.v=t,o.f=1,o.t=v++,o.m=r,t},del:function(e){e=f+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=s,delete t[e],r.m&&(T(r.m,r.o,r),r.m=s))},has:function(e){return e=f+e,w(this.c,e)}});var M=C(60),P=C(),T=function(e,t,r,n,a,i){for(_._a(e)||(e=[e]),t&&(_._a(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{i=e[n],a=i&&i.apply(r,t)}catch(o){x.execError(o)}return a},_={mix:E,has:w,safeExec:T,noop:g,config:b(x),start:function(e){var t=this;E(x,e),t.use(["magix/router","magix/vom",e.iniFile],function(r,n,a){x=E(x,a,e),x["!tnc"]=x.tagName!=h,r.on("!ul",n.locChged),r.on("changed",n.locChged),n.on("progress",x.progress),t.use(x.extensions,r.start)})},keys:Object.keys||function(e){var t=[];for(var r in e)w(e,r)&&t.push(r);return t},local:b({}),path:function(e,t){var r=e+d+t,n=P.get(r);if(!n){if(u.test(t))n=t;else if(e=e.replace(o,s).replace(i,s)+m,t.charAt(0)==m){var c=u.test(e)?8:0,f=e.indexOf(m,c);n=e.substring(0,f)+t}else n=e+t;for(;a.test(n);)n=n.replace(a,"$1/");P.set(r,n)}return n},pathToObject:function(e,t){var r=e+d+t,n=M.get(r);if(!n){n={};var a={},i=s;o.test(e)?i=e.replace(o,s):~e.indexOf("=")||(i=e);var v=e.replace(i,s);if(i&&u.test(i)){var h=i.indexOf(m,8);i=~h?i.substring(h):m}v.replace(c,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}a[r]=n}),n[f]=i,n.params=a,M.set(r,n)}return n},objectToPath:function(e,t,r){var n,a=e[f],i=[],o=e.params;for(var s in o)n=o[s],(!r||n||w(r,s))&&(t&&(n=encodeURIComponent(n)),i.push(s+"="+n));return i.length&&(a=a+"?"+i.join("&")),a},listToMap:function(e,t){var r,n,a,i={};if(_._s(e)&&(e=e.split(",")),e&&(a=e.length))for(r=0;a>r;r++)n=e[r],i[t?n[t]:n]=t?n:1;return i},cache:C};return E(_,{use:function(e,t){r.use(e&&e+s,function(e){t&&t.apply(e,n.call(arguments,1))})},_a:r.isArray,_f:r.isFunction,_o:r.isObject,_s:r.isString,_n:r.isNumber})}),n.add("magix/router",function(e,r,n,a){var i,o,s,c,f,u,v="",m="pathname",h="view",d=r.has,l=r.mix,p=r.keys,g=r.config(),x=r.cache(),y=r.cache(40),w={params:{},href:v},b=/#.*$/,$=/^[^#]*#?!?/,C="params",E=function(e,t,r){if(e){r=this[C],e=(e+v).split(",");for(var n=0;e.length>n&&!(t=d(r,e[n]));n++);}return t},M=function(){return this[m]},P=function(){return this[h]},T=function(e,t,r,n){return r=this,n=r[C],arguments.length>1?n[e]=t:n[e]},_=function(e){var n=r.pathToObject(e,c),a=n[m];return a&&u&&(n[m]=r.path(t.location[m],a)),n},I=l({viewInfo:function(e,t){var n,a;if(!o){o={rs:g.routes||{},nf:g.notFoundView};var i=g.defaultView;o.dv=i;var s=g.defaultPathname||v;n=o.rs,o.f=r._f(n),o.f||n[s]||!i||(n[s]=i),o[m]=s}return e||(e=o[m]),n=o.rs,a=o.f?n.call(g,e,t):n[e],{view:a||o.nf||o.dv,pathname:e}},start:function(){var e=t.history;s=g.nativeHistory,c=g.coded,f=s&&e.pushState,u=s&&!f,f?I.useState():I.useHash(),I.route()},parseQH:function(e,r){e=e||t.location.href;var n=x.get(e);if(!n){var a=e.replace(b,v),i=e.replace($,v),o=_(a),c=_(i),f={};l(f,o[C]),l(f,c[C]),n={get:T,set:T,href:e,refHref:w.href,srcQuery:a,srcHash:i,query:o,hash:c,params:f},x.set(e,n)}if(r&&!n[h]){var u;u=n.hash[m]||s&&n.query[m];var d=I.viewInfo(u,n);l(n,d)}return n},getChged:function(e,t){var r=e.href,n=t.href,a=r+"\n"+n,i=y.get(a);if(!i){var o,s,c;i={},i[h]=c,i[m]=c,i[C]={};var f,u,v=[m,h];for(f=1;f>=0;f--)u=v[f],s=e[u],c=t[u],s!=c&&(i[u]={from:s,to:c},o=1);var d=e[C],l=t[C];for(v=p(d).concat(p(l)),f=v.length-1;f>=0;f--)u=v[f],s=d[u],c=l[u],s!=c&&(i[C][u]={from:s,to:c},o=1);i.occur=o,i.isParam=E,i.isPathname=M,i.isView=P,y.set(a,i)}return i},route:function(){var e=I.parseQH(0,1),t=!w.get,r=I.getChged(w,e);w=e,r.occur&&(i=e,I.fire("changed",{location:e,changed:r,force:t}))},navigate:function(e,t,n){if(!t&&r._o(e)&&(t=e,e=v),t&&(e=r.objectToPath({params:t,pathname:e},c)),e){var a=_(e),o={};if(o[C]=l({},a[C]),o[m]=a[m],o[m]){if(u){var s=i.query[C];for(var h in s)d(s,h)&&!d(o[C],h)&&(o[C][h]=v)}}else{var p=l({},i[C]);o[C]=l(p,o[C]),o[m]=i[m]}var g,x=r.objectToPath(o,c,i.query[C]);g=x!=i[f?"srcQuery":"srcHash"],g&&(f?(I.poped=1,history[n?"replaceState":"pushState"](v,v,x),I.route()):(l(o,i,o),o.srcHash=x,o.hash={params:o[C],pathname:o[m]},I.fire("!ul",{loc:i=o}),x="#!"+x,n?location.replace(x):location.hash=x))}}},n);return I.useState=function(){var e=location.href;a.on(t,"popstate",function(){var t=location.href==e;(I.poped||!t)&&(I.poped=1,I.route())})},I.useHash=function(){a.on(t,"hashchange",I.route)},I},{requires:["magix/magix","magix/event","event"]}),n.add("magix/body",function(n,i){var o,s=i.has,c=i.mix,f={},u={},v=String.fromCharCode(26),m="mx-ei",h="mx-owner",d="addEventListener",l="removeEventListener",p=r.body,g=p[d],x="parentNode",y={},w="on",b=",",$=function(e,t,r){return r?e.setAttribute(t,r):r=e.getAttribute(t),r},C=function(){this.returnValue=!1},E=function(){this.cancelBubble=!0},M={special:function(e){c(f,e)},process:function(r){if(r=r||t.event,r&&!r[w]){var n=r.target||r.srcElement||p;for(r[w]=1;n&&1!=n.nodeType;)n=n[x];for(var i,c,f=n,u=r.type,d=y[u]||(y[u]=RegExp(b+u+"(?:,|$)")),l="mx-"+u,M=[];f&&1==f.nodeType&&(i=$(f,l),c=$(f,m),!i&&!d.test(c));)M.push(f),f=f[x];if(i){var P,T=i.split(v);if(T.length>1&&(P=T[0],i=T.pop()),P=P||$(f,h),!P)for(var _=f,I=o.all();_;){if(s(I,_.id)){$(f,h,P=_.id);break}_=_[x]}if(!P)throw Error("bad:"+i);var O=o.get(P),V=O&&O.view;V&&(g||(r.preventDefault=C,r.stopPropagation=E),V.pEvt({info:i,se:r,st:u,tId:a(n),cId:a(f)}))}else{for(var q;M.length;)q=M.shift(),c=$(q,m)||w,d.test(c)||(c=c+b+u,$(q,m,c));q=e}f=n=e}},act:function(t,r,n){var a=u[t]||0,i=a>0?1:0,s=M.process;if(a+=r?-i:i,!a){n&&(o=n);var c=f[t];c?M.lib(p,t,r,s):g?p[r?l:d](t,s,!1):p[w+t]=r?e:s,r||(a=1)}u[t]=a}},P={change:1,submit:1,focusin:1,focusout:1,mouseenter:2,mouseleave:2,mousewheel:1};return M.special(P),M.lib=function(e,t,r,a){n.use("event",function(n,i){var o=P[t];1==o?(o=r?"detach":"on",i[o](e,t,a)):(o=(r?"un":"")+"delegate",i[o](e,t,"[mx-"+t+"]",a))})},M},{requires:["magix/magix"]}),n.add("magix/event",function(e,t){var r=function(e){return"~"+e},n=t.safeExec,a={fire:function(e,t,a,i){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var f,u,v=c.length,m=v-1;v--;)f=i?v:m-v,u=c[f],(u.d||u.r)&&(c.splice(f,1),m--),u.d||n(u.f,t,s);a=a||0>m}a&&delete s[o]},on:function(e,t,n){var a=r(e),i=this[a]||(this[a]=[]),o={f:t};isNaN(n)?(o.r=n,i.push(o)):i.splice(0|n,0,o)},off:function(e,t){var n=r(e),a=this[n];if(a)if(t){for(var i,o=a.length-1;o>=0;o--)if(i=a[o],i.f==t&&!i.d){i.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,r)}};return t.mix(t.local,a),a},{requires:["magix/magix"]}),n.add("magix/vframe",function(t,n,i,o){var s,c,f,u,v,m,h,d,l,p,g,x=n.safeExec,y=[],w=n.mix,b=n.config(),$=n.has,C="querySelectorAll",E="alter",M="created",P=function(e){return"object"==typeof e?e:r.getElementById(e)},T=function(e,t,n){return t=P(e),t&&(n=f?r[C]("#"+a(t)+u):t.getElementsByTagName(s)),n||y},_=function(e,t,r){if(e=P(e),t=P(t),e&&t)if(e!==t)try{r=m?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},I=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=g};return I.root=function(t,n,a){if(!h){s=b.tagName,c=b["!tnc"],v=c?"mx-vframe":"mx-defer",f=c&&r[C],u=" "+s+"[mx-vframe]";var i=r.body;m=i.contains,l=n,p=a,g=t;var o=b.rootId,d=P(o);d||(d=r.createElement(s),d.id=o,i.appendChild(d),d=e),h=new I(o),t.add(h)}return h},w(w(I.prototype,i),{mountView:function(e,t){var r=this,a=P(r.id);if(r._a||(r._a=1,r._t=a.innerHTML),r.unmountView(),e){var i=n.pathToObject(e),s=i.pathname,c=--r.sign;n.use(s,function(e){if(c==r.sign){o.prepare(e);var n=new e({owner:r,id:r.id,$:P,path:s,vom:g,location:l});r.view=n;var f=function(){r.mountZoneVframes()};n.on("interact",function(e){e.tmpl||(a.innerHTML=r._t,f()),n.on("primed",function(){r.viewPrimed=1,r.fire("viewMounted")}),n.on("rendered",f),n.on("prerender",function(){r.unmountZoneVframes(0,1)||r.cAlter()})},0),t=t||{},n.load(w(t,i.params,t),p)}})}},unmountView:function(){var e=this,t=e.view;if(t){d||(d={}),e.unmountZoneVframes(0,1),e.cAlter(d),e.view=0,t.oust();var r=P(e.id);r&&e._a&&(r.innerHTML=e._t),e.viewInited=0,e.viewPrimed&&(e.viewPrimed=0,e.fire("viewUnmounted")),d=0}e.sign--},mountVframe:function(e,t,r){var n=this;n.fcc&&n.cAlter();var a=g.get(e);return a||(a=new I(e),a.pId=n.id,$(n.cM,e)||n.cC++,n.cM[e]=1,g.add(a)),a.mountView(t,r),a},mountZoneVframes:function(e,t){var r=this,n=e||r.id;r.unmountZoneVframes(n,1);var i=T(n),o=i.length,s={};if(o)for(var f,u,m,h,d=0;o>d;d++)if(f=i[d],u=a(f),!$(s,u)&&(m=f.getAttribute("mx-view"),h=!f.getAttribute(v),h=h!=c,h||m)){r.mountVframe(u,m,t);for(var l,p=T(f),g=0,x=p.length;x>g;g++)l=p[g],s[a(l)]=1}r.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=g.get(e);if(n){var a=n.fcc;n.unmountView(),g.remove(e,a);var i=g.get(n.pId);i&&$(i.cM,e)&&(delete i.cM[e],i.cC--,t||i.cCreated())}},unmountZoneVframes:function(e,t){var r,n,a=this,i=a.cM;for(n in i)e?_(n,e)&&a.unmountVframe(n,r=1):a.unmountVframe(n,r=1);return t||a.cCreated(),r},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,t.fca=0,r.fire(M,e),t.fire(M,e)),g.vfCreated();var n=t.id,a=g.get(t.pId);a&&!$(a.rM,n)&&(a.rM[n]=a.cM[n],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;e||(e={});var r=t.fcc;if(t.fcc=0,!t.fca&&r){var n=t.view,a=t.id;n&&(t.fca=1,n.fire(E,e),t.fire(E,e));var i=g.get(t.pId);i&&$(i.rM,a)&&(i.rC--,delete i.rM[a],i.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(e.viewInited&&t&&t.sign>0){var r=t.olChg(p),a={location:l,changed:p,prevent:function(){this.cs=y},to:function(e){e=e||y,n._s(e)&&(e=e.split(",")),this.cs=e}};r&&x(t.locationChange,a,t);for(var i,o=a.cs||n.keys(e.cM),s=0,c=o.length;c>s;s++)i=g.get(o[s]),i&&i.locChged()}}}),I},{requires:["magix/magix","magix/event","magix/view"]}),n.add("magix/view",function(e,t,r,n,a){var i=t.safeExec,o=t.has,s=",",c=[],f=t.noop,u=t.mix,v="~",m=function(e){return function(){var t=this,r=t.notifyUpdate();r>0&&e.apply(t,arguments)}},h=t.cache(40),d="<",l=">",p=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,g=String.fromCharCode(26),x={prevent:function(e){e=e||this.srcEvent,e.preventDefault()},stop:function(e){e=e||this.srcEvent,e.stopPropagation()},halt:function(e){this.prevent(e),this.stop(e)}},y=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,w=/(\w+):([^,]+)/g,b=/([$\w]+)<([\w,]+)>/,$=function(e){var t=this;u(t,e),t.$ol={ks:[]},t.sign=1,i($.ms,[e],t)};$.ms=[],$.prepare=function(e){if(!e[v]){e[v]=1;var t,r,n,a,i,o=e.prototype,c={};for(var u in o)if(t=o[u],r=u.match(b))for(n=r[1],a=r[2],a=a.split(s),i=a.length-1;i>-1;i--)r=a[i],c[r]=1,o[n+d+r+l]=t;else"render"==u&&t!=f&&(o[u]=m(t));a&&(o.$evts=c)}},$.mixin=function(e,t){t&&$.ms.push(t),u($.prototype,e)},u(u($.prototype,r),{render:f,locationChange:f,init:f,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=function(n){t&&(e.template=e.wrapMxEvent(n)),e.dEvts(),e.fire("interact",{tmpl:t},1),i(e.init,r,e),e.fire("inited",0,1),e.owner.viewInited=1,i(e.render,c,e);var a=!t&&!e.rendered;a&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(n)):n()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=1),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(p,"$&"+this.id+g)},wrapAsync:function(e){var t=this,r=t.sign;return function(){r>0&&r==t.sign&&e&&e.apply(this,arguments)}},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign>0&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(e){var r,n=this;r=n.$ol,r.f=1;var a=r.ks;t._o(e)&&(r.pn=e.pathname,e=e.keys),e&&(r.ks=a.concat((e+"").split(s)))},olChg:function(e){var t=this,r=t.$ol,n=1;return r.f&&(n=0,r.pn&&(n=e.pathname),n||(n=e.isParam(r.ks))),n},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.dEvts(1)),e.sign--},pEvt:function(e){var t=this;if(t.sign>0){var r=e.info,n=e.se,a=h.get(r);a||(a=r.match(y),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(w,function(e,t,r){a.p[t]=r}),h.set(r,a));var o=a.n+d+e.st+l,s=t[o];if(s){var c=x[a.f];c&&c.call(x,n),i(s,{currentId:e.cId,targetId:e.tId,type:e.st,srcEvent:n,halt:x.halt,prevent:x.prevent,stop:x.stop,params:a.p},t)}}},dEvts:function(e){var t=this,r=t.$evts,a=t.vom;for(var i in r)n.act(i,e,a)}});var C="?t="+e.now(),E=e.Env.mods,M={},P={};return $.prototype.fetchTmpl=function(e,t){var r=this,n="template"in r;if(n)t(r.template);else if(o(M,e))t(M[e]);else{var s,c=E[e];c&&(s=c.uri||c.fullpath,s=s.slice(0,s.indexOf(e)+e.length));var f=s+".html",u=P[f],v=function(r){t(M[e]=r)};u?u.push(v):(u=P[f]=[v],a({url:f+C,complete:function(e,t){i(u,e||t),delete P[f]}}))}},$.extend=function(t,r,n){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&i(r,arguments,this)};return o.extend=a.extend,e.extend(o,a,t,n)},$},{requires:["magix/magix","magix/event","magix/body","ajax"]}),n.add("magix/vom",function(e,t,r,n){var a=r.has,i=r.mix,o=0,s=0,c=0,f=0,u={},v={},m={},h=r.mix({all:function(){return u},add:function(e){a(u,e.id)||(o++,u[e.id]=e,h.fire("add",{vframe:e}))},get:function(e){return u[e]},remove:function(e,t){var r=u[e];r&&(o--,t&&s--,delete u[e],h.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){s++;var e=s/o;e>c&&h.fire("progress",{percent:c=e},f=1==e)}},locChged:function(e){var r,n=e.loc;if(n?r=1:n=e.location,i(v,n),!r){i(m,e.changed);var a=t.root(h,v,m);m.view?a.mountView(n.view):a.locChged()}}},n);return h},{requires:["magix/vframe","magix/magix","magix/event"]}),n.add("mxext/mmanager",function(t,r,n){var a=r.has,i=r.safeExec,o=r._a,s=r.mix,c="mr",f=String.fromCharCode(26),u=12e5,v=function(e,t,r){t=[];for(r in e)t.push(r,c,e[r]);return t},m=function(e,t,r){for(var n,a=[t.name],i={},o=e.length-1;o>-1;o--)n=e[o],i[n]?e.splice(o,1):a.push(i[n]=v(t[n]),v(r[n]));return a.join(f)},h=function(e){var t=e.cache;if(t){var r=0|e.cacheTime;t=r?r:t===!0?u:0|t}return t},d=Date.now||function(){return+new Date},l=d(),p=function(e){throw Error(e)},g=function(e,t){var n=this;n.$mClass=e,n.$mCache=r.cache(),n.$mCacheKeys={},n.$mMetas={},t=t?o(t)?t:[t]:[],n.$sKeys=["postParams","urlParams"].concat(t),n.id="mm"+l--,i(g.ms,arguments,n)},x=[].slice,y=function(e,t,r,n){return function(){return e.apply(t,[r,n].concat(x.call(arguments)))}},w=function(e,t){var r=t.b,n=t.a,a=n[r];if(a){var o=a.q;delete n[r],i(o,e,a.e)}},b=function(t,r,n){var a,o=this,s=r.a,c=r.c,f=r.d,u=r.g,v=r.i,m=r.j,h=r.k,l=r.l,p=r.m,g=r.n,x=r.o;r.b++,delete c[o.id];var y=o.$mm,w=y.key,b=y.meta;if(f[t]=o,n)r.e=1,a=1,r.f=n,u.msg=n,u[t]=n,m.fire("fail",{model:o,meta:b,msg:n});else{if(!w||w&&!v.has(w)){w&&v.set(w,o),y.done=d();var $=y.after;$&&i($,[o,b]),m.fire("done",{model:o,meta:b})}y.used>0&&(o.fromCache=1),y.used++}if(!s.$oust){if(h==E.ONE){var C=l?p[t]:p;C&&(g[t]=i(C,[a?u:e,o,u],s))}else if(h==E.ORDER){x[t]={m:o,e:a,s:n};for(var M,P,T=x.i||0;M=x[T];T++)P=l?p[T]:p,M.e&&(u.msg=M.s,u[T]=M.s),g[T]=i(P,[M.e?u:e,M.m,u].concat(g),s);x.i=T}r.b==r.h&&(r.e||(u=e),h==E.ALL?(f.unshift(u),g[0]=u,g[1]=i(p,f,s)):g.unshift(u),s.$ntId=setTimeout(function(){s.doNext(g)},30))}},$=function(e){return function(){var t=new M(this),r=arguments,n=r[r.length-1];return n&&n.manage&&(n.manage(t),r=x.call(r,0,-1)),t[e].apply(t,r)}},C=function(e,t){return function(r,n){var a=x.call(arguments,1);return this.send(r,a.length>1?a:n,e,t)}};s(g,{create:function(e,t){return new g(e,t)},mixin:function(e,t){t&&g.ms.push(t),s(g.prototype,e)},ms:[]});var E={ALL:1,ONE:2,ORDER:4},M=function(e){var t=this;t.$host=e,t.$reqs={},t.id=c+l--,t.$queue=[]};return s(M.prototype,{send:function(e,t,r,n){var i=this;if(i.$busy)return i.next(function(){this.send(e,t,r,n)}),i;i.$busy=1;var s=i.$host,c=s.$mCache,f=s.$mCacheKeys,u=i.$reqs;o(e)||(e=[e]);var v=e.length,m=[],h=o(t);h&&(m=Array(t.length));for(var d,l={a:i,b:0,c:i.$reqs,d:Array(v),g:{},h:v,i:c,j:s,k:r,l:h,m:t,n:m,o:[]},g=0;e.length>g;g++)if(d=e[g]){var x=s.getModel(d,n),$=x.cKey,C=x.entity,E=y(b,C,g,l);E.id=i.id,$&&a(f,$)?f[$].q.push(E):x.update?(u[C.id]=C,$&&(f[$]={q:[E],e:C},E=w),C.request(E,{a:f,b:$})):E()}else p("empty model");return i},fetchAll:function(e,t){return this.send(e,t,E.ALL)},saveAll:function(e,t){return this.send(e,t,E.ALL,1)},fetchOrder:C(E.ORDER),saveOrder:C(E.ORDER,1),saveOne:C(E.ONE,1),fetchOne:C(E.ONE),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqs,n=t.$mCacheKeys;for(var o in r){var s=r[o],c=s.$mm.key;if(c&&a(n,c)){for(var f,u=n[c],v=u.q,m=[],h=[],d=0;v.length>d;d++)f=v[d],f.id!=e.id?m.push(f):h.push(f);m.length?(i(h,"abort",u.e),u.q=m):s.abort()}else s.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;if(t.$queue.push(e),!t.$busy){var r=t.$latest;t.doNext(r)}return t},doNext:function(e){var t=this;t.$busy=0;var r=t.$queue;if(r){var n=r.shift();n&&i(n,e,t)}t.$latest=e},destroy:function(){var e=this;e.$oust=1,e.stop()}}),s(s(g.prototype,n),{registerModels:function(e){var t=this,r=t.$mMetas;o(e)||(e=[e]);for(var n,a,i=0;e.length>i;i++)n=e[i],n&&(a=n.name,a?r[a]&&p("already exist:"+a):p("miss name"),n.cache=h(n),r[a]=n)},registerMethods:function(e){s(this,e)},createModel:function(e){var t,r=this,n=r.getModelMeta(e),a=h(e)||n.cache,o=new r.$mClass;o.set(n),o.$mm=t={used:0};var s=e.before||n.before;s&&i(s,[o,n]);var c=e.after||n.after;return t.after=c,a&&(t.key=m(r.$sKeys,n,e)),t.meta=n,e.name&&o.set(e),o.setUrlParams(n.urlParams),o.setPostParams(n.postParams),o.setUrlParams(e.urlParams),o.setPostParams(e.postParams),r.fire("inited",{model:o,meta:n}),o},getModelMeta:function(e){var t=this,r=t.$mMetas,n=e.name||e,a=r[n];return a||p("Unfound:"+n),a},getModel:function(e,t){var r,n,a=this;return t||(r=a.getCachedModel(e)),r||(n=1,r=a.createModel(e)),{entity:r,cKey:r.$mm.key,update:n}},saveAll:$("saveAll"),fetchAll:$("fetchAll"),saveOrder:$("saveOrder"),fetchOrder:$("fetchOrder"),saveOne:$("saveOne"),fetchOne:$("fetchOne"),createMRequest:function(e){var t=new M(this);return e&&e.manage&&e.manage(t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.list(),a=0;n.length>a;a++){var i=n[a],o=i.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(t){var r,n=this,a=n.$mCache,i=e,o=n.getModelMeta(t),s=h(t)||o.cache;if(s&&(r=m(n.$sKeys,o,t)),r){var c=n.$mCacheKeys,f=c[r];f?i=f.e:(i=a.get(r),i&&s>0&&d()-i.$mm.done>s&&(n.clearCacheByKey(r),i=0))}return i}}),g},{requires:["magix/magix","magix/event"]}),n.add("mxext/model",function(e,t){var r=function(r,n){var a=function(){a.superclass.constructor.apply(this,arguments),n&&t.safeExec(n,[],this)};return t.mix(a,this,{prototype:!0}),e.extend(a,this,r)},n=+new Date,a=encodeURIComponent,i=t.has,o=t._o,s=t.toString,c=function(e){this.set(e),this.id="m"+n--};return t.mix(c,{GET:"GET",POST:"POST",extend:r}),t.mix(c.prototype,{sync:t.noop,getPostParams:function(){return this.getParams(c.POST)},getUrlParams:function(){return this.getParams(c.GET)},getParams:function(e){var r=this;e||(e=c.GET);var n,i="$"+e,o=r[i],s=[];for(var f in o){n=o[f],t._a(n)||(n=[n]);for(var u=0;n.length>u;u++)s.push(f+"="+a(n[u]))}return s.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,c.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,c.POST,!0)},setParams:function(e,t,r,n){var a=this,s="$"+r;a[s]||(a[s]={});var c=a[s];if(!o(e)&&e){var f={};f[e]=t,e=f}for(var u in e)n&&i(c,u)||(c[u]=e[u])},setPostParams:function(e,t){var r=this;r.setParams(e,t,c.POST)},setUrlParams:function(e,t){this.setParams(e,t,c.GET)},get:function(e,t,r){var n=this,a=arguments.length,i=2==a,o=n.$attrs;if(a){for(var c=(e+"").split(".");o&&c[0];)o=o[c.shift()];c[0]&&(o=r)}return i&&s.call(t)!=s.call(o)&&(o=t),o},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),o(e))for(var n in e)r.$attrs[n]=e[n];else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,a){r.$abt||(o(a)||(a={data:a}),r.set(a),e(n,t))};r.$trans=r.sync(r.$temp=n)},abort:function(){var e=this,t=e.$trans,r=e.$temp;r&&r("abort"),e.$abt=1,t&&t.abort&&t.abort(),e.$trans=0},isAborted:function(){return this.$abt}}),c},{requires:["magix/magix"]}),n.add("mxext/view",function(t,r,n,a){var i=window,o=0,s=r.safeExec,c=r.has,f=[],u="rendercall",v="destroy",m=function(e){i.clearTimeout(e),i.clearInterval(e)},h=function(e){var t=e&&e[v];t&&s(t,f,e)},d=function(e){var t=this,r=t.$res,n=e.type==u,a=e.type!=v;for(var i in r){var o=r[i];(!n||o.mr)&&t.destroyManaged(i,a)}},l=n.extend({navigate:a.navigate,manage:function(e,t,n){var a=this,i=arguments,s=1,c=a.$res;1==i.length?(t=e,e="res_"+o++,s=0):a.destroyManaged(e);var f;f=r._n(t)?m:h;var u={hk:s,res:t,ol:n,mr:t&&t.$reqs,oust:f};return c[e]=u,t},getManaged:function(t,r){var n=this,a=n.$res,i=e;if(c(a,t)){var o=a[t];i=o.res,r&&delete a[t]}return i},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e,t){var r,n=this,a=n.$res,i=a[e];return!i||t&&i.ol||(r=i.res,i.oust(r),i.hk&&t||delete a[e]),r}},function(){var e=this;e.$res={},e.on("interact",function(){e.on(u,d),e.on("prerender",d),e.on(v,d)}),s(l.ms,arguments,e)},{ms:[],mixin:function(e,t){t&&l.ms.push(t),r.mix(l.prototype,e)}});return l},{requires:["magix/magix","magix/view","magix/router"]}),r.createElement("vframe")})(null,this,document,KISSY);