window.__ModuleLoader__.load({ id: "@freepeak/dsh-mux", factory: (require) => { var module = { exports: {} }; var exports = module.exports;
"use strict";var cd=Object.create;var pr=Object.defineProperty;var ld=Object.getOwnPropertyDescriptor;var ud=Object.getOwnPropertyNames;var dd=Object.getPrototypeOf,md=Object.prototype.hasOwnProperty;var Nn=t=>{throw TypeError(t)};var pd=(t,e,r)=>e in t?pr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var hd=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},ji=(t,e)=>{for(var r in e)pr(t,r,{get:e[r],enumerable:!0})},oo=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ud(e))!md.call(t,i)&&i!==r&&pr(t,i,{get:()=>e[i],enumerable:!(o=ld(e,i))||o.enumerable});return t},N=(t,e,r)=>(oo(t,e,"default"),r&&oo(r,e,"default")),De=(t,e,r)=>(r=t!=null?cd(dd(t)):{},oo(e||!t||!t.__esModule?pr(r,"default",{value:t,enumerable:!0}):r,t)),fd=t=>oo(pr({},"__esModule",{value:!0}),t);var m=(t,e,r)=>pd(t,typeof e!="symbol"?e+"":e,r),Vn=(t,e,r)=>e.has(t)||Nn("Cannot "+r);var et=(t,e,r)=>(Vn(t,e,"read from private field"),r?r.call(t):e.get(t)),It=(t,e,r)=>e.has(t)?Nn("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Et=(t,e,r,o)=>(Vn(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r);var Ms=hd((KT,or)=>{"use strict";var Ap=typeof Buffer<"u",pc=/"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,hc=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;function fc(t,e,r){r==null&&e!==null&&typeof e=="object"&&(r=e,e=void 0),Ap&&Buffer.isBuffer(t)&&(t=t.toString()),t&&t.charCodeAt(0)===65279&&(t=t.slice(1));let o=JSON.parse(t,e);if(o===null||typeof o!="object")return o;let i=r&&r.protoAction||"error",s=r&&r.constructorAction||"error";if(i==="ignore"&&s==="ignore")return o;if(i!=="ignore"&&s!=="ignore"){if(pc.test(t)===!1&&hc.test(t)===!1)return o}else if(i!=="ignore"&&s==="ignore"){if(pc.test(t)===!1)return o}else if(hc.test(t)===!1)return o;return gc(o,{protoAction:i,constructorAction:s,safe:r&&r.safe})}function gc(t,{protoAction:e="error",constructorAction:r="error",safe:o}={}){let i=[t];for(;i.length;){let s=i;i=[];for(let n of s){if(e!=="ignore"&&Object.prototype.hasOwnProperty.call(n,"__proto__")){if(o===!0)return null;if(e==="error")throw new SyntaxError("Object contains forbidden prototype property");delete n.__proto__}if(r!=="ignore"&&Object.prototype.hasOwnProperty.call(n,"constructor")&&n.constructor!==null&&typeof n.constructor=="object"&&Object.prototype.hasOwnProperty.call(n.constructor,"prototype")){if(o===!0)return null;if(r==="error")throw new SyntaxError("Object contains forbidden prototype property");delete n.constructor}for(let a in n){let c=n[a];c&&typeof c=="object"&&i.push(c)}}}return t}function ks(t,e,r){let{stackTraceLimit:o}=Error;Error.stackTraceLimit=0;try{return fc(t,e,r)}finally{Error.stackTraceLimit=o}}function kp(t,e){let{stackTraceLimit:r}=Error;Error.stackTraceLimit=0;try{return fc(t,e,{safe:!0})}catch{return}finally{Error.stackTraceLimit=r}}or.exports=ks;or.exports.default=ks;or.exports.parse=ks;or.exports.safeParse=kp;or.exports.scan=gc});var ov={};ji(ov,{apply:()=>rv,inject:()=>tv,turnsToMessages:()=>ad});module.exports=fd(ov);var Z=De(require("react"),1);var Ht=null;function Ln(t,e){t.currentIndex=0,t.wipContextDeps=null,t.wipCommitCallbacks=[];let r=Ht;Ht=t;try{if(e(),t.isFirstRender=!1,t.cells.length!==t.currentIndex)throw new Error(`Rendered ${t.currentIndex} hooks but expected ${t.cells.length}. Hooks must be called in the exact same order in every render.`)}finally{Ht=r}}function re(){if(!Ht)throw new Error("No resource fiber available");return Ht}function _e(){return Ht}var J=typeof process<"u"&&!1;var io=t=>({version:0,committedVersion:0,dispatchUpdate:t,changelog:[],committedLog:[],unsettledCount:0,rollbackCallbacks:[]}),hr=t=>{t.committedVersion=t.version;for(let e of t.changelog)e.logged=!1,e.settled||(e.settled=!0,t.unsettledCount--),t.committedLog.push(e);t.changelog.length=0,t.unsettledCount===0&&(t.committedLog.length=0),t.rollbackCallbacks.length=0},Rt=(t,e)=>{let r=t.version>e;if(t.version=e,r){for(let o=0;o<t.rollbackCallbacks.length;o++)t.rollbackCallbacks[o]();if(t.rollbackCallbacks.length=0,e<=t.committedVersion){let o=[];for(;t.committedVersion-o.length>e;){let i=t.committedLog.pop();if(i===void 0){if(J)throw new Error("tap: committed history is shorter than the replay base.");break}so(i.fiber,i.cell),i.cell.workInProgress=i.prevState,o.push({record:i,prevState:i.prevState,eagerState:i.eagerState,hasEagerState:i.hasEagerState})}if(o.length>0){let i=t.committedVersion;Gt(t,()=>{for(let s=o.length-1;s>=0;s--){let n=o[s];n.record.prevState=n.prevState,n.record.eagerState=n.eagerState,n.record.hasEagerState=n.hasEagerState,t.committedLog.push(n.record)}t.committedVersion=i})}t.committedVersion=e;for(let i of t.changelog)i.logged=!1;t.changelog.length=0}else{for(;t.committedVersion+t.changelog.length>e;)t.changelog.pop().logged=!1;for(let o=0;o<t.changelog.length;o++)zi(t.changelog[o]);hr(t)}}},zi=t=>{var e;so(t.fiber,t.cell),t.queued||(t.queued=!0,((e=t.cell).queue??(e.queue=[])).push(t))},pt=(t,e)=>{t.wipCommitCallbacks.push(e)},Gt=(t,e)=>{t.rollbackCallbacks.push(e)},so=(t,e)=>{e.isDirty||(e.isDirty=!0,t.markDirty?.(),Gt(t.root,()=>{if(e.queue!==null){for(let r of e.queue)r.queued=!1;e.queue=null}e.workInProgress=e.current,e.isDirty=!1}))};var qi=Symbol.for("react.memo_cache_sentinel"),Hi=t=>new Array(t).fill(qi),gd=(t,e)=>{let r=t.memoCache,o=r.workInProgress;if(o===null){let n=r.current;o=n===null?[]:n.map(a=>a.slice()),r.workInProgress=o,Gt(t.root,()=>{r.workInProgress=null})}let i=r.index++,s=o[i];return s===void 0?(s=Hi(e),o[i]=s):J&&s.length!==e&&console.error(`Expected a constant size argument for each invocation of c(). The previous cache was allocated with size ${s.length} but size ${e} was requested.`),s},no=t=>gd(re(),t);var ao=De(require("react"),1),vd=ao.default,bd=t=>(0,ao.useMemo)(()=>{let e=Hi(t);return e[qi]=!0,e},[]),$n=vd.__COMPILER_RUNTIME?.c??bd;var wd=()=>_e()!==null,g=t=>wd()?no(t):$n(t);var ue=(t,...e)=>Object.assign(Object.create(null),t,...e);var x={};ji(x,{Children:()=>Od,Fragment:()=>es,Suspense:()=>Bd,cloneElement:()=>rs,createContext:()=>ge,createElement:()=>ts,default:()=>Xt.default,forwardRef:()=>ee,isValidElement:()=>br,lazy:()=>Dd,memo:()=>X,use:()=>Mt,useCallback:()=>vt,useContext:()=>rt,useDebugValue:()=>Xi,useDeferredValue:()=>Nd,useEffect:()=>M,useEffectEvent:()=>vr,useId:()=>Pd,useImperativeHandle:()=>Zi,useInsertionEffect:()=>kt,useLayoutEffect:()=>Be,useMemo:()=>z,useReducer:()=>Yi,useRef:()=>L,useState:()=>U,useSyncExternalStore:()=>Je});var Kt=()=>{throw new Error("Rendered more hooks than during the previous render. Hooks must be called in the exact same order in every render.")},Qt=()=>{throw new Error("Hook order changed between renders")};var xd=()=>({type:"effect",setup:void 0,setupDeps:void 0,cleanup:void 0,deps:null,generation:0});function de(t,e){let r=re(),o=r.currentIndex++,i=r.cells[o],s=i===void 0?xd():i.type==="effect"?i:Qt();if(i===void 0&&(r.isFirstRender||Kt(),r.cells[o]=s,r.effectCells.push(s)),s.deps!==null&&!!e!=!!s.deps)throw new Error("useEffect called with and without dependencies across re-renders");pt(r,()=>{s.setup=t,s.setupDeps=e,s.generation++})}var ht=(t,e)=>{J&&t.length!==e.length&&console.error(`The final argument passed to a hook changed size between renders. The order and size of this array must remain constant.

Previous: [${t.join(", ")}]
Incoming: [${e.join(", ")}]`);for(let r=0;r<t.length&&r<e.length;r++)if(!Object.is(t[r],e[r]))return!1;return!0};var Fn=(t,e)=>{pt(t,()=>{e.current=e.wip,e.currentDeps=e.wipDeps,e.isDirty=!1})},ft=(t,e)=>{let r=re(),o=r.currentIndex++,i=r.cells[o];if(i===void 0){r.isFirstRender||Kt();let a=t();return J&&r.devStrictMode&&t(),i={type:"memo",current:a,currentDeps:e,wip:a,wipDeps:e,isDirty:!1},r.cells[o]=i,a}i.type!=="memo"&&Qt();let s=i;if(ht(s.wipDeps,e))return s.isDirty&&Fn(r,s),s.wip;let n=t();return J&&r.devStrictMode&&t(),s.wip=n,s.wipDeps=e,s.isDirty||(s.isDirty=!0,Gt(r.root,()=>{s.wip=s.current,s.wipDeps=s.currentDeps,s.isDirty=!1})),Fn(r,s),n};function Oe(t){return ft(()=>({current:t}),[])}var Gi=Symbol("tap.Context.defaultValue"),_d=t=>t,We=new Map,At=new Set,Un=()=>new Map(We),co=(t,e)=>{let r=We;We=t;try{return e()}finally{We=r}},Ki=(t,e)=>{t[Gi]=e},jn=t=>typeof t=="object"&&t!==null&&Gi in t,zn=t=>typeof t=="object"&&t!==null&&"$$typeof"in t&&t.$$typeof===Symbol.for("react.context"),Qi=t=>jn(t)||zn(t),qn=t=>{if(!jn(t)){if(zn(t)){Ki(t,t._currentValue??t._currentValue2);return}throw new Error("A tap resource's `use()` only accepts a tap context.")}},tt=(t,e,r)=>{if(typeof t!="object"||t===null)throw new Error("useContextProvider only accepts a React context.");qn(t);let o=t,i=re(),s=Oe(void 0),n=s.current===void 0||!Object.is(s.current.value,e);de(()=>{s.current={value:e}},[e]);let a=We.get(o),c=a!==void 0||We.has(o);We.set(o,{value:e,source:i});try{return yd(o,n,r)}finally{c?We.set(o,a):We.delete(o)}},yd=(t,e,r)=>{let o=At.has(t);e?At.add(t):At.delete(t);try{return r()}finally{o?At.add(t):At.delete(t)}},lo=t=>{qn(t);let e=t,r=Sd(e,t),o=re();return(o.wipContextDeps??(o.wipContextDeps=new Map)).set(e,r.source),r.value},Sd=(t,e)=>We.get(t)??{value:_d(e)[Gi],source:null},Td=(t,e,r,o)=>{if(!o)return r;let i=r;for(let[s,n]of o)n===e||n===t||(i??(i=new Map)).set(s,n);return i},uo=(t,e=t.wipContextDeps)=>{let r=_e();!r||!e||(r.wipContextDeps=Td(r,t,r.wipContextDeps,e))},Wi=()=>At.size>0,fr=t=>{if(!t.contextDeps||!Wi())return!1;for(let e of At.keys())if(t.contextDeps.has(e))return!0;return!1};var Cd=(t,e,r)=>{if(t.isNeverMounted)throw new Error("Resource updated before mount");let o=!1,i=!0;t.root.unsettledCount++,t.root.dispatchUpdate(()=>(o||(o=!0,r&&t.root.changelog.length===0&&!e.cell.isDirty&&!e.hasEagerState&&(e.prevState=e.cell.workInProgress,e.eagerState=r(e.cell.workInProgress,e.action),e.hasEagerState=!0,i=!Object.is(e.cell.current,e.eagerState),!i&&!e.settled&&(e.settled=!0,t.root.unsettledCount--))),i),()=>(o=!0,i=!0,zi(e),e.logged||(e.logged=!0,t.root.changelog.push(e)),!0))},Id=(t,e,r,o,i)=>{let s=o?o(r):r;J&&t.devStrictMode&&o&&o(r);let n={type:"reducer",workInProgress:s,current:s,isDirty:!1,queue:null,renderQueue:null,reducer:e,dispatch:a=>{let c=_e();if(c!==null){if(c!==t)throw new Error("Cannot update a resource while rendering a different resource.");(t.renderPendingCells??(t.renderPendingCells=new Set)).add(n),(n.renderQueue??(n.renderQueue=[])).push(a)}else{let l={fiber:t,cell:n,action:a,hasEagerState:!1,eagerState:void 0,prevState:n.current,settled:!1,queued:!1,logged:!1};Cd(t,l,i?e:void 0)}}};return n};function Ji(t,e,r,o){let i=re(),s=i.currentIndex++,n=i.cells[s],a=(()=>{if(n!==void 0)return n.type==="reducer"?n:Qt();i.isFirstRender||Kt();let l=Id(i,t,e,r,o);return i.cells[s]=l,l})(),c=a.queue;if(c!==null){let l=t===a.reducer;for(let u=0;u<c.length;u++){let h=c[u];!h.hasEagerState||!l||!Object.is(h.prevState,a.workInProgress)?(h.prevState=a.workInProgress,h.eagerState=t(a.workInProgress,h.action),h.hasEagerState=!0,J&&i.devStrictMode&&(h.eagerState=t(a.workInProgress,h.action))):J&&i.devStrictMode&&t(a.workInProgress,h.action),h.queued=!1,a.workInProgress=h.eagerState}a.queue=null}if(a.reducer=t,a.renderQueue!==null){let l=a.workInProgress;for(let u of a.renderQueue)l=t(l,u);a.renderQueue=null,i.renderPendingCells?.delete(a),Object.is(l,a.workInProgress)||(so(i,a),a.workInProgress=l)}return a.isDirty&&pt(i,()=>{a.current=a.workInProgress,a.isDirty=!1}),[a.workInProgress,a.dispatch]}function Wt(t,e,r){return Ji(t,e,r,!1)}var Ed=(t,e)=>typeof e=="function"?e(t):e,Rd=t=>t===void 0?void 0:typeof t=="function"?t():t;function mo(t){return Ji(Ed,t,Rd,!0)}var Jt=(t,e)=>ft(()=>t,e);function Yt(t){let e=re(),r=Oe(t);return r.current!==t&&pt(e,()=>{r.current=t}),Jt(((...o)=>{if(J&&_e())throw new Error("useEffectEvent cannot be called during render");return r.current(...o)}),[])}var po=t=>t!==null&&typeof t=="object"&&typeof t.then=="function",Hn=()=>{},Gn=t=>{let e=t;switch(typeof e.status!="string"?(e.status="pending",t.then(r=>{e.status==="pending"&&(e.status="fulfilled",e.value=r)},r=>{e.status==="pending"&&(e.status="rejected",e.reason=r)})):e.status!=="fulfilled"&&e.status!=="rejected"&&t.then(Hn,Hn),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw t}};var gr=t=>po(t)?Gn(t):lo(t);var Kn=!1,ho=(t,e,r=e)=>{let o=re().isNeverMounted,i=o?r():e();J&&!Kn&&(!o||r===e)&&(Object.is(i,e())||(Kn=!0,console.error("The result of getSnapshot should be cached to avoid an infinite loop")));let[,s]=Wt(c=>c+1,0),n=Oe(0),a=Yt(()=>{try{if(Object.is(i,e()))return n.current=0,!1}catch{}return!0});return de(()=>t(()=>{a()&&s()}),[t]),de(()=>{if(a()){if(++n.current>50)throw n.current=0,new Error("Maximum update depth exceeded. The result of getSnapshot should be cached to avoid an infinite loop.");s()}},[t,i,e]),i};var fo=(t,e)=>{};var Ad=0,go=()=>{let t=Oe(null);return t.current??(t.current=`:tap${Ad++}:`),t.current};var vo=(t,e,r)=>{let o=()=>{if(!t)return;let i=e();if(typeof t=="function"){let s=t(i);return typeof s=="function"?s:()=>t(null)}return t.current=i,()=>{t.current=null}};r==null?de(o):de(o,[...r,t])};var gt=De(require("react"),1),kd=gt.default;function Md(t){let e=(0,gt.useRef)(t);return(0,gt.useInsertionEffect)(()=>{e.current=t}),(0,gt.useCallback)(((...r)=>e.current(...r)),[])}var Qn=kd.useEffectEvent??Md;var Xt=De(require("react"),1);N(x,require("react"));var fe=()=>_e()!==null,Y=Xt.default,U=t=>fe()?mo(t):Y.useState(t),Yi=(t,e,r)=>fe()?Wt(t,e,r):Y.useReducer(t,e,r),L=t=>fe()?Oe(t):Y.useRef(t),z=(t,e)=>fe()?ft(t,e):Y.useMemo(t,e),vt=(t,e)=>fe()?Jt(t,e):Y.useCallback(t,e),M=(t,e)=>fe()?de(t,e):Y.useEffect(t,e),Be=(t,e)=>fe()?de(t,e):Y.useLayoutEffect(t,e),vr=t=>fe()?Yt(t):Qn(t),Je=(t,e,r)=>fe()?ho(t,e,r):Y.useSyncExternalStore(t,e,r),Xi=(t,e)=>fe()?fo(t,e):Y.useDebugValue(t,e),kt=(t,e)=>fe()?de(t,e):Y.useInsertionEffect(t,e),Pd=()=>fe()?go():Y.useId(),Zi=(t,e,r)=>fe()?vo(t,e,r):Y.useImperativeHandle(t,e,r),ee=t=>Y.forwardRef(t),X=(t,e)=>Y.memo(t,e),es=Y.Fragment,ts=(...t)=>Y.createElement(...t),rs=(...t)=>Y.cloneElement(...t),br=t=>Y.isValidElement(t),Dd=t=>Y.lazy(t),Od=Y.Children,Bd=Y.Suspense,Nd=(t,e)=>Y.useDeferredValue(t,e),ge=t=>{let e=Y.createContext(t);return Ki(e,t),e},Mt=t=>fe()&&Qi(t)?gr(t):Y.use(t),rt=t=>fe()&&Qi(t)?gr(t):Y.useContext(t);function V(t){return(...e)=>({hook:t,args:e})}function te(t,e,r){return typeof e=="function"?(...o)=>te(t,e(...o)):r?{...e,key:t,deps:r}:{...e,key:t}}var ot=(t,e)=>{if(t.length!==0){if(t.length===1)throw t[0];for(let r of t)console.error(r);throw new AggregateError(t,e)}};var Vd=50,Ne={schedulers:new Set,isScheduled:!1},Ye=null,os=[],ss=class{constructor(t){m(this,"_isDirty",!1);m(this,"_task");this._task=t}get isDirty(){return this._isDirty}markDirty(){if(Ye&&(Ye.get(this)??0)>=Vd)throw new Error("Maximum update depth exceeded. This can happen when a resource repeatedly calls setState inside useEffect.");this._isDirty=!0,Ne.schedulers.add(this),Jn()}runTask(){Ye?.set(this,(Ye.get(this)??0)+1),this._isDirty=!1,this._task()}settle(){this._isDirty=!1}},Ld=[],Lb=new ss(()=>{let t=Ld.splice(0),e=[];for(let r of t)try{r()}catch(o){e.push(o)}ot(e,"Errors occurred while running scheduled tasks")});var Wn=t=>{if(Ye!==null){os.push(t);return}t()},Jn=()=>{Ne.isScheduled||(Ne.isScheduled=!0,$d())},is=()=>{let t=Ye;Ye=new Map;let e=[];try{for(let r of Ne.schedulers)if(Ne.schedulers.delete(r),!!r.isDirty)try{r.runTask()}catch(o){e.push(o)}}finally{if(Ye=t,Ne.schedulers.clear(),Ne.isScheduled=!1,Ye===null)for(;os.length>0;)try{os.shift()()}catch(r){e.push(r)}}ot(e,"Errors occurred during flushSync")},$d=(()=>{if(typeof MessageChannel<"u"){let t=null,e;return()=>{if(!t){let r=new MessageChannel;r.port1.onmessage=()=>{t?.unref?.(),is()},t=r.port1,e=r.port2}t.ref?.(),e.postMessage(null)}}return()=>setTimeout(is,0)})(),ns=t=>{if(Ye!==null)return J&&console.warn("flushTapSync was called from inside a render or commit. The flush is deferred until the current pass completes."),t();let e=Ne;Ne={schedulers:new Set,isScheduled:!0};try{let r=t();return is(),r}finally{let r=Ne.schedulers;if(Ne=e,r.size>0){for(let o of r)Ne.schedulers.add(o);Jn()}}};function Yn(t){let e=[];for(let r=0;r<t.length;r++)try{t[r]()}catch(o){e.push(o)}ot(e,"Errors during commit")}function Fd(t){let e=t.setup,r=t.setupDeps,o=t.generation,i;try{let s=e();if(s!==void 0&&typeof s!="function")throw new Error(`An effect function must either return a cleanup function or nothing. Received: ${typeof s}`);i=s}finally{t.generation===o?(t.cleanup=i,t.deps=r):i?.()}}var Ud=t=>t.setup===void 0?!1:t.deps===null||t.setupDeps===void 0?!0:!ht(t.deps,t.setupDeps);function as(t){let e=[],r=[];for(let o of t.effectCells)Ud(o)&&r.push(o);for(let o of r)if(o.deps=null,o.cleanup!==void 0)try{o.cleanup()}catch(i){e.push(i)}finally{o.cleanup=void 0}for(let o of r)try{Fd(o)}catch(i){e.push(i)}ot(e,"Errors during commit")}function cs(t){let e=[];for(let r of t.effectCells)if(r.deps=null,r.cleanup)try{r.cleanup?.()}catch(o){e.push(o)}finally{r.cleanup=void 0}ot(e,"Errors during cleanup")}var jd={useState:mo,useReducer:Wt,useRef:Oe,useMemo:ft,useCallback:Jt,useEffect:de,useLayoutEffect:de,useInsertionEffect:de,useEffectEvent:Yt,useContext:lo,use:gr,useSyncExternalStore:ho,useDebugValue:fo,useId:go,useImperativeHandle:vo,useMemoCache:no},Xn=Xt.default,Pt=Xn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE??Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Pt==null?null:"H"in Pt?{get current(){return Pt.H},set current(t){Pt.H=t}}:"ReactCurrentDispatcher"in Pt?{get current(){return Pt.ReactCurrentDispatcher.current},set current(t){Pt.ReactCurrentDispatcher.current=t}}:null;function Zn(t){if(!bo)return t();let e=bo.current;bo.current=jd;try{return t()}finally{bo.current=e}}function wo(t,e,r=void 0,o){return{hook:t,root:e,markDirty:r,devStrictMode:o,cells:[],effectCells:[],contextDeps:null,wipContextDeps:null,wipCommitCallbacks:null,memoCache:{current:null,workInProgress:null,index:0},renderPendingCells:null,currentIndex:0,isFirstRender:!0,isMounted:!1,isNeverMounted:!0}}function ls(t){t.wipCommitCallbacks=null,t.wipContextDeps=null,t.memoCache.workInProgress=null}function Xe(t){t.isMounted&&(t.isMounted=!1,cs(t))}function Ve(t,e){if(t.renderPendingCells!==null){for(let i of t.renderPendingCells)i.renderQueue=null;t.renderPendingCells.clear()}let r=0,o;try{do{if(++r>25)throw new Error("Too many re-renders. tap limits the number of renders to prevent an infinite loop.");t.memoCache.index=0,Ln(t,()=>{o=Zn(()=>t.hook(...e))})}while((t.renderPendingCells?.size??0)>0)}catch(i){throw ls(t),i}return uo(t),o}function je(t){let e=t.wipCommitCallbacks;t.wipCommitCallbacks=null;let r=J&&!t.isMounted&&t.devStrictMode==="root";t.isMounted=!0,t.isNeverMounted=!1,e!==null&&(t.contextDeps=t.wipContextDeps,hr(t.root),t.memoCache.workInProgress!==null&&(t.memoCache.current=t.memoCache.workInProgress,t.memoCache.workInProgress=null),Yn(e)),r&&(as(t),cs(t)),as(t)}var zd=()=>{let t=re();return t.devStrictMode?t.isFirstRender?"child":"root":null},qd=()=>"child",ea=()=>null,Hd=()=>{if(!J)return ea;let t=L(0);return U(()=>t.current++),t.current!==2?ea:qd},xo=()=>_e()?zd:Hd();var Gd=t=>t(),Kd=t=>{let e=[];for(let r of t)try{r()}catch(o){e.push(o)}ot(e,"Errors occurred while notifying Tap root subscribers")},Qd=(t,e,r)=>{let o=new ss(()=>a.handleUpdate()),i=[],s=io((c,l)=>{i.length===0&&!c()||(i.push(l),o.markDirty())}),n=wo(Gd,s,void 0,e),a={scheduler:o,queue:i,fiber:n,subscribers:new Set,pendingHostRender:!1,isMounted:!1,hasRendered:!1,committedRender:t,context:new Map,value:void 0,applyQueue:()=>{Rt(s,s.committedVersion);for(let c of i)J&&n.devStrictMode&&c(),c();return Rt(s,s.committedVersion+s.changelog.length),i.length},publish:(c,l)=>{o.isDirty||s.committedVersion!==l||a.value===c||(a.value=c,Wn(()=>Kd(a.subscribers)))},finishFlush:(c,l,u)=>{hr(s),i.splice(0,u),a.pendingHostRender=!1,i.length===0&&o.settle(),a.isMounted&&je(n),a.publish(c,l)},handleUpdate:()=>{let c=a.applyQueue(),l;try{J&&n.devStrictMode&&co(a.context,()=>Ve(n,[a.committedRender])),l=co(a.context,()=>Ve(n,[a.committedRender]))}catch(u){if(Rt(s,s.committedVersion),po(u)){let h=()=>{a.isMounted&&o.markDirty()};u.then(h,h);return}if(a.isMounted){a.pendingHostRender=!0,r(h=>h+1);return}throw u}if(o.isDirty)throw new Error("Scheduler is dirty, this should never happen");a.finishFlush(l,s.version,c)}};return a},us=t=>{let[,e]=U(0),r=xo(),o=L(null),i=o.current??(o.current=Qd(t,r(),e)),s=Un(),n=i.scheduler.isDirty||i.pendingHostRender?i.applyQueue():0,a=co(s,()=>Ve(i.fiber,[t])),c={render:t,context:s,value:a,drained:n,wip:i.fiber.wipCommitCallbacks,version:i.fiber.root.version,processed:!1};return i.hasRendered||(i.hasRendered=!0,i.committedRender=t,i.context=s,i.value=a),M(()=>(i.isMounted=!0,()=>{i.isMounted=!1,Xe(i.fiber)}),[i]),M(()=>{if(c.processed){i.fiber.isMounted||(je(i.fiber),i.queue.length&&!i.scheduler.isDirty&&i.scheduler.markDirty());return}if(c.processed=!0,i.committedRender=c.render,i.context=c.context,i.fiber.wipCommitCallbacks!==c.wip){i.scheduler.isDirty||i.handleUpdate();return}if(c.drained>0&&i.fiber.root.version===c.version){i.finishFlush(c.value,c.version,c.drained);return}je(i.fiber),i.publish(c.value,c.version)}),z(()=>({getValue:()=>i.value,subscribe:l=>(i.subscribers.add(l),()=>i.subscribers.delete(l))}),[i])};var Wd=()=>{let t=L(0),e=t.current,r=re();return{version:e,markDirty:z(()=>()=>{t.current++,r.markDirty?.()},[r]),root:r.root}},Jd=()=>{let[t]=U(()=>io((i,s)=>{let n=!1;o(a=>(n=!i(),n?a:a+1)),n||r(s)})),[e,r]=Yi((i,s)=>(Rt(t,i),i+(s()?1:0)),0),[,o]=U(0);return Rt(t,e),{root:t,version:e,markDirty:void 0}},Zt=()=>{let t=xo(),{root:e,version:r,markDirty:o}=_e()?Wd():Jd();return{version:r,createFiber:vt((i,s,n)=>wo(i,e,n?()=>{n(),o?.()}:o,t()),[])}};var _o=(t,e,r)=>{let o=L(null),i=o.current??(o.current={wipDeps:null,wip:null,currentDeps:null,current:null});return i.wipDeps=i.currentDeps,i.wip=i.current,M(()=>{i.currentDeps=i.wipDeps,i.current=i.wip}),!r&&i.currentDeps&&ht(i.currentDeps,e)?i.current:(i.wipDeps=e,i.wip=t(),i.wip)};function me(t){let{version:e,createFiber:r}=Zt(),o=z(()=>r(t.hook,t.key),[t.hook,t.key,r]),i=_o(()=>({value:Ve(o,t.args)}),[o,e,t.args],fr(o));return M(()=>()=>Xe(o),[o]),M(()=>{je(o)},[o,i]),i.value}var ta=(t,e)=>{let r=t.get(e);r&&(r.isDirty=!0)},Yd=(t,e)=>!t.isDirty&&!fr(t.fiber)&&e!==void 0&&t.committedDeps!==void 0&&ht(t.committedDeps,e),Xd=t=>{if(!Wi())return!1;for(let{fiber:e}of t.values())if(fr(e))return!0;return!1};function Dt(t){let[e]=U(()=>new Map),{version:r,createFiber:o}=Zt(),i=Xd(e),s=_o(()=>{let n=new Set,a=[],c=0;for(let l=0;l<t.length;l++){let u=t[l],h=u.key;if(h===void 0)throw new Error(`useResources did not provide a key for array at index ${l}`);if(n.has(h))throw new Error(`Duplicate key ${h} in useResources`);n.add(h);let d=e.get(h);if(d)if(d.fiber.hook!==u.hook){let p=o(u.hook,u.key,()=>ta(e,h)),f=Ve(p,u.args);d.next={value:f,deps:u.deps,remount:p}}else if(Yd(d,u.deps))typeof d.next=="object"&&ls(d.fiber),d.fiber.contextDeps&&uo(d.fiber,d.fiber.contextDeps),d.next="skip";else{let p=Ve(d.fiber,u.args);d.next={value:p,deps:u.deps}}else{let p=o(u.hook,u.key,()=>ta(e,h));d={fiber:p,next:{value:Ve(p,u.args),deps:u.deps},isDirty:!1,committedDeps:void 0,committedValue:void 0},c++,e.set(h,d)}a.push(typeof d.next=="object"?d.next.value:d.committedValue)}if(e.size>a.length-c)for(let l of e.keys())n.has(l)||(e.get(l).next="delete");return a},[t,e,o,r],i);return M(()=>()=>{for(let n of e.keys())Xe(e.get(n).fiber)},[e]),M(()=>{for(let[n,a]of e.entries()){let c=a.next;c==="delete"?(Xe(a.fiber),e.delete(n)):c==="skip"?!a.fiber.isNeverMounted&&!a.fiber.isMounted&&je(a.fiber):(c.remount&&(Xe(a.fiber),a.fiber=c.remount),je(a.fiber),a.committedDeps=c.deps,a.committedValue=c.value,a.isDirty=!1,a.next="skip")}},[s,e]),s}var Zd=t=>t(),yo=t=>{let{createFiber:e}=Zt(),r=z(()=>e(Zd,void 0),[e]),o=Ve(r,[t]);M(()=>()=>{Xe(r)},[r]);let i=!1,s=()=>{i&&r.isMounted||(i=!0,je(r))};return M(s),{value:o,effects:s}};var em=()=>{let t=g(4),[e,r]=U(tm),o;t[0]===Symbol.for("react.memo_cache_sentinel")?(o=(c,l)=>(r(u=>{let h=ue(u.renderers);return h[c]=[...h[c]??[],l],{...u,renderers:h}}),()=>{r(u=>{let h=ue(u.renderers),d=h[c]?.filter(p=>p!==l)??[];return d.length>0?h[c]=d:delete h[c],{...u,renderers:h}})}),t[0]=o):o=t[0];let i=o,s;t[1]===Symbol.for("react.memo_cache_sentinel")?(s=c=>(r(l=>({...l,fallbacks:[...l.fallbacks,c]})),()=>{r(l=>({...l,fallbacks:l.fallbacks.filter(u=>u!==c)}))}),t[1]=s):s=t[1];let n=s,a;return t[2]!==e?(a={getState:()=>e,setDataUI:i,setFallbackDataUI:n},t[2]=e,t[3]=a):a=t[3],a},ra=V(em);function tm(){return{renderers:ue(),fallbacks:[]}}var ds=t=>{if(!t.overwrite)return t;let{overwrite:e,...r}=t;return r},oa=t=>{let e=Array.from(t).map(o=>o.getModelContext()).sort((o,i)=>(i.priority??0)-(o.priority??0)),r=ue();return e.reduce((o,i)=>{let s=i.priority??0;if(i.system&&(o.system?o.system+=`

${i.system}`:o.system=i.system),i.tools)for(let[n,a]of Object.entries(i.tools)){let c=o.tools!==void 0&&Object.hasOwn(o.tools,n)?o.tools[n]:void 0;if(c&&c!==a){let l=r[n];if(l===s){if(!a.overwrite)throw new Error(`You tried to define a tool with the name ${n}, but it already exists.`);o.tools[n]=ds(a);continue}let u=l>s?c:a,h=l>s?a:c;o.tools[n]=ds({...h,...u}),r[n]=Math.max(l,s);continue}o.tools||(o.tools=ue()),o.tools[n]=ds(a),Object.hasOwn(r,n)||(r[n]=s)}return i.config&&(o.config={...o.config,...i.config}),i.callSettings&&(o.callSettings={...o.callSettings,...i.callSettings}),i.unstable_composerMetadata&&(o.unstable_composerMetadata={...o.unstable_composerMetadata,...i.unstable_composerMetadata}),o},{})};var ne=(t,e,r)=>{let o=i=>{console.error(`[assistant-ui] ${r} listener threw an error`,i)};for(let i of t)try{let s=i(typeof e=="function"?e():e);s!==null&&(typeof s=="object"||typeof s=="function")&&"then"in s&&typeof s.then=="function"&&Promise.resolve(s).catch(o)}catch(s){o(s)}};var oe=t=>t;var rm=new Set(["$$typeof","nodeType","then","__v_raw","__v_isRef","__v_isReactive","__v_isReadonly","__v_isShallow","__v_skip"]),Le=(t,e)=>{if(t===Symbol.toStringTag)return e;if(typeof t!="symbol"){if(t==="toJSON")return()=>e;if(!rm.has(t))return!1}},it=class{getOwnPropertyDescriptor(t,e){let r=this.get(t,e);if(r!==void 0)return{value:r,writable:!1,enumerable:!0,configurable:!0}}set(){return!1}setPrototypeOf(){return!1}defineProperty(){return!1}deleteProperty(){return!1}preventExtensions(){return!1}};var So=Symbol("assistant-ui.store.clientId"),To=Symbol("assistant-ui.store.instanceTag"),ms=(t,e)=>{let r=new Proxy((()=>{}),{apply:()=>(e(),r),get:(o,i)=>i==="source"?t.source:i==="query"?t.query:i==="name"?t.name:i===So?Io(e()):e()[i],has:(o,i)=>i==="source"||i==="query"||i==="name"||i===So||i in e(),ownKeys:()=>Reflect.ownKeys(e()),getOwnPropertyDescriptor:(o,i)=>{if(!(typeof i=="symbol"||!(i in e())))return{value:e()[i],writable:!1,enumerable:!0,configurable:!0}}});return r},ps=(t,e)=>{let r=()=>{throw new Error(t)};return new Proxy((()=>{}),{apply:r,get:(o,i)=>{if(i==="source"||i==="query")return null;if(i==="name")return e;if(i===So)return r();let s=Le(i,"AssistantClientAccessor");return s!==!1?s:r()},has:(o,i)=>i==="source"||i==="query"||i==="name",ownKeys:()=>[],getOwnPropertyDescriptor:()=>{}})},bt=t=>t?.source!=null,Co=t=>t?.source===null,Io=t=>t[So]??t,ia=t=>t[To]??Io(t);var st=t=>t==="optional"||t==="subscribe"||t==="on"||t==="__proto__"||typeof t=="symbol",wr=t=>{let e=[];for(let r in t)st(r)||e.push(r);return e};var Ot,sa,om=(sa=class extends it{constructor(e){super();It(this,Ot);Et(this,Ot,e)}get(e,r){let o=Le(r,"OptionalAssistantClient");if(o!==!1)return o;if(st(r))return;let i=et(this,Ot)[r];return bt(i)?i:void 0}ownKeys(){return wr(et(this,Ot))}has(e,r){return!st(r)&&r in et(this,Ot)}},Ot=new WeakMap,sa),Eo=t=>new Proxy({},new om(t));var na=()=>()=>{},im="You are using a component or hook that requires an AuiProvider. Wrap your component in an <AuiProvider> component.",xr,_r,yr,Ro,aa,sm=(aa=class extends it{constructor(e,r,o){super();It(this,xr);It(this,_r);It(this,yr);It(this,Ro);Et(this,xr,e),Et(this,_r,r),Et(this,yr,o)}get(e,r){if(r==="subscribe"||r==="on")return na;if(r==="optional")return et(this,Ro)??Et(this,Ro,Eo(et(this,yr).call(this)));let o=Le(r,et(this,xr));return o!==!1?o:ps(et(this,_r).call(this,String(r)),String(r))}ownKeys(){return["subscribe","on","optional"]}getOwnPropertyDescriptor(e,r){if(r!=="optional")return super.getOwnPropertyDescriptor(e,r);let o=this.get(e,r);if(o!==void 0)return{value:o,writable:!1,enumerable:!1,configurable:!0}}has(e,r){return r==="subscribe"||r==="on"||r==="optional"}},xr=new WeakMap,_r=new WeakMap,yr=new WeakMap,Ro=new WeakMap,aa),nm=(t,e)=>{let r=new Proxy({},new sm(t,e,()=>r));return r},wt=nm("DefaultAssistantClient",()=>im),ca=()=>new Proxy({},{get(t,e){let r=Le(e,"AssistantClient");return r!==!1?r:ps(`The current scope does not have a "${String(e)}" property.`,String(e))}}),Ao=ge(wt),am=()=>{},la=new WeakMap,ua=t=>la.get(t)??am,da=(t,e)=>{la.set(t,e)},Sr=()=>rt(Ao),ma=(t,e)=>tt(Ao,t,e);var hs=Symbol("assistant-ui.transform-scopes");function Tr(t,e){let r=t;if(r[hs])throw new Error("transformScopes is already attached to this resource");r[hs]=e}function pa(t){return t[hs]}var Cr=t=>typeof t=="string"?{scope:t.split(".")[0],event:t}:{scope:t.scope,event:t.event};var ha=t=>{console.error("NotificationManager: event listener error",t)},fa=(t,e,r)=>{try{let o=t(e,r);o!==null&&(typeof o=="object"||typeof o=="function")&&typeof o.then=="function"&&Promise.resolve(o).catch(ha)}catch(o){ha(o)}},cm=()=>{let t=new Map,e=new Set,r=new Set;return{on(o,i){let s=i;if(o==="*")return e.add(s),()=>e.delete(s);let n=t.get(o);return n||(n=new Set,t.set(o,n)),n.add(s),()=>{n.delete(s),n.size===0&&t.get(o)===n&&t.delete(o)}},emit(o,i,s){!t.has(o)&&e.size===0||queueMicrotask(()=>{let n=t.get(o);if(n)for(let a of n)fa(a,i,s);if(e.size>0){let a={event:o,payload:i};for(let c of e)fa(c,a,s)}})},subscribe(o){return r.add(o),()=>r.delete(o)},notifySubscribers(){for(let o of r)try{o()}catch(i){console.error("NotificationManager: subscriber callback error",i)}}}},fs=()=>U(cm)[0];var ko=Symbol("assistant-ui.store.clientIndex"),ga=t=>t[ko],va=ge([]),Ir=()=>Mt(va),ba=(t,e)=>{let r=g(3),o=Ir(),i;return r[0]!==t||r[1]!==o?(i=[...o,t],r[0]=t,r[1]=o,r[2]=i):i=r[2],tt(va,i,e)};var xa=ge(null),wa=Symbol("aui.scope-effect-unapplied"),_a=(t,e)=>tt(xa,t,e),gs=()=>{let t=Mt(xa);if(!t)throw new Error("AssistantTapContext is not available");return t},Er=()=>gs().clientRef,Rr=(t,e,r)=>{let o=g(8),{clientRef:i}=gs(),s;o[0]!==i||o[1]!==e||o[2]!==t?(s=()=>{let a=i.current;if(a===null)throw new Error("useAssistantScopeEffect ran before the client was committed. This is likely an internal bug in assistant-ui.");let c=()=>{let p=i.current?.[t];return p!==void 0&&bt(p)?ia(p):void 0},l=wa,u,h=p=>{if(u?.(),u=void 0,l=wa,p!==void 0){let f=e();u=typeof f=="function"?f:void 0}l=p};h(c());let d=a.subscribe(()=>{let p=c();p!==l&&h(p)});return()=>{d(),u?.()}},o[0]=i,o[1]=e,o[2]=t,o[3]=s):s=o[3];let n;o[4]!==i||o[5]!==r||o[6]!==t?(n=[i,t,...r],o[4]=i,o[5]=r,o[6]=t,o[7]=n):n=o[7],M(s,n)},Ee=()=>{let t=g(3),{emit:e}=gs(),r=Ir(),o;return t[0]!==r||t[1]!==e?(o=(i,s)=>{e(i,s,r)},t[0]=r,t[1]=e,t[2]=o):o=t[2],vr(o)};var Mo=ge(void 0),vs=(t,e)=>{let r=Mt(Mo);return tt(Mo,t??r,e)};var Po=()=>{let t=g(3),[e]=U(lm),r,o;return t[0]!==e?(r=()=>()=>queueMicrotask(()=>e.abort()),o=[e],t[0]=e,t[1]=r,t[2]=o):(r=t[1],o=t[2]),kt(r,o),e.signal};function lm(){return new AbortController}var Do=Symbol("assistant-ui.store.getValue"),bs=t=>{let e=t[Do];if(!e)throw new Error("Client scope contains a non-client resource. Ensure your Derived get() returns a client created with useClientResource(), not a plain resource.");return e.getState?.()},ya=new Map;function um(t){let e=ya.get(t);return e||(e=function(...r){if(!this||typeof this!="object")throw new Error(`Method "${String(t)}" called without proper context. This may indicate the function was called incorrectly.`);let o=this[Do];if(!o)throw new Error(`Method "${String(t)}" called on invalid client proxy. Ensure you are calling this method on a valid client instance.`);let i=o[t];if(!i)throw new Error(`Method "${String(t)}" is not implemented.`);if(typeof i!="function")throw new Error(`"${String(t)}" is not a function.`);return i(...r)},ya.set(t,e)),e}var dm=class extends it{constructor(e,r,o){super();m(this,"boundFns");m(this,"cachedReceiver");m(this,"outputRef");m(this,"tagRef");m(this,"index");this.outputRef=e,this.tagRef=r,this.index=o}get(e,r,o){if(r===Do)return this.outputRef.current;if(r===ko)return this.index;if(r===To)return this.tagRef.current;let i=Le(r,"ClientProxy");if(i!==!1)return i;let s=this.outputRef.current[r];if(typeof s=="function"){if(o===void 0)return s;(!this.boundFns||this.cachedReceiver!==o)&&(this.boundFns=new Map,this.cachedReceiver=o);let n=this.boundFns.get(r);return n||(n=um(r).bind(o),this.boundFns.set(r,n)),n}return s}ownKeys(){return Object.keys(this.outputRef.current)}has(e,r){return r===Do||r===ko||r===To?!0:r in this.outputRef.current}},nt=t=>{let e=L(null),r=L(null),o=z(()=>({}),[t.hook,t.key]),i=Ir().length,s=z(()=>new Proxy({},new dm(e,r,i)),[i]),n=ba(s,function(){return me(t)});return e.current||(e.current=n,r.current=o),M(()=>{e.current=n,r.current=o}),{methods:s,state:n.getState?.(),key:t.key}},Oo=V(nt);var ve=(t,e)=>{if(Array.isArray(t)!==Array.isArray(e))return!1;if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;for(let o=0;o<t.length;o++)if(!Object.is(t[o],e[o]))return!1;return!0}let r=Object.keys(t);return r.length===Object.keys(e).length&&r.every(o=>Object.hasOwn(e,o)&&Object.is(t[o],e[o]))};var Ar=t=>{let e=z(()=>({}),[]);return e.v!==void 0&&ve(e.v,t)?e.v:(e.v=t,t)},Ze=t=>{let e=g(2),r=L(void 0),o;return e[0]!==t?(o=i=>{let s=t(i);return r.current!==void 0&&ve(r.current,s)?r.current:(r.current=s,s)},e[0]=t,e[1]=o):o=e[1],o};var Bo=(()=>{try{return!1}catch{return!1}})();var mm=(t,e)=>{let r={...t},o=new Set,i=!0;for(;i;){i=!1;for(let s of Object.values(r)){if(o.has(s.hook))continue;o.add(s.hook);let n=pa(s.hook);if(n){n(r,e),i=!0;break}}}return r},No=t=>t.hook===xs,pm=t=>{if(!No(t))return{source:"root",query:{}};let e=t.args[0];return{source:e.source,query:e.query??{}}},ws=Symbol.for("aui.event-receiver-ref"),Sa=(t,e)=>{let r=t===wt?ca():t,o=Object.create(r);Object.assign(o,e);let i;return Object.defineProperty(o,"optional",{get:()=>i??(i=Eo(o)),enumerable:!1}),o},hm=({notifications:t,clientRef:e})=>z(()=>({subscribe:t.subscribe,on:function(r,o){if(!this)throw new Error("const { on } = useAui() is not supported. Use aui.on() instead.");let{scope:i,event:s}=Cr(r),n=r[ws];if(i!=="*"&&!n&&Co(this[i]))throw new Error(`Scope "${i}" is not available. Use { scope: "*", event: "${s}" } to listen globally.`);let a=t.on(s,(l,u)=>{if(i==="*")return o(l);let h=((n??e).current??this)[i];if(!bt(h))return;let d=Io(h);if(d===u[ga(d)])return o(l)});if(i!=="*"){if(n){if(e.parent===wt)return a}else if(Co(e.parent[i]))return a}let c=e.parent.on(r,o);return()=>{a(),c()}}}),[t,e]),Ta=t=>{let e=g(5),r;e[0]!==t?(r=pm(t),e[0]=t,e[1]=r):r=e[1];let{source:o,query:i}=r,s=Ar(i),n;return e[2]!==o||e[3]!==s?(n={source:o,query:s},e[2]=o,e[3]=s,e[4]=n):n=e[4],Ar(n)},fm=(t,e)=>{let r=g(3),o;return r[0]!==e||r[1]!==t?(o=e?t:Oo(t),r[0]=e,r[1]=t,r[2]=o):o=r[2],me(o)},gm=(t,e)=>{let r=Sr(),o=No(e),i=fm(e,o),s=o?i:i.methods,n=Ta(e),a=z(()=>ms({name:t,...n},()=>s),[t,n,s]);return r[t]=a,a},vm=V(gm),bm=t=>{let e=g(2),r;return e[0]!==t?(r=t.map(Tm),e[0]=t,e[1]=r):r=e[1],Dt(r)},Ca=(t,e)=>{let r=Ar(e),o=z(()=>({}),[]);return o.deps!==r&&(o.deps=r,o.client=t),o.client},Ia=({parent:t,entries:e,clientRef:r,notifications:o})=>{let i=hm({notifications:o,clientRef:r}),s=Sa(t,i),n=_a({clientRef:r,emit:o.emit},function(){return ma(s,function(){return bm(e)})});return{client:Ca(s,[t,...n])}},wm=({parent:t,entries:e,destroySignal:r})=>{let o=L({parent:t,current:null}).current,{value:i,effects:s}=yo(function(){let a=fs(),{client:c}=vs(r,function(){return Ia({parent:t,entries:e,clientRef:o,notifications:a})});return M(()=>t.subscribe(a.notifySubscribers),[t,a]),M(()=>a.notifySubscribers()),c});return kt(()=>{o.parent=t,o.current=i},[i,t,o]),{client:i,effects:s}},xm=({parent:t,entries:e,destroySignal:r})=>{let o=L({parent:t,current:null}).current,{value:i,effects:s}=yo(function(){let a=fs(),c=us(function(){return vs(r,function(){return Ia({parent:t,entries:e,clientRef:o,notifications:a})})}),l=Je(c.subscribe,()=>c.getValue().client,()=>c.getValue().client);return M(()=>{let u=()=>ns(()=>{o.current=c.getValue().client,a.notifySubscribers()}),h=c.subscribe(u),d=t.subscribe(u);return()=>{h(),d()}},[c,t,a]),l});return kt(()=>{o.parent=t,o.current=i},[i,t,o]),{client:i,effects:s}},_m=(t,e,r,o)=>{let{get:i}=o.args[0],s=Je(t.subscribe,()=>i(t),()=>i(t)),n=Ta(o),a=z(()=>ms({name:r,...n},()=>s),[r,n,s]);return e[r]=a,a},ym=(t,e)=>{if(Bo){let[a]=U(()=>e.map(([u])=>u).join(",")),c=e.find(([,u])=>!No(u));if(c)throw new Error(`Scope "${c[0]}" is a root scope but this useAui mounted derived-only; remount with a new key to change scope kinds.`);let l=e.map(([u])=>u).join(",");if(l!==a)throw new Error(`A derived-only config mounted scopes [${a}] but now has [${l}]; remount with a new key to change the scope set.`)}let r=L({parent:t,current:null}).current,o=function(a,c){if(!this)throw new Error("const { on } = useAui() is not supported. Use aui.on() instead.");let{scope:l,event:u}=Cr(a);if(l==="*")return t.on(a,c);let h=a[ws];if(!h&&Co(this[l]))throw new Error(`Scope "${l}" is not available. Use { scope: "*", event: "${u}" } to listen globally.`);return t.on({scope:l,event:u,[ws]:h??r},c)},i=Sa(t,{subscribe:t.subscribe,on:o}),s=e.map(([a,c])=>_m(t,i,a,c)),n=Ca(i,[t,...s]);return kt(()=>{r.parent=t,r.current=n},[n,t,r]),n},Sm=(t,e)=>{let r=g(8),o;r[0]!==e||r[1]!==t?(o=Object.entries(mm(e,t)),r[0]=e,r[1]=t,r[2]=o):o=r[2];let i=o,s;r[3]!==i?(s=()=>i.length===0||i.some(Cm),r[3]=i,r[4]=s):s=r[4];let[n]=U(s),a;return r[5]!==i||r[6]!==n?(a={entries:i,rooted:n},r[5]=i,r[6]=n,r[7]=a):a=r[7],a},Ea=(t,e,r,o)=>{let{entries:i,rooted:s}=Sm(t,e);return s?r({parent:t,entries:i,destroySignal:o}):{client:ym(t,i)}},Ra=(t,e,r)=>Ea(t,e,wm,r);function F(t){let e=Sr();if(t){let r=Po(),{client:o,effects:i}=Ea(e,t,xm,r);return i&&da(o,i),o}return e}function Tm(t){let[e,r]=t;return te(e,vm(e,r))}function Cm(t){let[,e]=t;return!No(e)}var Im=t=>{let e;class r extends it{get(s,n){let a=Le(n,"OptionalAssistantState");if(a!==!1)return a;let c=n;if(!st(c)&&bt(t[c]))return bs(t[c]())}ownKeys(){return wr(t)}has(s,n){return!st(n)&&n in t}}class o extends it{get(s,n){let a=Le(n,"AssistantState");if(a!==!1)return a;if(n==="optional")return e??(e=new Proxy({},new r));let c=n;if(!st(c))return bs(t[c]())}ownKeys(){return[...wr(t),"optional"]}has(s,n){return n==="optional"||!st(n)&&n in t}}return new Proxy({},new o)},Aa=new WeakMap,ka=t=>{let e=Aa.get(t);return e||(e=Im(t),Aa.set(t,e)),e};var R=t=>{let e=g(6),r=F(),o;e[0]!==r?(o=ka(r),e[0]=r,e[1]=o):o=e[1];let i=o,s,n;e[2]!==i||e[3]!==t?(s=()=>t(i),n=()=>t(i),e[2]=i,e[3]=t,e[4]=s,e[5]=n):(s=e[4],n=e[5]);let a=Je(r.subscribe,s,n);if(typeof a=="object"&&a!==null&&(a===i||a===i.optional))throw new Error("You tried to return the entire AssistantState. This is not supported due to technical limitations.");return Xi(a),a};var xs=t=>{let e=g(3),{get:r}=t,o=F(),i;return e[0]!==o||e[1]!==r?(i=()=>r(o),e[0]=o,e[1]=r,e[2]=i):i=e[2],R(i)},ie=V(xs);var Ma=t=>{if(t.key===void 0)throw new Error("useClientLookup: Element has no key");return t.key};function ye(t){let e=g(12),r;e[0]!==t?(r=t.map(Am),e[0]=t,e[1]=r):r=e[1];let o=Dt(r),i;e[2]!==t?(i=t.reduce(Rm,Object.create(null)),e[2]=t,e[3]=i):i=e[3];let s=i,n;e[4]!==o?(n=o.map(Em),e[4]=o,e[5]=n):n=e[5];let a=n,c;e[6]!==s||e[7]!==o?(c=u=>{if("index"in u){if(u.index<0||u.index>=o.length)throw new Error(`useClientLookup: index ${u.index} out of bounds (length: ${o.length}) (ignore if recovered)`);return o[u.index].methods}let h=s[u.key];if(h===void 0)throw new Error(`useClientLookup: key "${u.key}" not found (ignore if recovered)`);return o[h].methods},e[6]=s,e[7]=o,e[8]=c):c=e[8];let l;return e[9]!==a||e[10]!==c?(l={state:a,get:c},e[9]=a,e[10]=c,e[11]=l):l=e[11],l}function Em(t){return t.state}function Rm(t,e,r){return t[Ma(e)]=r,t}function Am(t){return te(Ma(t),Oo(t),t.deps)}var Vo=(t,e=0)=>e===0?Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<=1||t.scrollHeight<=t.clientHeight:t.scrollHeight-e-t.scrollTop-t.clientHeight<=1||t.scrollHeight-e<=t.clientHeight,_s=(t,e=0)=>e===0?t.scrollHeight>t.clientHeight+1:t.scrollHeight-e>t.clientHeight+1,ys=(t,e)=>t.scrollTop>e.scrollTop&&t.scrollHeight===e.scrollHeight;var be=Symbol("skip-update"),ze=(t,...e)=>{let r=[];for(let o of t)try{o(...e)}catch(i){r.push(i)}if(r.length===1)throw r[0];if(r.length>1){for(let o of r)console.error(o);throw new AggregateError(r)}},Lo=t=>{ze(t)},Pa=(t,e)=>t===void 0||e===void 0?t===e:ve(t,e),er=class{constructor(){m(this,"_subscribers",new Set)}subscribe(t){return this._subscribers.add(t),()=>this._subscribers.delete(t)}waitForUpdate(){return new Promise(t=>{let e=this.subscribe(()=>{e(),t()})})}_notifySubscribers(){ze(this._subscribers)}};var $o=class{constructor(){m(this,"_subscriptions",new Set);m(this,"_connection")}get isConnected(){return!!this._connection}notifySubscribers(t,e){if(e){ne(this._subscriptions,t,e);return}ze(this._subscriptions,t)}_updateConnection(){if(this._subscriptions.size>0){if(this._connection)return;this._connection=this._connect()}else{let t=this._connection;this._connection=void 0,t?.()}}subscribe(t){return this._subscriptions.add(t),this._updateConnection(),()=>{this._subscriptions.delete(t),this._updateConnection()}}},we=class extends $o{constructor(e){super();m(this,"binding");m(this,"_previousState");m(this,"getState",()=>(this.isConnected||this._syncState(),this._previousState));this.binding=e;let r=e.getState();if(r===be)throw new Error("Entry not available in the store");this._previousState=r}get path(){return this.binding.path}_syncState(){let e=this.binding.getState();return e===be||Pa(e,this._previousState)?!1:(this._previousState=e,!0)}_connect(){let e=()=>{this._syncState()&&this.notifySubscribers()},r=this.binding.subscribe(e);return this._syncState(),r}},kr=class extends $o{constructor(e){super();m(this,"binding");m(this,"_previousStateDirty",!0);m(this,"_previousState");m(this,"getState",()=>{if(!this.isConnected||this._previousStateDirty){let e=this.binding.getState();e!==be&&(this._previousState===void 0||!Pa(e,this._previousState))&&(this._previousState=e),this._previousStateDirty=!1}if(this._previousState===void 0)throw new Error("Entry not available in the store");return this._previousState});this.binding=e}get path(){return this.binding.path}_connect(){let e=()=>{this._previousStateDirty=!0,this.notifySubscribers()},r=this.binding.subscribe(e);return this._previousStateDirty=!0,r}},Bt=class extends $o{constructor(e){super();m(this,"binding");this.binding=e}get path(){return this.binding.path}getState(){return this.binding.getState()}outerSubscribe(e){return this.binding.subscribe(e)}_connect(){let e=()=>{this.notifySubscribers()},r=this.binding.getState(),o=r?.subscribe(e),i=()=>{let n=this.binding.getState();if(n===r)return;r=n;let a=o;o=void 0;try{a?.()}finally{o=n?.subscribe(e),e()}},s=this.outerSubscribe(i);return()=>Lo([()=>s?.(),()=>o?.()])}},Fo=class extends $o{constructor(e){super();m(this,"config");this.config=e}getState(){return this.config.binding.getState()}outerSubscribe(e){return this.config.binding.subscribe(e)}_connect(){let e=`Runtime event "${this.config.event}"`,r=a=>{this.notifySubscribers(a,e)},o=this.config.binding.getState(),i=o?.unstable_on(this.config.event,r),s=()=>{let a=this.config.binding.getState();if(a===o)return;o=a;let c=i;i=void 0;try{c?.()}finally{i=a?.unstable_on(this.config.event,r)}},n=this.outerSubscribe(s);return()=>Lo([()=>n?.(),()=>i?.()])}};var Uo=class{constructor(){m(this,"_providers",new Map);m(this,"_providerUnsubscribes",new Map);m(this,"_subscribers",new Set)}getModelContext(){return oa(new Set(this._providers.values()))}registerModelContextProvider(t){let e=Symbol();this._providers.set(e,t);let r;try{r=t.subscribe?.(()=>{this.notifySubscribers()})}catch(i){this._providers.delete(e);try{this.notifySubscribers()}catch(s){console.error(s)}throw i}this._providerUnsubscribes.set(e,r),this.notifySubscribers();let o=!1;return()=>{if(o)return;o=!0,this._providers.delete(e);let i=this._providerUnsubscribes.get(e);this._providerUnsubscribes.delete(e);let s=!1,n,a=c=>{try{c()}catch(l){s?console.error(l):(s=!0,n=l)}};if(i&&a(i),a(()=>this.notifySubscribers()),s)throw n}}notifySubscribers(){ze(this._subscribers)}subscribe(t){return this._subscribers.add(t),()=>{this._subscribers.delete(t)}}};var Ss=[],km={modelName:void 0,toolNames:Ss},Mm=(t,e)=>t===e||ve(t,e),jo=(t,e)=>{let r=t.getModelContext(),o=r.config?.modelName,i=r.tools?Object.keys(r.tools).sort():Ss,s=i.length?i:Ss;return o===e.modelName&&Mm(s,e.toolNames)?e:{modelName:o,toolNames:s}},Pm=()=>{let t=g(11),e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=new Uo,t[0]=e):e=t[0];let r=e,o;t[1]===Symbol.for("react.memo_cache_sentinel")?(o=()=>jo(r,km),t[1]=o):o=t[1];let[i,s]=U(o),n,a;t[2]===Symbol.for("react.memo_cache_sentinel")?(n=()=>(s(p=>jo(r,p)),r.subscribe(()=>{s(p=>jo(r,p))})),a=[r],t[2]=n,t[3]=a):(n=t[2],a=t[3]),M(n,a);let c;t[4]!==i?(c=()=>jo(r,i),t[4]=i,t[5]=c):c=t[5];let l,u,h;t[6]===Symbol.for("react.memo_cache_sentinel")?(l=()=>r.getModelContext(),u=p=>r.subscribe(p),h=p=>r.registerModelContextProvider(p),t[6]=l,t[7]=u,t[8]=h):(l=t[6],u=t[7],h=t[8]);let d;return t[9]!==c?(d={getState:c,getModelContext:l,subscribe:u,register:h},t[9]=c,t[10]=d):d=t[10],d},zo=V(Pm);var Da=(t,e)=>{if(!(e.status?.type==="running"||e.status?.type==="requires-action")){let o=t.complete;return typeof o!="function"?o??null:o({args:e.args,result:e.result})}let r=t.running;return typeof r!="function"?r??null:r({args:e.args})};var Oa=t=>t.display!==void 0?t.display==="standalone":t.type==="human",Ba=t=>function(r){return Da(t,r)};var Na=t=>{let e=g(16),{toolkit:r,mcpApp:o}=t,i;e[0]!==o?(i=o?[te("mcpApp",o)]:[],e[0]=o,e[1]=i):i=e[1];let s=Dt(i)[0],[n,a]=U(Dm),c;e[2]!==s||e[3]!==n?(c={toolUIs:n,mcpApp:s},e[2]=s,e[3]=n,e[4]=c):c=e[4];let l=c,u=Er(),h;e[5]===Symbol.for("react.memo_cache_sentinel")?(h=(_,A,I)=>{let S={render:A,renderText:I?.renderText,standalone:I?.standalone??!1};return a(E=>{let C=ue(E);return C[_]=[...C[_]??[],S],C}),()=>{a(E=>{let C=E[_]?.filter(k=>k!==S)??[],w=ue(E);return C.length>0?(w[_]=C,w):(delete w[_],w)})}},e[5]=h):h=e[5];let d=h,p,f;e[6]!==r?(p=()=>{if(!r)return;let _=[];for(let[A,I]of Object.entries(r)){let S="render"in I?I.render:void 0,E="renderText"in I?I.renderText:void 0,C=S??(E?Ba(E):void 0);C&&_.push(d(A,C,{standalone:Oa(I),renderText:E}))}return()=>{_.forEach(Om)}},f=[r,d],e[6]=r,e[7]=p,e[8]=f):(p=e[7],f=e[8]),M(p,f);let v;e[9]!==u||e[10]!==r?(v=()=>{if(!r)return;let _=Object.entries(r).reduce(Bm,ue());return u.current.modelContext().register({getModelContext:()=>({tools:_})})},e[9]=u,e[10]=r,e[11]=v):v=e[11];let b;e[12]!==r?(b=[r],e[12]=r,e[13]=b):b=e[13],Rr("modelContext",v,b);let y;return e[14]!==l?(y={getState:()=>l,setToolUI:d},e[14]=l,e[15]=y):y=e[15],y},Va=V(Na);Tr(Na,(t,e)=>{!t.modelContext&&e.modelContext.source===null&&(t.modelContext=zo())});function Dm(){return ue()}function Om(t){return t()}function Bm(t,e){let[r,o]=e;if(o.type==="mcp")return t;let{display:i,render:s,renderText:n,...a}=o;return t[r]=a,t}var Se=t=>Je(t.subscribe,t.getState,t.getServerSnapshot);var Nm=Symbol.for("assistant-ui.silent-runtime-action"),La=t=>typeof t=="object"&&t!==null&&Nm in t;var qo=(t,e)=>{let r=e();return r.catch(o=>{La(o)||console.error(`[assistant-ui] ${t} failed:`,o)}),r};var Vm=t=>{let e=g(9),{runtime:r}=t,o=Se(r),i;e[0]!==o?(i=()=>o,e[0]=o,e[1]=i):i=e[1];let s,n;e[2]!==r?(s=()=>qo("attachment remove",r.remove),n=()=>r,e[2]=r,e[3]=s,e[4]=n):(s=e[3],n=e[4]);let a;return e[5]!==i||e[6]!==s||e[7]!==n?(a={getState:i,remove:s,__internal_getRuntime:n},e[5]=i,e[6]=s,e[7]=n,e[8]=a):a=e[8],a},Ho=V(Vm);var Lm=t=>{let e=g(5),{runtime:r,index:o}=t,i;e[0]!==o||e[1]!==r?(i=r.getAttachmentByIndex(o),e[0]=o,e[1]=r,e[2]=i):i=e[2];let s=i,n;return e[3]!==s?(n=Ho({runtime:s}),e[3]=s,e[4]=n):n=e[4],me(n)},$m=V(Lm),Fm=({item:t,onMove:e,onRemove:r})=>({getState:()=>t,steer:()=>e({lane:"steer",insertAfter:null}),move:e,remove:r}),Um=V(Fm),jm=t=>{let e=g(63),{threadIdRef:r,messageIdRef:o,runtime:i,isSuggestion:s}=t,n=Se(i),a=Ee(),c=L(!1),l,u;e[0]!==a||e[1]!==o||e[2]!==i||e[3]!==r?(l=()=>{let P=[],$=i.unstable_on("send",T=>{let B=c.current;c.current=!1,a("composer.send",{threadId:r.current,...o&&{messageId:o.current},chars:T.chars,attachments:T.attachments,...B?{suggestion:!0}:void 0})});P.push($);let Q=i.unstable_on("attachmentAdd",T=>{a("composer.attachmentAdd",{threadId:r.current,...o&&{messageId:o.current},...T.contentType?{contentType:T.contentType}:void 0})});return P.push(Q),P.push(i.unstable_on("attachmentAddError",T=>{a("composer.attachmentAddError",{threadId:r.current,...o&&{messageId:o.current},...T.attachmentId&&{attachmentId:T.attachmentId},reason:T.reason,message:T.message,...T.contentType?{contentType:T.contentType}:void 0})})),()=>{for(let T of P)T()}},u=[i,a,r,o],e[0]=a,e[1]=o,e[2]=i,e[3]=r,e[4]=l,e[5]=u):(l=e[4],u=e[5]),M(l,u);let h;if(e[6]!==i||e[7]!==n.attachments){let P;e[9]!==i?(P=($,Q)=>te($.id,$m({runtime:i,index:Q}),[i,Q]),e[9]=i,e[10]=P):P=e[10],h=n.attachments.map(P),e[6]=i,e[7]=n.attachments,e[8]=h}else h=e[8];let d=ye(h),p=n.queue,f;if(e[11]!==p||e[12]!==i){let P;e[14]!==i?(P=$=>te($.id,Um({item:$,onMove:Q=>i.moveQueueItem($.id,Q),onRemove:()=>i.removeQueueItem($.id)})),e[14]=i,e[15]=P):P=e[15],f=p.map(P),e[11]=p,e[12]=i,e[13]=f}else f=e[13];let v=ye(f),b=n.type??"thread",y;e[16]!==d.state||e[17]!==p||e[18]!==n.attachmentAccept||e[19]!==n.canCancel||e[20]!==n.canSend||e[21]!==n.dictation||e[22]!==n.isEditing||e[23]!==n.isEmpty||e[24]!==n.quote||e[25]!==n.role||e[26]!==n.runConfig||e[27]!==n.text||e[28]!==b?(y={text:n.text,role:n.role,attachments:d.state,runConfig:n.runConfig,isEditing:n.isEditing,canCancel:n.canCancel,canSend:n.canSend,attachmentAccept:n.attachmentAccept,isEmpty:n.isEmpty,type:b,dictation:n.dictation,quote:n.quote,queue:p},e[16]=d.state,e[17]=p,e[18]=n.attachmentAccept,e[19]=n.canCancel,e[20]=n.canSend,e[21]=n.dictation,e[22]=n.isEditing,e[23]=n.isEmpty,e[24]=n.quote,e[25]=n.role,e[26]=n.runConfig,e[27]=n.text,e[28]=b,e[29]=y):y=e[29];let _=y,A;e[30]!==_?(A=()=>_,e[30]=_,e[31]=A):A=e[31];let I;e[32]!==s||e[33]!==i?(I=P=>{let $=i.getState();c.current=$.canSend&&(s?.($.text)??!1),i.send(P)},e[32]=s,e[33]=i,e[34]=I):I=e[34];let S;e[35]!==a||e[36]!==o||e[37]!==i||e[38]!==r?(S=()=>{!o&&i.getState().canCancel&&a("composer.cancel",{threadId:r.current}),i.cancel()},e[35]=a,e[36]=o,e[37]=i,e[38]=r,e[39]=S):S=e[39];let E=i.beginEdit??zm,C;e[40]!==d?(C=P=>"id"in P?d.get({key:P.id}):d.get(P),e[40]=d,e[41]=C):C=e[41];let w;e[42]!==v?(w=P=>"id"in P?v.get({key:P.id}):v.get(P),e[42]=v,e[43]=w):w=e[43];let k;e[44]!==i?(k=()=>i,e[44]=i,e[45]=k):k=e[45];let D;return e[46]!==i.addAttachment||e[47]!==i.clearAttachments||e[48]!==i.reset||e[49]!==i.setQuote||e[50]!==i.setRole||e[51]!==i.setRunConfig||e[52]!==i.setText||e[53]!==i.startDictation||e[54]!==i.stopDictation||e[55]!==E||e[56]!==C||e[57]!==w||e[58]!==k||e[59]!==A||e[60]!==I||e[61]!==S?(D={getState:A,setText:i.setText,setRole:i.setRole,setRunConfig:i.setRunConfig,addAttachment:i.addAttachment,reset:i.reset,clearAttachments:i.clearAttachments,send:I,cancel:S,beginEdit:E,startDictation:i.startDictation,stopDictation:i.stopDictation,setQuote:i.setQuote,attachment:C,queueItem:w,__internal_getRuntime:k},e[46]=i.addAttachment,e[47]=i.clearAttachments,e[48]=i.reset,e[49]=i.setQuote,e[50]=i.setRole,e[51]=i.setRunConfig,e[52]=i.setText,e[53]=i.startDictation,e[54]=i.stopDictation,e[55]=E,e[56]=C,e[57]=w,e[58]=k,e[59]=A,e[60]=I,e[61]=S,e[62]=D):D=e[62],D},Go=V(jm);function zm(){throw new Error("beginEdit is not supported in this runtime")}var Ko=t=>({get current(){return t()}});var qm=t=>{let e=g(13),{runtime:r}=t,o=Se(r),i;e[0]!==o?(i=()=>o,e[0]=o,e[1]=i):i=e[1];let s,n,a,c;e[2]!==r?(s=u=>r.addToolResult(u),n=u=>r.resumeToolCall(u),a=u=>r.respondToToolApproval(u),c=()=>r,e[2]=r,e[3]=s,e[4]=n,e[5]=a,e[6]=c):(s=e[3],n=e[4],a=e[5],c=e[6]);let l;return e[7]!==i||e[8]!==s||e[9]!==n||e[10]!==a||e[11]!==c?(l={getState:i,addToolResult:s,resumeToolCall:n,respondToToolApproval:a,__internal_getRuntime:c},e[7]=i,e[8]=s,e[9]=n,e[10]=a,e[11]=c,e[12]=l):l=e[12],l},$a=V(qm);var Hm=t=>{let e=g(5),{runtime:r,index:o}=t,i;e[0]!==o||e[1]!==r?(i=r.getAttachmentByIndex(o),e[0]=o,e[1]=r,e[2]=i):i=e[2];let s=i,n;return e[3]!==s?(n=Ho({runtime:s}),e[3]=s,e[4]=n):n=e[4],me(n)},Gm=V(Hm),Km=t=>{let e=g(5),{runtime:r,index:o}=t,i;e[0]!==o||e[1]!==r?(i=r.getMessagePartByIndex(o),e[0]=o,e[1]=r,e[2]=i):i=e[2];let s=i,n;return e[3]!==s?(n=$a({runtime:s}),e[3]=s,e[4]=n):n=e[4],me(n)},Qm=V(Km),Wm=t=>{let e=g(74),{runtime:r,threadIdRef:o,threadId:i}=t,s=Se(r),n=Ee(),[a,c]=U(!1),[l,u]=U(!1),h;e[0]!==r?(h=Ko(()=>r.getState().id),e[0]=r,e[1]=h):h=e[1];let d=h,p=L(s.status),f;e[2]!==n||e[3]!==r||e[4]!==i?(f=H=>{n(H,{threadId:i,messageId:r.getState().id})},e[2]=n,e[3]=r,e[4]=i,e[5]=f):f=e[5];let v=f,b,y;e[6]!==n||e[7]!==s.id||e[8]!==s.status||e[9]!==i?(b=()=>{let H=s.status,mt=p.current;p.current=H,H?.type==="incomplete"&&H.reason==="error"&&(mt?.type!=="incomplete"||mt.reason!=="error")&&n("message.error",{threadId:i,messageId:s.id,reason:"error"})},y=[s.status,s.id,n,i],e[6]=n,e[7]=s.id,e[8]=s.status,e[9]=i,e[10]=b,e[11]=y):(b=e[10],y=e[11]),M(b,y);let _;e[12]!==d||e[13]!==r.composer||e[14]!==o?(_=Go({runtime:r.composer,threadIdRef:o,messageIdRef:d}),e[12]=d,e[13]=r.composer,e[14]=o,e[15]=_):_=e[15];let A=nt(_),I;if(e[16]!==r||e[17]!==s.content){let H;e[19]!==r?(H=(mt,qt)=>te("toolCallId"in mt&&mt.toolCallId!=null?`toolCallId-${mt.toolCallId}`:`index-${qt}`,Qm({runtime:r,index:qt}),[r,qt]),e[19]=r,e[20]=H):H=e[20],I=s.content.map(H),e[16]=r,e[17]=s.content,e[18]=I}else I=e[18];let S=ye(I),E;e[21]!==s.attachments?(E=s.attachments??[],e[21]=s.attachments,e[22]=E):E=e[22];let C;if(e[23]!==r||e[24]!==E){let H;e[26]!==r?(H=(mt,qt)=>te(mt.id,Gm({runtime:r,index:qt}),[r,qt]),e[26]=r,e[27]=H):H=e[27],C=E.map(H),e[23]=r,e[24]=E,e[25]=C}else C=e[25];let w=ye(C),k=s,D;e[28]!==A.state||e[29]!==a||e[30]!==l||e[31]!==S.state||e[32]!==k?(D={...k,parts:S.state,composer:A.state,isCopied:a,isHovering:l},e[28]=A.state,e[29]=a,e[30]=l,e[31]=S.state,e[32]=k,e[33]=D):D=e[33];let P=D,$;e[34]!==P?($=()=>P,e[34]=P,e[35]=$):$=e[35];let Q;e[36]!==A.methods?(Q=()=>A.methods,e[36]=A.methods,e[37]=Q):Q=e[37];let T;e[38]!==r?(T=()=>r.delete(),e[38]=r,e[39]=T):T=e[39];let B,q;e[40]!==v||e[41]!==r?(B=H=>(v("message.reload"),r.reload(H)),q=()=>(v("message.speak"),r.speak()),e[40]=v,e[41]=r,e[42]=B,e[43]=q):(B=e[42],q=e[43]);let se,pe;e[44]!==r?(se=()=>r.stopSpeaking(),pe=H=>r.submitFeedback(H),e[44]=r,e[45]=se,e[46]=pe):(se=e[45],pe=e[46]);let Ce;e[47]!==v||e[48]!==r?(Ce=H=>(v("message.branchSwitched"),r.switchToBranch(H)),e[47]=v,e[48]=r,e[49]=Ce):Ce=e[49];let Ie;e[50]!==r?(Ie=()=>r.unstable_getCopyText(),e[50]=r,e[51]=Ie):Ie=e[51];let Ue;e[52]!==S?(Ue=H=>"index"in H?S.get({index:H.index}):S.get({key:`toolCallId-${H.toolCallId}`}),e[52]=S,e[53]=Ue):Ue=e[53];let j;e[54]!==w?(j=H=>"id"in H?w.get({key:H.id}):w.get(H),e[54]=w,e[55]=j):j=e[55];let W;e[56]!==v?(W=H=>{H&&v("message.copied"),c(H)},e[56]=v,e[57]=W):W=e[57];let he;e[58]!==r?(he=()=>r,e[58]=r,e[59]=he):he=e[59];let zt;return e[60]!==$||e[61]!==Q||e[62]!==T||e[63]!==B||e[64]!==q||e[65]!==se||e[66]!==pe||e[67]!==Ce||e[68]!==Ie||e[69]!==Ue||e[70]!==j||e[71]!==W||e[72]!==he?(zt={getState:$,composer:Q,delete:T,reload:B,speak:q,stopSpeaking:se,submitFeedback:pe,switchToBranch:Ce,getCopyText:Ie,part:Ue,attachment:j,setIsCopied:W,setIsHovering:u,__internal_getRuntime:he},e[60]=$,e[61]=Q,e[62]=T,e[63]=B,e[64]=q,e[65]=se,e[66]=pe,e[67]=Ce,e[68]=Ie,e[69]=Ue,e[70]=j,e[71]=W,e[72]=he,e[73]=zt):zt=e[73],zt},Fa=V(Wm);var Jm=t=>{let e=z(()=>({}),[]),r=e.state,o=[];t.suggestions.forEach(s=>{let n=r?.suggestions[o.length];o.push(n&&ve(n,s)?n:s)});let i=r&&ve(o,r.suggestions)?r:{suggestions:o};return e.state=i,i},Ym=t=>({getState:()=>t}),Xm=V(Ym),Ua=t=>{let e=g(9),r=Jm(t),o;e[0]!==r.suggestions?(o=r.suggestions.map(tp),e[0]=r.suggestions,e[1]=o):o=e[1];let i=ye(o),s;e[2]!==r?(s=()=>r,e[2]=r,e[3]=s):s=e[3];let n;e[4]!==i?(n=c=>{let{index:l}=c;return i.get({index:l})},e[4]=i,e[5]=n):n=e[5];let a;return e[6]!==s||e[7]!==n?(a={getState:s,suggestion:n},e[6]=s,e[7]=n,e[8]=a):a=e[8],a},Zm=t=>{let e=g(6),r;e[0]!==t?(r=t??[],e[0]=t,e[1]=r):r=e[1];let o;e[2]!==r?(o=r.map(rp),e[2]=r,e[3]=o):o=e[3];let i;return e[4]!==o?(i={suggestions:o},e[4]=o,e[5]=i):i=e[5],Ua(i)},R0=V(Zm),ep=t=>{let e=g(4),r;e[0]!==t?(r=t.map(op),e[0]=t,e[1]=r):r=e[1];let o;return e[2]!==r?(o={suggestions:r},e[2]=r,e[3]=o):o=e[3],Ua(o)},ja=V(ep);function tp(t,e){return te(e,Xm(t),[t])}function rp(t){return typeof t=="string"?{title:t,label:"",prompt:t}:{title:t.title,label:t.label,prompt:t.prompt}}function op(t){return{title:t.title??t.prompt,label:t.label??"",prompt:t.prompt}}var qe=Object.freeze({type:"complete"}),Qo=Object.freeze({type:"running"}),ip=Object.freeze({cancelled:Object.freeze({type:"incomplete",reason:"cancelled"}),length:Object.freeze({type:"incomplete",reason:"length"}),"content-filter":Object.freeze({type:"incomplete",reason:"content-filter"}),other:Object.freeze({type:"incomplete",reason:"other"}),error:Object.freeze({type:"incomplete",reason:"error"})}),sp=t=>{let e=t.status;if(!e||typeof e!="object")return;let{type:r}=e;if(r==="running")return Qo;if(r==="complete")return qe;if(r!=="incomplete")return;let{reason:o}=e;return ip[o==="cancelled"||o==="length"||o==="content-filter"||o==="other"||o==="error"?o:"other"]},Wo=(t,e,r)=>{if(t.role!=="assistant")return qe;if(r.type==="tool-call")return r.result===void 0?t.status:qe;if(t.status.type==="running"){let i=sp(r);if(i)return i}let o=e===Math.max(0,t.content.length-1);return t.status.type==="requires-action"?qe:o?t.status:qe};var np=t=>"reason"in t?t.reason:void 0,ap=t=>"error"in t?t.error:void 0,cp=32,za=new WeakMap,Ts=t=>za.get(t)??t.id,lp=(t,e,r)=>"status"in t&&t.status?Wo(t,e,r):qe,qa=()=>{let t=[],e=new Map;return r=>{let o=[],i=new Map,s=!0,n=(c,l,u,h)=>{if(!(u>cp))for(let[d,p]of c.entries())for(let[f,v]of p.content.entries()){if(v.type!=="tool-call"||v.messages===void 0)continue;let b=v.messages,y=lp(p,f,v),_=np(y),A=ap(y),I=`${h}${d}.${f}`,S=e.get(I),E=S?.part===v&&S.statusType===y.type&&S.statusReason===_&&Object.is(S.statusError,A)&&S.messages===b&&S.task.messageId===p.id&&S.task.parentTaskId===l&&S.task.depth===u?S.task:{id:v.toolCallId,toolName:v.toolName,args:v.args,result:v.result,...v.isError===void 0?void 0:{isError:v.isError},status:y,timing:v.timing,messageId:p.id,parentTaskId:l,depth:u,messages:b};E!==S?.task&&(s=!1,za.set(E,I)),o.push(E),i.set(I,{task:E,part:v,statusType:y.type,statusReason:_,statusError:A,messages:b}),n(b,E.id,u+1,`${I}.`)}};n(r,null,0,"");let a=s&&o.length===t.length&&o.every((c,l)=>c===t[l])?t:o;return t=a,e=i,a}},up=({task:t})=>({getState:()=>t}),Ha=V(up);var dp=t=>{let e=g(7),{runtime:r,id:o,threadIdRef:i,threadId:s}=t,n;e[0]!==o||e[1]!==r?(n=r.getMessageById(o),e[0]=o,e[1]=r,e[2]=n):n=e[2];let a=n,c;return e[3]!==a||e[4]!==s||e[5]!==i?(c=Fa({runtime:a,threadIdRef:i,threadId:s}),e[3]=a,e[4]=s,e[5]=i,e[6]=c):c=e[6],me(c)},mp=V(dp),pp=t=>{let e=g(93),{runtime:r}=t,o=Se(r),i=Ee(),s,n;e[0]!==i||e[1]!==r?(s=()=>{let j=[];for(let W of["runStart","runEnd","initialize","modelContextUpdate"]){let he=r.unstable_on(W,()=>{let zt=r.getState()?.threadId||"unknown";i(`thread.${W}`,{threadId:zt})});j.push(he)}return j.push(r.unstable_on("toolApprovalAnswered",W=>{let he=r.getState()?.threadId||"unknown";i("thread.toolApprovalAnswered",{threadId:he,...W})})),()=>{for(let W of j)W()}},n=[r,i],e[0]=i,e[1]=r,e[2]=s,e[3]=n):(s=e[2],n=e[3]),M(s,n);let a;e[4]!==r?(a=Ko(()=>r.getState().threadId),e[4]=r,e[5]=a):a=e[5];let c=a,l;e[6]!==i||e[7]!==r?(l=j=>{i(j,{threadId:r.getState().threadId})},e[6]=i,e[7]=r,e[8]=l):l=e[8];let u=l,h;e[9]!==r?(h=j=>r.getState().suggestions.some(W=>W.prompt===j),e[9]=r,e[10]=h):h=e[10];let d=h,p;e[11]!==d||e[12]!==r.composer||e[13]!==c?(p=Go({runtime:r.composer,threadIdRef:c,isSuggestion:d}),e[11]=d,e[12]=r.composer,e[13]=c,e[14]=p):p=e[14];let f=nt(p),v;e[15]!==o.suggestions?(v=ja(o.suggestions),e[15]=o.suggestions,e[16]=v):v=e[16];let b=nt(v),y;e[17]===Symbol.for("react.memo_cache_sentinel")?(y=qa(),e[17]=y):y=e[17];let _=y,A;e[18]!==o.messages?(A=_(o.messages),e[18]=o.messages,e[19]=A):A=e[19];let I=A,S;e[20]!==I?(S=I.map(hp),e[20]=I,e[21]=S):S=e[21];let E=ye(S),C;if(e[22]!==r||e[23]!==o.messages||e[24]!==o.threadId||e[25]!==c){let j;e[27]!==r||e[28]!==o.threadId||e[29]!==c?(j=W=>te(W.id,mp({runtime:r,id:W.id,threadIdRef:c,threadId:o.threadId}),[r,W.id,c,o.threadId]),e[27]=r,e[28]=o.threadId,e[29]=c,e[30]=j):j=e[30],C=o.messages.map(j),e[22]=r,e[23]=o.messages,e[24]=o.threadId,e[25]=c,e[26]=C}else C=e[26];let w=ye(C),k=w.state.length===0&&!o.isLoading,D;e[31]!==f.state||e[32]!==w.state||e[33]!==o.capabilities||e[34]!==o.extras||e[35]!==o.isDisabled||e[36]!==o.isLoading||e[37]!==o.isRunning||e[38]!==o.speech||e[39]!==o.state||e[40]!==o.suggestions||e[41]!==o.voice||e[42]!==k||e[43]!==I?(D={isEmpty:k,isDisabled:o.isDisabled,isLoading:o.isLoading,isRunning:o.isRunning,capabilities:o.capabilities,state:o.state,suggestions:o.suggestions,extras:o.extras,speech:o.speech,voice:o.voice,composer:f.state,messages:w.state,tasks:I},e[31]=f.state,e[32]=w.state,e[33]=o.capabilities,e[34]=o.extras,e[35]=o.isDisabled,e[36]=o.isLoading,e[37]=o.isRunning,e[38]=o.speech,e[39]=o.state,e[40]=o.suggestions,e[41]=o.voice,e[42]=k,e[43]=I,e[44]=D):D=e[44];let P=D,$;e[45]!==P?($=()=>P,e[45]=P,e[46]=$):$=e[46];let Q;e[47]!==f.methods?(Q=()=>f.methods,e[47]=f.methods,e[48]=Q):Q=e[48];let T;e[49]!==b?(T=()=>b.methods,e[49]=b,e[50]=T):T=e[50];let B;e[51]!==E||e[52]!==I?(B=j=>{if("id"in j){let W=I.find(he=>he.id===j.id);return E.get({key:W?Ts(W):j.id})}return E.get(j)},e[51]=E,e[52]=I,e[53]=B):B=e[53];let q;e[54]!==i||e[55]!==d||e[56]!==r?(q=j=>{let W=typeof j=="string"?{content:[{type:"text",text:j}]}:j;if((W.role??"user")==="user"){let he=W.content.map(fp).join("");i("composer.send",{threadId:r.getState().threadId,chars:he.length,attachments:W.attachments?.length??0,...d(he)?{suggestion:!0}:void 0})}r.append(j)},e[54]=i,e[55]=d,e[56]=r,e[57]=q):q=e[57];let se;e[58]!==u||e[59]!==r||e[60]!==o.isRunning?(se=()=>{o.isRunning&&u("thread.cancelRun"),r.cancelRun()},e[58]=u,e[59]=r,e[60]=o.isRunning,e[61]=se):se=e[61];let pe;e[62]!==u||e[63]!==r?(pe=()=>{r.connectVoice(),u("thread.voiceStarted")},e[62]=u,e[63]=r,e[64]=pe):pe=e[64];let Ce;e[65]!==w?(Ce=j=>"id"in j?w.get({key:j.id}):w.get(j),e[65]=w,e[66]=Ce):Ce=e[66];let Ie;e[67]!==r?(Ie=()=>r,e[67]=r,e[68]=Ie):Ie=e[68];let Ue;return e[69]!==r.deleteMessage||e[70]!==r.disconnectVoice||e[71]!==r.export||e[72]!==r.getModelContext||e[73]!==r.getVoiceVolume||e[74]!==r.import||e[75]!==r.importExternalState||e[76]!==r.muteVoice||e[77]!==r.reset||e[78]!==r.resumeRun||e[79]!==r.startRun||e[80]!==r.stopSpeaking||e[81]!==r.subscribeVoiceVolume||e[82]!==r.unmuteVoice||e[83]!==$||e[84]!==Q||e[85]!==T||e[86]!==B||e[87]!==q||e[88]!==se||e[89]!==pe||e[90]!==Ce||e[91]!==Ie?(Ue={getState:$,composer:Q,suggestions:T,task:B,append:q,deleteMessage:r.deleteMessage,startRun:r.startRun,resumeRun:r.resumeRun,importExternalState:r.importExternalState,cancelRun:se,getModelContext:r.getModelContext,export:r.export,import:r.import,reset:r.reset,stopSpeaking:r.stopSpeaking,connectVoice:pe,disconnectVoice:r.disconnectVoice,getVoiceVolume:r.getVoiceVolume,subscribeVoiceVolume:r.subscribeVoiceVolume,muteVoice:r.muteVoice,unmuteVoice:r.unmuteVoice,message:Ce,__internal_getRuntime:Ie},e[69]=r.deleteMessage,e[70]=r.disconnectVoice,e[71]=r.export,e[72]=r.getModelContext,e[73]=r.getVoiceVolume,e[74]=r.import,e[75]=r.importExternalState,e[76]=r.muteVoice,e[77]=r.reset,e[78]=r.resumeRun,e[79]=r.startRun,e[80]=r.stopSpeaking,e[81]=r.subscribeVoiceVolume,e[82]=r.unmuteVoice,e[83]=$,e[84]=Q,e[85]=T,e[86]=B,e[87]=q,e[88]=se,e[89]=pe,e[90]=Ce,e[91]=Ie,e[92]=Ue):Ue=e[92],Ue},Ga=V(pp);function hp(t){return te(Ts(t),Ha({task:t}),[t])}function fp(t){return t.type==="text"?t.text:""}var He=(t,e)=>qo(`thread list ${t}`,e);var gp=t=>{let e=g(35),{runtime:r,mainThreadIsRunning:o}=t,i=o===void 0?!1:o,s=Se(r),n;e:{let k=s.isRunning||s.isMain&&i;if(k===s.isRunning){n=s;break e}let D;e[0]!==k||e[1]!==s?(D={...s,isRunning:k},e[0]=k,e[1]=s,e[2]=D):D=e[2],n=D}let a=n,c=Ee(),{isMain:l,id:u}=s,h;e[3]!==l||e[4]!==u?(h={isMain:l,threadId:u},e[3]=l,e[4]=u,e[5]=h):h=e[5];let d=L(h),p,f;e[6]!==c||e[7]!==l||e[8]!==u?(p=()=>{let k=d.current;k.isMain===l&&k.threadId===u||(d.current={isMain:l,threadId:u},c(l?"threadListItem.switchedTo":"threadListItem.switchedAway",{threadId:u}))},f=[l,u,c],e[6]=c,e[7]=l,e[8]=u,e[9]=p,e[10]=f):(p=e[9],f=e[10]),M(p,f);let v;e[11]!==a?(v=()=>a,e[11]=a,e[12]=v):v=e[12];let b,y,_,A,I,S,E;e[13]!==r?(I=k=>He("switch",()=>r.switchTo(k)),S=k=>He("rename",()=>r.rename(k)),E=k=>He("update custom metadata",()=>r.updateCustom(k)),b=()=>He("archive",()=>r.archive()),y=()=>He("unarchive",()=>r.unarchive()),_=()=>He("delete",()=>r.delete()),A=k=>He("generate title",()=>r.generateTitle(k)),e[13]=r,e[14]=b,e[15]=y,e[16]=_,e[17]=A,e[18]=I,e[19]=S,e[20]=E):(b=e[14],y=e[15],_=e[16],A=e[17],I=e[18],S=e[19],E=e[20]);let C;e[21]!==r?(C=()=>r,e[21]=r,e[22]=C):C=e[22];let w;return e[23]!==r.detach||e[24]!==r.initialize||e[25]!==b||e[26]!==y||e[27]!==_||e[28]!==A||e[29]!==C||e[30]!==v||e[31]!==I||e[32]!==S||e[33]!==E?(w={getState:v,switchTo:I,rename:S,updateCustom:E,archive:b,unarchive:y,delete:_,generateTitle:A,initialize:r.initialize,detach:r.detach,__internal_getRuntime:C},e[23]=r.detach,e[24]=r.initialize,e[25]=b,e[26]=y,e[27]=_,e[28]=A,e[29]=C,e[30]=v,e[31]=I,e[32]=S,e[33]=E,e[34]=w):w=e[34],w},Ka=V(gp);var Qa=t=>{let e=g(4),r=Ee(),o=L(t),i,s;e[0]!==r||e[1]!==t?(i=()=>{let n=o.current;n!==t&&(o.current=t,r("threads.selectionChanged",{threadId:t,previousThreadId:n}))},s=[t,r],e[0]=r,e[1]=t,e[2]=i,e[3]=s):(i=e[2],s=e[3]),M(i,s)};var vp=t=>{let e=g(6),{runtime:r,id:o,mainThreadIsRunning:i}=t,s;e[0]!==o||e[1]!==r?(s=r.getItemById(o),e[0]=o,e[1]=r,e[2]=s):s=e[2];let n=s,a;return e[3]!==i||e[4]!==n?(a=Ka({runtime:n,mainThreadIsRunning:i}),e[3]=i,e[4]=n,e[5]=a):a=e[5],me(a)},bp=V(vp),wp=t=>{let e=g(48),{runtime:r,__internal_assistantRuntime:o}=t,i=Se(r);Qa(i.mainThreadId);let s=Ee(),n,a;e[0]!==s||e[1]!==r?(n=()=>r.unstable_subscribeThreadEvents(D=>{let{threadId:P,type:$}=D;P!==r.getState().mainThreadId&&s(`thread.${$}`,{threadId:P})}),a=[r,s],e[0]=s,e[1]=r,e[2]=n,e[3]=a):(n=e[2],a=e[3]),M(n,a);let c;e[4]!==r.main?(c=Ga({runtime:r.main}),e[4]=r.main,e[5]=c):c=e[5];let l=nt(c),u;e[6]!==l.state||e[7]!==r||e[8]!==i.threadItems?(u=Object.keys(i.threadItems).map(D=>te(D,bp({runtime:r,id:D,mainThreadIsRunning:l.state.isRunning}),[r,D,l.state.isRunning])),e[6]=l.state,e[7]=r,e[8]=i.threadItems,e[9]=u):u=e[9];let h=ye(u),d=i.newThreadId??null,p;e[10]!==l.state||e[11]!==i.archivedThreadIds||e[12]!==i.hasMore||e[13]!==i.isLoading||e[14]!==i.isLoadingMore||e[15]!==i.loadError||e[16]!==i.mainThreadId||e[17]!==i.threadIds||e[18]!==d||e[19]!==h.state?(p={mainThreadId:i.mainThreadId,newThreadId:d,isLoading:i.isLoading,loadError:i.loadError,isLoadingMore:i.isLoadingMore,hasMore:i.hasMore,threadIds:i.threadIds,archivedThreadIds:i.archivedThreadIds,threadItems:h.state,main:l.state},e[10]=l.state,e[11]=i.archivedThreadIds,e[12]=i.hasMore,e[13]=i.isLoading,e[14]=i.isLoadingMore,e[15]=i.loadError,e[16]=i.mainThreadId,e[17]=i.threadIds,e[18]=d,e[19]=h.state,e[20]=p):p=e[20];let f=p,v;e[21]!==f?(v=()=>f,e[21]=f,e[22]=v):v=e[22];let b;e[23]!==l.methods?(b=()=>l.methods,e[23]=l.methods,e[24]=b):b=e[24];let y;e[25]!==f||e[26]!==h?(y=D=>{if(D==="main")return h.get({key:f.mainThreadId});if("id"in D)return h.get({key:D.id});let{index:P,archived:$}=D,Q=$!==void 0&&$?f.archivedThreadIds[P]:f.threadIds[P];return h.get({key:Q})},e[25]=f,e[26]=h,e[27]=y):y=e[27];let _,A,I,S,E,C;e[28]!==r?(_=(D,P)=>He("switch",()=>r.switchToThread(D,P)),A=()=>He("create",()=>r.switchToNewThread()),I=()=>r.getLoadThreadsPromise(),S=()=>r.reload(),E=()=>r.reloadMainThread(),C=()=>r.loadMore(),e[28]=r,e[29]=_,e[30]=A,e[31]=I,e[32]=S,e[33]=E,e[34]=C):(_=e[29],A=e[30],I=e[31],S=e[32],E=e[33],C=e[34]);let w;e[35]!==o?(w=()=>o,e[35]=o,e[36]=w):w=e[36];let k;return e[37]!==_||e[38]!==A||e[39]!==I||e[40]!==S||e[41]!==E||e[42]!==C||e[43]!==w||e[44]!==v||e[45]!==b||e[46]!==y?(k={getState:v,thread:b,item:y,switchToThread:_,switchToNewThread:A,getLoadThreadsPromise:I,reload:S,reloadMainThread:E,loadMore:C,__internal_getAssistantRuntime:w},e[37]=_,e[38]=A,e[39]=I,e[40]=S,e[41]=E,e[42]=C,e[43]=w,e[44]=v,e[45]=b,e[46]=y,e[47]=k):k=e[47],k},Wa=V(wp);var Ja=(t,e)=>{t.thread??(t.thread=ie({source:"threads",query:{type:"main"},get:r=>r.threads.thread("main")})),t.threadListItem??(t.threadListItem=ie({source:"threads",query:{type:"main"},get:r=>r.threads.item("main")})),t.composer??(t.composer=ie({source:"thread",query:{},get:r=>r.threads.thread("main").composer()})),!t.modelContext&&e.modelContext.source===null&&(t.modelContext=zo()),!t.suggestions&&e.suggestions.source===null&&(t.suggestions=ie({source:"thread",query:{},get:r=>r.thread.suggestions()}))};var Ya=t=>{let e=g(7),r=Er(),o;e[0]!==r||e[1]!==t?(o=()=>t.registerModelContextProvider(r.current.modelContext()),e[0]=r,e[1]=t,e[2]=o):o=e[2];let i;e[3]!==t?(i=[t],e[3]=t,e[4]=i):i=e[4],Rr("modelContext",o,i);let s;return e[5]!==t?(s=Wa({runtime:t.threads,__internal_assistantRuntime:t}),e[5]=t,e[6]=s):s=e[6],me(s)},Xa=V(Ya),xp=(t,e)=>{Ja(t,e),!t.tools&&e.tools.source===null&&(t.tools=Va({})),!t.dataRenderers&&e.dataRenderers.source===null&&(t.dataRenderers=ra())};Tr(Ya,xp);var tr=require("react/jsx-runtime"),_p=oe({}),Za=({effects:t})=>{"use no memo";return Be(t),null},ae=ee(function(e,r){"use no memo";let{config:o,children:i}=e,s="extends"in e,n="value"in e,a=Sr();if(Bo){if(s&&n)throw new Error("AuiProvider: pass either `extends` or `value`, not both.");if(s&&e.extends===void 0)throw new Error("AuiProvider: `extends` must be a client or null, not undefined.");if(s&&!o)throw new Error("AuiProvider: `extends` requires a `config`.");if(n&&o)throw new Error("AuiProvider: pass either `value` or `config`, not both.");if(!n&&!o)throw new Error("AuiProvider: a `config` is required.");if(!s&&!n&&a!==wt)throw new Error("A parent AuiProvider exists \u2014 pass extends={aui} to inherit it or extends={null} to isolate.")}let c=s?e.extends??wt:n?e.value??wt:a,l=Po(),{client:u,effects:h}=Ra(c,o??_p,l);return Zi(r,()=>u,[u]),(0,tr.jsx)(Mo.Provider,{value:l,children:(0,tr.jsxs)(Ao.Provider,{value:u,children:[(0,tr.jsx)(Za,{effects:ua(c)}),h&&(0,tr.jsx)(Za,{effects:h}),i]})})});var yp=t=>{let e=F(),r=L(!1),o=r.current?null:t(e);return R(()=>r.current?t(e):o),()=>(r.current=!0,t(e))},Sp=Object.freeze({});function at(t){let e=g(3),{getItemState:r,children:o}=t,i=yp(r),s;return e[0]!==o||e[1]!==i?(s=o(i),e[0]=o,e[1]=i,e[2]=s):s=e[2],Tp(s)}var Tp=t=>{let e=typeof t=="object"&&t!=null&&"type"in t?t:null,r=e?.type,o=e?.key,i=typeof e?.props=="object"&&e.props!=null&&Object.entries(e.props).length===0?Sp:e?.props;return z(()=>e,[r,o,i])??t};var Jo=(t,e)=>{let r=g(11),o=F(),i=vr(e),s;r[0]!==t?(s=Cr(t),r[0]=t,r[1]=s):s=r[1];let{scope:n,event:a}=s,c;r[2]!==o||r[3]!==i||r[4]!==a||r[5]!==n?(c=()=>o.on({scope:n,event:a},i),r[2]=o,r[3]=i,r[4]=a,r[5]=n,r[6]=c):c=r[6];let l;r[7]!==o||r[8]!==a||r[9]!==n?(l=[o,n,a],r[7]=o,r[8]=a,r[9]=n,r[10]=l):l=r[10],M(c,l)};var Mr=require("react/jsx-runtime"),ec=t=>t._core?.RenderComponent,Cp=({runtime:t,aui:e,config:r,children:o})=>{"use no memo";let i=ec(t),s=oe({...r,threads:Xa(t)});return(0,Mr.jsxs)(ae,{extends:e,config:s,children:[i&&(0,Mr.jsx)(i,{}),o]})},Cs=X(t=>{let e=g(5),{runtime:r,aui:o,config:i,children:s}=t,n=o===void 0?null:o,a;return e[0]!==n||e[1]!==s||e[2]!==i||e[3]!==r?(a=(0,Mr.jsx)(Cp,{runtime:r,aui:n,config:i,children:s}),e[0]=n,e[1]=s,e[2]=i,e[3]=r,e[4]=a):a=e[4],a});function ce(t){return t!=null&&typeof t=="object"&&!Array.isArray(t)}function Pr(t,e=0){return e>100?!1:t===null||typeof t=="string"||typeof t=="boolean"?!0:typeof t=="number"?!Number.isNaN(t)&&Number.isFinite(t):Array.isArray(t)?t.every(r=>Pr(r,e+1)):ce(t)?Object.entries(t).every(([r,o])=>typeof r=="string"&&Pr(o,e+1)):!1}var Ip=100,Is=(t,e,r)=>{if(t===e)return!0;if(r>Ip||t==null||e==null)return!1;if(Array.isArray(t))return!Array.isArray(e)||t.length!==e.length?!1:t.every((s,n)=>Is(s,e[n],r+1));if(Array.isArray(e)||!ce(t)||!ce(e))return!1;let o=Object.keys(t),i=Object.keys(e);return o.length!==i.length?!1:o.every(s=>Object.hasOwn(e,s)&&Is(t[s],e[s],r+1))},Dr=(t,e)=>!Pr(t)||!Pr(e)?!1:Is(t,e,0);var tc=Symbol.for("aui.tool-response"),Yo="<no result>",Re=class Es{constructor(e){m(this,"artifact");m(this,"result");m(this,"isError");m(this,"modelContent");m(this,"messages");e.artifact!==void 0&&(this.artifact=e.artifact);let r=e.result;this.result=r===void 0?Yo:r,this.isError=e.isError??!1,e.modelContent!==void 0&&(this.modelContent=e.modelContent),e.messages!==void 0&&(this.messages=e.messages)}get[tc](){return!0}static[Symbol.hasInstance](e){return typeof e=="object"&&e!==null&&tc in e}static toResponse(e){return e instanceof Es?e:new Es({result:e===void 0?Yo:e})}};var rr=()=>{let t,e,r=new Promise((o,i)=>{t=o,e=i});if(!t||!e)throw new Error("Failed to create promise");return{promise:r,resolve:t,reject:e}};var rc=()=>{let t=[],e=!1,r=!1,o=!1,i,s,n=0,a,c,l=()=>(s=void 0,c??(c=Promise.all(t.splice(0).map(async v=>{try{await v.reader.cancel().catch(()=>{}),await v.pipeTask}finally{v.reader.releaseLock()}})).then(()=>{})),c),u=v=>{r||o||(o=!0,console.error(v),l(),i.error(v),a?.reject(v),a=void 0)},h=v=>{v.promise||(v.promise=v.reader.read().then(({done:b,value:y})=>{v.promise=void 0,!(r||o)&&(b?(t.splice(t.indexOf(v),1),v.reader.releaseLock(),e&&t.length===0&&n===0&&i.close()):i.enqueue(y),a?.resolve(),a=void 0)}).catch(u))},d=new ReadableStream({start(v){i=v},pull(){return a=rr(),t.forEach(v=>{h(v)}),a.promise},async cancel(){r=!0;let v=l();a?.resolve(),a=void 0,await v}}),p=v=>{if(t.length>0&&(s=void 0),!s){let b=[];s=b,n++,Promise.resolve().then(()=>{if(n--,s===b&&(s=void 0),!(r||o)){for(let y of b)i.enqueue(y);e&&t.length===0&&n===0&&i.close(),a?.resolve(),a=void 0}}).catch(u)}s.push(v)};return{readable:d,isSealed(){return e},isCancelled(){return r},isErrored(){return o},seal(){e||r||o||(e=!0,t.length===0&&n===0&&i.close())},addStream:(v,b)=>{let y=b?.catch(()=>{});if(r||o){v.cancel().catch(()=>{});return}if(e)throw v.cancel().catch(()=>{}),new Error("Cannot add streams after the run callback has settled.");s=void 0;let _={reader:v.getReader(),pipeTask:y};t.push(_),h(_)},enqueue(v){if(!(r||o)){if(e)throw new Error("Cannot add streams after the run callback has settled.");p(v)}}}};var oc=t=>t instanceof TypeError,Te=(t,e,r)=>{try{t.enqueue(e)}catch(o){if(!oc(o))throw o;r?.(o)}},Xo=t=>{try{t.close()}catch(e){if(!oc(e))throw e}};var Zo=(t,e)=>new ReadableStream({start(r){return t.start?.(e(r))},pull(r){return t.pull?.(e(r))},cancel(r){return t.cancel?.(r)}}),ei=(t,e)=>{let r;return[Zo({start(o){r=o},cancel(o){return e?.(r,o)}},t),r]};var ic=class{constructor(t,e={}){m(this,"_controller");m(this,"_strict");m(this,"_isClosed",!1);m(this,"_warnedDropped",!1);m(this,"_warnDroppedAfterClose",t=>{this._warnedDropped||(this._warnedDropped=!0,console.error(`Dropped text delta for closed stream: ${String(t)}`))});this._controller=t,this._strict=e.strict??!0}append(t){let e={type:"text-delta",path:[],textDelta:t};if(this._isClosed){if(this._strict)throw new TypeError("Cannot append to a closed TextStreamController");return Te(this._controller,e,this._warnDroppedAfterClose),this}return Te(this._controller,e),this}close(){this._isClosed||(this._isClosed=!0,Te(this._controller,{type:"part-finish",path:[]}),Xo(this._controller))}},sc=(t,e={})=>Zo(t,r=>new ic(r,e)),Rs=(t={})=>ei(e=>new ic(e,t));var Ep=class{constructor(t,e={}){m(this,"_isClosed",!1);m(this,"_mergeTask");m(this,"_controller");m(this,"_argsTextController");this._controller=t;let r=sc({start:i=>{this._argsTextController=i}},e),o=!1;this._mergeTask=r.pipeTo(new WritableStream({write:i=>{switch(i.type){case"text-delta":o=!0,Te(this._controller,i);break;case"part-finish":o||Te(this._controller,{type:"text-delta",textDelta:"{}",path:[]}),Te(this._controller,{type:"tool-call-args-text-finish",path:[]});break;default:throw new Error(`Unexpected chunk type: ${i.type}`)}}}))}get argsText(){return this._argsTextController}async setResponse(t){if(this._isClosed)return;let e=t.result;Te(this._controller,{type:"result",path:[],...t.artifact!==void 0?{artifact:t.artifact}:{},result:e===void 0?Yo:e,isError:t.isError??!1,...t.modelContent!==void 0?{modelContent:t.modelContent}:{},...t.messages!==void 0?{messages:t.messages}:{}}),await this.close()}async close(){this._isClosed||(this._isClosed=!0,this._argsTextController.close(),await this._mergeTask,Te(this._controller,{type:"part-finish",path:[]}),Xo(this._controller))}};var nc=(t={})=>ei(e=>new Ep(e,t));var ti=class{constructor(){m(this,"value",-1)}up(){return++this.value}};var ac=class extends TransformStream{constructor(t){super({transform(e,r){r.enqueue({...e,path:[t,...e.path]})}})}},RT=class extends TransformStream{constructor(t){super({transform(e,r){let{path:[o,...i]}=e;if(t!==o)throw new Error(`Path mismatch: expected ${t}, got ${o}`);r.enqueue({...e,path:i})}})}},cc=class extends TransformStream{constructor(t){let e=new ti,r=new Map;super({transform(o,i){o.type==="part-start"&&o.path.length===0&&r.set(e.up(),t.up());let[s,...n]=o.path;if(s===void 0){i.enqueue(o);return}let a=r.get(s);if(a===void 0)throw new Error("Path not found");i.enqueue({...o,path:[a,...n]})}})}};var ri=(t,e=21)=>(r=e)=>{let o="",i=r|0;for(;i-- >0;)o+=t[Math.random()*t.length|0];return o};var lc=ri("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7);var Rp=class uc{constructor(e,r={}){m(this,"_state");m(this,"_parentId");this._state=e||{strict:r.strict??!0,merger:rc(),contentCounter:new ti}}get __internal_isClosed(){return this._state.merger.isSealed()||this._state.merger.isCancelled()||this._state.merger.isErrored()}get __internal_isCancelled(){return this._state.merger.isCancelled()}__internal_getReadable(){return this._state.merger.readable}__internal_subscribeToClose(e){this._state.closeSubscriber=e}_addTransformedStream(e,r){if(e.locked)throw new TypeError("Cannot merge a stream that is already locked to a reader.");let o=e.pipeTo(r.writable).catch(async i=>{throw await r.writable.abort(i).catch(()=>{}),i});this._state.merger.addStream(r.readable,o)}_addPart(e,r){this._state.append&&(this._state.append.controller.close(),this._state.append=void 0),this.enqueue({type:"part-start",part:e,path:[]}),this._addTransformedStream(r,new ac(this._state.contentCounter.value))}merge(e){this._addTransformedStream(e,new cc(this._state.contentCounter))}appendText(e){(this._state.append?.kind!=="text"||this._state.append.parentId!==this._parentId)&&(this._state.append={kind:"text",parentId:this._parentId,controller:this.addTextPart()}),this._state.append.controller.append(e)}appendReasoning(e,r){(r!==void 0||this._state.append?.kind!=="reasoning"||this._state.append.parentId!==this._parentId)&&(this._state.append={kind:"reasoning",parentId:this._parentId,controller:this.addReasoningPart(r)}),!(r!==void 0&&e.length===0)&&this._state.append.controller.append(e)}addTextPart(){let[e,r]=Rs({strict:this._state.strict});return this._addPart(this._withParentIdOption({type:"text"}),e),r}addReasoningPart(e){let[r,o]=Rs({strict:this._state.strict});return this._addPart(this._withParentIdOption({type:"reasoning",...e}),r),o}addToolCallPart(e){let r=typeof e=="string"?{toolName:e}:e,o=r.toolName,i=r.toolCallId??lc(),[s,n]=nc({strict:this._state.strict});return this._addPart({type:"tool-call",toolName:o,toolCallId:i,...this._parentId&&{parentId:this._parentId}},s),r.argsText!==void 0&&(n.argsText.append(r.argsText),n.argsText.close()),r.args!==void 0&&(n.argsText.append(JSON.stringify(r.args)),n.argsText.close()),r.response!==void 0&&n.setResponse(r.response),n}_finishedPartStream(){return new ReadableStream({start(e){e.enqueue({type:"part-finish",path:[]}),e.close()}})}_withParentIdOption(e){return this._parentId?{...e,parentId:this._parentId}:e}appendSource(e){this._addPart(this._withParentIdOption(e),this._finishedPartStream())}appendFile(e){this._addPart(this._withParentIdOption(e),this._finishedPartStream())}appendData(e){this._addPart(this._withParentIdOption(e),this._finishedPartStream())}enqueue(e){this._state.merger.enqueue(e),e.type==="part-start"&&e.path.length===0&&this._state.contentCounter.up()}withParentId(e){let r=new uc(this._state);return r._parentId=e,r}close(){this._state.append?.controller?.close(),this._state.merger.seal(),this._state.closeSubscriber?.()}};function dc(t,e={}){let r=new Rp(void 0,e);return(async()=>{try{await t(r)}catch(i){r.__internal_isClosed?r.__internal_isCancelled||console.error(i):r.enqueue({type:"error",path:[],error:String(i)})}finally{r.__internal_isClosed||r.close()}})(),r.__internal_getReadable()}function As(t={}){let{resolve:e,promise:r}=rr(),o;return[dc(i=>(o=i,o.__internal_subscribeToClose(e),r),t),o]}var mc=class extends TransformStream{constructor(t){super();let e=t(super.readable);Object.defineProperty(this,"readable",{value:e,writable:!1})}};var Or=class extends TransformStream{constructor(){let t=[];super({transform(e,r){if(e.type==="part-start"){if(e.path.length!==0){r.error(new Error("Nested parts are not supported"));return}t.push(e.part),r.enqueue(e);return}if(e.type==="text-delta"||e.type==="result"||e.type==="part-finish"||e.type==="tool-call-args-text-finish"){if(e.path.length!==1){r.error(new Error(`${e.type} chunks must have a path of length 1`));return}let o=e.path[0];if(o<0||o>=t.length){r.error(new Error(`Invalid path index: ${o}`));return}let i=t[o];r.enqueue({...e,meta:i});return}r.enqueue(e)}})}};var Mp=/[0-9a-fA-F]/;function vc(t){let e=["ROOT"],r=-1,o=null,i=0,s=[],n;function a(){n!==void 0&&(s.push(JSON.parse(`"${n}"`)),n=void 0)}function c(d,p,f){switch(d){case'"':r=p,e.pop(),e.push(f),e.push("INSIDE_STRING"),a();break;case"f":case"t":case"n":r=p,o=p,e.pop(),e.push(f),e.push("INSIDE_LITERAL");break;case"-":e.pop(),e.push(f),e.push("INSIDE_NUMBER"),a();break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":r=p,e.pop(),e.push(f),e.push("INSIDE_NUMBER"),a();break;case"{":r=p,e.pop(),e.push(f),e.push("INSIDE_OBJECT_START"),a();break;case"[":r=p,e.pop(),e.push(f),e.push("INSIDE_ARRAY_START"),a()}}function l(d,p){switch(d){case",":e.pop(),e.push("INSIDE_OBJECT_AFTER_COMMA");break;case"}":r=p,e.pop(),n=s.pop()}}function u(d,p){switch(d){case",":e.pop(),e.push("INSIDE_ARRAY_AFTER_COMMA"),n=(Number(n)+1).toString();break;case"]":r=p,e.pop(),n=s.pop()}}for(let d=0;d<t.length;d++){let p=t[d];switch(e[e.length-1]){case"ROOT":c(p,d,"FINISH");break;case"INSIDE_OBJECT_START":switch(p){case'"':e.pop(),e.push("INSIDE_OBJECT_KEY"),n="";break;case"}":r=d,e.pop(),n=s.pop()}break;case"INSIDE_OBJECT_AFTER_COMMA":p==='"'&&(e.pop(),e.push("INSIDE_OBJECT_KEY"),n="");break;case"INSIDE_OBJECT_KEY":switch(p){case'"':e.pop(),e.push("INSIDE_OBJECT_AFTER_KEY");break;case"\\":e.push("INSIDE_STRING_ESCAPE"),n+=p;break;default:n+=p}break;case"INSIDE_OBJECT_AFTER_KEY":p===":"&&(e.pop(),e.push("INSIDE_OBJECT_BEFORE_VALUE"));break;case"INSIDE_OBJECT_BEFORE_VALUE":c(p,d,"INSIDE_OBJECT_AFTER_VALUE");break;case"INSIDE_OBJECT_AFTER_VALUE":l(p,d);break;case"INSIDE_STRING":switch(p){case'"':e.pop(),r=d,n=s.pop();break;case"\\":e.push("INSIDE_STRING_ESCAPE");break;default:r=d}break;case"INSIDE_ARRAY_START":p==="]"?(r=d,e.pop(),n=s.pop()):(n="0",c(p,d,"INSIDE_ARRAY_AFTER_VALUE"));break;case"INSIDE_ARRAY_AFTER_VALUE":switch(p){case",":e.pop(),e.push("INSIDE_ARRAY_AFTER_COMMA"),n=(Number(n)+1).toString();break;case"]":r=d,e.pop(),n=s.pop();break;default:r=d}break;case"INSIDE_ARRAY_AFTER_COMMA":c(p,d,"INSIDE_ARRAY_AFTER_VALUE");break;case"INSIDE_STRING_ESCAPE":{e.pop();let f=e[e.length-1];p==="u"?(e.push("INSIDE_STRING_UNICODE_ESCAPE"),i=0):f==="INSIDE_STRING"&&(r=d),f==="INSIDE_OBJECT_KEY"&&(n+=p);break}case"INSIDE_STRING_UNICODE_ESCAPE":{let f=e[e.length-2];if(!Mp.test(p)){e.pop(),d--;break}i++,i===4&&(e.pop(),f==="INSIDE_STRING"&&(r=d)),f==="INSIDE_OBJECT_KEY"&&(n+=p);break}case"INSIDE_NUMBER":switch(p){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":r=d;break;case"e":case"E":case"-":case"+":case".":break;case",":e.pop(),n=s.pop(),e[e.length-1]==="INSIDE_ARRAY_AFTER_VALUE"&&u(p,d),e[e.length-1]==="INSIDE_OBJECT_AFTER_VALUE"&&l(p,d);break;case"}":e.pop(),n=s.pop(),e[e.length-1]==="INSIDE_OBJECT_AFTER_VALUE"&&l(p,d);break;case"]":e.pop(),n=s.pop(),e[e.length-1]==="INSIDE_ARRAY_AFTER_VALUE"&&u(p,d);break;default:e.pop(),n=s.pop()}break;case"INSIDE_LITERAL":{let f=t.substring(o,d+1);!"false".startsWith(f)&&!"true".startsWith(f)&&!"null".startsWith(f)?(e.pop(),e[e.length-1]==="INSIDE_OBJECT_AFTER_VALUE"?l(p,d):e[e.length-1]==="INSIDE_ARRAY_AFTER_VALUE"&&u(p,d)):r=d;break}}}let h=t.slice(0,r+1);for(let d=e.length-1;d>=0;d--)switch(e[d]){case"INSIDE_STRING":h+='"';break;case"INSIDE_OBJECT_KEY":case"INSIDE_OBJECT_AFTER_KEY":case"INSIDE_OBJECT_AFTER_COMMA":case"INSIDE_OBJECT_START":case"INSIDE_OBJECT_BEFORE_VALUE":case"INSIDE_OBJECT_AFTER_VALUE":h+="}";break;case"INSIDE_ARRAY_START":case"INSIDE_ARRAY_AFTER_COMMA":case"INSIDE_ARRAY_AFTER_VALUE":h+="]";break;case"INSIDE_LITERAL":{let p=t.substring(o,t.length);"true".startsWith(p)?h+="true".slice(p.length):"false".startsWith(p)?h+="false".slice(p.length):"null".startsWith(p)&&(h+="null".slice(p.length))}}return[h,s]}var Ps=De(Ms(),1),oi=Symbol("aui.parse-partial-json-object.meta"),bc=t=>t?.[oi],ir=t=>{if(t.length===0)return{[oi]:{state:"partial",partialPath:[]}};try{let e=Ps.default.parse(t);if(typeof e!="object"||e===null)throw new Error("argsText is expected to be an object");return e[oi]={state:"complete",partialPath:[]},e}catch{try{let[e,r]=vc(t),o=Ps.default.parse(e);if(typeof o!="object"||o===null)throw new Error("argsText is expected to be an object");return o[oi]={state:"partial",partialPath:r},o}catch{return}}},wc=(t,e,r)=>{if(typeof t!="object"||t===null)return e.state;if(e.state==="complete")return"complete";if(r.length===0)return e.state;let[o,...i]=r;if(!Object.hasOwn(t,o))return"partial";let[s,...n]=e.partialPath;if(o!==s)return"complete";let a=t[o];return wc(a,{state:"partial",partialPath:n},i)},Nt=(t,e)=>{let r=bc(t);if(!r)throw new Error("unable to determine object state");return wc(t,r,e.map(String))};async function*Pp(){let t=this.getReader(),e=!0;try{for(;;){let r;try{r=await t.read()}catch(i){throw e=!1,i}if(r.done){e=!1;break}let{value:o}=r;yield o}}finally{try{e&&await t.cancel()}finally{t.releaseLock()}}}function ii(t){var e;return t[e=Symbol.asyncIterator]??(t[e]=Pp),t}function xc(t,e,r){try{let o=t();if(typeof o=="object"&&o!==null&&"then"in o)return o.then(e,r);e(o)}catch(o){r(o)}}function Br(t,e){let r=t;for(let o of e){if(r==null||!Object.hasOwn(r,o))return;r=r[o]}return r}var Dp=class{constructor(t,e,r){m(this,"resolve");m(this,"reject");m(this,"disposed",!1);m(this,"fieldPath");this.resolve=t,this.reject=e,this.fieldPath=r}get isDisposed(){return this.disposed}update(t){if(!this.disposed)try{if(Nt(t,this.fieldPath)==="complete"){let e=Br(t,this.fieldPath);e!==void 0&&(this.resolve(e),this.dispose())}}catch(e){this.reject(e),this.dispose()}}end(t){if(!this.disposed)try{let e=Br(t,this.fieldPath);this.resolve(e)}catch(e){this.reject(e)}finally{this.dispose()}}dispose(){this.disposed=!0}},Op=class{constructor(t,e){m(this,"controller");m(this,"disposed",!1);m(this,"fieldPath");this.controller=t,this.fieldPath=e}get isDisposed(){return this.disposed}update(t){if(!this.disposed)try{let e=Br(t,this.fieldPath);e!==void 0&&this.controller.enqueue(e),Nt(t,this.fieldPath)==="complete"&&(this.controller.close(),this.dispose())}catch(e){this.controller.error(e),this.dispose()}}end(){this.disposed||(this.controller.close(),this.dispose())}dispose(){this.disposed=!0}},Bp=class{constructor(t,e){m(this,"controller");m(this,"disposed",!1);m(this,"fieldPath");m(this,"lastValue");this.controller=t,this.fieldPath=e}get isDisposed(){return this.disposed}update(t){if(!this.disposed)try{let e=Br(t,this.fieldPath);if(e!==void 0&&typeof e=="string"){let r=e.substring(this.lastValue?.length||0);this.lastValue=e,this.controller.enqueue(r)}Nt(t,this.fieldPath)==="complete"&&(this.controller.close(),this.dispose())}catch(e){this.controller.error(e),this.dispose()}}end(){this.disposed||(this.controller.close(),this.dispose())}dispose(){this.disposed=!0}},Np=class{constructor(t,e){m(this,"controller");m(this,"disposed",!1);m(this,"fieldPath");m(this,"nextIndex",0);this.controller=t,this.fieldPath=e}get isDisposed(){return this.disposed}update(t){if(!this.disposed)try{let e=Br(t,this.fieldPath);if(!Array.isArray(e))return;for(;this.nextIndex<e.length;this.nextIndex++){let r=[...this.fieldPath,this.nextIndex];if(Nt(t,r)!=="complete")break;this.controller.enqueue(e[this.nextIndex])}Nt(t,this.fieldPath)==="complete"&&(this.controller.close(),this.dispose())}catch(e){this.controller.error(e),this.dispose()}}end(){this.disposed||(this.controller.close(),this.dispose())}dispose(){this.disposed=!0}},Vp=class{constructor(t){m(this,"argTextDeltas");m(this,"handles",new Set);m(this,"accumulatedText","");m(this,"parsedTextLength",-1);m(this,"args");m(this,"finished",!1);this.argTextDeltas=t,this.processStream()}async processStream(){try{let t=this.argTextDeltas.getReader();for(;;){let{value:e,done:r}=await t.read();if(r)break;this.accumulatedText+=e,this.handles.size!==0&&this.parseCurrentArgs()&&this.updateHandles()}}catch(t){console.error("Error processing argument stream:",t)}finally{this.finished=!0;for(let t of this.handles)t.end(this.args);this.handles.clear()}}parseCurrentArgs(){if(this.parsedTextLength===this.accumulatedText.length)return!1;let t=ir(this.accumulatedText);return this.parsedTextLength=this.accumulatedText.length,t===void 0?(this.args??(this.args=ir("")),!1):(this.args=t,!0)}updateHandles(){for(let t of this.handles)t.update(this.args),t.isDisposed&&this.handles.delete(t)}activateHandle(t){if(this.parseCurrentArgs(),t.update(this.args),!t.isDisposed){if(this.finished){t.end(this.args);return}this.handles.add(t)}}get(...t){return new Promise((e,r)=>{let o=new Dp(e,r,t);this.activateHandle(o)})}streamValues(...t){let e=t,r,o=new ReadableStream({start:i=>{r=new Op(i,e),this.activateHandle(r)},cancel:()=>{r&&(r.dispose(),this.handles.delete(r))}});return ii(o)}streamText(...t){let e=t,r,o=new ReadableStream({start:i=>{r=new Bp(i,e),this.activateHandle(r)},cancel:()=>{r&&(r.dispose(),this.handles.delete(r))}});return ii(o)}forEach(...t){let e=t,r,o=new ReadableStream({start:i=>{r=new Np(i,e),this.activateHandle(r)},cancel:()=>{r&&(r.dispose(),this.handles.delete(r))}});return ii(o)}},Lp=class{constructor(t){m(this,"promise");this.promise=t}get(){return this.promise}},_c=class{constructor(){m(this,"args");m(this,"response");m(this,"writable");m(this,"resolve");m(this,"argsText","");m(this,"result",{get:async()=>(await this.response.get()).result});let t=new TransformStream;this.writable=t.writable,this.args=new Vp(t.readable);let{promise:e,resolve:r}=rr();this.resolve=r,this.response=new Lp(e)}async appendArgsTextDelta(t){let e=this.writable.getWriter();try{await e.write(t)}catch(r){console.warn(r)}finally{e.releaseLock()}this.argsText+=t}async finishArgsText(){let t=this.writable.getWriter();try{await t.close()}catch(e){console.warn(e)}finally{t.releaseLock()}}setResponse(t){this.resolve(t)}};var yc=De(Ms(),1),$p=Symbol.for("assistant-stream.tool-execution-id"),Ds=(t,e,r,o,i)=>{try{let s=e?.(r,o,i);Promise.resolve(s).catch(n=>{console.error(`[assistant-stream] ${t} callback threw an error`,n)})}catch(s){console.error(`[assistant-stream] ${t} callback threw an error`,s)}},sr=t=>t.join(","),Os=(t,e)=>{let r={...t};return Object.defineProperty(r,$p,{value:e,enumerable:!0}),r},Sc=class extends mc{constructor(t){let e=t,r=new Map,o=new Map,i=new Set,s=new Map,n=0;super(a=>{let c=new TransformStream({async transform(l,u){let h=s.get(sr(l.path));switch((l.type!=="part-finish"||l.meta.type!=="tool-call")&&u.enqueue(h?Os(l,h):l),l.type){case"part-start":{let d=n;if(n+=1,l.part.type==="tool-call"){let p=new _c,f=Symbol();s.set(String(d),f),o.set(f,p),e.streamCall({reader:p,toolCallId:l.part.toolCallId,toolName:l.part.toolName,executionId:f})}break}case"text-delta":if(l.meta.type==="tool-call"){let d=s.get(sr(l.path)),p=d?o.get(d):void 0;if(!p)throw new Error("No controller found for tool call");await p.appendArgsTextDelta(l.textDelta)}break;case"result":{if(l.meta.type!=="tool-call")break;let d=s.get(sr(l.path)),p=d?o.get(d):void 0;if(!p)throw new Error("No controller found for tool call");p.setResponse(new Re({result:l.result,artifact:l.artifact,isError:l.isError,modelContent:l.modelContent,messages:l.messages})),i.add(d);break}case"tool-call-args-text-finish":{if(l.meta.type!=="tool-call")break;let{toolCallId:d,toolName:p}=l.meta,f=s.get(sr(l.path)),v=f?o.get(f):void 0;if(!v)throw new Error("No controller found for tool call");if(await v.finishArgsText(),i.has(f))break;let b=!1,y=xc(()=>{let _;try{_=yc.default.parse(v.argsText)}catch(I){throw new Error(`Function parameter parsing failed. ${JSON.stringify(I.message)}`)}let A=e.execute({toolCallId:d,toolName:p,args:_,executionId:f});return A!==void 0&&(b=!0,Ds("onExecutionStart",e.onExecutionStart,d,p,f)),A},_=>{if(b&&Ds("onExecutionEnd",e.onExecutionEnd,d,p,f),_===void 0)return;let A=new Re({artifact:_.artifact,result:_.result,isError:_.isError,messages:_.messages,modelContent:_.modelContent});v.setResponse(A),Te(u,Os({type:"result",path:l.path,...A},f))},_=>{b&&Ds("onExecutionEnd",e.onExecutionEnd,d,p,f);let A=new Re({result:String(_),isError:!0});v.setResponse(A),Te(u,Os({type:"result",path:l.path,...A},f))});y&&r.set(f,y);break}case"part-finish":{if(l.meta.type!=="tool-call")break;let d=s.get(sr(l.path)),p=d?r.get(d):void 0,f=()=>{d&&(r.delete(d),o.delete(d),i.delete(d),s.delete(sr(l.path)))};p?p.then(()=>{f(),Te(u,l)}):(f(),u.enqueue(l))}}},async flush(){await Promise.all(r.values())}});return a.pipeThrough(new Or).pipeThrough(c)})}};var Cc=Symbol.for("assistant-stream.tool-execution-id"),ni=Symbol("assistant-stream.tool-aborted"),Fp=t=>typeof t=="object"&&t!==null&&"~standard"in t&&t["~standard"].version===1,Up=t=>typeof t?.then=="function",Tc=async(t,e,r=!1)=>{let o,i=new Promise(s=>{o=()=>{r?queueMicrotask(()=>queueMicrotask(()=>s(ni))):s(ni)},e.aborted?o():e.addEventListener("abort",o,{once:!0})});try{return await Promise.race([t,i])}finally{e.removeEventListener("abort",o)}},si=()=>new Re({result:"Tool execution was cancelled.",isError:!0});function jp(t,e,r,o){let i=t?.[r.toolName];return i?.execute?(async n=>{if(e.aborted)return si();let a=n;if(Fp(i.parameters)){let u=i.parameters["~standard"].validate(r.args),h=Up(u)?await Tc(u,e):u;if(h===ni)return si();h.issues&&(a=i.experimental_onSchemaValidationError??(()=>{throw new Error(`Function parameter validation failed. ${JSON.stringify(h.issues)}`)}))}if(e.aborted)return si();let c=(async()=>{let u={toolCallId:r.toolCallId,abortSignal:e,human:p=>o(r.toolCallId,p,r.executionId),[Cc]:r.executionId},h=await a(r.args,u),d=Re.toResponse(h);if(i.toModelOutput&&!d.isError&&d.modelContent===void 0)try{let p=await i.toModelOutput({toolCallId:r.toolCallId,input:r.args,output:d.result});return new Re({result:d.result,artifact:d.artifact,isError:d.isError,messages:d.messages,modelContent:p})}catch(p){console.warn(`[assistant-stream] tool "${r.toolName}" toModelOutput threw; falling back to default projection.`,p)}return d})(),l=await Tc(c,e,!0);return l===ni?si():l})(i.execute):void 0}function zp(t,e,r,o,i){let s={toolCallId:o.toolCallId,abortSignal:e,human:n=>i(o.toolCallId,n,o.executionId),[Cc]:o.executionId};t?.[o.toolName]?.streamCall?.(r,s)}function Bs(t,e,r,o){let i=typeof t=="function"?t:()=>t,s=typeof e=="function"?e:()=>e,n=o,a=r,c={execute:l=>jp(i(),s(),l,a),streamCall:({reader:l,...u})=>zp(i(),s(),l,u,a),onExecutionStart:n?.onExecutionStart,onExecutionEnd:n?.onExecutionEnd};return new Sc(c)}function qp(t){let e=t.metadata;if(!e||typeof e!="object")return;let r=e.custom;if(!r||typeof r!="object")return;let o=r.interactables;return Array.isArray(o)?o:void 0}function Hp(t){return`update_${t.replace(/[^a-zA-Z0-9_-]/g,"_")}`}var Ns=t=>{if(!ce(t))return;let e=t.id;return typeof e=="string"||typeof e=="number"?e:void 0};function Gp(t,e,r){let o=Array.isArray(e.set)?[...e.set]:[...t];if(e.clear===!0&&(o=[]),Array.isArray(e.remove)&&e.remove.length>0){let s=new Set(e.remove);o=o.filter(n=>{let a=Ns(n);return a!==void 0?!s.has(a):!s.has(n)})}let i=e.update;if(Array.isArray(i)&&i.length>0){let s=new Map;for(let n of i){let a=Ns(n);a!==void 0&&!Number.isNaN(a)&&!s.has(a)&&s.set(a,n)}o=o.map(n=>{let a=Ns(n);if(a===void 0||!ce(n))return n;let c=s.get(a);return c?{...n,...c}:n})}if(Array.isArray(e.add)&&e.add.length>0){let s=r?e.add.map(n=>{if(!ce(n)||n.id!==void 0)return n;let a=r();return a===void 0?n:{...n,id:a}}):e.add;o=[...o,...s]}return o}function Vs(t,e,r){if(!ce(t)||!ce(e))return e;let o=ce(r?.arrayBaseline)?r.arrayBaseline:t,i=Object.entries(t);for(let[s,n]of Object.entries(e)){let a=o[s];if(Array.isArray(a)&&ce(n)){let c=r?.idFactory&&(r.idKeyedFields===void 0||r.idKeyedFields.has(s))?()=>r.idFactory?.(s):void 0;i.push([s,Gp(a,n,c)])}else i.push([s,n])}return Object.fromEntries(i)}function Kp(t,e){if(!ce(t)||!ce(e))return;for(let i of Object.keys(t))if(!Object.hasOwn(e,i))return;let r=[];for(let[i,s]of Object.entries(e))(!Object.hasOwn(t,i)||!Dr(t[i],s))&&r.push([i,s]);let o=r.length;if(!(o===0||o===Object.keys(e).length))return Object.fromEntries(r)}var Qp=t=>{if(!t||typeof t!="object")return;let e=t;return e.type==="tool-call"?e:void 0},Wp=(t,e)=>{if(!t.args||typeof t.args!="object")return!1;let r=ce(t.result)?t.result:void 0;if(r?.success===!1)return!1;if(typeof r?.id=="string")return r.id===e;let o=t.args.id;return o===e||o===void 0},Jp=t=>{let e=ce(t)?t.addedItemIds:void 0;if(!ce(e))return;let r=new Map;for(let[o,i]of Object.entries(e)){if(!Array.isArray(i))continue;let s=i.filter(n=>typeof n=="string");s.length>0&&r.set(o,s)}if(r.size!==0)return o=>r.get(o)?.shift()},Ic=new WeakMap;function Yp(t,e,r){let o=Ic.get(t);o||(o=new Map,Ic.set(t,o));let i=o.get(r);i||(i=new Map,o.set(r,i));let s=i.get(e);if(s)return s;let n=Hp(r),a=[],c=()=>a[a.length-1];for(let l of t){if(l.role==="user"){let u=qp(l)?.find(h=>h.id===e);if(!u)continue;if(u.partial){let h=c();h&&a.push({state:Vs(h.state,u.state),origin:"user-edit"})}else a.push({state:u.state,origin:"user-edit"});continue}if(l.role==="assistant")for(let u of l.content??[]){let h=Qp(u);if(h){if(h.toolCallId===e&&h.toolName===r)h.args&&typeof h.args=="object"&&a.push({state:h.args,origin:"create",toolCallId:e});else if(h.toolName===n&&Wp(h,e)){let d=c();if(d){let{id:p,...f}=h.args,v=Jp(h.result);a.push({state:v?Vs(d.state,f,{idFactory:v}):Vs(d.state,f),origin:"update",toolCallId:h.toolCallId})}}}}}return i.set(e,a),a}function Xp(t,e,r){let o=Yp(t,e,r),i=o[o.length-1];return i?{state:i.state}:void 0}function Ec(t,e){if(!t)return;let{interactables:r,...o}=t,i={...o};if(Array.isArray(r)){let s=[];for(let n of r){let a=Xp(e,n.id,n.name);if(!a){s.push({id:n.id,name:n.name,state:n.state});continue}if(Dr(n.state,a.state))continue;let c=Kp(a.state,n.state);s.push(c?{id:n.id,name:n.name,state:c,partial:!0}:{id:n.id,name:n.name,state:n.state})}s.length&&(i.interactables=s)}return Object.keys(i).length?i:void 0}var Zp=ge(null);var Rc=()=>rt(Zp);var ct=Symbol("innerMessage"),Ls=Symbol("innerMessages"),eh=[],$s=(t,e)=>{ct in t||(t[ct]=e)},Ac=t=>{let e="messages"in t?t.messages:t,r=e[Ls]||e[ct];return r?Array.isArray(r)?r:(e[Ls]=[r],e[Ls]):eh},kc="__external_store_fallback_";var Ae=ri("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7);function Mc(t){let e=t.match(/^data:([^;,]+)(?:;[^;,]+)*;base64,(.*)$/i);return e?{mimeType:e[1].toLowerCase(),data:e[2]}:null}var Fs=(t,e)=>{if(t.startsWith("data-"))return{type:"data",name:t.substring(5),data:e}},nr=(t,e,r)=>{let{role:o,id:i,createdAt:s,attachments:n,status:a,metadata:c}=t,l={id:i??e,createdAt:s??new Date},u=typeof t.content=="string"?[{type:"text",text:t.content}]:t.content,h=({image:d,...p})=>typeof d!="string"?null:Mc(d)?.mimeType.startsWith("image/")?{...p,image:d}:/^(https:\/\/|blob:)/i.test(d)?{...p,image:d}:(console.warn("Invalid image data format detected"),null);if(o!=="user"&&n?.length)throw new Error("attachments are only supported for user messages");if(o!=="assistant"&&a)throw new Error("status is only supported for assistant messages");if(o!=="assistant"&&c?.steps)throw new Error("metadata.steps is only supported for assistant messages");switch(o){case"assistant":return{...l,role:o,content:u.map(d=>{let p=d.type;switch(p){case"text":return d.text?.trim()?d:null;case"reasoning":return!d.text?.trim()&&!d.unstable_summary?.trim()?null:d;case"file":case"source":return d;case"image":return h(d);case"data":return d;case"generative-ui":return d;case"tool-call":{let{parentId:f,messages:v,...b}=d,y={...b,toolCallId:d.toolCallId||`tool-${Ae()}`,...f!==void 0&&{parentId:f},...v!==void 0&&{messages:v}};return d.args?{...y,args:d.args,argsText:d.argsText??JSON.stringify(d.args)}:{...y,args:ir(d.argsText??"")??{},argsText:d.argsText??""}}default:{let f=Fs(p,d.data);if(f)return f;throw new Error(`Unsupported assistant message part type: ${p}`)}}}).filter(d=>!!d),status:a??r,metadata:{unstable_state:c?.unstable_state??null,unstable_annotations:c?.unstable_annotations??[],unstable_data:c?.unstable_data??[],custom:c?.custom??{},steps:c?.steps??[],...c?.timing&&{timing:c.timing},...c?.submittedFeedback&&{submittedFeedback:c.submittedFeedback},...c?.isOptimistic&&{isOptimistic:!0},...c?.modality&&{modality:c.modality}}};case"user":return{...l,role:o,content:u.map(d=>{let p=d.type;switch(p){case"text":case"image":case"audio":case"file":case"data":return d;default:{let f=Fs(p,d.data);if(f)return f;throw new Error(`Unsupported user message part type: ${p}`)}}}),attachments:(n??[]).map(d=>({...d,content:d.content.map(p=>Fs(p.type,p.data)??p)})),metadata:{custom:c?.custom??{},...c?.isOptimistic&&{isOptimistic:!0},...c?.modality&&{modality:c.modality}}};case"system":if(u.length!==1||u[0].type!=="text")throw new Error("System messages must have exactly one text message part.");return{...l,role:o,content:u,metadata:{custom:c?.custom??{}}};default:throw new Error(`Unknown message role: ${o}`)}};var Dc=t=>t.type==="tool-call"&&t.result===void 0,th=t=>{if(t.type!=="tool-call"||t.result!==void 0)return!1;let e=t.messages?.at(-1);return e?.role==="assistant"&&e.status.type==="running"},Oc=t=>t.type!=="tool-call"||t.result!==void 0?!1:t.interrupt!=null||t.approval!=null&&t.approval.approved===void 0&&t.approval.resolution===void 0,Vt=Symbol("autoStatus"),Pc=Object.freeze(Object.assign({type:"running"},{[Vt]:!0})),rh=Object.freeze(Object.assign({type:"complete",reason:"unknown"},{[Vt]:!0})),oh=Object.freeze(Object.assign({type:"incomplete",reason:"cancelled"},{[Vt]:!0})),ih=Object.freeze(Object.assign({type:"requires-action",reason:"tool-calls"},{[Vt]:!0})),sh=Object.freeze(Object.assign({type:"requires-action",reason:"interrupt"},{[Vt]:!0})),Bc=t=>t[Vt]===!0,Nc=(t,e,r,o,i,s,n)=>t&&i?Object.assign({type:"incomplete",reason:"error",error:i},{[Vt]:!0}):t&&e?Pc:r?sh:n&&!s?Pc:o?ih:s?oh:rh,Us=t=>Nc(!1,!1,typeof t!="string"&&t.some(Oc),typeof t!="string"&&t.some(Dc)),js=(t,e,r)=>Nc(e,r,typeof t!="string"&&t.some(Oc),typeof t!="string"&&t.some(Dc),void 0,void 0,typeof t!="string"&&t.some(th));var zs=class{constructor(){m(this,"cache",new WeakMap)}convertMessages(t,e){return t.map((r,o)=>{let i=e(this.cache.get(r),r,o);return this.cache.set(r,i),i})}};var qs=(t,e)=>{if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0};var Vc=require("react/jsx-runtime"),Hs=t=>{let e=g(6),{index:r,children:o}=t,i=F(),s;e[0]!==r?(s=oe({attachment:ie({source:"message",query:{type:"index",index:r},get:c=>c.message.attachment({index:r})})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,Vc.jsx)(ae,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var Lc=require("react/jsx-runtime"),Gs=t=>{let e=g(6),{index:r,children:o}=t,i=F(),s;e[0]!==r?(s=oe({message:ie({source:"thread",query:{type:"index",index:r},get:c=>c.thread.message({index:r})}),composer:ie({source:"message",query:{},get:c=>c.thread.message({index:r}).composer()})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,Lc.jsx)(ae,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var $c=require("react/jsx-runtime"),Lt=t=>{let e=g(6),{index:r,children:o}=t,i=F(),s;e[0]!==r?(s=oe({part:ie({source:"message",query:{type:"index",index:r},get:c=>c.message.part({index:r})})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,$c.jsx)(ae,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var Fc=require("react/jsx-runtime"),nh=t=>{let e=g(7),{text:r,isRunning:o}=t,i;e[0]!==o?(i=o?{type:"running"}:{type:"complete"},e[0]=o,e[1]=i):i=e[1];let s;e[2]!==i||e[3]!==r?(s={type:"text",text:r,status:i},e[2]=i,e[3]=r,e[4]=s):s=e[4];let n=s,a;return e[5]!==n?(a={getState:()=>n,addToolResult:ch,resumeToolCall:lh,respondToToolApproval:uh},e[5]=n,e[6]=a):a=e[6],a},ah=V(nh),$t=t=>{let e=g(7),{text:r,isRunning:o,children:i}=t,s=o===void 0?!1:o,n=F(),a;e[0]!==s||e[1]!==r?(a=oe({part:ah({text:r,isRunning:s})}),e[0]=s,e[1]=r,e[2]=a):a=e[2];let c=a,l;return e[3]!==n||e[4]!==i||e[5]!==c?(l=(0,Fc.jsx)(ae,{extends:n,config:c,children:i}),e[3]=n,e[4]=i,e[5]=c,e[6]=l):l=e[6],l};function ch(){throw new Error("Not supported")}function lh(){throw new Error("Not supported")}function uh(){throw new Error("Not supported")}var Uc=t=>{for(let e of t)if(e?.status.type==="running")return Qo;return t.at(-1)?.status??qe},jc=(t,e)=>{let r={running:0,complete:0,incomplete:0,requiresAction:0},o=qe,i=!1;for(let s of e)switch(o=t[s]?.status??qe,o.type){case"running":r.running++,i=!0;break;case"complete":r.complete++;break;case"incomplete":r.incomplete++;break;case"requires-action":r.requiresAction++}return{status:i?Qo:o,counts:r}};var dh=t=>{let e=g(11),{parts:r,getMessagePart:o}=t,[i,s]=U(!0),n;e[0]!==r?(n=Uc(r),e[0]=r,e[1]=n):n=e[1];let a=n,c;e[2]!==i||e[3]!==r||e[4]!==a?(c={parts:r,collapsed:i,status:a},e[2]=i,e[3]=r,e[4]=a,e[5]=c):c=e[5];let l=c,u;e[6]!==l?(u=()=>l,e[6]=l,e[7]=u):u=e[7];let h;return e[8]!==o||e[9]!==u?(h={getState:u,setCollapsed:s,part:o},e[8]=o,e[9]=u,e[10]=h):h=e[10],h},zc=V(dh);var qc=require("react/jsx-runtime"),Hc=t=>{let e=g(4),{startIndex:r,endIndex:o,children:i}=t,s=R(mh).slice(r,o+1),n=F(),a=oe({chainOfThought:zc({parts:s,getMessagePart:l=>{let{index:u}=l;if(u<0||u>=s.length)throw new Error(`ChainOfThought part index ${u} is out of bounds (0..${s.length-1})`);return n.message.part({index:r+u})}})}),c;return e[0]!==i||e[1]!==a||e[2]!==n?(c=(0,qc.jsx)(ae,{extends:n,config:a,children:i}),e[0]=i,e[1]=a,e[2]=n,e[3]=c):c=e[3],c};function mh(t){return t.message.parts}var Gc=require("react/jsx-runtime"),Ks=t=>{let e=g(6),{index:r,children:o}=t,i=F(),s;e[0]!==r?(s=oe({suggestion:ie({source:"suggestions",query:{index:r},get:c=>c.suggestions.suggestion({index:r})})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,Gc.jsx)(ae,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var Wc=Symbol.for("assistant-ui.message-not-sent"),Kc,Qc,CC=class extends(Qc=Error,Kc=Wc,Qc){constructor(e="The message was not sent."){super(e);m(this,Kc,!0);this.name="MessageNotSentError"}},ai=t=>typeof t=="object"&&t!==null&&Wc in t;var Jc=class{constructor(t){m(this,"_core");this._core=t,this.__internal_bindMethods()}get path(){return this._core.path}__internal_bindMethods(){this.getState=this.getState.bind(this),this.remove=this.remove.bind(this),this.subscribe=this.subscribe.bind(this)}getState(){return this._core.getState()}subscribe(t){return this._core.subscribe(t)}},Yc=class extends Jc{constructor(e,r){super(e);m(this,"_composerApi");this._composerApi=r}remove(){let e=this._composerApi.getState();if(!e)throw new Error("Composer is not available");return e.removeAttachment(this.getState().id)}},Xc=class extends Yc{get source(){return"thread-composer"}},Zc=class extends Yc{get source(){return"edit-composer"}},el=class extends Jc{get source(){return"message"}remove(){throw new Error("Message attachments cannot be removed")}};var ci=Object.freeze([]),tl=Object.freeze({}),ph=t=>Object.freeze({type:"thread",isEditing:t?.isEditing??!1,canCancel:t?.canCancel??!1,canSend:t?.canSend??!1,isEmpty:t?.isEmpty??!0,attachments:t?.attachments??ci,text:t?.text??"",role:t?.role??"user",runConfig:t?.runConfig??tl,attachmentAccept:t?.attachmentAccept??"",dictation:t?.dictation,quote:t?.quote,queue:t?.queue??ci,value:t?.text??""}),hh=t=>Object.freeze({type:"edit",isEditing:t?.isEditing??!1,canCancel:t?.canCancel??!1,canSend:t?.canSend??!1,isEmpty:t?.isEmpty??!0,text:t?.text??"",role:t?.role??"user",attachments:t?.attachments??ci,runConfig:t?.runConfig??tl,attachmentAccept:t?.attachmentAccept??"",dictation:t?.dictation,quote:t?.quote,queue:t?.queue??ci,parentId:t?.parentId??null,sourceId:t?.sourceId??null,value:t?.text??""}),rl=class{constructor(t){m(this,"_core");m(this,"_eventSubscriptionSubjects",new Map);this._core=t}get path(){return this._core.path}__internal_bindMethods(){this.setText=this.setText.bind(this),this.setRunConfig=this.setRunConfig.bind(this),this.getState=this.getState.bind(this),this.subscribe=this.subscribe.bind(this),this.addAttachment=this.addAttachment.bind(this),this.reset=this.reset.bind(this),this.clearAttachments=this.clearAttachments.bind(this),this.send=this.send.bind(this),this.cancel=this.cancel.bind(this),this.steerQueueItem=this.steerQueueItem.bind(this),this.moveQueueItem=this.moveQueueItem.bind(this),this.removeQueueItem=this.removeQueueItem.bind(this),this.setRole=this.setRole.bind(this),this.getAttachmentByIndex=this.getAttachmentByIndex.bind(this),this.startDictation=this.startDictation.bind(this),this.stopDictation=this.stopDictation.bind(this),this.setQuote=this.setQuote.bind(this),this.unstable_on=this.unstable_on.bind(this)}setText(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.setText(t)}setRunConfig(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.setRunConfig(t)}addAttachment(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");return e.addAttachment(t)}reset(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");return t.reset()}clearAttachments(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");return t.clearAttachments()}send(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.send(t)}cancel(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");t.cancel()}steerQueueItem(t){this.moveQueueItem(t,{lane:"steer",insertAfter:null})}moveQueueItem(t,e){let r=this._core.getState();if(!r)throw new Error("Composer is not available");r.moveQueueItem(t,e)}removeQueueItem(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.removeQueueItem(t)}setRole(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.setRole(t)}startDictation(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");t.startDictation()}stopDictation(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");t.stopDictation()}setQuote(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.setQuote(t)}subscribe(t){return this._core.subscribe(t)}unstable_on(t,e){let r=this._eventSubscriptionSubjects.get(t);return r||(r=new Fo({event:t,binding:this._core}),this._eventSubscriptionSubjects.set(t,r)),r.subscribe(e)}},ol=class extends rl{constructor(e){let r=new kr({path:e.path,getState:()=>ph(e.getState()),subscribe:o=>e.subscribe(o)});super({path:e.path,getState:()=>e.getState(),subscribe:o=>r.subscribe(o)});m(this,"_getState");this._getState=r.getState.bind(r),this.__internal_bindMethods()}get path(){return this._core.path}get type(){return"thread"}getState(){return this._getState()}getAttachmentByIndex(e){return new Xc(new we({path:{...this.path,attachmentSource:"thread-composer",attachmentSelector:{type:"index",index:e},ref:`${this.path.ref}.attachments[${e}]`},getState:()=>{let r=this.getState().attachments[e];return r?{...r,source:"thread-composer"}:be},subscribe:r=>this._core.subscribe(r)}),this._core)}},il=class extends rl{constructor(e,r){let o=new kr({path:e.path,getState:()=>hh(e.getState()),subscribe:i=>e.subscribe(i)});super({path:e.path,getState:()=>e.getState(),subscribe:i=>o.subscribe(i)});m(this,"_getState");m(this,"_beginEdit");this._beginEdit=r,this._getState=o.getState.bind(o),this.__internal_bindMethods()}get path(){return this._core.path}get type(){return"edit"}__internal_bindMethods(){super.__internal_bindMethods(),this.beginEdit=this.beginEdit.bind(this)}getState(){return this._getState()}beginEdit(){this._beginEdit()}getAttachmentByIndex(e){return new Zc(new we({path:{...this.path,attachmentSource:"edit-composer",attachmentSelector:{type:"index",index:e},ref:`${this.path.ref}.attachments[${e}]`},getState:()=>{let r=this.getState().attachments[e];return r?{...r,source:"edit-composer"}:be},subscribe:r=>this._core.subscribe(r)}),this._core)}};var xt=t=>t.content.filter(e=>e.type==="text").map(e=>e.text).join(`

`);var fh="ui://",sl=t=>!!t?.startsWith(fh),nl=t=>t.display==="text"||t.allowFreeform===!0;var al={"allow-once":!0,"allow-always":!0,"reject-once":!1,"reject-always":!1},cl=(t,e)=>{let r=e.text;if(r!==void 0&&!nl(t))throw new Error(`Tool approval "${t.id}" does not accept a free-form answer; the request must declare display "text" or allowFreeform`);let o,i;if("optionId"in e){let s=t.options?.find(n=>n.id===e.optionId);if(!s)throw new Error(`Tool approval has no option with id "${e.optionId}"`);if("approved"in e)o=e.approved;else{if(!Object.hasOwn(al,s.kind))throw new Error(`Tool approval option "${s.id}" has a custom kind "${s.kind}"; respond with an explicit approved value instead`);o=al[s.kind]}i=s.id}else if("approved"in e)o=e.approved;else{if(t.display!=="text"&&t.display!=="select")throw new Error(`Tool approval "${t.id}" is a decision, not a question; respond with an explicit approved value, optionally alongside the answer`);o=!0}return{approvalId:t.id,approved:o,...i!==void 0&&{optionId:i},...r!==void 0&&{text:r},...e.reason!=null&&{reason:e.reason}}};var Qs=class{constructor(t,e,r){m(this,"contentBinding");m(this,"messageApi");m(this,"threadApi");this.contentBinding=t,this.messageApi=e,this.threadApi=r,this.__internal_bindMethods()}get path(){return this.contentBinding.path}__internal_bindMethods(){this.addToolResult=this.addToolResult.bind(this),this.resumeToolCall=this.resumeToolCall.bind(this),this.respondToToolApproval=this.respondToToolApproval.bind(this),this.getState=this.getState.bind(this),this.subscribe=this.subscribe.bind(this)}getState(){return this.contentBinding.getState()}addToolResult(t){let e=this.contentBinding.getState();if(!e)throw new Error("Message part is not available");if(e.type!=="tool-call")throw new Error("Tried to add tool result to non-tool message part");if(!this.messageApi)throw new Error("Message API is not available. This is likely a bug in assistant-ui.");if(!this.threadApi)throw new Error("Thread API is not available");let r=this.messageApi.getState();if(!r)throw new Error("Message is not available");let o=e.toolName,i=e.toolCallId,s=Re.toResponse(t);this.threadApi.getState().addToolResult({messageId:r.id,toolName:o,toolCallId:i,result:s.result,isError:s.isError,...s.artifact!==void 0&&{artifact:s.artifact},...s.modelContent!==void 0&&{modelContent:s.modelContent}})}resumeToolCall(t){let e=this.contentBinding.getState();if(!e)throw new Error("Message part is not available");if(e.type!=="tool-call")throw new Error("Tried to resume tool call on non-tool message part");if(!this.threadApi)throw new Error("Thread API is not available");let r=e.toolCallId;this.threadApi.getState().resumeToolCall({toolCallId:r,payload:t})}respondToToolApproval(t){let e=this.contentBinding.getState();if(!e)throw new Error("Message part is not available");if(e.type!=="tool-call")throw new Error("Tried to respond to tool approval on non-tool message part");if(!e.approval||e.approval.approved!==void 0||e.approval.resolution!==void 0)throw new Error("Tool call has no pending approval");if(!this.threadApi)throw new Error("Thread API is not available");return this.threadApi.getState().respondToToolApproval(cl(e.approval,t))}subscribe(t){return this.contentBinding.subscribe(t)}};var ll=(t,e)=>{let r=t.content[e];if(!r)return be;let o=Wo(t,e,r);return Object.freeze({...r,[ct]:r[ct],status:o})},ul=class{constructor(t,e){m(this,"_core");m(this,"_threadBinding");m(this,"composer");m(this,"_getEditComposerRuntimeCore",()=>this._threadBinding.getState().getEditComposer(this._core.getState().id));this._core=t,this._threadBinding=e,this.composer=new il(new Bt({path:{...this.path,ref:`${this.path.ref}.composer`,composerSource:"edit"},getState:this._getEditComposerRuntimeCore,subscribe:r=>this._threadBinding.subscribe(r)}),()=>this._threadBinding.getState().beginEdit(this._core.getState().id)),this.__internal_bindMethods()}get path(){return this._core.path}__internal_bindMethods(){this.reload=this.reload.bind(this),this.delete=this.delete.bind(this),this.getState=this.getState.bind(this),this.subscribe=this.subscribe.bind(this),this.getMessagePartByIndex=this.getMessagePartByIndex.bind(this),this.getMessagePartByToolCallId=this.getMessagePartByToolCallId.bind(this),this.getAttachmentByIndex=this.getAttachmentByIndex.bind(this),this.unstable_getCopyText=this.unstable_getCopyText.bind(this),this.speak=this.speak.bind(this),this.stopSpeaking=this.stopSpeaking.bind(this),this.submitFeedback=this.submitFeedback.bind(this),this.switchToBranch=this.switchToBranch.bind(this)}getState(){return this._core.getState()}delete(){let t=this._core.getState();return this._threadBinding.getState().deleteMessage(t.id)}reload(t={}){let e=this._getEditComposerRuntimeCore(),r=e??this._threadBinding.getState().composer,o=e??r,{runConfig:i=o.runConfig}=t,s=this._core.getState();if(s.role!=="assistant")throw new Error("Can only reload assistant messages");this._threadBinding.getState().startRun({parentId:s.parentId,sourceId:s.id,runConfig:i})}speak(){let t=this._core.getState();return this._threadBinding.getState().speak(t.id)}stopSpeaking(){let t=this._core.getState();if(this._threadBinding.getState().speech?.messageId===t.id)this._threadBinding.getState().stopSpeaking();else throw new Error("Message is not being spoken")}submitFeedback({type:t,comment:e}){let r=this._core.getState();this._threadBinding.getState().submitFeedback({messageId:r.id,type:t,...e!==void 0?{comment:e}:void 0})}switchToBranch({position:t,branchId:e}){let r=this._core.getState();if(e&&t)throw new Error("May not specify both branchId and position");if(!e&&!t)throw new Error("Must specify either branchId or position");let o=this._threadBinding.getState().getBranches(r.id),i=e;if(t==="previous"?i=o[r.branchNumber-2]:t==="next"&&(i=o[r.branchNumber]),!i)throw new Error("Branch not found");this._threadBinding.getState().switchToBranch(i)}unstable_getCopyText(){return xt(this.getState())}subscribe(t){return this._core.subscribe(t)}getMessagePartByIndex(t){if(t<0)throw new Error("Message part index must be >= 0");return new Qs(new we({path:{...this.path,ref:`${this.path.ref}.content[${t}]`,messagePartSelector:{type:"index",index:t}},getState:()=>ll(this.getState(),t),subscribe:e=>this._core.subscribe(e)}),this._core,this._threadBinding)}getMessagePartByToolCallId(t){return new Qs(new we({path:{...this.path,ref:`${this.path.ref}.content[toolCallId=${JSON.stringify(t)}]`,messagePartSelector:{type:"toolCallId",toolCallId:t}},getState:()=>{let e=this._core.getState(),r=e.content.findIndex(o=>o.type==="tool-call"&&o.toolCallId===t);return r===-1?be:ll(e,r)},subscribe:e=>this._core.subscribe(e)}),this._core,this._threadBinding)}getAttachmentByIndex(t){return new el(new we({path:{...this.path,ref:`${this.path.ref}.attachments[${t}]`,attachmentSource:"message",attachmentSelector:{type:"index",index:t}},getState:()=>{let e=this.getState().attachments?.[t];return e?{...e,source:"message"}:be},subscribe:e=>this._core.subscribe(e)}))}};var gh=t=>({parentId:t.parentId??null,sourceId:t.sourceId??null,runConfig:t.runConfig??{},...t.stream?{stream:t.stream}:{}}),vh=t=>({parentId:t.parentId??null,sourceId:t.sourceId??null,runConfig:t.runConfig??{}}),bh=(t,e)=>typeof e=="string"?{createdAt:new Date,parentId:t.at(-1)?.id??null,sourceId:null,runConfig:{},role:"user",content:[{type:"text",text:e}],attachments:[],metadata:{custom:{}}}:{createdAt:e.createdAt??new Date,parentId:e.parentId===void 0?t.at(-1)?.id??null:e.parentId,sourceId:e.sourceId??null,role:e.role??"user",content:e.content,attachments:e.attachments??[],metadata:e.metadata??{custom:{}},runConfig:e.runConfig??{},startRun:e.startRun},Ws=t=>{if(t.isRunning!==void 0)return t.isRunning;let e=t.messages.at(-1);return e?.role==="assistant"&&e.status.type==="running"},wh=(t,e)=>Object.freeze({threadId:e.id,metadata:e,capabilities:t.capabilities,isDisabled:t.isDisabled,isLoading:t.isLoading,isRunning:Ws(t),messages:t.messages,state:t.state,suggestions:t.suggestions,extras:t.extras,speech:t.speech,voice:t.voice}),dl=class{constructor(t,e){m(this,"_threadBinding");m(this,"_stateBinding");m(this,"composer");m(this,"_eventSubscriptionSubjects",new Map);let r=new we({path:t.path,getState:()=>wh(t.getState(),e.getState()),subscribe:o=>{let i=t.subscribe(o),s=e.subscribe(o);return()=>Lo([i,s])}});this._stateBinding=r,this._threadBinding={path:t.path,getState:()=>t.getState(),getStateState:()=>r.getState(),outerSubscribe:o=>t.outerSubscribe(o),subscribe:o=>t.subscribe(o)},this.composer=new ol(new Bt({path:{...this.path,ref:`${this.path.ref}.composer`,composerSource:"thread"},getState:()=>this._threadBinding.getState().composer,subscribe:o=>this._threadBinding.subscribe(o)})),this.__internal_bindMethods()}get path(){return this._threadBinding.path}get __internal_threadBinding(){return this._threadBinding}__internal_bindMethods(){this.append=this.append.bind(this),this.deleteMessage=this.deleteMessage.bind(this),this.resumeRun=this.resumeRun.bind(this),this.importExternalState=this.importExternalState.bind(this),this.exportExternalState=this.exportExternalState.bind(this),this.startRun=this.startRun.bind(this),this.cancelRun=this.cancelRun.bind(this),this.unstable_notifySessionReset=this.unstable_notifySessionReset.bind(this),this.stopSpeaking=this.stopSpeaking.bind(this),this.connectVoice=this.connectVoice.bind(this),this.disconnectVoice=this.disconnectVoice.bind(this),this.muteVoice=this.muteVoice.bind(this),this.unmuteVoice=this.unmuteVoice.bind(this),this.getVoiceVolume=this.getVoiceVolume.bind(this),this.subscribeVoiceVolume=this.subscribeVoiceVolume.bind(this),this.export=this.export.bind(this),this.import=this.import.bind(this),this.reset=this.reset.bind(this),this.getMessageByIndex=this.getMessageByIndex.bind(this),this.getMessageById=this.getMessageById.bind(this),this.subscribe=this.subscribe.bind(this),this.unstable_on=this.unstable_on.bind(this),this.getModelContext=this.getModelContext.bind(this),this.getState=this.getState.bind(this)}getState(){return this._threadBinding.getStateState()}append(t){let e=this._threadBinding.getState().append(bh(this._threadBinding.getState().messages,t));Promise.resolve(e).catch(r=>{if(!ai(r))throw r})}deleteMessage(t){return this._threadBinding.getState().deleteMessage(t)}subscribe(t){return this._stateBinding.subscribe(t)}getModelContext(){return this._threadBinding.getState().getModelContext()}startRun(t){return this._threadBinding.getState().startRun(vh(t))}resumeRun(t){return this._threadBinding.getState().resumeRun(gh(t))}exportExternalState(){return this._threadBinding.getState().exportExternalState()}importExternalState(t){this._threadBinding.getState().importExternalState(t)}cancelRun(){this._threadBinding.getState().cancelRun()}unstable_notifySessionReset(){this._threadBinding.getState().unstable_notifySessionReset()}stopSpeaking(){return this._threadBinding.getState().stopSpeaking()}connectVoice(){this._threadBinding.getState().connectVoice()}disconnectVoice(){this._threadBinding.getState().disconnectVoice()}getVoiceVolume(){return this._threadBinding.getState().getVoiceVolume()}subscribeVoiceVolume(t){return this._threadBinding.getState().subscribeVoiceVolume(t)}muteVoice(){this._threadBinding.getState().muteVoice()}unmuteVoice(){this._threadBinding.getState().unmuteVoice()}export(){return this._threadBinding.getState().export()}import(t){this._threadBinding.getState().import(t)}reset(t){this._threadBinding.getState().reset(t)}getMessageByIndex(t){if(t<0)throw new Error("Message index must be >= 0");return this._getMessageRuntime({...this.path,ref:`${this.path.ref}.messages[${t}]`,messageSelector:{type:"index",index:t}},()=>{let e=this._threadBinding.getState().messages,r=e[t];if(r)return{message:r,parentId:e[t-1]?.id??null,index:t}})}getMessageById(t){return this._getMessageRuntime({...this.path,ref:`${this.path.ref}.messages[messageId=${JSON.stringify(t)}]`,messageSelector:{type:"messageId",messageId:t}},()=>this._threadBinding.getState().getMessageById(t))}_getMessageRuntime(t,e){return new ul(new we({path:t,getState:()=>{let{message:r,parentId:o,index:i}=e()??{},{messages:s,speech:n}=this._threadBinding.getState();if(!r||o===void 0||i===void 0)return be;let a=this._threadBinding.getState().getBranches(r.id);return{...r,[ct]:r[ct],index:i,isLast:s.at(-1)?.id===r.id,parentId:o,branchNumber:a.indexOf(r.id)+1,branchCount:a.length,speech:n?.messageId===r.id?n:void 0}},subscribe:r=>this._threadBinding.subscribe(r)}),this._threadBinding)}unstable_on(t,e){let r=this._eventSubscriptionSubjects.get(t);return r||(r=new Fo({event:t,binding:this._threadBinding}),this._eventSubscriptionSubjects.set(t,r)),r.subscribe(e)}};var Nr=class{constructor(t,e){m(this,"_core");m(this,"_threadListBinding");this._core=t,this._threadListBinding=e,this.__internal_bindMethods()}get path(){return this._core.path}__internal_bindMethods(){this.switchTo=this.switchTo.bind(this),this.rename=this.rename.bind(this),this.updateCustom=this.updateCustom.bind(this),this.archive=this.archive.bind(this),this.unarchive=this.unarchive.bind(this),this.delete=this.delete.bind(this),this.initialize=this.initialize.bind(this),this.generateTitle=this.generateTitle.bind(this),this.subscribe=this.subscribe.bind(this),this.unstable_on=this.unstable_on.bind(this),this.getState=this.getState.bind(this),this.detach=this.detach.bind(this)}getState(){return this._core.getState()}switchTo(t){let e=this._core.getState();return this._threadListBinding.switchToThread(e.id,t)}rename(t){let e=this._core.getState();return this._threadListBinding.rename(e.id,t)}updateCustom(t){let e=this._core.getState();if(!this._threadListBinding.updateCustom)throw new Error("Thread list runtime does not support updating custom metadata");return this._threadListBinding.updateCustom(e.id,t)}archive(){let t=this._core.getState();return this._threadListBinding.archive(t.id)}unarchive(){let t=this._core.getState();return this._threadListBinding.unarchive(t.id)}delete(){let t=this._core.getState();return this._threadListBinding.delete(t.id)}initialize(){let t=this._core.getState();return this._threadListBinding.initialize(t.id)}generateTitle(t){let e=this._core.getState();return this._threadListBinding.generateTitle(e.id,t)}unstable_on(t,e){let r=this._core.getState().isMain,o=this._core.getState().id;return this.subscribe(()=>{let i=this._core.getState(),s=i.isMain,n=i.id;r===s&&o===n||(r=s,o=n,!(t==="switchedTo"&&!s)&&(t==="switchedAway"&&s||ne([e],{},`Thread list item "${t}"`)))})}subscribe(t){return this._core.subscribe(t)}detach(){let t=this._core.getState();this._threadListBinding.detach(t.id)}__internal_getRuntime(){return this}};var Js=Promise.resolve(),xh=()=>{},_h=t=>({mainThreadId:t.mainThreadId,newThreadId:t.newThreadId,threadIds:t.threadIds,archivedThreadIds:t.archivedThreadIds,isLoading:t.isLoading,loadError:t.loadError,isLoadingMore:t.isLoadingMore??!1,hasMore:t.hasMore??!1,threadItems:t.threadItems}),li=(t,e)=>{if(e===void 0)return be;let r=t.getItemById(e);return r?{id:r.id,remoteId:r.remoteId,externalId:r.externalId,title:r.title,status:r.status,lastMessageAt:r.lastMessageAt,custom:r.custom,isMain:r.id===t.mainThreadId,isRunning:t.unstable_isThreadRunning?.(r.id)??!1}:be},ml=class{constructor(t,e=dl){m(this,"_getState");m(this,"_stateBinding");m(this,"_core");m(this,"_runtimeFactory");m(this,"_mainThreadListItemRuntime");m(this,"main");this._core=t,this._runtimeFactory=e;let r=new kr({path:{},getState:()=>_h(t),subscribe:o=>t.subscribe(o)});this._getState=r.getState.bind(r),this._stateBinding=r,this._mainThreadListItemRuntime=new Nr(new we({path:{ref:"threadItems[main]",threadSelector:{type:"main"}},getState:()=>li(this._core,this._core.mainThreadId),subscribe:o=>this._core.subscribe(o)}),this._core),this.main=new e(new Bt({path:{ref:"threads.main",threadSelector:{type:"main"}},getState:()=>t.getMainThreadRuntimeCore(),subscribe:o=>t.subscribe(o)}),this._mainThreadListItemRuntime),this.__internal_bindMethods()}__internal_bindMethods(){this.switchToThread=this.switchToThread.bind(this),this.switchToNewThread=this.switchToNewThread.bind(this),this.unstable_subscribeThreadEvents=this.unstable_subscribeThreadEvents.bind(this),this.getLoadThreadsPromise=this.getLoadThreadsPromise.bind(this),this.reload=this.reload.bind(this),this.reloadMainThread=this.reloadMainThread.bind(this),this.loadMore=this.loadMore.bind(this),this.getState=this.getState.bind(this),this.subscribe=this.subscribe.bind(this),this.getById=this.getById.bind(this),this.getItemById=this.getItemById.bind(this),this.getItemByIndex=this.getItemByIndex.bind(this),this.getArchivedItemByIndex=this.getArchivedItemByIndex.bind(this)}switchToThread(t,e){return this._core.switchToThread(t,e)}switchToNewThread(){return this._core.switchToNewThread()}unstable_subscribeThreadEvents(t){return this._core.unstable_subscribeThreadEvents?.(t)??xh}getLoadThreadsPromise(){return this._core.getLoadThreadsPromise()}reload(){return this._core.reload?.()??Js}reloadMainThread(){return this._core.reloadMainThread?.()??Js}loadMore(){return this._core.loadMore?.()??Js}getState(){return this._getState()}subscribe(t){return this._stateBinding.subscribe(t)}get mainItem(){return this._mainThreadListItemRuntime}_createItemStateBinding(t){return new we({path:{ref:`threadItems[threadId=${t}]`,threadSelector:{type:"threadId",threadId:t}},getState:()=>li(this._core,t),subscribe:e=>this._core.subscribe(e)})}getById(t){return new this._runtimeFactory(new Bt({path:{ref:`threads[threadId=${JSON.stringify(t)}]`,threadSelector:{type:"threadId",threadId:t}},getState:()=>this._core.getThreadRuntimeCore(t),subscribe:e=>this._core.subscribe(e)}),this._createItemStateBinding(t))}getItemByIndex(t){return new Nr(new we({path:{ref:`threadItems[${t}]`,threadSelector:{type:"index",index:t}},getState:()=>li(this._core,this._core.threadIds[t]),subscribe:e=>this._core.subscribe(e)}),this._core)}getArchivedItemByIndex(t){return new Nr(new we({path:{ref:`archivedThreadItems[${t}]`,threadSelector:{type:"archiveIndex",index:t}},getState:()=>li(this._core,this._core.archivedThreadIds[t]),subscribe:e=>this._core.subscribe(e)}),this._core)}getItemById(t){return new Nr(this._createItemStateBinding(t),this._core)}};var pl=class{constructor(t){m(this,"threads");m(this,"_thread");m(this,"_core");this._core=t,this.threads=new ml(t.threads),this._thread=this.threads.main,this.__internal_bindMethods()}__internal_bindMethods(){this.registerModelContextProvider=this.registerModelContextProvider.bind(this)}get thread(){return this._thread}registerModelContextProvider(t){return this._core.registerModelContextProvider(t)}};var hl=new WeakMap,Vr=t=>hl.get(t)??0,ui=(t,e)=>Vr(t)===e,di=t=>{hl.set(t,Vr(t)+1)};var fl=class{constructor(){m(this,"_contextProvider",new Uo)}registerModelContextProvider(t){return this._contextProvider.registerModelContextProvider(t)}getModelContextProvider(){return this._contextProvider}};var Ft=Object.freeze([]),ar="DEFAULT_THREAD_ID",yh=Object.freeze([ar]),Sh=Object.freeze({id:ar,remoteId:void 0,externalId:void 0,status:"regular"}),Th=Promise.resolve(),gl=Object.freeze(ue({[ar]:Sh})),vl=class extends er{constructor(e={},r){super();m(this,"_mainThreadId",ar);m(this,"_threads",yh);m(this,"_archivedThreads",Ft);m(this,"_threadData",gl);m(this,"adapter",{});m(this,"_mainThread");m(this,"threadFactory");this.threadFactory=r,this.__internal_setAdapter(e,!0)}get isLoading(){return this.adapter.isLoading??!1}get newThreadId(){}get threadIds(){return this._threads}get archivedThreadIds(){return this._archivedThreads}get threadItems(){return this._threadData}getLoadThreadsPromise(){return Th}get mainThreadId(){return this._mainThreadId}getMainThreadRuntimeCore(){return this._mainThread}getThreadRuntimeCore(){throw new Error("Method not implemented.")}getItemById(e){return Object.hasOwn(this._threadData,e)?this._threadData[e]:void 0}__internal_setAdapter(e,r=!1){let o=this.adapter;this.adapter=e;let i=e.threadId??ar,s=e.threads??Ft,n=e.archivedThreads??Ft,a=o.threadId??ar,c=o.threads??Ft,l=o.archivedThreads??Ft;!r&&(o.isLoading??!1)===(e.isLoading??!1)&&a===i&&c===s&&l===n||((c!==s||l!==n||a!==i)&&(this._threadData=ue(gl,Object.fromEntries(e.threads?.map(u=>[u.id,{...u,remoteId:u.remoteId,externalId:u.externalId,status:"regular"}])??[]),Object.fromEntries(e.archivedThreads?.map(u=>[u.id,{...u,remoteId:u.remoteId,externalId:u.externalId,status:"archived"}])??[]))),c!==s&&(this._threads=this.adapter.threads?.map(u=>u.id)??Ft),l!==n&&(this._archivedThreads=this.adapter.archivedThreads?.map(u=>u.id)??Ft),(r||a!==i)&&(r||di(this._mainThread),this._mainThreadId=i,this._mainThread=this.threadFactory()),Object.hasOwn(this._threadData,this._mainThreadId)||(this._threadData=ue(this._threadData,{[this._mainThreadId]:{id:this._mainThreadId,remoteId:void 0,externalId:void 0,status:"regular"}})),this._notifySubscribers())}async reloadMainThread(){this._mainThread.unstable_refetchThread&&await this._mainThread.unstable_refetchThread()}async switchToThread(e,r){if(this._mainThreadId===e)return;let o=this.adapter.onSwitchToThread;if(!o)throw new Error("External store adapter does not support switching to thread");await o(e)}async switchToNewThread(){let e=this.adapter.onSwitchToNewThread;if(!e)throw new Error("External store adapter does not support switching to new thread");await e()}async rename(e,r){let o=this.adapter.onRename;if(!o)throw new Error("External store adapter does not support renaming");await o(e,r)}async updateCustom(e,r){let o=this.adapter.onUpdateCustom;if(!o)throw new Error("External store adapter does not support updating custom metadata");await o(e,r)}async detach(){}async archive(e){let r=this.adapter.onArchive;if(!r)throw new Error("External store adapter does not support archiving");await r(e)}async unarchive(e){let r=this.adapter.onUnarchive;if(!r)throw new Error("External store adapter does not support unarchiving");await r(e)}async delete(e){let r=this.adapter.onDelete;if(!r)throw new Error("External store adapter does not support deleting");await r(e)}initialize(e){return Promise.resolve({remoteId:e,externalId:void 0})}generateTitle(){throw new Error("Method not implemented.")}};var pi={fromArray:t=>{let e=t.map(r=>nr(r,Ae(),Us(r.content)));return{messages:e.map((r,o)=>({parentId:o>0?e[o-1].id:null,message:r}))}},fromBranchableArray:(t,e)=>({...e?.headId!==void 0?{headId:e.headId}:void 0,messages:t.map(({message:r,parentId:o})=>{if(!r.id)throw new Error("ExportedMessageRepository.fromBranchableArray: Each message must have an 'id' field set.");return{parentId:o,message:nr(r,r.id,Us(r.content))}})})},mi=t=>{let e=t;for(;e.next;)e=e.next;return"current"in e?e:null},Ch=class{constructor(t){m(this,"_value",null);m(this,"func");this.func=t}get value(){return this._value===null&&(this._value=this.func()),this._value}dirty(){this._value=null}},hi=class{constructor(){m(this,"messages",new Map);m(this,"head",null);m(this,"root",{children:[],next:null});m(this,"_messages",new Ch(()=>{let t=new Array((this.head?.level??-1)+1);for(let e=this.head;e;e=e.prev)t[e.level]=e.current;return t}))}updateLevels(t,e){let r=[{message:t,level:e}];for(;r.length>0;){let o=r.pop();o.message.level=o.level;for(let i of o.message.children){let s=this.messages.get(i);s&&r.push({message:s,level:o.level+1})}}}selectPathTo(t){for(let e=t;e;e=e.prev)(e.prev??this.root).next=e}performOp(t,e,r){let o=e.prev??this.root,i=t??this.root;if(!(r==="relink"&&o===i)){if(r==="relink"){for(let s=t;s;s=s.prev)if(s.current.id===e.current.id)throw new Error("MessageRepository(performOp/relink): A message with the same id already exists in the parent tree. This error occurs if the same message id is found multiple times. This is likely an internal bug in assistant-ui.")}if(r!=="link"&&(o.children=o.children.filter(s=>s!==e.current.id),o.next===e)){let s=o.children.at(-1),n=s?this.messages.get(s):null;if(n===void 0)throw new Error("MessageRepository(performOp/cut): Fallback sibling message not found. This is likely an internal bug in assistant-ui.");o.next=n}if(r!=="cut"){i.children=[...i.children,e.current.id],e.prev=t,mi(e)===this.head?this.selectPathTo(e):i.next===null&&(i.next=e,this.head===i&&(this.head=mi(e)));let s=t?t.level+1:0;this.updateLevels(e,s)}}}get headId(){return this.head?.current.id??null}get canonicalHeadId(){let t=this.head;for(;t?.current.metadata?.isOptimistic;)t=t.prev;return t?.current.id??null}getMessages(t){if(t===void 0||t===this.head?.current.id)return this._messages.value;let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(getMessages): Head message not found. This is likely an internal bug in assistant-ui.");let r=new Array(e.level+1);for(let o=e;o;o=o.prev)r[o.level]=o.current;return r}addOrUpdateMessage(t,e){let r=this.messages.get(e.id),o=t?this.messages.get(t):null;if(o===void 0)throw new Error("MessageRepository(addOrUpdateMessage): Parent message not found. This is likely an internal bug in assistant-ui.");if(r){r.current=e,this.performOp(o,r,"relink"),this._messages.dirty();return}let i={prev:o,current:e,next:null,children:[],level:o?o.level+1:0};this.messages.set(e.id,i),this.performOp(o,i,"link"),this.head===o&&(this.head=i),this._messages.dirty()}getMessage(t){let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(updateMessage): Message not found. This is likely an internal bug in assistant-ui.");return{parentId:e.prev?.current.id??null,message:e.current,index:e.level}}deleteMessage(t,e){let r=this.messages.get(t);if(!r)throw new Error("MessageRepository(deleteMessage): Message not found. This is likely an internal bug in assistant-ui.");let o=e===void 0?r.prev:e===null?null:this.messages.get(e);if(o===void 0)throw new Error("MessageRepository(deleteMessage): Replacement not found. This is likely an internal bug in assistant-ui.");for(let i of r.children){let s=this.messages.get(i);if(!s)throw new Error("MessageRepository(deleteMessage): Child message not found. This is likely an internal bug in assistant-ui.");this.performOp(o,s,"relink")}this.performOp(null,r,"cut"),this.messages.delete(t),this.head===r&&(this.head=mi(o??this.root)),this._messages.dirty()}getBranches(t){let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(getBranches): Message not found. This is likely an internal bug in assistant-ui.");let{children:r}=e.prev??this.root;return r}evictOffBranchOptimisticMessages(t,e){if(!t)return;let r=new Set;for(let i=e;i;i=i.prev)r.add(i.current.id);let o=[];for(let i=t;i&&!r.has(i.current.id);i=i.prev)i.current.metadata?.isOptimistic&&o.push(i.current.id);for(let i of o)this.messages.has(i)&&this.deleteMessage(i)}switchToBranch(t){let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(switchToBranch): Branch not found. This is likely an internal bug in assistant-ui.");let r=this.head;this.selectPathTo(e),this.head=mi(e),this.evictOffBranchOptimisticMessages(r,this.head),this._messages.dirty()}resetHead(t){if(t===null){this.clear();return}let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(resetHead): Branch not found. This is likely an internal bug in assistant-ui.");let r=this.head;if(e.children.length>0){let o=[...e.children];for(;o.length>0;){let i=o.pop(),s=this.messages.get(i);if(s){for(let n of s.children)o.push(n);this.messages.delete(i)}}e.children=[],e.next=null}this.head=e,this.selectPathTo(e),this.evictOffBranchOptimisticMessages(r,this.head),this._messages.dirty()}clear(){this.messages.clear(),this.head=null,this.root={children:[],next:null},this._messages.dirty()}export(){let t=[],e=[...this.root.children].reverse();for(;e.length>0;){let r=this.messages.get(e.pop());if(!r)continue;for(let i=r.children.length-1;i>=0;i--)e.push(r.children[i]);if(r.current.metadata?.isOptimistic)continue;let o=r.prev;for(;o&&o.current.metadata?.isOptimistic;)o=o.prev;t.push({message:r.current,parentId:o?.current.id??null})}return{headId:this.canonicalHeadId,messages:t}}import({headId:t,messages:e}){for(let{message:r,parentId:o}of e)this.addOrUpdateMessage(o,r);this.resetHead(t??e.at(-1)?.message.id??null)}};var _t=Object.freeze([]);function*Lr(t){for(let e of t)if(!(e?.role!=="assistant"||!Array.isArray(e.content)))for(let r of e.content)!r||r.type!=="tool-call"||(yield{part:r,messageId:e.id},r.messages?.length&&(yield*Lr(r.messages)))}function Ys(t,e){if(e==="*")return!0;let r=e.split(",").map(s=>s.trim().toLowerCase()),o=t.name.toLowerCase(),i=t.type.split(";",1)[0].trim().toLowerCase();for(let s of r){if(s.startsWith(".")&&o.endsWith(s)||s.includes("/")&&s===i)return!0;if(s.endsWith("/*")){let n=s.split("/")[0];if(i.startsWith(`${n}/`))return!0}}return!1}function Ih(t){let e=Ae();return t.type==="image"?{id:e,type:"image",name:t.filename??"image",content:[t],status:{type:"complete"}}:t.type==="file"?{id:e,type:"document",name:t.filename??"document",contentType:t.mimeType,content:[t],status:{type:"complete"}}:t.type==="audio"?{id:e,type:"audio",name:`audio.${t.audio.format}`,contentType:`audio/${t.audio.format}`,content:[t],status:{type:"complete"}}:{id:e,type:"data",name:t.name,content:[t],status:{type:"complete"}}}function bl(t){let e=[];for(let r of t)r.type!=="text"&&e.push(Ih(r));return e}var wl=t=>"content"in t&&!("lastModified"in t),$r=t=>t.status.type==="complete";var xl=class{constructor(){m(this,"operations",new Set)}start(){let t={cancelled:!1,attachmentIds:new Set};return this.operations.add(t),t}accept(t,e){return t.cancelled?!1:(t.attachmentIds.add(e),!0)}finish(t){this.operations.delete(t)}isCancelled(t){return t.cancelled}cancel(t){for(let e of[...this.operations])e.attachmentIds.has(t)&&(e.cancelled=!0,this.operations.delete(e))}cancelAll(){for(let t of this.operations)t.cancelled=!0;this.operations.clear()}},_l=async(t,e)=>{if(Symbol.asyncIterator in t){for await(let r of t)if(!e(r))break}else e(await t)};var fi=class extends er{constructor(){super(...arguments);m(this,"isEditing",!0);m(this,"_attachments",[]);m(this,"_text","");m(this,"_role","user");m(this,"_runConfig",{});m(this,"_quote");m(this,"_isSending",!1);m(this,"_removedDuringSend",new Set);m(this,"_sendGeneration",0);m(this,"_attachmentAddOperations",new xl);m(this,"_dictation");m(this,"_dictationSession");m(this,"_dictationUnsubscribes",[]);m(this,"_dictationBaseText","");m(this,"_currentInterimText","");m(this,"_dictationSessionIdCounter",0);m(this,"_activeDictationSessionId");m(this,"_isCleaningDictation",!1);m(this,"_eventSubscribers",new Map)}enrichWithComposerMetadata(e,r){return r?{...e,metadata:{...e.metadata,custom:{...e.metadata?.custom,...r}}}:e}get attachmentAccept(){return this.getAttachmentAdapter()?.accept??"*"}get attachments(){return this._attachments}setAttachments(e){this._attachments=e,this._notifySubscribers()}get isEmpty(){return!this.text.trim()&&!this.attachments.length}get text(){return this._text}get role(){return this._role}get runConfig(){return this._runConfig}get quote(){return this._quote}setQuote(e){this._quote!==e&&(this._quote=e,this._notifySubscribers())}setText(e){this._text!==e&&(this._text=e,this._rebaseDictation(e),this._notifySubscribers())}_rebaseDictation(e){if(!this._dictation)return;this._dictationBaseText=e,this._currentInterimText="";let{status:r,inputDisabled:o}=this._dictation;this._dictation=o?{status:r,inputDisabled:o}:{status:r}}setRole(e){this._role!==e&&(this._role=e,this._notifySubscribers())}setRunConfig(e){this._runConfig!==e&&(this._runConfig=e,this._notifySubscribers())}_cancelAttachmentAdd(e){this._attachmentAddOperations.cancel(e)}_cancelAllAttachmentAdds(){this._attachmentAddOperations.cancelAll()}_emptyTextAndAttachments(){this._attachments=[],this._text="",this._rebaseDictation(""),this._notifySubscribers()}async _onClearAttachments(){let e=this.getAttachmentAdapter();if(e){let r=this._attachments.filter(o=>!$r(o));await Promise.all(r.map(async o=>e.remove(o)))}}async reset(){if(this._cancelAllAttachmentAdds(),this._sendGeneration++,this._isSending=!1,this._removedDuringSend.clear(),this._attachments.length===0&&this._text===""&&this._role==="user"&&Object.keys(this._runConfig).length===0&&this._quote===void 0)return;this._role="user",this._runConfig={},this._quote=void 0;let e=this._onClearAttachments();this._emptyTextAndAttachments(),await e}async clearAttachments(){if(this._cancelAllAttachmentAdds(),this._isSending)for(let r of this._attachments)this._removedDuringSend.add(r.id);let e=this._onClearAttachments();this.setAttachments([]),await e}async send(e){if(!this.canSend||this._isSending)return;if(this._dictationSession)try{this._dictationSession.cancel()}catch(b){console.error("[assistant-ui] Dictation session cancel threw",b)}finally{this._cleanupDictation()}let r=this.getAttachmentAdapter(),o=this.attachments.map(async b=>{if($r(b))return b;if(!r)throw new Error("Attachments are not supported");return await r.send(b)}),i=this.attachments,s=this.text,n=this._quote,a=this.role,c=this.runConfig;this._quote=void 0,this._text="",this._isSending=!0;let l=++this._sendGeneration;this._notifySubscribers();let u;try{u=await Promise.all(o)}catch(b){throw l===this._sendGeneration&&(!this.text.trim()&&this._quote===void 0&&(this._text=s,this._rebaseDictation(s),this._quote=n,this._notifySubscribers()),Promise.allSettled(o).then(()=>{l===this._sendGeneration&&(this._removedDuringSend.clear(),this._isSending=!1,this._notifySubscribers())})),b}if(l!==this._sendGeneration)return;let h=new Set(i.map(b=>b.id));this._attachments=this._attachments.filter(b=>!h.has(b.id)),this._isSending=!1,this._notifySubscribers();let d=u.filter(b=>!this._removedDuringSend.has(b.id));this._removedDuringSend.clear();let p={createdAt:new Date,role:a,content:s?[{type:"text",text:s}]:[],attachments:d,runConfig:c,metadata:{custom:{...n?{quote:n}:{}}}},f={text:s,quote:n,attachments:d},v;try{v=this.handleSend(p,e)}catch(b){throw this._restoreUnsentDraft(b,l,f),b}v&&v.catch(b=>{this._restoreUnsentDraft(b,l,f)}),this._notifyEventSubscribers("send",{chars:s.length,attachments:d.length})}restoreDraft(e){return this._text.trim()||this._quote!==void 0||this._attachments.length>0?!1:(this._text=e.text,this._rebaseDictation(e.text),this._quote=e.quote,this._attachments=e.attachments??[],this._notifySubscribers(),!0)}retractDraft(e){let r=e.attachments!==void 0?this._attachments===e.attachments:this._attachments.length===0;this._text!==e.text||this._quote!==e.quote||!r||(this._text="",this._rebaseDictation(""),this._quote=void 0,this._attachments=[],this._notifySubscribers())}_restoreUnsentDraft(e,r,o){ai(e)&&r===this._sendGeneration&&this.restoreDraft(o)}cancel(){this.handleCancel()}get queue(){return _t}moveQueueItem(e,r){}removeQueueItem(e){}async addAttachment(e){if(wl(e)){let n=this.getAttachmentAdapter();if(n&&!Ys({name:e.name,type:e.contentType??""},n.accept)){let c=`File type ${e.contentType||"unknown"} is not accepted. Accepted types: ${n.accept}`,l=new Error(c);throw this._safeEmitAttachmentAddError("not-accepted",c,void 0,l,e.contentType),l}let a={id:e.id??Ae(),type:e.type??"document",name:e.name,contentType:e.contentType,content:e.content,status:{type:"complete"}};this._attachments=[...this._attachments,a],this._notifySubscribers(),this._notifyEventSubscribers("attachmentAdd",{...a.contentType?{contentType:a.contentType}:void 0});return}let r=this.getAttachmentAdapter();if(!r){let n="Attachments are not supported",a=new Error(n);throw this._safeEmitAttachmentAddError("no-adapter",n,void 0,a,e.type),a}if(!Ys({name:e.name,type:e.type},r.accept)){let n=`File type ${e.type||"unknown"} is not accepted. Accepted types: ${r.accept}`,a=new Error(n);throw this._safeEmitAttachmentAddError("not-accepted",n,void 0,a,e.type),a}let o=this._attachmentAddOperations.start(),i=n=>{if(!this._attachmentAddOperations.accept(o,n.id))return!1;let a=this._attachments.findIndex(c=>c.id===n.id);return a!==-1?this._attachments=[...this._attachments.slice(0,a),n,...this._attachments.slice(a+1)]:this._attachments=[...this._attachments,n],this._notifySubscribers(),!0},s;try{await _l(r.add({file:e}),n=>(s=n,i(n)))}catch(n){if(this._attachmentAddOperations.isCancelled(o))return;throw s&&i({...s,status:{type:"incomplete",reason:"error",message:n instanceof Error?n.message:String(n)}}),this._safeEmitAttachmentAddError("adapter-error",n instanceof Error?n.message:String(n),s?.id,n instanceof Error?n:void 0,s?.contentType||e.type),n}finally{this._attachmentAddOperations.finish(o)}this._attachmentAddOperations.isCancelled(o)||(s?.status.type==="incomplete"&&s.status.reason==="error"?this._safeEmitAttachmentAddError("adapter-error",s.status.message??"Attachment upload did not complete successfully.",s.id,void 0,s.contentType||e.type):this._notifyEventSubscribers("attachmentAdd",{...s?.contentType?{contentType:s.contentType}:e.type?{contentType:e.type}:void 0}))}_safeEmitAttachmentAddError(e,r,o,i,s){try{this._notifyEventSubscribers("attachmentAddError",{reason:e,message:r,...o!==void 0&&{attachmentId:o},...i!==void 0&&{error:i},...s?{contentType:s}:void 0})}catch(n){console.error("[assistant-ui] attachmentAddError subscriber threw:",n)}}async removeAttachment(e){let r=this._attachments.findIndex(i=>i.id===e);if(r===-1)throw new Error("Attachment not found");let o=this._attachments[r];if(this._cancelAttachmentAdd(e),this._isSending&&this._removedDuringSend.add(e),!$r(o)){let i=this.getAttachmentAdapter();if(!i)throw new Error("Attachments are not supported");try{await i.remove(o)}catch(s){let n=s instanceof Error?s.message:String(s);throw this._attachments=this._attachments.map(a=>a.id===e&&!$r(a)?{...a,status:{type:"incomplete",reason:"error",message:n}}:a),this._notifySubscribers(),s}}this._attachments=this._attachments.filter(i=>i.id!==e),this._notifySubscribers()}get dictation(){return this._dictation}_isActiveSession(e,r){return this._activeDictationSessionId===e&&this._dictationSession===r}startDictation(){let e=this.getDictationAdapter();if(!e)throw new Error("Dictation adapter not configured");let r=this._dictationSession!==void 0;if(this._dictationSession){let u=this._dictationSession;this._cleanupDictation({notify:!1}),this._stopDictationSession(u)}let o=e.disableInputDuringDictation??!1;this._dictationBaseText=this._text,this._currentInterimText="";let i;try{i=e.listen()}catch(u){if(r)try{this._notifySubscribers()}catch(h){console.error("[assistant-ui] Dictation replacement rollback notification threw",h)}throw u}this._dictationSession=i;let s=++this._dictationSessionIdCounter;this._activeDictationSessionId=s,this._dictation={status:i.status,inputDisabled:o},this._notifySubscribers();let n=i.onSpeech(u=>{if(!this._isActiveSession(s,i))return;let h=u.isFinal!==!1,d=this._dictationBaseText&&!this._dictationBaseText.endsWith(" ")&&u.transcript?" ":"";if(h){if(this._dictationBaseText=this._dictationBaseText+d+u.transcript,this._currentInterimText="",this._text=this._dictationBaseText,this._dictation){let{transcript:p,...f}=this._dictation;this._dictation=f}this._notifySubscribers()}else this._currentInterimText=d+u.transcript,this._text=this._dictationBaseText+this._currentInterimText,this._dictation&&(this._dictation={...this._dictation,transcript:u.transcript}),this._notifySubscribers()});this._dictationUnsubscribes.push(n);let a=i.onSpeechStart(()=>{this._isActiveSession(s,i)&&(this._dictation={status:{type:"running"},inputDisabled:o,...this._dictation?.transcript&&{transcript:this._dictation.transcript}},this._notifySubscribers())});this._dictationUnsubscribes.push(a);let c=i.onSpeechEnd(()=>{this._cleanupDictation({sessionId:s})});this._dictationUnsubscribes.push(c);let l=setInterval(()=>{this._isActiveSession(s,i)&&i.status.type==="ended"&&this._cleanupDictation({sessionId:s})},100);this._dictationUnsubscribes.push(()=>clearInterval(l))}stopDictation(){if(!this._dictationSession)return;let e=this._dictationSession,r=this._activeDictationSessionId,o=()=>this._cleanupDictation({sessionId:r});this._stopDictationSession(e,o)}_stopDictationSession(e,r=()=>{}){let o;try{o=e.stop()}catch(i){console.error("[assistant-ui] Dictation session stop threw",i),r();return}o.then(r,i=>{console.error("[assistant-ui] Dictation session stop rejected",i),r()})}_cleanupDictation(e){if(e?.sessionId!==void 0&&e.sessionId!==this._activeDictationSessionId||this._isCleaningDictation)return;this._isCleaningDictation=!0;let r=o=>{try{o()}catch(i){console.error("[assistant-ui] Dictation cleanup threw",i)}};try{let o=this._dictationUnsubscribes;this._dictationUnsubscribes=[],this._dictationSession=void 0,this._activeDictationSessionId=void 0,this._dictation=void 0,this._dictationBaseText="",this._currentInterimText="";for(let i of o)r(i);e?.notify!==!1&&r(()=>this._notifySubscribers())}finally{this._isCleaningDictation=!1}}_notifyEventSubscribers(e,r){let o=this._eventSubscribers.get(e);o&&ne(o,r,`Composer runtime "${e}"`)}unstable_on(e,r){let o=r,i=this._eventSubscribers.get(e);return i||(i=new Set,this._eventSubscribers.set(e,i)),i.add(o),()=>{this._eventSubscribers.get(e)?.delete(o)}}};var Eh=t=>t.capabilities?.cancel?Ws(t):!1,yl=class extends fi{constructor(e){super();m(this,"_queueCache");m(this,"runtime");this.runtime=e,this.connect()}get canCancel(){return Eh(this.runtime)}get canSend(){return!this.isEmpty&&!this.runtime.isSendDisabled&&!this.runtime.voice&&!this._isSending}get queue(){let e=this.runtime.getSteerQueueItems?.()??_t,r=this.runtime.getQueueItems?.()??_t,o=this._queueCache;if(o&&o.steer===e&&o.queue===r)return o.flat;let i=e.length===0?r:r.length===0?e:[...e,...r];return this._queueCache={steer:e,queue:r,flat:i},i}moveQueueItem(e,r){this.runtime.moveQueueItem?.(e,r)}removeQueueItem(e){this.runtime.removeQueueItem?.(e)}getAttachmentAdapter(){return this.runtime.adapters?.attachments}getDictationAdapter(){return this.runtime.adapters?.dictation}connect(){let e=!1,r=this.runtime.isSendDisabled,o=this.runtime.voice!==void 0,i=this.queue;return this.runtime.subscribe(()=>{let s=!1,n=this.canCancel;e!==n&&(e=n,s=!0),r!==this.runtime.isSendDisabled&&(r=this.runtime.isSendDisabled,s=!0);let a=this.runtime.voice!==void 0;o!==a&&(o=a,s=!0),i!==this.queue&&(i=this.queue,s=!0),s&&this._notifySubscribers()})}async handleSend(e,r){return this.runtime.append({...e,parentId:this.runtime.messages.at(-1)?.id??null,sourceId:null,startRun:r?.startRun,steer:r?.steer})}async handleCancel(){this.runtime.cancelRun()}};var Sl=class extends fi{constructor(e,r,{parentId:o,message:i}){super();m(this,"_nonTextPassthrough");m(this,"_parentId");m(this,"_sourceId");m(this,"runtime");m(this,"endEditCallback");this.runtime=e;let s=e.voice!==void 0,n=e.subscribe(()=>{let c=e.voice!==void 0;c!==s&&(s=c,this._notifySubscribers())});this.endEditCallback=()=>{n(),r()},this._parentId=o,this._sourceId=i.id,this.setText(xt(i)),this.setRole(i.role);let a;i.role==="user"?(a=[...i.attachments??[],...bl(i.content)],this._nonTextPassthrough=[]):(a=i.attachments??[],this._nonTextPassthrough=i.content.filter(c=>c.type!=="text")),this.setAttachments(a),this.setRunConfig({...e.composer.runConfig})}get canCancel(){return!0}get canSend(){return!this.isEmpty&&!this.runtime.voice&&!this._isSending}getAttachmentAdapter(){return this.runtime.adapters?.attachments}getDictationAdapter(){return this.runtime.adapters?.dictation}get parentId(){return this._parentId}get sourceId(){return this._sourceId}async handleSend(e,r){let o=this._nonTextPassthrough.length>0?[...e.content,...this._nonTextPassthrough]:e.content,i=this.runtime.append({...e,content:o,parentId:this._parentId,sourceId:this._sourceId,startRun:r?.startRun});return this.handleCancel(),i}handleCancel(){this.endEditCallback(),this._notifySubscribers()}};var Tl=class extends er{constructor(e){super();m(this,"_isInitialized",!1);m(this,"repository",new hi);m(this,"_voiceMessages",[]);m(this,"_voiceGeneration",0);m(this,"_cachedMergedMessages",null);m(this,"_cachedVoiceGeneration",-1);m(this,"_cachedMergedBase",null);m(this,"composer",new yl(this));m(this,"_contextProvider");m(this,"_editComposers",new Map);m(this,"_stopSpeaking");m(this,"speech");m(this,"_voiceSession");m(this,"_voiceUnsubs",[]);m(this,"voice");m(this,"_voiceVolume",0);m(this,"_voiceVolumeSubscribers",new Set);m(this,"getVoiceVolume",()=>this._voiceVolume);m(this,"subscribeVoiceVolume",e=>(this._voiceVolumeSubscribers.add(e),()=>this._voiceVolumeSubscribers.delete(e)));m(this,"_currentAssistantMsg",null);m(this,"_eventSubscribers",new Map);this._contextProvider=e}_markVoiceMessagesDirty(){this._voiceGeneration++,this._cachedMergedMessages=null}_getBaseMessages(){return this.repository.getMessages()}_commitVoiceMessage(e){}get messages(){if(this._voiceMessages.length===0)return this._getBaseMessages();let e=this._getBaseMessages();if(this._cachedVoiceGeneration!==this._voiceGeneration||this._cachedMergedBase!==e){let r=new Set(e.map(o=>o.id));this._cachedMergedMessages=[...e,...this._voiceMessages.filter(o=>!r.has(o.id))],this._cachedVoiceGeneration=this._voiceGeneration,this._cachedMergedBase=e}return this._cachedMergedMessages}get state(){let e;for(let r of this.messages)r.role==="assistant"&&(e=r);return e?.metadata.unstable_state??null}getModelContext(){return this._contextProvider.getModelContext()}enrichAppendMetadata(e,r=e.parentId){if(e.role!=="user")return e;let o=this.messages,i=r===null?-1:o.findIndex(n=>n.id===r),s=Ec(this.getModelContext().unstable_composerMetadata,o.slice(0,i+1));return s?{...e,metadata:{...e.metadata,custom:{...e.metadata?.custom,...s}}}:e}getEditComposer(e){return this._editComposers.get(e)}_isVoiceMessage(e){return e!==null&&this._voiceMessages.some(r=>r.id===e)}_resolveAppendParent(e){return this._isVoiceMessage(e)?this._getBaseMessages().at(-1)?.id??null:e}beginEdit(e){if(this.voice)throw new Error("Cannot edit a message while a voice session is connected");if(this._isVoiceMessage(e))throw new Error("Voice transcript messages cannot be edited");if(this._editComposers.has(e))throw new Error("Edit already in progress");this._editComposers.set(e,new Sl(this,()=>this._editComposers.delete(e),this.repository.getMessage(e))),this._notifySubscribers()}getMessageById(e){try{return this.repository.getMessage(e)}catch{let r=this.repository.getMessages(),o=this._voiceMessages.findIndex(i=>i.id===e);return o!==-1?{parentId:o>0?this._voiceMessages[o-1].id:r.at(-1)?.id??null,message:this._voiceMessages[o],index:r.length+o}:void 0}}getBranches(e){return this._voiceMessages.some(r=>r.id===e)?[]:this.repository.getBranches(e)}switchToBranch(e){this.repository.switchToBranch(e),this._notifySubscribers()}_notifyEventSubscribers(e,r){let o=this._eventSubscribers.get(e);o&&ne(o,r,`Thread runtime "${e}"`)}_notifyToolApprovalAnswered(e,r,o,i){this._notifyEventSubscribers("toolApprovalAnswered",{messageId:e,toolCallId:r,toolName:o,approved:i})}submitFeedback({messageId:e,type:r,comment:o}){let i=this.adapters?.feedback,s=this.getMessageById(e);if(!s)throw new Error(`Message not found: ${e}`);let{message:n,parentId:a}=s,c=o?.trim(),l={type:r,...c?{comment:c}:void 0};if(i?.submit({message:n,...l}),n.role==="assistant"){let u={...n,metadata:{...n.metadata,submittedFeedback:l}},h=this._voiceMessages.findIndex(d=>d.id===e);h===-1?this.repository.addOrUpdateMessage(a,u):(this._voiceMessages[h]=u,this._currentAssistantMsg===n&&(this._currentAssistantMsg=u),this._markVoiceMessagesDirty())}this._notifySubscribers()}speak(e){let r=this.adapters?.speech;if(!r)throw new Error("Speech adapter not configured");let o=this.getMessageById(e);if(!o)throw new Error(`Message not found: ${e}`);let{message:i}=o,s=this._stopSpeaking,n;try{s?.(),n=r.speak(xt(i))}catch(h){if(s&&!this._stopSpeaking)try{this._notifySubscribers()}catch(d){console.error("[assistant-ui] Speech rollback notification threw",d)}throw h}let a,c=()=>{this._stopSpeaking=void 0,this.speech=void 0;let h=a;a=void 0,h?.()},l=()=>{if(this._stopSpeaking===l)try{c()}finally{n.cancel()}},u=()=>{this._stopSpeaking===l&&(n.status.type==="ended"?ze([c,()=>this._notifySubscribers()]):(this.speech={messageId:e,status:n.status},this._notifySubscribers()))};this._stopSpeaking=l;try{if(a=n.subscribe(u),this._stopSpeaking!==l){a();return}u()}catch(h){if(this._stopSpeaking===l)try{ze([l,()=>this._notifySubscribers()])}catch(d){console.error("[assistant-ui] Speech rollback cleanup threw",d)}throw h}}stopSpeaking(){if(!this._stopSpeaking)throw new Error("No message is being spoken");ze([this._stopSpeaking,()=>this._notifySubscribers()])}_onVoiceConnected(){}_onVoiceDisconnected(){}_isRunActive(){if(this.isRunning)return!0;let e=this._getBaseMessages().at(-1);return e?.role==="assistant"&&(e.status.type==="running"||e.status.type==="requires-action")}connectVoice(){let e=this.adapters?.voice;if(!e)throw new Error("Voice adapter not configured");if(this._isRunActive())throw new Error("Cannot start a voice session while a run is in progress or paused on a pending tool action");let r=this._voiceSession!==void 0;try{this._disconnectVoice(!1)}catch(n){console.error("[assistant-ui] Voice cleanup threw before reconnect",n)}let o;try{o=e.connect({})}catch(n){throw r&&this._voiceSession===void 0&&this._onVoiceDisconnected(),n}this._voiceSession=o;let i=[];this._voiceUnsubs=i;let s=()=>{if(this._voiceSession===o&&this._voiceUnsubs===i)return!1;try{ze(i.splice(0))}catch(n){console.error("[assistant-ui] Detached voice setup cleanup threw",n)}return!0};try{let n="listening";if(this.voice={status:o.status,isMuted:o.isMuted,mode:n},this._voiceVolume=0,this._notifySubscribers(),s()||(i.push(o.onStatusChange(a=>{this._voiceSession===o&&(a.type==="ended"?(this._finishVoiceAssistantMessage(),this._voiceSession=void 0,this.voice=void 0,this._onVoiceDisconnected()):this.voice={status:a,isMuted:o.isMuted,mode:n},this._notifySubscribers())})),s())||(i.push(o.onModeChange(a=>{n=a,this.voice&&(this.voice={...this.voice,mode:a},this._notifySubscribers())})),s())||(i.push(o.onVolumeChange(a=>{this._voiceVolume=a,ne(this._voiceVolumeSubscribers,void 0,"Voice volume")})),s()))return;i.push(o.onTranscript(a=>{this._handleVoiceTranscript(a)})),s()||this._onVoiceConnected()}catch(n){if(this._voiceSession===o&&this._voiceUnsubs===i){try{this._disconnectVoice(!1)}catch(a){console.error("[assistant-ui] Voice rollback cleanup threw",a)}r&&this._voiceSession===void 0&&this._onVoiceDisconnected()}else s();throw n}}_handleVoiceTranscript(e){if(this.ensureInitialized(),e.role==="user"){if(this._finishVoiceAssistantMessage(),this._currentAssistantMsg=null,e.isFinal){let r={id:Ae(),role:"user",content:[{type:"text",text:e.text}],metadata:{modality:"voice",custom:{}},createdAt:new Date,status:{type:"complete",reason:"unknown"},attachments:[]};this._voiceMessages.push(r),this._commitVoiceMessage(r),this._markVoiceMessagesDirty(),this._notifySubscribers()}}else{let r=e.isFinal?{type:"complete",reason:"stop"}:{type:"running"};if(!this._currentAssistantMsg)this._currentAssistantMsg={id:Ae(),role:"assistant",content:[{type:"text",text:e.text}],metadata:{unstable_state:this.state,unstable_annotations:[],unstable_data:[],steps:[],modality:"voice",custom:{}},status:r,createdAt:new Date},this._voiceMessages.push(this._currentAssistantMsg);else{let o=this._voiceMessages.indexOf(this._currentAssistantMsg);if(o===-1)return;let i={...this._currentAssistantMsg,content:[{type:"text",text:e.text}],status:r};this._voiceMessages[o]=i,this._currentAssistantMsg=i}e.isFinal&&(this._commitVoiceMessage(this._currentAssistantMsg),this._currentAssistantMsg=null),this._markVoiceMessagesDirty(),this._notifySubscribers()}}_finishVoiceAssistantMessage(e=!0){let r=this._voiceMessages.at(-1);if(r?.role==="assistant"&&r.status.type==="running"){let o=this._voiceMessages.length-1;this._voiceMessages[o]={...r,status:{type:"complete",reason:"stop"}},this._commitVoiceMessage(this._voiceMessages[o]),this._currentAssistantMsg=null,this._markVoiceMessagesDirty(),e&&this._notifySubscribers()}}disconnectVoice(){this._disconnectVoice(!0)}_disconnectVoice(e){this._finishVoiceAssistantMessage(!1),this._currentAssistantMsg=null;let r=this._voiceUnsubs.splice(0);this._voiceUnsubs=[];let o=this._voiceSession;this._voiceSession=void 0,this.voice=void 0,this._voiceVolume=0;let i=this.speech&&this._isVoiceMessage(this.speech.messageId)?this._stopSpeaking:void 0;this._voiceMessages=[],this._markVoiceMessagesDirty();try{ze([...r,...i?[i]:[],...o?[()=>o.disconnect()]:[],()=>ne(this._voiceVolumeSubscribers,void 0,"Voice volume"),()=>this._notifySubscribers()])}finally{e&&o&&this._voiceSession===void 0&&this._onVoiceDisconnected()}}muteVoice(){if(!this._voiceSession)throw new Error("No active voice session");this._voiceSession.mute(),this.voice={...this.voice,isMuted:!0},this._notifySubscribers()}unmuteVoice(){if(!this._voiceSession)throw new Error("No active voice session");this._voiceSession.unmute(),this.voice={...this.voice,isMuted:!1},this._notifySubscribers()}ensureInitialized(){this._isInitialized||(this._isInitialized=!0,this._notifyEventSubscribers("initialize",{}))}export(){return this.repository.export()}import(e){this.ensureInitialized(),this.repository.clear(),this.repository.import(e),this._notifySubscribers()}reset(e){this.import(pi.fromArray(e??[]))}unstable_on(e,r){let o=r;if(e==="modelContextUpdate")return this._contextProvider.subscribe?.(()=>ne([o],{},`Thread runtime "${e}"`))??(()=>{});let i=this._eventSubscribers.get(e);return i||(i=new Set,this._eventSubscribers.set(e,i)),i.add(o),e==="initialize"&&this._isInitialized&&queueMicrotask(()=>{i.has(o)&&ne([o],{},`Thread runtime "${e}"`)}),()=>{this._eventSubscribers.get(e)?.delete(o)}}};var Rh=Symbol.for("assistant-stream.tool-execution-id"),Fr=t=>{try{return JSON.parse(t),!0}catch{return!1}},Cl=t=>{try{return JSON.parse(t)}catch{return}},Xs=(t,e)=>{let r=Cl(t),o=Cl(e);return r===void 0||o===void 0?!1:Dr(r,o)},Zs=t=>t[Rh],Il=class{constructor(t,e,r){m(this,"_getTools");m(this,"_callbacks");m(this,"_isClientToolCall");m(this,"_entries",new Map);m(this,"_humanInput",new Map);m(this,"_executing",new Set);m(this,"_discardedToolCallIds",new Set);m(this,"_settledResolvers",[]);m(this,"_statuses",new Map);m(this,"_ac",new AbortController);m(this,"_pendingRestore",!0);m(this,"_lastSnapshot",null);m(this,"_isRunning",!1);m(this,"_controller");m(this,"_pipelineDead",!1);m(this,"_pipelineRestartUsed",!1);this._getTools=t,this._callbacks=e,this._isClientToolCall=r,this._initPipeline()}_initPipeline(){let[t,e]=As();this._controller=e;let o=Bs(()=>this._getWrappedTools(),()=>this._ac.signal,(i,s,n)=>this._onHumanInput(i,s,n),{onExecutionStart:(i,s,n)=>this._onExecutionStart(i,n),onExecutionEnd:(i,s,n)=>this._onExecutionEnd(i,n)});t.pipeThrough(o).pipeThrough(new Or).pipeTo(new WritableStream({write:i=>{try{if(i.type!=="result")return;this._handleResultChunk(i)}catch(s){console.error("[ToolInvocationTracker] result chunk handling failed",s)}}})).catch(i=>{console.error("[ToolInvocationTracker] stream pipeline failed; will attempt single restart on next setState",i),this._pipelineDead=!0})}setState(t){try{if(this._pipelineDead){if(this._pipelineRestartUsed)return;this._pipelineRestartUsed=!0,this._pipelineDead=!1,this._demoteEntriesToRestored(),this._executing.clear(),this._ac=new AbortController,this._initPipeline()}if(this._lastSnapshot&&this._lastSnapshot.messages===t.messages&&this._lastSnapshot.isRunning===t.isRunning&&this._lastSnapshot.isLoading===t.isLoading)return;t.isLoading===!0&&(this._pendingRestore=!0);let e=this._isRunning;this._isRunning=t.isRunning;try{this._processMessages(t.messages)}catch(r){throw this._isRunning=e,r}this._lastSnapshot=t,this._pendingRestore=!1}catch(e){console.error("[ToolInvocationTracker] setState failed; snapshot dropped",e)}}reset(){try{this._pendingRestore=!0,this._entries.clear(),this._discardedToolCallIds.clear(),this._lastSnapshot=null,this.abort(),this._statuses.size>0&&(this._statuses=new Map,this._invokeOnStatusesChange())}catch(t){console.error("[ToolInvocationTracker] reset failed",t)}}abort(t){try{if(this._humanInput.forEach(({reject:r})=>{try{r(new Error("Tool execution aborted"))}catch{}}),this._humanInput.clear(),t?.discardPending)for(let[r,o]of this._entries)o.controller&&(o.argsComplete||o.hasResult||(this._discardedToolCallIds.add(r),o.skipExecute=!0));if(this._ac.abort(),this._ac=new AbortController,this._executing.size===0)return Promise.resolve();let e=new Set(this._executing);return new Promise(r=>{this._settledResolvers.push({executionIds:e,resolve:r})})}catch(e){return console.error("[ToolInvocationTracker] abort failed",e),Promise.resolve()}}resume(t,e){try{let r=this._humanInput.get(t);return r?(this._humanInput.delete(t),this._setStatus(t,{type:"executing"}),r.resolve(e),!0):!1}catch(r){return console.error("[ToolInvocationTracker] resume failed",r),!1}}getStatuses(){return this._statuses}_getWrappedTools(){let t=this._getTools();if(t)return Object.fromEntries(Object.entries(t).map(([e,r])=>{let o=r.execute,i=r.streamCall;return o===void 0&&i===void 0?[e,r]:[e,{...r,...o!==void 0&&{execute:(...[s,n])=>{let a=Zs(n),c=this._captureExecution(n.toolCallId,a);return!c||c.skipExecute?new Promise(()=>{}):o(s,n)}},...i!==void 0&&{streamCall:(...[s,n])=>{let a=Zs(n);if(this._captureExecution(n.toolCallId,a))return i(s,n)}}}]}))}_captureExecution(t,e){if(e===void 0)return;let r=this._entries.get(t);if(r?.controller)return r.executionId===void 0&&(r.executionId=e),r.executionId===e?r:void 0}_onHumanInput(t,e,r){return new Promise((o,i)=>{let s=this._entries.get(t);if(!s?.controller||s.executionId!==r){i(new Error("Tool execution aborted"));return}let n=this._humanInput.get(t);if(n)try{n.reject(new Error("Human input request was superseded by a new request"))}catch{}this._humanInput.set(t,{executionId:r,resolve:o,reject:i}),this._setStatus(t,{type:"interrupt",payload:{type:"human",payload:e}})})}_onExecutionStart(t,e){this._captureExecution(t,e)&&(this._entries.get(t).skipExecute||(this._executing.add(e),this._humanInput.get(t)?.executionId!==e&&this._setStatus(t,{type:"executing"})))}_onExecutionEnd(t,e){if(e===void 0||!this._executing.delete(e))return;this._entries.get(t)?.executionId===e&&this._deleteStatus(t);let r=[];this._settledResolvers.forEach(({executionIds:o,resolve:i})=>{if([...o].some(s=>this._executing.has(s))){r.push({executionIds:o,resolve:i});return}try{i()}catch{}}),this._settledResolvers.length=0,this._settledResolvers.push(...r)}_handleResultChunk(t){let e=t.meta.toolCallId,r=Zs(t),o=this._entries.get(e);!o||o.executionId!==r||o?.hasResult||o.skipExecute||this._invokeOnResult({type:"add-tool-result",toolCallId:e,toolName:t.meta.toolName,result:t.result,isError:t.isError,...t.artifact!==void 0&&{artifact:t.artifact},...t.modelContent!==void 0&&{modelContent:t.modelContent}})}_invokeOnResult(t){try{this._callbacks.onResult(t)}catch(e){console.error("[ToolInvocationTracker] onResult callback threw; result dropped",e)}}_invokeOnStatusesChange(){try{this._callbacks.onStatusesChange(this._statuses)}catch(t){console.error("[ToolInvocationTracker] onStatusesChange callback threw; status change not propagated",t)}}_setStatus(t,e){let r=new Map(this._statuses);r.set(t,e),this._statuses=r,this._invokeOnStatusesChange()}_deleteStatus(t){if(!this._statuses.has(t))return;let e=new Map(this._statuses);e.delete(t),this._statuses=e,this._invokeOnStatusesChange()}_warnProviderOwnedSkip(t,e){}_shouldCloseArgsStream({argsText:t,hasResult:e,clientOwned:r}){return e?!0:Fr(t)?r||!this._isRunning:!1}_startActiveEntry(t,e,r,o){let i={toolName:e,controller:this._controller.addToolCallPart({toolName:e,toolCallId:t}),argsText:"",hasResult:!1,skipExecute:r,argsComplete:!1,clientOwned:o};return this._entries.set(t,i),i}_demoteEntriesToRestored(){for(let[t,e]of this._entries)if(e.controller){if(!e.argsComplete&&!e.hasResult){this._entries.delete(t);continue}this._entries.set(t,{toolName:e.toolName,argsText:e.argsText,hasResult:e.hasResult})}}_processArgsText(t,e){if(!t.controller)return;let r=e.result!==void 0;if(e.argsText!==t.argsText){let o=!0;if(t.argsComplete)Xs(t.argsText,e.argsText)&&(t.argsText=e.argsText),o=!1;else if(!e.argsText.startsWith(t.argsText))if(Fr(t.argsText)&&Fr(e.argsText)&&Xs(t.argsText,e.argsText)){let i=this._shouldCloseArgsStream({argsText:e.argsText,hasResult:r,clientOwned:t.clientOwned});i&&t.controller.argsText.close(),t.argsText=e.argsText,t.argsComplete=i,o=!1}else o=!1;if(o&&t.controller){let i=e.argsText.slice(t.argsText.length);t.controller.argsText.append(i);let s=this._shouldCloseArgsStream({argsText:e.argsText,hasResult:r,clientOwned:t.clientOwned});s&&t.controller.argsText.close(),t.argsText=e.argsText,t.argsComplete=s}}!t.argsComplete&&t.controller&&this._shouldCloseArgsStream({argsText:t.argsText,hasResult:r,clientOwned:t.clientOwned})&&(t.controller.argsText.close(),t.argsComplete=!0)}_processMessages(t){let e=this._pendingRestore;for(let{part:r}of Lr(t)){let o=this._entries.get(r.toolCallId);if(e){o?.controller||this._entries.set(r.toolCallId,{toolName:r.toolName,argsText:r.argsText,hasResult:r.result!==void 0});continue}let i=o;if(r.result!==void 0&&this._discardedToolCallIds.delete(r.toolCallId),i&&!i.controller){if(i.hasResult||!(r.argsText!==i.argsText&&!(Fr(i.argsText)&&Fr(r.argsText)&&Xs(i.argsText,r.argsText)))&&r.result===void 0)continue;this._entries.delete(r.toolCallId),i=void 0}if(!i){let s=this._isClientToolCall?.(r),n=r.result===void 0&&s===!1;n&&this._warnProviderOwnedSkip(r.toolName,r.toolCallId),i=this._startActiveEntry(r.toolCallId,r.toolName,r.result!==void 0||n||this._discardedToolCallIds.has(r.toolCallId),s===!0)}if(r.approval!==void 0&&(i.skipExecute=!0),this._processArgsText(i,r),r.result!==void 0&&!i.hasResult){let{controller:s}=i;if(!s)continue;i.hasResult=!0,i.argsComplete=!0,s.setResponse(new Re({result:r.result,artifact:r.artifact,isError:r.isError,...r.modelContent!==void 0?{modelContent:r.modelContent}:{}})),s.close()}}}};var Ah=Object.freeze([]),en=(t,e)=>{Promise.resolve(e).catch(r=>{console.error(`[ExternalStoreThreadRuntimeCore] ${t} callback rejected`,r)})},kh=(t,e)=>t&&e[e.length-1]?.role!=="assistant",El=class extends Tl{constructor(e,r){super(e);m(this,"_capabilities",{switchToBranch:!1,switchBranchDuringRun:!1,edit:!1,delete:!1,reload:!1,refetchThread:!1,cancel:!1,unstable_copy:!1,speech:!1,dictation:!1,voice:!1,attachments:!1,feedback:!1,queue:!1});m(this,"_messages");m(this,"isDisabled");m(this,"isSendDisabled");m(this,"suggestions",[]);m(this,"extras");m(this,"_converter",new zs);m(this,"_pendingDeleteEvictions",new Set);m(this,"_optimistic",null);m(this,"_store");m(this,"_getInitializePromise");m(this,"_transformedQueue");m(this,"_toolInvocations",null);m(this,"_toolStatuses",new Map);m(this,"_effectiveIsRunning",!1);m(this,"_inTrackerUpdate",!1);m(this,"_pendingRunningRefresh",!1);m(this,"_toolCallToMessageId",new Map);m(this,"_messagesForToolCallIndex",null);m(this,"updateMessages",e=>{this._store.convertMessage!==void 0?this._store.setMessages?.(e.flatMap(Ac)):this._store.setMessages?.(e)});this.__internal_setAdapter(r)}get capabilities(){return this._capabilities}get isLoading(){return this._store.isLoading??!1}get isRunning(){return this._hasExecutingTools(this._store)?!0:this._store.isRunning}_getBaseMessages(){return this._messages}get state(){return this._store.state??super.state}get adapters(){return this._store.adapters}get unstable_refetchThread(){if(this._store.onRefetchThread)return()=>this._store.onRefetchThread()}__internal_setGetInitializePromise(e){this._getInitializePromise=e}_runTrackerUpdate(e){this._inTrackerUpdate=!0;try{e()}finally{this._inTrackerUpdate=!1}this._pendingRunningRefresh&&(this._pendingRunningRefresh=!1,this._refreshEffectiveIsRunning())}_refreshEffectiveIsRunning(){let e=this._getEffectiveIsRunning(this._store);this._effectiveIsRunning!==e&&(this._effectiveIsRunning=e,this._notifyEventSubscribers(e?"runStart":"runEnd",{}),this._notifySubscribers())}_hasExecutingTools(e){if(e.unstable_enableToolInvocations!==!0||this._toolInvocations===null)return!1;for(let r of this._toolStatuses.values())if(r.type==="executing")return!0;return!1}_getEffectiveIsRunning(e){return(e.isRunning??!1)||this._hasExecutingTools(e)}beginEdit(e){if(!this._store.onEdit)throw new Error("Runtime does not support editing.");super.beginEdit(e)}__internal_setAdapter(e){this._store!==e&&this._updateStoreSnapshot(e)}_updateStoreSnapshot(e){let r=this._effectiveIsRunning;this.isDisabled=e.isDisabled??!1,this.isSendDisabled=e.isSendDisabled??!1;let o=this._store;this._store=e;let i=this._getEffectiveIsRunning(e),s=e.unstable_messageRepositoryInstance,n=s!==void 0&&s!==this.repository;n&&(this.repository=s,this._pendingDeleteEvictions.clear()),o?.queue!==e.queue&&(this._transformedQueue=void 0,e.queue?.__internal_setDispatchTransform?.(d=>{let p=this.messages.at(-1)?.id??null;return this.enrichAppendMetadata({...d,parentId:p},p)}),e.queue?.__internal_setDispatchTransform&&(this._transformedQueue=e.queue)),this.extras!==e.extras&&(this.extras=e.extras);let a=e.suggestions??Ah;ve(this.suggestions,a)||(this.suggestions=a);let c={switchToBranch:this._store.setMessages!==void 0,switchBranchDuringRun:!1,edit:this._store.onEdit!==void 0,delete:this._store.onDelete!==void 0||this._store.setMessages!==void 0,reload:this._store.onReload!==void 0,refetchThread:this._store.onRefetchThread!==void 0,cancel:this._store.onCancel!==void 0,speech:this._store.adapters?.speech!==void 0,dictation:this._store.adapters?.dictation!==void 0,voice:this._store.adapters?.voice!==void 0,unstable_copy:this._store.unstable_capabilities?.copy!==!1,attachments:!!this._store.adapters?.attachments,feedback:!!this._store.adapters?.feedback,queue:this._store.queue!==void 0};ve(this._capabilities,c)||(this._capabilities=c);let l;if(e.messageRepository){if(o&&!n&&o.isRunning===e.isRunning&&o.messageRepository===e.messageRepository&&r===i){this._notifySubscribers();return}let d=e.messageRepository.messages,p=e.messageRepository.headId??d.at(-1)?.message.id??null;if(o&&!n&&o.messageRepository===e.messageRepository)this.repository.resetHead(p),l=this.repository.getMessages();else{let f=new Set(d.map(({message:v})=>v.id));for(let{message:v,parentId:b}of d)this.repository.addOrUpdateMessage(b,v);for(let{message:v}of this.repository.export().messages)f.has(v.id)||this.repository.deleteMessage(v.id);this._pendingDeleteEvictions.clear(),this.repository.resetHead(p),l=this.repository.getMessages()}}else if(e.messages){if(o){if(o.convertMessage!==e.convertMessage)this._converter=new zs;else if(!n&&o.isRunning===e.isRunning&&o.messages===e.messages&&r===i){this._notifySubscribers();return}}l=e.convertMessage?this._converter.convertMessages(e.messages,(f,v,b)=>{if(!e.convertMessage)return v;let y=b===(e.messages?.length??0)-1,_=`${kc}${b}`;if(f&&(f.role!=="assistant"||!Bc(f.status)||f.status===js(f.content,y,i))){if(f.id.startsWith("__external_store_fallback_")&&f.id!==_){let S={...f,id:_};return $s(S,v),S}return f}let A=e.convertMessage(v,b),I=nr(A,_,js(A.content,y,i));return $s(I,v),I}):e.messages;let d=new Set,p=[];for(let f=l.length-1;f>=0;f--){let v=l[f];if(d.has(v.id)){console.warn(`ExternalStoreThreadRuntimeCore: duplicate message id "${v.id}" in the provided messages array; keeping the last occurrence.`);continue}d.add(v.id),p.push(v)}p.length!==l.length&&(l=p.reverse());for(let f=0;f<l.length;f++){let v=l[f],b=l[f-1];this.repository.addOrUpdateMessage(b?.id??null,v)}if(this._pendingDeleteEvictions.size>0){let f=new Set(l.map(v=>v.id));for(let v of this._pendingDeleteEvictions)if(this._pendingDeleteEvictions.delete(v),!f.has(v)){try{this.repository.getMessage(v)}catch{continue}this.repository.deleteMessage(v)}}}else throw new Error("ExternalStoreAdapter must provide either 'messages' or 'messageRepository'");l.length>0&&this.ensureInitialized(),this._effectiveIsRunning=i,r!==i&&(i?this._notifyEventSubscribers("runStart",{}):this._notifyEventSubscribers("runEnd",{}));let u=null;if(kh(i,l)){let d=l.at(-1)?.id??null;this._optimistic?.parentId!==d&&(this._optimistic={id:Ae(),parentId:d}),u=this._optimistic.id,this.repository.addOrUpdateMessage(d,nr({role:"assistant",content:[],metadata:{isOptimistic:!0}},u,{type:"running"}))}u===null&&(this._optimistic=null),this.repository.resetHead(u??l.at(-1)?.id??null);let h=this.repository.getMessages();if((!this._messages||!qs(this._messages,h))&&(this._messages=h),this._voiceMessages.length>0){let d=new Set(this._messages.map(f=>f.id)),p=this._voiceMessages.filter(f=>!d.has(f.id));p.length!==this._voiceMessages.length&&(this._voiceMessages=p,this._markVoiceMessagesDirty())}n&&this._runTrackerUpdate(()=>this._toolInvocations?.reset()),this._runTrackerUpdate(()=>this._driveToolInvocations()),this._notifySubscribers()}_driveToolInvocations(){if(!this._store.unstable_enableToolInvocations){this._toolInvocations&&(this._toolInvocations.reset(),this._toolInvocations=null,this._toolStatuses=new Map,this._store.setToolStatuses?.({}));return}this._toolInvocations||(this._toolInvocations=new Il(()=>this.getModelContext().tools,{onResult:e=>{try{let r=this._findMessageIdForToolCall(e.toolCallId);if(r===void 0)return;en("onAddToolResult",this._store.onAddToolResult?.({messageId:r,toolCallId:e.toolCallId,toolName:e.toolName,result:e.result,isError:e.isError,...e.artifact!==void 0&&{artifact:e.artifact},...e.modelContent!==void 0&&{modelContent:e.modelContent}}))}catch(r){console.error("[ExternalStoreThreadRuntimeCore] onAddToolResult dispatch failed",r)}},onStatusesChange:e=>{let r=this._hasExecutingTools(this._store);this._toolStatuses=e;try{this._store.setToolStatuses?.(Object.fromEntries(e))}finally{r!==this._hasExecutingTools(this._store)&&(this._inTrackerUpdate?this._pendingRunningRefresh=!0:this._updateStoreSnapshot(this._store))}}},e=>this._store.unstable_isClientToolCall?.(e))),this._toolInvocations.setState({messages:this._messages,isRunning:this._getEffectiveIsRunning(this._store),...this._store.isLoading!==void 0&&{isLoading:this._store.isLoading}})}_findMessageIdForToolCall(e){if(this._messagesForToolCallIndex!==this._messages){this._toolCallToMessageId.clear();for(let{part:r,messageId:o}of Lr(this._messages))this._toolCallToMessageId.set(r.toolCallId,o);this._messagesForToolCallIndex=this._messages}return this._toolCallToMessageId.get(e)}switchToBranch(e){if(!this._store.setMessages)throw new Error("Runtime does not support switching branches.");if(this._getEffectiveIsRunning(this._store))return;let r=this._store.unstable_onBranchChange,o=r?this.repository.canonicalHeadId:null;this.repository.switchToBranch(e),this._pendingDeleteEvictions.clear(),this.updateMessages(this.repository.getMessages()),r&&this._notifyBranchChange(o,r)}_notifyBranchChange(e,r){let o=this.repository.canonicalHeadId;o!==e&&r({headId:o,visibleMessageIds:this.repository.getMessages().map(i=>i.id)})}async append(e){let r={...e,parentId:this._resolveAppendParent(e.parentId)};if(this.voice)throw new Error("Cannot send a text message while a voice session is connected");if(this._isVoiceMessage(r.sourceId))throw new Error("Voice transcript messages cannot be edited");let o=r.sourceId!=null||r.parentId!==(this._getBaseMessages().at(-1)?.id??null);r=!o&&this._store.queue&&this._store.queue===this._transformedQueue?r:this.enrichAppendMetadata(r);let i=Vr(this);this.ensureInitialized();let s=this._getInitializePromise?.();if(!o&&this._store.queue){if(s&&await s,!ui(this,i))return;r.steer??this._getEffectiveIsRunning(this._store)?this._store.queue.steer(r):this._store.queue.enqueue(r);return}if(s?.catch(()=>{}),(r.startRun??r.role==="user")&&await this._toolInvocations?.abort({discardPending:!0}),!!ui(this,i))if(o){if(!this._store.onEdit)throw new Error("Runtime does not support editing messages.");this._pendingDeleteEvictions.clear(),await this._store.onEdit(r)}else await this._store.onNew(r)}_commitVoiceMessage(e){this._store.onVoiceTranscript?.(e)}async deleteMessage(e){if(this._store.onDelete){this.repository.getMessages().some(o=>o.id===e)&&this._pendingDeleteEvictions.add(e);try{await this._store.onDelete(e)}catch(o){throw this._pendingDeleteEvictions.delete(e),o}return}if(!this._store.setMessages)throw new Error("Runtime does not support deleting messages.");this._getEffectiveIsRunning(this._store)&&await this._toolInvocations?.abort();let r=this.repository.getMessages();if(r.findIndex(o=>o.id===e)===-1)throw new Error("Message not found.");this._pendingDeleteEvictions.clear(),this.updateMessages(r.filter(o=>o.id!==e)),this._evictDeletedMessage(e)}_evictDeletedMessage(e){if(!e.startsWith("__external_store_fallback_")){try{this.repository.getMessage(e)}catch{return}this.repository.deleteMessage(e),this._publishRepositoryMessages()}}_publishRepositoryMessages(){let e=this.repository.getMessages();qs(this._messages,e)||(this._messages=e),this._notifySubscribers()}getQueueItems(){return this._store?.queue?.items??_t}getSteerQueueItems(){return this._store?.queue?.steerItems??_t}moveQueueItem(e,r){this._store?.queue?.move(e,r)}removeQueueItem(e){this._store?.queue?.remove(e)}async startRun(e){if(!this._store.onReload)throw new Error("Runtime does not support reloading messages.");if(this.voice)throw new Error("Cannot start a run while a voice session is connected");if(this._isVoiceMessage(e.sourceId))throw new Error("Voice transcript messages cannot be reloaded");this._pendingDeleteEvictions.clear(),await this._toolInvocations?.abort({discardPending:!0}),await this._store.onReload(e.parentId,e)}async resumeRun(e){if(!this._store.onResume)throw new Error("Runtime does not support resuming runs.");if(this.voice)throw new Error("Cannot start a run while a voice session is connected");if(this._isVoiceMessage(e.sourceId))throw new Error("Voice transcript messages cannot be reloaded");await this._store.onResume(e)}exportExternalState(){if(!this._store.onExportExternalState)throw new Error("Runtime does not support exporting external states.");return this._store.onExportExternalState()}importExternalState(e){if(!this._store.onLoadExternalState)throw new Error("Runtime does not support importing external states.");this._runTrackerUpdate(()=>this._toolInvocations?.reset()),this._store.onLoadExternalState(e)}unstable_notifySessionReset(){this._runTrackerUpdate(()=>this._toolInvocations?.reset()),this._store.queue?.__internal_notifyCancelled?.()}cancelRun(){if(!this._store.onCancel)throw new Error("Runtime does not support cancelling runs.");let e=Vr(this);this._toolInvocations?.abort({discardPending:!0}),this._store.queue?.__internal_notifyCancelled?.(),en("onCancel",this._store.onCancel()),this.dropEmptyOptimisticHead();let r=this.repository.getMessages(),o=r[r.length-1],i=this._store.setMessages!==void 0&&o?.role==="user"&&o.id===r.at(-1)?.id&&o.content.every(n=>n.type==="text")?o:void 0,s;if(i){let n={text:xt(i),attachments:i.attachments,quote:i.metadata.custom.quote};this.composer.restoreDraft(n)&&(this.repository.deleteMessage(i.id),s={id:i.id,draft:n})}this._publishRepositoryMessages(),setTimeout(()=>{if(ui(this,e)){if(this.dropEmptyOptimisticHead(),s){let n=this.repository.getMessages();n.at(-1)?.id===s.id?this.repository.deleteMessage(s.id):n.some(a=>a.id===s.id)&&this.composer.retractDraft(s.draft)}this._publishRepositoryMessages(),this.updateMessages(this._messages)}},0)}dropEmptyOptimisticHead(){let e=this.repository.getMessages().at(-1);e&&e.metadata.isOptimistic&&e.content.length===0&&this.repository.deleteMessage(e.id)}addToolResult(e){if(!this._store.onAddToolResult)throw new Error("Runtime does not support tool results.");en("onAddToolResult",this._store.onAddToolResult(e))}resumeToolCall(e){if(!(this._toolInvocations?.resume(e.toolCallId,e.payload)??!1)){if(this._store.onResumeToolCall){this._store.onResumeToolCall(e);return}throw new Error(`Tool call ${e.toolCallId} is not waiting for resume.`)}}respondToToolApproval(e){if(!this._store.onRespondToToolApproval)throw new Error("Runtime does not support tool approvals.");let r=this.messages.findLast(i=>i.role==="assistant"&&i.content.some(s=>s.type==="tool-call"&&s.approval?.id===e.approvalId)),o=r?.content.find(i=>i.type==="tool-call"&&i.approval?.id===e.approvalId);try{return Promise.resolve(this._store.onRespondToToolApproval(e)).then(()=>{r&&o?.type==="tool-call"&&this._notifyToolApprovalAnswered(r.id,o.toolCallId,o.toolName,e.approved)})}catch(i){return Promise.reject(i)}}reset(e){let r=new hi;r.import(pi.fromArray(e??[])),this.updateMessages(r.getMessages())}import(e){super.import(e),this._store.onImport&&this._store.onImport(this.repository.getMessages())}};var Rl=t=>t.adapters?.threadList??{},Al=class extends fl{constructor(e){super();m(this,"threads");this.threads=new vl(Rl(e),()=>new El(this._contextProvider,e))}setAdapter(e){this.threads.__internal_setAdapter(Rl(e)),this.threads.getMainThreadRuntimeCore().__internal_setAdapter(e)}};var Ur=t=>{let e=g(21),{modelContext:r,feedback:o}=Rc()??{},i;e:{if(!o||t.adapters?.feedback){i=t;break e}let f;e[0]!==o||e[1]!==t.adapters?(f={...t.adapters,feedback:o},e[0]=o,e[1]=t.adapters,e[2]=f):f=e[2];let v;e[3]!==t||e[4]!==f?(v={...t,adapters:f},e[3]=t,e[4]=f,e[5]=v):v=e[5],i=v}let s=i,n;e[6]!==s?(n=()=>new Al(s),e[6]=s,e[7]=n):n=e[7];let[a]=U(n),c;e[8]!==a.threads?(c=()=>()=>{di(a.threads.getMainThreadRuntimeCore())},e[8]=a.threads,e[9]=c):c=e[9];let l;e[10]!==a?(l=[a],e[10]=a,e[11]=l):l=e[11],M(c,l);let u;e[12]!==s||e[13]!==a?(u=()=>{a.setAdapter(s)},e[12]=s,e[13]=a,e[14]=u):u=e[14],M(u);let h,d;e[15]!==r||e[16]!==a?(h=()=>{if(r)return a.registerModelContextProvider(r)},d=[r,a],e[15]=r,e[16]=a,e[17]=h,e[18]=d):(h=e[17],d=e[18]),M(h,d);let p;return e[19]!==a?(p=new pl(a),e[19]=a,e[20]=p):p=e[20],p};var kl=require("react/jsx-runtime"),Ml=t=>{let e=g(6),{id:r,children:o}=t,i=F(),s;e[0]!==r?(s=oe({message:ie({source:"thread",query:{type:"id",id:r},get:c=>c.thread.message({id:r})}),composer:ie({source:"message",query:{},get:c=>c.thread.message({id:r}).composer()})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,kl.jsx)(ae,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var Ge=require("react/jsx-runtime"),tn=(t,e)=>t.Message===e.Message&&t.EditComposer===e.EditComposer&&t.UserEditComposer===e.UserEditComposer&&t.AssistantEditComposer===e.AssistantEditComposer&&t.SystemEditComposer===e.SystemEditComposer&&t.UserMessage===e.UserMessage&&t.AssistantMessage===e.AssistantMessage&&t.SystemMessage===e.SystemMessage,Pl=()=>null,Dl=new WeakMap,Mh=(t,e)=>{let r=Dl.get(t);return r||(r=new Set(t.map(o=>o.id)),Dl.set(t,r)),r.has(e)},Ph=(t,e,r)=>{switch(e){case"user":return r?t.UserEditComposer??t.EditComposer??t.UserMessage??t.Message:t.UserMessage??t.Message;case"assistant":return r?t.AssistantEditComposer??t.EditComposer??t.AssistantMessage??t.Message:t.AssistantMessage??t.Message;case"system":return r?t.SystemEditComposer??t.EditComposer??t.SystemMessage??t.Message??Pl:t.SystemMessage??t.Message??Pl;default:throw new Error(`Unknown message role: ${e}`)}},rn=t=>{let e=g(6),{components:r}=t,o=R(Dh),i=R(Oh),s;e[0]!==r||e[1]!==i||e[2]!==o?(s=Ph(r,o,i),e[0]=r,e[1]=i,e[2]=o,e[3]=s):s=e[3];let n=s,a;return e[4]!==n?(a=(0,Ge.jsx)(n,{}),e[4]=n,e[5]=a):a=e[5],a},jr=X(t=>{let e=g(5),{index:r,components:o}=t,i;e[0]!==o?(i=(0,Ge.jsx)(rn,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,Ge.jsx)(Gs,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},(t,e)=>t.index===e.index&&tn(t.components,e.components));jr.displayName="ThreadPrimitive.MessageByIndex";var zr=X(t=>{let e=g(7),{messageId:r,components:o}=t,i;if(e[0]!==r?(i=a=>Mh(a.thread.messages,r),e[0]=r,e[1]=i):i=e[1],!R(i))return null;let s;e[2]!==o?(s=(0,Ge.jsx)(rn,{components:o}),e[2]=o,e[3]=s):s=e[3];let n;return e[4]!==r||e[5]!==s?(n=(0,Ge.jsx)(Ml,{id:r,children:s}),e[4]=r,e[5]=s,e[6]=n):n=e[6],n},(t,e)=>t.messageId===e.messageId&&tn(t.components,e.components));zr.displayName="ThreadPrimitive.Unstable_MessageById";var Ol=({children:t})=>{let e=R(Ze(r=>r.thread.messages.map(o=>o.id)));return z(()=>e.length===0?null:e.map((r,o)=>(0,Ge.jsx)(Gs,{index:o,children:(0,Ge.jsx)(at,{getItemState:i=>i.thread.message({index:o}).getState(),children:i=>t({get message(){return i()}})})},r)),[e,t])},gi=t=>{let e=g(4),{components:r,children:o}=t;if(r){let s;return e[0]!==r?(s=(0,Ge.jsx)(Ol,{children:()=>(0,Ge.jsx)(rn,{components:r})}),e[0]=r,e[1]=s):s=e[1],s}let i;return e[2]!==o?(i=(0,Ge.jsx)(Ol,{children:o}),e[2]=o,e[3]=i):i=e[3],i};gi.displayName="ThreadPrimitive.Messages";var vi=X(gi,(t,e)=>t.children||e.children?t.children===e.children:tn(t.components,e.components));function Dh(t){return t.message.role}function Oh(t){return t.message.composer.isEditing}var bi=t=>{let e=t.message.metadata;if(!(!e||typeof e!="object"))return e.custom?.quote};var cr=require("react/jsx-runtime");var Bl=class extends Error{constructor(e,r=`Component "${e}" is not in the generative-ui allowlist.`){super(r);m(this,"componentName");this.name="GenerativeUIRenderError",this.componentName=e}},Bh=t=>typeof t=="object"&&t!==null,Nl=t=>t==null?[]:Array.isArray(t)?t:[t],Vl=(t,e,r,o)=>{if(t==null)return null;if(typeof t=="string")return t;if(!Bh(t)||!("component"in t)||typeof t.component!="string")return typeof process<"u",null;let{component:i,props:s,children:n,key:a}=t,c=e[i];if(!c){if(r)return(0,cr.jsx)(r,{component:i,props:s},a??o);throw new Bl(i)}return ts(c,{...s??{},key:a??o},...Nl(n).map((l,u)=>Vl(l,e,r,`${o}/${u}`)))},qr=t=>{let e=g(11),{spec:r,components:o,Fallback:i}=t,s=r?.root,n;e[0]!==s?(n=Nl(s),e[0]=s,e[1]=n):n=e[1];let a=n,c;if(e[2]!==i||e[3]!==o||e[4]!==a){let u;e[6]!==i||e[7]!==o?(u=(h,d)=>Vl(h,o,i,`${d}`),e[6]=i,e[7]=o,e[8]=u):u=e[8],c=a.map(u),e[2]=i,e[3]=o,e[4]=a,e[5]=c}else c=e[5];let l;return e[9]!==c?(l=(0,cr.jsx)(cr.Fragment,{children:c}),e[9]=c,e[10]=l):l=e[10],l};qr.displayName="GenerativeUIRender";var wi=t=>{let e=g(4),{components:r,spec:o,Fallback:i}=t,s=R(Nh),n=o??s;if(!n)return null;let a;return e[0]!==i||e[1]!==r||e[2]!==n?(a=(0,cr.jsx)(qr,{spec:n,components:r,Fallback:i}),e[0]=i,e[1]=r,e[2]=n,e[3]=a):a=e[3],a};wi.displayName="MessagePrimitive.GenerativeUI";function Nh(t){let e=t.part;return e?.type==="generative-ui"?e.spec:void 0}var O=require("react/jsx-runtime"),on=t=>{let e=-1;return{startGroup:r=>{e===-1&&(e=r)},endGroup:(r,o)=>{e!==-1&&(o.push({type:t,startIndex:e,endIndex:r}),e=-1)},finalize:(r,o)=>{e!==-1&&o.push({type:t,startIndex:e,endIndex:r})}}},Vh=(t,e,r)=>{let o=[];if(e){let i=on("chainOfThoughtGroup");for(let s=0;s<t.length;s++){let n=t[s];n==="tool-call"||n==="reasoning"?i.startGroup(s):(i.endGroup(s-1,o),o.push({type:"single",index:s}))}i.finalize(t.length-1,o)}else{let i=on("toolGroup"),s=on("reasoningGroup");for(let n=0;n<t.length;n++){let a=t[n];a==="tool-call"?(s.endGroup(n-1,o),i.startGroup(n)):a==="reasoning"?(i.endGroup(n-1,o),s.startGroup(n)):(i.endGroup(n-1,o),s.endGroup(n-1,o),o.push({type:"single",index:n}))}i.finalize(t.length-1,o),s.finalize(t.length-1,o)}if(r){let i=new Set;for(let s of o){if(s.type==="single")continue;let n=r[s.startIndex];n!==void 0&&!i.has(n)&&(i.add(n),s.idKey=`id:${n}`)}}return o},Lh=t=>{let e=g(10),r=R(Ze(tf)),o=R(Ze(of)),i;e:{if(r.length===0){let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=[],e[0]=a):a=e[0];let c;e[1]!==o?(c={ranges:a,partIds:o},e[1]=o,e[2]=c):c=e[2],i=c;break e}let s;e[3]!==r||e[4]!==o||e[5]!==t?(s=Vh(r,t,o),e[3]=r,e[4]=o,e[5]=t,e[6]=s):s=e[6];let n;e[7]!==o||e[8]!==s?(n={ranges:s,partIds:o},e[7]=o,e[8]=s,e[9]=n):n=e[9],i=n}return i},$h=t=>{let e=g(9),r,o;e[0]!==t?({Fallback:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;e[3]!==r||e[4]!==o.toolName?(i=a=>a.tools.toolUIs[o.toolName]?.[0]?.render??r,e[3]=r,e[4]=o.toolName,e[5]=i):i=e[5];let s=R(i);if(!s)return null;let n;return e[6]!==s||e[7]!==o?(n=(0,O.jsx)(s,{...o}),e[6]=s,e[7]=o,e[8]=n):n=e[8],n},sn=(t,e,r)=>{let o=t.renderers[e]?.[0];return o||(t.fallbacks[0]??r)},Fh=t=>{let e=g(9),r,o;e[0]!==t?({Fallback:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;e[3]!==r||e[4]!==o.name?(i=a=>sn(a.dataRenderers,o.name,r),e[3]=r,e[4]=o.name,e[5]=i):i=e[5];let s=R(i);if(!s)return null;let n;return e[6]!==s||e[7]!==o?(n=(0,O.jsx)(s,{...o}),e[6]=s,e[7]=o,e[8]=n):n=e[8],n},$e={Text:()=>null,Reasoning:()=>null,Source:()=>null,Image:()=>null,File:()=>null,Unstable_Audio:()=>null,ToolGroup:({children:t})=>t,ReasoningGroup:({children:t})=>t},nn=t=>{let e=g(41),{components:r}=t,o;e[0]!==r?(o=r===void 0?{}:r,e[0]=r,e[1]=o):o=e[1];let{Text:i,Reasoning:s,Image:n,Source:a,File:c,Unstable_Audio:l,tools:u,data:h,generativeUI:d}=o,p=i===void 0?$e.Text:i,f=s===void 0?$e.Reasoning:s,v=n===void 0?$e.Image:n,b=a===void 0?$e.Source:a,y=c===void 0?$e.File:c,_=l===void 0?$e.Unstable_Audio:l,A;e[2]!==u?(A=u===void 0?{}:u,e[2]=u,e[3]=A):A=e[3];let I=A,S=F(),E=R(sf),C=E.type;if(C==="tool-call"){let w=S.part.addToolResult,k=S.part.resumeToolCall,D=S.part.respondToToolApproval;if("Override"in I){let Q;return e[4]!==w||e[5]!==E||e[6]!==D||e[7]!==k||e[8]!==I.Override?(Q=(0,O.jsx)(I.Override,{...E,addResult:w,resume:k,respondToApproval:D}),e[4]=w,e[5]=E,e[6]=D,e[7]=k,e[8]=I.Override,e[9]=Q):Q=e[9],Q}let P=I.by_name?.[E.toolName]??I.Fallback,$;return e[10]!==P||e[11]!==w||e[12]!==E||e[13]!==D||e[14]!==k?($=(0,O.jsx)($h,{...E,Fallback:P,addResult:w,resume:k,respondToApproval:D}),e[10]=P,e[11]=w,e[12]=E,e[13]=D,e[14]=k,e[15]=$):$=e[15],$}if(E.status?.type==="requires-action")throw new Error("Encountered unexpected requires-action status");switch(C){case"text":{let w;return e[16]!==p||e[17]!==E?(w=(0,O.jsx)(p,{...E}),e[16]=p,e[17]=E,e[18]=w):w=e[18],w}case"reasoning":{let w;return e[19]!==f||e[20]!==E?(w=(0,O.jsx)(f,{...E}),e[19]=f,e[20]=E,e[21]=w):w=e[21],w}case"source":{let w;return e[22]!==b||e[23]!==E?(w=(0,O.jsx)(b,{...E}),e[22]=b,e[23]=E,e[24]=w):w=e[24],w}case"image":{let w;return e[25]!==v||e[26]!==E?(w=(0,O.jsx)(v,{...E}),e[25]=v,e[26]=E,e[27]=w):w=e[27],w}case"file":{let w;return e[28]!==y||e[29]!==E?(w=(0,O.jsx)(y,{...E}),e[28]=y,e[29]=E,e[30]=w):w=e[30],w}case"audio":{let w;return e[31]!==_||e[32]!==E?(w=(0,O.jsx)(_,{...E}),e[31]=_,e[32]=E,e[33]=w):w=e[33],w}case"data":{let w=h?.by_name?.[E.name]??h?.Fallback,k;return e[34]!==w||e[35]!==E?(k=(0,O.jsx)(Fh,{...E,Fallback:w}),e[34]=w,e[35]=E,e[36]=k):k=e[36],k}case"generative-ui":{if(!d?.components)return typeof process<"u",null;let w=E,k;return e[37]!==d.Fallback||e[38]!==d.components||e[39]!==w.spec?(k=(0,O.jsx)(qr,{spec:w.spec,components:d.components,Fallback:d.Fallback}),e[37]=d.Fallback,e[38]=d.components,e[39]=w.spec,e[40]=k):k=e[40],k}default:return console.warn(`Unknown message part type: ${C}`),null}},yt=X(t=>{let e=g(5),{index:r,components:o}=t,i;e[0]!==o?(i=(0,O.jsx)(nn,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,O.jsx)(Lt,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},(t,e)=>t.index===e.index&&t.components?.Text===e.components?.Text&&t.components?.Reasoning===e.components?.Reasoning&&t.components?.Source===e.components?.Source&&t.components?.Image===e.components?.Image&&t.components?.File===e.components?.File&&t.components?.Unstable_Audio===e.components?.Unstable_Audio&&t.components?.tools===e.components?.tools&&t.components?.data===e.components?.data&&t.components?.generativeUI===e.components?.generativeUI&&t.components?.ToolGroup===e.components?.ToolGroup&&t.components?.ReasoningGroup===e.components?.ReasoningGroup);yt.displayName="MessagePrimitive.PartByIndex";var Uh=t=>{let e=g(6),{status:r,component:o}=t,i=r.type==="running",s;e[0]!==o||e[1]!==r?(s=(0,O.jsx)(o,{type:"text",text:"",status:r}),e[0]=o,e[1]=r,e[2]=s):s=e[2];let n;return e[3]!==i||e[4]!==s?(n=(0,O.jsx)($t,{text:"",isRunning:i,children:s}),e[3]=i,e[4]=s,e[5]=n):n=e[5],n},jh=Object.freeze({type:"complete"}),zh=Object.freeze({type:"running"}),qh=t=>{let e=g(6),{components:r}=t,o=R(nf);if(r?.Empty){let n;return e[0]!==r.Empty||e[1]!==o?(n=(0,O.jsx)(r.Empty,{status:o}),e[0]=r.Empty,e[1]=o,e[2]=n):n=e[2],n}if(o.type!=="running")return null;let i=r?.Text??$e.Text,s;return e[3]!==o||e[4]!==i?(s=(0,O.jsx)(Uh,{status:o,component:i}),e[3]=o,e[4]=i,e[5]=s):s=e[5],s},Ll=X(qh,(t,e)=>t.components?.Empty===e.components?.Empty&&t.components?.Text===e.components?.Text),Hh=t=>{let e=g(4),{components:r,enabled:o}=t,i;if(e[0]!==o?(i=n=>{if(!o||n.message.parts.length===0)return!1;let a=n.message.parts[n.message.parts.length-1];return a?.type!=="text"&&a?.type!=="reasoning"},e[0]=o,e[1]=i):i=e[1],!R(i))return null;let s;return e[2]!==r?(s=(0,O.jsx)(Ll,{components:r}),e[2]=r,e[3]=s):s=e[3],s},Gh=X(Hh,(t,e)=>t.enabled===e.enabled&&t.components?.Empty===e.components?.Empty&&t.components?.Text===e.components?.Text),Kh=t=>{let e=g(4),{Quote:r}=t,o=R(bi);if(!o)return null;let i;return e[0]!==r||e[1]!==o.messageId||e[2]!==o.text?(i=(0,O.jsx)(r,{text:o.text,messageId:o.messageId}),e[0]=r,e[1]=o.messageId,e[2]=o.text,e[3]=i):i=e[3],i},Qh=X(Kh);function $l(t,e){let r=t.toolUIs[e.toolName]?.[0]?.render??null;return r||(sl(e.mcp?.app?.resourceUri)&&t.mcpApp?t.mcpApp.render:null)}var Fl=()=>{let t=g(6),e=F(),r=R(af),o=R(cf);if(!o||r.type!=="tool-call")return null;let i;return t[0]!==o||t[1]!==e.part.addToolResult||t[2]!==e.part.respondToToolApproval||t[3]!==e.part.resumeToolCall||t[4]!==r?(i=(0,O.jsx)(o,{...r,addResult:e.part.addToolResult,resume:e.part.resumeToolCall,respondToApproval:e.part.respondToToolApproval}),t[0]=o,t[1]=e.part.addToolResult,t[2]=e.part.respondToToolApproval,t[3]=e.part.resumeToolCall,t[4]=r,t[5]=i):i=t[5],i},Ul=()=>{let t=g(3),e=R(lf),r=R(uf);if(!r||e.type!=="data")return null;let o=e,i;return t[0]!==r||t[1]!==o?(i=(0,O.jsx)(r,{...o}),t[0]=r,t[1]=o,t[2]=i):i=t[2],i},Wh=()=>{let t=g(2),e=R(df);if(e==="tool-call"){let r;return t[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,O.jsx)(Fl,{}),t[0]=r):r=t[0],r}if(e==="data"){let r;return t[1]===Symbol.for("react.memo_cache_sentinel")?(r=(0,O.jsx)(Ul,{}),t[1]=r):r=t[1],r}return null},Jh=Object.freeze({type:"text",text:"",status:zh}),Yh=({children:t})=>{let e=F(),r=R(o=>o.dataRenderers);return(0,O.jsx)(at,{getItemState:o=>o.part.getState(),children:o=>t({get part(){let i=o();if(i.type==="tool-call"){let s=$l(e.tools.getState(),i)!==null,n=e.part;return{...i,toolUI:s?(0,O.jsx)(Fl,{}):null,addResult:n.addToolResult,resume:n.resumeToolCall,respondToApproval:n.respondToToolApproval}}if(i.type==="data"){let s=sn(r,i.name,void 0)!==void 0;return{...i,dataRendererUI:s?(0,O.jsx)(Ul,{}):null}}return i}})})},an=t=>{let e=g(5),{index:r,children:o}=t,i;e[0]!==o?(i=(0,O.jsx)(Yh,{children:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,O.jsx)(Lt,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},Xh=t=>{let e=g(9),{children:r}=t,o=R(mf),i=R(pf),s=o===0&&i;if(o===0){if(!s)return null;let a;e[0]!==r?(a=r({part:Jh}),e[0]=r,e[1]=a):a=e[1];let c;return e[2]!==a?(c=(0,O.jsx)($t,{text:"",isRunning:!0,children:a}),e[2]=a,e[3]=c):c=e[3],c}let n;if(e[4]!==r||e[5]!==o){let a;e[7]!==r?(a=(c,l)=>(0,O.jsx)(an,{index:l,children:u=>r(u)??(0,O.jsx)(Wh,{})},l),e[7]=r,e[8]=a):a=e[8],n=(0,O.jsx)(O.Fragment,{children:Array.from({length:o},a)}),e[4]=r,e[5]=o,e[6]=n}else n=e[6];return n},Hr=t=>{let e=g(5),{components:r,unstable_showEmptyOnNonTextEnd:o,children:i}=t,s=o===void 0?!0:o;if(i){let a;return e[0]!==i?(a=(0,O.jsx)(Xh,{children:i}),e[0]=i,e[1]=a):a=e[1],a}let n;return e[2]!==r||e[3]!==s?(n=(0,O.jsx)(Zh,{components:r,unstable_showEmptyOnNonTextEnd:s}),e[2]=r,e[3]=s,e[4]=n):n=e[4],n};Hr.displayName="MessagePrimitive.Parts";var Zh=t=>{let e=g(15),{components:r,unstable_showEmptyOnNonTextEnd:o}=t,i=R(hf),s=!!r?.ChainOfThought,{ranges:n,partIds:a}=Lh(s),c;e:{if(i===0){let f;e[0]!==r?(f=(0,O.jsx)(Ll,{components:r}),e[0]=r,e[1]=f):f=e[1],c=f;break e}let p;if(e[2]!==r||e[3]!==n||e[4]!==a){let f=new Set,v=b=>{let y=a[b];return y!==void 0&&!f.has(y)?(f.add(y),`part-id:${y}`):`part-${b}`};p=n.map(b=>{if(b.type==="single")return(0,O.jsx)(yt,{index:b.index,components:r},b.index);if(b.type==="chainOfThoughtGroup"){let y=r?.ChainOfThought;return y?(0,O.jsx)(Hc,{startIndex:b.startIndex,endIndex:b.endIndex,children:(0,O.jsx)(y,{})},`chainOfThought-${b.idKey??b.startIndex}`):null}else if(b.type==="toolGroup"){let y=r?.ToolGroup??$e.ToolGroup;return(0,O.jsx)(y,{startIndex:b.startIndex,endIndex:b.endIndex,children:Array.from({length:b.endIndex-b.startIndex+1},(_,A)=>{let I=b.startIndex+A;return(0,O.jsx)(yt,{index:I,components:r},v(I))})},`tool-${b.idKey??b.startIndex}`)}else{let y=r?.ReasoningGroup??$e.ReasoningGroup;return(0,O.jsx)(y,{startIndex:b.startIndex,endIndex:b.endIndex,children:Array.from({length:b.endIndex-b.startIndex+1},(_,A)=>{let I=b.startIndex+A;return(0,O.jsx)(yt,{index:I,components:r},`part-${I}`)})},`reasoning-${b.startIndex}`)}}),e[2]=r,e[3]=n,e[4]=a,e[5]=p}else p=e[5];c=p}let l=c,u;e[6]!==r?(u=r?.Quote&&(0,O.jsx)(Qh,{Quote:r.Quote}),e[6]=r,e[7]=u):u=e[7];let h;e[8]!==r||e[9]!==o?(h=(0,O.jsx)(Gh,{components:r,enabled:o}),e[8]=r,e[9]=o,e[10]=h):h=e[10];let d;return e[11]!==l||e[12]!==u||e[13]!==h?(d=(0,O.jsxs)(O.Fragment,{children:[u,l,h]}),e[11]=l,e[12]=u,e[13]=h,e[14]=d):d=e[14],d};function ef(t){return t.type}function tf(t){return t.message.parts.map(ef)}function rf(t){return t.type==="tool-call"?t.toolCallId:void 0}function of(t){return t.message.parts.map(rf)}function sf(t){return t.part}function nf(t){return t.message.status??jh}function af(t){return t.part}function cf(t){return t.part.type==="tool-call"?$l(t.tools,t.part):null}function lf(t){return t.part}function uf(t){return t.part.type==="data"?sn(t.dataRenderers,t.part.name,void 0)??null:null}function df(t){return t.part.type}function mf(t){return t.message.parts.length}function pf(t){return(t.message.status?.type??"complete")==="running"}function hf(t){return t.message.parts.length}var ql=Symbol.for("@assistant-ui/groupBy.memoKey");var jl=t=>{let e=t.nextChildIdx++;return t.nodeKey===""?String(e):`${t.nodeKey}.${e}`},zl=(t,e)=>{if(!(e===void 0||t.claimed.has(e)))return t.claimed.add(e),`id:${e}`},Hl=(t,e)=>{let r={key:"",nodeKey:"",indices:[],children:[],nextChildIdx:0,claimed:new Set},o=[r],i=()=>{let s=o.pop(),n=o[o.length-1];n.children.push({type:"group",key:s.key,nodeKey:s.nodeKey,idKey:zl(n,e?.[s.indices[0]]),indices:s.indices,children:s.children})};for(let s=0;s<t.length;s++){let n=t[s],a=0;for(;a<o.length-1&&a<n.length&&o[a+1].key===n[a];)a++;for(;o.length-1>a;)i();for(;o.length-1<n.length;){let l=o[o.length-1];o.push({key:n[o.length-1],nodeKey:jl(l),indices:[],children:[],nextChildIdx:0,claimed:new Set})}let c=o[o.length-1];c.children.push({type:"part",index:s,nodeKey:jl(c),idKey:zl(c,e?.[s])});for(let l=1;l<o.length;l++)o[l].indices.push(s)}for(;o.length>1;)i();return r.children};var Ke=require("react/jsx-runtime"),ff=(t,e,r)=>{if(!r)return!1;switch(t){case"never":return!1;case"always":return!0;case"empty":return e.length===0;case"no-text":{let o=e[e.length-1];return o===void 0||o.type!=="text"&&o.type!=="reasoning"}}},Gl=()=>{throw new Error("MessagePrimitive.GroupedParts: rendered `children` under a leaf part. `children` is only meaningful for `group-\u2026` cases \u2014 add a matching case for the part type or return `null` to skip it.")},Kl=(t,e,r)=>{if(t.type==="part")return(0,Ke.jsx)(an,{index:t.index,children:({part:n})=>r({part:n,children:(0,Ke.jsx)(Gl,{})})},t.idKey?`part-${t.idKey}`:`part-${t.index}`);let{status:o,counts:i}=jc(e,t.indices),s={type:t.key,status:o,counts:i,indices:t.indices};return(0,Ke.jsx)(es,{children:r({part:s,children:(0,Ke.jsx)(Ke.Fragment,{children:t.children.map(n=>Kl(n,e,r))})})},t.idKey??t.nodeKey)},xi=({groupBy:t,indicator:e="no-text",children:r})=>{let o=R(Ze(c=>c.message.parts)),i=R(c=>c.tools.toolUIs),s=R(c=>e==="never"?!1:c.message.status?.type==="running"),n=t[ql]??t,a=z(()=>{let c={toolUIs:i};return Hl(o.map(l=>t(l,c)??[]),o.map(l=>l.type==="tool-call"?l.toolCallId:void 0))},[o,n,i]);return(0,Ke.jsxs)(Ke.Fragment,{children:[a.map(c=>Kl(c,o,r)),ff(e,o,s)&&r({part:{type:"indicator"},children:(0,Ke.jsx)(Gl,{})})]})};xi.displayName="MessagePrimitive.GroupedParts";var _i=require("react/jsx-runtime"),gf=t=>{let e=g(5),{children:r}=t,o=R(bi);if(!o)return null;let i;e[0]!==r||e[1]!==o?(i=r(o),e[0]=r,e[1]=o,e[2]=i):i=e[2];let s;return e[3]!==i?(s=(0,_i.jsx)(_i.Fragment,{children:i}),e[3]=i,e[4]=s):s=e[4],s},yi=X(gf);yi.displayName="MessagePrimitive.Quote";var lt=require("react/jsx-runtime"),Wl=(t,e)=>{switch(e.type){case"image":return t?.Image??t?.Attachment;case"document":return t?.Document??t?.Attachment;case"file":return t?.File??t?.Attachment;default:return t?.Attachment}},vf=t=>{let e=g(5),{components:r}=t,o=R(bf);if(!o)return null;let i=o,s;e[0]!==r||e[1]!==i?(s=Wl(r,i),e[0]=r,e[1]=i,e[2]=s):s=e[2];let n=s;if(!n)return null;let a;return e[3]!==n?(a=(0,lt.jsx)(n,{}),e[3]=n,e[4]=a):a=e[4],a},Gr=X(t=>{let e=g(5),{index:r,components:o}=t,i;e[0]!==o?(i=(0,lt.jsx)(vf,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,lt.jsx)(Hs,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},(t,e)=>t.index===e.index&&t.components?.Image===e.components?.Image&&t.components?.Document===e.components?.Document&&t.components?.File===e.components?.File&&t.components?.Attachment===e.components?.Attachment);Gr.displayName="MessagePrimitive.AttachmentByIndex";var Ql=({children:t})=>{let e=R(Ze(r=>r.message.role!=="user"?[]:(r.message.attachments??[]).map(o=>o.id)));return z(()=>e.map((r,o)=>(0,lt.jsx)(Hs,{index:o,children:(0,lt.jsx)(at,{getItemState:i=>i.message.attachment({index:o}).getState(),children:i=>t({get attachment(){return i()}})})},r)),[e,t])},Kr=t=>{let e=g(4),{components:r,children:o}=t;if(r){let s;return e[0]!==r?(s=(0,lt.jsx)(Ql,{children:n=>{let{attachment:a}=n,c=Wl(r,a);return c?(0,lt.jsx)(c,{}):null}}),e[0]=r,e[1]=s):s=e[1],s}let i;return e[2]!==o?(i=(0,lt.jsx)(Ql,{children:o}),e[2]=o,e[3]=i):i=e[3],i};Kr.displayName="MessagePrimitive.Attachments";function bf(t){return t.attachment}var Ut=t=>{let{children:e}=t;return R(wf)?e:null};Ut.displayName="MessagePartPrimitive.InProgress";function wf(t){return t.part.status.type==="running"}var ut=require("react/jsx-runtime"),Yl=t=>{let e=g(2),{components:r}=t,o=r.Suggestion,i;return e[0]!==o?(i=(0,ut.jsx)(o,{}),e[0]=o,e[1]=i):i=e[1],i},Qr=X(t=>{let e=g(5),{index:r,components:o}=t,i;e[0]!==o?(i=(0,ut.jsx)(Yl,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,ut.jsx)(Ks,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},(t,e)=>t.index===e.index&&t.components.Suggestion===e.components.Suggestion);Qr.displayName="ThreadPrimitive.SuggestionByIndex";var Jl=({children:t})=>{let e=R(r=>r.suggestions.suggestions.length);return z(()=>e===0?null:Array.from({length:e},(r,o)=>(0,ut.jsx)(Ks,{index:o,children:(0,ut.jsx)(at,{getItemState:i=>i.suggestions.suggestion({index:o}).getState(),children:i=>t({get suggestion(){return i()}})})},o)),[e,t])},Si=t=>{let e=g(4),{components:r,children:o}=t;if(r){let s;return e[0]!==r?(s=(0,ut.jsx)(Jl,{children:()=>(0,ut.jsx)(Yl,{components:r})}),e[0]=r,e[1]=s):s=e[1],s}let i;return e[2]!==o?(i=(0,ut.jsx)(Jl,{children:o}),e[2]=o,e[3]=i):i=e[3],i};Si.displayName="ThreadPrimitive.Suggestions";var Ti=X(Si,(t,e)=>t.children||e.children?t.children===e.children:t.components.Suggestion===e.components.Suggestion);var Xl=(t,e)=>t.thread.isDisabled||e&&t.thread.isRunning&&!t.thread.capabilities.queue,Zl=t=>{if(t.message.status?.type!=="incomplete"||t.message.status.reason!=="error")return;let e=t.message.status.error;return typeof e=="string"?e:typeof e=="object"&&e!==null&&"message"in e&&typeof e.message=="string"?e.message:e??"An error occurred"};var cn=t=>{let e=g(10),{prompt:r,send:o,clearComposer:i}=t,s=i===void 0?!0:i,n=F(),a=o??!1,c;e[0]!==a?(c=p=>Xl(p,a),e[0]=a,e[1]=c):c=e[1];let l=R(c),u;e[2]!==n||e[3]!==s||e[4]!==r||e[5]!==a?(u=()=>{if(a){let{isRunning:p,capabilities:f}=n.thread.getState();if(p&&!f.queue)return;n.thread.append({content:[{type:"text",text:r}],runConfig:n.composer.getState().runConfig}),s&&!p&&n.composer.setText("")}else if(s)n.composer.setText(r);else{let p=n.composer.getState().text;n.composer.setText([p,r].filter(xf).join(" "))}},e[2]=n,e[3]=s,e[4]=r,e[5]=a,e[6]=u):u=e[6];let h=u,d;return e[7]!==l||e[8]!==h?(d={trigger:h,disabled:l},e[7]=l,e[8]=h,e[9]=d):d=e[9],d};function xf(t){return t.trim()}var ln=()=>R(Zl);function eu(t,e){function r(o){let i=rt(t);if(!o?.optional&&!i)throw new Error(`This component must be used within ${e}.`);return i}return r}function Ci(t,e){function r(i){let s=t(i);return s?s[e]:null}function o(i){let s=!1,n;typeof i=="function"?n=i:i&&typeof i=="object"&&(s=!!i.optional,n=i.selector);let a=r({optional:s});return a?n?a(n):a():null}return{[e]:o,[`${e}Store`]:r}}var un=ge(null),_f=eu(un,"ThreadPrimitive.Viewport"),{useThreadViewport:ke,useThreadViewportStore:Me}=Ci(_f,"useThreadViewport");var lr,dn=()=>{if(lr)return lr;let t=()=>({apis:new Map,nextId:0,listeners:new Set});if(typeof window>"u")return lr=t(),lr;let e=window.__ASSISTANT_UI_DEVTOOLS_HOOK__;if(e)return lr=e,e;let r=t();return window.__ASSISTANT_UI_DEVTOOLS_HOOK__=r,lr=r,r},Ii=t=>{ne(dn().listeners,t,"DevTools")};var St,tu=(St=class{static register(e){let r=dn();for(let a of r.apis.values())if(a.api===e)return()=>{};let o=r.nextId++,i={api:e,logs:[]},s=e.on?.("*",a=>{let c=r.apis.get(o);c&&(c.logs.push({time:new Date,event:a.event,data:a.payload}),c.logs.length>St.MAX_EVENT_LOGS_PER_API&&(c.logs=c.logs.slice(-St.MAX_EVENT_LOGS_PER_API)),Ii(o))}),n=e.subscribe?.(()=>{Ii(o)});return r.apis.set(o,i),Ii(o),()=>{let a=dn();a.apis.get(o)&&(s?.(),n?.(),a.apis.delete(o),Ii(o))}}},m(St,"MAX_EVENT_LOGS_PER_API",200),St);var ru=t=>{let e,r=new Set,o=(l,u)=>{let h=typeof l=="function"?l(e):l;if(!Object.is(h,e)){let d=e;e=u??(typeof h!="object"||h===null)?h:Object.assign({},e,h),r.forEach(p=>p(e,d))}},i=()=>e,a={setState:o,getState:i,getInitialState:()=>c,subscribe:l=>(r.add(l),()=>r.delete(l))},c=e=t(o,i,a);return a},ou=(t=>t?ru(t):ru);var Wr=De(require("react"),1);var yf=t=>t;function Sf(t,e=yf){let r=Wr.default.useSyncExternalStore(t.subscribe,Wr.default.useCallback(()=>e(t.getState()),[t,e]),Wr.default.useCallback(()=>e(t.getInitialState()),[t,e]));return Wr.default.useDebugValue(r),r}var iu=t=>{let e=ou(t),r=o=>Sf(e,o);return Object.assign(r,e),r},su=(t=>t?iu(t):iu);var nu=t=>{let e=new Map,r=()=>{let o=0;for(let i of e.values())o+=i;t(o)};return{register:()=>{let o=Symbol();return e.set(o,0),{setHeight:i=>{e.get(o)!==i&&(e.set(o,i),r())},unregister:()=>{e.delete(o),r()}}}}},au=(t={})=>{let e=new Set,r=nu(n=>{s.setState({height:{...s.getState().height,viewport:n}})}),o=nu(n=>{s.setState({height:{...s.getState().height,inset:n}})}),i=(n,a)=>(s.setState({element:{...s.getState().element,[n]:a}}),()=>{s.getState().element[n]===a&&s.setState({element:{...s.getState().element,[n]:null}})}),s=su(()=>({isAtBottom:!0,scrollToBottom:({behavior:n="auto"}={})=>{ne(e,()=>({behavior:n}),"Thread viewport")},onScrollToBottom:n=>(e.add(n),()=>{e.delete(n)}),turnAnchor:t.turnAnchor??"bottom",topAnchorMessageClamp:{tallerThan:t.topAnchorMessageClamp?.tallerThan??"10em",visibleHeight:t.topAnchorMessageClamp?.visibleHeight??"6em"},height:{viewport:0,inset:0},element:{viewport:null,anchor:null,target:null},targetConfig:null,topAnchorTurn:null,registerViewport:r.register,registerContentInset:o.register,registerViewportElement:n=>i("viewport",n),registerAnchorElement:n=>i("anchor",n),registerAnchorTargetElement:(n,a)=>(s.setState({element:{...s.getState().element,target:n},targetConfig:n&&a?a:null}),()=>{s.getState().element.target===n&&s.setState({element:{...s.getState().element,target:null},targetConfig:null})}),setTopAnchorTurn:n=>{s.setState({topAnchorTurn:n})}}));return s};var jt=t=>t;var cu=require("react/jsx-runtime"),Tf=t=>{let e=g(11),r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r={optional:!0},e[0]=r):r=e[0];let o=Me(r),i;e[1]!==t?(i=()=>au(t),e[1]=t,e[2]=i):i=e[2];let[s]=U(i),n,a;e[3]!==o||e[4]!==s?(n=()=>o?.getState().onScrollToBottom(u=>{s.getState().scrollToBottom(u)}),a=[o,s],e[3]=o,e[4]=s,e[5]=n,e[6]=a):(n=e[5],a=e[6]),M(n,a);let c,l;return e[7]!==o||e[8]!==s?(c=()=>{if(o)return s.subscribe(u=>{o.getState().isAtBottom!==u.isAtBottom&&jt(o).setState({isAtBottom:u.isAtBottom})})},l=[s,o],e[7]=o,e[8]=s,e[9]=c,e[10]=l):(c=e[9],l=e[10]),M(c,l),s},ur=t=>{let e=g(7),{children:r,options:o}=t,i;e[0]!==o?(i=o===void 0?{}:o,e[0]=o,e[1]=i):i=e[1];let s=Tf(i),n;e[2]!==s?(n=()=>({useThreadViewport:s}),e[2]=s,e[3]=n):n=e[3];let[a]=U(n),c;return e[4]!==r||e[5]!==a?(c=(0,cu.jsx)(un.Provider,{value:a,children:r}),e[4]=r,e[5]=a,e[6]=c):c=e[6],c};var Jr=require("react/jsx-runtime"),Cf=()=>{let t=g(3),e=F(),r,o;return t[0]!==e?(r=()=>{typeof process>"u"},o=[e],t[0]=e,t[1]=r,t[2]=o):(r=t[1],o=t[2]),M(r,o),null},If=t=>{let e=g(8),{children:r,aui:o,config:i,runtime:s}=t,n=o??null,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=(0,Jr.jsx)(Cf,{}),e[0]=a):a=e[0];let c;e[1]!==r?(c=(0,Jr.jsx)(ur,{children:r}),e[1]=r,e[2]=c):c=e[2];let l;return e[3]!==i||e[4]!==s||e[5]!==n||e[6]!==c?(l=(0,Jr.jsxs)(Cs,{runtime:s,aui:n,config:i,children:[a,c]}),e[3]=i,e[4]=s,e[5]=n,e[6]=c,e[7]=l):l=e[7],l},mn=X(If);var fu=De(require("react"),1),gu=De(require("react-dom"),1);var Ri={};ji(Ri,{Root:()=>Af,Slot:()=>Af,Slottable:()=>kf,createSlot:()=>Yr,createSlottable:()=>vn});var le=De(require("react"),1);var lu=De(require("react"),1),Ef=Object.defineProperty,hn=(t,e)=>Ef(t,"name",{value:e,configurable:!0});function pn(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}hn(pn,"setRef");function fn(...t){return e=>{let r=!1,o=t.map(i=>{let s=pn(i,e);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let i=0;i<o.length;i++){let s=o[i];typeof s=="function"?s():pn(t[i],null)}}}}hn(fn,"composeRefs");function Pe(...t){return lu.useCallback(fn(...t),t)}hn(Pe,"useComposedRefs");var Rf=Object.defineProperty,Qe=(t,e)=>Rf(t,"name",{value:e,configurable:!0});function Yr(t){let e=le.forwardRef((r,o)=>{let{children:i,...s}=r,n=null,a=!1,c=[];gn(i)&&typeof Ei=="function"&&(i=Ei(i._payload)),le.Children.forEach(i,d=>{if(pu(d)){a=!0;let p=d,f="child"in p.props?p.props.child:p.props.children;gn(f)&&typeof Ei=="function"&&(f=Ei(f._payload)),n=Mf(p,f),c.push(n?.props?.children)}else c.push(d)}),n?n=le.cloneElement(n,void 0,c):!a&&le.Children.count(i)===1&&le.isValidElement(i)&&(n=i);let l=n?mu(n):void 0,u=Pe(o,l);if(!n){if(i||i===0)throw new Error(a?Of(t):Df(t));return i}let h=du(s,n.props??{});return n.type!==le.Fragment&&(h.ref=o?u:l),le.cloneElement(n,h)});return e.displayName=`${t}.Slot`,e}Qe(Yr,"createSlot");var Af=Yr("Slot"),uu=Symbol.for("radix.slottable");function vn(t){let e=Qe(r=>"child"in r?r.children(r.child):r.children,"Slottable");return e.displayName=`${t}.Slottable`,e.__radixId=uu,e}Qe(vn,"createSlottable");var kf=vn("Slottable"),Mf=Qe((t,e)=>{if("child"in t.props){let r=t.props.child;return le.isValidElement(r)?le.cloneElement(r,void 0,t.props.children(r.props.children)):null}return le.isValidElement(e)?e:null},"getSlottableElementFromSlottable");function du(t,e){let r={...e};for(let o in e){let i=t[o],s=e[o];/^on[A-Z]/.test(o)?i&&s?r[o]=(...a)=>{let c=s(...a);return i(...a),c}:i&&(r[o]=i):o==="style"?r[o]={...i,...s}:o==="className"&&(r[o]=[i,s].filter(Boolean).join(" "))}return{...t,...r}}Qe(du,"mergeProps");function mu(t){let e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?t.props.ref:t.props.ref||t.ref)}Qe(mu,"getElementRef");function pu(t){return le.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===uu}Qe(pu,"isSlottable");var Pf=Symbol.for("react.lazy");function gn(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===Pf&&"_payload"in t&&hu(t._payload)}Qe(gn,"isLazyComponent");function hu(t){return typeof t=="object"&&t!==null&&"then"in t}Qe(hu,"isPromiseLike");var Df=Qe(t=>`${t} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Of=Qe(t=>`${t} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Ei=le[" use ".trim().toString()];var vu=require("react/jsx-runtime"),Bf=Object.defineProperty,Nf=(t,e)=>Bf(t,"name",{value:e,configurable:!0}),Vf=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],bn=Vf.reduce((t,e)=>{let r=Yr(`Primitive.${e}`),o=fu.forwardRef((i,s)=>{let{asChild:n,...a}=i,c=n?r:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,vu.jsx)(c,{...a,ref:s})});return o.displayName=`Primitive.${e}`,{...t,[e]:o}},{});function wn(t,e){t&&gu.flushSync(()=>t.dispatchEvent(e))}Nf(wn,"dispatchDiscreteCustomEvent");var Lf=Object.defineProperty,dr=(t,e)=>Lf(t,"name",{value:e,configurable:!0}),bu=!!(typeof window<"u"&&window.document&&window.document.createElement);function Ai(t,e,{checkForDefaultPrevented:r=!0}={}){return dr(function(i){if(t?.(i),r===!1||!i||!i.defaultPrevented)return e?.(i)},"handleEvent")}dr(Ai,"composeEventHandlers");function $f(t){if(!bu)throw new Error("Cannot access window outside of the DOM");return t?.ownerDocument?.defaultView??window}dr($f,"getOwnerWindow");function xn(t){if(!bu)throw new Error("Cannot access document outside of the DOM");return t?.ownerDocument??document}dr(xn,"getOwnerDocument");function wu(t,e=!1){let{activeElement:r}=xn(t);if(!r?.nodeName)return null;if(xu(r)&&r.contentDocument)return wu(r.contentDocument.body,e);if(e){let o=r.getAttribute("aria-activedescendant");if(o){let i=xn(r).getElementById(o);if(i)return i}}return r}dr(wu,"getActiveElement");function xu(t){return t.tagName==="IFRAME"}dr(xu,"isFrame");var mr=De(require("react"),1),Ff=Object.defineProperty,Uf=(t,e)=>Ff(t,"name",{value:e,configurable:!0});function Tt(t){let e=mr.useRef(t);return mr.useEffect(()=>{e.current=t}),mr.useMemo(()=>((...r)=>e.current?.(...r)),[])}Uf(Tt,"useCallbackRef");var ki=bn;ki.dispatchDiscreteCustomEvent=wn;ki.Root=bn;var _u=Object.defineProperty,Mi=(t,e)=>{let r={};for(var o in t)_u(r,o,{get:t[o],enumerable:!0});return e||_u(r,Symbol.toStringTag,{value:"Module"}),r};var Pi=require("react/jsx-runtime");var jf=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"];function yu(t,e){return rs(t,void 0,e!==void 0?e:t.props.children)}function Su(t,e,r){return(0,Pi.jsx)(Ri.Root,{...r,children:yu(t,e)})}function zf(t){let e=ee((r,o)=>{let i=g(17),s,n,a,c;i[0]!==r?({render:a,asChild:s,children:n,...c}=r,i[0]=r,i[1]=s,i[2]=n,i[3]=a,i[4]=c):(s=i[1],n=i[2],a=i[3],c=i[4]);let l=t;if(a&&br(a)){let d=c,p;i[5]!==n||i[6]!==a?(p=yu(a,n),i[5]=n,i[6]=a,i[7]=p):p=i[7];let f;return i[8]!==o||i[9]!==d||i[10]!==p?(f=(0,Pi.jsx)(l,{...d,asChild:!0,ref:o,children:p}),i[8]=o,i[9]=d,i[10]=p,i[11]=f):f=i[11],f}let u=c,h;return i[12]!==s||i[13]!==n||i[14]!==o||i[15]!==u?(h=(0,Pi.jsx)(l,{...u,asChild:s,ref:o,children:n}),i[12]=s,i[13]=n,i[14]=o,i[15]=u,i[16]=h):h=i[16],h});return e.displayName=typeof t=="string"?t:t.displayName??t.name??"Component",e}function qf(t){let e=ki[t],r=zf(e);return r.displayName=`Primitive.${t}`,r}var xe=jf.reduce((t,e)=>(t[e]=qf(e),t),{});var Tu=require("react/jsx-runtime");var Di=(t,e,r=[])=>{let o=ee((i,s)=>{let n=g(6),a={},c={};Object.keys(i).forEach(v=>{r.includes(v)?a[v]=i[v]:c[v]=i[v]});let l=e(a)??void 0,u=xe,h="button",d=c.disabled||!l,p=Ai(c.onClick,l),f;return n[0]!==s||n[1]!==c||n[2]!==u.button||n[3]!==d||n[4]!==p?(f=(0,Tu.jsx)(u.button,{type:h,...c,ref:s,disabled:d,onClick:p}),n[0]=s,n[1]=c,n[2]=u.button,n[3]=d,n[4]=p,n[5]=f):f=n[5],f});return o.displayName=t,o};var Cu=t=>{let e=g(4),r=Tt(t),o=ke(Hf),i,s;e[0]!==r||e[1]!==o?(i=()=>o(r),s=[o,r],e[0]=r,e[1]=o,e[2]=i,e[3]=s):(i=e[2],s=e[3]),M(i,s)};function Hf(t){return t.onScrollToBottom}var Gf=()=>!1,Kf=()=>{},Iu=t=>{let e=g(4),r;e[0]!==t?(r=s=>{if(typeof window>"u"||t===null||!window.matchMedia)return Kf;let n=window.matchMedia(t);return n.addEventListener("change",s),()=>n.removeEventListener("change",s)},e[0]=t,e[1]=r):r=e[1];let o=r,i;return e[2]!==t?(i=()=>typeof window>"u"||t===null||!window.matchMedia?!1:window.matchMedia(t).matches,e[2]=t,e[3]=i):i=e[3],Je(o,i,Gf)};var Qf=Object.freeze({type:"complete"}),Wf=Object.freeze({type:"text",text:"",status:Qf}),Eu=()=>R(Jf);function Jf(t){return t.part.type!=="text"&&t.part.type!=="reasoning"?Wf:t.part}var Yf=require("react/jsx-runtime"),Xf=ge(null);function Zf(t){let e=rt(Xf);if(!t?.optional&&!e)throw new Error("This component must be used within a SmoothContextProvider.");return e}var{useSmoothStatus:cM,useSmoothStatusStore:Ru}=Ci(Zf,"useSmoothStatus");var Au=250,ku=5,eg=class{constructor(t,e){m(this,"animationFrameId",null);m(this,"lastUpdateTime",Date.now());m(this,"lastCommitTime",0);m(this,"targetText","");m(this,"drainMs",Au);m(this,"maxCharIntervalMs",ku);m(this,"maxCharsPerFrame",1/0);m(this,"minCommitMs",0);m(this,"currentText");m(this,"setText");m(this,"animate",()=>{let t=Date.now(),e=t-this.lastUpdateTime,r=this.targetText.length-this.currentText.length,o=Math.min(this.maxCharIntervalMs,this.drainMs/r),i=Math.min(r,this.maxCharsPerFrame),s=0;for(;e>=o&&s<i;)s++,e-=o;s===i&&i===this.maxCharsPerFrame&&(e=0),s!==r?this.animationFrameId=requestAnimationFrame(this.animate):this.animationFrameId=null,s!==0&&(this.currentText=this.targetText.slice(0,this.currentText.length+s),this.lastUpdateTime=t-e,(s===r||t-this.lastCommitTime>=this.minCommitMs)&&(this.lastCommitTime=t,this.setText(this.currentText)))});this.currentText=t,this.setText=e}start(){this.animationFrameId===null&&(this.lastUpdateTime=Date.now(),this.animate())}stop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}},_n=Object.freeze({type:"running"}),Oi=(t,e)=>t!==void 0&&t>0?t:e,Mu=(t,e=!1)=>{let{text:r}=t,o=Iu("(prefers-reduced-motion: reduce)"),i=typeof e=="object"&&e!==null?e:void 0,s=e!==!1&&e!==null&&!o,n=Oi(i?.drainMs,Au),a=Oi(i?.maxCharIntervalMs,ku),c=Oi(i?.maxCharsPerFrame,1/0),l=Oi(i?.minCommitMs,0),[u,h]=U(t.status.type==="running"?"":r),d=F(),p=R(()=>d.part),[f,v]=U(p);(p!==f||!r.startsWith(u))&&(v(p),h(t.status.type==="running"?"":r));let b=Ru({optional:!0}),y=Tt(I=>{if(h(I),b){let S=u!==I||t.status.type==="running"?_n:t.status;jt(b).setState(S,!0)}});M(()=>{if(b){let I=s&&(u!==r||t.status.type==="running")?_n:t.status;jt(b).setState(I,!0)}},[b,s,r,u,t.status]);let[_]=U(new eg(u,y));M(()=>{_.drainMs=n,_.maxCharIntervalMs=a,_.maxCharsPerFrame=c,_.minCommitMs=l},[_,n,a,c,l]);let A=L(p);return M(()=>{if(!s){_.stop();return}let I=A.current!==p;if(A.current=p,I||!r.startsWith(_.targetText)){t.status.type==="running"?(_.currentText="",_.targetText=r,_.lastCommitTime=0,_.start()):(_.currentText=r,_.targetText=r,_.stop(),y(r));return}if(_.targetText=r,t.status.type!=="running"){if(_.currentText===""){_.currentText=r,_.stop(),y(r);return}_.start();return}_.start()},[_,s,r,t.status.type,p,y]),M(()=>()=>{_.stop()},[_]),z(()=>s?{...t,text:u,status:r===u?t.status:_n}:t,[s,u,t,r])};var tg=Object.freeze({type:"complete"}),rg=Object.freeze({type:"image",image:"",status:tg}),Pu=()=>R(og);function og(t){return t.part.type!=="image"?rg:t.part}var Du=require("react/jsx-runtime"),Xr=ee(({smooth:t=!0,component:e=xe.span,render:r,...o},i)=>{let{text:s,status:n}=Mu(Eu(),t),a={"data-status":n.type,...o,ref:i};return r&&br(r)?Su(r,s,a):(0,Du.jsx)(e,{...a,children:s})});Xr.displayName="MessagePartPrimitive.Text";var Ou=require("react/jsx-runtime"),Zr=ee((t,e)=>{let r=g(4),{image:o}=Pu(),i;return r[0]!==e||r[1]!==o||r[2]!==t?(i=(0,Ou.jsx)(xe.img,{src:o,...t,ref:e}),r[0]=e,r[1]=o,r[2]=t,r[3]=i):i=r[3],i});Zr.displayName="MessagePartPrimitive.Image";var Fe=t=>{let e=g(2),r=L(void 0),o;return e[0]!==t?(o=i=>{r.current&&(r.current(),r.current=void 0),i&&(r.current=t(i))},e[0]=t,e[1]=o):o=e[1],o};var yn=(t,e)=>{let r=t.trim().match(/^(\d+(?:\.\d+)?|\.\d+)(em|px|rem)$/);if(!r)return Number.POSITIVE_INFINITY;let o=Number(r[1]),i=r[2];return i==="px"?o:i==="em"?o*(parseFloat(getComputedStyle(e).fontSize)||16):i==="rem"?o*(parseFloat(getComputedStyle(document.documentElement).fontSize)||16):Number.POSITIVE_INFINITY},Bu=t=>t.dataset.messageId,Nu=()=>{let t=document.createElement("div");return t.dataset.auiTopAnchorReserve="",t.style.height="0px",t.style.flexShrink="0",t.style.pointerEvents="none",t.setAttribute("aria-hidden","true"),t},Bi=(t,e)=>{let r=`${e}px`;return t.style.height!==r?(t.style.height=r,!0):!1},Vu=t=>{let e=window.devicePixelRatio||1;return Math.round(t*e)/e};var eo=require("react/jsx-runtime");var Lu=()=>{let t=g(4),e=F(),r;t[0]!==e.message?(r=()=>e.message,t[0]=e.message,t[1]=r):r=t[1];let o=R(r),i;return t[2]!==o?(i=s=>{let n=()=>{o.setIsHovering(!0)},a=()=>{o.setIsHovering(!1)};return s.addEventListener("mouseenter",n),s.addEventListener("mouseleave",a),s.matches(":hover")&&queueMicrotask(()=>o.setIsHovering(!0)),()=>{s.removeEventListener("mouseenter",n),s.removeEventListener("mouseleave",a),o.setIsHovering(!1)}},t[2]=o,t[3]=i):i=t[3],Fe(i)},ig=()=>{let t=g(2),e=ke(ug),r;return t[0]!==e?(r=o=>o.message.role==="user"&&o.message.index>0&&o.message.index===o.thread.messages.length-2&&o.thread.messages.at(-1)?.role==="assistant"&&(o.message.id===e||o.thread.isRunning),t[0]=e,t[1]=r):r=t[1],R(r)},sg=()=>{let t=g(2),e=ke(dg),r;return t[0]!==e?(r=o=>o.message.isLast&&o.message.role==="assistant"&&o.message.index>=1&&o.thread.messages.at(o.message.index-1)?.role==="user"&&(o.message.id===e||o.thread.isRunning),t[0]=e,t[1]=r):r=t[1],R(r)},ng=(t,e)=>{let r=g(3),o;return r[0]!==t||r[1]!==e?(o=i=>{if(t)return e.getState().registerAnchorElement(i)},r[0]=t,r[1]=e,r[2]=o):o=r[2],Fe(o)},ag=t=>{let e=g(3),{active:r,threadViewportStore:o}=t,i;return e[0]!==r||e[1]!==o?(i=s=>{if(!r)return;let n=o.getState(),a=n.topAnchorMessageClamp;return n.registerAnchorTargetElement(s,{tallerThan:yn(a.tallerThan,s),visibleHeight:yn(a.visibleHeight,s)})},e[0]=r,e[1]=o,e[2]=i):i=e[2],Fe(i)},cg=t=>{let e=g(7),r,o;e[0]!==t?({forwardedRef:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i=Lu(),s=Pe(r,i),n=R(mg),a;return e[3]!==n||e[4]!==o||e[5]!==s?(a=(0,eo.jsx)(xe.div,{...o,ref:s,"data-message-id":n}),e[3]=n,e[4]=o,e[5]=s,e[6]=a):a=e[6],a},lg=t=>{let e=g(13),r,o,i;e[0]!==t?({forwardedRef:r,threadViewportStore:i,...o}=t,e[0]=t,e[1]=r,e[2]=o,e[3]=i):(r=e[1],o=e[2],i=e[3]);let s=Lu(),n=ig(),a=sg(),c=ng(n,i),l;e[4]!==a||e[5]!==i?(l={active:a,threadViewportStore:i},e[4]=a,e[5]=i,e[6]=l):l=e[6];let u=ag(l),h=Pe(r,s,c,u),d=R(pg),p=n?"":void 0,f=a?"":void 0,v;return e[7]!==d||e[8]!==o||e[9]!==h||e[10]!==p||e[11]!==f?(v=(0,eo.jsx)(xe.div,{...o,ref:h,"data-message-id":d,"data-aui-top-anchor-user":p,"data-aui-top-anchor-target":f}),e[7]=d,e[8]=o,e[9]=h,e[10]=p,e[11]=f,e[12]=v):v=e[12],v},Sn=ee((t,e)=>{let r=g(7),o=Me();if(o.getState().turnAnchor==="top"){let s;return r[0]!==e||r[1]!==t||r[2]!==o?(s=(0,eo.jsx)(lg,{...t,forwardedRef:e,threadViewportStore:o}),r[0]=e,r[1]=t,r[2]=o,r[3]=s):s=r[3],s}let i;return r[4]!==e||r[5]!==t?(i=(0,eo.jsx)(cg,{...t,forwardedRef:e}),r[4]=e,r[5]=t,r[6]=i):i=r[6],i});Sn.displayName="MessagePrimitive.Root";function ug(t){return t.topAnchorTurn?.anchorId}function dg(t){return t.topAnchorTurn?.targetId}function mg(t){return t.message.id}function pg(t){return t.message.id}var dt=require("react/jsx-runtime"),Tn={...$e,Text:()=>(0,dt.jsxs)("p",{style:{whiteSpace:"pre-line"},children:[(0,dt.jsx)(Xr,{}),(0,dt.jsx)(Ut,{children:(0,dt.jsx)("span",{style:{fontFamily:"revert"},children:" \u25CF"})})]}),Image:()=>(0,dt.jsx)(Zr,{})},Ni=t=>{let e=g(10);if("children"in t){let a;return e[0]!==t.children?(a=(0,dt.jsx)(Hr,{children:t.children}),e[0]=t.children,e[1]=a):a=e[1],a}let r,o;e[2]!==t?({components:r,...o}=t,e[2]=t,e[3]=r,e[4]=o):(r=e[3],o=e[4]);let i;e[5]!==r?(i=r?{...r,Text:r.Text??Tn.Text,Image:r.Image??Tn.Image}:Tn,e[5]=r,e[6]=i):i=e[6];let s=i,n;return e[7]!==o||e[8]!==s?(n=(0,dt.jsx)(Hr,{components:s,...o}),e[7]=o,e[8]=s,e[9]=n):n=e[9],n};Ni.displayName="MessagePrimitive.Parts";var hg=t=>{let e=g(12),r;return e[0]!==t.assistant||e[1]!==t.copied||e[2]!==t.hasAttachments||e[3]!==t.hasBranches||e[4]!==t.hasContent||e[5]!==t.last||e[6]!==t.lastOrHover||e[7]!==t.speaking||e[8]!==t.submittedFeedback||e[9]!==t.system||e[10]!==t.user?(r=o=>{let{role:i,attachments:s,parts:n,branchCount:a,isLast:c,speech:l,isCopied:u,isHovering:h}=o.message;return!(t.hasBranches===!0&&a<2||t.user&&i!=="user"||t.assistant&&i!=="assistant"||t.system&&i!=="system"||t.lastOrHover===!0&&!h&&!c||t.last!==void 0&&t.last!==c||t.copied===!0&&!u||t.copied===!1&&u||t.speaking===!0&&l==null||t.speaking===!1&&l!=null||t.hasAttachments===!0&&(i!=="user"||!s?.length)||t.hasAttachments===!1&&i==="user"&&s?.length||t.hasContent===!0&&n.length===0||t.hasContent===!1&&n.length>0||t.submittedFeedback!==void 0&&(o.message.metadata.submittedFeedback?.type??null)!==t.submittedFeedback)},e[0]=t.assistant,e[1]=t.copied,e[2]=t.hasAttachments,e[3]=t.hasBranches,e[4]=t.hasContent,e[5]=t.last,e[6]=t.lastOrHover,e[7]=t.speaking,e[8]=t.submittedFeedback,e[9]=t.system,e[10]=t.user,e[11]=r):r=e[11],R(r)},Cn=t=>{let e=g(3),r,o;return e[0]!==t?({children:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]),hg(o)?r:null};Cn.displayName="MessagePrimitive.If";var In=t=>{let{children:e}=t;return ln()!==void 0?e:null};In.displayName="MessagePrimitive.Error";var G=require("react/jsx-runtime"),fg=t=>{let e=new Map;for(let o=0;o<t.length;o++){let i=t[o]?.parentId??o,s=e.get(i)??[];s.push(o),e.set(i,s)}let r=[];for(let[o,i]of e){let s=typeof o=="string"?o:void 0;r.push({groupKey:s,indices:i})}return r},gg=t=>{let e=g(4),r=R(Ig),o;e:{if(r.length===0){let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=[],e[0]=s):s=e[0],o=s;break e}let i;e[1]!==t||e[2]!==r?(i=t(r),e[1]=t,e[2]=r,e[3]=i):i=e[3],o=i}return o},vg=t=>{let e=g(9),r,o;e[0]!==t?({Fallback:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;e[3]!==r||e[4]!==o.toolName?(i=a=>a.tools.toolUIs[o.toolName]?.[0]?.render??r,e[3]=r,e[4]=o.toolName,e[5]=i):i=e[5];let s=R(i);if(!s)return null;let n;return e[6]!==s||e[7]!==o?(n=(0,G.jsx)(s,{...o}),e[6]=s,e[7]=o,e[8]=n):n=e[8],n},bg=t=>{let e=g(9),r,o;e[0]!==t?({Fallback:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;e[3]!==r||e[4]!==o.name?(i=a=>{let c=a.dataRenderers.renderers[o.name]??r;return Array.isArray(c)?c[0]??r:c},e[3]=r,e[4]=o.name,e[5]=i):i=e[5];let s=R(i);if(!s)return null;let n;return e[6]!==s||e[7]!==o?(n=(0,G.jsx)(s,{...o}),e[6]=s,e[7]=o,e[8]=n):n=e[8],n},Ct={Text:()=>(0,G.jsxs)("p",{style:{whiteSpace:"pre-line"},children:[(0,G.jsx)(Xr,{}),(0,G.jsx)(Ut,{children:(0,G.jsx)("span",{style:{fontFamily:"revert"},children:" \u25CF"})})]}),Reasoning:()=>null,Source:()=>null,Image:()=>(0,G.jsx)(Zr,{}),File:()=>null,Unstable_Audio:()=>null,Group:({children:t})=>t},wg=t=>{let e=g(37),{components:r}=t,o;e[0]!==r?(o=r===void 0?{}:r,e[0]=r,e[1]=o):o=e[1];let{Text:i,Reasoning:s,Image:n,Source:a,File:c,Unstable_Audio:l,tools:u,data:h}=o,d=i===void 0?Ct.Text:i,p=s===void 0?Ct.Reasoning:s,f=n===void 0?Ct.Image:n,v=a===void 0?Ct.Source:a,b=c===void 0?Ct.File:c,y=l===void 0?Ct.Unstable_Audio:l,_;e[2]!==u?(_=u===void 0?{}:u,e[2]=u,e[3]=_):_=e[3];let A=_,I=F(),S=R(Eg),E=S.type;if(E==="tool-call"){let C=I.part.addToolResult,w=I.part.resumeToolCall,k=I.part.respondToToolApproval;if("Override"in A){let $;return e[4]!==C||e[5]!==S||e[6]!==k||e[7]!==w||e[8]!==A.Override?($=(0,G.jsx)(A.Override,{...S,addResult:C,resume:w,respondToApproval:k}),e[4]=C,e[5]=S,e[6]=k,e[7]=w,e[8]=A.Override,e[9]=$):$=e[9],$}let D=A.by_name?.[S.toolName]??A.Fallback,P;return e[10]!==D||e[11]!==C||e[12]!==S||e[13]!==k||e[14]!==w?(P=(0,G.jsx)(vg,{...S,Fallback:D,addResult:C,resume:w,respondToApproval:k}),e[10]=D,e[11]=C,e[12]=S,e[13]=k,e[14]=w,e[15]=P):P=e[15],P}if(S.status?.type==="requires-action")throw new Error("Encountered unexpected requires-action status");switch(E){case"text":{let C;return e[16]!==d||e[17]!==S?(C=(0,G.jsx)(d,{...S}),e[16]=d,e[17]=S,e[18]=C):C=e[18],C}case"reasoning":{let C;return e[19]!==p||e[20]!==S?(C=(0,G.jsx)(p,{...S}),e[19]=p,e[20]=S,e[21]=C):C=e[21],C}case"source":{let C;return e[22]!==v||e[23]!==S?(C=(0,G.jsx)(v,{...S}),e[22]=v,e[23]=S,e[24]=C):C=e[24],C}case"image":{let C;return e[25]!==f||e[26]!==S?(C=(0,G.jsx)(f,{...S}),e[25]=f,e[26]=S,e[27]=C):C=e[27],C}case"file":{let C;return e[28]!==b||e[29]!==S?(C=(0,G.jsx)(b,{...S}),e[28]=b,e[29]=S,e[30]=C):C=e[30],C}case"audio":{let C;return e[31]!==y||e[32]!==S?(C=(0,G.jsx)(y,{...S}),e[31]=y,e[32]=S,e[33]=C):C=e[33],C}case"data":{let C=h?.by_name?.[S.name]??h?.Fallback,w;return e[34]!==C||e[35]!==S?(w=(0,G.jsx)(bg,{...S,Fallback:C}),e[34]=C,e[35]=S,e[36]=w):w=e[36],w}default:return console.warn(`Unknown message part type: ${E}`),null}},xg=t=>{let e=g(5),{partIndex:r,components:o}=t,i;e[0]!==o?(i=(0,G.jsx)(wg,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,G.jsx)(Lt,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},_g=X(xg,(t,e)=>t.partIndex===e.partIndex&&t.components?.Text===e.components?.Text&&t.components?.Reasoning===e.components?.Reasoning&&t.components?.Source===e.components?.Source&&t.components?.Image===e.components?.Image&&t.components?.File===e.components?.File&&t.components?.Unstable_Audio===e.components?.Unstable_Audio&&t.components?.tools===e.components?.tools&&t.components?.data===e.components?.data&&t.components?.Group===e.components?.Group),yg=t=>{let e=g(6),{status:r,component:o}=t,i=r.type==="running",s;e[0]!==o||e[1]!==r?(s=(0,G.jsx)(o,{type:"text",text:"",status:r}),e[0]=o,e[1]=r,e[2]=s):s=e[2];let n;return e[3]!==i||e[4]!==s?(n=(0,G.jsx)($t,{text:"",isRunning:i,children:s}),e[3]=i,e[4]=s,e[5]=n):n=e[5],n},Sg=Object.freeze({type:"complete"}),Tg=t=>{let e=g(6),{components:r}=t,o=R(Rg);if(r?.Empty){let n;return e[0]!==r.Empty||e[1]!==o?(n=(0,G.jsx)(r.Empty,{status:o}),e[0]=r.Empty,e[1]=o,e[2]=n):n=e[2],n}let i=r?.Text??Ct.Text,s;return e[3]!==o||e[4]!==i?(s=(0,G.jsx)(yg,{status:o,component:i}),e[3]=o,e[4]=i,e[5]=s):s=e[5],s},Cg=X(Tg,(t,e)=>t.components?.Empty===e.components?.Empty&&t.components?.Text===e.components?.Text),Vi=t=>{let e=g(9),{groupingFunction:r,components:o}=t,i=R(Ag),s=gg(r),n;e:{if(i===0){let u;e[0]!==o?(u=(0,G.jsx)(Cg,{components:o}),e[0]=o,e[1]=u):u=e[1],n=u;break e}let l;if(e[2]!==o||e[3]!==s){let u;e[5]!==o?(u=(h,d)=>{let p=o?.Group??Ct.Group;return(0,G.jsx)(p,{groupKey:h.groupKey,indices:h.indices,children:h.indices.map(f=>(0,G.jsx)(_g,{partIndex:f,components:o},f))},`group-${d}-${h.groupKey??"ungrouped"}`)},e[5]=o,e[6]=u):u=e[6],l=s.map(u),e[2]=o,e[3]=s,e[4]=l}else l=e[4];n=l}let a=n,c;return e[7]!==a?(c=(0,G.jsx)(G.Fragment,{children:a}),e[7]=a,e[8]=c):c=e[8],c};Vi.displayName="MessagePrimitive.Unstable_PartsGrouped";var En=t=>{let e=g(6),r,o;e[0]!==t?({components:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;return e[3]!==r||e[4]!==o?(i=(0,G.jsx)(Vi,{...o,components:r,groupingFunction:fg}),e[3]=r,e[4]=o,e[5]=i):i=e[5],i};En.displayName="MessagePrimitive.Unstable_PartsGroupedByParentId";function Ig(t){return t.message.parts}function Eg(t){return t.part}function Rg(t){return t.message.status??Sg}function Ag(t){return t.message.parts.length}var Li=Mi({AttachmentByIndex:()=>Gr,Attachments:()=>Kr,Content:()=>Ni,Error:()=>In,GenerativeUI:()=>wi,GroupedParts:()=>xi,If:()=>Cn,PartByIndex:()=>yt,Parts:()=>Ni,Quote:()=>yi,Root:()=>Sn,Unstable_PartsGrouped:()=>Vi,Unstable_PartsGroupedByParentId:()=>En});var $u=t=>{let e=g(2),r=Tt(t),o;return e[0]!==r?(o=i=>{let s=new ResizeObserver(()=>{r()}),n=new MutationObserver(a=>{a.some(kg)&&r()});return s.observe(i),n.observe(i,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),()=>{s.disconnect(),n.disconnect()}},e[0]=r,e[1]=o):o=e[1],Fe(o)};function kg(t){return t.type!=="attributes"||t.attributeName!=="style"}var Fu=({autoScroll:t,scrollToBottomOnRunStart:e=!0,scrollToBottomOnInitialize:r=!0,scrollToBottomOnThreadSwitch:o=!0})=>{let i=L(null),s=R(w=>w.thread.messages.length>0),n=R(w=>w.thread.isRunning),a=L(!1),c=L(null),l=Me();t===void 0&&(t=l.getState().turnAnchor!=="top");let u=L(0),h=L(0),d=L(0),p=L(0),f=L(null),v=L(t),b=L(t);Be(()=>{let w=b.current;if(b.current=t,w||!t)return;let k=i.current;v.current=k!==null&&Vo(k)},[t]);let y=vt(w=>{let k=i.current;k&&(v.current=!0,f.current=w,k.scrollTo({top:k.scrollHeight,behavior:w}))},[]),_=vt(()=>{c.current!==null&&(cancelAnimationFrame(c.current),c.current=null)},[]),A=vt(w=>{f.current=w,_(),c.current=requestAnimationFrame(()=>{c.current=null,y(w)})},[_,y]);Be(()=>()=>_(),[_]);let I=vt(()=>{let w=l.getState();return w.turnAnchor==="top"&&w.element.viewport===i.current&&w.element.anchor!==null},[l]),S=()=>{let w=i.current;if(!w)return;let k=l.getState().isAtBottom,D=Vo(w);if(!(!D&&u.current<w.scrollTop)){let P=ys({scrollTop:u.current,scrollHeight:h.current},w);D?(_s(w)&&(f.current=null),t&&(v.current=!0)):P&&(_(),f.current=null,v.current=!1),(D||f.current===null)&&D!==k&&jt(l).setState({isAtBottom:D})}u.current=w.scrollTop,h.current=w.scrollHeight},E=$u(()=>{let w=i.current;if(!w)return;let{scrollHeight:k,clientHeight:D}=w;if(k===d.current&&D===p.current)return;d.current=k,p.current=D;let P=f.current;P&&I()?f.current=null:P?y(P):t&&!(n&&I())&&v.current&&y("instant"),S()}),C=Fe(w=>{let k=()=>{f.current=null};return w.addEventListener("scroll",S),w.addEventListener("pointerdown",k),()=>{w.removeEventListener("scroll",S),w.removeEventListener("pointerdown",k)}});return Be(()=>{if(r){if(!s){a.current=!1;return}a.current||(a.current=!0,f.current===null&&A("instant"))}},[s,A,r]),Cu(({behavior:w})=>{y(w)}),Jo("thread.runStart",()=>{e&&l.getState().turnAnchor!=="top"&&A("auto")}),Jo("threads.selectionChanged",()=>{o&&A("instant")}),Pe(E,C,i)};var Uu=require("react/jsx-runtime"),Rn=ee((t,e)=>{let r=g(6),o=F(),i,s;r[0]!==o?(i=()=>{let a=c=>{if(c.key==="Escape"&&!(c.defaultPrevented||o.thread.source===null)&&o.thread.getState().speech!=null){c.preventDefault();try{o.thread.stopSpeaking()}catch(l){let u=l;if(!(u instanceof Error)||u.message!=="No message is being spoken")throw u}}};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},s=[o],r[0]=o,r[1]=i,r[2]=s):(i=r[1],s=r[2]),M(i,s);let n;return r[3]!==t||r[4]!==e?(n=(0,Uu.jsx)(xe.div,{...t,ref:e}),r[3]=t,r[4]=e,r[5]=n):n=r[5],n});Rn.displayName="ThreadPrimitive.Root";var An=t=>{let{children:e}=t;return R(Mg)?e:null};An.displayName="ThreadPrimitive.Empty";function Mg(t){return t.thread.isEmpty}var Pg=t=>{let e=g(4),r;return e[0]!==t.disabled||e[1]!==t.empty||e[2]!==t.running?(r=o=>!(t.empty===!0&&!o.thread.isEmpty||t.empty===!1&&o.thread.isEmpty||t.running===!0&&!o.thread.isRunning||t.running===!1&&o.thread.isRunning||t.disabled===!0&&!o.thread.isDisabled||t.disabled===!1&&o.thread.isDisabled),e[0]=t.disabled,e[1]=t.empty,e[2]=t.running,e[3]=r):r=e[3],R(r)},kn=t=>{let e=g(3),r,o;return e[0]!==t?({children:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]),Pg(o)?r:null};kn.displayName="ThreadPrimitive.If";var $i=(t,e)=>{let r=g(3),o;return r[0]!==e||r[1]!==t?(o=i=>{if(!t)return;let s=t(),n=()=>{let c=e?e(i):i.offsetHeight;s.setHeight(c)},a=new ResizeObserver(n);return a.observe(i),n(),()=>{a.disconnect(),s.unregister()}},r[0]=e,r[1]=t,r[2]=o):o=r[2],Fe(o)};var ju=t=>{let e=0,r=t;for(;r;)e+=r.offsetTop,r=r.offsetParent;return e},Dg=(t,e)=>{let r=0,o=t;for(;o&&o!==e;)r+=o.offsetTop,o=o.offsetParent;return o===e?r:ju(t)-ju(e)},Mn=({viewport:t,anchor:e,tallerThan:r,visibleHeight:o})=>{let i=Dg(e,t),s=e.offsetHeight;return i+Math.max(0,s-(s<=r?s:o))},Og=({scrollHeight:t,...e})=>{let{viewport:r}=e,o=Mn(e)+r.clientHeight;return Math.max(0,o-t)},zu=({viewport:t,reserve:e,...r})=>Og({viewport:t,...r,scrollHeight:t.scrollHeight-e.offsetHeight});var qu=t=>{let e=new ResizeObserver(t),r=new MutationObserver(t),o=null,i=null,s=null,n=()=>{e.disconnect(),r.disconnect(),o=null,i=null,s=null};return{target:(a,c,l)=>{o===a&&i===c&&s===l||(n(),e.observe(a),e.observe(c),e.observe(l),r.observe(l,{childList:!0,subtree:!0,characterData:!0}),o=a,i=c,s=l)},disconnect:n}};var Bg=t=>{let e=null;return{schedule:()=>{e===null&&(e=requestAnimationFrame(()=>{e=null,t()}))},cancel:()=>{e!==null&&(cancelAnimationFrame(e),e=null)}}},Hu=t=>{let e=null,r;function o(){let a=t.getState(),{viewport:c,anchor:l,target:u}=a.element,h=a.targetConfig;if(a.turnAnchor!=="top"||!c){s.disconnect(),e&&(Bi(e,0),e.remove());return}if(!l&&!u&&!h&&a.topAnchorTurn){s.disconnect(),e?.parentElement&&e.parentElement.lastElementChild!==e&&e.parentElement.append(e);return}if(!l||!u||!h){s.disconnect(),e&&(Bi(e,0),e.remove());return}if(e??(e=Nu()),(e.parentElement!==u.parentElement||e.previousElementSibling!==u)&&u.after(e),s.target(c,l,u),Bi(e,zu({viewport:c,anchor:l,reserve:e,...h}))){i.schedule();return}let d=Bu(l);if(d!==void 0&&r===d)return;let p=Vu(Mn({viewport:c,anchor:l,...h}));Math.abs(c.scrollTop-p)>1&&c.scrollTo({top:p,behavior:"smooth"}),d!==void 0&&(r=d)}let i=Bg(o),s=qu(i.schedule);i.schedule();let n=t.subscribe(i.schedule);return()=>{i.cancel(),n(),s.disconnect(),e?.remove()}};var Gu=t=>{let e=g(4),r=Me(),o,i;e[0]!==t||e[1]!==r?(o=()=>{if(t)return Hu(r)},i=[t,r],e[0]=t,e[1]=r,e[2]=o,e[3]=i):(o=e[2],i=e[3]),Be(o,i)};var Ku=(t,e)=>{if(!t)return!1;let r=e.findIndex(o=>o.id===t.targetId);return r<1?!1:e[r-1]?.id===t.anchorId&&e.slice(r+1).every(o=>o.role==="user")},Qu=({isRunning:t,messages:e})=>{if(!t)return null;let r=e.at(-1),o=e.at(-2);return o?.role!=="user"||r?.role!=="assistant"?null:{anchorId:o.id,targetId:r.id}},Wu=t=>Qu(t)?.anchorId,Ju=t=>Qu(t)?.targetId;var Fi=require("react/jsx-runtime");var Ng=()=>{let t=ke($g);return $i(t,Fg)},Vg=()=>{let t=ke(Ug);return Fe(t)},Lg=t=>{let e=g(19),r=Me(),o;e[0]!==t?(o=b=>{if(t)return Wu(b.thread)},e[0]=t,e[1]=o):o=e[1];let i=R(o),s;e[2]!==t?(s=b=>{if(t)return Ju(b.thread)},e[2]=t,e[3]=s):s=e[3];let n=R(s),a=ke(jg),c;e:{if(!i||!n){c=null;break e}let b;e[4]!==i||e[5]!==n?(b={anchorId:i,targetId:n},e[4]=i,e[5]=n,e[6]=b):b=e[6],c=b}let l=c,u;e[7]!==t||e[8]!==a?(u=b=>t&&!!a&&Ku(a,b.thread.messages),e[7]=t,e[8]=a,e[9]=u):u=e[9];let h=R(u),d,p;e[10]!==r||e[11]!==a||e[12]!==h?(d=()=>{!a||h||r.getState().setTopAnchorTurn(null)},p=[r,a,h],e[10]=r,e[11]=a,e[12]=h,e[13]=d,e[14]=p):(d=e[13],p=e[14]),Be(d,p);let f,v;e[15]!==l||e[16]!==r?(f=()=>{if(!l)return;let b=r.getState(),y=b.topAnchorTurn;y?.anchorId===l.anchorId&&y.targetId===l.targetId||b.setTopAnchorTurn(l)},v=[l,r],e[15]=l,e[16]=r,e[17]=f,e[18]=v):(f=e[17],v=e[18]),Be(f,v)},Yu=ee((t,e)=>{let r=g(18),o,i,s,n,a,c;r[0]!==t?({autoScroll:o,scrollToBottomOnRunStart:a,scrollToBottomOnInitialize:n,scrollToBottomOnThreadSwitch:c,children:i,...s}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s,r[4]=n,r[5]=a,r[6]=c):(o=r[1],i=r[2],s=r[3],n=r[4],a=r[5],c=r[6]);let l;r[7]!==o||r[8]!==n||r[9]!==a||r[10]!==c?(l={autoScroll:o,scrollToBottomOnRunStart:a,scrollToBottomOnInitialize:n,scrollToBottomOnThreadSwitch:c},r[7]=o,r[8]=n,r[9]=a,r[10]=c,r[11]=l):l=r[11];let u=Fu(l),h=Ng(),d=Vg(),p=Me(),f;r[12]!==p?(f=p.getState(),r[12]=p,r[13]=f):f=r[13];let v=f.turnAnchor==="top";Lg(v),Gu(v);let b=Pe(e,u,h,d),y;return r[14]!==i||r[15]!==b||r[16]!==s?(y=(0,Fi.jsx)(xe.div,{...s,ref:b,children:i}),r[14]=i,r[15]=b,r[16]=s,r[17]=y):y=r[17],y});Yu.displayName="ThreadPrimitive.ViewportScrollable";var Pn=ee((t,e)=>{let r=g(13),o,i,s;r[0]!==t?({turnAnchor:s,topAnchorMessageClamp:i,...o}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s):(o=r[1],i=r[2],s=r[3]);let n;r[4]!==i||r[5]!==s?(n={turnAnchor:s,topAnchorMessageClamp:i},r[4]=i,r[5]=s,r[6]=n):n=r[6];let a;r[7]!==o||r[8]!==e?(a=(0,Fi.jsx)(Yu,{...o,ref:e}),r[7]=o,r[8]=e,r[9]=a):a=r[9];let c;return r[10]!==n||r[11]!==a?(c=(0,Fi.jsx)(ur,{options:n,children:a}),r[10]=n,r[11]=a,r[12]=c):c=r[12],c});Pn.displayName="ThreadPrimitive.Viewport";function $g(t){return t.registerViewport}function Fg(t){return t.clientHeight}function Ug(t){return t.registerViewportElement}function jg(t){return t.topAnchorTurn}var Xu=require("react/jsx-runtime");var Dn=ee((t,e)=>{let r=g(3),o=ke(zg),i=$i(o,qg),s=Pe(e,i),n;return r[0]!==t||r[1]!==s?(n=(0,Xu.jsx)(xe.div,{...t,ref:s}),r[0]=t,r[1]=s,r[2]=n):n=r[2],n});Dn.displayName="ThreadPrimitive.ViewportFooter";function zg(t){return t.registerContentInset}function qg(t){let e=parseFloat(getComputedStyle(t).marginTop)||0;return t.offsetHeight+e}var Hg=t=>{let e=g(5),r;e[0]!==t?(r=t===void 0?{}:t,e[0]=t,e[1]=r):r=e[1];let{behavior:o}=r,i=ke(Gg),s=Me(),n;e[2]!==o||e[3]!==s?(n=()=>{s.getState().scrollToBottom({behavior:o})},e[2]=o,e[3]=s,e[4]=n):n=e[4];let a=n;return i?null:a},Zu=Di("ThreadPrimitive.ScrollToBottom",Hg,["behavior"]);function Gg(t){return t.isAtBottom}var Kg=t=>{let e=g(4),{prompt:r,send:o,clearComposer:i,autoSend:s}=t,n=o??s??!1,a;e[0]!==i||e[1]!==r||e[2]!==n?(a={prompt:r,send:n,clearComposer:i},e[0]=i,e[1]=r,e[2]=n,e[3]=a):a=e[3];let{disabled:c,trigger:l}=cn(a);return c?null:l},ed=Di("ThreadPrimitive.Suggestion",Kg,["prompt","send","clearComposer","autoSend","method"]);var to=Mi({Empty:()=>An,If:()=>kn,MessageByIndex:()=>jr,Messages:()=>vi,Root:()=>Rn,ScrollToBottom:()=>Zu,Suggestion:()=>ed,SuggestionByIndex:()=>Qr,Suggestions:()=>Ti,Unstable_MessageById:()=>zr,Viewport:()=>Pn,ViewportFooter:()=>Dn,ViewportProvider:()=>ur});var td=`/**
 * Cursor Dark Anysphere tokens for the Mux panel, mapped onto
 * assistant-ui's CSS variables so Thread/Composer primitives inherit the
 * scheme. Scoped under [data-mux-panel] \u2014 nothing here leaks into the host.
 *
 * Source: Cursor app theme \`cursor-dark-color-theme.json\` (Anysphere).
 * Focus keeps a visible ring even though Cursor often zeros focusBorder
 * (a11y: never remove focus indication; use the alpha ring token instead).
 */

[data-mux-panel] {
  /* Cursor palette */
  --mux-bg: #181818;
  --mux-rail: #141414;
  --mux-fg: #f0f0f0;
  --mux-muted: #8a8a8a;
  --mux-border: #f0f0f013;
  --mux-focus: #f0f0f040;
  --mux-selection: #f0f0f01e;
  --mux-accent: #81a1c1;
  --mux-primary: #81a1c1;
  --mux-on-primary: #191c22;
  --mux-ok: #3fa266;
  --mux-bad: #e34671;
  --mux-warn: #d2943e;
  --mux-badge: #88c0d0;
  --mux-input-bg: #f0f0f00a;

  /* assistant-ui / shadcn-style variable surface */
  --background: var(--mux-bg);
  --foreground: var(--mux-fg);
  --primary: var(--mux-primary);
  --primary-foreground: var(--mux-on-primary);
  --secondary: var(--mux-rail);
  --secondary-foreground: var(--mux-fg);
  --muted: var(--mux-rail);
  --muted-foreground: var(--mux-muted);
  --border: var(--mux-border);
  --input-background: var(--mux-input-bg);
  --ring: var(--mux-focus);

  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background: var(--mux-bg);
  color: var(--mux-fg);
  font: 13px/1.45 ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
}

[data-mux-panel] * { box-sizing: border-box; }
[data-mux-panel] ::selection { background: var(--mux-selection); }
[data-mux-panel] :focus-visible {
  outline: 2px solid var(--mux-focus);
  outline-offset: 1px;
}

/* \u2500\u2500 discovery strip (harness picker) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

[data-mux-strip] {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  padding: 8px 12px;
  border-bottom: 1px solid var(--mux-border);
}

[data-mux-chip] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  min-height: 28px;
  border: 1px solid var(--mux-border);
  border-radius: 999px;
  background: transparent;
  color: var(--mux-fg);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}

[data-mux-chip][data-active="true"] {
  border-color: var(--mux-primary);
  color: var(--mux-badge);
  background: color-mix(in srgb, var(--mux-primary) 12%, transparent);
}

[data-mux-chip][data-installed="false"],
[data-mux-chip][data-enabled="false"] {
  opacity: 0.5;
  cursor: not-allowed;
}

[data-mux-chip]:hover:not([disabled]) { border-color: var(--mux-focus); }

[data-mux-dot] {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--mux-muted);
}

[data-mux-dot][data-on="true"] { background: var(--mux-ok); }
[data-mux-dot][data-enabled="false"] { background: var(--mux-warn); }

/* \u2500\u2500 body: session rail + main \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

[data-mux-body] {
  display: flex;
  flex: 1;
  min-height: 0;
}

[data-mux-threads] {
  width: 250px;
  flex: none;
  border-right: 1px solid var(--mux-border);
  background: var(--mux-rail);
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow-y: auto;
}

[data-mux-threads-head] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid var(--mux-border);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--mux-muted);
  position: sticky;
  top: 0;
  background: var(--mux-rail);
  z-index: 1;
}

[data-mux-new],
[data-mux-delete] {
  border: 1px solid var(--mux-border);
  background: transparent;
  color: inherit;
  border-radius: 6px;
  padding: 3px 10px;
  min-height: 26px;
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}

[data-mux-new:hover],
[data-mux-delete:hover] { border-color: var(--mux-focus); }

[data-mux-delete] {
  margin-left: auto;
  padding: 0 7px;
  opacity: 0;
  color: var(--mux-muted);
}

[data-mux-thread]:hover [data-mux-delete] { opacity: 1; }

[data-mux-thread] {
  padding: 9px 12px;
  border-bottom: 1px solid var(--mux-border);
  cursor: pointer;
  position: relative;
}

[data-mux-thread][data-active="true"] { background: var(--mux-selection); }
[data-mux-thread]:hover { background: color-mix(in srgb, var(--mux-selection) 55%, transparent); }

[data-mux-thread-title] {
  display: flex;
  gap: 6px;
  align-items: center;
  font-weight: 600;
  font-size: 12.5px;
}

[data-mux-resume] {
  color: var(--mux-badge);
  font-size: 10px;
}

[data-mux-thread-preview] {
  color: var(--mux-muted);
  margin-top: 3px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

[data-mux-main] {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}

[data-mux-notice] {
  padding: 7px 12px;
  background: color-mix(in srgb, var(--mux-bad) 16%, transparent);
  color: #ffb4b4;
  font-size: 12.5px;
}

[data-mux-notice][data-kind="info"] {
  background: color-mix(in srgb, var(--mux-ok) 16%, transparent);
  color: #a9e5bb;
}

/* \u2500\u2500 assistant-ui thread surface \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

[data-mux-turns] {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 12px;
}

[data-mux-empty] {
  color: var(--mux-muted);
  margin: auto;
  text-align: center;
  padding: 24px;
}

[data-mux-turn] {
  margin-bottom: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  max-width: 90%;
  line-height: 1.45;
  white-space: pre-wrap;
  word-break: break-word;
  background: var(--mux-rail);
  border: 1px solid var(--mux-border);
}

/* user vs assistant: aui sets data-role on MessagePrimitive.Root */
[data-mux-turn][data-role="user"] {
  background: color-mix(in srgb, var(--mux-primary) 14%, transparent);
  border-color: color-mix(in srgb, var(--mux-primary) 30%, transparent);
  margin-left: auto;
}

[data-mux-turn][data-role="assistant"] { margin-right: auto; }

[data-mux-turn][data-mux-error="true"],
[data-mux-turn][data-is-error="true"] {
  background: color-mix(in srgb, var(--mux-bad) 14%, transparent);
  border-color: color-mix(in srgb, var(--mux-bad) 40%, transparent);
  color: #ffb4b4;
}

/* \u2500\u2500 composer (sticky, dense) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

[data-mux-composer] {
  display: flex;
  gap: 8px;
  padding: 10px 12px;
  border-top: 1px solid var(--mux-border);
  align-items: flex-end;
}

[data-mux-composer-root] {
  display: flex;
  gap: 8px;
  flex: 1;
  align-items: flex-end;
}

[data-mux-input],
[data-mux-composer] textarea {
  flex: 1;
  resize: none;
  min-height: 40px;
  max-height: 160px;
  background: var(--mux-input-bg);
  color: var(--mux-fg);
  border: 1px solid var(--mux-border);
  border-radius: 8px;
  padding: 9px 10px;
  font: inherit;
}

[data-mux-composer] textarea::placeholder { color: var(--mux-muted); }

[data-mux-send],
[data-mux-composer] button {
  border: none;
  background: var(--mux-primary);
  color: var(--mux-on-primary);
  border-radius: 8px;
  padding: 9px 16px;
  min-height: 40px;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

[data-mux-send]:hover:not([disabled]),
[data-mux-composer] button:hover:not([disabled]) {
  filter: brightness(1.08);
}

[data-mux-send][disabled],
[data-mux-composer] button[disabled] {
  opacity: 0.45;
  cursor: not-allowed;
}

[data-mux-badge] {
  font-size: 11px;
  color: var(--mux-badge);
  background: color-mix(in srgb, var(--mux-primary) 14%, transparent);
  border: 1px solid var(--mux-border);
  border-radius: 6px;
  padding: 4px 8px;
  white-space: nowrap;
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (prefers-reduced-motion: reduce) {
  [data-mux-panel] * {
    transition: none !important;
    animation: none !important;
  }
}
`;var rd=`/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */
@layer properties;
@property --tw-animation-delay {
  syntax: "*";
  inherits: false;
  initial-value: 0s;
}
@property --tw-animation-direction {
  syntax: "*";
  inherits: false;
  initial-value: normal;
}
@property --tw-animation-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-animation-fill-mode {
  syntax: "*";
  inherits: false;
  initial-value: none;
}
@property --tw-animation-iteration-count {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-enter-blur {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-enter-opacity {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-enter-rotate {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-enter-scale {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-enter-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-enter-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-exit-blur {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-exit-opacity {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-exit-rotate {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-exit-scale {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-exit-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-exit-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --shimmer-track-height {
  syntax: '<length>';
  inherits: true;
  initial-value: 200px;
}
@property --shimmer-angle {
  syntax: '<angle>';
  inherits: true;
  initial-value: 15deg;
}
@layer theme;
@layer base {
  :where(.aui-thread-root, .aui-modal-content) *, :where(.aui-thread-root, .aui-modal-content) ::after, :where(.aui-thread-root, .aui-modal-content) ::before, :where(.aui-thread-root, .aui-modal-content) ::backdrop, :where(.aui-thread-root, .aui-modal-content) ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  :where(.aui-thread-root, .aui-modal-content) html, :where(.aui-thread-root, .aui-modal-content) :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji');
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  :where(.aui-thread-root, .aui-modal-content) hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  :where(.aui-thread-root, .aui-modal-content) abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  :where(.aui-thread-root, .aui-modal-content) h1, :where(.aui-thread-root, .aui-modal-content) h2, :where(.aui-thread-root, .aui-modal-content) h3, :where(.aui-thread-root, .aui-modal-content) h4, :where(.aui-thread-root, .aui-modal-content) h5, :where(.aui-thread-root, .aui-modal-content) h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  :where(.aui-thread-root, .aui-modal-content) a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  :where(.aui-thread-root, .aui-modal-content) b, :where(.aui-thread-root, .aui-modal-content) strong {
    font-weight: bolder;
  }
  :where(.aui-thread-root, .aui-modal-content) code, :where(.aui-thread-root, .aui-modal-content) kbd, :where(.aui-thread-root, .aui-modal-content) samp, :where(.aui-thread-root, .aui-modal-content) pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  :where(.aui-thread-root, .aui-modal-content) small {
    font-size: 80%;
  }
  :where(.aui-thread-root, .aui-modal-content) sub, :where(.aui-thread-root, .aui-modal-content) sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  :where(.aui-thread-root, .aui-modal-content) sub {
    bottom: -0.25em;
  }
  :where(.aui-thread-root, .aui-modal-content) sup {
    top: -0.5em;
  }
  :where(.aui-thread-root, .aui-modal-content) table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :where(.aui-thread-root, .aui-modal-content) :-moz-focusring {
    outline: auto;
  }
  :where(.aui-thread-root, .aui-modal-content) progress {
    vertical-align: baseline;
  }
  :where(.aui-thread-root, .aui-modal-content) summary {
    display: list-item;
  }
  :where(.aui-thread-root, .aui-modal-content) ol, :where(.aui-thread-root, .aui-modal-content) ul, :where(.aui-thread-root, .aui-modal-content) menu {
    list-style: none;
  }
  :where(.aui-thread-root, .aui-modal-content) img, :where(.aui-thread-root, .aui-modal-content) svg, :where(.aui-thread-root, .aui-modal-content) video, :where(.aui-thread-root, .aui-modal-content) canvas, :where(.aui-thread-root, .aui-modal-content) audio, :where(.aui-thread-root, .aui-modal-content) iframe, :where(.aui-thread-root, .aui-modal-content) embed, :where(.aui-thread-root, .aui-modal-content) object {
    display: block;
    vertical-align: middle;
  }
  :where(.aui-thread-root, .aui-modal-content) img, :where(.aui-thread-root, .aui-modal-content) video {
    max-width: 100%;
    height: auto;
  }
  :where(.aui-thread-root, .aui-modal-content) button, :where(.aui-thread-root, .aui-modal-content) input, :where(.aui-thread-root, .aui-modal-content) select, :where(.aui-thread-root, .aui-modal-content) optgroup, :where(.aui-thread-root, .aui-modal-content) textarea, :where(.aui-thread-root, .aui-modal-content) ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(.aui-thread-root, .aui-modal-content) :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(.aui-thread-root, .aui-modal-content) :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  :where(.aui-thread-root, .aui-modal-content) ::file-selector-button {
    margin-inline-end: 4px;
  }
  :where(.aui-thread-root, .aui-modal-content) ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    :where(.aui-thread-root, .aui-modal-content) ::placeholder {
      color: currentcolor;
    }
    @supports (color: color-mix(in lab, red, red)) {
      :where(.aui-thread-root, .aui-modal-content) ::placeholder {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  :where(.aui-thread-root, .aui-modal-content) textarea {
    resize: vertical;
  }
  :where(.aui-thread-root, .aui-modal-content) ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  :where(.aui-thread-root, .aui-modal-content) ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  :where(.aui-thread-root, .aui-modal-content) ::-webkit-datetime-edit {
    display: inline-flex;
  }
  :where(.aui-thread-root, .aui-modal-content) ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  :where(.aui-thread-root, .aui-modal-content) ::-webkit-datetime-edit, :where(.aui-thread-root, .aui-modal-content) ::-webkit-datetime-edit-year-field, :where(.aui-thread-root, .aui-modal-content) ::-webkit-datetime-edit-month-field, :where(.aui-thread-root, .aui-modal-content) ::-webkit-datetime-edit-day-field, :where(.aui-thread-root, .aui-modal-content) ::-webkit-datetime-edit-hour-field, :where(.aui-thread-root, .aui-modal-content) ::-webkit-datetime-edit-minute-field, :where(.aui-thread-root, .aui-modal-content) ::-webkit-datetime-edit-second-field, :where(.aui-thread-root, .aui-modal-content) ::-webkit-datetime-edit-millisecond-field, :where(.aui-thread-root, .aui-modal-content) ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  :where(.aui-thread-root, .aui-modal-content) ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :where(.aui-thread-root, .aui-modal-content) :-moz-ui-invalid {
    box-shadow: none;
  }
  :where(.aui-thread-root, .aui-modal-content) button, :where(.aui-thread-root, .aui-modal-content) input:where([type='button'], [type='reset'], [type='submit']), :where(.aui-thread-root, .aui-modal-content) ::file-selector-button {
    appearance: button;
  }
  :where(.aui-thread-root, .aui-modal-content) ::-webkit-inner-spin-button, :where(.aui-thread-root, .aui-modal-content) ::-webkit-outer-spin-button {
    height: auto;
  }
  :where(.aui-thread-root, .aui-modal-content) [hidden]:where(:not([hidden='until-found'])) {
    display: none !important;
  }
}
:where(.aui-thread-root, .aui-modal-content) :where(.aui-thread-root, .aui-modal-content) :root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 10% 3.9%;
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
  --sidebar: 0 0% 100%;
  --sidebar-foreground: 240 10% 3.9%;
  --sidebar-primary: 240 5.9% 10%;
  --sidebar-primary-foreground: 0 0% 98%;
  --sidebar-accent: 240 4.8% 95.9%;
  --sidebar-accent-foreground: 240 5.9% 10%;
  --sidebar-border: 240 5.9% 90%;
  --sidebar-ring: 240 10% 3.9%;
  --radius: 0.5rem;
}
:where(.aui-thread-root, .aui-modal-content) .dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 240 10% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 240 4.9% 83.9%;
  --chart-1: 220 70% 50%;
  --chart-2: 160 60% 45%;
  --chart-3: 30 80% 55%;
  --chart-4: 280 65% 60%;
  --chart-5: 340 75% 55%;
  --sidebar: 240 10% 3.9%;
  --sidebar-foreground: 0 0% 98%;
  --sidebar-primary: 220 70% 50%;
  --sidebar-primary-foreground: 0 0% 98%;
  --sidebar-accent: 240 3.7% 15.9%;
  --sidebar-accent-foreground: 0 0% 98%;
  --sidebar-border: 240 3.7% 15.9%;
  --sidebar-ring: 240 4.9% 83.9%;
}
:where(.aui-thread-root, .aui-modal-content) :where(.aui-thread-root, .aui-modal-content) {
  color: var(--color-foreground);
}
:where(.aui-thread-root, .aui-modal-content) :where(.aui-thread-root, .aui-modal-content) * {
  border-color: var(--color-border);
  outline-color: color-mix(in srgb, hsl(var(--ring)) 50%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  :where(.aui-thread-root, .aui-modal-content) :where(.aui-thread-root, .aui-modal-content) * {
    outline-color: color-mix(in oklab, var(--color-ring) 50%, transparent);
  }
}
.aui-accordion-content {
  overflow: hidden;
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
}
.aui-accordion-content[data-state="closed"] {
  animation: accordion-up var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
}
.aui-accordion-content[data-state="open"] {
  animation: accordion-down var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
}
.aui-accordion-content:is(:where(.group\\/accordion)[data-variant="default"] *) {
  padding-bottom: calc(var(--spacing) * 4);
}
.aui-accordion-content:is(:where(.group\\/accordion)[data-variant="outline"] *) {
  border-top-style: var(--tw-border-style);
  border-top-width: 1px;
}
.aui-accordion-content:is(:where(.group\\/accordion)[data-variant="outline"] *) {
  padding-inline: calc(var(--spacing) * 4);
}
.aui-accordion-content:is(:where(.group\\/accordion)[data-variant="outline"] *) {
  padding-block: calc(var(--spacing) * 3);
}
.aui-accordion-content:is(:where(.group\\/accordion)[data-variant="ghost"] *) {
  padding-inline: calc(var(--spacing) * 4);
}
.aui-accordion-content:is(:where(.group\\/accordion)[data-variant="ghost"] *) {
  padding-block: calc(var(--spacing) * 3);
}
.aui-accordion-item:is(:where(.group\\/accordion)[data-variant="default"] *) {
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
}
.aui-accordion-item:is(:where(.group\\/accordion)[data-variant="default"] *):last-child {
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 0px;
}
.aui-accordion-item:is(:where(.group\\/accordion)[data-variant="outline"] *) {
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
}
.aui-accordion-item:is(:where(.group\\/accordion)[data-variant="outline"] *):last-child {
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 0px;
}
.aui-accordion-item:is(:where(.group\\/accordion)[data-variant="ghost"] *) {
  border-radius: var(--radius-lg);
}
.aui-accordion-item:is(:where(.group\\/accordion)[data-variant="ghost"] *)[data-state="open"] {
  background-color: color-mix(in srgb, hsl(var(--muted)) 50%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-accordion-item:is(:where(.group\\/accordion)[data-variant="ghost"] *)[data-state="open"] {
    background-color: color-mix(in oklab, var(--color-muted) 50%, transparent);
  }
}
.aui-accordion-item {
  display: flex;
}
.aui-accordion-trigger {
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: calc(var(--spacing) * 4);
  text-align: left;
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
  transition-property: all;
  --tw-outline-style: none;
  outline-style: none;
}
.aui-accordion-trigger:disabled {
  pointer-events: none;
}
.aui-accordion-trigger:disabled {
  opacity: 50%;
}
.aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="default"] *) {
  padding-block: calc(var(--spacing) * 4);
}
@media (hover: hover) {
  .aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="default"] *):hover {
    text-decoration-line: underline;
  }
}
.aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="default"] *):focus-visible {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="default"] *):focus-visible {
  --tw-ring-color: color-mix(in srgb, hsl(var(--ring)) 50%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="default"] *):focus-visible {
    --tw-ring-color: color-mix(in oklab, var(--color-ring) 50%, transparent);
  }
}
.aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="outline"] *) {
  padding-inline: calc(var(--spacing) * 4);
}
.aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="outline"] *) {
  padding-block: calc(var(--spacing) * 3);
}
@media (hover: hover) {
  .aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="outline"] *):hover {
    background-color: color-mix(in srgb, hsl(var(--muted)) 50%, transparent);
  }
  @supports (color: color-mix(in lab, red, red)) {
    .aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="outline"] *):hover {
      background-color: color-mix(in oklab, var(--color-muted) 50%, transparent);
    }
  }
}
.aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="outline"] *):focus-visible {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="outline"] *):focus-visible {
  --tw-ring-color: color-mix(in srgb, hsl(var(--ring)) 50%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="outline"] *):focus-visible {
    --tw-ring-color: color-mix(in oklab, var(--color-ring) 50%, transparent);
  }
}
.aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="outline"] *):focus-visible {
  --tw-ring-inset: inset;
}
.aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="ghost"] *) {
  border-radius: var(--radius-lg);
}
.aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="ghost"] *) {
  padding-inline: calc(var(--spacing) * 4);
}
.aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="ghost"] *) {
  padding-block: calc(var(--spacing) * 2);
}
@media (hover: hover) {
  .aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="ghost"] *):hover {
    background-color: color-mix(in srgb, hsl(var(--muted)) 50%, transparent);
  }
  @supports (color: color-mix(in lab, red, red)) {
    .aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="ghost"] *):hover {
      background-color: color-mix(in oklab, var(--color-muted) 50%, transparent);
    }
  }
}
.aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="ghost"] *):focus-visible {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="ghost"] *):focus-visible {
  --tw-ring-color: color-mix(in srgb, hsl(var(--ring)) 50%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-accordion-trigger:is(:where(.group\\/accordion)[data-variant="ghost"] *):focus-visible {
    --tw-ring-color: color-mix(in oklab, var(--color-ring) 50%, transparent);
  }
}
.aui-accordion-trigger {
  pointer-events: none;
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
  flex-shrink: 0;
  color: var(--color-muted-foreground);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 200ms;
  transition-duration: 200ms;
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
}
.aui-accordion-trigger:is(:where(.group\\/accordion-trigger)[data-state="open"] *) {
  rotate: 180deg;
}
.aui-action-bar-more-content {
  z-index: 50;
  min-width: calc(var(--spacing) * 32);
  overflow: hidden;
  border-radius: var(--radius-md);
  border-style: var(--tw-border-style);
  border-width: 1px;
  background-color: var(--color-popover);
  padding: calc(var(--spacing) * 1);
  color: var(--color-popover-foreground);
  --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.aui-action-bar-more-item {
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: calc(var(--spacing) * 2);
  border-radius: var(--radius-sm);
  padding-inline: calc(var(--spacing) * 2);
  padding-block: calc(var(--spacing) * 1.5);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  --tw-outline-style: none;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}
@media (hover: hover) {
  .aui-action-bar-more-item:hover {
    background-color: var(--color-accent);
  }
}
@media (hover: hover) {
  .aui-action-bar-more-item:hover {
    color: var(--color-accent-foreground);
  }
}
.aui-action-bar-more-item:focus {
  background-color: var(--color-accent);
}
.aui-action-bar-more-item:focus {
  color: var(--color-accent-foreground);
}
.aui-action-bar-more-item {
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
}
.aui-assistant-action-bar-root {
  grid-column-start: 3;
  grid-row-start: 2;
  margin-left: calc(var(--spacing) * -1);
  display: flex;
  gap: calc(var(--spacing) * 1);
  color: var(--color-muted-foreground);
}
.aui-assistant-action-bar-root[data-floating] {
  position: absolute;
}
.aui-assistant-action-bar-root[data-floating] {
  border-radius: var(--radius-md);
}
.aui-assistant-action-bar-root[data-floating] {
  border-style: var(--tw-border-style);
  border-width: 1px;
}
.aui-assistant-action-bar-root[data-floating] {
  background-color: var(--color-background);
}
.aui-assistant-action-bar-root[data-floating] {
  padding: calc(var(--spacing) * 1);
}
.aui-assistant-action-bar-root[data-floating] {
  --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.aui-assistant-action-bar-root[data-state="open"] {
  background-color: var(--color-accent);
}
.aui-assistant-message-content {
  padding-inline: calc(var(--spacing) * 2);
  --tw-leading: var(--leading-relaxed);
  line-height: var(--leading-relaxed);
  overflow-wrap: break-word;
  color: var(--color-foreground);
}
.aui-assistant-message-footer {
  margin-top: calc(var(--spacing) * 1);
  margin-left: calc(var(--spacing) * 2);
  display: flex;
}
.aui-assistant-message-root {
  position: relative;
  margin-inline: auto;
  width: 100%;
  max-width: var(--thread-max-width);
  animation: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
  padding-block: calc(var(--spacing) * 3);
  --tw-duration: 150ms;
  transition-duration: 150ms;
  --tw-enter-opacity: 0;
  --tw-enter-translate-y: calc(1*var(--spacing));
}
.aui-attachment-add-icon {
  width: calc(var(--spacing) * 5);
  height: calc(var(--spacing) * 5);
  stroke-width: 1.5px;
}
.aui-attachment-preview {
  position: relative;
  margin-inline: auto;
  display: flex;
  max-height: 80dvh;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--color-background);
}
.aui-attachment-preview-dialog-content {
  padding: calc(var(--spacing) * 2);
}
@media (width >= 40rem) {
  .aui-attachment-preview-dialog-content {
    max-width: var(--container-3xl);
  }
}
.aui-attachment-preview-dialog-content svg {
  color: var(--color-background);
}
.aui-attachment-preview-dialog-content>button {
  border-radius: calc(infinity * 1px);
}
.aui-attachment-preview-dialog-content>button {
  background-color: color-mix(in srgb, hsl(var(--foreground)) 60%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-attachment-preview-dialog-content>button {
    background-color: color-mix(in oklab, var(--color-foreground) 60%, transparent);
  }
}
.aui-attachment-preview-dialog-content>button {
  padding: calc(var(--spacing) * 1);
}
.aui-attachment-preview-dialog-content>button {
  opacity: 100%;
}
.aui-attachment-preview-dialog-content>button {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor) !important;
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow) !important;
}
@media (hover: hover) {
  .aui-attachment-preview-dialog-content>button:hover svg {
    color: var(--color-destructive);
  }
}
.aui-attachment-preview-dialog-content {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border-width: 0;
}
.aui-attachment-preview-image-loading {
  visibility: hidden;
}
.aui-attachment-preview-trigger {
  cursor: pointer;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
@media (hover: hover) {
  .aui-attachment-preview-trigger:hover {
    background-color: color-mix(in srgb, hsl(var(--accent)) 50%, transparent);
  }
  @supports (color: color-mix(in lab, red, red)) {
    .aui-attachment-preview-trigger:hover {
      background-color: color-mix(in oklab, var(--color-accent) 50%, transparent);
    }
  }
}
.aui-attachment-remove-icon {
  width: calc(var(--spacing) * 3);
  height: calc(var(--spacing) * 3);
}
.aui-attachment-remove-icon:where(.dark, .dark *) {
  stroke-width: 2.5px;
}
.aui-attachment-root {
  position: relative;
}
.aui-attachment-root-composer:only-child>#attachment-tile {
  width: calc(var(--spacing) * 24);
  height: calc(var(--spacing) * 24);
}
.aui-attachment-tile {
  width: calc(var(--spacing) * 14);
  height: calc(var(--spacing) * 14);
  cursor: pointer;
  overflow: hidden;
  border-radius: 14px;
  border-style: var(--tw-border-style);
  border-width: 1px;
  background-color: var(--color-muted);
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
@media (hover: hover) {
  .aui-attachment-tile:hover {
    opacity: 75%;
  }
}
.aui-attachment-tile-avatar {
  height: 100%;
  width: 100%;
  border-radius: 0;
}
.aui-attachment-tile-composer {
  border-color: color-mix(in srgb, hsl(var(--foreground)) 20%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-attachment-tile-composer {
    border-color: color-mix(in oklab, var(--color-foreground) 20%, transparent);
  }
}
.aui-attachment-tile-fallback-icon {
  width: calc(var(--spacing) * 8);
  height: calc(var(--spacing) * 8);
  color: var(--color-muted-foreground);
}
.aui-attachment-tile-image {
  object-fit: cover;
}
.aui-attachment-tile-remove {
  position: absolute;
  top: calc(var(--spacing) * 1.5);
  right: calc(var(--spacing) * 1.5);
  width: calc(var(--spacing) * 3.5);
  height: calc(var(--spacing) * 3.5);
  border-radius: calc(infinity * 1px);
  background-color: var(--color-white);
  color: var(--color-muted-foreground);
  opacity: 100%;
  --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
@media (hover: hover) {
  .aui-attachment-tile-remove:hover {
    background-color: var(--color-white) !important;
  }
}
.aui-attachment-tile-remove svg {
  color: var(--color-black);
}
@media (hover: hover) {
  .aui-attachment-tile-remove:hover svg {
    color: var(--color-destructive);
  }
}
.aui-branch-picker-root {
  margin-right: calc(var(--spacing) * 2);
  margin-left: calc(var(--spacing) * -2);
  display: inline-flex;
  align-items: center;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  color: var(--color-muted-foreground);
}
.aui-branch-picker-state {
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
}
.aui-button-icon {
  width: calc(var(--spacing) * 6);
  height: calc(var(--spacing) * 6);
  padding: calc(var(--spacing) * 1);
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border-width: 0;
}
.aui-code-header-language {
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
  color: var(--color-muted-foreground);
  text-transform: lowercase;
}
.aui-code-header-root {
  margin-top: calc(var(--spacing) * 2.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: var(--radius-lg);
  border-top-right-radius: var(--radius-lg);
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 0px;
  border-color: color-mix(in srgb, hsl(var(--border)) 50%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-code-header-root {
    border-color: color-mix(in oklab, var(--color-border) 50%, transparent);
  }
}
.aui-code-header-root {
  background-color: color-mix(in srgb, hsl(var(--muted)) 50%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-code-header-root {
    background-color: color-mix(in oklab, var(--color-muted) 50%, transparent);
  }
}
.aui-code-header-root {
  padding-inline: calc(var(--spacing) * 3);
  padding-block: calc(var(--spacing) * 1.5);
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
}
.aui-composer-action-wrapper {
  position: relative;
  margin-inline: calc(var(--spacing) * 2);
  margin-bottom: calc(var(--spacing) * 2);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.aui-composer-add-attachment {
  width: calc(var(--spacing) * 8.5);
  height: calc(var(--spacing) * 8.5);
  border-radius: calc(infinity * 1px);
  padding: calc(var(--spacing) * 1);
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  --tw-font-weight: var(--font-weight-semibold);
  font-weight: var(--font-weight-semibold);
}
@media (hover: hover) {
  .aui-composer-add-attachment:hover {
    background-color: color-mix(in srgb, hsl(var(--muted-foreground)) 15%, transparent);
  }
  @supports (color: color-mix(in lab, red, red)) {
    .aui-composer-add-attachment:hover {
      background-color: color-mix(in oklab, var(--color-muted-foreground) 15%, transparent);
    }
  }
}
.aui-composer-add-attachment:where(.dark, .dark *) {
  border-color: color-mix(in srgb, hsl(var(--muted-foreground)) 15%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-composer-add-attachment:where(.dark, .dark *) {
    border-color: color-mix(in oklab, var(--color-muted-foreground) 15%, transparent);
  }
}
@media (hover: hover) {
  .aui-composer-add-attachment:where(.dark, .dark *):hover {
    background-color: color-mix(in srgb, hsl(var(--muted-foreground)) 30%, transparent);
  }
  @supports (color: color-mix(in lab, red, red)) {
    .aui-composer-add-attachment:where(.dark, .dark *):hover {
      background-color: color-mix(in oklab, var(--color-muted-foreground) 30%, transparent);
    }
  }
}
.aui-composer-attachment-dropzone {
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: var(--radius-2xl);
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-color: var(--color-input);
  background-color: var(--color-background);
  padding-inline: calc(var(--spacing) * 1);
  padding-top: calc(var(--spacing) * 2);
  transition-property: box-shadow;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-outline-style: none;
  outline-style: none;
}
.aui-composer-attachment-dropzone:has(*:is(textarea:focus-visible)) {
  border-color: var(--color-ring);
}
.aui-composer-attachment-dropzone:has(*:is(textarea:focus-visible)) {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.aui-composer-attachment-dropzone:has(*:is(textarea:focus-visible)) {
  --tw-ring-color: color-mix(in srgb, hsl(var(--ring)) 20%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-composer-attachment-dropzone:has(*:is(textarea:focus-visible)) {
    --tw-ring-color: color-mix(in oklab, var(--color-ring) 20%, transparent);
  }
}
.aui-composer-attachment-dropzone[data-dragging="true"] {
  --tw-border-style: dashed;
  border-style: dashed;
}
.aui-composer-attachment-dropzone[data-dragging="true"] {
  border-color: var(--color-ring);
}
.aui-composer-attachment-dropzone[data-dragging="true"] {
  background-color: color-mix(in srgb, hsl(var(--accent)) 50%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-composer-attachment-dropzone[data-dragging="true"] {
    background-color: color-mix(in oklab, var(--color-accent) 50%, transparent);
  }
}
.aui-composer-attachments {
  margin-bottom: calc(var(--spacing) * 2);
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: calc(var(--spacing) * 2);
  overflow-x: auto;
  padding-inline: calc(var(--spacing) * 1.5);
  padding-top: calc(var(--spacing) * 0.5);
  padding-bottom: calc(var(--spacing) * 1);
}
.aui-composer-attachments:empty {
  display: none;
}
.aui-composer-cancel {
  width: calc(var(--spacing) * 8);
  height: calc(var(--spacing) * 8);
  border-radius: calc(infinity * 1px);
}
.aui-composer-cancel-icon {
  width: calc(var(--spacing) * 3);
  height: calc(var(--spacing) * 3);
  fill: currentcolor;
}
.aui-composer-input {
  margin-bottom: calc(var(--spacing) * 1);
  max-height: calc(var(--spacing) * 32);
  min-height: calc(var(--spacing) * 14);
  width: 100%;
  resize: none;
  background-color: transparent;
  padding-inline: calc(var(--spacing) * 4);
  padding-top: calc(var(--spacing) * 2);
  padding-bottom: calc(var(--spacing) * 3);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  --tw-outline-style: none;
  outline-style: none;
}
.aui-composer-input::placeholder {
  color: var(--color-muted-foreground);
}
.aui-composer-input:focus-visible {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.aui-composer-root {
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
}
.aui-composer-send {
  width: calc(var(--spacing) * 8);
  height: calc(var(--spacing) * 8);
  border-radius: calc(infinity * 1px);
}
.aui-composer-send-icon {
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
}
.aui-edit-composer-footer {
  margin-inline: calc(var(--spacing) * 3);
  margin-bottom: calc(var(--spacing) * 3);
  display: flex;
  align-items: center;
  gap: calc(var(--spacing) * 2);
  align-self: flex-end;
}
.aui-edit-composer-input {
  min-height: calc(var(--spacing) * 14);
  width: 100%;
  resize: none;
  background-color: transparent;
  padding: calc(var(--spacing) * 4);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  color: var(--color-foreground);
  --tw-outline-style: none;
  outline-style: none;
}
.aui-edit-composer-root {
  margin-left: auto;
  display: flex;
  width: 100%;
  max-width: 85%;
  flex-direction: column;
  border-radius: var(--radius-2xl);
  background-color: var(--color-muted);
}
.aui-edit-composer-wrapper {
  margin-inline: auto;
  display: flex;
  width: 100%;
  max-width: var(--thread-max-width);
  flex-direction: column;
  padding-inline: calc(var(--spacing) * 2);
  padding-block: calc(var(--spacing) * 3);
}
.aui-image-zoom-content {
  max-height: 90vh;
  max-width: 90vw;
  animation: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
  cursor: zoom-out;
  object-fit: contain;
  --tw-duration: 200ms;
  transition-duration: 200ms;
  --tw-enter-scale: calc(95*1%);
  --tw-enter-scale: .95;
  --tw-enter-opacity: 0;
}
.aui-image-zoom-overlay {
  position: fixed;
  inset: calc(var(--spacing) * 0);
  z-index: 50;
  display: flex;
  animation: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
  align-items: center;
  justify-content: center;
  background-color: color-mix(in srgb, #000 80%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-image-zoom-overlay {
    background-color: color-mix(in oklab, var(--color-black) 80%, transparent);
  }
}
.aui-image-zoom-overlay {
  --tw-duration: 200ms;
  transition-duration: 200ms;
  --tw-enter-opacity: 0;
}
.aui-image-zoom-trigger {
  cursor: zoom-in;
}
.aui-md-a {
  color: var(--color-primary);
  text-decoration-line: underline;
  text-underline-offset: 2px;
}
@media (hover: hover) {
  .aui-md-a:hover {
    color: color-mix(in srgb, hsl(var(--primary)) 80%, transparent);
  }
  @supports (color: color-mix(in lab, red, red)) {
    .aui-md-a:hover {
      color: color-mix(in oklab, var(--color-primary) 80%, transparent);
    }
  }
}
.aui-md-blockquote {
  margin-block: calc(var(--spacing) * 2.5);
  border-left-style: var(--tw-border-style);
  border-left-width: 2px;
  border-color: color-mix(in srgb, hsl(var(--muted-foreground)) 30%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-md-blockquote {
    border-color: color-mix(in oklab, var(--color-muted-foreground) 30%, transparent);
  }
}
.aui-md-blockquote {
  padding-left: calc(var(--spacing) * 3);
  color: var(--color-muted-foreground);
  font-style: italic;
}
.aui-md-h1 {
  margin-bottom: calc(var(--spacing) * 2);
  scroll-margin: calc(var(--spacing) * 20);
  font-size: var(--text-base);
  line-height: var(--tw-leading, var(--text-base--line-height));
  --tw-font-weight: var(--font-weight-semibold);
  font-weight: var(--font-weight-semibold);
}
.aui-md-h1:first-child {
  margin-top: calc(var(--spacing) * 0);
}
.aui-md-h1:last-child {
  margin-bottom: calc(var(--spacing) * 0);
}
.aui-md-h2 {
  margin-top: calc(var(--spacing) * 3);
  margin-bottom: calc(var(--spacing) * 1.5);
  scroll-margin: calc(var(--spacing) * 20);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  --tw-font-weight: var(--font-weight-semibold);
  font-weight: var(--font-weight-semibold);
}
.aui-md-h2:first-child {
  margin-top: calc(var(--spacing) * 0);
}
.aui-md-h2:last-child {
  margin-bottom: calc(var(--spacing) * 0);
}
.aui-md-h3 {
  margin-top: calc(var(--spacing) * 2.5);
  margin-bottom: calc(var(--spacing) * 1);
  scroll-margin: calc(var(--spacing) * 20);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  --tw-font-weight: var(--font-weight-semibold);
  font-weight: var(--font-weight-semibold);
}
.aui-md-h3:first-child {
  margin-top: calc(var(--spacing) * 0);
}
.aui-md-h3:last-child {
  margin-bottom: calc(var(--spacing) * 0);
}
.aui-md-h4 {
  margin-top: calc(var(--spacing) * 2);
  margin-bottom: calc(var(--spacing) * 1);
  scroll-margin: calc(var(--spacing) * 20);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
}
.aui-md-h4:first-child {
  margin-top: calc(var(--spacing) * 0);
}
.aui-md-h4:last-child {
  margin-bottom: calc(var(--spacing) * 0);
}
.aui-md-h5 {
  margin-top: calc(var(--spacing) * 2);
  margin-bottom: calc(var(--spacing) * 1);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
}
.aui-md-h5:first-child {
  margin-top: calc(var(--spacing) * 0);
}
.aui-md-h5:last-child {
  margin-bottom: calc(var(--spacing) * 0);
}
.aui-md-h6 {
  margin-top: calc(var(--spacing) * 2);
  margin-bottom: calc(var(--spacing) * 1);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
}
.aui-md-h6:first-child {
  margin-top: calc(var(--spacing) * 0);
}
.aui-md-h6:last-child {
  margin-bottom: calc(var(--spacing) * 0);
}
.aui-md-hr {
  margin-block: calc(var(--spacing) * 2);
  border-color: color-mix(in srgb, hsl(var(--muted-foreground)) 20%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-md-hr {
    border-color: color-mix(in oklab, var(--color-muted-foreground) 20%, transparent);
  }
}
.aui-md-inline-code {
  border-radius: var(--radius-md);
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-color: color-mix(in srgb, hsl(var(--border)) 50%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-md-inline-code {
    border-color: color-mix(in oklab, var(--color-border) 50%, transparent);
  }
}
.aui-md-inline-code {
  background-color: color-mix(in srgb, hsl(var(--muted)) 50%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-md-inline-code {
    background-color: color-mix(in oklab, var(--color-muted) 50%, transparent);
  }
}
.aui-md-inline-code {
  padding-inline: calc(var(--spacing) * 1.5);
  padding-block: calc(var(--spacing) * 0.5);
  font-family: var(--font-mono);
  font-size: 0.85em;
}
.aui-md-li {
  --tw-leading: var(--leading-normal);
  line-height: var(--leading-normal);
}
.aui-md-ol {
  margin-block: calc(var(--spacing) * 2);
  margin-left: calc(var(--spacing) * 4);
  list-style-type: decimal;
}
.aui-md-ol *::marker {
  color: var(--color-muted-foreground);
}
.aui-md-ol::marker {
  color: var(--color-muted-foreground);
}
.aui-md-ol *::-webkit-details-marker {
  color: var(--color-muted-foreground);
}
.aui-md-ol::-webkit-details-marker {
  color: var(--color-muted-foreground);
}
.aui-md-ol>li {
  margin-top: calc(var(--spacing) * 1);
}
.aui-md-p {
  margin-block: calc(var(--spacing) * 2.5);
  --tw-leading: var(--leading-normal);
  line-height: var(--leading-normal);
}
.aui-md-p:first-child {
  margin-top: calc(var(--spacing) * 0);
}
.aui-md-p:last-child {
  margin-bottom: calc(var(--spacing) * 0);
}
.aui-md-pre {
  overflow-x: auto;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: var(--radius-lg);
  border-bottom-left-radius: var(--radius-lg);
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-top-style: var(--tw-border-style);
  border-top-width: 0px;
  border-color: color-mix(in srgb, hsl(var(--border)) 50%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-md-pre {
    border-color: color-mix(in oklab, var(--color-border) 50%, transparent);
  }
}
.aui-md-pre {
  background-color: color-mix(in srgb, hsl(var(--muted)) 30%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-md-pre {
    background-color: color-mix(in oklab, var(--color-muted) 30%, transparent);
  }
}
.aui-md-pre {
  padding: calc(var(--spacing) * 3);
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  --tw-leading: var(--leading-relaxed);
  line-height: var(--leading-relaxed);
}
.aui-md-sup>a {
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
}
.aui-md-sup>a {
  text-decoration-line: none;
}
.aui-md-table {
  margin-block: calc(var(--spacing) * 2);
  width: 100%;
  border-collapse: separate;
  --tw-border-spacing-x: calc(var(--spacing) * 0);
  --tw-border-spacing-y: calc(var(--spacing) * 0);
  border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
  overflow-y: auto;
}
.aui-md-td {
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-left-style: var(--tw-border-style);
  border-left-width: 1px;
  border-color: color-mix(in srgb, hsl(var(--muted-foreground)) 20%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-md-td {
    border-color: color-mix(in oklab, var(--color-muted-foreground) 20%, transparent);
  }
}
.aui-md-td {
  padding-inline: calc(var(--spacing) * 2);
  padding-block: calc(var(--spacing) * 1);
  text-align: left;
}
.aui-md-td:last-child {
  border-right-style: var(--tw-border-style);
  border-right-width: 1px;
}
.aui-md-td:is([align=center]) {
  text-align: center;
}
.aui-md-td:is([align=right]) {
  text-align: right;
}
.aui-md-th {
  background-color: var(--color-muted);
  padding-inline: calc(var(--spacing) * 2);
  padding-block: calc(var(--spacing) * 1);
  text-align: left;
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
}
.aui-md-th:first-child {
  border-top-left-radius: var(--radius-lg);
}
.aui-md-th:last-child {
  border-top-right-radius: var(--radius-lg);
}
.aui-md-th:is([align=center]) {
  text-align: center;
}
.aui-md-th:is([align=right]) {
  text-align: right;
}
.aui-md-tr {
  margin: calc(var(--spacing) * 0);
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  padding: calc(var(--spacing) * 0);
}
.aui-md-tr:first-child {
  border-top-style: var(--tw-border-style);
  border-top-width: 1px;
}
.aui-md-tr:last-child>td:first-child {
  border-bottom-left-radius: var(--radius-lg);
}
.aui-md-tr:last-child>td:last-child {
  border-bottom-right-radius: var(--radius-lg);
}
.aui-md-ul {
  margin-block: calc(var(--spacing) * 2);
  margin-left: calc(var(--spacing) * 4);
  list-style-type: disc;
}
.aui-md-ul *::marker {
  color: var(--color-muted-foreground);
}
.aui-md-ul::marker {
  color: var(--color-muted-foreground);
}
.aui-md-ul *::-webkit-details-marker {
  color: var(--color-muted-foreground);
}
.aui-md-ul::-webkit-details-marker {
  color: var(--color-muted-foreground);
}
.aui-md-ul>li {
  margin-top: calc(var(--spacing) * 1);
}
.aui-mermaid-diagram {
  border-bottom-right-radius: var(--radius-lg);
  border-bottom-left-radius: var(--radius-lg);
  background-color: var(--color-muted);
  padding: calc(var(--spacing) * 2);
  text-align: center;
}
.aui-mermaid-diagram svg {
  margin-inline: auto;
}
.aui-message-error-message {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.aui-message-error-root {
  margin-top: calc(var(--spacing) * 2);
  border-radius: var(--radius-md);
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-color: var(--color-destructive);
  background-color: color-mix(in srgb, hsl(var(--destructive)) 10%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-message-error-root {
    background-color: color-mix(in oklab, var(--color-destructive) 10%, transparent);
  }
}
.aui-message-error-root {
  padding: calc(var(--spacing) * 3);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  color: var(--color-destructive);
}
.aui-message-error-root:where(.dark, .dark *) {
  background-color: color-mix(in srgb, hsl(var(--destructive)) 5%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-message-error-root:where(.dark, .dark *) {
    background-color: color-mix(in oklab, var(--color-destructive) 5%, transparent);
  }
}
.aui-message-error-root:where(.dark, .dark *) {
  color: var(--color-red-200);
}
.aui-modal-button {
  width: 100%;
  height: 100%;
  border-radius: calc(infinity * 1px);
  --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
@media (hover: hover) {
  .aui-modal-button:hover {
    --tw-scale-x: 110%;
    --tw-scale-y: 110%;
    --tw-scale-z: 110%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
}
.aui-modal-button:active {
  --tw-scale-x: 90%;
  --tw-scale-y: 90%;
  --tw-scale-z: 90%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.aui-modal-button-closed-icon {
  position: absolute;
  width: calc(var(--spacing) * 6);
  height: calc(var(--spacing) * 6);
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
.aui-modal-button-closed-icon[data-state="closed"] {
  --tw-scale-x: 100%;
  --tw-scale-y: 100%;
  --tw-scale-z: 100%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.aui-modal-button-closed-icon[data-state="closed"] {
  rotate: 0deg;
}
.aui-modal-button-closed-icon[data-state="open"] {
  --tw-scale-x: 0%;
  --tw-scale-y: 0%;
  --tw-scale-z: 0%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.aui-modal-button-closed-icon[data-state="open"] {
  rotate: 90deg;
}
.aui-modal-button-open-icon {
  width: calc(var(--spacing) * 6);
  height: calc(var(--spacing) * 6);
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
.aui-modal-button-open-icon[data-state="closed"] {
  --tw-scale-x: 0%;
  --tw-scale-y: 0%;
  --tw-scale-z: 0%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.aui-modal-button-open-icon[data-state="closed"] {
  rotate: calc(90deg * -1);
}
.aui-modal-button-open-icon[data-state="open"] {
  --tw-scale-x: 100%;
  --tw-scale-y: 100%;
  --tw-scale-z: 100%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.aui-modal-button-open-icon[data-state="open"] {
  rotate: 0deg;
}
.aui-modal-button-open-icon {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border-width: 0;
}
.aui-model-selector-trigger {
  min-width: 180px;
  position: relative;
  width: 100%;
  cursor: default;
  border-radius: var(--radius-lg);
  padding-block: calc(var(--spacing) * 2);
  padding-right: calc(var(--spacing) * 9);
  padding-left: calc(var(--spacing) * 3);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  --tw-outline-style: none;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}
.aui-model-selector-trigger:focus {
  background-color: var(--color-accent);
}
.aui-model-selector-trigger:focus {
  color: var(--color-accent-foreground);
}
.aui-model-selector-trigger[data-disabled] {
  pointer-events: none;
}
.aui-model-selector-trigger[data-disabled] {
  opacity: 50%;
}
.aui-model-selector-trigger {
  position: absolute;
  right: calc(var(--spacing) * 3);
  gap: calc(var(--spacing) * 2);
  display: flex;
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}
.aui-model-selector-trigger svg {
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
}
.aui-model-selector-trigger {
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  color: var(--color-muted-foreground);
}
.aui-reasoning-content {
  position: relative;
  overflow: hidden;
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  color: var(--color-muted-foreground);
  --tw-outline-style: none;
  outline-style: none;
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
}
.aui-reasoning-content[data-state="closed"] {
  animation: collapsible-up var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
}
.aui-reasoning-content[data-state="open"] {
  animation: collapsible-down var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
}
.aui-reasoning-content[data-state="closed"] {
  animation-fill-mode: forwards;
  --tw-animation-fill-mode: forwards;
}
.aui-reasoning-content[data-state="closed"] {
  pointer-events: none;
}
.aui-reasoning-content[data-state="open"] {
  --tw-duration: var(--animation-duration);
  transition-duration: var(--animation-duration);
}
.aui-reasoning-content[data-state="closed"] {
  --tw-duration: var(--animation-duration);
  transition-duration: var(--animation-duration);
}
.aui-reasoning-fade {
  pointer-events: none;
  position: absolute;
  inset-inline: calc(var(--spacing) * 0);
  bottom: calc(var(--spacing) * 0);
  z-index: 10;
  height: calc(var(--spacing) * 8);
  background-image: linear-gradient(to top,var(--color-background),transparent);
}
.aui-reasoning-fade:is(:where(.group\\/reasoning-root)[data-variant="muted"] *) {
  background-image: linear-gradient(to top,hsl(var(--muted)/0.5),transparent);
}
.aui-reasoning-fade {
  animation: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
  --tw-enter-opacity: calc(0/100);
  --tw-enter-opacity: 0;
}
.aui-reasoning-fade:is(:where(.group\\/collapsible-content)[data-state="open"] *) {
  animation: exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
}
.aui-reasoning-fade:is(:where(.group\\/collapsible-content)[data-state="open"] *) {
  --tw-exit-opacity: calc(0/100);
  --tw-exit-opacity: 0;
}
.aui-reasoning-fade:is(:where(.group\\/collapsible-content)[data-state="open"] *) {
  transition-delay: calc(var(--animation-duration) * 0.75);
}
.aui-reasoning-fade:is(:where(.group\\/collapsible-content)[data-state="open"] *) {
  animation-delay: calc(var(--animation-duration) * 0.75);
  --tw-animation-delay: calc(var(--animation-duration) * 0.75);
}
.aui-reasoning-fade:is(:where(.group\\/collapsible-content)[data-state="open"] *) {
  animation-fill-mode: forwards;
  --tw-animation-fill-mode: forwards;
}
.aui-reasoning-fade {
  --tw-duration: var(--animation-duration);
  transition-duration: var(--animation-duration);
}
.aui-reasoning-fade:is(:where(.group\\/collapsible-content)[data-state="open"] *) {
  --tw-duration: var(--animation-duration);
  transition-duration: var(--animation-duration);
}
.aui-reasoning-text {
  position: relative;
  z-index: 0;
  max-height: calc(var(--spacing) * 64);
  overflow-y: auto;
  padding-top: calc(var(--spacing) * 2);
  padding-bottom: calc(var(--spacing) * 2);
  padding-left: calc(var(--spacing) * 6);
  --tw-leading: var(--leading-relaxed);
  line-height: var(--leading-relaxed);
  transform: translateZ(0) var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  transition-property: transform,opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
.aui-reasoning-text:is(:where(.group\\/collapsible-content)[data-state="open"] *) {
  animation: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
}
.aui-reasoning-text:is(:where(.group\\/collapsible-content)[data-state="closed"] *) {
  animation: exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
}
.aui-reasoning-text:is(:where(.group\\/collapsible-content)[data-state="open"] *) {
  --tw-enter-opacity: calc(0/100);
  --tw-enter-opacity: 0;
}
.aui-reasoning-text:is(:where(.group\\/collapsible-content)[data-state="closed"] *) {
  --tw-exit-opacity: calc(0/100);
  --tw-exit-opacity: 0;
}
.aui-reasoning-text:is(:where(.group\\/collapsible-content)[data-state="open"] *) {
  --tw-enter-translate-y: calc(4*var(--spacing)*-1);
}
.aui-reasoning-text:is(:where(.group\\/collapsible-content)[data-state="closed"] *) {
  --tw-exit-translate-y: calc(4*var(--spacing)*-1);
}
.aui-reasoning-text:is(:where(.group\\/collapsible-content)[data-state="open"] *) {
  --tw-duration: var(--animation-duration);
  transition-duration: var(--animation-duration);
}
.aui-reasoning-text:is(:where(.group\\/collapsible-content)[data-state="closed"] *) {
  --tw-duration: var(--animation-duration);
  transition-duration: var(--animation-duration);
}
.aui-reasoning-trigger {
  display: flex;
  max-width: 75%;
  align-items: center;
  gap: calc(var(--spacing) * 2);
  padding-block: calc(var(--spacing) * 1);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  color: var(--color-muted-foreground);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
@media (hover: hover) {
  .aui-reasoning-trigger:hover {
    color: var(--color-foreground);
  }
}
.aui-reasoning-trigger-chevron {
  margin-top: calc(var(--spacing) * 0.5);
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
  flex-shrink: 0;
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: var(--animation-duration);
  transition-duration: var(--animation-duration);
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
}
.aui-reasoning-trigger-chevron:is(:where(.group\\/trigger)[data-state="closed"] *) {
  rotate: calc(90deg * -1);
}
.aui-reasoning-trigger-chevron:is(:where(.group\\/trigger)[data-state="open"] *) {
  rotate: 0deg;
}
.aui-reasoning-trigger-icon {
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
  flex-shrink: 0;
}
.aui-reasoning-trigger-label-wrapper {
  position: relative;
  display: inline-block;
  --tw-leading: 1;
  line-height: 1;
}
.aui-reasoning-trigger-shimmer {
  pointer-events: none;
  position: absolute;
  inset: calc(var(--spacing) * 0);
  --_gradient-width: calc(var(--_spread) + var(--shimmer-track-height) * tan(var(--shimmer-angle)));
  --_active-distance: calc(var(--shimmer-track-width, 200px) + var(--_gradient-width));
  --_duration: var(--shimmer-duration, calc(var(--_active-distance) / var(--_speed) / 1px * 1000));
  --_repeat-delay: var(--shimmer-repeat-delay, calc(20000 / var(--_speed)));
  --_repeat-delay-px: calc(var(--_repeat-delay) * var(--_active-distance) / var(--_duration));
  --_xy-offset-px: calc((var(--shimmer-x, 0) + var(--shimmer-y, 0) * tan(var(--shimmer-angle))) * 1px);
  --_bg-width: calc(
    100% +
    var(--shimmer-track-width, 100%) +
    var(--_gradient-width) +
    var(--_repeat-delay-px)
  );
  --_position: calc(
    var(--shimmer-track-width, (100% - var(--_gradient-width) - var(--_repeat-delay-px)) / 2)
    + var(--_gradient-width) / 2
    + var(--_repeat-delay-px)
    - var(--_xy-offset-px)
  );
}
.aui-reasoning-trigger-shimmer:not(.shimmer-bg) {
  --_speed: var(--shimmer-speed, 200);
  --_spread: var(--shimmer-spread, calc(4ch + 80px));
  --_bg: currentColor;
  --_fg: var(--shimmer-color, oklch(from currentColor l c h / calc(alpha * 0.2)));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.aui-reasoning-trigger-shimmer.shimmer-bg {
  --_speed: var(--shimmer-speed, 1000);
  --_spread: var(--shimmer-spread, 480px);
  --_bg: transparent;
  --_fg: var(--shimmer-color, oklch(from currentColor 0 c h / 0.06));
}
.aui-reasoning-trigger-shimmer:where(.dark, .dark *):not(.shimmer-bg) {
  --_fg: var(--shimmer-color, oklch(from currentColor max(0.8, calc(l + 0.4)) c h / calc(alpha + 0.4)));
}
.aui-reasoning-trigger-shimmer:where(.dark, .dark *).shimmer-bg {
  --_fg: var(--shimmer-color, oklch(from currentColor 0 c h / 0.30));
}
.aui-reasoning-trigger-shimmer {
  @-moz-document url-prefix() {
    --_duration: var(--shimmer-duration, calc(375000 / var(--_speed)));
  }
  --_mix-96: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-reasoning-trigger-shimmer {
    --_mix-96: color-mix(in oklch, var(--_fg), var(--_bg) 96%);
  }
}
.aui-reasoning-trigger-shimmer {
  --_mix-83: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-reasoning-trigger-shimmer {
    --_mix-83: color-mix(in oklch, var(--_fg), var(--_bg) 83%);
  }
}
.aui-reasoning-trigger-shimmer {
  --_mix-67: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-reasoning-trigger-shimmer {
    --_mix-67: color-mix(in oklch, var(--_fg), var(--_bg) 67%);
  }
}
.aui-reasoning-trigger-shimmer {
  --_mix-50: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-reasoning-trigger-shimmer {
    --_mix-50: color-mix(in oklch, var(--_fg), var(--_bg) 50%);
  }
}
.aui-reasoning-trigger-shimmer {
  --_mix-33: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-reasoning-trigger-shimmer {
    --_mix-33: color-mix(in oklch, var(--_fg), var(--_bg) 33%);
  }
}
.aui-reasoning-trigger-shimmer {
  --_mix-17: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-reasoning-trigger-shimmer {
    --_mix-17: color-mix(in oklch, var(--_fg), var(--_bg) 17%);
  }
}
.aui-reasoning-trigger-shimmer {
  --_mix-4: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-reasoning-trigger-shimmer {
    --_mix-4: color-mix(in oklch, var(--_fg), var(--_bg) 4%);
  }
}
.aui-reasoning-trigger-shimmer {
  background: linear-gradient( calc(90deg + var(--shimmer-angle)), var(--_bg) calc(var(--_position) - var(--_spread) * 0.5), var(--_mix-96) calc(var(--_position) - var(--_spread) * 0.44), var(--_mix-83) calc(var(--_position) - var(--_spread) * 0.37), var(--_mix-67) calc(var(--_position) - var(--_spread) * 0.31), var(--_mix-50) calc(var(--_position) - var(--_spread) * 0.25), var(--_mix-33) calc(var(--_position) - var(--_spread) * 0.19), var(--_mix-17) calc(var(--_position) - var(--_spread) * 0.12), var(--_mix-4) calc(var(--_position) - var(--_spread) * 0.06), var(--_fg) var(--_position), var(--_mix-4) calc(var(--_position) + var(--_spread) * 0.06), var(--_mix-17) calc(var(--_position) + var(--_spread) * 0.12), var(--_mix-33) calc(var(--_position) + var(--_spread) * 0.19), var(--_mix-50) calc(var(--_position) + var(--_spread) * 0.25), var(--_mix-67) calc(var(--_position) + var(--_spread) * 0.31), var(--_mix-83) calc(var(--_position) + var(--_spread) * 0.37), var(--_mix-96) calc(var(--_position) + var(--_spread) * 0.44), var(--_bg) calc(var(--_position) + var(--_spread) * 0.5) ) 0 0 / var(--_bg-width) 100% no-repeat;
  animation: tw-shimmer 1s linear 0s infinite backwards;
  animation-duration: calc((var(--_duration) + var(--_repeat-delay)) * 1ms);
}
@media (prefers-reduced-motion: reduce) {
  .aui-reasoning-trigger-shimmer {
    animation: none;
  }
}
.aui-root {
  position: fixed;
  right: calc(var(--spacing) * 4);
  bottom: calc(var(--spacing) * 4);
  width: calc(var(--spacing) * 11);
  height: calc(var(--spacing) * 11);
  z-index: 50;
  height: calc(var(--spacing) * 125);
  width: calc(var(--spacing) * 100);
  overflow: clip;
  overscroll-behavior: contain;
  border-radius: var(--radius-xl);
  border-style: var(--tw-border-style);
  border-width: 1px;
  background-color: var(--color-popover);
  padding: calc(var(--spacing) * 0);
  color: var(--color-popover-foreground);
  --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  --tw-outline-style: none;
  outline-style: none;
}
.aui-root[data-state="closed"] {
  animation: exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
}
.aui-root[data-state="closed"] {
  --tw-exit-opacity: calc(0/100);
  --tw-exit-opacity: 0;
}
.aui-root[data-state="closed"] {
  --tw-exit-translate-y: calc(1/2*100%);
}
.aui-root[data-state="closed"] {
  --tw-exit-translate-x: calc(1/2*100%);
}
.aui-root[data-state="closed"] {
  --tw-exit-scale: 0;
}
.aui-root[data-state="open"] {
  animation: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
}
.aui-root[data-state="open"] {
  --tw-enter-opacity: calc(0/100);
  --tw-enter-opacity: 0;
}
.aui-root[data-state="open"] {
  --tw-enter-translate-y: calc(1/2*100%);
}
.aui-root[data-state="open"] {
  --tw-enter-translate-x: calc(1/2*100%);
}
.aui-root[data-state="open"] {
  --tw-enter-scale: 0;
}
.aui-root>.aui-thread-root {
  background-color: inherit;
}
.aui-root {
  gap: calc(var(--spacing) * 1);
  container-type: inline-size;
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: var(--color-background);
}
.aui-shiki-base pre {
  overflow-x: auto;
}
.aui-shiki-base pre {
  border-bottom-right-radius: var(--radius-lg);
  border-bottom-left-radius: var(--radius-lg);
}
.aui-shiki-base pre {
  background-color: color-mix(in srgb, hsl(var(--muted)) 75%, transparent) !important;
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-shiki-base pre {
    background-color: color-mix(in oklab, var(--color-muted) 75%, transparent) !important;
  }
}
.aui-shiki-base pre {
  padding: calc(var(--spacing) * 4);
}
.aui-sidebar-content {
  padding-inline: calc(var(--spacing) * 2);
}
.aui-sidebar-footer {
  border-top-style: var(--tw-border-style);
  border-top-width: 1px;
}
.aui-sidebar-footer-heading {
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 0.5);
  --tw-leading: 1;
  line-height: 1;
}
.aui-sidebar-footer-icon {
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
}
.aui-sidebar-footer-icon-wrapper {
  display: flex;
  aspect-ratio: 1 / 1;
  width: calc(var(--spacing) * 8);
  height: calc(var(--spacing) * 8);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  background-color: var(--color-sidebar-primary);
  color: var(--color-sidebar-primary-foreground);
}
.aui-sidebar-footer-title {
  --tw-font-weight: var(--font-weight-semibold);
  font-weight: var(--font-weight-semibold);
}
.aui-sidebar-header {
  margin-bottom: calc(var(--spacing) * 2);
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
}
.aui-sidebar-header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.aui-sidebar-header-heading {
  margin-right: calc(var(--spacing) * 6);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 0.5);
  --tw-leading: 1;
  line-height: 1;
}
.aui-sidebar-header-icon {
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
}
.aui-sidebar-header-icon-wrapper {
  display: flex;
  aspect-ratio: 1 / 1;
  width: calc(var(--spacing) * 8);
  height: calc(var(--spacing) * 8);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  background-color: var(--color-sidebar-primary);
  color: var(--color-sidebar-primary-foreground);
}
.aui-sidebar-header-title {
  --tw-font-weight: var(--font-weight-semibold);
  font-weight: var(--font-weight-semibold);
}
.aui-thread-followup-suggestion {
  border-radius: calc(infinity * 1px);
  border-style: var(--tw-border-style);
  border-width: 1px;
  background-color: var(--color-background);
  padding-inline: calc(var(--spacing) * 3);
  padding-block: calc(var(--spacing) * 1);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-ease: var(--ease-in);
  transition-timing-function: var(--ease-in);
}
@media (hover: hover) {
  .aui-thread-followup-suggestion:hover {
    background-color: color-mix(in srgb, hsl(var(--muted)) 80%, transparent);
  }
  @supports (color: color-mix(in lab, red, red)) {
    .aui-thread-followup-suggestion:hover {
      background-color: color-mix(in oklab, var(--color-muted) 80%, transparent);
    }
  }
}
.aui-thread-followup-suggestions {
  display: flex;
  min-height: calc(var(--spacing) * 8);
  align-items: center;
  justify-content: center;
  gap: calc(var(--spacing) * 2);
}
.aui-thread-list-item {
  display: flex;
  height: calc(var(--spacing) * 9);
  align-items: center;
  gap: calc(var(--spacing) * 2);
  border-radius: var(--radius-lg);
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
@media (hover: hover) {
  .aui-thread-list-item:hover {
    background-color: var(--color-muted);
  }
}
.aui-thread-list-item:focus-visible {
  background-color: var(--color-muted);
}
.aui-thread-list-item:focus-visible {
  --tw-outline-style: none;
  outline-style: none;
}
.aui-thread-list-item[data-active] {
  background-color: var(--color-muted);
}
.aui-thread-list-item-more {
  margin-right: calc(var(--spacing) * 2);
  width: calc(var(--spacing) * 7);
  height: calc(var(--spacing) * 7);
  padding: calc(var(--spacing) * 0);
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
@media (hover: hover) {
  .aui-thread-list-item-more:is(:where(.group):hover *) {
    opacity: 100%;
  }
}
.aui-thread-list-item-more:is(:where(.group)[data-active] *) {
  opacity: 100%;
}
.aui-thread-list-item-more[data-state="open"] {
  background-color: var(--color-accent);
}
.aui-thread-list-item-more[data-state="open"] {
  opacity: 100%;
}
.aui-thread-list-item-more {
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border-width: 0;
}
.aui-thread-list-item-more-content {
  z-index: 50;
  min-width: calc(var(--spacing) * 32);
  overflow: hidden;
  border-radius: var(--radius-md);
  border-style: var(--tw-border-style);
  border-width: 1px;
  background-color: var(--color-popover);
  padding: calc(var(--spacing) * 1);
  color: var(--color-popover-foreground);
  --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
@media (hover: hover) {
  .aui-thread-list-item-more-item:hover {
    background-color: var(--color-accent);
  }
}
@media (hover: hover) {
  .aui-thread-list-item-more-item:hover {
    color: var(--color-accent-foreground);
  }
}
.aui-thread-list-item-more-item:focus {
  background-color: var(--color-accent);
}
.aui-thread-list-item-more-item:focus {
  color: var(--color-accent-foreground);
}
.aui-thread-list-item-more-item {
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: calc(var(--spacing) * 2);
  border-radius: var(--radius-sm);
  padding-inline: calc(var(--spacing) * 2);
  padding-block: calc(var(--spacing) * 1.5);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  color: var(--color-destructive);
  --tw-outline-style: none;
  outline-style: none;
  -webkit-user-select: none;
  user-select: none;
}
@media (hover: hover) {
  .aui-thread-list-item-more-item:hover {
    background-color: color-mix(in srgb, hsl(var(--destructive)) 10%, transparent);
  }
  @supports (color: color-mix(in lab, red, red)) {
    .aui-thread-list-item-more-item:hover {
      background-color: color-mix(in oklab, var(--color-destructive) 10%, transparent);
    }
  }
}
@media (hover: hover) {
  .aui-thread-list-item-more-item:hover {
    color: var(--color-destructive);
  }
}
.aui-thread-list-item-more-item:focus {
  background-color: color-mix(in srgb, hsl(var(--destructive)) 10%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-thread-list-item-more-item:focus {
    background-color: color-mix(in oklab, var(--color-destructive) 10%, transparent);
  }
}
.aui-thread-list-item-more-item:focus {
  color: var(--color-destructive);
}
.aui-thread-list-item-more-item {
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
}
.aui-thread-list-item-trigger {
  display: flex;
  height: 100%;
  min-width: calc(var(--spacing) * 0);
  flex: 1;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-inline: calc(var(--spacing) * 3);
  text-align: start;
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
}
.aui-thread-list-new {
  height: calc(var(--spacing) * 9);
  justify-content: flex-start;
  gap: calc(var(--spacing) * 2);
  border-radius: var(--radius-lg);
  padding-inline: calc(var(--spacing) * 3);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
}
@media (hover: hover) {
  .aui-thread-list-new:hover {
    background-color: var(--color-muted);
  }
}
.aui-thread-list-new[data-active] {
  background-color: var(--color-muted);
}
.aui-thread-list-new {
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 1);
}
.aui-thread-list-skeleton {
  height: calc(var(--spacing) * 4);
  width: 100%;
}
.aui-thread-list-skeleton-wrapper {
  display: flex;
  height: calc(var(--spacing) * 9);
  align-items: center;
  padding-inline: calc(var(--spacing) * 3);
}
.aui-thread-scroll-to-bottom {
  position: absolute;
  top: calc(var(--spacing) * -12);
  z-index: 10;
  align-self: center;
  border-radius: calc(infinity * 1px);
  padding: calc(var(--spacing) * 4);
}
.aui-thread-scroll-to-bottom:disabled {
  visibility: hidden;
}
.aui-thread-scroll-to-bottom:where(.dark, .dark *) {
  background-color: var(--color-background);
}
@media (hover: hover) {
  .aui-thread-scroll-to-bottom:where(.dark, .dark *):hover {
    background-color: var(--color-accent);
  }
}
.aui-thread-viewport {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding-inline: calc(var(--spacing) * 4);
  padding-top: calc(var(--spacing) * 4);
}
.aui-thread-viewport-footer {
  position: sticky;
  bottom: calc(var(--spacing) * 0);
  margin-inline: auto;
  margin-top: auto;
  display: flex;
  width: 100%;
  max-width: var(--thread-max-width);
  flex-direction: column;
  gap: calc(var(--spacing) * 4);
  overflow: visible;
  border-top-left-radius: var(--radius-3xl);
  border-top-right-radius: var(--radius-3xl);
  padding-bottom: calc(var(--spacing) * 4);
}
@media (width >= 48rem) {
  .aui-thread-viewport-footer {
    padding-bottom: calc(var(--spacing) * 6);
  }
}
.aui-thread-welcome-center {
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.aui-thread-welcome-message {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding-inline: calc(var(--spacing) * 4);
}
.aui-thread-welcome-message-inner {
  font-size: var(--text-2xl);
  line-height: var(--tw-leading, var(--text-2xl--line-height));
  --tw-font-weight: var(--font-weight-semibold);
  font-weight: var(--font-weight-semibold);
  animation: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
  font-size: var(--text-xl);
  line-height: var(--tw-leading, var(--text-xl--line-height));
  color: var(--color-muted-foreground);
  transition-delay: 75ms;
  --tw-duration: 200ms;
  transition-duration: 200ms;
  animation-delay: calc(75*1ms);
  animation-delay: 75ms;
  --tw-animation-delay: calc(75*1ms);
  --tw-animation-delay: 75ms;
  --tw-enter-opacity: 0;
  --tw-enter-translate-y: calc(1*var(--spacing));
}
.aui-thread-welcome-root {
  margin-inline: auto;
  margin-block: auto;
  display: flex;
  width: 100%;
  max-width: var(--thread-max-width);
  flex-grow: 1;
  flex-direction: column;
}
.aui-thread-welcome-suggestion {
  height: auto;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: calc(var(--spacing) * 1);
  border-radius: var(--radius-2xl);
  border-style: var(--tw-border-style);
  border-width: 1px;
  padding-inline: calc(var(--spacing) * 4);
  padding-block: calc(var(--spacing) * 3);
  text-align: left;
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
@media (hover: hover) {
  .aui-thread-welcome-suggestion:hover {
    background-color: var(--color-muted);
  }
}
@container (width >= 28rem) {
  .aui-thread-welcome-suggestion {
    flex-direction: column;
  }
}
.aui-thread-welcome-suggestion-display {
  animation: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
  --tw-duration: 200ms;
  transition-duration: 200ms;
  animation-fill-mode: both;
  --tw-animation-fill-mode: both;
  --tw-enter-opacity: 0;
  --tw-enter-translate-y: calc(2*var(--spacing));
}
.aui-thread-welcome-suggestion-display:nth-child(n+3) {
  display: none;
}
@container (width >= 28rem) {
  .aui-thread-welcome-suggestion-display:nth-child(n+3) {
    display: block;
  }
}
.aui-thread-welcome-suggestion-text-1 {
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
}
.aui-thread-welcome-suggestion-text-2 {
  color: var(--color-muted-foreground);
}
.aui-thread-welcome-suggestions {
  display: grid;
  width: 100%;
  gap: calc(var(--spacing) * 2);
  padding-bottom: calc(var(--spacing) * 4);
}
@container (width >= 28rem) {
  .aui-thread-welcome-suggestions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.aui-tool-fallback-args {
  padding-inline: calc(var(--spacing) * 4);
}
.aui-tool-fallback-args-value {
  white-space: pre-wrap;
}
.aui-tool-fallback-content {
  position: relative;
  overflow: hidden;
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  --tw-outline-style: none;
  outline-style: none;
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
}
.aui-tool-fallback-content[data-state="closed"] {
  animation: collapsible-up var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
}
.aui-tool-fallback-content[data-state="open"] {
  animation: collapsible-down var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
}
.aui-tool-fallback-content[data-state="closed"] {
  animation-fill-mode: forwards;
  --tw-animation-fill-mode: forwards;
}
.aui-tool-fallback-content[data-state="closed"] {
  pointer-events: none;
}
.aui-tool-fallback-content[data-state="open"] {
  --tw-duration: var(--animation-duration);
  transition-duration: var(--animation-duration);
}
.aui-tool-fallback-content[data-state="closed"] {
  --tw-duration: var(--animation-duration);
  transition-duration: var(--animation-duration);
}
.aui-tool-fallback-content {
  margin-top: calc(var(--spacing) * 3);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 2);
  border-top-style: var(--tw-border-style);
  border-top-width: 1px;
  padding-top: calc(var(--spacing) * 2);
}
.aui-tool-fallback-error {
  padding-inline: calc(var(--spacing) * 4);
}
.aui-tool-fallback-error-header {
  --tw-font-weight: var(--font-weight-semibold);
  font-weight: var(--font-weight-semibold);
  color: var(--color-muted-foreground);
}
.aui-tool-fallback-error-reason {
  color: var(--color-muted-foreground);
  border-color: color-mix(in srgb, hsl(var(--muted-foreground)) 30%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-fallback-error-reason {
    border-color: color-mix(in oklab, var(--color-muted-foreground) 30%, transparent);
  }
}
.aui-tool-fallback-error-reason {
  background-color: color-mix(in srgb, hsl(var(--muted)) 30%, transparent);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-fallback-error-reason {
    background-color: color-mix(in oklab, var(--color-muted) 30%, transparent);
  }
}
.aui-tool-fallback-error-reason {
  opacity: 60%;
}
.aui-tool-fallback-result {
  border-top-style: var(--tw-border-style);
  border-top-width: 1px;
  --tw-border-style: dashed;
  border-style: dashed;
  padding-inline: calc(var(--spacing) * 4);
  padding-top: calc(var(--spacing) * 2);
}
.aui-tool-fallback-result-content {
  white-space: pre-wrap;
}
.aui-tool-fallback-result-header {
  --tw-font-weight: var(--font-weight-semibold);
  font-weight: var(--font-weight-semibold);
}
.aui-tool-fallback-root {
  width: 100%;
  border-radius: var(--radius-lg);
  border-style: var(--tw-border-style);
  border-width: 1px;
  padding-block: calc(var(--spacing) * 3);
}
.aui-tool-fallback-trigger {
  display: flex;
  width: 100%;
  align-items: center;
  gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 4);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
.aui-tool-fallback-trigger-chevron {
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
  flex-shrink: 0;
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: var(--animation-duration);
  transition-duration: var(--animation-duration);
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
}
.aui-tool-fallback-trigger-chevron:is(:where(.group\\/trigger)[data-state="closed"] *) {
  rotate: calc(90deg * -1);
}
.aui-tool-fallback-trigger-chevron:is(:where(.group\\/trigger)[data-state="open"] *) {
  rotate: 0deg;
}
.aui-tool-fallback-trigger-icon {
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
  flex-shrink: 0;
  color: var(--color-muted-foreground);
  animation: var(--animate-spin);
}
.aui-tool-fallback-trigger-label-wrapper {
  position: relative;
  display: inline-block;
  flex-grow: 1;
  text-align: left;
  --tw-leading: 1;
  line-height: 1;
  color: var(--color-muted-foreground);
  text-decoration-line: line-through;
}
.aui-tool-fallback-trigger-shimmer {
  pointer-events: none;
  position: absolute;
  inset: calc(var(--spacing) * 0);
  --_gradient-width: calc(var(--_spread) + var(--shimmer-track-height) * tan(var(--shimmer-angle)));
  --_active-distance: calc(var(--shimmer-track-width, 200px) + var(--_gradient-width));
  --_duration: var(--shimmer-duration, calc(var(--_active-distance) / var(--_speed) / 1px * 1000));
  --_repeat-delay: var(--shimmer-repeat-delay, calc(20000 / var(--_speed)));
  --_repeat-delay-px: calc(var(--_repeat-delay) * var(--_active-distance) / var(--_duration));
  --_xy-offset-px: calc((var(--shimmer-x, 0) + var(--shimmer-y, 0) * tan(var(--shimmer-angle))) * 1px);
  --_bg-width: calc(
    100% +
    var(--shimmer-track-width, 100%) +
    var(--_gradient-width) +
    var(--_repeat-delay-px)
  );
  --_position: calc(
    var(--shimmer-track-width, (100% - var(--_gradient-width) - var(--_repeat-delay-px)) / 2)
    + var(--_gradient-width) / 2
    + var(--_repeat-delay-px)
    - var(--_xy-offset-px)
  );
}
.aui-tool-fallback-trigger-shimmer:not(.shimmer-bg) {
  --_speed: var(--shimmer-speed, 200);
  --_spread: var(--shimmer-spread, calc(4ch + 80px));
  --_bg: currentColor;
  --_fg: var(--shimmer-color, oklch(from currentColor l c h / calc(alpha * 0.2)));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.aui-tool-fallback-trigger-shimmer.shimmer-bg {
  --_speed: var(--shimmer-speed, 1000);
  --_spread: var(--shimmer-spread, 480px);
  --_bg: transparent;
  --_fg: var(--shimmer-color, oklch(from currentColor 0 c h / 0.06));
}
.aui-tool-fallback-trigger-shimmer:where(.dark, .dark *):not(.shimmer-bg) {
  --_fg: var(--shimmer-color, oklch(from currentColor max(0.8, calc(l + 0.4)) c h / calc(alpha + 0.4)));
}
.aui-tool-fallback-trigger-shimmer:where(.dark, .dark *).shimmer-bg {
  --_fg: var(--shimmer-color, oklch(from currentColor 0 c h / 0.30));
}
.aui-tool-fallback-trigger-shimmer {
  @-moz-document url-prefix() {
    --_duration: var(--shimmer-duration, calc(375000 / var(--_speed)));
  }
  --_mix-96: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-fallback-trigger-shimmer {
    --_mix-96: color-mix(in oklch, var(--_fg), var(--_bg) 96%);
  }
}
.aui-tool-fallback-trigger-shimmer {
  --_mix-83: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-fallback-trigger-shimmer {
    --_mix-83: color-mix(in oklch, var(--_fg), var(--_bg) 83%);
  }
}
.aui-tool-fallback-trigger-shimmer {
  --_mix-67: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-fallback-trigger-shimmer {
    --_mix-67: color-mix(in oklch, var(--_fg), var(--_bg) 67%);
  }
}
.aui-tool-fallback-trigger-shimmer {
  --_mix-50: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-fallback-trigger-shimmer {
    --_mix-50: color-mix(in oklch, var(--_fg), var(--_bg) 50%);
  }
}
.aui-tool-fallback-trigger-shimmer {
  --_mix-33: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-fallback-trigger-shimmer {
    --_mix-33: color-mix(in oklch, var(--_fg), var(--_bg) 33%);
  }
}
.aui-tool-fallback-trigger-shimmer {
  --_mix-17: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-fallback-trigger-shimmer {
    --_mix-17: color-mix(in oklch, var(--_fg), var(--_bg) 17%);
  }
}
.aui-tool-fallback-trigger-shimmer {
  --_mix-4: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-fallback-trigger-shimmer {
    --_mix-4: color-mix(in oklch, var(--_fg), var(--_bg) 4%);
  }
}
.aui-tool-fallback-trigger-shimmer {
  background: linear-gradient( calc(90deg + var(--shimmer-angle)), var(--_bg) calc(var(--_position) - var(--_spread) * 0.5), var(--_mix-96) calc(var(--_position) - var(--_spread) * 0.44), var(--_mix-83) calc(var(--_position) - var(--_spread) * 0.37), var(--_mix-67) calc(var(--_position) - var(--_spread) * 0.31), var(--_mix-50) calc(var(--_position) - var(--_spread) * 0.25), var(--_mix-33) calc(var(--_position) - var(--_spread) * 0.19), var(--_mix-17) calc(var(--_position) - var(--_spread) * 0.12), var(--_mix-4) calc(var(--_position) - var(--_spread) * 0.06), var(--_fg) var(--_position), var(--_mix-4) calc(var(--_position) + var(--_spread) * 0.06), var(--_mix-17) calc(var(--_position) + var(--_spread) * 0.12), var(--_mix-33) calc(var(--_position) + var(--_spread) * 0.19), var(--_mix-50) calc(var(--_position) + var(--_spread) * 0.25), var(--_mix-67) calc(var(--_position) + var(--_spread) * 0.31), var(--_mix-83) calc(var(--_position) + var(--_spread) * 0.37), var(--_mix-96) calc(var(--_position) + var(--_spread) * 0.44), var(--_bg) calc(var(--_position) + var(--_spread) * 0.5) ) 0 0 / var(--_bg-width) 100% no-repeat;
  animation: tw-shimmer 1s linear 0s infinite backwards;
  animation-duration: calc((var(--_duration) + var(--_repeat-delay)) * 1ms);
}
@media (prefers-reduced-motion: reduce) {
  .aui-tool-fallback-trigger-shimmer {
    animation: none;
  }
}
.aui-tool-group-content {
  position: relative;
  overflow: hidden;
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  --tw-outline-style: none;
  outline-style: none;
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
}
.aui-tool-group-content[data-state="closed"] {
  animation: collapsible-up var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
}
.aui-tool-group-content[data-state="open"] {
  animation: collapsible-down var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
}
.aui-tool-group-content[data-state="closed"] {
  animation-fill-mode: forwards;
  --tw-animation-fill-mode: forwards;
}
.aui-tool-group-content[data-state="closed"] {
  pointer-events: none;
}
.aui-tool-group-content[data-state="open"] {
  --tw-duration: var(--animation-duration);
  transition-duration: var(--animation-duration);
}
.aui-tool-group-content[data-state="closed"] {
  --tw-duration: var(--animation-duration);
  transition-duration: var(--animation-duration);
}
.aui-tool-group-content {
  margin-top: calc(var(--spacing) * 2);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 2);
}
.aui-tool-group-content:is(:where(.group\\/tool-group-root)[data-variant="outline"] *) {
  margin-top: calc(var(--spacing) * 3);
}
.aui-tool-group-content:is(:where(.group\\/tool-group-root)[data-variant="outline"] *) {
  border-top-style: var(--tw-border-style);
  border-top-width: 1px;
}
.aui-tool-group-content:is(:where(.group\\/tool-group-root)[data-variant="outline"] *) {
  padding-inline: calc(var(--spacing) * 4);
}
.aui-tool-group-content:is(:where(.group\\/tool-group-root)[data-variant="outline"] *) {
  padding-top: calc(var(--spacing) * 3);
}
.aui-tool-group-content:is(:where(.group\\/tool-group-root)[data-variant="muted"] *) {
  margin-top: calc(var(--spacing) * 3);
}
.aui-tool-group-content:is(:where(.group\\/tool-group-root)[data-variant="muted"] *) {
  border-top-style: var(--tw-border-style);
  border-top-width: 1px;
}
.aui-tool-group-content:is(:where(.group\\/tool-group-root)[data-variant="muted"] *) {
  padding-inline: calc(var(--spacing) * 4);
}
.aui-tool-group-content:is(:where(.group\\/tool-group-root)[data-variant="muted"] *) {
  padding-top: calc(var(--spacing) * 3);
}
.aui-tool-group-trigger {
  display: flex;
  align-items: center;
  gap: calc(var(--spacing) * 2);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
}
.aui-tool-group-trigger:is(:where(.group\\/tool-group-root)[data-variant="outline"] *) {
  width: 100%;
}
.aui-tool-group-trigger:is(:where(.group\\/tool-group-root)[data-variant="outline"] *) {
  padding-inline: calc(var(--spacing) * 4);
}
.aui-tool-group-trigger:is(:where(.group\\/tool-group-root)[data-variant="muted"] *) {
  width: 100%;
}
.aui-tool-group-trigger:is(:where(.group\\/tool-group-root)[data-variant="muted"] *) {
  padding-inline: calc(var(--spacing) * 4);
}
.aui-tool-group-trigger-chevron {
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
  flex-shrink: 0;
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: var(--animation-duration);
  transition-duration: var(--animation-duration);
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
}
.aui-tool-group-trigger-chevron:is(:where(.group\\/trigger)[data-state="closed"] *) {
  rotate: calc(90deg * -1);
}
.aui-tool-group-trigger-chevron:is(:where(.group\\/trigger)[data-state="open"] *) {
  rotate: 0deg;
}
.aui-tool-group-trigger-label-wrapper {
  position: relative;
  display: inline-block;
  text-align: left;
  --tw-leading: 1;
  line-height: 1;
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
}
.aui-tool-group-trigger-label-wrapper:is(:where(.group\\/tool-group-root)[data-variant="outline"] *) {
  flex-grow: 1;
}
.aui-tool-group-trigger-label-wrapper:is(:where(.group\\/tool-group-root)[data-variant="muted"] *) {
  flex-grow: 1;
}
.aui-tool-group-trigger-loader {
  width: calc(var(--spacing) * 4);
  height: calc(var(--spacing) * 4);
  flex-shrink: 0;
  animation: var(--animate-spin);
}
.aui-tool-group-trigger-shimmer {
  pointer-events: none;
  position: absolute;
  inset: calc(var(--spacing) * 0);
  --_gradient-width: calc(var(--_spread) + var(--shimmer-track-height) * tan(var(--shimmer-angle)));
  --_active-distance: calc(var(--shimmer-track-width, 200px) + var(--_gradient-width));
  --_duration: var(--shimmer-duration, calc(var(--_active-distance) / var(--_speed) / 1px * 1000));
  --_repeat-delay: var(--shimmer-repeat-delay, calc(20000 / var(--_speed)));
  --_repeat-delay-px: calc(var(--_repeat-delay) * var(--_active-distance) / var(--_duration));
  --_xy-offset-px: calc((var(--shimmer-x, 0) + var(--shimmer-y, 0) * tan(var(--shimmer-angle))) * 1px);
  --_bg-width: calc(
    100% +
    var(--shimmer-track-width, 100%) +
    var(--_gradient-width) +
    var(--_repeat-delay-px)
  );
  --_position: calc(
    var(--shimmer-track-width, (100% - var(--_gradient-width) - var(--_repeat-delay-px)) / 2)
    + var(--_gradient-width) / 2
    + var(--_repeat-delay-px)
    - var(--_xy-offset-px)
  );
}
.aui-tool-group-trigger-shimmer:not(.shimmer-bg) {
  --_speed: var(--shimmer-speed, 200);
  --_spread: var(--shimmer-spread, calc(4ch + 80px));
  --_bg: currentColor;
  --_fg: var(--shimmer-color, oklch(from currentColor l c h / calc(alpha * 0.2)));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.aui-tool-group-trigger-shimmer.shimmer-bg {
  --_speed: var(--shimmer-speed, 1000);
  --_spread: var(--shimmer-spread, 480px);
  --_bg: transparent;
  --_fg: var(--shimmer-color, oklch(from currentColor 0 c h / 0.06));
}
.aui-tool-group-trigger-shimmer:where(.dark, .dark *):not(.shimmer-bg) {
  --_fg: var(--shimmer-color, oklch(from currentColor max(0.8, calc(l + 0.4)) c h / calc(alpha + 0.4)));
}
.aui-tool-group-trigger-shimmer:where(.dark, .dark *).shimmer-bg {
  --_fg: var(--shimmer-color, oklch(from currentColor 0 c h / 0.30));
}
.aui-tool-group-trigger-shimmer {
  @-moz-document url-prefix() {
    --_duration: var(--shimmer-duration, calc(375000 / var(--_speed)));
  }
  --_mix-96: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-group-trigger-shimmer {
    --_mix-96: color-mix(in oklch, var(--_fg), var(--_bg) 96%);
  }
}
.aui-tool-group-trigger-shimmer {
  --_mix-83: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-group-trigger-shimmer {
    --_mix-83: color-mix(in oklch, var(--_fg), var(--_bg) 83%);
  }
}
.aui-tool-group-trigger-shimmer {
  --_mix-67: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-group-trigger-shimmer {
    --_mix-67: color-mix(in oklch, var(--_fg), var(--_bg) 67%);
  }
}
.aui-tool-group-trigger-shimmer {
  --_mix-50: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-group-trigger-shimmer {
    --_mix-50: color-mix(in oklch, var(--_fg), var(--_bg) 50%);
  }
}
.aui-tool-group-trigger-shimmer {
  --_mix-33: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-group-trigger-shimmer {
    --_mix-33: color-mix(in oklch, var(--_fg), var(--_bg) 33%);
  }
}
.aui-tool-group-trigger-shimmer {
  --_mix-17: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-group-trigger-shimmer {
    --_mix-17: color-mix(in oklch, var(--_fg), var(--_bg) 17%);
  }
}
.aui-tool-group-trigger-shimmer {
  --_mix-4: var(--_fg);
}
@supports (color: color-mix(in lab, red, red)) {
  .aui-tool-group-trigger-shimmer {
    --_mix-4: color-mix(in oklch, var(--_fg), var(--_bg) 4%);
  }
}
.aui-tool-group-trigger-shimmer {
  background: linear-gradient( calc(90deg + var(--shimmer-angle)), var(--_bg) calc(var(--_position) - var(--_spread) * 0.5), var(--_mix-96) calc(var(--_position) - var(--_spread) * 0.44), var(--_mix-83) calc(var(--_position) - var(--_spread) * 0.37), var(--_mix-67) calc(var(--_position) - var(--_spread) * 0.31), var(--_mix-50) calc(var(--_position) - var(--_spread) * 0.25), var(--_mix-33) calc(var(--_position) - var(--_spread) * 0.19), var(--_mix-17) calc(var(--_position) - var(--_spread) * 0.12), var(--_mix-4) calc(var(--_position) - var(--_spread) * 0.06), var(--_fg) var(--_position), var(--_mix-4) calc(var(--_position) + var(--_spread) * 0.06), var(--_mix-17) calc(var(--_position) + var(--_spread) * 0.12), var(--_mix-33) calc(var(--_position) + var(--_spread) * 0.19), var(--_mix-50) calc(var(--_position) + var(--_spread) * 0.25), var(--_mix-67) calc(var(--_position) + var(--_spread) * 0.31), var(--_mix-83) calc(var(--_position) + var(--_spread) * 0.37), var(--_mix-96) calc(var(--_position) + var(--_spread) * 0.44), var(--_bg) calc(var(--_position) + var(--_spread) * 0.5) ) 0 0 / var(--_bg-width) 100% no-repeat;
  animation: tw-shimmer 1s linear 0s infinite backwards;
  animation-duration: calc((var(--_duration) + var(--_repeat-delay)) * 1ms);
}
@media (prefers-reduced-motion: reduce) {
  .aui-tool-group-trigger-shimmer {
    animation: none;
  }
}
.aui-user-action-bar-root {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.aui-user-action-bar-wrapper {
  position: absolute;
  top: calc(1/2 * 100%);
  left: calc(var(--spacing) * 0);
  --tw-translate-x: -100%;
  --tw-translate-y: calc(calc(1/2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  padding-right: calc(var(--spacing) * 2);
}
.aui-user-action-edit {
  padding: calc(var(--spacing) * 4);
}
.aui-user-branch-picker {
  grid-column: 1 / -1;
  grid-column-start: 1;
  grid-row-start: 3;
  margin-right: calc(var(--spacing) * -1);
  justify-content: flex-end;
}
.aui-user-message-attachments-end {
  grid-column: 1 / -1;
  grid-column-start: 1;
  grid-row-start: 1;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  gap: calc(var(--spacing) * 2);
}
.aui-user-message-content {
  border-radius: var(--radius-2xl);
  background-color: var(--color-muted);
  padding-inline: calc(var(--spacing) * 4);
  padding-block: calc(var(--spacing) * 2.5);
  overflow-wrap: break-word;
  color: var(--color-foreground);
}
.aui-user-message-content-wrapper {
  position: relative;
  grid-column-start: 2;
  min-width: calc(var(--spacing) * 0);
}
.aui-user-message-root {
  margin-inline: auto;
  display: grid;
  width: 100%;
  max-width: var(--thread-max-width);
  animation: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
  grid-auto-rows: auto;
  grid-template-columns: minmax(72px,1fr) auto;
  align-content: flex-start;
  row-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 2);
  padding-block: calc(var(--spacing) * 3);
  --tw-duration: 150ms;
  transition-duration: 150ms;
  --tw-enter-opacity: 0;
  --tw-enter-translate-y: calc(1*var(--spacing));
}
.aui-user-message-root:where(>*) {
  grid-column-start: 2;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-border-spacing-x {
  syntax: "<length>";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-spacing-y {
  syntax: "<length>";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@keyframes enter {
  from {
    opacity: var(--tw-enter-opacity,1);
    transform: translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0));
    filter: blur(var(--tw-enter-blur,0));
  }
}
@keyframes exit {
  to {
    opacity: var(--tw-exit-opacity,1);
    transform: translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0));
    filter: blur(var(--tw-exit-blur,0));
  }
}
@keyframes accordion-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height,var(--bits-accordion-content-height,var(--reka-accordion-content-height,var(--kb-accordion-content-height,var(--ngp-accordion-content-height,auto)))));
  }
}
@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height,var(--bits-accordion-content-height,var(--reka-accordion-content-height,var(--kb-accordion-content-height,var(--ngp-accordion-content-height,auto)))));
  }
  to {
    height: 0;
  }
}
@keyframes collapsible-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height,var(--bits-collapsible-content-height,var(--reka-collapsible-content-height,var(--kb-collapsible-content-height,auto))));
  }
}
@keyframes collapsible-up {
  from {
    height: var(--radix-collapsible-content-height,var(--bits-collapsible-content-height,var(--reka-collapsible-content-height,var(--kb-collapsible-content-height,auto))));
  }
  to {
    height: 0;
  }
}
@keyframes tw-shimmer {
  from {
    background-position: 100% 0;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    :root, :host {
      --shimmer-track-height: 200px;
      --shimmer-angle: 15deg;
    }
    *, ::before, ::after, ::backdrop {
      --tw-animation-delay: 0s;
      --tw-animation-direction: normal;
      --tw-animation-duration: initial;
      --tw-animation-fill-mode: none;
      --tw-animation-iteration-count: 1;
      --tw-enter-blur: 0;
      --tw-enter-opacity: 1;
      --tw-enter-rotate: 0;
      --tw-enter-scale: 1;
      --tw-enter-translate-x: 0;
      --tw-enter-translate-y: 0;
      --tw-exit-blur: 0;
      --tw-exit-opacity: 1;
      --tw-exit-rotate: 0;
      --tw-exit-scale: 1;
      --tw-exit-translate-x: 0;
      --tw-exit-translate-y: 0;
      --tw-border-style: solid;
      --tw-font-weight: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-leading: initial;
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
    }
  }
}
`;var K=require("react/jsx-runtime"),Jg=()=>({parse:t=>t}),nd=t=>({mode:"strict",typeSymbol:t,create:Jg}),od=(t,e)=>({name:t,wire:t,source:"json",codec:nd(e)}),Ui=t=>nd(t),Yg={package:"@freepeak/dsh-mux",descriptors:[{id:"@freepeak/dsh-mux#mux/discover",service:"mux",namespace:"mux",method:"discover",invocation:{kind:"direct"},parameters:[],result:Ui("@freepeak/dsh-mux#AdapterStatus[]")},{id:"@freepeak/dsh-mux#mux/listThreads",service:"mux",namespace:"mux",method:"listThreads",invocation:{kind:"direct"},parameters:[],result:Ui("@freepeak/dsh-mux#MuxThread[]")},{id:"@freepeak/dsh-mux#mux/deleteThread",service:"mux",namespace:"mux",method:"deleteThread",invocation:{kind:"direct"},parameters:[od("id","string")],result:Ui("boolean")},{id:"@freepeak/dsh-mux#mux/send",service:"mux",namespace:"mux",method:"send",invocation:{kind:"direct"},parameters:[od("request","@freepeak/dsh-mux#MuxSendRequest")],result:Ui("@freepeak/dsh-mux#MuxTurnResult")}]},On="mux",id="mux",Bn=[{id:"claude",label:"Claude Code"},{id:"omp",label:"OMP"},{id:"pi",label:"Pi"},{id:"cursor",label:"Cursor"},{id:"agy",label:"Agy"},{id:"command-code",label:"Command Code"},{id:"opencode",label:"opencode"}],ro;function Xg(){ro===void 0&&(ro=document.createElement("style"),ro.dataset.plugin="@freepeak/dsh-mux",ro.textContent=`${rd}
${td}`,document.head.append(ro))}function Zg({size:t}){let e=t??16;return Z.default.createElement("svg",{width:e,height:e,viewBox:"0 0 16 16","data-mux-icon":"",fill:"none",stroke:"currentColor","stroke-width":1.6,"stroke-linecap":"round"},Z.default.createElement("path",{d:"M2 4.5h9.5M9 2l2.5 2.5L9 7"}),Z.default.createElement("path",{d:"M14 11.5H4.5M7 9l-2.5 2.5L7 14"}))}function ad(t){return t===null?[]:t.turns.map((e,r)=>({id:`${t.id}:${r}:${e.at}`,role:e.role==="prompt"?"user":"assistant",content:[{type:"text",text:e.text}],...e.role==="error"?{metadata:{muxError:!0}}:{}}))}function sd({role:t}){return Z.default.createElement(Li.Root,{"data-mux-turn":"","data-role":t},Z.default.createElement(Li.Parts))}function ev({host:t,ready:e}){let[r,o]=(0,Z.useState)([]),[i,s]=(0,Z.useState)([]),[n,a]=(0,Z.useState)(null),[c,l]=(0,Z.useState)("claude"),[u,h]=(0,Z.useState)(""),[d,p]=(0,Z.useState)(!1),[f,v]=(0,Z.useState)(null),b=(0,Z.useCallback)(async()=>{try{await e;let T=t.get("remote.mux");if(T===void 0){v({kind:"error",text:"mux host remote not available (mount failed)."});return}let[B,q]=await Promise.all([T.listThreads(),T.discover()]);B.ok?s(B.value):v({kind:"error",text:`threads: ${B.error.message}`}),q.ok?o(q.value):v({kind:"error",text:`discover: ${q.error.message}`})}catch(T){v({kind:"error",text:String(T instanceof Error?T.message:T)})}},[t,e]);(0,Z.useEffect)(()=>{b()},[b]);let y=i.find(T=>T.id===n)??null,_=y!==null?y.cli:c,A=T=>r.find(B=>B.id===T),I=T=>A(T)?.installed===!0,S=T=>A(T)?.enabled!==!1,E=!d&&u.trim().length>0&&I(_)&&S(_),C=(0,Z.useCallback)(async()=>{let T=u.trim();if(!(T.length===0||d||!S(_))){p(!0),v(null);try{await e;let B=t.get("remote.mux");if(B===void 0)throw new Error("mux host remote not available");let q=await B.send({cli:_,prompt:T,...n!==null&&n!==""?{threadId:n}:{}});if(!q.ok){v({kind:"error",text:q.error.message});return}h(""),a(q.value.threadId),await b()}catch(B){v({kind:"error",text:String(B instanceof Error?B.message:B)})}finally{p(!1)}}},[d,t,u,e,b,n,_]),w=(0,Z.useCallback)(()=>{a(null),h(""),v(null)},[]),k=(0,Z.useCallback)(T=>{!I(T)||!S(T)||(l(T),y!==null&&y.cli!==T&&a(null))},[I,y]),D=(0,Z.useCallback)(async T=>{try{await e;let B=t.get("remote.mux");if(B===void 0)return;await B.deleteThread(T),n===T&&a(null),await b()}catch(B){v({kind:"error",text:String(B instanceof Error?B.message:B)})}},[t,e,b,n]),P=T=>{let B=T.turns??[],q=B[B.length-1];return q===void 0?"no turns yet":q.text.replace(/\s+/g," ").slice(0,80)},$=ad(y),Q=Ur({messages:$,isRunning:d,convertMessage:T=>T,onNew:async T=>{let B=typeof T=="string"?T:T.map(q=>q.type==="text"?q.text:"").join("");B.trim().length!==0&&(h(B),setTimeout(()=>{C()},0))}});return(0,K.jsxs)("div",{"data-mux-panel":"",children:[(0,K.jsx)("div",{"data-mux-strip":"",children:Bn.map(T=>{let B=A(T.id),q=B?.installed===!0,se=B?.enabled!==!1,pe=B===void 0?"checking\u2026":q?se?B.path??T.id:`${T.id} is disabled in this build (only claude enabled)`:`${T.id} not on PATH`;return(0,K.jsxs)("button",{type:"button","data-mux-chip":"","data-active":String(_===T.id),"data-installed":String(q),"data-enabled":String(se),title:pe,disabled:!q||!se,onClick:()=>k(T.id),children:[(0,K.jsx)("span",{"data-mux-dot":"","data-on":String(q),"data-enabled":String(se)}),T.label]},T.id)})}),f!==null&&(0,K.jsx)("div",{"data-mux-notice":"","data-kind":f.kind,children:f.text}),(0,K.jsxs)("div",{"data-mux-body":"",children:[(0,K.jsxs)("div",{"data-mux-threads":"",children:[(0,K.jsxs)("div",{"data-mux-threads-head":"",children:[(0,K.jsx)("strong",{children:"Threads"}),(0,K.jsx)("button",{type:"button","data-mux-new":"",onClick:w,children:"New"})]}),i.map(T=>(0,K.jsxs)("div",{"data-mux-thread":"","data-active":String(T.id===n),onClick:()=>a(T.id),children:[(0,K.jsxs)("div",{"data-mux-thread-title":"",children:[Bn.find(B=>B.id===T.cli)?.label??T.cli,T.cliSessionId!==void 0&&(0,K.jsx)("span",{"data-mux-resume":"",title:`resumes ${T.cliSessionId}`,children:"\u25CF"}),(0,K.jsx)("button",{type:"button","data-mux-delete":"",title:"Delete thread (CLI session files are kept)",onClick:B=>{B.stopPropagation(),D(T.id)},children:"\xD7"})]}),(0,K.jsx)("div",{"data-mux-thread-preview":"",children:P(T)})]},T.id)),i.length===0&&(0,K.jsx)("div",{"data-mux-empty":"",style:{padding:"16px 12px"},children:"No threads yet \u2014 pick a CLI and send a message."})]}),(0,K.jsx)("div",{"data-mux-main":"",children:(0,K.jsxs)(mn,{runtime:Q,children:[(0,K.jsx)(to.Root,{children:(0,K.jsxs)("div",{"data-mux-turns":"",children:[y===null&&(0,K.jsxs)("div",{"data-mux-empty":"",children:[`New thread on ${Bn.find(T=>T.id===_)?.label??_}.`,(0,K.jsx)("br",{}),"Send a message to start it."]}),(0,K.jsx)(to.Viewport,{children:(0,K.jsx)(to.Messages,{components:{UserMessage:()=>sd({role:"user"}),AssistantMessage:()=>sd({role:"assistant"})}})})]})}),(0,K.jsxs)("div",{"data-mux-composer":"",children:[(0,K.jsx)("span",{"data-mux-badge":"",children:_+(y!==null&&y.cliSessionId!==void 0?` \xB7 ${y.cliSessionId}`:"")}),(0,K.jsxs)("form",{"data-mux-composer-root":"",onSubmit:T=>{T.preventDefault(),C()},children:[(0,K.jsx)("textarea",{"data-mux-input":"",value:u,placeholder:"Message this CLI thread\u2026",rows:1,onChange:T=>h(T.target.value),onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),C())}}),(0,K.jsx)("button",{type:"submit","data-mux-send":"",disabled:!E,children:d?"Running\u2026":"Send"})]})]})]})})]})]})}var tv=["slots","locale","remote"];function rv(t){Xg(),t.effect(()=>t.locale.register(On,{zh:{"mux.panel":"Mux"},en:{"mux.panel":"Mux"}}),"dsh-mux: dictionaries");let e=t.remote.$mount(Yg).then(r=>r).catch(r=>{console.error("dsh-mux: remote mount failed",r)});return window.__dshMux=Object.freeze({ready:e,call:(r,o,...i)=>{let s=t.get(`remote.${r}`);if(s===void 0||typeof s[o]!="function")throw new Error(`remote.${r}.${o} not available`);return s[o](...i)}}),t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id,order:10,label:"Mux",locale:On},Zg)),t.slots.inject("main",()=>t.slots.register({name:"main",key:id,locale:On},()=>Z.default.createElement(ev,{host:t,ready:e}))),()=>{e.then(r=>r?.()).catch(()=>{})}}
return module.exports; } });
