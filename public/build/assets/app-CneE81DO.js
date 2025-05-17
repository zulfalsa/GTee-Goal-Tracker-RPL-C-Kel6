function nn(e,t){return function(){return e.apply(t,arguments)}}const{toString:gr}=Object.prototype,{getPrototypeOf:nt}=Object,{iterator:Ee,toStringTag:rn}=Symbol,Se=(e=>t=>{const n=gr.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),k=e=>(e=e.toLowerCase(),t=>Se(t)===e),Te=e=>t=>typeof t===e,{isArray:X}=Array,te=Te("undefined");function br(e){return e!==null&&!te(e)&&e.constructor!==null&&!te(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const sn=k("ArrayBuffer");function yr(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&sn(e.buffer),t}const wr=Te("string"),R=Te("function"),on=Te("number"),Ae=e=>e!==null&&typeof e=="object",Er=e=>e===!0||e===!1,de=e=>{if(Se(e)!=="object")return!1;const t=nt(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(rn in e)&&!(Ee in e)},Sr=k("Date"),Tr=k("File"),Ar=k("Blob"),Ir=k("FileList"),_r=e=>Ae(e)&&R(e.pipe),vr=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=Se(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},Rr=k("URLSearchParams"),[Cr,Or,Dr,kr]=["ReadableStream","Request","Response","Headers"].map(k),Nr=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function oe(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),X(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(r=0;r<i;r++)a=o[r],t.call(null,e[a],a,e)}}function an(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const V=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,cn=e=>!te(e)&&e!==V;function Ve(){const{caseless:e}=cn(this)&&this||{},t={},n=(r,s)=>{const o=e&&an(t,s)||s;de(t[o])&&de(r)?t[o]=Ve(t[o],r):de(r)?t[o]=Ve({},r):X(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&oe(arguments[r],n);return t}const Pr=(e,t,n,{allOwnKeys:r}={})=>(oe(t,(s,o)=>{n&&R(s)?e[o]=nn(s,n):e[o]=s},{allOwnKeys:r}),e),Br=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),xr=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Mr=(e,t,n,r)=>{let s,o,i;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=n!==!1&&nt(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Fr=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Lr=e=>{if(!e)return null;if(X(e))return e;let t=e.length;if(!on(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},$r=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&nt(Uint8Array)),jr=(e,t)=>{const r=(e&&e[Ee]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ur=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Hr=k("HTMLFormElement"),qr=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),bt=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Vr=k("RegExp"),ln=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};oe(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},zr=e=>{ln(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Kr=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return X(e)?r(e):r(String(e).split(t)),n},Wr=()=>{},Gr=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Jr(e){return!!(e&&R(e.append)&&e[rn]==="FormData"&&e[Ee])}const Yr=e=>{const t=new Array(10),n=(r,s)=>{if(Ae(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=X(r)?[]:{};return oe(r,(i,a)=>{const u=n(i,s+1);!te(u)&&(o[a]=u)}),t[s]=void 0,o}}return r};return n(e,0)},Xr=k("AsyncFunction"),Zr=e=>e&&(Ae(e)||R(e))&&R(e.then)&&R(e.catch),un=((e,t)=>e?setImmediate:t?((n,r)=>(V.addEventListener("message",({source:s,data:o})=>{s===V&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),V.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",R(V.postMessage)),Qr=typeof queueMicrotask<"u"?queueMicrotask.bind(V):typeof process<"u"&&process.nextTick||un,es=e=>e!=null&&R(e[Ee]),c={isArray:X,isArrayBuffer:sn,isBuffer:br,isFormData:vr,isArrayBufferView:yr,isString:wr,isNumber:on,isBoolean:Er,isObject:Ae,isPlainObject:de,isReadableStream:Cr,isRequest:Or,isResponse:Dr,isHeaders:kr,isUndefined:te,isDate:Sr,isFile:Tr,isBlob:Ar,isRegExp:Vr,isFunction:R,isStream:_r,isURLSearchParams:Rr,isTypedArray:$r,isFileList:Ir,forEach:oe,merge:Ve,extend:Pr,trim:Nr,stripBOM:Br,inherits:xr,toFlatObject:Mr,kindOf:Se,kindOfTest:k,endsWith:Fr,toArray:Lr,forEachEntry:jr,matchAll:Ur,isHTMLForm:Hr,hasOwnProperty:bt,hasOwnProp:bt,reduceDescriptors:ln,freezeMethods:zr,toObjectSet:Kr,toCamelCase:qr,noop:Wr,toFiniteNumber:Gr,findKey:an,global:V,isContextDefined:cn,isSpecCompliantForm:Jr,toJSONObject:Yr,isAsyncFn:Xr,isThenable:Zr,setImmediate:un,asap:Qr,isIterable:es};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}c.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.status}}});const dn=m.prototype,fn={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{fn[e]={value:e}});Object.defineProperties(m,fn);Object.defineProperty(dn,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(dn);return c.toFlatObject(e,i,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const ts=null;function ze(e){return c.isPlainObject(e)||c.isArray(e)}function hn(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function yt(e,t,n){return e?e.concat(t).map(function(s,o){return s=hn(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function ns(e){return c.isArray(e)&&!e.some(ze)}const rs=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function Ie(e,t,n){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=c.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,p){return!c.isUndefined(p[g])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(t);if(!c.isFunction(s))throw new TypeError("visitor must be a function");function l(h){if(h===null)return"";if(c.isDate(h))return h.toISOString();if(!u&&c.isBlob(h))throw new m("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(h)||c.isTypedArray(h)?u&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function d(h,g,p){let E=h;if(h&&!p&&typeof h=="object"){if(c.endsWith(g,"{}"))g=r?g:g.slice(0,-2),h=JSON.stringify(h);else if(c.isArray(h)&&ns(h)||(c.isFileList(h)||c.endsWith(g,"[]"))&&(E=c.toArray(h)))return g=hn(g),E.forEach(function(A,x){!(c.isUndefined(A)||A===null)&&t.append(i===!0?yt([g],x,o):i===null?g:g+"[]",l(A))}),!1}return ze(h)?!0:(t.append(yt(p,g,o),l(h)),!1)}const f=[],b=Object.assign(rs,{defaultVisitor:d,convertValue:l,isVisitable:ze});function y(h,g){if(!c.isUndefined(h)){if(f.indexOf(h)!==-1)throw Error("Circular reference detected in "+g.join("."));f.push(h),c.forEach(h,function(E,T){(!(c.isUndefined(E)||E===null)&&s.call(t,E,c.isString(T)?T.trim():T,g,b))===!0&&y(E,g?g.concat(T):[T])}),f.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return y(e),t}function wt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function rt(e,t){this._pairs=[],e&&Ie(e,this,t)}const pn=rt.prototype;pn.append=function(t,n){this._pairs.push([t,n])};pn.toString=function(t){const n=t?function(r){return t.call(this,r,wt)}:wt;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function ss(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function mn(e,t,n){if(!t)return e;const r=n&&n.encode||ss;c.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=c.isURLSearchParams(t)?t.toString():new rt(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Et{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(r){r!==null&&t(r)})}}const gn={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},os=typeof URLSearchParams<"u"?URLSearchParams:rt,is=typeof FormData<"u"?FormData:null,as=typeof Blob<"u"?Blob:null,cs={isBrowser:!0,classes:{URLSearchParams:os,FormData:is,Blob:as},protocols:["http","https","file","blob","url","data"]},st=typeof window<"u"&&typeof document<"u",Ke=typeof navigator=="object"&&navigator||void 0,ls=st&&(!Ke||["ReactNative","NativeScript","NS"].indexOf(Ke.product)<0),us=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ds=st&&window.location.href||"http://localhost",fs=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:st,hasStandardBrowserEnv:ls,hasStandardBrowserWebWorkerEnv:us,navigator:Ke,origin:ds},Symbol.toStringTag,{value:"Module"})),I={...fs,...cs};function hs(e,t){return Ie(e,new I.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return I.isNode&&c.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function ps(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ms(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function bn(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const a=Number.isFinite(+i),u=o>=n.length;return i=!i&&c.isArray(s)?s.length:i,u?(c.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!a):((!s[i]||!c.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&c.isArray(s[i])&&(s[i]=ms(s[i])),!a)}if(c.isFormData(e)&&c.isFunction(e.entries)){const n={};return c.forEachEntry(e,(r,s)=>{t(ps(r),s,n,0)}),n}return null}function gs(e,t,n){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ie={transitional:gn,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=c.isObject(t);if(o&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return s?JSON.stringify(bn(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t)||c.isReadableStream(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return hs(t,this.formSerializer).toString();if((a=c.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Ie(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),gs(t)):t}],transformResponse:[function(t){const n=this.transitional||ie.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(c.isResponse(t)||c.isReadableStream(t))return t;if(t&&c.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?m.from(a,m.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:I.classes.FormData,Blob:I.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};c.forEach(["delete","get","head","post","put","patch"],e=>{ie.headers[e]={}});const bs=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ys=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&bs[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},St=Symbol("internals");function Q(e){return e&&String(e).trim().toLowerCase()}function fe(e){return e===!1||e==null?e:c.isArray(e)?e.map(fe):String(e)}function ws(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Es=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function De(e,t,n,r,s){if(c.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!c.isString(t)){if(c.isString(r))return t.indexOf(r)!==-1;if(c.isRegExp(r))return r.test(t)}}function Ss(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ts(e,t){const n=c.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}let C=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(a,u,l){const d=Q(u);if(!d)throw new Error("header name must be a non-empty string");const f=c.findKey(s,d);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||u]=fe(a))}const i=(a,u)=>c.forEach(a,(l,d)=>o(l,d,u));if(c.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(c.isString(t)&&(t=t.trim())&&!Es(t))i(ys(t),n);else if(c.isObject(t)&&c.isIterable(t)){let a={},u,l;for(const d of t){if(!c.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[l=d[0]]=(u=a[l])?c.isArray(u)?[...u,d[1]]:[u,d[1]]:d[1]}i(a,n)}else t!=null&&o(n,t,r);return this}get(t,n){if(t=Q(t),t){const r=c.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return ws(s);if(c.isFunction(n))return n.call(this,s,r);if(c.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Q(t),t){const r=c.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||De(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=Q(i),i){const a=c.findKey(r,i);a&&(!n||De(r,r[a],a,n))&&(delete r[a],s=!0)}}return c.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||De(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return c.forEach(this,(s,o)=>{const i=c.findKey(r,o);if(i){n[i]=fe(s),delete n[o];return}const a=t?Ss(o):String(o).trim();a!==o&&delete n[o],n[a]=fe(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return c.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&c.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[St]=this[St]={accessors:{}}).accessors,s=this.prototype;function o(i){const a=Q(i);r[a]||(Ts(s,i),r[a]=!0)}return c.isArray(t)?t.forEach(o):o(t),this}};C.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.reduceDescriptors(C.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});c.freezeMethods(C);function ke(e,t){const n=this||ie,r=t||n,s=C.from(r.headers);let o=r.data;return c.forEach(e,function(a){o=a.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function yn(e){return!!(e&&e.__CANCEL__)}function Z(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}c.inherits(Z,m,{__CANCEL__:!0});function wn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function As(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Is(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(u){const l=Date.now(),d=r[o];i||(i=l),n[s]=u,r[s]=l;let f=o,b=0;for(;f!==s;)b+=n[f++],f=f%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const y=d&&l-d;return y?Math.round(b*1e3/y):void 0}}function _s(e,t){let n=0,r=1e3/t,s,o;const i=(l,d=Date.now())=>{n=d,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const d=Date.now(),f=d-n;f>=r?i(l,d):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-f)))},()=>s&&i(s)]}const pe=(e,t,n=3)=>{let r=0;const s=Is(50,250);return _s(o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,u=i-r,l=s(u),d=i<=a;r=i;const f={loaded:i,total:a,progress:a?i/a:void 0,bytes:u,rate:l||void 0,estimated:l&&a&&d?(a-i)/l:void 0,event:o,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},n)},Tt=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},At=e=>(...t)=>c.asap(()=>e(...t)),vs=I.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,I.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(I.origin),I.navigator&&/(msie|trident)/i.test(I.navigator.userAgent)):()=>!0,Rs=I.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];c.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),c.isString(r)&&i.push("path="+r),c.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Cs(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Os(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function En(e,t,n){let r=!Cs(t);return e&&(r||n==!1)?Os(e,t):t}const It=e=>e instanceof C?{...e}:e;function W(e,t){t=t||{};const n={};function r(l,d,f,b){return c.isPlainObject(l)&&c.isPlainObject(d)?c.merge.call({caseless:b},l,d):c.isPlainObject(d)?c.merge({},d):c.isArray(d)?d.slice():d}function s(l,d,f,b){if(c.isUndefined(d)){if(!c.isUndefined(l))return r(void 0,l,f,b)}else return r(l,d,f,b)}function o(l,d){if(!c.isUndefined(d))return r(void 0,d)}function i(l,d){if(c.isUndefined(d)){if(!c.isUndefined(l))return r(void 0,l)}else return r(void 0,d)}function a(l,d,f){if(f in t)return r(l,d);if(f in e)return r(void 0,l)}const u={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(l,d,f)=>s(It(l),It(d),f,!0)};return c.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=u[d]||s,b=f(e[d],t[d],d);c.isUndefined(b)&&f!==a||(n[d]=b)}),n}const Sn=e=>{const t=W({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:a}=t;t.headers=i=C.from(i),t.url=mn(En(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&i.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let u;if(c.isFormData(n)){if(I.hasStandardBrowserEnv||I.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((u=i.getContentType())!==!1){const[l,...d]=u?u.split(";").map(f=>f.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...d].join("; "))}}if(I.hasStandardBrowserEnv&&(r&&c.isFunction(r)&&(r=r(t)),r||r!==!1&&vs(t.url))){const l=s&&o&&Rs.read(o);l&&i.set(s,l)}return t},Ds=typeof XMLHttpRequest<"u",ks=Ds&&function(e){return new Promise(function(n,r){const s=Sn(e);let o=s.data;const i=C.from(s.headers).normalize();let{responseType:a,onUploadProgress:u,onDownloadProgress:l}=s,d,f,b,y,h;function g(){y&&y(),h&&h(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function E(){if(!p)return;const A=C.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),v={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:A,config:e,request:p};wn(function(H){n(H),g()},function(H){r(H),g()},v),p=null}"onloadend"in p?p.onloadend=E:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(E)},p.onabort=function(){p&&(r(new m("Request aborted",m.ECONNABORTED,e,p)),p=null)},p.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,p)),p=null},p.ontimeout=function(){let x=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const v=s.transitional||gn;s.timeoutErrorMessage&&(x=s.timeoutErrorMessage),r(new m(x,v.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,p)),p=null},o===void 0&&i.setContentType(null),"setRequestHeader"in p&&c.forEach(i.toJSON(),function(x,v){p.setRequestHeader(v,x)}),c.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),a&&a!=="json"&&(p.responseType=s.responseType),l&&([b,h]=pe(l,!0),p.addEventListener("progress",b)),u&&p.upload&&([f,y]=pe(u),p.upload.addEventListener("progress",f),p.upload.addEventListener("loadend",y)),(s.cancelToken||s.signal)&&(d=A=>{p&&(r(!A||A.type?new Z(null,e,p):A),p.abort(),p=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const T=As(s.url);if(T&&I.protocols.indexOf(T)===-1){r(new m("Unsupported protocol "+T+":",m.ERR_BAD_REQUEST,e));return}p.send(o||null)})},Ns=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,a();const d=l instanceof Error?l:this.reason;r.abort(d instanceof m?d:new Z(d instanceof Error?d.message:d))}};let i=t&&setTimeout(()=>{i=null,o(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:u}=r;return u.unsubscribe=()=>c.asap(a),u}},Ps=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Bs=async function*(e,t){for await(const n of xs(e))yield*Ps(n,t)},xs=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},_t=(e,t,n,r)=>{const s=Bs(e,t);let o=0,i,a=u=>{i||(i=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:l,value:d}=await s.next();if(l){a(),u.close();return}let f=d.byteLength;if(n){let b=o+=f;n(b)}u.enqueue(new Uint8Array(d))}catch(l){throw a(l),l}},cancel(u){return a(u),s.return()}},{highWaterMark:2})},_e=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Tn=_e&&typeof ReadableStream=="function",Ms=_e&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),An=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Fs=Tn&&An(()=>{let e=!1;const t=new Request(I.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),vt=64*1024,We=Tn&&An(()=>c.isReadableStream(new Response("").body)),me={stream:We&&(e=>e.body)};_e&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!me[t]&&(me[t]=c.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const Ls=async e=>{if(e==null)return 0;if(c.isBlob(e))return e.size;if(c.isSpecCompliantForm(e))return(await new Request(I.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(c.isArrayBufferView(e)||c.isArrayBuffer(e))return e.byteLength;if(c.isURLSearchParams(e)&&(e=e+""),c.isString(e))return(await Ms(e)).byteLength},$s=async(e,t)=>{const n=c.toFiniteNumber(e.getContentLength());return n??Ls(t)},js=_e&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:a,onUploadProgress:u,responseType:l,headers:d,withCredentials:f="same-origin",fetchOptions:b}=Sn(e);l=l?(l+"").toLowerCase():"text";let y=Ns([s,o&&o.toAbortSignal()],i),h;const g=y&&y.unsubscribe&&(()=>{y.unsubscribe()});let p;try{if(u&&Fs&&n!=="get"&&n!=="head"&&(p=await $s(d,r))!==0){let v=new Request(t,{method:"POST",body:r,duplex:"half"}),j;if(c.isFormData(r)&&(j=v.headers.get("content-type"))&&d.setContentType(j),v.body){const[H,ue]=Tt(p,pe(At(u)));r=_t(v.body,vt,H,ue)}}c.isString(f)||(f=f?"include":"omit");const E="credentials"in Request.prototype;h=new Request(t,{...b,signal:y,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:E?f:void 0});let T=await fetch(h);const A=We&&(l==="stream"||l==="response");if(We&&(a||A&&g)){const v={};["status","statusText","headers"].forEach(gt=>{v[gt]=T[gt]});const j=c.toFiniteNumber(T.headers.get("content-length")),[H,ue]=a&&Tt(j,pe(At(a),!0))||[];T=new Response(_t(T.body,vt,H,()=>{ue&&ue(),g&&g()}),v)}l=l||"text";let x=await me[c.findKey(me,l)||"text"](T,e);return!A&&g&&g(),await new Promise((v,j)=>{wn(v,j,{data:x,headers:C.from(T.headers),status:T.status,statusText:T.statusText,config:e,request:h})})}catch(E){throw g&&g(),E&&E.name==="TypeError"&&/Load failed|fetch/i.test(E.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,h),{cause:E.cause||E}):m.from(E,E&&E.code,e,h)}}),Ge={http:ts,xhr:ks,fetch:js};c.forEach(Ge,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Rt=e=>`- ${e}`,Us=e=>c.isFunction(e)||e===null||e===!1,In={getAdapter:e=>{e=c.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Us(n)&&(r=Ge[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Rt).join(`
`):" "+Rt(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Ge};function Ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Z(null,e)}function Ct(e){return Ne(e),e.headers=C.from(e.headers),e.data=ke.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),In.getAdapter(e.adapter||ie.adapter)(e).then(function(r){return Ne(e),r.data=ke.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return yn(r)||(Ne(e),r&&r.response&&(r.response.data=ke.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const _n="1.9.0",ve={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ve[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ot={};ve.transitional=function(t,n,r){function s(o,i){return"[Axios v"+_n+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,a)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ot[i]&&(Ot[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,a):!0}};ve.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Hs(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const a=e[o],u=a===void 0||i(a,o,e);if(u!==!0)throw new m("option "+o+" must be "+u,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const he={assertOptions:Hs,validators:ve},N=he.validators;let K=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Et,response:new Et}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=W(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&he.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(c.isFunction(s)?n.paramsSerializer={serialize:s}:he.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),he.assertOptions(n,{baseUrl:N.spelling("baseURL"),withXsrfToken:N.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&c.merge(o.common,o[n.method]);o&&c.forEach(["delete","get","head","post","put","patch","common"],h=>{delete o[h]}),n.headers=C.concat(i,o);const a=[];let u=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(u=u&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const l=[];this.interceptors.response.forEach(function(g){l.push(g.fulfilled,g.rejected)});let d,f=0,b;if(!u){const h=[Ct.bind(this),void 0];for(h.unshift.apply(h,a),h.push.apply(h,l),b=h.length,d=Promise.resolve(n);f<b;)d=d.then(h[f++],h[f++]);return d}b=a.length;let y=n;for(f=0;f<b;){const h=a[f++],g=a[f++];try{y=h(y)}catch(p){g.call(this,p);break}}try{d=Ct.call(this,y)}catch(h){return Promise.reject(h)}for(f=0,b=l.length;f<b;)d=d.then(l[f++],l[f++]);return d}getUri(t){t=W(this.defaults,t);const n=En(t.baseURL,t.url,t.allowAbsoluteUrls);return mn(n,t.params,t.paramsSerializer)}};c.forEach(["delete","get","head","options"],function(t){K.prototype[t]=function(n,r){return this.request(W(r||{},{method:t,url:n,data:(r||{}).data}))}});c.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,a){return this.request(W(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}K.prototype[t]=n(),K.prototype[t+"Form"]=n(!0)});let qs=class vn{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(a=>{r.subscribe(a),o=a}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,a){r.reason||(r.reason=new Z(o,i,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new vn(function(s){t=s}),cancel:t}}};function Vs(e){return function(n){return e.apply(null,n)}}function zs(e){return c.isObject(e)&&e.isAxiosError===!0}const Je={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Je).forEach(([e,t])=>{Je[t]=e});function Rn(e){const t=new K(e),n=nn(K.prototype.request,t);return c.extend(n,K.prototype,t,{allOwnKeys:!0}),c.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Rn(W(e,s))},n}const S=Rn(ie);S.Axios=K;S.CanceledError=Z;S.CancelToken=qs;S.isCancel=yn;S.VERSION=_n;S.toFormData=Ie;S.AxiosError=m;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=Vs;S.isAxiosError=zs;S.mergeConfig=W;S.AxiosHeaders=C;S.formToJSON=e=>bn(c.isHTMLForm(e)?new FormData(e):e);S.getAdapter=In.getAdapter;S.HttpStatusCode=Je;S.default=S;const{Axios:Nc,AxiosError:Pc,CanceledError:Bc,isCancel:xc,CancelToken:Mc,VERSION:Fc,all:Lc,Cancel:$c,isAxiosError:jc,spread:Uc,toFormData:Hc,AxiosHeaders:qc,HttpStatusCode:Vc,formToJSON:zc,getAdapter:Kc,mergeConfig:Wc}=S;window.axios=S;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const Ks=()=>{};var Dt={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Ws=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],a=e[n++],u=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},On={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,a=i?e[s+1]:0,u=s+2<e.length,l=u?e[s+2]:0,d=o>>2,f=(o&3)<<4|a>>4;let b=(a&15)<<2|l>>6,y=l&63;u||(y=64,i||(b=64)),r.push(n[d],n[f],n[b],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Cn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ws(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||a==null||l==null||f==null)throw new Gs;const b=o<<2|a>>4;if(r.push(b),l!==64){const y=a<<4&240|l>>2;if(r.push(y),f!==64){const h=l<<6&192|f;r.push(h)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Gs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Js=function(e){const t=Cn(e);return On.encodeByteArray(t,!0)},Dn=function(e){return Js(e).replace(/\./g,"")},Ys=function(e){try{return On.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=()=>Xs().__FIREBASE_DEFAULTS__,Qs=()=>{if(typeof process>"u"||typeof Dt>"u")return;const e=Dt.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},eo=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ys(e[1]);return t&&JSON.parse(t)},to=()=>{try{return Ks()||Zs()||Qs()||eo()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},kn=()=>{var e;return(e=to())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function ro(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ot(){try{return typeof indexedDB=="object"}catch{return!1}}function it(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Nn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="FirebaseError";class Y extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=so,Object.setPrototypeOf(this,Y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ae.prototype.create)}}class ae{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?oo(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new Y(s,a,r)}}function oo(e,t){return e.replace(io,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const io=/\{\$([^}]+)}/g;function ge(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(kt(o)&&kt(i)){if(!ge(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function kt(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=1e3,co=2,lo=4*60*60*1e3,uo=.5;function Nt(e,t=ao,n=co){const r=t*Math.pow(n,e),s=Math.round(uo*r*(Math.random()-.5)*2);return Math.min(lo,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){return e&&e._delegate?e._delegate:e}class B{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new no;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(po(t))try{this.getOrInitializeService({instanceIdentifier:q})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=q){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=q){return this.instances.has(t)}getOptions(t=q){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&t(i,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ho(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=q){return this.component?this.component.multipleInstances?t:q:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ho(e){return e===q?void 0:e}function po(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new fo(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var w;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(w||(w={}));const go={debug:w.DEBUG,verbose:w.VERBOSE,info:w.INFO,warn:w.WARN,error:w.ERROR,silent:w.SILENT},bo=w.INFO,yo={[w.DEBUG]:"log",[w.VERBOSE]:"log",[w.INFO]:"info",[w.WARN]:"warn",[w.ERROR]:"error"},wo=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=yo[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pn{constructor(t){this.name=t,this._logLevel=bo,this._logHandler=wo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in w))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?go[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,w.DEBUG,...t),this._logHandler(this,w.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,w.VERBOSE,...t),this._logHandler(this,w.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,w.INFO,...t),this._logHandler(this,w.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,w.WARN,...t),this._logHandler(this,w.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,w.ERROR,...t),this._logHandler(this,w.ERROR,...t)}}const Eo=(e,t)=>t.some(n=>e instanceof n);let Pt,Bt;function So(){return Pt||(Pt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function To(){return Bt||(Bt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bn=new WeakMap,Ye=new WeakMap,xn=new WeakMap,Pe=new WeakMap,at=new WeakMap;function Ao(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(F(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Bn.set(n,e)}).catch(()=>{}),at.set(t,e),t}function Io(e){if(Ye.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});Ye.set(e,t)}let Xe={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ye.get(e);if(t==="objectStoreNames")return e.objectStoreNames||xn.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return F(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _o(e){Xe=e(Xe)}function vo(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Be(this),t,...n);return xn.set(r,t.sort?t.sort():[t]),F(r)}:To().includes(e)?function(...t){return e.apply(Be(this),t),F(Bn.get(this))}:function(...t){return F(e.apply(Be(this),t))}}function Ro(e){return typeof e=="function"?vo(e):(e instanceof IDBTransaction&&Io(e),Eo(e,So())?new Proxy(e,Xe):e)}function F(e){if(e instanceof IDBRequest)return Ao(e);if(Pe.has(e))return Pe.get(e);const t=Ro(e);return t!==e&&(Pe.set(e,t),at.set(t,e)),t}const Be=e=>at.get(e);function Re(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=F(i);return r&&i.addEventListener("upgradeneeded",u=>{r(F(i.result),u.oldVersion,u.newVersion,F(i.transaction),u)}),n&&i.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}function xe(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),F(n).then(()=>{})}const Co=["get","getKey","getAll","getAllKeys","count"],Oo=["put","add","delete","clear"],Me=new Map;function xt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Me.get(t))return Me.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Oo.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Co.includes(n)))return;const o=async function(i,...a){const u=this.transaction(i,s?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&u.done]))[0]};return Me.set(t,o),o}_o(e=>({...e,get:(t,n,r)=>xt(t,n)||e.get(t,n,r),has:(t,n)=>!!xt(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ko(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ko(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ze="@firebase/app",Mt="0.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=new Pn("@firebase/app"),No="@firebase/app-compat",Po="@firebase/analytics-compat",Bo="@firebase/analytics",xo="@firebase/app-check-compat",Mo="@firebase/app-check",Fo="@firebase/auth",Lo="@firebase/auth-compat",$o="@firebase/database",jo="@firebase/data-connect",Uo="@firebase/database-compat",Ho="@firebase/functions",qo="@firebase/functions-compat",Vo="@firebase/installations",zo="@firebase/installations-compat",Ko="@firebase/messaging",Wo="@firebase/messaging-compat",Go="@firebase/performance",Jo="@firebase/performance-compat",Yo="@firebase/remote-config",Xo="@firebase/remote-config-compat",Zo="@firebase/storage",Qo="@firebase/storage-compat",ei="@firebase/firestore",ti="@firebase/vertexai",ni="@firebase/firestore-compat",ri="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="[DEFAULT]",si={[Ze]:"fire-core",[No]:"fire-core-compat",[Bo]:"fire-analytics",[Po]:"fire-analytics-compat",[Mo]:"fire-app-check",[xo]:"fire-app-check-compat",[Fo]:"fire-auth",[Lo]:"fire-auth-compat",[$o]:"fire-rtdb",[jo]:"fire-data-connect",[Uo]:"fire-rtdb-compat",[Ho]:"fire-fn",[qo]:"fire-fn-compat",[Vo]:"fire-iid",[zo]:"fire-iid-compat",[Ko]:"fire-fcm",[Wo]:"fire-fcm-compat",[Go]:"fire-perf",[Jo]:"fire-perf-compat",[Yo]:"fire-rc",[Xo]:"fire-rc-compat",[Zo]:"fire-gcs",[Qo]:"fire-gcs-compat",[ei]:"fire-fst",[ni]:"fire-fst-compat",[ti]:"fire-vertex","fire-js":"fire-js",[ri]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new Map,oi=new Map,et=new Map;function Ft(e,t){try{e.container.addComponent(t)}catch(n){L.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e){const t=e.name;if(et.has(t))return L.debug(`There were multiple attempts to register component ${t}.`),!1;et.set(t,e);for(const n of be.values())Ft(n,e);for(const n of oi.values())Ft(n,e);return!0}function le(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},U=new ae("app","Firebase",ii);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new B("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw U.create("app-deleted",{appName:this._name})}}function Mn(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Qe,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw U.create("bad-app-name",{appName:String(s)});if(n||(n=kn()),!n)throw U.create("no-options");const o=be.get(s);if(o){if(ge(n,o.options)&&ge(r,o.config))return o;throw U.create("duplicate-app",{appName:s})}const i=new mo(s);for(const u of et.values())i.addComponent(u);const a=new ai(n,r,i);return be.set(s,a),a}function Fn(e=Qe){const t=be.get(e);if(!t&&e===Qe&&kn())return Mn();if(!t)throw U.create("no-app",{appName:e});return t}function P(e,t,n){var r;let s=(r=si[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${t}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),L.warn(a.join(" "));return}$(new B(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="firebase-heartbeat-database",li=1,ne="firebase-heartbeat-store";let Fe=null;function Ln(){return Fe||(Fe=Re(ci,li,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ne)}catch(n){console.warn(n)}}}}).catch(e=>{throw U.create("idb-open",{originalErrorMessage:e.message})})),Fe}async function ui(e){try{const n=(await Ln()).transaction(ne),r=await n.objectStore(ne).get($n(e));return await n.done,r}catch(t){if(t instanceof Y)L.warn(t.message);else{const n=U.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});L.warn(n.message)}}}async function Lt(e,t){try{const r=(await Ln()).transaction(ne,"readwrite");await r.objectStore(ne).put(t,$n(e)),await r.done}catch(n){if(n instanceof Y)L.warn(n.message);else{const r=U.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});L.warn(r.message)}}}function $n(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=1024,fi=30;class hi{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mi(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=$t();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>fi){const i=gi(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){L.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$t(),{heartbeatsToSend:r,unsentEntries:s}=pi(this._heartbeatsCache.heartbeats),o=Dn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return L.warn(n),""}}}function $t(){return new Date().toISOString().substring(0,10)}function pi(e,t=di){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),jt(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),jt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mi{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ot()?it().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ui(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function jt(e){return Dn(JSON.stringify({version:2,heartbeats:e})).length}function gi(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(e){$(new B("platform-logger",t=>new Do(t),"PRIVATE")),$(new B("heartbeat",t=>new hi(t),"PRIVATE")),P(Ze,Mt,e),P(Ze,Mt,"esm2017"),P("fire-js","")}bi("");var yi="firebase",wi="11.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */P(yi,wi,"app");const jn="@firebase/installations",ct="0.6.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=1e4,Hn=`w:${ct}`,qn="FIS_v2",Ei="https://firebaseinstallations.googleapis.com/v1",Si=60*60*1e3,Ti="installations",Ai="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},G=new ae(Ti,Ai,Ii);function Vn(e){return e instanceof Y&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn({projectId:e}){return`${Ei}/projects/${e}/installations`}function Kn(e){return{token:e.token,requestStatus:2,expiresIn:vi(e.expiresIn),creationTime:Date.now()}}async function Wn(e,t){const r=(await t.json()).error;return G.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Gn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function _i(e,{refreshToken:t}){const n=Gn(e);return n.append("Authorization",Ri(t)),n}async function Jn(e){const t=await e();return t.status>=500&&t.status<600?e():t}function vi(e){return Number(e.replace("s","000"))}function Ri(e){return`${qn} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=zn(e),s=Gn(e),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={fid:n,authVersion:qn,appId:e.appId,sdkVersion:Hn},a={method:"POST",headers:s,body:JSON.stringify(i)},u=await Jn(()=>fetch(r,a));if(u.ok){const l=await u.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Kn(l.authToken)}}else throw await Wn("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=/^[cdef][\w-]{21}$/,tt="";function ki(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Ni(e);return Di.test(n)?n:tt}catch{return tt}}function Ni(e){return Oi(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new Map;function Zn(e,t){const n=Ce(e);Qn(n,t),Pi(n,t)}function Qn(e,t){const n=Xn.get(e);if(n)for(const r of n)r(t)}function Pi(e,t){const n=Bi();n&&n.postMessage({key:e,fid:t}),xi()}let z=null;function Bi(){return!z&&"BroadcastChannel"in self&&(z=new BroadcastChannel("[Firebase] FID Change"),z.onmessage=e=>{Qn(e.data.key,e.data.fid)}),z}function xi(){Xn.size===0&&z&&(z.close(),z=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="firebase-installations-database",Fi=1,J="firebase-installations-store";let Le=null;function lt(){return Le||(Le=Re(Mi,Fi,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(J)}}})),Le}async function ye(e,t){const n=Ce(e),s=(await lt()).transaction(J,"readwrite"),o=s.objectStore(J),i=await o.get(n);return await o.put(t,n),await s.done,(!i||i.fid!==t.fid)&&Zn(e,t.fid),t}async function er(e){const t=Ce(e),r=(await lt()).transaction(J,"readwrite");await r.objectStore(J).delete(t),await r.done}async function Oe(e,t){const n=Ce(e),s=(await lt()).transaction(J,"readwrite"),o=s.objectStore(J),i=await o.get(n),a=t(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&Zn(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e){let t;const n=await Oe(e.appConfig,r=>{const s=Li(r),o=$i(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===tt?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Li(e){const t=e||{fid:ki(),registrationStatus:0};return tr(t)}function $i(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(G.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ji(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ui(e)}:{installationEntry:t}}async function ji(e,t){try{const n=await Ci(e,t);return ye(e.appConfig,n)}catch(n){throw Vn(n)&&n.customData.serverCode===409?await er(e.appConfig):await ye(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ui(e){let t=await Ut(e.appConfig);for(;t.registrationStatus===1;)await Yn(100),t=await Ut(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ut(e);return r||n}return t}function Ut(e){return Oe(e,t=>{if(!t)throw G.create("installation-not-found");return tr(t)})}function tr(e){return Hi(e)?{fid:e.fid,registrationStatus:0}:e}function Hi(e){return e.registrationStatus===1&&e.registrationTime+Un<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi({appConfig:e,heartbeatServiceProvider:t},n){const r=Vi(e,n),s=_i(e,n),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={installation:{sdkVersion:Hn,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},u=await Jn(()=>fetch(r,a));if(u.ok){const l=await u.json();return Kn(l)}else throw await Wn("Generate Auth Token",u)}function Vi(e,{fid:t}){return`${zn(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t=!1){let n;const r=await Oe(e.appConfig,o=>{if(!nr(o))throw G.create("not-registered");const i=o.authToken;if(!t&&Wi(i))return o;if(i.requestStatus===1)return n=zi(e,t),o;{if(!navigator.onLine)throw G.create("app-offline");const a=Ji(o);return n=Ki(e,a),a}});return n?await n:r.authToken}async function zi(e,t){let n=await Ht(e.appConfig);for(;n.authToken.requestStatus===1;)await Yn(100),n=await Ht(e.appConfig);const r=n.authToken;return r.requestStatus===0?dt(e,t):r}function Ht(e){return Oe(e,t=>{if(!nr(t))throw G.create("not-registered");const n=t.authToken;return Yi(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ki(e,t){try{const n=await qi(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ye(e.appConfig,r),n}catch(n){if(Vn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await er(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ye(e.appConfig,r)}throw n}}function nr(e){return e!==void 0&&e.registrationStatus===2}function Wi(e){return e.requestStatus===2&&!Gi(e)}function Gi(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Si}function Ji(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Yi(e){return e.requestStatus===1&&e.requestTime+Un<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(e){const t=e,{installationEntry:n,registrationPromise:r}=await ut(t);return r?r.catch(console.error):dt(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(e,t=!1){const n=e;return await Qi(n),(await dt(n,t)).token}async function Qi(e){const{registrationPromise:t}=await ut(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(e){if(!e||!e.options)throw $e("App Configuration");if(!e.name)throw $e("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw $e(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function $e(e){return G.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="installations",ta="installations-internal",na=e=>{const t=e.getProvider("app").getImmediate(),n=ea(t),r=le(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ra=e=>{const t=e.getProvider("app").getImmediate(),n=le(t,rr).getImmediate();return{getId:()=>Xi(n),getToken:s=>Zi(n,s)}};function sa(){$(new B(rr,na,"PUBLIC")),$(new B(ta,ra,"PRIVATE"))}sa();P(jn,ct);P(jn,ct,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="/firebase-messaging-sw.js",ia="/firebase-cloud-messaging-push-scope",sr="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",aa="https://fcmregistrations.googleapis.com/v1",or="google.c.a.c_id",ca="google.c.a.c_l",la="google.c.a.ts",ua="google.c.a.e",qt=1e4;var Vt;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Vt||(Vt={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var re;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(re||(re={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function da(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="fcm_token_details_db",fa=5,zt="fcm_token_object_Store";async function ha(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(je))return null;let t=null;return(await Re(je,fa,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains(zt))return;const u=i.objectStore(zt),l=await u.index("fcmSenderId").get(e);if(await u.clear(),!!l){if(s===2){const d=l;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(a=d.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:M(d.vapidKey)}}}else if(s===3){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:M(d.auth),p256dh:M(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:M(d.vapidKey)}}}else if(s===4){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:M(d.auth),p256dh:M(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:M(d.vapidKey)}}}}}})).close(),await xe(je),await xe("fcm_vapid_details_db"),await xe("undefined"),pa(t)?t:null}function pa(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="firebase-messaging-database",ga=1,se="firebase-messaging-store";let Ue=null;function ir(){return Ue||(Ue=Re(ma,ga,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(se)}}})),Ue}async function ba(e){const t=ar(e),r=await(await ir()).transaction(se).objectStore(se).get(t);if(r)return r;{const s=await ha(e.appConfig.senderId);if(s)return await ft(e,s),s}}async function ft(e,t){const n=ar(e),s=(await ir()).transaction(se,"readwrite");return await s.objectStore(se).put(t,n),await s.done,t}function ar({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},_=new ae("messaging","Messaging",ya);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(e,t){const n=await pt(e),r=cr(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(ht(e.appConfig),s)).json()}catch(i){throw _.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw _.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw _.create("token-subscribe-no-token");return o.token}async function Ea(e,t){const n=await pt(e),r=cr(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${ht(e.appConfig)}/${t.token}`,s)).json()}catch(i){throw _.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw _.create("token-update-failed",{errorInfo:i})}if(!o.token)throw _.create("token-update-no-token");return o.token}async function Sa(e,t){const r={method:"DELETE",headers:await pt(e)};try{const o=await(await fetch(`${ht(e.appConfig)}/${t}`,r)).json();if(o.error){const i=o.error.message;throw _.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw _.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function ht({projectId:e}){return`${aa}/projects/${e}/registrations`}async function pt({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function cr({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==sr&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=7*24*60*60*1e3;async function Aa(e){const t=await _a(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:M(t.getKey("auth")),p256dh:M(t.getKey("p256dh"))},r=await ba(e.firebaseDependencies);if(r){if(va(r.subscriptionOptions,n))return Date.now()>=r.createTime+Ta?Ia(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Sa(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Kt(e.firebaseDependencies,n)}else return Kt(e.firebaseDependencies,n)}async function Ia(e,t){try{const n=await Ea(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await ft(e.firebaseDependencies,r),n}catch(n){throw n}}async function Kt(e,t){const r={token:await wa(e,t),createTime:Date.now(),subscriptionOptions:t};return await ft(e,r),r.token}async function _a(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:da(t)})}function va(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&s&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Ra(t,e),Ca(t,e),Oa(t,e),t}function Ra(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const o=t.notification.icon;o&&(e.notification.icon=o)}function Ca(e,t){t.data&&(e.data=t.data)}function Oa(e,t){var n,r,s,o,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=t.notification)===null||o===void 0?void 0:o.click_action;a&&(e.fcmOptions.link=a);const u=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;u&&(e.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(e){return typeof e=="object"&&!!e&&or in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(e){if(!e||!e.options)throw He("App Configuration Object");if(!e.name)throw He("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw He(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function He(e){return _.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=ka(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(e){try{e.swRegistration=await navigator.serviceWorker.register(oa,{scope:ia}),e.swRegistration.update().catch(()=>{}),await Ba(e.swRegistration)}catch(t){throw _.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function Ba(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${qt} ms`)),qt),s=e.installing||e.waiting;e.active?(clearTimeout(r),t()):s?s.onstatechange=o=>{var i;((i=o.target)===null||i===void 0?void 0:i.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(e,t){if(!t&&!e.swRegistration&&await Pa(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw _.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ma(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=sr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(e,t){if(!navigator)throw _.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw _.create("permission-blocked");return await Ma(e,t==null?void 0:t.vapidKey),await xa(e,t==null?void 0:t.serviceWorkerRegistration),Aa(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(e,t,n){const r=La(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[or],message_name:n[ca],message_time:n[la],message_device_time:Math.floor(Date.now()/1e3)})}function La(e){switch(e){case re.NOTIFICATION_CLICKED:return"notification_open";case re.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===re.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Wt(n)):e.onMessageHandler.next(Wt(n)));const r=n.data;Da(r)&&r[ua]==="1"&&await Fa(e,n.messageType,r)}const Gt="@firebase/messaging",Jt="0.12.18";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=e=>{const t=new Na(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>$a(t,n)),t},Ua=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>lr(t,r)}};function Ha(){$(new B("messaging",ja,"PUBLIC")),$(new B("messaging-internal",Ua,"PRIVATE")),P(Gt,Jt),P(Gt,Jt,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(){try{await it()}catch{return!1}return typeof window<"u"&&ot()&&Nn()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(e,t){if(!navigator)throw _.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(e=Fn()){return qa().then(t=>{if(!t)throw _.create("unsupported-browser")},t=>{throw _.create("indexed-db-unsupported")}),le(ce(e),"messaging").getImmediate()}async function Ka(e,t){return e=ce(e),lr(e,t)}function Wa(e,t){return e=ce(e),Va(e,t)}Ha();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="analytics",Ga="firebase_id",Ja="origin",Ya=60*1e3,Xa="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",mt="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=new Pn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},D=new ae("analytics","Analytics",Za);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(e){if(!e.startsWith(mt)){const t=D.create("invalid-gtag-resource",{gtagURL:e});return O.warn(t.message),""}return e}function ur(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ec(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function tc(e,t){const n=ec("firebase-js-sdk-policy",{createScriptURL:Qa}),r=document.createElement("script"),s=`${mt}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function nc(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function rc(e,t,n,r,s,o){const i=r[s];try{if(i)await t[i];else{const u=(await ur(n)).find(l=>l.measurementId===s);u&&await t[u.appId]}}catch(a){O.error(a)}e("config",s,o)}async function sc(e,t,n,r,s){try{let o=[];if(s&&s.send_to){let i=s.send_to;Array.isArray(i)||(i=[i]);const a=await ur(n);for(const u of i){const l=a.find(f=>f.measurementId===u),d=l&&t[l.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,s||{})}catch(o){O.error(o)}}function oc(e,t,n,r){async function s(o,...i){try{if(o==="event"){const[a,u]=i;await sc(e,t,n,a,u)}else if(o==="config"){const[a,u]=i;await rc(e,t,n,r,a,u)}else if(o==="consent"){const[a,u]=i;e("consent",a,u)}else if(o==="get"){const[a,u,l]=i;e("get",a,u,l)}else if(o==="set"){const[a]=i;e("set",a)}else e(o,...i)}catch(a){O.error(a)}}return s}function ic(e,t,n,r,s){let o=function(...i){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=oc(o,e,t,n),{gtagCore:o,wrappedGtag:window[s]}}function ac(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(mt)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=30,lc=1e3;class uc{constructor(t={},n=lc){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const dr=new uc;function dc(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function fc(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:dc(r)},o=Xa.replace("{app-id}",n),i=await fetch(o,s);if(i.status!==200&&i.status!==304){let a="";try{const u=await i.json();!((t=u.error)===null||t===void 0)&&t.message&&(a=u.error.message)}catch{}throw D.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function hc(e,t=dr,n){const{appId:r,apiKey:s,measurementId:o}=e.options;if(!r)throw D.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw D.create("no-api-key")}const i=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new gc;return setTimeout(async()=>{a.abort()},Ya),fr({appId:r,apiKey:s,measurementId:o},i,a,t)}async function fr(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=dr){var o;const{appId:i,measurementId:a}=e;try{await pc(r,t)}catch(u){if(a)return O.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:a};throw u}try{const u=await fc(e);return s.deleteThrottleMetadata(i),u}catch(u){const l=u;if(!mc(l)){if(s.deleteThrottleMetadata(i),a)return O.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:a};throw u}const d=Number((o=l==null?void 0:l.customData)===null||o===void 0?void 0:o.httpStatus)===503?Nt(n,s.intervalMillis,cc):Nt(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(i,f),O.debug(`Calling attemptFetch again in ${d} millis`),fr(e,f,r,s)}}function pc(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(o),r(D.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function mc(e){if(!(e instanceof Y)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class gc{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function bc(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const o=await t,i=Object.assign(Object.assign({},r),{send_to:o});e("event",n,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(){if(ot())try{await it()}catch(e){return O.warn(D.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return O.warn(D.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wc(e,t,n,r,s,o,i){var a;const u=hc(e);u.then(y=>{n[y.measurementId]=y.appId,e.options.measurementId&&y.measurementId!==e.options.measurementId&&O.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>O.error(y)),t.push(u);const l=yc().then(y=>{if(y)return r.getId()}),[d,f]=await Promise.all([u,l]);ac(o)||tc(o,d.measurementId),s("js",new Date);const b=(a=i==null?void 0:i.config)!==null&&a!==void 0?a:{};return b[Ja]="firebase",b.update=!0,f!=null&&(b[Ga]=f),s("config",d.measurementId,b),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t){this.app=t}_delete(){return delete ee[this.app.options.appId],Promise.resolve()}}let ee={},Yt=[];const Xt={};let qe="dataLayer",Sc="gtag",Zt,hr,Qt=!1;function Tc(){const e=[];if(ro()&&e.push("This is a browser extension environment."),Nn()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=D.create("invalid-analytics-context",{errorInfo:t});O.warn(n.message)}}function Ac(e,t,n){Tc();const r=e.options.appId;if(!r)throw D.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)O.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw D.create("no-api-key");if(ee[r]!=null)throw D.create("already-exists",{id:r});if(!Qt){nc(qe);const{wrappedGtag:o,gtagCore:i}=ic(ee,Yt,Xt,qe,Sc);hr=o,Zt=i,Qt=!0}return ee[r]=wc(e,Yt,Xt,t,Zt,qe,n),new Ec(e)}function Ic(e=Fn()){e=ce(e);const t=le(e,we);return t.isInitialized()?t.getImmediate():_c(e)}function _c(e,t={}){const n=le(e,we);if(n.isInitialized()){const s=n.getImmediate();if(ge(t,n.getOptions()))return s;throw D.create("already-initialized")}return n.initialize({options:t})}function vc(e,t,n,r){e=ce(e),bc(hr,ee[e.app.options.appId],t,n,r).catch(s=>O.error(s))}const en="@firebase/analytics",tn="0.10.13";function Rc(){$(new B(we,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Ac(r,s,n)},"PUBLIC")),$(new B("analytics-internal",e,"PRIVATE")),P(en,tn),P(en,tn,"esm2017");function e(t){try{const n=t.getProvider(we).getImmediate();return{logEvent:(r,s,o)=>vc(n,r,s,o)}}catch(n){throw D.create("interop-component-reg-failed",{reason:n})}}}Rc();const Cc={apiKey:"AIzaSyAZRK8uvr54UCxxiaPv29PdJOyhihh22xE",authDomain:"gtee-goal-tracker-rpl-kel6.firebaseapp.com",databaseURL:"https://gtee-goal-tracker-rpl-kel6-default-rtdb.firebaseio.com",projectId:"gtee-goal-tracker-rpl-kel6",storageBucket:"gtee-goal-tracker-rpl-kel6.firebasestorage.app",messagingSenderId:"203500947940",appId:"1:203500947940:web:c034c26698142a42c61ff1",measurementId:"G-PSVZ1KCVC7"},pr=Mn(Cc);Ic(pr);const mr=za(pr);Wa(mr,e=>{console.log("Message received. ",e),alert("Ada notifikasi baru")});Ka(mr,{vapidKey:"BHwFBqDgczejV0EXfwK5bSKJaPZyZA08T9ZlibEiZ7-9YMYBYA0ZPcD_f7walxmxq09scY8GyZK7Td94uPXzhhA"}).then(e=>{e?console.log(e):(Oc(),console.log("No registration token available. Request permission to generate one."))}).catch(e=>{console.log("An error occurred while retrieving token. ",e)});function Oc(){Notification.requestPermission().then(e=>{e==="granted"?console.log("Notification permission granted."):alert("Silahkan izinkan notifikasi untuk mendapatkan notifikasi terbaru dari kami")})}
