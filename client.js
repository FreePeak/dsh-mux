window.__ModuleLoader__.load({ id: "@freepeak/dsh-mux", factory: (require) => { var module = { exports: {} }; var exports = module.exports;
"use strict";var hp=Object.create;var Ar=Object.defineProperty;var fp=Object.getOwnPropertyDescriptor;var gp=Object.getOwnPropertyNames;var vp=Object.getPrototypeOf,bp=Object.prototype.hasOwnProperty;var ja=t=>{throw TypeError(t)};var wp=(t,e,r)=>e in t?Ar(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var xp=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},hs=(t,e)=>{for(var r in e)Ar(t,r,{get:e[r],enumerable:!0})},Co=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of gp(e))!bp.call(t,i)&&i!==r&&Ar(t,i,{get:()=>e[i],enumerable:!(o=fp(e,i))||o.enumerable});return t},q=(t,e,r)=>(Co(t,e,"default"),r&&Co(r,e,"default")),_e=(t,e,r)=>(r=t!=null?hp(vp(t)):{},Co(e||!t||!t.__esModule?Ar(r,"default",{value:t,enumerable:!0}):r,t)),yp=t=>Co(Ar({},"__esModule",{value:!0}),t);var g=(t,e,r)=>wp(t,typeof e!="symbol"?e+"":e,r),za=(t,e,r)=>e.has(t)||ja("Cannot "+r);var ht=(t,e,r)=>(za(t,e,"read from private field"),r?r.call(t):e.get(t)),$t=(t,e,r)=>e.has(t)?ja("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Vt=(t,e,r,o)=>(za(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r);var on=xp((HI,hr)=>{"use strict";var Bf=typeof Buffer<"u",wl=/"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,xl=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;function yl(t,e,r){r==null&&e!==null&&typeof e=="object"&&(r=e,e=void 0),Bf&&Buffer.isBuffer(t)&&(t=t.toString()),t&&t.charCodeAt(0)===65279&&(t=t.slice(1));let o=JSON.parse(t,e);if(o===null||typeof o!="object")return o;let i=r&&r.protoAction||"error",s=r&&r.constructorAction||"error";if(i==="ignore"&&s==="ignore")return o;if(i!=="ignore"&&s!=="ignore"){if(wl.test(t)===!1&&xl.test(t)===!1)return o}else if(i!=="ignore"&&s==="ignore"){if(wl.test(t)===!1)return o}else if(xl.test(t)===!1)return o;return _l(o,{protoAction:i,constructorAction:s,safe:r&&r.safe})}function _l(t,{protoAction:e="error",constructorAction:r="error",safe:o}={}){let i=[t];for(;i.length;){let s=i;i=[];for(let n of s){if(e!=="ignore"&&Object.prototype.hasOwnProperty.call(n,"__proto__")){if(o===!0)return null;if(e==="error")throw new SyntaxError("Object contains forbidden prototype property");delete n.__proto__}if(r!=="ignore"&&Object.prototype.hasOwnProperty.call(n,"constructor")&&n.constructor!==null&&typeof n.constructor=="object"&&Object.prototype.hasOwnProperty.call(n.constructor,"prototype")){if(o===!0)return null;if(r==="error")throw new SyntaxError("Object contains forbidden prototype property");delete n.constructor}for(let a in n){let c=n[a];c&&typeof c=="object"&&i.push(c)}}}return t}function rn(t,e,r){let{stackTraceLimit:o}=Error;Error.stackTraceLimit=0;try{return yl(t,e,r)}finally{Error.stackTraceLimit=o}}function Nf(t,e){let{stackTraceLimit:r}=Error;Error.stackTraceLimit=0;try{return yl(t,e,{safe:!0})}catch{return}finally{Error.stackTraceLimit=r}}hr.exports=rn;hr.exports.default=rn;hr.exports.parse=rn;hr.exports.safeParse=Nf;hr.exports.scan=_l});var ex={};hs(ex,{apply:()=>Zw,inject:()=>Xw,turnsToMessages:()=>dp});module.exports=yp(ex);var le=_e(require("react"),1);var tr=null;function Ha(t,e){t.currentIndex=0,t.wipContextDeps=null,t.wipCommitCallbacks=[];let r=tr;tr=t;try{if(e(),t.isFirstRender=!1,t.cells.length!==t.currentIndex)throw new Error(`Rendered ${t.currentIndex} hooks but expected ${t.cells.length}. Hooks must be called in the exact same order in every render.`)}finally{tr=r}}function ge(){if(!tr)throw new Error("No resource fiber available");return tr}function Me(){return tr}var ie=typeof process<"u"&&!1;var Io=t=>({version:0,committedVersion:0,dispatchUpdate:t,changelog:[],committedLog:[],unsettledCount:0,rollbackCallbacks:[]}),Pr=t=>{t.committedVersion=t.version;for(let e of t.changelog)e.logged=!1,e.settled||(e.settled=!0,t.unsettledCount--),t.committedLog.push(e);t.changelog.length=0,t.unsettledCount===0&&(t.committedLog.length=0),t.rollbackCallbacks.length=0},Ft=(t,e)=>{let r=t.version>e;if(t.version=e,r){for(let o=0;o<t.rollbackCallbacks.length;o++)t.rollbackCallbacks[o]();if(t.rollbackCallbacks.length=0,e<=t.committedVersion){let o=[];for(;t.committedVersion-o.length>e;){let i=t.committedLog.pop();if(i===void 0){if(ie)throw new Error("tap: committed history is shorter than the replay base.");break}Eo(i.fiber,i.cell),i.cell.workInProgress=i.prevState,o.push({record:i,prevState:i.prevState,eagerState:i.eagerState,hasEagerState:i.hasEagerState})}if(o.length>0){let i=t.committedVersion;rr(t,()=>{for(let s=o.length-1;s>=0;s--){let n=o[s];n.record.prevState=n.prevState,n.record.eagerState=n.eagerState,n.record.hasEagerState=n.hasEagerState,t.committedLog.push(n.record)}t.committedVersion=i})}t.committedVersion=e;for(let i of t.changelog)i.logged=!1;t.changelog.length=0}else{for(;t.committedVersion+t.changelog.length>e;)t.changelog.pop().logged=!1;for(let o=0;o<t.changelog.length;o++)fs(t.changelog[o]);Pr(t)}}},fs=t=>{var e;Eo(t.fiber,t.cell),t.queued||(t.queued=!0,((e=t.cell).queue??(e.queue=[])).push(t))},It=(t,e)=>{t.wipCommitCallbacks.push(e)},rr=(t,e)=>{t.rollbackCallbacks.push(e)},Eo=(t,e)=>{e.isDirty||(e.isDirty=!0,t.markDirty?.(),rr(t.root,()=>{if(e.queue!==null){for(let r of e.queue)r.queued=!1;e.queue=null}e.workInProgress=e.current,e.isDirty=!1}))};var gs=Symbol.for("react.memo_cache_sentinel"),vs=t=>new Array(t).fill(gs),_p=(t,e)=>{let r=t.memoCache,o=r.workInProgress;if(o===null){let n=r.current;o=n===null?[]:n.map(a=>a.slice()),r.workInProgress=o,rr(t.root,()=>{r.workInProgress=null})}let i=r.index++,s=o[i];return s===void 0?(s=vs(e),o[i]=s):ie&&s.length!==e&&console.error(`Expected a constant size argument for each invocation of c(). The previous cache was allocated with size ${s.length} but size ${e} was requested.`),s},Ro=t=>_p(ge(),t);var Ao=_e(require("react"),1),Sp=Ao.default,Tp=t=>(0,Ao.useMemo)(()=>{let e=vs(t);return e[gs]=!0,e},[]),qa=Sp.__COMPILER_RUNTIME?.c??Tp;var Cp=()=>Me()!==null,v=t=>Cp()?Ro(t):qa(t);var Se=(t,...e)=>Object.assign(Object.create(null),t,...e);var I={};hs(I,{Children:()=>Vp,Fragment:()=>Es,Suspense:()=>Fp,cloneElement:()=>As,createContext:()=>ne,createElement:()=>Rs,default:()=>cr.default,forwardRef:()=>G,isValidElement:()=>gt,lazy:()=>$p,memo:()=>oe,use:()=>jt,useCallback:()=>Ie,useContext:()=>pe,useDebugValue:()=>Ts,useDeferredValue:()=>Up,useEffect:()=>N,useEffectEvent:()=>ve,useId:()=>Cs,useImperativeHandle:()=>Is,useInsertionEffect:()=>et,useLayoutEffect:()=>Qe,useMemo:()=>W,useReducer:()=>Ss,useRef:()=>$,useState:()=>j,useSyncExternalStore:()=>De});var or=()=>{throw new Error("Rendered more hooks than during the previous render. Hooks must be called in the exact same order in every render.")},ir=()=>{throw new Error("Hook order changed between renders")};var Ip=()=>({type:"effect",setup:void 0,setupDeps:void 0,cleanup:void 0,deps:null,generation:0});function Te(t,e){let r=ge(),o=r.currentIndex++,i=r.cells[o],s=i===void 0?Ip():i.type==="effect"?i:ir();if(i===void 0&&(r.isFirstRender||or(),r.cells[o]=s,r.effectCells.push(s)),s.deps!==null&&!!e!=!!s.deps)throw new Error("useEffect called with and without dependencies across re-renders");It(r,()=>{s.setup=t,s.setupDeps=e,s.generation++})}var Et=(t,e)=>{ie&&t.length!==e.length&&console.error(`The final argument passed to a hook changed size between renders. The order and size of this array must remain constant.

Previous: [${t.join(", ")}]
Incoming: [${e.join(", ")}]`);for(let r=0;r<t.length&&r<e.length;r++)if(!Object.is(t[r],e[r]))return!1;return!0};var Ga=(t,e)=>{It(t,()=>{e.current=e.wip,e.currentDeps=e.wipDeps,e.isDirty=!1})},Rt=(t,e)=>{let r=ge(),o=r.currentIndex++,i=r.cells[o];if(i===void 0){r.isFirstRender||or();let a=t();return ie&&r.devStrictMode&&t(),i={type:"memo",current:a,currentDeps:e,wip:a,wipDeps:e,isDirty:!1},r.cells[o]=i,a}i.type!=="memo"&&ir();let s=i;if(Et(s.wipDeps,e))return s.isDirty&&Ga(r,s),s.wip;let n=t();return ie&&r.devStrictMode&&t(),s.wip=n,s.wipDeps=e,s.isDirty||(s.isDirty=!0,rr(r.root,()=>{s.wip=s.current,s.wipDeps=s.currentDeps,s.isDirty=!1})),Ga(r,s),n};function Ke(t){return Rt(()=>({current:t}),[])}var bs=Symbol("tap.Context.defaultValue"),Ep=t=>t,ut=new Map,Ut=new Set,Ka=()=>new Map(ut),Po=(t,e)=>{let r=ut;ut=t;try{return e()}finally{ut=r}},ws=(t,e)=>{t[bs]=e},Qa=t=>typeof t=="object"&&t!==null&&bs in t,Wa=t=>typeof t=="object"&&t!==null&&"$$typeof"in t&&t.$$typeof===Symbol.for("react.context"),xs=t=>Qa(t)||Wa(t),Ja=t=>{if(!Qa(t)){if(Wa(t)){ws(t,t._currentValue??t._currentValue2);return}throw new Error("A tap resource's `use()` only accepts a tap context.")}},ft=(t,e,r)=>{if(typeof t!="object"||t===null)throw new Error("useContextProvider only accepts a React context.");Ja(t);let o=t,i=ge(),s=Ke(void 0),n=s.current===void 0||!Object.is(s.current.value,e);Te(()=>{s.current={value:e}},[e]);let a=ut.get(o),c=a!==void 0||ut.has(o);ut.set(o,{value:e,source:i});try{return Rp(o,n,r)}finally{c?ut.set(o,a):ut.delete(o)}},Rp=(t,e,r)=>{let o=Ut.has(t);e?Ut.add(t):Ut.delete(t);try{return r()}finally{o?Ut.add(t):Ut.delete(t)}},ko=t=>{Ja(t);let e=t,r=Ap(e,t),o=ge();return(o.wipContextDeps??(o.wipContextDeps=new Map)).set(e,r.source),r.value},Ap=(t,e)=>ut.get(t)??{value:Ep(e)[bs],source:null},Pp=(t,e,r,o)=>{if(!o)return r;let i=r;for(let[s,n]of o)n===e||n===t||(i??(i=new Map)).set(s,n);return i},Mo=(t,e=t.wipContextDeps)=>{let r=Me();!r||!e||(r.wipContextDeps=Pp(r,t,r.wipContextDeps,e))},ys=()=>Ut.size>0,kr=t=>{if(!t.contextDeps||!ys())return!1;for(let e of Ut.keys())if(t.contextDeps.has(e))return!0;return!1};var kp=(t,e,r)=>{if(t.isNeverMounted)throw new Error("Resource updated before mount");let o=!1,i=!0;t.root.unsettledCount++,t.root.dispatchUpdate(()=>(o||(o=!0,r&&t.root.changelog.length===0&&!e.cell.isDirty&&!e.hasEagerState&&(e.prevState=e.cell.workInProgress,e.eagerState=r(e.cell.workInProgress,e.action),e.hasEagerState=!0,i=!Object.is(e.cell.current,e.eagerState),!i&&!e.settled&&(e.settled=!0,t.root.unsettledCount--))),i),()=>(o=!0,i=!0,fs(e),e.logged||(e.logged=!0,t.root.changelog.push(e)),!0))},Mp=(t,e,r,o,i)=>{let s=o?o(r):r;ie&&t.devStrictMode&&o&&o(r);let n={type:"reducer",workInProgress:s,current:s,isDirty:!1,queue:null,renderQueue:null,reducer:e,dispatch:a=>{let c=Me();if(c!==null){if(c!==t)throw new Error("Cannot update a resource while rendering a different resource.");(t.renderPendingCells??(t.renderPendingCells=new Set)).add(n),(n.renderQueue??(n.renderQueue=[])).push(a)}else{let l={fiber:t,cell:n,action:a,hasEagerState:!1,eagerState:void 0,prevState:n.current,settled:!1,queued:!1,logged:!1};kp(t,l,i?e:void 0)}}};return n};function _s(t,e,r,o){let i=ge(),s=i.currentIndex++,n=i.cells[s],a=(()=>{if(n!==void 0)return n.type==="reducer"?n:ir();i.isFirstRender||or();let l=Mp(i,t,e,r,o);return i.cells[s]=l,l})(),c=a.queue;if(c!==null){let l=t===a.reducer;for(let u=0;u<c.length;u++){let m=c[u];!m.hasEagerState||!l||!Object.is(m.prevState,a.workInProgress)?(m.prevState=a.workInProgress,m.eagerState=t(a.workInProgress,m.action),m.hasEagerState=!0,ie&&i.devStrictMode&&(m.eagerState=t(a.workInProgress,m.action))):ie&&i.devStrictMode&&t(a.workInProgress,m.action),m.queued=!1,a.workInProgress=m.eagerState}a.queue=null}if(a.reducer=t,a.renderQueue!==null){let l=a.workInProgress;for(let u of a.renderQueue)l=t(l,u);a.renderQueue=null,i.renderPendingCells?.delete(a),Object.is(l,a.workInProgress)||(Eo(i,a),a.workInProgress=l)}return a.isDirty&&It(i,()=>{a.current=a.workInProgress,a.isDirty=!1}),[a.workInProgress,a.dispatch]}function sr(t,e,r){return _s(t,e,r,!1)}var Dp=(t,e)=>typeof e=="function"?e(t):e,Op=t=>t===void 0?void 0:typeof t=="function"?t():t;function Do(t){return _s(Dp,t,Op,!0)}var nr=(t,e)=>Rt(()=>t,e);function ar(t){let e=ge(),r=Ke(t);return r.current!==t&&It(e,()=>{r.current=t}),nr(((...o)=>{if(ie&&Me())throw new Error("useEffectEvent cannot be called during render");return r.current(...o)}),[])}var Oo=t=>t!==null&&typeof t=="object"&&typeof t.then=="function",Ya=()=>{},Xa=t=>{let e=t;switch(typeof e.status!="string"?(e.status="pending",t.then(r=>{e.status==="pending"&&(e.status="fulfilled",e.value=r)},r=>{e.status==="pending"&&(e.status="rejected",e.reason=r)})):e.status!=="fulfilled"&&e.status!=="rejected"&&t.then(Ya,Ya),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw t}};var Mr=t=>Oo(t)?Xa(t):ko(t);var Za=!1,Bo=(t,e,r=e)=>{let o=ge().isNeverMounted,i=o?r():e();ie&&!Za&&(!o||r===e)&&(Object.is(i,e())||(Za=!0,console.error("The result of getSnapshot should be cached to avoid an infinite loop")));let[,s]=sr(c=>c+1,0),n=Ke(0),a=ar(()=>{try{if(Object.is(i,e()))return n.current=0,!1}catch{}return!0});return Te(()=>t(()=>{a()&&s()}),[t]),Te(()=>{if(a()){if(++n.current>50)throw n.current=0,new Error("Maximum update depth exceeded. The result of getSnapshot should be cached to avoid an infinite loop.");s()}},[t,i,e]),i};var No=(t,e)=>{};var Bp=0,Lo=()=>{let t=Ke(null);return t.current??(t.current=`:tap${Bp++}:`),t.current};var $o=(t,e,r)=>{let o=()=>{if(!t)return;let i=e();if(typeof t=="function"){let s=t(i);return typeof s=="function"?s:()=>t(null)}return t.current=i,()=>{t.current=null}};r==null?Te(o):Te(o,[...r,t])};var At=_e(require("react"),1),Np=At.default;function Lp(t){let e=(0,At.useRef)(t);return(0,At.useInsertionEffect)(()=>{e.current=t}),(0,At.useCallback)(((...r)=>e.current(...r)),[])}var ec=Np.useEffectEvent??Lp;var cr=_e(require("react"),1);q(I,require("react"));var Ce=()=>Me()!==null,se=cr.default,j=t=>Ce()?Do(t):se.useState(t),Ss=(t,e,r)=>Ce()?sr(t,e,r):se.useReducer(t,e,r),$=t=>Ce()?Ke(t):se.useRef(t),W=(t,e)=>Ce()?Rt(t,e):se.useMemo(t,e),Ie=(t,e)=>Ce()?nr(t,e):se.useCallback(t,e),N=(t,e)=>Ce()?Te(t,e):se.useEffect(t,e),Qe=(t,e)=>Ce()?Te(t,e):se.useLayoutEffect(t,e),ve=t=>Ce()?ar(t):ec(t),De=(t,e,r)=>Ce()?Bo(t,e,r):se.useSyncExternalStore(t,e,r),Ts=(t,e)=>Ce()?No(t,e):se.useDebugValue(t,e),et=(t,e)=>Ce()?Te(t,e):se.useInsertionEffect(t,e),Cs=()=>Ce()?Lo():se.useId(),Is=(t,e,r)=>Ce()?$o(t,e,r):se.useImperativeHandle(t,e,r),G=t=>se.forwardRef(t),oe=(t,e)=>se.memo(t,e),Es=se.Fragment,Rs=(...t)=>se.createElement(...t),As=(...t)=>se.cloneElement(...t),gt=t=>se.isValidElement(t),$p=t=>se.lazy(t),Vp=se.Children,Fp=se.Suspense,Up=(t,e)=>se.useDeferredValue(t,e),ne=t=>{let e=se.createContext(t);return ws(e,t),e},jt=t=>Ce()&&xs(t)?Mr(t):se.use(t),pe=t=>Ce()&&xs(t)?Mr(t):se.useContext(t);function U(t){return(...e)=>({hook:t,args:e})}function he(t,e,r){return typeof e=="function"?(...o)=>he(t,e(...o)):r?{...e,key:t,deps:r}:{...e,key:t}}var vt=(t,e)=>{if(t.length!==0){if(t.length===1)throw t[0];for(let r of t)console.error(r);throw new AggregateError(t,e)}};var jp=50,We={schedulers:new Set,isScheduled:!1},dt=null,Ps=[],Ms=class{constructor(t){g(this,"_isDirty",!1);g(this,"_task");this._task=t}get isDirty(){return this._isDirty}markDirty(){if(dt&&(dt.get(this)??0)>=jp)throw new Error("Maximum update depth exceeded. This can happen when a resource repeatedly calls setState inside useEffect.");this._isDirty=!0,We.schedulers.add(this),rc()}runTask(){dt?.set(this,(dt.get(this)??0)+1),this._isDirty=!1,this._task()}settle(){this._isDirty=!1}},zp=[],By=new Ms(()=>{let t=zp.splice(0),e=[];for(let r of t)try{r()}catch(o){e.push(o)}vt(e,"Errors occurred while running scheduled tasks")});var tc=t=>{if(dt!==null){Ps.push(t);return}t()},rc=()=>{We.isScheduled||(We.isScheduled=!0,Hp())},ks=()=>{let t=dt;dt=new Map;let e=[];try{for(let r of We.schedulers)if(We.schedulers.delete(r),!!r.isDirty)try{r.runTask()}catch(o){e.push(o)}}finally{if(dt=t,We.schedulers.clear(),We.isScheduled=!1,dt===null)for(;Ps.length>0;)try{Ps.shift()()}catch(r){e.push(r)}}vt(e,"Errors occurred during flushSync")},Hp=(()=>{if(typeof MessageChannel<"u"){let t=null,e;return()=>{if(!t){let r=new MessageChannel;r.port1.onmessage=()=>{t?.unref?.(),ks()},t=r.port1,e=r.port2}t.ref?.(),e.postMessage(null)}}return()=>setTimeout(ks,0)})(),lr=t=>{if(dt!==null)return ie&&console.warn("flushTapSync was called from inside a render or commit. The flush is deferred until the current pass completes."),t();let e=We;We={schedulers:new Set,isScheduled:!0};try{let r=t();return ks(),r}finally{let r=We.schedulers;if(We=e,r.size>0){for(let o of r)We.schedulers.add(o);rc()}}};function oc(t){let e=[];for(let r=0;r<t.length;r++)try{t[r]()}catch(o){e.push(o)}vt(e,"Errors during commit")}function qp(t){let e=t.setup,r=t.setupDeps,o=t.generation,i;try{let s=e();if(s!==void 0&&typeof s!="function")throw new Error(`An effect function must either return a cleanup function or nothing. Received: ${typeof s}`);i=s}finally{t.generation===o?(t.cleanup=i,t.deps=r):i?.()}}var Gp=t=>t.setup===void 0?!1:t.deps===null||t.setupDeps===void 0?!0:!Et(t.deps,t.setupDeps);function Ds(t){let e=[],r=[];for(let o of t.effectCells)Gp(o)&&r.push(o);for(let o of r)if(o.deps=null,o.cleanup!==void 0)try{o.cleanup()}catch(i){e.push(i)}finally{o.cleanup=void 0}for(let o of r)try{qp(o)}catch(i){e.push(i)}vt(e,"Errors during commit")}function Os(t){let e=[];for(let r of t.effectCells)if(r.deps=null,r.cleanup)try{r.cleanup?.()}catch(o){e.push(o)}finally{r.cleanup=void 0}vt(e,"Errors during cleanup")}var Kp={useState:Do,useReducer:sr,useRef:Ke,useMemo:Rt,useCallback:nr,useEffect:Te,useLayoutEffect:Te,useInsertionEffect:Te,useEffectEvent:ar,useContext:ko,use:Mr,useSyncExternalStore:Bo,useDebugValue:No,useId:Lo,useImperativeHandle:$o,useMemoCache:Ro},ic=cr.default,zt=ic.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE??ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=zt==null?null:"H"in zt?{get current(){return zt.H},set current(t){zt.H=t}}:"ReactCurrentDispatcher"in zt?{get current(){return zt.ReactCurrentDispatcher.current},set current(t){zt.ReactCurrentDispatcher.current=t}}:null;function sc(t){if(!Vo)return t();let e=Vo.current;Vo.current=Kp;try{return t()}finally{Vo.current=e}}function Fo(t,e,r=void 0,o){return{hook:t,root:e,markDirty:r,devStrictMode:o,cells:[],effectCells:[],contextDeps:null,wipContextDeps:null,wipCommitCallbacks:null,memoCache:{current:null,workInProgress:null,index:0},renderPendingCells:null,currentIndex:0,isFirstRender:!0,isMounted:!1,isNeverMounted:!0}}function Bs(t){t.wipCommitCallbacks=null,t.wipContextDeps=null,t.memoCache.workInProgress=null}function mt(t){t.isMounted&&(t.isMounted=!1,Os(t))}function Je(t,e){if(t.renderPendingCells!==null){for(let i of t.renderPendingCells)i.renderQueue=null;t.renderPendingCells.clear()}let r=0,o;try{do{if(++r>25)throw new Error("Too many re-renders. tap limits the number of renders to prevent an infinite loop.");t.memoCache.index=0,Ha(t,()=>{o=sc(()=>t.hook(...e))})}while((t.renderPendingCells?.size??0)>0)}catch(i){throw Bs(t),i}return Mo(t),o}function tt(t){let e=t.wipCommitCallbacks;t.wipCommitCallbacks=null;let r=ie&&!t.isMounted&&t.devStrictMode==="root";t.isMounted=!0,t.isNeverMounted=!1,e!==null&&(t.contextDeps=t.wipContextDeps,Pr(t.root),t.memoCache.workInProgress!==null&&(t.memoCache.current=t.memoCache.workInProgress,t.memoCache.workInProgress=null),oc(e)),r&&(Ds(t),Os(t)),Ds(t)}var Qp=()=>{let t=ge();return t.devStrictMode?t.isFirstRender?"child":"root":null},Wp=()=>"child",nc=()=>null,Jp=()=>{if(!ie)return nc;let t=$(0);return j(()=>t.current++),t.current!==2?nc:Wp},Uo=()=>Me()?Qp:Jp();var Yp=t=>t(),Xp=t=>{let e=[];for(let r of t)try{r()}catch(o){e.push(o)}vt(e,"Errors occurred while notifying Tap root subscribers")},Zp=(t,e,r)=>{let o=new Ms(()=>a.handleUpdate()),i=[],s=Io((c,l)=>{i.length===0&&!c()||(i.push(l),o.markDirty())}),n=Fo(Yp,s,void 0,e),a={scheduler:o,queue:i,fiber:n,subscribers:new Set,pendingHostRender:!1,isMounted:!1,hasRendered:!1,committedRender:t,context:new Map,value:void 0,applyQueue:()=>{Ft(s,s.committedVersion);for(let c of i)ie&&n.devStrictMode&&c(),c();return Ft(s,s.committedVersion+s.changelog.length),i.length},publish:(c,l)=>{o.isDirty||s.committedVersion!==l||a.value===c||(a.value=c,tc(()=>Xp(a.subscribers)))},finishFlush:(c,l,u)=>{Pr(s),i.splice(0,u),a.pendingHostRender=!1,i.length===0&&o.settle(),a.isMounted&&tt(n),a.publish(c,l)},handleUpdate:()=>{let c=a.applyQueue(),l;try{ie&&n.devStrictMode&&Po(a.context,()=>Je(n,[a.committedRender])),l=Po(a.context,()=>Je(n,[a.committedRender]))}catch(u){if(Ft(s,s.committedVersion),Oo(u)){let m=()=>{a.isMounted&&o.markDirty()};u.then(m,m);return}if(a.isMounted){a.pendingHostRender=!0,r(m=>m+1);return}throw u}if(o.isDirty)throw new Error("Scheduler is dirty, this should never happen");a.finishFlush(l,s.version,c)}};return a},Ns=t=>{let[,e]=j(0),r=Uo(),o=$(null),i=o.current??(o.current=Zp(t,r(),e)),s=Ka(),n=i.scheduler.isDirty||i.pendingHostRender?i.applyQueue():0,a=Po(s,()=>Je(i.fiber,[t])),c={render:t,context:s,value:a,drained:n,wip:i.fiber.wipCommitCallbacks,version:i.fiber.root.version,processed:!1};return i.hasRendered||(i.hasRendered=!0,i.committedRender=t,i.context=s,i.value=a),N(()=>(i.isMounted=!0,()=>{i.isMounted=!1,mt(i.fiber)}),[i]),N(()=>{if(c.processed){i.fiber.isMounted||(tt(i.fiber),i.queue.length&&!i.scheduler.isDirty&&i.scheduler.markDirty());return}if(c.processed=!0,i.committedRender=c.render,i.context=c.context,i.fiber.wipCommitCallbacks!==c.wip){i.scheduler.isDirty||i.handleUpdate();return}if(c.drained>0&&i.fiber.root.version===c.version){i.finishFlush(c.value,c.version,c.drained);return}tt(i.fiber),i.publish(c.value,c.version)}),W(()=>({getValue:()=>i.value,subscribe:l=>(i.subscribers.add(l),()=>i.subscribers.delete(l))}),[i])};var eh=()=>{let t=$(0),e=t.current,r=ge();return{version:e,markDirty:W(()=>()=>{t.current++,r.markDirty?.()},[r]),root:r.root}},th=()=>{let[t]=j(()=>Io((i,s)=>{let n=!1;o(a=>(n=!i(),n?a:a+1)),n||r(s)})),[e,r]=Ss((i,s)=>(Ft(t,i),i+(s()?1:0)),0),[,o]=j(0);return Ft(t,e),{root:t,version:e,markDirty:void 0}},ur=()=>{let t=Uo(),{root:e,version:r,markDirty:o}=Me()?eh():th();return{version:r,createFiber:Ie((i,s,n)=>Fo(i,e,n?()=>{n(),o?.()}:o,t()),[])}};var jo=(t,e,r)=>{let o=$(null),i=o.current??(o.current={wipDeps:null,wip:null,currentDeps:null,current:null});return i.wipDeps=i.currentDeps,i.wip=i.current,N(()=>{i.currentDeps=i.wipDeps,i.current=i.wip}),!r&&i.currentDeps&&Et(i.currentDeps,e)?i.current:(i.wipDeps=e,i.wip=t(),i.wip)};function ce(t){let{version:e,createFiber:r}=ur(),o=W(()=>r(t.hook,t.key),[t.hook,t.key,r]),i=jo(()=>({value:Je(o,t.args)}),[o,e,t.args],kr(o));return N(()=>()=>mt(o),[o]),N(()=>{tt(o)},[o,i]),i.value}var ac=(t,e)=>{let r=t.get(e);r&&(r.isDirty=!0)},rh=(t,e)=>!t.isDirty&&!kr(t.fiber)&&e!==void 0&&t.committedDeps!==void 0&&Et(t.committedDeps,e),oh=t=>{if(!ys())return!1;for(let{fiber:e}of t.values())if(kr(e))return!0;return!1};function Ht(t){let[e]=j(()=>new Map),{version:r,createFiber:o}=ur(),i=oh(e),s=jo(()=>{let n=new Set,a=[],c=0;for(let l=0;l<t.length;l++){let u=t[l],m=u.key;if(m===void 0)throw new Error(`useResources did not provide a key for array at index ${l}`);if(n.has(m))throw new Error(`Duplicate key ${m} in useResources`);n.add(m);let d=e.get(m);if(d)if(d.fiber.hook!==u.hook){let p=o(u.hook,u.key,()=>ac(e,m)),h=Je(p,u.args);d.next={value:h,deps:u.deps,remount:p}}else if(rh(d,u.deps))typeof d.next=="object"&&Bs(d.fiber),d.fiber.contextDeps&&Mo(d.fiber,d.fiber.contextDeps),d.next="skip";else{let p=Je(d.fiber,u.args);d.next={value:p,deps:u.deps}}else{let p=o(u.hook,u.key,()=>ac(e,m));d={fiber:p,next:{value:Je(p,u.args),deps:u.deps},isDirty:!1,committedDeps:void 0,committedValue:void 0},c++,e.set(m,d)}a.push(typeof d.next=="object"?d.next.value:d.committedValue)}if(e.size>a.length-c)for(let l of e.keys())n.has(l)||(e.get(l).next="delete");return a},[t,e,o,r],i);return N(()=>()=>{for(let n of e.keys())mt(e.get(n).fiber)},[e]),N(()=>{for(let[n,a]of e.entries()){let c=a.next;c==="delete"?(mt(a.fiber),e.delete(n)):c==="skip"?!a.fiber.isNeverMounted&&!a.fiber.isMounted&&tt(a.fiber):(c.remount&&(mt(a.fiber),a.fiber=c.remount),tt(a.fiber),a.committedDeps=c.deps,a.committedValue=c.value,a.isDirty=!1,a.next="skip")}},[s,e]),s}var ih=t=>t(),zo=t=>{let{createFiber:e}=ur(),r=W(()=>e(ih,void 0),[e]),o=Je(r,[t]);N(()=>()=>{mt(r)},[r]);let i=!1,s=()=>{i&&r.isMounted||(i=!0,tt(r))};return N(s),{value:o,effects:s}};var sh=()=>{let t=v(4),[e,r]=j(nh),o;t[0]===Symbol.for("react.memo_cache_sentinel")?(o=(c,l)=>(r(u=>{let m=Se(u.renderers);return m[c]=[...m[c]??[],l],{...u,renderers:m}}),()=>{r(u=>{let m=Se(u.renderers),d=m[c]?.filter(p=>p!==l)??[];return d.length>0?m[c]=d:delete m[c],{...u,renderers:m}})}),t[0]=o):o=t[0];let i=o,s;t[1]===Symbol.for("react.memo_cache_sentinel")?(s=c=>(r(l=>({...l,fallbacks:[...l.fallbacks,c]})),()=>{r(l=>({...l,fallbacks:l.fallbacks.filter(u=>u!==c)}))}),t[1]=s):s=t[1];let n=s,a;return t[2]!==e?(a={getState:()=>e,setDataUI:i,setFallbackDataUI:n},t[2]=e,t[3]=a):a=t[3],a},cc=U(sh);function nh(){return{renderers:Se(),fallbacks:[]}}var Ls=t=>{if(!t.overwrite)return t;let{overwrite:e,...r}=t;return r},lc=t=>{let e=Array.from(t).map(o=>o.getModelContext()).sort((o,i)=>(i.priority??0)-(o.priority??0)),r=Se();return e.reduce((o,i)=>{let s=i.priority??0;if(i.system&&(o.system?o.system+=`

${i.system}`:o.system=i.system),i.tools)for(let[n,a]of Object.entries(i.tools)){let c=o.tools!==void 0&&Object.hasOwn(o.tools,n)?o.tools[n]:void 0;if(c&&c!==a){let l=r[n];if(l===s){if(!a.overwrite)throw new Error(`You tried to define a tool with the name ${n}, but it already exists.`);o.tools[n]=Ls(a);continue}let u=l>s?c:a,m=l>s?a:c;o.tools[n]=Ls({...m,...u}),r[n]=Math.max(l,s);continue}o.tools||(o.tools=Se()),o.tools[n]=Ls(a),Object.hasOwn(r,n)||(r[n]=s)}return i.config&&(o.config={...o.config,...i.config}),i.callSettings&&(o.callSettings={...o.callSettings,...i.callSettings}),i.unstable_composerMetadata&&(o.unstable_composerMetadata={...o.unstable_composerMetadata,...i.unstable_composerMetadata}),o},{})};var we=(t,e,r)=>{let o=i=>{console.error(`[assistant-ui] ${r} listener threw an error`,i)};for(let i of t)try{let s=i(typeof e=="function"?e():e);s!==null&&(typeof s=="object"||typeof s=="function")&&"then"in s&&typeof s.then=="function"&&Promise.resolve(s).catch(o)}catch(s){o(s)}};var ue=t=>t;var ah=new Set(["$$typeof","nodeType","then","__v_raw","__v_isRef","__v_isReactive","__v_isReadonly","__v_isShallow","__v_skip"]),Ye=(t,e)=>{if(t===Symbol.toStringTag)return e;if(typeof t!="symbol"){if(t==="toJSON")return()=>e;if(!ah.has(t))return!1}},bt=class{getOwnPropertyDescriptor(t,e){let r=this.get(t,e);if(r!==void 0)return{value:r,writable:!1,enumerable:!0,configurable:!0}}set(){return!1}setPrototypeOf(){return!1}defineProperty(){return!1}deleteProperty(){return!1}preventExtensions(){return!1}};var Ho=Symbol("assistant-ui.store.clientId"),qo=Symbol("assistant-ui.store.instanceTag"),$s=(t,e)=>{let r=new Proxy((()=>{}),{apply:()=>(e(),r),get:(o,i)=>i==="source"?t.source:i==="query"?t.query:i==="name"?t.name:i===Ho?Ko(e()):e()[i],has:(o,i)=>i==="source"||i==="query"||i==="name"||i===Ho||i in e(),ownKeys:()=>Reflect.ownKeys(e()),getOwnPropertyDescriptor:(o,i)=>{if(!(typeof i=="symbol"||!(i in e())))return{value:e()[i],writable:!1,enumerable:!0,configurable:!0}}});return r},Vs=(t,e)=>{let r=()=>{throw new Error(t)};return new Proxy((()=>{}),{apply:r,get:(o,i)=>{if(i==="source"||i==="query")return null;if(i==="name")return e;if(i===Ho)return r();let s=Ye(i,"AssistantClientAccessor");return s!==!1?s:r()},has:(o,i)=>i==="source"||i==="query"||i==="name",ownKeys:()=>[],getOwnPropertyDescriptor:()=>{}})},Pt=t=>t?.source!=null,Go=t=>t?.source===null,Ko=t=>t[Ho]??t,uc=t=>t[qo]??Ko(t);var wt=t=>t==="optional"||t==="subscribe"||t==="on"||t==="__proto__"||typeof t=="symbol",Dr=t=>{let e=[];for(let r in t)wt(r)||e.push(r);return e};var qt,dc,ch=(dc=class extends bt{constructor(e){super();$t(this,qt);Vt(this,qt,e)}get(e,r){let o=Ye(r,"OptionalAssistantClient");if(o!==!1)return o;if(wt(r))return;let i=ht(this,qt)[r];return Pt(i)?i:void 0}ownKeys(){return Dr(ht(this,qt))}has(e,r){return!wt(r)&&r in ht(this,qt)}},qt=new WeakMap,dc),Qo=t=>new Proxy({},new ch(t));var mc=()=>()=>{},lh="You are using a component or hook that requires an AuiProvider. Wrap your component in an <AuiProvider> component.",Or,Br,Nr,Wo,pc,uh=(pc=class extends bt{constructor(e,r,o){super();$t(this,Or);$t(this,Br);$t(this,Nr);$t(this,Wo);Vt(this,Or,e),Vt(this,Br,r),Vt(this,Nr,o)}get(e,r){if(r==="subscribe"||r==="on")return mc;if(r==="optional")return ht(this,Wo)??Vt(this,Wo,Qo(ht(this,Nr).call(this)));let o=Ye(r,ht(this,Or));return o!==!1?o:Vs(ht(this,Br).call(this,String(r)),String(r))}ownKeys(){return["subscribe","on","optional"]}getOwnPropertyDescriptor(e,r){if(r!=="optional")return super.getOwnPropertyDescriptor(e,r);let o=this.get(e,r);if(o!==void 0)return{value:o,writable:!1,enumerable:!1,configurable:!0}}has(e,r){return r==="subscribe"||r==="on"||r==="optional"}},Or=new WeakMap,Br=new WeakMap,Nr=new WeakMap,Wo=new WeakMap,pc),dh=(t,e)=>{let r=new Proxy({},new uh(t,e,()=>r));return r},kt=dh("DefaultAssistantClient",()=>lh),hc=()=>new Proxy({},{get(t,e){let r=Ye(e,"AssistantClient");return r!==!1?r:Vs(`The current scope does not have a "${String(e)}" property.`,String(e))}}),Jo=ne(kt),mh=()=>{},fc=new WeakMap,gc=t=>fc.get(t)??mh,vc=(t,e)=>{fc.set(t,e)},Lr=()=>pe(Jo),bc=(t,e)=>ft(Jo,t,e);var Fs=Symbol("assistant-ui.transform-scopes");function $r(t,e){let r=t;if(r[Fs])throw new Error("transformScopes is already attached to this resource");r[Fs]=e}function wc(t){return t[Fs]}var Vr=t=>typeof t=="string"?{scope:t.split(".")[0],event:t}:{scope:t.scope,event:t.event};var xc=t=>{console.error("NotificationManager: event listener error",t)},yc=(t,e,r)=>{try{let o=t(e,r);o!==null&&(typeof o=="object"||typeof o=="function")&&typeof o.then=="function"&&Promise.resolve(o).catch(xc)}catch(o){xc(o)}},ph=()=>{let t=new Map,e=new Set,r=new Set;return{on(o,i){let s=i;if(o==="*")return e.add(s),()=>e.delete(s);let n=t.get(o);return n||(n=new Set,t.set(o,n)),n.add(s),()=>{n.delete(s),n.size===0&&t.get(o)===n&&t.delete(o)}},emit(o,i,s){!t.has(o)&&e.size===0||queueMicrotask(()=>{let n=t.get(o);if(n)for(let a of n)yc(a,i,s);if(e.size>0){let a={event:o,payload:i};for(let c of e)yc(c,a,s)}})},subscribe(o){return r.add(o),()=>r.delete(o)},notifySubscribers(){for(let o of r)try{o()}catch(i){console.error("NotificationManager: subscriber callback error",i)}}}},Us=()=>j(ph)[0];var Yo=Symbol("assistant-ui.store.clientIndex"),_c=t=>t[Yo],Sc=ne([]),Fr=()=>jt(Sc),Tc=(t,e)=>{let r=v(3),o=Fr(),i;return r[0]!==t||r[1]!==o?(i=[...o,t],r[0]=t,r[1]=o,r[2]=i):i=r[2],ft(Sc,i,e)};var Ic=ne(null),Cc=Symbol("aui.scope-effect-unapplied"),Ec=(t,e)=>ft(Ic,t,e),js=()=>{let t=jt(Ic);if(!t)throw new Error("AssistantTapContext is not available");return t},Ur=()=>js().clientRef,jr=(t,e,r)=>{let o=v(8),{clientRef:i}=js(),s;o[0]!==i||o[1]!==e||o[2]!==t?(s=()=>{let a=i.current;if(a===null)throw new Error("useAssistantScopeEffect ran before the client was committed. This is likely an internal bug in assistant-ui.");let c=()=>{let p=i.current?.[t];return p!==void 0&&Pt(p)?uc(p):void 0},l=Cc,u,m=p=>{if(u?.(),u=void 0,l=Cc,p!==void 0){let h=e();u=typeof h=="function"?h:void 0}l=p};m(c());let d=a.subscribe(()=>{let p=c();p!==l&&m(p)});return()=>{d(),u?.()}},o[0]=i,o[1]=e,o[2]=t,o[3]=s):s=o[3];let n;o[4]!==i||o[5]!==r||o[6]!==t?(n=[i,t,...r],o[4]=i,o[5]=r,o[6]=t,o[7]=n):n=o[7],N(s,n)},Ue=()=>{let t=v(3),{emit:e}=js(),r=Fr(),o;return t[0]!==r||t[1]!==e?(o=(i,s)=>{e(i,s,r)},t[0]=r,t[1]=e,t[2]=o):o=t[2],ve(o)};var Xo=ne(void 0),zs=(t,e)=>{let r=jt(Xo);return ft(Xo,t??r,e)};var Zo=()=>{let t=v(3),[e]=j(hh),r,o;return t[0]!==e?(r=()=>()=>queueMicrotask(()=>e.abort()),o=[e],t[0]=e,t[1]=r,t[2]=o):(r=t[1],o=t[2]),et(r,o),e.signal};function hh(){return new AbortController}var ei=Symbol("assistant-ui.store.getValue"),Hs=t=>{let e=t[ei];if(!e)throw new Error("Client scope contains a non-client resource. Ensure your Derived get() returns a client created with useClientResource(), not a plain resource.");return e.getState?.()},Rc=new Map;function fh(t){let e=Rc.get(t);return e||(e=function(...r){if(!this||typeof this!="object")throw new Error(`Method "${String(t)}" called without proper context. This may indicate the function was called incorrectly.`);let o=this[ei];if(!o)throw new Error(`Method "${String(t)}" called on invalid client proxy. Ensure you are calling this method on a valid client instance.`);let i=o[t];if(!i)throw new Error(`Method "${String(t)}" is not implemented.`);if(typeof i!="function")throw new Error(`"${String(t)}" is not a function.`);return i(...r)},Rc.set(t,e)),e}var gh=class extends bt{constructor(e,r,o){super();g(this,"boundFns");g(this,"cachedReceiver");g(this,"outputRef");g(this,"tagRef");g(this,"index");this.outputRef=e,this.tagRef=r,this.index=o}get(e,r,o){if(r===ei)return this.outputRef.current;if(r===Yo)return this.index;if(r===qo)return this.tagRef.current;let i=Ye(r,"ClientProxy");if(i!==!1)return i;let s=this.outputRef.current[r];if(typeof s=="function"){if(o===void 0)return s;(!this.boundFns||this.cachedReceiver!==o)&&(this.boundFns=new Map,this.cachedReceiver=o);let n=this.boundFns.get(r);return n||(n=fh(r).bind(o),this.boundFns.set(r,n)),n}return s}ownKeys(){return Object.keys(this.outputRef.current)}has(e,r){return r===ei||r===Yo||r===qo?!0:r in this.outputRef.current}},xt=t=>{let e=$(null),r=$(null),o=W(()=>({}),[t.hook,t.key]),i=Fr().length,s=W(()=>new Proxy({},new gh(e,r,i)),[i]),n=Tc(s,function(){return ce(t)});return e.current||(e.current=n,r.current=o),N(()=>{e.current=n,r.current=o}),{methods:s,state:n.getState?.(),key:t.key}},ti=U(xt);var Ee=(t,e)=>{if(Array.isArray(t)!==Array.isArray(e))return!1;if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;for(let o=0;o<t.length;o++)if(!Object.is(t[o],e[o]))return!1;return!0}let r=Object.keys(t);return r.length===Object.keys(e).length&&r.every(o=>Object.hasOwn(e,o)&&Object.is(t[o],e[o]))};var zr=t=>{let e=W(()=>({}),[]);return e.v!==void 0&&Ee(e.v,t)?e.v:(e.v=t,t)},Oe=t=>{let e=v(2),r=$(void 0),o;return e[0]!==t?(o=i=>{let s=t(i);return r.current!==void 0&&Ee(r.current,s)?r.current:(r.current=s,s)},e[0]=t,e[1]=o):o=e[1],o};var ri=(()=>{try{return!1}catch{return!1}})();var vh=(t,e)=>{let r={...t},o=new Set,i=!0;for(;i;){i=!1;for(let s of Object.values(r)){if(o.has(s.hook))continue;o.add(s.hook);let n=wc(s.hook);if(n){n(r,e),i=!0;break}}}return r},oi=t=>t.hook===Gs,bh=t=>{if(!oi(t))return{source:"root",query:{}};let e=t.args[0];return{source:e.source,query:e.query??{}}},qs=Symbol.for("aui.event-receiver-ref"),Ac=(t,e)=>{let r=t===kt?hc():t,o=Object.create(r);Object.assign(o,e);let i;return Object.defineProperty(o,"optional",{get:()=>i??(i=Qo(o)),enumerable:!1}),o},wh=({notifications:t,clientRef:e})=>W(()=>({subscribe:t.subscribe,on:function(r,o){if(!this)throw new Error("const { on } = useAui() is not supported. Use aui.on() instead.");let{scope:i,event:s}=Vr(r),n=r[qs];if(i!=="*"&&!n&&Go(this[i]))throw new Error(`Scope "${i}" is not available. Use { scope: "*", event: "${s}" } to listen globally.`);let a=t.on(s,(l,u)=>{if(i==="*")return o(l);let m=((n??e).current??this)[i];if(!Pt(m))return;let d=Ko(m);if(d===u[_c(d)])return o(l)});if(i!=="*"){if(n){if(e.parent===kt)return a}else if(Go(e.parent[i]))return a}let c=e.parent.on(r,o);return()=>{a(),c()}}}),[t,e]),Pc=t=>{let e=v(5),r;e[0]!==t?(r=bh(t),e[0]=t,e[1]=r):r=e[1];let{source:o,query:i}=r,s=zr(i),n;return e[2]!==o||e[3]!==s?(n={source:o,query:s},e[2]=o,e[3]=s,e[4]=n):n=e[4],zr(n)},xh=(t,e)=>{let r=v(3),o;return r[0]!==e||r[1]!==t?(o=e?t:ti(t),r[0]=e,r[1]=t,r[2]=o):o=r[2],ce(o)},yh=(t,e)=>{let r=Lr(),o=oi(e),i=xh(e,o),s=o?i:i.methods,n=Pc(e),a=W(()=>$s({name:t,...n},()=>s),[t,n,s]);return r[t]=a,a},_h=U(yh),Sh=t=>{let e=v(2),r;return e[0]!==t?(r=t.map(Ah),e[0]=t,e[1]=r):r=e[1],Ht(r)},kc=(t,e)=>{let r=zr(e),o=W(()=>({}),[]);return o.deps!==r&&(o.deps=r,o.client=t),o.client},Mc=({parent:t,entries:e,clientRef:r,notifications:o})=>{let i=wh({notifications:o,clientRef:r}),s=Ac(t,i),n=Ec({clientRef:r,emit:o.emit},function(){return bc(s,function(){return Sh(e)})});return{client:kc(s,[t,...n])}},Th=({parent:t,entries:e,destroySignal:r})=>{let o=$({parent:t,current:null}).current,{value:i,effects:s}=zo(function(){let a=Us(),{client:c}=zs(r,function(){return Mc({parent:t,entries:e,clientRef:o,notifications:a})});return N(()=>t.subscribe(a.notifySubscribers),[t,a]),N(()=>a.notifySubscribers()),c});return et(()=>{o.parent=t,o.current=i},[i,t,o]),{client:i,effects:s}},Ch=({parent:t,entries:e,destroySignal:r})=>{let o=$({parent:t,current:null}).current,{value:i,effects:s}=zo(function(){let a=Us(),c=Ns(function(){return zs(r,function(){return Mc({parent:t,entries:e,clientRef:o,notifications:a})})}),l=De(c.subscribe,()=>c.getValue().client,()=>c.getValue().client);return N(()=>{let u=()=>lr(()=>{o.current=c.getValue().client,a.notifySubscribers()}),m=c.subscribe(u),d=t.subscribe(u);return()=>{m(),d()}},[c,t,a]),l});return et(()=>{o.parent=t,o.current=i},[i,t,o]),{client:i,effects:s}},Ih=(t,e,r,o)=>{let{get:i}=o.args[0],s=De(t.subscribe,()=>i(t),()=>i(t)),n=Pc(o),a=W(()=>$s({name:r,...n},()=>s),[r,n,s]);return e[r]=a,a},Eh=(t,e)=>{if(ri){let[a]=j(()=>e.map(([u])=>u).join(",")),c=e.find(([,u])=>!oi(u));if(c)throw new Error(`Scope "${c[0]}" is a root scope but this useAui mounted derived-only; remount with a new key to change scope kinds.`);let l=e.map(([u])=>u).join(",");if(l!==a)throw new Error(`A derived-only config mounted scopes [${a}] but now has [${l}]; remount with a new key to change the scope set.`)}let r=$({parent:t,current:null}).current,o=function(a,c){if(!this)throw new Error("const { on } = useAui() is not supported. Use aui.on() instead.");let{scope:l,event:u}=Vr(a);if(l==="*")return t.on(a,c);let m=a[qs];if(!m&&Go(this[l]))throw new Error(`Scope "${l}" is not available. Use { scope: "*", event: "${u}" } to listen globally.`);return t.on({scope:l,event:u,[qs]:m??r},c)},i=Ac(t,{subscribe:t.subscribe,on:o}),s=e.map(([a,c])=>Ih(t,i,a,c)),n=kc(i,[t,...s]);return et(()=>{r.parent=t,r.current=n},[n,t,r]),n},Rh=(t,e)=>{let r=v(8),o;r[0]!==e||r[1]!==t?(o=Object.entries(vh(e,t)),r[0]=e,r[1]=t,r[2]=o):o=r[2];let i=o,s;r[3]!==i?(s=()=>i.length===0||i.some(Ph),r[3]=i,r[4]=s):s=r[4];let[n]=j(s),a;return r[5]!==i||r[6]!==n?(a={entries:i,rooted:n},r[5]=i,r[6]=n,r[7]=a):a=r[7],a},Dc=(t,e,r,o)=>{let{entries:i,rooted:s}=Rh(t,e);return s?r({parent:t,entries:i,destroySignal:o}):{client:Eh(t,i)}},Oc=(t,e,r)=>Dc(t,e,Th,r);function V(t){let e=Lr();if(t){let r=Zo(),{client:o,effects:i}=Dc(e,t,Ch,r);return i&&vc(o,i),o}return e}function Ah(t){let[e,r]=t;return he(e,_h(e,r))}function Ph(t){let[,e]=t;return!oi(e)}var kh=t=>{let e;class r extends bt{get(s,n){let a=Ye(n,"OptionalAssistantState");if(a!==!1)return a;let c=n;if(!wt(c)&&Pt(t[c]))return Hs(t[c]())}ownKeys(){return Dr(t)}has(s,n){return!wt(n)&&n in t}}class o extends bt{get(s,n){let a=Ye(n,"AssistantState");if(a!==!1)return a;if(n==="optional")return e??(e=new Proxy({},new r));let c=n;if(!wt(c))return Hs(t[c]())}ownKeys(){return[...Dr(t),"optional"]}has(s,n){return n==="optional"||!wt(n)&&n in t}}return new Proxy({},new o)},Bc=new WeakMap,Nc=t=>{let e=Bc.get(t);return e||(e=kh(t),Bc.set(t,e)),e};var P=t=>{let e=v(6),r=V(),o;e[0]!==r?(o=Nc(r),e[0]=r,e[1]=o):o=e[1];let i=o,s,n;e[2]!==i||e[3]!==t?(s=()=>t(i),n=()=>t(i),e[2]=i,e[3]=t,e[4]=s,e[5]=n):(s=e[4],n=e[5]);let a=De(r.subscribe,s,n);if(typeof a=="object"&&a!==null&&(a===i||a===i.optional))throw new Error("You tried to return the entire AssistantState. This is not supported due to technical limitations.");return Ts(a),a};var Gs=t=>{let e=v(3),{get:r}=t,o=V(),i;return e[0]!==o||e[1]!==r?(i=()=>r(o),e[0]=o,e[1]=r,e[2]=i):i=e[2],P(i)},de=U(Gs);var Lc=t=>{if(t.key===void 0)throw new Error("useClientLookup: Element has no key");return t.key};function Be(t){let e=v(12),r;e[0]!==t?(r=t.map(Oh),e[0]=t,e[1]=r):r=e[1];let o=Ht(r),i;e[2]!==t?(i=t.reduce(Dh,Object.create(null)),e[2]=t,e[3]=i):i=e[3];let s=i,n;e[4]!==o?(n=o.map(Mh),e[4]=o,e[5]=n):n=e[5];let a=n,c;e[6]!==s||e[7]!==o?(c=u=>{if("index"in u){if(u.index<0||u.index>=o.length)throw new Error(`useClientLookup: index ${u.index} out of bounds (length: ${o.length}) (ignore if recovered)`);return o[u.index].methods}let m=s[u.key];if(m===void 0)throw new Error(`useClientLookup: key "${u.key}" not found (ignore if recovered)`);return o[m].methods},e[6]=s,e[7]=o,e[8]=c):c=e[8];let l;return e[9]!==a||e[10]!==c?(l={state:a,get:c},e[9]=a,e[10]=c,e[11]=l):l=e[11],l}function Mh(t){return t.state}function Dh(t,e,r){return t[Lc(e)]=r,t}function Oh(t){return he(Lc(t),ti(t),t.deps)}var ii=(t,e=0)=>e===0?Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<=1||t.scrollHeight<=t.clientHeight:t.scrollHeight-e-t.scrollTop-t.clientHeight<=1||t.scrollHeight-e<=t.clientHeight,Ks=(t,e=0)=>e===0?t.scrollHeight>t.clientHeight+1:t.scrollHeight-e>t.clientHeight+1,Qs=(t,e)=>t.scrollTop>e.scrollTop&&t.scrollHeight===e.scrollHeight;var Re=Symbol("skip-update"),rt=(t,...e)=>{let r=[];for(let o of t)try{o(...e)}catch(i){r.push(i)}if(r.length===1)throw r[0];if(r.length>1){for(let o of r)console.error(o);throw new AggregateError(r)}},si=t=>{rt(t)},$c=(t,e)=>t===void 0||e===void 0?t===e:Ee(t,e),dr=class{constructor(){g(this,"_subscribers",new Set)}subscribe(t){return this._subscribers.add(t),()=>this._subscribers.delete(t)}waitForUpdate(){return new Promise(t=>{let e=this.subscribe(()=>{e(),t()})})}_notifySubscribers(){rt(this._subscribers)}};var ni=class{constructor(){g(this,"_subscriptions",new Set);g(this,"_connection")}get isConnected(){return!!this._connection}notifySubscribers(t,e){if(e){we(this._subscriptions,t,e);return}rt(this._subscriptions,t)}_updateConnection(){if(this._subscriptions.size>0){if(this._connection)return;this._connection=this._connect()}else{let t=this._connection;this._connection=void 0,t?.()}}subscribe(t){return this._subscriptions.add(t),this._updateConnection(),()=>{this._subscriptions.delete(t),this._updateConnection()}}},Ae=class extends ni{constructor(e){super();g(this,"binding");g(this,"_previousState");g(this,"getState",()=>(this.isConnected||this._syncState(),this._previousState));this.binding=e;let r=e.getState();if(r===Re)throw new Error("Entry not available in the store");this._previousState=r}get path(){return this.binding.path}_syncState(){let e=this.binding.getState();return e===Re||$c(e,this._previousState)?!1:(this._previousState=e,!0)}_connect(){let e=()=>{this._syncState()&&this.notifySubscribers()},r=this.binding.subscribe(e);return this._syncState(),r}},Hr=class extends ni{constructor(e){super();g(this,"binding");g(this,"_previousStateDirty",!0);g(this,"_previousState");g(this,"getState",()=>{if(!this.isConnected||this._previousStateDirty){let e=this.binding.getState();e!==Re&&(this._previousState===void 0||!$c(e,this._previousState))&&(this._previousState=e),this._previousStateDirty=!1}if(this._previousState===void 0)throw new Error("Entry not available in the store");return this._previousState});this.binding=e}get path(){return this.binding.path}_connect(){let e=()=>{this._previousStateDirty=!0,this.notifySubscribers()},r=this.binding.subscribe(e);return this._previousStateDirty=!0,r}},Gt=class extends ni{constructor(e){super();g(this,"binding");this.binding=e}get path(){return this.binding.path}getState(){return this.binding.getState()}outerSubscribe(e){return this.binding.subscribe(e)}_connect(){let e=()=>{this.notifySubscribers()},r=this.binding.getState(),o=r?.subscribe(e),i=()=>{let n=this.binding.getState();if(n===r)return;r=n;let a=o;o=void 0;try{a?.()}finally{o=n?.subscribe(e),e()}},s=this.outerSubscribe(i);return()=>si([()=>s?.(),()=>o?.()])}},ai=class extends ni{constructor(e){super();g(this,"config");this.config=e}getState(){return this.config.binding.getState()}outerSubscribe(e){return this.config.binding.subscribe(e)}_connect(){let e=`Runtime event "${this.config.event}"`,r=a=>{this.notifySubscribers(a,e)},o=this.config.binding.getState(),i=o?.unstable_on(this.config.event,r),s=()=>{let a=this.config.binding.getState();if(a===o)return;o=a;let c=i;i=void 0;try{c?.()}finally{i=a?.unstable_on(this.config.event,r)}},n=this.outerSubscribe(s);return()=>si([()=>n?.(),()=>i?.()])}};var ci=class{constructor(){g(this,"_providers",new Map);g(this,"_providerUnsubscribes",new Map);g(this,"_subscribers",new Set)}getModelContext(){return lc(new Set(this._providers.values()))}registerModelContextProvider(t){let e=Symbol();this._providers.set(e,t);let r;try{r=t.subscribe?.(()=>{this.notifySubscribers()})}catch(i){this._providers.delete(e);try{this.notifySubscribers()}catch(s){console.error(s)}throw i}this._providerUnsubscribes.set(e,r),this.notifySubscribers();let o=!1;return()=>{if(o)return;o=!0,this._providers.delete(e);let i=this._providerUnsubscribes.get(e);this._providerUnsubscribes.delete(e);let s=!1,n,a=c=>{try{c()}catch(l){s?console.error(l):(s=!0,n=l)}};if(i&&a(i),a(()=>this.notifySubscribers()),s)throw n}}notifySubscribers(){rt(this._subscribers)}subscribe(t){return this._subscribers.add(t),()=>{this._subscribers.delete(t)}}};var Ws=[],Bh={modelName:void 0,toolNames:Ws},Nh=(t,e)=>t===e||Ee(t,e),li=(t,e)=>{let r=t.getModelContext(),o=r.config?.modelName,i=r.tools?Object.keys(r.tools).sort():Ws,s=i.length?i:Ws;return o===e.modelName&&Nh(s,e.toolNames)?e:{modelName:o,toolNames:s}},Lh=()=>{let t=v(11),e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=new ci,t[0]=e):e=t[0];let r=e,o;t[1]===Symbol.for("react.memo_cache_sentinel")?(o=()=>li(r,Bh),t[1]=o):o=t[1];let[i,s]=j(o),n,a;t[2]===Symbol.for("react.memo_cache_sentinel")?(n=()=>(s(p=>li(r,p)),r.subscribe(()=>{s(p=>li(r,p))})),a=[r],t[2]=n,t[3]=a):(n=t[2],a=t[3]),N(n,a);let c;t[4]!==i?(c=()=>li(r,i),t[4]=i,t[5]=c):c=t[5];let l,u,m;t[6]===Symbol.for("react.memo_cache_sentinel")?(l=()=>r.getModelContext(),u=p=>r.subscribe(p),m=p=>r.registerModelContextProvider(p),t[6]=l,t[7]=u,t[8]=m):(l=t[6],u=t[7],m=t[8]);let d;return t[9]!==c?(d={getState:c,getModelContext:l,subscribe:u,register:m},t[9]=c,t[10]=d):d=t[10],d},ui=U(Lh);var Vc=(t,e)=>{if(!(e.status?.type==="running"||e.status?.type==="requires-action")){let o=t.complete;return typeof o!="function"?o??null:o({args:e.args,result:e.result})}let r=t.running;return typeof r!="function"?r??null:r({args:e.args})};var Fc=t=>t.display!==void 0?t.display==="standalone":t.type==="human",Uc=t=>function(r){return Vc(t,r)};var jc=t=>{let e=v(16),{toolkit:r,mcpApp:o}=t,i;e[0]!==o?(i=o?[he("mcpApp",o)]:[],e[0]=o,e[1]=i):i=e[1];let s=Ht(i)[0],[n,a]=j($h),c;e[2]!==s||e[3]!==n?(c={toolUIs:n,mcpApp:s},e[2]=s,e[3]=n,e[4]=c):c=e[4];let l=c,u=Ur(),m;e[5]===Symbol.for("react.memo_cache_sentinel")?(m=(w,S,_)=>{let T={render:S,renderText:_?.renderText,standalone:_?.standalone??!1};return a(E=>{let C=Se(E);return C[w]=[...C[w]??[],T],C}),()=>{a(E=>{let C=E[w]?.filter(R=>R!==T)??[],x=Se(E);return C.length>0?(x[w]=C,x):(delete x[w],x)})}},e[5]=m):m=e[5];let d=m,p,h;e[6]!==r?(p=()=>{if(!r)return;let w=[];for(let[S,_]of Object.entries(r)){let T="render"in _?_.render:void 0,E="renderText"in _?_.renderText:void 0,C=T??(E?Uc(E):void 0);C&&w.push(d(S,C,{standalone:Fc(_),renderText:E}))}return()=>{w.forEach(Vh)}},h=[r,d],e[6]=r,e[7]=p,e[8]=h):(p=e[7],h=e[8]),N(p,h);let f;e[9]!==u||e[10]!==r?(f=()=>{if(!r)return;let w=Object.entries(r).reduce(Fh,Se());return u.current.modelContext().register({getModelContext:()=>({tools:w})})},e[9]=u,e[10]=r,e[11]=f):f=e[11];let b;e[12]!==r?(b=[r],e[12]=r,e[13]=b):b=e[13],jr("modelContext",f,b);let y;return e[14]!==l?(y={getState:()=>l,setToolUI:d},e[14]=l,e[15]=y):y=e[15],y},zc=U(jc);$r(jc,(t,e)=>{!t.modelContext&&e.modelContext.source===null&&(t.modelContext=ui())});function $h(){return Se()}function Vh(t){return t()}function Fh(t,e){let[r,o]=e;if(o.type==="mcp")return t;let{display:i,render:s,renderText:n,...a}=o;return t[r]=a,t}var Ne=t=>De(t.subscribe,t.getState,t.getServerSnapshot);var Uh=Symbol.for("assistant-ui.silent-runtime-action"),Hc=t=>typeof t=="object"&&t!==null&&Uh in t;var di=(t,e)=>{let r=e();return r.catch(o=>{Hc(o)||console.error(`[assistant-ui] ${t} failed:`,o)}),r};var jh=t=>{let e=v(9),{runtime:r}=t,o=Ne(r),i;e[0]!==o?(i=()=>o,e[0]=o,e[1]=i):i=e[1];let s,n;e[2]!==r?(s=()=>di("attachment remove",r.remove),n=()=>r,e[2]=r,e[3]=s,e[4]=n):(s=e[3],n=e[4]);let a;return e[5]!==i||e[6]!==s||e[7]!==n?(a={getState:i,remove:s,__internal_getRuntime:n},e[5]=i,e[6]=s,e[7]=n,e[8]=a):a=e[8],a},mi=U(jh);var zh=t=>{let e=v(5),{runtime:r,index:o}=t,i;e[0]!==o||e[1]!==r?(i=r.getAttachmentByIndex(o),e[0]=o,e[1]=r,e[2]=i):i=e[2];let s=i,n;return e[3]!==s?(n=mi({runtime:s}),e[3]=s,e[4]=n):n=e[4],ce(n)},Hh=U(zh),qh=({item:t,onMove:e,onRemove:r})=>({getState:()=>t,steer:()=>e({lane:"steer",insertAfter:null}),move:e,remove:r}),Gh=U(qh),Kh=t=>{let e=v(63),{threadIdRef:r,messageIdRef:o,runtime:i,isSuggestion:s}=t,n=Ne(i),a=Ue(),c=$(!1),l,u;e[0]!==a||e[1]!==o||e[2]!==i||e[3]!==r?(l=()=>{let B=[],M=i.unstable_on("send",A=>{let L=c.current;c.current=!1,a("composer.send",{threadId:r.current,...o&&{messageId:o.current},chars:A.chars,attachments:A.attachments,...L?{suggestion:!0}:void 0})});B.push(M);let k=i.unstable_on("attachmentAdd",A=>{a("composer.attachmentAdd",{threadId:r.current,...o&&{messageId:o.current},...A.contentType?{contentType:A.contentType}:void 0})});return B.push(k),B.push(i.unstable_on("attachmentAddError",A=>{a("composer.attachmentAddError",{threadId:r.current,...o&&{messageId:o.current},...A.attachmentId&&{attachmentId:A.attachmentId},reason:A.reason,message:A.message,...A.contentType?{contentType:A.contentType}:void 0})})),()=>{for(let A of B)A()}},u=[i,a,r,o],e[0]=a,e[1]=o,e[2]=i,e[3]=r,e[4]=l,e[5]=u):(l=e[4],u=e[5]),N(l,u);let m;if(e[6]!==i||e[7]!==n.attachments){let B;e[9]!==i?(B=(M,k)=>he(M.id,Hh({runtime:i,index:k}),[i,k]),e[9]=i,e[10]=B):B=e[10],m=n.attachments.map(B),e[6]=i,e[7]=n.attachments,e[8]=m}else m=e[8];let d=Be(m),p=n.queue,h;if(e[11]!==p||e[12]!==i){let B;e[14]!==i?(B=M=>he(M.id,Gh({item:M,onMove:k=>i.moveQueueItem(M.id,k),onRemove:()=>i.removeQueueItem(M.id)})),e[14]=i,e[15]=B):B=e[15],h=p.map(B),e[11]=p,e[12]=i,e[13]=h}else h=e[13];let f=Be(h),b=n.type??"thread",y;e[16]!==d.state||e[17]!==p||e[18]!==n.attachmentAccept||e[19]!==n.canCancel||e[20]!==n.canSend||e[21]!==n.dictation||e[22]!==n.isEditing||e[23]!==n.isEmpty||e[24]!==n.quote||e[25]!==n.role||e[26]!==n.runConfig||e[27]!==n.text||e[28]!==b?(y={text:n.text,role:n.role,attachments:d.state,runConfig:n.runConfig,isEditing:n.isEditing,canCancel:n.canCancel,canSend:n.canSend,attachmentAccept:n.attachmentAccept,isEmpty:n.isEmpty,type:b,dictation:n.dictation,quote:n.quote,queue:p},e[16]=d.state,e[17]=p,e[18]=n.attachmentAccept,e[19]=n.canCancel,e[20]=n.canSend,e[21]=n.dictation,e[22]=n.isEditing,e[23]=n.isEmpty,e[24]=n.quote,e[25]=n.role,e[26]=n.runConfig,e[27]=n.text,e[28]=b,e[29]=y):y=e[29];let w=y,S;e[30]!==w?(S=()=>w,e[30]=w,e[31]=S):S=e[31];let _;e[32]!==s||e[33]!==i?(_=B=>{let M=i.getState();c.current=M.canSend&&(s?.(M.text)??!1),i.send(B)},e[32]=s,e[33]=i,e[34]=_):_=e[34];let T;e[35]!==a||e[36]!==o||e[37]!==i||e[38]!==r?(T=()=>{!o&&i.getState().canCancel&&a("composer.cancel",{threadId:r.current}),i.cancel()},e[35]=a,e[36]=o,e[37]=i,e[38]=r,e[39]=T):T=e[39];let E=i.beginEdit??Qh,C;e[40]!==d?(C=B=>"id"in B?d.get({key:B.id}):d.get(B),e[40]=d,e[41]=C):C=e[41];let x;e[42]!==f?(x=B=>"id"in B?f.get({key:B.id}):f.get(B),e[42]=f,e[43]=x):x=e[43];let R;e[44]!==i?(R=()=>i,e[44]=i,e[45]=R):R=e[45];let D;return e[46]!==i.addAttachment||e[47]!==i.clearAttachments||e[48]!==i.reset||e[49]!==i.setQuote||e[50]!==i.setRole||e[51]!==i.setRunConfig||e[52]!==i.setText||e[53]!==i.startDictation||e[54]!==i.stopDictation||e[55]!==E||e[56]!==C||e[57]!==x||e[58]!==R||e[59]!==S||e[60]!==_||e[61]!==T?(D={getState:S,setText:i.setText,setRole:i.setRole,setRunConfig:i.setRunConfig,addAttachment:i.addAttachment,reset:i.reset,clearAttachments:i.clearAttachments,send:_,cancel:T,beginEdit:E,startDictation:i.startDictation,stopDictation:i.stopDictation,setQuote:i.setQuote,attachment:C,queueItem:x,__internal_getRuntime:R},e[46]=i.addAttachment,e[47]=i.clearAttachments,e[48]=i.reset,e[49]=i.setQuote,e[50]=i.setRole,e[51]=i.setRunConfig,e[52]=i.setText,e[53]=i.startDictation,e[54]=i.stopDictation,e[55]=E,e[56]=C,e[57]=x,e[58]=R,e[59]=S,e[60]=_,e[61]=T,e[62]=D):D=e[62],D},pi=U(Kh);function Qh(){throw new Error("beginEdit is not supported in this runtime")}var hi=t=>({get current(){return t()}});var Wh=t=>{let e=v(13),{runtime:r}=t,o=Ne(r),i;e[0]!==o?(i=()=>o,e[0]=o,e[1]=i):i=e[1];let s,n,a,c;e[2]!==r?(s=u=>r.addToolResult(u),n=u=>r.resumeToolCall(u),a=u=>r.respondToToolApproval(u),c=()=>r,e[2]=r,e[3]=s,e[4]=n,e[5]=a,e[6]=c):(s=e[3],n=e[4],a=e[5],c=e[6]);let l;return e[7]!==i||e[8]!==s||e[9]!==n||e[10]!==a||e[11]!==c?(l={getState:i,addToolResult:s,resumeToolCall:n,respondToToolApproval:a,__internal_getRuntime:c},e[7]=i,e[8]=s,e[9]=n,e[10]=a,e[11]=c,e[12]=l):l=e[12],l},qc=U(Wh);var Jh=t=>{let e=v(5),{runtime:r,index:o}=t,i;e[0]!==o||e[1]!==r?(i=r.getAttachmentByIndex(o),e[0]=o,e[1]=r,e[2]=i):i=e[2];let s=i,n;return e[3]!==s?(n=mi({runtime:s}),e[3]=s,e[4]=n):n=e[4],ce(n)},Yh=U(Jh),Xh=t=>{let e=v(5),{runtime:r,index:o}=t,i;e[0]!==o||e[1]!==r?(i=r.getMessagePartByIndex(o),e[0]=o,e[1]=r,e[2]=i):i=e[2];let s=i,n;return e[3]!==s?(n=qc({runtime:s}),e[3]=s,e[4]=n):n=e[4],ce(n)},Zh=U(Xh),ef=t=>{let e=v(74),{runtime:r,threadIdRef:o,threadId:i}=t,s=Ne(r),n=Ue(),[a,c]=j(!1),[l,u]=j(!1),m;e[0]!==r?(m=hi(()=>r.getState().id),e[0]=r,e[1]=m):m=e[1];let d=m,p=$(s.status),h;e[2]!==n||e[3]!==r||e[4]!==i?(h=K=>{n(K,{threadId:i,messageId:r.getState().id})},e[2]=n,e[3]=r,e[4]=i,e[5]=h):h=e[5];let f=h,b,y;e[6]!==n||e[7]!==s.id||e[8]!==s.status||e[9]!==i?(b=()=>{let K=s.status,Ve=p.current;p.current=K,K?.type==="incomplete"&&K.reason==="error"&&(Ve?.type!=="incomplete"||Ve.reason!=="error")&&n("message.error",{threadId:i,messageId:s.id,reason:"error"})},y=[s.status,s.id,n,i],e[6]=n,e[7]=s.id,e[8]=s.status,e[9]=i,e[10]=b,e[11]=y):(b=e[10],y=e[11]),N(b,y);let w;e[12]!==d||e[13]!==r.composer||e[14]!==o?(w=pi({runtime:r.composer,threadIdRef:o,messageIdRef:d}),e[12]=d,e[13]=r.composer,e[14]=o,e[15]=w):w=e[15];let S=xt(w),_;if(e[16]!==r||e[17]!==s.content){let K;e[19]!==r?(K=(Ve,Fe)=>he("toolCallId"in Ve&&Ve.toolCallId!=null?`toolCallId-${Ve.toolCallId}`:`index-${Fe}`,Zh({runtime:r,index:Fe}),[r,Fe]),e[19]=r,e[20]=K):K=e[20],_=s.content.map(K),e[16]=r,e[17]=s.content,e[18]=_}else _=e[18];let T=Be(_),E;e[21]!==s.attachments?(E=s.attachments??[],e[21]=s.attachments,e[22]=E):E=e[22];let C;if(e[23]!==r||e[24]!==E){let K;e[26]!==r?(K=(Ve,Fe)=>he(Ve.id,Yh({runtime:r,index:Fe}),[r,Fe]),e[26]=r,e[27]=K):K=e[27],C=E.map(K),e[23]=r,e[24]=E,e[25]=C}else C=e[25];let x=Be(C),R=s,D;e[28]!==S.state||e[29]!==a||e[30]!==l||e[31]!==T.state||e[32]!==R?(D={...R,parts:T.state,composer:S.state,isCopied:a,isHovering:l},e[28]=S.state,e[29]=a,e[30]=l,e[31]=T.state,e[32]=R,e[33]=D):D=e[33];let B=D,M;e[34]!==B?(M=()=>B,e[34]=B,e[35]=M):M=e[35];let k;e[36]!==S.methods?(k=()=>S.methods,e[36]=S.methods,e[37]=k):k=e[37];let A;e[38]!==r?(A=()=>r.delete(),e[38]=r,e[39]=A):A=e[39];let L,H;e[40]!==f||e[41]!==r?(L=K=>(f("message.reload"),r.reload(K)),H=()=>(f("message.speak"),r.speak()),e[40]=f,e[41]=r,e[42]=L,e[43]=H):(L=e[42],H=e[43]);let te,re;e[44]!==r?(te=()=>r.stopSpeaking(),re=K=>r.submitFeedback(K),e[44]=r,e[45]=te,e[46]=re):(te=e[45],re=e[46]);let ae;e[47]!==f||e[48]!==r?(ae=K=>(f("message.branchSwitched"),r.switchToBranch(K)),e[47]=f,e[48]=r,e[49]=ae):ae=e[49];let me;e[50]!==r?(me=()=>r.unstable_getCopyText(),e[50]=r,e[51]=me):me=e[51];let be;e[52]!==T?(be=K=>"index"in K?T.get({index:K.index}):T.get({key:`toolCallId-${K.toolCallId}`}),e[52]=T,e[53]=be):be=e[53];let O;e[54]!==x?(O=K=>"id"in K?x.get({key:K.id}):x.get(K),e[54]=x,e[55]=O):O=e[55];let F;e[56]!==f?(F=K=>{K&&f("message.copied"),c(K)},e[56]=f,e[57]=F):F=e[57];let Q;e[58]!==r?(Q=()=>r,e[58]=r,e[59]=Q):Q=e[59];let Z;return e[60]!==M||e[61]!==k||e[62]!==A||e[63]!==L||e[64]!==H||e[65]!==te||e[66]!==re||e[67]!==ae||e[68]!==me||e[69]!==be||e[70]!==O||e[71]!==F||e[72]!==Q?(Z={getState:M,composer:k,delete:A,reload:L,speak:H,stopSpeaking:te,submitFeedback:re,switchToBranch:ae,getCopyText:me,part:be,attachment:O,setIsCopied:F,setIsHovering:u,__internal_getRuntime:Q},e[60]=M,e[61]=k,e[62]=A,e[63]=L,e[64]=H,e[65]=te,e[66]=re,e[67]=ae,e[68]=me,e[69]=be,e[70]=O,e[71]=F,e[72]=Q,e[73]=Z):Z=e[73],Z},Gc=U(ef);var tf=t=>{let e=W(()=>({}),[]),r=e.state,o=[];t.suggestions.forEach(s=>{let n=r?.suggestions[o.length];o.push(n&&Ee(n,s)?n:s)});let i=r&&Ee(o,r.suggestions)?r:{suggestions:o};return e.state=i,i},rf=t=>({getState:()=>t}),of=U(rf),Kc=t=>{let e=v(9),r=tf(t),o;e[0]!==r.suggestions?(o=r.suggestions.map(af),e[0]=r.suggestions,e[1]=o):o=e[1];let i=Be(o),s;e[2]!==r?(s=()=>r,e[2]=r,e[3]=s):s=e[3];let n;e[4]!==i?(n=c=>{let{index:l}=c;return i.get({index:l})},e[4]=i,e[5]=n):n=e[5];let a;return e[6]!==s||e[7]!==n?(a={getState:s,suggestion:n},e[6]=s,e[7]=n,e[8]=a):a=e[8],a},sf=t=>{let e=v(6),r;e[0]!==t?(r=t??[],e[0]=t,e[1]=r):r=e[1];let o;e[2]!==r?(o=r.map(cf),e[2]=r,e[3]=o):o=e[3];let i;return e[4]!==o?(i={suggestions:o},e[4]=o,e[5]=i):i=e[5],Kc(i)},CT=U(sf),nf=t=>{let e=v(4),r;e[0]!==t?(r=t.map(lf),e[0]=t,e[1]=r):r=e[1];let o;return e[2]!==r?(o={suggestions:r},e[2]=r,e[3]=o):o=e[3],Kc(o)},Qc=U(nf);function af(t,e){return he(e,of(t),[t])}function cf(t){return typeof t=="string"?{title:t,label:"",prompt:t}:{title:t.title,label:t.label,prompt:t.prompt}}function lf(t){return{title:t.title??t.prompt,label:t.label??"",prompt:t.prompt}}var ot=Object.freeze({type:"complete"}),fi=Object.freeze({type:"running"}),uf=Object.freeze({cancelled:Object.freeze({type:"incomplete",reason:"cancelled"}),length:Object.freeze({type:"incomplete",reason:"length"}),"content-filter":Object.freeze({type:"incomplete",reason:"content-filter"}),other:Object.freeze({type:"incomplete",reason:"other"}),error:Object.freeze({type:"incomplete",reason:"error"})}),df=t=>{let e=t.status;if(!e||typeof e!="object")return;let{type:r}=e;if(r==="running")return fi;if(r==="complete")return ot;if(r!=="incomplete")return;let{reason:o}=e;return uf[o==="cancelled"||o==="length"||o==="content-filter"||o==="other"||o==="error"?o:"other"]},gi=(t,e,r)=>{if(t.role!=="assistant")return ot;if(r.type==="tool-call")return r.result===void 0?t.status:ot;if(t.status.type==="running"){let i=df(r);if(i)return i}let o=e===Math.max(0,t.content.length-1);return t.status.type==="requires-action"?ot:o?t.status:ot};var mf=t=>"reason"in t?t.reason:void 0,pf=t=>"error"in t?t.error:void 0,hf=32,Wc=new WeakMap,Js=t=>Wc.get(t)??t.id,ff=(t,e,r)=>"status"in t&&t.status?gi(t,e,r):ot,Jc=()=>{let t=[],e=new Map;return r=>{let o=[],i=new Map,s=!0,n=(c,l,u,m)=>{if(!(u>hf))for(let[d,p]of c.entries())for(let[h,f]of p.content.entries()){if(f.type!=="tool-call"||f.messages===void 0)continue;let b=f.messages,y=ff(p,h,f),w=mf(y),S=pf(y),_=`${m}${d}.${h}`,T=e.get(_),E=T?.part===f&&T.statusType===y.type&&T.statusReason===w&&Object.is(T.statusError,S)&&T.messages===b&&T.task.messageId===p.id&&T.task.parentTaskId===l&&T.task.depth===u?T.task:{id:f.toolCallId,toolName:f.toolName,args:f.args,result:f.result,...f.isError===void 0?void 0:{isError:f.isError},status:y,timing:f.timing,messageId:p.id,parentTaskId:l,depth:u,messages:b};E!==T?.task&&(s=!1,Wc.set(E,_)),o.push(E),i.set(_,{task:E,part:f,statusType:y.type,statusReason:w,statusError:S,messages:b}),n(b,E.id,u+1,`${_}.`)}};n(r,null,0,"");let a=s&&o.length===t.length&&o.every((c,l)=>c===t[l])?t:o;return t=a,e=i,a}},gf=({task:t})=>({getState:()=>t}),Yc=U(gf);var vf=t=>{let e=v(7),{runtime:r,id:o,threadIdRef:i,threadId:s}=t,n;e[0]!==o||e[1]!==r?(n=r.getMessageById(o),e[0]=o,e[1]=r,e[2]=n):n=e[2];let a=n,c;return e[3]!==a||e[4]!==s||e[5]!==i?(c=Gc({runtime:a,threadIdRef:i,threadId:s}),e[3]=a,e[4]=s,e[5]=i,e[6]=c):c=e[6],ce(c)},bf=U(vf),wf=t=>{let e=v(93),{runtime:r}=t,o=Ne(r),i=Ue(),s,n;e[0]!==i||e[1]!==r?(s=()=>{let O=[];for(let F of["runStart","runEnd","initialize","modelContextUpdate"]){let Q=r.unstable_on(F,()=>{let Z=r.getState()?.threadId||"unknown";i(`thread.${F}`,{threadId:Z})});O.push(Q)}return O.push(r.unstable_on("toolApprovalAnswered",F=>{let Q=r.getState()?.threadId||"unknown";i("thread.toolApprovalAnswered",{threadId:Q,...F})})),()=>{for(let F of O)F()}},n=[r,i],e[0]=i,e[1]=r,e[2]=s,e[3]=n):(s=e[2],n=e[3]),N(s,n);let a;e[4]!==r?(a=hi(()=>r.getState().threadId),e[4]=r,e[5]=a):a=e[5];let c=a,l;e[6]!==i||e[7]!==r?(l=O=>{i(O,{threadId:r.getState().threadId})},e[6]=i,e[7]=r,e[8]=l):l=e[8];let u=l,m;e[9]!==r?(m=O=>r.getState().suggestions.some(F=>F.prompt===O),e[9]=r,e[10]=m):m=e[10];let d=m,p;e[11]!==d||e[12]!==r.composer||e[13]!==c?(p=pi({runtime:r.composer,threadIdRef:c,isSuggestion:d}),e[11]=d,e[12]=r.composer,e[13]=c,e[14]=p):p=e[14];let h=xt(p),f;e[15]!==o.suggestions?(f=Qc(o.suggestions),e[15]=o.suggestions,e[16]=f):f=e[16];let b=xt(f),y;e[17]===Symbol.for("react.memo_cache_sentinel")?(y=Jc(),e[17]=y):y=e[17];let w=y,S;e[18]!==o.messages?(S=w(o.messages),e[18]=o.messages,e[19]=S):S=e[19];let _=S,T;e[20]!==_?(T=_.map(xf),e[20]=_,e[21]=T):T=e[21];let E=Be(T),C;if(e[22]!==r||e[23]!==o.messages||e[24]!==o.threadId||e[25]!==c){let O;e[27]!==r||e[28]!==o.threadId||e[29]!==c?(O=F=>he(F.id,bf({runtime:r,id:F.id,threadIdRef:c,threadId:o.threadId}),[r,F.id,c,o.threadId]),e[27]=r,e[28]=o.threadId,e[29]=c,e[30]=O):O=e[30],C=o.messages.map(O),e[22]=r,e[23]=o.messages,e[24]=o.threadId,e[25]=c,e[26]=C}else C=e[26];let x=Be(C),R=x.state.length===0&&!o.isLoading,D;e[31]!==h.state||e[32]!==x.state||e[33]!==o.capabilities||e[34]!==o.extras||e[35]!==o.isDisabled||e[36]!==o.isLoading||e[37]!==o.isRunning||e[38]!==o.speech||e[39]!==o.state||e[40]!==o.suggestions||e[41]!==o.voice||e[42]!==R||e[43]!==_?(D={isEmpty:R,isDisabled:o.isDisabled,isLoading:o.isLoading,isRunning:o.isRunning,capabilities:o.capabilities,state:o.state,suggestions:o.suggestions,extras:o.extras,speech:o.speech,voice:o.voice,composer:h.state,messages:x.state,tasks:_},e[31]=h.state,e[32]=x.state,e[33]=o.capabilities,e[34]=o.extras,e[35]=o.isDisabled,e[36]=o.isLoading,e[37]=o.isRunning,e[38]=o.speech,e[39]=o.state,e[40]=o.suggestions,e[41]=o.voice,e[42]=R,e[43]=_,e[44]=D):D=e[44];let B=D,M;e[45]!==B?(M=()=>B,e[45]=B,e[46]=M):M=e[46];let k;e[47]!==h.methods?(k=()=>h.methods,e[47]=h.methods,e[48]=k):k=e[48];let A;e[49]!==b?(A=()=>b.methods,e[49]=b,e[50]=A):A=e[50];let L;e[51]!==E||e[52]!==_?(L=O=>{if("id"in O){let F=_.find(Q=>Q.id===O.id);return E.get({key:F?Js(F):O.id})}return E.get(O)},e[51]=E,e[52]=_,e[53]=L):L=e[53];let H;e[54]!==i||e[55]!==d||e[56]!==r?(H=O=>{let F=typeof O=="string"?{content:[{type:"text",text:O}]}:O;if((F.role??"user")==="user"){let Q=F.content.map(yf).join("");i("composer.send",{threadId:r.getState().threadId,chars:Q.length,attachments:F.attachments?.length??0,...d(Q)?{suggestion:!0}:void 0})}r.append(O)},e[54]=i,e[55]=d,e[56]=r,e[57]=H):H=e[57];let te;e[58]!==u||e[59]!==r||e[60]!==o.isRunning?(te=()=>{o.isRunning&&u("thread.cancelRun"),r.cancelRun()},e[58]=u,e[59]=r,e[60]=o.isRunning,e[61]=te):te=e[61];let re;e[62]!==u||e[63]!==r?(re=()=>{r.connectVoice(),u("thread.voiceStarted")},e[62]=u,e[63]=r,e[64]=re):re=e[64];let ae;e[65]!==x?(ae=O=>"id"in O?x.get({key:O.id}):x.get(O),e[65]=x,e[66]=ae):ae=e[66];let me;e[67]!==r?(me=()=>r,e[67]=r,e[68]=me):me=e[68];let be;return e[69]!==r.deleteMessage||e[70]!==r.disconnectVoice||e[71]!==r.export||e[72]!==r.getModelContext||e[73]!==r.getVoiceVolume||e[74]!==r.import||e[75]!==r.importExternalState||e[76]!==r.muteVoice||e[77]!==r.reset||e[78]!==r.resumeRun||e[79]!==r.startRun||e[80]!==r.stopSpeaking||e[81]!==r.subscribeVoiceVolume||e[82]!==r.unmuteVoice||e[83]!==M||e[84]!==k||e[85]!==A||e[86]!==L||e[87]!==H||e[88]!==te||e[89]!==re||e[90]!==ae||e[91]!==me?(be={getState:M,composer:k,suggestions:A,task:L,append:H,deleteMessage:r.deleteMessage,startRun:r.startRun,resumeRun:r.resumeRun,importExternalState:r.importExternalState,cancelRun:te,getModelContext:r.getModelContext,export:r.export,import:r.import,reset:r.reset,stopSpeaking:r.stopSpeaking,connectVoice:re,disconnectVoice:r.disconnectVoice,getVoiceVolume:r.getVoiceVolume,subscribeVoiceVolume:r.subscribeVoiceVolume,muteVoice:r.muteVoice,unmuteVoice:r.unmuteVoice,message:ae,__internal_getRuntime:me},e[69]=r.deleteMessage,e[70]=r.disconnectVoice,e[71]=r.export,e[72]=r.getModelContext,e[73]=r.getVoiceVolume,e[74]=r.import,e[75]=r.importExternalState,e[76]=r.muteVoice,e[77]=r.reset,e[78]=r.resumeRun,e[79]=r.startRun,e[80]=r.stopSpeaking,e[81]=r.subscribeVoiceVolume,e[82]=r.unmuteVoice,e[83]=M,e[84]=k,e[85]=A,e[86]=L,e[87]=H,e[88]=te,e[89]=re,e[90]=ae,e[91]=me,e[92]=be):be=e[92],be},Xc=U(wf);function xf(t){return he(Js(t),Yc({task:t}),[t])}function yf(t){return t.type==="text"?t.text:""}var it=(t,e)=>di(`thread list ${t}`,e);var _f=t=>{let e=v(35),{runtime:r,mainThreadIsRunning:o}=t,i=o===void 0?!1:o,s=Ne(r),n;e:{let R=s.isRunning||s.isMain&&i;if(R===s.isRunning){n=s;break e}let D;e[0]!==R||e[1]!==s?(D={...s,isRunning:R},e[0]=R,e[1]=s,e[2]=D):D=e[2],n=D}let a=n,c=Ue(),{isMain:l,id:u}=s,m;e[3]!==l||e[4]!==u?(m={isMain:l,threadId:u},e[3]=l,e[4]=u,e[5]=m):m=e[5];let d=$(m),p,h;e[6]!==c||e[7]!==l||e[8]!==u?(p=()=>{let R=d.current;R.isMain===l&&R.threadId===u||(d.current={isMain:l,threadId:u},c(l?"threadListItem.switchedTo":"threadListItem.switchedAway",{threadId:u}))},h=[l,u,c],e[6]=c,e[7]=l,e[8]=u,e[9]=p,e[10]=h):(p=e[9],h=e[10]),N(p,h);let f;e[11]!==a?(f=()=>a,e[11]=a,e[12]=f):f=e[12];let b,y,w,S,_,T,E;e[13]!==r?(_=R=>it("switch",()=>r.switchTo(R)),T=R=>it("rename",()=>r.rename(R)),E=R=>it("update custom metadata",()=>r.updateCustom(R)),b=()=>it("archive",()=>r.archive()),y=()=>it("unarchive",()=>r.unarchive()),w=()=>it("delete",()=>r.delete()),S=R=>it("generate title",()=>r.generateTitle(R)),e[13]=r,e[14]=b,e[15]=y,e[16]=w,e[17]=S,e[18]=_,e[19]=T,e[20]=E):(b=e[14],y=e[15],w=e[16],S=e[17],_=e[18],T=e[19],E=e[20]);let C;e[21]!==r?(C=()=>r,e[21]=r,e[22]=C):C=e[22];let x;return e[23]!==r.detach||e[24]!==r.initialize||e[25]!==b||e[26]!==y||e[27]!==w||e[28]!==S||e[29]!==C||e[30]!==f||e[31]!==_||e[32]!==T||e[33]!==E?(x={getState:f,switchTo:_,rename:T,updateCustom:E,archive:b,unarchive:y,delete:w,generateTitle:S,initialize:r.initialize,detach:r.detach,__internal_getRuntime:C},e[23]=r.detach,e[24]=r.initialize,e[25]=b,e[26]=y,e[27]=w,e[28]=S,e[29]=C,e[30]=f,e[31]=_,e[32]=T,e[33]=E,e[34]=x):x=e[34],x},Zc=U(_f);var el=t=>{let e=v(4),r=Ue(),o=$(t),i,s;e[0]!==r||e[1]!==t?(i=()=>{let n=o.current;n!==t&&(o.current=t,r("threads.selectionChanged",{threadId:t,previousThreadId:n}))},s=[t,r],e[0]=r,e[1]=t,e[2]=i,e[3]=s):(i=e[2],s=e[3]),N(i,s)};var Sf=t=>{let e=v(6),{runtime:r,id:o,mainThreadIsRunning:i}=t,s;e[0]!==o||e[1]!==r?(s=r.getItemById(o),e[0]=o,e[1]=r,e[2]=s):s=e[2];let n=s,a;return e[3]!==i||e[4]!==n?(a=Zc({runtime:n,mainThreadIsRunning:i}),e[3]=i,e[4]=n,e[5]=a):a=e[5],ce(a)},Tf=U(Sf),Cf=t=>{let e=v(48),{runtime:r,__internal_assistantRuntime:o}=t,i=Ne(r);el(i.mainThreadId);let s=Ue(),n,a;e[0]!==s||e[1]!==r?(n=()=>r.unstable_subscribeThreadEvents(D=>{let{threadId:B,type:M}=D;B!==r.getState().mainThreadId&&s(`thread.${M}`,{threadId:B})}),a=[r,s],e[0]=s,e[1]=r,e[2]=n,e[3]=a):(n=e[2],a=e[3]),N(n,a);let c;e[4]!==r.main?(c=Xc({runtime:r.main}),e[4]=r.main,e[5]=c):c=e[5];let l=xt(c),u;e[6]!==l.state||e[7]!==r||e[8]!==i.threadItems?(u=Object.keys(i.threadItems).map(D=>he(D,Tf({runtime:r,id:D,mainThreadIsRunning:l.state.isRunning}),[r,D,l.state.isRunning])),e[6]=l.state,e[7]=r,e[8]=i.threadItems,e[9]=u):u=e[9];let m=Be(u),d=i.newThreadId??null,p;e[10]!==l.state||e[11]!==i.archivedThreadIds||e[12]!==i.hasMore||e[13]!==i.isLoading||e[14]!==i.isLoadingMore||e[15]!==i.loadError||e[16]!==i.mainThreadId||e[17]!==i.threadIds||e[18]!==d||e[19]!==m.state?(p={mainThreadId:i.mainThreadId,newThreadId:d,isLoading:i.isLoading,loadError:i.loadError,isLoadingMore:i.isLoadingMore,hasMore:i.hasMore,threadIds:i.threadIds,archivedThreadIds:i.archivedThreadIds,threadItems:m.state,main:l.state},e[10]=l.state,e[11]=i.archivedThreadIds,e[12]=i.hasMore,e[13]=i.isLoading,e[14]=i.isLoadingMore,e[15]=i.loadError,e[16]=i.mainThreadId,e[17]=i.threadIds,e[18]=d,e[19]=m.state,e[20]=p):p=e[20];let h=p,f;e[21]!==h?(f=()=>h,e[21]=h,e[22]=f):f=e[22];let b;e[23]!==l.methods?(b=()=>l.methods,e[23]=l.methods,e[24]=b):b=e[24];let y;e[25]!==h||e[26]!==m?(y=D=>{if(D==="main")return m.get({key:h.mainThreadId});if("id"in D)return m.get({key:D.id});let{index:B,archived:M}=D,k=M!==void 0&&M?h.archivedThreadIds[B]:h.threadIds[B];return m.get({key:k})},e[25]=h,e[26]=m,e[27]=y):y=e[27];let w,S,_,T,E,C;e[28]!==r?(w=(D,B)=>it("switch",()=>r.switchToThread(D,B)),S=()=>it("create",()=>r.switchToNewThread()),_=()=>r.getLoadThreadsPromise(),T=()=>r.reload(),E=()=>r.reloadMainThread(),C=()=>r.loadMore(),e[28]=r,e[29]=w,e[30]=S,e[31]=_,e[32]=T,e[33]=E,e[34]=C):(w=e[29],S=e[30],_=e[31],T=e[32],E=e[33],C=e[34]);let x;e[35]!==o?(x=()=>o,e[35]=o,e[36]=x):x=e[36];let R;return e[37]!==w||e[38]!==S||e[39]!==_||e[40]!==T||e[41]!==E||e[42]!==C||e[43]!==x||e[44]!==f||e[45]!==b||e[46]!==y?(R={getState:f,thread:b,item:y,switchToThread:w,switchToNewThread:S,getLoadThreadsPromise:_,reload:T,reloadMainThread:E,loadMore:C,__internal_getAssistantRuntime:x},e[37]=w,e[38]=S,e[39]=_,e[40]=T,e[41]=E,e[42]=C,e[43]=x,e[44]=f,e[45]=b,e[46]=y,e[47]=R):R=e[47],R},tl=U(Cf);var rl=(t,e)=>{t.thread??(t.thread=de({source:"threads",query:{type:"main"},get:r=>r.threads.thread("main")})),t.threadListItem??(t.threadListItem=de({source:"threads",query:{type:"main"},get:r=>r.threads.item("main")})),t.composer??(t.composer=de({source:"thread",query:{},get:r=>r.threads.thread("main").composer()})),!t.modelContext&&e.modelContext.source===null&&(t.modelContext=ui()),!t.suggestions&&e.suggestions.source===null&&(t.suggestions=de({source:"thread",query:{},get:r=>r.thread.suggestions()}))};var ol=t=>{let e=v(7),r=Ur(),o;e[0]!==r||e[1]!==t?(o=()=>t.registerModelContextProvider(r.current.modelContext()),e[0]=r,e[1]=t,e[2]=o):o=e[2];let i;e[3]!==t?(i=[t],e[3]=t,e[4]=i):i=e[4],jr("modelContext",o,i);let s;return e[5]!==t?(s=tl({runtime:t.threads,__internal_assistantRuntime:t}),e[5]=t,e[6]=s):s=e[6],ce(s)},il=U(ol),If=(t,e)=>{rl(t,e),!t.tools&&e.tools.source===null&&(t.tools=zc({})),!t.dataRenderers&&e.dataRenderers.source===null&&(t.dataRenderers=cc())};$r(ol,If);var mr=require("react/jsx-runtime"),Ef=ue({}),sl=({effects:t})=>{"use no memo";return Qe(t),null},fe=G(function(e,r){"use no memo";let{config:o,children:i}=e,s="extends"in e,n="value"in e,a=Lr();if(ri){if(s&&n)throw new Error("AuiProvider: pass either `extends` or `value`, not both.");if(s&&e.extends===void 0)throw new Error("AuiProvider: `extends` must be a client or null, not undefined.");if(s&&!o)throw new Error("AuiProvider: `extends` requires a `config`.");if(n&&o)throw new Error("AuiProvider: pass either `value` or `config`, not both.");if(!n&&!o)throw new Error("AuiProvider: a `config` is required.");if(!s&&!n&&a!==kt)throw new Error("A parent AuiProvider exists \u2014 pass extends={aui} to inherit it or extends={null} to isolate.")}let c=s?e.extends??kt:n?e.value??kt:a,l=Zo(),{client:u,effects:m}=Oc(c,o??Ef,l);return Is(r,()=>u,[u]),(0,mr.jsx)(Xo.Provider,{value:l,children:(0,mr.jsxs)(Jo.Provider,{value:u,children:[(0,mr.jsx)(sl,{effects:gc(c)}),m&&(0,mr.jsx)(sl,{effects:m}),i]})})});var Rf=t=>{let e=V(),r=$(!1),o=r.current?null:t(e);return P(()=>r.current?t(e):o),()=>(r.current=!0,t(e))},Af=Object.freeze({});function je(t){let e=v(3),{getItemState:r,children:o}=t,i=Rf(r),s;return e[0]!==o||e[1]!==i?(s=o(i),e[0]=o,e[1]=i,e[2]=s):s=e[2],Pf(s)}var Pf=t=>{let e=typeof t=="object"&&t!=null&&"type"in t?t:null,r=e?.type,o=e?.key,i=typeof e?.props=="object"&&e.props!=null&&Object.entries(e.props).length===0?Af:e?.props;return W(()=>e,[r,o,i])??t};var vi=(t,e)=>{let r=v(11),o=V(),i=ve(e),s;r[0]!==t?(s=Vr(t),r[0]=t,r[1]=s):s=r[1];let{scope:n,event:a}=s,c;r[2]!==o||r[3]!==i||r[4]!==a||r[5]!==n?(c=()=>o.on({scope:n,event:a},i),r[2]=o,r[3]=i,r[4]=a,r[5]=n,r[6]=c):c=r[6];let l;r[7]!==o||r[8]!==a||r[9]!==n?(l=[o,n,a],r[7]=o,r[8]=a,r[9]=n,r[10]=l):l=r[10],N(c,l)};var qr=require("react/jsx-runtime"),nl=t=>t._core?.RenderComponent,kf=({runtime:t,aui:e,config:r,children:o})=>{"use no memo";let i=nl(t),s=ue({...r,threads:il(t)});return(0,qr.jsxs)(fe,{extends:e,config:s,children:[i&&(0,qr.jsx)(i,{}),o]})},Ys=oe(t=>{let e=v(5),{runtime:r,aui:o,config:i,children:s}=t,n=o===void 0?null:o,a;return e[0]!==n||e[1]!==s||e[2]!==i||e[3]!==r?(a=(0,qr.jsx)(kf,{runtime:r,aui:n,config:i,children:s}),e[0]=n,e[1]=s,e[2]=i,e[3]=r,e[4]=a):a=e[4],a});function xe(t){return t!=null&&typeof t=="object"&&!Array.isArray(t)}function Gr(t,e=0){return e>100?!1:t===null||typeof t=="string"||typeof t=="boolean"?!0:typeof t=="number"?!Number.isNaN(t)&&Number.isFinite(t):Array.isArray(t)?t.every(r=>Gr(r,e+1)):xe(t)?Object.entries(t).every(([r,o])=>typeof r=="string"&&Gr(o,e+1)):!1}var Mf=100,Xs=(t,e,r)=>{if(t===e)return!0;if(r>Mf||t==null||e==null)return!1;if(Array.isArray(t))return!Array.isArray(e)||t.length!==e.length?!1:t.every((s,n)=>Xs(s,e[n],r+1));if(Array.isArray(e)||!xe(t)||!xe(e))return!1;let o=Object.keys(t),i=Object.keys(e);return o.length!==i.length?!1:o.every(s=>Object.hasOwn(e,s)&&Xs(t[s],e[s],r+1))},Kr=(t,e)=>!Gr(t)||!Gr(e)?!1:Xs(t,e,0);var al=Symbol.for("aui.tool-response"),bi="<no result>",ze=class Zs{constructor(e){g(this,"artifact");g(this,"result");g(this,"isError");g(this,"modelContent");g(this,"messages");e.artifact!==void 0&&(this.artifact=e.artifact);let r=e.result;this.result=r===void 0?bi:r,this.isError=e.isError??!1,e.modelContent!==void 0&&(this.modelContent=e.modelContent),e.messages!==void 0&&(this.messages=e.messages)}get[al](){return!0}static[Symbol.hasInstance](e){return typeof e=="object"&&e!==null&&al in e}static toResponse(e){return e instanceof Zs?e:new Zs({result:e===void 0?bi:e})}};var pr=()=>{let t,e,r=new Promise((o,i)=>{t=o,e=i});if(!t||!e)throw new Error("Failed to create promise");return{promise:r,resolve:t,reject:e}};var cl=()=>{let t=[],e=!1,r=!1,o=!1,i,s,n=0,a,c,l=()=>(s=void 0,c??(c=Promise.all(t.splice(0).map(async f=>{try{await f.reader.cancel().catch(()=>{}),await f.pipeTask}finally{f.reader.releaseLock()}})).then(()=>{})),c),u=f=>{r||o||(o=!0,console.error(f),l(),i.error(f),a?.reject(f),a=void 0)},m=f=>{f.promise||(f.promise=f.reader.read().then(({done:b,value:y})=>{f.promise=void 0,!(r||o)&&(b?(t.splice(t.indexOf(f),1),f.reader.releaseLock(),e&&t.length===0&&n===0&&i.close()):i.enqueue(y),a?.resolve(),a=void 0)}).catch(u))},d=new ReadableStream({start(f){i=f},pull(){return a=pr(),t.forEach(f=>{m(f)}),a.promise},async cancel(){r=!0;let f=l();a?.resolve(),a=void 0,await f}}),p=f=>{if(t.length>0&&(s=void 0),!s){let b=[];s=b,n++,Promise.resolve().then(()=>{if(n--,s===b&&(s=void 0),!(r||o)){for(let y of b)i.enqueue(y);e&&t.length===0&&n===0&&i.close(),a?.resolve(),a=void 0}}).catch(u)}s.push(f)};return{readable:d,isSealed(){return e},isCancelled(){return r},isErrored(){return o},seal(){e||r||o||(e=!0,t.length===0&&n===0&&i.close())},addStream:(f,b)=>{let y=b?.catch(()=>{});if(r||o){f.cancel().catch(()=>{});return}if(e)throw f.cancel().catch(()=>{}),new Error("Cannot add streams after the run callback has settled.");s=void 0;let w={reader:f.getReader(),pipeTask:y};t.push(w),m(w)},enqueue(f){if(!(r||o)){if(e)throw new Error("Cannot add streams after the run callback has settled.");p(f)}}}};var ll=t=>t instanceof TypeError,Le=(t,e,r)=>{try{t.enqueue(e)}catch(o){if(!ll(o))throw o;r?.(o)}},wi=t=>{try{t.close()}catch(e){if(!ll(e))throw e}};var xi=(t,e)=>new ReadableStream({start(r){return t.start?.(e(r))},pull(r){return t.pull?.(e(r))},cancel(r){return t.cancel?.(r)}}),yi=(t,e)=>{let r;return[xi({start(o){r=o},cancel(o){return e?.(r,o)}},t),r]};var ul=class{constructor(t,e={}){g(this,"_controller");g(this,"_strict");g(this,"_isClosed",!1);g(this,"_warnedDropped",!1);g(this,"_warnDroppedAfterClose",t=>{this._warnedDropped||(this._warnedDropped=!0,console.error(`Dropped text delta for closed stream: ${String(t)}`))});this._controller=t,this._strict=e.strict??!0}append(t){let e={type:"text-delta",path:[],textDelta:t};if(this._isClosed){if(this._strict)throw new TypeError("Cannot append to a closed TextStreamController");return Le(this._controller,e,this._warnDroppedAfterClose),this}return Le(this._controller,e),this}close(){this._isClosed||(this._isClosed=!0,Le(this._controller,{type:"part-finish",path:[]}),wi(this._controller))}},dl=(t,e={})=>xi(t,r=>new ul(r,e)),en=(t={})=>yi(e=>new ul(e,t));var Df=class{constructor(t,e={}){g(this,"_isClosed",!1);g(this,"_mergeTask");g(this,"_controller");g(this,"_argsTextController");this._controller=t;let r=dl({start:i=>{this._argsTextController=i}},e),o=!1;this._mergeTask=r.pipeTo(new WritableStream({write:i=>{switch(i.type){case"text-delta":o=!0,Le(this._controller,i);break;case"part-finish":o||Le(this._controller,{type:"text-delta",textDelta:"{}",path:[]}),Le(this._controller,{type:"tool-call-args-text-finish",path:[]});break;default:throw new Error(`Unexpected chunk type: ${i.type}`)}}}))}get argsText(){return this._argsTextController}async setResponse(t){if(this._isClosed)return;let e=t.result;Le(this._controller,{type:"result",path:[],...t.artifact!==void 0?{artifact:t.artifact}:{},result:e===void 0?bi:e,isError:t.isError??!1,...t.modelContent!==void 0?{modelContent:t.modelContent}:{},...t.messages!==void 0?{messages:t.messages}:{}}),await this.close()}async close(){this._isClosed||(this._isClosed=!0,this._argsTextController.close(),await this._mergeTask,Le(this._controller,{type:"part-finish",path:[]}),wi(this._controller))}};var ml=(t={})=>yi(e=>new Df(e,t));var _i=class{constructor(){g(this,"value",-1)}up(){return++this.value}};var pl=class extends TransformStream{constructor(t){super({transform(e,r){r.enqueue({...e,path:[t,...e.path]})}})}},CI=class extends TransformStream{constructor(t){super({transform(e,r){let{path:[o,...i]}=e;if(t!==o)throw new Error(`Path mismatch: expected ${t}, got ${o}`);r.enqueue({...e,path:i})}})}},hl=class extends TransformStream{constructor(t){let e=new _i,r=new Map;super({transform(o,i){o.type==="part-start"&&o.path.length===0&&r.set(e.up(),t.up());let[s,...n]=o.path;if(s===void 0){i.enqueue(o);return}let a=r.get(s);if(a===void 0)throw new Error("Path not found");i.enqueue({...o,path:[a,...n]})}})}};var Si=(t,e=21)=>(r=e)=>{let o="",i=r|0;for(;i-- >0;)o+=t[Math.random()*t.length|0];return o};var fl=Si("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7);var Of=class gl{constructor(e,r={}){g(this,"_state");g(this,"_parentId");this._state=e||{strict:r.strict??!0,merger:cl(),contentCounter:new _i}}get __internal_isClosed(){return this._state.merger.isSealed()||this._state.merger.isCancelled()||this._state.merger.isErrored()}get __internal_isCancelled(){return this._state.merger.isCancelled()}__internal_getReadable(){return this._state.merger.readable}__internal_subscribeToClose(e){this._state.closeSubscriber=e}_addTransformedStream(e,r){if(e.locked)throw new TypeError("Cannot merge a stream that is already locked to a reader.");let o=e.pipeTo(r.writable).catch(async i=>{throw await r.writable.abort(i).catch(()=>{}),i});this._state.merger.addStream(r.readable,o)}_addPart(e,r){this._state.append&&(this._state.append.controller.close(),this._state.append=void 0),this.enqueue({type:"part-start",part:e,path:[]}),this._addTransformedStream(r,new pl(this._state.contentCounter.value))}merge(e){this._addTransformedStream(e,new hl(this._state.contentCounter))}appendText(e){(this._state.append?.kind!=="text"||this._state.append.parentId!==this._parentId)&&(this._state.append={kind:"text",parentId:this._parentId,controller:this.addTextPart()}),this._state.append.controller.append(e)}appendReasoning(e,r){(r!==void 0||this._state.append?.kind!=="reasoning"||this._state.append.parentId!==this._parentId)&&(this._state.append={kind:"reasoning",parentId:this._parentId,controller:this.addReasoningPart(r)}),!(r!==void 0&&e.length===0)&&this._state.append.controller.append(e)}addTextPart(){let[e,r]=en({strict:this._state.strict});return this._addPart(this._withParentIdOption({type:"text"}),e),r}addReasoningPart(e){let[r,o]=en({strict:this._state.strict});return this._addPart(this._withParentIdOption({type:"reasoning",...e}),r),o}addToolCallPart(e){let r=typeof e=="string"?{toolName:e}:e,o=r.toolName,i=r.toolCallId??fl(),[s,n]=ml({strict:this._state.strict});return this._addPart({type:"tool-call",toolName:o,toolCallId:i,...this._parentId&&{parentId:this._parentId}},s),r.argsText!==void 0&&(n.argsText.append(r.argsText),n.argsText.close()),r.args!==void 0&&(n.argsText.append(JSON.stringify(r.args)),n.argsText.close()),r.response!==void 0&&n.setResponse(r.response),n}_finishedPartStream(){return new ReadableStream({start(e){e.enqueue({type:"part-finish",path:[]}),e.close()}})}_withParentIdOption(e){return this._parentId?{...e,parentId:this._parentId}:e}appendSource(e){this._addPart(this._withParentIdOption(e),this._finishedPartStream())}appendFile(e){this._addPart(this._withParentIdOption(e),this._finishedPartStream())}appendData(e){this._addPart(this._withParentIdOption(e),this._finishedPartStream())}enqueue(e){this._state.merger.enqueue(e),e.type==="part-start"&&e.path.length===0&&this._state.contentCounter.up()}withParentId(e){let r=new gl(this._state);return r._parentId=e,r}close(){this._state.append?.controller?.close(),this._state.merger.seal(),this._state.closeSubscriber?.()}};function vl(t,e={}){let r=new Of(void 0,e);return(async()=>{try{await t(r)}catch(i){r.__internal_isClosed?r.__internal_isCancelled||console.error(i):r.enqueue({type:"error",path:[],error:String(i)})}finally{r.__internal_isClosed||r.close()}})(),r.__internal_getReadable()}function tn(t={}){let{resolve:e,promise:r}=pr(),o;return[vl(i=>(o=i,o.__internal_subscribeToClose(e),r),t),o]}var bl=class extends TransformStream{constructor(t){super();let e=t(super.readable);Object.defineProperty(this,"readable",{value:e,writable:!1})}};var Qr=class extends TransformStream{constructor(){let t=[];super({transform(e,r){if(e.type==="part-start"){if(e.path.length!==0){r.error(new Error("Nested parts are not supported"));return}t.push(e.part),r.enqueue(e);return}if(e.type==="text-delta"||e.type==="result"||e.type==="part-finish"||e.type==="tool-call-args-text-finish"){if(e.path.length!==1){r.error(new Error(`${e.type} chunks must have a path of length 1`));return}let o=e.path[0];if(o<0||o>=t.length){r.error(new Error(`Invalid path index: ${o}`));return}let i=t[o];r.enqueue({...e,meta:i});return}r.enqueue(e)}})}};var Lf=/[0-9a-fA-F]/;function Sl(t){let e=["ROOT"],r=-1,o=null,i=0,s=[],n;function a(){n!==void 0&&(s.push(JSON.parse(`"${n}"`)),n=void 0)}function c(d,p,h){switch(d){case'"':r=p,e.pop(),e.push(h),e.push("INSIDE_STRING"),a();break;case"f":case"t":case"n":r=p,o=p,e.pop(),e.push(h),e.push("INSIDE_LITERAL");break;case"-":e.pop(),e.push(h),e.push("INSIDE_NUMBER"),a();break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":r=p,e.pop(),e.push(h),e.push("INSIDE_NUMBER"),a();break;case"{":r=p,e.pop(),e.push(h),e.push("INSIDE_OBJECT_START"),a();break;case"[":r=p,e.pop(),e.push(h),e.push("INSIDE_ARRAY_START"),a()}}function l(d,p){switch(d){case",":e.pop(),e.push("INSIDE_OBJECT_AFTER_COMMA");break;case"}":r=p,e.pop(),n=s.pop()}}function u(d,p){switch(d){case",":e.pop(),e.push("INSIDE_ARRAY_AFTER_COMMA"),n=(Number(n)+1).toString();break;case"]":r=p,e.pop(),n=s.pop()}}for(let d=0;d<t.length;d++){let p=t[d];switch(e[e.length-1]){case"ROOT":c(p,d,"FINISH");break;case"INSIDE_OBJECT_START":switch(p){case'"':e.pop(),e.push("INSIDE_OBJECT_KEY"),n="";break;case"}":r=d,e.pop(),n=s.pop()}break;case"INSIDE_OBJECT_AFTER_COMMA":p==='"'&&(e.pop(),e.push("INSIDE_OBJECT_KEY"),n="");break;case"INSIDE_OBJECT_KEY":switch(p){case'"':e.pop(),e.push("INSIDE_OBJECT_AFTER_KEY");break;case"\\":e.push("INSIDE_STRING_ESCAPE"),n+=p;break;default:n+=p}break;case"INSIDE_OBJECT_AFTER_KEY":p===":"&&(e.pop(),e.push("INSIDE_OBJECT_BEFORE_VALUE"));break;case"INSIDE_OBJECT_BEFORE_VALUE":c(p,d,"INSIDE_OBJECT_AFTER_VALUE");break;case"INSIDE_OBJECT_AFTER_VALUE":l(p,d);break;case"INSIDE_STRING":switch(p){case'"':e.pop(),r=d,n=s.pop();break;case"\\":e.push("INSIDE_STRING_ESCAPE");break;default:r=d}break;case"INSIDE_ARRAY_START":p==="]"?(r=d,e.pop(),n=s.pop()):(n="0",c(p,d,"INSIDE_ARRAY_AFTER_VALUE"));break;case"INSIDE_ARRAY_AFTER_VALUE":switch(p){case",":e.pop(),e.push("INSIDE_ARRAY_AFTER_COMMA"),n=(Number(n)+1).toString();break;case"]":r=d,e.pop(),n=s.pop();break;default:r=d}break;case"INSIDE_ARRAY_AFTER_COMMA":c(p,d,"INSIDE_ARRAY_AFTER_VALUE");break;case"INSIDE_STRING_ESCAPE":{e.pop();let h=e[e.length-1];p==="u"?(e.push("INSIDE_STRING_UNICODE_ESCAPE"),i=0):h==="INSIDE_STRING"&&(r=d),h==="INSIDE_OBJECT_KEY"&&(n+=p);break}case"INSIDE_STRING_UNICODE_ESCAPE":{let h=e[e.length-2];if(!Lf.test(p)){e.pop(),d--;break}i++,i===4&&(e.pop(),h==="INSIDE_STRING"&&(r=d)),h==="INSIDE_OBJECT_KEY"&&(n+=p);break}case"INSIDE_NUMBER":switch(p){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":r=d;break;case"e":case"E":case"-":case"+":case".":break;case",":e.pop(),n=s.pop(),e[e.length-1]==="INSIDE_ARRAY_AFTER_VALUE"&&u(p,d),e[e.length-1]==="INSIDE_OBJECT_AFTER_VALUE"&&l(p,d);break;case"}":e.pop(),n=s.pop(),e[e.length-1]==="INSIDE_OBJECT_AFTER_VALUE"&&l(p,d);break;case"]":e.pop(),n=s.pop(),e[e.length-1]==="INSIDE_ARRAY_AFTER_VALUE"&&u(p,d);break;default:e.pop(),n=s.pop()}break;case"INSIDE_LITERAL":{let h=t.substring(o,d+1);!"false".startsWith(h)&&!"true".startsWith(h)&&!"null".startsWith(h)?(e.pop(),e[e.length-1]==="INSIDE_OBJECT_AFTER_VALUE"?l(p,d):e[e.length-1]==="INSIDE_ARRAY_AFTER_VALUE"&&u(p,d)):r=d;break}}}let m=t.slice(0,r+1);for(let d=e.length-1;d>=0;d--)switch(e[d]){case"INSIDE_STRING":m+='"';break;case"INSIDE_OBJECT_KEY":case"INSIDE_OBJECT_AFTER_KEY":case"INSIDE_OBJECT_AFTER_COMMA":case"INSIDE_OBJECT_START":case"INSIDE_OBJECT_BEFORE_VALUE":case"INSIDE_OBJECT_AFTER_VALUE":m+="}";break;case"INSIDE_ARRAY_START":case"INSIDE_ARRAY_AFTER_COMMA":case"INSIDE_ARRAY_AFTER_VALUE":m+="]";break;case"INSIDE_LITERAL":{let p=t.substring(o,t.length);"true".startsWith(p)?m+="true".slice(p.length):"false".startsWith(p)?m+="false".slice(p.length):"null".startsWith(p)&&(m+="null".slice(p.length))}}return[m,s]}var sn=_e(on(),1),Ti=Symbol("aui.parse-partial-json-object.meta"),Tl=t=>t?.[Ti],fr=t=>{if(t.length===0)return{[Ti]:{state:"partial",partialPath:[]}};try{let e=sn.default.parse(t);if(typeof e!="object"||e===null)throw new Error("argsText is expected to be an object");return e[Ti]={state:"complete",partialPath:[]},e}catch{try{let[e,r]=Sl(t),o=sn.default.parse(e);if(typeof o!="object"||o===null)throw new Error("argsText is expected to be an object");return o[Ti]={state:"partial",partialPath:r},o}catch{return}}},Cl=(t,e,r)=>{if(typeof t!="object"||t===null)return e.state;if(e.state==="complete")return"complete";if(r.length===0)return e.state;let[o,...i]=r;if(!Object.hasOwn(t,o))return"partial";let[s,...n]=e.partialPath;if(o!==s)return"complete";let a=t[o];return Cl(a,{state:"partial",partialPath:n},i)},Kt=(t,e)=>{let r=Tl(t);if(!r)throw new Error("unable to determine object state");return Cl(t,r,e.map(String))};async function*$f(){let t=this.getReader(),e=!0;try{for(;;){let r;try{r=await t.read()}catch(i){throw e=!1,i}if(r.done){e=!1;break}let{value:o}=r;yield o}}finally{try{e&&await t.cancel()}finally{t.releaseLock()}}}function Ci(t){var e;return t[e=Symbol.asyncIterator]??(t[e]=$f),t}function Il(t,e,r){try{let o=t();if(typeof o=="object"&&o!==null&&"then"in o)return o.then(e,r);e(o)}catch(o){r(o)}}function Wr(t,e){let r=t;for(let o of e){if(r==null||!Object.hasOwn(r,o))return;r=r[o]}return r}var Vf=class{constructor(t,e,r){g(this,"resolve");g(this,"reject");g(this,"disposed",!1);g(this,"fieldPath");this.resolve=t,this.reject=e,this.fieldPath=r}get isDisposed(){return this.disposed}update(t){if(!this.disposed)try{if(Kt(t,this.fieldPath)==="complete"){let e=Wr(t,this.fieldPath);e!==void 0&&(this.resolve(e),this.dispose())}}catch(e){this.reject(e),this.dispose()}}end(t){if(!this.disposed)try{let e=Wr(t,this.fieldPath);this.resolve(e)}catch(e){this.reject(e)}finally{this.dispose()}}dispose(){this.disposed=!0}},Ff=class{constructor(t,e){g(this,"controller");g(this,"disposed",!1);g(this,"fieldPath");this.controller=t,this.fieldPath=e}get isDisposed(){return this.disposed}update(t){if(!this.disposed)try{let e=Wr(t,this.fieldPath);e!==void 0&&this.controller.enqueue(e),Kt(t,this.fieldPath)==="complete"&&(this.controller.close(),this.dispose())}catch(e){this.controller.error(e),this.dispose()}}end(){this.disposed||(this.controller.close(),this.dispose())}dispose(){this.disposed=!0}},Uf=class{constructor(t,e){g(this,"controller");g(this,"disposed",!1);g(this,"fieldPath");g(this,"lastValue");this.controller=t,this.fieldPath=e}get isDisposed(){return this.disposed}update(t){if(!this.disposed)try{let e=Wr(t,this.fieldPath);if(e!==void 0&&typeof e=="string"){let r=e.substring(this.lastValue?.length||0);this.lastValue=e,this.controller.enqueue(r)}Kt(t,this.fieldPath)==="complete"&&(this.controller.close(),this.dispose())}catch(e){this.controller.error(e),this.dispose()}}end(){this.disposed||(this.controller.close(),this.dispose())}dispose(){this.disposed=!0}},jf=class{constructor(t,e){g(this,"controller");g(this,"disposed",!1);g(this,"fieldPath");g(this,"nextIndex",0);this.controller=t,this.fieldPath=e}get isDisposed(){return this.disposed}update(t){if(!this.disposed)try{let e=Wr(t,this.fieldPath);if(!Array.isArray(e))return;for(;this.nextIndex<e.length;this.nextIndex++){let r=[...this.fieldPath,this.nextIndex];if(Kt(t,r)!=="complete")break;this.controller.enqueue(e[this.nextIndex])}Kt(t,this.fieldPath)==="complete"&&(this.controller.close(),this.dispose())}catch(e){this.controller.error(e),this.dispose()}}end(){this.disposed||(this.controller.close(),this.dispose())}dispose(){this.disposed=!0}},zf=class{constructor(t){g(this,"argTextDeltas");g(this,"handles",new Set);g(this,"accumulatedText","");g(this,"parsedTextLength",-1);g(this,"args");g(this,"finished",!1);this.argTextDeltas=t,this.processStream()}async processStream(){try{let t=this.argTextDeltas.getReader();for(;;){let{value:e,done:r}=await t.read();if(r)break;this.accumulatedText+=e,this.handles.size!==0&&this.parseCurrentArgs()&&this.updateHandles()}}catch(t){console.error("Error processing argument stream:",t)}finally{this.finished=!0;for(let t of this.handles)t.end(this.args);this.handles.clear()}}parseCurrentArgs(){if(this.parsedTextLength===this.accumulatedText.length)return!1;let t=fr(this.accumulatedText);return this.parsedTextLength=this.accumulatedText.length,t===void 0?(this.args??(this.args=fr("")),!1):(this.args=t,!0)}updateHandles(){for(let t of this.handles)t.update(this.args),t.isDisposed&&this.handles.delete(t)}activateHandle(t){if(this.parseCurrentArgs(),t.update(this.args),!t.isDisposed){if(this.finished){t.end(this.args);return}this.handles.add(t)}}get(...t){return new Promise((e,r)=>{let o=new Vf(e,r,t);this.activateHandle(o)})}streamValues(...t){let e=t,r,o=new ReadableStream({start:i=>{r=new Ff(i,e),this.activateHandle(r)},cancel:()=>{r&&(r.dispose(),this.handles.delete(r))}});return Ci(o)}streamText(...t){let e=t,r,o=new ReadableStream({start:i=>{r=new Uf(i,e),this.activateHandle(r)},cancel:()=>{r&&(r.dispose(),this.handles.delete(r))}});return Ci(o)}forEach(...t){let e=t,r,o=new ReadableStream({start:i=>{r=new jf(i,e),this.activateHandle(r)},cancel:()=>{r&&(r.dispose(),this.handles.delete(r))}});return Ci(o)}},Hf=class{constructor(t){g(this,"promise");this.promise=t}get(){return this.promise}},El=class{constructor(){g(this,"args");g(this,"response");g(this,"writable");g(this,"resolve");g(this,"argsText","");g(this,"result",{get:async()=>(await this.response.get()).result});let t=new TransformStream;this.writable=t.writable,this.args=new zf(t.readable);let{promise:e,resolve:r}=pr();this.resolve=r,this.response=new Hf(e)}async appendArgsTextDelta(t){let e=this.writable.getWriter();try{await e.write(t)}catch(r){console.warn(r)}finally{e.releaseLock()}this.argsText+=t}async finishArgsText(){let t=this.writable.getWriter();try{await t.close()}catch(e){console.warn(e)}finally{t.releaseLock()}}setResponse(t){this.resolve(t)}};var Rl=_e(on(),1),qf=Symbol.for("assistant-stream.tool-execution-id"),nn=(t,e,r,o,i)=>{try{let s=e?.(r,o,i);Promise.resolve(s).catch(n=>{console.error(`[assistant-stream] ${t} callback threw an error`,n)})}catch(s){console.error(`[assistant-stream] ${t} callback threw an error`,s)}},gr=t=>t.join(","),an=(t,e)=>{let r={...t};return Object.defineProperty(r,qf,{value:e,enumerable:!0}),r},Al=class extends bl{constructor(t){let e=t,r=new Map,o=new Map,i=new Set,s=new Map,n=0;super(a=>{let c=new TransformStream({async transform(l,u){let m=s.get(gr(l.path));switch((l.type!=="part-finish"||l.meta.type!=="tool-call")&&u.enqueue(m?an(l,m):l),l.type){case"part-start":{let d=n;if(n+=1,l.part.type==="tool-call"){let p=new El,h=Symbol();s.set(String(d),h),o.set(h,p),e.streamCall({reader:p,toolCallId:l.part.toolCallId,toolName:l.part.toolName,executionId:h})}break}case"text-delta":if(l.meta.type==="tool-call"){let d=s.get(gr(l.path)),p=d?o.get(d):void 0;if(!p)throw new Error("No controller found for tool call");await p.appendArgsTextDelta(l.textDelta)}break;case"result":{if(l.meta.type!=="tool-call")break;let d=s.get(gr(l.path)),p=d?o.get(d):void 0;if(!p)throw new Error("No controller found for tool call");p.setResponse(new ze({result:l.result,artifact:l.artifact,isError:l.isError,modelContent:l.modelContent,messages:l.messages})),i.add(d);break}case"tool-call-args-text-finish":{if(l.meta.type!=="tool-call")break;let{toolCallId:d,toolName:p}=l.meta,h=s.get(gr(l.path)),f=h?o.get(h):void 0;if(!f)throw new Error("No controller found for tool call");if(await f.finishArgsText(),i.has(h))break;let b=!1,y=Il(()=>{let w;try{w=Rl.default.parse(f.argsText)}catch(_){throw new Error(`Function parameter parsing failed. ${JSON.stringify(_.message)}`)}let S=e.execute({toolCallId:d,toolName:p,args:w,executionId:h});return S!==void 0&&(b=!0,nn("onExecutionStart",e.onExecutionStart,d,p,h)),S},w=>{if(b&&nn("onExecutionEnd",e.onExecutionEnd,d,p,h),w===void 0)return;let S=new ze({artifact:w.artifact,result:w.result,isError:w.isError,messages:w.messages,modelContent:w.modelContent});f.setResponse(S),Le(u,an({type:"result",path:l.path,...S},h))},w=>{b&&nn("onExecutionEnd",e.onExecutionEnd,d,p,h);let S=new ze({result:String(w),isError:!0});f.setResponse(S),Le(u,an({type:"result",path:l.path,...S},h))});y&&r.set(h,y);break}case"part-finish":{if(l.meta.type!=="tool-call")break;let d=s.get(gr(l.path)),p=d?r.get(d):void 0,h=()=>{d&&(r.delete(d),o.delete(d),i.delete(d),s.delete(gr(l.path)))};p?p.then(()=>{h(),Le(u,l)}):(h(),u.enqueue(l))}}},async flush(){await Promise.all(r.values())}});return a.pipeThrough(new Qr).pipeThrough(c)})}};var kl=Symbol.for("assistant-stream.tool-execution-id"),Ei=Symbol("assistant-stream.tool-aborted"),Gf=t=>typeof t=="object"&&t!==null&&"~standard"in t&&t["~standard"].version===1,Kf=t=>typeof t?.then=="function",Pl=async(t,e,r=!1)=>{let o,i=new Promise(s=>{o=()=>{r?queueMicrotask(()=>queueMicrotask(()=>s(Ei))):s(Ei)},e.aborted?o():e.addEventListener("abort",o,{once:!0})});try{return await Promise.race([t,i])}finally{e.removeEventListener("abort",o)}},Ii=()=>new ze({result:"Tool execution was cancelled.",isError:!0});function Qf(t,e,r,o){let i=t?.[r.toolName];return i?.execute?(async n=>{if(e.aborted)return Ii();let a=n;if(Gf(i.parameters)){let u=i.parameters["~standard"].validate(r.args),m=Kf(u)?await Pl(u,e):u;if(m===Ei)return Ii();m.issues&&(a=i.experimental_onSchemaValidationError??(()=>{throw new Error(`Function parameter validation failed. ${JSON.stringify(m.issues)}`)}))}if(e.aborted)return Ii();let c=(async()=>{let u={toolCallId:r.toolCallId,abortSignal:e,human:p=>o(r.toolCallId,p,r.executionId),[kl]:r.executionId},m=await a(r.args,u),d=ze.toResponse(m);if(i.toModelOutput&&!d.isError&&d.modelContent===void 0)try{let p=await i.toModelOutput({toolCallId:r.toolCallId,input:r.args,output:d.result});return new ze({result:d.result,artifact:d.artifact,isError:d.isError,messages:d.messages,modelContent:p})}catch(p){console.warn(`[assistant-stream] tool "${r.toolName}" toModelOutput threw; falling back to default projection.`,p)}return d})(),l=await Pl(c,e,!0);return l===Ei?Ii():l})(i.execute):void 0}function Wf(t,e,r,o,i){let s={toolCallId:o.toolCallId,abortSignal:e,human:n=>i(o.toolCallId,n,o.executionId),[kl]:o.executionId};t?.[o.toolName]?.streamCall?.(r,s)}function cn(t,e,r,o){let i=typeof t=="function"?t:()=>t,s=typeof e=="function"?e:()=>e,n=o,a=r,c={execute:l=>Qf(i(),s(),l,a),streamCall:({reader:l,...u})=>Wf(i(),s(),l,u,a),onExecutionStart:n?.onExecutionStart,onExecutionEnd:n?.onExecutionEnd};return new Al(c)}function Jf(t){let e=t.metadata;if(!e||typeof e!="object")return;let r=e.custom;if(!r||typeof r!="object")return;let o=r.interactables;return Array.isArray(o)?o:void 0}function Yf(t){return`update_${t.replace(/[^a-zA-Z0-9_-]/g,"_")}`}var ln=t=>{if(!xe(t))return;let e=t.id;return typeof e=="string"||typeof e=="number"?e:void 0};function Xf(t,e,r){let o=Array.isArray(e.set)?[...e.set]:[...t];if(e.clear===!0&&(o=[]),Array.isArray(e.remove)&&e.remove.length>0){let s=new Set(e.remove);o=o.filter(n=>{let a=ln(n);return a!==void 0?!s.has(a):!s.has(n)})}let i=e.update;if(Array.isArray(i)&&i.length>0){let s=new Map;for(let n of i){let a=ln(n);a!==void 0&&!Number.isNaN(a)&&!s.has(a)&&s.set(a,n)}o=o.map(n=>{let a=ln(n);if(a===void 0||!xe(n))return n;let c=s.get(a);return c?{...n,...c}:n})}if(Array.isArray(e.add)&&e.add.length>0){let s=r?e.add.map(n=>{if(!xe(n)||n.id!==void 0)return n;let a=r();return a===void 0?n:{...n,id:a}}):e.add;o=[...o,...s]}return o}function un(t,e,r){if(!xe(t)||!xe(e))return e;let o=xe(r?.arrayBaseline)?r.arrayBaseline:t,i=Object.entries(t);for(let[s,n]of Object.entries(e)){let a=o[s];if(Array.isArray(a)&&xe(n)){let c=r?.idFactory&&(r.idKeyedFields===void 0||r.idKeyedFields.has(s))?()=>r.idFactory?.(s):void 0;i.push([s,Xf(a,n,c)])}else i.push([s,n])}return Object.fromEntries(i)}function Zf(t,e){if(!xe(t)||!xe(e))return;for(let i of Object.keys(t))if(!Object.hasOwn(e,i))return;let r=[];for(let[i,s]of Object.entries(e))(!Object.hasOwn(t,i)||!Kr(t[i],s))&&r.push([i,s]);let o=r.length;if(!(o===0||o===Object.keys(e).length))return Object.fromEntries(r)}var eg=t=>{if(!t||typeof t!="object")return;let e=t;return e.type==="tool-call"?e:void 0},tg=(t,e)=>{if(!t.args||typeof t.args!="object")return!1;let r=xe(t.result)?t.result:void 0;if(r?.success===!1)return!1;if(typeof r?.id=="string")return r.id===e;let o=t.args.id;return o===e||o===void 0},rg=t=>{let e=xe(t)?t.addedItemIds:void 0;if(!xe(e))return;let r=new Map;for(let[o,i]of Object.entries(e)){if(!Array.isArray(i))continue;let s=i.filter(n=>typeof n=="string");s.length>0&&r.set(o,s)}if(r.size!==0)return o=>r.get(o)?.shift()},Ml=new WeakMap;function og(t,e,r){let o=Ml.get(t);o||(o=new Map,Ml.set(t,o));let i=o.get(r);i||(i=new Map,o.set(r,i));let s=i.get(e);if(s)return s;let n=Yf(r),a=[],c=()=>a[a.length-1];for(let l of t){if(l.role==="user"){let u=Jf(l)?.find(m=>m.id===e);if(!u)continue;if(u.partial){let m=c();m&&a.push({state:un(m.state,u.state),origin:"user-edit"})}else a.push({state:u.state,origin:"user-edit"});continue}if(l.role==="assistant")for(let u of l.content??[]){let m=eg(u);if(m){if(m.toolCallId===e&&m.toolName===r)m.args&&typeof m.args=="object"&&a.push({state:m.args,origin:"create",toolCallId:e});else if(m.toolName===n&&tg(m,e)){let d=c();if(d){let{id:p,...h}=m.args,f=rg(m.result);a.push({state:f?un(d.state,h,{idFactory:f}):un(d.state,h),origin:"update",toolCallId:m.toolCallId})}}}}}return i.set(e,a),a}function ig(t,e,r){let o=og(t,e,r),i=o[o.length-1];return i?{state:i.state}:void 0}function Dl(t,e){if(!t)return;let{interactables:r,...o}=t,i={...o};if(Array.isArray(r)){let s=[];for(let n of r){let a=ig(e,n.id,n.name);if(!a){s.push({id:n.id,name:n.name,state:n.state});continue}if(Kr(n.state,a.state))continue;let c=Zf(a.state,n.state);s.push(c?{id:n.id,name:n.name,state:c,partial:!0}:{id:n.id,name:n.name,state:n.state})}s.length&&(i.interactables=s)}return Object.keys(i).length?i:void 0}var sg=ne(null);var Ol=()=>pe(sg);var yt=Symbol("innerMessage"),dn=Symbol("innerMessages"),ng=[],mn=(t,e)=>{yt in t||(t[yt]=e)},Bl=t=>{let e="messages"in t?t.messages:t,r=e[dn]||e[yt];return r?Array.isArray(r)?r:(e[dn]=[r],e[dn]):ng},Nl="__external_store_fallback_";var He=Si("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7);function Ll(t){let e=t.match(/^data:([^;,]+)(?:;[^;,]+)*;base64,(.*)$/i);return e?{mimeType:e[1].toLowerCase(),data:e[2]}:null}var pn=(t,e)=>{if(t.startsWith("data-"))return{type:"data",name:t.substring(5),data:e}},vr=(t,e,r)=>{let{role:o,id:i,createdAt:s,attachments:n,status:a,metadata:c}=t,l={id:i??e,createdAt:s??new Date},u=typeof t.content=="string"?[{type:"text",text:t.content}]:t.content,m=({image:d,...p})=>typeof d!="string"?null:Ll(d)?.mimeType.startsWith("image/")?{...p,image:d}:/^(https:\/\/|blob:)/i.test(d)?{...p,image:d}:(console.warn("Invalid image data format detected"),null);if(o!=="user"&&n?.length)throw new Error("attachments are only supported for user messages");if(o!=="assistant"&&a)throw new Error("status is only supported for assistant messages");if(o!=="assistant"&&c?.steps)throw new Error("metadata.steps is only supported for assistant messages");switch(o){case"assistant":return{...l,role:o,content:u.map(d=>{let p=d.type;switch(p){case"text":return d.text?.trim()?d:null;case"reasoning":return!d.text?.trim()&&!d.unstable_summary?.trim()?null:d;case"file":case"source":return d;case"image":return m(d);case"data":return d;case"generative-ui":return d;case"tool-call":{let{parentId:h,messages:f,...b}=d,y={...b,toolCallId:d.toolCallId||`tool-${He()}`,...h!==void 0&&{parentId:h},...f!==void 0&&{messages:f}};return d.args?{...y,args:d.args,argsText:d.argsText??JSON.stringify(d.args)}:{...y,args:fr(d.argsText??"")??{},argsText:d.argsText??""}}default:{let h=pn(p,d.data);if(h)return h;throw new Error(`Unsupported assistant message part type: ${p}`)}}}).filter(d=>!!d),status:a??r,metadata:{unstable_state:c?.unstable_state??null,unstable_annotations:c?.unstable_annotations??[],unstable_data:c?.unstable_data??[],custom:c?.custom??{},steps:c?.steps??[],...c?.timing&&{timing:c.timing},...c?.submittedFeedback&&{submittedFeedback:c.submittedFeedback},...c?.isOptimistic&&{isOptimistic:!0},...c?.modality&&{modality:c.modality}}};case"user":return{...l,role:o,content:u.map(d=>{let p=d.type;switch(p){case"text":case"image":case"audio":case"file":case"data":return d;default:{let h=pn(p,d.data);if(h)return h;throw new Error(`Unsupported user message part type: ${p}`)}}}),attachments:(n??[]).map(d=>({...d,content:d.content.map(p=>pn(p.type,p.data)??p)})),metadata:{custom:c?.custom??{},...c?.isOptimistic&&{isOptimistic:!0},...c?.modality&&{modality:c.modality}}};case"system":if(u.length!==1||u[0].type!=="text")throw new Error("System messages must have exactly one text message part.");return{...l,role:o,content:u,metadata:{custom:c?.custom??{}}};default:throw new Error(`Unknown message role: ${o}`)}};var Vl=t=>t.type==="tool-call"&&t.result===void 0,ag=t=>{if(t.type!=="tool-call"||t.result!==void 0)return!1;let e=t.messages?.at(-1);return e?.role==="assistant"&&e.status.type==="running"},Fl=t=>t.type!=="tool-call"||t.result!==void 0?!1:t.interrupt!=null||t.approval!=null&&t.approval.approved===void 0&&t.approval.resolution===void 0,Qt=Symbol("autoStatus"),$l=Object.freeze(Object.assign({type:"running"},{[Qt]:!0})),cg=Object.freeze(Object.assign({type:"complete",reason:"unknown"},{[Qt]:!0})),lg=Object.freeze(Object.assign({type:"incomplete",reason:"cancelled"},{[Qt]:!0})),ug=Object.freeze(Object.assign({type:"requires-action",reason:"tool-calls"},{[Qt]:!0})),dg=Object.freeze(Object.assign({type:"requires-action",reason:"interrupt"},{[Qt]:!0})),Ul=t=>t[Qt]===!0,jl=(t,e,r,o,i,s,n)=>t&&i?Object.assign({type:"incomplete",reason:"error",error:i},{[Qt]:!0}):t&&e?$l:r?dg:n&&!s?$l:o?ug:s?lg:cg,hn=t=>jl(!1,!1,typeof t!="string"&&t.some(Fl),typeof t!="string"&&t.some(Vl)),fn=(t,e,r)=>jl(e,r,typeof t!="string"&&t.some(Fl),typeof t!="string"&&t.some(Vl),void 0,void 0,typeof t!="string"&&t.some(ag));var gn=class{constructor(){g(this,"cache",new WeakMap)}convertMessages(t,e){return t.map((r,o)=>{let i=e(this.cache.get(r),r,o);return this.cache.set(r,i),i})}};var vn=(t,e)=>{if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0};var bn=require("react/jsx-runtime"),wn=t=>{let e=v(6),{index:r,children:o}=t,i=V(),s;e[0]!==r?(s=ue({attachment:de({source:"message",query:{type:"index",index:r},get:c=>c.message.attachment({index:r})})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,bn.jsx)(fe,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a},xn=t=>{let e=v(6),{index:r,children:o}=t,i=V(),s;e[0]!==r?(s=ue({attachment:de({source:"composer",query:{type:"index",index:r},get:c=>c.composer.attachment({index:r})})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,bn.jsx)(fe,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var zl=require("react/jsx-runtime"),yn=t=>{let e=v(6),{index:r,children:o}=t,i=V(),s;e[0]!==r?(s=ue({message:de({source:"thread",query:{type:"index",index:r},get:c=>c.thread.message({index:r})}),composer:de({source:"message",query:{},get:c=>c.thread.message({index:r}).composer()})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,zl.jsx)(fe,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var Hl=require("react/jsx-runtime"),Wt=t=>{let e=v(6),{index:r,children:o}=t,i=V(),s;e[0]!==r?(s=ue({part:de({source:"message",query:{type:"index",index:r},get:c=>c.message.part({index:r})})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,Hl.jsx)(fe,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var ql=require("react/jsx-runtime"),mg=t=>{let e=v(7),{text:r,isRunning:o}=t,i;e[0]!==o?(i=o?{type:"running"}:{type:"complete"},e[0]=o,e[1]=i):i=e[1];let s;e[2]!==i||e[3]!==r?(s={type:"text",text:r,status:i},e[2]=i,e[3]=r,e[4]=s):s=e[4];let n=s,a;return e[5]!==n?(a={getState:()=>n,addToolResult:hg,resumeToolCall:fg,respondToToolApproval:gg},e[5]=n,e[6]=a):a=e[6],a},pg=U(mg),Jt=t=>{let e=v(7),{text:r,isRunning:o,children:i}=t,s=o===void 0?!1:o,n=V(),a;e[0]!==s||e[1]!==r?(a=ue({part:pg({text:r,isRunning:s})}),e[0]=s,e[1]=r,e[2]=a):a=e[2];let c=a,l;return e[3]!==n||e[4]!==i||e[5]!==c?(l=(0,ql.jsx)(fe,{extends:n,config:c,children:i}),e[3]=n,e[4]=i,e[5]=c,e[6]=l):l=e[6],l};function hg(){throw new Error("Not supported")}function fg(){throw new Error("Not supported")}function gg(){throw new Error("Not supported")}var Gl=t=>{for(let e of t)if(e?.status.type==="running")return fi;return t.at(-1)?.status??ot},Kl=(t,e)=>{let r={running:0,complete:0,incomplete:0,requiresAction:0},o=ot,i=!1;for(let s of e)switch(o=t[s]?.status??ot,o.type){case"running":r.running++,i=!0;break;case"complete":r.complete++;break;case"incomplete":r.incomplete++;break;case"requires-action":r.requiresAction++}return{status:i?fi:o,counts:r}};var vg=t=>{let e=v(11),{parts:r,getMessagePart:o}=t,[i,s]=j(!0),n;e[0]!==r?(n=Gl(r),e[0]=r,e[1]=n):n=e[1];let a=n,c;e[2]!==i||e[3]!==r||e[4]!==a?(c={parts:r,collapsed:i,status:a},e[2]=i,e[3]=r,e[4]=a,e[5]=c):c=e[5];let l=c,u;e[6]!==l?(u=()=>l,e[6]=l,e[7]=u):u=e[7];let m;return e[8]!==o||e[9]!==u?(m={getState:u,setCollapsed:s,part:o},e[8]=o,e[9]=u,e[10]=m):m=e[10],m},Ql=U(vg);var Wl=require("react/jsx-runtime"),Jl=t=>{let e=v(4),{startIndex:r,endIndex:o,children:i}=t,s=P(bg).slice(r,o+1),n=V(),a=ue({chainOfThought:Ql({parts:s,getMessagePart:l=>{let{index:u}=l;if(u<0||u>=s.length)throw new Error(`ChainOfThought part index ${u} is out of bounds (0..${s.length-1})`);return n.message.part({index:r+u})}})}),c;return e[0]!==i||e[1]!==a||e[2]!==n?(c=(0,Wl.jsx)(fe,{extends:n,config:a,children:i}),e[0]=i,e[1]=a,e[2]=n,e[3]=c):c=e[3],c};function bg(t){return t.message.parts}var Yl=require("react/jsx-runtime"),_n=t=>{let e=v(6),{index:r,children:o}=t,i=V(),s;e[0]!==r?(s=ue({suggestion:de({source:"suggestions",query:{index:r},get:c=>c.suggestions.suggestion({index:r})})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,Yl.jsx)(fe,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var Xl=require("react/jsx-runtime"),Zl=t=>{let e=v(6),{index:r,children:o}=t,i=V(),s;e[0]!==r?(s=ue({queueItem:de({source:"composer",query:{type:"index",index:r},get:c=>c.composer.queueItem({index:r})})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,Xl.jsx)(fe,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var ru=Symbol.for("assistant-ui.message-not-sent"),eu,tu,CR=class extends(tu=Error,eu=ru,tu){constructor(e="The message was not sent."){super(e);g(this,eu,!0);this.name="MessageNotSentError"}},Ri=t=>typeof t=="object"&&t!==null&&ru in t;var ou=class{constructor(t){g(this,"_core");this._core=t,this.__internal_bindMethods()}get path(){return this._core.path}__internal_bindMethods(){this.getState=this.getState.bind(this),this.remove=this.remove.bind(this),this.subscribe=this.subscribe.bind(this)}getState(){return this._core.getState()}subscribe(t){return this._core.subscribe(t)}},iu=class extends ou{constructor(e,r){super(e);g(this,"_composerApi");this._composerApi=r}remove(){let e=this._composerApi.getState();if(!e)throw new Error("Composer is not available");return e.removeAttachment(this.getState().id)}},su=class extends iu{get source(){return"thread-composer"}},nu=class extends iu{get source(){return"edit-composer"}},au=class extends ou{get source(){return"message"}remove(){throw new Error("Message attachments cannot be removed")}};var Ai=Object.freeze([]),cu=Object.freeze({}),wg=t=>Object.freeze({type:"thread",isEditing:t?.isEditing??!1,canCancel:t?.canCancel??!1,canSend:t?.canSend??!1,isEmpty:t?.isEmpty??!0,attachments:t?.attachments??Ai,text:t?.text??"",role:t?.role??"user",runConfig:t?.runConfig??cu,attachmentAccept:t?.attachmentAccept??"",dictation:t?.dictation,quote:t?.quote,queue:t?.queue??Ai,value:t?.text??""}),xg=t=>Object.freeze({type:"edit",isEditing:t?.isEditing??!1,canCancel:t?.canCancel??!1,canSend:t?.canSend??!1,isEmpty:t?.isEmpty??!0,text:t?.text??"",role:t?.role??"user",attachments:t?.attachments??Ai,runConfig:t?.runConfig??cu,attachmentAccept:t?.attachmentAccept??"",dictation:t?.dictation,quote:t?.quote,queue:t?.queue??Ai,parentId:t?.parentId??null,sourceId:t?.sourceId??null,value:t?.text??""}),lu=class{constructor(t){g(this,"_core");g(this,"_eventSubscriptionSubjects",new Map);this._core=t}get path(){return this._core.path}__internal_bindMethods(){this.setText=this.setText.bind(this),this.setRunConfig=this.setRunConfig.bind(this),this.getState=this.getState.bind(this),this.subscribe=this.subscribe.bind(this),this.addAttachment=this.addAttachment.bind(this),this.reset=this.reset.bind(this),this.clearAttachments=this.clearAttachments.bind(this),this.send=this.send.bind(this),this.cancel=this.cancel.bind(this),this.steerQueueItem=this.steerQueueItem.bind(this),this.moveQueueItem=this.moveQueueItem.bind(this),this.removeQueueItem=this.removeQueueItem.bind(this),this.setRole=this.setRole.bind(this),this.getAttachmentByIndex=this.getAttachmentByIndex.bind(this),this.startDictation=this.startDictation.bind(this),this.stopDictation=this.stopDictation.bind(this),this.setQuote=this.setQuote.bind(this),this.unstable_on=this.unstable_on.bind(this)}setText(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.setText(t)}setRunConfig(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.setRunConfig(t)}addAttachment(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");return e.addAttachment(t)}reset(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");return t.reset()}clearAttachments(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");return t.clearAttachments()}send(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.send(t)}cancel(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");t.cancel()}steerQueueItem(t){this.moveQueueItem(t,{lane:"steer",insertAfter:null})}moveQueueItem(t,e){let r=this._core.getState();if(!r)throw new Error("Composer is not available");r.moveQueueItem(t,e)}removeQueueItem(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.removeQueueItem(t)}setRole(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.setRole(t)}startDictation(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");t.startDictation()}stopDictation(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");t.stopDictation()}setQuote(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.setQuote(t)}subscribe(t){return this._core.subscribe(t)}unstable_on(t,e){let r=this._eventSubscriptionSubjects.get(t);return r||(r=new ai({event:t,binding:this._core}),this._eventSubscriptionSubjects.set(t,r)),r.subscribe(e)}},uu=class extends lu{constructor(e){let r=new Hr({path:e.path,getState:()=>wg(e.getState()),subscribe:o=>e.subscribe(o)});super({path:e.path,getState:()=>e.getState(),subscribe:o=>r.subscribe(o)});g(this,"_getState");this._getState=r.getState.bind(r),this.__internal_bindMethods()}get path(){return this._core.path}get type(){return"thread"}getState(){return this._getState()}getAttachmentByIndex(e){return new su(new Ae({path:{...this.path,attachmentSource:"thread-composer",attachmentSelector:{type:"index",index:e},ref:`${this.path.ref}.attachments[${e}]`},getState:()=>{let r=this.getState().attachments[e];return r?{...r,source:"thread-composer"}:Re},subscribe:r=>this._core.subscribe(r)}),this._core)}},du=class extends lu{constructor(e,r){let o=new Hr({path:e.path,getState:()=>xg(e.getState()),subscribe:i=>e.subscribe(i)});super({path:e.path,getState:()=>e.getState(),subscribe:i=>o.subscribe(i)});g(this,"_getState");g(this,"_beginEdit");this._beginEdit=r,this._getState=o.getState.bind(o),this.__internal_bindMethods()}get path(){return this._core.path}get type(){return"edit"}__internal_bindMethods(){super.__internal_bindMethods(),this.beginEdit=this.beginEdit.bind(this)}getState(){return this._getState()}beginEdit(){this._beginEdit()}getAttachmentByIndex(e){return new nu(new Ae({path:{...this.path,attachmentSource:"edit-composer",attachmentSelector:{type:"index",index:e},ref:`${this.path.ref}.attachments[${e}]`},getState:()=>{let r=this.getState().attachments[e];return r?{...r,source:"edit-composer"}:Re},subscribe:r=>this._core.subscribe(r)}),this._core)}};var Mt=t=>t.content.filter(e=>e.type==="text").map(e=>e.text).join(`

`);var yg="ui://",mu=t=>!!t?.startsWith(yg),pu=t=>t.display==="text"||t.allowFreeform===!0;var hu={"allow-once":!0,"allow-always":!0,"reject-once":!1,"reject-always":!1},fu=(t,e)=>{let r=e.text;if(r!==void 0&&!pu(t))throw new Error(`Tool approval "${t.id}" does not accept a free-form answer; the request must declare display "text" or allowFreeform`);let o,i;if("optionId"in e){let s=t.options?.find(n=>n.id===e.optionId);if(!s)throw new Error(`Tool approval has no option with id "${e.optionId}"`);if("approved"in e)o=e.approved;else{if(!Object.hasOwn(hu,s.kind))throw new Error(`Tool approval option "${s.id}" has a custom kind "${s.kind}"; respond with an explicit approved value instead`);o=hu[s.kind]}i=s.id}else if("approved"in e)o=e.approved;else{if(t.display!=="text"&&t.display!=="select")throw new Error(`Tool approval "${t.id}" is a decision, not a question; respond with an explicit approved value, optionally alongside the answer`);o=!0}return{approvalId:t.id,approved:o,...i!==void 0&&{optionId:i},...r!==void 0&&{text:r},...e.reason!=null&&{reason:e.reason}}};var Sn=class{constructor(t,e,r){g(this,"contentBinding");g(this,"messageApi");g(this,"threadApi");this.contentBinding=t,this.messageApi=e,this.threadApi=r,this.__internal_bindMethods()}get path(){return this.contentBinding.path}__internal_bindMethods(){this.addToolResult=this.addToolResult.bind(this),this.resumeToolCall=this.resumeToolCall.bind(this),this.respondToToolApproval=this.respondToToolApproval.bind(this),this.getState=this.getState.bind(this),this.subscribe=this.subscribe.bind(this)}getState(){return this.contentBinding.getState()}addToolResult(t){let e=this.contentBinding.getState();if(!e)throw new Error("Message part is not available");if(e.type!=="tool-call")throw new Error("Tried to add tool result to non-tool message part");if(!this.messageApi)throw new Error("Message API is not available. This is likely a bug in assistant-ui.");if(!this.threadApi)throw new Error("Thread API is not available");let r=this.messageApi.getState();if(!r)throw new Error("Message is not available");let o=e.toolName,i=e.toolCallId,s=ze.toResponse(t);this.threadApi.getState().addToolResult({messageId:r.id,toolName:o,toolCallId:i,result:s.result,isError:s.isError,...s.artifact!==void 0&&{artifact:s.artifact},...s.modelContent!==void 0&&{modelContent:s.modelContent}})}resumeToolCall(t){let e=this.contentBinding.getState();if(!e)throw new Error("Message part is not available");if(e.type!=="tool-call")throw new Error("Tried to resume tool call on non-tool message part");if(!this.threadApi)throw new Error("Thread API is not available");let r=e.toolCallId;this.threadApi.getState().resumeToolCall({toolCallId:r,payload:t})}respondToToolApproval(t){let e=this.contentBinding.getState();if(!e)throw new Error("Message part is not available");if(e.type!=="tool-call")throw new Error("Tried to respond to tool approval on non-tool message part");if(!e.approval||e.approval.approved!==void 0||e.approval.resolution!==void 0)throw new Error("Tool call has no pending approval");if(!this.threadApi)throw new Error("Thread API is not available");return this.threadApi.getState().respondToToolApproval(fu(e.approval,t))}subscribe(t){return this.contentBinding.subscribe(t)}};var gu=(t,e)=>{let r=t.content[e];if(!r)return Re;let o=gi(t,e,r);return Object.freeze({...r,[yt]:r[yt],status:o})},vu=class{constructor(t,e){g(this,"_core");g(this,"_threadBinding");g(this,"composer");g(this,"_getEditComposerRuntimeCore",()=>this._threadBinding.getState().getEditComposer(this._core.getState().id));this._core=t,this._threadBinding=e,this.composer=new du(new Gt({path:{...this.path,ref:`${this.path.ref}.composer`,composerSource:"edit"},getState:this._getEditComposerRuntimeCore,subscribe:r=>this._threadBinding.subscribe(r)}),()=>this._threadBinding.getState().beginEdit(this._core.getState().id)),this.__internal_bindMethods()}get path(){return this._core.path}__internal_bindMethods(){this.reload=this.reload.bind(this),this.delete=this.delete.bind(this),this.getState=this.getState.bind(this),this.subscribe=this.subscribe.bind(this),this.getMessagePartByIndex=this.getMessagePartByIndex.bind(this),this.getMessagePartByToolCallId=this.getMessagePartByToolCallId.bind(this),this.getAttachmentByIndex=this.getAttachmentByIndex.bind(this),this.unstable_getCopyText=this.unstable_getCopyText.bind(this),this.speak=this.speak.bind(this),this.stopSpeaking=this.stopSpeaking.bind(this),this.submitFeedback=this.submitFeedback.bind(this),this.switchToBranch=this.switchToBranch.bind(this)}getState(){return this._core.getState()}delete(){let t=this._core.getState();return this._threadBinding.getState().deleteMessage(t.id)}reload(t={}){let e=this._getEditComposerRuntimeCore(),r=e??this._threadBinding.getState().composer,o=e??r,{runConfig:i=o.runConfig}=t,s=this._core.getState();if(s.role!=="assistant")throw new Error("Can only reload assistant messages");this._threadBinding.getState().startRun({parentId:s.parentId,sourceId:s.id,runConfig:i})}speak(){let t=this._core.getState();return this._threadBinding.getState().speak(t.id)}stopSpeaking(){let t=this._core.getState();if(this._threadBinding.getState().speech?.messageId===t.id)this._threadBinding.getState().stopSpeaking();else throw new Error("Message is not being spoken")}submitFeedback({type:t,comment:e}){let r=this._core.getState();this._threadBinding.getState().submitFeedback({messageId:r.id,type:t,...e!==void 0?{comment:e}:void 0})}switchToBranch({position:t,branchId:e}){let r=this._core.getState();if(e&&t)throw new Error("May not specify both branchId and position");if(!e&&!t)throw new Error("Must specify either branchId or position");let o=this._threadBinding.getState().getBranches(r.id),i=e;if(t==="previous"?i=o[r.branchNumber-2]:t==="next"&&(i=o[r.branchNumber]),!i)throw new Error("Branch not found");this._threadBinding.getState().switchToBranch(i)}unstable_getCopyText(){return Mt(this.getState())}subscribe(t){return this._core.subscribe(t)}getMessagePartByIndex(t){if(t<0)throw new Error("Message part index must be >= 0");return new Sn(new Ae({path:{...this.path,ref:`${this.path.ref}.content[${t}]`,messagePartSelector:{type:"index",index:t}},getState:()=>gu(this.getState(),t),subscribe:e=>this._core.subscribe(e)}),this._core,this._threadBinding)}getMessagePartByToolCallId(t){return new Sn(new Ae({path:{...this.path,ref:`${this.path.ref}.content[toolCallId=${JSON.stringify(t)}]`,messagePartSelector:{type:"toolCallId",toolCallId:t}},getState:()=>{let e=this._core.getState(),r=e.content.findIndex(o=>o.type==="tool-call"&&o.toolCallId===t);return r===-1?Re:gu(e,r)},subscribe:e=>this._core.subscribe(e)}),this._core,this._threadBinding)}getAttachmentByIndex(t){return new au(new Ae({path:{...this.path,ref:`${this.path.ref}.attachments[${t}]`,attachmentSource:"message",attachmentSelector:{type:"index",index:t}},getState:()=>{let e=this.getState().attachments?.[t];return e?{...e,source:"message"}:Re},subscribe:e=>this._core.subscribe(e)}))}};var _g=t=>({parentId:t.parentId??null,sourceId:t.sourceId??null,runConfig:t.runConfig??{},...t.stream?{stream:t.stream}:{}}),Sg=t=>({parentId:t.parentId??null,sourceId:t.sourceId??null,runConfig:t.runConfig??{}}),Tg=(t,e)=>typeof e=="string"?{createdAt:new Date,parentId:t.at(-1)?.id??null,sourceId:null,runConfig:{},role:"user",content:[{type:"text",text:e}],attachments:[],metadata:{custom:{}}}:{createdAt:e.createdAt??new Date,parentId:e.parentId===void 0?t.at(-1)?.id??null:e.parentId,sourceId:e.sourceId??null,role:e.role??"user",content:e.content,attachments:e.attachments??[],metadata:e.metadata??{custom:{}},runConfig:e.runConfig??{},startRun:e.startRun},Tn=t=>{if(t.isRunning!==void 0)return t.isRunning;let e=t.messages.at(-1);return e?.role==="assistant"&&e.status.type==="running"},Cg=(t,e)=>Object.freeze({threadId:e.id,metadata:e,capabilities:t.capabilities,isDisabled:t.isDisabled,isLoading:t.isLoading,isRunning:Tn(t),messages:t.messages,state:t.state,suggestions:t.suggestions,extras:t.extras,speech:t.speech,voice:t.voice}),bu=class{constructor(t,e){g(this,"_threadBinding");g(this,"_stateBinding");g(this,"composer");g(this,"_eventSubscriptionSubjects",new Map);let r=new Ae({path:t.path,getState:()=>Cg(t.getState(),e.getState()),subscribe:o=>{let i=t.subscribe(o),s=e.subscribe(o);return()=>si([i,s])}});this._stateBinding=r,this._threadBinding={path:t.path,getState:()=>t.getState(),getStateState:()=>r.getState(),outerSubscribe:o=>t.outerSubscribe(o),subscribe:o=>t.subscribe(o)},this.composer=new uu(new Gt({path:{...this.path,ref:`${this.path.ref}.composer`,composerSource:"thread"},getState:()=>this._threadBinding.getState().composer,subscribe:o=>this._threadBinding.subscribe(o)})),this.__internal_bindMethods()}get path(){return this._threadBinding.path}get __internal_threadBinding(){return this._threadBinding}__internal_bindMethods(){this.append=this.append.bind(this),this.deleteMessage=this.deleteMessage.bind(this),this.resumeRun=this.resumeRun.bind(this),this.importExternalState=this.importExternalState.bind(this),this.exportExternalState=this.exportExternalState.bind(this),this.startRun=this.startRun.bind(this),this.cancelRun=this.cancelRun.bind(this),this.unstable_notifySessionReset=this.unstable_notifySessionReset.bind(this),this.stopSpeaking=this.stopSpeaking.bind(this),this.connectVoice=this.connectVoice.bind(this),this.disconnectVoice=this.disconnectVoice.bind(this),this.muteVoice=this.muteVoice.bind(this),this.unmuteVoice=this.unmuteVoice.bind(this),this.getVoiceVolume=this.getVoiceVolume.bind(this),this.subscribeVoiceVolume=this.subscribeVoiceVolume.bind(this),this.export=this.export.bind(this),this.import=this.import.bind(this),this.reset=this.reset.bind(this),this.getMessageByIndex=this.getMessageByIndex.bind(this),this.getMessageById=this.getMessageById.bind(this),this.subscribe=this.subscribe.bind(this),this.unstable_on=this.unstable_on.bind(this),this.getModelContext=this.getModelContext.bind(this),this.getState=this.getState.bind(this)}getState(){return this._threadBinding.getStateState()}append(t){let e=this._threadBinding.getState().append(Tg(this._threadBinding.getState().messages,t));Promise.resolve(e).catch(r=>{if(!Ri(r))throw r})}deleteMessage(t){return this._threadBinding.getState().deleteMessage(t)}subscribe(t){return this._stateBinding.subscribe(t)}getModelContext(){return this._threadBinding.getState().getModelContext()}startRun(t){return this._threadBinding.getState().startRun(Sg(t))}resumeRun(t){return this._threadBinding.getState().resumeRun(_g(t))}exportExternalState(){return this._threadBinding.getState().exportExternalState()}importExternalState(t){this._threadBinding.getState().importExternalState(t)}cancelRun(){this._threadBinding.getState().cancelRun()}unstable_notifySessionReset(){this._threadBinding.getState().unstable_notifySessionReset()}stopSpeaking(){return this._threadBinding.getState().stopSpeaking()}connectVoice(){this._threadBinding.getState().connectVoice()}disconnectVoice(){this._threadBinding.getState().disconnectVoice()}getVoiceVolume(){return this._threadBinding.getState().getVoiceVolume()}subscribeVoiceVolume(t){return this._threadBinding.getState().subscribeVoiceVolume(t)}muteVoice(){this._threadBinding.getState().muteVoice()}unmuteVoice(){this._threadBinding.getState().unmuteVoice()}export(){return this._threadBinding.getState().export()}import(t){this._threadBinding.getState().import(t)}reset(t){this._threadBinding.getState().reset(t)}getMessageByIndex(t){if(t<0)throw new Error("Message index must be >= 0");return this._getMessageRuntime({...this.path,ref:`${this.path.ref}.messages[${t}]`,messageSelector:{type:"index",index:t}},()=>{let e=this._threadBinding.getState().messages,r=e[t];if(r)return{message:r,parentId:e[t-1]?.id??null,index:t}})}getMessageById(t){return this._getMessageRuntime({...this.path,ref:`${this.path.ref}.messages[messageId=${JSON.stringify(t)}]`,messageSelector:{type:"messageId",messageId:t}},()=>this._threadBinding.getState().getMessageById(t))}_getMessageRuntime(t,e){return new vu(new Ae({path:t,getState:()=>{let{message:r,parentId:o,index:i}=e()??{},{messages:s,speech:n}=this._threadBinding.getState();if(!r||o===void 0||i===void 0)return Re;let a=this._threadBinding.getState().getBranches(r.id);return{...r,[yt]:r[yt],index:i,isLast:s.at(-1)?.id===r.id,parentId:o,branchNumber:a.indexOf(r.id)+1,branchCount:a.length,speech:n?.messageId===r.id?n:void 0}},subscribe:r=>this._threadBinding.subscribe(r)}),this._threadBinding)}unstable_on(t,e){let r=this._eventSubscriptionSubjects.get(t);return r||(r=new ai({event:t,binding:this._threadBinding}),this._eventSubscriptionSubjects.set(t,r)),r.subscribe(e)}};var Jr=class{constructor(t,e){g(this,"_core");g(this,"_threadListBinding");this._core=t,this._threadListBinding=e,this.__internal_bindMethods()}get path(){return this._core.path}__internal_bindMethods(){this.switchTo=this.switchTo.bind(this),this.rename=this.rename.bind(this),this.updateCustom=this.updateCustom.bind(this),this.archive=this.archive.bind(this),this.unarchive=this.unarchive.bind(this),this.delete=this.delete.bind(this),this.initialize=this.initialize.bind(this),this.generateTitle=this.generateTitle.bind(this),this.subscribe=this.subscribe.bind(this),this.unstable_on=this.unstable_on.bind(this),this.getState=this.getState.bind(this),this.detach=this.detach.bind(this)}getState(){return this._core.getState()}switchTo(t){let e=this._core.getState();return this._threadListBinding.switchToThread(e.id,t)}rename(t){let e=this._core.getState();return this._threadListBinding.rename(e.id,t)}updateCustom(t){let e=this._core.getState();if(!this._threadListBinding.updateCustom)throw new Error("Thread list runtime does not support updating custom metadata");return this._threadListBinding.updateCustom(e.id,t)}archive(){let t=this._core.getState();return this._threadListBinding.archive(t.id)}unarchive(){let t=this._core.getState();return this._threadListBinding.unarchive(t.id)}delete(){let t=this._core.getState();return this._threadListBinding.delete(t.id)}initialize(){let t=this._core.getState();return this._threadListBinding.initialize(t.id)}generateTitle(t){let e=this._core.getState();return this._threadListBinding.generateTitle(e.id,t)}unstable_on(t,e){let r=this._core.getState().isMain,o=this._core.getState().id;return this.subscribe(()=>{let i=this._core.getState(),s=i.isMain,n=i.id;r===s&&o===n||(r=s,o=n,!(t==="switchedTo"&&!s)&&(t==="switchedAway"&&s||we([e],{},`Thread list item "${t}"`)))})}subscribe(t){return this._core.subscribe(t)}detach(){let t=this._core.getState();this._threadListBinding.detach(t.id)}__internal_getRuntime(){return this}};var Cn=Promise.resolve(),Ig=()=>{},Eg=t=>({mainThreadId:t.mainThreadId,newThreadId:t.newThreadId,threadIds:t.threadIds,archivedThreadIds:t.archivedThreadIds,isLoading:t.isLoading,loadError:t.loadError,isLoadingMore:t.isLoadingMore??!1,hasMore:t.hasMore??!1,threadItems:t.threadItems}),Pi=(t,e)=>{if(e===void 0)return Re;let r=t.getItemById(e);return r?{id:r.id,remoteId:r.remoteId,externalId:r.externalId,title:r.title,status:r.status,lastMessageAt:r.lastMessageAt,custom:r.custom,isMain:r.id===t.mainThreadId,isRunning:t.unstable_isThreadRunning?.(r.id)??!1}:Re},wu=class{constructor(t,e=bu){g(this,"_getState");g(this,"_stateBinding");g(this,"_core");g(this,"_runtimeFactory");g(this,"_mainThreadListItemRuntime");g(this,"main");this._core=t,this._runtimeFactory=e;let r=new Hr({path:{},getState:()=>Eg(t),subscribe:o=>t.subscribe(o)});this._getState=r.getState.bind(r),this._stateBinding=r,this._mainThreadListItemRuntime=new Jr(new Ae({path:{ref:"threadItems[main]",threadSelector:{type:"main"}},getState:()=>Pi(this._core,this._core.mainThreadId),subscribe:o=>this._core.subscribe(o)}),this._core),this.main=new e(new Gt({path:{ref:"threads.main",threadSelector:{type:"main"}},getState:()=>t.getMainThreadRuntimeCore(),subscribe:o=>t.subscribe(o)}),this._mainThreadListItemRuntime),this.__internal_bindMethods()}__internal_bindMethods(){this.switchToThread=this.switchToThread.bind(this),this.switchToNewThread=this.switchToNewThread.bind(this),this.unstable_subscribeThreadEvents=this.unstable_subscribeThreadEvents.bind(this),this.getLoadThreadsPromise=this.getLoadThreadsPromise.bind(this),this.reload=this.reload.bind(this),this.reloadMainThread=this.reloadMainThread.bind(this),this.loadMore=this.loadMore.bind(this),this.getState=this.getState.bind(this),this.subscribe=this.subscribe.bind(this),this.getById=this.getById.bind(this),this.getItemById=this.getItemById.bind(this),this.getItemByIndex=this.getItemByIndex.bind(this),this.getArchivedItemByIndex=this.getArchivedItemByIndex.bind(this)}switchToThread(t,e){return this._core.switchToThread(t,e)}switchToNewThread(){return this._core.switchToNewThread()}unstable_subscribeThreadEvents(t){return this._core.unstable_subscribeThreadEvents?.(t)??Ig}getLoadThreadsPromise(){return this._core.getLoadThreadsPromise()}reload(){return this._core.reload?.()??Cn}reloadMainThread(){return this._core.reloadMainThread?.()??Cn}loadMore(){return this._core.loadMore?.()??Cn}getState(){return this._getState()}subscribe(t){return this._stateBinding.subscribe(t)}get mainItem(){return this._mainThreadListItemRuntime}_createItemStateBinding(t){return new Ae({path:{ref:`threadItems[threadId=${t}]`,threadSelector:{type:"threadId",threadId:t}},getState:()=>Pi(this._core,t),subscribe:e=>this._core.subscribe(e)})}getById(t){return new this._runtimeFactory(new Gt({path:{ref:`threads[threadId=${JSON.stringify(t)}]`,threadSelector:{type:"threadId",threadId:t}},getState:()=>this._core.getThreadRuntimeCore(t),subscribe:e=>this._core.subscribe(e)}),this._createItemStateBinding(t))}getItemByIndex(t){return new Jr(new Ae({path:{ref:`threadItems[${t}]`,threadSelector:{type:"index",index:t}},getState:()=>Pi(this._core,this._core.threadIds[t]),subscribe:e=>this._core.subscribe(e)}),this._core)}getArchivedItemByIndex(t){return new Jr(new Ae({path:{ref:`archivedThreadItems[${t}]`,threadSelector:{type:"archiveIndex",index:t}},getState:()=>Pi(this._core,this._core.archivedThreadIds[t]),subscribe:e=>this._core.subscribe(e)}),this._core)}getItemById(t){return new Jr(this._createItemStateBinding(t),this._core)}};var xu=class{constructor(t){g(this,"threads");g(this,"_thread");g(this,"_core");this._core=t,this.threads=new wu(t.threads),this._thread=this.threads.main,this.__internal_bindMethods()}__internal_bindMethods(){this.registerModelContextProvider=this.registerModelContextProvider.bind(this)}get thread(){return this._thread}registerModelContextProvider(t){return this._core.registerModelContextProvider(t)}};var yu=new WeakMap,Yr=t=>yu.get(t)??0,ki=(t,e)=>Yr(t)===e,Mi=t=>{yu.set(t,Yr(t)+1)};var _u=class{constructor(){g(this,"_contextProvider",new ci)}registerModelContextProvider(t){return this._contextProvider.registerModelContextProvider(t)}getModelContextProvider(){return this._contextProvider}};var Yt=Object.freeze([]),br="DEFAULT_THREAD_ID",Rg=Object.freeze([br]),Ag=Object.freeze({id:br,remoteId:void 0,externalId:void 0,status:"regular"}),Pg=Promise.resolve(),Su=Object.freeze(Se({[br]:Ag})),Tu=class extends dr{constructor(e={},r){super();g(this,"_mainThreadId",br);g(this,"_threads",Rg);g(this,"_archivedThreads",Yt);g(this,"_threadData",Su);g(this,"adapter",{});g(this,"_mainThread");g(this,"threadFactory");this.threadFactory=r,this.__internal_setAdapter(e,!0)}get isLoading(){return this.adapter.isLoading??!1}get newThreadId(){}get threadIds(){return this._threads}get archivedThreadIds(){return this._archivedThreads}get threadItems(){return this._threadData}getLoadThreadsPromise(){return Pg}get mainThreadId(){return this._mainThreadId}getMainThreadRuntimeCore(){return this._mainThread}getThreadRuntimeCore(){throw new Error("Method not implemented.")}getItemById(e){return Object.hasOwn(this._threadData,e)?this._threadData[e]:void 0}__internal_setAdapter(e,r=!1){let o=this.adapter;this.adapter=e;let i=e.threadId??br,s=e.threads??Yt,n=e.archivedThreads??Yt,a=o.threadId??br,c=o.threads??Yt,l=o.archivedThreads??Yt;!r&&(o.isLoading??!1)===(e.isLoading??!1)&&a===i&&c===s&&l===n||((c!==s||l!==n||a!==i)&&(this._threadData=Se(Su,Object.fromEntries(e.threads?.map(u=>[u.id,{...u,remoteId:u.remoteId,externalId:u.externalId,status:"regular"}])??[]),Object.fromEntries(e.archivedThreads?.map(u=>[u.id,{...u,remoteId:u.remoteId,externalId:u.externalId,status:"archived"}])??[]))),c!==s&&(this._threads=this.adapter.threads?.map(u=>u.id)??Yt),l!==n&&(this._archivedThreads=this.adapter.archivedThreads?.map(u=>u.id)??Yt),(r||a!==i)&&(r||Mi(this._mainThread),this._mainThreadId=i,this._mainThread=this.threadFactory()),Object.hasOwn(this._threadData,this._mainThreadId)||(this._threadData=Se(this._threadData,{[this._mainThreadId]:{id:this._mainThreadId,remoteId:void 0,externalId:void 0,status:"regular"}})),this._notifySubscribers())}async reloadMainThread(){this._mainThread.unstable_refetchThread&&await this._mainThread.unstable_refetchThread()}async switchToThread(e,r){if(this._mainThreadId===e)return;let o=this.adapter.onSwitchToThread;if(!o)throw new Error("External store adapter does not support switching to thread");await o(e)}async switchToNewThread(){let e=this.adapter.onSwitchToNewThread;if(!e)throw new Error("External store adapter does not support switching to new thread");await e()}async rename(e,r){let o=this.adapter.onRename;if(!o)throw new Error("External store adapter does not support renaming");await o(e,r)}async updateCustom(e,r){let o=this.adapter.onUpdateCustom;if(!o)throw new Error("External store adapter does not support updating custom metadata");await o(e,r)}async detach(){}async archive(e){let r=this.adapter.onArchive;if(!r)throw new Error("External store adapter does not support archiving");await r(e)}async unarchive(e){let r=this.adapter.onUnarchive;if(!r)throw new Error("External store adapter does not support unarchiving");await r(e)}async delete(e){let r=this.adapter.onDelete;if(!r)throw new Error("External store adapter does not support deleting");await r(e)}initialize(e){return Promise.resolve({remoteId:e,externalId:void 0})}generateTitle(){throw new Error("Method not implemented.")}};var Oi={fromArray:t=>{let e=t.map(r=>vr(r,He(),hn(r.content)));return{messages:e.map((r,o)=>({parentId:o>0?e[o-1].id:null,message:r}))}},fromBranchableArray:(t,e)=>({...e?.headId!==void 0?{headId:e.headId}:void 0,messages:t.map(({message:r,parentId:o})=>{if(!r.id)throw new Error("ExportedMessageRepository.fromBranchableArray: Each message must have an 'id' field set.");return{parentId:o,message:vr(r,r.id,hn(r.content))}})})},Di=t=>{let e=t;for(;e.next;)e=e.next;return"current"in e?e:null},kg=class{constructor(t){g(this,"_value",null);g(this,"func");this.func=t}get value(){return this._value===null&&(this._value=this.func()),this._value}dirty(){this._value=null}},Bi=class{constructor(){g(this,"messages",new Map);g(this,"head",null);g(this,"root",{children:[],next:null});g(this,"_messages",new kg(()=>{let t=new Array((this.head?.level??-1)+1);for(let e=this.head;e;e=e.prev)t[e.level]=e.current;return t}))}updateLevels(t,e){let r=[{message:t,level:e}];for(;r.length>0;){let o=r.pop();o.message.level=o.level;for(let i of o.message.children){let s=this.messages.get(i);s&&r.push({message:s,level:o.level+1})}}}selectPathTo(t){for(let e=t;e;e=e.prev)(e.prev??this.root).next=e}performOp(t,e,r){let o=e.prev??this.root,i=t??this.root;if(!(r==="relink"&&o===i)){if(r==="relink"){for(let s=t;s;s=s.prev)if(s.current.id===e.current.id)throw new Error("MessageRepository(performOp/relink): A message with the same id already exists in the parent tree. This error occurs if the same message id is found multiple times. This is likely an internal bug in assistant-ui.")}if(r!=="link"&&(o.children=o.children.filter(s=>s!==e.current.id),o.next===e)){let s=o.children.at(-1),n=s?this.messages.get(s):null;if(n===void 0)throw new Error("MessageRepository(performOp/cut): Fallback sibling message not found. This is likely an internal bug in assistant-ui.");o.next=n}if(r!=="cut"){i.children=[...i.children,e.current.id],e.prev=t,Di(e)===this.head?this.selectPathTo(e):i.next===null&&(i.next=e,this.head===i&&(this.head=Di(e)));let s=t?t.level+1:0;this.updateLevels(e,s)}}}get headId(){return this.head?.current.id??null}get canonicalHeadId(){let t=this.head;for(;t?.current.metadata?.isOptimistic;)t=t.prev;return t?.current.id??null}getMessages(t){if(t===void 0||t===this.head?.current.id)return this._messages.value;let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(getMessages): Head message not found. This is likely an internal bug in assistant-ui.");let r=new Array(e.level+1);for(let o=e;o;o=o.prev)r[o.level]=o.current;return r}addOrUpdateMessage(t,e){let r=this.messages.get(e.id),o=t?this.messages.get(t):null;if(o===void 0)throw new Error("MessageRepository(addOrUpdateMessage): Parent message not found. This is likely an internal bug in assistant-ui.");if(r){r.current=e,this.performOp(o,r,"relink"),this._messages.dirty();return}let i={prev:o,current:e,next:null,children:[],level:o?o.level+1:0};this.messages.set(e.id,i),this.performOp(o,i,"link"),this.head===o&&(this.head=i),this._messages.dirty()}getMessage(t){let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(updateMessage): Message not found. This is likely an internal bug in assistant-ui.");return{parentId:e.prev?.current.id??null,message:e.current,index:e.level}}deleteMessage(t,e){let r=this.messages.get(t);if(!r)throw new Error("MessageRepository(deleteMessage): Message not found. This is likely an internal bug in assistant-ui.");let o=e===void 0?r.prev:e===null?null:this.messages.get(e);if(o===void 0)throw new Error("MessageRepository(deleteMessage): Replacement not found. This is likely an internal bug in assistant-ui.");for(let i of r.children){let s=this.messages.get(i);if(!s)throw new Error("MessageRepository(deleteMessage): Child message not found. This is likely an internal bug in assistant-ui.");this.performOp(o,s,"relink")}this.performOp(null,r,"cut"),this.messages.delete(t),this.head===r&&(this.head=Di(o??this.root)),this._messages.dirty()}getBranches(t){let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(getBranches): Message not found. This is likely an internal bug in assistant-ui.");let{children:r}=e.prev??this.root;return r}evictOffBranchOptimisticMessages(t,e){if(!t)return;let r=new Set;for(let i=e;i;i=i.prev)r.add(i.current.id);let o=[];for(let i=t;i&&!r.has(i.current.id);i=i.prev)i.current.metadata?.isOptimistic&&o.push(i.current.id);for(let i of o)this.messages.has(i)&&this.deleteMessage(i)}switchToBranch(t){let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(switchToBranch): Branch not found. This is likely an internal bug in assistant-ui.");let r=this.head;this.selectPathTo(e),this.head=Di(e),this.evictOffBranchOptimisticMessages(r,this.head),this._messages.dirty()}resetHead(t){if(t===null){this.clear();return}let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(resetHead): Branch not found. This is likely an internal bug in assistant-ui.");let r=this.head;if(e.children.length>0){let o=[...e.children];for(;o.length>0;){let i=o.pop(),s=this.messages.get(i);if(s){for(let n of s.children)o.push(n);this.messages.delete(i)}}e.children=[],e.next=null}this.head=e,this.selectPathTo(e),this.evictOffBranchOptimisticMessages(r,this.head),this._messages.dirty()}clear(){this.messages.clear(),this.head=null,this.root={children:[],next:null},this._messages.dirty()}export(){let t=[],e=[...this.root.children].reverse();for(;e.length>0;){let r=this.messages.get(e.pop());if(!r)continue;for(let i=r.children.length-1;i>=0;i--)e.push(r.children[i]);if(r.current.metadata?.isOptimistic)continue;let o=r.prev;for(;o&&o.current.metadata?.isOptimistic;)o=o.prev;t.push({message:r.current,parentId:o?.current.id??null})}return{headId:this.canonicalHeadId,messages:t}}import({headId:t,messages:e}){for(let{message:r,parentId:o}of e)this.addOrUpdateMessage(o,r);this.resetHead(t??e.at(-1)?.message.id??null)}};var Dt=Object.freeze([]);function*Xr(t){for(let e of t)if(!(e?.role!=="assistant"||!Array.isArray(e.content)))for(let r of e.content)!r||r.type!=="tool-call"||(yield{part:r,messageId:e.id},r.messages?.length&&(yield*Xr(r.messages)))}function In(t,e){if(e==="*")return!0;let r=e.split(",").map(s=>s.trim().toLowerCase()),o=t.name.toLowerCase(),i=t.type.split(";",1)[0].trim().toLowerCase();for(let s of r){if(s.startsWith(".")&&o.endsWith(s)||s.includes("/")&&s===i)return!0;if(s.endsWith("/*")){let n=s.split("/")[0];if(i.startsWith(`${n}/`))return!0}}return!1}function Mg(t){let e=He();return t.type==="image"?{id:e,type:"image",name:t.filename??"image",content:[t],status:{type:"complete"}}:t.type==="file"?{id:e,type:"document",name:t.filename??"document",contentType:t.mimeType,content:[t],status:{type:"complete"}}:t.type==="audio"?{id:e,type:"audio",name:`audio.${t.audio.format}`,contentType:`audio/${t.audio.format}`,content:[t],status:{type:"complete"}}:{id:e,type:"data",name:t.name,content:[t],status:{type:"complete"}}}function Cu(t){let e=[];for(let r of t)r.type!=="text"&&e.push(Mg(r));return e}var Iu=t=>"content"in t&&!("lastModified"in t),Zr=t=>t.status.type==="complete";var Eu=class{constructor(){g(this,"operations",new Set)}start(){let t={cancelled:!1,attachmentIds:new Set};return this.operations.add(t),t}accept(t,e){return t.cancelled?!1:(t.attachmentIds.add(e),!0)}finish(t){this.operations.delete(t)}isCancelled(t){return t.cancelled}cancel(t){for(let e of[...this.operations])e.attachmentIds.has(t)&&(e.cancelled=!0,this.operations.delete(e))}cancelAll(){for(let t of this.operations)t.cancelled=!0;this.operations.clear()}},Ru=async(t,e)=>{if(Symbol.asyncIterator in t){for await(let r of t)if(!e(r))break}else e(await t)};var Ni=class extends dr{constructor(){super(...arguments);g(this,"isEditing",!0);g(this,"_attachments",[]);g(this,"_text","");g(this,"_role","user");g(this,"_runConfig",{});g(this,"_quote");g(this,"_isSending",!1);g(this,"_removedDuringSend",new Set);g(this,"_sendGeneration",0);g(this,"_attachmentAddOperations",new Eu);g(this,"_dictation");g(this,"_dictationSession");g(this,"_dictationUnsubscribes",[]);g(this,"_dictationBaseText","");g(this,"_currentInterimText","");g(this,"_dictationSessionIdCounter",0);g(this,"_activeDictationSessionId");g(this,"_isCleaningDictation",!1);g(this,"_eventSubscribers",new Map)}enrichWithComposerMetadata(e,r){return r?{...e,metadata:{...e.metadata,custom:{...e.metadata?.custom,...r}}}:e}get attachmentAccept(){return this.getAttachmentAdapter()?.accept??"*"}get attachments(){return this._attachments}setAttachments(e){this._attachments=e,this._notifySubscribers()}get isEmpty(){return!this.text.trim()&&!this.attachments.length}get text(){return this._text}get role(){return this._role}get runConfig(){return this._runConfig}get quote(){return this._quote}setQuote(e){this._quote!==e&&(this._quote=e,this._notifySubscribers())}setText(e){this._text!==e&&(this._text=e,this._rebaseDictation(e),this._notifySubscribers())}_rebaseDictation(e){if(!this._dictation)return;this._dictationBaseText=e,this._currentInterimText="";let{status:r,inputDisabled:o}=this._dictation;this._dictation=o?{status:r,inputDisabled:o}:{status:r}}setRole(e){this._role!==e&&(this._role=e,this._notifySubscribers())}setRunConfig(e){this._runConfig!==e&&(this._runConfig=e,this._notifySubscribers())}_cancelAttachmentAdd(e){this._attachmentAddOperations.cancel(e)}_cancelAllAttachmentAdds(){this._attachmentAddOperations.cancelAll()}_emptyTextAndAttachments(){this._attachments=[],this._text="",this._rebaseDictation(""),this._notifySubscribers()}async _onClearAttachments(){let e=this.getAttachmentAdapter();if(e){let r=this._attachments.filter(o=>!Zr(o));await Promise.all(r.map(async o=>e.remove(o)))}}async reset(){if(this._cancelAllAttachmentAdds(),this._sendGeneration++,this._isSending=!1,this._removedDuringSend.clear(),this._attachments.length===0&&this._text===""&&this._role==="user"&&Object.keys(this._runConfig).length===0&&this._quote===void 0)return;this._role="user",this._runConfig={},this._quote=void 0;let e=this._onClearAttachments();this._emptyTextAndAttachments(),await e}async clearAttachments(){if(this._cancelAllAttachmentAdds(),this._isSending)for(let r of this._attachments)this._removedDuringSend.add(r.id);let e=this._onClearAttachments();this.setAttachments([]),await e}async send(e){if(!this.canSend||this._isSending)return;if(this._dictationSession)try{this._dictationSession.cancel()}catch(b){console.error("[assistant-ui] Dictation session cancel threw",b)}finally{this._cleanupDictation()}let r=this.getAttachmentAdapter(),o=this.attachments.map(async b=>{if(Zr(b))return b;if(!r)throw new Error("Attachments are not supported");return await r.send(b)}),i=this.attachments,s=this.text,n=this._quote,a=this.role,c=this.runConfig;this._quote=void 0,this._text="",this._isSending=!0;let l=++this._sendGeneration;this._notifySubscribers();let u;try{u=await Promise.all(o)}catch(b){throw l===this._sendGeneration&&(!this.text.trim()&&this._quote===void 0&&(this._text=s,this._rebaseDictation(s),this._quote=n,this._notifySubscribers()),Promise.allSettled(o).then(()=>{l===this._sendGeneration&&(this._removedDuringSend.clear(),this._isSending=!1,this._notifySubscribers())})),b}if(l!==this._sendGeneration)return;let m=new Set(i.map(b=>b.id));this._attachments=this._attachments.filter(b=>!m.has(b.id)),this._isSending=!1,this._notifySubscribers();let d=u.filter(b=>!this._removedDuringSend.has(b.id));this._removedDuringSend.clear();let p={createdAt:new Date,role:a,content:s?[{type:"text",text:s}]:[],attachments:d,runConfig:c,metadata:{custom:{...n?{quote:n}:{}}}},h={text:s,quote:n,attachments:d},f;try{f=this.handleSend(p,e)}catch(b){throw this._restoreUnsentDraft(b,l,h),b}f&&f.catch(b=>{this._restoreUnsentDraft(b,l,h)}),this._notifyEventSubscribers("send",{chars:s.length,attachments:d.length})}restoreDraft(e){return this._text.trim()||this._quote!==void 0||this._attachments.length>0?!1:(this._text=e.text,this._rebaseDictation(e.text),this._quote=e.quote,this._attachments=e.attachments??[],this._notifySubscribers(),!0)}retractDraft(e){let r=e.attachments!==void 0?this._attachments===e.attachments:this._attachments.length===0;this._text!==e.text||this._quote!==e.quote||!r||(this._text="",this._rebaseDictation(""),this._quote=void 0,this._attachments=[],this._notifySubscribers())}_restoreUnsentDraft(e,r,o){Ri(e)&&r===this._sendGeneration&&this.restoreDraft(o)}cancel(){this.handleCancel()}get queue(){return Dt}moveQueueItem(e,r){}removeQueueItem(e){}async addAttachment(e){if(Iu(e)){let n=this.getAttachmentAdapter();if(n&&!In({name:e.name,type:e.contentType??""},n.accept)){let c=`File type ${e.contentType||"unknown"} is not accepted. Accepted types: ${n.accept}`,l=new Error(c);throw this._safeEmitAttachmentAddError("not-accepted",c,void 0,l,e.contentType),l}let a={id:e.id??He(),type:e.type??"document",name:e.name,contentType:e.contentType,content:e.content,status:{type:"complete"}};this._attachments=[...this._attachments,a],this._notifySubscribers(),this._notifyEventSubscribers("attachmentAdd",{...a.contentType?{contentType:a.contentType}:void 0});return}let r=this.getAttachmentAdapter();if(!r){let n="Attachments are not supported",a=new Error(n);throw this._safeEmitAttachmentAddError("no-adapter",n,void 0,a,e.type),a}if(!In({name:e.name,type:e.type},r.accept)){let n=`File type ${e.type||"unknown"} is not accepted. Accepted types: ${r.accept}`,a=new Error(n);throw this._safeEmitAttachmentAddError("not-accepted",n,void 0,a,e.type),a}let o=this._attachmentAddOperations.start(),i=n=>{if(!this._attachmentAddOperations.accept(o,n.id))return!1;let a=this._attachments.findIndex(c=>c.id===n.id);return a!==-1?this._attachments=[...this._attachments.slice(0,a),n,...this._attachments.slice(a+1)]:this._attachments=[...this._attachments,n],this._notifySubscribers(),!0},s;try{await Ru(r.add({file:e}),n=>(s=n,i(n)))}catch(n){if(this._attachmentAddOperations.isCancelled(o))return;throw s&&i({...s,status:{type:"incomplete",reason:"error",message:n instanceof Error?n.message:String(n)}}),this._safeEmitAttachmentAddError("adapter-error",n instanceof Error?n.message:String(n),s?.id,n instanceof Error?n:void 0,s?.contentType||e.type),n}finally{this._attachmentAddOperations.finish(o)}this._attachmentAddOperations.isCancelled(o)||(s?.status.type==="incomplete"&&s.status.reason==="error"?this._safeEmitAttachmentAddError("adapter-error",s.status.message??"Attachment upload did not complete successfully.",s.id,void 0,s.contentType||e.type):this._notifyEventSubscribers("attachmentAdd",{...s?.contentType?{contentType:s.contentType}:e.type?{contentType:e.type}:void 0}))}_safeEmitAttachmentAddError(e,r,o,i,s){try{this._notifyEventSubscribers("attachmentAddError",{reason:e,message:r,...o!==void 0&&{attachmentId:o},...i!==void 0&&{error:i},...s?{contentType:s}:void 0})}catch(n){console.error("[assistant-ui] attachmentAddError subscriber threw:",n)}}async removeAttachment(e){let r=this._attachments.findIndex(i=>i.id===e);if(r===-1)throw new Error("Attachment not found");let o=this._attachments[r];if(this._cancelAttachmentAdd(e),this._isSending&&this._removedDuringSend.add(e),!Zr(o)){let i=this.getAttachmentAdapter();if(!i)throw new Error("Attachments are not supported");try{await i.remove(o)}catch(s){let n=s instanceof Error?s.message:String(s);throw this._attachments=this._attachments.map(a=>a.id===e&&!Zr(a)?{...a,status:{type:"incomplete",reason:"error",message:n}}:a),this._notifySubscribers(),s}}this._attachments=this._attachments.filter(i=>i.id!==e),this._notifySubscribers()}get dictation(){return this._dictation}_isActiveSession(e,r){return this._activeDictationSessionId===e&&this._dictationSession===r}startDictation(){let e=this.getDictationAdapter();if(!e)throw new Error("Dictation adapter not configured");let r=this._dictationSession!==void 0;if(this._dictationSession){let u=this._dictationSession;this._cleanupDictation({notify:!1}),this._stopDictationSession(u)}let o=e.disableInputDuringDictation??!1;this._dictationBaseText=this._text,this._currentInterimText="";let i;try{i=e.listen()}catch(u){if(r)try{this._notifySubscribers()}catch(m){console.error("[assistant-ui] Dictation replacement rollback notification threw",m)}throw u}this._dictationSession=i;let s=++this._dictationSessionIdCounter;this._activeDictationSessionId=s,this._dictation={status:i.status,inputDisabled:o},this._notifySubscribers();let n=i.onSpeech(u=>{if(!this._isActiveSession(s,i))return;let m=u.isFinal!==!1,d=this._dictationBaseText&&!this._dictationBaseText.endsWith(" ")&&u.transcript?" ":"";if(m){if(this._dictationBaseText=this._dictationBaseText+d+u.transcript,this._currentInterimText="",this._text=this._dictationBaseText,this._dictation){let{transcript:p,...h}=this._dictation;this._dictation=h}this._notifySubscribers()}else this._currentInterimText=d+u.transcript,this._text=this._dictationBaseText+this._currentInterimText,this._dictation&&(this._dictation={...this._dictation,transcript:u.transcript}),this._notifySubscribers()});this._dictationUnsubscribes.push(n);let a=i.onSpeechStart(()=>{this._isActiveSession(s,i)&&(this._dictation={status:{type:"running"},inputDisabled:o,...this._dictation?.transcript&&{transcript:this._dictation.transcript}},this._notifySubscribers())});this._dictationUnsubscribes.push(a);let c=i.onSpeechEnd(()=>{this._cleanupDictation({sessionId:s})});this._dictationUnsubscribes.push(c);let l=setInterval(()=>{this._isActiveSession(s,i)&&i.status.type==="ended"&&this._cleanupDictation({sessionId:s})},100);this._dictationUnsubscribes.push(()=>clearInterval(l))}stopDictation(){if(!this._dictationSession)return;let e=this._dictationSession,r=this._activeDictationSessionId,o=()=>this._cleanupDictation({sessionId:r});this._stopDictationSession(e,o)}_stopDictationSession(e,r=()=>{}){let o;try{o=e.stop()}catch(i){console.error("[assistant-ui] Dictation session stop threw",i),r();return}o.then(r,i=>{console.error("[assistant-ui] Dictation session stop rejected",i),r()})}_cleanupDictation(e){if(e?.sessionId!==void 0&&e.sessionId!==this._activeDictationSessionId||this._isCleaningDictation)return;this._isCleaningDictation=!0;let r=o=>{try{o()}catch(i){console.error("[assistant-ui] Dictation cleanup threw",i)}};try{let o=this._dictationUnsubscribes;this._dictationUnsubscribes=[],this._dictationSession=void 0,this._activeDictationSessionId=void 0,this._dictation=void 0,this._dictationBaseText="",this._currentInterimText="";for(let i of o)r(i);e?.notify!==!1&&r(()=>this._notifySubscribers())}finally{this._isCleaningDictation=!1}}_notifyEventSubscribers(e,r){let o=this._eventSubscribers.get(e);o&&we(o,r,`Composer runtime "${e}"`)}unstable_on(e,r){let o=r,i=this._eventSubscribers.get(e);return i||(i=new Set,this._eventSubscribers.set(e,i)),i.add(o),()=>{this._eventSubscribers.get(e)?.delete(o)}}};var Dg=t=>t.capabilities?.cancel?Tn(t):!1,Au=class extends Ni{constructor(e){super();g(this,"_queueCache");g(this,"runtime");this.runtime=e,this.connect()}get canCancel(){return Dg(this.runtime)}get canSend(){return!this.isEmpty&&!this.runtime.isSendDisabled&&!this.runtime.voice&&!this._isSending}get queue(){let e=this.runtime.getSteerQueueItems?.()??Dt,r=this.runtime.getQueueItems?.()??Dt,o=this._queueCache;if(o&&o.steer===e&&o.queue===r)return o.flat;let i=e.length===0?r:r.length===0?e:[...e,...r];return this._queueCache={steer:e,queue:r,flat:i},i}moveQueueItem(e,r){this.runtime.moveQueueItem?.(e,r)}removeQueueItem(e){this.runtime.removeQueueItem?.(e)}getAttachmentAdapter(){return this.runtime.adapters?.attachments}getDictationAdapter(){return this.runtime.adapters?.dictation}connect(){let e=!1,r=this.runtime.isSendDisabled,o=this.runtime.voice!==void 0,i=this.queue;return this.runtime.subscribe(()=>{let s=!1,n=this.canCancel;e!==n&&(e=n,s=!0),r!==this.runtime.isSendDisabled&&(r=this.runtime.isSendDisabled,s=!0);let a=this.runtime.voice!==void 0;o!==a&&(o=a,s=!0),i!==this.queue&&(i=this.queue,s=!0),s&&this._notifySubscribers()})}async handleSend(e,r){return this.runtime.append({...e,parentId:this.runtime.messages.at(-1)?.id??null,sourceId:null,startRun:r?.startRun,steer:r?.steer})}async handleCancel(){this.runtime.cancelRun()}};var Pu=class extends Ni{constructor(e,r,{parentId:o,message:i}){super();g(this,"_nonTextPassthrough");g(this,"_parentId");g(this,"_sourceId");g(this,"runtime");g(this,"endEditCallback");this.runtime=e;let s=e.voice!==void 0,n=e.subscribe(()=>{let c=e.voice!==void 0;c!==s&&(s=c,this._notifySubscribers())});this.endEditCallback=()=>{n(),r()},this._parentId=o,this._sourceId=i.id,this.setText(Mt(i)),this.setRole(i.role);let a;i.role==="user"?(a=[...i.attachments??[],...Cu(i.content)],this._nonTextPassthrough=[]):(a=i.attachments??[],this._nonTextPassthrough=i.content.filter(c=>c.type!=="text")),this.setAttachments(a),this.setRunConfig({...e.composer.runConfig})}get canCancel(){return!0}get canSend(){return!this.isEmpty&&!this.runtime.voice&&!this._isSending}getAttachmentAdapter(){return this.runtime.adapters?.attachments}getDictationAdapter(){return this.runtime.adapters?.dictation}get parentId(){return this._parentId}get sourceId(){return this._sourceId}async handleSend(e,r){let o=this._nonTextPassthrough.length>0?[...e.content,...this._nonTextPassthrough]:e.content,i=this.runtime.append({...e,content:o,parentId:this._parentId,sourceId:this._sourceId,startRun:r?.startRun});return this.handleCancel(),i}handleCancel(){this.endEditCallback(),this._notifySubscribers()}};var ku=class extends dr{constructor(e){super();g(this,"_isInitialized",!1);g(this,"repository",new Bi);g(this,"_voiceMessages",[]);g(this,"_voiceGeneration",0);g(this,"_cachedMergedMessages",null);g(this,"_cachedVoiceGeneration",-1);g(this,"_cachedMergedBase",null);g(this,"composer",new Au(this));g(this,"_contextProvider");g(this,"_editComposers",new Map);g(this,"_stopSpeaking");g(this,"speech");g(this,"_voiceSession");g(this,"_voiceUnsubs",[]);g(this,"voice");g(this,"_voiceVolume",0);g(this,"_voiceVolumeSubscribers",new Set);g(this,"getVoiceVolume",()=>this._voiceVolume);g(this,"subscribeVoiceVolume",e=>(this._voiceVolumeSubscribers.add(e),()=>this._voiceVolumeSubscribers.delete(e)));g(this,"_currentAssistantMsg",null);g(this,"_eventSubscribers",new Map);this._contextProvider=e}_markVoiceMessagesDirty(){this._voiceGeneration++,this._cachedMergedMessages=null}_getBaseMessages(){return this.repository.getMessages()}_commitVoiceMessage(e){}get messages(){if(this._voiceMessages.length===0)return this._getBaseMessages();let e=this._getBaseMessages();if(this._cachedVoiceGeneration!==this._voiceGeneration||this._cachedMergedBase!==e){let r=new Set(e.map(o=>o.id));this._cachedMergedMessages=[...e,...this._voiceMessages.filter(o=>!r.has(o.id))],this._cachedVoiceGeneration=this._voiceGeneration,this._cachedMergedBase=e}return this._cachedMergedMessages}get state(){let e;for(let r of this.messages)r.role==="assistant"&&(e=r);return e?.metadata.unstable_state??null}getModelContext(){return this._contextProvider.getModelContext()}enrichAppendMetadata(e,r=e.parentId){if(e.role!=="user")return e;let o=this.messages,i=r===null?-1:o.findIndex(n=>n.id===r),s=Dl(this.getModelContext().unstable_composerMetadata,o.slice(0,i+1));return s?{...e,metadata:{...e.metadata,custom:{...e.metadata?.custom,...s}}}:e}getEditComposer(e){return this._editComposers.get(e)}_isVoiceMessage(e){return e!==null&&this._voiceMessages.some(r=>r.id===e)}_resolveAppendParent(e){return this._isVoiceMessage(e)?this._getBaseMessages().at(-1)?.id??null:e}beginEdit(e){if(this.voice)throw new Error("Cannot edit a message while a voice session is connected");if(this._isVoiceMessage(e))throw new Error("Voice transcript messages cannot be edited");if(this._editComposers.has(e))throw new Error("Edit already in progress");this._editComposers.set(e,new Pu(this,()=>this._editComposers.delete(e),this.repository.getMessage(e))),this._notifySubscribers()}getMessageById(e){try{return this.repository.getMessage(e)}catch{let r=this.repository.getMessages(),o=this._voiceMessages.findIndex(i=>i.id===e);return o!==-1?{parentId:o>0?this._voiceMessages[o-1].id:r.at(-1)?.id??null,message:this._voiceMessages[o],index:r.length+o}:void 0}}getBranches(e){return this._voiceMessages.some(r=>r.id===e)?[]:this.repository.getBranches(e)}switchToBranch(e){this.repository.switchToBranch(e),this._notifySubscribers()}_notifyEventSubscribers(e,r){let o=this._eventSubscribers.get(e);o&&we(o,r,`Thread runtime "${e}"`)}_notifyToolApprovalAnswered(e,r,o,i){this._notifyEventSubscribers("toolApprovalAnswered",{messageId:e,toolCallId:r,toolName:o,approved:i})}submitFeedback({messageId:e,type:r,comment:o}){let i=this.adapters?.feedback,s=this.getMessageById(e);if(!s)throw new Error(`Message not found: ${e}`);let{message:n,parentId:a}=s,c=o?.trim(),l={type:r,...c?{comment:c}:void 0};if(i?.submit({message:n,...l}),n.role==="assistant"){let u={...n,metadata:{...n.metadata,submittedFeedback:l}},m=this._voiceMessages.findIndex(d=>d.id===e);m===-1?this.repository.addOrUpdateMessage(a,u):(this._voiceMessages[m]=u,this._currentAssistantMsg===n&&(this._currentAssistantMsg=u),this._markVoiceMessagesDirty())}this._notifySubscribers()}speak(e){let r=this.adapters?.speech;if(!r)throw new Error("Speech adapter not configured");let o=this.getMessageById(e);if(!o)throw new Error(`Message not found: ${e}`);let{message:i}=o,s=this._stopSpeaking,n;try{s?.(),n=r.speak(Mt(i))}catch(m){if(s&&!this._stopSpeaking)try{this._notifySubscribers()}catch(d){console.error("[assistant-ui] Speech rollback notification threw",d)}throw m}let a,c=()=>{this._stopSpeaking=void 0,this.speech=void 0;let m=a;a=void 0,m?.()},l=()=>{if(this._stopSpeaking===l)try{c()}finally{n.cancel()}},u=()=>{this._stopSpeaking===l&&(n.status.type==="ended"?rt([c,()=>this._notifySubscribers()]):(this.speech={messageId:e,status:n.status},this._notifySubscribers()))};this._stopSpeaking=l;try{if(a=n.subscribe(u),this._stopSpeaking!==l){a();return}u()}catch(m){if(this._stopSpeaking===l)try{rt([l,()=>this._notifySubscribers()])}catch(d){console.error("[assistant-ui] Speech rollback cleanup threw",d)}throw m}}stopSpeaking(){if(!this._stopSpeaking)throw new Error("No message is being spoken");rt([this._stopSpeaking,()=>this._notifySubscribers()])}_onVoiceConnected(){}_onVoiceDisconnected(){}_isRunActive(){if(this.isRunning)return!0;let e=this._getBaseMessages().at(-1);return e?.role==="assistant"&&(e.status.type==="running"||e.status.type==="requires-action")}connectVoice(){let e=this.adapters?.voice;if(!e)throw new Error("Voice adapter not configured");if(this._isRunActive())throw new Error("Cannot start a voice session while a run is in progress or paused on a pending tool action");let r=this._voiceSession!==void 0;try{this._disconnectVoice(!1)}catch(n){console.error("[assistant-ui] Voice cleanup threw before reconnect",n)}let o;try{o=e.connect({})}catch(n){throw r&&this._voiceSession===void 0&&this._onVoiceDisconnected(),n}this._voiceSession=o;let i=[];this._voiceUnsubs=i;let s=()=>{if(this._voiceSession===o&&this._voiceUnsubs===i)return!1;try{rt(i.splice(0))}catch(n){console.error("[assistant-ui] Detached voice setup cleanup threw",n)}return!0};try{let n="listening";if(this.voice={status:o.status,isMuted:o.isMuted,mode:n},this._voiceVolume=0,this._notifySubscribers(),s()||(i.push(o.onStatusChange(a=>{this._voiceSession===o&&(a.type==="ended"?(this._finishVoiceAssistantMessage(),this._voiceSession=void 0,this.voice=void 0,this._onVoiceDisconnected()):this.voice={status:a,isMuted:o.isMuted,mode:n},this._notifySubscribers())})),s())||(i.push(o.onModeChange(a=>{n=a,this.voice&&(this.voice={...this.voice,mode:a},this._notifySubscribers())})),s())||(i.push(o.onVolumeChange(a=>{this._voiceVolume=a,we(this._voiceVolumeSubscribers,void 0,"Voice volume")})),s()))return;i.push(o.onTranscript(a=>{this._handleVoiceTranscript(a)})),s()||this._onVoiceConnected()}catch(n){if(this._voiceSession===o&&this._voiceUnsubs===i){try{this._disconnectVoice(!1)}catch(a){console.error("[assistant-ui] Voice rollback cleanup threw",a)}r&&this._voiceSession===void 0&&this._onVoiceDisconnected()}else s();throw n}}_handleVoiceTranscript(e){if(this.ensureInitialized(),e.role==="user"){if(this._finishVoiceAssistantMessage(),this._currentAssistantMsg=null,e.isFinal){let r={id:He(),role:"user",content:[{type:"text",text:e.text}],metadata:{modality:"voice",custom:{}},createdAt:new Date,status:{type:"complete",reason:"unknown"},attachments:[]};this._voiceMessages.push(r),this._commitVoiceMessage(r),this._markVoiceMessagesDirty(),this._notifySubscribers()}}else{let r=e.isFinal?{type:"complete",reason:"stop"}:{type:"running"};if(!this._currentAssistantMsg)this._currentAssistantMsg={id:He(),role:"assistant",content:[{type:"text",text:e.text}],metadata:{unstable_state:this.state,unstable_annotations:[],unstable_data:[],steps:[],modality:"voice",custom:{}},status:r,createdAt:new Date},this._voiceMessages.push(this._currentAssistantMsg);else{let o=this._voiceMessages.indexOf(this._currentAssistantMsg);if(o===-1)return;let i={...this._currentAssistantMsg,content:[{type:"text",text:e.text}],status:r};this._voiceMessages[o]=i,this._currentAssistantMsg=i}e.isFinal&&(this._commitVoiceMessage(this._currentAssistantMsg),this._currentAssistantMsg=null),this._markVoiceMessagesDirty(),this._notifySubscribers()}}_finishVoiceAssistantMessage(e=!0){let r=this._voiceMessages.at(-1);if(r?.role==="assistant"&&r.status.type==="running"){let o=this._voiceMessages.length-1;this._voiceMessages[o]={...r,status:{type:"complete",reason:"stop"}},this._commitVoiceMessage(this._voiceMessages[o]),this._currentAssistantMsg=null,this._markVoiceMessagesDirty(),e&&this._notifySubscribers()}}disconnectVoice(){this._disconnectVoice(!0)}_disconnectVoice(e){this._finishVoiceAssistantMessage(!1),this._currentAssistantMsg=null;let r=this._voiceUnsubs.splice(0);this._voiceUnsubs=[];let o=this._voiceSession;this._voiceSession=void 0,this.voice=void 0,this._voiceVolume=0;let i=this.speech&&this._isVoiceMessage(this.speech.messageId)?this._stopSpeaking:void 0;this._voiceMessages=[],this._markVoiceMessagesDirty();try{rt([...r,...i?[i]:[],...o?[()=>o.disconnect()]:[],()=>we(this._voiceVolumeSubscribers,void 0,"Voice volume"),()=>this._notifySubscribers()])}finally{e&&o&&this._voiceSession===void 0&&this._onVoiceDisconnected()}}muteVoice(){if(!this._voiceSession)throw new Error("No active voice session");this._voiceSession.mute(),this.voice={...this.voice,isMuted:!0},this._notifySubscribers()}unmuteVoice(){if(!this._voiceSession)throw new Error("No active voice session");this._voiceSession.unmute(),this.voice={...this.voice,isMuted:!1},this._notifySubscribers()}ensureInitialized(){this._isInitialized||(this._isInitialized=!0,this._notifyEventSubscribers("initialize",{}))}export(){return this.repository.export()}import(e){this.ensureInitialized(),this.repository.clear(),this.repository.import(e),this._notifySubscribers()}reset(e){this.import(Oi.fromArray(e??[]))}unstable_on(e,r){let o=r;if(e==="modelContextUpdate")return this._contextProvider.subscribe?.(()=>we([o],{},`Thread runtime "${e}"`))??(()=>{});let i=this._eventSubscribers.get(e);return i||(i=new Set,this._eventSubscribers.set(e,i)),i.add(o),e==="initialize"&&this._isInitialized&&queueMicrotask(()=>{i.has(o)&&we([o],{},`Thread runtime "${e}"`)}),()=>{this._eventSubscribers.get(e)?.delete(o)}}};var Og=Symbol.for("assistant-stream.tool-execution-id"),eo=t=>{try{return JSON.parse(t),!0}catch{return!1}},Mu=t=>{try{return JSON.parse(t)}catch{return}},En=(t,e)=>{let r=Mu(t),o=Mu(e);return r===void 0||o===void 0?!1:Kr(r,o)},Rn=t=>t[Og],Du=class{constructor(t,e,r){g(this,"_getTools");g(this,"_callbacks");g(this,"_isClientToolCall");g(this,"_entries",new Map);g(this,"_humanInput",new Map);g(this,"_executing",new Set);g(this,"_discardedToolCallIds",new Set);g(this,"_settledResolvers",[]);g(this,"_statuses",new Map);g(this,"_ac",new AbortController);g(this,"_pendingRestore",!0);g(this,"_lastSnapshot",null);g(this,"_isRunning",!1);g(this,"_controller");g(this,"_pipelineDead",!1);g(this,"_pipelineRestartUsed",!1);this._getTools=t,this._callbacks=e,this._isClientToolCall=r,this._initPipeline()}_initPipeline(){let[t,e]=tn();this._controller=e;let o=cn(()=>this._getWrappedTools(),()=>this._ac.signal,(i,s,n)=>this._onHumanInput(i,s,n),{onExecutionStart:(i,s,n)=>this._onExecutionStart(i,n),onExecutionEnd:(i,s,n)=>this._onExecutionEnd(i,n)});t.pipeThrough(o).pipeThrough(new Qr).pipeTo(new WritableStream({write:i=>{try{if(i.type!=="result")return;this._handleResultChunk(i)}catch(s){console.error("[ToolInvocationTracker] result chunk handling failed",s)}}})).catch(i=>{console.error("[ToolInvocationTracker] stream pipeline failed; will attempt single restart on next setState",i),this._pipelineDead=!0})}setState(t){try{if(this._pipelineDead){if(this._pipelineRestartUsed)return;this._pipelineRestartUsed=!0,this._pipelineDead=!1,this._demoteEntriesToRestored(),this._executing.clear(),this._ac=new AbortController,this._initPipeline()}if(this._lastSnapshot&&this._lastSnapshot.messages===t.messages&&this._lastSnapshot.isRunning===t.isRunning&&this._lastSnapshot.isLoading===t.isLoading)return;t.isLoading===!0&&(this._pendingRestore=!0);let e=this._isRunning;this._isRunning=t.isRunning;try{this._processMessages(t.messages)}catch(r){throw this._isRunning=e,r}this._lastSnapshot=t,this._pendingRestore=!1}catch(e){console.error("[ToolInvocationTracker] setState failed; snapshot dropped",e)}}reset(){try{this._pendingRestore=!0,this._entries.clear(),this._discardedToolCallIds.clear(),this._lastSnapshot=null,this.abort(),this._statuses.size>0&&(this._statuses=new Map,this._invokeOnStatusesChange())}catch(t){console.error("[ToolInvocationTracker] reset failed",t)}}abort(t){try{if(this._humanInput.forEach(({reject:r})=>{try{r(new Error("Tool execution aborted"))}catch{}}),this._humanInput.clear(),t?.discardPending)for(let[r,o]of this._entries)o.controller&&(o.argsComplete||o.hasResult||(this._discardedToolCallIds.add(r),o.skipExecute=!0));if(this._ac.abort(),this._ac=new AbortController,this._executing.size===0)return Promise.resolve();let e=new Set(this._executing);return new Promise(r=>{this._settledResolvers.push({executionIds:e,resolve:r})})}catch(e){return console.error("[ToolInvocationTracker] abort failed",e),Promise.resolve()}}resume(t,e){try{let r=this._humanInput.get(t);return r?(this._humanInput.delete(t),this._setStatus(t,{type:"executing"}),r.resolve(e),!0):!1}catch(r){return console.error("[ToolInvocationTracker] resume failed",r),!1}}getStatuses(){return this._statuses}_getWrappedTools(){let t=this._getTools();if(t)return Object.fromEntries(Object.entries(t).map(([e,r])=>{let o=r.execute,i=r.streamCall;return o===void 0&&i===void 0?[e,r]:[e,{...r,...o!==void 0&&{execute:(...[s,n])=>{let a=Rn(n),c=this._captureExecution(n.toolCallId,a);return!c||c.skipExecute?new Promise(()=>{}):o(s,n)}},...i!==void 0&&{streamCall:(...[s,n])=>{let a=Rn(n);if(this._captureExecution(n.toolCallId,a))return i(s,n)}}}]}))}_captureExecution(t,e){if(e===void 0)return;let r=this._entries.get(t);if(r?.controller)return r.executionId===void 0&&(r.executionId=e),r.executionId===e?r:void 0}_onHumanInput(t,e,r){return new Promise((o,i)=>{let s=this._entries.get(t);if(!s?.controller||s.executionId!==r){i(new Error("Tool execution aborted"));return}let n=this._humanInput.get(t);if(n)try{n.reject(new Error("Human input request was superseded by a new request"))}catch{}this._humanInput.set(t,{executionId:r,resolve:o,reject:i}),this._setStatus(t,{type:"interrupt",payload:{type:"human",payload:e}})})}_onExecutionStart(t,e){this._captureExecution(t,e)&&(this._entries.get(t).skipExecute||(this._executing.add(e),this._humanInput.get(t)?.executionId!==e&&this._setStatus(t,{type:"executing"})))}_onExecutionEnd(t,e){if(e===void 0||!this._executing.delete(e))return;this._entries.get(t)?.executionId===e&&this._deleteStatus(t);let r=[];this._settledResolvers.forEach(({executionIds:o,resolve:i})=>{if([...o].some(s=>this._executing.has(s))){r.push({executionIds:o,resolve:i});return}try{i()}catch{}}),this._settledResolvers.length=0,this._settledResolvers.push(...r)}_handleResultChunk(t){let e=t.meta.toolCallId,r=Rn(t),o=this._entries.get(e);!o||o.executionId!==r||o?.hasResult||o.skipExecute||this._invokeOnResult({type:"add-tool-result",toolCallId:e,toolName:t.meta.toolName,result:t.result,isError:t.isError,...t.artifact!==void 0&&{artifact:t.artifact},...t.modelContent!==void 0&&{modelContent:t.modelContent}})}_invokeOnResult(t){try{this._callbacks.onResult(t)}catch(e){console.error("[ToolInvocationTracker] onResult callback threw; result dropped",e)}}_invokeOnStatusesChange(){try{this._callbacks.onStatusesChange(this._statuses)}catch(t){console.error("[ToolInvocationTracker] onStatusesChange callback threw; status change not propagated",t)}}_setStatus(t,e){let r=new Map(this._statuses);r.set(t,e),this._statuses=r,this._invokeOnStatusesChange()}_deleteStatus(t){if(!this._statuses.has(t))return;let e=new Map(this._statuses);e.delete(t),this._statuses=e,this._invokeOnStatusesChange()}_warnProviderOwnedSkip(t,e){}_shouldCloseArgsStream({argsText:t,hasResult:e,clientOwned:r}){return e?!0:eo(t)?r||!this._isRunning:!1}_startActiveEntry(t,e,r,o){let i={toolName:e,controller:this._controller.addToolCallPart({toolName:e,toolCallId:t}),argsText:"",hasResult:!1,skipExecute:r,argsComplete:!1,clientOwned:o};return this._entries.set(t,i),i}_demoteEntriesToRestored(){for(let[t,e]of this._entries)if(e.controller){if(!e.argsComplete&&!e.hasResult){this._entries.delete(t);continue}this._entries.set(t,{toolName:e.toolName,argsText:e.argsText,hasResult:e.hasResult})}}_processArgsText(t,e){if(!t.controller)return;let r=e.result!==void 0;if(e.argsText!==t.argsText){let o=!0;if(t.argsComplete)En(t.argsText,e.argsText)&&(t.argsText=e.argsText),o=!1;else if(!e.argsText.startsWith(t.argsText))if(eo(t.argsText)&&eo(e.argsText)&&En(t.argsText,e.argsText)){let i=this._shouldCloseArgsStream({argsText:e.argsText,hasResult:r,clientOwned:t.clientOwned});i&&t.controller.argsText.close(),t.argsText=e.argsText,t.argsComplete=i,o=!1}else o=!1;if(o&&t.controller){let i=e.argsText.slice(t.argsText.length);t.controller.argsText.append(i);let s=this._shouldCloseArgsStream({argsText:e.argsText,hasResult:r,clientOwned:t.clientOwned});s&&t.controller.argsText.close(),t.argsText=e.argsText,t.argsComplete=s}}!t.argsComplete&&t.controller&&this._shouldCloseArgsStream({argsText:t.argsText,hasResult:r,clientOwned:t.clientOwned})&&(t.controller.argsText.close(),t.argsComplete=!0)}_processMessages(t){let e=this._pendingRestore;for(let{part:r}of Xr(t)){let o=this._entries.get(r.toolCallId);if(e){o?.controller||this._entries.set(r.toolCallId,{toolName:r.toolName,argsText:r.argsText,hasResult:r.result!==void 0});continue}let i=o;if(r.result!==void 0&&this._discardedToolCallIds.delete(r.toolCallId),i&&!i.controller){if(i.hasResult||!(r.argsText!==i.argsText&&!(eo(i.argsText)&&eo(r.argsText)&&En(i.argsText,r.argsText)))&&r.result===void 0)continue;this._entries.delete(r.toolCallId),i=void 0}if(!i){let s=this._isClientToolCall?.(r),n=r.result===void 0&&s===!1;n&&this._warnProviderOwnedSkip(r.toolName,r.toolCallId),i=this._startActiveEntry(r.toolCallId,r.toolName,r.result!==void 0||n||this._discardedToolCallIds.has(r.toolCallId),s===!0)}if(r.approval!==void 0&&(i.skipExecute=!0),this._processArgsText(i,r),r.result!==void 0&&!i.hasResult){let{controller:s}=i;if(!s)continue;i.hasResult=!0,i.argsComplete=!0,s.setResponse(new ze({result:r.result,artifact:r.artifact,isError:r.isError,...r.modelContent!==void 0?{modelContent:r.modelContent}:{}})),s.close()}}}};var Bg=Object.freeze([]),An=(t,e)=>{Promise.resolve(e).catch(r=>{console.error(`[ExternalStoreThreadRuntimeCore] ${t} callback rejected`,r)})},Ng=(t,e)=>t&&e[e.length-1]?.role!=="assistant",Ou=class extends ku{constructor(e,r){super(e);g(this,"_capabilities",{switchToBranch:!1,switchBranchDuringRun:!1,edit:!1,delete:!1,reload:!1,refetchThread:!1,cancel:!1,unstable_copy:!1,speech:!1,dictation:!1,voice:!1,attachments:!1,feedback:!1,queue:!1});g(this,"_messages");g(this,"isDisabled");g(this,"isSendDisabled");g(this,"suggestions",[]);g(this,"extras");g(this,"_converter",new gn);g(this,"_pendingDeleteEvictions",new Set);g(this,"_optimistic",null);g(this,"_store");g(this,"_getInitializePromise");g(this,"_transformedQueue");g(this,"_toolInvocations",null);g(this,"_toolStatuses",new Map);g(this,"_effectiveIsRunning",!1);g(this,"_inTrackerUpdate",!1);g(this,"_pendingRunningRefresh",!1);g(this,"_toolCallToMessageId",new Map);g(this,"_messagesForToolCallIndex",null);g(this,"updateMessages",e=>{this._store.convertMessage!==void 0?this._store.setMessages?.(e.flatMap(Bl)):this._store.setMessages?.(e)});this.__internal_setAdapter(r)}get capabilities(){return this._capabilities}get isLoading(){return this._store.isLoading??!1}get isRunning(){return this._hasExecutingTools(this._store)?!0:this._store.isRunning}_getBaseMessages(){return this._messages}get state(){return this._store.state??super.state}get adapters(){return this._store.adapters}get unstable_refetchThread(){if(this._store.onRefetchThread)return()=>this._store.onRefetchThread()}__internal_setGetInitializePromise(e){this._getInitializePromise=e}_runTrackerUpdate(e){this._inTrackerUpdate=!0;try{e()}finally{this._inTrackerUpdate=!1}this._pendingRunningRefresh&&(this._pendingRunningRefresh=!1,this._refreshEffectiveIsRunning())}_refreshEffectiveIsRunning(){let e=this._getEffectiveIsRunning(this._store);this._effectiveIsRunning!==e&&(this._effectiveIsRunning=e,this._notifyEventSubscribers(e?"runStart":"runEnd",{}),this._notifySubscribers())}_hasExecutingTools(e){if(e.unstable_enableToolInvocations!==!0||this._toolInvocations===null)return!1;for(let r of this._toolStatuses.values())if(r.type==="executing")return!0;return!1}_getEffectiveIsRunning(e){return(e.isRunning??!1)||this._hasExecutingTools(e)}beginEdit(e){if(!this._store.onEdit)throw new Error("Runtime does not support editing.");super.beginEdit(e)}__internal_setAdapter(e){this._store!==e&&this._updateStoreSnapshot(e)}_updateStoreSnapshot(e){let r=this._effectiveIsRunning;this.isDisabled=e.isDisabled??!1,this.isSendDisabled=e.isSendDisabled??!1;let o=this._store;this._store=e;let i=this._getEffectiveIsRunning(e),s=e.unstable_messageRepositoryInstance,n=s!==void 0&&s!==this.repository;n&&(this.repository=s,this._pendingDeleteEvictions.clear()),o?.queue!==e.queue&&(this._transformedQueue=void 0,e.queue?.__internal_setDispatchTransform?.(d=>{let p=this.messages.at(-1)?.id??null;return this.enrichAppendMetadata({...d,parentId:p},p)}),e.queue?.__internal_setDispatchTransform&&(this._transformedQueue=e.queue)),this.extras!==e.extras&&(this.extras=e.extras);let a=e.suggestions??Bg;Ee(this.suggestions,a)||(this.suggestions=a);let c={switchToBranch:this._store.setMessages!==void 0,switchBranchDuringRun:!1,edit:this._store.onEdit!==void 0,delete:this._store.onDelete!==void 0||this._store.setMessages!==void 0,reload:this._store.onReload!==void 0,refetchThread:this._store.onRefetchThread!==void 0,cancel:this._store.onCancel!==void 0,speech:this._store.adapters?.speech!==void 0,dictation:this._store.adapters?.dictation!==void 0,voice:this._store.adapters?.voice!==void 0,unstable_copy:this._store.unstable_capabilities?.copy!==!1,attachments:!!this._store.adapters?.attachments,feedback:!!this._store.adapters?.feedback,queue:this._store.queue!==void 0};Ee(this._capabilities,c)||(this._capabilities=c);let l;if(e.messageRepository){if(o&&!n&&o.isRunning===e.isRunning&&o.messageRepository===e.messageRepository&&r===i){this._notifySubscribers();return}let d=e.messageRepository.messages,p=e.messageRepository.headId??d.at(-1)?.message.id??null;if(o&&!n&&o.messageRepository===e.messageRepository)this.repository.resetHead(p),l=this.repository.getMessages();else{let h=new Set(d.map(({message:f})=>f.id));for(let{message:f,parentId:b}of d)this.repository.addOrUpdateMessage(b,f);for(let{message:f}of this.repository.export().messages)h.has(f.id)||this.repository.deleteMessage(f.id);this._pendingDeleteEvictions.clear(),this.repository.resetHead(p),l=this.repository.getMessages()}}else if(e.messages){if(o){if(o.convertMessage!==e.convertMessage)this._converter=new gn;else if(!n&&o.isRunning===e.isRunning&&o.messages===e.messages&&r===i){this._notifySubscribers();return}}l=e.convertMessage?this._converter.convertMessages(e.messages,(h,f,b)=>{if(!e.convertMessage)return f;let y=b===(e.messages?.length??0)-1,w=`${Nl}${b}`;if(h&&(h.role!=="assistant"||!Ul(h.status)||h.status===fn(h.content,y,i))){if(h.id.startsWith("__external_store_fallback_")&&h.id!==w){let T={...h,id:w};return mn(T,f),T}return h}let S=e.convertMessage(f,b),_=vr(S,w,fn(S.content,y,i));return mn(_,f),_}):e.messages;let d=new Set,p=[];for(let h=l.length-1;h>=0;h--){let f=l[h];if(d.has(f.id)){console.warn(`ExternalStoreThreadRuntimeCore: duplicate message id "${f.id}" in the provided messages array; keeping the last occurrence.`);continue}d.add(f.id),p.push(f)}p.length!==l.length&&(l=p.reverse());for(let h=0;h<l.length;h++){let f=l[h],b=l[h-1];this.repository.addOrUpdateMessage(b?.id??null,f)}if(this._pendingDeleteEvictions.size>0){let h=new Set(l.map(f=>f.id));for(let f of this._pendingDeleteEvictions)if(this._pendingDeleteEvictions.delete(f),!h.has(f)){try{this.repository.getMessage(f)}catch{continue}this.repository.deleteMessage(f)}}}else throw new Error("ExternalStoreAdapter must provide either 'messages' or 'messageRepository'");l.length>0&&this.ensureInitialized(),this._effectiveIsRunning=i,r!==i&&(i?this._notifyEventSubscribers("runStart",{}):this._notifyEventSubscribers("runEnd",{}));let u=null;if(Ng(i,l)){let d=l.at(-1)?.id??null;this._optimistic?.parentId!==d&&(this._optimistic={id:He(),parentId:d}),u=this._optimistic.id,this.repository.addOrUpdateMessage(d,vr({role:"assistant",content:[],metadata:{isOptimistic:!0}},u,{type:"running"}))}u===null&&(this._optimistic=null),this.repository.resetHead(u??l.at(-1)?.id??null);let m=this.repository.getMessages();if((!this._messages||!vn(this._messages,m))&&(this._messages=m),this._voiceMessages.length>0){let d=new Set(this._messages.map(h=>h.id)),p=this._voiceMessages.filter(h=>!d.has(h.id));p.length!==this._voiceMessages.length&&(this._voiceMessages=p,this._markVoiceMessagesDirty())}n&&this._runTrackerUpdate(()=>this._toolInvocations?.reset()),this._runTrackerUpdate(()=>this._driveToolInvocations()),this._notifySubscribers()}_driveToolInvocations(){if(!this._store.unstable_enableToolInvocations){this._toolInvocations&&(this._toolInvocations.reset(),this._toolInvocations=null,this._toolStatuses=new Map,this._store.setToolStatuses?.({}));return}this._toolInvocations||(this._toolInvocations=new Du(()=>this.getModelContext().tools,{onResult:e=>{try{let r=this._findMessageIdForToolCall(e.toolCallId);if(r===void 0)return;An("onAddToolResult",this._store.onAddToolResult?.({messageId:r,toolCallId:e.toolCallId,toolName:e.toolName,result:e.result,isError:e.isError,...e.artifact!==void 0&&{artifact:e.artifact},...e.modelContent!==void 0&&{modelContent:e.modelContent}}))}catch(r){console.error("[ExternalStoreThreadRuntimeCore] onAddToolResult dispatch failed",r)}},onStatusesChange:e=>{let r=this._hasExecutingTools(this._store);this._toolStatuses=e;try{this._store.setToolStatuses?.(Object.fromEntries(e))}finally{r!==this._hasExecutingTools(this._store)&&(this._inTrackerUpdate?this._pendingRunningRefresh=!0:this._updateStoreSnapshot(this._store))}}},e=>this._store.unstable_isClientToolCall?.(e))),this._toolInvocations.setState({messages:this._messages,isRunning:this._getEffectiveIsRunning(this._store),...this._store.isLoading!==void 0&&{isLoading:this._store.isLoading}})}_findMessageIdForToolCall(e){if(this._messagesForToolCallIndex!==this._messages){this._toolCallToMessageId.clear();for(let{part:r,messageId:o}of Xr(this._messages))this._toolCallToMessageId.set(r.toolCallId,o);this._messagesForToolCallIndex=this._messages}return this._toolCallToMessageId.get(e)}switchToBranch(e){if(!this._store.setMessages)throw new Error("Runtime does not support switching branches.");if(this._getEffectiveIsRunning(this._store))return;let r=this._store.unstable_onBranchChange,o=r?this.repository.canonicalHeadId:null;this.repository.switchToBranch(e),this._pendingDeleteEvictions.clear(),this.updateMessages(this.repository.getMessages()),r&&this._notifyBranchChange(o,r)}_notifyBranchChange(e,r){let o=this.repository.canonicalHeadId;o!==e&&r({headId:o,visibleMessageIds:this.repository.getMessages().map(i=>i.id)})}async append(e){let r={...e,parentId:this._resolveAppendParent(e.parentId)};if(this.voice)throw new Error("Cannot send a text message while a voice session is connected");if(this._isVoiceMessage(r.sourceId))throw new Error("Voice transcript messages cannot be edited");let o=r.sourceId!=null||r.parentId!==(this._getBaseMessages().at(-1)?.id??null);r=!o&&this._store.queue&&this._store.queue===this._transformedQueue?r:this.enrichAppendMetadata(r);let i=Yr(this);this.ensureInitialized();let s=this._getInitializePromise?.();if(!o&&this._store.queue){if(s&&await s,!ki(this,i))return;r.steer??this._getEffectiveIsRunning(this._store)?this._store.queue.steer(r):this._store.queue.enqueue(r);return}if(s?.catch(()=>{}),(r.startRun??r.role==="user")&&await this._toolInvocations?.abort({discardPending:!0}),!!ki(this,i))if(o){if(!this._store.onEdit)throw new Error("Runtime does not support editing messages.");this._pendingDeleteEvictions.clear(),await this._store.onEdit(r)}else await this._store.onNew(r)}_commitVoiceMessage(e){this._store.onVoiceTranscript?.(e)}async deleteMessage(e){if(this._store.onDelete){this.repository.getMessages().some(o=>o.id===e)&&this._pendingDeleteEvictions.add(e);try{await this._store.onDelete(e)}catch(o){throw this._pendingDeleteEvictions.delete(e),o}return}if(!this._store.setMessages)throw new Error("Runtime does not support deleting messages.");this._getEffectiveIsRunning(this._store)&&await this._toolInvocations?.abort();let r=this.repository.getMessages();if(r.findIndex(o=>o.id===e)===-1)throw new Error("Message not found.");this._pendingDeleteEvictions.clear(),this.updateMessages(r.filter(o=>o.id!==e)),this._evictDeletedMessage(e)}_evictDeletedMessage(e){if(!e.startsWith("__external_store_fallback_")){try{this.repository.getMessage(e)}catch{return}this.repository.deleteMessage(e),this._publishRepositoryMessages()}}_publishRepositoryMessages(){let e=this.repository.getMessages();vn(this._messages,e)||(this._messages=e),this._notifySubscribers()}getQueueItems(){return this._store?.queue?.items??Dt}getSteerQueueItems(){return this._store?.queue?.steerItems??Dt}moveQueueItem(e,r){this._store?.queue?.move(e,r)}removeQueueItem(e){this._store?.queue?.remove(e)}async startRun(e){if(!this._store.onReload)throw new Error("Runtime does not support reloading messages.");if(this.voice)throw new Error("Cannot start a run while a voice session is connected");if(this._isVoiceMessage(e.sourceId))throw new Error("Voice transcript messages cannot be reloaded");this._pendingDeleteEvictions.clear(),await this._toolInvocations?.abort({discardPending:!0}),await this._store.onReload(e.parentId,e)}async resumeRun(e){if(!this._store.onResume)throw new Error("Runtime does not support resuming runs.");if(this.voice)throw new Error("Cannot start a run while a voice session is connected");if(this._isVoiceMessage(e.sourceId))throw new Error("Voice transcript messages cannot be reloaded");await this._store.onResume(e)}exportExternalState(){if(!this._store.onExportExternalState)throw new Error("Runtime does not support exporting external states.");return this._store.onExportExternalState()}importExternalState(e){if(!this._store.onLoadExternalState)throw new Error("Runtime does not support importing external states.");this._runTrackerUpdate(()=>this._toolInvocations?.reset()),this._store.onLoadExternalState(e)}unstable_notifySessionReset(){this._runTrackerUpdate(()=>this._toolInvocations?.reset()),this._store.queue?.__internal_notifyCancelled?.()}cancelRun(){if(!this._store.onCancel)throw new Error("Runtime does not support cancelling runs.");let e=Yr(this);this._toolInvocations?.abort({discardPending:!0}),this._store.queue?.__internal_notifyCancelled?.(),An("onCancel",this._store.onCancel()),this.dropEmptyOptimisticHead();let r=this.repository.getMessages(),o=r[r.length-1],i=this._store.setMessages!==void 0&&o?.role==="user"&&o.id===r.at(-1)?.id&&o.content.every(n=>n.type==="text")?o:void 0,s;if(i){let n={text:Mt(i),attachments:i.attachments,quote:i.metadata.custom.quote};this.composer.restoreDraft(n)&&(this.repository.deleteMessage(i.id),s={id:i.id,draft:n})}this._publishRepositoryMessages(),setTimeout(()=>{if(ki(this,e)){if(this.dropEmptyOptimisticHead(),s){let n=this.repository.getMessages();n.at(-1)?.id===s.id?this.repository.deleteMessage(s.id):n.some(a=>a.id===s.id)&&this.composer.retractDraft(s.draft)}this._publishRepositoryMessages(),this.updateMessages(this._messages)}},0)}dropEmptyOptimisticHead(){let e=this.repository.getMessages().at(-1);e&&e.metadata.isOptimistic&&e.content.length===0&&this.repository.deleteMessage(e.id)}addToolResult(e){if(!this._store.onAddToolResult)throw new Error("Runtime does not support tool results.");An("onAddToolResult",this._store.onAddToolResult(e))}resumeToolCall(e){if(!(this._toolInvocations?.resume(e.toolCallId,e.payload)??!1)){if(this._store.onResumeToolCall){this._store.onResumeToolCall(e);return}throw new Error(`Tool call ${e.toolCallId} is not waiting for resume.`)}}respondToToolApproval(e){if(!this._store.onRespondToToolApproval)throw new Error("Runtime does not support tool approvals.");let r=this.messages.findLast(i=>i.role==="assistant"&&i.content.some(s=>s.type==="tool-call"&&s.approval?.id===e.approvalId)),o=r?.content.find(i=>i.type==="tool-call"&&i.approval?.id===e.approvalId);try{return Promise.resolve(this._store.onRespondToToolApproval(e)).then(()=>{r&&o?.type==="tool-call"&&this._notifyToolApprovalAnswered(r.id,o.toolCallId,o.toolName,e.approved)})}catch(i){return Promise.reject(i)}}reset(e){let r=new Bi;r.import(Oi.fromArray(e??[])),this.updateMessages(r.getMessages())}import(e){super.import(e),this._store.onImport&&this._store.onImport(this.repository.getMessages())}};var Bu=t=>t.adapters?.threadList??{},Nu=class extends _u{constructor(e){super();g(this,"threads");this.threads=new Tu(Bu(e),()=>new Ou(this._contextProvider,e))}setAdapter(e){this.threads.__internal_setAdapter(Bu(e)),this.threads.getMainThreadRuntimeCore().__internal_setAdapter(e)}};var to=t=>{let e=v(21),{modelContext:r,feedback:o}=Ol()??{},i;e:{if(!o||t.adapters?.feedback){i=t;break e}let h;e[0]!==o||e[1]!==t.adapters?(h={...t.adapters,feedback:o},e[0]=o,e[1]=t.adapters,e[2]=h):h=e[2];let f;e[3]!==t||e[4]!==h?(f={...t,adapters:h},e[3]=t,e[4]=h,e[5]=f):f=e[5],i=f}let s=i,n;e[6]!==s?(n=()=>new Nu(s),e[6]=s,e[7]=n):n=e[7];let[a]=j(n),c;e[8]!==a.threads?(c=()=>()=>{Mi(a.threads.getMainThreadRuntimeCore())},e[8]=a.threads,e[9]=c):c=e[9];let l;e[10]!==a?(l=[a],e[10]=a,e[11]=l):l=e[11],N(c,l);let u;e[12]!==s||e[13]!==a?(u=()=>{a.setAdapter(s)},e[12]=s,e[13]=a,e[14]=u):u=e[14],N(u);let m,d;e[15]!==r||e[16]!==a?(m=()=>{if(r)return a.registerModelContextProvider(r)},d=[r,a],e[15]=r,e[16]=a,e[17]=m,e[18]=d):(m=e[17],d=e[18]),N(m,d);let p;return e[19]!==a?(p=new xu(a),e[19]=a,e[20]=p):p=e[20],p};var Lu=require("react/jsx-runtime"),$u=t=>{let e=v(6),{id:r,children:o}=t,i=V(),s;e[0]!==r?(s=ue({message:de({source:"thread",query:{type:"id",id:r},get:c=>c.thread.message({id:r})}),composer:de({source:"message",query:{},get:c=>c.thread.message({id:r}).composer()})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,Lu.jsx)(fe,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var st=require("react/jsx-runtime"),Pn=(t,e)=>t.Message===e.Message&&t.EditComposer===e.EditComposer&&t.UserEditComposer===e.UserEditComposer&&t.AssistantEditComposer===e.AssistantEditComposer&&t.SystemEditComposer===e.SystemEditComposer&&t.UserMessage===e.UserMessage&&t.AssistantMessage===e.AssistantMessage&&t.SystemMessage===e.SystemMessage,Vu=()=>null,Fu=new WeakMap,Lg=(t,e)=>{let r=Fu.get(t);return r||(r=new Set(t.map(o=>o.id)),Fu.set(t,r)),r.has(e)},$g=(t,e,r)=>{switch(e){case"user":return r?t.UserEditComposer??t.EditComposer??t.UserMessage??t.Message:t.UserMessage??t.Message;case"assistant":return r?t.AssistantEditComposer??t.EditComposer??t.AssistantMessage??t.Message:t.AssistantMessage??t.Message;case"system":return r?t.SystemEditComposer??t.EditComposer??t.SystemMessage??t.Message??Vu:t.SystemMessage??t.Message??Vu;default:throw new Error(`Unknown message role: ${e}`)}},kn=t=>{let e=v(6),{components:r}=t,o=P(Vg),i=P(Fg),s;e[0]!==r||e[1]!==i||e[2]!==o?(s=$g(r,o,i),e[0]=r,e[1]=i,e[2]=o,e[3]=s):s=e[3];let n=s,a;return e[4]!==n?(a=(0,st.jsx)(n,{}),e[4]=n,e[5]=a):a=e[5],a},ro=oe(t=>{let e=v(5),{index:r,components:o}=t,i;e[0]!==o?(i=(0,st.jsx)(kn,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,st.jsx)(yn,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},(t,e)=>t.index===e.index&&Pn(t.components,e.components));ro.displayName="ThreadPrimitive.MessageByIndex";var oo=oe(t=>{let e=v(7),{messageId:r,components:o}=t,i;if(e[0]!==r?(i=a=>Lg(a.thread.messages,r),e[0]=r,e[1]=i):i=e[1],!P(i))return null;let s;e[2]!==o?(s=(0,st.jsx)(kn,{components:o}),e[2]=o,e[3]=s):s=e[3];let n;return e[4]!==r||e[5]!==s?(n=(0,st.jsx)($u,{id:r,children:s}),e[4]=r,e[5]=s,e[6]=n):n=e[6],n},(t,e)=>t.messageId===e.messageId&&Pn(t.components,e.components));oo.displayName="ThreadPrimitive.Unstable_MessageById";var Uu=({children:t})=>{let e=P(Oe(r=>r.thread.messages.map(o=>o.id)));return W(()=>e.length===0?null:e.map((r,o)=>(0,st.jsx)(yn,{index:o,children:(0,st.jsx)(je,{getItemState:i=>i.thread.message({index:o}).getState(),children:i=>t({get message(){return i()}})})},r)),[e,t])},Li=t=>{let e=v(4),{components:r,children:o}=t;if(r){let s;return e[0]!==r?(s=(0,st.jsx)(Uu,{children:()=>(0,st.jsx)(kn,{components:r})}),e[0]=r,e[1]=s):s=e[1],s}let i;return e[2]!==o?(i=(0,st.jsx)(Uu,{children:o}),e[2]=o,e[3]=i):i=e[3],i};Li.displayName="ThreadPrimitive.Messages";var $i=oe(Li,(t,e)=>t.children||e.children?t.children===e.children:Pn(t.components,e.components));function Vg(t){return t.message.role}function Fg(t){return t.message.composer.isEditing}var Vi=t=>{let e=t.message.metadata;if(!(!e||typeof e!="object"))return e.custom?.quote};var wr=require("react/jsx-runtime");var ju=class extends Error{constructor(e,r=`Component "${e}" is not in the generative-ui allowlist.`){super(r);g(this,"componentName");this.name="GenerativeUIRenderError",this.componentName=e}},Ug=t=>typeof t=="object"&&t!==null,zu=t=>t==null?[]:Array.isArray(t)?t:[t],Hu=(t,e,r,o)=>{if(t==null)return null;if(typeof t=="string")return t;if(!Ug(t)||!("component"in t)||typeof t.component!="string")return typeof process<"u",null;let{component:i,props:s,children:n,key:a}=t,c=e[i];if(!c){if(r)return(0,wr.jsx)(r,{component:i,props:s},a??o);throw new ju(i)}return Rs(c,{...s??{},key:a??o},...zu(n).map((l,u)=>Hu(l,e,r,`${o}/${u}`)))},io=t=>{let e=v(11),{spec:r,components:o,Fallback:i}=t,s=r?.root,n;e[0]!==s?(n=zu(s),e[0]=s,e[1]=n):n=e[1];let a=n,c;if(e[2]!==i||e[3]!==o||e[4]!==a){let u;e[6]!==i||e[7]!==o?(u=(m,d)=>Hu(m,o,i,`${d}`),e[6]=i,e[7]=o,e[8]=u):u=e[8],c=a.map(u),e[2]=i,e[3]=o,e[4]=a,e[5]=c}else c=e[5];let l;return e[9]!==c?(l=(0,wr.jsx)(wr.Fragment,{children:c}),e[9]=c,e[10]=l):l=e[10],l};io.displayName="GenerativeUIRender";var Fi=t=>{let e=v(4),{components:r,spec:o,Fallback:i}=t,s=P(jg),n=o??s;if(!n)return null;let a;return e[0]!==i||e[1]!==r||e[2]!==n?(a=(0,wr.jsx)(io,{spec:n,components:r,Fallback:i}),e[0]=i,e[1]=r,e[2]=n,e[3]=a):a=e[3],a};Fi.displayName="MessagePrimitive.GenerativeUI";function jg(t){let e=t.part;return e?.type==="generative-ui"?e.spec:void 0}var z=require("react/jsx-runtime"),Mn=t=>{let e=-1;return{startGroup:r=>{e===-1&&(e=r)},endGroup:(r,o)=>{e!==-1&&(o.push({type:t,startIndex:e,endIndex:r}),e=-1)},finalize:(r,o)=>{e!==-1&&o.push({type:t,startIndex:e,endIndex:r})}}},zg=(t,e,r)=>{let o=[];if(e){let i=Mn("chainOfThoughtGroup");for(let s=0;s<t.length;s++){let n=t[s];n==="tool-call"||n==="reasoning"?i.startGroup(s):(i.endGroup(s-1,o),o.push({type:"single",index:s}))}i.finalize(t.length-1,o)}else{let i=Mn("toolGroup"),s=Mn("reasoningGroup");for(let n=0;n<t.length;n++){let a=t[n];a==="tool-call"?(s.endGroup(n-1,o),i.startGroup(n)):a==="reasoning"?(i.endGroup(n-1,o),s.startGroup(n)):(i.endGroup(n-1,o),s.endGroup(n-1,o),o.push({type:"single",index:n}))}i.finalize(t.length-1,o),s.finalize(t.length-1,o)}if(r){let i=new Set;for(let s of o){if(s.type==="single")continue;let n=r[s.startIndex];n!==void 0&&!i.has(n)&&(i.add(n),s.idKey=`id:${n}`)}}return o},Hg=t=>{let e=v(10),r=P(Oe(av)),o=P(Oe(lv)),i;e:{if(r.length===0){let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=[],e[0]=a):a=e[0];let c;e[1]!==o?(c={ranges:a,partIds:o},e[1]=o,e[2]=c):c=e[2],i=c;break e}let s;e[3]!==r||e[4]!==o||e[5]!==t?(s=zg(r,t,o),e[3]=r,e[4]=o,e[5]=t,e[6]=s):s=e[6];let n;e[7]!==o||e[8]!==s?(n={ranges:s,partIds:o},e[7]=o,e[8]=s,e[9]=n):n=e[9],i=n}return i},qg=t=>{let e=v(9),r,o;e[0]!==t?({Fallback:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;e[3]!==r||e[4]!==o.toolName?(i=a=>a.tools.toolUIs[o.toolName]?.[0]?.render??r,e[3]=r,e[4]=o.toolName,e[5]=i):i=e[5];let s=P(i);if(!s)return null;let n;return e[6]!==s||e[7]!==o?(n=(0,z.jsx)(s,{...o}),e[6]=s,e[7]=o,e[8]=n):n=e[8],n},Dn=(t,e,r)=>{let o=t.renderers[e]?.[0];return o||(t.fallbacks[0]??r)},Gg=t=>{let e=v(9),r,o;e[0]!==t?({Fallback:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;e[3]!==r||e[4]!==o.name?(i=a=>Dn(a.dataRenderers,o.name,r),e[3]=r,e[4]=o.name,e[5]=i):i=e[5];let s=P(i);if(!s)return null;let n;return e[6]!==s||e[7]!==o?(n=(0,z.jsx)(s,{...o}),e[6]=s,e[7]=o,e[8]=n):n=e[8],n},Xe={Text:()=>null,Reasoning:()=>null,Source:()=>null,Image:()=>null,File:()=>null,Unstable_Audio:()=>null,ToolGroup:({children:t})=>t,ReasoningGroup:({children:t})=>t},On=t=>{let e=v(41),{components:r}=t,o;e[0]!==r?(o=r===void 0?{}:r,e[0]=r,e[1]=o):o=e[1];let{Text:i,Reasoning:s,Image:n,Source:a,File:c,Unstable_Audio:l,tools:u,data:m,generativeUI:d}=o,p=i===void 0?Xe.Text:i,h=s===void 0?Xe.Reasoning:s,f=n===void 0?Xe.Image:n,b=a===void 0?Xe.Source:a,y=c===void 0?Xe.File:c,w=l===void 0?Xe.Unstable_Audio:l,S;e[2]!==u?(S=u===void 0?{}:u,e[2]=u,e[3]=S):S=e[3];let _=S,T=V(),E=P(uv),C=E.type;if(C==="tool-call"){let x=T.part.addToolResult,R=T.part.resumeToolCall,D=T.part.respondToToolApproval;if("Override"in _){let k;return e[4]!==x||e[5]!==E||e[6]!==D||e[7]!==R||e[8]!==_.Override?(k=(0,z.jsx)(_.Override,{...E,addResult:x,resume:R,respondToApproval:D}),e[4]=x,e[5]=E,e[6]=D,e[7]=R,e[8]=_.Override,e[9]=k):k=e[9],k}let B=_.by_name?.[E.toolName]??_.Fallback,M;return e[10]!==B||e[11]!==x||e[12]!==E||e[13]!==D||e[14]!==R?(M=(0,z.jsx)(qg,{...E,Fallback:B,addResult:x,resume:R,respondToApproval:D}),e[10]=B,e[11]=x,e[12]=E,e[13]=D,e[14]=R,e[15]=M):M=e[15],M}if(E.status?.type==="requires-action")throw new Error("Encountered unexpected requires-action status");switch(C){case"text":{let x;return e[16]!==p||e[17]!==E?(x=(0,z.jsx)(p,{...E}),e[16]=p,e[17]=E,e[18]=x):x=e[18],x}case"reasoning":{let x;return e[19]!==h||e[20]!==E?(x=(0,z.jsx)(h,{...E}),e[19]=h,e[20]=E,e[21]=x):x=e[21],x}case"source":{let x;return e[22]!==b||e[23]!==E?(x=(0,z.jsx)(b,{...E}),e[22]=b,e[23]=E,e[24]=x):x=e[24],x}case"image":{let x;return e[25]!==f||e[26]!==E?(x=(0,z.jsx)(f,{...E}),e[25]=f,e[26]=E,e[27]=x):x=e[27],x}case"file":{let x;return e[28]!==y||e[29]!==E?(x=(0,z.jsx)(y,{...E}),e[28]=y,e[29]=E,e[30]=x):x=e[30],x}case"audio":{let x;return e[31]!==w||e[32]!==E?(x=(0,z.jsx)(w,{...E}),e[31]=w,e[32]=E,e[33]=x):x=e[33],x}case"data":{let x=m?.by_name?.[E.name]??m?.Fallback,R;return e[34]!==x||e[35]!==E?(R=(0,z.jsx)(Gg,{...E,Fallback:x}),e[34]=x,e[35]=E,e[36]=R):R=e[36],R}case"generative-ui":{if(!d?.components)return typeof process<"u",null;let x=E,R;return e[37]!==d.Fallback||e[38]!==d.components||e[39]!==x.spec?(R=(0,z.jsx)(io,{spec:x.spec,components:d.components,Fallback:d.Fallback}),e[37]=d.Fallback,e[38]=d.components,e[39]=x.spec,e[40]=R):R=e[40],R}default:return console.warn(`Unknown message part type: ${C}`),null}},Ot=oe(t=>{let e=v(5),{index:r,components:o}=t,i;e[0]!==o?(i=(0,z.jsx)(On,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,z.jsx)(Wt,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},(t,e)=>t.index===e.index&&t.components?.Text===e.components?.Text&&t.components?.Reasoning===e.components?.Reasoning&&t.components?.Source===e.components?.Source&&t.components?.Image===e.components?.Image&&t.components?.File===e.components?.File&&t.components?.Unstable_Audio===e.components?.Unstable_Audio&&t.components?.tools===e.components?.tools&&t.components?.data===e.components?.data&&t.components?.generativeUI===e.components?.generativeUI&&t.components?.ToolGroup===e.components?.ToolGroup&&t.components?.ReasoningGroup===e.components?.ReasoningGroup);Ot.displayName="MessagePrimitive.PartByIndex";var Kg=t=>{let e=v(6),{status:r,component:o}=t,i=r.type==="running",s;e[0]!==o||e[1]!==r?(s=(0,z.jsx)(o,{type:"text",text:"",status:r}),e[0]=o,e[1]=r,e[2]=s):s=e[2];let n;return e[3]!==i||e[4]!==s?(n=(0,z.jsx)(Jt,{text:"",isRunning:i,children:s}),e[3]=i,e[4]=s,e[5]=n):n=e[5],n},Qg=Object.freeze({type:"complete"}),Wg=Object.freeze({type:"running"}),Jg=t=>{let e=v(6),{components:r}=t,o=P(dv);if(r?.Empty){let n;return e[0]!==r.Empty||e[1]!==o?(n=(0,z.jsx)(r.Empty,{status:o}),e[0]=r.Empty,e[1]=o,e[2]=n):n=e[2],n}if(o.type!=="running")return null;let i=r?.Text??Xe.Text,s;return e[3]!==o||e[4]!==i?(s=(0,z.jsx)(Kg,{status:o,component:i}),e[3]=o,e[4]=i,e[5]=s):s=e[5],s},qu=oe(Jg,(t,e)=>t.components?.Empty===e.components?.Empty&&t.components?.Text===e.components?.Text),Yg=t=>{let e=v(4),{components:r,enabled:o}=t,i;if(e[0]!==o?(i=n=>{if(!o||n.message.parts.length===0)return!1;let a=n.message.parts[n.message.parts.length-1];return a?.type!=="text"&&a?.type!=="reasoning"},e[0]=o,e[1]=i):i=e[1],!P(i))return null;let s;return e[2]!==r?(s=(0,z.jsx)(qu,{components:r}),e[2]=r,e[3]=s):s=e[3],s},Xg=oe(Yg,(t,e)=>t.enabled===e.enabled&&t.components?.Empty===e.components?.Empty&&t.components?.Text===e.components?.Text),Zg=t=>{let e=v(4),{Quote:r}=t,o=P(Vi);if(!o)return null;let i;return e[0]!==r||e[1]!==o.messageId||e[2]!==o.text?(i=(0,z.jsx)(r,{text:o.text,messageId:o.messageId}),e[0]=r,e[1]=o.messageId,e[2]=o.text,e[3]=i):i=e[3],i},ev=oe(Zg);function Gu(t,e){let r=t.toolUIs[e.toolName]?.[0]?.render??null;return r||(mu(e.mcp?.app?.resourceUri)&&t.mcpApp?t.mcpApp.render:null)}var Ku=()=>{let t=v(6),e=V(),r=P(mv),o=P(pv);if(!o||r.type!=="tool-call")return null;let i;return t[0]!==o||t[1]!==e.part.addToolResult||t[2]!==e.part.respondToToolApproval||t[3]!==e.part.resumeToolCall||t[4]!==r?(i=(0,z.jsx)(o,{...r,addResult:e.part.addToolResult,resume:e.part.resumeToolCall,respondToApproval:e.part.respondToToolApproval}),t[0]=o,t[1]=e.part.addToolResult,t[2]=e.part.respondToToolApproval,t[3]=e.part.resumeToolCall,t[4]=r,t[5]=i):i=t[5],i},Qu=()=>{let t=v(3),e=P(hv),r=P(fv);if(!r||e.type!=="data")return null;let o=e,i;return t[0]!==r||t[1]!==o?(i=(0,z.jsx)(r,{...o}),t[0]=r,t[1]=o,t[2]=i):i=t[2],i},tv=()=>{let t=v(2),e=P(gv);if(e==="tool-call"){let r;return t[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,z.jsx)(Ku,{}),t[0]=r):r=t[0],r}if(e==="data"){let r;return t[1]===Symbol.for("react.memo_cache_sentinel")?(r=(0,z.jsx)(Qu,{}),t[1]=r):r=t[1],r}return null},rv=Object.freeze({type:"text",text:"",status:Wg}),ov=({children:t})=>{let e=V(),r=P(o=>o.dataRenderers);return(0,z.jsx)(je,{getItemState:o=>o.part.getState(),children:o=>t({get part(){let i=o();if(i.type==="tool-call"){let s=Gu(e.tools.getState(),i)!==null,n=e.part;return{...i,toolUI:s?(0,z.jsx)(Ku,{}):null,addResult:n.addToolResult,resume:n.resumeToolCall,respondToApproval:n.respondToToolApproval}}if(i.type==="data"){let s=Dn(r,i.name,void 0)!==void 0;return{...i,dataRendererUI:s?(0,z.jsx)(Qu,{}):null}}return i}})})},Bn=t=>{let e=v(5),{index:r,children:o}=t,i;e[0]!==o?(i=(0,z.jsx)(ov,{children:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,z.jsx)(Wt,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},iv=t=>{let e=v(9),{children:r}=t,o=P(vv),i=P(bv),s=o===0&&i;if(o===0){if(!s)return null;let a;e[0]!==r?(a=r({part:rv}),e[0]=r,e[1]=a):a=e[1];let c;return e[2]!==a?(c=(0,z.jsx)(Jt,{text:"",isRunning:!0,children:a}),e[2]=a,e[3]=c):c=e[3],c}let n;if(e[4]!==r||e[5]!==o){let a;e[7]!==r?(a=(c,l)=>(0,z.jsx)(Bn,{index:l,children:u=>r(u)??(0,z.jsx)(tv,{})},l),e[7]=r,e[8]=a):a=e[8],n=(0,z.jsx)(z.Fragment,{children:Array.from({length:o},a)}),e[4]=r,e[5]=o,e[6]=n}else n=e[6];return n},so=t=>{let e=v(5),{components:r,unstable_showEmptyOnNonTextEnd:o,children:i}=t,s=o===void 0?!0:o;if(i){let a;return e[0]!==i?(a=(0,z.jsx)(iv,{children:i}),e[0]=i,e[1]=a):a=e[1],a}let n;return e[2]!==r||e[3]!==s?(n=(0,z.jsx)(sv,{components:r,unstable_showEmptyOnNonTextEnd:s}),e[2]=r,e[3]=s,e[4]=n):n=e[4],n};so.displayName="MessagePrimitive.Parts";var sv=t=>{let e=v(15),{components:r,unstable_showEmptyOnNonTextEnd:o}=t,i=P(wv),s=!!r?.ChainOfThought,{ranges:n,partIds:a}=Hg(s),c;e:{if(i===0){let h;e[0]!==r?(h=(0,z.jsx)(qu,{components:r}),e[0]=r,e[1]=h):h=e[1],c=h;break e}let p;if(e[2]!==r||e[3]!==n||e[4]!==a){let h=new Set,f=b=>{let y=a[b];return y!==void 0&&!h.has(y)?(h.add(y),`part-id:${y}`):`part-${b}`};p=n.map(b=>{if(b.type==="single")return(0,z.jsx)(Ot,{index:b.index,components:r},b.index);if(b.type==="chainOfThoughtGroup"){let y=r?.ChainOfThought;return y?(0,z.jsx)(Jl,{startIndex:b.startIndex,endIndex:b.endIndex,children:(0,z.jsx)(y,{})},`chainOfThought-${b.idKey??b.startIndex}`):null}else if(b.type==="toolGroup"){let y=r?.ToolGroup??Xe.ToolGroup;return(0,z.jsx)(y,{startIndex:b.startIndex,endIndex:b.endIndex,children:Array.from({length:b.endIndex-b.startIndex+1},(w,S)=>{let _=b.startIndex+S;return(0,z.jsx)(Ot,{index:_,components:r},f(_))})},`tool-${b.idKey??b.startIndex}`)}else{let y=r?.ReasoningGroup??Xe.ReasoningGroup;return(0,z.jsx)(y,{startIndex:b.startIndex,endIndex:b.endIndex,children:Array.from({length:b.endIndex-b.startIndex+1},(w,S)=>{let _=b.startIndex+S;return(0,z.jsx)(Ot,{index:_,components:r},`part-${_}`)})},`reasoning-${b.startIndex}`)}}),e[2]=r,e[3]=n,e[4]=a,e[5]=p}else p=e[5];c=p}let l=c,u;e[6]!==r?(u=r?.Quote&&(0,z.jsx)(ev,{Quote:r.Quote}),e[6]=r,e[7]=u):u=e[7];let m;e[8]!==r||e[9]!==o?(m=(0,z.jsx)(Xg,{components:r,enabled:o}),e[8]=r,e[9]=o,e[10]=m):m=e[10];let d;return e[11]!==l||e[12]!==u||e[13]!==m?(d=(0,z.jsxs)(z.Fragment,{children:[u,l,m]}),e[11]=l,e[12]=u,e[13]=m,e[14]=d):d=e[14],d};function nv(t){return t.type}function av(t){return t.message.parts.map(nv)}function cv(t){return t.type==="tool-call"?t.toolCallId:void 0}function lv(t){return t.message.parts.map(cv)}function uv(t){return t.part}function dv(t){return t.message.status??Qg}function mv(t){return t.part}function pv(t){return t.part.type==="tool-call"?Gu(t.tools,t.part):null}function hv(t){return t.part}function fv(t){return t.part.type==="data"?Dn(t.dataRenderers,t.part.name,void 0)??null:null}function gv(t){return t.part.type}function vv(t){return t.message.parts.length}function bv(t){return(t.message.status?.type??"complete")==="running"}function wv(t){return t.message.parts.length}var Yu=Symbol.for("@assistant-ui/groupBy.memoKey");var Wu=t=>{let e=t.nextChildIdx++;return t.nodeKey===""?String(e):`${t.nodeKey}.${e}`},Ju=(t,e)=>{if(!(e===void 0||t.claimed.has(e)))return t.claimed.add(e),`id:${e}`},Xu=(t,e)=>{let r={key:"",nodeKey:"",indices:[],children:[],nextChildIdx:0,claimed:new Set},o=[r],i=()=>{let s=o.pop(),n=o[o.length-1];n.children.push({type:"group",key:s.key,nodeKey:s.nodeKey,idKey:Ju(n,e?.[s.indices[0]]),indices:s.indices,children:s.children})};for(let s=0;s<t.length;s++){let n=t[s],a=0;for(;a<o.length-1&&a<n.length&&o[a+1].key===n[a];)a++;for(;o.length-1>a;)i();for(;o.length-1<n.length;){let l=o[o.length-1];o.push({key:n[o.length-1],nodeKey:Wu(l),indices:[],children:[],nextChildIdx:0,claimed:new Set})}let c=o[o.length-1];c.children.push({type:"part",index:s,nodeKey:Wu(c),idKey:Ju(c,e?.[s])});for(let l=1;l<o.length;l++)o[l].indices.push(s)}for(;o.length>1;)i();return r.children};var nt=require("react/jsx-runtime"),xv=(t,e,r)=>{if(!r)return!1;switch(t){case"never":return!1;case"always":return!0;case"empty":return e.length===0;case"no-text":{let o=e[e.length-1];return o===void 0||o.type!=="text"&&o.type!=="reasoning"}}},Zu=()=>{throw new Error("MessagePrimitive.GroupedParts: rendered `children` under a leaf part. `children` is only meaningful for `group-\u2026` cases \u2014 add a matching case for the part type or return `null` to skip it.")},ed=(t,e,r)=>{if(t.type==="part")return(0,nt.jsx)(Bn,{index:t.index,children:({part:n})=>r({part:n,children:(0,nt.jsx)(Zu,{})})},t.idKey?`part-${t.idKey}`:`part-${t.index}`);let{status:o,counts:i}=Kl(e,t.indices),s={type:t.key,status:o,counts:i,indices:t.indices};return(0,nt.jsx)(Es,{children:r({part:s,children:(0,nt.jsx)(nt.Fragment,{children:t.children.map(n=>ed(n,e,r))})})},t.idKey??t.nodeKey)},Ui=({groupBy:t,indicator:e="no-text",children:r})=>{let o=P(Oe(c=>c.message.parts)),i=P(c=>c.tools.toolUIs),s=P(c=>e==="never"?!1:c.message.status?.type==="running"),n=t[Yu]??t,a=W(()=>{let c={toolUIs:i};return Xu(o.map(l=>t(l,c)??[]),o.map(l=>l.type==="tool-call"?l.toolCallId:void 0))},[o,n,i]);return(0,nt.jsxs)(nt.Fragment,{children:[a.map(c=>ed(c,o,r)),xv(e,o,s)&&r({part:{type:"indicator"},children:(0,nt.jsx)(Zu,{})})]})};Ui.displayName="MessagePrimitive.GroupedParts";var ji=require("react/jsx-runtime"),yv=t=>{let e=v(5),{children:r}=t,o=P(Vi);if(!o)return null;let i;e[0]!==r||e[1]!==o?(i=r(o),e[0]=r,e[1]=o,e[2]=i):i=e[2];let s;return e[3]!==i?(s=(0,ji.jsx)(ji.Fragment,{children:i}),e[3]=i,e[4]=s):s=e[4],s},zi=oe(yv);zi.displayName="MessagePrimitive.Quote";var _t=require("react/jsx-runtime"),rd=(t,e)=>{switch(e.type){case"image":return t?.Image??t?.Attachment;case"document":return t?.Document??t?.Attachment;case"file":return t?.File??t?.Attachment;default:return t?.Attachment}},_v=t=>{let e=v(5),{components:r}=t,o=P(Sv);if(!o)return null;let i=o,s;e[0]!==r||e[1]!==i?(s=rd(r,i),e[0]=r,e[1]=i,e[2]=s):s=e[2];let n=s;if(!n)return null;let a;return e[3]!==n?(a=(0,_t.jsx)(n,{}),e[3]=n,e[4]=a):a=e[4],a},no=oe(t=>{let e=v(5),{index:r,components:o}=t,i;e[0]!==o?(i=(0,_t.jsx)(_v,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,_t.jsx)(wn,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},(t,e)=>t.index===e.index&&t.components?.Image===e.components?.Image&&t.components?.Document===e.components?.Document&&t.components?.File===e.components?.File&&t.components?.Attachment===e.components?.Attachment);no.displayName="MessagePrimitive.AttachmentByIndex";var td=({children:t})=>{let e=P(Oe(r=>r.message.role!=="user"?[]:(r.message.attachments??[]).map(o=>o.id)));return W(()=>e.map((r,o)=>(0,_t.jsx)(wn,{index:o,children:(0,_t.jsx)(je,{getItemState:i=>i.message.attachment({index:o}).getState(),children:i=>t({get attachment(){return i()}})})},r)),[e,t])},ao=t=>{let e=v(4),{components:r,children:o}=t;if(r){let s;return e[0]!==r?(s=(0,_t.jsx)(td,{children:n=>{let{attachment:a}=n,c=rd(r,a);return c?(0,_t.jsx)(c,{}):null}}),e[0]=r,e[1]=s):s=e[1],s}let i;return e[2]!==o?(i=(0,_t.jsx)(td,{children:o}),e[2]=o,e[3]=i):i=e[3],i};ao.displayName="MessagePrimitive.Attachments";function Sv(t){return t.attachment}var St=require("react/jsx-runtime"),id=(t,e)=>{switch(e.type){case"image":return t?.Image??t?.Attachment;case"document":return t?.Document??t?.Attachment;case"file":return t?.File??t?.Attachment;default:return t?.Attachment}},Tv=t=>{let e=v(5),{components:r}=t,o=P(Cv);if(!o)return null;let i;e[0]!==o||e[1]!==r?(i=id(r,o),e[0]=o,e[1]=r,e[2]=i):i=e[2];let s=i;if(!s)return null;let n;return e[3]!==s?(n=(0,St.jsx)(s,{}),e[3]=s,e[4]=n):n=e[4],n},co=oe(t=>{let e=v(5),{index:r,components:o}=t,i;e[0]!==o?(i=(0,St.jsx)(Tv,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,St.jsx)(xn,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},(t,e)=>t.index===e.index&&t.components?.Image===e.components?.Image&&t.components?.Document===e.components?.Document&&t.components?.File===e.components?.File&&t.components?.Attachment===e.components?.Attachment);co.displayName="ComposerPrimitive.AttachmentByIndex";var od=({children:t})=>{let e=P(Oe(r=>r.composer.attachments.map(o=>o.id)));return W(()=>e.map((r,o)=>(0,St.jsx)(xn,{index:o,children:(0,St.jsx)(je,{getItemState:i=>i.composer.attachment({index:o}).getState(),children:i=>t({get attachment(){return i()}})})},r)),[e,t])},lo=t=>{let e=v(4),{components:r,children:o}=t;if(r){let s;return e[0]!==r?(s=(0,St.jsx)(od,{children:n=>{let{attachment:a}=n,c=id(r,a);return c?(0,St.jsx)(c,{}):null}}),e[0]=r,e[1]=s):s=e[1],s}let i;return e[2]!==o?(i=(0,St.jsx)(od,{children:o}),e[2]=o,e[3]=i):i=e[3],i};lo.displayName="ComposerPrimitive.Attachments";function Cv(t){return t.attachment}var Nn=require("react/jsx-runtime"),Iv=({children:t})=>{let e=P(Oe(r=>r.composer.queue.map(o=>o.id)));return W(()=>e.map((r,o)=>(0,Nn.jsx)(Zl,{index:o,children:(0,Nn.jsx)(je,{getItemState:i=>i.composer.queueItem({index:o}).getState(),children:i=>t({get queueItem(){return i()}})})},r)),[e,t])},uo=oe(Iv);uo.displayName="ComposerPrimitive.Queue";var Xt=t=>{let{children:e}=t;return P(Ev)?e:null};Xt.displayName="MessagePartPrimitive.InProgress";function Ev(t){return t.part.status.type==="running"}var Tt=require("react/jsx-runtime"),nd=t=>{let e=v(2),{components:r}=t,o=r.Suggestion,i;return e[0]!==o?(i=(0,Tt.jsx)(o,{}),e[0]=o,e[1]=i):i=e[1],i},mo=oe(t=>{let e=v(5),{index:r,components:o}=t,i;e[0]!==o?(i=(0,Tt.jsx)(nd,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,Tt.jsx)(_n,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},(t,e)=>t.index===e.index&&t.components.Suggestion===e.components.Suggestion);mo.displayName="ThreadPrimitive.SuggestionByIndex";var sd=({children:t})=>{let e=P(r=>r.suggestions.suggestions.length);return W(()=>e===0?null:Array.from({length:e},(r,o)=>(0,Tt.jsx)(_n,{index:o,children:(0,Tt.jsx)(je,{getItemState:i=>i.suggestions.suggestion({index:o}).getState(),children:i=>t({get suggestion(){return i()}})})},o)),[e,t])},Hi=t=>{let e=v(4),{components:r,children:o}=t;if(r){let s;return e[0]!==r?(s=(0,Tt.jsx)(sd,{children:()=>(0,Tt.jsx)(nd,{components:r})}),e[0]=r,e[1]=s):s=e[1],s}let i;return e[2]!==o?(i=(0,Tt.jsx)(sd,{children:o}),e[2]=o,e[3]=i):i=e[3],i};Hi.displayName="ThreadPrimitive.Suggestions";var qi=oe(Hi,(t,e)=>t.children||e.children?t.children===e.children:t.components.Suggestion===e.components.Suggestion);var Rv=t=>{let e=v(3),r;return e[0]!==t.dictation||e[1]!==t.editing?(r=o=>{if(t.editing===!0&&!o.composer.isEditing||t.editing===!1&&o.composer.isEditing)return!1;let i=o.composer.dictation!=null;return!(t.dictation===!0&&!i||t.dictation===!1&&i)},e[0]=t.dictation,e[1]=t.editing,e[2]=r):r=e[2],P(r)},po=t=>{let e=v(3),r,o;return e[0]!==t?({children:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]),Rv(o)?r:null};po.displayName="ComposerPrimitive.If";var ad=t=>!t.composer.canSend||t.thread.isRunning&&!t.thread.capabilities.queue,cd=t=>!t.composer.canCancel;var ld=(t,e)=>t.thread.isDisabled||e&&t.thread.isRunning&&!t.thread.capabilities.queue,ud=t=>{if(t.message.status?.type!=="incomplete"||t.message.status.reason!=="error")return;let e=t.message.status.error;return typeof e=="string"?e:typeof e=="object"&&e!==null&&"message"in e&&typeof e.message=="string"?e.message:e??"An error occurred"};var Ln=()=>{let t=v(5),e=V(),r=P(ad),o;t[0]!==e?(o=n=>{e.composer.send(n)},t[0]=e,t[1]=o):o=t[1];let i=o,s;return t[2]!==r||t[3]!==i?(s={send:i,disabled:r},t[2]=r,t[3]=i,t[4]=s):s=t[4],s};var $n=()=>{let t=v(5),e=V(),r=P(cd),o;t[0]!==e?(o=()=>{e.composer.cancel()},t[0]=e,t[1]=o):o=t[1];let i=o,s;return t[2]!==i||t[3]!==r?(s={cancel:i,disabled:r},t[2]=i,t[3]=r,t[4]=s):s=t[4],s};var Vn=()=>{let t=v(5),e=V(),r=P(Av),o;t[0]!==e?(o=()=>{e.composer.startDictation()},t[0]=e,t[1]=o):o=t[1];let i=o,s;return t[2]!==r||t[3]!==i?(s={startDictation:i,disabled:r},t[2]=r,t[3]=i,t[4]=s):s=t[4],s};function Av(t){return t.composer.dictation!=null||!t.thread.capabilities.dictation||!t.composer.isEditing}var Fn=()=>{let t=v(5),e=V(),r=P(Pv),o;t[0]!==e?(o=n=>e.composer.addAttachment(n),t[0]=e,t[1]=o):o=t[1];let i=o,s;return t[2]!==i||t[3]!==r?(s={addAttachment:i,disabled:r},t[2]=i,t[3]=r,t[4]=s):s=t[4],s};function Pv(t){return!t.composer.isEditing}var Un=t=>{let e=v(10),{prompt:r,send:o,clearComposer:i}=t,s=i===void 0?!0:i,n=V(),a=o??!1,c;e[0]!==a?(c=p=>ld(p,a),e[0]=a,e[1]=c):c=e[1];let l=P(c),u;e[2]!==n||e[3]!==s||e[4]!==r||e[5]!==a?(u=()=>{if(a){let{isRunning:p,capabilities:h}=n.thread.getState();if(p&&!h.queue)return;n.thread.append({content:[{type:"text",text:r}],runConfig:n.composer.getState().runConfig}),s&&!p&&n.composer.setText("")}else if(s)n.composer.setText(r);else{let p=n.composer.getState().text;n.composer.setText([p,r].filter(kv).join(" "))}},e[2]=n,e[3]=s,e[4]=r,e[5]=a,e[6]=u):u=e[6];let m=u,d;return e[7]!==l||e[8]!==m?(d={trigger:m,disabled:l},e[7]=l,e[8]=m,e[9]=d):d=e[9],d};function kv(t){return t.trim()}var jn=()=>P(ud);function dd(t,e){function r(o){let i=pe(t);if(!o?.optional&&!i)throw new Error(`This component must be used within ${e}.`);return i}return r}function Gi(t,e){function r(i){let s=t(i);return s?s[e]:null}function o(i){let s=!1,n;typeof i=="function"?n=i:i&&typeof i=="object"&&(s=!!i.optional,n=i.selector);let a=r({optional:s});return a?n?a(n):a():null}return{[e]:o,[`${e}Store`]:r}}var zn=ne(null),Mv=dd(zn,"ThreadPrimitive.Viewport"),{useThreadViewport:qe,useThreadViewportStore:Ge}=Gi(Mv,"useThreadViewport");var xr,Hn=()=>{if(xr)return xr;let t=()=>({apis:new Map,nextId:0,listeners:new Set});if(typeof window>"u")return xr=t(),xr;let e=window.__ASSISTANT_UI_DEVTOOLS_HOOK__;if(e)return xr=e,e;let r=t();return window.__ASSISTANT_UI_DEVTOOLS_HOOK__=r,xr=r,r},Ki=t=>{we(Hn().listeners,t,"DevTools")};var Bt,md=(Bt=class{static register(e){let r=Hn();for(let a of r.apis.values())if(a.api===e)return()=>{};let o=r.nextId++,i={api:e,logs:[]},s=e.on?.("*",a=>{let c=r.apis.get(o);c&&(c.logs.push({time:new Date,event:a.event,data:a.payload}),c.logs.length>Bt.MAX_EVENT_LOGS_PER_API&&(c.logs=c.logs.slice(-Bt.MAX_EVENT_LOGS_PER_API)),Ki(o))}),n=e.subscribe?.(()=>{Ki(o)});return r.apis.set(o,i),Ki(o),()=>{let a=Hn();a.apis.get(o)&&(s?.(),n?.(),a.apis.delete(o),Ki(o))}}},g(Bt,"MAX_EVENT_LOGS_PER_API",200),Bt);var pd=t=>{let e,r=new Set,o=(l,u)=>{let m=typeof l=="function"?l(e):l;if(!Object.is(m,e)){let d=e;e=u??(typeof m!="object"||m===null)?m:Object.assign({},e,m),r.forEach(p=>p(e,d))}},i=()=>e,a={setState:o,getState:i,getInitialState:()=>c,subscribe:l=>(r.add(l),()=>r.delete(l))},c=e=t(o,i,a);return a},hd=(t=>t?pd(t):pd);var ho=_e(require("react"),1);var Dv=t=>t;function Ov(t,e=Dv){let r=ho.default.useSyncExternalStore(t.subscribe,ho.default.useCallback(()=>e(t.getState()),[t,e]),ho.default.useCallback(()=>e(t.getInitialState()),[t,e]));return ho.default.useDebugValue(r),r}var fd=t=>{let e=hd(t),r=o=>Ov(e,o);return Object.assign(r,e),r},gd=(t=>t?fd(t):fd);var vd=t=>{let e=new Map,r=()=>{let o=0;for(let i of e.values())o+=i;t(o)};return{register:()=>{let o=Symbol();return e.set(o,0),{setHeight:i=>{e.get(o)!==i&&(e.set(o,i),r())},unregister:()=>{e.delete(o),r()}}}}},bd=(t={})=>{let e=new Set,r=vd(n=>{s.setState({height:{...s.getState().height,viewport:n}})}),o=vd(n=>{s.setState({height:{...s.getState().height,inset:n}})}),i=(n,a)=>(s.setState({element:{...s.getState().element,[n]:a}}),()=>{s.getState().element[n]===a&&s.setState({element:{...s.getState().element,[n]:null}})}),s=gd(()=>({isAtBottom:!0,scrollToBottom:({behavior:n="auto"}={})=>{we(e,()=>({behavior:n}),"Thread viewport")},onScrollToBottom:n=>(e.add(n),()=>{e.delete(n)}),turnAnchor:t.turnAnchor??"bottom",topAnchorMessageClamp:{tallerThan:t.topAnchorMessageClamp?.tallerThan??"10em",visibleHeight:t.topAnchorMessageClamp?.visibleHeight??"6em"},height:{viewport:0,inset:0},element:{viewport:null,anchor:null,target:null},targetConfig:null,topAnchorTurn:null,registerViewport:r.register,registerContentInset:o.register,registerViewportElement:n=>i("viewport",n),registerAnchorElement:n=>i("anchor",n),registerAnchorTargetElement:(n,a)=>(s.setState({element:{...s.getState().element,target:n},targetConfig:n&&a?a:null}),()=>{s.getState().element.target===n&&s.setState({element:{...s.getState().element,target:null},targetConfig:null})}),setTopAnchorTurn:n=>{s.setState({topAnchorTurn:n})}}));return s};var Zt=t=>t;var wd=require("react/jsx-runtime"),Bv=t=>{let e=v(11),r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r={optional:!0},e[0]=r):r=e[0];let o=Ge(r),i;e[1]!==t?(i=()=>bd(t),e[1]=t,e[2]=i):i=e[2];let[s]=j(i),n,a;e[3]!==o||e[4]!==s?(n=()=>o?.getState().onScrollToBottom(u=>{s.getState().scrollToBottom(u)}),a=[o,s],e[3]=o,e[4]=s,e[5]=n,e[6]=a):(n=e[5],a=e[6]),N(n,a);let c,l;return e[7]!==o||e[8]!==s?(c=()=>{if(o)return s.subscribe(u=>{o.getState().isAtBottom!==u.isAtBottom&&Zt(o).setState({isAtBottom:u.isAtBottom})})},l=[s,o],e[7]=o,e[8]=s,e[9]=c,e[10]=l):(c=e[9],l=e[10]),N(c,l),s},yr=t=>{let e=v(7),{children:r,options:o}=t,i;e[0]!==o?(i=o===void 0?{}:o,e[0]=o,e[1]=i):i=e[1];let s=Bv(i),n;e[2]!==s?(n=()=>({useThreadViewport:s}),e[2]=s,e[3]=n):n=e[3];let[a]=j(n),c;return e[4]!==r||e[5]!==a?(c=(0,wd.jsx)(zn.Provider,{value:a,children:r}),e[4]=r,e[5]=a,e[6]=c):c=e[6],c};var fo=require("react/jsx-runtime"),Nv=()=>{let t=v(3),e=V(),r,o;return t[0]!==e?(r=()=>{typeof process>"u"},o=[e],t[0]=e,t[1]=r,t[2]=o):(r=t[1],o=t[2]),N(r,o),null},Lv=t=>{let e=v(8),{children:r,aui:o,config:i,runtime:s}=t,n=o??null,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=(0,fo.jsx)(Nv,{}),e[0]=a):a=e[0];let c;e[1]!==r?(c=(0,fo.jsx)(yr,{children:r}),e[1]=r,e[2]=c):c=e[2];let l;return e[3]!==i||e[4]!==s||e[5]!==n||e[6]!==c?(l=(0,fo.jsxs)(Ys,{runtime:s,aui:n,config:i,children:[a,c]}),e[3]=i,e[4]=s,e[5]=n,e[6]=c,e[7]=l):l=e[7],l},qn=oe(Lv);var $v=/:([\w-]{1,64})\[([^\]\n]{1,1024})\](?:\{name=([^}\n]{1,1024})\})?/gu,go={serialize(t){let e=t.id!==t.label?`{name=${t.id}}`:"";return`:${t.type}[${t.label}]${e}`},parse(t){let e=[],r=0;for(let o of t.matchAll($v)){o.index>r&&e.push({kind:"text",text:t.slice(r,o.index)});let i=o[2];e.push({kind:"mention",type:o[1],label:i,id:o[3]??i}),r=o.index+o[0].length}return r<t.length&&e.push({kind:"text",text:t.slice(r)}),e}};var Id=_e(require("react"),1),Ed=_e(require("react-dom"),1);var Nt={};hs(Nt,{Root:()=>Uv,Slot:()=>Uv,Slottable:()=>jv,createSlot:()=>vo,createSlottable:()=>Jn});var ye=_e(require("react"),1);var xd=_e(require("react"),1),Vv=Object.defineProperty,Kn=(t,e)=>Vv(t,"name",{value:e,configurable:!0});function Gn(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}Kn(Gn,"setRef");function Qn(...t){return e=>{let r=!1,o=t.map(i=>{let s=Gn(i,e);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let i=0;i<o.length;i++){let s=o[i];typeof s=="function"?s():Gn(t[i],null)}}}}Kn(Qn,"composeRefs");function Pe(...t){return xd.useCallback(Qn(...t),t)}Kn(Pe,"useComposedRefs");var Fv=Object.defineProperty,at=(t,e)=>Fv(t,"name",{value:e,configurable:!0});function vo(t){let e=ye.forwardRef((r,o)=>{let{children:i,...s}=r,n=null,a=!1,c=[];Wn(i)&&typeof Qi=="function"&&(i=Qi(i._payload)),ye.Children.forEach(i,d=>{if(Td(d)){a=!0;let p=d,h="child"in p.props?p.props.child:p.props.children;Wn(h)&&typeof Qi=="function"&&(h=Qi(h._payload)),n=zv(p,h),c.push(n?.props?.children)}else c.push(d)}),n?n=ye.cloneElement(n,void 0,c):!a&&ye.Children.count(i)===1&&ye.isValidElement(i)&&(n=i);let l=n?Sd(n):void 0,u=Pe(o,l);if(!n){if(i||i===0)throw new Error(a?Gv(t):qv(t));return i}let m=_d(s,n.props??{});return n.type!==ye.Fragment&&(m.ref=o?u:l),ye.cloneElement(n,m)});return e.displayName=`${t}.Slot`,e}at(vo,"createSlot");var Uv=vo("Slot"),yd=Symbol.for("radix.slottable");function Jn(t){let e=at(r=>"child"in r?r.children(r.child):r.children,"Slottable");return e.displayName=`${t}.Slottable`,e.__radixId=yd,e}at(Jn,"createSlottable");var jv=Jn("Slottable"),zv=at((t,e)=>{if("child"in t.props){let r=t.props.child;return ye.isValidElement(r)?ye.cloneElement(r,void 0,t.props.children(r.props.children)):null}return ye.isValidElement(e)?e:null},"getSlottableElementFromSlottable");function _d(t,e){let r={...e};for(let o in e){let i=t[o],s=e[o];/^on[A-Z]/.test(o)?i&&s?r[o]=(...a)=>{let c=s(...a);return i(...a),c}:i&&(r[o]=i):o==="style"?r[o]={...i,...s}:o==="className"&&(r[o]=[i,s].filter(Boolean).join(" "))}return{...t,...r}}at(_d,"mergeProps");function Sd(t){let e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?t.props.ref:t.props.ref||t.ref)}at(Sd,"getElementRef");function Td(t){return ye.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===yd}at(Td,"isSlottable");var Hv=Symbol.for("react.lazy");function Wn(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===Hv&&"_payload"in t&&Cd(t._payload)}at(Wn,"isLazyComponent");function Cd(t){return typeof t=="object"&&t!==null&&"then"in t}at(Cd,"isPromiseLike");var qv=at(t=>`${t} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Gv=at(t=>`${t} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Qi=ye[" use ".trim().toString()];var Rd=require("react/jsx-runtime"),Kv=Object.defineProperty,Qv=(t,e)=>Kv(t,"name",{value:e,configurable:!0}),Wv=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Yn=Wv.reduce((t,e)=>{let r=vo(`Primitive.${e}`),o=Id.forwardRef((i,s)=>{let{asChild:n,...a}=i,c=n?r:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,Rd.jsx)(c,{...a,ref:s})});return o.displayName=`Primitive.${e}`,{...t,[e]:o}},{});function Xn(t,e){t&&Ed.flushSync(()=>t.dispatchEvent(e))}Qv(Xn,"dispatchDiscreteCustomEvent");var Jv=Object.defineProperty,_r=(t,e)=>Jv(t,"name",{value:e,configurable:!0}),Ad=!!(typeof window<"u"&&window.document&&window.document.createElement);function ee(t,e,{checkForDefaultPrevented:r=!0}={}){return _r(function(i){if(t?.(i),r===!1||!i||!i.defaultPrevented)return e?.(i)},"handleEvent")}_r(ee,"composeEventHandlers");function Yv(t){if(!Ad)throw new Error("Cannot access window outside of the DOM");return t?.ownerDocument?.defaultView??window}_r(Yv,"getOwnerWindow");function Zn(t){if(!Ad)throw new Error("Cannot access document outside of the DOM");return t?.ownerDocument??document}_r(Zn,"getOwnerDocument");function Pd(t,e=!1){let{activeElement:r}=Zn(t);if(!r?.nodeName)return null;if(kd(r)&&r.contentDocument)return Pd(r.contentDocument.body,e);if(e){let o=r.getAttribute("aria-activedescendant");if(o){let i=Zn(r).getElementById(o);if(i)return i}}return r}_r(Pd,"getActiveElement");function kd(t){return t.tagName==="IFRAME"}_r(kd,"isFrame");var Sr=_e(require("react"),1),Xv=Object.defineProperty,Zv=(t,e)=>Xv(t,"name",{value:e,configurable:!0});function pt(t){let e=Sr.useRef(t);return Sr.useEffect(()=>{e.current=t}),Sr.useMemo(()=>((...r)=>e.current?.(...r)),[])}Zv(pt,"useCallbackRef");var Dd=_e(require("react"),1);var eb=Object.defineProperty,Md=(t,e)=>eb(t,"name",{value:e,configurable:!0});function Wi(t,e=globalThis?.document){let r=pt(t);Dd.useEffect(()=>{let o=Md(i=>{i.key==="Escape"&&r(i)},"handleKeyDown");return e.addEventListener("keydown",o,{capture:!0}),()=>e.removeEventListener("keydown",o,{capture:!0})},[r,e])}Md(Wi,"useEscapeKeydown");var Ji=Yn;Ji.dispatchDiscreteCustomEvent=Xn;Ji.Root=Yn;var Od=Object.defineProperty,Tr=(t,e)=>{let r={};for(var o in t)Od(r,o,{get:t[o],enumerable:!0});return e||Od(r,Symbol.toStringTag,{value:"Module"}),r};var Yi=require("react/jsx-runtime");var tb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"];function Bd(t,e){return As(t,void 0,e!==void 0?e:t.props.children)}function Cr(t,e,r){return(0,Yi.jsx)(Nt.Root,{...r,children:Bd(t,e)})}function rb(t){let e=G((r,o)=>{let i=v(17),s,n,a,c;i[0]!==r?({render:a,asChild:s,children:n,...c}=r,i[0]=r,i[1]=s,i[2]=n,i[3]=a,i[4]=c):(s=i[1],n=i[2],a=i[3],c=i[4]);let l=t;if(a&&gt(a)){let d=c,p;i[5]!==n||i[6]!==a?(p=Bd(a,n),i[5]=n,i[6]=a,i[7]=p):p=i[7];let h;return i[8]!==o||i[9]!==d||i[10]!==p?(h=(0,Yi.jsx)(l,{...d,asChild:!0,ref:o,children:p}),i[8]=o,i[9]=d,i[10]=p,i[11]=h):h=i[11],h}let u=c,m;return i[12]!==s||i[13]!==n||i[14]!==o||i[15]!==u?(m=(0,Yi.jsx)(l,{...u,asChild:s,ref:o,children:n}),i[12]=s,i[13]=n,i[14]=o,i[15]=u,i[16]=m):m=i[16],m});return e.displayName=typeof t=="string"?t:t.displayName??t.name??"Component",e}function ob(t){let e=Ji[t],r=rb(e);return r.displayName=`Primitive.${t}`,r}var J=tb.reduce((t,e)=>(t[e]=ob(e),t),{});var Nd=require("react/jsx-runtime");var $e=(t,e,r=[])=>{let o=G((i,s)=>{let n=v(6),a={},c={};Object.keys(i).forEach(f=>{r.includes(f)?a[f]=i[f]:c[f]=i[f]});let l=e(a)??void 0,u=J,m="button",d=c.disabled||!l,p=ee(c.onClick,l),h;return n[0]!==s||n[1]!==c||n[2]!==u.button||n[3]!==d||n[4]!==p?(h=(0,Nd.jsx)(u.button,{type:m,...c,ref:s,disabled:d,onClick:p}),n[0]=s,n[1]=c,n[2]=u.button,n[3]=d,n[4]=p,n[5]=h):h=n[5],h});return o.displayName=t,o};var Ld=require("react/jsx-runtime"),$d=ne(null),Ir=()=>pe($d),Vd=t=>{let e=v(8),{children:r}=t,o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=new Map,e[0]=o):o=e[0];let i=$(o),s;e[1]===Symbol.for("react.memo_cache_sentinel")?(s=[],e[1]=s):s=e[1];let n=$(s),a;e[2]===Symbol.for("react.memo_cache_sentinel")?(a=()=>{let b=Array.from(i.current.entries());b.sort(ib),n.current=b.map(sb)},e[2]=a):a=e[2];let c=a,l;e[3]===Symbol.for("react.memo_cache_sentinel")?(l=(b,y)=>{let w=y?.priority??0;return i.current.set(b,w),c(),()=>{i.current.delete(b),c()}},e[3]=l):l=e[3];let u=l,m;e[4]===Symbol.for("react.memo_cache_sentinel")?(m=()=>n.current,e[4]=m):m=e[4];let d=m,p;e[5]===Symbol.for("react.memo_cache_sentinel")?(p={register:u,getPlugins:d},e[5]=p):p=e[5];let h=p,f;return e[6]!==r?(f=(0,Ld.jsx)($d.Provider,{value:h,children:r}),e[6]=r,e[7]=f):f=e[7],f};function ib(t,e){return e[1]-t[1]}function sb(t){let[e]=t;return e}var Er=require("react/jsx-runtime"),ea=ne(null),Hd=ne(null),bo=()=>{let t=pe(ea);if(!t)throw new Error("useTriggerPopoverRootContext must be used within ComposerPrimitive.TriggerPopoverRoot");return t},Xi=()=>pe(ea),qd=()=>{let t=pe(Hd);if(!t)throw new Error("useTriggerPopoverAriaPublish must be used within ComposerPrimitive.TriggerPopoverRoot");return t},Gd=()=>{let t=bo();return De(t.subscribe,t.getTriggers,t.getTriggers)},nb=new Map,Kd=()=>()=>{},Fd=()=>nb,Qd=()=>{let t=Xi();return De(t?t.subscribe:Kd,t?t.getTriggers:Fd,t?t.getTriggers:Fd)},Ud=()=>null,Wd=()=>{let t=Xi();return De(t?t.subscribeAria:Kd,t?t.getActiveAria:Ud,t?t.getActiveAria:Ud)};function jd(){let t=v(4),e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=new Set,t[0]=e):e=t[0];let r=$(e),o;t[1]===Symbol.for("react.memo_cache_sentinel")?(o=()=>{for(let c of r.current)c()},t[1]=o):o=t[1];let i=o,s;t[2]===Symbol.for("react.memo_cache_sentinel")?(s=c=>(r.current.add(c),()=>{r.current.delete(c)}),t[2]=s):s=t[2];let n=s,a;return t[3]===Symbol.for("react.memo_cache_sentinel")?(a={notify:i,subscribe:n},t[3]=a):a=t[3],a}var zd=t=>{let e=v(21),{children:r}=t,o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=new Map,e[0]=o):o=e[0];let i=$(o),s;e[1]===Symbol.for("react.memo_cache_sentinel")?(s=new Set,e[1]=s):s=e[1];let n=$(s),{notify:a,subscribe:c}=jd(),l;e[2]!==a?(l=k=>{let{char:A}=k;if(i.current.has(A))return ab;let L=new Map(i.current);L.set(A,k),i.current=L,a();for(let H of n.current)H.added(k);return()=>{let H=new Map(i.current);H.delete(A),i.current=H,a();for(let te of n.current)te.removed(A)}},e[2]=a,e[3]=l):l=e[3];let u=l,m;e[4]===Symbol.for("react.memo_cache_sentinel")?(m=()=>i.current,e[4]=m):m=e[4];let d=m,p;e[5]===Symbol.for("react.memo_cache_sentinel")?(p=k=>(n.current.add(k),()=>{n.current.delete(k)}),e[5]=p):p=e[5];let h=p,f=$(null),b=$(null),{notify:y,subscribe:w}=jd(),S;e[6]!==y?(S=(k,A)=>{if(A===null){if(b.current!==k)return;f.current=null,b.current=null,y();return}let L=f.current;b.current===k&&L!==null&&L.popoverId===A.popoverId&&L.highlightedItemId===A.highlightedItemId||(f.current=A,b.current=k,y())},e[6]=y,e[7]=S):S=e[7];let _=S,T;e[8]===Symbol.for("react.memo_cache_sentinel")?(T=()=>f.current,e[8]=T):T=e[8];let E=T,C;e[9]!==u||e[10]!==c||e[11]!==w?(C={register:u,getTriggers:d,subscribe:c,subscribeLifecycle:h,getActiveAria:E,subscribeAria:w},e[9]=u,e[10]=c,e[11]=w,e[12]=C):C=e[12];let x=C,R;e[13]!==_?(R={setActiveAria:_},e[13]=_,e[14]=R):R=e[14];let D=R,B;e[15]!==D||e[16]!==r?(B=(0,Er.jsx)(Hd.Provider,{value:D,children:r}),e[15]=D,e[16]=r,e[17]=B):B=e[17];let M;return e[18]!==B||e[19]!==x?(M=(0,Er.jsx)(ea.Provider,{value:x,children:B}),e[18]=B,e[19]=x,e[20]=M):M=e[20],M},ta=t=>{let e=v(4),{children:r}=t;if(Ir()){let i;return e[0]!==r?(i=(0,Er.jsx)(zd,{children:r}),e[0]=r,e[1]=i):i=e[1],i}let o;return e[2]!==r?(o=(0,Er.jsx)(Vd,{children:(0,Er.jsx)(zd,{children:r})}),e[2]=r,e[3]=o):o=e[3],o};ta.displayName="ComposerPrimitive.TriggerPopoverRoot";function ab(){}var Jd=/\s/u;function cb(t,e,r,o){if(o===null)return null;let{query:i,offset:s,endOffset:n}=o;return s<0||s+e.length>r||!t.startsWith(e,s)||n<s+e.length||n>t.length?null:{query:i,offset:s,endOffset:n}}function Yd(t,e,r,o){if(o)return cb(t,e,r,o(t,e,r));let i=t.slice(0,r);for(let s=i.length-1;s>=0;s--){let n=i[s];if(Jd.test(n))return null;if(i.startsWith(e,s)){if(s>0&&!Jd.test(i[s-1]))continue;return{query:i.slice(s+e.length),offset:s,endOffset:r}}}return null}var lb=t=>{let e=v(8),{text:r,triggerChar:o,matcher:i}=t,[s,n]=j(r.length),a=Math.min(s,r.length),c;e[0]!==i||e[1]!==a||e[2]!==r||e[3]!==o?(c=Yd(r,o,a,i),e[0]=i,e[1]=a,e[2]=r,e[3]=o,e[4]=c):c=e[4];let l=c,u=l?.query??"",m;return e[5]!==u||e[6]!==l?(m={trigger:l,query:u,setCursorPosition:n},e[5]=u,e[6]=l,e[7]=m):m=e[7],m},Xd=U(lb);function ub(t){return"type"in t}var db=t=>{let e=v(22),{navigableList:r,isSearchMode:o,activeCategoryId:i,query:s,popoverId:n,open:a,selectItem:c,selectCategory:l,goBack:u,close:m}=t,[d,p]=j(0),h;e[0]!==i||e[1]!==o||e[2]!==r?(h={navigableList:r,isSearchMode:o,activeCategoryId:i},e[0]=i,e[1]=o,e[2]=r,e[3]=h):h=e[3];let[f,b]=j(h);(f.navigableList!==r||f.isSearchMode!==o||f.activeCategoryId!==i)&&(b({navigableList:r,isSearchMode:o,activeCategoryId:i}),p(0));let y;e[4]!==d||e[5]!==r.length?(y=x=>{x<0||x>=r.length||x!==d&&p(x)},e[4]=d,e[5]=r.length,e[6]=y):y=e[6];let w=ve(y),S;e[7]!==i||e[8]!==m||e[9]!==u||e[10]!==d||e[11]!==r||e[12]!==a||e[13]!==s||e[14]!==l||e[15]!==c?(S=x=>{if(!a)return!1;switch(x.key){case"ArrowDown":return x.preventDefault(),p(R=>{let D=r.length;return D===0?0:R<D-1?R+1:0}),!0;case"ArrowUp":return x.preventDefault(),p(R=>{let D=r.length;return D===0?0:R>0?R-1:D-1}),!0;case"Enter":case"Tab":{if(x.shiftKey)return!1;x.preventDefault();let R=r[d];return R&&(ub(R)?c(R):l(R.id)),!0}case"Escape":return x.preventDefault(),m(),!0;case"Backspace":return i&&s===""?(x.preventDefault(),u(),!0):!1;default:return!1}},e[7]=i,e[8]=m,e[9]=u,e[10]=d,e[11]=r,e[12]=a,e[13]=s,e[14]=l,e[15]=c,e[16]=S):S=e[16];let _=ve(S),T=r[d],E=a&&T?`${n}-option-${T.id}`:void 0,C;return e[17]!==_||e[18]!==w||e[19]!==d||e[20]!==E?(C={highlightedIndex:d,highlightedItemId:E,highlightIndex:w,handleKeyDown:_},e[17]=_,e[18]=w,e[19]=d,e[20]=E,e[21]=C):C=e[21],C},Zd=U(db);function ra(t,e){return e?t.id.toLowerCase().includes(e)||t.label.toLowerCase().includes(e)||(t.description?.toLowerCase().includes(e)??!1):!0}var mb=t=>{let e=v(35),{adapter:r,query:o,open:i}=t,[s,n]=j(null),[a,c]=j(i);a!==i&&(c(i),i||n(null));let l;e:{if(!i||!r){let k;e[0]===Symbol.for("react.memo_cache_sentinel")?(k=[],e[0]=k):k=e[0],l=k;break e}let M;e[1]!==r?(M=r.categories(),e[1]=r,e[2]=M):M=e[2],l=M}let u=l,m=i?s:null,d;e:{if(!m||!r){let k;e[3]===Symbol.for("react.memo_cache_sentinel")?(k=[],e[3]=k):k=e[3],d=k;break e}let M;e[4]!==r||e[5]!==m?(M=r.categoryItems(m),e[4]=r,e[5]=m,e[6]=M):M=e[6],d=M}let p=d,h;e:{if(!i||!r||m){h=null;break e}if(!o&&u.length>0){h=null;break e}if(r.search){let k;e[7]!==r||e[8]!==o?(k=r.search(o),e[7]=r,e[8]=o,e[9]=k):k=e[9],h=k;break e}let M;if(e[10]!==r||e[11]!==u||e[12]!==o){M=[];let k=o.toLowerCase();for(let A of u)for(let L of r.categoryItems(A.id))ra(L,k)&&M.push(L);e[10]=r,e[11]=u,e[12]=o,e[13]=M}else M=e[13];h=M}let f=h,b=f!==null,y;e:{if(b){let k;e[14]===Symbol.for("react.memo_cache_sentinel")?(k=[],e[14]=k):k=e[14],y=k;break e}if(!o){y=u;break e}let M;if(e[15]!==u||e[16]!==o){let k=o.toLowerCase();M=u.filter(A=>A.label.toLowerCase().includes(k)),e[15]=u,e[16]=o,e[17]=M}else M=e[17];y=M}let w=y,S;e:{if(b){let k;e[18]!==f?(k=f??[],e[18]=f,e[19]=k):k=e[19],S=k;break e}if(!o){S=p;break e}let M;if(e[20]!==p||e[21]!==o){let k=o.toLowerCase();M=p.filter(A=>ra(A,k)),e[20]=p,e[21]=o,e[22]=M}else M=e[22];S=M}let _=S,T;e:{if(b){let M;e[23]!==f?(M=f??[],e[23]=f,e[24]=M):M=e[24],T=M;break e}if(m){T=_;break e}T=w}let E=T,C;e[25]===Symbol.for("react.memo_cache_sentinel")?(C=M=>{n(M)},e[25]=C):C=e[25];let x=ve(C),R;e[26]===Symbol.for("react.memo_cache_sentinel")?(R=()=>{n(null)},e[26]=R):R=e[26];let D=ve(R),B;return e[27]!==m||e[28]!==w||e[29]!==_||e[30]!==D||e[31]!==b||e[32]!==E||e[33]!==x?(B={categories:w,items:_,isSearchMode:b,activeCategoryId:m,navigableList:E,selectCategory:x,goBack:D},e[27]=m,e[28]=w,e[29]=_,e[30]=D,e[31]=b,e[32]=E,e[33]=x,e[34]=B):B=e[34],B},em=U(mb);var pb=t=>{let e=v(15),{behavior:r,trigger:o,aui:i,setCursorPosition:s,onSelected:n}=t,a=$(null),c;e[0]===Symbol.for("react.memo_cache_sentinel")?(c=f=>(a.current=f,()=>{a.current===f&&(a.current=null)}),e[0]=c):c=e[0];let l=ve(c),u;e[1]!==i||e[2]!==r||e[3]!==n||e[4]!==s||e[5]!==o?(u=f=>{if(!o||!r)return;if(a.current?.(f)){n();return}let b=i.composer.getState().text,y=b.slice(0,o.offset),w=b.slice(o.endOffset),S=()=>{let _=r.formatter.serialize(f);i.composer.setText(y+_+(w.startsWith(" ")?w:` ${w}`)),s(y.length+_.length+1)};r.kind==="directive"?(S(),r.onInserted?.(f)):(r.removeOnExecute?(i.composer.setText(y+(w.startsWith(" ")?w.slice(1):w)),s(y.length)):S(),r.onExecute(f)),n()},e[1]=i,e[2]=r,e[3]=n,e[4]=s,e[5]=o,e[6]=u):u=e[6];let m=ve(u),d;e[7]!==n||e[8]!==s||e[9]!==o?(d=()=>{n(),o&&s(o.offset)},e[7]=n,e[8]=s,e[9]=o,e[10]=d):d=e[10];let p=ve(d),h;return e[11]!==p||e[12]!==l||e[13]!==m?(h={selectItem:m,close:p,registerSelectItemOverride:l},e[11]=p,e[12]=l,e[13]=m,e[14]=h):h=e[14],h},tm=U(pb);var hb=t=>{let e=v(47),{adapter:r,text:o,triggerChar:i,matcher:s,behavior:n,aui:a,popoverId:c,isLoading:l}=t,u;e[0]!==s||e[1]!==o||e[2]!==i?(u=Xd({text:o,triggerChar:i,matcher:s}),e[0]=s,e[1]=o,e[2]=i,e[3]=u):u=e[3];let m=ce(u),d=m.trigger!==null&&r!==void 0&&n!==void 0,p;e[4]!==r||e[5]!==m.query||e[6]!==d?(p=em({adapter:r,query:m.query,open:d}),e[4]=r,e[5]=m.query,e[6]=d,e[7]=p):p=e[7];let h=ce(p),f;e[8]!==h?(f=()=>{h.goBack()},e[8]=h,e[9]=f):f=e[9];let b=ve(f),y;e[10]!==a||e[11]!==n||e[12]!==m.setCursorPosition||e[13]!==m.trigger||e[14]!==b||e[15]!==i?(y=tm({behavior:n,trigger:m.trigger,aui:a,triggerChar:i,setCursorPosition:m.setCursorPosition,onSelected:b}),e[10]=a,e[11]=n,e[12]=m.setCursorPosition,e[13]=m.trigger,e[14]=b,e[15]=i,e[16]=y):y=e[16];let w=ce(y),S;e[17]!==m.query||e[18]!==h.activeCategoryId||e[19]!==h.goBack||e[20]!==h.isSearchMode||e[21]!==h.navigableList||e[22]!==h.selectCategory||e[23]!==d||e[24]!==c||e[25]!==w.close||e[26]!==w.selectItem?(S=Zd({navigableList:h.navigableList,isSearchMode:h.isSearchMode,activeCategoryId:h.activeCategoryId,query:m.query,popoverId:c,open:d,selectItem:w.selectItem,selectCategory:h.selectCategory,goBack:h.goBack,close:w.close}),e[17]=m.query,e[18]=h.activeCategoryId,e[19]=h.goBack,e[20]=h.isSearchMode,e[21]=h.navigableList,e[22]=h.selectCategory,e[23]=d,e[24]=c,e[25]=w.close,e[26]=w.selectItem,e[27]=S):S=e[27];let _=ce(S),T;return e[28]!==m.query||e[29]!==m.setCursorPosition||e[30]!==l||e[31]!==_.handleKeyDown||e[32]!==_.highlightIndex||e[33]!==_.highlightedIndex||e[34]!==_.highlightedItemId||e[35]!==h.activeCategoryId||e[36]!==h.categories||e[37]!==h.goBack||e[38]!==h.isSearchMode||e[39]!==h.items||e[40]!==h.selectCategory||e[41]!==d||e[42]!==c||e[43]!==w.close||e[44]!==w.registerSelectItemOverride||e[45]!==w.selectItem?(T={open:d,query:m.query,activeCategoryId:h.activeCategoryId,categories:h.categories,items:h.items,highlightedIndex:_.highlightedIndex,isSearchMode:h.isSearchMode,isLoading:l,popoverId:c,highlightedItemId:_.highlightedItemId,selectCategory:h.selectCategory,goBack:h.goBack,selectItem:w.selectItem,close:w.close,highlightIndex:_.highlightIndex,handleKeyDown:_.handleKeyDown,setCursorPosition:m.setCursorPosition,registerSelectItemOverride:w.registerSelectItemOverride},e[28]=m.query,e[29]=m.setCursorPosition,e[30]=l,e[31]=_.handleKeyDown,e[32]=_.highlightIndex,e[33]=_.highlightedIndex,e[34]=_.highlightedItemId,e[35]=h.activeCategoryId,e[36]=h.categories,e[37]=h.goBack,e[38]=h.isSearchMode,e[39]=h.items,e[40]=h.selectCategory,e[41]=d,e[42]=c,e[43]=w.close,e[44]=w.registerSelectItemOverride,e[45]=w.selectItem,e[46]=T):T=e[46],T},rm=U(hb);var Zi=require("react/jsx-runtime");var oa=ne(null),ct=()=>{let t=pe(oa);if(!t)throw new Error("useTriggerPopoverScopeContext must be used within ComposerPrimitive.TriggerPopover");return t},ia=()=>pe(oa),om=ne(null),es=()=>{let t=pe(om);if(!t)throw new Error("TriggerPopover.Directive / TriggerPopover.Action must be rendered inside ComposerPrimitive.TriggerPopover");return t},sa=G((t,e)=>{let r=v(69),o,i,s,n,a,c,l;r[0]!==t?({char:s,matcher:a,adapter:o,isLoading:l,"aria-label":i,children:n,...c}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s,r[4]=n,r[5]=a,r[6]=c,r[7]=l):(o=r[1],i=r[2],s=r[3],n=r[4],a=r[5],c=r[6],l=r[7]);let u=l===void 0?!1:l,m=V(),d=P(fb),p=Cs(),h=$(a),f;r[8]!==a?(f=()=>{h.current=a},r[8]=a,r[9]=f):f=r[9],N(f);let b;r[10]===Symbol.for("react.memo_cache_sentinel")?(b=()=>(Rr,mp,pp)=>h.current(Rr,mp,pp),r[10]=b):b=r[10];let[y]=j(b),w=a!==void 0,S=$(null),[_,T]=j(null),E=$(0),C;r[11]!==s?(C=Rr=>(E.current=E.current+1,S.current=Rr,T(Rr),()=>{E.current=Math.max(0,E.current-1),S.current===Rr&&(S.current=null,T(null))}),r[11]=s,r[12]=C):C=r[12];let x=C,R;r[13]!==x?(R={register:x},r[13]=x,r[14]=R):R=r[14];let D=R,B=_??void 0,M;r[15]!==o||r[16]!==m||r[17]!==s||r[18]!==u||r[19]!==a||r[20]!==p||r[21]!==B||r[22]!==d?(M=rm({adapter:o,text:d,triggerChar:s,matcher:a,behavior:B,aui:m,popoverId:p,isLoading:u}),r[15]=o,r[16]=m,r[17]=s,r[18]=u,r[19]=a,r[20]=p,r[21]=B,r[22]=d,r[23]=M):M=r[23];let k=ce(M),A;r[24]!==k?(A=()=>k,r[24]=k,r[25]=A):A=r[25];let L=ve(A),H=bo(),te;r[26]!==_||r[27]!==s||r[28]!==L||r[29]!==w||r[30]!==y||r[31]!==H?(te=()=>H.register({char:s,...w?{matcher:y}:{},..._?{behavior:_}:{},resource:L()}),r[26]=_,r[27]=s,r[28]=L,r[29]=w,r[30]=y,r[31]=H,r[32]=te):te=r[32];let re;r[33]!==_||r[34]!==s||r[35]!==w||r[36]!==H?(re=[H,s,w,_],r[33]=_,r[34]=s,r[35]=w,r[36]=H,r[37]=re):re=r[37],N(te,re);let ae=Ir(),me;r[38]!==L||r[39]!==ae?(me=()=>{if(ae)return ae.register(L())},r[38]=L,r[39]=ae,r[40]=me):me=r[40];let be;r[41]!==ae?(be=[ae],r[41]=ae,r[42]=be):be=r[42],N(me,be);let O=_!==null&&k.open,F=qd(),Q,Z;r[43]!==F||r[44]!==s||r[45]!==O?(Q=()=>{if(O)return()=>{F.setActiveAria(s,null)}},Z=[F,s,O],r[43]=F,r[44]=s,r[45]=O,r[46]=Q,r[47]=Z):(Q=r[46],Z=r[47]),N(Q,Z);let K,Ve;r[48]!==F||r[49]!==s||r[50]!==O||r[51]!==p||r[52]!==k.highlightedItemId?(K=()=>{O&&F.setActiveAria(s,{popoverId:p,highlightedItemId:k.highlightedItemId})},Ve=[F,s,p,O,k.highlightedItemId],r[48]=F,r[49]=s,r[50]=O,r[51]=p,r[52]=k.highlightedItemId,r[53]=K,r[54]=Ve):(K=r[53],Ve=r[54]),N(K,Ve);let Fe;r[55]!==i||r[56]!==n||r[57]!==e||r[58]!==O||r[59]!==p||r[60]!==c||r[61]!==k.highlightedItemId?(Fe=O?(0,Zi.jsx)(J.div,{role:"listbox",id:p,"aria-label":i??"Suggestions","aria-activedescendant":k.highlightedItemId,"data-state":"open",...c,ref:e,children:n}):n,r[55]=i,r[56]=n,r[57]=e,r[58]=O,r[59]=p,r[60]=c,r[61]=k.highlightedItemId,r[62]=Fe):Fe=r[62];let er;r[63]!==k||r[64]!==Fe?(er=(0,Zi.jsx)(oa.Provider,{value:k,children:Fe}),r[63]=k,r[64]=Fe,r[65]=er):er=r[65];let To;return r[66]!==D||r[67]!==er?(To=(0,Zi.jsx)(om.Provider,{value:D,children:er}),r[66]=D,r[67]=er,r[68]=To):To=r[68],To});sa.displayName="ComposerPrimitive.TriggerPopover";function fb(t){return t.composer.text}var na=()=>{let t=v(2),{disabled:e,send:r}=Ln(),o;t[0]!==r?(o=()=>r(),t[0]=r,t[1]=o):o=t[1];let i=o;return e?null:i},im=$e("ComposerPrimitive.Send",na);var aa=ne(null),sm=()=>pe(aa);var ca=require("react/jsx-runtime");var nm="[contenteditable]:not([contenteditable='false'])",gb=`textarea:not(:disabled), ${nm}`,vb=["a","audio[controls]","button","details","embed","iframe","input","label","select","summary","textarea","video[controls]",nm,"[tabindex]"].join(", "),la=G((t,e)=>{let r=v(24),o,i,s,n;r[0]!==t?({onSubmit:s,onMouseDown:i,compact:o,...n}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s,r[4]=n):(o=r[1],i=r[2],s=r[3],n=r[4]);let a=na(),[c,l]=j(!1),u;r[5]===Symbol.for("react.memo_cache_sentinel")?(u={setMultiline:l},r[5]=u):u=r[5];let m=u,d;r[6]!==o?(d=C=>o?C.composer.attachments.length===0&&C.composer.quote==null&&C.composer.queue.length===0&&C.composer.dictation==null&&!C.composer.text.includes(`
`):!1,r[6]=o,r[7]=d):d=r[7];let p=P(d)&&!c,h;r[8]!==a?(h=C=>{C.preventDefault(),a&&a()},r[8]=a,r[9]=h):h=r[9];let f=h,b=bb,y=o?m:null,w=p?"":void 0,S;r[10]!==f||r[11]!==s?(S=ee(s,f),r[10]=f,r[11]=s,r[12]=S):S=r[12];let _;r[13]!==i?(_=ee(i,b),r[13]=i,r[14]=_):_=r[14];let T;r[15]!==e||r[16]!==n||r[17]!==w||r[18]!==S||r[19]!==_?(T=(0,ca.jsx)(J.form,{...n,"data-compact":w,ref:e,onSubmit:S,onMouseDown:_}),r[15]=e,r[16]=n,r[17]=w,r[18]=S,r[19]=_,r[20]=T):T=r[20];let E;return r[21]!==y||r[22]!==T?(E=(0,ca.jsx)(aa.Provider,{value:y,children:T}),r[21]=y,r[22]=T,r[23]=E):E=r[23],E});la.displayName="ComposerPrimitive.Root";function bb(t){if(t.button!==0)return;let e=t.target;if(!(e instanceof Element)||!t.currentTarget.contains(e))return;let r=e.closest(vb);if(r&&t.currentTarget.contains(r))return;let o=t.currentTarget.querySelector(gb);o&&(t.preventDefault(),o.focus())}var ts=t=>{let e=v(4),r=pt(t),o=qe(wb),i,s;e[0]!==r||e[1]!==o?(i=()=>o(r),s=[o,r],e[0]=r,e[1]=o,e[2]=i,e[3]=s):(i=e[2],s=e[3]),N(i,s)};function wb(t){return t.onScrollToBottom}var xb=()=>!1,yb=()=>{},rs=t=>{let e=v(4),r;e[0]!==t?(r=s=>{if(typeof window>"u"||t===null||!window.matchMedia)return yb;let n=window.matchMedia(t);return n.addEventListener("change",s),()=>n.removeEventListener("change",s)},e[0]=t,e[1]=r):r=e[1];let o=r,i;return e[2]!==t?(i=()=>typeof window>"u"||t===null||!window.matchMedia?!1:window.matchMedia(t).matches,e[2]=t,e[3]=i):i=e[3],De(o,i,xb)};function am(){return P(_b)}function _b(t){return t.composer.isEditing?t.composer.text:""}function cm(t){return!!P(Sb)||!!t}function Sb(t){return t.thread.isDisabled||t.composer.dictation?.inputDisabled}function lm(){let t=v(4),e=Wd();if(!e){let o;return t[0]===Symbol.for("react.memo_cache_sentinel")?(o={},t[0]=o):o=t[0],o}let r;return t[1]!==e.highlightedItemId||t[2]!==e.popoverId?(r={"aria-controls":e.popoverId,"aria-expanded":!0,"aria-haspopup":"listbox","aria-activedescendant":e.highlightedItemId},t[1]=e.highlightedItemId,t[2]=e.popoverId,t[3]=r):r=t[3],r}var _m=require("react/jsx-runtime");function os(){return os=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)({}).hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},os.apply(null,arguments)}function um(t,e){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(e.indexOf(o)!==-1)continue;r[o]=t[o]}return r}var lt=_e(require("react"));var pm=_e(require("react"));var dm=require("react"),mm=dm.useLayoutEffect;var hm=function(e){var r=pm.default.useRef(e);return mm(function(){r.current=e}),r};var ua=_e(require("react")),fm=function(e,r){if(typeof e=="function"){e(r);return}e.current=r},gm=function(e,r){var o=ua.default.useRef();return ua.default.useCallback(function(i){e.current=i,o.current&&fm(o.current,null),o.current=r,r&&fm(r,i)},[r])};var vm={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},Tb=function(e){Object.keys(vm).forEach(function(r){e.style.setProperty(r,vm[r],"important")})},bm=Tb,ke=null,wm=function(e,r){var o=e.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?o+r.borderSize:o-r.paddingSize};function Cb(t,e,r,o){r===void 0&&(r=1),o===void 0&&(o=1/0),ke||(ke=document.createElement("textarea"),ke.setAttribute("tabindex","-1"),ke.setAttribute("aria-hidden","true"),bm(ke)),ke.parentNode===null&&document.body.appendChild(ke);var i=t.paddingSize,s=t.borderSize,n=t.sizingStyle,a=n.boxSizing;Object.keys(n).forEach(function(d){var p=d;ke.style[p]=n[p]}),bm(ke),ke.value=e;var c=wm(ke,t);ke.value=e,c=wm(ke,t),ke.value="x";var l=ke.scrollHeight-i,u=l*r;a==="border-box"&&(u=u+i+s),c=Math.max(u,c);var m=l*o;return a==="border-box"&&(m=m+i+s),c=Math.min(m,c),[c,l]}var xm=function(){},Ib=function(e,r){return e.reduce(function(o,i){return o[i]=r[i],o},{})},Eb=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak","wordSpacing","scrollbarGutter"],Rb=!!document.documentElement.currentStyle,Ab=function(e){var r=window.getComputedStyle(e);if(r===null)return null;var o=Ib(Eb,r),i=o.boxSizing;if(i==="")return null;Rb&&i==="border-box"&&(o.width=parseFloat(o.width)+parseFloat(o.borderRightWidth)+parseFloat(o.borderLeftWidth)+parseFloat(o.paddingRight)+parseFloat(o.paddingLeft)+"px");var s=parseFloat(o.paddingBottom)+parseFloat(o.paddingTop),n=parseFloat(o.borderBottomWidth)+parseFloat(o.borderTopWidth);return{sizingStyle:o,paddingSize:s,borderSize:n}},Pb=Ab;function da(t,e,r){var o=hm(r);lt.useLayoutEffect(function(){var i=function(n){return o.current(n)};if(t)return t.addEventListener(e,i),function(){return t.removeEventListener(e,i)}},[])}var kb=function(e,r){da(document.body,"reset",function(o){e.current.form===o.target&&r(o)})},Mb=function(e){da(window,"resize",e)},Db=function(e){da(document.fonts,"loadingdone",e)},Ob=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],Bb=function(e,r){var o=e.cacheMeasurements,i=e.maxRows,s=e.minRows,n=e.onChange,a=n===void 0?xm:n,c=e.onHeightChange,l=c===void 0?xm:c,u=um(e,Ob),m=u.value!==void 0,d=lt.useRef(null),p=gm(d,r),h=lt.useRef(0),f=lt.useRef(),b=function(){var S=d.current,_=o&&f.current?f.current:Pb(S);if(_){f.current=_;var T=Cb(_,S.value||S.placeholder||"x",s,i),E=T[0],C=T[1];h.current!==E&&(h.current=E,S.style.setProperty("height",E+"px","important"),l(E,{rowHeight:C}))}},y=function(S){m||b(),a(S)};return lt.useLayoutEffect(b),kb(d,function(){if(!m){var w=d.current.value;requestAnimationFrame(function(){var S=d.current;S&&w!==S.value&&b()})}}),Mb(b),Db(b),lt.createElement("textarea",os({},u,{onChange:y,ref:p}))},ym=lt.forwardRef(Bb);var Nb="(pointer: coarse) and (not (any-pointer: fine))",ma=G(({autoFocus:t=!1,asChild:e,render:r,disabled:o,onChange:i,onKeyDown:s,onPaste:n,onSelect:a,submitOnEnter:c,submitMode:l,cancelOnEscape:u=!0,unstable_focusOnRunStart:m=!0,unstable_focusOnScrollToBottom:d=!0,unstable_focusOnThreadSwitched:p=!0,unstable_insertNewlineOnTouchEnter:h=!1,addAttachmentOnPaste:f=!0,onHeightChange:b,...y},w)=>{let S=V(),_=Ir(),T=sm(),E=l??(c===!1?"none":"enter"),C=rs(h?Nb:null),x=h&&C&&E==="enter"?"none":E,R=am(),D=cm(o),B=$(null),M=Pe(w,B),k=$(!1);Wi(O=>{if(!B.current?.contains(O.target)||O.isComposing)return;if(_){for(let Q of _.getPlugins())if(Q.handleKeyDown(O))return}if(!u)return;let F=S.composer;F.getState().canCancel&&(F.cancel(),O.preventDefault())});let A=O=>{if(!D&&!O.nativeEvent.isComposing){if(_){for(let F of _.getPlugins())if(F.handleKeyDown(O))return}if(O.key==="Enter"){let F=S.thread.getState(),Q=F.capabilities.queue;if(O.shiftKey&&(O.ctrlKey||O.metaKey)&&Q&&E!=="none"&&S.composer.getState().canSend){O.preventDefault(),S.composer.send({steer:!0});return}if(O.shiftKey||F.isRunning&&!Q)return;let Z=!1;x==="ctrlEnter"?Z=O.ctrlKey||O.metaKey:x==="enter"&&(Z=!0),Z&&(O.preventDefault(),B.current?.closest("form")?.requestSubmit())}}},L=async O=>{if(!f)return;let F=S.thread.getState().capabilities,Q=Array.from(O.clipboardData?.files||[]);F.attachments&&Q.length>0&&(O.preventDefault(),await Promise.all(Q.map(async Z=>{try{await S.composer.addAttachment(Z)}catch{}})))},H=(O,F)=>{if(b?.(O,F),!T)return;let Q=B.current;if(!Q||Q.value==="")return;let Z=getComputedStyle(Q),K=Z.boxSizing==="border-box"?O-parseFloat(Z.paddingTop)-parseFloat(Z.paddingBottom)-parseFloat(Z.borderTopWidth)-parseFloat(Z.borderBottomWidth):O;Math.round(K/F.rowHeight)>1&&T.setMultiline(!0)},te=t&&!D,re=Ie(()=>{let O=B.current;!O||!te||(O.focus({preventScroll:!0}),O.setSelectionRange(O.value.length,O.value.length))},[te]);N(()=>re(),[re]),ts(()=>{S.composer.getState().type==="thread"&&d&&re()}),N(()=>{if(!(S.composer.getState().type!=="thread"||!m))return S.on("thread.runStart",re)},[m,re,S]),N(()=>{if(!(S.composer.getState().type!=="thread"||!p))return S.on("threads.selectionChanged",re)},[p,re,S]),N(()=>{R===""&&T?.setMultiline(!1)},[R,T]);let ae=lm(),me={name:"input",value:R,...y,...ae,ref:M,disabled:D,onChange:ee(i,O=>{if(!S.composer.getState().isEditing)return;let F=O.nativeEvent.isComposing===!0;k.current&&!F&&(k.current=!1);let Q=F||k.current;if(lr(()=>{S.composer.setText(O.target.value)}),Q)return;let Z=O.target.selectionStart??O.target.value.length;if(_)for(let K of _.getPlugins())K.setCursorPosition(Z)}),onKeyDown:ee(s,A),onCompositionStart:ee(y.onCompositionStart,()=>{k.current=!0}),onCompositionEnd:ee(y.onCompositionEnd,O=>{if(k.current=!1,!S.composer.getState().isEditing)return;let F=O.target;lr(()=>{S.composer.setText(F.value)});let Q=F.selectionStart??F.value.length;if(_)for(let Z of _.getPlugins())Z.setCursorPosition(Q)}),onSelect:ee(a,O=>{if(k.current)return;let F=O.target,Q=F.selectionStart??F.value.length;if(_)for(let Z of _.getPlugins())Z.setCursorPosition(Q)}),onPaste:ee(n,L),...T?{onHeightChange:H}:b!==void 0?{onHeightChange:b}:{}};if(r&&gt(r))return Cr(r,y.children,me);let be=e?Nt.Root:ym;return(0,_m.jsx)(be,{...me})});ma.displayName="ComposerPrimitive.Input";var Lb=()=>{let{disabled:t,cancel:e}=$n();return t?null:e},Sm=$e("ComposerPrimitive.Cancel",Lb);var $b=t=>{let e=v(6),r;e[0]!==t?(r=t===void 0?{}:t,e[0]=t,e[1]=r):r=e[1];let{multiple:o}=r,i=o===void 0?!0:o,{disabled:s,addAttachment:n}=Fn(),a=V(),c;e[2]!==n||e[3]!==a.composer||e[4]!==i?(c=()=>{let u=document.createElement("input");u.type="file",u.multiple=i,u.hidden=!0;let m=a.composer.getState().attachmentAccept;m!=="*"&&(u.accept=m),document.body.appendChild(u),u.onchange=async d=>{let p=d.target.files;if(!p)return;let h=Array.from(p,async f=>{try{await n(f)}catch{}});document.body.removeChild(u),await Promise.all(h)},u.oncancel=()=>{(!u.files||u.files.length===0)&&document.body.removeChild(u)},u.click()},e[2]=n,e[3]=a.composer,e[4]=i,e[5]=c):c=e[5];let l=c;return s?null:l},Tm=$e("ComposerPrimitive.AddAttachment",$b,["multiple"]);var Cm=require("react/jsx-runtime");var pa=G(({disabled:t,asChild:e=!1,render:r,children:o,...i},s)=>{let[n,a]=j(!1),c=V(),l=Ie(f=>{if(!t&&f.dataTransfer.types.includes("Files")){if(f.preventDefault(),!c.thread.getState().capabilities.attachments){f.dataTransfer.dropEffect="none";return}a(!0)}},[t,c]),u=Ie(f=>{if(!t&&f.dataTransfer.types.includes("Files")){if(f.preventDefault(),!c.thread.getState().capabilities.attachments){f.dataTransfer.dropEffect="none";return}n||a(!0)}},[t,n,c]),m=Ie(f=>{if(t)return;f.preventDefault();let b=f.relatedTarget;b&&f.currentTarget.contains(b)||a(!1)},[t]),d=Ie(async f=>{if(t||(a(!1),!f.dataTransfer.types.includes("Files")))return;f.preventDefault();let b=Array.from(f.dataTransfer.files);!c.thread.getState().capabilities.attachments||b.length===0||await Promise.all(b.map(async y=>{try{await c.composer.addAttachment(y)}catch{}}))},[t,c]),p={...n?{"data-dragging":"true"}:null,...i,onDragEnterCapture:ee(i.onDragEnterCapture,l),onDragOverCapture:ee(i.onDragOverCapture,u),onDragLeaveCapture:ee(i.onDragLeaveCapture,m),onDropCapture:ee(i.onDropCapture,d),ref:s};if(r&&gt(r))return Cr(r,o,p);let h=e?Nt.Root:"div";return(0,Cm.jsx)(h,{...p,children:o})});pa.displayName="ComposerPrimitive.AttachmentDropzone";var Vb=()=>{let{disabled:t,startDictation:e}=Vn();return t?null:e},Im=$e("ComposerPrimitive.Dictate",Vb);var Fb=()=>{let t=v(2),e=V(),r=P(Ub),o;t[0]!==e.composer?(o=()=>{e.composer.stopDictation()},t[0]=e.composer,t[1]=o):o=t[1];let i=o;return r?i:null},Em=$e("ComposerPrimitive.StopDictation",Fb);function Ub(t){return t.composer.dictation!=null}var Rm=require("react/jsx-runtime"),ha=G((t,e)=>{let r=v(7),o,i;r[0]!==t?({children:o,...i}=t,r[0]=t,r[1]=o,r[2]=i):(o=r[1],i=r[2]);let s=P(jb);if(!s)return null;let n=o??s,a;return r[3]!==e||r[4]!==i||r[5]!==n?(a=(0,Rm.jsx)(J.span,{...i,ref:e,children:n}),r[3]=e,r[4]=i,r[5]=n,r[6]=a):a=r[6],a});ha.displayName="ComposerPrimitive.DictationTranscript";function jb(t){return t.composer.dictation?.transcript}var is=require("react/jsx-runtime");var fa=G((t,e)=>{let r=v(3);if(!P(zb))return null;let o;return r[0]!==e||r[1]!==t?(o=(0,is.jsx)(J.div,{...t,ref:e}),r[0]=e,r[1]=t,r[2]=o):o=r[2],o});fa.displayName="ComposerPrimitive.Quote";var ga=G((t,e)=>{let r=v(7),o,i;r[0]!==t?({children:o,...i}=t,r[0]=t,r[1]=o,r[2]=i):(o=r[1],i=r[2]);let s=P(Hb);if(!s)return null;let n=o??s,a;return r[3]!==e||r[4]!==i||r[5]!==n?(a=(0,is.jsx)(J.span,{...i,ref:e,children:n}),r[3]=e,r[4]=i,r[5]=n,r[6]=a):a=r[6],a});ga.displayName="ComposerPrimitive.QuoteText";var va=G((t,e)=>{let r=v(12),o,i;r[0]!==t?({onClick:o,...i}=t,r[0]=t,r[1]=o,r[2]=i):(o=r[1],i=r[2]);let s=V(),n;r[3]!==s?(n=()=>{s.composer.setQuote(void 0)},r[3]=s,r[4]=n):n=r[4];let a=n,c;r[5]!==a||r[6]!==o?(c=ee(o,a),r[5]=a,r[6]=o,r[7]=c):c=r[7];let l;return r[8]!==e||r[9]!==i||r[10]!==c?(l=(0,is.jsx)(J.button,{type:"button",...i,ref:e,onClick:c}),r[8]=e,r[9]=i,r[10]=c,r[11]=l):l=r[11],l});va.displayName="ComposerPrimitive.QuoteDismiss";function zb(t){return t.composer.quote}function Hb(t){return t.composer.quote?.text}var ba=require("react/jsx-runtime");var wa=G((t,e)=>{let r=v(12),o,i,s;r[0]!==t?({children:i,"aria-label":o,...s}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s):(o=r[1],i=r[2],s=r[3]);let{categories:n,activeCategoryId:a,isSearchMode:c,open:l}=ct();if(!l||a||c)return null;let u=o??"Categories",m;r[4]!==n||r[5]!==i?(m=i(n),r[4]=n,r[5]=i,r[6]=m):m=r[6];let d;return r[7]!==e||r[8]!==s||r[9]!==u||r[10]!==m?(d=(0,ba.jsx)(J.div,{role:"group","aria-label":u,...s,ref:e,children:m}),r[7]=e,r[8]=s,r[9]=u,r[10]=m,r[11]=d):d=r[11],d});wa.displayName="ComposerPrimitive.TriggerPopoverCategories";var xa=G((t,e)=>{let r=v(30),o,i,s,n;r[0]!==t?({categoryId:o,onClick:i,onMouseMove:s,...n}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s,r[4]=n):(o=r[1],i=r[2],s=r[3],n=r[4]);let{selectCategory:a,highlightIndex:c,categories:l,highlightedIndex:u,activeCategoryId:m,isSearchMode:d,popoverId:p}=ct(),h;r[5]!==o||r[6]!==a?(h=()=>{a(o)},r[5]=o,r[6]=a,r[7]=h):h=r[7];let f=h,b;if(r[8]!==l||r[9]!==o){let D;r[11]!==o?(D=B=>B.id===o,r[11]=o,r[12]=D):D=r[12],b=l.findIndex(D),r[8]=l,r[9]=o,r[10]=b}else b=r[10];let y=b,w=!m&&!d&&y===u,S;r[13]!==y||r[14]!==c?(S=()=>{c(y)},r[13]=y,r[14]=c,r[15]=S):S=r[15];let _=S,T=`${p}-option-${o}`,E=w?"":void 0,C;r[16]!==f||r[17]!==i?(C=ee(i,f),r[16]=f,r[17]=i,r[18]=C):C=r[18];let x;r[19]!==_||r[20]!==s?(x=ee(s,_),r[19]=_,r[20]=s,r[21]=x):x=r[21];let R;return r[22]!==e||r[23]!==w||r[24]!==n||r[25]!==T||r[26]!==E||r[27]!==C||r[28]!==x?(R=(0,ba.jsx)(J.button,{type:"button",role:"option",id:T,"aria-selected":w,"data-highlighted":E,...n,ref:e,onClick:C,onMouseMove:x}),r[22]=e,r[23]=w,r[24]=n,r[25]=T,r[26]=E,r[27]=C,r[28]=x,r[29]=R):R=r[29],R});xa.displayName="ComposerPrimitive.TriggerPopoverCategoryItem";var ya=require("react/jsx-runtime");var _a=G((t,e)=>{let r=v(12),o,i,s;r[0]!==t?({children:i,"aria-label":o,...s}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s):(o=r[1],i=r[2],s=r[3]);let{items:n,activeCategoryId:a,isSearchMode:c,open:l}=ct();if(!l||!a&&!c)return null;let u=o??"Items",m;r[4]!==i||r[5]!==n?(m=i(n),r[4]=i,r[5]=n,r[6]=m):m=r[6];let d;return r[7]!==e||r[8]!==s||r[9]!==u||r[10]!==m?(d=(0,ya.jsx)(J.div,{role:"group","aria-label":u,...s,ref:e,children:m}),r[7]=e,r[8]=s,r[9]=u,r[10]=m,r[11]=d):d=r[11],d});_a.displayName="ComposerPrimitive.TriggerPopoverItems";var Sa=G((t,e)=>{let r=v(30),o,i,s,n,a;r[0]!==t?({item:i,index:o,onClick:s,onMouseMove:n,...a}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s,r[4]=n,r[5]=a):(o=r[1],i=r[2],s=r[3],n=r[4],a=r[5]);let{selectItem:c,highlightIndex:l,items:u,highlightedIndex:m,activeCategoryId:d,isSearchMode:p,popoverId:h}=ct(),f;r[6]!==i||r[7]!==c?(f=()=>{c(i)},r[6]=i,r[7]=c,r[8]=f):f=r[8];let b=f,y;r[9]!==o||r[10]!==i.id||r[11]!==u?(y=o??u.findIndex(B=>B.id===i.id),r[9]=o,r[10]=i.id,r[11]=u,r[12]=y):y=r[12];let w=y,S=(p||d!==null)&&w===m,_;r[13]!==l||r[14]!==w?(_=()=>{l(w)},r[13]=l,r[14]=w,r[15]=_):_=r[15];let T=_,E=`${h}-option-${i.id}`,C=S?"":void 0,x;r[16]!==b||r[17]!==s?(x=ee(s,b),r[16]=b,r[17]=s,r[18]=x):x=r[18];let R;r[19]!==T||r[20]!==n?(R=ee(n,T),r[19]=T,r[20]=n,r[21]=R):R=r[21];let D;return r[22]!==e||r[23]!==S||r[24]!==a||r[25]!==E||r[26]!==C||r[27]!==x||r[28]!==R?(D=(0,ya.jsx)(J.button,{type:"button",role:"option",id:E,"aria-selected":S,"data-highlighted":C,...a,ref:e,onClick:x,onMouseMove:R}),r[22]=e,r[23]=S,r[24]=a,r[25]=E,r[26]=C,r[27]=x,r[28]=R,r[29]=D):D=r[29],D});Sa.displayName="ComposerPrimitive.TriggerPopoverItem";var Am=require("react/jsx-runtime");var Ta=G((t,e)=>{let r=v(10),o,i;r[0]!==t?({onClick:o,...i}=t,r[0]=t,r[1]=o,r[2]=i):(o=r[1],i=r[2]);let{activeCategoryId:s,isSearchMode:n,goBack:a,open:c}=ct();if(!c||!s||n)return null;let l;r[3]!==a||r[4]!==o?(l=ee(o,a),r[3]=a,r[4]=o,r[5]=l):l=r[5];let u;return r[6]!==e||r[7]!==i||r[8]!==l?(u=(0,Am.jsx)(J.button,{type:"button",...i,ref:e,onClick:l}),r[6]=e,r[7]=i,r[8]=l,r[9]=u):u=r[9],u});Ta.displayName="ComposerPrimitive.TriggerPopoverBack";var Ca=t=>{let e=v(8),{formatter:r,onExecute:o,removeOnExecute:i}=t,{register:s}=es(),n=$(o),a,c;e[0]!==o?(a=()=>{n.current=o},c=[o],e[0]=o,e[1]=a,e[2]=c):(a=e[1],c=e[2]),et(a,c);let l,u;return e[3]!==r||e[4]!==s||e[5]!==i?(l=()=>{let m={kind:"action",formatter:r??go,onExecute:d=>n.current(d),...i!==void 0?{removeOnExecute:i}:{}};return s(m)},u=[s,r,i],e[3]=r,e[4]=s,e[5]=i,e[6]=l,e[7]=u):(l=e[6],u=e[7]),N(l,u),null};Ca.displayName="ComposerPrimitive.TriggerPopoverAction";var Ia=t=>{let e=v(7),{formatter:r,onInserted:o}=t,{register:i}=es(),s=$(o),n,a;e[0]!==o?(n=()=>{s.current=o},a=[o],e[0]=o,e[1]=n,e[2]=a):(n=e[1],a=e[2]),et(n,a);let c,l;return e[3]!==r||e[4]!==i?(c=()=>i({kind:"directive",formatter:r??go,onInserted:u=>s.current?.(u)}),l=[i,r],e[3]=r,e[4]=i,e[5]=c,e[6]=l):(c=e[5],l=e[6]),N(c,l),null};Ia.displayName="ComposerPrimitive.TriggerPopoverDirective";var Pm=Object.assign(sa,{Directive:Ia,Action:Ca});var ss=Tr({AddAttachment:()=>Tm,AttachmentByIndex:()=>co,AttachmentDropzone:()=>pa,Attachments:()=>lo,Cancel:()=>Sm,Dictate:()=>Im,DictationTranscript:()=>ha,If:()=>po,Input:()=>ma,Queue:()=>uo,Quote:()=>fa,QuoteDismiss:()=>va,QuoteText:()=>ga,Root:()=>la,Send:()=>im,StopDictation:()=>Em,Unstable_TriggerPopover:()=>Pm,Unstable_TriggerPopoverBack:()=>Ta,Unstable_TriggerPopoverCategories:()=>wa,Unstable_TriggerPopoverCategoryItem:()=>xa,Unstable_TriggerPopoverItem:()=>Sa,Unstable_TriggerPopoverItems:()=>_a,Unstable_TriggerPopoverRoot:()=>ta,unstable_useTriggerPopoverRootContext:()=>bo,unstable_useTriggerPopoverRootContextOptional:()=>Xi,unstable_useTriggerPopoverScopeContext:()=>ct,unstable_useTriggerPopoverScopeContextOptional:()=>ia,unstable_useTriggerPopoverTriggers:()=>Gd,unstable_useTriggerPopoverTriggersOptional:()=>Qd});var qb=Object.freeze({type:"complete"}),Gb=Object.freeze({type:"text",text:"",status:qb}),km=()=>P(Kb);function Kb(t){return t.part.type!=="text"&&t.part.type!=="reasoning"?Gb:t.part}var Qb=require("react/jsx-runtime"),Wb=ne(null);function Jb(t){let e=pe(Wb);if(!t?.optional&&!e)throw new Error("This component must be used within a SmoothContextProvider.");return e}var{useSmoothStatus:uO,useSmoothStatusStore:Mm}=Gi(Jb,"useSmoothStatus");var Dm=250,Om=5,Yb=class{constructor(t,e){g(this,"animationFrameId",null);g(this,"lastUpdateTime",Date.now());g(this,"lastCommitTime",0);g(this,"targetText","");g(this,"drainMs",Dm);g(this,"maxCharIntervalMs",Om);g(this,"maxCharsPerFrame",1/0);g(this,"minCommitMs",0);g(this,"currentText");g(this,"setText");g(this,"animate",()=>{let t=Date.now(),e=t-this.lastUpdateTime,r=this.targetText.length-this.currentText.length,o=Math.min(this.maxCharIntervalMs,this.drainMs/r),i=Math.min(r,this.maxCharsPerFrame),s=0;for(;e>=o&&s<i;)s++,e-=o;s===i&&i===this.maxCharsPerFrame&&(e=0),s!==r?this.animationFrameId=requestAnimationFrame(this.animate):this.animationFrameId=null,s!==0&&(this.currentText=this.targetText.slice(0,this.currentText.length+s),this.lastUpdateTime=t-e,(s===r||t-this.lastCommitTime>=this.minCommitMs)&&(this.lastCommitTime=t,this.setText(this.currentText)))});this.currentText=t,this.setText=e}start(){this.animationFrameId===null&&(this.lastUpdateTime=Date.now(),this.animate())}stop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}},Ea=Object.freeze({type:"running"}),ns=(t,e)=>t!==void 0&&t>0?t:e,Bm=(t,e=!1)=>{let{text:r}=t,o=rs("(prefers-reduced-motion: reduce)"),i=typeof e=="object"&&e!==null?e:void 0,s=e!==!1&&e!==null&&!o,n=ns(i?.drainMs,Dm),a=ns(i?.maxCharIntervalMs,Om),c=ns(i?.maxCharsPerFrame,1/0),l=ns(i?.minCommitMs,0),[u,m]=j(t.status.type==="running"?"":r),d=V(),p=P(()=>d.part),[h,f]=j(p);(p!==h||!r.startsWith(u))&&(f(p),m(t.status.type==="running"?"":r));let b=Mm({optional:!0}),y=pt(_=>{if(m(_),b){let T=u!==_||t.status.type==="running"?Ea:t.status;Zt(b).setState(T,!0)}});N(()=>{if(b){let _=s&&(u!==r||t.status.type==="running")?Ea:t.status;Zt(b).setState(_,!0)}},[b,s,r,u,t.status]);let[w]=j(new Yb(u,y));N(()=>{w.drainMs=n,w.maxCharIntervalMs=a,w.maxCharsPerFrame=c,w.minCommitMs=l},[w,n,a,c,l]);let S=$(p);return N(()=>{if(!s){w.stop();return}let _=S.current!==p;if(S.current=p,_||!r.startsWith(w.targetText)){t.status.type==="running"?(w.currentText="",w.targetText=r,w.lastCommitTime=0,w.start()):(w.currentText=r,w.targetText=r,w.stop(),y(r));return}if(w.targetText=r,t.status.type!=="running"){if(w.currentText===""){w.currentText=r,w.stop(),y(r);return}w.start();return}w.start()},[w,s,r,t.status.type,p,y]),N(()=>()=>{w.stop()},[w]),W(()=>s?{...t,text:u,status:r===u?t.status:Ea}:t,[s,u,t,r])};var Xb=Object.freeze({type:"complete"}),Zb=Object.freeze({type:"image",image:"",status:Xb}),Nm=()=>P(ew);function ew(t){return t.part.type!=="image"?Zb:t.part}var Lm=require("react/jsx-runtime"),wo=G(({smooth:t=!0,component:e=J.span,render:r,...o},i)=>{let{text:s,status:n}=Bm(km(),t),a={"data-status":n.type,...o,ref:i};return r&&gt(r)?Cr(r,s,a):(0,Lm.jsx)(e,{...a,children:s})});wo.displayName="MessagePartPrimitive.Text";var $m=require("react/jsx-runtime"),xo=G((t,e)=>{let r=v(4),{image:o}=Nm(),i;return r[0]!==e||r[1]!==o||r[2]!==t?(i=(0,$m.jsx)(J.img,{src:o,...t,ref:e}),r[0]=e,r[1]=o,r[2]=t,r[3]=i):i=r[3],i});xo.displayName="MessagePartPrimitive.Image";var Ze=t=>{let e=v(2),r=$(void 0),o;return e[0]!==t?(o=i=>{r.current&&(r.current(),r.current=void 0),i&&(r.current=t(i))},e[0]=t,e[1]=o):o=e[1],o};var Ra=(t,e)=>{let r=t.trim().match(/^(\d+(?:\.\d+)?|\.\d+)(em|px|rem)$/);if(!r)return Number.POSITIVE_INFINITY;let o=Number(r[1]),i=r[2];return i==="px"?o:i==="em"?o*(parseFloat(getComputedStyle(e).fontSize)||16):i==="rem"?o*(parseFloat(getComputedStyle(document.documentElement).fontSize)||16):Number.POSITIVE_INFINITY},Vm=t=>t.dataset.messageId,Fm=()=>{let t=document.createElement("div");return t.dataset.auiTopAnchorReserve="",t.style.height="0px",t.style.flexShrink="0",t.style.pointerEvents="none",t.setAttribute("aria-hidden","true"),t},as=(t,e)=>{let r=`${e}px`;return t.style.height!==r?(t.style.height=r,!0):!1},Um=t=>{let e=window.devicePixelRatio||1;return Math.round(t*e)/e};var yo=require("react/jsx-runtime");var jm=()=>{let t=v(4),e=V(),r;t[0]!==e.message?(r=()=>e.message,t[0]=e.message,t[1]=r):r=t[1];let o=P(r),i;return t[2]!==o?(i=s=>{let n=()=>{o.setIsHovering(!0)},a=()=>{o.setIsHovering(!1)};return s.addEventListener("mouseenter",n),s.addEventListener("mouseleave",a),s.matches(":hover")&&queueMicrotask(()=>o.setIsHovering(!0)),()=>{s.removeEventListener("mouseenter",n),s.removeEventListener("mouseleave",a),o.setIsHovering(!1)}},t[2]=o,t[3]=i):i=t[3],Ze(i)},tw=()=>{let t=v(2),e=qe(aw),r;return t[0]!==e?(r=o=>o.message.role==="user"&&o.message.index>0&&o.message.index===o.thread.messages.length-2&&o.thread.messages.at(-1)?.role==="assistant"&&(o.message.id===e||o.thread.isRunning),t[0]=e,t[1]=r):r=t[1],P(r)},rw=()=>{let t=v(2),e=qe(cw),r;return t[0]!==e?(r=o=>o.message.isLast&&o.message.role==="assistant"&&o.message.index>=1&&o.thread.messages.at(o.message.index-1)?.role==="user"&&(o.message.id===e||o.thread.isRunning),t[0]=e,t[1]=r):r=t[1],P(r)},ow=(t,e)=>{let r=v(3),o;return r[0]!==t||r[1]!==e?(o=i=>{if(t)return e.getState().registerAnchorElement(i)},r[0]=t,r[1]=e,r[2]=o):o=r[2],Ze(o)},iw=t=>{let e=v(3),{active:r,threadViewportStore:o}=t,i;return e[0]!==r||e[1]!==o?(i=s=>{if(!r)return;let n=o.getState(),a=n.topAnchorMessageClamp;return n.registerAnchorTargetElement(s,{tallerThan:Ra(a.tallerThan,s),visibleHeight:Ra(a.visibleHeight,s)})},e[0]=r,e[1]=o,e[2]=i):i=e[2],Ze(i)},sw=t=>{let e=v(7),r,o;e[0]!==t?({forwardedRef:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i=jm(),s=Pe(r,i),n=P(lw),a;return e[3]!==n||e[4]!==o||e[5]!==s?(a=(0,yo.jsx)(J.div,{...o,ref:s,"data-message-id":n}),e[3]=n,e[4]=o,e[5]=s,e[6]=a):a=e[6],a},nw=t=>{let e=v(13),r,o,i;e[0]!==t?({forwardedRef:r,threadViewportStore:i,...o}=t,e[0]=t,e[1]=r,e[2]=o,e[3]=i):(r=e[1],o=e[2],i=e[3]);let s=jm(),n=tw(),a=rw(),c=ow(n,i),l;e[4]!==a||e[5]!==i?(l={active:a,threadViewportStore:i},e[4]=a,e[5]=i,e[6]=l):l=e[6];let u=iw(l),m=Pe(r,s,c,u),d=P(uw),p=n?"":void 0,h=a?"":void 0,f;return e[7]!==d||e[8]!==o||e[9]!==m||e[10]!==p||e[11]!==h?(f=(0,yo.jsx)(J.div,{...o,ref:m,"data-message-id":d,"data-aui-top-anchor-user":p,"data-aui-top-anchor-target":h}),e[7]=d,e[8]=o,e[9]=m,e[10]=p,e[11]=h,e[12]=f):f=e[12],f},Aa=G((t,e)=>{let r=v(7),o=Ge();if(o.getState().turnAnchor==="top"){let s;return r[0]!==e||r[1]!==t||r[2]!==o?(s=(0,yo.jsx)(nw,{...t,forwardedRef:e,threadViewportStore:o}),r[0]=e,r[1]=t,r[2]=o,r[3]=s):s=r[3],s}let i;return r[4]!==e||r[5]!==t?(i=(0,yo.jsx)(sw,{...t,forwardedRef:e}),r[4]=e,r[5]=t,r[6]=i):i=r[6],i});Aa.displayName="MessagePrimitive.Root";function aw(t){return t.topAnchorTurn?.anchorId}function cw(t){return t.topAnchorTurn?.targetId}function lw(t){return t.message.id}function uw(t){return t.message.id}var Ct=require("react/jsx-runtime"),Pa={...Xe,Text:()=>(0,Ct.jsxs)("p",{style:{whiteSpace:"pre-line"},children:[(0,Ct.jsx)(wo,{}),(0,Ct.jsx)(Xt,{children:(0,Ct.jsx)("span",{style:{fontFamily:"revert"},children:" \u25CF"})})]}),Image:()=>(0,Ct.jsx)(xo,{})},cs=t=>{let e=v(10);if("children"in t){let a;return e[0]!==t.children?(a=(0,Ct.jsx)(so,{children:t.children}),e[0]=t.children,e[1]=a):a=e[1],a}let r,o;e[2]!==t?({components:r,...o}=t,e[2]=t,e[3]=r,e[4]=o):(r=e[3],o=e[4]);let i;e[5]!==r?(i=r?{...r,Text:r.Text??Pa.Text,Image:r.Image??Pa.Image}:Pa,e[5]=r,e[6]=i):i=e[6];let s=i,n;return e[7]!==o||e[8]!==s?(n=(0,Ct.jsx)(so,{components:s,...o}),e[7]=o,e[8]=s,e[9]=n):n=e[9],n};cs.displayName="MessagePrimitive.Parts";var dw=t=>{let e=v(12),r;return e[0]!==t.assistant||e[1]!==t.copied||e[2]!==t.hasAttachments||e[3]!==t.hasBranches||e[4]!==t.hasContent||e[5]!==t.last||e[6]!==t.lastOrHover||e[7]!==t.speaking||e[8]!==t.submittedFeedback||e[9]!==t.system||e[10]!==t.user?(r=o=>{let{role:i,attachments:s,parts:n,branchCount:a,isLast:c,speech:l,isCopied:u,isHovering:m}=o.message;return!(t.hasBranches===!0&&a<2||t.user&&i!=="user"||t.assistant&&i!=="assistant"||t.system&&i!=="system"||t.lastOrHover===!0&&!m&&!c||t.last!==void 0&&t.last!==c||t.copied===!0&&!u||t.copied===!1&&u||t.speaking===!0&&l==null||t.speaking===!1&&l!=null||t.hasAttachments===!0&&(i!=="user"||!s?.length)||t.hasAttachments===!1&&i==="user"&&s?.length||t.hasContent===!0&&n.length===0||t.hasContent===!1&&n.length>0||t.submittedFeedback!==void 0&&(o.message.metadata.submittedFeedback?.type??null)!==t.submittedFeedback)},e[0]=t.assistant,e[1]=t.copied,e[2]=t.hasAttachments,e[3]=t.hasBranches,e[4]=t.hasContent,e[5]=t.last,e[6]=t.lastOrHover,e[7]=t.speaking,e[8]=t.submittedFeedback,e[9]=t.system,e[10]=t.user,e[11]=r):r=e[11],P(r)},ka=t=>{let e=v(3),r,o;return e[0]!==t?({children:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]),dw(o)?r:null};ka.displayName="MessagePrimitive.If";var Ma=t=>{let{children:e}=t;return jn()!==void 0?e:null};Ma.displayName="MessagePrimitive.Error";var Y=require("react/jsx-runtime"),mw=t=>{let e=new Map;for(let o=0;o<t.length;o++){let i=t[o]?.parentId??o,s=e.get(i)??[];s.push(o),e.set(i,s)}let r=[];for(let[o,i]of e){let s=typeof o=="string"?o:void 0;r.push({groupKey:s,indices:i})}return r},pw=t=>{let e=v(4),r=P(Sw),o;e:{if(r.length===0){let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=[],e[0]=s):s=e[0],o=s;break e}let i;e[1]!==t||e[2]!==r?(i=t(r),e[1]=t,e[2]=r,e[3]=i):i=e[3],o=i}return o},hw=t=>{let e=v(9),r,o;e[0]!==t?({Fallback:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;e[3]!==r||e[4]!==o.toolName?(i=a=>a.tools.toolUIs[o.toolName]?.[0]?.render??r,e[3]=r,e[4]=o.toolName,e[5]=i):i=e[5];let s=P(i);if(!s)return null;let n;return e[6]!==s||e[7]!==o?(n=(0,Y.jsx)(s,{...o}),e[6]=s,e[7]=o,e[8]=n):n=e[8],n},fw=t=>{let e=v(9),r,o;e[0]!==t?({Fallback:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;e[3]!==r||e[4]!==o.name?(i=a=>{let c=a.dataRenderers.renderers[o.name]??r;return Array.isArray(c)?c[0]??r:c},e[3]=r,e[4]=o.name,e[5]=i):i=e[5];let s=P(i);if(!s)return null;let n;return e[6]!==s||e[7]!==o?(n=(0,Y.jsx)(s,{...o}),e[6]=s,e[7]=o,e[8]=n):n=e[8],n},Lt={Text:()=>(0,Y.jsxs)("p",{style:{whiteSpace:"pre-line"},children:[(0,Y.jsx)(wo,{}),(0,Y.jsx)(Xt,{children:(0,Y.jsx)("span",{style:{fontFamily:"revert"},children:" \u25CF"})})]}),Reasoning:()=>null,Source:()=>null,Image:()=>(0,Y.jsx)(xo,{}),File:()=>null,Unstable_Audio:()=>null,Group:({children:t})=>t},gw=t=>{let e=v(37),{components:r}=t,o;e[0]!==r?(o=r===void 0?{}:r,e[0]=r,e[1]=o):o=e[1];let{Text:i,Reasoning:s,Image:n,Source:a,File:c,Unstable_Audio:l,tools:u,data:m}=o,d=i===void 0?Lt.Text:i,p=s===void 0?Lt.Reasoning:s,h=n===void 0?Lt.Image:n,f=a===void 0?Lt.Source:a,b=c===void 0?Lt.File:c,y=l===void 0?Lt.Unstable_Audio:l,w;e[2]!==u?(w=u===void 0?{}:u,e[2]=u,e[3]=w):w=e[3];let S=w,_=V(),T=P(Tw),E=T.type;if(E==="tool-call"){let C=_.part.addToolResult,x=_.part.resumeToolCall,R=_.part.respondToToolApproval;if("Override"in S){let M;return e[4]!==C||e[5]!==T||e[6]!==R||e[7]!==x||e[8]!==S.Override?(M=(0,Y.jsx)(S.Override,{...T,addResult:C,resume:x,respondToApproval:R}),e[4]=C,e[5]=T,e[6]=R,e[7]=x,e[8]=S.Override,e[9]=M):M=e[9],M}let D=S.by_name?.[T.toolName]??S.Fallback,B;return e[10]!==D||e[11]!==C||e[12]!==T||e[13]!==R||e[14]!==x?(B=(0,Y.jsx)(hw,{...T,Fallback:D,addResult:C,resume:x,respondToApproval:R}),e[10]=D,e[11]=C,e[12]=T,e[13]=R,e[14]=x,e[15]=B):B=e[15],B}if(T.status?.type==="requires-action")throw new Error("Encountered unexpected requires-action status");switch(E){case"text":{let C;return e[16]!==d||e[17]!==T?(C=(0,Y.jsx)(d,{...T}),e[16]=d,e[17]=T,e[18]=C):C=e[18],C}case"reasoning":{let C;return e[19]!==p||e[20]!==T?(C=(0,Y.jsx)(p,{...T}),e[19]=p,e[20]=T,e[21]=C):C=e[21],C}case"source":{let C;return e[22]!==f||e[23]!==T?(C=(0,Y.jsx)(f,{...T}),e[22]=f,e[23]=T,e[24]=C):C=e[24],C}case"image":{let C;return e[25]!==h||e[26]!==T?(C=(0,Y.jsx)(h,{...T}),e[25]=h,e[26]=T,e[27]=C):C=e[27],C}case"file":{let C;return e[28]!==b||e[29]!==T?(C=(0,Y.jsx)(b,{...T}),e[28]=b,e[29]=T,e[30]=C):C=e[30],C}case"audio":{let C;return e[31]!==y||e[32]!==T?(C=(0,Y.jsx)(y,{...T}),e[31]=y,e[32]=T,e[33]=C):C=e[33],C}case"data":{let C=m?.by_name?.[T.name]??m?.Fallback,x;return e[34]!==C||e[35]!==T?(x=(0,Y.jsx)(fw,{...T,Fallback:C}),e[34]=C,e[35]=T,e[36]=x):x=e[36],x}default:return console.warn(`Unknown message part type: ${E}`),null}},vw=t=>{let e=v(5),{partIndex:r,components:o}=t,i;e[0]!==o?(i=(0,Y.jsx)(gw,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,Y.jsx)(Wt,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},bw=oe(vw,(t,e)=>t.partIndex===e.partIndex&&t.components?.Text===e.components?.Text&&t.components?.Reasoning===e.components?.Reasoning&&t.components?.Source===e.components?.Source&&t.components?.Image===e.components?.Image&&t.components?.File===e.components?.File&&t.components?.Unstable_Audio===e.components?.Unstable_Audio&&t.components?.tools===e.components?.tools&&t.components?.data===e.components?.data&&t.components?.Group===e.components?.Group),ww=t=>{let e=v(6),{status:r,component:o}=t,i=r.type==="running",s;e[0]!==o||e[1]!==r?(s=(0,Y.jsx)(o,{type:"text",text:"",status:r}),e[0]=o,e[1]=r,e[2]=s):s=e[2];let n;return e[3]!==i||e[4]!==s?(n=(0,Y.jsx)(Jt,{text:"",isRunning:i,children:s}),e[3]=i,e[4]=s,e[5]=n):n=e[5],n},xw=Object.freeze({type:"complete"}),yw=t=>{let e=v(6),{components:r}=t,o=P(Cw);if(r?.Empty){let n;return e[0]!==r.Empty||e[1]!==o?(n=(0,Y.jsx)(r.Empty,{status:o}),e[0]=r.Empty,e[1]=o,e[2]=n):n=e[2],n}let i=r?.Text??Lt.Text,s;return e[3]!==o||e[4]!==i?(s=(0,Y.jsx)(ww,{status:o,component:i}),e[3]=o,e[4]=i,e[5]=s):s=e[5],s},_w=oe(yw,(t,e)=>t.components?.Empty===e.components?.Empty&&t.components?.Text===e.components?.Text),ls=t=>{let e=v(9),{groupingFunction:r,components:o}=t,i=P(Iw),s=pw(r),n;e:{if(i===0){let u;e[0]!==o?(u=(0,Y.jsx)(_w,{components:o}),e[0]=o,e[1]=u):u=e[1],n=u;break e}let l;if(e[2]!==o||e[3]!==s){let u;e[5]!==o?(u=(m,d)=>{let p=o?.Group??Lt.Group;return(0,Y.jsx)(p,{groupKey:m.groupKey,indices:m.indices,children:m.indices.map(h=>(0,Y.jsx)(bw,{partIndex:h,components:o},h))},`group-${d}-${m.groupKey??"ungrouped"}`)},e[5]=o,e[6]=u):u=e[6],l=s.map(u),e[2]=o,e[3]=s,e[4]=l}else l=e[4];n=l}let a=n,c;return e[7]!==a?(c=(0,Y.jsx)(Y.Fragment,{children:a}),e[7]=a,e[8]=c):c=e[8],c};ls.displayName="MessagePrimitive.Unstable_PartsGrouped";var Da=t=>{let e=v(6),r,o;e[0]!==t?({components:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;return e[3]!==r||e[4]!==o?(i=(0,Y.jsx)(ls,{...o,components:r,groupingFunction:mw}),e[3]=r,e[4]=o,e[5]=i):i=e[5],i};Da.displayName="MessagePrimitive.Unstable_PartsGroupedByParentId";function Sw(t){return t.message.parts}function Tw(t){return t.part}function Cw(t){return t.message.status??xw}function Iw(t){return t.message.parts.length}var us=Tr({AttachmentByIndex:()=>no,Attachments:()=>ao,Content:()=>cs,Error:()=>Ma,GenerativeUI:()=>Fi,GroupedParts:()=>Ui,If:()=>ka,PartByIndex:()=>Ot,Parts:()=>cs,Quote:()=>zi,Root:()=>Aa,Unstable_PartsGrouped:()=>ls,Unstable_PartsGroupedByParentId:()=>Da});var zm=t=>{let e=v(2),r=pt(t),o;return e[0]!==r?(o=i=>{let s=new ResizeObserver(()=>{r()}),n=new MutationObserver(a=>{a.some(Ew)&&r()});return s.observe(i),n.observe(i,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),()=>{s.disconnect(),n.disconnect()}},e[0]=r,e[1]=o):o=e[1],Ze(o)};function Ew(t){return t.type!=="attributes"||t.attributeName!=="style"}var Hm=({autoScroll:t,scrollToBottomOnRunStart:e=!0,scrollToBottomOnInitialize:r=!0,scrollToBottomOnThreadSwitch:o=!0})=>{let i=$(null),s=P(x=>x.thread.messages.length>0),n=P(x=>x.thread.isRunning),a=$(!1),c=$(null),l=Ge();t===void 0&&(t=l.getState().turnAnchor!=="top");let u=$(0),m=$(0),d=$(0),p=$(0),h=$(null),f=$(t),b=$(t);Qe(()=>{let x=b.current;if(b.current=t,x||!t)return;let R=i.current;f.current=R!==null&&ii(R)},[t]);let y=Ie(x=>{let R=i.current;R&&(f.current=!0,h.current=x,R.scrollTo({top:R.scrollHeight,behavior:x}))},[]),w=Ie(()=>{c.current!==null&&(cancelAnimationFrame(c.current),c.current=null)},[]),S=Ie(x=>{h.current=x,w(),c.current=requestAnimationFrame(()=>{c.current=null,y(x)})},[w,y]);Qe(()=>()=>w(),[w]);let _=Ie(()=>{let x=l.getState();return x.turnAnchor==="top"&&x.element.viewport===i.current&&x.element.anchor!==null},[l]),T=()=>{let x=i.current;if(!x)return;let R=l.getState().isAtBottom,D=ii(x);if(!(!D&&u.current<x.scrollTop)){let B=Qs({scrollTop:u.current,scrollHeight:m.current},x);D?(Ks(x)&&(h.current=null),t&&(f.current=!0)):B&&(w(),h.current=null,f.current=!1),(D||h.current===null)&&D!==R&&Zt(l).setState({isAtBottom:D})}u.current=x.scrollTop,m.current=x.scrollHeight},E=zm(()=>{let x=i.current;if(!x)return;let{scrollHeight:R,clientHeight:D}=x;if(R===d.current&&D===p.current)return;d.current=R,p.current=D;let B=h.current;B&&_()?h.current=null:B?y(B):t&&!(n&&_())&&f.current&&y("instant"),T()}),C=Ze(x=>{let R=()=>{h.current=null};return x.addEventListener("scroll",T),x.addEventListener("pointerdown",R),()=>{x.removeEventListener("scroll",T),x.removeEventListener("pointerdown",R)}});return Qe(()=>{if(r){if(!s){a.current=!1;return}a.current||(a.current=!0,h.current===null&&S("instant"))}},[s,S,r]),ts(({behavior:x})=>{y(x)}),vi("thread.runStart",()=>{e&&l.getState().turnAnchor!=="top"&&S("auto")}),vi("threads.selectionChanged",()=>{o&&S("instant")}),Pe(E,C,i)};var qm=require("react/jsx-runtime"),Oa=G((t,e)=>{let r=v(6),o=V(),i,s;r[0]!==o?(i=()=>{let a=c=>{if(c.key==="Escape"&&!(c.defaultPrevented||o.thread.source===null)&&o.thread.getState().speech!=null){c.preventDefault();try{o.thread.stopSpeaking()}catch(l){let u=l;if(!(u instanceof Error)||u.message!=="No message is being spoken")throw u}}};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},s=[o],r[0]=o,r[1]=i,r[2]=s):(i=r[1],s=r[2]),N(i,s);let n;return r[3]!==t||r[4]!==e?(n=(0,qm.jsx)(J.div,{...t,ref:e}),r[3]=t,r[4]=e,r[5]=n):n=r[5],n});Oa.displayName="ThreadPrimitive.Root";var Ba=t=>{let{children:e}=t;return P(Rw)?e:null};Ba.displayName="ThreadPrimitive.Empty";function Rw(t){return t.thread.isEmpty}var Aw=t=>{let e=v(4),r;return e[0]!==t.disabled||e[1]!==t.empty||e[2]!==t.running?(r=o=>!(t.empty===!0&&!o.thread.isEmpty||t.empty===!1&&o.thread.isEmpty||t.running===!0&&!o.thread.isRunning||t.running===!1&&o.thread.isRunning||t.disabled===!0&&!o.thread.isDisabled||t.disabled===!1&&o.thread.isDisabled),e[0]=t.disabled,e[1]=t.empty,e[2]=t.running,e[3]=r):r=e[3],P(r)},Na=t=>{let e=v(3),r,o;return e[0]!==t?({children:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]),Aw(o)?r:null};Na.displayName="ThreadPrimitive.If";var ds=(t,e)=>{let r=v(3),o;return r[0]!==e||r[1]!==t?(o=i=>{if(!t)return;let s=t(),n=()=>{let c=e?e(i):i.offsetHeight;s.setHeight(c)},a=new ResizeObserver(n);return a.observe(i),n(),()=>{a.disconnect(),s.unregister()}},r[0]=e,r[1]=t,r[2]=o):o=r[2],Ze(o)};var Gm=t=>{let e=0,r=t;for(;r;)e+=r.offsetTop,r=r.offsetParent;return e},Pw=(t,e)=>{let r=0,o=t;for(;o&&o!==e;)r+=o.offsetTop,o=o.offsetParent;return o===e?r:Gm(t)-Gm(e)},La=({viewport:t,anchor:e,tallerThan:r,visibleHeight:o})=>{let i=Pw(e,t),s=e.offsetHeight;return i+Math.max(0,s-(s<=r?s:o))},kw=({scrollHeight:t,...e})=>{let{viewport:r}=e,o=La(e)+r.clientHeight;return Math.max(0,o-t)},Km=({viewport:t,reserve:e,...r})=>kw({viewport:t,...r,scrollHeight:t.scrollHeight-e.offsetHeight});var Qm=t=>{let e=new ResizeObserver(t),r=new MutationObserver(t),o=null,i=null,s=null,n=()=>{e.disconnect(),r.disconnect(),o=null,i=null,s=null};return{target:(a,c,l)=>{o===a&&i===c&&s===l||(n(),e.observe(a),e.observe(c),e.observe(l),r.observe(l,{childList:!0,subtree:!0,characterData:!0}),o=a,i=c,s=l)},disconnect:n}};var Mw=t=>{let e=null;return{schedule:()=>{e===null&&(e=requestAnimationFrame(()=>{e=null,t()}))},cancel:()=>{e!==null&&(cancelAnimationFrame(e),e=null)}}},Wm=t=>{let e=null,r;function o(){let a=t.getState(),{viewport:c,anchor:l,target:u}=a.element,m=a.targetConfig;if(a.turnAnchor!=="top"||!c){s.disconnect(),e&&(as(e,0),e.remove());return}if(!l&&!u&&!m&&a.topAnchorTurn){s.disconnect(),e?.parentElement&&e.parentElement.lastElementChild!==e&&e.parentElement.append(e);return}if(!l||!u||!m){s.disconnect(),e&&(as(e,0),e.remove());return}if(e??(e=Fm()),(e.parentElement!==u.parentElement||e.previousElementSibling!==u)&&u.after(e),s.target(c,l,u),as(e,Km({viewport:c,anchor:l,reserve:e,...m}))){i.schedule();return}let d=Vm(l);if(d!==void 0&&r===d)return;let p=Um(La({viewport:c,anchor:l,...m}));Math.abs(c.scrollTop-p)>1&&c.scrollTo({top:p,behavior:"smooth"}),d!==void 0&&(r=d)}let i=Mw(o),s=Qm(i.schedule);i.schedule();let n=t.subscribe(i.schedule);return()=>{i.cancel(),n(),s.disconnect(),e?.remove()}};var Jm=t=>{let e=v(4),r=Ge(),o,i;e[0]!==t||e[1]!==r?(o=()=>{if(t)return Wm(r)},i=[t,r],e[0]=t,e[1]=r,e[2]=o,e[3]=i):(o=e[2],i=e[3]),Qe(o,i)};var Ym=(t,e)=>{if(!t)return!1;let r=e.findIndex(o=>o.id===t.targetId);return r<1?!1:e[r-1]?.id===t.anchorId&&e.slice(r+1).every(o=>o.role==="user")},Xm=({isRunning:t,messages:e})=>{if(!t)return null;let r=e.at(-1),o=e.at(-2);return o?.role!=="user"||r?.role!=="assistant"?null:{anchorId:o.id,targetId:r.id}},Zm=t=>Xm(t)?.anchorId,ep=t=>Xm(t)?.targetId;var ms=require("react/jsx-runtime");var Dw=()=>{let t=qe(Nw);return ds(t,Lw)},Ow=()=>{let t=qe($w);return Ze(t)},Bw=t=>{let e=v(19),r=Ge(),o;e[0]!==t?(o=b=>{if(t)return Zm(b.thread)},e[0]=t,e[1]=o):o=e[1];let i=P(o),s;e[2]!==t?(s=b=>{if(t)return ep(b.thread)},e[2]=t,e[3]=s):s=e[3];let n=P(s),a=qe(Vw),c;e:{if(!i||!n){c=null;break e}let b;e[4]!==i||e[5]!==n?(b={anchorId:i,targetId:n},e[4]=i,e[5]=n,e[6]=b):b=e[6],c=b}let l=c,u;e[7]!==t||e[8]!==a?(u=b=>t&&!!a&&Ym(a,b.thread.messages),e[7]=t,e[8]=a,e[9]=u):u=e[9];let m=P(u),d,p;e[10]!==r||e[11]!==a||e[12]!==m?(d=()=>{!a||m||r.getState().setTopAnchorTurn(null)},p=[r,a,m],e[10]=r,e[11]=a,e[12]=m,e[13]=d,e[14]=p):(d=e[13],p=e[14]),Qe(d,p);let h,f;e[15]!==l||e[16]!==r?(h=()=>{if(!l)return;let b=r.getState(),y=b.topAnchorTurn;y?.anchorId===l.anchorId&&y.targetId===l.targetId||b.setTopAnchorTurn(l)},f=[l,r],e[15]=l,e[16]=r,e[17]=h,e[18]=f):(h=e[17],f=e[18]),Qe(h,f)},tp=G((t,e)=>{let r=v(18),o,i,s,n,a,c;r[0]!==t?({autoScroll:o,scrollToBottomOnRunStart:a,scrollToBottomOnInitialize:n,scrollToBottomOnThreadSwitch:c,children:i,...s}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s,r[4]=n,r[5]=a,r[6]=c):(o=r[1],i=r[2],s=r[3],n=r[4],a=r[5],c=r[6]);let l;r[7]!==o||r[8]!==n||r[9]!==a||r[10]!==c?(l={autoScroll:o,scrollToBottomOnRunStart:a,scrollToBottomOnInitialize:n,scrollToBottomOnThreadSwitch:c},r[7]=o,r[8]=n,r[9]=a,r[10]=c,r[11]=l):l=r[11];let u=Hm(l),m=Dw(),d=Ow(),p=Ge(),h;r[12]!==p?(h=p.getState(),r[12]=p,r[13]=h):h=r[13];let f=h.turnAnchor==="top";Bw(f),Jm(f);let b=Pe(e,u,m,d),y;return r[14]!==i||r[15]!==b||r[16]!==s?(y=(0,ms.jsx)(J.div,{...s,ref:b,children:i}),r[14]=i,r[15]=b,r[16]=s,r[17]=y):y=r[17],y});tp.displayName="ThreadPrimitive.ViewportScrollable";var $a=G((t,e)=>{let r=v(13),o,i,s;r[0]!==t?({turnAnchor:s,topAnchorMessageClamp:i,...o}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s):(o=r[1],i=r[2],s=r[3]);let n;r[4]!==i||r[5]!==s?(n={turnAnchor:s,topAnchorMessageClamp:i},r[4]=i,r[5]=s,r[6]=n):n=r[6];let a;r[7]!==o||r[8]!==e?(a=(0,ms.jsx)(tp,{...o,ref:e}),r[7]=o,r[8]=e,r[9]=a):a=r[9];let c;return r[10]!==n||r[11]!==a?(c=(0,ms.jsx)(yr,{options:n,children:a}),r[10]=n,r[11]=a,r[12]=c):c=r[12],c});$a.displayName="ThreadPrimitive.Viewport";function Nw(t){return t.registerViewport}function Lw(t){return t.clientHeight}function $w(t){return t.registerViewportElement}function Vw(t){return t.topAnchorTurn}var rp=require("react/jsx-runtime");var Va=G((t,e)=>{let r=v(3),o=qe(Fw),i=ds(o,Uw),s=Pe(e,i),n;return r[0]!==t||r[1]!==s?(n=(0,rp.jsx)(J.div,{...t,ref:s}),r[0]=t,r[1]=s,r[2]=n):n=r[2],n});Va.displayName="ThreadPrimitive.ViewportFooter";function Fw(t){return t.registerContentInset}function Uw(t){let e=parseFloat(getComputedStyle(t).marginTop)||0;return t.offsetHeight+e}var jw=t=>{let e=v(5),r;e[0]!==t?(r=t===void 0?{}:t,e[0]=t,e[1]=r):r=e[1];let{behavior:o}=r,i=qe(zw),s=Ge(),n;e[2]!==o||e[3]!==s?(n=()=>{s.getState().scrollToBottom({behavior:o})},e[2]=o,e[3]=s,e[4]=n):n=e[4];let a=n;return i?null:a},op=$e("ThreadPrimitive.ScrollToBottom",jw,["behavior"]);function zw(t){return t.isAtBottom}var Hw=t=>{let e=v(4),{prompt:r,send:o,clearComposer:i,autoSend:s}=t,n=o??s??!1,a;e[0]!==i||e[1]!==r||e[2]!==n?(a={prompt:r,send:n,clearComposer:i},e[0]=i,e[1]=r,e[2]=n,e[3]=a):a=e[3];let{disabled:c,trigger:l}=Un(a);return c?null:l},ip=$e("ThreadPrimitive.Suggestion",Hw,["prompt","send","clearComposer","autoSend","method"]);var _o=Tr({Empty:()=>Ba,If:()=>Na,MessageByIndex:()=>ro,Messages:()=>$i,Root:()=>Oa,ScrollToBottom:()=>op,Suggestion:()=>ip,SuggestionByIndex:()=>mo,Suggestions:()=>qi,Unstable_MessageById:()=>oo,Viewport:()=>$a,ViewportFooter:()=>Va,ViewportProvider:()=>yr});var sp=`/**
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
`;var np=`/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */
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
`;var X=require("react/jsx-runtime"),Kw=()=>({parse:t=>t}),up=t=>({mode:"strict",typeSymbol:t,create:Kw}),ap=(t,e)=>({name:t,wire:t,source:"json",codec:up(e)}),ps=t=>up(t),Qw={package:"@freepeak/dsh-mux",descriptors:[{id:"@freepeak/dsh-mux#mux/discover",service:"mux",namespace:"mux",method:"discover",invocation:{kind:"direct"},parameters:[],result:ps("@freepeak/dsh-mux#AdapterStatus[]")},{id:"@freepeak/dsh-mux#mux/listThreads",service:"mux",namespace:"mux",method:"listThreads",invocation:{kind:"direct"},parameters:[],result:ps("@freepeak/dsh-mux#MuxThread[]")},{id:"@freepeak/dsh-mux#mux/deleteThread",service:"mux",namespace:"mux",method:"deleteThread",invocation:{kind:"direct"},parameters:[ap("id","string")],result:ps("boolean")},{id:"@freepeak/dsh-mux#mux/send",service:"mux",namespace:"mux",method:"send",invocation:{kind:"direct"},parameters:[ap("request","@freepeak/dsh-mux#MuxSendRequest")],result:ps("@freepeak/dsh-mux#MuxTurnResult")}]},Fa="mux",cp="mux",Ua=[{id:"claude",label:"Claude Code"},{id:"omp",label:"OMP"},{id:"pi",label:"Pi"},{id:"cursor",label:"Cursor"},{id:"agy",label:"Agy"},{id:"command-code",label:"Command Code"},{id:"opencode",label:"opencode"}],So;function Ww(){So===void 0&&(So=document.createElement("style"),So.dataset.plugin="@freepeak/dsh-mux",So.textContent=`${np}
${sp}`,document.head.append(So))}function Jw({size:t}){let e=t??16;return le.default.createElement("svg",{width:e,height:e,viewBox:"0 0 16 16","data-mux-icon":"",fill:"none",stroke:"currentColor","stroke-width":1.6,"stroke-linecap":"round"},le.default.createElement("path",{d:"M2 4.5h9.5M9 2l2.5 2.5L9 7"}),le.default.createElement("path",{d:"M14 11.5H4.5M7 9l-2.5 2.5L7 14"}))}function dp(t){return t===null?[]:t.turns.map((e,r)=>({id:`${t.id}:${r}:${e.at}`,role:e.role==="prompt"?"user":"assistant",content:[{type:"text",text:e.text}],...e.role==="error"?{metadata:{muxError:!0}}:{}}))}function lp(){return le.default.createElement(us.Root,{"data-mux-turn":""},le.default.createElement(us.Parts))}function Yw({host:t,ready:e}){let[r,o]=(0,le.useState)([]),[i,s]=(0,le.useState)([]),[n,a]=(0,le.useState)(null),[c,l]=(0,le.useState)("claude"),[u,m]=(0,le.useState)(""),[d,p]=(0,le.useState)(!1),[h,f]=(0,le.useState)(null),b=(0,le.useCallback)(async()=>{try{await e;let A=t.get("remote.mux");if(A===void 0){f({kind:"error",text:"mux host remote not available (mount failed)."});return}let[L,H]=await Promise.all([A.listThreads(),A.discover()]);L.ok?s(L.value):f({kind:"error",text:`threads: ${L.error.message}`}),H.ok?o(H.value):f({kind:"error",text:`discover: ${H.error.message}`})}catch(A){f({kind:"error",text:String(A instanceof Error?A.message:A)})}},[t,e]);(0,le.useEffect)(()=>{b()},[b]);let y=i.find(A=>A.id===n)??null,w=y!==null?y.cli:c,S=A=>r.find(L=>L.id===A),_=A=>S(A)?.installed===!0,T=A=>S(A)?.enabled!==!1,E=!d&&u.trim().length>0&&_(w)&&T(w),C=(0,le.useCallback)(async()=>{let A=u.trim();if(!(A.length===0||d||!T(w))){p(!0),f(null);try{await e;let L=t.get("remote.mux");if(L===void 0)throw new Error("mux host remote not available");let H=await L.send({cli:w,prompt:A,...n!==null&&n!==""?{threadId:n}:{}});if(!H.ok){f({kind:"error",text:H.error.message});return}m(""),a(H.value.threadId),await b()}catch(L){f({kind:"error",text:String(L instanceof Error?L.message:L)})}finally{p(!1)}}},[d,t,u,e,b,n,w]),x=(0,le.useCallback)(()=>{a(null),m(""),f(null)},[]),R=(0,le.useCallback)(A=>{!_(A)||!T(A)||(l(A),y!==null&&y.cli!==A&&a(null))},[_,y]),D=(0,le.useCallback)(async A=>{try{await e;let L=t.get("remote.mux");if(L===void 0)return;await L.deleteThread(A),n===A&&a(null),await b()}catch(L){f({kind:"error",text:String(L instanceof Error?L.message:L)})}},[t,e,b,n]),B=A=>{let L=A.turns??[],H=L[L.length-1];return H===void 0?"no turns yet":H.text.replace(/\s+/g," ").slice(0,80)},M=dp(y),k=to({messages:M,isRunning:d,convertMessage:A=>A,onNew:async A=>{let L=typeof A=="string"?A:A.map(H=>H.type==="text"?H.text:"").join("");L.trim().length!==0&&(m(L),setTimeout(()=>{C()},0))}});return(0,X.jsxs)("div",{"data-mux-panel":"",children:[(0,X.jsx)("div",{"data-mux-strip":"",children:Ua.map(A=>{let L=S(A.id),H=L?.installed===!0,te=L?.enabled!==!1,re=L===void 0?"checking\u2026":H?te?L.path??A.id:`${A.id} is disabled in this build (only claude enabled)`:`${A.id} not on PATH`;return(0,X.jsxs)("button",{type:"button","data-mux-chip":"","data-active":String(w===A.id),"data-installed":String(H),"data-enabled":String(te),title:re,disabled:!H||!te,onClick:()=>R(A.id),children:[(0,X.jsx)("span",{"data-mux-dot":"","data-on":String(H),"data-enabled":String(te)}),A.label]},A.id)})}),h!==null&&(0,X.jsx)("div",{"data-mux-notice":"","data-kind":h.kind,children:h.text}),(0,X.jsxs)("div",{"data-mux-body":"",children:[(0,X.jsxs)("div",{"data-mux-threads":"",children:[(0,X.jsxs)("div",{"data-mux-threads-head":"",children:[(0,X.jsx)("strong",{children:"Threads"}),(0,X.jsx)("button",{type:"button","data-mux-new":"",onClick:x,children:"New"})]}),i.map(A=>(0,X.jsxs)("div",{"data-mux-thread":"","data-active":String(A.id===n),onClick:()=>a(A.id),children:[(0,X.jsxs)("div",{"data-mux-thread-title":"",children:[Ua.find(L=>L.id===A.cli)?.label??A.cli,A.cliSessionId!==void 0&&(0,X.jsx)("span",{"data-mux-resume":"",title:`resumes ${A.cliSessionId}`,children:"\u25CF"}),(0,X.jsx)("button",{type:"button","data-mux-delete":"",title:"Delete thread (CLI session files are kept)",onClick:L=>{L.stopPropagation(),D(A.id)},children:"\xD7"})]}),(0,X.jsx)("div",{"data-mux-thread-preview":"",children:B(A)})]},A.id)),i.length===0&&(0,X.jsx)("div",{"data-mux-empty":"",style:{padding:"16px 12px"},children:"No threads yet \u2014 pick a CLI and send a message."})]}),(0,X.jsx)("div",{"data-mux-main":"",children:(0,X.jsxs)(qn,{runtime:k,children:[(0,X.jsx)(_o.Root,{children:(0,X.jsxs)("div",{"data-mux-turns":"",children:[y===null&&(0,X.jsxs)("div",{"data-mux-empty":"",children:[`New thread on ${Ua.find(A=>A.id===w)?.label??w}.`,(0,X.jsx)("br",{}),"Send a message to start it."]}),(0,X.jsx)(_o.Viewport,{children:(0,X.jsx)(_o.Messages,{components:{User:lp,Assistant:lp}})})]})}),(0,X.jsxs)("div",{"data-mux-composer":"",children:[(0,X.jsx)("span",{"data-mux-badge":"",children:w+(y!==null&&y.cliSessionId!==void 0?` \xB7 ${y.cliSessionId}`:"")}),(0,X.jsxs)(ss.Root,{"data-mux-composer-root":"",children:[(0,X.jsx)("textarea",{"data-mux-input":"",value:u,placeholder:"Message this CLI thread\u2026",rows:1,onChange:A=>m(A.target.value),onKeyDown:A=>{A.key==="Enter"&&!A.shiftKey&&(A.preventDefault(),C())}}),(0,X.jsx)(ss.Send,{"data-mux-send":"",disabled:!E,onClick:A=>{A.preventDefault(),C()},children:d?"Running\u2026":"Send"})]})]})]})})]})]})}var Xw=["slots","locale","remote"];function Zw(t){Ww(),t.effect(()=>t.locale.register(Fa,{zh:{"mux.panel":"Mux"},en:{"mux.panel":"Mux"}}),"dsh-mux: dictionaries");let e=t.remote.$mount(Qw).then(r=>r).catch(r=>{console.error("dsh-mux: remote mount failed",r)});return window.__dshMux=Object.freeze({ready:e,call:(r,o,...i)=>{let s=t.get(`remote.${r}`);if(s===void 0||typeof s[o]!="function")throw new Error(`remote.${r}.${o} not available`);return s[o](...i)}}),t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:cp,order:10,label:"Mux",locale:Fa},Jw)),t.slots.inject("main",()=>t.slots.register({name:"main",key:cp,locale:Fa},()=>le.default.createElement(Yw,{host:t,ready:e}))),()=>{e.then(r=>r?.()).catch(()=>{})}}
return module.exports; } });
