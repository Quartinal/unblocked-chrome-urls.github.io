/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const r=t=>new n("string"==typeof t?t:t+"",void 0,i),o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,t,i)},l=(i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}))},h=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return r(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const c=window,d=c.trustedTypes,u=d?d.emptyScript:"",$=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v};class A extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=_){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var f;A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},null==$||$({ReactiveElement:A}),(null!==(a=c.reactiveElementVersions)&&void 0!==a?a:c.reactiveElementVersions=[]).push("1.5.0");const g=window,y=g.trustedTypes,m=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,E=`lit$${(Math.random()+"").slice(9)}$`,b="?"+E,C=`<${b}>`,S=document,w=(t="")=>S.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,T=t=>H(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,U=/>/g,P=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),O=/'/g,R=/"/g,k=/^(?:script|style|textarea|title)$/i,L=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),I=L(1),B=L(2),D=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),z=new WeakMap,Y=S.createTreeWalker(S,129,null,!1),V=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=N;for(let e=0;e<i;e++){const i=t[e];let l,h,a=-1,c=0;for(;c<i.length&&(o.lastIndex=c,h=o.exec(i),null!==h);)c=o.lastIndex,o===N?"!--"===h[1]?o=M:void 0!==h[1]?o=U:void 0!==h[2]?(k.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=P):void 0!==h[3]&&(o=P):o===P?">"===h[0]?(o=null!=n?n:N,a=-1):void 0===h[1]?a=-2:(a=o.lastIndex-h[2].length,l=h[1],o=void 0===h[3]?P:'"'===h[3]?R:O):o===R||o===O?o=P:o===M||o===U?o=N:(o=P,n=void 0);const d=o===P&&t[e+1].startsWith("/>")?" ":"";r+=o===N?i+C:a>=0?(s.push(l),i.slice(0,a)+"$lit$"+i.slice(a)+E+d):i+E+(-2===a?(s.push(void 0),e):d)}const l=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(l):l,s]};class W{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[h,a]=V(t,e);if(this.el=W.createElement(h,i),Y.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=Y.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(E)){const i=a[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(E),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Q:"?"===e[1]?J:"@"===e[1]?G:X})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(k.test(s.tagName)){const t=s.textContent.split(E),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),Y.nextNode(),l.push({type:2,index:++n});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===b)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)l.push({type:7,index:n}),t+=E.length-1}n++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){var n,r,o,l;if(e===D)return e;let h=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const a=x(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(r=null==h?void 0:h._$AO)||void 0===r||r.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,i,s)),void 0!==s?(null!==(o=(l=i)._$Co)&&void 0!==o?o:l._$Co=[])[s]=h:i._$Cl=h),void 0!==h&&(e=Z(t,h._$AS(t,e.values),h,s)),e}class K{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);Y.currentNode=n;let r=Y.nextNode(),o=0,l=0,h=s[0];for(;void 0!==h;){if(o===h.index){let e;2===h.type?e=new q(r,r.nextSibling,this,t):1===h.type?e=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(e=new tt(r,this,t)),this.u.push(e),h=s[++l]}o!==(null==h?void 0:h.index)&&(r=Y.nextNode(),o++)}return n}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var n;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),x(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==D&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):T(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==j&&x(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=W.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new K(n,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new W(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new q(this.O(w()),this.O(w()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,i,s,n){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=Z(this,t,e,0),r=!x(t)||t!==this._$AH&&t!==D,r&&(this._$AH=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=Z(this,s[i+o],e,o),l===D&&(l=this._$AH[o]),r||(r=!x(l)||l!==this._$AH[o]),l===j?t=j:t!==j&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!s&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Q extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const F=y?y.emptyScript:"";class J extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class G extends X{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Z(this,t,e,0))&&void 0!==i?i:j)===D)return;const s=this._$AH,n=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==j&&(s===j||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const et={P:"$lit$",A:E,M:b,C:1,L:V,R:K,D:T,V:Z,I:q,H:X,N:J,U:G,B:Q,F:tt},it=g.litHtmlPolyfillSupport;null==it||it(W,q),(null!==(f=g.litHtmlVersions)&&void 0!==f?f:g.litHtmlVersions=[]).push("2.5.0");const st=(t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new q(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};var nt,rt;const ot=A;class lt extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=st(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return D}}lt.finalized=!0,lt._$litElement$=!0,null===(nt=globalThis.litElementHydrateSupport)||void 0===nt||nt.call(globalThis,{LitElement:lt});const ht=globalThis.litElementPolyfillSupport;null==ht||ht({LitElement:lt});const at={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(rt=globalThis.litElementVersions)&&void 0!==rt?rt:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dt;const ut=window,$t=ut.trustedTypes,pt=$t?$t.createPolicy("lit-html",{createHTML:t=>t}):void 0,vt=`lit$${(Math.random()+"").slice(9)}$`,_t="?"+vt,At=`<${_t}>`,ft=document,gt=(t="")=>ft.createComment(t),yt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,mt=Array.isArray,Et=t=>mt(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ct=/-->/g,St=/>/g,wt=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),xt=/'/g,Ht=/"/g,Tt=/^(?:script|style|textarea|title)$/i,Nt=Symbol.for("lit-noChange"),Mt=Symbol.for("lit-nothing"),Ut=new WeakMap,Pt=ft.createTreeWalker(ft,129,null,!1),Ot=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=bt;for(let e=0;e<i;e++){const i=t[e];let l,h,a=-1,c=0;for(;c<i.length&&(o.lastIndex=c,h=o.exec(i),null!==h);)c=o.lastIndex,o===bt?"!--"===h[1]?o=Ct:void 0!==h[1]?o=St:void 0!==h[2]?(Tt.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=wt):void 0!==h[3]&&(o=wt):o===wt?">"===h[0]?(o=null!=n?n:bt,a=-1):void 0===h[1]?a=-2:(a=o.lastIndex-h[2].length,l=h[1],o=void 0===h[3]?wt:'"'===h[3]?Ht:xt):o===Ht||o===xt?o=wt:o===Ct||o===St?o=bt:(o=wt,n=void 0);const d=o===wt&&t[e+1].startsWith("/>")?" ":"";r+=o===bt?i+At:a>=0?(s.push(l),i.slice(0,a)+"$lit$"+i.slice(a)+vt+d):i+vt+(-2===a?(s.push(void 0),e):d)}const l=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==pt?pt.createHTML(l):l,s]};class Rt{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[h,a]=Ot(t,e);if(this.el=Rt.createElement(h,i),Pt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=Pt.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(vt)){const i=a[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(vt),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Dt:"?"===e[1]?zt:"@"===e[1]?Yt:Bt})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(Tt.test(s.tagName)){const t=s.textContent.split(vt),e=t.length-1;if(e>0){s.textContent=$t?$t.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],gt()),Pt.nextNode(),l.push({type:2,index:++n});s.append(t[e],gt())}}}else if(8===s.nodeType)if(s.data===_t)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(vt,t+1));)l.push({type:7,index:n}),t+=vt.length-1}n++}}static createElement(t,e){const i=ft.createElement("template");return i.innerHTML=t,i}}function kt(t,e,i=t,s){var n,r,o,l;if(e===Nt)return e;let h=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const a=yt(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(r=null==h?void 0:h._$AO)||void 0===r||r.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,i,s)),void 0!==s?(null!==(o=(l=i)._$Co)&&void 0!==o?o:l._$Co=[])[s]=h:i._$Cl=h),void 0!==h&&(e=kt(t,h._$AS(t,e.values),h,s)),e}class Lt{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:ft).importNode(i,!0);Pt.currentNode=n;let r=Pt.nextNode(),o=0,l=0,h=s[0];for(;void 0!==h;){if(o===h.index){let e;2===h.type?e=new It(r,r.nextSibling,this,t):1===h.type?e=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(e=new Vt(r,this,t)),this.u.push(e),h=s[++l]}o!==(null==h?void 0:h.index)&&(r=Pt.nextNode(),o++)}return n}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class It{constructor(t,e,i,s){var n;this.type=2,this._$AH=Mt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=kt(this,t,e),yt(t)?t===Mt||null==t||""===t?(this._$AH!==Mt&&this._$AR(),this._$AH=Mt):t!==this._$AH&&t!==Nt&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):Et(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==Mt&&yt(this._$AH)?this._$AA.nextSibling.data=t:this.T(ft.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Rt.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new Lt(n,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=Ut.get(t.strings);return void 0===e&&Ut.set(t.strings,e=new Rt(t)),e}k(t){mt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new It(this.O(gt()),this.O(gt()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Bt{constructor(t,e,i,s,n){this.type=1,this._$AH=Mt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Mt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=kt(this,t,e,0),r=!yt(t)||t!==this._$AH&&t!==Nt,r&&(this._$AH=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=kt(this,s[i+o],e,o),l===Nt&&(l=this._$AH[o]),r||(r=!yt(l)||l!==this._$AH[o]),l===Mt?t=Mt:t!==Mt&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!s&&this.j(t)}j(t){t===Mt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Dt extends Bt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Mt?void 0:t}}const jt=$t?$t.emptyScript:"";class zt extends Bt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Mt?this.element.setAttribute(this.name,jt):this.element.removeAttribute(this.name)}}class Yt extends Bt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=kt(this,t,e,0))&&void 0!==i?i:Mt)===Nt)return;const s=this._$AH,n=t===Mt&&s!==Mt||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==Mt&&(s===Mt||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Vt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){kt(this,t)}}const Wt={P:"$lit$",A:vt,M:_t,C:1,L:Ot,R:Lt,D:Et,V:kt,I:It,H:Bt,N:zt,U:Yt,B:Dt,F:Vt},Zt=ut.litHtmlPolyfillSupport;null==Zt||Zt(Rt,It),(null!==(dt=ut.litHtmlVersions)&&void 0!==dt?dt:ut.litHtmlVersions=[]).push("2.5.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kt=t=>(...e)=>({_$litDirective$:t,values:e});class qt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=Kt(class extends qt{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const n=t.element.classList;this.nt.forEach((t=>{t in e||(n.remove(t),this.nt.delete(t))}));for(const t in e){const i=!!e[t];i===this.nt.has(t)||(null===(s=this.st)||void 0===s?void 0:s.has(t))||(i?(n.add(t),this.nt.add(t)):(n.remove(t),this.nt.delete(t)))}return Nt}}),{I:Qt}=Wt,Ft=t=>void 0===t.strings,Jt=()=>document.createComment(""),Gt=(t,e,i)=>{var s;const n=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=n.insertBefore(Jt(),r),s=n.insertBefore(Jt(),r);i=new Qt(e,s,t,t.options)}else{const e=i._$AB.nextSibling,o=i._$AM,l=o!==t;if(l){let e;null===(s=i._$AQ)||void 0===s||s.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==o._$AU&&i._$AP(e)}if(e!==r||l){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,r),t=e}}}return i},te=(t,e,i=t)=>(t._$AI(e,i),t),ee={},ie=(t,e=ee)=>t._$AH=e,se=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let i=t._$AA;const s=t._$AB.nextSibling;for(;i!==s;){const t=i.nextSibling;i.remove(),i=t}},ne=Kt(class extends qt{constructor(t){if(super(t),3!==t.type&&1!==t.type&&4!==t.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ft(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Nt||e===Mt)return e;const i=t.element,s=t.name;if(3===t.type){if(e===i[s])return Nt}else if(4===t.type){if(!!e===i.hasAttribute(s))return Nt}else if(1===t.type&&i.getAttribute(s)===e+"")return Nt;return ie(t),e}}),re=(t,e,i)=>{const s=new Map;for(let n=e;n<=i;n++)s.set(t[n],n);return s},oe=Kt(class extends qt{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}ht(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const n=[],r=[];let o=0;for(const e of t)n[o]=s?s(e,o):o,r[o]=i(e,o),o++;return{values:r,keys:n}}render(t,e,i){return this.ht(t,e,i).values}update(t,[e,i,s]){var n;const r=(t=>t._$AH)(t),{values:o,keys:l}=this.ht(e,i,s);if(!Array.isArray(r))return this.ut=l,o;const h=null!==(n=this.ut)&&void 0!==n?n:this.ut=[],a=[];let c,d,u=0,$=r.length-1,p=0,v=o.length-1;for(;u<=$&&p<=v;)if(null===r[u])u++;else if(null===r[$])$--;else if(h[u]===l[p])a[p]=te(r[u],o[p]),u++,p++;else if(h[$]===l[v])a[v]=te(r[$],o[v]),$--,v--;else if(h[u]===l[v])a[v]=te(r[u],o[v]),Gt(t,a[v+1],r[u]),u++,v--;else if(h[$]===l[p])a[p]=te(r[$],o[p]),Gt(t,r[u],r[$]),$--,p++;else if(void 0===c&&(c=re(l,p,v),d=re(h,u,$)),c.has(h[u]))if(c.has(h[$])){const e=d.get(l[p]),i=void 0!==e?r[e]:null;if(null===i){const e=Gt(t,r[u]);te(e,o[p]),a[p]=e}else a[p]=te(i,o[p]),Gt(t,r[u],i),r[e]=null;p++}else se(r[$]),$--;else se(r[u]),u++;for(;p<=v;){const e=Gt(t,a[v+1]);te(e,o[p]),a[p++]=e}for(;u<=$;){const t=r[u++];null!==t&&se(t)}return this.ut=l,ie(t,a),Nt}}),le=Kt(class extends qt{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach((t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.vt.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return Nt}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class he extends qt{constructor(t){if(super(t),this.it=Mt,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Mt||null==t)return this._t=void 0,this.it=t;if(t===Nt)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}he.directiveName="unsafeHTML",he.resultType=1;const ae=Kt(he),ce=(t,e)=>{var i,s;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),ce(t,e);return!0},de=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},ue=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),ve(e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $e(t){void 0!==this._$AN?(de(this),this._$AM=t,ue(this)):this._$AM=t}function pe(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)ce(s[t],!1),de(s[t]);else null!=s&&(ce(s,!1),de(s));else ce(this,t)}const ve=t=>{var e,i,s,n;2==t.type&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=pe),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=$e))};class _e extends qt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),ue(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(ce(this,t),de(this))}setValue(t){if(Ft(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ae{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class fe{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){var t;null!==(t=this.Z)&&void 0!==t||(this.Z=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Z=this.q=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then;class ye extends _e{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CK=new Ae(this),this._$CX=new fe}render(...t){var e;return null!==(e=t.find((t=>!ge(t))))&&void 0!==e?e:Nt}update(t,e){const i=this._$Cyt;let s=i.length;this._$Cyt=e;const n=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const o=e[t];if(!ge(o))return this._$Cwt=t,o;t<s&&o===i[t]||(this._$Cwt=1073741823,s=0,Promise.resolve(o).then((async t=>{for(;r.get();)await r.get();const e=n.deref();if(void 0!==e){const i=e._$Cyt.indexOf(o);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}})))}return Nt}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const me=Kt(ye);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ee{}const be=new WeakMap,Ce=Kt(class extends _e{render(t){return Mt}update(t,[e]){var i;const s=e!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.dt=null===(i=t.options)||void 0===i?void 0:i.host,this.rt(this.ct=t.element)),Mt}rt(t){var e;if("function"==typeof this.Y){const i=null!==(e=this.dt)&&void 0!==e?e:globalThis;let s=be.get(i);void 0===s&&(s=new WeakMap,be.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.dt,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.dt,t)}else this.Y.value=t}get lt(){var t,e,i;return"function"==typeof this.Y?null===(e=be.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.Y):null===(i=this.Y)||void 0===i?void 0:i.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Se=Object.freeze({__proto__:null,UnsafeHTMLDirective:he,UntilDirective:ye,classMap:Xt,createRef:()=>new Ee,ifDefined:t=>null!=t?t:Mt
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,live:ne,ref:Ce,repeat:oe,styleMap:le,unsafeHTML:ae,until:me});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we=Object.freeze({__proto__:null,Directive:class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},PartType:{ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},directive:t=>(...e)=>({_$litDirective$:t,values:e})});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function He(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):xe(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var Te=Object.freeze({__proto__:null,customElement:t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),property:He,state:function(t){return He({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});export{n as CSSResult,Te as Decorators,we as Directive,Se as Directives,lt as LitElement,A as ReactiveElement,ot as UpdatingElement,at as _$LE,et as _$LH,l as adoptStyles,o as css,p as defaultConverter,h as getCompatibleStyle,I as html,ct as isServer,D as noChange,v as notEqual,j as nothing,st as render,e as supportsAdoptingStyleSheets,B as svg,r as unsafeCSS};