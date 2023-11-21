/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new WeakMap;class n{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e.set(s,t))}return t}toString(){return this.cssText}}const r=(t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new n(e,t,s)},o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:h,defineProperty:a,getOwnPropertyDescriptor:l,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,f=p.trustedTypes,m=f?f.emptyScript:"",v=p.reactiveElementPolyfillSupport,y=(t,i)=>t,g={toAttribute(t,i){switch(i){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},b=(t,i)=>!h(t,i),w={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=w){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const s=Symbol(),e=this.getPropertyDescriptor(t,s,i);void 0!==e&&a(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){const{get:e,set:n}=l(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get(){return e?.call(this)},set(i){const r=e?.call(this);n.call(this,i),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,i=[...c(t),...d(t)];for(const s of i)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,s]of i)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(o(t))}else void 0!==t&&i.push(o(t));return i}static _$Eu(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{if(i)s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),n=t.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,s.appendChild(e)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i){const s=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,s);if(void 0!==e&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:g).toAttribute(i,s.type);this._$Em=t,null==n?this.removeAttribute(e):this.setAttribute(e,n),this._$Em=null}}_$AK(t,i){const s=this.constructor,e=s._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=s.getPropertyOptions(e),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=e,this[e]=n.fromAttribute(i,t.type),this._$Em=null}}requestUpdate(t,i,s,e=!1,n){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??b)(e?n:this[t],i))return;this.C(t,i,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,i,s){this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,s]of t)!0!==s.wrapped||this._$AL.has(i)||void 0===this[i]||this.C(i,this[i],s)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(i)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,v?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=globalThis,_=S.trustedTypes,x=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,M="?"+C,k=`<${M}>`,E=document,O=()=>E.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,T="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,N=/>/g,D=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,R=/"/g,L=/^(?:script|style|textarea|title)$/i,Y=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),B=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),H=new WeakMap,J=E.createTreeWalker(E,129);function Z(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(i):i}const q=(t,i)=>{const s=t.length-1,e=[];let n,r=2===i?"<svg>":"",o=U;for(let i=0;i<s;i++){const s=t[i];let h,a,l=-1,c=0;for(;c<s.length&&(o.lastIndex=c,a=o.exec(s),null!==a);)c=o.lastIndex,o===U?"!--"===a[1]?o=j:void 0!==a[1]?o=N:void 0!==a[2]?(L.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=D):void 0!==a[3]&&(o=D):o===D?">"===a[0]?(o=n??U,l=-1):void 0===a[1]?l=-2:(l=o.lastIndex-a[2].length,h=a[1],o=void 0===a[3]?D:'"'===a[3]?R:I):o===R||o===I?o=D:o===j||o===N?o=U:(o=D,n=void 0);const d=o===D&&t[i+1].startsWith("/>")?" ":"";r+=o===U?s+k:l>=0?(e.push(h),s.slice(0,l)+A+s.slice(l)+C+d):s+C+(-2===l?i:d)}return[Z(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class K{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,r=0;const o=t.length-1,h=this.parts,[a,l]=q(t,i);if(this.el=K.createElement(a,s),J.currentNode=this.el.content,2===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=J.nextNode())&&h.length<o;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(A)){const i=l[r++],s=e.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(i);h.push({type:1,index:n,name:o[2],strings:s,ctor:"."===o[1]?X:"?"===o[1]?tt:"@"===o[1]?it:Q}),e.removeAttribute(t)}else t.startsWith(C)&&(h.push({type:6,index:n}),e.removeAttribute(t));if(L.test(e.tagName)){const t=e.textContent.split(C),i=t.length-1;if(i>0){e.textContent=_?_.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],O()),J.nextNode(),h.push({type:2,index:++n});e.append(t[i],O())}}}else if(8===e.nodeType)if(e.data===M)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(C,t+1));)h.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,i){const s=E.createElement("template");return s.innerHTML=t,s}}function V(t,i,s=t,e){if(i===B)return i;let n=void 0!==e?s._$Co?.[e]:s._$Cl;const r=P(i)?void 0:i._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=n:s._$Cl=n),void 0!==n&&(i=V(t,n._$AS(t,i.values),n,e)),i}class F{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??E).importNode(i,!0);J.currentNode=e;let n=J.nextNode(),r=0,o=0,h=s[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new G(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new st(n,this,t)),this._$AV.push(i),h=s[++o]}r!==h?.index&&(n=J.nextNode(),r++)}return J.currentNode=E,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=V(this,t,i),P(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(Z(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new F(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=H.get(t.strings);return void 0===i&&H.set(t.strings,i=new K(t)),i}T(t){z(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const n of t)e===i.length?i.push(s=new G(this.k(O()),this.k(O()),this,this.options)):s=i[e],s._$AI(n),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,i=this,s,e){const n=this.strings;let r=!1;if(void 0===n)t=V(this,t,i,0),r=!P(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{const e=t;let o,h;for(t=n[0],o=0;o<n.length-1;o++)h=V(this,e[s+o],i,o),h===B&&(h=this._$AH[o]),r||=!P(h)||h!==this._$AH[o],h===W?t=W:t!==W&&(t+=(h??"")+n[o+1]),this._$AH[o]=h}r&&!e&&this.O(t)}O(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===W?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends Q{constructor(t,i,s,e,n){super(t,i,s,e,n),this.type=5}_$AI(t,i=this){if((t=V(this,t,i,0)??W)===B)return;const s=this._$AH,e=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==W&&(s===W||e);e&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const et=S.litHtmlPolyfillSupport;et?.(K,G),(S.litHtmlVersions??=[]).push("3.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class nt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{const e=s?.renderBefore??i;let n=e._$litPart$;if(void 0===n){const t=s?.renderBefore??null;e._$litPart$=n=new G(i.insertBefore(O(),t),t,void 0,s??{})}return n._$AI(t),n})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>(i,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,i)})):customElements.define(t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ht={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:b},at=(t=ht,i,s)=>{const{kind:e,metadata:n}=s;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(s.name,t),"accessor"===e){const{name:e}=s;return{set(s){const n=i.get.call(this);i.set.call(this,s),this.requestUpdate(e,n,t)},init(i){return void 0!==i&&this.C(e,void 0,t),i}}}if("setter"===e){const{name:e}=s;return function(s){const n=this[e];i.call(this,s),this.requestUpdate(e,n,t)}}throw Error("Unsupported decorator location: "+e)};function lt(t){return(i,s)=>"object"==typeof s?at(t,i,s):((t,i,s)=>{const e=i.hasOwnProperty(s);return i.constructor.createProperty(s,e?{...t,wrapped:!0}:t),e?Object.getOwnPropertyDescriptor(i,s):void 0})(t,i,s)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ct(t){return lt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=(t,i,s)=>(s.configurable=!0,s.enumerable=!0,s)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function ut(t,i){return(s,e,n)=>{const r=i=>i.renderRoot?.querySelector(t)??null;if(i){const{get:t,set:i}="object"==typeof e?s:n??(()=>{const t=Symbol();return{get(){return this[t]},set(i){this[t]=i}}})();return dt(0,0,{get(){let s=t.call(this);return void 0===s&&(s=r(this),(null!==s||this.hasUpdated)&&i.call(this,s)),s}})}return dt(0,0,{get(){return r(this)}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pt;var ft=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let mt=class extends nt{constructor(){super(...arguments),this._min=0,this._max=0,this._format="day",this._placeholder="DD",this._invalid=!1,this.errorMessage="",this.value=1,this.containerClasses="container",this.errorClasses="error"}get format(){return this._format}set format(t){this._format=t,"day"===t?(this._min=1,this._max=31,this._placeholder="DD"):"month"===t?(this._min=1,this._max=12,this._placeholder="MM"):"year"===t&&(this._min=1900,this._max=(new Date).getFullYear(),this._placeholder="YYYY")}get invalid(){return this._invalid}set invalid(t){this._invalid=t,this.containerClasses="container",this.errorClasses="error",this.errorMessage="",this._invalid&&(this.containerClasses="container invalid",this.errorClasses="error active","day"===this.format?this.errorMessage="Must be a valid day":"month"===this.format?this.errorMessage="Must be a valid month":"year"===this.format&&(this.errorMessage="Must be in the past"))}_handleInput(t){const i=t.target,s=parseInt(i.value,10);this.value=s,this.invalid="number"!=typeof s||isNaN(s)||s<this._min||s>this._max}render(){const t="container"+(this.invalid?" invalid":"");return Y`
            <div class=${t}>
                <label class="label" for=${this.format}>${this.format}</label>
                <input
                    id=${this.format}
                    class="input"
                    type="number"
                    min=${this._min}
                    max=${this._max}
                    placeholder=${this._placeholder}
                    @input=${this._handleInput}
                />
                <span class=${this.errorClasses}>${this.errorMessage}</span>
            </div>
        `}};mt.styles=r`
        :host {
            --white: hsl(0, 0%, 100%);
            --off-white: hsl(0, 0%, 94%);
            --light-grey: hsl(0, 0%, 86%);
            --smokey-grey: hsl(0, 1%, 44%);
            --off-black: hsl(0, 0%, 8%);
            --light-red: hsl(0, 100%, 67%);
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 32px;
            color: var(--smokey-grey);
        }
        
        .container {
            margin: 0 0.5rem;
            padding-bottom: 3rem;
            display: flex;
            flex-direction: column;
            position: relative;
        }
        
        .label {
            text-transform: uppercase;
            font-size: 0.75rem;
            padding-bottom: 0.5rem;
            letter-spacing: 0.2rem;
        }

        .invalid .label {
            color: var(--light-red);
        }

        .input {
            min-width: 3rem;
            padding: 1rem;
            border-radius: 10px;
            border: 1px solid var(--light-grey);
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--off-black);
        }

        .input:invalid {
            border-color: var(--light-red);
        }

        input:focus:invalid {
            outline: none;
        }

        .error {
            width: 100%;
            padding: 0;
            font-size: 0.75rem;
            color: var(--light-red);
            box-sizing: border-box;
            font-style: italic;
            font-weight: 400;
            position: absolute;
            top: 66%;
        }

        .error.active {
            padding: 0.3em;
        }

        @media only screen and (min-width: 720px) {
            .container {
                margin: 1rem;
            }
            .input {
                min-width: 6rem;
                font-size: 1.5rem;
            }
        }
    `,ft([ut("input")],mt.prototype,"_input",void 0),ft([ut(".error")],mt.prototype,"_error",void 0),ft([lt()],mt.prototype,"format",null),ft([lt()],mt.prototype,"errorMessage",void 0),ft([lt({type:Number})],mt.prototype,"value",void 0),ft([lt({type:Boolean})],mt.prototype,"invalid",null),ft([lt()],mt.prototype,"containerClasses",void 0),ft([lt()],mt.prototype,"errorClasses",void 0),mt=ft([ot("day-month-year-input")],mt);var vt=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(n=t[h])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let yt=class extends nt{constructor(){super(...arguments),this._defaultValue="--",this._day=0,this._month=0,this._year=0,this._valid=!1,this._yearsAmount=0,this._monthsAmount=0,this._daysAmount=0}_handleInput(t){const i=t.target,s=parseInt(i.value,10),e=i.attributes.getNamedItem("format")?.value||"";"day"===e?this._day=s:"month"===e?this._month=s:"year"===e&&(this._year=s),this.validate(s,e)}validate(t,i){if(this._valid=!1,"year"===i){if(t<1900||t>(new Date).getFullYear()){const t=[...this._inputs].find((t=>"year"===t.format));if(t)return void(t.errorMessage="Must be a valid year")}}if("month"===i){if(t<1||t>12){const t=[...this._inputs].find((t=>"month"===t.format));if(t)return void(t.errorMessage="Must be a valid month")}}if("day"===i){if(t<1||t>31){const t=[...this._inputs].find((t=>"day"===t.format));if(t)return void(t.errorMessage="Must be a valid day")}}if(this._year>0&&this._month>0&&this._day>0){const t=new Date(this._year,this._month,0).getDate();if(this._day>t){const t=[...this._inputs].find((t=>"day"===t.format));if(t)return void(t.errorMessage="Must be a valid day")}const i=new Date(this._year,this._month-1,this._day);if(i){const t=new Date;this._valid=!0;let s=t.getDate()-i.getDate(),e=t.getMonth()-i.getMonth(),n=t.getFullYear()-i.getFullYear();s<0&&(e-=1,s=31+s),e<0&&(n-=1,e+=12),this._yearsAmount=n,this._monthsAmount=e,this._daysAmount=s}}}render(){return Y`
            <div class="container">
                <div class="input-container">
                    <day-month-year-input
                        format="day"
                        @input=${this._handleInput}
                    ></day-month-year-input>
                    <day-month-year-input
                        format="month"
                        @input=${this._handleInput}
                    ></day-month-year-input>
                    <day-month-year-input
                        format="year"
                        @input=${this._handleInput}
                    ></day-month-year-input>
                    <span class="circle"><img src="./icon-arrow.svg" alt="icon arrow" /></span>
                </div>
                <div class="amounts-container">
                    <ul>
                        <li>
                            <span class="purple"
                                >${this._valid?this._yearsAmount:this._defaultValue}</span
                            >
                            years
                        </li>
                        <li>
                            <span class="purple"
                                >${this._valid?this._monthsAmount:this._defaultValue}</span
                            >
                            months
                        </li>
                        <li>
                            <span class="purple"
                                >${this._valid?this._daysAmount:this._defaultValue}</span
                            >
                            days
                        </li>
                    </ul>
                </div>
            </div>
        `}};yt.styles=r`
        :host {
            --white: hsl(0, 0%, 100%);
            --off-white: hsl(0, 0%, 94%);
            --light-grey: hsl(0, 0%, 86%);
            --smokey-grey: hsl(0, 1%, 44%);
            --off-black: hsl(0, 0%, 8%);
            --purple: hsl(259, 100%, 65%);
            color: var(--off-black);
        }

        .container {
            border-radius: 20px 20px 160px;
            background-color: var(--white);
            padding: 1.5rem 1.5rem 4rem;
        }

        .input-container {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 1rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--light-grey);
            position: relative;
        }

        .amounts-container {
            padding-top: 3rem;
        }

        ul {
            padding: 0;
        }

        li {
            list-style-type: none;
            font-family: 'Poppins', sans-serif;
            font-style: italic;
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 110%;
            white-space: nowrap;
        }

        .purple {
            color: var(--purple);
        }

        .circle {
            background-color: var(--purple);
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            position: absolute;
            bottom: -2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .circle img {
            width: 50%;
        }

        @media only screen and (min-width: 720px) {
            .container {
                padding: 3rem;
            }

            .input-container {
                justify-content: start;
                padding-right: 8rem;
                padding-bottom: 1rem;
            }

            li {
                font-size: 5rem;
            }

            .circle {
                width: 5rem;
                height: 5rem;
                right: 0;
                bottom: -2.5rem;
            }
        }
    `,vt([function(t){return(i,s)=>dt(0,0,{get(){return(this.renderRoot??(pt??=document.createDocumentFragment())).querySelectorAll(t)}})}("day-month-year-input")],yt.prototype,"_inputs",void 0),vt([ct()],yt.prototype,"_day",void 0),vt([ct()],yt.prototype,"_month",void 0),vt([ct()],yt.prototype,"_year",void 0),vt([ct()],yt.prototype,"_valid",void 0),vt([ct()],yt.prototype,"_yearsAmount",void 0),vt([ct()],yt.prototype,"_monthsAmount",void 0),vt([ct()],yt.prototype,"_daysAmount",void 0),yt=vt([ot("age-calculator")],yt);export{yt as AgeCalculator};
