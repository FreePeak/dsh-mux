window.__ModuleLoader__.load({ id: "@freepeak/dsh-mux", factory: (require) => { var module = { exports: {} }; var exports = module.exports;
"use strict";var rh=Object.create;var Br=Object.defineProperty;var oh=Object.getOwnPropertyDescriptor;var ih=Object.getOwnPropertyNames;var sh=Object.getPrototypeOf,nh=Object.prototype.hasOwnProperty;var pc=t=>{throw TypeError(t)};var ah=(t,e,r)=>e in t?Br(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var ch=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},_s=(t,e)=>{for(var r in e)Br(t,r,{get:e[r],enumerable:!0})},Do=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ih(e))!nh.call(t,i)&&i!==r&&Br(t,i,{get:()=>e[i],enumerable:!(o=oh(e,i))||o.enumerable});return t},G=(t,e,r)=>(Do(t,e,"default"),r&&Do(r,e,"default")),Se=(t,e,r)=>(r=t!=null?rh(sh(t)):{},Do(e||!t||!t.__esModule?Br(r,"default",{value:t,enumerable:!0}):r,t)),lh=t=>Do(Br({},"__esModule",{value:!0}),t);var v=(t,e,r)=>ah(t,typeof e!="symbol"?e+"":e,r),hc=(t,e,r)=>e.has(t)||pc("Cannot "+r);var ft=(t,e,r)=>(hc(t,e,"read from private field"),r?r.call(t):e.get(t)),Ut=(t,e,r)=>e.has(t)?pc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),zt=(t,e,r,o)=>(hc(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r);var mn=ch((mA,yr)=>{"use strict";var Sg=typeof Buffer<"u",zl=/"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,Hl=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;function ql(t,e,r){r==null&&e!==null&&typeof e=="object"&&(r=e,e=void 0),Sg&&Buffer.isBuffer(t)&&(t=t.toString()),t&&t.charCodeAt(0)===65279&&(t=t.slice(1));let o=JSON.parse(t,e);if(o===null||typeof o!="object")return o;let i=r&&r.protoAction||"error",s=r&&r.constructorAction||"error";if(i==="ignore"&&s==="ignore")return o;if(i!=="ignore"&&s!=="ignore"){if(zl.test(t)===!1&&Hl.test(t)===!1)return o}else if(i!=="ignore"&&s==="ignore"){if(zl.test(t)===!1)return o}else if(Hl.test(t)===!1)return o;return Gl(o,{protoAction:i,constructorAction:s,safe:r&&r.safe})}function Gl(t,{protoAction:e="error",constructorAction:r="error",safe:o}={}){let i=[t];for(;i.length;){let s=i;i=[];for(let n of s){if(e!=="ignore"&&Object.prototype.hasOwnProperty.call(n,"__proto__")){if(o===!0)return null;if(e==="error")throw new SyntaxError("Object contains forbidden prototype property");delete n.__proto__}if(r!=="ignore"&&Object.prototype.hasOwnProperty.call(n,"constructor")&&n.constructor!==null&&typeof n.constructor=="object"&&Object.prototype.hasOwnProperty.call(n.constructor,"prototype")){if(o===!0)return null;if(r==="error")throw new SyntaxError("Object contains forbidden prototype property");delete n.constructor}for(let a in n){let c=n[a];c&&typeof c=="object"&&i.push(c)}}}return t}function dn(t,e,r){let{stackTraceLimit:o}=Error;Error.stackTraceLimit=0;try{return ql(t,e,r)}finally{Error.stackTraceLimit=o}}function Tg(t,e){let{stackTraceLimit:r}=Error;Error.stackTraceLimit=0;try{return ql(t,e,{safe:!0})}catch{return}finally{Error.stackTraceLimit=r}}yr.exports=dn;yr.exports.default=dn;yr.exports.parse=dn;yr.exports.safeParse=Tg;yr.exports.scan=Gl});var xy={};_s(xy,{apply:()=>by,inject:()=>vy,turnsToMessages:()=>Zp});module.exports=lh(xy);var pe=Se(require("react"),1);var lr=null;function fc(t,e){t.currentIndex=0,t.wipContextDeps=null,t.wipCommitCallbacks=[];let r=lr;lr=t;try{if(e(),t.isFirstRender=!1,t.cells.length!==t.currentIndex)throw new Error(`Rendered ${t.currentIndex} hooks but expected ${t.cells.length}. Hooks must be called in the exact same order in every render.`)}finally{lr=r}}function ve(){if(!lr)throw new Error("No resource fiber available");return lr}function De(){return lr}var ie=typeof process<"u"&&!1;var Oo=t=>({version:0,committedVersion:0,dispatchUpdate:t,changelog:[],committedLog:[],unsettledCount:0,rollbackCallbacks:[]}),Nr=t=>{t.committedVersion=t.version;for(let e of t.changelog)e.logged=!1,e.settled||(e.settled=!0,t.unsettledCount--),t.committedLog.push(e);t.changelog.length=0,t.unsettledCount===0&&(t.committedLog.length=0),t.rollbackCallbacks.length=0},Ht=(t,e)=>{let r=t.version>e;if(t.version=e,r){for(let o=0;o<t.rollbackCallbacks.length;o++)t.rollbackCallbacks[o]();if(t.rollbackCallbacks.length=0,e<=t.committedVersion){let o=[];for(;t.committedVersion-o.length>e;){let i=t.committedLog.pop();if(i===void 0){if(ie)throw new Error("tap: committed history is shorter than the replay base.");break}Bo(i.fiber,i.cell),i.cell.workInProgress=i.prevState,o.push({record:i,prevState:i.prevState,eagerState:i.eagerState,hasEagerState:i.hasEagerState})}if(o.length>0){let i=t.committedVersion;ur(t,()=>{for(let s=o.length-1;s>=0;s--){let n=o[s];n.record.prevState=n.prevState,n.record.eagerState=n.eagerState,n.record.hasEagerState=n.hasEagerState,t.committedLog.push(n.record)}t.committedVersion=i})}t.committedVersion=e;for(let i of t.changelog)i.logged=!1;t.changelog.length=0}else{for(;t.committedVersion+t.changelog.length>e;)t.changelog.pop().logged=!1;for(let o=0;o<t.changelog.length;o++)Ss(t.changelog[o]);Nr(t)}}},Ss=t=>{var e;Bo(t.fiber,t.cell),t.queued||(t.queued=!0,((e=t.cell).queue??(e.queue=[])).push(t))},At=(t,e)=>{t.wipCommitCallbacks.push(e)},ur=(t,e)=>{t.rollbackCallbacks.push(e)},Bo=(t,e)=>{e.isDirty||(e.isDirty=!0,t.markDirty?.(),ur(t.root,()=>{if(e.queue!==null){for(let r of e.queue)r.queued=!1;e.queue=null}e.workInProgress=e.current,e.isDirty=!1}))};var Ts=Symbol.for("react.memo_cache_sentinel"),Cs=t=>new Array(t).fill(Ts),uh=(t,e)=>{let r=t.memoCache,o=r.workInProgress;if(o===null){let n=r.current;o=n===null?[]:n.map(a=>a.slice()),r.workInProgress=o,ur(t.root,()=>{r.workInProgress=null})}let i=r.index++,s=o[i];return s===void 0?(s=Cs(e),o[i]=s):ie&&s.length!==e&&console.error(`Expected a constant size argument for each invocation of c(). The previous cache was allocated with size ${s.length} but size ${e} was requested.`),s},No=t=>uh(ve(),t);var $o=Se(require("react"),1),dh=$o.default,mh=t=>(0,$o.useMemo)(()=>{let e=Cs(t);return e[Ts]=!0,e},[]),gc=dh.__COMPILER_RUNTIME?.c??mh;var ph=()=>De()!==null,f=t=>ph()?No(t):gc(t);var Te=(t,...e)=>Object.assign(Object.create(null),t,...e);var I={};_s(I,{Children:()=>Eh,Fragment:()=>Bs,Suspense:()=>Ah,cloneElement:()=>$s,createContext:()=>re,createElement:()=>Ns,default:()=>gr.default,forwardRef:()=>U,isValidElement:()=>vt,lazy:()=>Ih,memo:()=>ee,use:()=>Gt,useCallback:()=>Ee,useContext:()=>me,useDebugValue:()=>Ms,useDeferredValue:()=>Rh,useEffect:()=>$,useEffectEvent:()=>be,useId:()=>Ds,useImperativeHandle:()=>Os,useInsertionEffect:()=>et,useLayoutEffect:()=>Qe,useMemo:()=>Y,useReducer:()=>ks,useRef:()=>F,useState:()=>j,useSyncExternalStore:()=>Oe});var dr=()=>{throw new Error("Rendered more hooks than during the previous render. Hooks must be called in the exact same order in every render.")},mr=()=>{throw new Error("Hook order changed between renders")};var hh=()=>({type:"effect",setup:void 0,setupDeps:void 0,cleanup:void 0,deps:null,generation:0});function Ce(t,e){let r=ve(),o=r.currentIndex++,i=r.cells[o],s=i===void 0?hh():i.type==="effect"?i:mr();if(i===void 0&&(r.isFirstRender||dr(),r.cells[o]=s,r.effectCells.push(s)),s.deps!==null&&!!e!=!!s.deps)throw new Error("useEffect called with and without dependencies across re-renders");At(r,()=>{s.setup=t,s.setupDeps=e,s.generation++})}var Rt=(t,e)=>{ie&&t.length!==e.length&&console.error(`The final argument passed to a hook changed size between renders. The order and size of this array must remain constant.

Previous: [${t.join(", ")}]
Incoming: [${e.join(", ")}]`);for(let r=0;r<t.length&&r<e.length;r++)if(!Object.is(t[r],e[r]))return!1;return!0};var vc=(t,e)=>{At(t,()=>{e.current=e.wip,e.currentDeps=e.wipDeps,e.isDirty=!1})},Pt=(t,e)=>{let r=ve(),o=r.currentIndex++,i=r.cells[o];if(i===void 0){r.isFirstRender||dr();let a=t();return ie&&r.devStrictMode&&t(),i={type:"memo",current:a,currentDeps:e,wip:a,wipDeps:e,isDirty:!1},r.cells[o]=i,a}i.type!=="memo"&&mr();let s=i;if(Rt(s.wipDeps,e))return s.isDirty&&vc(r,s),s.wip;let n=t();return ie&&r.devStrictMode&&t(),s.wip=n,s.wipDeps=e,s.isDirty||(s.isDirty=!0,ur(r.root,()=>{s.wip=s.current,s.wipDeps=s.currentDeps,s.isDirty=!1})),vc(r,s),n};function Ke(t){return Pt(()=>({current:t}),[])}var Is=Symbol("tap.Context.defaultValue"),fh=t=>t,ut=new Map,qt=new Set,bc=()=>new Map(ut),Lo=(t,e)=>{let r=ut;ut=t;try{return e()}finally{ut=r}},Es=(t,e)=>{t[Is]=e},xc=t=>typeof t=="object"&&t!==null&&Is in t,wc=t=>typeof t=="object"&&t!==null&&"$$typeof"in t&&t.$$typeof===Symbol.for("react.context"),As=t=>xc(t)||wc(t),yc=t=>{if(!xc(t)){if(wc(t)){Es(t,t._currentValue??t._currentValue2);return}throw new Error("A tap resource's `use()` only accepts a tap context.")}},gt=(t,e,r)=>{if(typeof t!="object"||t===null)throw new Error("useContextProvider only accepts a React context.");yc(t);let o=t,i=ve(),s=Ke(void 0),n=s.current===void 0||!Object.is(s.current.value,e);Ce(()=>{s.current={value:e}},[e]);let a=ut.get(o),c=a!==void 0||ut.has(o);ut.set(o,{value:e,source:i});try{return gh(o,n,r)}finally{c?ut.set(o,a):ut.delete(o)}},gh=(t,e,r)=>{let o=qt.has(t);e?qt.add(t):qt.delete(t);try{return r()}finally{o?qt.add(t):qt.delete(t)}},Fo=t=>{yc(t);let e=t,r=vh(e,t),o=ve();return(o.wipContextDeps??(o.wipContextDeps=new Map)).set(e,r.source),r.value},vh=(t,e)=>ut.get(t)??{value:fh(e)[Is],source:null},bh=(t,e,r,o)=>{if(!o)return r;let i=r;for(let[s,n]of o)n===e||n===t||(i??(i=new Map)).set(s,n);return i},Vo=(t,e=t.wipContextDeps)=>{let r=De();!r||!e||(r.wipContextDeps=bh(r,t,r.wipContextDeps,e))},Rs=()=>qt.size>0,$r=t=>{if(!t.contextDeps||!Rs())return!1;for(let e of qt.keys())if(t.contextDeps.has(e))return!0;return!1};var xh=(t,e,r)=>{if(t.isNeverMounted)throw new Error("Resource updated before mount");let o=!1,i=!0;t.root.unsettledCount++,t.root.dispatchUpdate(()=>(o||(o=!0,r&&t.root.changelog.length===0&&!e.cell.isDirty&&!e.hasEagerState&&(e.prevState=e.cell.workInProgress,e.eagerState=r(e.cell.workInProgress,e.action),e.hasEagerState=!0,i=!Object.is(e.cell.current,e.eagerState),!i&&!e.settled&&(e.settled=!0,t.root.unsettledCount--))),i),()=>(o=!0,i=!0,Ss(e),e.logged||(e.logged=!0,t.root.changelog.push(e)),!0))},wh=(t,e,r,o,i)=>{let s=o?o(r):r;ie&&t.devStrictMode&&o&&o(r);let n={type:"reducer",workInProgress:s,current:s,isDirty:!1,queue:null,renderQueue:null,reducer:e,dispatch:a=>{let c=De();if(c!==null){if(c!==t)throw new Error("Cannot update a resource while rendering a different resource.");(t.renderPendingCells??(t.renderPendingCells=new Set)).add(n),(n.renderQueue??(n.renderQueue=[])).push(a)}else{let l={fiber:t,cell:n,action:a,hasEagerState:!1,eagerState:void 0,prevState:n.current,settled:!1,queued:!1,logged:!1};xh(t,l,i?e:void 0)}}};return n};function Ps(t,e,r,o){let i=ve(),s=i.currentIndex++,n=i.cells[s],a=(()=>{if(n!==void 0)return n.type==="reducer"?n:mr();i.isFirstRender||dr();let l=wh(i,t,e,r,o);return i.cells[s]=l,l})(),c=a.queue;if(c!==null){let l=t===a.reducer;for(let u=0;u<c.length;u++){let m=c[u];!m.hasEagerState||!l||!Object.is(m.prevState,a.workInProgress)?(m.prevState=a.workInProgress,m.eagerState=t(a.workInProgress,m.action),m.hasEagerState=!0,ie&&i.devStrictMode&&(m.eagerState=t(a.workInProgress,m.action))):ie&&i.devStrictMode&&t(a.workInProgress,m.action),m.queued=!1,a.workInProgress=m.eagerState}a.queue=null}if(a.reducer=t,a.renderQueue!==null){let l=a.workInProgress;for(let u of a.renderQueue)l=t(l,u);a.renderQueue=null,i.renderPendingCells?.delete(a),Object.is(l,a.workInProgress)||(Bo(i,a),a.workInProgress=l)}return a.isDirty&&At(i,()=>{a.current=a.workInProgress,a.isDirty=!1}),[a.workInProgress,a.dispatch]}function pr(t,e,r){return Ps(t,e,r,!1)}var yh=(t,e)=>typeof e=="function"?e(t):e,_h=t=>t===void 0?void 0:typeof t=="function"?t():t;function jo(t){return Ps(yh,t,_h,!0)}var hr=(t,e)=>Pt(()=>t,e);function fr(t){let e=ve(),r=Ke(t);return r.current!==t&&At(e,()=>{r.current=t}),hr(((...o)=>{if(ie&&De())throw new Error("useEffectEvent cannot be called during render");return r.current(...o)}),[])}var Uo=t=>t!==null&&typeof t=="object"&&typeof t.then=="function",_c=()=>{},Sc=t=>{let e=t;switch(typeof e.status!="string"?(e.status="pending",t.then(r=>{e.status==="pending"&&(e.status="fulfilled",e.value=r)},r=>{e.status==="pending"&&(e.status="rejected",e.reason=r)})):e.status!=="fulfilled"&&e.status!=="rejected"&&t.then(_c,_c),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw t}};var Lr=t=>Uo(t)?Sc(t):Fo(t);var Tc=!1,zo=(t,e,r=e)=>{let o=ve().isNeverMounted,i=o?r():e();ie&&!Tc&&(!o||r===e)&&(Object.is(i,e())||(Tc=!0,console.error("The result of getSnapshot should be cached to avoid an infinite loop")));let[,s]=pr(c=>c+1,0),n=Ke(0),a=fr(()=>{try{if(Object.is(i,e()))return n.current=0,!1}catch{}return!0});return Ce(()=>t(()=>{a()&&s()}),[t]),Ce(()=>{if(a()){if(++n.current>50)throw n.current=0,new Error("Maximum update depth exceeded. The result of getSnapshot should be cached to avoid an infinite loop.");s()}},[t,i,e]),i};var Ho=(t,e)=>{};var Sh=0,qo=()=>{let t=Ke(null);return t.current??(t.current=`:tap${Sh++}:`),t.current};var Go=(t,e,r)=>{let o=()=>{if(!t)return;let i=e();if(typeof t=="function"){let s=t(i);return typeof s=="function"?s:()=>t(null)}return t.current=i,()=>{t.current=null}};r==null?Ce(o):Ce(o,[...r,t])};var kt=Se(require("react"),1),Th=kt.default;function Ch(t){let e=(0,kt.useRef)(t);return(0,kt.useInsertionEffect)(()=>{e.current=t}),(0,kt.useCallback)(((...r)=>e.current(...r)),[])}var Cc=Th.useEffectEvent??Ch;var gr=Se(require("react"),1);G(I,require("react"));var Ie=()=>De()!==null,se=gr.default,j=t=>Ie()?jo(t):se.useState(t),ks=(t,e,r)=>Ie()?pr(t,e,r):se.useReducer(t,e,r),F=t=>Ie()?Ke(t):se.useRef(t),Y=(t,e)=>Ie()?Pt(t,e):se.useMemo(t,e),Ee=(t,e)=>Ie()?hr(t,e):se.useCallback(t,e),$=(t,e)=>Ie()?Ce(t,e):se.useEffect(t,e),Qe=(t,e)=>Ie()?Ce(t,e):se.useLayoutEffect(t,e),be=t=>Ie()?fr(t):Cc(t),Oe=(t,e,r)=>Ie()?zo(t,e,r):se.useSyncExternalStore(t,e,r),Ms=(t,e)=>Ie()?Ho(t,e):se.useDebugValue(t,e),et=(t,e)=>Ie()?Ce(t,e):se.useInsertionEffect(t,e),Ds=()=>Ie()?qo():se.useId(),Os=(t,e,r)=>Ie()?Go(t,e,r):se.useImperativeHandle(t,e,r),U=t=>se.forwardRef(t),ee=(t,e)=>se.memo(t,e),Bs=se.Fragment,Ns=(...t)=>se.createElement(...t),$s=(...t)=>se.cloneElement(...t),vt=t=>se.isValidElement(t),Ih=t=>se.lazy(t),Eh=se.Children,Ah=se.Suspense,Rh=(t,e)=>se.useDeferredValue(t,e),re=t=>{let e=se.createContext(t);return Es(e,t),e},Gt=t=>Ie()&&As(t)?Lr(t):se.use(t),me=t=>Ie()&&As(t)?Lr(t):se.useContext(t);function z(t){return(...e)=>({hook:t,args:e})}function fe(t,e,r){return typeof e=="function"?(...o)=>fe(t,e(...o)):r?{...e,key:t,deps:r}:{...e,key:t}}var bt=(t,e)=>{if(t.length!==0){if(t.length===1)throw t[0];for(let r of t)console.error(r);throw new AggregateError(t,e)}};var Ph=50,We={schedulers:new Set,isScheduled:!1},dt=null,Ls=[],Vs=class{constructor(t){v(this,"_isDirty",!1);v(this,"_task");this._task=t}get isDirty(){return this._isDirty}markDirty(){if(dt&&(dt.get(this)??0)>=Ph)throw new Error("Maximum update depth exceeded. This can happen when a resource repeatedly calls setState inside useEffect.");this._isDirty=!0,We.schedulers.add(this),Ec()}runTask(){dt?.set(this,(dt.get(this)??0)+1),this._isDirty=!1,this._task()}settle(){this._isDirty=!1}},kh=[],e0=new Vs(()=>{let t=kh.splice(0),e=[];for(let r of t)try{r()}catch(o){e.push(o)}bt(e,"Errors occurred while running scheduled tasks")});var Ic=t=>{if(dt!==null){Ls.push(t);return}t()},Ec=()=>{We.isScheduled||(We.isScheduled=!0,Mh())},Fs=()=>{let t=dt;dt=new Map;let e=[];try{for(let r of We.schedulers)if(We.schedulers.delete(r),!!r.isDirty)try{r.runTask()}catch(o){e.push(o)}}finally{if(dt=t,We.schedulers.clear(),We.isScheduled=!1,dt===null)for(;Ls.length>0;)try{Ls.shift()()}catch(r){e.push(r)}}bt(e,"Errors occurred during flushSync")},Mh=(()=>{if(typeof MessageChannel<"u"){let t=null,e;return()=>{if(!t){let r=new MessageChannel;r.port1.onmessage=()=>{t?.unref?.(),Fs()},t=r.port1,e=r.port2}t.ref?.(),e.postMessage(null)}}return()=>setTimeout(Fs,0)})(),vr=t=>{if(dt!==null)return ie&&console.warn("flushTapSync was called from inside a render or commit. The flush is deferred until the current pass completes."),t();let e=We;We={schedulers:new Set,isScheduled:!0};try{let r=t();return Fs(),r}finally{let r=We.schedulers;if(We=e,r.size>0){for(let o of r)We.schedulers.add(o);Ec()}}};function Ac(t){let e=[];for(let r=0;r<t.length;r++)try{t[r]()}catch(o){e.push(o)}bt(e,"Errors during commit")}function Dh(t){let e=t.setup,r=t.setupDeps,o=t.generation,i;try{let s=e();if(s!==void 0&&typeof s!="function")throw new Error(`An effect function must either return a cleanup function or nothing. Received: ${typeof s}`);i=s}finally{t.generation===o?(t.cleanup=i,t.deps=r):i?.()}}var Oh=t=>t.setup===void 0?!1:t.deps===null||t.setupDeps===void 0?!0:!Rt(t.deps,t.setupDeps);function js(t){let e=[],r=[];for(let o of t.effectCells)Oh(o)&&r.push(o);for(let o of r)if(o.deps=null,o.cleanup!==void 0)try{o.cleanup()}catch(i){e.push(i)}finally{o.cleanup=void 0}for(let o of r)try{Dh(o)}catch(i){e.push(i)}bt(e,"Errors during commit")}function Us(t){let e=[];for(let r of t.effectCells)if(r.deps=null,r.cleanup)try{r.cleanup?.()}catch(o){e.push(o)}finally{r.cleanup=void 0}bt(e,"Errors during cleanup")}var Bh={useState:jo,useReducer:pr,useRef:Ke,useMemo:Pt,useCallback:hr,useEffect:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useEffectEvent:fr,useContext:Fo,use:Lr,useSyncExternalStore:zo,useDebugValue:Ho,useId:qo,useImperativeHandle:Go,useMemoCache:No},Rc=gr.default,Kt=Rc.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE??Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Kt==null?null:"H"in Kt?{get current(){return Kt.H},set current(t){Kt.H=t}}:"ReactCurrentDispatcher"in Kt?{get current(){return Kt.ReactCurrentDispatcher.current},set current(t){Kt.ReactCurrentDispatcher.current=t}}:null;function Pc(t){if(!Ko)return t();let e=Ko.current;Ko.current=Bh;try{return t()}finally{Ko.current=e}}function Qo(t,e,r=void 0,o){return{hook:t,root:e,markDirty:r,devStrictMode:o,cells:[],effectCells:[],contextDeps:null,wipContextDeps:null,wipCommitCallbacks:null,memoCache:{current:null,workInProgress:null,index:0},renderPendingCells:null,currentIndex:0,isFirstRender:!0,isMounted:!1,isNeverMounted:!0}}function zs(t){t.wipCommitCallbacks=null,t.wipContextDeps=null,t.memoCache.workInProgress=null}function mt(t){t.isMounted&&(t.isMounted=!1,Us(t))}function Je(t,e){if(t.renderPendingCells!==null){for(let i of t.renderPendingCells)i.renderQueue=null;t.renderPendingCells.clear()}let r=0,o;try{do{if(++r>25)throw new Error("Too many re-renders. tap limits the number of renders to prevent an infinite loop.");t.memoCache.index=0,fc(t,()=>{o=Pc(()=>t.hook(...e))})}while((t.renderPendingCells?.size??0)>0)}catch(i){throw zs(t),i}return Vo(t),o}function tt(t){let e=t.wipCommitCallbacks;t.wipCommitCallbacks=null;let r=ie&&!t.isMounted&&t.devStrictMode==="root";t.isMounted=!0,t.isNeverMounted=!1,e!==null&&(t.contextDeps=t.wipContextDeps,Nr(t.root),t.memoCache.workInProgress!==null&&(t.memoCache.current=t.memoCache.workInProgress,t.memoCache.workInProgress=null),Ac(e)),r&&(js(t),Us(t)),js(t)}var Nh=()=>{let t=ve();return t.devStrictMode?t.isFirstRender?"child":"root":null},$h=()=>"child",kc=()=>null,Lh=()=>{if(!ie)return kc;let t=F(0);return j(()=>t.current++),t.current!==2?kc:$h},Wo=()=>De()?Nh:Lh();var Fh=t=>t(),Vh=t=>{let e=[];for(let r of t)try{r()}catch(o){e.push(o)}bt(e,"Errors occurred while notifying Tap root subscribers")},jh=(t,e,r)=>{let o=new Vs(()=>a.handleUpdate()),i=[],s=Oo((c,l)=>{i.length===0&&!c()||(i.push(l),o.markDirty())}),n=Qo(Fh,s,void 0,e),a={scheduler:o,queue:i,fiber:n,subscribers:new Set,pendingHostRender:!1,isMounted:!1,hasRendered:!1,committedRender:t,context:new Map,value:void 0,applyQueue:()=>{Ht(s,s.committedVersion);for(let c of i)ie&&n.devStrictMode&&c(),c();return Ht(s,s.committedVersion+s.changelog.length),i.length},publish:(c,l)=>{o.isDirty||s.committedVersion!==l||a.value===c||(a.value=c,Ic(()=>Vh(a.subscribers)))},finishFlush:(c,l,u)=>{Nr(s),i.splice(0,u),a.pendingHostRender=!1,i.length===0&&o.settle(),a.isMounted&&tt(n),a.publish(c,l)},handleUpdate:()=>{let c=a.applyQueue(),l;try{ie&&n.devStrictMode&&Lo(a.context,()=>Je(n,[a.committedRender])),l=Lo(a.context,()=>Je(n,[a.committedRender]))}catch(u){if(Ht(s,s.committedVersion),Uo(u)){let m=()=>{a.isMounted&&o.markDirty()};u.then(m,m);return}if(a.isMounted){a.pendingHostRender=!0,r(m=>m+1);return}throw u}if(o.isDirty)throw new Error("Scheduler is dirty, this should never happen");a.finishFlush(l,s.version,c)}};return a},Hs=t=>{let[,e]=j(0),r=Wo(),o=F(null),i=o.current??(o.current=jh(t,r(),e)),s=bc(),n=i.scheduler.isDirty||i.pendingHostRender?i.applyQueue():0,a=Lo(s,()=>Je(i.fiber,[t])),c={render:t,context:s,value:a,drained:n,wip:i.fiber.wipCommitCallbacks,version:i.fiber.root.version,processed:!1};return i.hasRendered||(i.hasRendered=!0,i.committedRender=t,i.context=s,i.value=a),$(()=>(i.isMounted=!0,()=>{i.isMounted=!1,mt(i.fiber)}),[i]),$(()=>{if(c.processed){i.fiber.isMounted||(tt(i.fiber),i.queue.length&&!i.scheduler.isDirty&&i.scheduler.markDirty());return}if(c.processed=!0,i.committedRender=c.render,i.context=c.context,i.fiber.wipCommitCallbacks!==c.wip){i.scheduler.isDirty||i.handleUpdate();return}if(c.drained>0&&i.fiber.root.version===c.version){i.finishFlush(c.value,c.version,c.drained);return}tt(i.fiber),i.publish(c.value,c.version)}),Y(()=>({getValue:()=>i.value,subscribe:l=>(i.subscribers.add(l),()=>i.subscribers.delete(l))}),[i])};var Uh=()=>{let t=F(0),e=t.current,r=ve();return{version:e,markDirty:Y(()=>()=>{t.current++,r.markDirty?.()},[r]),root:r.root}},zh=()=>{let[t]=j(()=>Oo((i,s)=>{let n=!1;o(a=>(n=!i(),n?a:a+1)),n||r(s)})),[e,r]=ks((i,s)=>(Ht(t,i),i+(s()?1:0)),0),[,o]=j(0);return Ht(t,e),{root:t,version:e,markDirty:void 0}},br=()=>{let t=Wo(),{root:e,version:r,markDirty:o}=De()?Uh():zh();return{version:r,createFiber:Ee((i,s,n)=>Qo(i,e,n?()=>{n(),o?.()}:o,t()),[])}};var Jo=(t,e,r)=>{let o=F(null),i=o.current??(o.current={wipDeps:null,wip:null,currentDeps:null,current:null});return i.wipDeps=i.currentDeps,i.wip=i.current,$(()=>{i.currentDeps=i.wipDeps,i.current=i.wip}),!r&&i.currentDeps&&Rt(i.currentDeps,e)?i.current:(i.wipDeps=e,i.wip=t(),i.wip)};function ue(t){let{version:e,createFiber:r}=br(),o=Y(()=>r(t.hook,t.key),[t.hook,t.key,r]),i=Jo(()=>({value:Je(o,t.args)}),[o,e,t.args],$r(o));return $(()=>()=>mt(o),[o]),$(()=>{tt(o)},[o,i]),i.value}var Mc=(t,e)=>{let r=t.get(e);r&&(r.isDirty=!0)},Hh=(t,e)=>!t.isDirty&&!$r(t.fiber)&&e!==void 0&&t.committedDeps!==void 0&&Rt(t.committedDeps,e),qh=t=>{if(!Rs())return!1;for(let{fiber:e}of t.values())if($r(e))return!0;return!1};function Qt(t){let[e]=j(()=>new Map),{version:r,createFiber:o}=br(),i=qh(e),s=Jo(()=>{let n=new Set,a=[],c=0;for(let l=0;l<t.length;l++){let u=t[l],m=u.key;if(m===void 0)throw new Error(`useResources did not provide a key for array at index ${l}`);if(n.has(m))throw new Error(`Duplicate key ${m} in useResources`);n.add(m);let d=e.get(m);if(d)if(d.fiber.hook!==u.hook){let p=o(u.hook,u.key,()=>Mc(e,m)),h=Je(p,u.args);d.next={value:h,deps:u.deps,remount:p}}else if(Hh(d,u.deps))typeof d.next=="object"&&zs(d.fiber),d.fiber.contextDeps&&Vo(d.fiber,d.fiber.contextDeps),d.next="skip";else{let p=Je(d.fiber,u.args);d.next={value:p,deps:u.deps}}else{let p=o(u.hook,u.key,()=>Mc(e,m));d={fiber:p,next:{value:Je(p,u.args),deps:u.deps},isDirty:!1,committedDeps:void 0,committedValue:void 0},c++,e.set(m,d)}a.push(typeof d.next=="object"?d.next.value:d.committedValue)}if(e.size>a.length-c)for(let l of e.keys())n.has(l)||(e.get(l).next="delete");return a},[t,e,o,r],i);return $(()=>()=>{for(let n of e.keys())mt(e.get(n).fiber)},[e]),$(()=>{for(let[n,a]of e.entries()){let c=a.next;c==="delete"?(mt(a.fiber),e.delete(n)):c==="skip"?!a.fiber.isNeverMounted&&!a.fiber.isMounted&&tt(a.fiber):(c.remount&&(mt(a.fiber),a.fiber=c.remount),tt(a.fiber),a.committedDeps=c.deps,a.committedValue=c.value,a.isDirty=!1,a.next="skip")}},[s,e]),s}var Gh=t=>t(),Yo=t=>{let{createFiber:e}=br(),r=Y(()=>e(Gh,void 0),[e]),o=Je(r,[t]);$(()=>()=>{mt(r)},[r]);let i=!1,s=()=>{i&&r.isMounted||(i=!0,tt(r))};return $(s),{value:o,effects:s}};var Kh=()=>{let t=f(4),[e,r]=j(Qh),o;t[0]===Symbol.for("react.memo_cache_sentinel")?(o=(c,l)=>(r(u=>{let m=Te(u.renderers);return m[c]=[...m[c]??[],l],{...u,renderers:m}}),()=>{r(u=>{let m=Te(u.renderers),d=m[c]?.filter(p=>p!==l)??[];return d.length>0?m[c]=d:delete m[c],{...u,renderers:m}})}),t[0]=o):o=t[0];let i=o,s;t[1]===Symbol.for("react.memo_cache_sentinel")?(s=c=>(r(l=>({...l,fallbacks:[...l.fallbacks,c]})),()=>{r(l=>({...l,fallbacks:l.fallbacks.filter(u=>u!==c)}))}),t[1]=s):s=t[1];let n=s,a;return t[2]!==e?(a={getState:()=>e,setDataUI:i,setFallbackDataUI:n},t[2]=e,t[3]=a):a=t[3],a},Dc=z(Kh);function Qh(){return{renderers:Te(),fallbacks:[]}}var qs=t=>{if(!t.overwrite)return t;let{overwrite:e,...r}=t;return r},Oc=t=>{let e=Array.from(t).map(o=>o.getModelContext()).sort((o,i)=>(i.priority??0)-(o.priority??0)),r=Te();return e.reduce((o,i)=>{let s=i.priority??0;if(i.system&&(o.system?o.system+=`

${i.system}`:o.system=i.system),i.tools)for(let[n,a]of Object.entries(i.tools)){let c=o.tools!==void 0&&Object.hasOwn(o.tools,n)?o.tools[n]:void 0;if(c&&c!==a){let l=r[n];if(l===s){if(!a.overwrite)throw new Error(`You tried to define a tool with the name ${n}, but it already exists.`);o.tools[n]=qs(a);continue}let u=l>s?c:a,m=l>s?a:c;o.tools[n]=qs({...m,...u}),r[n]=Math.max(l,s);continue}o.tools||(o.tools=Te()),o.tools[n]=qs(a),Object.hasOwn(r,n)||(r[n]=s)}return i.config&&(o.config={...o.config,...i.config}),i.callSettings&&(o.callSettings={...o.callSettings,...i.callSettings}),i.unstable_composerMetadata&&(o.unstable_composerMetadata={...o.unstable_composerMetadata,...i.unstable_composerMetadata}),o},{})};var we=(t,e,r)=>{let o=i=>{console.error(`[assistant-ui] ${r} listener threw an error`,i)};for(let i of t)try{let s=i(typeof e=="function"?e():e);s!==null&&(typeof s=="object"||typeof s=="function")&&"then"in s&&typeof s.then=="function"&&Promise.resolve(s).catch(o)}catch(s){o(s)}};var ne=t=>t;var Wh=new Set(["$$typeof","nodeType","then","__v_raw","__v_isRef","__v_isReactive","__v_isReadonly","__v_isShallow","__v_skip"]),Ye=(t,e)=>{if(t===Symbol.toStringTag)return e;if(typeof t!="symbol"){if(t==="toJSON")return()=>e;if(!Wh.has(t))return!1}},xt=class{getOwnPropertyDescriptor(t,e){let r=this.get(t,e);if(r!==void 0)return{value:r,writable:!1,enumerable:!0,configurable:!0}}set(){return!1}setPrototypeOf(){return!1}defineProperty(){return!1}deleteProperty(){return!1}preventExtensions(){return!1}};var Xo=Symbol("assistant-ui.store.clientId"),Zo=Symbol("assistant-ui.store.instanceTag"),Gs=(t,e)=>{let r=new Proxy((()=>{}),{apply:()=>(e(),r),get:(o,i)=>i==="source"?t.source:i==="query"?t.query:i==="name"?t.name:i===Xo?ti(e()):e()[i],has:(o,i)=>i==="source"||i==="query"||i==="name"||i===Xo||i in e(),ownKeys:()=>Reflect.ownKeys(e()),getOwnPropertyDescriptor:(o,i)=>{if(!(typeof i=="symbol"||!(i in e())))return{value:e()[i],writable:!1,enumerable:!0,configurable:!0}}});return r},Ks=(t,e)=>{let r=()=>{throw new Error(t)};return new Proxy((()=>{}),{apply:r,get:(o,i)=>{if(i==="source"||i==="query")return null;if(i==="name")return e;if(i===Xo)return r();let s=Ye(i,"AssistantClientAccessor");return s!==!1?s:r()},has:(o,i)=>i==="source"||i==="query"||i==="name",ownKeys:()=>[],getOwnPropertyDescriptor:()=>{}})},Mt=t=>t?.source!=null,ei=t=>t?.source===null,ti=t=>t[Xo]??t,Bc=t=>t[Zo]??ti(t);var wt=t=>t==="optional"||t==="subscribe"||t==="on"||t==="__proto__"||typeof t=="symbol",Fr=t=>{let e=[];for(let r in t)wt(r)||e.push(r);return e};var Wt,Nc,Jh=(Nc=class extends xt{constructor(e){super();Ut(this,Wt);zt(this,Wt,e)}get(e,r){let o=Ye(r,"OptionalAssistantClient");if(o!==!1)return o;if(wt(r))return;let i=ft(this,Wt)[r];return Mt(i)?i:void 0}ownKeys(){return Fr(ft(this,Wt))}has(e,r){return!wt(r)&&r in ft(this,Wt)}},Wt=new WeakMap,Nc),ri=t=>new Proxy({},new Jh(t));var $c=()=>()=>{},Yh="You are using a component or hook that requires an AuiProvider. Wrap your component in an <AuiProvider> component.",Vr,jr,Ur,oi,Lc,Xh=(Lc=class extends xt{constructor(e,r,o){super();Ut(this,Vr);Ut(this,jr);Ut(this,Ur);Ut(this,oi);zt(this,Vr,e),zt(this,jr,r),zt(this,Ur,o)}get(e,r){if(r==="subscribe"||r==="on")return $c;if(r==="optional")return ft(this,oi)??zt(this,oi,ri(ft(this,Ur).call(this)));let o=Ye(r,ft(this,Vr));return o!==!1?o:Ks(ft(this,jr).call(this,String(r)),String(r))}ownKeys(){return["subscribe","on","optional"]}getOwnPropertyDescriptor(e,r){if(r!=="optional")return super.getOwnPropertyDescriptor(e,r);let o=this.get(e,r);if(o!==void 0)return{value:o,writable:!1,enumerable:!1,configurable:!0}}has(e,r){return r==="subscribe"||r==="on"||r==="optional"}},Vr=new WeakMap,jr=new WeakMap,Ur=new WeakMap,oi=new WeakMap,Lc),Zh=(t,e)=>{let r=new Proxy({},new Xh(t,e,()=>r));return r},Dt=Zh("DefaultAssistantClient",()=>Yh),Fc=()=>new Proxy({},{get(t,e){let r=Ye(e,"AssistantClient");return r!==!1?r:Ks(`The current scope does not have a "${String(e)}" property.`,String(e))}}),ii=re(Dt),ef=()=>{},Vc=new WeakMap,jc=t=>Vc.get(t)??ef,Uc=(t,e)=>{Vc.set(t,e)},zr=()=>me(ii),zc=(t,e)=>gt(ii,t,e);var Qs=Symbol("assistant-ui.transform-scopes");function Hr(t,e){let r=t;if(r[Qs])throw new Error("transformScopes is already attached to this resource");r[Qs]=e}function Hc(t){return t[Qs]}var qr=t=>typeof t=="string"?{scope:t.split(".")[0],event:t}:{scope:t.scope,event:t.event};var qc=t=>{console.error("NotificationManager: event listener error",t)},Gc=(t,e,r)=>{try{let o=t(e,r);o!==null&&(typeof o=="object"||typeof o=="function")&&typeof o.then=="function"&&Promise.resolve(o).catch(qc)}catch(o){qc(o)}},tf=()=>{let t=new Map,e=new Set,r=new Set;return{on(o,i){let s=i;if(o==="*")return e.add(s),()=>e.delete(s);let n=t.get(o);return n||(n=new Set,t.set(o,n)),n.add(s),()=>{n.delete(s),n.size===0&&t.get(o)===n&&t.delete(o)}},emit(o,i,s){!t.has(o)&&e.size===0||queueMicrotask(()=>{let n=t.get(o);if(n)for(let a of n)Gc(a,i,s);if(e.size>0){let a={event:o,payload:i};for(let c of e)Gc(c,a,s)}})},subscribe(o){return r.add(o),()=>r.delete(o)},notifySubscribers(){for(let o of r)try{o()}catch(i){console.error("NotificationManager: subscriber callback error",i)}}}},Ws=()=>j(tf)[0];var si=Symbol("assistant-ui.store.clientIndex"),Kc=t=>t[si],Qc=re([]),Gr=()=>Gt(Qc),Wc=(t,e)=>{let r=f(3),o=Gr(),i;return r[0]!==t||r[1]!==o?(i=[...o,t],r[0]=t,r[1]=o,r[2]=i):i=r[2],gt(Qc,i,e)};var Yc=re(null),Jc=Symbol("aui.scope-effect-unapplied"),Xc=(t,e)=>gt(Yc,t,e),Js=()=>{let t=Gt(Yc);if(!t)throw new Error("AssistantTapContext is not available");return t},Kr=()=>Js().clientRef,Qr=(t,e,r)=>{let o=f(8),{clientRef:i}=Js(),s;o[0]!==i||o[1]!==e||o[2]!==t?(s=()=>{let a=i.current;if(a===null)throw new Error("useAssistantScopeEffect ran before the client was committed. This is likely an internal bug in assistant-ui.");let c=()=>{let p=i.current?.[t];return p!==void 0&&Mt(p)?Bc(p):void 0},l=Jc,u,m=p=>{if(u?.(),u=void 0,l=Jc,p!==void 0){let h=e();u=typeof h=="function"?h:void 0}l=p};m(c());let d=a.subscribe(()=>{let p=c();p!==l&&m(p)});return()=>{d(),u?.()}},o[0]=i,o[1]=e,o[2]=t,o[3]=s):s=o[3];let n;o[4]!==i||o[5]!==r||o[6]!==t?(n=[i,t,...r],o[4]=i,o[5]=r,o[6]=t,o[7]=n):n=o[7],$(s,n)},je=()=>{let t=f(3),{emit:e}=Js(),r=Gr(),o;return t[0]!==r||t[1]!==e?(o=(i,s)=>{e(i,s,r)},t[0]=r,t[1]=e,t[2]=o):o=t[2],be(o)};var ni=re(void 0),Ys=(t,e)=>{let r=Gt(ni);return gt(ni,t??r,e)};var ai=()=>{let t=f(3),[e]=j(rf),r,o;return t[0]!==e?(r=()=>()=>queueMicrotask(()=>e.abort()),o=[e],t[0]=e,t[1]=r,t[2]=o):(r=t[1],o=t[2]),et(r,o),e.signal};function rf(){return new AbortController}var ci=Symbol("assistant-ui.store.getValue"),Xs=t=>{let e=t[ci];if(!e)throw new Error("Client scope contains a non-client resource. Ensure your Derived get() returns a client created with useClientResource(), not a plain resource.");return e.getState?.()},Zc=new Map;function of(t){let e=Zc.get(t);return e||(e=function(...r){if(!this||typeof this!="object")throw new Error(`Method "${String(t)}" called without proper context. This may indicate the function was called incorrectly.`);let o=this[ci];if(!o)throw new Error(`Method "${String(t)}" called on invalid client proxy. Ensure you are calling this method on a valid client instance.`);let i=o[t];if(!i)throw new Error(`Method "${String(t)}" is not implemented.`);if(typeof i!="function")throw new Error(`"${String(t)}" is not a function.`);return i(...r)},Zc.set(t,e)),e}var sf=class extends xt{constructor(e,r,o){super();v(this,"boundFns");v(this,"cachedReceiver");v(this,"outputRef");v(this,"tagRef");v(this,"index");this.outputRef=e,this.tagRef=r,this.index=o}get(e,r,o){if(r===ci)return this.outputRef.current;if(r===si)return this.index;if(r===Zo)return this.tagRef.current;let i=Ye(r,"ClientProxy");if(i!==!1)return i;let s=this.outputRef.current[r];if(typeof s=="function"){if(o===void 0)return s;(!this.boundFns||this.cachedReceiver!==o)&&(this.boundFns=new Map,this.cachedReceiver=o);let n=this.boundFns.get(r);return n||(n=of(r).bind(o),this.boundFns.set(r,n)),n}return s}ownKeys(){return Object.keys(this.outputRef.current)}has(e,r){return r===ci||r===si||r===Zo?!0:r in this.outputRef.current}},yt=t=>{let e=F(null),r=F(null),o=Y(()=>({}),[t.hook,t.key]),i=Gr().length,s=Y(()=>new Proxy({},new sf(e,r,i)),[i]),n=Wc(s,function(){return ue(t)});return e.current||(e.current=n,r.current=o),$(()=>{e.current=n,r.current=o}),{methods:s,state:n.getState?.(),key:t.key}},li=z(yt);var Ae=(t,e)=>{if(Array.isArray(t)!==Array.isArray(e))return!1;if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;for(let o=0;o<t.length;o++)if(!Object.is(t[o],e[o]))return!1;return!0}let r=Object.keys(t);return r.length===Object.keys(e).length&&r.every(o=>Object.hasOwn(e,o)&&Object.is(t[o],e[o]))};var Wr=t=>{let e=Y(()=>({}),[]);return e.v!==void 0&&Ae(e.v,t)?e.v:(e.v=t,t)},Be=t=>{let e=f(2),r=F(void 0),o;return e[0]!==t?(o=i=>{let s=t(i);return r.current!==void 0&&Ae(r.current,s)?r.current:(r.current=s,s)},e[0]=t,e[1]=o):o=e[1],o};var ui=(()=>{try{return!1}catch{return!1}})();var nf=(t,e)=>{let r={...t},o=new Set,i=!0;for(;i;){i=!1;for(let s of Object.values(r)){if(o.has(s.hook))continue;o.add(s.hook);let n=Hc(s.hook);if(n){n(r,e),i=!0;break}}}return r},di=t=>t.hook===en,af=t=>{if(!di(t))return{source:"root",query:{}};let e=t.args[0];return{source:e.source,query:e.query??{}}},Zs=Symbol.for("aui.event-receiver-ref"),el=(t,e)=>{let r=t===Dt?Fc():t,o=Object.create(r);Object.assign(o,e);let i;return Object.defineProperty(o,"optional",{get:()=>i??(i=ri(o)),enumerable:!1}),o},cf=({notifications:t,clientRef:e})=>Y(()=>({subscribe:t.subscribe,on:function(r,o){if(!this)throw new Error("const { on } = useAui() is not supported. Use aui.on() instead.");let{scope:i,event:s}=qr(r),n=r[Zs];if(i!=="*"&&!n&&ei(this[i]))throw new Error(`Scope "${i}" is not available. Use { scope: "*", event: "${s}" } to listen globally.`);let a=t.on(s,(l,u)=>{if(i==="*")return o(l);let m=((n??e).current??this)[i];if(!Mt(m))return;let d=ti(m);if(d===u[Kc(d)])return o(l)});if(i!=="*"){if(n){if(e.parent===Dt)return a}else if(ei(e.parent[i]))return a}let c=e.parent.on(r,o);return()=>{a(),c()}}}),[t,e]),tl=t=>{let e=f(5),r;e[0]!==t?(r=af(t),e[0]=t,e[1]=r):r=e[1];let{source:o,query:i}=r,s=Wr(i),n;return e[2]!==o||e[3]!==s?(n={source:o,query:s},e[2]=o,e[3]=s,e[4]=n):n=e[4],Wr(n)},lf=(t,e)=>{let r=f(3),o;return r[0]!==e||r[1]!==t?(o=e?t:li(t),r[0]=e,r[1]=t,r[2]=o):o=r[2],ue(o)},uf=(t,e)=>{let r=zr(),o=di(e),i=lf(e,o),s=o?i:i.methods,n=tl(e),a=Y(()=>Gs({name:t,...n},()=>s),[t,n,s]);return r[t]=a,a},df=z(uf),mf=t=>{let e=f(2),r;return e[0]!==t?(r=t.map(bf),e[0]=t,e[1]=r):r=e[1],Qt(r)},rl=(t,e)=>{let r=Wr(e),o=Y(()=>({}),[]);return o.deps!==r&&(o.deps=r,o.client=t),o.client},ol=({parent:t,entries:e,clientRef:r,notifications:o})=>{let i=cf({notifications:o,clientRef:r}),s=el(t,i),n=Xc({clientRef:r,emit:o.emit},function(){return zc(s,function(){return mf(e)})});return{client:rl(s,[t,...n])}},pf=({parent:t,entries:e,destroySignal:r})=>{let o=F({parent:t,current:null}).current,{value:i,effects:s}=Yo(function(){let a=Ws(),{client:c}=Ys(r,function(){return ol({parent:t,entries:e,clientRef:o,notifications:a})});return $(()=>t.subscribe(a.notifySubscribers),[t,a]),$(()=>a.notifySubscribers()),c});return et(()=>{o.parent=t,o.current=i},[i,t,o]),{client:i,effects:s}},hf=({parent:t,entries:e,destroySignal:r})=>{let o=F({parent:t,current:null}).current,{value:i,effects:s}=Yo(function(){let a=Ws(),c=Hs(function(){return Ys(r,function(){return ol({parent:t,entries:e,clientRef:o,notifications:a})})}),l=Oe(c.subscribe,()=>c.getValue().client,()=>c.getValue().client);return $(()=>{let u=()=>vr(()=>{o.current=c.getValue().client,a.notifySubscribers()}),m=c.subscribe(u),d=t.subscribe(u);return()=>{m(),d()}},[c,t,a]),l});return et(()=>{o.parent=t,o.current=i},[i,t,o]),{client:i,effects:s}},ff=(t,e,r,o)=>{let{get:i}=o.args[0],s=Oe(t.subscribe,()=>i(t),()=>i(t)),n=tl(o),a=Y(()=>Gs({name:r,...n},()=>s),[r,n,s]);return e[r]=a,a},gf=(t,e)=>{if(ui){let[a]=j(()=>e.map(([u])=>u).join(",")),c=e.find(([,u])=>!di(u));if(c)throw new Error(`Scope "${c[0]}" is a root scope but this useAui mounted derived-only; remount with a new key to change scope kinds.`);let l=e.map(([u])=>u).join(",");if(l!==a)throw new Error(`A derived-only config mounted scopes [${a}] but now has [${l}]; remount with a new key to change the scope set.`)}let r=F({parent:t,current:null}).current,o=function(a,c){if(!this)throw new Error("const { on } = useAui() is not supported. Use aui.on() instead.");let{scope:l,event:u}=qr(a);if(l==="*")return t.on(a,c);let m=a[Zs];if(!m&&ei(this[l]))throw new Error(`Scope "${l}" is not available. Use { scope: "*", event: "${u}" } to listen globally.`);return t.on({scope:l,event:u,[Zs]:m??r},c)},i=el(t,{subscribe:t.subscribe,on:o}),s=e.map(([a,c])=>ff(t,i,a,c)),n=rl(i,[t,...s]);return et(()=>{r.parent=t,r.current=n},[n,t,r]),n},vf=(t,e)=>{let r=f(8),o;r[0]!==e||r[1]!==t?(o=Object.entries(nf(e,t)),r[0]=e,r[1]=t,r[2]=o):o=r[2];let i=o,s;r[3]!==i?(s=()=>i.length===0||i.some(xf),r[3]=i,r[4]=s):s=r[4];let[n]=j(s),a;return r[5]!==i||r[6]!==n?(a={entries:i,rooted:n},r[5]=i,r[6]=n,r[7]=a):a=r[7],a},il=(t,e,r,o)=>{let{entries:i,rooted:s}=vf(t,e);return s?r({parent:t,entries:i,destroySignal:o}):{client:gf(t,i)}},sl=(t,e,r)=>il(t,e,pf,r);function B(t){let e=zr();if(t){let r=ai(),{client:o,effects:i}=il(e,t,hf,r);return i&&Uc(o,i),o}return e}function bf(t){let[e,r]=t;return fe(e,df(e,r))}function xf(t){let[,e]=t;return!di(e)}var wf=t=>{let e;class r extends xt{get(s,n){let a=Ye(n,"OptionalAssistantState");if(a!==!1)return a;let c=n;if(!wt(c)&&Mt(t[c]))return Xs(t[c]())}ownKeys(){return Fr(t)}has(s,n){return!wt(n)&&n in t}}class o extends xt{get(s,n){let a=Ye(n,"AssistantState");if(a!==!1)return a;if(n==="optional")return e??(e=new Proxy({},new r));let c=n;if(!wt(c))return Xs(t[c]())}ownKeys(){return[...Fr(t),"optional"]}has(s,n){return n==="optional"||!wt(n)&&n in t}}return new Proxy({},new o)},nl=new WeakMap,al=t=>{let e=nl.get(t);return e||(e=wf(t),nl.set(t,e)),e};var E=t=>{let e=f(6),r=B(),o;e[0]!==r?(o=al(r),e[0]=r,e[1]=o):o=e[1];let i=o,s,n;e[2]!==i||e[3]!==t?(s=()=>t(i),n=()=>t(i),e[2]=i,e[3]=t,e[4]=s,e[5]=n):(s=e[4],n=e[5]);let a=Oe(r.subscribe,s,n);if(typeof a=="object"&&a!==null&&(a===i||a===i.optional))throw new Error("You tried to return the entire AssistantState. This is not supported due to technical limitations.");return Ms(a),a};var en=t=>{let e=f(3),{get:r}=t,o=B(),i;return e[0]!==o||e[1]!==r?(i=()=>r(o),e[0]=o,e[1]=r,e[2]=i):i=e[2],E(i)},ae=z(en);var cl=t=>{if(t.key===void 0)throw new Error("useClientLookup: Element has no key");return t.key};function Ne(t){let e=f(12),r;e[0]!==t?(r=t.map(Sf),e[0]=t,e[1]=r):r=e[1];let o=Qt(r),i;e[2]!==t?(i=t.reduce(_f,Object.create(null)),e[2]=t,e[3]=i):i=e[3];let s=i,n;e[4]!==o?(n=o.map(yf),e[4]=o,e[5]=n):n=e[5];let a=n,c;e[6]!==s||e[7]!==o?(c=u=>{if("index"in u){if(u.index<0||u.index>=o.length)throw new Error(`useClientLookup: index ${u.index} out of bounds (length: ${o.length}) (ignore if recovered)`);return o[u.index].methods}let m=s[u.key];if(m===void 0)throw new Error(`useClientLookup: key "${u.key}" not found (ignore if recovered)`);return o[m].methods},e[6]=s,e[7]=o,e[8]=c):c=e[8];let l;return e[9]!==a||e[10]!==c?(l={state:a,get:c},e[9]=a,e[10]=c,e[11]=l):l=e[11],l}function yf(t){return t.state}function _f(t,e,r){return t[cl(e)]=r,t}function Sf(t){return fe(cl(t),li(t),t.deps)}var mi=(t,e=0)=>e===0?Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<=1||t.scrollHeight<=t.clientHeight:t.scrollHeight-e-t.scrollTop-t.clientHeight<=1||t.scrollHeight-e<=t.clientHeight,tn=(t,e=0)=>e===0?t.scrollHeight>t.clientHeight+1:t.scrollHeight-e>t.clientHeight+1,rn=(t,e)=>t.scrollTop>e.scrollTop&&t.scrollHeight===e.scrollHeight;var Re=Symbol("skip-update"),rt=(t,...e)=>{let r=[];for(let o of t)try{o(...e)}catch(i){r.push(i)}if(r.length===1)throw r[0];if(r.length>1){for(let o of r)console.error(o);throw new AggregateError(r)}},pi=t=>{rt(t)},ll=(t,e)=>t===void 0||e===void 0?t===e:Ae(t,e),Ot=class{constructor(){v(this,"_subscribers",new Set)}subscribe(t){return this._subscribers.add(t),()=>this._subscribers.delete(t)}waitForUpdate(){return new Promise(t=>{let e=this.subscribe(()=>{e(),t()})})}_notifySubscribers(){rt(this._subscribers)}};var hi=class{constructor(){v(this,"_subscriptions",new Set);v(this,"_connection")}get isConnected(){return!!this._connection}notifySubscribers(t,e){if(e){we(this._subscriptions,t,e);return}rt(this._subscriptions,t)}_updateConnection(){if(this._subscriptions.size>0){if(this._connection)return;this._connection=this._connect()}else{let t=this._connection;this._connection=void 0,t?.()}}subscribe(t){return this._subscriptions.add(t),this._updateConnection(),()=>{this._subscriptions.delete(t),this._updateConnection()}}},Pe=class extends hi{constructor(e){super();v(this,"binding");v(this,"_previousState");v(this,"getState",()=>(this.isConnected||this._syncState(),this._previousState));this.binding=e;let r=e.getState();if(r===Re)throw new Error("Entry not available in the store");this._previousState=r}get path(){return this.binding.path}_syncState(){let e=this.binding.getState();return e===Re||ll(e,this._previousState)?!1:(this._previousState=e,!0)}_connect(){let e=()=>{this._syncState()&&this.notifySubscribers()},r=this.binding.subscribe(e);return this._syncState(),r}},Jr=class extends hi{constructor(e){super();v(this,"binding");v(this,"_previousStateDirty",!0);v(this,"_previousState");v(this,"getState",()=>{if(!this.isConnected||this._previousStateDirty){let e=this.binding.getState();e!==Re&&(this._previousState===void 0||!ll(e,this._previousState))&&(this._previousState=e),this._previousStateDirty=!1}if(this._previousState===void 0)throw new Error("Entry not available in the store");return this._previousState});this.binding=e}get path(){return this.binding.path}_connect(){let e=()=>{this._previousStateDirty=!0,this.notifySubscribers()},r=this.binding.subscribe(e);return this._previousStateDirty=!0,r}},Jt=class extends hi{constructor(e){super();v(this,"binding");this.binding=e}get path(){return this.binding.path}getState(){return this.binding.getState()}outerSubscribe(e){return this.binding.subscribe(e)}_connect(){let e=()=>{this.notifySubscribers()},r=this.binding.getState(),o=r?.subscribe(e),i=()=>{let n=this.binding.getState();if(n===r)return;r=n;let a=o;o=void 0;try{a?.()}finally{o=n?.subscribe(e),e()}},s=this.outerSubscribe(i);return()=>pi([()=>s?.(),()=>o?.()])}},fi=class extends hi{constructor(e){super();v(this,"config");this.config=e}getState(){return this.config.binding.getState()}outerSubscribe(e){return this.config.binding.subscribe(e)}_connect(){let e=`Runtime event "${this.config.event}"`,r=a=>{this.notifySubscribers(a,e)},o=this.config.binding.getState(),i=o?.unstable_on(this.config.event,r),s=()=>{let a=this.config.binding.getState();if(a===o)return;o=a;let c=i;i=void 0;try{c?.()}finally{i=a?.unstable_on(this.config.event,r)}},n=this.outerSubscribe(s);return()=>pi([()=>n?.(),()=>i?.()])}};var gi=class{constructor(){v(this,"_providers",new Map);v(this,"_providerUnsubscribes",new Map);v(this,"_subscribers",new Set)}getModelContext(){return Oc(new Set(this._providers.values()))}registerModelContextProvider(t){let e=Symbol();this._providers.set(e,t);let r;try{r=t.subscribe?.(()=>{this.notifySubscribers()})}catch(i){this._providers.delete(e);try{this.notifySubscribers()}catch(s){console.error(s)}throw i}this._providerUnsubscribes.set(e,r),this.notifySubscribers();let o=!1;return()=>{if(o)return;o=!0,this._providers.delete(e);let i=this._providerUnsubscribes.get(e);this._providerUnsubscribes.delete(e);let s=!1,n,a=c=>{try{c()}catch(l){s?console.error(l):(s=!0,n=l)}};if(i&&a(i),a(()=>this.notifySubscribers()),s)throw n}}notifySubscribers(){rt(this._subscribers)}subscribe(t){return this._subscribers.add(t),()=>{this._subscribers.delete(t)}}};var on=[],Tf={modelName:void 0,toolNames:on},Cf=(t,e)=>t===e||Ae(t,e),vi=(t,e)=>{let r=t.getModelContext(),o=r.config?.modelName,i=r.tools?Object.keys(r.tools).sort():on,s=i.length?i:on;return o===e.modelName&&Cf(s,e.toolNames)?e:{modelName:o,toolNames:s}},If=()=>{let t=f(11),e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=new gi,t[0]=e):e=t[0];let r=e,o;t[1]===Symbol.for("react.memo_cache_sentinel")?(o=()=>vi(r,Tf),t[1]=o):o=t[1];let[i,s]=j(o),n,a;t[2]===Symbol.for("react.memo_cache_sentinel")?(n=()=>(s(p=>vi(r,p)),r.subscribe(()=>{s(p=>vi(r,p))})),a=[r],t[2]=n,t[3]=a):(n=t[2],a=t[3]),$(n,a);let c;t[4]!==i?(c=()=>vi(r,i),t[4]=i,t[5]=c):c=t[5];let l,u,m;t[6]===Symbol.for("react.memo_cache_sentinel")?(l=()=>r.getModelContext(),u=p=>r.subscribe(p),m=p=>r.registerModelContextProvider(p),t[6]=l,t[7]=u,t[8]=m):(l=t[6],u=t[7],m=t[8]);let d;return t[9]!==c?(d={getState:c,getModelContext:l,subscribe:u,register:m},t[9]=c,t[10]=d):d=t[10],d},bi=z(If);var ul=(t,e)=>{if(!(e.status?.type==="running"||e.status?.type==="requires-action")){let o=t.complete;return typeof o!="function"?o??null:o({args:e.args,result:e.result})}let r=t.running;return typeof r!="function"?r??null:r({args:e.args})};var dl=t=>t.display!==void 0?t.display==="standalone":t.type==="human",ml=t=>function(r){return ul(t,r)};var pl=t=>{let e=f(16),{toolkit:r,mcpApp:o}=t,i;e[0]!==o?(i=o?[fe("mcpApp",o)]:[],e[0]=o,e[1]=i):i=e[1];let s=Qt(i)[0],[n,a]=j(Ef),c;e[2]!==s||e[3]!==n?(c={toolUIs:n,mcpApp:s},e[2]=s,e[3]=n,e[4]=c):c=e[4];let l=c,u=Kr(),m;e[5]===Symbol.for("react.memo_cache_sentinel")?(m=(x,S,_)=>{let C={render:S,renderText:_?.renderText,standalone:_?.standalone??!1};return a(P=>{let A=Te(P);return A[x]=[...A[x]??[],C],A}),()=>{a(P=>{let A=P[x]?.filter(k=>k!==C)??[],w=Te(P);return A.length>0?(w[x]=A,w):(delete w[x],w)})}},e[5]=m):m=e[5];let d=m,p,h;e[6]!==r?(p=()=>{if(!r)return;let x=[];for(let[S,_]of Object.entries(r)){let C="render"in _?_.render:void 0,P="renderText"in _?_.renderText:void 0,A=C??(P?ml(P):void 0);A&&x.push(d(S,A,{standalone:dl(_),renderText:P}))}return()=>{x.forEach(Af)}},h=[r,d],e[6]=r,e[7]=p,e[8]=h):(p=e[7],h=e[8]),$(p,h);let g;e[9]!==u||e[10]!==r?(g=()=>{if(!r)return;let x=Object.entries(r).reduce(Rf,Te());return u.current.modelContext().register({getModelContext:()=>({tools:x})})},e[9]=u,e[10]=r,e[11]=g):g=e[11];let b;e[12]!==r?(b=[r],e[12]=r,e[13]=b):b=e[13],Qr("modelContext",g,b);let y;return e[14]!==l?(y={getState:()=>l,setToolUI:d},e[14]=l,e[15]=y):y=e[15],y},hl=z(pl);Hr(pl,(t,e)=>{!t.modelContext&&e.modelContext.source===null&&(t.modelContext=bi())});function Ef(){return Te()}function Af(t){return t()}function Rf(t,e){let[r,o]=e;if(o.type==="mcp")return t;let{display:i,render:s,renderText:n,...a}=o;return t[r]=a,t}var $e=t=>Oe(t.subscribe,t.getState,t.getServerSnapshot);var Pf=Symbol.for("assistant-ui.silent-runtime-action"),fl=t=>typeof t=="object"&&t!==null&&Pf in t;var xi=(t,e)=>{let r=e();return r.catch(o=>{fl(o)||console.error(`[assistant-ui] ${t} failed:`,o)}),r};var kf=t=>{let e=f(9),{runtime:r}=t,o=$e(r),i;e[0]!==o?(i=()=>o,e[0]=o,e[1]=i):i=e[1];let s,n;e[2]!==r?(s=()=>xi("attachment remove",r.remove),n=()=>r,e[2]=r,e[3]=s,e[4]=n):(s=e[3],n=e[4]);let a;return e[5]!==i||e[6]!==s||e[7]!==n?(a={getState:i,remove:s,__internal_getRuntime:n},e[5]=i,e[6]=s,e[7]=n,e[8]=a):a=e[8],a},wi=z(kf);var Mf=t=>{let e=f(5),{runtime:r,index:o}=t,i;e[0]!==o||e[1]!==r?(i=r.getAttachmentByIndex(o),e[0]=o,e[1]=r,e[2]=i):i=e[2];let s=i,n;return e[3]!==s?(n=wi({runtime:s}),e[3]=s,e[4]=n):n=e[4],ue(n)},Df=z(Mf),Of=({item:t,onMove:e,onRemove:r})=>({getState:()=>t,steer:()=>e({lane:"steer",insertAfter:null}),move:e,remove:r}),Bf=z(Of),Nf=t=>{let e=f(63),{threadIdRef:r,messageIdRef:o,runtime:i,isSuggestion:s}=t,n=$e(i),a=je(),c=F(!1),l,u;e[0]!==a||e[1]!==o||e[2]!==i||e[3]!==r?(l=()=>{let O=[],T=i.unstable_on("send",L=>{let q=c.current;c.current=!1,a("composer.send",{threadId:r.current,...o&&{messageId:o.current},chars:L.chars,attachments:L.attachments,...q?{suggestion:!0}:void 0})});O.push(T);let R=i.unstable_on("attachmentAdd",L=>{a("composer.attachmentAdd",{threadId:r.current,...o&&{messageId:o.current},...L.contentType?{contentType:L.contentType}:void 0})});return O.push(R),O.push(i.unstable_on("attachmentAddError",L=>{a("composer.attachmentAddError",{threadId:r.current,...o&&{messageId:o.current},...L.attachmentId&&{attachmentId:L.attachmentId},reason:L.reason,message:L.message,...L.contentType?{contentType:L.contentType}:void 0})})),()=>{for(let L of O)L()}},u=[i,a,r,o],e[0]=a,e[1]=o,e[2]=i,e[3]=r,e[4]=l,e[5]=u):(l=e[4],u=e[5]),$(l,u);let m;if(e[6]!==i||e[7]!==n.attachments){let O;e[9]!==i?(O=(T,R)=>fe(T.id,Df({runtime:i,index:R}),[i,R]),e[9]=i,e[10]=O):O=e[10],m=n.attachments.map(O),e[6]=i,e[7]=n.attachments,e[8]=m}else m=e[8];let d=Ne(m),p=n.queue,h;if(e[11]!==p||e[12]!==i){let O;e[14]!==i?(O=T=>fe(T.id,Bf({item:T,onMove:R=>i.moveQueueItem(T.id,R),onRemove:()=>i.removeQueueItem(T.id)})),e[14]=i,e[15]=O):O=e[15],h=p.map(O),e[11]=p,e[12]=i,e[13]=h}else h=e[13];let g=Ne(h),b=n.type??"thread",y;e[16]!==d.state||e[17]!==p||e[18]!==n.attachmentAccept||e[19]!==n.canCancel||e[20]!==n.canSend||e[21]!==n.dictation||e[22]!==n.isEditing||e[23]!==n.isEmpty||e[24]!==n.quote||e[25]!==n.role||e[26]!==n.runConfig||e[27]!==n.text||e[28]!==b?(y={text:n.text,role:n.role,attachments:d.state,runConfig:n.runConfig,isEditing:n.isEditing,canCancel:n.canCancel,canSend:n.canSend,attachmentAccept:n.attachmentAccept,isEmpty:n.isEmpty,type:b,dictation:n.dictation,quote:n.quote,queue:p},e[16]=d.state,e[17]=p,e[18]=n.attachmentAccept,e[19]=n.canCancel,e[20]=n.canSend,e[21]=n.dictation,e[22]=n.isEditing,e[23]=n.isEmpty,e[24]=n.quote,e[25]=n.role,e[26]=n.runConfig,e[27]=n.text,e[28]=b,e[29]=y):y=e[29];let x=y,S;e[30]!==x?(S=()=>x,e[30]=x,e[31]=S):S=e[31];let _;e[32]!==s||e[33]!==i?(_=O=>{let T=i.getState();c.current=T.canSend&&(s?.(T.text)??!1),i.send(O)},e[32]=s,e[33]=i,e[34]=_):_=e[34];let C;e[35]!==a||e[36]!==o||e[37]!==i||e[38]!==r?(C=()=>{!o&&i.getState().canCancel&&a("composer.cancel",{threadId:r.current}),i.cancel()},e[35]=a,e[36]=o,e[37]=i,e[38]=r,e[39]=C):C=e[39];let P=i.beginEdit??$f,A;e[40]!==d?(A=O=>"id"in O?d.get({key:O.id}):d.get(O),e[40]=d,e[41]=A):A=e[41];let w;e[42]!==g?(w=O=>"id"in O?g.get({key:O.id}):g.get(O),e[42]=g,e[43]=w):w=e[43];let k;e[44]!==i?(k=()=>i,e[44]=i,e[45]=k):k=e[45];let M;return e[46]!==i.addAttachment||e[47]!==i.clearAttachments||e[48]!==i.reset||e[49]!==i.setQuote||e[50]!==i.setRole||e[51]!==i.setRunConfig||e[52]!==i.setText||e[53]!==i.startDictation||e[54]!==i.stopDictation||e[55]!==P||e[56]!==A||e[57]!==w||e[58]!==k||e[59]!==S||e[60]!==_||e[61]!==C?(M={getState:S,setText:i.setText,setRole:i.setRole,setRunConfig:i.setRunConfig,addAttachment:i.addAttachment,reset:i.reset,clearAttachments:i.clearAttachments,send:_,cancel:C,beginEdit:P,startDictation:i.startDictation,stopDictation:i.stopDictation,setQuote:i.setQuote,attachment:A,queueItem:w,__internal_getRuntime:k},e[46]=i.addAttachment,e[47]=i.clearAttachments,e[48]=i.reset,e[49]=i.setQuote,e[50]=i.setRole,e[51]=i.setRunConfig,e[52]=i.setText,e[53]=i.startDictation,e[54]=i.stopDictation,e[55]=P,e[56]=A,e[57]=w,e[58]=k,e[59]=S,e[60]=_,e[61]=C,e[62]=M):M=e[62],M},yi=z(Nf);function $f(){throw new Error("beginEdit is not supported in this runtime")}var _i=t=>({get current(){return t()}});var Lf=t=>{let e=f(13),{runtime:r}=t,o=$e(r),i;e[0]!==o?(i=()=>o,e[0]=o,e[1]=i):i=e[1];let s,n,a,c;e[2]!==r?(s=u=>r.addToolResult(u),n=u=>r.resumeToolCall(u),a=u=>r.respondToToolApproval(u),c=()=>r,e[2]=r,e[3]=s,e[4]=n,e[5]=a,e[6]=c):(s=e[3],n=e[4],a=e[5],c=e[6]);let l;return e[7]!==i||e[8]!==s||e[9]!==n||e[10]!==a||e[11]!==c?(l={getState:i,addToolResult:s,resumeToolCall:n,respondToToolApproval:a,__internal_getRuntime:c},e[7]=i,e[8]=s,e[9]=n,e[10]=a,e[11]=c,e[12]=l):l=e[12],l},gl=z(Lf);var Ff=t=>{let e=f(5),{runtime:r,index:o}=t,i;e[0]!==o||e[1]!==r?(i=r.getAttachmentByIndex(o),e[0]=o,e[1]=r,e[2]=i):i=e[2];let s=i,n;return e[3]!==s?(n=wi({runtime:s}),e[3]=s,e[4]=n):n=e[4],ue(n)},Vf=z(Ff),jf=t=>{let e=f(5),{runtime:r,index:o}=t,i;e[0]!==o||e[1]!==r?(i=r.getMessagePartByIndex(o),e[0]=o,e[1]=r,e[2]=i):i=e[2];let s=i,n;return e[3]!==s?(n=gl({runtime:s}),e[3]=s,e[4]=n):n=e[4],ue(n)},Uf=z(jf),zf=t=>{let e=f(74),{runtime:r,threadIdRef:o,threadId:i}=t,s=$e(r),n=je(),[a,c]=j(!1),[l,u]=j(!1),m;e[0]!==r?(m=_i(()=>r.getState().id),e[0]=r,e[1]=m):m=e[1];let d=m,p=F(s.status),h;e[2]!==n||e[3]!==r||e[4]!==i?(h=Q=>{n(Q,{threadId:i,messageId:r.getState().id})},e[2]=n,e[3]=r,e[4]=i,e[5]=h):h=e[5];let g=h,b,y;e[6]!==n||e[7]!==s.id||e[8]!==s.status||e[9]!==i?(b=()=>{let Q=s.status,Fe=p.current;p.current=Q,Q?.type==="incomplete"&&Q.reason==="error"&&(Fe?.type!=="incomplete"||Fe.reason!=="error")&&n("message.error",{threadId:i,messageId:s.id,reason:"error"})},y=[s.status,s.id,n,i],e[6]=n,e[7]=s.id,e[8]=s.status,e[9]=i,e[10]=b,e[11]=y):(b=e[10],y=e[11]),$(b,y);let x;e[12]!==d||e[13]!==r.composer||e[14]!==o?(x=yi({runtime:r.composer,threadIdRef:o,messageIdRef:d}),e[12]=d,e[13]=r.composer,e[14]=o,e[15]=x):x=e[15];let S=yt(x),_;if(e[16]!==r||e[17]!==s.content){let Q;e[19]!==r?(Q=(Fe,Ve)=>fe("toolCallId"in Fe&&Fe.toolCallId!=null?`toolCallId-${Fe.toolCallId}`:`index-${Ve}`,Uf({runtime:r,index:Ve}),[r,Ve]),e[19]=r,e[20]=Q):Q=e[20],_=s.content.map(Q),e[16]=r,e[17]=s.content,e[18]=_}else _=e[18];let C=Ne(_),P;e[21]!==s.attachments?(P=s.attachments??[],e[21]=s.attachments,e[22]=P):P=e[22];let A;if(e[23]!==r||e[24]!==P){let Q;e[26]!==r?(Q=(Fe,Ve)=>fe(Fe.id,Vf({runtime:r,index:Ve}),[r,Ve]),e[26]=r,e[27]=Q):Q=e[27],A=P.map(Q),e[23]=r,e[24]=P,e[25]=A}else A=e[25];let w=Ne(A),k=s,M;e[28]!==S.state||e[29]!==a||e[30]!==l||e[31]!==C.state||e[32]!==k?(M={...k,parts:C.state,composer:S.state,isCopied:a,isHovering:l},e[28]=S.state,e[29]=a,e[30]=l,e[31]=C.state,e[32]=k,e[33]=M):M=e[33];let O=M,T;e[34]!==O?(T=()=>O,e[34]=O,e[35]=T):T=e[35];let R;e[36]!==S.methods?(R=()=>S.methods,e[36]=S.methods,e[37]=R):R=e[37];let L;e[38]!==r?(L=()=>r.delete(),e[38]=r,e[39]=L):L=e[39];let q,X;e[40]!==g||e[41]!==r?(q=Q=>(g("message.reload"),r.reload(Q)),X=()=>(g("message.speak"),r.speak()),e[40]=g,e[41]=r,e[42]=q,e[43]=X):(q=e[42],X=e[43]);let ce,oe;e[44]!==r?(ce=()=>r.stopSpeaking(),oe=Q=>r.submitFeedback(Q),e[44]=r,e[45]=ce,e[46]=oe):(ce=e[45],oe=e[46]);let le;e[47]!==g||e[48]!==r?(le=Q=>(g("message.branchSwitched"),r.switchToBranch(Q)),e[47]=g,e[48]=r,e[49]=le):le=e[49];let he;e[50]!==r?(he=()=>r.unstable_getCopyText(),e[50]=r,e[51]=he):he=e[51];let xe;e[52]!==C?(xe=Q=>"index"in Q?C.get({index:Q.index}):C.get({key:`toolCallId-${Q.toolCallId}`}),e[52]=C,e[53]=xe):xe=e[53];let D;e[54]!==w?(D=Q=>"id"in Q?w.get({key:Q.id}):w.get(Q),e[54]=w,e[55]=D):D=e[55];let V;e[56]!==g?(V=Q=>{Q&&g("message.copied"),c(Q)},e[56]=g,e[57]=V):V=e[57];let J;e[58]!==r?(J=()=>r,e[58]=r,e[59]=J):J=e[59];let te;return e[60]!==T||e[61]!==R||e[62]!==L||e[63]!==q||e[64]!==X||e[65]!==ce||e[66]!==oe||e[67]!==le||e[68]!==he||e[69]!==xe||e[70]!==D||e[71]!==V||e[72]!==J?(te={getState:T,composer:R,delete:L,reload:q,speak:X,stopSpeaking:ce,submitFeedback:oe,switchToBranch:le,getCopyText:he,part:xe,attachment:D,setIsCopied:V,setIsHovering:u,__internal_getRuntime:J},e[60]=T,e[61]=R,e[62]=L,e[63]=q,e[64]=X,e[65]=ce,e[66]=oe,e[67]=le,e[68]=he,e[69]=xe,e[70]=D,e[71]=V,e[72]=J,e[73]=te):te=e[73],te},vl=z(zf);var Hf=t=>{let e=Y(()=>({}),[]),r=e.state,o=[];t.suggestions.forEach(s=>{let n=r?.suggestions[o.length];o.push(n&&Ae(n,s)?n:s)});let i=r&&Ae(o,r.suggestions)?r:{suggestions:o};return e.state=i,i},qf=t=>({getState:()=>t}),Gf=z(qf),bl=t=>{let e=f(9),r=Hf(t),o;e[0]!==r.suggestions?(o=r.suggestions.map(Wf),e[0]=r.suggestions,e[1]=o):o=e[1];let i=Ne(o),s;e[2]!==r?(s=()=>r,e[2]=r,e[3]=s):s=e[3];let n;e[4]!==i?(n=c=>{let{index:l}=c;return i.get({index:l})},e[4]=i,e[5]=n):n=e[5];let a;return e[6]!==s||e[7]!==n?(a={getState:s,suggestion:n},e[6]=s,e[7]=n,e[8]=a):a=e[8],a},Kf=t=>{let e=f(6),r;e[0]!==t?(r=t??[],e[0]=t,e[1]=r):r=e[1];let o;e[2]!==r?(o=r.map(Jf),e[2]=r,e[3]=o):o=e[3];let i;return e[4]!==o?(i={suggestions:o},e[4]=o,e[5]=i):i=e[5],bl(i)},HC=z(Kf),Qf=t=>{let e=f(4),r;e[0]!==t?(r=t.map(Yf),e[0]=t,e[1]=r):r=e[1];let o;return e[2]!==r?(o={suggestions:r},e[2]=r,e[3]=o):o=e[3],bl(o)},xl=z(Qf);function Wf(t,e){return fe(e,Gf(t),[t])}function Jf(t){return typeof t=="string"?{title:t,label:"",prompt:t}:{title:t.title,label:t.label,prompt:t.prompt}}function Yf(t){return{title:t.title??t.prompt,label:t.label??"",prompt:t.prompt}}var ot=Object.freeze({type:"complete"}),Si=Object.freeze({type:"running"}),Xf=Object.freeze({cancelled:Object.freeze({type:"incomplete",reason:"cancelled"}),length:Object.freeze({type:"incomplete",reason:"length"}),"content-filter":Object.freeze({type:"incomplete",reason:"content-filter"}),other:Object.freeze({type:"incomplete",reason:"other"}),error:Object.freeze({type:"incomplete",reason:"error"})}),Zf=t=>{let e=t.status;if(!e||typeof e!="object")return;let{type:r}=e;if(r==="running")return Si;if(r==="complete")return ot;if(r!=="incomplete")return;let{reason:o}=e;return Xf[o==="cancelled"||o==="length"||o==="content-filter"||o==="other"||o==="error"?o:"other"]},Ti=(t,e,r)=>{if(t.role!=="assistant")return ot;if(r.type==="tool-call")return r.result===void 0?t.status:ot;if(t.status.type==="running"){let i=Zf(r);if(i)return i}let o=e===Math.max(0,t.content.length-1);return t.status.type==="requires-action"?ot:o?t.status:ot};var eg=t=>"reason"in t?t.reason:void 0,tg=t=>"error"in t?t.error:void 0,rg=32,wl=new WeakMap,sn=t=>wl.get(t)??t.id,og=(t,e,r)=>"status"in t&&t.status?Ti(t,e,r):ot,yl=()=>{let t=[],e=new Map;return r=>{let o=[],i=new Map,s=!0,n=(c,l,u,m)=>{if(!(u>rg))for(let[d,p]of c.entries())for(let[h,g]of p.content.entries()){if(g.type!=="tool-call"||g.messages===void 0)continue;let b=g.messages,y=og(p,h,g),x=eg(y),S=tg(y),_=`${m}${d}.${h}`,C=e.get(_),P=C?.part===g&&C.statusType===y.type&&C.statusReason===x&&Object.is(C.statusError,S)&&C.messages===b&&C.task.messageId===p.id&&C.task.parentTaskId===l&&C.task.depth===u?C.task:{id:g.toolCallId,toolName:g.toolName,args:g.args,result:g.result,...g.isError===void 0?void 0:{isError:g.isError},status:y,timing:g.timing,messageId:p.id,parentTaskId:l,depth:u,messages:b};P!==C?.task&&(s=!1,wl.set(P,_)),o.push(P),i.set(_,{task:P,part:g,statusType:y.type,statusReason:x,statusError:S,messages:b}),n(b,P.id,u+1,`${_}.`)}};n(r,null,0,"");let a=s&&o.length===t.length&&o.every((c,l)=>c===t[l])?t:o;return t=a,e=i,a}},ig=({task:t})=>({getState:()=>t}),_l=z(ig);var sg=t=>{let e=f(7),{runtime:r,id:o,threadIdRef:i,threadId:s}=t,n;e[0]!==o||e[1]!==r?(n=r.getMessageById(o),e[0]=o,e[1]=r,e[2]=n):n=e[2];let a=n,c;return e[3]!==a||e[4]!==s||e[5]!==i?(c=vl({runtime:a,threadIdRef:i,threadId:s}),e[3]=a,e[4]=s,e[5]=i,e[6]=c):c=e[6],ue(c)},ng=z(sg),ag=t=>{let e=f(93),{runtime:r}=t,o=$e(r),i=je(),s,n;e[0]!==i||e[1]!==r?(s=()=>{let D=[];for(let V of["runStart","runEnd","initialize","modelContextUpdate"]){let J=r.unstable_on(V,()=>{let te=r.getState()?.threadId||"unknown";i(`thread.${V}`,{threadId:te})});D.push(J)}return D.push(r.unstable_on("toolApprovalAnswered",V=>{let J=r.getState()?.threadId||"unknown";i("thread.toolApprovalAnswered",{threadId:J,...V})})),()=>{for(let V of D)V()}},n=[r,i],e[0]=i,e[1]=r,e[2]=s,e[3]=n):(s=e[2],n=e[3]),$(s,n);let a;e[4]!==r?(a=_i(()=>r.getState().threadId),e[4]=r,e[5]=a):a=e[5];let c=a,l;e[6]!==i||e[7]!==r?(l=D=>{i(D,{threadId:r.getState().threadId})},e[6]=i,e[7]=r,e[8]=l):l=e[8];let u=l,m;e[9]!==r?(m=D=>r.getState().suggestions.some(V=>V.prompt===D),e[9]=r,e[10]=m):m=e[10];let d=m,p;e[11]!==d||e[12]!==r.composer||e[13]!==c?(p=yi({runtime:r.composer,threadIdRef:c,isSuggestion:d}),e[11]=d,e[12]=r.composer,e[13]=c,e[14]=p):p=e[14];let h=yt(p),g;e[15]!==o.suggestions?(g=xl(o.suggestions),e[15]=o.suggestions,e[16]=g):g=e[16];let b=yt(g),y;e[17]===Symbol.for("react.memo_cache_sentinel")?(y=yl(),e[17]=y):y=e[17];let x=y,S;e[18]!==o.messages?(S=x(o.messages),e[18]=o.messages,e[19]=S):S=e[19];let _=S,C;e[20]!==_?(C=_.map(cg),e[20]=_,e[21]=C):C=e[21];let P=Ne(C),A;if(e[22]!==r||e[23]!==o.messages||e[24]!==o.threadId||e[25]!==c){let D;e[27]!==r||e[28]!==o.threadId||e[29]!==c?(D=V=>fe(V.id,ng({runtime:r,id:V.id,threadIdRef:c,threadId:o.threadId}),[r,V.id,c,o.threadId]),e[27]=r,e[28]=o.threadId,e[29]=c,e[30]=D):D=e[30],A=o.messages.map(D),e[22]=r,e[23]=o.messages,e[24]=o.threadId,e[25]=c,e[26]=A}else A=e[26];let w=Ne(A),k=w.state.length===0&&!o.isLoading,M;e[31]!==h.state||e[32]!==w.state||e[33]!==o.capabilities||e[34]!==o.extras||e[35]!==o.isDisabled||e[36]!==o.isLoading||e[37]!==o.isRunning||e[38]!==o.speech||e[39]!==o.state||e[40]!==o.suggestions||e[41]!==o.voice||e[42]!==k||e[43]!==_?(M={isEmpty:k,isDisabled:o.isDisabled,isLoading:o.isLoading,isRunning:o.isRunning,capabilities:o.capabilities,state:o.state,suggestions:o.suggestions,extras:o.extras,speech:o.speech,voice:o.voice,composer:h.state,messages:w.state,tasks:_},e[31]=h.state,e[32]=w.state,e[33]=o.capabilities,e[34]=o.extras,e[35]=o.isDisabled,e[36]=o.isLoading,e[37]=o.isRunning,e[38]=o.speech,e[39]=o.state,e[40]=o.suggestions,e[41]=o.voice,e[42]=k,e[43]=_,e[44]=M):M=e[44];let O=M,T;e[45]!==O?(T=()=>O,e[45]=O,e[46]=T):T=e[46];let R;e[47]!==h.methods?(R=()=>h.methods,e[47]=h.methods,e[48]=R):R=e[48];let L;e[49]!==b?(L=()=>b.methods,e[49]=b,e[50]=L):L=e[50];let q;e[51]!==P||e[52]!==_?(q=D=>{if("id"in D){let V=_.find(J=>J.id===D.id);return P.get({key:V?sn(V):D.id})}return P.get(D)},e[51]=P,e[52]=_,e[53]=q):q=e[53];let X;e[54]!==i||e[55]!==d||e[56]!==r?(X=D=>{let V=typeof D=="string"?{content:[{type:"text",text:D}]}:D;if((V.role??"user")==="user"){let J=V.content.map(lg).join("");i("composer.send",{threadId:r.getState().threadId,chars:J.length,attachments:V.attachments?.length??0,...d(J)?{suggestion:!0}:void 0})}r.append(D)},e[54]=i,e[55]=d,e[56]=r,e[57]=X):X=e[57];let ce;e[58]!==u||e[59]!==r||e[60]!==o.isRunning?(ce=()=>{o.isRunning&&u("thread.cancelRun"),r.cancelRun()},e[58]=u,e[59]=r,e[60]=o.isRunning,e[61]=ce):ce=e[61];let oe;e[62]!==u||e[63]!==r?(oe=()=>{r.connectVoice(),u("thread.voiceStarted")},e[62]=u,e[63]=r,e[64]=oe):oe=e[64];let le;e[65]!==w?(le=D=>"id"in D?w.get({key:D.id}):w.get(D),e[65]=w,e[66]=le):le=e[66];let he;e[67]!==r?(he=()=>r,e[67]=r,e[68]=he):he=e[68];let xe;return e[69]!==r.deleteMessage||e[70]!==r.disconnectVoice||e[71]!==r.export||e[72]!==r.getModelContext||e[73]!==r.getVoiceVolume||e[74]!==r.import||e[75]!==r.importExternalState||e[76]!==r.muteVoice||e[77]!==r.reset||e[78]!==r.resumeRun||e[79]!==r.startRun||e[80]!==r.stopSpeaking||e[81]!==r.subscribeVoiceVolume||e[82]!==r.unmuteVoice||e[83]!==T||e[84]!==R||e[85]!==L||e[86]!==q||e[87]!==X||e[88]!==ce||e[89]!==oe||e[90]!==le||e[91]!==he?(xe={getState:T,composer:R,suggestions:L,task:q,append:X,deleteMessage:r.deleteMessage,startRun:r.startRun,resumeRun:r.resumeRun,importExternalState:r.importExternalState,cancelRun:ce,getModelContext:r.getModelContext,export:r.export,import:r.import,reset:r.reset,stopSpeaking:r.stopSpeaking,connectVoice:oe,disconnectVoice:r.disconnectVoice,getVoiceVolume:r.getVoiceVolume,subscribeVoiceVolume:r.subscribeVoiceVolume,muteVoice:r.muteVoice,unmuteVoice:r.unmuteVoice,message:le,__internal_getRuntime:he},e[69]=r.deleteMessage,e[70]=r.disconnectVoice,e[71]=r.export,e[72]=r.getModelContext,e[73]=r.getVoiceVolume,e[74]=r.import,e[75]=r.importExternalState,e[76]=r.muteVoice,e[77]=r.reset,e[78]=r.resumeRun,e[79]=r.startRun,e[80]=r.stopSpeaking,e[81]=r.subscribeVoiceVolume,e[82]=r.unmuteVoice,e[83]=T,e[84]=R,e[85]=L,e[86]=q,e[87]=X,e[88]=ce,e[89]=oe,e[90]=le,e[91]=he,e[92]=xe):xe=e[92],xe},Ci=z(ag);function cg(t){return fe(sn(t),_l({task:t}),[t])}function lg(t){return t.type==="text"?t.text:""}var it=(t,e)=>xi(`thread list ${t}`,e);var ug=t=>{let e=f(35),{runtime:r,mainThreadIsRunning:o}=t,i=o===void 0?!1:o,s=$e(r),n;e:{let k=s.isRunning||s.isMain&&i;if(k===s.isRunning){n=s;break e}let M;e[0]!==k||e[1]!==s?(M={...s,isRunning:k},e[0]=k,e[1]=s,e[2]=M):M=e[2],n=M}let a=n,c=je(),{isMain:l,id:u}=s,m;e[3]!==l||e[4]!==u?(m={isMain:l,threadId:u},e[3]=l,e[4]=u,e[5]=m):m=e[5];let d=F(m),p,h;e[6]!==c||e[7]!==l||e[8]!==u?(p=()=>{let k=d.current;k.isMain===l&&k.threadId===u||(d.current={isMain:l,threadId:u},c(l?"threadListItem.switchedTo":"threadListItem.switchedAway",{threadId:u}))},h=[l,u,c],e[6]=c,e[7]=l,e[8]=u,e[9]=p,e[10]=h):(p=e[9],h=e[10]),$(p,h);let g;e[11]!==a?(g=()=>a,e[11]=a,e[12]=g):g=e[12];let b,y,x,S,_,C,P;e[13]!==r?(_=k=>it("switch",()=>r.switchTo(k)),C=k=>it("rename",()=>r.rename(k)),P=k=>it("update custom metadata",()=>r.updateCustom(k)),b=()=>it("archive",()=>r.archive()),y=()=>it("unarchive",()=>r.unarchive()),x=()=>it("delete",()=>r.delete()),S=k=>it("generate title",()=>r.generateTitle(k)),e[13]=r,e[14]=b,e[15]=y,e[16]=x,e[17]=S,e[18]=_,e[19]=C,e[20]=P):(b=e[14],y=e[15],x=e[16],S=e[17],_=e[18],C=e[19],P=e[20]);let A;e[21]!==r?(A=()=>r,e[21]=r,e[22]=A):A=e[22];let w;return e[23]!==r.detach||e[24]!==r.initialize||e[25]!==b||e[26]!==y||e[27]!==x||e[28]!==S||e[29]!==A||e[30]!==g||e[31]!==_||e[32]!==C||e[33]!==P?(w={getState:g,switchTo:_,rename:C,updateCustom:P,archive:b,unarchive:y,delete:x,generateTitle:S,initialize:r.initialize,detach:r.detach,__internal_getRuntime:A},e[23]=r.detach,e[24]=r.initialize,e[25]=b,e[26]=y,e[27]=x,e[28]=S,e[29]=A,e[30]=g,e[31]=_,e[32]=C,e[33]=P,e[34]=w):w=e[34],w},Sl=z(ug);var Tl=t=>{let e=f(4),r=je(),o=F(t),i,s;e[0]!==r||e[1]!==t?(i=()=>{let n=o.current;n!==t&&(o.current=t,r("threads.selectionChanged",{threadId:t,previousThreadId:n}))},s=[t,r],e[0]=r,e[1]=t,e[2]=i,e[3]=s):(i=e[2],s=e[3]),$(i,s)};var dg=t=>{let e=f(6),{runtime:r,id:o,mainThreadIsRunning:i}=t,s;e[0]!==o||e[1]!==r?(s=r.getItemById(o),e[0]=o,e[1]=r,e[2]=s):s=e[2];let n=s,a;return e[3]!==i||e[4]!==n?(a=Sl({runtime:n,mainThreadIsRunning:i}),e[3]=i,e[4]=n,e[5]=a):a=e[5],ue(a)},mg=z(dg),pg=t=>{let e=f(48),{runtime:r,__internal_assistantRuntime:o}=t,i=$e(r);Tl(i.mainThreadId);let s=je(),n,a;e[0]!==s||e[1]!==r?(n=()=>r.unstable_subscribeThreadEvents(M=>{let{threadId:O,type:T}=M;O!==r.getState().mainThreadId&&s(`thread.${T}`,{threadId:O})}),a=[r,s],e[0]=s,e[1]=r,e[2]=n,e[3]=a):(n=e[2],a=e[3]),$(n,a);let c;e[4]!==r.main?(c=Ci({runtime:r.main}),e[4]=r.main,e[5]=c):c=e[5];let l=yt(c),u;e[6]!==l.state||e[7]!==r||e[8]!==i.threadItems?(u=Object.keys(i.threadItems).map(M=>fe(M,mg({runtime:r,id:M,mainThreadIsRunning:l.state.isRunning}),[r,M,l.state.isRunning])),e[6]=l.state,e[7]=r,e[8]=i.threadItems,e[9]=u):u=e[9];let m=Ne(u),d=i.newThreadId??null,p;e[10]!==l.state||e[11]!==i.archivedThreadIds||e[12]!==i.hasMore||e[13]!==i.isLoading||e[14]!==i.isLoadingMore||e[15]!==i.loadError||e[16]!==i.mainThreadId||e[17]!==i.threadIds||e[18]!==d||e[19]!==m.state?(p={mainThreadId:i.mainThreadId,newThreadId:d,isLoading:i.isLoading,loadError:i.loadError,isLoadingMore:i.isLoadingMore,hasMore:i.hasMore,threadIds:i.threadIds,archivedThreadIds:i.archivedThreadIds,threadItems:m.state,main:l.state},e[10]=l.state,e[11]=i.archivedThreadIds,e[12]=i.hasMore,e[13]=i.isLoading,e[14]=i.isLoadingMore,e[15]=i.loadError,e[16]=i.mainThreadId,e[17]=i.threadIds,e[18]=d,e[19]=m.state,e[20]=p):p=e[20];let h=p,g;e[21]!==h?(g=()=>h,e[21]=h,e[22]=g):g=e[22];let b;e[23]!==l.methods?(b=()=>l.methods,e[23]=l.methods,e[24]=b):b=e[24];let y;e[25]!==h||e[26]!==m?(y=M=>{if(M==="main")return m.get({key:h.mainThreadId});if("id"in M)return m.get({key:M.id});let{index:O,archived:T}=M,R=T!==void 0&&T?h.archivedThreadIds[O]:h.threadIds[O];return m.get({key:R})},e[25]=h,e[26]=m,e[27]=y):y=e[27];let x,S,_,C,P,A;e[28]!==r?(x=(M,O)=>it("switch",()=>r.switchToThread(M,O)),S=()=>it("create",()=>r.switchToNewThread()),_=()=>r.getLoadThreadsPromise(),C=()=>r.reload(),P=()=>r.reloadMainThread(),A=()=>r.loadMore(),e[28]=r,e[29]=x,e[30]=S,e[31]=_,e[32]=C,e[33]=P,e[34]=A):(x=e[29],S=e[30],_=e[31],C=e[32],P=e[33],A=e[34]);let w;e[35]!==o?(w=()=>o,e[35]=o,e[36]=w):w=e[36];let k;return e[37]!==x||e[38]!==S||e[39]!==_||e[40]!==C||e[41]!==P||e[42]!==A||e[43]!==w||e[44]!==g||e[45]!==b||e[46]!==y?(k={getState:g,thread:b,item:y,switchToThread:x,switchToNewThread:S,getLoadThreadsPromise:_,reload:C,reloadMainThread:P,loadMore:A,__internal_getAssistantRuntime:w},e[37]=x,e[38]=S,e[39]=_,e[40]=C,e[41]=P,e[42]=A,e[43]=w,e[44]=g,e[45]=b,e[46]=y,e[47]=k):k=e[47],k},Cl=z(pg);var Il=(t,e)=>{t.thread??(t.thread=ae({source:"threads",query:{type:"main"},get:r=>r.threads.thread("main")})),t.threadListItem??(t.threadListItem=ae({source:"threads",query:{type:"main"},get:r=>r.threads.item("main")})),t.composer??(t.composer=ae({source:"thread",query:{},get:r=>r.threads.thread("main").composer()})),!t.modelContext&&e.modelContext.source===null&&(t.modelContext=bi()),!t.suggestions&&e.suggestions.source===null&&(t.suggestions=ae({source:"thread",query:{},get:r=>r.thread.suggestions()}))};var El=t=>{let e=f(7),r=Kr(),o;e[0]!==r||e[1]!==t?(o=()=>t.registerModelContextProvider(r.current.modelContext()),e[0]=r,e[1]=t,e[2]=o):o=e[2];let i;e[3]!==t?(i=[t],e[3]=t,e[4]=i):i=e[4],Qr("modelContext",o,i);let s;return e[5]!==t?(s=Cl({runtime:t.threads,__internal_assistantRuntime:t}),e[5]=t,e[6]=s):s=e[6],ue(s)},Al=z(El),hg=(t,e)=>{Il(t,e),!t.tools&&e.tools.source===null&&(t.tools=hl({})),!t.dataRenderers&&e.dataRenderers.source===null&&(t.dataRenderers=Dc())};Hr(El,hg);var Yr=t=>{let{children:e,condition:r}=t;return E(r)?e:null};Yr.displayName="AuiIf";var xr=require("react/jsx-runtime"),fg=ne({}),Rl=({effects:t})=>{"use no memo";return Qe(t),null},de=U(function(e,r){"use no memo";let{config:o,children:i}=e,s="extends"in e,n="value"in e,a=zr();if(ui){if(s&&n)throw new Error("AuiProvider: pass either `extends` or `value`, not both.");if(s&&e.extends===void 0)throw new Error("AuiProvider: `extends` must be a client or null, not undefined.");if(s&&!o)throw new Error("AuiProvider: `extends` requires a `config`.");if(n&&o)throw new Error("AuiProvider: pass either `value` or `config`, not both.");if(!n&&!o)throw new Error("AuiProvider: a `config` is required.");if(!s&&!n&&a!==Dt)throw new Error("A parent AuiProvider exists \u2014 pass extends={aui} to inherit it or extends={null} to isolate.")}let c=s?e.extends??Dt:n?e.value??Dt:a,l=ai(),{client:u,effects:m}=sl(c,o??fg,l);return Os(r,()=>u,[u]),(0,xr.jsx)(ni.Provider,{value:l,children:(0,xr.jsxs)(ii.Provider,{value:u,children:[(0,xr.jsx)(Rl,{effects:jc(c)}),m&&(0,xr.jsx)(Rl,{effects:m}),i]})})});var gg=t=>{let e=B(),r=F(!1),o=r.current?null:t(e);return E(()=>r.current?t(e):o),()=>(r.current=!0,t(e))},vg=Object.freeze({});function Ue(t){let e=f(3),{getItemState:r,children:o}=t,i=gg(r),s;return e[0]!==o||e[1]!==i?(s=o(i),e[0]=o,e[1]=i,e[2]=s):s=e[2],bg(s)}var bg=t=>{let e=typeof t=="object"&&t!=null&&"type"in t?t:null,r=e?.type,o=e?.key,i=typeof e?.props=="object"&&e.props!=null&&Object.entries(e.props).length===0?vg:e?.props;return Y(()=>e,[r,o,i])??t};var Xr=(t,e)=>{let r=f(11),o=B(),i=be(e),s;r[0]!==t?(s=qr(t),r[0]=t,r[1]=s):s=r[1];let{scope:n,event:a}=s,c;r[2]!==o||r[3]!==i||r[4]!==a||r[5]!==n?(c=()=>o.on({scope:n,event:a},i),r[2]=o,r[3]=i,r[4]=a,r[5]=n,r[6]=c):c=r[6];let l;r[7]!==o||r[8]!==a||r[9]!==n?(l=[o,n,a],r[7]=o,r[8]=a,r[9]=n,r[10]=l):l=r[10],$(c,l)};var Zr=require("react/jsx-runtime"),Pl=t=>t._core?.RenderComponent,xg=({runtime:t,aui:e,config:r,children:o})=>{"use no memo";let i=Pl(t),s=ne({...r,threads:Al(t)});return(0,Zr.jsxs)(de,{extends:e,config:s,children:[i&&(0,Zr.jsx)(i,{}),o]})},nn=ee(t=>{let e=f(5),{runtime:r,aui:o,config:i,children:s}=t,n=o===void 0?null:o,a;return e[0]!==n||e[1]!==s||e[2]!==i||e[3]!==r?(a=(0,Zr.jsx)(xg,{runtime:r,aui:n,config:i,children:s}),e[0]=n,e[1]=s,e[2]=i,e[3]=r,e[4]=a):a=e[4],a});function ye(t){return t!=null&&typeof t=="object"&&!Array.isArray(t)}function eo(t,e=0){return e>100?!1:t===null||typeof t=="string"||typeof t=="boolean"?!0:typeof t=="number"?!Number.isNaN(t)&&Number.isFinite(t):Array.isArray(t)?t.every(r=>eo(r,e+1)):ye(t)?Object.entries(t).every(([r,o])=>typeof r=="string"&&eo(o,e+1)):!1}var wg=100,an=(t,e,r)=>{if(t===e)return!0;if(r>wg||t==null||e==null)return!1;if(Array.isArray(t))return!Array.isArray(e)||t.length!==e.length?!1:t.every((s,n)=>an(s,e[n],r+1));if(Array.isArray(e)||!ye(t)||!ye(e))return!1;let o=Object.keys(t),i=Object.keys(e);return o.length!==i.length?!1:o.every(s=>Object.hasOwn(e,s)&&an(t[s],e[s],r+1))},to=(t,e)=>!eo(t)||!eo(e)?!1:an(t,e,0);var kl=Symbol.for("aui.tool-response"),Ii="<no result>",ze=class cn{constructor(e){v(this,"artifact");v(this,"result");v(this,"isError");v(this,"modelContent");v(this,"messages");e.artifact!==void 0&&(this.artifact=e.artifact);let r=e.result;this.result=r===void 0?Ii:r,this.isError=e.isError??!1,e.modelContent!==void 0&&(this.modelContent=e.modelContent),e.messages!==void 0&&(this.messages=e.messages)}get[kl](){return!0}static[Symbol.hasInstance](e){return typeof e=="object"&&e!==null&&kl in e}static toResponse(e){return e instanceof cn?e:new cn({result:e===void 0?Ii:e})}};var wr=()=>{let t,e,r=new Promise((o,i)=>{t=o,e=i});if(!t||!e)throw new Error("Failed to create promise");return{promise:r,resolve:t,reject:e}};var Ml=()=>{let t=[],e=!1,r=!1,o=!1,i,s,n=0,a,c,l=()=>(s=void 0,c??(c=Promise.all(t.splice(0).map(async g=>{try{await g.reader.cancel().catch(()=>{}),await g.pipeTask}finally{g.reader.releaseLock()}})).then(()=>{})),c),u=g=>{r||o||(o=!0,console.error(g),l(),i.error(g),a?.reject(g),a=void 0)},m=g=>{g.promise||(g.promise=g.reader.read().then(({done:b,value:y})=>{g.promise=void 0,!(r||o)&&(b?(t.splice(t.indexOf(g),1),g.reader.releaseLock(),e&&t.length===0&&n===0&&i.close()):i.enqueue(y),a?.resolve(),a=void 0)}).catch(u))},d=new ReadableStream({start(g){i=g},pull(){return a=wr(),t.forEach(g=>{m(g)}),a.promise},async cancel(){r=!0;let g=l();a?.resolve(),a=void 0,await g}}),p=g=>{if(t.length>0&&(s=void 0),!s){let b=[];s=b,n++,Promise.resolve().then(()=>{if(n--,s===b&&(s=void 0),!(r||o)){for(let y of b)i.enqueue(y);e&&t.length===0&&n===0&&i.close(),a?.resolve(),a=void 0}}).catch(u)}s.push(g)};return{readable:d,isSealed(){return e},isCancelled(){return r},isErrored(){return o},seal(){e||r||o||(e=!0,t.length===0&&n===0&&i.close())},addStream:(g,b)=>{let y=b?.catch(()=>{});if(r||o){g.cancel().catch(()=>{});return}if(e)throw g.cancel().catch(()=>{}),new Error("Cannot add streams after the run callback has settled.");s=void 0;let x={reader:g.getReader(),pipeTask:y};t.push(x),m(x)},enqueue(g){if(!(r||o)){if(e)throw new Error("Cannot add streams after the run callback has settled.");p(g)}}}};var Dl=t=>t instanceof TypeError,Le=(t,e,r)=>{try{t.enqueue(e)}catch(o){if(!Dl(o))throw o;r?.(o)}},Ei=t=>{try{t.close()}catch(e){if(!Dl(e))throw e}};var Ai=(t,e)=>new ReadableStream({start(r){return t.start?.(e(r))},pull(r){return t.pull?.(e(r))},cancel(r){return t.cancel?.(r)}}),Ri=(t,e)=>{let r;return[Ai({start(o){r=o},cancel(o){return e?.(r,o)}},t),r]};var Ol=class{constructor(t,e={}){v(this,"_controller");v(this,"_strict");v(this,"_isClosed",!1);v(this,"_warnedDropped",!1);v(this,"_warnDroppedAfterClose",t=>{this._warnedDropped||(this._warnedDropped=!0,console.error(`Dropped text delta for closed stream: ${String(t)}`))});this._controller=t,this._strict=e.strict??!0}append(t){let e={type:"text-delta",path:[],textDelta:t};if(this._isClosed){if(this._strict)throw new TypeError("Cannot append to a closed TextStreamController");return Le(this._controller,e,this._warnDroppedAfterClose),this}return Le(this._controller,e),this}close(){this._isClosed||(this._isClosed=!0,Le(this._controller,{type:"part-finish",path:[]}),Ei(this._controller))}},Bl=(t,e={})=>Ai(t,r=>new Ol(r,e)),ln=(t={})=>Ri(e=>new Ol(e,t));var yg=class{constructor(t,e={}){v(this,"_isClosed",!1);v(this,"_mergeTask");v(this,"_controller");v(this,"_argsTextController");this._controller=t;let r=Bl({start:i=>{this._argsTextController=i}},e),o=!1;this._mergeTask=r.pipeTo(new WritableStream({write:i=>{switch(i.type){case"text-delta":o=!0,Le(this._controller,i);break;case"part-finish":o||Le(this._controller,{type:"text-delta",textDelta:"{}",path:[]}),Le(this._controller,{type:"tool-call-args-text-finish",path:[]});break;default:throw new Error(`Unexpected chunk type: ${i.type}`)}}}))}get argsText(){return this._argsTextController}async setResponse(t){if(this._isClosed)return;let e=t.result;Le(this._controller,{type:"result",path:[],...t.artifact!==void 0?{artifact:t.artifact}:{},result:e===void 0?Ii:e,isError:t.isError??!1,...t.modelContent!==void 0?{modelContent:t.modelContent}:{},...t.messages!==void 0?{messages:t.messages}:{}}),await this.close()}async close(){this._isClosed||(this._isClosed=!0,this._argsTextController.close(),await this._mergeTask,Le(this._controller,{type:"part-finish",path:[]}),Ei(this._controller))}};var Nl=(t={})=>Ri(e=>new yg(e,t));var Pi=class{constructor(){v(this,"value",-1)}up(){return++this.value}};var $l=class extends TransformStream{constructor(t){super({transform(e,r){r.enqueue({...e,path:[t,...e.path]})}})}},KE=class extends TransformStream{constructor(t){super({transform(e,r){let{path:[o,...i]}=e;if(t!==o)throw new Error(`Path mismatch: expected ${t}, got ${o}`);r.enqueue({...e,path:i})}})}},Ll=class extends TransformStream{constructor(t){let e=new Pi,r=new Map;super({transform(o,i){o.type==="part-start"&&o.path.length===0&&r.set(e.up(),t.up());let[s,...n]=o.path;if(s===void 0){i.enqueue(o);return}let a=r.get(s);if(a===void 0)throw new Error("Path not found");i.enqueue({...o,path:[a,...n]})}})}};var ki=(t,e=21)=>(r=e)=>{let o="",i=r|0;for(;i-- >0;)o+=t[Math.random()*t.length|0];return o};var Fl=ki("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7);var _g=class Vl{constructor(e,r={}){v(this,"_state");v(this,"_parentId");this._state=e||{strict:r.strict??!0,merger:Ml(),contentCounter:new Pi}}get __internal_isClosed(){return this._state.merger.isSealed()||this._state.merger.isCancelled()||this._state.merger.isErrored()}get __internal_isCancelled(){return this._state.merger.isCancelled()}__internal_getReadable(){return this._state.merger.readable}__internal_subscribeToClose(e){this._state.closeSubscriber=e}_addTransformedStream(e,r){if(e.locked)throw new TypeError("Cannot merge a stream that is already locked to a reader.");let o=e.pipeTo(r.writable).catch(async i=>{throw await r.writable.abort(i).catch(()=>{}),i});this._state.merger.addStream(r.readable,o)}_addPart(e,r){this._state.append&&(this._state.append.controller.close(),this._state.append=void 0),this.enqueue({type:"part-start",part:e,path:[]}),this._addTransformedStream(r,new $l(this._state.contentCounter.value))}merge(e){this._addTransformedStream(e,new Ll(this._state.contentCounter))}appendText(e){(this._state.append?.kind!=="text"||this._state.append.parentId!==this._parentId)&&(this._state.append={kind:"text",parentId:this._parentId,controller:this.addTextPart()}),this._state.append.controller.append(e)}appendReasoning(e,r){(r!==void 0||this._state.append?.kind!=="reasoning"||this._state.append.parentId!==this._parentId)&&(this._state.append={kind:"reasoning",parentId:this._parentId,controller:this.addReasoningPart(r)}),!(r!==void 0&&e.length===0)&&this._state.append.controller.append(e)}addTextPart(){let[e,r]=ln({strict:this._state.strict});return this._addPart(this._withParentIdOption({type:"text"}),e),r}addReasoningPart(e){let[r,o]=ln({strict:this._state.strict});return this._addPart(this._withParentIdOption({type:"reasoning",...e}),r),o}addToolCallPart(e){let r=typeof e=="string"?{toolName:e}:e,o=r.toolName,i=r.toolCallId??Fl(),[s,n]=Nl({strict:this._state.strict});return this._addPart({type:"tool-call",toolName:o,toolCallId:i,...this._parentId&&{parentId:this._parentId}},s),r.argsText!==void 0&&(n.argsText.append(r.argsText),n.argsText.close()),r.args!==void 0&&(n.argsText.append(JSON.stringify(r.args)),n.argsText.close()),r.response!==void 0&&n.setResponse(r.response),n}_finishedPartStream(){return new ReadableStream({start(e){e.enqueue({type:"part-finish",path:[]}),e.close()}})}_withParentIdOption(e){return this._parentId?{...e,parentId:this._parentId}:e}appendSource(e){this._addPart(this._withParentIdOption(e),this._finishedPartStream())}appendFile(e){this._addPart(this._withParentIdOption(e),this._finishedPartStream())}appendData(e){this._addPart(this._withParentIdOption(e),this._finishedPartStream())}enqueue(e){this._state.merger.enqueue(e),e.type==="part-start"&&e.path.length===0&&this._state.contentCounter.up()}withParentId(e){let r=new Vl(this._state);return r._parentId=e,r}close(){this._state.append?.controller?.close(),this._state.merger.seal(),this._state.closeSubscriber?.()}};function jl(t,e={}){let r=new _g(void 0,e);return(async()=>{try{await t(r)}catch(i){r.__internal_isClosed?r.__internal_isCancelled||console.error(i):r.enqueue({type:"error",path:[],error:String(i)})}finally{r.__internal_isClosed||r.close()}})(),r.__internal_getReadable()}function un(t={}){let{resolve:e,promise:r}=wr(),o;return[jl(i=>(o=i,o.__internal_subscribeToClose(e),r),t),o]}var Ul=class extends TransformStream{constructor(t){super();let e=t(super.readable);Object.defineProperty(this,"readable",{value:e,writable:!1})}};var ro=class extends TransformStream{constructor(){let t=[];super({transform(e,r){if(e.type==="part-start"){if(e.path.length!==0){r.error(new Error("Nested parts are not supported"));return}t.push(e.part),r.enqueue(e);return}if(e.type==="text-delta"||e.type==="result"||e.type==="part-finish"||e.type==="tool-call-args-text-finish"){if(e.path.length!==1){r.error(new Error(`${e.type} chunks must have a path of length 1`));return}let o=e.path[0];if(o<0||o>=t.length){r.error(new Error(`Invalid path index: ${o}`));return}let i=t[o];r.enqueue({...e,meta:i});return}r.enqueue(e)}})}};var Cg=/[0-9a-fA-F]/;function Kl(t){let e=["ROOT"],r=-1,o=null,i=0,s=[],n;function a(){n!==void 0&&(s.push(JSON.parse(`"${n}"`)),n=void 0)}function c(d,p,h){switch(d){case'"':r=p,e.pop(),e.push(h),e.push("INSIDE_STRING"),a();break;case"f":case"t":case"n":r=p,o=p,e.pop(),e.push(h),e.push("INSIDE_LITERAL");break;case"-":e.pop(),e.push(h),e.push("INSIDE_NUMBER"),a();break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":r=p,e.pop(),e.push(h),e.push("INSIDE_NUMBER"),a();break;case"{":r=p,e.pop(),e.push(h),e.push("INSIDE_OBJECT_START"),a();break;case"[":r=p,e.pop(),e.push(h),e.push("INSIDE_ARRAY_START"),a()}}function l(d,p){switch(d){case",":e.pop(),e.push("INSIDE_OBJECT_AFTER_COMMA");break;case"}":r=p,e.pop(),n=s.pop()}}function u(d,p){switch(d){case",":e.pop(),e.push("INSIDE_ARRAY_AFTER_COMMA"),n=(Number(n)+1).toString();break;case"]":r=p,e.pop(),n=s.pop()}}for(let d=0;d<t.length;d++){let p=t[d];switch(e[e.length-1]){case"ROOT":c(p,d,"FINISH");break;case"INSIDE_OBJECT_START":switch(p){case'"':e.pop(),e.push("INSIDE_OBJECT_KEY"),n="";break;case"}":r=d,e.pop(),n=s.pop()}break;case"INSIDE_OBJECT_AFTER_COMMA":p==='"'&&(e.pop(),e.push("INSIDE_OBJECT_KEY"),n="");break;case"INSIDE_OBJECT_KEY":switch(p){case'"':e.pop(),e.push("INSIDE_OBJECT_AFTER_KEY");break;case"\\":e.push("INSIDE_STRING_ESCAPE"),n+=p;break;default:n+=p}break;case"INSIDE_OBJECT_AFTER_KEY":p===":"&&(e.pop(),e.push("INSIDE_OBJECT_BEFORE_VALUE"));break;case"INSIDE_OBJECT_BEFORE_VALUE":c(p,d,"INSIDE_OBJECT_AFTER_VALUE");break;case"INSIDE_OBJECT_AFTER_VALUE":l(p,d);break;case"INSIDE_STRING":switch(p){case'"':e.pop(),r=d,n=s.pop();break;case"\\":e.push("INSIDE_STRING_ESCAPE");break;default:r=d}break;case"INSIDE_ARRAY_START":p==="]"?(r=d,e.pop(),n=s.pop()):(n="0",c(p,d,"INSIDE_ARRAY_AFTER_VALUE"));break;case"INSIDE_ARRAY_AFTER_VALUE":switch(p){case",":e.pop(),e.push("INSIDE_ARRAY_AFTER_COMMA"),n=(Number(n)+1).toString();break;case"]":r=d,e.pop(),n=s.pop();break;default:r=d}break;case"INSIDE_ARRAY_AFTER_COMMA":c(p,d,"INSIDE_ARRAY_AFTER_VALUE");break;case"INSIDE_STRING_ESCAPE":{e.pop();let h=e[e.length-1];p==="u"?(e.push("INSIDE_STRING_UNICODE_ESCAPE"),i=0):h==="INSIDE_STRING"&&(r=d),h==="INSIDE_OBJECT_KEY"&&(n+=p);break}case"INSIDE_STRING_UNICODE_ESCAPE":{let h=e[e.length-2];if(!Cg.test(p)){e.pop(),d--;break}i++,i===4&&(e.pop(),h==="INSIDE_STRING"&&(r=d)),h==="INSIDE_OBJECT_KEY"&&(n+=p);break}case"INSIDE_NUMBER":switch(p){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":r=d;break;case"e":case"E":case"-":case"+":case".":break;case",":e.pop(),n=s.pop(),e[e.length-1]==="INSIDE_ARRAY_AFTER_VALUE"&&u(p,d),e[e.length-1]==="INSIDE_OBJECT_AFTER_VALUE"&&l(p,d);break;case"}":e.pop(),n=s.pop(),e[e.length-1]==="INSIDE_OBJECT_AFTER_VALUE"&&l(p,d);break;case"]":e.pop(),n=s.pop(),e[e.length-1]==="INSIDE_ARRAY_AFTER_VALUE"&&u(p,d);break;default:e.pop(),n=s.pop()}break;case"INSIDE_LITERAL":{let h=t.substring(o,d+1);!"false".startsWith(h)&&!"true".startsWith(h)&&!"null".startsWith(h)?(e.pop(),e[e.length-1]==="INSIDE_OBJECT_AFTER_VALUE"?l(p,d):e[e.length-1]==="INSIDE_ARRAY_AFTER_VALUE"&&u(p,d)):r=d;break}}}let m=t.slice(0,r+1);for(let d=e.length-1;d>=0;d--)switch(e[d]){case"INSIDE_STRING":m+='"';break;case"INSIDE_OBJECT_KEY":case"INSIDE_OBJECT_AFTER_KEY":case"INSIDE_OBJECT_AFTER_COMMA":case"INSIDE_OBJECT_START":case"INSIDE_OBJECT_BEFORE_VALUE":case"INSIDE_OBJECT_AFTER_VALUE":m+="}";break;case"INSIDE_ARRAY_START":case"INSIDE_ARRAY_AFTER_COMMA":case"INSIDE_ARRAY_AFTER_VALUE":m+="]";break;case"INSIDE_LITERAL":{let p=t.substring(o,t.length);"true".startsWith(p)?m+="true".slice(p.length):"false".startsWith(p)?m+="false".slice(p.length):"null".startsWith(p)&&(m+="null".slice(p.length))}}return[m,s]}var pn=Se(mn(),1),Mi=Symbol("aui.parse-partial-json-object.meta"),Ql=t=>t?.[Mi],_r=t=>{if(t.length===0)return{[Mi]:{state:"partial",partialPath:[]}};try{let e=pn.default.parse(t);if(typeof e!="object"||e===null)throw new Error("argsText is expected to be an object");return e[Mi]={state:"complete",partialPath:[]},e}catch{try{let[e,r]=Kl(t),o=pn.default.parse(e);if(typeof o!="object"||o===null)throw new Error("argsText is expected to be an object");return o[Mi]={state:"partial",partialPath:r},o}catch{return}}},Wl=(t,e,r)=>{if(typeof t!="object"||t===null)return e.state;if(e.state==="complete")return"complete";if(r.length===0)return e.state;let[o,...i]=r;if(!Object.hasOwn(t,o))return"partial";let[s,...n]=e.partialPath;if(o!==s)return"complete";let a=t[o];return Wl(a,{state:"partial",partialPath:n},i)},Yt=(t,e)=>{let r=Ql(t);if(!r)throw new Error("unable to determine object state");return Wl(t,r,e.map(String))};async function*Ig(){let t=this.getReader(),e=!0;try{for(;;){let r;try{r=await t.read()}catch(i){throw e=!1,i}if(r.done){e=!1;break}let{value:o}=r;yield o}}finally{try{e&&await t.cancel()}finally{t.releaseLock()}}}function Di(t){var e;return t[e=Symbol.asyncIterator]??(t[e]=Ig),t}function Jl(t,e,r){try{let o=t();if(typeof o=="object"&&o!==null&&"then"in o)return o.then(e,r);e(o)}catch(o){r(o)}}function oo(t,e){let r=t;for(let o of e){if(r==null||!Object.hasOwn(r,o))return;r=r[o]}return r}var Eg=class{constructor(t,e,r){v(this,"resolve");v(this,"reject");v(this,"disposed",!1);v(this,"fieldPath");this.resolve=t,this.reject=e,this.fieldPath=r}get isDisposed(){return this.disposed}update(t){if(!this.disposed)try{if(Yt(t,this.fieldPath)==="complete"){let e=oo(t,this.fieldPath);e!==void 0&&(this.resolve(e),this.dispose())}}catch(e){this.reject(e),this.dispose()}}end(t){if(!this.disposed)try{let e=oo(t,this.fieldPath);this.resolve(e)}catch(e){this.reject(e)}finally{this.dispose()}}dispose(){this.disposed=!0}},Ag=class{constructor(t,e){v(this,"controller");v(this,"disposed",!1);v(this,"fieldPath");this.controller=t,this.fieldPath=e}get isDisposed(){return this.disposed}update(t){if(!this.disposed)try{let e=oo(t,this.fieldPath);e!==void 0&&this.controller.enqueue(e),Yt(t,this.fieldPath)==="complete"&&(this.controller.close(),this.dispose())}catch(e){this.controller.error(e),this.dispose()}}end(){this.disposed||(this.controller.close(),this.dispose())}dispose(){this.disposed=!0}},Rg=class{constructor(t,e){v(this,"controller");v(this,"disposed",!1);v(this,"fieldPath");v(this,"lastValue");this.controller=t,this.fieldPath=e}get isDisposed(){return this.disposed}update(t){if(!this.disposed)try{let e=oo(t,this.fieldPath);if(e!==void 0&&typeof e=="string"){let r=e.substring(this.lastValue?.length||0);this.lastValue=e,this.controller.enqueue(r)}Yt(t,this.fieldPath)==="complete"&&(this.controller.close(),this.dispose())}catch(e){this.controller.error(e),this.dispose()}}end(){this.disposed||(this.controller.close(),this.dispose())}dispose(){this.disposed=!0}},Pg=class{constructor(t,e){v(this,"controller");v(this,"disposed",!1);v(this,"fieldPath");v(this,"nextIndex",0);this.controller=t,this.fieldPath=e}get isDisposed(){return this.disposed}update(t){if(!this.disposed)try{let e=oo(t,this.fieldPath);if(!Array.isArray(e))return;for(;this.nextIndex<e.length;this.nextIndex++){let r=[...this.fieldPath,this.nextIndex];if(Yt(t,r)!=="complete")break;this.controller.enqueue(e[this.nextIndex])}Yt(t,this.fieldPath)==="complete"&&(this.controller.close(),this.dispose())}catch(e){this.controller.error(e),this.dispose()}}end(){this.disposed||(this.controller.close(),this.dispose())}dispose(){this.disposed=!0}},kg=class{constructor(t){v(this,"argTextDeltas");v(this,"handles",new Set);v(this,"accumulatedText","");v(this,"parsedTextLength",-1);v(this,"args");v(this,"finished",!1);this.argTextDeltas=t,this.processStream()}async processStream(){try{let t=this.argTextDeltas.getReader();for(;;){let{value:e,done:r}=await t.read();if(r)break;this.accumulatedText+=e,this.handles.size!==0&&this.parseCurrentArgs()&&this.updateHandles()}}catch(t){console.error("Error processing argument stream:",t)}finally{this.finished=!0;for(let t of this.handles)t.end(this.args);this.handles.clear()}}parseCurrentArgs(){if(this.parsedTextLength===this.accumulatedText.length)return!1;let t=_r(this.accumulatedText);return this.parsedTextLength=this.accumulatedText.length,t===void 0?(this.args??(this.args=_r("")),!1):(this.args=t,!0)}updateHandles(){for(let t of this.handles)t.update(this.args),t.isDisposed&&this.handles.delete(t)}activateHandle(t){if(this.parseCurrentArgs(),t.update(this.args),!t.isDisposed){if(this.finished){t.end(this.args);return}this.handles.add(t)}}get(...t){return new Promise((e,r)=>{let o=new Eg(e,r,t);this.activateHandle(o)})}streamValues(...t){let e=t,r,o=new ReadableStream({start:i=>{r=new Ag(i,e),this.activateHandle(r)},cancel:()=>{r&&(r.dispose(),this.handles.delete(r))}});return Di(o)}streamText(...t){let e=t,r,o=new ReadableStream({start:i=>{r=new Rg(i,e),this.activateHandle(r)},cancel:()=>{r&&(r.dispose(),this.handles.delete(r))}});return Di(o)}forEach(...t){let e=t,r,o=new ReadableStream({start:i=>{r=new Pg(i,e),this.activateHandle(r)},cancel:()=>{r&&(r.dispose(),this.handles.delete(r))}});return Di(o)}},Mg=class{constructor(t){v(this,"promise");this.promise=t}get(){return this.promise}},Yl=class{constructor(){v(this,"args");v(this,"response");v(this,"writable");v(this,"resolve");v(this,"argsText","");v(this,"result",{get:async()=>(await this.response.get()).result});let t=new TransformStream;this.writable=t.writable,this.args=new kg(t.readable);let{promise:e,resolve:r}=wr();this.resolve=r,this.response=new Mg(e)}async appendArgsTextDelta(t){let e=this.writable.getWriter();try{await e.write(t)}catch(r){console.warn(r)}finally{e.releaseLock()}this.argsText+=t}async finishArgsText(){let t=this.writable.getWriter();try{await t.close()}catch(e){console.warn(e)}finally{t.releaseLock()}}setResponse(t){this.resolve(t)}};var Xl=Se(mn(),1),Dg=Symbol.for("assistant-stream.tool-execution-id"),hn=(t,e,r,o,i)=>{try{let s=e?.(r,o,i);Promise.resolve(s).catch(n=>{console.error(`[assistant-stream] ${t} callback threw an error`,n)})}catch(s){console.error(`[assistant-stream] ${t} callback threw an error`,s)}},Sr=t=>t.join(","),fn=(t,e)=>{let r={...t};return Object.defineProperty(r,Dg,{value:e,enumerable:!0}),r},Zl=class extends Ul{constructor(t){let e=t,r=new Map,o=new Map,i=new Set,s=new Map,n=0;super(a=>{let c=new TransformStream({async transform(l,u){let m=s.get(Sr(l.path));switch((l.type!=="part-finish"||l.meta.type!=="tool-call")&&u.enqueue(m?fn(l,m):l),l.type){case"part-start":{let d=n;if(n+=1,l.part.type==="tool-call"){let p=new Yl,h=Symbol();s.set(String(d),h),o.set(h,p),e.streamCall({reader:p,toolCallId:l.part.toolCallId,toolName:l.part.toolName,executionId:h})}break}case"text-delta":if(l.meta.type==="tool-call"){let d=s.get(Sr(l.path)),p=d?o.get(d):void 0;if(!p)throw new Error("No controller found for tool call");await p.appendArgsTextDelta(l.textDelta)}break;case"result":{if(l.meta.type!=="tool-call")break;let d=s.get(Sr(l.path)),p=d?o.get(d):void 0;if(!p)throw new Error("No controller found for tool call");p.setResponse(new ze({result:l.result,artifact:l.artifact,isError:l.isError,modelContent:l.modelContent,messages:l.messages})),i.add(d);break}case"tool-call-args-text-finish":{if(l.meta.type!=="tool-call")break;let{toolCallId:d,toolName:p}=l.meta,h=s.get(Sr(l.path)),g=h?o.get(h):void 0;if(!g)throw new Error("No controller found for tool call");if(await g.finishArgsText(),i.has(h))break;let b=!1,y=Jl(()=>{let x;try{x=Xl.default.parse(g.argsText)}catch(_){throw new Error(`Function parameter parsing failed. ${JSON.stringify(_.message)}`)}let S=e.execute({toolCallId:d,toolName:p,args:x,executionId:h});return S!==void 0&&(b=!0,hn("onExecutionStart",e.onExecutionStart,d,p,h)),S},x=>{if(b&&hn("onExecutionEnd",e.onExecutionEnd,d,p,h),x===void 0)return;let S=new ze({artifact:x.artifact,result:x.result,isError:x.isError,messages:x.messages,modelContent:x.modelContent});g.setResponse(S),Le(u,fn({type:"result",path:l.path,...S},h))},x=>{b&&hn("onExecutionEnd",e.onExecutionEnd,d,p,h);let S=new ze({result:String(x),isError:!0});g.setResponse(S),Le(u,fn({type:"result",path:l.path,...S},h))});y&&r.set(h,y);break}case"part-finish":{if(l.meta.type!=="tool-call")break;let d=s.get(Sr(l.path)),p=d?r.get(d):void 0,h=()=>{d&&(r.delete(d),o.delete(d),i.delete(d),s.delete(Sr(l.path)))};p?p.then(()=>{h(),Le(u,l)}):(h(),u.enqueue(l))}}},async flush(){await Promise.all(r.values())}});return a.pipeThrough(new ro).pipeThrough(c)})}};var tu=Symbol.for("assistant-stream.tool-execution-id"),Bi=Symbol("assistant-stream.tool-aborted"),Og=t=>typeof t=="object"&&t!==null&&"~standard"in t&&t["~standard"].version===1,Bg=t=>typeof t?.then=="function",eu=async(t,e,r=!1)=>{let o,i=new Promise(s=>{o=()=>{r?queueMicrotask(()=>queueMicrotask(()=>s(Bi))):s(Bi)},e.aborted?o():e.addEventListener("abort",o,{once:!0})});try{return await Promise.race([t,i])}finally{e.removeEventListener("abort",o)}},Oi=()=>new ze({result:"Tool execution was cancelled.",isError:!0});function Ng(t,e,r,o){let i=t?.[r.toolName];return i?.execute?(async n=>{if(e.aborted)return Oi();let a=n;if(Og(i.parameters)){let u=i.parameters["~standard"].validate(r.args),m=Bg(u)?await eu(u,e):u;if(m===Bi)return Oi();m.issues&&(a=i.experimental_onSchemaValidationError??(()=>{throw new Error(`Function parameter validation failed. ${JSON.stringify(m.issues)}`)}))}if(e.aborted)return Oi();let c=(async()=>{let u={toolCallId:r.toolCallId,abortSignal:e,human:p=>o(r.toolCallId,p,r.executionId),[tu]:r.executionId},m=await a(r.args,u),d=ze.toResponse(m);if(i.toModelOutput&&!d.isError&&d.modelContent===void 0)try{let p=await i.toModelOutput({toolCallId:r.toolCallId,input:r.args,output:d.result});return new ze({result:d.result,artifact:d.artifact,isError:d.isError,messages:d.messages,modelContent:p})}catch(p){console.warn(`[assistant-stream] tool "${r.toolName}" toModelOutput threw; falling back to default projection.`,p)}return d})(),l=await eu(c,e,!0);return l===Bi?Oi():l})(i.execute):void 0}function $g(t,e,r,o,i){let s={toolCallId:o.toolCallId,abortSignal:e,human:n=>i(o.toolCallId,n,o.executionId),[tu]:o.executionId};t?.[o.toolName]?.streamCall?.(r,s)}function gn(t,e,r,o){let i=typeof t=="function"?t:()=>t,s=typeof e=="function"?e:()=>e,n=o,a=r,c={execute:l=>Ng(i(),s(),l,a),streamCall:({reader:l,...u})=>$g(i(),s(),l,u,a),onExecutionStart:n?.onExecutionStart,onExecutionEnd:n?.onExecutionEnd};return new Zl(c)}function Lg(t){let e=t.metadata;if(!e||typeof e!="object")return;let r=e.custom;if(!r||typeof r!="object")return;let o=r.interactables;return Array.isArray(o)?o:void 0}function Fg(t){return`update_${t.replace(/[^a-zA-Z0-9_-]/g,"_")}`}var vn=t=>{if(!ye(t))return;let e=t.id;return typeof e=="string"||typeof e=="number"?e:void 0};function Vg(t,e,r){let o=Array.isArray(e.set)?[...e.set]:[...t];if(e.clear===!0&&(o=[]),Array.isArray(e.remove)&&e.remove.length>0){let s=new Set(e.remove);o=o.filter(n=>{let a=vn(n);return a!==void 0?!s.has(a):!s.has(n)})}let i=e.update;if(Array.isArray(i)&&i.length>0){let s=new Map;for(let n of i){let a=vn(n);a!==void 0&&!Number.isNaN(a)&&!s.has(a)&&s.set(a,n)}o=o.map(n=>{let a=vn(n);if(a===void 0||!ye(n))return n;let c=s.get(a);return c?{...n,...c}:n})}if(Array.isArray(e.add)&&e.add.length>0){let s=r?e.add.map(n=>{if(!ye(n)||n.id!==void 0)return n;let a=r();return a===void 0?n:{...n,id:a}}):e.add;o=[...o,...s]}return o}function bn(t,e,r){if(!ye(t)||!ye(e))return e;let o=ye(r?.arrayBaseline)?r.arrayBaseline:t,i=Object.entries(t);for(let[s,n]of Object.entries(e)){let a=o[s];if(Array.isArray(a)&&ye(n)){let c=r?.idFactory&&(r.idKeyedFields===void 0||r.idKeyedFields.has(s))?()=>r.idFactory?.(s):void 0;i.push([s,Vg(a,n,c)])}else i.push([s,n])}return Object.fromEntries(i)}function jg(t,e){if(!ye(t)||!ye(e))return;for(let i of Object.keys(t))if(!Object.hasOwn(e,i))return;let r=[];for(let[i,s]of Object.entries(e))(!Object.hasOwn(t,i)||!to(t[i],s))&&r.push([i,s]);let o=r.length;if(!(o===0||o===Object.keys(e).length))return Object.fromEntries(r)}var Ug=t=>{if(!t||typeof t!="object")return;let e=t;return e.type==="tool-call"?e:void 0},zg=(t,e)=>{if(!t.args||typeof t.args!="object")return!1;let r=ye(t.result)?t.result:void 0;if(r?.success===!1)return!1;if(typeof r?.id=="string")return r.id===e;let o=t.args.id;return o===e||o===void 0},Hg=t=>{let e=ye(t)?t.addedItemIds:void 0;if(!ye(e))return;let r=new Map;for(let[o,i]of Object.entries(e)){if(!Array.isArray(i))continue;let s=i.filter(n=>typeof n=="string");s.length>0&&r.set(o,s)}if(r.size!==0)return o=>r.get(o)?.shift()},ru=new WeakMap;function qg(t,e,r){let o=ru.get(t);o||(o=new Map,ru.set(t,o));let i=o.get(r);i||(i=new Map,o.set(r,i));let s=i.get(e);if(s)return s;let n=Fg(r),a=[],c=()=>a[a.length-1];for(let l of t){if(l.role==="user"){let u=Lg(l)?.find(m=>m.id===e);if(!u)continue;if(u.partial){let m=c();m&&a.push({state:bn(m.state,u.state),origin:"user-edit"})}else a.push({state:u.state,origin:"user-edit"});continue}if(l.role==="assistant")for(let u of l.content??[]){let m=Ug(u);if(m){if(m.toolCallId===e&&m.toolName===r)m.args&&typeof m.args=="object"&&a.push({state:m.args,origin:"create",toolCallId:e});else if(m.toolName===n&&zg(m,e)){let d=c();if(d){let{id:p,...h}=m.args,g=Hg(m.result);a.push({state:g?bn(d.state,h,{idFactory:g}):bn(d.state,h),origin:"update",toolCallId:m.toolCallId})}}}}}return i.set(e,a),a}function Gg(t,e,r){let o=qg(t,e,r),i=o[o.length-1];return i?{state:i.state}:void 0}function ou(t,e){if(!t)return;let{interactables:r,...o}=t,i={...o};if(Array.isArray(r)){let s=[];for(let n of r){let a=Gg(e,n.id,n.name);if(!a){s.push({id:n.id,name:n.name,state:n.state});continue}if(to(n.state,a.state))continue;let c=jg(a.state,n.state);s.push(c?{id:n.id,name:n.name,state:c,partial:!0}:{id:n.id,name:n.name,state:n.state})}s.length&&(i.interactables=s)}return Object.keys(i).length?i:void 0}var Kg=re(null);var iu=()=>me(Kg);var _t=Symbol("innerMessage"),xn=Symbol("innerMessages"),Qg=[],wn=(t,e)=>{_t in t||(t[_t]=e)},su=t=>{let e="messages"in t?t.messages:t,r=e[xn]||e[_t];return r?Array.isArray(r)?r:(e[xn]=[r],e[xn]):Qg},nu="__external_store_fallback_";var He=ki("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7);function au(t){let e=t.match(/^data:([^;,]+)(?:;[^;,]+)*;base64,(.*)$/i);return e?{mimeType:e[1].toLowerCase(),data:e[2]}:null}var yn=(t,e)=>{if(t.startsWith("data-"))return{type:"data",name:t.substring(5),data:e}},Tr=(t,e,r)=>{let{role:o,id:i,createdAt:s,attachments:n,status:a,metadata:c}=t,l={id:i??e,createdAt:s??new Date},u=typeof t.content=="string"?[{type:"text",text:t.content}]:t.content,m=({image:d,...p})=>typeof d!="string"?null:au(d)?.mimeType.startsWith("image/")?{...p,image:d}:/^(https:\/\/|blob:)/i.test(d)?{...p,image:d}:(console.warn("Invalid image data format detected"),null);if(o!=="user"&&n?.length)throw new Error("attachments are only supported for user messages");if(o!=="assistant"&&a)throw new Error("status is only supported for assistant messages");if(o!=="assistant"&&c?.steps)throw new Error("metadata.steps is only supported for assistant messages");switch(o){case"assistant":return{...l,role:o,content:u.map(d=>{let p=d.type;switch(p){case"text":return d.text?.trim()?d:null;case"reasoning":return!d.text?.trim()&&!d.unstable_summary?.trim()?null:d;case"file":case"source":return d;case"image":return m(d);case"data":return d;case"generative-ui":return d;case"tool-call":{let{parentId:h,messages:g,...b}=d,y={...b,toolCallId:d.toolCallId||`tool-${He()}`,...h!==void 0&&{parentId:h},...g!==void 0&&{messages:g}};return d.args?{...y,args:d.args,argsText:d.argsText??JSON.stringify(d.args)}:{...y,args:_r(d.argsText??"")??{},argsText:d.argsText??""}}default:{let h=yn(p,d.data);if(h)return h;throw new Error(`Unsupported assistant message part type: ${p}`)}}}).filter(d=>!!d),status:a??r,metadata:{unstable_state:c?.unstable_state??null,unstable_annotations:c?.unstable_annotations??[],unstable_data:c?.unstable_data??[],custom:c?.custom??{},steps:c?.steps??[],...c?.timing&&{timing:c.timing},...c?.submittedFeedback&&{submittedFeedback:c.submittedFeedback},...c?.isOptimistic&&{isOptimistic:!0},...c?.modality&&{modality:c.modality}}};case"user":return{...l,role:o,content:u.map(d=>{let p=d.type;switch(p){case"text":case"image":case"audio":case"file":case"data":return d;default:{let h=yn(p,d.data);if(h)return h;throw new Error(`Unsupported user message part type: ${p}`)}}}),attachments:(n??[]).map(d=>({...d,content:d.content.map(p=>yn(p.type,p.data)??p)})),metadata:{custom:c?.custom??{},...c?.isOptimistic&&{isOptimistic:!0},...c?.modality&&{modality:c.modality}}};case"system":if(u.length!==1||u[0].type!=="text")throw new Error("System messages must have exactly one text message part.");return{...l,role:o,content:u,metadata:{custom:c?.custom??{}}};default:throw new Error(`Unknown message role: ${o}`)}};var lu=t=>t.type==="tool-call"&&t.result===void 0,Wg=t=>{if(t.type!=="tool-call"||t.result!==void 0)return!1;let e=t.messages?.at(-1);return e?.role==="assistant"&&e.status.type==="running"},uu=t=>t.type!=="tool-call"||t.result!==void 0?!1:t.interrupt!=null||t.approval!=null&&t.approval.approved===void 0&&t.approval.resolution===void 0,Xt=Symbol("autoStatus"),cu=Object.freeze(Object.assign({type:"running"},{[Xt]:!0})),Jg=Object.freeze(Object.assign({type:"complete",reason:"unknown"},{[Xt]:!0})),Yg=Object.freeze(Object.assign({type:"incomplete",reason:"cancelled"},{[Xt]:!0})),Xg=Object.freeze(Object.assign({type:"requires-action",reason:"tool-calls"},{[Xt]:!0})),Zg=Object.freeze(Object.assign({type:"requires-action",reason:"interrupt"},{[Xt]:!0})),du=t=>t[Xt]===!0,mu=(t,e,r,o,i,s,n)=>t&&i?Object.assign({type:"incomplete",reason:"error",error:i},{[Xt]:!0}):t&&e?cu:r?Zg:n&&!s?cu:o?Xg:s?Yg:Jg,_n=t=>mu(!1,!1,typeof t!="string"&&t.some(uu),typeof t!="string"&&t.some(lu)),Sn=(t,e,r)=>mu(e,r,typeof t!="string"&&t.some(uu),typeof t!="string"&&t.some(lu),void 0,void 0,typeof t!="string"&&t.some(Wg));var Tn=class{constructor(){v(this,"cache",new WeakMap)}convertMessages(t,e){return t.map((r,o)=>{let i=e(this.cache.get(r),r,o);return this.cache.set(r,i),i})}};var Cn=(t,e)=>{if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0};var In=require("react/jsx-runtime"),En=t=>{let e=f(6),{index:r,children:o}=t,i=B(),s;e[0]!==r?(s=ne({attachment:ae({source:"message",query:{type:"index",index:r},get:c=>c.message.attachment({index:r})})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,In.jsx)(de,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a},An=t=>{let e=f(6),{index:r,children:o}=t,i=B(),s;e[0]!==r?(s=ne({attachment:ae({source:"composer",query:{type:"index",index:r},get:c=>c.composer.attachment({index:r})})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,In.jsx)(de,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var pu=require("react/jsx-runtime"),Rn=t=>{let e=f(6),{index:r,children:o}=t,i=B(),s;e[0]!==r?(s=ne({message:ae({source:"thread",query:{type:"index",index:r},get:c=>c.thread.message({index:r})}),composer:ae({source:"message",query:{},get:c=>c.thread.message({index:r}).composer()})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,pu.jsx)(de,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var hu=require("react/jsx-runtime"),Zt=t=>{let e=f(6),{index:r,children:o}=t,i=B(),s;e[0]!==r?(s=ne({part:ae({source:"message",query:{type:"index",index:r},get:c=>c.message.part({index:r})})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,hu.jsx)(de,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var fu=require("react/jsx-runtime"),ev=t=>{let e=f(7),{text:r,isRunning:o}=t,i;e[0]!==o?(i=o?{type:"running"}:{type:"complete"},e[0]=o,e[1]=i):i=e[1];let s;e[2]!==i||e[3]!==r?(s={type:"text",text:r,status:i},e[2]=i,e[3]=r,e[4]=s):s=e[4];let n=s,a;return e[5]!==n?(a={getState:()=>n,addToolResult:rv,resumeToolCall:ov,respondToToolApproval:iv},e[5]=n,e[6]=a):a=e[6],a},tv=z(ev),er=t=>{let e=f(7),{text:r,isRunning:o,children:i}=t,s=o===void 0?!1:o,n=B(),a;e[0]!==s||e[1]!==r?(a=ne({part:tv({text:r,isRunning:s})}),e[0]=s,e[1]=r,e[2]=a):a=e[2];let c=a,l;return e[3]!==n||e[4]!==i||e[5]!==c?(l=(0,fu.jsx)(de,{extends:n,config:c,children:i}),e[3]=n,e[4]=i,e[5]=c,e[6]=l):l=e[6],l};function rv(){throw new Error("Not supported")}function ov(){throw new Error("Not supported")}function iv(){throw new Error("Not supported")}var gu=t=>{for(let e of t)if(e?.status.type==="running")return Si;return t.at(-1)?.status??ot},vu=(t,e)=>{let r={running:0,complete:0,incomplete:0,requiresAction:0},o=ot,i=!1;for(let s of e)switch(o=t[s]?.status??ot,o.type){case"running":r.running++,i=!0;break;case"complete":r.complete++;break;case"incomplete":r.incomplete++;break;case"requires-action":r.requiresAction++}return{status:i?Si:o,counts:r}};var sv=t=>{let e=f(11),{parts:r,getMessagePart:o}=t,[i,s]=j(!0),n;e[0]!==r?(n=gu(r),e[0]=r,e[1]=n):n=e[1];let a=n,c;e[2]!==i||e[3]!==r||e[4]!==a?(c={parts:r,collapsed:i,status:a},e[2]=i,e[3]=r,e[4]=a,e[5]=c):c=e[5];let l=c,u;e[6]!==l?(u=()=>l,e[6]=l,e[7]=u):u=e[7];let m;return e[8]!==o||e[9]!==u?(m={getState:u,setCollapsed:s,part:o},e[8]=o,e[9]=u,e[10]=m):m=e[10],m},bu=z(sv);var xu=require("react/jsx-runtime"),wu=t=>{let e=f(4),{startIndex:r,endIndex:o,children:i}=t,s=E(nv).slice(r,o+1),n=B(),a=ne({chainOfThought:bu({parts:s,getMessagePart:l=>{let{index:u}=l;if(u<0||u>=s.length)throw new Error(`ChainOfThought part index ${u} is out of bounds (0..${s.length-1})`);return n.message.part({index:r+u})}})}),c;return e[0]!==i||e[1]!==a||e[2]!==n?(c=(0,xu.jsx)(de,{extends:n,config:a,children:i}),e[0]=i,e[1]=a,e[2]=n,e[3]=c):c=e[3],c};function nv(t){return t.message.parts}var yu=require("react/jsx-runtime"),Pn=t=>{let e=f(6),{index:r,children:o}=t,i=B(),s;e[0]!==r?(s=ne({suggestion:ae({source:"suggestions",query:{index:r},get:c=>c.suggestions.suggestion({index:r})})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,yu.jsx)(de,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var _u=require("react/jsx-runtime"),Su=t=>{let e=f(6),{index:r,children:o}=t,i=B(),s;e[0]!==r?(s=ne({queueItem:ae({source:"composer",query:{type:"index",index:r},get:c=>c.composer.queueItem({index:r})})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,_u.jsx)(de,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var Iu=Symbol.for("assistant-ui.message-not-sent"),Tu,Cu,KR=class extends(Cu=Error,Tu=Iu,Cu){constructor(e="The message was not sent."){super(e);v(this,Tu,!0);this.name="MessageNotSentError"}},Ni=t=>typeof t=="object"&&t!==null&&Iu in t;var Eu=class{constructor(t){v(this,"_core");this._core=t,this.__internal_bindMethods()}get path(){return this._core.path}__internal_bindMethods(){this.getState=this.getState.bind(this),this.remove=this.remove.bind(this),this.subscribe=this.subscribe.bind(this)}getState(){return this._core.getState()}subscribe(t){return this._core.subscribe(t)}},Au=class extends Eu{constructor(e,r){super(e);v(this,"_composerApi");this._composerApi=r}remove(){let e=this._composerApi.getState();if(!e)throw new Error("Composer is not available");return e.removeAttachment(this.getState().id)}},Ru=class extends Au{get source(){return"thread-composer"}},Pu=class extends Au{get source(){return"edit-composer"}},ku=class extends Eu{get source(){return"message"}remove(){throw new Error("Message attachments cannot be removed")}};var $i=Object.freeze([]),Mu=Object.freeze({}),av=t=>Object.freeze({type:"thread",isEditing:t?.isEditing??!1,canCancel:t?.canCancel??!1,canSend:t?.canSend??!1,isEmpty:t?.isEmpty??!0,attachments:t?.attachments??$i,text:t?.text??"",role:t?.role??"user",runConfig:t?.runConfig??Mu,attachmentAccept:t?.attachmentAccept??"",dictation:t?.dictation,quote:t?.quote,queue:t?.queue??$i,value:t?.text??""}),cv=t=>Object.freeze({type:"edit",isEditing:t?.isEditing??!1,canCancel:t?.canCancel??!1,canSend:t?.canSend??!1,isEmpty:t?.isEmpty??!0,text:t?.text??"",role:t?.role??"user",attachments:t?.attachments??$i,runConfig:t?.runConfig??Mu,attachmentAccept:t?.attachmentAccept??"",dictation:t?.dictation,quote:t?.quote,queue:t?.queue??$i,parentId:t?.parentId??null,sourceId:t?.sourceId??null,value:t?.text??""}),Du=class{constructor(t){v(this,"_core");v(this,"_eventSubscriptionSubjects",new Map);this._core=t}get path(){return this._core.path}__internal_bindMethods(){this.setText=this.setText.bind(this),this.setRunConfig=this.setRunConfig.bind(this),this.getState=this.getState.bind(this),this.subscribe=this.subscribe.bind(this),this.addAttachment=this.addAttachment.bind(this),this.reset=this.reset.bind(this),this.clearAttachments=this.clearAttachments.bind(this),this.send=this.send.bind(this),this.cancel=this.cancel.bind(this),this.steerQueueItem=this.steerQueueItem.bind(this),this.moveQueueItem=this.moveQueueItem.bind(this),this.removeQueueItem=this.removeQueueItem.bind(this),this.setRole=this.setRole.bind(this),this.getAttachmentByIndex=this.getAttachmentByIndex.bind(this),this.startDictation=this.startDictation.bind(this),this.stopDictation=this.stopDictation.bind(this),this.setQuote=this.setQuote.bind(this),this.unstable_on=this.unstable_on.bind(this)}setText(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.setText(t)}setRunConfig(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.setRunConfig(t)}addAttachment(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");return e.addAttachment(t)}reset(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");return t.reset()}clearAttachments(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");return t.clearAttachments()}send(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.send(t)}cancel(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");t.cancel()}steerQueueItem(t){this.moveQueueItem(t,{lane:"steer",insertAfter:null})}moveQueueItem(t,e){let r=this._core.getState();if(!r)throw new Error("Composer is not available");r.moveQueueItem(t,e)}removeQueueItem(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.removeQueueItem(t)}setRole(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.setRole(t)}startDictation(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");t.startDictation()}stopDictation(){let t=this._core.getState();if(!t)throw new Error("Composer is not available");t.stopDictation()}setQuote(t){let e=this._core.getState();if(!e)throw new Error("Composer is not available");e.setQuote(t)}subscribe(t){return this._core.subscribe(t)}unstable_on(t,e){let r=this._eventSubscriptionSubjects.get(t);return r||(r=new fi({event:t,binding:this._core}),this._eventSubscriptionSubjects.set(t,r)),r.subscribe(e)}},Ou=class extends Du{constructor(e){let r=new Jr({path:e.path,getState:()=>av(e.getState()),subscribe:o=>e.subscribe(o)});super({path:e.path,getState:()=>e.getState(),subscribe:o=>r.subscribe(o)});v(this,"_getState");this._getState=r.getState.bind(r),this.__internal_bindMethods()}get path(){return this._core.path}get type(){return"thread"}getState(){return this._getState()}getAttachmentByIndex(e){return new Ru(new Pe({path:{...this.path,attachmentSource:"thread-composer",attachmentSelector:{type:"index",index:e},ref:`${this.path.ref}.attachments[${e}]`},getState:()=>{let r=this.getState().attachments[e];return r?{...r,source:"thread-composer"}:Re},subscribe:r=>this._core.subscribe(r)}),this._core)}},Bu=class extends Du{constructor(e,r){let o=new Jr({path:e.path,getState:()=>cv(e.getState()),subscribe:i=>e.subscribe(i)});super({path:e.path,getState:()=>e.getState(),subscribe:i=>o.subscribe(i)});v(this,"_getState");v(this,"_beginEdit");this._beginEdit=r,this._getState=o.getState.bind(o),this.__internal_bindMethods()}get path(){return this._core.path}get type(){return"edit"}__internal_bindMethods(){super.__internal_bindMethods(),this.beginEdit=this.beginEdit.bind(this)}getState(){return this._getState()}beginEdit(){this._beginEdit()}getAttachmentByIndex(e){return new Pu(new Pe({path:{...this.path,attachmentSource:"edit-composer",attachmentSelector:{type:"index",index:e},ref:`${this.path.ref}.attachments[${e}]`},getState:()=>{let r=this.getState().attachments[e];return r?{...r,source:"edit-composer"}:Re},subscribe:r=>this._core.subscribe(r)}),this._core)}};var Bt=t=>t.content.filter(e=>e.type==="text").map(e=>e.text).join(`

`);var lv="ui://",Nu=t=>!!t?.startsWith(lv),$u=t=>t.display==="text"||t.allowFreeform===!0;var Lu={"allow-once":!0,"allow-always":!0,"reject-once":!1,"reject-always":!1},Fu=(t,e)=>{let r=e.text;if(r!==void 0&&!$u(t))throw new Error(`Tool approval "${t.id}" does not accept a free-form answer; the request must declare display "text" or allowFreeform`);let o,i;if("optionId"in e){let s=t.options?.find(n=>n.id===e.optionId);if(!s)throw new Error(`Tool approval has no option with id "${e.optionId}"`);if("approved"in e)o=e.approved;else{if(!Object.hasOwn(Lu,s.kind))throw new Error(`Tool approval option "${s.id}" has a custom kind "${s.kind}"; respond with an explicit approved value instead`);o=Lu[s.kind]}i=s.id}else if("approved"in e)o=e.approved;else{if(t.display!=="text"&&t.display!=="select")throw new Error(`Tool approval "${t.id}" is a decision, not a question; respond with an explicit approved value, optionally alongside the answer`);o=!0}return{approvalId:t.id,approved:o,...i!==void 0&&{optionId:i},...r!==void 0&&{text:r},...e.reason!=null&&{reason:e.reason}}};var kn=class{constructor(t,e,r){v(this,"contentBinding");v(this,"messageApi");v(this,"threadApi");this.contentBinding=t,this.messageApi=e,this.threadApi=r,this.__internal_bindMethods()}get path(){return this.contentBinding.path}__internal_bindMethods(){this.addToolResult=this.addToolResult.bind(this),this.resumeToolCall=this.resumeToolCall.bind(this),this.respondToToolApproval=this.respondToToolApproval.bind(this),this.getState=this.getState.bind(this),this.subscribe=this.subscribe.bind(this)}getState(){return this.contentBinding.getState()}addToolResult(t){let e=this.contentBinding.getState();if(!e)throw new Error("Message part is not available");if(e.type!=="tool-call")throw new Error("Tried to add tool result to non-tool message part");if(!this.messageApi)throw new Error("Message API is not available. This is likely a bug in assistant-ui.");if(!this.threadApi)throw new Error("Thread API is not available");let r=this.messageApi.getState();if(!r)throw new Error("Message is not available");let o=e.toolName,i=e.toolCallId,s=ze.toResponse(t);this.threadApi.getState().addToolResult({messageId:r.id,toolName:o,toolCallId:i,result:s.result,isError:s.isError,...s.artifact!==void 0&&{artifact:s.artifact},...s.modelContent!==void 0&&{modelContent:s.modelContent}})}resumeToolCall(t){let e=this.contentBinding.getState();if(!e)throw new Error("Message part is not available");if(e.type!=="tool-call")throw new Error("Tried to resume tool call on non-tool message part");if(!this.threadApi)throw new Error("Thread API is not available");let r=e.toolCallId;this.threadApi.getState().resumeToolCall({toolCallId:r,payload:t})}respondToToolApproval(t){let e=this.contentBinding.getState();if(!e)throw new Error("Message part is not available");if(e.type!=="tool-call")throw new Error("Tried to respond to tool approval on non-tool message part");if(!e.approval||e.approval.approved!==void 0||e.approval.resolution!==void 0)throw new Error("Tool call has no pending approval");if(!this.threadApi)throw new Error("Thread API is not available");return this.threadApi.getState().respondToToolApproval(Fu(e.approval,t))}subscribe(t){return this.contentBinding.subscribe(t)}};var Vu=(t,e)=>{let r=t.content[e];if(!r)return Re;let o=Ti(t,e,r);return Object.freeze({...r,[_t]:r[_t],status:o})},ju=class{constructor(t,e){v(this,"_core");v(this,"_threadBinding");v(this,"composer");v(this,"_getEditComposerRuntimeCore",()=>this._threadBinding.getState().getEditComposer(this._core.getState().id));this._core=t,this._threadBinding=e,this.composer=new Bu(new Jt({path:{...this.path,ref:`${this.path.ref}.composer`,composerSource:"edit"},getState:this._getEditComposerRuntimeCore,subscribe:r=>this._threadBinding.subscribe(r)}),()=>this._threadBinding.getState().beginEdit(this._core.getState().id)),this.__internal_bindMethods()}get path(){return this._core.path}__internal_bindMethods(){this.reload=this.reload.bind(this),this.delete=this.delete.bind(this),this.getState=this.getState.bind(this),this.subscribe=this.subscribe.bind(this),this.getMessagePartByIndex=this.getMessagePartByIndex.bind(this),this.getMessagePartByToolCallId=this.getMessagePartByToolCallId.bind(this),this.getAttachmentByIndex=this.getAttachmentByIndex.bind(this),this.unstable_getCopyText=this.unstable_getCopyText.bind(this),this.speak=this.speak.bind(this),this.stopSpeaking=this.stopSpeaking.bind(this),this.submitFeedback=this.submitFeedback.bind(this),this.switchToBranch=this.switchToBranch.bind(this)}getState(){return this._core.getState()}delete(){let t=this._core.getState();return this._threadBinding.getState().deleteMessage(t.id)}reload(t={}){let e=this._getEditComposerRuntimeCore(),r=e??this._threadBinding.getState().composer,o=e??r,{runConfig:i=o.runConfig}=t,s=this._core.getState();if(s.role!=="assistant")throw new Error("Can only reload assistant messages");this._threadBinding.getState().startRun({parentId:s.parentId,sourceId:s.id,runConfig:i})}speak(){let t=this._core.getState();return this._threadBinding.getState().speak(t.id)}stopSpeaking(){let t=this._core.getState();if(this._threadBinding.getState().speech?.messageId===t.id)this._threadBinding.getState().stopSpeaking();else throw new Error("Message is not being spoken")}submitFeedback({type:t,comment:e}){let r=this._core.getState();this._threadBinding.getState().submitFeedback({messageId:r.id,type:t,...e!==void 0?{comment:e}:void 0})}switchToBranch({position:t,branchId:e}){let r=this._core.getState();if(e&&t)throw new Error("May not specify both branchId and position");if(!e&&!t)throw new Error("Must specify either branchId or position");let o=this._threadBinding.getState().getBranches(r.id),i=e;if(t==="previous"?i=o[r.branchNumber-2]:t==="next"&&(i=o[r.branchNumber]),!i)throw new Error("Branch not found");this._threadBinding.getState().switchToBranch(i)}unstable_getCopyText(){return Bt(this.getState())}subscribe(t){return this._core.subscribe(t)}getMessagePartByIndex(t){if(t<0)throw new Error("Message part index must be >= 0");return new kn(new Pe({path:{...this.path,ref:`${this.path.ref}.content[${t}]`,messagePartSelector:{type:"index",index:t}},getState:()=>Vu(this.getState(),t),subscribe:e=>this._core.subscribe(e)}),this._core,this._threadBinding)}getMessagePartByToolCallId(t){return new kn(new Pe({path:{...this.path,ref:`${this.path.ref}.content[toolCallId=${JSON.stringify(t)}]`,messagePartSelector:{type:"toolCallId",toolCallId:t}},getState:()=>{let e=this._core.getState(),r=e.content.findIndex(o=>o.type==="tool-call"&&o.toolCallId===t);return r===-1?Re:Vu(e,r)},subscribe:e=>this._core.subscribe(e)}),this._core,this._threadBinding)}getAttachmentByIndex(t){return new ku(new Pe({path:{...this.path,ref:`${this.path.ref}.attachments[${t}]`,attachmentSource:"message",attachmentSelector:{type:"index",index:t}},getState:()=>{let e=this.getState().attachments?.[t];return e?{...e,source:"message"}:Re},subscribe:e=>this._core.subscribe(e)}))}};var uv=t=>({parentId:t.parentId??null,sourceId:t.sourceId??null,runConfig:t.runConfig??{},...t.stream?{stream:t.stream}:{}}),dv=t=>({parentId:t.parentId??null,sourceId:t.sourceId??null,runConfig:t.runConfig??{}}),mv=(t,e)=>typeof e=="string"?{createdAt:new Date,parentId:t.at(-1)?.id??null,sourceId:null,runConfig:{},role:"user",content:[{type:"text",text:e}],attachments:[],metadata:{custom:{}}}:{createdAt:e.createdAt??new Date,parentId:e.parentId===void 0?t.at(-1)?.id??null:e.parentId,sourceId:e.sourceId??null,role:e.role??"user",content:e.content,attachments:e.attachments??[],metadata:e.metadata??{custom:{}},runConfig:e.runConfig??{},startRun:e.startRun},Mn=t=>{if(t.isRunning!==void 0)return t.isRunning;let e=t.messages.at(-1);return e?.role==="assistant"&&e.status.type==="running"},pv=(t,e)=>Object.freeze({threadId:e.id,metadata:e,capabilities:t.capabilities,isDisabled:t.isDisabled,isLoading:t.isLoading,isRunning:Mn(t),messages:t.messages,state:t.state,suggestions:t.suggestions,extras:t.extras,speech:t.speech,voice:t.voice}),Li=class{constructor(t,e){v(this,"_threadBinding");v(this,"_stateBinding");v(this,"composer");v(this,"_eventSubscriptionSubjects",new Map);let r=new Pe({path:t.path,getState:()=>pv(t.getState(),e.getState()),subscribe:o=>{let i=t.subscribe(o),s=e.subscribe(o);return()=>pi([i,s])}});this._stateBinding=r,this._threadBinding={path:t.path,getState:()=>t.getState(),getStateState:()=>r.getState(),outerSubscribe:o=>t.outerSubscribe(o),subscribe:o=>t.subscribe(o)},this.composer=new Ou(new Jt({path:{...this.path,ref:`${this.path.ref}.composer`,composerSource:"thread"},getState:()=>this._threadBinding.getState().composer,subscribe:o=>this._threadBinding.subscribe(o)})),this.__internal_bindMethods()}get path(){return this._threadBinding.path}get __internal_threadBinding(){return this._threadBinding}__internal_bindMethods(){this.append=this.append.bind(this),this.deleteMessage=this.deleteMessage.bind(this),this.resumeRun=this.resumeRun.bind(this),this.importExternalState=this.importExternalState.bind(this),this.exportExternalState=this.exportExternalState.bind(this),this.startRun=this.startRun.bind(this),this.cancelRun=this.cancelRun.bind(this),this.unstable_notifySessionReset=this.unstable_notifySessionReset.bind(this),this.stopSpeaking=this.stopSpeaking.bind(this),this.connectVoice=this.connectVoice.bind(this),this.disconnectVoice=this.disconnectVoice.bind(this),this.muteVoice=this.muteVoice.bind(this),this.unmuteVoice=this.unmuteVoice.bind(this),this.getVoiceVolume=this.getVoiceVolume.bind(this),this.subscribeVoiceVolume=this.subscribeVoiceVolume.bind(this),this.export=this.export.bind(this),this.import=this.import.bind(this),this.reset=this.reset.bind(this),this.getMessageByIndex=this.getMessageByIndex.bind(this),this.getMessageById=this.getMessageById.bind(this),this.subscribe=this.subscribe.bind(this),this.unstable_on=this.unstable_on.bind(this),this.getModelContext=this.getModelContext.bind(this),this.getState=this.getState.bind(this)}getState(){return this._threadBinding.getStateState()}append(t){let e=this._threadBinding.getState().append(mv(this._threadBinding.getState().messages,t));Promise.resolve(e).catch(r=>{if(!Ni(r))throw r})}deleteMessage(t){return this._threadBinding.getState().deleteMessage(t)}subscribe(t){return this._stateBinding.subscribe(t)}getModelContext(){return this._threadBinding.getState().getModelContext()}startRun(t){return this._threadBinding.getState().startRun(dv(t))}resumeRun(t){return this._threadBinding.getState().resumeRun(uv(t))}exportExternalState(){return this._threadBinding.getState().exportExternalState()}importExternalState(t){this._threadBinding.getState().importExternalState(t)}cancelRun(){this._threadBinding.getState().cancelRun()}unstable_notifySessionReset(){this._threadBinding.getState().unstable_notifySessionReset()}stopSpeaking(){return this._threadBinding.getState().stopSpeaking()}connectVoice(){this._threadBinding.getState().connectVoice()}disconnectVoice(){this._threadBinding.getState().disconnectVoice()}getVoiceVolume(){return this._threadBinding.getState().getVoiceVolume()}subscribeVoiceVolume(t){return this._threadBinding.getState().subscribeVoiceVolume(t)}muteVoice(){this._threadBinding.getState().muteVoice()}unmuteVoice(){this._threadBinding.getState().unmuteVoice()}export(){return this._threadBinding.getState().export()}import(t){this._threadBinding.getState().import(t)}reset(t){this._threadBinding.getState().reset(t)}getMessageByIndex(t){if(t<0)throw new Error("Message index must be >= 0");return this._getMessageRuntime({...this.path,ref:`${this.path.ref}.messages[${t}]`,messageSelector:{type:"index",index:t}},()=>{let e=this._threadBinding.getState().messages,r=e[t];if(r)return{message:r,parentId:e[t-1]?.id??null,index:t}})}getMessageById(t){return this._getMessageRuntime({...this.path,ref:`${this.path.ref}.messages[messageId=${JSON.stringify(t)}]`,messageSelector:{type:"messageId",messageId:t}},()=>this._threadBinding.getState().getMessageById(t))}_getMessageRuntime(t,e){return new ju(new Pe({path:t,getState:()=>{let{message:r,parentId:o,index:i}=e()??{},{messages:s,speech:n}=this._threadBinding.getState();if(!r||o===void 0||i===void 0)return Re;let a=this._threadBinding.getState().getBranches(r.id);return{...r,[_t]:r[_t],index:i,isLast:s.at(-1)?.id===r.id,parentId:o,branchNumber:a.indexOf(r.id)+1,branchCount:a.length,speech:n?.messageId===r.id?n:void 0}},subscribe:r=>this._threadBinding.subscribe(r)}),this._threadBinding)}unstable_on(t,e){let r=this._eventSubscriptionSubjects.get(t);return r||(r=new fi({event:t,binding:this._threadBinding}),this._eventSubscriptionSubjects.set(t,r)),r.subscribe(e)}};var Uu=(t,e)=>({attachments:[],attachmentAccept:"*",async addAttachment(){throw t},async removeAttachment(){throw t},isEditing:e,canCancel:!1,canSend:!1,isEmpty:!0,text:"",setText(){throw t},role:"user",setRole(){throw t},runConfig:{},setRunConfig(){throw t},async reset(){},async clearAttachments(){},send(){throw t},cancel(){},queue:[],moveQueueItem(){},removeQueueItem(){},dictation:void 0,startDictation(){throw t},stopDictation(){},quote:void 0,setQuote(){throw t},subscribe(){return()=>{}},unstable_on(){return()=>{}}}),zu=class extends Ot{constructor(){super(...arguments);v(this,"getVoiceVolume",()=>0);v(this,"subscribeVoiceVolume",()=>()=>{});v(this,"speech");v(this,"voice");v(this,"capabilities",{switchToBranch:!1,switchBranchDuringRun:!1,edit:!1,delete:!1,reload:!1,refetchThread:!1,cancel:!1,unstable_copy:!1,speech:!1,dictation:!1,voice:!1,attachments:!1,feedback:!1,queue:!1});v(this,"isDisabled",!1);v(this,"isSendDisabled",!1);v(this,"state",null);v(this,"suggestions",[]);v(this,"extras")}switchToBranch(){throw this.error}append(){throw this.error}deleteMessage(){throw this.error}startRun(){throw this.error}resumeRun(){throw this.error}cancelRun(){throw this.error}unstable_notifySessionReset(){throw this.error}addToolResult(){throw this.error}resumeToolCall(){throw this.error}respondToToolApproval(){throw this.error}speak(){throw this.error}stopSpeaking(){throw this.error}connectVoice(){throw this.error}disconnectVoice(){throw this.error}muteVoice(){throw this.error}unmuteVoice(){throw this.error}submitFeedback(){throw this.error}exportExternalState(){throw this.error}importExternalState(){throw this.error}beginEdit(){throw this.error}import(){throw this.error}reset(){throw this.error}getModelContext(){return{}}getEditComposer(){}unstable_on(){return()=>{}}};var Hu=new Error("This is a readonly thread. You cannot perform mutations on readonly threads."),qu=class extends zu{constructor(){super(...arguments);v(this,"_messages",[]);v(this,"composer",Uu(Hu,!1));v(this,"isLoading",!1)}get error(){return Hu}get messages(){return this._messages}setMessages(e){this._messages!==e&&(this._messages=e,this._notifySubscribers())}getMessageById(e){let r=this._messages.findIndex(o=>o.id===e);if(r!==-1)return{parentId:this._messages[r-1]?.id??null,message:this._messages[r],index:r}}getBranches(e){return this._messages.findIndex(r=>r.id===e)===-1?[]:[e]}export(){return{messages:this._messages.map((e,r)=>({message:e,parentId:this._messages[r-1]?.id??null}))}}cancelRun(){}stopSpeaking(){}disconnectVoice(){}};var Gu=require("react/jsx-runtime"),Ku=Object.freeze({ref:"readonly-thread",threadSelector:{type:"main"}}),hv=Object.freeze({id:"readonly",remoteId:void 0,externalId:void 0,isMain:!0,isRunning:!1,status:"regular",title:void 0}),fv=Object.freeze({path:Ku,getState:()=>hv,subscribe:()=>()=>{}}),Dn=t=>{let e=f(14),{messages:r,children:o}=t,i;e[0]!==r?(i=()=>{let h=new qu;return h.setMessages(r),h},e[0]=r,e[1]=i):i=e[1];let[s]=j(i),n,a;e[2]!==s||e[3]!==r?(n=()=>{s.setMessages(r)},a=[s,r],e[2]=s,e[3]=r,e[4]=n,e[5]=a):(n=e[4],a=e[5]),$(n,a);let c;e[6]!==s?(c=new Li({path:Ku,getState:()=>s,subscribe:h=>s.subscribe(h),outerSubscribe:h=>s.subscribe(h)},fv),e[6]=s,e[7]=c):c=e[7];let l=c,u=B(),m;e[8]!==l?(m=ne({thread:Ci({runtime:l}),composer:ae({source:"thread",query:{},get:gv})}),e[8]=l,e[9]=m):m=e[9];let d=m,p;return e[10]!==u||e[11]!==o||e[12]!==d?(p=(0,Gu.jsx)(de,{extends:u,config:d,children:o}),e[10]=u,e[11]=o,e[12]=d,e[13]=p):p=e[13],p};function gv(t){return t.thread.composer()}var io=class{constructor(t,e){v(this,"_core");v(this,"_threadListBinding");this._core=t,this._threadListBinding=e,this.__internal_bindMethods()}get path(){return this._core.path}__internal_bindMethods(){this.switchTo=this.switchTo.bind(this),this.rename=this.rename.bind(this),this.updateCustom=this.updateCustom.bind(this),this.archive=this.archive.bind(this),this.unarchive=this.unarchive.bind(this),this.delete=this.delete.bind(this),this.initialize=this.initialize.bind(this),this.generateTitle=this.generateTitle.bind(this),this.subscribe=this.subscribe.bind(this),this.unstable_on=this.unstable_on.bind(this),this.getState=this.getState.bind(this),this.detach=this.detach.bind(this)}getState(){return this._core.getState()}switchTo(t){let e=this._core.getState();return this._threadListBinding.switchToThread(e.id,t)}rename(t){let e=this._core.getState();return this._threadListBinding.rename(e.id,t)}updateCustom(t){let e=this._core.getState();if(!this._threadListBinding.updateCustom)throw new Error("Thread list runtime does not support updating custom metadata");return this._threadListBinding.updateCustom(e.id,t)}archive(){let t=this._core.getState();return this._threadListBinding.archive(t.id)}unarchive(){let t=this._core.getState();return this._threadListBinding.unarchive(t.id)}delete(){let t=this._core.getState();return this._threadListBinding.delete(t.id)}initialize(){let t=this._core.getState();return this._threadListBinding.initialize(t.id)}generateTitle(t){let e=this._core.getState();return this._threadListBinding.generateTitle(e.id,t)}unstable_on(t,e){let r=this._core.getState().isMain,o=this._core.getState().id;return this.subscribe(()=>{let i=this._core.getState(),s=i.isMain,n=i.id;r===s&&o===n||(r=s,o=n,!(t==="switchedTo"&&!s)&&(t==="switchedAway"&&s||we([e],{},`Thread list item "${t}"`)))})}subscribe(t){return this._core.subscribe(t)}detach(){let t=this._core.getState();this._threadListBinding.detach(t.id)}__internal_getRuntime(){return this}};var On=Promise.resolve(),vv=()=>{},bv=t=>({mainThreadId:t.mainThreadId,newThreadId:t.newThreadId,threadIds:t.threadIds,archivedThreadIds:t.archivedThreadIds,isLoading:t.isLoading,loadError:t.loadError,isLoadingMore:t.isLoadingMore??!1,hasMore:t.hasMore??!1,threadItems:t.threadItems}),Fi=(t,e)=>{if(e===void 0)return Re;let r=t.getItemById(e);return r?{id:r.id,remoteId:r.remoteId,externalId:r.externalId,title:r.title,status:r.status,lastMessageAt:r.lastMessageAt,custom:r.custom,isMain:r.id===t.mainThreadId,isRunning:t.unstable_isThreadRunning?.(r.id)??!1}:Re},Qu=class{constructor(t,e=Li){v(this,"_getState");v(this,"_stateBinding");v(this,"_core");v(this,"_runtimeFactory");v(this,"_mainThreadListItemRuntime");v(this,"main");this._core=t,this._runtimeFactory=e;let r=new Jr({path:{},getState:()=>bv(t),subscribe:o=>t.subscribe(o)});this._getState=r.getState.bind(r),this._stateBinding=r,this._mainThreadListItemRuntime=new io(new Pe({path:{ref:"threadItems[main]",threadSelector:{type:"main"}},getState:()=>Fi(this._core,this._core.mainThreadId),subscribe:o=>this._core.subscribe(o)}),this._core),this.main=new e(new Jt({path:{ref:"threads.main",threadSelector:{type:"main"}},getState:()=>t.getMainThreadRuntimeCore(),subscribe:o=>t.subscribe(o)}),this._mainThreadListItemRuntime),this.__internal_bindMethods()}__internal_bindMethods(){this.switchToThread=this.switchToThread.bind(this),this.switchToNewThread=this.switchToNewThread.bind(this),this.unstable_subscribeThreadEvents=this.unstable_subscribeThreadEvents.bind(this),this.getLoadThreadsPromise=this.getLoadThreadsPromise.bind(this),this.reload=this.reload.bind(this),this.reloadMainThread=this.reloadMainThread.bind(this),this.loadMore=this.loadMore.bind(this),this.getState=this.getState.bind(this),this.subscribe=this.subscribe.bind(this),this.getById=this.getById.bind(this),this.getItemById=this.getItemById.bind(this),this.getItemByIndex=this.getItemByIndex.bind(this),this.getArchivedItemByIndex=this.getArchivedItemByIndex.bind(this)}switchToThread(t,e){return this._core.switchToThread(t,e)}switchToNewThread(){return this._core.switchToNewThread()}unstable_subscribeThreadEvents(t){return this._core.unstable_subscribeThreadEvents?.(t)??vv}getLoadThreadsPromise(){return this._core.getLoadThreadsPromise()}reload(){return this._core.reload?.()??On}reloadMainThread(){return this._core.reloadMainThread?.()??On}loadMore(){return this._core.loadMore?.()??On}getState(){return this._getState()}subscribe(t){return this._stateBinding.subscribe(t)}get mainItem(){return this._mainThreadListItemRuntime}_createItemStateBinding(t){return new Pe({path:{ref:`threadItems[threadId=${t}]`,threadSelector:{type:"threadId",threadId:t}},getState:()=>Fi(this._core,t),subscribe:e=>this._core.subscribe(e)})}getById(t){return new this._runtimeFactory(new Jt({path:{ref:`threads[threadId=${JSON.stringify(t)}]`,threadSelector:{type:"threadId",threadId:t}},getState:()=>this._core.getThreadRuntimeCore(t),subscribe:e=>this._core.subscribe(e)}),this._createItemStateBinding(t))}getItemByIndex(t){return new io(new Pe({path:{ref:`threadItems[${t}]`,threadSelector:{type:"index",index:t}},getState:()=>Fi(this._core,this._core.threadIds[t]),subscribe:e=>this._core.subscribe(e)}),this._core)}getArchivedItemByIndex(t){return new io(new Pe({path:{ref:`archivedThreadItems[${t}]`,threadSelector:{type:"archiveIndex",index:t}},getState:()=>Fi(this._core,this._core.archivedThreadIds[t]),subscribe:e=>this._core.subscribe(e)}),this._core)}getItemById(t){return new io(this._createItemStateBinding(t),this._core)}};var Wu=class{constructor(t){v(this,"threads");v(this,"_thread");v(this,"_core");this._core=t,this.threads=new Qu(t.threads),this._thread=this.threads.main,this.__internal_bindMethods()}__internal_bindMethods(){this.registerModelContextProvider=this.registerModelContextProvider.bind(this)}get thread(){return this._thread}registerModelContextProvider(t){return this._core.registerModelContextProvider(t)}};var Ju=new WeakMap,so=t=>Ju.get(t)??0,Vi=(t,e)=>so(t)===e,ji=t=>{Ju.set(t,so(t)+1)};var Yu=class{constructor(){v(this,"_contextProvider",new gi)}registerModelContextProvider(t){return this._contextProvider.registerModelContextProvider(t)}getModelContextProvider(){return this._contextProvider}};var tr=Object.freeze([]),Cr="DEFAULT_THREAD_ID",xv=Object.freeze([Cr]),wv=Object.freeze({id:Cr,remoteId:void 0,externalId:void 0,status:"regular"}),yv=Promise.resolve(),Xu=Object.freeze(Te({[Cr]:wv})),Zu=class extends Ot{constructor(e={},r){super();v(this,"_mainThreadId",Cr);v(this,"_threads",xv);v(this,"_archivedThreads",tr);v(this,"_threadData",Xu);v(this,"adapter",{});v(this,"_mainThread");v(this,"threadFactory");this.threadFactory=r,this.__internal_setAdapter(e,!0)}get isLoading(){return this.adapter.isLoading??!1}get newThreadId(){}get threadIds(){return this._threads}get archivedThreadIds(){return this._archivedThreads}get threadItems(){return this._threadData}getLoadThreadsPromise(){return yv}get mainThreadId(){return this._mainThreadId}getMainThreadRuntimeCore(){return this._mainThread}getThreadRuntimeCore(){throw new Error("Method not implemented.")}getItemById(e){return Object.hasOwn(this._threadData,e)?this._threadData[e]:void 0}__internal_setAdapter(e,r=!1){let o=this.adapter;this.adapter=e;let i=e.threadId??Cr,s=e.threads??tr,n=e.archivedThreads??tr,a=o.threadId??Cr,c=o.threads??tr,l=o.archivedThreads??tr;!r&&(o.isLoading??!1)===(e.isLoading??!1)&&a===i&&c===s&&l===n||((c!==s||l!==n||a!==i)&&(this._threadData=Te(Xu,Object.fromEntries(e.threads?.map(u=>[u.id,{...u,remoteId:u.remoteId,externalId:u.externalId,status:"regular"}])??[]),Object.fromEntries(e.archivedThreads?.map(u=>[u.id,{...u,remoteId:u.remoteId,externalId:u.externalId,status:"archived"}])??[]))),c!==s&&(this._threads=this.adapter.threads?.map(u=>u.id)??tr),l!==n&&(this._archivedThreads=this.adapter.archivedThreads?.map(u=>u.id)??tr),(r||a!==i)&&(r||ji(this._mainThread),this._mainThreadId=i,this._mainThread=this.threadFactory()),Object.hasOwn(this._threadData,this._mainThreadId)||(this._threadData=Te(this._threadData,{[this._mainThreadId]:{id:this._mainThreadId,remoteId:void 0,externalId:void 0,status:"regular"}})),this._notifySubscribers())}async reloadMainThread(){this._mainThread.unstable_refetchThread&&await this._mainThread.unstable_refetchThread()}async switchToThread(e,r){if(this._mainThreadId===e)return;let o=this.adapter.onSwitchToThread;if(!o)throw new Error("External store adapter does not support switching to thread");await o(e)}async switchToNewThread(){let e=this.adapter.onSwitchToNewThread;if(!e)throw new Error("External store adapter does not support switching to new thread");await e()}async rename(e,r){let o=this.adapter.onRename;if(!o)throw new Error("External store adapter does not support renaming");await o(e,r)}async updateCustom(e,r){let o=this.adapter.onUpdateCustom;if(!o)throw new Error("External store adapter does not support updating custom metadata");await o(e,r)}async detach(){}async archive(e){let r=this.adapter.onArchive;if(!r)throw new Error("External store adapter does not support archiving");await r(e)}async unarchive(e){let r=this.adapter.onUnarchive;if(!r)throw new Error("External store adapter does not support unarchiving");await r(e)}async delete(e){let r=this.adapter.onDelete;if(!r)throw new Error("External store adapter does not support deleting");await r(e)}initialize(e){return Promise.resolve({remoteId:e,externalId:void 0})}generateTitle(){throw new Error("Method not implemented.")}};var zi={fromArray:t=>{let e=t.map(r=>Tr(r,He(),_n(r.content)));return{messages:e.map((r,o)=>({parentId:o>0?e[o-1].id:null,message:r}))}},fromBranchableArray:(t,e)=>({...e?.headId!==void 0?{headId:e.headId}:void 0,messages:t.map(({message:r,parentId:o})=>{if(!r.id)throw new Error("ExportedMessageRepository.fromBranchableArray: Each message must have an 'id' field set.");return{parentId:o,message:Tr(r,r.id,_n(r.content))}})})},Ui=t=>{let e=t;for(;e.next;)e=e.next;return"current"in e?e:null},_v=class{constructor(t){v(this,"_value",null);v(this,"func");this.func=t}get value(){return this._value===null&&(this._value=this.func()),this._value}dirty(){this._value=null}},Hi=class{constructor(){v(this,"messages",new Map);v(this,"head",null);v(this,"root",{children:[],next:null});v(this,"_messages",new _v(()=>{let t=new Array((this.head?.level??-1)+1);for(let e=this.head;e;e=e.prev)t[e.level]=e.current;return t}))}updateLevels(t,e){let r=[{message:t,level:e}];for(;r.length>0;){let o=r.pop();o.message.level=o.level;for(let i of o.message.children){let s=this.messages.get(i);s&&r.push({message:s,level:o.level+1})}}}selectPathTo(t){for(let e=t;e;e=e.prev)(e.prev??this.root).next=e}performOp(t,e,r){let o=e.prev??this.root,i=t??this.root;if(!(r==="relink"&&o===i)){if(r==="relink"){for(let s=t;s;s=s.prev)if(s.current.id===e.current.id)throw new Error("MessageRepository(performOp/relink): A message with the same id already exists in the parent tree. This error occurs if the same message id is found multiple times. This is likely an internal bug in assistant-ui.")}if(r!=="link"&&(o.children=o.children.filter(s=>s!==e.current.id),o.next===e)){let s=o.children.at(-1),n=s?this.messages.get(s):null;if(n===void 0)throw new Error("MessageRepository(performOp/cut): Fallback sibling message not found. This is likely an internal bug in assistant-ui.");o.next=n}if(r!=="cut"){i.children=[...i.children,e.current.id],e.prev=t,Ui(e)===this.head?this.selectPathTo(e):i.next===null&&(i.next=e,this.head===i&&(this.head=Ui(e)));let s=t?t.level+1:0;this.updateLevels(e,s)}}}get headId(){return this.head?.current.id??null}get canonicalHeadId(){let t=this.head;for(;t?.current.metadata?.isOptimistic;)t=t.prev;return t?.current.id??null}getMessages(t){if(t===void 0||t===this.head?.current.id)return this._messages.value;let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(getMessages): Head message not found. This is likely an internal bug in assistant-ui.");let r=new Array(e.level+1);for(let o=e;o;o=o.prev)r[o.level]=o.current;return r}addOrUpdateMessage(t,e){let r=this.messages.get(e.id),o=t?this.messages.get(t):null;if(o===void 0)throw new Error("MessageRepository(addOrUpdateMessage): Parent message not found. This is likely an internal bug in assistant-ui.");if(r){r.current=e,this.performOp(o,r,"relink"),this._messages.dirty();return}let i={prev:o,current:e,next:null,children:[],level:o?o.level+1:0};this.messages.set(e.id,i),this.performOp(o,i,"link"),this.head===o&&(this.head=i),this._messages.dirty()}getMessage(t){let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(updateMessage): Message not found. This is likely an internal bug in assistant-ui.");return{parentId:e.prev?.current.id??null,message:e.current,index:e.level}}deleteMessage(t,e){let r=this.messages.get(t);if(!r)throw new Error("MessageRepository(deleteMessage): Message not found. This is likely an internal bug in assistant-ui.");let o=e===void 0?r.prev:e===null?null:this.messages.get(e);if(o===void 0)throw new Error("MessageRepository(deleteMessage): Replacement not found. This is likely an internal bug in assistant-ui.");for(let i of r.children){let s=this.messages.get(i);if(!s)throw new Error("MessageRepository(deleteMessage): Child message not found. This is likely an internal bug in assistant-ui.");this.performOp(o,s,"relink")}this.performOp(null,r,"cut"),this.messages.delete(t),this.head===r&&(this.head=Ui(o??this.root)),this._messages.dirty()}getBranches(t){let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(getBranches): Message not found. This is likely an internal bug in assistant-ui.");let{children:r}=e.prev??this.root;return r}evictOffBranchOptimisticMessages(t,e){if(!t)return;let r=new Set;for(let i=e;i;i=i.prev)r.add(i.current.id);let o=[];for(let i=t;i&&!r.has(i.current.id);i=i.prev)i.current.metadata?.isOptimistic&&o.push(i.current.id);for(let i of o)this.messages.has(i)&&this.deleteMessage(i)}switchToBranch(t){let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(switchToBranch): Branch not found. This is likely an internal bug in assistant-ui.");let r=this.head;this.selectPathTo(e),this.head=Ui(e),this.evictOffBranchOptimisticMessages(r,this.head),this._messages.dirty()}resetHead(t){if(t===null){this.clear();return}let e=this.messages.get(t);if(!e)throw new Error("MessageRepository(resetHead): Branch not found. This is likely an internal bug in assistant-ui.");let r=this.head;if(e.children.length>0){let o=[...e.children];for(;o.length>0;){let i=o.pop(),s=this.messages.get(i);if(s){for(let n of s.children)o.push(n);this.messages.delete(i)}}e.children=[],e.next=null}this.head=e,this.selectPathTo(e),this.evictOffBranchOptimisticMessages(r,this.head),this._messages.dirty()}clear(){this.messages.clear(),this.head=null,this.root={children:[],next:null},this._messages.dirty()}export(){let t=[],e=[...this.root.children].reverse();for(;e.length>0;){let r=this.messages.get(e.pop());if(!r)continue;for(let i=r.children.length-1;i>=0;i--)e.push(r.children[i]);if(r.current.metadata?.isOptimistic)continue;let o=r.prev;for(;o&&o.current.metadata?.isOptimistic;)o=o.prev;t.push({message:r.current,parentId:o?.current.id??null})}return{headId:this.canonicalHeadId,messages:t}}import({headId:t,messages:e}){for(let{message:r,parentId:o}of e)this.addOrUpdateMessage(o,r);this.resetHead(t??e.at(-1)?.message.id??null)}};var Nt=Object.freeze([]);function*no(t){for(let e of t)if(!(e?.role!=="assistant"||!Array.isArray(e.content)))for(let r of e.content)!r||r.type!=="tool-call"||(yield{part:r,messageId:e.id},r.messages?.length&&(yield*no(r.messages)))}function Bn(t,e){if(e==="*")return!0;let r=e.split(",").map(s=>s.trim().toLowerCase()),o=t.name.toLowerCase(),i=t.type.split(";",1)[0].trim().toLowerCase();for(let s of r){if(s.startsWith(".")&&o.endsWith(s)||s.includes("/")&&s===i)return!0;if(s.endsWith("/*")){let n=s.split("/")[0];if(i.startsWith(`${n}/`))return!0}}return!1}function Sv(t){let e=He();return t.type==="image"?{id:e,type:"image",name:t.filename??"image",content:[t],status:{type:"complete"}}:t.type==="file"?{id:e,type:"document",name:t.filename??"document",contentType:t.mimeType,content:[t],status:{type:"complete"}}:t.type==="audio"?{id:e,type:"audio",name:`audio.${t.audio.format}`,contentType:`audio/${t.audio.format}`,content:[t],status:{type:"complete"}}:{id:e,type:"data",name:t.name,content:[t],status:{type:"complete"}}}function ed(t){let e=[];for(let r of t)r.type!=="text"&&e.push(Sv(r));return e}var td=t=>"content"in t&&!("lastModified"in t),ao=t=>t.status.type==="complete";var rd=class{constructor(){v(this,"operations",new Set)}start(){let t={cancelled:!1,attachmentIds:new Set};return this.operations.add(t),t}accept(t,e){return t.cancelled?!1:(t.attachmentIds.add(e),!0)}finish(t){this.operations.delete(t)}isCancelled(t){return t.cancelled}cancel(t){for(let e of[...this.operations])e.attachmentIds.has(t)&&(e.cancelled=!0,this.operations.delete(e))}cancelAll(){for(let t of this.operations)t.cancelled=!0;this.operations.clear()}},od=async(t,e)=>{if(Symbol.asyncIterator in t){for await(let r of t)if(!e(r))break}else e(await t)};var qi=class extends Ot{constructor(){super(...arguments);v(this,"isEditing",!0);v(this,"_attachments",[]);v(this,"_text","");v(this,"_role","user");v(this,"_runConfig",{});v(this,"_quote");v(this,"_isSending",!1);v(this,"_removedDuringSend",new Set);v(this,"_sendGeneration",0);v(this,"_attachmentAddOperations",new rd);v(this,"_dictation");v(this,"_dictationSession");v(this,"_dictationUnsubscribes",[]);v(this,"_dictationBaseText","");v(this,"_currentInterimText","");v(this,"_dictationSessionIdCounter",0);v(this,"_activeDictationSessionId");v(this,"_isCleaningDictation",!1);v(this,"_eventSubscribers",new Map)}enrichWithComposerMetadata(e,r){return r?{...e,metadata:{...e.metadata,custom:{...e.metadata?.custom,...r}}}:e}get attachmentAccept(){return this.getAttachmentAdapter()?.accept??"*"}get attachments(){return this._attachments}setAttachments(e){this._attachments=e,this._notifySubscribers()}get isEmpty(){return!this.text.trim()&&!this.attachments.length}get text(){return this._text}get role(){return this._role}get runConfig(){return this._runConfig}get quote(){return this._quote}setQuote(e){this._quote!==e&&(this._quote=e,this._notifySubscribers())}setText(e){this._text!==e&&(this._text=e,this._rebaseDictation(e),this._notifySubscribers())}_rebaseDictation(e){if(!this._dictation)return;this._dictationBaseText=e,this._currentInterimText="";let{status:r,inputDisabled:o}=this._dictation;this._dictation=o?{status:r,inputDisabled:o}:{status:r}}setRole(e){this._role!==e&&(this._role=e,this._notifySubscribers())}setRunConfig(e){this._runConfig!==e&&(this._runConfig=e,this._notifySubscribers())}_cancelAttachmentAdd(e){this._attachmentAddOperations.cancel(e)}_cancelAllAttachmentAdds(){this._attachmentAddOperations.cancelAll()}_emptyTextAndAttachments(){this._attachments=[],this._text="",this._rebaseDictation(""),this._notifySubscribers()}async _onClearAttachments(){let e=this.getAttachmentAdapter();if(e){let r=this._attachments.filter(o=>!ao(o));await Promise.all(r.map(async o=>e.remove(o)))}}async reset(){if(this._cancelAllAttachmentAdds(),this._sendGeneration++,this._isSending=!1,this._removedDuringSend.clear(),this._attachments.length===0&&this._text===""&&this._role==="user"&&Object.keys(this._runConfig).length===0&&this._quote===void 0)return;this._role="user",this._runConfig={},this._quote=void 0;let e=this._onClearAttachments();this._emptyTextAndAttachments(),await e}async clearAttachments(){if(this._cancelAllAttachmentAdds(),this._isSending)for(let r of this._attachments)this._removedDuringSend.add(r.id);let e=this._onClearAttachments();this.setAttachments([]),await e}async send(e){if(!this.canSend||this._isSending)return;if(this._dictationSession)try{this._dictationSession.cancel()}catch(b){console.error("[assistant-ui] Dictation session cancel threw",b)}finally{this._cleanupDictation()}let r=this.getAttachmentAdapter(),o=this.attachments.map(async b=>{if(ao(b))return b;if(!r)throw new Error("Attachments are not supported");return await r.send(b)}),i=this.attachments,s=this.text,n=this._quote,a=this.role,c=this.runConfig;this._quote=void 0,this._text="",this._isSending=!0;let l=++this._sendGeneration;this._notifySubscribers();let u;try{u=await Promise.all(o)}catch(b){throw l===this._sendGeneration&&(!this.text.trim()&&this._quote===void 0&&(this._text=s,this._rebaseDictation(s),this._quote=n,this._notifySubscribers()),Promise.allSettled(o).then(()=>{l===this._sendGeneration&&(this._removedDuringSend.clear(),this._isSending=!1,this._notifySubscribers())})),b}if(l!==this._sendGeneration)return;let m=new Set(i.map(b=>b.id));this._attachments=this._attachments.filter(b=>!m.has(b.id)),this._isSending=!1,this._notifySubscribers();let d=u.filter(b=>!this._removedDuringSend.has(b.id));this._removedDuringSend.clear();let p={createdAt:new Date,role:a,content:s?[{type:"text",text:s}]:[],attachments:d,runConfig:c,metadata:{custom:{...n?{quote:n}:{}}}},h={text:s,quote:n,attachments:d},g;try{g=this.handleSend(p,e)}catch(b){throw this._restoreUnsentDraft(b,l,h),b}g&&g.catch(b=>{this._restoreUnsentDraft(b,l,h)}),this._notifyEventSubscribers("send",{chars:s.length,attachments:d.length})}restoreDraft(e){return this._text.trim()||this._quote!==void 0||this._attachments.length>0?!1:(this._text=e.text,this._rebaseDictation(e.text),this._quote=e.quote,this._attachments=e.attachments??[],this._notifySubscribers(),!0)}retractDraft(e){let r=e.attachments!==void 0?this._attachments===e.attachments:this._attachments.length===0;this._text!==e.text||this._quote!==e.quote||!r||(this._text="",this._rebaseDictation(""),this._quote=void 0,this._attachments=[],this._notifySubscribers())}_restoreUnsentDraft(e,r,o){Ni(e)&&r===this._sendGeneration&&this.restoreDraft(o)}cancel(){this.handleCancel()}get queue(){return Nt}moveQueueItem(e,r){}removeQueueItem(e){}async addAttachment(e){if(td(e)){let n=this.getAttachmentAdapter();if(n&&!Bn({name:e.name,type:e.contentType??""},n.accept)){let c=`File type ${e.contentType||"unknown"} is not accepted. Accepted types: ${n.accept}`,l=new Error(c);throw this._safeEmitAttachmentAddError("not-accepted",c,void 0,l,e.contentType),l}let a={id:e.id??He(),type:e.type??"document",name:e.name,contentType:e.contentType,content:e.content,status:{type:"complete"}};this._attachments=[...this._attachments,a],this._notifySubscribers(),this._notifyEventSubscribers("attachmentAdd",{...a.contentType?{contentType:a.contentType}:void 0});return}let r=this.getAttachmentAdapter();if(!r){let n="Attachments are not supported",a=new Error(n);throw this._safeEmitAttachmentAddError("no-adapter",n,void 0,a,e.type),a}if(!Bn({name:e.name,type:e.type},r.accept)){let n=`File type ${e.type||"unknown"} is not accepted. Accepted types: ${r.accept}`,a=new Error(n);throw this._safeEmitAttachmentAddError("not-accepted",n,void 0,a,e.type),a}let o=this._attachmentAddOperations.start(),i=n=>{if(!this._attachmentAddOperations.accept(o,n.id))return!1;let a=this._attachments.findIndex(c=>c.id===n.id);return a!==-1?this._attachments=[...this._attachments.slice(0,a),n,...this._attachments.slice(a+1)]:this._attachments=[...this._attachments,n],this._notifySubscribers(),!0},s;try{await od(r.add({file:e}),n=>(s=n,i(n)))}catch(n){if(this._attachmentAddOperations.isCancelled(o))return;throw s&&i({...s,status:{type:"incomplete",reason:"error",message:n instanceof Error?n.message:String(n)}}),this._safeEmitAttachmentAddError("adapter-error",n instanceof Error?n.message:String(n),s?.id,n instanceof Error?n:void 0,s?.contentType||e.type),n}finally{this._attachmentAddOperations.finish(o)}this._attachmentAddOperations.isCancelled(o)||(s?.status.type==="incomplete"&&s.status.reason==="error"?this._safeEmitAttachmentAddError("adapter-error",s.status.message??"Attachment upload did not complete successfully.",s.id,void 0,s.contentType||e.type):this._notifyEventSubscribers("attachmentAdd",{...s?.contentType?{contentType:s.contentType}:e.type?{contentType:e.type}:void 0}))}_safeEmitAttachmentAddError(e,r,o,i,s){try{this._notifyEventSubscribers("attachmentAddError",{reason:e,message:r,...o!==void 0&&{attachmentId:o},...i!==void 0&&{error:i},...s?{contentType:s}:void 0})}catch(n){console.error("[assistant-ui] attachmentAddError subscriber threw:",n)}}async removeAttachment(e){let r=this._attachments.findIndex(i=>i.id===e);if(r===-1)throw new Error("Attachment not found");let o=this._attachments[r];if(this._cancelAttachmentAdd(e),this._isSending&&this._removedDuringSend.add(e),!ao(o)){let i=this.getAttachmentAdapter();if(!i)throw new Error("Attachments are not supported");try{await i.remove(o)}catch(s){let n=s instanceof Error?s.message:String(s);throw this._attachments=this._attachments.map(a=>a.id===e&&!ao(a)?{...a,status:{type:"incomplete",reason:"error",message:n}}:a),this._notifySubscribers(),s}}this._attachments=this._attachments.filter(i=>i.id!==e),this._notifySubscribers()}get dictation(){return this._dictation}_isActiveSession(e,r){return this._activeDictationSessionId===e&&this._dictationSession===r}startDictation(){let e=this.getDictationAdapter();if(!e)throw new Error("Dictation adapter not configured");let r=this._dictationSession!==void 0;if(this._dictationSession){let u=this._dictationSession;this._cleanupDictation({notify:!1}),this._stopDictationSession(u)}let o=e.disableInputDuringDictation??!1;this._dictationBaseText=this._text,this._currentInterimText="";let i;try{i=e.listen()}catch(u){if(r)try{this._notifySubscribers()}catch(m){console.error("[assistant-ui] Dictation replacement rollback notification threw",m)}throw u}this._dictationSession=i;let s=++this._dictationSessionIdCounter;this._activeDictationSessionId=s,this._dictation={status:i.status,inputDisabled:o},this._notifySubscribers();let n=i.onSpeech(u=>{if(!this._isActiveSession(s,i))return;let m=u.isFinal!==!1,d=this._dictationBaseText&&!this._dictationBaseText.endsWith(" ")&&u.transcript?" ":"";if(m){if(this._dictationBaseText=this._dictationBaseText+d+u.transcript,this._currentInterimText="",this._text=this._dictationBaseText,this._dictation){let{transcript:p,...h}=this._dictation;this._dictation=h}this._notifySubscribers()}else this._currentInterimText=d+u.transcript,this._text=this._dictationBaseText+this._currentInterimText,this._dictation&&(this._dictation={...this._dictation,transcript:u.transcript}),this._notifySubscribers()});this._dictationUnsubscribes.push(n);let a=i.onSpeechStart(()=>{this._isActiveSession(s,i)&&(this._dictation={status:{type:"running"},inputDisabled:o,...this._dictation?.transcript&&{transcript:this._dictation.transcript}},this._notifySubscribers())});this._dictationUnsubscribes.push(a);let c=i.onSpeechEnd(()=>{this._cleanupDictation({sessionId:s})});this._dictationUnsubscribes.push(c);let l=setInterval(()=>{this._isActiveSession(s,i)&&i.status.type==="ended"&&this._cleanupDictation({sessionId:s})},100);this._dictationUnsubscribes.push(()=>clearInterval(l))}stopDictation(){if(!this._dictationSession)return;let e=this._dictationSession,r=this._activeDictationSessionId,o=()=>this._cleanupDictation({sessionId:r});this._stopDictationSession(e,o)}_stopDictationSession(e,r=()=>{}){let o;try{o=e.stop()}catch(i){console.error("[assistant-ui] Dictation session stop threw",i),r();return}o.then(r,i=>{console.error("[assistant-ui] Dictation session stop rejected",i),r()})}_cleanupDictation(e){if(e?.sessionId!==void 0&&e.sessionId!==this._activeDictationSessionId||this._isCleaningDictation)return;this._isCleaningDictation=!0;let r=o=>{try{o()}catch(i){console.error("[assistant-ui] Dictation cleanup threw",i)}};try{let o=this._dictationUnsubscribes;this._dictationUnsubscribes=[],this._dictationSession=void 0,this._activeDictationSessionId=void 0,this._dictation=void 0,this._dictationBaseText="",this._currentInterimText="";for(let i of o)r(i);e?.notify!==!1&&r(()=>this._notifySubscribers())}finally{this._isCleaningDictation=!1}}_notifyEventSubscribers(e,r){let o=this._eventSubscribers.get(e);o&&we(o,r,`Composer runtime "${e}"`)}unstable_on(e,r){let o=r,i=this._eventSubscribers.get(e);return i||(i=new Set,this._eventSubscribers.set(e,i)),i.add(o),()=>{this._eventSubscribers.get(e)?.delete(o)}}};var Tv=t=>t.capabilities?.cancel?Mn(t):!1,id=class extends qi{constructor(e){super();v(this,"_queueCache");v(this,"runtime");this.runtime=e,this.connect()}get canCancel(){return Tv(this.runtime)}get canSend(){return!this.isEmpty&&!this.runtime.isSendDisabled&&!this.runtime.voice&&!this._isSending}get queue(){let e=this.runtime.getSteerQueueItems?.()??Nt,r=this.runtime.getQueueItems?.()??Nt,o=this._queueCache;if(o&&o.steer===e&&o.queue===r)return o.flat;let i=e.length===0?r:r.length===0?e:[...e,...r];return this._queueCache={steer:e,queue:r,flat:i},i}moveQueueItem(e,r){this.runtime.moveQueueItem?.(e,r)}removeQueueItem(e){this.runtime.removeQueueItem?.(e)}getAttachmentAdapter(){return this.runtime.adapters?.attachments}getDictationAdapter(){return this.runtime.adapters?.dictation}connect(){let e=!1,r=this.runtime.isSendDisabled,o=this.runtime.voice!==void 0,i=this.queue;return this.runtime.subscribe(()=>{let s=!1,n=this.canCancel;e!==n&&(e=n,s=!0),r!==this.runtime.isSendDisabled&&(r=this.runtime.isSendDisabled,s=!0);let a=this.runtime.voice!==void 0;o!==a&&(o=a,s=!0),i!==this.queue&&(i=this.queue,s=!0),s&&this._notifySubscribers()})}async handleSend(e,r){return this.runtime.append({...e,parentId:this.runtime.messages.at(-1)?.id??null,sourceId:null,startRun:r?.startRun,steer:r?.steer})}async handleCancel(){this.runtime.cancelRun()}};var sd=class extends qi{constructor(e,r,{parentId:o,message:i}){super();v(this,"_nonTextPassthrough");v(this,"_parentId");v(this,"_sourceId");v(this,"runtime");v(this,"endEditCallback");this.runtime=e;let s=e.voice!==void 0,n=e.subscribe(()=>{let c=e.voice!==void 0;c!==s&&(s=c,this._notifySubscribers())});this.endEditCallback=()=>{n(),r()},this._parentId=o,this._sourceId=i.id,this.setText(Bt(i)),this.setRole(i.role);let a;i.role==="user"?(a=[...i.attachments??[],...ed(i.content)],this._nonTextPassthrough=[]):(a=i.attachments??[],this._nonTextPassthrough=i.content.filter(c=>c.type!=="text")),this.setAttachments(a),this.setRunConfig({...e.composer.runConfig})}get canCancel(){return!0}get canSend(){return!this.isEmpty&&!this.runtime.voice&&!this._isSending}getAttachmentAdapter(){return this.runtime.adapters?.attachments}getDictationAdapter(){return this.runtime.adapters?.dictation}get parentId(){return this._parentId}get sourceId(){return this._sourceId}async handleSend(e,r){let o=this._nonTextPassthrough.length>0?[...e.content,...this._nonTextPassthrough]:e.content,i=this.runtime.append({...e,content:o,parentId:this._parentId,sourceId:this._sourceId,startRun:r?.startRun});return this.handleCancel(),i}handleCancel(){this.endEditCallback(),this._notifySubscribers()}};var nd=class extends Ot{constructor(e){super();v(this,"_isInitialized",!1);v(this,"repository",new Hi);v(this,"_voiceMessages",[]);v(this,"_voiceGeneration",0);v(this,"_cachedMergedMessages",null);v(this,"_cachedVoiceGeneration",-1);v(this,"_cachedMergedBase",null);v(this,"composer",new id(this));v(this,"_contextProvider");v(this,"_editComposers",new Map);v(this,"_stopSpeaking");v(this,"speech");v(this,"_voiceSession");v(this,"_voiceUnsubs",[]);v(this,"voice");v(this,"_voiceVolume",0);v(this,"_voiceVolumeSubscribers",new Set);v(this,"getVoiceVolume",()=>this._voiceVolume);v(this,"subscribeVoiceVolume",e=>(this._voiceVolumeSubscribers.add(e),()=>this._voiceVolumeSubscribers.delete(e)));v(this,"_currentAssistantMsg",null);v(this,"_eventSubscribers",new Map);this._contextProvider=e}_markVoiceMessagesDirty(){this._voiceGeneration++,this._cachedMergedMessages=null}_getBaseMessages(){return this.repository.getMessages()}_commitVoiceMessage(e){}get messages(){if(this._voiceMessages.length===0)return this._getBaseMessages();let e=this._getBaseMessages();if(this._cachedVoiceGeneration!==this._voiceGeneration||this._cachedMergedBase!==e){let r=new Set(e.map(o=>o.id));this._cachedMergedMessages=[...e,...this._voiceMessages.filter(o=>!r.has(o.id))],this._cachedVoiceGeneration=this._voiceGeneration,this._cachedMergedBase=e}return this._cachedMergedMessages}get state(){let e;for(let r of this.messages)r.role==="assistant"&&(e=r);return e?.metadata.unstable_state??null}getModelContext(){return this._contextProvider.getModelContext()}enrichAppendMetadata(e,r=e.parentId){if(e.role!=="user")return e;let o=this.messages,i=r===null?-1:o.findIndex(n=>n.id===r),s=ou(this.getModelContext().unstable_composerMetadata,o.slice(0,i+1));return s?{...e,metadata:{...e.metadata,custom:{...e.metadata?.custom,...s}}}:e}getEditComposer(e){return this._editComposers.get(e)}_isVoiceMessage(e){return e!==null&&this._voiceMessages.some(r=>r.id===e)}_resolveAppendParent(e){return this._isVoiceMessage(e)?this._getBaseMessages().at(-1)?.id??null:e}beginEdit(e){if(this.voice)throw new Error("Cannot edit a message while a voice session is connected");if(this._isVoiceMessage(e))throw new Error("Voice transcript messages cannot be edited");if(this._editComposers.has(e))throw new Error("Edit already in progress");this._editComposers.set(e,new sd(this,()=>this._editComposers.delete(e),this.repository.getMessage(e))),this._notifySubscribers()}getMessageById(e){try{return this.repository.getMessage(e)}catch{let r=this.repository.getMessages(),o=this._voiceMessages.findIndex(i=>i.id===e);return o!==-1?{parentId:o>0?this._voiceMessages[o-1].id:r.at(-1)?.id??null,message:this._voiceMessages[o],index:r.length+o}:void 0}}getBranches(e){return this._voiceMessages.some(r=>r.id===e)?[]:this.repository.getBranches(e)}switchToBranch(e){this.repository.switchToBranch(e),this._notifySubscribers()}_notifyEventSubscribers(e,r){let o=this._eventSubscribers.get(e);o&&we(o,r,`Thread runtime "${e}"`)}_notifyToolApprovalAnswered(e,r,o,i){this._notifyEventSubscribers("toolApprovalAnswered",{messageId:e,toolCallId:r,toolName:o,approved:i})}submitFeedback({messageId:e,type:r,comment:o}){let i=this.adapters?.feedback,s=this.getMessageById(e);if(!s)throw new Error(`Message not found: ${e}`);let{message:n,parentId:a}=s,c=o?.trim(),l={type:r,...c?{comment:c}:void 0};if(i?.submit({message:n,...l}),n.role==="assistant"){let u={...n,metadata:{...n.metadata,submittedFeedback:l}},m=this._voiceMessages.findIndex(d=>d.id===e);m===-1?this.repository.addOrUpdateMessage(a,u):(this._voiceMessages[m]=u,this._currentAssistantMsg===n&&(this._currentAssistantMsg=u),this._markVoiceMessagesDirty())}this._notifySubscribers()}speak(e){let r=this.adapters?.speech;if(!r)throw new Error("Speech adapter not configured");let o=this.getMessageById(e);if(!o)throw new Error(`Message not found: ${e}`);let{message:i}=o,s=this._stopSpeaking,n;try{s?.(),n=r.speak(Bt(i))}catch(m){if(s&&!this._stopSpeaking)try{this._notifySubscribers()}catch(d){console.error("[assistant-ui] Speech rollback notification threw",d)}throw m}let a,c=()=>{this._stopSpeaking=void 0,this.speech=void 0;let m=a;a=void 0,m?.()},l=()=>{if(this._stopSpeaking===l)try{c()}finally{n.cancel()}},u=()=>{this._stopSpeaking===l&&(n.status.type==="ended"?rt([c,()=>this._notifySubscribers()]):(this.speech={messageId:e,status:n.status},this._notifySubscribers()))};this._stopSpeaking=l;try{if(a=n.subscribe(u),this._stopSpeaking!==l){a();return}u()}catch(m){if(this._stopSpeaking===l)try{rt([l,()=>this._notifySubscribers()])}catch(d){console.error("[assistant-ui] Speech rollback cleanup threw",d)}throw m}}stopSpeaking(){if(!this._stopSpeaking)throw new Error("No message is being spoken");rt([this._stopSpeaking,()=>this._notifySubscribers()])}_onVoiceConnected(){}_onVoiceDisconnected(){}_isRunActive(){if(this.isRunning)return!0;let e=this._getBaseMessages().at(-1);return e?.role==="assistant"&&(e.status.type==="running"||e.status.type==="requires-action")}connectVoice(){let e=this.adapters?.voice;if(!e)throw new Error("Voice adapter not configured");if(this._isRunActive())throw new Error("Cannot start a voice session while a run is in progress or paused on a pending tool action");let r=this._voiceSession!==void 0;try{this._disconnectVoice(!1)}catch(n){console.error("[assistant-ui] Voice cleanup threw before reconnect",n)}let o;try{o=e.connect({})}catch(n){throw r&&this._voiceSession===void 0&&this._onVoiceDisconnected(),n}this._voiceSession=o;let i=[];this._voiceUnsubs=i;let s=()=>{if(this._voiceSession===o&&this._voiceUnsubs===i)return!1;try{rt(i.splice(0))}catch(n){console.error("[assistant-ui] Detached voice setup cleanup threw",n)}return!0};try{let n="listening";if(this.voice={status:o.status,isMuted:o.isMuted,mode:n},this._voiceVolume=0,this._notifySubscribers(),s()||(i.push(o.onStatusChange(a=>{this._voiceSession===o&&(a.type==="ended"?(this._finishVoiceAssistantMessage(),this._voiceSession=void 0,this.voice=void 0,this._onVoiceDisconnected()):this.voice={status:a,isMuted:o.isMuted,mode:n},this._notifySubscribers())})),s())||(i.push(o.onModeChange(a=>{n=a,this.voice&&(this.voice={...this.voice,mode:a},this._notifySubscribers())})),s())||(i.push(o.onVolumeChange(a=>{this._voiceVolume=a,we(this._voiceVolumeSubscribers,void 0,"Voice volume")})),s()))return;i.push(o.onTranscript(a=>{this._handleVoiceTranscript(a)})),s()||this._onVoiceConnected()}catch(n){if(this._voiceSession===o&&this._voiceUnsubs===i){try{this._disconnectVoice(!1)}catch(a){console.error("[assistant-ui] Voice rollback cleanup threw",a)}r&&this._voiceSession===void 0&&this._onVoiceDisconnected()}else s();throw n}}_handleVoiceTranscript(e){if(this.ensureInitialized(),e.role==="user"){if(this._finishVoiceAssistantMessage(),this._currentAssistantMsg=null,e.isFinal){let r={id:He(),role:"user",content:[{type:"text",text:e.text}],metadata:{modality:"voice",custom:{}},createdAt:new Date,status:{type:"complete",reason:"unknown"},attachments:[]};this._voiceMessages.push(r),this._commitVoiceMessage(r),this._markVoiceMessagesDirty(),this._notifySubscribers()}}else{let r=e.isFinal?{type:"complete",reason:"stop"}:{type:"running"};if(!this._currentAssistantMsg)this._currentAssistantMsg={id:He(),role:"assistant",content:[{type:"text",text:e.text}],metadata:{unstable_state:this.state,unstable_annotations:[],unstable_data:[],steps:[],modality:"voice",custom:{}},status:r,createdAt:new Date},this._voiceMessages.push(this._currentAssistantMsg);else{let o=this._voiceMessages.indexOf(this._currentAssistantMsg);if(o===-1)return;let i={...this._currentAssistantMsg,content:[{type:"text",text:e.text}],status:r};this._voiceMessages[o]=i,this._currentAssistantMsg=i}e.isFinal&&(this._commitVoiceMessage(this._currentAssistantMsg),this._currentAssistantMsg=null),this._markVoiceMessagesDirty(),this._notifySubscribers()}}_finishVoiceAssistantMessage(e=!0){let r=this._voiceMessages.at(-1);if(r?.role==="assistant"&&r.status.type==="running"){let o=this._voiceMessages.length-1;this._voiceMessages[o]={...r,status:{type:"complete",reason:"stop"}},this._commitVoiceMessage(this._voiceMessages[o]),this._currentAssistantMsg=null,this._markVoiceMessagesDirty(),e&&this._notifySubscribers()}}disconnectVoice(){this._disconnectVoice(!0)}_disconnectVoice(e){this._finishVoiceAssistantMessage(!1),this._currentAssistantMsg=null;let r=this._voiceUnsubs.splice(0);this._voiceUnsubs=[];let o=this._voiceSession;this._voiceSession=void 0,this.voice=void 0,this._voiceVolume=0;let i=this.speech&&this._isVoiceMessage(this.speech.messageId)?this._stopSpeaking:void 0;this._voiceMessages=[],this._markVoiceMessagesDirty();try{rt([...r,...i?[i]:[],...o?[()=>o.disconnect()]:[],()=>we(this._voiceVolumeSubscribers,void 0,"Voice volume"),()=>this._notifySubscribers()])}finally{e&&o&&this._voiceSession===void 0&&this._onVoiceDisconnected()}}muteVoice(){if(!this._voiceSession)throw new Error("No active voice session");this._voiceSession.mute(),this.voice={...this.voice,isMuted:!0},this._notifySubscribers()}unmuteVoice(){if(!this._voiceSession)throw new Error("No active voice session");this._voiceSession.unmute(),this.voice={...this.voice,isMuted:!1},this._notifySubscribers()}ensureInitialized(){this._isInitialized||(this._isInitialized=!0,this._notifyEventSubscribers("initialize",{}))}export(){return this.repository.export()}import(e){this.ensureInitialized(),this.repository.clear(),this.repository.import(e),this._notifySubscribers()}reset(e){this.import(zi.fromArray(e??[]))}unstable_on(e,r){let o=r;if(e==="modelContextUpdate")return this._contextProvider.subscribe?.(()=>we([o],{},`Thread runtime "${e}"`))??(()=>{});let i=this._eventSubscribers.get(e);return i||(i=new Set,this._eventSubscribers.set(e,i)),i.add(o),e==="initialize"&&this._isInitialized&&queueMicrotask(()=>{i.has(o)&&we([o],{},`Thread runtime "${e}"`)}),()=>{this._eventSubscribers.get(e)?.delete(o)}}};var Cv=Symbol.for("assistant-stream.tool-execution-id"),co=t=>{try{return JSON.parse(t),!0}catch{return!1}},ad=t=>{try{return JSON.parse(t)}catch{return}},Nn=(t,e)=>{let r=ad(t),o=ad(e);return r===void 0||o===void 0?!1:to(r,o)},$n=t=>t[Cv],cd=class{constructor(t,e,r){v(this,"_getTools");v(this,"_callbacks");v(this,"_isClientToolCall");v(this,"_entries",new Map);v(this,"_humanInput",new Map);v(this,"_executing",new Set);v(this,"_discardedToolCallIds",new Set);v(this,"_settledResolvers",[]);v(this,"_statuses",new Map);v(this,"_ac",new AbortController);v(this,"_pendingRestore",!0);v(this,"_lastSnapshot",null);v(this,"_isRunning",!1);v(this,"_controller");v(this,"_pipelineDead",!1);v(this,"_pipelineRestartUsed",!1);this._getTools=t,this._callbacks=e,this._isClientToolCall=r,this._initPipeline()}_initPipeline(){let[t,e]=un();this._controller=e;let o=gn(()=>this._getWrappedTools(),()=>this._ac.signal,(i,s,n)=>this._onHumanInput(i,s,n),{onExecutionStart:(i,s,n)=>this._onExecutionStart(i,n),onExecutionEnd:(i,s,n)=>this._onExecutionEnd(i,n)});t.pipeThrough(o).pipeThrough(new ro).pipeTo(new WritableStream({write:i=>{try{if(i.type!=="result")return;this._handleResultChunk(i)}catch(s){console.error("[ToolInvocationTracker] result chunk handling failed",s)}}})).catch(i=>{console.error("[ToolInvocationTracker] stream pipeline failed; will attempt single restart on next setState",i),this._pipelineDead=!0})}setState(t){try{if(this._pipelineDead){if(this._pipelineRestartUsed)return;this._pipelineRestartUsed=!0,this._pipelineDead=!1,this._demoteEntriesToRestored(),this._executing.clear(),this._ac=new AbortController,this._initPipeline()}if(this._lastSnapshot&&this._lastSnapshot.messages===t.messages&&this._lastSnapshot.isRunning===t.isRunning&&this._lastSnapshot.isLoading===t.isLoading)return;t.isLoading===!0&&(this._pendingRestore=!0);let e=this._isRunning;this._isRunning=t.isRunning;try{this._processMessages(t.messages)}catch(r){throw this._isRunning=e,r}this._lastSnapshot=t,this._pendingRestore=!1}catch(e){console.error("[ToolInvocationTracker] setState failed; snapshot dropped",e)}}reset(){try{this._pendingRestore=!0,this._entries.clear(),this._discardedToolCallIds.clear(),this._lastSnapshot=null,this.abort(),this._statuses.size>0&&(this._statuses=new Map,this._invokeOnStatusesChange())}catch(t){console.error("[ToolInvocationTracker] reset failed",t)}}abort(t){try{if(this._humanInput.forEach(({reject:r})=>{try{r(new Error("Tool execution aborted"))}catch{}}),this._humanInput.clear(),t?.discardPending)for(let[r,o]of this._entries)o.controller&&(o.argsComplete||o.hasResult||(this._discardedToolCallIds.add(r),o.skipExecute=!0));if(this._ac.abort(),this._ac=new AbortController,this._executing.size===0)return Promise.resolve();let e=new Set(this._executing);return new Promise(r=>{this._settledResolvers.push({executionIds:e,resolve:r})})}catch(e){return console.error("[ToolInvocationTracker] abort failed",e),Promise.resolve()}}resume(t,e){try{let r=this._humanInput.get(t);return r?(this._humanInput.delete(t),this._setStatus(t,{type:"executing"}),r.resolve(e),!0):!1}catch(r){return console.error("[ToolInvocationTracker] resume failed",r),!1}}getStatuses(){return this._statuses}_getWrappedTools(){let t=this._getTools();if(t)return Object.fromEntries(Object.entries(t).map(([e,r])=>{let o=r.execute,i=r.streamCall;return o===void 0&&i===void 0?[e,r]:[e,{...r,...o!==void 0&&{execute:(...[s,n])=>{let a=$n(n),c=this._captureExecution(n.toolCallId,a);return!c||c.skipExecute?new Promise(()=>{}):o(s,n)}},...i!==void 0&&{streamCall:(...[s,n])=>{let a=$n(n);if(this._captureExecution(n.toolCallId,a))return i(s,n)}}}]}))}_captureExecution(t,e){if(e===void 0)return;let r=this._entries.get(t);if(r?.controller)return r.executionId===void 0&&(r.executionId=e),r.executionId===e?r:void 0}_onHumanInput(t,e,r){return new Promise((o,i)=>{let s=this._entries.get(t);if(!s?.controller||s.executionId!==r){i(new Error("Tool execution aborted"));return}let n=this._humanInput.get(t);if(n)try{n.reject(new Error("Human input request was superseded by a new request"))}catch{}this._humanInput.set(t,{executionId:r,resolve:o,reject:i}),this._setStatus(t,{type:"interrupt",payload:{type:"human",payload:e}})})}_onExecutionStart(t,e){this._captureExecution(t,e)&&(this._entries.get(t).skipExecute||(this._executing.add(e),this._humanInput.get(t)?.executionId!==e&&this._setStatus(t,{type:"executing"})))}_onExecutionEnd(t,e){if(e===void 0||!this._executing.delete(e))return;this._entries.get(t)?.executionId===e&&this._deleteStatus(t);let r=[];this._settledResolvers.forEach(({executionIds:o,resolve:i})=>{if([...o].some(s=>this._executing.has(s))){r.push({executionIds:o,resolve:i});return}try{i()}catch{}}),this._settledResolvers.length=0,this._settledResolvers.push(...r)}_handleResultChunk(t){let e=t.meta.toolCallId,r=$n(t),o=this._entries.get(e);!o||o.executionId!==r||o?.hasResult||o.skipExecute||this._invokeOnResult({type:"add-tool-result",toolCallId:e,toolName:t.meta.toolName,result:t.result,isError:t.isError,...t.artifact!==void 0&&{artifact:t.artifact},...t.modelContent!==void 0&&{modelContent:t.modelContent}})}_invokeOnResult(t){try{this._callbacks.onResult(t)}catch(e){console.error("[ToolInvocationTracker] onResult callback threw; result dropped",e)}}_invokeOnStatusesChange(){try{this._callbacks.onStatusesChange(this._statuses)}catch(t){console.error("[ToolInvocationTracker] onStatusesChange callback threw; status change not propagated",t)}}_setStatus(t,e){let r=new Map(this._statuses);r.set(t,e),this._statuses=r,this._invokeOnStatusesChange()}_deleteStatus(t){if(!this._statuses.has(t))return;let e=new Map(this._statuses);e.delete(t),this._statuses=e,this._invokeOnStatusesChange()}_warnProviderOwnedSkip(t,e){}_shouldCloseArgsStream({argsText:t,hasResult:e,clientOwned:r}){return e?!0:co(t)?r||!this._isRunning:!1}_startActiveEntry(t,e,r,o){let i={toolName:e,controller:this._controller.addToolCallPart({toolName:e,toolCallId:t}),argsText:"",hasResult:!1,skipExecute:r,argsComplete:!1,clientOwned:o};return this._entries.set(t,i),i}_demoteEntriesToRestored(){for(let[t,e]of this._entries)if(e.controller){if(!e.argsComplete&&!e.hasResult){this._entries.delete(t);continue}this._entries.set(t,{toolName:e.toolName,argsText:e.argsText,hasResult:e.hasResult})}}_processArgsText(t,e){if(!t.controller)return;let r=e.result!==void 0;if(e.argsText!==t.argsText){let o=!0;if(t.argsComplete)Nn(t.argsText,e.argsText)&&(t.argsText=e.argsText),o=!1;else if(!e.argsText.startsWith(t.argsText))if(co(t.argsText)&&co(e.argsText)&&Nn(t.argsText,e.argsText)){let i=this._shouldCloseArgsStream({argsText:e.argsText,hasResult:r,clientOwned:t.clientOwned});i&&t.controller.argsText.close(),t.argsText=e.argsText,t.argsComplete=i,o=!1}else o=!1;if(o&&t.controller){let i=e.argsText.slice(t.argsText.length);t.controller.argsText.append(i);let s=this._shouldCloseArgsStream({argsText:e.argsText,hasResult:r,clientOwned:t.clientOwned});s&&t.controller.argsText.close(),t.argsText=e.argsText,t.argsComplete=s}}!t.argsComplete&&t.controller&&this._shouldCloseArgsStream({argsText:t.argsText,hasResult:r,clientOwned:t.clientOwned})&&(t.controller.argsText.close(),t.argsComplete=!0)}_processMessages(t){let e=this._pendingRestore;for(let{part:r}of no(t)){let o=this._entries.get(r.toolCallId);if(e){o?.controller||this._entries.set(r.toolCallId,{toolName:r.toolName,argsText:r.argsText,hasResult:r.result!==void 0});continue}let i=o;if(r.result!==void 0&&this._discardedToolCallIds.delete(r.toolCallId),i&&!i.controller){if(i.hasResult||!(r.argsText!==i.argsText&&!(co(i.argsText)&&co(r.argsText)&&Nn(i.argsText,r.argsText)))&&r.result===void 0)continue;this._entries.delete(r.toolCallId),i=void 0}if(!i){let s=this._isClientToolCall?.(r),n=r.result===void 0&&s===!1;n&&this._warnProviderOwnedSkip(r.toolName,r.toolCallId),i=this._startActiveEntry(r.toolCallId,r.toolName,r.result!==void 0||n||this._discardedToolCallIds.has(r.toolCallId),s===!0)}if(r.approval!==void 0&&(i.skipExecute=!0),this._processArgsText(i,r),r.result!==void 0&&!i.hasResult){let{controller:s}=i;if(!s)continue;i.hasResult=!0,i.argsComplete=!0,s.setResponse(new ze({result:r.result,artifact:r.artifact,isError:r.isError,...r.modelContent!==void 0?{modelContent:r.modelContent}:{}})),s.close()}}}};var Iv=Object.freeze([]),Ln=(t,e)=>{Promise.resolve(e).catch(r=>{console.error(`[ExternalStoreThreadRuntimeCore] ${t} callback rejected`,r)})},Ev=(t,e)=>t&&e[e.length-1]?.role!=="assistant",ld=class extends nd{constructor(e,r){super(e);v(this,"_capabilities",{switchToBranch:!1,switchBranchDuringRun:!1,edit:!1,delete:!1,reload:!1,refetchThread:!1,cancel:!1,unstable_copy:!1,speech:!1,dictation:!1,voice:!1,attachments:!1,feedback:!1,queue:!1});v(this,"_messages");v(this,"isDisabled");v(this,"isSendDisabled");v(this,"suggestions",[]);v(this,"extras");v(this,"_converter",new Tn);v(this,"_pendingDeleteEvictions",new Set);v(this,"_optimistic",null);v(this,"_store");v(this,"_getInitializePromise");v(this,"_transformedQueue");v(this,"_toolInvocations",null);v(this,"_toolStatuses",new Map);v(this,"_effectiveIsRunning",!1);v(this,"_inTrackerUpdate",!1);v(this,"_pendingRunningRefresh",!1);v(this,"_toolCallToMessageId",new Map);v(this,"_messagesForToolCallIndex",null);v(this,"updateMessages",e=>{this._store.convertMessage!==void 0?this._store.setMessages?.(e.flatMap(su)):this._store.setMessages?.(e)});this.__internal_setAdapter(r)}get capabilities(){return this._capabilities}get isLoading(){return this._store.isLoading??!1}get isRunning(){return this._hasExecutingTools(this._store)?!0:this._store.isRunning}_getBaseMessages(){return this._messages}get state(){return this._store.state??super.state}get adapters(){return this._store.adapters}get unstable_refetchThread(){if(this._store.onRefetchThread)return()=>this._store.onRefetchThread()}__internal_setGetInitializePromise(e){this._getInitializePromise=e}_runTrackerUpdate(e){this._inTrackerUpdate=!0;try{e()}finally{this._inTrackerUpdate=!1}this._pendingRunningRefresh&&(this._pendingRunningRefresh=!1,this._refreshEffectiveIsRunning())}_refreshEffectiveIsRunning(){let e=this._getEffectiveIsRunning(this._store);this._effectiveIsRunning!==e&&(this._effectiveIsRunning=e,this._notifyEventSubscribers(e?"runStart":"runEnd",{}),this._notifySubscribers())}_hasExecutingTools(e){if(e.unstable_enableToolInvocations!==!0||this._toolInvocations===null)return!1;for(let r of this._toolStatuses.values())if(r.type==="executing")return!0;return!1}_getEffectiveIsRunning(e){return(e.isRunning??!1)||this._hasExecutingTools(e)}beginEdit(e){if(!this._store.onEdit)throw new Error("Runtime does not support editing.");super.beginEdit(e)}__internal_setAdapter(e){this._store!==e&&this._updateStoreSnapshot(e)}_updateStoreSnapshot(e){let r=this._effectiveIsRunning;this.isDisabled=e.isDisabled??!1,this.isSendDisabled=e.isSendDisabled??!1;let o=this._store;this._store=e;let i=this._getEffectiveIsRunning(e),s=e.unstable_messageRepositoryInstance,n=s!==void 0&&s!==this.repository;n&&(this.repository=s,this._pendingDeleteEvictions.clear()),o?.queue!==e.queue&&(this._transformedQueue=void 0,e.queue?.__internal_setDispatchTransform?.(d=>{let p=this.messages.at(-1)?.id??null;return this.enrichAppendMetadata({...d,parentId:p},p)}),e.queue?.__internal_setDispatchTransform&&(this._transformedQueue=e.queue)),this.extras!==e.extras&&(this.extras=e.extras);let a=e.suggestions??Iv;Ae(this.suggestions,a)||(this.suggestions=a);let c={switchToBranch:this._store.setMessages!==void 0,switchBranchDuringRun:!1,edit:this._store.onEdit!==void 0,delete:this._store.onDelete!==void 0||this._store.setMessages!==void 0,reload:this._store.onReload!==void 0,refetchThread:this._store.onRefetchThread!==void 0,cancel:this._store.onCancel!==void 0,speech:this._store.adapters?.speech!==void 0,dictation:this._store.adapters?.dictation!==void 0,voice:this._store.adapters?.voice!==void 0,unstable_copy:this._store.unstable_capabilities?.copy!==!1,attachments:!!this._store.adapters?.attachments,feedback:!!this._store.adapters?.feedback,queue:this._store.queue!==void 0};Ae(this._capabilities,c)||(this._capabilities=c);let l;if(e.messageRepository){if(o&&!n&&o.isRunning===e.isRunning&&o.messageRepository===e.messageRepository&&r===i){this._notifySubscribers();return}let d=e.messageRepository.messages,p=e.messageRepository.headId??d.at(-1)?.message.id??null;if(o&&!n&&o.messageRepository===e.messageRepository)this.repository.resetHead(p),l=this.repository.getMessages();else{let h=new Set(d.map(({message:g})=>g.id));for(let{message:g,parentId:b}of d)this.repository.addOrUpdateMessage(b,g);for(let{message:g}of this.repository.export().messages)h.has(g.id)||this.repository.deleteMessage(g.id);this._pendingDeleteEvictions.clear(),this.repository.resetHead(p),l=this.repository.getMessages()}}else if(e.messages){if(o){if(o.convertMessage!==e.convertMessage)this._converter=new Tn;else if(!n&&o.isRunning===e.isRunning&&o.messages===e.messages&&r===i){this._notifySubscribers();return}}l=e.convertMessage?this._converter.convertMessages(e.messages,(h,g,b)=>{if(!e.convertMessage)return g;let y=b===(e.messages?.length??0)-1,x=`${nu}${b}`;if(h&&(h.role!=="assistant"||!du(h.status)||h.status===Sn(h.content,y,i))){if(h.id.startsWith("__external_store_fallback_")&&h.id!==x){let C={...h,id:x};return wn(C,g),C}return h}let S=e.convertMessage(g,b),_=Tr(S,x,Sn(S.content,y,i));return wn(_,g),_}):e.messages;let d=new Set,p=[];for(let h=l.length-1;h>=0;h--){let g=l[h];if(d.has(g.id)){console.warn(`ExternalStoreThreadRuntimeCore: duplicate message id "${g.id}" in the provided messages array; keeping the last occurrence.`);continue}d.add(g.id),p.push(g)}p.length!==l.length&&(l=p.reverse());for(let h=0;h<l.length;h++){let g=l[h],b=l[h-1];this.repository.addOrUpdateMessage(b?.id??null,g)}if(this._pendingDeleteEvictions.size>0){let h=new Set(l.map(g=>g.id));for(let g of this._pendingDeleteEvictions)if(this._pendingDeleteEvictions.delete(g),!h.has(g)){try{this.repository.getMessage(g)}catch{continue}this.repository.deleteMessage(g)}}}else throw new Error("ExternalStoreAdapter must provide either 'messages' or 'messageRepository'");l.length>0&&this.ensureInitialized(),this._effectiveIsRunning=i,r!==i&&(i?this._notifyEventSubscribers("runStart",{}):this._notifyEventSubscribers("runEnd",{}));let u=null;if(Ev(i,l)){let d=l.at(-1)?.id??null;this._optimistic?.parentId!==d&&(this._optimistic={id:He(),parentId:d}),u=this._optimistic.id,this.repository.addOrUpdateMessage(d,Tr({role:"assistant",content:[],metadata:{isOptimistic:!0}},u,{type:"running"}))}u===null&&(this._optimistic=null),this.repository.resetHead(u??l.at(-1)?.id??null);let m=this.repository.getMessages();if((!this._messages||!Cn(this._messages,m))&&(this._messages=m),this._voiceMessages.length>0){let d=new Set(this._messages.map(h=>h.id)),p=this._voiceMessages.filter(h=>!d.has(h.id));p.length!==this._voiceMessages.length&&(this._voiceMessages=p,this._markVoiceMessagesDirty())}n&&this._runTrackerUpdate(()=>this._toolInvocations?.reset()),this._runTrackerUpdate(()=>this._driveToolInvocations()),this._notifySubscribers()}_driveToolInvocations(){if(!this._store.unstable_enableToolInvocations){this._toolInvocations&&(this._toolInvocations.reset(),this._toolInvocations=null,this._toolStatuses=new Map,this._store.setToolStatuses?.({}));return}this._toolInvocations||(this._toolInvocations=new cd(()=>this.getModelContext().tools,{onResult:e=>{try{let r=this._findMessageIdForToolCall(e.toolCallId);if(r===void 0)return;Ln("onAddToolResult",this._store.onAddToolResult?.({messageId:r,toolCallId:e.toolCallId,toolName:e.toolName,result:e.result,isError:e.isError,...e.artifact!==void 0&&{artifact:e.artifact},...e.modelContent!==void 0&&{modelContent:e.modelContent}}))}catch(r){console.error("[ExternalStoreThreadRuntimeCore] onAddToolResult dispatch failed",r)}},onStatusesChange:e=>{let r=this._hasExecutingTools(this._store);this._toolStatuses=e;try{this._store.setToolStatuses?.(Object.fromEntries(e))}finally{r!==this._hasExecutingTools(this._store)&&(this._inTrackerUpdate?this._pendingRunningRefresh=!0:this._updateStoreSnapshot(this._store))}}},e=>this._store.unstable_isClientToolCall?.(e))),this._toolInvocations.setState({messages:this._messages,isRunning:this._getEffectiveIsRunning(this._store),...this._store.isLoading!==void 0&&{isLoading:this._store.isLoading}})}_findMessageIdForToolCall(e){if(this._messagesForToolCallIndex!==this._messages){this._toolCallToMessageId.clear();for(let{part:r,messageId:o}of no(this._messages))this._toolCallToMessageId.set(r.toolCallId,o);this._messagesForToolCallIndex=this._messages}return this._toolCallToMessageId.get(e)}switchToBranch(e){if(!this._store.setMessages)throw new Error("Runtime does not support switching branches.");if(this._getEffectiveIsRunning(this._store))return;let r=this._store.unstable_onBranchChange,o=r?this.repository.canonicalHeadId:null;this.repository.switchToBranch(e),this._pendingDeleteEvictions.clear(),this.updateMessages(this.repository.getMessages()),r&&this._notifyBranchChange(o,r)}_notifyBranchChange(e,r){let o=this.repository.canonicalHeadId;o!==e&&r({headId:o,visibleMessageIds:this.repository.getMessages().map(i=>i.id)})}async append(e){let r={...e,parentId:this._resolveAppendParent(e.parentId)};if(this.voice)throw new Error("Cannot send a text message while a voice session is connected");if(this._isVoiceMessage(r.sourceId))throw new Error("Voice transcript messages cannot be edited");let o=r.sourceId!=null||r.parentId!==(this._getBaseMessages().at(-1)?.id??null);r=!o&&this._store.queue&&this._store.queue===this._transformedQueue?r:this.enrichAppendMetadata(r);let i=so(this);this.ensureInitialized();let s=this._getInitializePromise?.();if(!o&&this._store.queue){if(s&&await s,!Vi(this,i))return;r.steer??this._getEffectiveIsRunning(this._store)?this._store.queue.steer(r):this._store.queue.enqueue(r);return}if(s?.catch(()=>{}),(r.startRun??r.role==="user")&&await this._toolInvocations?.abort({discardPending:!0}),!!Vi(this,i))if(o){if(!this._store.onEdit)throw new Error("Runtime does not support editing messages.");this._pendingDeleteEvictions.clear(),await this._store.onEdit(r)}else await this._store.onNew(r)}_commitVoiceMessage(e){this._store.onVoiceTranscript?.(e)}async deleteMessage(e){if(this._store.onDelete){this.repository.getMessages().some(o=>o.id===e)&&this._pendingDeleteEvictions.add(e);try{await this._store.onDelete(e)}catch(o){throw this._pendingDeleteEvictions.delete(e),o}return}if(!this._store.setMessages)throw new Error("Runtime does not support deleting messages.");this._getEffectiveIsRunning(this._store)&&await this._toolInvocations?.abort();let r=this.repository.getMessages();if(r.findIndex(o=>o.id===e)===-1)throw new Error("Message not found.");this._pendingDeleteEvictions.clear(),this.updateMessages(r.filter(o=>o.id!==e)),this._evictDeletedMessage(e)}_evictDeletedMessage(e){if(!e.startsWith("__external_store_fallback_")){try{this.repository.getMessage(e)}catch{return}this.repository.deleteMessage(e),this._publishRepositoryMessages()}}_publishRepositoryMessages(){let e=this.repository.getMessages();Cn(this._messages,e)||(this._messages=e),this._notifySubscribers()}getQueueItems(){return this._store?.queue?.items??Nt}getSteerQueueItems(){return this._store?.queue?.steerItems??Nt}moveQueueItem(e,r){this._store?.queue?.move(e,r)}removeQueueItem(e){this._store?.queue?.remove(e)}async startRun(e){if(!this._store.onReload)throw new Error("Runtime does not support reloading messages.");if(this.voice)throw new Error("Cannot start a run while a voice session is connected");if(this._isVoiceMessage(e.sourceId))throw new Error("Voice transcript messages cannot be reloaded");this._pendingDeleteEvictions.clear(),await this._toolInvocations?.abort({discardPending:!0}),await this._store.onReload(e.parentId,e)}async resumeRun(e){if(!this._store.onResume)throw new Error("Runtime does not support resuming runs.");if(this.voice)throw new Error("Cannot start a run while a voice session is connected");if(this._isVoiceMessage(e.sourceId))throw new Error("Voice transcript messages cannot be reloaded");await this._store.onResume(e)}exportExternalState(){if(!this._store.onExportExternalState)throw new Error("Runtime does not support exporting external states.");return this._store.onExportExternalState()}importExternalState(e){if(!this._store.onLoadExternalState)throw new Error("Runtime does not support importing external states.");this._runTrackerUpdate(()=>this._toolInvocations?.reset()),this._store.onLoadExternalState(e)}unstable_notifySessionReset(){this._runTrackerUpdate(()=>this._toolInvocations?.reset()),this._store.queue?.__internal_notifyCancelled?.()}cancelRun(){if(!this._store.onCancel)throw new Error("Runtime does not support cancelling runs.");let e=so(this);this._toolInvocations?.abort({discardPending:!0}),this._store.queue?.__internal_notifyCancelled?.(),Ln("onCancel",this._store.onCancel()),this.dropEmptyOptimisticHead();let r=this.repository.getMessages(),o=r[r.length-1],i=this._store.setMessages!==void 0&&o?.role==="user"&&o.id===r.at(-1)?.id&&o.content.every(n=>n.type==="text")?o:void 0,s;if(i){let n={text:Bt(i),attachments:i.attachments,quote:i.metadata.custom.quote};this.composer.restoreDraft(n)&&(this.repository.deleteMessage(i.id),s={id:i.id,draft:n})}this._publishRepositoryMessages(),setTimeout(()=>{if(Vi(this,e)){if(this.dropEmptyOptimisticHead(),s){let n=this.repository.getMessages();n.at(-1)?.id===s.id?this.repository.deleteMessage(s.id):n.some(a=>a.id===s.id)&&this.composer.retractDraft(s.draft)}this._publishRepositoryMessages(),this.updateMessages(this._messages)}},0)}dropEmptyOptimisticHead(){let e=this.repository.getMessages().at(-1);e&&e.metadata.isOptimistic&&e.content.length===0&&this.repository.deleteMessage(e.id)}addToolResult(e){if(!this._store.onAddToolResult)throw new Error("Runtime does not support tool results.");Ln("onAddToolResult",this._store.onAddToolResult(e))}resumeToolCall(e){if(!(this._toolInvocations?.resume(e.toolCallId,e.payload)??!1)){if(this._store.onResumeToolCall){this._store.onResumeToolCall(e);return}throw new Error(`Tool call ${e.toolCallId} is not waiting for resume.`)}}respondToToolApproval(e){if(!this._store.onRespondToToolApproval)throw new Error("Runtime does not support tool approvals.");let r=this.messages.findLast(i=>i.role==="assistant"&&i.content.some(s=>s.type==="tool-call"&&s.approval?.id===e.approvalId)),o=r?.content.find(i=>i.type==="tool-call"&&i.approval?.id===e.approvalId);try{return Promise.resolve(this._store.onRespondToToolApproval(e)).then(()=>{r&&o?.type==="tool-call"&&this._notifyToolApprovalAnswered(r.id,o.toolCallId,o.toolName,e.approved)})}catch(i){return Promise.reject(i)}}reset(e){let r=new Hi;r.import(zi.fromArray(e??[])),this.updateMessages(r.getMessages())}import(e){super.import(e),this._store.onImport&&this._store.onImport(this.repository.getMessages())}};var ud=t=>t.adapters?.threadList??{},dd=class extends Yu{constructor(e){super();v(this,"threads");this.threads=new Zu(ud(e),()=>new ld(this._contextProvider,e))}setAdapter(e){this.threads.__internal_setAdapter(ud(e)),this.threads.getMainThreadRuntimeCore().__internal_setAdapter(e)}};var lo=t=>{let e=f(21),{modelContext:r,feedback:o}=iu()??{},i;e:{if(!o||t.adapters?.feedback){i=t;break e}let h;e[0]!==o||e[1]!==t.adapters?(h={...t.adapters,feedback:o},e[0]=o,e[1]=t.adapters,e[2]=h):h=e[2];let g;e[3]!==t||e[4]!==h?(g={...t,adapters:h},e[3]=t,e[4]=h,e[5]=g):g=e[5],i=g}let s=i,n;e[6]!==s?(n=()=>new dd(s),e[6]=s,e[7]=n):n=e[7];let[a]=j(n),c;e[8]!==a.threads?(c=()=>()=>{ji(a.threads.getMainThreadRuntimeCore())},e[8]=a.threads,e[9]=c):c=e[9];let l;e[10]!==a?(l=[a],e[10]=a,e[11]=l):l=e[11],$(c,l);let u;e[12]!==s||e[13]!==a?(u=()=>{a.setAdapter(s)},e[12]=s,e[13]=a,e[14]=u):u=e[14],$(u);let m,d;e[15]!==r||e[16]!==a?(m=()=>{if(r)return a.registerModelContextProvider(r)},d=[r,a],e[15]=r,e[16]=a,e[17]=m,e[18]=d):(m=e[17],d=e[18]),$(m,d);let p;return e[19]!==a?(p=new Wu(a),e[19]=a,e[20]=p):p=e[20],p};var md=require("react/jsx-runtime"),pd=t=>{let e=f(6),{id:r,children:o}=t,i=B(),s;e[0]!==r?(s=ne({message:ae({source:"thread",query:{type:"id",id:r},get:c=>c.thread.message({id:r})}),composer:ae({source:"message",query:{},get:c=>c.thread.message({id:r}).composer()})}),e[0]=r,e[1]=s):s=e[1];let n=s,a;return e[2]!==i||e[3]!==o||e[4]!==n?(a=(0,md.jsx)(de,{extends:i,config:n,children:o}),e[2]=i,e[3]=o,e[4]=n,e[5]=a):a=e[5],a};var st=require("react/jsx-runtime"),Fn=(t,e)=>t.Message===e.Message&&t.EditComposer===e.EditComposer&&t.UserEditComposer===e.UserEditComposer&&t.AssistantEditComposer===e.AssistantEditComposer&&t.SystemEditComposer===e.SystemEditComposer&&t.UserMessage===e.UserMessage&&t.AssistantMessage===e.AssistantMessage&&t.SystemMessage===e.SystemMessage,hd=()=>null,fd=new WeakMap,Av=(t,e)=>{let r=fd.get(t);return r||(r=new Set(t.map(o=>o.id)),fd.set(t,r)),r.has(e)},Rv=(t,e,r)=>{switch(e){case"user":return r?t.UserEditComposer??t.EditComposer??t.UserMessage??t.Message:t.UserMessage??t.Message;case"assistant":return r?t.AssistantEditComposer??t.EditComposer??t.AssistantMessage??t.Message:t.AssistantMessage??t.Message;case"system":return r?t.SystemEditComposer??t.EditComposer??t.SystemMessage??t.Message??hd:t.SystemMessage??t.Message??hd;default:throw new Error(`Unknown message role: ${e}`)}},Vn=t=>{let e=f(6),{components:r}=t,o=E(Pv),i=E(kv),s;e[0]!==r||e[1]!==i||e[2]!==o?(s=Rv(r,o,i),e[0]=r,e[1]=i,e[2]=o,e[3]=s):s=e[3];let n=s,a;return e[4]!==n?(a=(0,st.jsx)(n,{}),e[4]=n,e[5]=a):a=e[5],a},uo=ee(t=>{let e=f(5),{index:r,components:o}=t,i;e[0]!==o?(i=(0,st.jsx)(Vn,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,st.jsx)(Rn,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},(t,e)=>t.index===e.index&&Fn(t.components,e.components));uo.displayName="ThreadPrimitive.MessageByIndex";var mo=ee(t=>{let e=f(7),{messageId:r,components:o}=t,i;if(e[0]!==r?(i=a=>Av(a.thread.messages,r),e[0]=r,e[1]=i):i=e[1],!E(i))return null;let s;e[2]!==o?(s=(0,st.jsx)(Vn,{components:o}),e[2]=o,e[3]=s):s=e[3];let n;return e[4]!==r||e[5]!==s?(n=(0,st.jsx)(pd,{id:r,children:s}),e[4]=r,e[5]=s,e[6]=n):n=e[6],n},(t,e)=>t.messageId===e.messageId&&Fn(t.components,e.components));mo.displayName="ThreadPrimitive.Unstable_MessageById";var gd=({children:t})=>{let e=E(Be(r=>r.thread.messages.map(o=>o.id)));return Y(()=>e.length===0?null:e.map((r,o)=>(0,st.jsx)(Rn,{index:o,children:(0,st.jsx)(Ue,{getItemState:i=>i.thread.message({index:o}).getState(),children:i=>t({get message(){return i()}})})},r)),[e,t])},rr=t=>{let e=f(4),{components:r,children:o}=t;if(r){let s;return e[0]!==r?(s=(0,st.jsx)(gd,{children:()=>(0,st.jsx)(Vn,{components:r})}),e[0]=r,e[1]=s):s=e[1],s}let i;return e[2]!==o?(i=(0,st.jsx)(gd,{children:o}),e[2]=o,e[3]=i):i=e[3],i};rr.displayName="ThreadPrimitive.Messages";var Gi=ee(rr,(t,e)=>t.children||e.children?t.children===e.children:Fn(t.components,e.components));function Pv(t){return t.message.role}function kv(t){return t.message.composer.isEditing}var Ki=t=>{let e=t.message.metadata;if(!(!e||typeof e!="object"))return e.custom?.quote};var Ir=require("react/jsx-runtime");var vd=class extends Error{constructor(e,r=`Component "${e}" is not in the generative-ui allowlist.`){super(r);v(this,"componentName");this.name="GenerativeUIRenderError",this.componentName=e}},Mv=t=>typeof t=="object"&&t!==null,bd=t=>t==null?[]:Array.isArray(t)?t:[t],xd=(t,e,r,o)=>{if(t==null)return null;if(typeof t=="string")return t;if(!Mv(t)||!("component"in t)||typeof t.component!="string")return typeof process<"u",null;let{component:i,props:s,children:n,key:a}=t,c=e[i];if(!c){if(r)return(0,Ir.jsx)(r,{component:i,props:s},a??o);throw new vd(i)}return Ns(c,{...s??{},key:a??o},...bd(n).map((l,u)=>xd(l,e,r,`${o}/${u}`)))},po=t=>{let e=f(11),{spec:r,components:o,Fallback:i}=t,s=r?.root,n;e[0]!==s?(n=bd(s),e[0]=s,e[1]=n):n=e[1];let a=n,c;if(e[2]!==i||e[3]!==o||e[4]!==a){let u;e[6]!==i||e[7]!==o?(u=(m,d)=>xd(m,o,i,`${d}`),e[6]=i,e[7]=o,e[8]=u):u=e[8],c=a.map(u),e[2]=i,e[3]=o,e[4]=a,e[5]=c}else c=e[5];let l;return e[9]!==c?(l=(0,Ir.jsx)(Ir.Fragment,{children:c}),e[9]=c,e[10]=l):l=e[10],l};po.displayName="GenerativeUIRender";var Qi=t=>{let e=f(4),{components:r,spec:o,Fallback:i}=t,s=E(Dv),n=o??s;if(!n)return null;let a;return e[0]!==i||e[1]!==r||e[2]!==n?(a=(0,Ir.jsx)(po,{spec:n,components:r,Fallback:i}),e[0]=i,e[1]=r,e[2]=n,e[3]=a):a=e[3],a};Qi.displayName="MessagePrimitive.GenerativeUI";function Dv(t){let e=t.part;return e?.type==="generative-ui"?e.spec:void 0}var H=require("react/jsx-runtime"),jn=t=>{let e=-1;return{startGroup:r=>{e===-1&&(e=r)},endGroup:(r,o)=>{e!==-1&&(o.push({type:t,startIndex:e,endIndex:r}),e=-1)},finalize:(r,o)=>{e!==-1&&o.push({type:t,startIndex:e,endIndex:r})}}},Ov=(t,e,r)=>{let o=[];if(e){let i=jn("chainOfThoughtGroup");for(let s=0;s<t.length;s++){let n=t[s];n==="tool-call"||n==="reasoning"?i.startGroup(s):(i.endGroup(s-1,o),o.push({type:"single",index:s}))}i.finalize(t.length-1,o)}else{let i=jn("toolGroup"),s=jn("reasoningGroup");for(let n=0;n<t.length;n++){let a=t[n];a==="tool-call"?(s.endGroup(n-1,o),i.startGroup(n)):a==="reasoning"?(i.endGroup(n-1,o),s.startGroup(n)):(i.endGroup(n-1,o),s.endGroup(n-1,o),o.push({type:"single",index:n}))}i.finalize(t.length-1,o),s.finalize(t.length-1,o)}if(r){let i=new Set;for(let s of o){if(s.type==="single")continue;let n=r[s.startIndex];n!==void 0&&!i.has(n)&&(i.add(n),s.idKey=`id:${n}`)}}return o},Bv=t=>{let e=f(10),r=E(Be(Xv)),o=E(Be(eb)),i;e:{if(r.length===0){let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=[],e[0]=a):a=e[0];let c;e[1]!==o?(c={ranges:a,partIds:o},e[1]=o,e[2]=c):c=e[2],i=c;break e}let s;e[3]!==r||e[4]!==o||e[5]!==t?(s=Ov(r,t,o),e[3]=r,e[4]=o,e[5]=t,e[6]=s):s=e[6];let n;e[7]!==o||e[8]!==s?(n={ranges:s,partIds:o},e[7]=o,e[8]=s,e[9]=n):n=e[9],i=n}return i},Nv=t=>{let e=f(9),r,o;e[0]!==t?({Fallback:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;e[3]!==r||e[4]!==o.toolName?(i=a=>a.tools.toolUIs[o.toolName]?.[0]?.render??r,e[3]=r,e[4]=o.toolName,e[5]=i):i=e[5];let s=E(i);if(!s)return null;let n;return e[6]!==s||e[7]!==o?(n=(0,H.jsx)(s,{...o}),e[6]=s,e[7]=o,e[8]=n):n=e[8],n},Un=(t,e,r)=>{let o=t.renderers[e]?.[0];return o||(t.fallbacks[0]??r)},$v=t=>{let e=f(9),r,o;e[0]!==t?({Fallback:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;e[3]!==r||e[4]!==o.name?(i=a=>Un(a.dataRenderers,o.name,r),e[3]=r,e[4]=o.name,e[5]=i):i=e[5];let s=E(i);if(!s)return null;let n;return e[6]!==s||e[7]!==o?(n=(0,H.jsx)(s,{...o}),e[6]=s,e[7]=o,e[8]=n):n=e[8],n},Xe={Text:()=>null,Reasoning:()=>null,Source:()=>null,Image:()=>null,File:()=>null,Unstable_Audio:()=>null,ToolGroup:({children:t})=>t,ReasoningGroup:({children:t})=>t},zn=t=>{let e=f(41),{components:r}=t,o;e[0]!==r?(o=r===void 0?{}:r,e[0]=r,e[1]=o):o=e[1];let{Text:i,Reasoning:s,Image:n,Source:a,File:c,Unstable_Audio:l,tools:u,data:m,generativeUI:d}=o,p=i===void 0?Xe.Text:i,h=s===void 0?Xe.Reasoning:s,g=n===void 0?Xe.Image:n,b=a===void 0?Xe.Source:a,y=c===void 0?Xe.File:c,x=l===void 0?Xe.Unstable_Audio:l,S;e[2]!==u?(S=u===void 0?{}:u,e[2]=u,e[3]=S):S=e[3];let _=S,C=B(),P=E(tb),A=P.type;if(A==="tool-call"){let w=C.part.addToolResult,k=C.part.resumeToolCall,M=C.part.respondToToolApproval;if("Override"in _){let R;return e[4]!==w||e[5]!==P||e[6]!==M||e[7]!==k||e[8]!==_.Override?(R=(0,H.jsx)(_.Override,{...P,addResult:w,resume:k,respondToApproval:M}),e[4]=w,e[5]=P,e[6]=M,e[7]=k,e[8]=_.Override,e[9]=R):R=e[9],R}let O=_.by_name?.[P.toolName]??_.Fallback,T;return e[10]!==O||e[11]!==w||e[12]!==P||e[13]!==M||e[14]!==k?(T=(0,H.jsx)(Nv,{...P,Fallback:O,addResult:w,resume:k,respondToApproval:M}),e[10]=O,e[11]=w,e[12]=P,e[13]=M,e[14]=k,e[15]=T):T=e[15],T}if(P.status?.type==="requires-action")throw new Error("Encountered unexpected requires-action status");switch(A){case"text":{let w;return e[16]!==p||e[17]!==P?(w=(0,H.jsx)(p,{...P}),e[16]=p,e[17]=P,e[18]=w):w=e[18],w}case"reasoning":{let w;return e[19]!==h||e[20]!==P?(w=(0,H.jsx)(h,{...P}),e[19]=h,e[20]=P,e[21]=w):w=e[21],w}case"source":{let w;return e[22]!==b||e[23]!==P?(w=(0,H.jsx)(b,{...P}),e[22]=b,e[23]=P,e[24]=w):w=e[24],w}case"image":{let w;return e[25]!==g||e[26]!==P?(w=(0,H.jsx)(g,{...P}),e[25]=g,e[26]=P,e[27]=w):w=e[27],w}case"file":{let w;return e[28]!==y||e[29]!==P?(w=(0,H.jsx)(y,{...P}),e[28]=y,e[29]=P,e[30]=w):w=e[30],w}case"audio":{let w;return e[31]!==x||e[32]!==P?(w=(0,H.jsx)(x,{...P}),e[31]=x,e[32]=P,e[33]=w):w=e[33],w}case"data":{let w=m?.by_name?.[P.name]??m?.Fallback,k;return e[34]!==w||e[35]!==P?(k=(0,H.jsx)($v,{...P,Fallback:w}),e[34]=w,e[35]=P,e[36]=k):k=e[36],k}case"generative-ui":{if(!d?.components)return typeof process<"u",null;let w=P,k;return e[37]!==d.Fallback||e[38]!==d.components||e[39]!==w.spec?(k=(0,H.jsx)(po,{spec:w.spec,components:d.components,Fallback:d.Fallback}),e[37]=d.Fallback,e[38]=d.components,e[39]=w.spec,e[40]=k):k=e[40],k}default:return console.warn(`Unknown message part type: ${A}`),null}},$t=ee(t=>{let e=f(5),{index:r,components:o}=t,i;e[0]!==o?(i=(0,H.jsx)(zn,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,H.jsx)(Zt,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},(t,e)=>t.index===e.index&&t.components?.Text===e.components?.Text&&t.components?.Reasoning===e.components?.Reasoning&&t.components?.Source===e.components?.Source&&t.components?.Image===e.components?.Image&&t.components?.File===e.components?.File&&t.components?.Unstable_Audio===e.components?.Unstable_Audio&&t.components?.tools===e.components?.tools&&t.components?.data===e.components?.data&&t.components?.generativeUI===e.components?.generativeUI&&t.components?.ToolGroup===e.components?.ToolGroup&&t.components?.ReasoningGroup===e.components?.ReasoningGroup);$t.displayName="MessagePrimitive.PartByIndex";var Lv=t=>{let e=f(6),{status:r,component:o}=t,i=r.type==="running",s;e[0]!==o||e[1]!==r?(s=(0,H.jsx)(o,{type:"text",text:"",status:r}),e[0]=o,e[1]=r,e[2]=s):s=e[2];let n;return e[3]!==i||e[4]!==s?(n=(0,H.jsx)(er,{text:"",isRunning:i,children:s}),e[3]=i,e[4]=s,e[5]=n):n=e[5],n},Fv=Object.freeze({type:"complete"}),Vv=Object.freeze({type:"running"}),jv=t=>{let e=f(6),{components:r}=t,o=E(rb);if(r?.Empty){let n;return e[0]!==r.Empty||e[1]!==o?(n=(0,H.jsx)(r.Empty,{status:o}),e[0]=r.Empty,e[1]=o,e[2]=n):n=e[2],n}if(o.type!=="running")return null;let i=r?.Text??Xe.Text,s;return e[3]!==o||e[4]!==i?(s=(0,H.jsx)(Lv,{status:o,component:i}),e[3]=o,e[4]=i,e[5]=s):s=e[5],s},wd=ee(jv,(t,e)=>t.components?.Empty===e.components?.Empty&&t.components?.Text===e.components?.Text),Uv=t=>{let e=f(4),{components:r,enabled:o}=t,i;if(e[0]!==o?(i=n=>{if(!o||n.message.parts.length===0)return!1;let a=n.message.parts[n.message.parts.length-1];return a?.type!=="text"&&a?.type!=="reasoning"},e[0]=o,e[1]=i):i=e[1],!E(i))return null;let s;return e[2]!==r?(s=(0,H.jsx)(wd,{components:r}),e[2]=r,e[3]=s):s=e[3],s},zv=ee(Uv,(t,e)=>t.enabled===e.enabled&&t.components?.Empty===e.components?.Empty&&t.components?.Text===e.components?.Text),Hv=t=>{let e=f(4),{Quote:r}=t,o=E(Ki);if(!o)return null;let i;return e[0]!==r||e[1]!==o.messageId||e[2]!==o.text?(i=(0,H.jsx)(r,{text:o.text,messageId:o.messageId}),e[0]=r,e[1]=o.messageId,e[2]=o.text,e[3]=i):i=e[3],i},qv=ee(Hv);function yd(t,e){let r=t.toolUIs[e.toolName]?.[0]?.render??null;return r||(Nu(e.mcp?.app?.resourceUri)&&t.mcpApp?t.mcpApp.render:null)}var _d=()=>{let t=f(6),e=B(),r=E(ob),o=E(ib);if(!o||r.type!=="tool-call")return null;let i;return t[0]!==o||t[1]!==e.part.addToolResult||t[2]!==e.part.respondToToolApproval||t[3]!==e.part.resumeToolCall||t[4]!==r?(i=(0,H.jsx)(o,{...r,addResult:e.part.addToolResult,resume:e.part.resumeToolCall,respondToApproval:e.part.respondToToolApproval}),t[0]=o,t[1]=e.part.addToolResult,t[2]=e.part.respondToToolApproval,t[3]=e.part.resumeToolCall,t[4]=r,t[5]=i):i=t[5],i},Sd=()=>{let t=f(3),e=E(sb),r=E(nb);if(!r||e.type!=="data")return null;let o=e,i;return t[0]!==r||t[1]!==o?(i=(0,H.jsx)(r,{...o}),t[0]=r,t[1]=o,t[2]=i):i=t[2],i},Gv=()=>{let t=f(2),e=E(ab);if(e==="tool-call"){let r;return t[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,H.jsx)(_d,{}),t[0]=r):r=t[0],r}if(e==="data"){let r;return t[1]===Symbol.for("react.memo_cache_sentinel")?(r=(0,H.jsx)(Sd,{}),t[1]=r):r=t[1],r}return null},Kv=Object.freeze({type:"text",text:"",status:Vv}),Qv=({children:t})=>{let e=B(),r=E(o=>o.dataRenderers);return(0,H.jsx)(Ue,{getItemState:o=>o.part.getState(),children:o=>t({get part(){let i=o();if(i.type==="tool-call"){let s=yd(e.tools.getState(),i)!==null,n=e.part;return{...i,toolUI:s?(0,H.jsx)(_d,{}):null,addResult:n.addToolResult,resume:n.resumeToolCall,respondToApproval:n.respondToToolApproval}}if(i.type==="data"){let s=Un(r,i.name,void 0)!==void 0;return{...i,dataRendererUI:s?(0,H.jsx)(Sd,{}):null}}return i}})})},Hn=t=>{let e=f(5),{index:r,children:o}=t,i;e[0]!==o?(i=(0,H.jsx)(Qv,{children:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,H.jsx)(Zt,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},Wv=t=>{let e=f(9),{children:r}=t,o=E(cb),i=E(lb),s=o===0&&i;if(o===0){if(!s)return null;let a;e[0]!==r?(a=r({part:Kv}),e[0]=r,e[1]=a):a=e[1];let c;return e[2]!==a?(c=(0,H.jsx)(er,{text:"",isRunning:!0,children:a}),e[2]=a,e[3]=c):c=e[3],c}let n;if(e[4]!==r||e[5]!==o){let a;e[7]!==r?(a=(c,l)=>(0,H.jsx)(Hn,{index:l,children:u=>r(u)??(0,H.jsx)(Gv,{})},l),e[7]=r,e[8]=a):a=e[8],n=(0,H.jsx)(H.Fragment,{children:Array.from({length:o},a)}),e[4]=r,e[5]=o,e[6]=n}else n=e[6];return n},ho=t=>{let e=f(5),{components:r,unstable_showEmptyOnNonTextEnd:o,children:i}=t,s=o===void 0?!0:o;if(i){let a;return e[0]!==i?(a=(0,H.jsx)(Wv,{children:i}),e[0]=i,e[1]=a):a=e[1],a}let n;return e[2]!==r||e[3]!==s?(n=(0,H.jsx)(Jv,{components:r,unstable_showEmptyOnNonTextEnd:s}),e[2]=r,e[3]=s,e[4]=n):n=e[4],n};ho.displayName="MessagePrimitive.Parts";var Jv=t=>{let e=f(15),{components:r,unstable_showEmptyOnNonTextEnd:o}=t,i=E(ub),s=!!r?.ChainOfThought,{ranges:n,partIds:a}=Bv(s),c;e:{if(i===0){let h;e[0]!==r?(h=(0,H.jsx)(wd,{components:r}),e[0]=r,e[1]=h):h=e[1],c=h;break e}let p;if(e[2]!==r||e[3]!==n||e[4]!==a){let h=new Set,g=b=>{let y=a[b];return y!==void 0&&!h.has(y)?(h.add(y),`part-id:${y}`):`part-${b}`};p=n.map(b=>{if(b.type==="single")return(0,H.jsx)($t,{index:b.index,components:r},b.index);if(b.type==="chainOfThoughtGroup"){let y=r?.ChainOfThought;return y?(0,H.jsx)(wu,{startIndex:b.startIndex,endIndex:b.endIndex,children:(0,H.jsx)(y,{})},`chainOfThought-${b.idKey??b.startIndex}`):null}else if(b.type==="toolGroup"){let y=r?.ToolGroup??Xe.ToolGroup;return(0,H.jsx)(y,{startIndex:b.startIndex,endIndex:b.endIndex,children:Array.from({length:b.endIndex-b.startIndex+1},(x,S)=>{let _=b.startIndex+S;return(0,H.jsx)($t,{index:_,components:r},g(_))})},`tool-${b.idKey??b.startIndex}`)}else{let y=r?.ReasoningGroup??Xe.ReasoningGroup;return(0,H.jsx)(y,{startIndex:b.startIndex,endIndex:b.endIndex,children:Array.from({length:b.endIndex-b.startIndex+1},(x,S)=>{let _=b.startIndex+S;return(0,H.jsx)($t,{index:_,components:r},`part-${_}`)})},`reasoning-${b.startIndex}`)}}),e[2]=r,e[3]=n,e[4]=a,e[5]=p}else p=e[5];c=p}let l=c,u;e[6]!==r?(u=r?.Quote&&(0,H.jsx)(qv,{Quote:r.Quote}),e[6]=r,e[7]=u):u=e[7];let m;e[8]!==r||e[9]!==o?(m=(0,H.jsx)(zv,{components:r,enabled:o}),e[8]=r,e[9]=o,e[10]=m):m=e[10];let d;return e[11]!==l||e[12]!==u||e[13]!==m?(d=(0,H.jsxs)(H.Fragment,{children:[u,l,m]}),e[11]=l,e[12]=u,e[13]=m,e[14]=d):d=e[14],d};function Yv(t){return t.type}function Xv(t){return t.message.parts.map(Yv)}function Zv(t){return t.type==="tool-call"?t.toolCallId:void 0}function eb(t){return t.message.parts.map(Zv)}function tb(t){return t.part}function rb(t){return t.message.status??Fv}function ob(t){return t.part}function ib(t){return t.part.type==="tool-call"?yd(t.tools,t.part):null}function sb(t){return t.part}function nb(t){return t.part.type==="data"?Un(t.dataRenderers,t.part.name,void 0)??null:null}function ab(t){return t.part.type}function cb(t){return t.message.parts.length}function lb(t){return(t.message.status?.type??"complete")==="running"}function ub(t){return t.message.parts.length}var Id=Symbol.for("@assistant-ui/groupBy.memoKey");var Td=t=>{let e=t.nextChildIdx++;return t.nodeKey===""?String(e):`${t.nodeKey}.${e}`},Cd=(t,e)=>{if(!(e===void 0||t.claimed.has(e)))return t.claimed.add(e),`id:${e}`},Ed=(t,e)=>{let r={key:"",nodeKey:"",indices:[],children:[],nextChildIdx:0,claimed:new Set},o=[r],i=()=>{let s=o.pop(),n=o[o.length-1];n.children.push({type:"group",key:s.key,nodeKey:s.nodeKey,idKey:Cd(n,e?.[s.indices[0]]),indices:s.indices,children:s.children})};for(let s=0;s<t.length;s++){let n=t[s],a=0;for(;a<o.length-1&&a<n.length&&o[a+1].key===n[a];)a++;for(;o.length-1>a;)i();for(;o.length-1<n.length;){let l=o[o.length-1];o.push({key:n[o.length-1],nodeKey:Td(l),indices:[],children:[],nextChildIdx:0,claimed:new Set})}let c=o[o.length-1];c.children.push({type:"part",index:s,nodeKey:Td(c),idKey:Cd(c,e?.[s])});for(let l=1;l<o.length;l++)o[l].indices.push(s)}for(;o.length>1;)i();return r.children};var nt=require("react/jsx-runtime"),db=(t,e,r)=>{if(!r)return!1;switch(t){case"never":return!1;case"always":return!0;case"empty":return e.length===0;case"no-text":{let o=e[e.length-1];return o===void 0||o.type!=="text"&&o.type!=="reasoning"}}},Ad=()=>{throw new Error("MessagePrimitive.GroupedParts: rendered `children` under a leaf part. `children` is only meaningful for `group-\u2026` cases \u2014 add a matching case for the part type or return `null` to skip it.")},Rd=(t,e,r)=>{if(t.type==="part")return(0,nt.jsx)(Hn,{index:t.index,children:({part:n})=>r({part:n,children:(0,nt.jsx)(Ad,{})})},t.idKey?`part-${t.idKey}`:`part-${t.index}`);let{status:o,counts:i}=vu(e,t.indices),s={type:t.key,status:o,counts:i,indices:t.indices};return(0,nt.jsx)(Bs,{children:r({part:s,children:(0,nt.jsx)(nt.Fragment,{children:t.children.map(n=>Rd(n,e,r))})})},t.idKey??t.nodeKey)},Wi=({groupBy:t,indicator:e="no-text",children:r})=>{let o=E(Be(c=>c.message.parts)),i=E(c=>c.tools.toolUIs),s=E(c=>e==="never"?!1:c.message.status?.type==="running"),n=t[Id]??t,a=Y(()=>{let c={toolUIs:i};return Ed(o.map(l=>t(l,c)??[]),o.map(l=>l.type==="tool-call"?l.toolCallId:void 0))},[o,n,i]);return(0,nt.jsxs)(nt.Fragment,{children:[a.map(c=>Rd(c,o,r)),db(e,o,s)&&r({part:{type:"indicator"},children:(0,nt.jsx)(Ad,{})})]})};Wi.displayName="MessagePrimitive.GroupedParts";var Ji=require("react/jsx-runtime"),mb=t=>{let e=f(5),{children:r}=t,o=E(Ki);if(!o)return null;let i;e[0]!==r||e[1]!==o?(i=r(o),e[0]=r,e[1]=o,e[2]=i):i=e[2];let s;return e[3]!==i?(s=(0,Ji.jsx)(Ji.Fragment,{children:i}),e[3]=i,e[4]=s):s=e[4],s},Yi=ee(mb);Yi.displayName="MessagePrimitive.Quote";var St=require("react/jsx-runtime"),kd=(t,e)=>{switch(e.type){case"image":return t?.Image??t?.Attachment;case"document":return t?.Document??t?.Attachment;case"file":return t?.File??t?.Attachment;default:return t?.Attachment}},pb=t=>{let e=f(5),{components:r}=t,o=E(hb);if(!o)return null;let i=o,s;e[0]!==r||e[1]!==i?(s=kd(r,i),e[0]=r,e[1]=i,e[2]=s):s=e[2];let n=s;if(!n)return null;let a;return e[3]!==n?(a=(0,St.jsx)(n,{}),e[3]=n,e[4]=a):a=e[4],a},fo=ee(t=>{let e=f(5),{index:r,components:o}=t,i;e[0]!==o?(i=(0,St.jsx)(pb,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,St.jsx)(En,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},(t,e)=>t.index===e.index&&t.components?.Image===e.components?.Image&&t.components?.Document===e.components?.Document&&t.components?.File===e.components?.File&&t.components?.Attachment===e.components?.Attachment);fo.displayName="MessagePrimitive.AttachmentByIndex";var Pd=({children:t})=>{let e=E(Be(r=>r.message.role!=="user"?[]:(r.message.attachments??[]).map(o=>o.id)));return Y(()=>e.map((r,o)=>(0,St.jsx)(En,{index:o,children:(0,St.jsx)(Ue,{getItemState:i=>i.message.attachment({index:o}).getState(),children:i=>t({get attachment(){return i()}})})},r)),[e,t])},go=t=>{let e=f(4),{components:r,children:o}=t;if(r){let s;return e[0]!==r?(s=(0,St.jsx)(Pd,{children:n=>{let{attachment:a}=n,c=kd(r,a);return c?(0,St.jsx)(c,{}):null}}),e[0]=r,e[1]=s):s=e[1],s}let i;return e[2]!==o?(i=(0,St.jsx)(Pd,{children:o}),e[2]=o,e[3]=i):i=e[3],i};go.displayName="MessagePrimitive.Attachments";function hb(t){return t.attachment}var Tt=require("react/jsx-runtime"),Dd=(t,e)=>{switch(e.type){case"image":return t?.Image??t?.Attachment;case"document":return t?.Document??t?.Attachment;case"file":return t?.File??t?.Attachment;default:return t?.Attachment}},fb=t=>{let e=f(5),{components:r}=t,o=E(gb);if(!o)return null;let i;e[0]!==o||e[1]!==r?(i=Dd(r,o),e[0]=o,e[1]=r,e[2]=i):i=e[2];let s=i;if(!s)return null;let n;return e[3]!==s?(n=(0,Tt.jsx)(s,{}),e[3]=s,e[4]=n):n=e[4],n},vo=ee(t=>{let e=f(5),{index:r,components:o}=t,i;e[0]!==o?(i=(0,Tt.jsx)(fb,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,Tt.jsx)(An,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},(t,e)=>t.index===e.index&&t.components?.Image===e.components?.Image&&t.components?.Document===e.components?.Document&&t.components?.File===e.components?.File&&t.components?.Attachment===e.components?.Attachment);vo.displayName="ComposerPrimitive.AttachmentByIndex";var Md=({children:t})=>{let e=E(Be(r=>r.composer.attachments.map(o=>o.id)));return Y(()=>e.map((r,o)=>(0,Tt.jsx)(An,{index:o,children:(0,Tt.jsx)(Ue,{getItemState:i=>i.composer.attachment({index:o}).getState(),children:i=>t({get attachment(){return i()}})})},r)),[e,t])},bo=t=>{let e=f(4),{components:r,children:o}=t;if(r){let s;return e[0]!==r?(s=(0,Tt.jsx)(Md,{children:n=>{let{attachment:a}=n,c=Dd(r,a);return c?(0,Tt.jsx)(c,{}):null}}),e[0]=r,e[1]=s):s=e[1],s}let i;return e[2]!==o?(i=(0,Tt.jsx)(Md,{children:o}),e[2]=o,e[3]=i):i=e[3],i};bo.displayName="ComposerPrimitive.Attachments";function gb(t){return t.attachment}var qn=require("react/jsx-runtime"),vb=({children:t})=>{let e=E(Be(r=>r.composer.queue.map(o=>o.id)));return Y(()=>e.map((r,o)=>(0,qn.jsx)(Su,{index:o,children:(0,qn.jsx)(Ue,{getItemState:i=>i.composer.queueItem({index:o}).getState(),children:i=>t({get queueItem(){return i()}})})},r)),[e,t])},xo=ee(vb);xo.displayName="ComposerPrimitive.Queue";var wo=require("react/jsx-runtime"),bb=()=>E(xb),Gn=t=>{let e=f(10),{components:r,children:o}=t,i=bb();if(!i?.length)return null;if(r){let a;e[0]!==r?(a=(0,wo.jsx)(rr,{components:r}),e[0]=r,e[1]=a):a=e[1];let c;return e[2]!==i||e[3]!==a?(c=(0,wo.jsx)(Dn,{messages:i,children:a}),e[2]=i,e[3]=a,e[4]=c):c=e[4],c}let s;e[5]!==o?(s=(0,wo.jsx)(rr,{children:o}),e[5]=o,e[6]=s):s=e[6];let n;return e[7]!==i||e[8]!==s?(n=(0,wo.jsx)(Dn,{messages:i,children:s}),e[7]=i,e[8]=s,e[9]=n):n=e[9],n};Gn.displayName="PartPrimitive.Messages";var Kn=ee(Gn);function xb(t){let e=t.part;if(e.type==="tool-call")return"messages"in e?e.messages:void 0}var Ct=t=>{let{children:e}=t;return E(wb)?e:null};Ct.displayName="MessagePartPrimitive.InProgress";function wb(t){return t.part.status.type==="running"}var It=require("react/jsx-runtime"),Bd=t=>{let e=f(2),{components:r}=t,o=r.Suggestion,i;return e[0]!==o?(i=(0,It.jsx)(o,{}),e[0]=o,e[1]=i):i=e[1],i},yo=ee(t=>{let e=f(5),{index:r,components:o}=t,i;e[0]!==o?(i=(0,It.jsx)(Bd,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,It.jsx)(Pn,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},(t,e)=>t.index===e.index&&t.components.Suggestion===e.components.Suggestion);yo.displayName="ThreadPrimitive.SuggestionByIndex";var Od=({children:t})=>{let e=E(r=>r.suggestions.suggestions.length);return Y(()=>e===0?null:Array.from({length:e},(r,o)=>(0,It.jsx)(Pn,{index:o,children:(0,It.jsx)(Ue,{getItemState:i=>i.suggestions.suggestion({index:o}).getState(),children:i=>t({get suggestion(){return i()}})})},o)),[e,t])},Xi=t=>{let e=f(4),{components:r,children:o}=t;if(r){let s;return e[0]!==r?(s=(0,It.jsx)(Od,{children:()=>(0,It.jsx)(Bd,{components:r})}),e[0]=r,e[1]=s):s=e[1],s}let i;return e[2]!==o?(i=(0,It.jsx)(Od,{children:o}),e[2]=o,e[3]=i):i=e[3],i};Xi.displayName="ThreadPrimitive.Suggestions";var Zi=ee(Xi,(t,e)=>t.children||e.children?t.children===e.children:t.components.Suggestion===e.components.Suggestion);var yb=t=>{let e=f(3),r;return e[0]!==t.dictation||e[1]!==t.editing?(r=o=>{if(t.editing===!0&&!o.composer.isEditing||t.editing===!1&&o.composer.isEditing)return!1;let i=o.composer.dictation!=null;return!(t.dictation===!0&&!i||t.dictation===!1&&i)},e[0]=t.dictation,e[1]=t.editing,e[2]=r):r=e[2],E(r)},_o=t=>{let e=f(3),r,o;return e[0]!==t?({children:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]),yb(o)?r:null};_o.displayName="ComposerPrimitive.If";var Nd=t=>!t.composer.canSend||t.thread.isRunning&&!t.thread.capabilities.queue,$d=t=>!t.composer.canCancel;var Ld=t=>t.composer.isEditing||t.optional.thread?.voice!==void 0||t.optional.thread?.capabilities.edit===!1,Fd=t=>t.thread.isRunning||t.thread.isDisabled||t.thread.voice!==void 0||t.message.role!=="assistant"||!t.thread.capabilities.reload,Vd=t=>!((t.message.role!=="assistant"||t.message.status?.type!=="running")&&t.message.parts.some(e=>e.type==="text"&&e.text.length>0));var jd=(t,e)=>t.thread.isDisabled||e&&t.thread.isRunning&&!t.thread.capabilities.queue,Ud=t=>{if(t.message.status?.type!=="incomplete"||t.message.status.reason!=="error")return;let e=t.message.status.error;return typeof e=="string"?e:typeof e=="object"&&e!==null&&"message"in e&&typeof e.message=="string"?e.message:e??"An error occurred"};var Qn=()=>{let t=f(5),e=B(),r=E(Nd),o;t[0]!==e?(o=n=>{e.composer.send(n)},t[0]=e,t[1]=o):o=t[1];let i=o,s;return t[2]!==r||t[3]!==i?(s={send:i,disabled:r},t[2]=r,t[3]=i,t[4]=s):s=t[4],s};var Wn=()=>{let t=f(5),e=B(),r=E($d),o;t[0]!==e?(o=()=>{e.composer.cancel()},t[0]=e,t[1]=o):o=t[1];let i=o,s;return t[2]!==i||t[3]!==r?(s={cancel:i,disabled:r},t[2]=i,t[3]=r,t[4]=s):s=t[4],s};var Jn=()=>{let t=f(5),e=B(),r=E(_b),o;t[0]!==e?(o=()=>{e.composer.startDictation()},t[0]=e,t[1]=o):o=t[1];let i=o,s;return t[2]!==r||t[3]!==i?(s={startDictation:i,disabled:r},t[2]=r,t[3]=i,t[4]=s):s=t[4],s};function _b(t){return t.composer.dictation!=null||!t.thread.capabilities.dictation||!t.composer.isEditing}var Yn=()=>{let t=f(5),e=B(),r=E(Sb),o;t[0]!==e?(o=n=>e.composer.addAttachment(n),t[0]=e,t[1]=o):o=t[1];let i=o,s;return t[2]!==i||t[3]!==r?(s={addAttachment:i,disabled:r},t[2]=i,t[3]=r,t[4]=s):s=t[4],s};function Sb(t){return!t.composer.isEditing}var Xn=t=>{let e=f(15),r;e[0]!==t?(r=t===void 0?{}:t,e[0]=t,e[1]=r):r=e[1];let{copiedDuration:o,copyToClipboard:i}=r,s=o===void 0?3e3:o,n=B(),a=E(Vd),c=E(Tb),l=E(Cb),u=E(Ib),m=F(void 0),d=F(0),p,h;e[2]!==n?(p=()=>()=>{d.current=d.current+1,m.current!==void 0&&(clearTimeout(m.current),m.current=void 0,n.message.setIsCopied(!1))},h=[n],e[2]=n,e[3]=p,e[4]=h):(p=e[3],h=e[4]),$(p,h);let g;e[5]!==n||e[6]!==u||e[7]!==s||e[8]!==i||e[9]!==l?(g=()=>{if(!i)return;let S=l?u:n.message.getCopyText();if(!S)return;let _=d.current,C;try{C=i(S)}catch{return}Promise.resolve(C).then(()=>{_===d.current&&(m.current!==void 0&&clearTimeout(m.current),n.message.setIsCopied(!0),m.current=setTimeout(()=>{m.current=void 0,n.message.setIsCopied(!1)},s))},Eb)},e[5]=n,e[6]=u,e[7]=s,e[8]=i,e[9]=l,e[10]=g):g=e[10];let b=g,y=a||!i,x;return e[11]!==b||e[12]!==c||e[13]!==y?(x={copy:b,disabled:y,isCopied:c},e[11]=b,e[12]=c,e[13]=y,e[14]=x):x=e[14],x};function Tb(t){return t.message.isCopied}function Cb(t){return t.composer.isEditing}function Ib(t){return t.composer.text}function Eb(){}var Zn=()=>{let t=f(5),e=B(),r=E(Ld),o;t[0]!==e?(o=()=>{e.composer.beginEdit()},t[0]=e,t[1]=o):o=t[1];let i=o,s;return t[2]!==r||t[3]!==i?(s={edit:i,disabled:r},t[2]=r,t[3]=i,t[4]=s):s=t[4],s};var ea=()=>{let t=f(5),e=B(),r=E(Fd),o;t[0]!==e?(o=()=>{e.message.reload()},t[0]=e,t[1]=o):o=t[1];let i=o,s;return t[2]!==r||t[3]!==i?(s={reload:i,disabled:r},t[2]=r,t[3]=i,t[4]=s):s=t[4],s};var ta=()=>{let t=f(5),e=B(),r=E(Ab),o;t[0]!==e?(o=()=>{e.message.submitFeedback({type:"positive"})},t[0]=e,t[1]=o):o=t[1];let i=o,s;return t[2]!==r||t[3]!==i?(s={submit:i,isSubmitted:r},t[2]=r,t[3]=i,t[4]=s):s=t[4],s},ra=()=>{let t=f(5),e=B(),r=E(Rb),o;t[0]!==e?(o=()=>{e.message.submitFeedback({type:"negative"})},t[0]=e,t[1]=o):o=t[1];let i=o,s;return t[2]!==r||t[3]!==i?(s={submit:i,isSubmitted:r},t[2]=r,t[3]=i,t[4]=s):s=t[4],s};function Ab(t){return t.message.metadata.submittedFeedback?.type==="positive"}function Rb(t){return t.message.metadata.submittedFeedback?.type==="negative"}var oa=()=>{let t=f(5),e=B(),r=E(kb),o;t[0]!==e?(o=async()=>{e.message.speak()},t[0]=e,t[1]=o):o=t[1];let i=o,s;return t[2]!==r||t[3]!==i?(s={speak:i,disabled:r},t[2]=r,t[3]=i,t[4]=s):s=t[4],s};function Pb(t){return t.type==="text"&&t.text.length>0}function kb(t){return!((t.message.role!=="assistant"||t.message.status?.type!=="running")&&t.message.parts.some(Pb))}var ia=()=>{let t=f(5),e=B(),r=E(Mb),o;t[0]!==e?(o=()=>{e.message.stopSpeaking()},t[0]=e,t[1]=o):o=t[1];let i=o,s;return t[2]!==r||t[3]!==i?(s={stopSpeaking:i,disabled:r},t[2]=r,t[3]=i,t[4]=s):s=t[4],s};function Mb(t){return t.message.speech==null}var sa=t=>{let e=f(10),{prompt:r,send:o,clearComposer:i}=t,s=i===void 0?!0:i,n=B(),a=o??!1,c;e[0]!==a?(c=p=>jd(p,a),e[0]=a,e[1]=c):c=e[1];let l=E(c),u;e[2]!==n||e[3]!==s||e[4]!==r||e[5]!==a?(u=()=>{if(a){let{isRunning:p,capabilities:h}=n.thread.getState();if(p&&!h.queue)return;n.thread.append({content:[{type:"text",text:r}],runConfig:n.composer.getState().runConfig}),s&&!p&&n.composer.setText("")}else if(s)n.composer.setText(r);else{let p=n.composer.getState().text;n.composer.setText([p,r].filter(Db).join(" "))}},e[2]=n,e[3]=s,e[4]=r,e[5]=a,e[6]=u):u=e[6];let m=u,d;return e[7]!==l||e[8]!==m?(d={trigger:m,disabled:l},e[7]=l,e[8]=m,e[9]=d):d=e[9],d};function Db(t){return t.trim()}var na=()=>E(Ud);function zd(t,e){function r(o){let i=me(t);if(!o?.optional&&!i)throw new Error(`This component must be used within ${e}.`);return i}return r}function es(t,e){function r(i){let s=t(i);return s?s[e]:null}function o(i){let s=!1,n;typeof i=="function"?n=i:i&&typeof i=="object"&&(s=!!i.optional,n=i.selector);let a=r({optional:s});return a?n?a(n):a():null}return{[e]:o,[`${e}Store`]:r}}var aa=re(null),Ob=zd(aa,"ThreadPrimitive.Viewport"),{useThreadViewport:qe,useThreadViewportStore:Ge}=es(Ob,"useThreadViewport");var Er,ca=()=>{if(Er)return Er;let t=()=>({apis:new Map,nextId:0,listeners:new Set});if(typeof window>"u")return Er=t(),Er;let e=window.__ASSISTANT_UI_DEVTOOLS_HOOK__;if(e)return Er=e,e;let r=t();return window.__ASSISTANT_UI_DEVTOOLS_HOOK__=r,Er=r,r},ts=t=>{we(ca().listeners,t,"DevTools")};var Lt,Hd=(Lt=class{static register(e){let r=ca();for(let a of r.apis.values())if(a.api===e)return()=>{};let o=r.nextId++,i={api:e,logs:[]},s=e.on?.("*",a=>{let c=r.apis.get(o);c&&(c.logs.push({time:new Date,event:a.event,data:a.payload}),c.logs.length>Lt.MAX_EVENT_LOGS_PER_API&&(c.logs=c.logs.slice(-Lt.MAX_EVENT_LOGS_PER_API)),ts(o))}),n=e.subscribe?.(()=>{ts(o)});return r.apis.set(o,i),ts(o),()=>{let a=ca();a.apis.get(o)&&(s?.(),n?.(),a.apis.delete(o),ts(o))}}},v(Lt,"MAX_EVENT_LOGS_PER_API",200),Lt);var qd=t=>{let e,r=new Set,o=(l,u)=>{let m=typeof l=="function"?l(e):l;if(!Object.is(m,e)){let d=e;e=u??(typeof m!="object"||m===null)?m:Object.assign({},e,m),r.forEach(p=>p(e,d))}},i=()=>e,a={setState:o,getState:i,getInitialState:()=>c,subscribe:l=>(r.add(l),()=>r.delete(l))},c=e=t(o,i,a);return a},Gd=(t=>t?qd(t):qd);var So=Se(require("react"),1);var Bb=t=>t;function Nb(t,e=Bb){let r=So.default.useSyncExternalStore(t.subscribe,So.default.useCallback(()=>e(t.getState()),[t,e]),So.default.useCallback(()=>e(t.getInitialState()),[t,e]));return So.default.useDebugValue(r),r}var Kd=t=>{let e=Gd(t),r=o=>Nb(e,o);return Object.assign(r,e),r},Qd=(t=>t?Kd(t):Kd);var Wd=t=>{let e=new Map,r=()=>{let o=0;for(let i of e.values())o+=i;t(o)};return{register:()=>{let o=Symbol();return e.set(o,0),{setHeight:i=>{e.get(o)!==i&&(e.set(o,i),r())},unregister:()=>{e.delete(o),r()}}}}},Jd=(t={})=>{let e=new Set,r=Wd(n=>{s.setState({height:{...s.getState().height,viewport:n}})}),o=Wd(n=>{s.setState({height:{...s.getState().height,inset:n}})}),i=(n,a)=>(s.setState({element:{...s.getState().element,[n]:a}}),()=>{s.getState().element[n]===a&&s.setState({element:{...s.getState().element,[n]:null}})}),s=Qd(()=>({isAtBottom:!0,scrollToBottom:({behavior:n="auto"}={})=>{we(e,()=>({behavior:n}),"Thread viewport")},onScrollToBottom:n=>(e.add(n),()=>{e.delete(n)}),turnAnchor:t.turnAnchor??"bottom",topAnchorMessageClamp:{tallerThan:t.topAnchorMessageClamp?.tallerThan??"10em",visibleHeight:t.topAnchorMessageClamp?.visibleHeight??"6em"},height:{viewport:0,inset:0},element:{viewport:null,anchor:null,target:null},targetConfig:null,topAnchorTurn:null,registerViewport:r.register,registerContentInset:o.register,registerViewportElement:n=>i("viewport",n),registerAnchorElement:n=>i("anchor",n),registerAnchorTargetElement:(n,a)=>(s.setState({element:{...s.getState().element,target:n},targetConfig:n&&a?a:null}),()=>{s.getState().element.target===n&&s.setState({element:{...s.getState().element,target:null},targetConfig:null})}),setTopAnchorTurn:n=>{s.setState({topAnchorTurn:n})}}));return s};var or=t=>t;var Yd=require("react/jsx-runtime"),$b=t=>{let e=f(11),r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r={optional:!0},e[0]=r):r=e[0];let o=Ge(r),i;e[1]!==t?(i=()=>Jd(t),e[1]=t,e[2]=i):i=e[2];let[s]=j(i),n,a;e[3]!==o||e[4]!==s?(n=()=>o?.getState().onScrollToBottom(u=>{s.getState().scrollToBottom(u)}),a=[o,s],e[3]=o,e[4]=s,e[5]=n,e[6]=a):(n=e[5],a=e[6]),$(n,a);let c,l;return e[7]!==o||e[8]!==s?(c=()=>{if(o)return s.subscribe(u=>{o.getState().isAtBottom!==u.isAtBottom&&or(o).setState({isAtBottom:u.isAtBottom})})},l=[s,o],e[7]=o,e[8]=s,e[9]=c,e[10]=l):(c=e[9],l=e[10]),$(c,l),s},Ar=t=>{let e=f(7),{children:r,options:o}=t,i;e[0]!==o?(i=o===void 0?{}:o,e[0]=o,e[1]=i):i=e[1];let s=$b(i),n;e[2]!==s?(n=()=>({useThreadViewport:s}),e[2]=s,e[3]=n):n=e[3];let[a]=j(n),c;return e[4]!==r||e[5]!==a?(c=(0,Yd.jsx)(aa.Provider,{value:a,children:r}),e[4]=r,e[5]=a,e[6]=c):c=e[6],c};var To=require("react/jsx-runtime"),Lb=()=>{let t=f(3),e=B(),r,o;return t[0]!==e?(r=()=>{typeof process>"u"},o=[e],t[0]=e,t[1]=r,t[2]=o):(r=t[1],o=t[2]),$(r,o),null},Fb=t=>{let e=f(8),{children:r,aui:o,config:i,runtime:s}=t,n=o??null,a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=(0,To.jsx)(Lb,{}),e[0]=a):a=e[0];let c;e[1]!==r?(c=(0,To.jsx)(Ar,{children:r}),e[1]=r,e[2]=c):c=e[2];let l;return e[3]!==i||e[4]!==s||e[5]!==n||e[6]!==c?(l=(0,To.jsxs)(nn,{runtime:s,aui:n,config:i,children:[a,c]}),e[3]=i,e[4]=s,e[5]=n,e[6]=c,e[7]=l):l=e[7],l},la=ee(Fb);var Vb=/:([\w-]{1,64})\[([^\]\n]{1,1024})\](?:\{name=([^}\n]{1,1024})\})?/gu,Co={serialize(t){let e=t.id!==t.label?`{name=${t.id}}`:"";return`:${t.type}[${t.label}]${e}`},parse(t){let e=[],r=0;for(let o of t.matchAll(Vb)){o.index>r&&e.push({kind:"text",text:t.slice(r,o.index)});let i=o[2];e.push({kind:"mention",type:o[1],label:i,id:o[3]??i}),r=o.index+o[0].length}return r<t.length&&e.push({kind:"text",text:t.slice(r)}),e}};var im=Se(require("react"),1),sm=Se(require("react-dom"),1);var Ft={};_s(Ft,{Root:()=>zb,Slot:()=>zb,Slottable:()=>Hb,createSlot:()=>Io,createSlottable:()=>ha});var _e=Se(require("react"),1);var Xd=Se(require("react"),1),jb=Object.defineProperty,da=(t,e)=>jb(t,"name",{value:e,configurable:!0});function ua(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}da(ua,"setRef");function ma(...t){return e=>{let r=!1,o=t.map(i=>{let s=ua(i,e);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let i=0;i<o.length;i++){let s=o[i];typeof s=="function"?s():ua(t[i],null)}}}}da(ma,"composeRefs");function ke(...t){return Xd.useCallback(ma(...t),t)}da(ke,"useComposedRefs");var Ub=Object.defineProperty,at=(t,e)=>Ub(t,"name",{value:e,configurable:!0});function Io(t){let e=_e.forwardRef((r,o)=>{let{children:i,...s}=r,n=null,a=!1,c=[];pa(i)&&typeof rs=="function"&&(i=rs(i._payload)),_e.Children.forEach(i,d=>{if(rm(d)){a=!0;let p=d,h="child"in p.props?p.props.child:p.props.children;pa(h)&&typeof rs=="function"&&(h=rs(h._payload)),n=qb(p,h),c.push(n?.props?.children)}else c.push(d)}),n?n=_e.cloneElement(n,void 0,c):!a&&_e.Children.count(i)===1&&_e.isValidElement(i)&&(n=i);let l=n?tm(n):void 0,u=ke(o,l);if(!n){if(i||i===0)throw new Error(a?Qb(t):Kb(t));return i}let m=em(s,n.props??{});return n.type!==_e.Fragment&&(m.ref=o?u:l),_e.cloneElement(n,m)});return e.displayName=`${t}.Slot`,e}at(Io,"createSlot");var zb=Io("Slot"),Zd=Symbol.for("radix.slottable");function ha(t){let e=at(r=>"child"in r?r.children(r.child):r.children,"Slottable");return e.displayName=`${t}.Slottable`,e.__radixId=Zd,e}at(ha,"createSlottable");var Hb=ha("Slottable"),qb=at((t,e)=>{if("child"in t.props){let r=t.props.child;return _e.isValidElement(r)?_e.cloneElement(r,void 0,t.props.children(r.props.children)):null}return _e.isValidElement(e)?e:null},"getSlottableElementFromSlottable");function em(t,e){let r={...e};for(let o in e){let i=t[o],s=e[o];/^on[A-Z]/.test(o)?i&&s?r[o]=(...a)=>{let c=s(...a);return i(...a),c}:i&&(r[o]=i):o==="style"?r[o]={...i,...s}:o==="className"&&(r[o]=[i,s].filter(Boolean).join(" "))}return{...t,...r}}at(em,"mergeProps");function tm(t){let e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning;return r?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get,r=e&&"isReactWarning"in e&&e.isReactWarning,r?t.props.ref:t.props.ref||t.ref)}at(tm,"getElementRef");function rm(t){return _e.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===Zd}at(rm,"isSlottable");var Gb=Symbol.for("react.lazy");function pa(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===Gb&&"_payload"in t&&om(t._payload)}at(pa,"isLazyComponent");function om(t){return typeof t=="object"&&t!==null&&"then"in t}at(om,"isPromiseLike");var Kb=at(t=>`${t} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Qb=at(t=>`${t} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),rs=_e[" use ".trim().toString()];var nm=require("react/jsx-runtime"),Wb=Object.defineProperty,Jb=(t,e)=>Wb(t,"name",{value:e,configurable:!0}),Yb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],fa=Yb.reduce((t,e)=>{let r=Io(`Primitive.${e}`),o=im.forwardRef((i,s)=>{let{asChild:n,...a}=i,c=n?r:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,nm.jsx)(c,{...a,ref:s})});return o.displayName=`Primitive.${e}`,{...t,[e]:o}},{});function ga(t,e){t&&sm.flushSync(()=>t.dispatchEvent(e))}Jb(ga,"dispatchDiscreteCustomEvent");var Xb=Object.defineProperty,Rr=(t,e)=>Xb(t,"name",{value:e,configurable:!0}),am=!!(typeof window<"u"&&window.document&&window.document.createElement);function W(t,e,{checkForDefaultPrevented:r=!0}={}){return Rr(function(i){if(t?.(i),r===!1||!i||!i.defaultPrevented)return e?.(i)},"handleEvent")}Rr(W,"composeEventHandlers");function Zb(t){if(!am)throw new Error("Cannot access window outside of the DOM");return t?.ownerDocument?.defaultView??window}Rr(Zb,"getOwnerWindow");function va(t){if(!am)throw new Error("Cannot access document outside of the DOM");return t?.ownerDocument??document}Rr(va,"getOwnerDocument");function cm(t,e=!1){let{activeElement:r}=va(t);if(!r?.nodeName)return null;if(lm(r)&&r.contentDocument)return cm(r.contentDocument.body,e);if(e){let o=r.getAttribute("aria-activedescendant");if(o){let i=va(r).getElementById(o);if(i)return i}}return r}Rr(cm,"getActiveElement");function lm(t){return t.tagName==="IFRAME"}Rr(lm,"isFrame");var Pr=Se(require("react"),1),ex=Object.defineProperty,tx=(t,e)=>ex(t,"name",{value:e,configurable:!0});function pt(t){let e=Pr.useRef(t);return Pr.useEffect(()=>{e.current=t}),Pr.useMemo(()=>((...r)=>e.current?.(...r)),[])}tx(pt,"useCallbackRef");var dm=Se(require("react"),1);var rx=Object.defineProperty,um=(t,e)=>rx(t,"name",{value:e,configurable:!0});function os(t,e=globalThis?.document){let r=pt(t);dm.useEffect(()=>{let o=um(i=>{i.key==="Escape"&&r(i)},"handleKeyDown");return e.addEventListener("keydown",o,{capture:!0}),()=>e.removeEventListener("keydown",o,{capture:!0})},[r,e])}um(os,"useEscapeKeydown");var is=fa;is.dispatchDiscreteCustomEvent=ga;is.Root=fa;var mm=Object.defineProperty,ht=(t,e)=>{let r={};for(var o in t)mm(r,o,{get:t[o],enumerable:!0});return e||mm(r,Symbol.toStringTag,{value:"Module"}),r};var ss=require("react/jsx-runtime");var ox=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"];function pm(t,e){return $s(t,void 0,e!==void 0?e:t.props.children)}function kr(t,e,r){return(0,ss.jsx)(Ft.Root,{...r,children:pm(t,e)})}function ix(t){let e=U((r,o)=>{let i=f(17),s,n,a,c;i[0]!==r?({render:a,asChild:s,children:n,...c}=r,i[0]=r,i[1]=s,i[2]=n,i[3]=a,i[4]=c):(s=i[1],n=i[2],a=i[3],c=i[4]);let l=t;if(a&&vt(a)){let d=c,p;i[5]!==n||i[6]!==a?(p=pm(a,n),i[5]=n,i[6]=a,i[7]=p):p=i[7];let h;return i[8]!==o||i[9]!==d||i[10]!==p?(h=(0,ss.jsx)(l,{...d,asChild:!0,ref:o,children:p}),i[8]=o,i[9]=d,i[10]=p,i[11]=h):h=i[11],h}let u=c,m;return i[12]!==s||i[13]!==n||i[14]!==o||i[15]!==u?(m=(0,ss.jsx)(l,{...u,asChild:s,ref:o,children:n}),i[12]=s,i[13]=n,i[14]=o,i[15]=u,i[16]=m):m=i[16],m});return e.displayName=typeof t=="string"?t:t.displayName??t.name??"Component",e}function sx(t){let e=is[t],r=ix(e);return r.displayName=`Primitive.${t}`,r}var K=ox.reduce((t,e)=>(t[e]=sx(e),t),{});var Vt={Hidden:"hidden",Floating:"floating",Normal:"normal"},hm=t=>{let e=f(5),{hideWhenRunning:r,autohide:o,autohideFloat:i,forceVisible:s}=t,n;return e[0]!==o||e[1]!==i||e[2]!==s||e[3]!==r?(n=a=>{if(r&&a.thread.isRunning)return Vt.Hidden;let c=o==="always"||o==="not-last"&&!a.message.isLast,l=s||a.message.isHovering;return c?l?i==="always"||i==="single-branch"&&a.message.branchCount<=1?Vt.Floating:Vt.Normal:Vt.Hidden:Vt.Normal},e[0]=o,e[1]=i,e[2]=s,e[3]=r,e[4]=n):n=e[4],E(n)};var fm=re(null);var ba=require("react/jsx-runtime"),xa=U((t,e)=>{let r=f(18),o,i,s,n;r[0]!==t?({hideWhenRunning:s,autohide:o,autohideFloat:i,...n}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s,r[4]=n):(o=r[1],i=r[2],s=r[3],n=r[4]);let[a,c]=j(0),l;r[5]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{let x=!1;return c(nx),()=>{x||(x=!0,c(ax))}},r[5]=l):l=r[5];let u=l,m;r[6]===Symbol.for("react.memo_cache_sentinel")?(m={acquireInteractionLock:u},r[6]=m):m=r[6];let d=m,p=a>0,h;r[7]!==o||r[8]!==i||r[9]!==s||r[10]!==p?(h={hideWhenRunning:s,autohide:o,autohideFloat:i,forceVisible:p},r[7]=o,r[8]=i,r[9]=s,r[10]=p,r[11]=h):h=r[11];let g=hm(h);if(g===Vt.Hidden)return null;let b;r[12]!==g?(b=g===Vt.Floating?{"data-floating":"true"}:null,r[12]=g,r[13]=b):b=r[13];let y;return r[14]!==e||r[15]!==n||r[16]!==b?(y=(0,ba.jsx)(fm.Provider,{value:d,children:(0,ba.jsx)(K.div,{...b,...n,ref:e})}),r[14]=e,r[15]=n,r[16]=b,r[17]=y):y=r[17],y});xa.displayName="ActionBarPrimitive.Root";function nx(t){return t+1}function ax(t){return Math.max(0,t-1)}var gm=require("react/jsx-runtime");var cx=t=>{let e=f(4),r;e[0]!==t?(r=t===void 0?{}:t,e[0]=t,e[1]=r):r=e[1];let{copiedDuration:o}=r,i=o===void 0?3e3:o,s;e[2]!==i?(s={copiedDuration:i,copyToClipboard:lx},e[2]=i,e[3]=s):s=e[3];let{copy:n,disabled:a}=Xn(s);return a?null:n},wa=U((t,e)=>{let r=f(20),o,i,s,n;r[0]!==t?({copiedDuration:o,onClick:s,disabled:i,...n}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s,r[4]=n):(o=r[1],i=r[2],s=r[3],n=r[4]);let a=E(ux),c;r[5]!==o?(c={copiedDuration:o},r[5]=o,r[6]=c):c=r[6];let l=cx(c),u;r[7]!==a?(u=a?{"data-copied":"true"}:{},r[7]=a,r[8]=u):u=r[8];let m=i||!l,d;r[9]!==l?(d=()=>{l?.()},r[9]=l,r[10]=d):d=r[10];let p;r[11]!==s||r[12]!==d?(p=W(s,d),r[11]=s,r[12]=d,r[13]=p):p=r[13];let h;return r[14]!==e||r[15]!==n||r[16]!==u||r[17]!==m||r[18]!==p?(h=(0,gm.jsx)(K.button,{type:"button",...u,...n,ref:e,disabled:m,onClick:p}),r[14]=e,r[15]=n,r[16]=u,r[17]=m,r[18]=p,r[19]=h):h=r[19],h});wa.displayName="ActionBarPrimitive.Copy";function lx(t){return typeof navigator>"u"||!navigator.clipboard?Promise.reject(new Error("Clipboard API is unavailable")):navigator.clipboard.writeText(t)}function ux(t){return t.message.isCopied}var vm=require("react/jsx-runtime");var ge=(t,e,r=[])=>{let o=U((i,s)=>{let n=f(6),a={},c={};Object.keys(i).forEach(g=>{r.includes(g)?a[g]=i[g]:c[g]=i[g]});let l=e(a)??void 0,u=K,m="button",d=c.disabled||!l,p=W(c.onClick,l),h;return n[0]!==s||n[1]!==c||n[2]!==u.button||n[3]!==d||n[4]!==p?(h=(0,vm.jsx)(u.button,{type:m,...c,ref:s,disabled:d,onClick:p}),n[0]=s,n[1]=c,n[2]=u.button,n[3]=d,n[4]=p,n[5]=h):h=n[5],h});return o.displayName=t,o};var dx=()=>{let{disabled:t,reload:e}=ea();return t?null:e},bm=ge("ActionBarPrimitive.Reload",dx);var mx=()=>{let{disabled:t,edit:e}=Zn();return t?null:e},xm=ge("ActionBarPrimitive.Edit",mx);var px=()=>{let{disabled:t,speak:e}=oa();return t?null:e},wm=ge("ActionBarPrimitive.Speak",px);var ym=require("react/jsx-runtime");var hx=()=>{let{disabled:t,stopSpeaking:e}=ia();return t?null:e},ya=U((t,e)=>{let r=f(10),o=hx(),i=!o,s;r[0]!==o?(s=()=>{o?.()},r[0]=o,r[1]=s):s=r[1];let n;r[2]!==t.onClick||r[3]!==s?(n=W(t.onClick,s),r[2]=t.onClick,r[3]=s,r[4]=n):n=r[4];let a;return r[5]!==t||r[6]!==e||r[7]!==i||r[8]!==n?(a=(0,ym.jsx)(K.button,{type:"button",disabled:i,...t,ref:e,onClick:n}),r[5]=t,r[6]=e,r[7]=i,r[8]=n,r[9]=a):a=r[9],a});ya.displayName="ActionBarPrimitive.StopSpeaking";var _m=require("react/jsx-runtime");var fx=()=>{let{submit:t}=ta();return t},_a=U((t,e)=>{let r=f(17),o,i,s;r[0]!==t?({onClick:i,disabled:o,...s}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s):(o=r[1],i=r[2],s=r[3]);let n=E(gx),a=fx(),c;r[4]!==n?(c=n?{"data-submitted":"true"}:{},r[4]=n,r[5]=c):c=r[5];let l=o||!a,u;r[6]!==a?(u=()=>{a?.()},r[6]=a,r[7]=u):u=r[7];let m;r[8]!==i||r[9]!==u?(m=W(i,u),r[8]=i,r[9]=u,r[10]=m):m=r[10];let d;return r[11]!==e||r[12]!==s||r[13]!==c||r[14]!==l||r[15]!==m?(d=(0,_m.jsx)(K.button,{type:"button",...c,...s,ref:e,disabled:l,onClick:m}),r[11]=e,r[12]=s,r[13]=c,r[14]=l,r[15]=m,r[16]=d):d=r[16],d});_a.displayName="ActionBarPrimitive.FeedbackPositive";function gx(t){return t.message.metadata.submittedFeedback?.type==="positive"}var Sm=require("react/jsx-runtime");var vx=()=>{let{submit:t}=ra();return t},Sa=U((t,e)=>{let r=f(17),o,i,s;r[0]!==t?({onClick:i,disabled:o,...s}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s):(o=r[1],i=r[2],s=r[3]);let n=E(bx),a=vx(),c;r[4]!==n?(c=n?{"data-submitted":"true"}:{},r[4]=n,r[5]=c):c=r[5];let l=o||!a,u;r[6]!==a?(u=()=>{a?.()},r[6]=a,r[7]=u):u=r[7];let m;r[8]!==i||r[9]!==u?(m=W(i,u),r[8]=i,r[9]=u,r[10]=m):m=r[10];let d;return r[11]!==e||r[12]!==s||r[13]!==c||r[14]!==l||r[15]!==m?(d=(0,Sm.jsx)(K.button,{type:"button",...c,...s,ref:e,disabled:l,onClick:m}),r[11]=e,r[12]=s,r[13]=c,r[14]=l,r[15]=m,r[16]=d):d=r[16],d});Sa.displayName="ActionBarPrimitive.FeedbackNegative";function bx(t){return t.message.metadata.submittedFeedback?.type==="negative"}var Tm=require("react/jsx-runtime");var xx=t=>{let e=f(6),r;e[0]!==t?(r=t===void 0?{}:t,e[0]=t,e[1]=r):r=e[1];let{filename:o,onExport:i}=r,s=B(),n=E(yx),a;e[2]!==s.message||e[3]!==o||e[4]!==i?(a=async()=>{let l=s.message.getCopyText();if(!l)return;if(i){await i(l);return}let u=new Blob([l],{type:"text/markdown"}),m=URL.createObjectURL(u),d=document.createElement("a");d.href=m,d.download=o??`message-${Date.now()}.md`,d.click(),setTimeout(()=>URL.revokeObjectURL(m),4e4)},e[2]=s.message,e[3]=o,e[4]=i,e[5]=a):a=e[5];let c=a;return n?c:null},Ta=U((t,e)=>{let r=f(19),o,i,s,n,a;r[0]!==t?({filename:i,onExport:n,onClick:s,disabled:o,...a}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s,r[4]=n,r[5]=a):(o=r[1],i=r[2],s=r[3],n=r[4],a=r[5]);let c;r[6]!==i||r[7]!==n?(c={filename:i,onExport:n},r[6]=i,r[7]=n,r[8]=c):c=r[8];let l=xx(c),u=o||!l,m;r[9]!==l?(m=()=>{l?.().catch(_x)},r[9]=l,r[10]=m):m=r[10];let d;r[11]!==s||r[12]!==m?(d=W(s,m),r[11]=s,r[12]=m,r[13]=d):d=r[13];let p;return r[14]!==e||r[15]!==a||r[16]!==u||r[17]!==d?(p=(0,Tm.jsx)(K.button,{type:"button",...a,ref:e,disabled:u,onClick:d}),r[14]=e,r[15]=a,r[16]=u,r[17]=d,r[18]=p):p=r[18],p});Ta.displayName="ActionBarPrimitive.ExportMarkdown";function wx(t){return t.type==="text"&&t.text.length>0}function yx(t){return(t.message.role!=="assistant"||t.message.status?.type!=="running")&&t.message.parts.some(wx)}function _x(t){console.error("[assistant-ui] markdown export failed:",t)}var ns=ht({Copy:()=>wa,Edit:()=>xm,ExportMarkdown:()=>Ta,FeedbackNegative:()=>Sa,FeedbackPositive:()=>_a,Reload:()=>bm,Root:()=>xa,Speak:()=>wm,StopSpeaking:()=>ya});var Cm=require("react/jsx-runtime"),Im=re(null),Mr=()=>me(Im),Em=t=>{let e=f(8),{children:r}=t,o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=new Map,e[0]=o):o=e[0];let i=F(o),s;e[1]===Symbol.for("react.memo_cache_sentinel")?(s=[],e[1]=s):s=e[1];let n=F(s),a;e[2]===Symbol.for("react.memo_cache_sentinel")?(a=()=>{let b=Array.from(i.current.entries());b.sort(Sx),n.current=b.map(Tx)},e[2]=a):a=e[2];let c=a,l;e[3]===Symbol.for("react.memo_cache_sentinel")?(l=(b,y)=>{let x=y?.priority??0;return i.current.set(b,x),c(),()=>{i.current.delete(b),c()}},e[3]=l):l=e[3];let u=l,m;e[4]===Symbol.for("react.memo_cache_sentinel")?(m=()=>n.current,e[4]=m):m=e[4];let d=m,p;e[5]===Symbol.for("react.memo_cache_sentinel")?(p={register:u,getPlugins:d},e[5]=p):p=e[5];let h=p,g;return e[6]!==r?(g=(0,Cm.jsx)(Im.Provider,{value:h,children:r}),e[6]=r,e[7]=g):g=e[7],g};function Sx(t,e){return e[1]-t[1]}function Tx(t){let[e]=t;return e}var Dr=require("react/jsx-runtime"),Ca=re(null),Mm=re(null),Eo=()=>{let t=me(Ca);if(!t)throw new Error("useTriggerPopoverRootContext must be used within ComposerPrimitive.TriggerPopoverRoot");return t},as=()=>me(Ca),Dm=()=>{let t=me(Mm);if(!t)throw new Error("useTriggerPopoverAriaPublish must be used within ComposerPrimitive.TriggerPopoverRoot");return t},Om=()=>{let t=Eo();return Oe(t.subscribe,t.getTriggers,t.getTriggers)},Cx=new Map,Bm=()=>()=>{},Am=()=>Cx,Nm=()=>{let t=as();return Oe(t?t.subscribe:Bm,t?t.getTriggers:Am,t?t.getTriggers:Am)},Rm=()=>null,$m=()=>{let t=as();return Oe(t?t.subscribeAria:Bm,t?t.getActiveAria:Rm,t?t.getActiveAria:Rm)};function Pm(){let t=f(4),e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=new Set,t[0]=e):e=t[0];let r=F(e),o;t[1]===Symbol.for("react.memo_cache_sentinel")?(o=()=>{for(let c of r.current)c()},t[1]=o):o=t[1];let i=o,s;t[2]===Symbol.for("react.memo_cache_sentinel")?(s=c=>(r.current.add(c),()=>{r.current.delete(c)}),t[2]=s):s=t[2];let n=s,a;return t[3]===Symbol.for("react.memo_cache_sentinel")?(a={notify:i,subscribe:n},t[3]=a):a=t[3],a}var km=t=>{let e=f(21),{children:r}=t,o;e[0]===Symbol.for("react.memo_cache_sentinel")?(o=new Map,e[0]=o):o=e[0];let i=F(o),s;e[1]===Symbol.for("react.memo_cache_sentinel")?(s=new Set,e[1]=s):s=e[1];let n=F(s),{notify:a,subscribe:c}=Pm(),l;e[2]!==a?(l=R=>{let{char:L}=R;if(i.current.has(L))return Ix;let q=new Map(i.current);q.set(L,R),i.current=q,a();for(let X of n.current)X.added(R);return()=>{let X=new Map(i.current);X.delete(L),i.current=X,a();for(let ce of n.current)ce.removed(L)}},e[2]=a,e[3]=l):l=e[3];let u=l,m;e[4]===Symbol.for("react.memo_cache_sentinel")?(m=()=>i.current,e[4]=m):m=e[4];let d=m,p;e[5]===Symbol.for("react.memo_cache_sentinel")?(p=R=>(n.current.add(R),()=>{n.current.delete(R)}),e[5]=p):p=e[5];let h=p,g=F(null),b=F(null),{notify:y,subscribe:x}=Pm(),S;e[6]!==y?(S=(R,L)=>{if(L===null){if(b.current!==R)return;g.current=null,b.current=null,y();return}let q=g.current;b.current===R&&q!==null&&q.popoverId===L.popoverId&&q.highlightedItemId===L.highlightedItemId||(g.current=L,b.current=R,y())},e[6]=y,e[7]=S):S=e[7];let _=S,C;e[8]===Symbol.for("react.memo_cache_sentinel")?(C=()=>g.current,e[8]=C):C=e[8];let P=C,A;e[9]!==u||e[10]!==c||e[11]!==x?(A={register:u,getTriggers:d,subscribe:c,subscribeLifecycle:h,getActiveAria:P,subscribeAria:x},e[9]=u,e[10]=c,e[11]=x,e[12]=A):A=e[12];let w=A,k;e[13]!==_?(k={setActiveAria:_},e[13]=_,e[14]=k):k=e[14];let M=k,O;e[15]!==M||e[16]!==r?(O=(0,Dr.jsx)(Mm.Provider,{value:M,children:r}),e[15]=M,e[16]=r,e[17]=O):O=e[17];let T;return e[18]!==O||e[19]!==w?(T=(0,Dr.jsx)(Ca.Provider,{value:w,children:O}),e[18]=O,e[19]=w,e[20]=T):T=e[20],T},Ia=t=>{let e=f(4),{children:r}=t;if(Mr()){let i;return e[0]!==r?(i=(0,Dr.jsx)(km,{children:r}),e[0]=r,e[1]=i):i=e[1],i}let o;return e[2]!==r?(o=(0,Dr.jsx)(Em,{children:(0,Dr.jsx)(km,{children:r})}),e[2]=r,e[3]=o):o=e[3],o};Ia.displayName="ComposerPrimitive.TriggerPopoverRoot";function Ix(){}var Lm=/\s/u;function Ex(t,e,r,o){if(o===null)return null;let{query:i,offset:s,endOffset:n}=o;return s<0||s+e.length>r||!t.startsWith(e,s)||n<s+e.length||n>t.length?null:{query:i,offset:s,endOffset:n}}function Fm(t,e,r,o){if(o)return Ex(t,e,r,o(t,e,r));let i=t.slice(0,r);for(let s=i.length-1;s>=0;s--){let n=i[s];if(Lm.test(n))return null;if(i.startsWith(e,s)){if(s>0&&!Lm.test(i[s-1]))continue;return{query:i.slice(s+e.length),offset:s,endOffset:r}}}return null}var Ax=t=>{let e=f(8),{text:r,triggerChar:o,matcher:i}=t,[s,n]=j(r.length),a=Math.min(s,r.length),c;e[0]!==i||e[1]!==a||e[2]!==r||e[3]!==o?(c=Fm(r,o,a,i),e[0]=i,e[1]=a,e[2]=r,e[3]=o,e[4]=c):c=e[4];let l=c,u=l?.query??"",m;return e[5]!==u||e[6]!==l?(m={trigger:l,query:u,setCursorPosition:n},e[5]=u,e[6]=l,e[7]=m):m=e[7],m},Vm=z(Ax);function Rx(t){return"type"in t}var Px=t=>{let e=f(22),{navigableList:r,isSearchMode:o,activeCategoryId:i,query:s,popoverId:n,open:a,selectItem:c,selectCategory:l,goBack:u,close:m}=t,[d,p]=j(0),h;e[0]!==i||e[1]!==o||e[2]!==r?(h={navigableList:r,isSearchMode:o,activeCategoryId:i},e[0]=i,e[1]=o,e[2]=r,e[3]=h):h=e[3];let[g,b]=j(h);(g.navigableList!==r||g.isSearchMode!==o||g.activeCategoryId!==i)&&(b({navigableList:r,isSearchMode:o,activeCategoryId:i}),p(0));let y;e[4]!==d||e[5]!==r.length?(y=w=>{w<0||w>=r.length||w!==d&&p(w)},e[4]=d,e[5]=r.length,e[6]=y):y=e[6];let x=be(y),S;e[7]!==i||e[8]!==m||e[9]!==u||e[10]!==d||e[11]!==r||e[12]!==a||e[13]!==s||e[14]!==l||e[15]!==c?(S=w=>{if(!a)return!1;switch(w.key){case"ArrowDown":return w.preventDefault(),p(k=>{let M=r.length;return M===0?0:k<M-1?k+1:0}),!0;case"ArrowUp":return w.preventDefault(),p(k=>{let M=r.length;return M===0?0:k>0?k-1:M-1}),!0;case"Enter":case"Tab":{if(w.shiftKey)return!1;w.preventDefault();let k=r[d];return k&&(Rx(k)?c(k):l(k.id)),!0}case"Escape":return w.preventDefault(),m(),!0;case"Backspace":return i&&s===""?(w.preventDefault(),u(),!0):!1;default:return!1}},e[7]=i,e[8]=m,e[9]=u,e[10]=d,e[11]=r,e[12]=a,e[13]=s,e[14]=l,e[15]=c,e[16]=S):S=e[16];let _=be(S),C=r[d],P=a&&C?`${n}-option-${C.id}`:void 0,A;return e[17]!==_||e[18]!==x||e[19]!==d||e[20]!==P?(A={highlightedIndex:d,highlightedItemId:P,highlightIndex:x,handleKeyDown:_},e[17]=_,e[18]=x,e[19]=d,e[20]=P,e[21]=A):A=e[21],A},jm=z(Px);function Ea(t,e){return e?t.id.toLowerCase().includes(e)||t.label.toLowerCase().includes(e)||(t.description?.toLowerCase().includes(e)??!1):!0}var kx=t=>{let e=f(35),{adapter:r,query:o,open:i}=t,[s,n]=j(null),[a,c]=j(i);a!==i&&(c(i),i||n(null));let l;e:{if(!i||!r){let R;e[0]===Symbol.for("react.memo_cache_sentinel")?(R=[],e[0]=R):R=e[0],l=R;break e}let T;e[1]!==r?(T=r.categories(),e[1]=r,e[2]=T):T=e[2],l=T}let u=l,m=i?s:null,d;e:{if(!m||!r){let R;e[3]===Symbol.for("react.memo_cache_sentinel")?(R=[],e[3]=R):R=e[3],d=R;break e}let T;e[4]!==r||e[5]!==m?(T=r.categoryItems(m),e[4]=r,e[5]=m,e[6]=T):T=e[6],d=T}let p=d,h;e:{if(!i||!r||m){h=null;break e}if(!o&&u.length>0){h=null;break e}if(r.search){let R;e[7]!==r||e[8]!==o?(R=r.search(o),e[7]=r,e[8]=o,e[9]=R):R=e[9],h=R;break e}let T;if(e[10]!==r||e[11]!==u||e[12]!==o){T=[];let R=o.toLowerCase();for(let L of u)for(let q of r.categoryItems(L.id))Ea(q,R)&&T.push(q);e[10]=r,e[11]=u,e[12]=o,e[13]=T}else T=e[13];h=T}let g=h,b=g!==null,y;e:{if(b){let R;e[14]===Symbol.for("react.memo_cache_sentinel")?(R=[],e[14]=R):R=e[14],y=R;break e}if(!o){y=u;break e}let T;if(e[15]!==u||e[16]!==o){let R=o.toLowerCase();T=u.filter(L=>L.label.toLowerCase().includes(R)),e[15]=u,e[16]=o,e[17]=T}else T=e[17];y=T}let x=y,S;e:{if(b){let R;e[18]!==g?(R=g??[],e[18]=g,e[19]=R):R=e[19],S=R;break e}if(!o){S=p;break e}let T;if(e[20]!==p||e[21]!==o){let R=o.toLowerCase();T=p.filter(L=>Ea(L,R)),e[20]=p,e[21]=o,e[22]=T}else T=e[22];S=T}let _=S,C;e:{if(b){let T;e[23]!==g?(T=g??[],e[23]=g,e[24]=T):T=e[24],C=T;break e}if(m){C=_;break e}C=x}let P=C,A;e[25]===Symbol.for("react.memo_cache_sentinel")?(A=T=>{n(T)},e[25]=A):A=e[25];let w=be(A),k;e[26]===Symbol.for("react.memo_cache_sentinel")?(k=()=>{n(null)},e[26]=k):k=e[26];let M=be(k),O;return e[27]!==m||e[28]!==x||e[29]!==_||e[30]!==M||e[31]!==b||e[32]!==P||e[33]!==w?(O={categories:x,items:_,isSearchMode:b,activeCategoryId:m,navigableList:P,selectCategory:w,goBack:M},e[27]=m,e[28]=x,e[29]=_,e[30]=M,e[31]=b,e[32]=P,e[33]=w,e[34]=O):O=e[34],O},Um=z(kx);var Mx=t=>{let e=f(15),{behavior:r,trigger:o,aui:i,setCursorPosition:s,onSelected:n}=t,a=F(null),c;e[0]===Symbol.for("react.memo_cache_sentinel")?(c=g=>(a.current=g,()=>{a.current===g&&(a.current=null)}),e[0]=c):c=e[0];let l=be(c),u;e[1]!==i||e[2]!==r||e[3]!==n||e[4]!==s||e[5]!==o?(u=g=>{if(!o||!r)return;if(a.current?.(g)){n();return}let b=i.composer.getState().text,y=b.slice(0,o.offset),x=b.slice(o.endOffset),S=()=>{let _=r.formatter.serialize(g);i.composer.setText(y+_+(x.startsWith(" ")?x:` ${x}`)),s(y.length+_.length+1)};r.kind==="directive"?(S(),r.onInserted?.(g)):(r.removeOnExecute?(i.composer.setText(y+(x.startsWith(" ")?x.slice(1):x)),s(y.length)):S(),r.onExecute(g)),n()},e[1]=i,e[2]=r,e[3]=n,e[4]=s,e[5]=o,e[6]=u):u=e[6];let m=be(u),d;e[7]!==n||e[8]!==s||e[9]!==o?(d=()=>{n(),o&&s(o.offset)},e[7]=n,e[8]=s,e[9]=o,e[10]=d):d=e[10];let p=be(d),h;return e[11]!==p||e[12]!==l||e[13]!==m?(h={selectItem:m,close:p,registerSelectItemOverride:l},e[11]=p,e[12]=l,e[13]=m,e[14]=h):h=e[14],h},zm=z(Mx);var Dx=t=>{let e=f(47),{adapter:r,text:o,triggerChar:i,matcher:s,behavior:n,aui:a,popoverId:c,isLoading:l}=t,u;e[0]!==s||e[1]!==o||e[2]!==i?(u=Vm({text:o,triggerChar:i,matcher:s}),e[0]=s,e[1]=o,e[2]=i,e[3]=u):u=e[3];let m=ue(u),d=m.trigger!==null&&r!==void 0&&n!==void 0,p;e[4]!==r||e[5]!==m.query||e[6]!==d?(p=Um({adapter:r,query:m.query,open:d}),e[4]=r,e[5]=m.query,e[6]=d,e[7]=p):p=e[7];let h=ue(p),g;e[8]!==h?(g=()=>{h.goBack()},e[8]=h,e[9]=g):g=e[9];let b=be(g),y;e[10]!==a||e[11]!==n||e[12]!==m.setCursorPosition||e[13]!==m.trigger||e[14]!==b||e[15]!==i?(y=zm({behavior:n,trigger:m.trigger,aui:a,triggerChar:i,setCursorPosition:m.setCursorPosition,onSelected:b}),e[10]=a,e[11]=n,e[12]=m.setCursorPosition,e[13]=m.trigger,e[14]=b,e[15]=i,e[16]=y):y=e[16];let x=ue(y),S;e[17]!==m.query||e[18]!==h.activeCategoryId||e[19]!==h.goBack||e[20]!==h.isSearchMode||e[21]!==h.navigableList||e[22]!==h.selectCategory||e[23]!==d||e[24]!==c||e[25]!==x.close||e[26]!==x.selectItem?(S=jm({navigableList:h.navigableList,isSearchMode:h.isSearchMode,activeCategoryId:h.activeCategoryId,query:m.query,popoverId:c,open:d,selectItem:x.selectItem,selectCategory:h.selectCategory,goBack:h.goBack,close:x.close}),e[17]=m.query,e[18]=h.activeCategoryId,e[19]=h.goBack,e[20]=h.isSearchMode,e[21]=h.navigableList,e[22]=h.selectCategory,e[23]=d,e[24]=c,e[25]=x.close,e[26]=x.selectItem,e[27]=S):S=e[27];let _=ue(S),C;return e[28]!==m.query||e[29]!==m.setCursorPosition||e[30]!==l||e[31]!==_.handleKeyDown||e[32]!==_.highlightIndex||e[33]!==_.highlightedIndex||e[34]!==_.highlightedItemId||e[35]!==h.activeCategoryId||e[36]!==h.categories||e[37]!==h.goBack||e[38]!==h.isSearchMode||e[39]!==h.items||e[40]!==h.selectCategory||e[41]!==d||e[42]!==c||e[43]!==x.close||e[44]!==x.registerSelectItemOverride||e[45]!==x.selectItem?(C={open:d,query:m.query,activeCategoryId:h.activeCategoryId,categories:h.categories,items:h.items,highlightedIndex:_.highlightedIndex,isSearchMode:h.isSearchMode,isLoading:l,popoverId:c,highlightedItemId:_.highlightedItemId,selectCategory:h.selectCategory,goBack:h.goBack,selectItem:x.selectItem,close:x.close,highlightIndex:_.highlightIndex,handleKeyDown:_.handleKeyDown,setCursorPosition:m.setCursorPosition,registerSelectItemOverride:x.registerSelectItemOverride},e[28]=m.query,e[29]=m.setCursorPosition,e[30]=l,e[31]=_.handleKeyDown,e[32]=_.highlightIndex,e[33]=_.highlightedIndex,e[34]=_.highlightedItemId,e[35]=h.activeCategoryId,e[36]=h.categories,e[37]=h.goBack,e[38]=h.isSearchMode,e[39]=h.items,e[40]=h.selectCategory,e[41]=d,e[42]=c,e[43]=x.close,e[44]=x.registerSelectItemOverride,e[45]=x.selectItem,e[46]=C):C=e[46],C},Hm=z(Dx);var cs=require("react/jsx-runtime");var Aa=re(null),ct=()=>{let t=me(Aa);if(!t)throw new Error("useTriggerPopoverScopeContext must be used within ComposerPrimitive.TriggerPopover");return t},Ra=()=>me(Aa),qm=re(null),ls=()=>{let t=me(qm);if(!t)throw new Error("TriggerPopover.Directive / TriggerPopover.Action must be rendered inside ComposerPrimitive.TriggerPopover");return t},Pa=U((t,e)=>{let r=f(69),o,i,s,n,a,c,l;r[0]!==t?({char:s,matcher:a,adapter:o,isLoading:l,"aria-label":i,children:n,...c}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s,r[4]=n,r[5]=a,r[6]=c,r[7]=l):(o=r[1],i=r[2],s=r[3],n=r[4],a=r[5],c=r[6],l=r[7]);let u=l===void 0?!1:l,m=B(),d=E(Ox),p=Ds(),h=F(a),g;r[8]!==a?(g=()=>{h.current=a},r[8]=a,r[9]=g):g=r[9],$(g);let b;r[10]===Symbol.for("react.memo_cache_sentinel")?(b=()=>(Or,eh,th)=>h.current(Or,eh,th),r[10]=b):b=r[10];let[y]=j(b),x=a!==void 0,S=F(null),[_,C]=j(null),P=F(0),A;r[11]!==s?(A=Or=>(P.current=P.current+1,S.current=Or,C(Or),()=>{P.current=Math.max(0,P.current-1),S.current===Or&&(S.current=null,C(null))}),r[11]=s,r[12]=A):A=r[12];let w=A,k;r[13]!==w?(k={register:w},r[13]=w,r[14]=k):k=r[14];let M=k,O=_??void 0,T;r[15]!==o||r[16]!==m||r[17]!==s||r[18]!==u||r[19]!==a||r[20]!==p||r[21]!==O||r[22]!==d?(T=Hm({adapter:o,text:d,triggerChar:s,matcher:a,behavior:O,aui:m,popoverId:p,isLoading:u}),r[15]=o,r[16]=m,r[17]=s,r[18]=u,r[19]=a,r[20]=p,r[21]=O,r[22]=d,r[23]=T):T=r[23];let R=ue(T),L;r[24]!==R?(L=()=>R,r[24]=R,r[25]=L):L=r[25];let q=be(L),X=Eo(),ce;r[26]!==_||r[27]!==s||r[28]!==q||r[29]!==x||r[30]!==y||r[31]!==X?(ce=()=>X.register({char:s,...x?{matcher:y}:{},..._?{behavior:_}:{},resource:q()}),r[26]=_,r[27]=s,r[28]=q,r[29]=x,r[30]=y,r[31]=X,r[32]=ce):ce=r[32];let oe;r[33]!==_||r[34]!==s||r[35]!==x||r[36]!==X?(oe=[X,s,x,_],r[33]=_,r[34]=s,r[35]=x,r[36]=X,r[37]=oe):oe=r[37],$(ce,oe);let le=Mr(),he;r[38]!==q||r[39]!==le?(he=()=>{if(le)return le.register(q())},r[38]=q,r[39]=le,r[40]=he):he=r[40];let xe;r[41]!==le?(xe=[le],r[41]=le,r[42]=xe):xe=r[42],$(he,xe);let D=_!==null&&R.open,V=Dm(),J,te;r[43]!==V||r[44]!==s||r[45]!==D?(J=()=>{if(D)return()=>{V.setActiveAria(s,null)}},te=[V,s,D],r[43]=V,r[44]=s,r[45]=D,r[46]=J,r[47]=te):(J=r[46],te=r[47]),$(J,te);let Q,Fe;r[48]!==V||r[49]!==s||r[50]!==D||r[51]!==p||r[52]!==R.highlightedItemId?(Q=()=>{D&&V.setActiveAria(s,{popoverId:p,highlightedItemId:R.highlightedItemId})},Fe=[V,s,p,D,R.highlightedItemId],r[48]=V,r[49]=s,r[50]=D,r[51]=p,r[52]=R.highlightedItemId,r[53]=Q,r[54]=Fe):(Q=r[53],Fe=r[54]),$(Q,Fe);let Ve;r[55]!==i||r[56]!==n||r[57]!==e||r[58]!==D||r[59]!==p||r[60]!==c||r[61]!==R.highlightedItemId?(Ve=D?(0,cs.jsx)(K.div,{role:"listbox",id:p,"aria-label":i??"Suggestions","aria-activedescendant":R.highlightedItemId,"data-state":"open",...c,ref:e,children:n}):n,r[55]=i,r[56]=n,r[57]=e,r[58]=D,r[59]=p,r[60]=c,r[61]=R.highlightedItemId,r[62]=Ve):Ve=r[62];let cr;r[63]!==R||r[64]!==Ve?(cr=(0,cs.jsx)(Aa.Provider,{value:R,children:Ve}),r[63]=R,r[64]=Ve,r[65]=cr):cr=r[65];let Mo;return r[66]!==M||r[67]!==cr?(Mo=(0,cs.jsx)(qm.Provider,{value:M,children:cr}),r[66]=M,r[67]=cr,r[68]=Mo):Mo=r[68],Mo});Pa.displayName="ComposerPrimitive.TriggerPopover";function Ox(t){return t.composer.text}var ka=()=>{let t=f(2),{disabled:e,send:r}=Qn(),o;t[0]!==r?(o=()=>r(),t[0]=r,t[1]=o):o=t[1];let i=o;return e?null:i},Gm=ge("ComposerPrimitive.Send",ka);var Ma=re(null),Km=()=>me(Ma);var Da=require("react/jsx-runtime");var Qm="[contenteditable]:not([contenteditable='false'])",Bx=`textarea:not(:disabled), ${Qm}`,Nx=["a","audio[controls]","button","details","embed","iframe","input","label","select","summary","textarea","video[controls]",Qm,"[tabindex]"].join(", "),Oa=U((t,e)=>{let r=f(24),o,i,s,n;r[0]!==t?({onSubmit:s,onMouseDown:i,compact:o,...n}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s,r[4]=n):(o=r[1],i=r[2],s=r[3],n=r[4]);let a=ka(),[c,l]=j(!1),u;r[5]===Symbol.for("react.memo_cache_sentinel")?(u={setMultiline:l},r[5]=u):u=r[5];let m=u,d;r[6]!==o?(d=A=>o?A.composer.attachments.length===0&&A.composer.quote==null&&A.composer.queue.length===0&&A.composer.dictation==null&&!A.composer.text.includes(`
`):!1,r[6]=o,r[7]=d):d=r[7];let p=E(d)&&!c,h;r[8]!==a?(h=A=>{A.preventDefault(),a&&a()},r[8]=a,r[9]=h):h=r[9];let g=h,b=$x,y=o?m:null,x=p?"":void 0,S;r[10]!==g||r[11]!==s?(S=W(s,g),r[10]=g,r[11]=s,r[12]=S):S=r[12];let _;r[13]!==i?(_=W(i,b),r[13]=i,r[14]=_):_=r[14];let C;r[15]!==e||r[16]!==n||r[17]!==x||r[18]!==S||r[19]!==_?(C=(0,Da.jsx)(K.form,{...n,"data-compact":x,ref:e,onSubmit:S,onMouseDown:_}),r[15]=e,r[16]=n,r[17]=x,r[18]=S,r[19]=_,r[20]=C):C=r[20];let P;return r[21]!==y||r[22]!==C?(P=(0,Da.jsx)(Ma.Provider,{value:y,children:C}),r[21]=y,r[22]=C,r[23]=P):P=r[23],P});Oa.displayName="ComposerPrimitive.Root";function $x(t){if(t.button!==0)return;let e=t.target;if(!(e instanceof Element)||!t.currentTarget.contains(e))return;let r=e.closest(Nx);if(r&&t.currentTarget.contains(r))return;let o=t.currentTarget.querySelector(Bx);o&&(t.preventDefault(),o.focus())}var us=t=>{let e=f(4),r=pt(t),o=qe(Lx),i,s;e[0]!==r||e[1]!==o?(i=()=>o(r),s=[o,r],e[0]=r,e[1]=o,e[2]=i,e[3]=s):(i=e[2],s=e[3]),$(i,s)};function Lx(t){return t.onScrollToBottom}var Fx=()=>!1,Vx=()=>{},ds=t=>{let e=f(4),r;e[0]!==t?(r=s=>{if(typeof window>"u"||t===null||!window.matchMedia)return Vx;let n=window.matchMedia(t);return n.addEventListener("change",s),()=>n.removeEventListener("change",s)},e[0]=t,e[1]=r):r=e[1];let o=r,i;return e[2]!==t?(i=()=>typeof window>"u"||t===null||!window.matchMedia?!1:window.matchMedia(t).matches,e[2]=t,e[3]=i):i=e[3],Oe(o,i,Fx)};function Wm(){return E(jx)}function jx(t){return t.composer.isEditing?t.composer.text:""}function Jm(t){return!!E(Ux)||!!t}function Ux(t){return t.thread.isDisabled||t.composer.dictation?.inputDisabled}function Ym(){let t=f(4),e=$m();if(!e){let o;return t[0]===Symbol.for("react.memo_cache_sentinel")?(o={},t[0]=o):o=t[0],o}let r;return t[1]!==e.highlightedItemId||t[2]!==e.popoverId?(r={"aria-controls":e.popoverId,"aria-expanded":!0,"aria-haspopup":"listbox","aria-activedescendant":e.highlightedItemId},t[1]=e.highlightedItemId,t[2]=e.popoverId,t[3]=r):r=t[3],r}var up=require("react/jsx-runtime");function ms(){return ms=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)({}).hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},ms.apply(null,arguments)}function Xm(t,e){if(t==null)return{};var r={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(e.indexOf(o)!==-1)continue;r[o]=t[o]}return r}var lt=Se(require("react"));var tp=Se(require("react"));var Zm=require("react"),ep=Zm.useLayoutEffect;var rp=function(e){var r=tp.default.useRef(e);return ep(function(){r.current=e}),r};var Ba=Se(require("react")),op=function(e,r){if(typeof e=="function"){e(r);return}e.current=r},ip=function(e,r){var o=Ba.default.useRef();return Ba.default.useCallback(function(i){e.current=i,o.current&&op(o.current,null),o.current=r,r&&op(r,i)},[r])};var sp={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},zx=function(e){Object.keys(sp).forEach(function(r){e.style.setProperty(r,sp[r],"important")})},np=zx,Me=null,ap=function(e,r){var o=e.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?o+r.borderSize:o-r.paddingSize};function Hx(t,e,r,o){r===void 0&&(r=1),o===void 0&&(o=1/0),Me||(Me=document.createElement("textarea"),Me.setAttribute("tabindex","-1"),Me.setAttribute("aria-hidden","true"),np(Me)),Me.parentNode===null&&document.body.appendChild(Me);var i=t.paddingSize,s=t.borderSize,n=t.sizingStyle,a=n.boxSizing;Object.keys(n).forEach(function(d){var p=d;Me.style[p]=n[p]}),np(Me),Me.value=e;var c=ap(Me,t);Me.value=e,c=ap(Me,t),Me.value="x";var l=Me.scrollHeight-i,u=l*r;a==="border-box"&&(u=u+i+s),c=Math.max(u,c);var m=l*o;return a==="border-box"&&(m=m+i+s),c=Math.min(m,c),[c,l]}var cp=function(){},qx=function(e,r){return e.reduce(function(o,i){return o[i]=r[i],o},{})},Gx=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak","wordSpacing","scrollbarGutter"],Kx=!!document.documentElement.currentStyle,Qx=function(e){var r=window.getComputedStyle(e);if(r===null)return null;var o=qx(Gx,r),i=o.boxSizing;if(i==="")return null;Kx&&i==="border-box"&&(o.width=parseFloat(o.width)+parseFloat(o.borderRightWidth)+parseFloat(o.borderLeftWidth)+parseFloat(o.paddingRight)+parseFloat(o.paddingLeft)+"px");var s=parseFloat(o.paddingBottom)+parseFloat(o.paddingTop),n=parseFloat(o.borderBottomWidth)+parseFloat(o.borderTopWidth);return{sizingStyle:o,paddingSize:s,borderSize:n}},Wx=Qx;function Na(t,e,r){var o=rp(r);lt.useLayoutEffect(function(){var i=function(n){return o.current(n)};if(t)return t.addEventListener(e,i),function(){return t.removeEventListener(e,i)}},[])}var Jx=function(e,r){Na(document.body,"reset",function(o){e.current.form===o.target&&r(o)})},Yx=function(e){Na(window,"resize",e)},Xx=function(e){Na(document.fonts,"loadingdone",e)},Zx=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],ew=function(e,r){var o=e.cacheMeasurements,i=e.maxRows,s=e.minRows,n=e.onChange,a=n===void 0?cp:n,c=e.onHeightChange,l=c===void 0?cp:c,u=Xm(e,Zx),m=u.value!==void 0,d=lt.useRef(null),p=ip(d,r),h=lt.useRef(0),g=lt.useRef(),b=function(){var S=d.current,_=o&&g.current?g.current:Wx(S);if(_){g.current=_;var C=Hx(_,S.value||S.placeholder||"x",s,i),P=C[0],A=C[1];h.current!==P&&(h.current=P,S.style.setProperty("height",P+"px","important"),l(P,{rowHeight:A}))}},y=function(S){m||b(),a(S)};return lt.useLayoutEffect(b),Jx(d,function(){if(!m){var x=d.current.value;requestAnimationFrame(function(){var S=d.current;S&&x!==S.value&&b()})}}),Yx(b),Xx(b),lt.createElement("textarea",ms({},u,{onChange:y,ref:p}))},lp=lt.forwardRef(ew);var tw="(pointer: coarse) and (not (any-pointer: fine))",$a=U(({autoFocus:t=!1,asChild:e,render:r,disabled:o,onChange:i,onKeyDown:s,onPaste:n,onSelect:a,submitOnEnter:c,submitMode:l,cancelOnEscape:u=!0,unstable_focusOnRunStart:m=!0,unstable_focusOnScrollToBottom:d=!0,unstable_focusOnThreadSwitched:p=!0,unstable_insertNewlineOnTouchEnter:h=!1,addAttachmentOnPaste:g=!0,onHeightChange:b,...y},x)=>{let S=B(),_=Mr(),C=Km(),P=l??(c===!1?"none":"enter"),A=ds(h?tw:null),w=h&&A&&P==="enter"?"none":P,k=Wm(),M=Jm(o),O=F(null),T=ke(x,O),R=F(!1);os(D=>{if(!O.current?.contains(D.target)||D.isComposing)return;if(_){for(let J of _.getPlugins())if(J.handleKeyDown(D))return}if(!u)return;let V=S.composer;V.getState().canCancel&&(V.cancel(),D.preventDefault())});let L=D=>{if(!M&&!D.nativeEvent.isComposing){if(_){for(let V of _.getPlugins())if(V.handleKeyDown(D))return}if(D.key==="Enter"){let V=S.thread.getState(),J=V.capabilities.queue;if(D.shiftKey&&(D.ctrlKey||D.metaKey)&&J&&P!=="none"&&S.composer.getState().canSend){D.preventDefault(),S.composer.send({steer:!0});return}if(D.shiftKey||V.isRunning&&!J)return;let te=!1;w==="ctrlEnter"?te=D.ctrlKey||D.metaKey:w==="enter"&&(te=!0),te&&(D.preventDefault(),O.current?.closest("form")?.requestSubmit())}}},q=async D=>{if(!g)return;let V=S.thread.getState().capabilities,J=Array.from(D.clipboardData?.files||[]);V.attachments&&J.length>0&&(D.preventDefault(),await Promise.all(J.map(async te=>{try{await S.composer.addAttachment(te)}catch{}})))},X=(D,V)=>{if(b?.(D,V),!C)return;let J=O.current;if(!J||J.value==="")return;let te=getComputedStyle(J),Q=te.boxSizing==="border-box"?D-parseFloat(te.paddingTop)-parseFloat(te.paddingBottom)-parseFloat(te.borderTopWidth)-parseFloat(te.borderBottomWidth):D;Math.round(Q/V.rowHeight)>1&&C.setMultiline(!0)},ce=t&&!M,oe=Ee(()=>{let D=O.current;!D||!ce||(D.focus({preventScroll:!0}),D.setSelectionRange(D.value.length,D.value.length))},[ce]);$(()=>oe(),[oe]),us(()=>{S.composer.getState().type==="thread"&&d&&oe()}),$(()=>{if(!(S.composer.getState().type!=="thread"||!m))return S.on("thread.runStart",oe)},[m,oe,S]),$(()=>{if(!(S.composer.getState().type!=="thread"||!p))return S.on("threads.selectionChanged",oe)},[p,oe,S]),$(()=>{k===""&&C?.setMultiline(!1)},[k,C]);let le=Ym(),he={name:"input",value:k,...y,...le,ref:T,disabled:M,onChange:W(i,D=>{if(!S.composer.getState().isEditing)return;let V=D.nativeEvent.isComposing===!0;R.current&&!V&&(R.current=!1);let J=V||R.current;if(vr(()=>{S.composer.setText(D.target.value)}),J)return;let te=D.target.selectionStart??D.target.value.length;if(_)for(let Q of _.getPlugins())Q.setCursorPosition(te)}),onKeyDown:W(s,L),onCompositionStart:W(y.onCompositionStart,()=>{R.current=!0}),onCompositionEnd:W(y.onCompositionEnd,D=>{if(R.current=!1,!S.composer.getState().isEditing)return;let V=D.target;vr(()=>{S.composer.setText(V.value)});let J=V.selectionStart??V.value.length;if(_)for(let te of _.getPlugins())te.setCursorPosition(J)}),onSelect:W(a,D=>{if(R.current)return;let V=D.target,J=V.selectionStart??V.value.length;if(_)for(let te of _.getPlugins())te.setCursorPosition(J)}),onPaste:W(n,q),...C?{onHeightChange:X}:b!==void 0?{onHeightChange:b}:{}};if(r&&vt(r))return kr(r,y.children,he);let xe=e?Ft.Root:lp;return(0,up.jsx)(xe,{...he})});$a.displayName="ComposerPrimitive.Input";var rw=()=>{let{disabled:t,cancel:e}=Wn();return t?null:e},dp=ge("ComposerPrimitive.Cancel",rw);var ow=t=>{let e=f(6),r;e[0]!==t?(r=t===void 0?{}:t,e[0]=t,e[1]=r):r=e[1];let{multiple:o}=r,i=o===void 0?!0:o,{disabled:s,addAttachment:n}=Yn(),a=B(),c;e[2]!==n||e[3]!==a.composer||e[4]!==i?(c=()=>{let u=document.createElement("input");u.type="file",u.multiple=i,u.hidden=!0;let m=a.composer.getState().attachmentAccept;m!=="*"&&(u.accept=m),document.body.appendChild(u),u.onchange=async d=>{let p=d.target.files;if(!p)return;let h=Array.from(p,async g=>{try{await n(g)}catch{}});document.body.removeChild(u),await Promise.all(h)},u.oncancel=()=>{(!u.files||u.files.length===0)&&document.body.removeChild(u)},u.click()},e[2]=n,e[3]=a.composer,e[4]=i,e[5]=c):c=e[5];let l=c;return s?null:l},mp=ge("ComposerPrimitive.AddAttachment",ow,["multiple"]);var pp=require("react/jsx-runtime");var La=U(({disabled:t,asChild:e=!1,render:r,children:o,...i},s)=>{let[n,a]=j(!1),c=B(),l=Ee(g=>{if(!t&&g.dataTransfer.types.includes("Files")){if(g.preventDefault(),!c.thread.getState().capabilities.attachments){g.dataTransfer.dropEffect="none";return}a(!0)}},[t,c]),u=Ee(g=>{if(!t&&g.dataTransfer.types.includes("Files")){if(g.preventDefault(),!c.thread.getState().capabilities.attachments){g.dataTransfer.dropEffect="none";return}n||a(!0)}},[t,n,c]),m=Ee(g=>{if(t)return;g.preventDefault();let b=g.relatedTarget;b&&g.currentTarget.contains(b)||a(!1)},[t]),d=Ee(async g=>{if(t||(a(!1),!g.dataTransfer.types.includes("Files")))return;g.preventDefault();let b=Array.from(g.dataTransfer.files);!c.thread.getState().capabilities.attachments||b.length===0||await Promise.all(b.map(async y=>{try{await c.composer.addAttachment(y)}catch{}}))},[t,c]),p={...n?{"data-dragging":"true"}:null,...i,onDragEnterCapture:W(i.onDragEnterCapture,l),onDragOverCapture:W(i.onDragOverCapture,u),onDragLeaveCapture:W(i.onDragLeaveCapture,m),onDropCapture:W(i.onDropCapture,d),ref:s};if(r&&vt(r))return kr(r,o,p);let h=e?Ft.Root:"div";return(0,pp.jsx)(h,{...p,children:o})});La.displayName="ComposerPrimitive.AttachmentDropzone";var iw=()=>{let{disabled:t,startDictation:e}=Jn();return t?null:e},hp=ge("ComposerPrimitive.Dictate",iw);var sw=()=>{let t=f(2),e=B(),r=E(nw),o;t[0]!==e.composer?(o=()=>{e.composer.stopDictation()},t[0]=e.composer,t[1]=o):o=t[1];let i=o;return r?i:null},fp=ge("ComposerPrimitive.StopDictation",sw);function nw(t){return t.composer.dictation!=null}var gp=require("react/jsx-runtime"),Fa=U((t,e)=>{let r=f(7),o,i;r[0]!==t?({children:o,...i}=t,r[0]=t,r[1]=o,r[2]=i):(o=r[1],i=r[2]);let s=E(aw);if(!s)return null;let n=o??s,a;return r[3]!==e||r[4]!==i||r[5]!==n?(a=(0,gp.jsx)(K.span,{...i,ref:e,children:n}),r[3]=e,r[4]=i,r[5]=n,r[6]=a):a=r[6],a});Fa.displayName="ComposerPrimitive.DictationTranscript";function aw(t){return t.composer.dictation?.transcript}var ps=require("react/jsx-runtime");var Va=U((t,e)=>{let r=f(3);if(!E(cw))return null;let o;return r[0]!==e||r[1]!==t?(o=(0,ps.jsx)(K.div,{...t,ref:e}),r[0]=e,r[1]=t,r[2]=o):o=r[2],o});Va.displayName="ComposerPrimitive.Quote";var ja=U((t,e)=>{let r=f(7),o,i;r[0]!==t?({children:o,...i}=t,r[0]=t,r[1]=o,r[2]=i):(o=r[1],i=r[2]);let s=E(lw);if(!s)return null;let n=o??s,a;return r[3]!==e||r[4]!==i||r[5]!==n?(a=(0,ps.jsx)(K.span,{...i,ref:e,children:n}),r[3]=e,r[4]=i,r[5]=n,r[6]=a):a=r[6],a});ja.displayName="ComposerPrimitive.QuoteText";var Ua=U((t,e)=>{let r=f(12),o,i;r[0]!==t?({onClick:o,...i}=t,r[0]=t,r[1]=o,r[2]=i):(o=r[1],i=r[2]);let s=B(),n;r[3]!==s?(n=()=>{s.composer.setQuote(void 0)},r[3]=s,r[4]=n):n=r[4];let a=n,c;r[5]!==a||r[6]!==o?(c=W(o,a),r[5]=a,r[6]=o,r[7]=c):c=r[7];let l;return r[8]!==e||r[9]!==i||r[10]!==c?(l=(0,ps.jsx)(K.button,{type:"button",...i,ref:e,onClick:c}),r[8]=e,r[9]=i,r[10]=c,r[11]=l):l=r[11],l});Ua.displayName="ComposerPrimitive.QuoteDismiss";function cw(t){return t.composer.quote}function lw(t){return t.composer.quote?.text}var za=require("react/jsx-runtime");var Ha=U((t,e)=>{let r=f(12),o,i,s;r[0]!==t?({children:i,"aria-label":o,...s}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s):(o=r[1],i=r[2],s=r[3]);let{categories:n,activeCategoryId:a,isSearchMode:c,open:l}=ct();if(!l||a||c)return null;let u=o??"Categories",m;r[4]!==n||r[5]!==i?(m=i(n),r[4]=n,r[5]=i,r[6]=m):m=r[6];let d;return r[7]!==e||r[8]!==s||r[9]!==u||r[10]!==m?(d=(0,za.jsx)(K.div,{role:"group","aria-label":u,...s,ref:e,children:m}),r[7]=e,r[8]=s,r[9]=u,r[10]=m,r[11]=d):d=r[11],d});Ha.displayName="ComposerPrimitive.TriggerPopoverCategories";var qa=U((t,e)=>{let r=f(30),o,i,s,n;r[0]!==t?({categoryId:o,onClick:i,onMouseMove:s,...n}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s,r[4]=n):(o=r[1],i=r[2],s=r[3],n=r[4]);let{selectCategory:a,highlightIndex:c,categories:l,highlightedIndex:u,activeCategoryId:m,isSearchMode:d,popoverId:p}=ct(),h;r[5]!==o||r[6]!==a?(h=()=>{a(o)},r[5]=o,r[6]=a,r[7]=h):h=r[7];let g=h,b;if(r[8]!==l||r[9]!==o){let M;r[11]!==o?(M=O=>O.id===o,r[11]=o,r[12]=M):M=r[12],b=l.findIndex(M),r[8]=l,r[9]=o,r[10]=b}else b=r[10];let y=b,x=!m&&!d&&y===u,S;r[13]!==y||r[14]!==c?(S=()=>{c(y)},r[13]=y,r[14]=c,r[15]=S):S=r[15];let _=S,C=`${p}-option-${o}`,P=x?"":void 0,A;r[16]!==g||r[17]!==i?(A=W(i,g),r[16]=g,r[17]=i,r[18]=A):A=r[18];let w;r[19]!==_||r[20]!==s?(w=W(s,_),r[19]=_,r[20]=s,r[21]=w):w=r[21];let k;return r[22]!==e||r[23]!==x||r[24]!==n||r[25]!==C||r[26]!==P||r[27]!==A||r[28]!==w?(k=(0,za.jsx)(K.button,{type:"button",role:"option",id:C,"aria-selected":x,"data-highlighted":P,...n,ref:e,onClick:A,onMouseMove:w}),r[22]=e,r[23]=x,r[24]=n,r[25]=C,r[26]=P,r[27]=A,r[28]=w,r[29]=k):k=r[29],k});qa.displayName="ComposerPrimitive.TriggerPopoverCategoryItem";var Ga=require("react/jsx-runtime");var Ka=U((t,e)=>{let r=f(12),o,i,s;r[0]!==t?({children:i,"aria-label":o,...s}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s):(o=r[1],i=r[2],s=r[3]);let{items:n,activeCategoryId:a,isSearchMode:c,open:l}=ct();if(!l||!a&&!c)return null;let u=o??"Items",m;r[4]!==i||r[5]!==n?(m=i(n),r[4]=i,r[5]=n,r[6]=m):m=r[6];let d;return r[7]!==e||r[8]!==s||r[9]!==u||r[10]!==m?(d=(0,Ga.jsx)(K.div,{role:"group","aria-label":u,...s,ref:e,children:m}),r[7]=e,r[8]=s,r[9]=u,r[10]=m,r[11]=d):d=r[11],d});Ka.displayName="ComposerPrimitive.TriggerPopoverItems";var Qa=U((t,e)=>{let r=f(30),o,i,s,n,a;r[0]!==t?({item:i,index:o,onClick:s,onMouseMove:n,...a}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s,r[4]=n,r[5]=a):(o=r[1],i=r[2],s=r[3],n=r[4],a=r[5]);let{selectItem:c,highlightIndex:l,items:u,highlightedIndex:m,activeCategoryId:d,isSearchMode:p,popoverId:h}=ct(),g;r[6]!==i||r[7]!==c?(g=()=>{c(i)},r[6]=i,r[7]=c,r[8]=g):g=r[8];let b=g,y;r[9]!==o||r[10]!==i.id||r[11]!==u?(y=o??u.findIndex(O=>O.id===i.id),r[9]=o,r[10]=i.id,r[11]=u,r[12]=y):y=r[12];let x=y,S=(p||d!==null)&&x===m,_;r[13]!==l||r[14]!==x?(_=()=>{l(x)},r[13]=l,r[14]=x,r[15]=_):_=r[15];let C=_,P=`${h}-option-${i.id}`,A=S?"":void 0,w;r[16]!==b||r[17]!==s?(w=W(s,b),r[16]=b,r[17]=s,r[18]=w):w=r[18];let k;r[19]!==C||r[20]!==n?(k=W(n,C),r[19]=C,r[20]=n,r[21]=k):k=r[21];let M;return r[22]!==e||r[23]!==S||r[24]!==a||r[25]!==P||r[26]!==A||r[27]!==w||r[28]!==k?(M=(0,Ga.jsx)(K.button,{type:"button",role:"option",id:P,"aria-selected":S,"data-highlighted":A,...a,ref:e,onClick:w,onMouseMove:k}),r[22]=e,r[23]=S,r[24]=a,r[25]=P,r[26]=A,r[27]=w,r[28]=k,r[29]=M):M=r[29],M});Qa.displayName="ComposerPrimitive.TriggerPopoverItem";var vp=require("react/jsx-runtime");var Wa=U((t,e)=>{let r=f(10),o,i;r[0]!==t?({onClick:o,...i}=t,r[0]=t,r[1]=o,r[2]=i):(o=r[1],i=r[2]);let{activeCategoryId:s,isSearchMode:n,goBack:a,open:c}=ct();if(!c||!s||n)return null;let l;r[3]!==a||r[4]!==o?(l=W(o,a),r[3]=a,r[4]=o,r[5]=l):l=r[5];let u;return r[6]!==e||r[7]!==i||r[8]!==l?(u=(0,vp.jsx)(K.button,{type:"button",...i,ref:e,onClick:l}),r[6]=e,r[7]=i,r[8]=l,r[9]=u):u=r[9],u});Wa.displayName="ComposerPrimitive.TriggerPopoverBack";var Ja=t=>{let e=f(8),{formatter:r,onExecute:o,removeOnExecute:i}=t,{register:s}=ls(),n=F(o),a,c;e[0]!==o?(a=()=>{n.current=o},c=[o],e[0]=o,e[1]=a,e[2]=c):(a=e[1],c=e[2]),et(a,c);let l,u;return e[3]!==r||e[4]!==s||e[5]!==i?(l=()=>{let m={kind:"action",formatter:r??Co,onExecute:d=>n.current(d),...i!==void 0?{removeOnExecute:i}:{}};return s(m)},u=[s,r,i],e[3]=r,e[4]=s,e[5]=i,e[6]=l,e[7]=u):(l=e[6],u=e[7]),$(l,u),null};Ja.displayName="ComposerPrimitive.TriggerPopoverAction";var Ya=t=>{let e=f(7),{formatter:r,onInserted:o}=t,{register:i}=ls(),s=F(o),n,a;e[0]!==o?(n=()=>{s.current=o},a=[o],e[0]=o,e[1]=n,e[2]=a):(n=e[1],a=e[2]),et(n,a);let c,l;return e[3]!==r||e[4]!==i?(c=()=>i({kind:"directive",formatter:r??Co,onInserted:u=>s.current?.(u)}),l=[i,r],e[3]=r,e[4]=i,e[5]=c,e[6]=l):(c=e[5],l=e[6]),$(c,l),null};Ya.displayName="ComposerPrimitive.TriggerPopoverDirective";var bp=Object.assign(Pa,{Directive:Ya,Action:Ja});var Ao=ht({AddAttachment:()=>mp,AttachmentByIndex:()=>vo,AttachmentDropzone:()=>La,Attachments:()=>bo,Cancel:()=>dp,Dictate:()=>hp,DictationTranscript:()=>Fa,If:()=>_o,Input:()=>$a,Queue:()=>xo,Quote:()=>Va,QuoteDismiss:()=>Ua,QuoteText:()=>ja,Root:()=>Oa,Send:()=>Gm,StopDictation:()=>fp,Unstable_TriggerPopover:()=>bp,Unstable_TriggerPopoverBack:()=>Wa,Unstable_TriggerPopoverCategories:()=>Ha,Unstable_TriggerPopoverCategoryItem:()=>qa,Unstable_TriggerPopoverItem:()=>Qa,Unstable_TriggerPopoverItems:()=>Ka,Unstable_TriggerPopoverRoot:()=>Ia,unstable_useTriggerPopoverRootContext:()=>Eo,unstable_useTriggerPopoverRootContextOptional:()=>as,unstable_useTriggerPopoverScopeContext:()=>ct,unstable_useTriggerPopoverScopeContextOptional:()=>Ra,unstable_useTriggerPopoverTriggers:()=>Om,unstable_useTriggerPopoverTriggersOptional:()=>Nm});var uw=Object.freeze({type:"complete"}),dw=Object.freeze({type:"text",text:"",status:uw}),xp=()=>E(mw);function mw(t){return t.part.type!=="text"&&t.part.type!=="reasoning"?dw:t.part}var pw=require("react/jsx-runtime"),hw=re(null);function fw(t){let e=me(hw);if(!t?.optional&&!e)throw new Error("This component must be used within a SmoothContextProvider.");return e}var{useSmoothStatus:LN,useSmoothStatusStore:wp}=es(fw,"useSmoothStatus");var yp=250,_p=5,gw=class{constructor(t,e){v(this,"animationFrameId",null);v(this,"lastUpdateTime",Date.now());v(this,"lastCommitTime",0);v(this,"targetText","");v(this,"drainMs",yp);v(this,"maxCharIntervalMs",_p);v(this,"maxCharsPerFrame",1/0);v(this,"minCommitMs",0);v(this,"currentText");v(this,"setText");v(this,"animate",()=>{let t=Date.now(),e=t-this.lastUpdateTime,r=this.targetText.length-this.currentText.length,o=Math.min(this.maxCharIntervalMs,this.drainMs/r),i=Math.min(r,this.maxCharsPerFrame),s=0;for(;e>=o&&s<i;)s++,e-=o;s===i&&i===this.maxCharsPerFrame&&(e=0),s!==r?this.animationFrameId=requestAnimationFrame(this.animate):this.animationFrameId=null,s!==0&&(this.currentText=this.targetText.slice(0,this.currentText.length+s),this.lastUpdateTime=t-e,(s===r||t-this.lastCommitTime>=this.minCommitMs)&&(this.lastCommitTime=t,this.setText(this.currentText)))});this.currentText=t,this.setText=e}start(){this.animationFrameId===null&&(this.lastUpdateTime=Date.now(),this.animate())}stop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}},Xa=Object.freeze({type:"running"}),hs=(t,e)=>t!==void 0&&t>0?t:e,Sp=(t,e=!1)=>{let{text:r}=t,o=ds("(prefers-reduced-motion: reduce)"),i=typeof e=="object"&&e!==null?e:void 0,s=e!==!1&&e!==null&&!o,n=hs(i?.drainMs,yp),a=hs(i?.maxCharIntervalMs,_p),c=hs(i?.maxCharsPerFrame,1/0),l=hs(i?.minCommitMs,0),[u,m]=j(t.status.type==="running"?"":r),d=B(),p=E(()=>d.part),[h,g]=j(p);(p!==h||!r.startsWith(u))&&(g(p),m(t.status.type==="running"?"":r));let b=wp({optional:!0}),y=pt(_=>{if(m(_),b){let C=u!==_||t.status.type==="running"?Xa:t.status;or(b).setState(C,!0)}});$(()=>{if(b){let _=s&&(u!==r||t.status.type==="running")?Xa:t.status;or(b).setState(_,!0)}},[b,s,r,u,t.status]);let[x]=j(new gw(u,y));$(()=>{x.drainMs=n,x.maxCharIntervalMs=a,x.maxCharsPerFrame=c,x.minCommitMs=l},[x,n,a,c,l]);let S=F(p);return $(()=>{if(!s){x.stop();return}let _=S.current!==p;if(S.current=p,_||!r.startsWith(x.targetText)){t.status.type==="running"?(x.currentText="",x.targetText=r,x.lastCommitTime=0,x.start()):(x.currentText=r,x.targetText=r,x.stop(),y(r));return}if(x.targetText=r,t.status.type!=="running"){if(x.currentText===""){x.currentText=r,x.stop(),y(r);return}x.start();return}x.start()},[x,s,r,t.status.type,p,y]),$(()=>()=>{x.stop()},[x]),Y(()=>s?{...t,text:u,status:r===u?t.status:Xa}:t,[s,u,t,r])};var vw=Object.freeze({type:"complete"}),bw=Object.freeze({type:"image",image:"",status:vw}),Tp=()=>E(xw);function xw(t){return t.part.type!=="image"?bw:t.part}var Cp=require("react/jsx-runtime"),ir=U(({smooth:t=!0,component:e=K.span,render:r,...o},i)=>{let{text:s,status:n}=Sp(xp(),t),a={"data-status":n.type,...o,ref:i};return r&&vt(r)?kr(r,s,a):(0,Cp.jsx)(e,{...a,children:s})});ir.displayName="MessagePartPrimitive.Text";var Ip=require("react/jsx-runtime"),sr=U((t,e)=>{let r=f(4),{image:o}=Tp(),i;return r[0]!==e||r[1]!==o||r[2]!==t?(i=(0,Ip.jsx)(K.img,{src:o,...t,ref:e}),r[0]=e,r[1]=o,r[2]=t,r[3]=i):i=r[3],i});sr.displayName="MessagePartPrimitive.Image";var Za=ht({Image:()=>sr,InProgress:()=>Ct,Messages:()=>Kn,Text:()=>ir});var Ze=t=>{let e=f(2),r=F(void 0),o;return e[0]!==t?(o=i=>{r.current&&(r.current(),r.current=void 0),i&&(r.current=t(i))},e[0]=t,e[1]=o):o=e[1],o};var ec=(t,e)=>{let r=t.trim().match(/^(\d+(?:\.\d+)?|\.\d+)(em|px|rem)$/);if(!r)return Number.POSITIVE_INFINITY;let o=Number(r[1]),i=r[2];return i==="px"?o:i==="em"?o*(parseFloat(getComputedStyle(e).fontSize)||16):i==="rem"?o*(parseFloat(getComputedStyle(document.documentElement).fontSize)||16):Number.POSITIVE_INFINITY},Ep=t=>t.dataset.messageId,Ap=()=>{let t=document.createElement("div");return t.dataset.auiTopAnchorReserve="",t.style.height="0px",t.style.flexShrink="0",t.style.pointerEvents="none",t.setAttribute("aria-hidden","true"),t},fs=(t,e)=>{let r=`${e}px`;return t.style.height!==r?(t.style.height=r,!0):!1},Rp=t=>{let e=window.devicePixelRatio||1;return Math.round(t*e)/e};var Ro=require("react/jsx-runtime");var Pp=()=>{let t=f(4),e=B(),r;t[0]!==e.message?(r=()=>e.message,t[0]=e.message,t[1]=r):r=t[1];let o=E(r),i;return t[2]!==o?(i=s=>{let n=()=>{o.setIsHovering(!0)},a=()=>{o.setIsHovering(!1)};return s.addEventListener("mouseenter",n),s.addEventListener("mouseleave",a),s.matches(":hover")&&queueMicrotask(()=>o.setIsHovering(!0)),()=>{s.removeEventListener("mouseenter",n),s.removeEventListener("mouseleave",a),o.setIsHovering(!1)}},t[2]=o,t[3]=i):i=t[3],Ze(i)},ww=()=>{let t=f(2),e=qe(Iw),r;return t[0]!==e?(r=o=>o.message.role==="user"&&o.message.index>0&&o.message.index===o.thread.messages.length-2&&o.thread.messages.at(-1)?.role==="assistant"&&(o.message.id===e||o.thread.isRunning),t[0]=e,t[1]=r):r=t[1],E(r)},yw=()=>{let t=f(2),e=qe(Ew),r;return t[0]!==e?(r=o=>o.message.isLast&&o.message.role==="assistant"&&o.message.index>=1&&o.thread.messages.at(o.message.index-1)?.role==="user"&&(o.message.id===e||o.thread.isRunning),t[0]=e,t[1]=r):r=t[1],E(r)},_w=(t,e)=>{let r=f(3),o;return r[0]!==t||r[1]!==e?(o=i=>{if(t)return e.getState().registerAnchorElement(i)},r[0]=t,r[1]=e,r[2]=o):o=r[2],Ze(o)},Sw=t=>{let e=f(3),{active:r,threadViewportStore:o}=t,i;return e[0]!==r||e[1]!==o?(i=s=>{if(!r)return;let n=o.getState(),a=n.topAnchorMessageClamp;return n.registerAnchorTargetElement(s,{tallerThan:ec(a.tallerThan,s),visibleHeight:ec(a.visibleHeight,s)})},e[0]=r,e[1]=o,e[2]=i):i=e[2],Ze(i)},Tw=t=>{let e=f(7),r,o;e[0]!==t?({forwardedRef:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i=Pp(),s=ke(r,i),n=E(Aw),a;return e[3]!==n||e[4]!==o||e[5]!==s?(a=(0,Ro.jsx)(K.div,{...o,ref:s,"data-message-id":n}),e[3]=n,e[4]=o,e[5]=s,e[6]=a):a=e[6],a},Cw=t=>{let e=f(13),r,o,i;e[0]!==t?({forwardedRef:r,threadViewportStore:i,...o}=t,e[0]=t,e[1]=r,e[2]=o,e[3]=i):(r=e[1],o=e[2],i=e[3]);let s=Pp(),n=ww(),a=yw(),c=_w(n,i),l;e[4]!==a||e[5]!==i?(l={active:a,threadViewportStore:i},e[4]=a,e[5]=i,e[6]=l):l=e[6];let u=Sw(l),m=ke(r,s,c,u),d=E(Rw),p=n?"":void 0,h=a?"":void 0,g;return e[7]!==d||e[8]!==o||e[9]!==m||e[10]!==p||e[11]!==h?(g=(0,Ro.jsx)(K.div,{...o,ref:m,"data-message-id":d,"data-aui-top-anchor-user":p,"data-aui-top-anchor-target":h}),e[7]=d,e[8]=o,e[9]=m,e[10]=p,e[11]=h,e[12]=g):g=e[12],g},tc=U((t,e)=>{let r=f(7),o=Ge();if(o.getState().turnAnchor==="top"){let s;return r[0]!==e||r[1]!==t||r[2]!==o?(s=(0,Ro.jsx)(Cw,{...t,forwardedRef:e,threadViewportStore:o}),r[0]=e,r[1]=t,r[2]=o,r[3]=s):s=r[3],s}let i;return r[4]!==e||r[5]!==t?(i=(0,Ro.jsx)(Tw,{...t,forwardedRef:e}),r[4]=e,r[5]=t,r[6]=i):i=r[6],i});tc.displayName="MessagePrimitive.Root";function Iw(t){return t.topAnchorTurn?.anchorId}function Ew(t){return t.topAnchorTurn?.targetId}function Aw(t){return t.message.id}function Rw(t){return t.message.id}var Et=require("react/jsx-runtime"),rc={...Xe,Text:()=>(0,Et.jsxs)("p",{style:{whiteSpace:"pre-line"},children:[(0,Et.jsx)(ir,{}),(0,Et.jsx)(Ct,{children:(0,Et.jsx)("span",{style:{fontFamily:"revert"},children:" \u25CF"})})]}),Image:()=>(0,Et.jsx)(sr,{})},gs=t=>{let e=f(10);if("children"in t){let a;return e[0]!==t.children?(a=(0,Et.jsx)(ho,{children:t.children}),e[0]=t.children,e[1]=a):a=e[1],a}let r,o;e[2]!==t?({components:r,...o}=t,e[2]=t,e[3]=r,e[4]=o):(r=e[3],o=e[4]);let i;e[5]!==r?(i=r?{...r,Text:r.Text??rc.Text,Image:r.Image??rc.Image}:rc,e[5]=r,e[6]=i):i=e[6];let s=i,n;return e[7]!==o||e[8]!==s?(n=(0,Et.jsx)(ho,{components:s,...o}),e[7]=o,e[8]=s,e[9]=n):n=e[9],n};gs.displayName="MessagePrimitive.Parts";var Pw=t=>{let e=f(12),r;return e[0]!==t.assistant||e[1]!==t.copied||e[2]!==t.hasAttachments||e[3]!==t.hasBranches||e[4]!==t.hasContent||e[5]!==t.last||e[6]!==t.lastOrHover||e[7]!==t.speaking||e[8]!==t.submittedFeedback||e[9]!==t.system||e[10]!==t.user?(r=o=>{let{role:i,attachments:s,parts:n,branchCount:a,isLast:c,speech:l,isCopied:u,isHovering:m}=o.message;return!(t.hasBranches===!0&&a<2||t.user&&i!=="user"||t.assistant&&i!=="assistant"||t.system&&i!=="system"||t.lastOrHover===!0&&!m&&!c||t.last!==void 0&&t.last!==c||t.copied===!0&&!u||t.copied===!1&&u||t.speaking===!0&&l==null||t.speaking===!1&&l!=null||t.hasAttachments===!0&&(i!=="user"||!s?.length)||t.hasAttachments===!1&&i==="user"&&s?.length||t.hasContent===!0&&n.length===0||t.hasContent===!1&&n.length>0||t.submittedFeedback!==void 0&&(o.message.metadata.submittedFeedback?.type??null)!==t.submittedFeedback)},e[0]=t.assistant,e[1]=t.copied,e[2]=t.hasAttachments,e[3]=t.hasBranches,e[4]=t.hasContent,e[5]=t.last,e[6]=t.lastOrHover,e[7]=t.speaking,e[8]=t.submittedFeedback,e[9]=t.system,e[10]=t.user,e[11]=r):r=e[11],E(r)},oc=t=>{let e=f(3),r,o;return e[0]!==t?({children:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]),Pw(o)?r:null};oc.displayName="MessagePrimitive.If";var ic=t=>{let{children:e}=t;return na()!==void 0?e:null};ic.displayName="MessagePrimitive.Error";var Z=require("react/jsx-runtime"),kw=t=>{let e=new Map;for(let o=0;o<t.length;o++){let i=t[o]?.parentId??o,s=e.get(i)??[];s.push(o),e.set(i,s)}let r=[];for(let[o,i]of e){let s=typeof o=="string"?o:void 0;r.push({groupKey:s,indices:i})}return r},Mw=t=>{let e=f(4),r=E(Uw),o;e:{if(r.length===0){let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=[],e[0]=s):s=e[0],o=s;break e}let i;e[1]!==t||e[2]!==r?(i=t(r),e[1]=t,e[2]=r,e[3]=i):i=e[3],o=i}return o},Dw=t=>{let e=f(9),r,o;e[0]!==t?({Fallback:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;e[3]!==r||e[4]!==o.toolName?(i=a=>a.tools.toolUIs[o.toolName]?.[0]?.render??r,e[3]=r,e[4]=o.toolName,e[5]=i):i=e[5];let s=E(i);if(!s)return null;let n;return e[6]!==s||e[7]!==o?(n=(0,Z.jsx)(s,{...o}),e[6]=s,e[7]=o,e[8]=n):n=e[8],n},Ow=t=>{let e=f(9),r,o;e[0]!==t?({Fallback:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;e[3]!==r||e[4]!==o.name?(i=a=>{let c=a.dataRenderers.renderers[o.name]??r;return Array.isArray(c)?c[0]??r:c},e[3]=r,e[4]=o.name,e[5]=i):i=e[5];let s=E(i);if(!s)return null;let n;return e[6]!==s||e[7]!==o?(n=(0,Z.jsx)(s,{...o}),e[6]=s,e[7]=o,e[8]=n):n=e[8],n},jt={Text:()=>(0,Z.jsxs)("p",{style:{whiteSpace:"pre-line"},children:[(0,Z.jsx)(ir,{}),(0,Z.jsx)(Ct,{children:(0,Z.jsx)("span",{style:{fontFamily:"revert"},children:" \u25CF"})})]}),Reasoning:()=>null,Source:()=>null,Image:()=>(0,Z.jsx)(sr,{}),File:()=>null,Unstable_Audio:()=>null,Group:({children:t})=>t},Bw=t=>{let e=f(37),{components:r}=t,o;e[0]!==r?(o=r===void 0?{}:r,e[0]=r,e[1]=o):o=e[1];let{Text:i,Reasoning:s,Image:n,Source:a,File:c,Unstable_Audio:l,tools:u,data:m}=o,d=i===void 0?jt.Text:i,p=s===void 0?jt.Reasoning:s,h=n===void 0?jt.Image:n,g=a===void 0?jt.Source:a,b=c===void 0?jt.File:c,y=l===void 0?jt.Unstable_Audio:l,x;e[2]!==u?(x=u===void 0?{}:u,e[2]=u,e[3]=x):x=e[3];let S=x,_=B(),C=E(zw),P=C.type;if(P==="tool-call"){let A=_.part.addToolResult,w=_.part.resumeToolCall,k=_.part.respondToToolApproval;if("Override"in S){let T;return e[4]!==A||e[5]!==C||e[6]!==k||e[7]!==w||e[8]!==S.Override?(T=(0,Z.jsx)(S.Override,{...C,addResult:A,resume:w,respondToApproval:k}),e[4]=A,e[5]=C,e[6]=k,e[7]=w,e[8]=S.Override,e[9]=T):T=e[9],T}let M=S.by_name?.[C.toolName]??S.Fallback,O;return e[10]!==M||e[11]!==A||e[12]!==C||e[13]!==k||e[14]!==w?(O=(0,Z.jsx)(Dw,{...C,Fallback:M,addResult:A,resume:w,respondToApproval:k}),e[10]=M,e[11]=A,e[12]=C,e[13]=k,e[14]=w,e[15]=O):O=e[15],O}if(C.status?.type==="requires-action")throw new Error("Encountered unexpected requires-action status");switch(P){case"text":{let A;return e[16]!==d||e[17]!==C?(A=(0,Z.jsx)(d,{...C}),e[16]=d,e[17]=C,e[18]=A):A=e[18],A}case"reasoning":{let A;return e[19]!==p||e[20]!==C?(A=(0,Z.jsx)(p,{...C}),e[19]=p,e[20]=C,e[21]=A):A=e[21],A}case"source":{let A;return e[22]!==g||e[23]!==C?(A=(0,Z.jsx)(g,{...C}),e[22]=g,e[23]=C,e[24]=A):A=e[24],A}case"image":{let A;return e[25]!==h||e[26]!==C?(A=(0,Z.jsx)(h,{...C}),e[25]=h,e[26]=C,e[27]=A):A=e[27],A}case"file":{let A;return e[28]!==b||e[29]!==C?(A=(0,Z.jsx)(b,{...C}),e[28]=b,e[29]=C,e[30]=A):A=e[30],A}case"audio":{let A;return e[31]!==y||e[32]!==C?(A=(0,Z.jsx)(y,{...C}),e[31]=y,e[32]=C,e[33]=A):A=e[33],A}case"data":{let A=m?.by_name?.[C.name]??m?.Fallback,w;return e[34]!==A||e[35]!==C?(w=(0,Z.jsx)(Ow,{...C,Fallback:A}),e[34]=A,e[35]=C,e[36]=w):w=e[36],w}default:return console.warn(`Unknown message part type: ${P}`),null}},Nw=t=>{let e=f(5),{partIndex:r,components:o}=t,i;e[0]!==o?(i=(0,Z.jsx)(Bw,{components:o}),e[0]=o,e[1]=i):i=e[1];let s;return e[2]!==r||e[3]!==i?(s=(0,Z.jsx)(Zt,{index:r,children:i}),e[2]=r,e[3]=i,e[4]=s):s=e[4],s},$w=ee(Nw,(t,e)=>t.partIndex===e.partIndex&&t.components?.Text===e.components?.Text&&t.components?.Reasoning===e.components?.Reasoning&&t.components?.Source===e.components?.Source&&t.components?.Image===e.components?.Image&&t.components?.File===e.components?.File&&t.components?.Unstable_Audio===e.components?.Unstable_Audio&&t.components?.tools===e.components?.tools&&t.components?.data===e.components?.data&&t.components?.Group===e.components?.Group),Lw=t=>{let e=f(6),{status:r,component:o}=t,i=r.type==="running",s;e[0]!==o||e[1]!==r?(s=(0,Z.jsx)(o,{type:"text",text:"",status:r}),e[0]=o,e[1]=r,e[2]=s):s=e[2];let n;return e[3]!==i||e[4]!==s?(n=(0,Z.jsx)(er,{text:"",isRunning:i,children:s}),e[3]=i,e[4]=s,e[5]=n):n=e[5],n},Fw=Object.freeze({type:"complete"}),Vw=t=>{let e=f(6),{components:r}=t,o=E(Hw);if(r?.Empty){let n;return e[0]!==r.Empty||e[1]!==o?(n=(0,Z.jsx)(r.Empty,{status:o}),e[0]=r.Empty,e[1]=o,e[2]=n):n=e[2],n}let i=r?.Text??jt.Text,s;return e[3]!==o||e[4]!==i?(s=(0,Z.jsx)(Lw,{status:o,component:i}),e[3]=o,e[4]=i,e[5]=s):s=e[5],s},jw=ee(Vw,(t,e)=>t.components?.Empty===e.components?.Empty&&t.components?.Text===e.components?.Text),vs=t=>{let e=f(9),{groupingFunction:r,components:o}=t,i=E(qw),s=Mw(r),n;e:{if(i===0){let u;e[0]!==o?(u=(0,Z.jsx)(jw,{components:o}),e[0]=o,e[1]=u):u=e[1],n=u;break e}let l;if(e[2]!==o||e[3]!==s){let u;e[5]!==o?(u=(m,d)=>{let p=o?.Group??jt.Group;return(0,Z.jsx)(p,{groupKey:m.groupKey,indices:m.indices,children:m.indices.map(h=>(0,Z.jsx)($w,{partIndex:h,components:o},h))},`group-${d}-${m.groupKey??"ungrouped"}`)},e[5]=o,e[6]=u):u=e[6],l=s.map(u),e[2]=o,e[3]=s,e[4]=l}else l=e[4];n=l}let a=n,c;return e[7]!==a?(c=(0,Z.jsx)(Z.Fragment,{children:a}),e[7]=a,e[8]=c):c=e[8],c};vs.displayName="MessagePrimitive.Unstable_PartsGrouped";var sc=t=>{let e=f(6),r,o;e[0]!==t?({components:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]);let i;return e[3]!==r||e[4]!==o?(i=(0,Z.jsx)(vs,{...o,components:r,groupingFunction:kw}),e[3]=r,e[4]=o,e[5]=i):i=e[5],i};sc.displayName="MessagePrimitive.Unstable_PartsGroupedByParentId";function Uw(t){return t.message.parts}function zw(t){return t.part}function Hw(t){return t.message.status??Fw}function qw(t){return t.message.parts.length}var Po=ht({AttachmentByIndex:()=>fo,Attachments:()=>go,Content:()=>gs,Error:()=>ic,GenerativeUI:()=>Qi,GroupedParts:()=>Wi,If:()=>oc,PartByIndex:()=>$t,Parts:()=>gs,Quote:()=>Yi,Root:()=>tc,Unstable_PartsGrouped:()=>vs,Unstable_PartsGroupedByParentId:()=>sc});var kp=t=>{let e=f(2),r=pt(t),o;return e[0]!==r?(o=i=>{let s=new ResizeObserver(()=>{r()}),n=new MutationObserver(a=>{a.some(Gw)&&r()});return s.observe(i),n.observe(i,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),()=>{s.disconnect(),n.disconnect()}},e[0]=r,e[1]=o):o=e[1],Ze(o)};function Gw(t){return t.type!=="attributes"||t.attributeName!=="style"}var Mp=({autoScroll:t,scrollToBottomOnRunStart:e=!0,scrollToBottomOnInitialize:r=!0,scrollToBottomOnThreadSwitch:o=!0})=>{let i=F(null),s=E(w=>w.thread.messages.length>0),n=E(w=>w.thread.isRunning),a=F(!1),c=F(null),l=Ge();t===void 0&&(t=l.getState().turnAnchor!=="top");let u=F(0),m=F(0),d=F(0),p=F(0),h=F(null),g=F(t),b=F(t);Qe(()=>{let w=b.current;if(b.current=t,w||!t)return;let k=i.current;g.current=k!==null&&mi(k)},[t]);let y=Ee(w=>{let k=i.current;k&&(g.current=!0,h.current=w,k.scrollTo({top:k.scrollHeight,behavior:w}))},[]),x=Ee(()=>{c.current!==null&&(cancelAnimationFrame(c.current),c.current=null)},[]),S=Ee(w=>{h.current=w,x(),c.current=requestAnimationFrame(()=>{c.current=null,y(w)})},[x,y]);Qe(()=>()=>x(),[x]);let _=Ee(()=>{let w=l.getState();return w.turnAnchor==="top"&&w.element.viewport===i.current&&w.element.anchor!==null},[l]),C=()=>{let w=i.current;if(!w)return;let k=l.getState().isAtBottom,M=mi(w);if(!(!M&&u.current<w.scrollTop)){let O=rn({scrollTop:u.current,scrollHeight:m.current},w);M?(tn(w)&&(h.current=null),t&&(g.current=!0)):O&&(x(),h.current=null,g.current=!1),(M||h.current===null)&&M!==k&&or(l).setState({isAtBottom:M})}u.current=w.scrollTop,m.current=w.scrollHeight},P=kp(()=>{let w=i.current;if(!w)return;let{scrollHeight:k,clientHeight:M}=w;if(k===d.current&&M===p.current)return;d.current=k,p.current=M;let O=h.current;O&&_()?h.current=null:O?y(O):t&&!(n&&_())&&g.current&&y("instant"),C()}),A=Ze(w=>{let k=()=>{h.current=null};return w.addEventListener("scroll",C),w.addEventListener("pointerdown",k),()=>{w.removeEventListener("scroll",C),w.removeEventListener("pointerdown",k)}});return Qe(()=>{if(r){if(!s){a.current=!1;return}a.current||(a.current=!0,h.current===null&&S("instant"))}},[s,S,r]),us(({behavior:w})=>{y(w)}),Xr("thread.runStart",()=>{e&&l.getState().turnAnchor!=="top"&&S("auto")}),Xr("threads.selectionChanged",()=>{o&&S("instant")}),ke(P,A,i)};var Dp=require("react/jsx-runtime"),nc=U((t,e)=>{let r=f(6),o=B(),i,s;r[0]!==o?(i=()=>{let a=c=>{if(c.key==="Escape"&&!(c.defaultPrevented||o.thread.source===null)&&o.thread.getState().speech!=null){c.preventDefault();try{o.thread.stopSpeaking()}catch(l){let u=l;if(!(u instanceof Error)||u.message!=="No message is being spoken")throw u}}};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},s=[o],r[0]=o,r[1]=i,r[2]=s):(i=r[1],s=r[2]),$(i,s);let n;return r[3]!==t||r[4]!==e?(n=(0,Dp.jsx)(K.div,{...t,ref:e}),r[3]=t,r[4]=e,r[5]=n):n=r[5],n});nc.displayName="ThreadPrimitive.Root";var ac=t=>{let{children:e}=t;return E(Kw)?e:null};ac.displayName="ThreadPrimitive.Empty";function Kw(t){return t.thread.isEmpty}var Qw=t=>{let e=f(4),r;return e[0]!==t.disabled||e[1]!==t.empty||e[2]!==t.running?(r=o=>!(t.empty===!0&&!o.thread.isEmpty||t.empty===!1&&o.thread.isEmpty||t.running===!0&&!o.thread.isRunning||t.running===!1&&o.thread.isRunning||t.disabled===!0&&!o.thread.isDisabled||t.disabled===!1&&o.thread.isDisabled),e[0]=t.disabled,e[1]=t.empty,e[2]=t.running,e[3]=r):r=e[3],E(r)},cc=t=>{let e=f(3),r,o;return e[0]!==t?({children:r,...o}=t,e[0]=t,e[1]=r,e[2]=o):(r=e[1],o=e[2]),Qw(o)?r:null};cc.displayName="ThreadPrimitive.If";var bs=(t,e)=>{let r=f(3),o;return r[0]!==e||r[1]!==t?(o=i=>{if(!t)return;let s=t(),n=()=>{let c=e?e(i):i.offsetHeight;s.setHeight(c)},a=new ResizeObserver(n);return a.observe(i),n(),()=>{a.disconnect(),s.unregister()}},r[0]=e,r[1]=t,r[2]=o):o=r[2],Ze(o)};var Op=t=>{let e=0,r=t;for(;r;)e+=r.offsetTop,r=r.offsetParent;return e},Ww=(t,e)=>{let r=0,o=t;for(;o&&o!==e;)r+=o.offsetTop,o=o.offsetParent;return o===e?r:Op(t)-Op(e)},lc=({viewport:t,anchor:e,tallerThan:r,visibleHeight:o})=>{let i=Ww(e,t),s=e.offsetHeight;return i+Math.max(0,s-(s<=r?s:o))},Jw=({scrollHeight:t,...e})=>{let{viewport:r}=e,o=lc(e)+r.clientHeight;return Math.max(0,o-t)},Bp=({viewport:t,reserve:e,...r})=>Jw({viewport:t,...r,scrollHeight:t.scrollHeight-e.offsetHeight});var Np=t=>{let e=new ResizeObserver(t),r=new MutationObserver(t),o=null,i=null,s=null,n=()=>{e.disconnect(),r.disconnect(),o=null,i=null,s=null};return{target:(a,c,l)=>{o===a&&i===c&&s===l||(n(),e.observe(a),e.observe(c),e.observe(l),r.observe(l,{childList:!0,subtree:!0,characterData:!0}),o=a,i=c,s=l)},disconnect:n}};var Yw=t=>{let e=null;return{schedule:()=>{e===null&&(e=requestAnimationFrame(()=>{e=null,t()}))},cancel:()=>{e!==null&&(cancelAnimationFrame(e),e=null)}}},$p=t=>{let e=null,r;function o(){let a=t.getState(),{viewport:c,anchor:l,target:u}=a.element,m=a.targetConfig;if(a.turnAnchor!=="top"||!c){s.disconnect(),e&&(fs(e,0),e.remove());return}if(!l&&!u&&!m&&a.topAnchorTurn){s.disconnect(),e?.parentElement&&e.parentElement.lastElementChild!==e&&e.parentElement.append(e);return}if(!l||!u||!m){s.disconnect(),e&&(fs(e,0),e.remove());return}if(e??(e=Ap()),(e.parentElement!==u.parentElement||e.previousElementSibling!==u)&&u.after(e),s.target(c,l,u),fs(e,Bp({viewport:c,anchor:l,reserve:e,...m}))){i.schedule();return}let d=Ep(l);if(d!==void 0&&r===d)return;let p=Rp(lc({viewport:c,anchor:l,...m}));Math.abs(c.scrollTop-p)>1&&c.scrollTo({top:p,behavior:"smooth"}),d!==void 0&&(r=d)}let i=Yw(o),s=Np(i.schedule);i.schedule();let n=t.subscribe(i.schedule);return()=>{i.cancel(),n(),s.disconnect(),e?.remove()}};var Lp=t=>{let e=f(4),r=Ge(),o,i;e[0]!==t||e[1]!==r?(o=()=>{if(t)return $p(r)},i=[t,r],e[0]=t,e[1]=r,e[2]=o,e[3]=i):(o=e[2],i=e[3]),Qe(o,i)};var Fp=(t,e)=>{if(!t)return!1;let r=e.findIndex(o=>o.id===t.targetId);return r<1?!1:e[r-1]?.id===t.anchorId&&e.slice(r+1).every(o=>o.role==="user")},Vp=({isRunning:t,messages:e})=>{if(!t)return null;let r=e.at(-1),o=e.at(-2);return o?.role!=="user"||r?.role!=="assistant"?null:{anchorId:o.id,targetId:r.id}},jp=t=>Vp(t)?.anchorId,Up=t=>Vp(t)?.targetId;var xs=require("react/jsx-runtime");var Xw=()=>{let t=qe(ty);return bs(t,ry)},Zw=()=>{let t=qe(oy);return Ze(t)},ey=t=>{let e=f(19),r=Ge(),o;e[0]!==t?(o=b=>{if(t)return jp(b.thread)},e[0]=t,e[1]=o):o=e[1];let i=E(o),s;e[2]!==t?(s=b=>{if(t)return Up(b.thread)},e[2]=t,e[3]=s):s=e[3];let n=E(s),a=qe(iy),c;e:{if(!i||!n){c=null;break e}let b;e[4]!==i||e[5]!==n?(b={anchorId:i,targetId:n},e[4]=i,e[5]=n,e[6]=b):b=e[6],c=b}let l=c,u;e[7]!==t||e[8]!==a?(u=b=>t&&!!a&&Fp(a,b.thread.messages),e[7]=t,e[8]=a,e[9]=u):u=e[9];let m=E(u),d,p;e[10]!==r||e[11]!==a||e[12]!==m?(d=()=>{!a||m||r.getState().setTopAnchorTurn(null)},p=[r,a,m],e[10]=r,e[11]=a,e[12]=m,e[13]=d,e[14]=p):(d=e[13],p=e[14]),Qe(d,p);let h,g;e[15]!==l||e[16]!==r?(h=()=>{if(!l)return;let b=r.getState(),y=b.topAnchorTurn;y?.anchorId===l.anchorId&&y.targetId===l.targetId||b.setTopAnchorTurn(l)},g=[l,r],e[15]=l,e[16]=r,e[17]=h,e[18]=g):(h=e[17],g=e[18]),Qe(h,g)},zp=U((t,e)=>{let r=f(18),o,i,s,n,a,c;r[0]!==t?({autoScroll:o,scrollToBottomOnRunStart:a,scrollToBottomOnInitialize:n,scrollToBottomOnThreadSwitch:c,children:i,...s}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s,r[4]=n,r[5]=a,r[6]=c):(o=r[1],i=r[2],s=r[3],n=r[4],a=r[5],c=r[6]);let l;r[7]!==o||r[8]!==n||r[9]!==a||r[10]!==c?(l={autoScroll:o,scrollToBottomOnRunStart:a,scrollToBottomOnInitialize:n,scrollToBottomOnThreadSwitch:c},r[7]=o,r[8]=n,r[9]=a,r[10]=c,r[11]=l):l=r[11];let u=Mp(l),m=Xw(),d=Zw(),p=Ge(),h;r[12]!==p?(h=p.getState(),r[12]=p,r[13]=h):h=r[13];let g=h.turnAnchor==="top";ey(g),Lp(g);let b=ke(e,u,m,d),y;return r[14]!==i||r[15]!==b||r[16]!==s?(y=(0,xs.jsx)(K.div,{...s,ref:b,children:i}),r[14]=i,r[15]=b,r[16]=s,r[17]=y):y=r[17],y});zp.displayName="ThreadPrimitive.ViewportScrollable";var uc=U((t,e)=>{let r=f(13),o,i,s;r[0]!==t?({turnAnchor:s,topAnchorMessageClamp:i,...o}=t,r[0]=t,r[1]=o,r[2]=i,r[3]=s):(o=r[1],i=r[2],s=r[3]);let n;r[4]!==i||r[5]!==s?(n={turnAnchor:s,topAnchorMessageClamp:i},r[4]=i,r[5]=s,r[6]=n):n=r[6];let a;r[7]!==o||r[8]!==e?(a=(0,xs.jsx)(zp,{...o,ref:e}),r[7]=o,r[8]=e,r[9]=a):a=r[9];let c;return r[10]!==n||r[11]!==a?(c=(0,xs.jsx)(Ar,{options:n,children:a}),r[10]=n,r[11]=a,r[12]=c):c=r[12],c});uc.displayName="ThreadPrimitive.Viewport";function ty(t){return t.registerViewport}function ry(t){return t.clientHeight}function oy(t){return t.registerViewportElement}function iy(t){return t.topAnchorTurn}var Hp=require("react/jsx-runtime");var dc=U((t,e)=>{let r=f(3),o=qe(sy),i=bs(o,ny),s=ke(e,i),n;return r[0]!==t||r[1]!==s?(n=(0,Hp.jsx)(K.div,{...t,ref:s}),r[0]=t,r[1]=s,r[2]=n):n=r[2],n});dc.displayName="ThreadPrimitive.ViewportFooter";function sy(t){return t.registerContentInset}function ny(t){let e=parseFloat(getComputedStyle(t).marginTop)||0;return t.offsetHeight+e}var ay=t=>{let e=f(5),r;e[0]!==t?(r=t===void 0?{}:t,e[0]=t,e[1]=r):r=e[1];let{behavior:o}=r,i=qe(cy),s=Ge(),n;e[2]!==o||e[3]!==s?(n=()=>{s.getState().scrollToBottom({behavior:o})},e[2]=o,e[3]=s,e[4]=n):n=e[4];let a=n;return i?null:a},qp=ge("ThreadPrimitive.ScrollToBottom",ay,["behavior"]);function cy(t){return t.isAtBottom}var ly=t=>{let e=f(4),{prompt:r,send:o,clearComposer:i,autoSend:s}=t,n=o??s??!1,a;e[0]!==i||e[1]!==r||e[2]!==n?(a={prompt:r,send:n,clearComposer:i},e[0]=i,e[1]=r,e[2]=n,e[3]=a):a=e[3];let{disabled:c,trigger:l}=sa(a);return c?null:l},Gp=ge("ThreadPrimitive.Suggestion",ly,["prompt","send","clearComposer","autoSend","method"]);var nr=ht({Empty:()=>ac,If:()=>cc,MessageByIndex:()=>uo,Messages:()=>Gi,Root:()=>nc,ScrollToBottom:()=>qp,Suggestion:()=>Gp,SuggestionByIndex:()=>yo,Suggestions:()=>Zi,Unstable_MessageById:()=>mo,Viewport:()=>uc,ViewportFooter:()=>dc,ViewportProvider:()=>Ar});var Kp=`/**
 * Cursor Dark Anysphere design tokens for the Mux panel.
 *
 * Direction (ui-ux-pro-max + assistant-ui design system):
 *   product pattern  AI/Chatbot Platform \u2192 AI-Native UI + Minimalism
 *   style            Dark Mode (OLED) \u2014 matches Cursor, eye-strain safe
 *   typography       "Developer Mono" pairing: system sans for chrome,
 *                    JetBrains Mono / ui-monospace for CLI output
 *   motion           150ms state transitions, prefers-reduced-motion honoured
 *
 * Two token surfaces, both on Cursor Anysphere:
 *   1. --mux-*        raw hex, for this file's own rules
 *   2. --background\u2026  HSL triplets, because assistant-ui's generated.css
 *                     resolves them as hsl(var(--x) / <alpha>). Passing hex
 *                     here silently voids every such rule.
 *
 * Scoped under [data-mux-panel] \u2014 nothing leaks into the host.
 * Source: Cursor app theme \`cursor-dark-color-theme.json\` (Anysphere).
 */

[data-mux-panel] {
  /* \u2500\u2500 Cursor Anysphere palette (hex) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --mux-bg: #181818;
  --mux-rail: #141414;
  --mux-surface: #1c1c1c;
  --mux-surface-2: #202020;
  --mux-fg: #f0f0f0;
  --mux-fg-dim: #c8c8c8;
  --mux-muted: #9a9a9a;
  --mux-border: #2e2e2e;
  --mux-border-soft: #f0f0f014;
  --mux-focus: #81a1c166;
  --mux-selection: #81a1c12e;
  --mux-accent: #81a1c1;
  --mux-primary: #81a1c1;
  --mux-on-primary: #191c22;
  --mux-ok: #3fa266;
  --mux-bad: #e34671;
  --mux-warn: #d2943e;
  --mux-badge: #88c0d0;
  --mux-input-bg: #ffffff0a;

  /* \u2500\u2500 scale (8px grid) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --mux-space-1: 4px;
  --mux-space-2: 8px;
  --mux-space-3: 12px;
  --mux-space-4: 16px;
  --mux-radius-sm: 6px;
  --mux-radius: 8px;
  --mux-radius-lg: 10px;
  --mux-radius-full: 999px;
  --mux-control: 32px;      /* assistant-ui Button default height */
  --mux-control-sm: 28px;
  --mux-ease: cubic-bezier(0.2, 0, 0.2, 1);
  --mux-dur: 150ms;

  /* \u2500\u2500 type \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --mux-font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI",
    "IBM Plex Sans", sans-serif;
  --mux-font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo,
    Consolas, monospace;

  /* \u2500\u2500 assistant-ui / shadcn variable surface (HSL triplets) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --background: 0 0% 9.4%;        /* #181818 */
  --foreground: 0 0% 94.1%;       /* #f0f0f0 */
  --card: 0 0% 11%;              /* #1c1c1c */
  --card-foreground: 0 0% 94.1%;
  --popover: 0 0% 11%;
  --popover-foreground: 0 0% 94.1%;
  --primary: 210 34% 63.1%;      /* #81a1c1 */
  --primary-foreground: 220 15.3% 11.6%;
  --secondary: 0 0% 12.5%;
  --secondary-foreground: 0 0% 94.1%;
  --muted: 0 0% 12.5%;
  --muted-foreground: 0 0% 60.4%;/* #9a9a9a */
  --accent: 0 0% 16.5%;
  --accent-foreground: 0 0% 94.1%;
  --destructive: 344 73.7% 58.2%;/* #e34671 */
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 18%;            /* #2e2e2e */
  --input: 0 0% 18%;
  --ring: 210 34% 63.1%;
  --sidebar: 0 0% 7.8%;          /* #141414 */
  --sidebar-foreground: 0 0% 94.1%;
  --sidebar-border: 0 0% 18%;
  --radius: 0.5rem;

  /* Thread element contract (assistant-ui sets these inline on Root, so we
     declare them here for the primitives we compose ourselves). */
  --thread-max-width: 52rem;
  --composer-bg: var(--mux-input-bg);
  --composer-radius: var(--mux-radius-lg);
  --composer-padding: var(--mux-space-1);

  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background: var(--mux-bg);
  color: var(--mux-fg);
  font: 13px/1.5 var(--mux-font-sans);
  -webkit-font-smoothing: antialiased;
}

[data-mux-panel] * { box-sizing: border-box; }
[data-mux-panel] ::selection { background: var(--mux-selection); }

/* Focus stays visible (a11y: never remove focus indication). */
[data-mux-panel] :focus-visible {
  outline: 2px solid var(--mux-accent);
  outline-offset: 2px;
  border-radius: var(--mux-radius-sm);
}

@media (prefers-reduced-motion: reduce) {
  [data-mux-panel] *,
  [data-mux-panel] *::before,
  [data-mux-panel] *::after {
    transition: none !important;
    animation: none !important;
    scroll-behavior: auto !important;
  }
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
  padding: 0 12px;
  min-height: var(--mux-control-sm);
  border: 1px solid var(--mux-border);
  border-radius: var(--mux-radius-full);
  background: transparent;
  color: var(--mux-fg-dim);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: background var(--mux-dur) var(--mux-ease),
    border-color var(--mux-dur) var(--mux-ease),
    color var(--mux-dur) var(--mux-ease);
}

[data-mux-chip][data-active="true"] {
  border-color: color-mix(in srgb, var(--mux-primary) 55%, transparent);
  color: var(--mux-badge);
  background: color-mix(in srgb, var(--mux-primary) 14%, transparent);
}

[data-mux-chip][data-installed="false"],
[data-mux-chip][data-enabled="false"] {
  opacity: 0.45;
  cursor: not-allowed;
}

[data-mux-chip]:hover:not([disabled]) {
  border-color: color-mix(in srgb, var(--mux-accent) 50%, transparent);
  background: var(--mux-input-bg);
  color: var(--mux-fg);
}

[data-mux-dot] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--mux-muted);
  flex: none;
}

[data-mux-dot][data-on="true"][data-enabled="true"] { background: var(--mux-ok); }
[data-mux-dot][data-on="true"][data-enabled="false"] { background: var(--mux-warn); }

/* \u2500\u2500 body: session rail + main \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

[data-mux-body] {
  display: flex;
  flex: 1;
  min-height: 0;
}

[data-mux-threads] {
  width: 248px;
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
  padding: 0 var(--mux-space-3);
  height: var(--mux-control);
  border-bottom: 1px solid var(--mux-border);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--mux-muted);
  position: sticky;
  top: 0;
  background: var(--mux-rail);
  z-index: 1;
}

[data-mux-new],
[data-mux-delete] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 1px solid var(--mux-border);
  background: transparent;
  color: var(--mux-fg-dim);
  border-radius: var(--mux-radius-sm);
  min-height: var(--mux-control-sm);
  min-width: var(--mux-control-sm);
  padding: 0 var(--mux-space-2);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: background var(--mux-dur) var(--mux-ease),
    border-color var(--mux-dur) var(--mux-ease),
    color var(--mux-dur) var(--mux-ease);
}

[data-mux-new]:hover,
[data-mux-delete]:hover {
  border-color: color-mix(in srgb, var(--mux-accent) 50%, transparent);
  background: var(--mux-input-bg);
  color: var(--mux-fg);
}

[data-mux-delete] {
  margin-left: auto;
  padding: 0;
  opacity: 0;
  color: var(--mux-muted);
  transition: opacity var(--mux-dur) var(--mux-ease),
    background var(--mux-dur) var(--mux-ease);
}

/* Never hover-only: keyboard focus reveals it too. */
[data-mux-thread]:hover [data-mux-delete],
[data-mux-thread]:focus-within [data-mux-delete] { opacity: 1; }

[data-mux-delete]:focus-visible { opacity: 1; }

[data-mux-thread] {
  padding: var(--mux-space-2) var(--mux-space-3);
  border-bottom: 1px solid color-mix(in srgb, var(--mux-border) 55%, transparent);
  cursor: pointer;
  position: relative;
  border-left: 2px solid transparent;
  transition: background var(--mux-dur) var(--mux-ease),
    border-color var(--mux-dur) var(--mux-ease);
}

[data-mux-thread][data-active="true"] {
  background: var(--mux-surface-2);
  border-left-color: var(--mux-accent);
}

[data-mux-thread]:hover { background: var(--mux-surface); }
[data-mux-thread][data-active="true"]:hover { background: var(--mux-surface-2); }

[data-mux-thread-title] {
  display: flex;
  gap: 6px;
  align-items: center;
  font-weight: 500;
  font-size: 12.5px;
  color: var(--mux-fg);
}

[data-mux-resume] {
  color: var(--mux-badge);
  display: inline-flex;
  align-items: center;
}

[data-mux-thread-preview] {
  color: var(--mux-muted);
  margin-top: 2px;
  font-size: 12px;
  font-family: var(--mux-font-mono);
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
  padding: var(--mux-space-2) var(--mux-space-3);
  background: color-mix(in srgb, var(--mux-bad) 14%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--mux-bad) 35%, transparent);
  color: color-mix(in srgb, var(--mux-bad) 45%, #ffffff);
  font-size: 12.5px;
}

[data-mux-notice][data-kind="info"] {
  background: color-mix(in srgb, var(--mux-ok) 14%, transparent);
  border-bottom-color: color-mix(in srgb, var(--mux-ok) 35%, transparent);
  color: color-mix(in srgb, var(--mux-ok) 40%, #ffffff);
}

/* \u2500\u2500 assistant-ui thread surface \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Viewport is the scroll container; the footer overlays it, so reserve. */
[data-mux-turns] {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: var(--mux-space-4) var(--mux-space-4) var(--mux-space-1);
  scroll-padding-bottom: 72px;
  /* Reserve the composer's height up front: no layout shift on first paint. */
  scrollbar-gutter: stable;
}

[data-mux-turns]::-webkit-scrollbar { width: 10px; }
[data-mux-turns]::-webkit-scrollbar-thumb {
  background: var(--mux-border);
  border-radius: var(--mux-radius-full);
  border: 3px solid transparent;
  background-clip: content-box;
}
[data-mux-turns]::-webkit-scrollbar-thumb:hover {
  background: color-mix(in srgb, var(--mux-fg) 22%, transparent);
  background-clip: content-box;
}

.mux-empty {
  color: var(--mux-muted);
  margin: auto;
  text-align: center;
  padding: var(--mux-space-4);
  display: flex;
  flex-direction: column;
  gap: var(--mux-space-1);
}

.mux-empty-title {
  color: var(--mux-fg);
  font-size: 14px;
  font-weight: 500;
}

.mux-empty-hint {
  font-size: 12.5px;
}

/* Message root is a column so the action bar can sit under the bubble. */
[data-mux-turn] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--mux-space-1);
  margin-bottom: var(--mux-space-4);
  max-width: min(90%, var(--thread-max-width));
}

.mux-msg-body {
  padding: var(--mux-space-2) var(--mux-space-3);
  border-radius: var(--mux-radius-lg);
  line-height: 1.55;
  background: var(--mux-surface);
  border: 1px solid var(--mux-border);
  color: var(--mux-fg);
  word-break: break-word;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.2);
}

/* Text parts are real <p> now \u2014 CLI output stays readable in mono. */
.mux-text {
  margin: 0;
  white-space: pre-wrap;
  font-family: var(--mux-font-mono);
  font-size: 12.5px;
  line-height: 1.6;
  tab-size: 2;
}

.mux-msg-error:not(:empty) {
  margin-top: var(--mux-space-2);
  padding: var(--mux-space-2);
  border-radius: var(--mux-radius-sm);
  background: color-mix(in srgb, var(--mux-bad) 12%, transparent);
  color: color-mix(in srgb, var(--mux-bad) 45%, #ffffff);
  font-size: 12px;
}

/* user vs assistant: aui sets data-role on MessagePrimitive.Root */
[data-mux-turn][data-role="user"] { align-items: flex-end; }

[data-mux-turn][data-role="user"] .mux-msg-body {
  background: color-mix(in srgb, var(--mux-primary) 16%, transparent);
  border-color: color-mix(in srgb, var(--mux-primary) 30%, transparent);
}

[data-mux-turn][data-role="user"] .mux-text {
  font-family: var(--mux-font-sans);
  font-size: 13px;
}

[data-mux-turn][data-mux-error="true"],
[data-mux-turn][data-is-error="true"] {
  color: color-mix(in srgb, var(--mux-bad) 45%, #ffffff);
}

[data-mux-turn][data-mux-error="true"] .mux-msg-body,
[data-mux-turn][data-is-error="true"] .mux-msg-body {
  background: color-mix(in srgb, var(--mux-bad) 12%, transparent);
  border-color: color-mix(in srgb, var(--mux-bad) 40%, transparent);
}

/* \u2500\u2500 message action bar (copy) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.mux-actionbar {
  display: flex;
  gap: var(--mux-space-1);
  opacity: 0;
  transition: opacity var(--mux-dur) var(--mux-ease);
}

[data-mux-turn]:hover .mux-actionbar,
[data-mux-turn]:focus-within .mux-actionbar {
  opacity: 1;
}

.mux-action {
  display: inline-flex;
  align-items: center;
  gap: var(--mux-space-1);
  border: 1px solid transparent;
  background: transparent;
  color: var(--mux-muted);
  border-radius: var(--mux-radius-sm);
  min-height: 24px;
  padding: 0 var(--mux-space-2);
  font: inherit;
  font-size: 11px;
  cursor: pointer;
  transition: background var(--mux-dur) var(--mux-ease),
    color var(--mux-dur) var(--mux-ease),
    border-color var(--mux-dur) var(--mux-ease);
}

.mux-action:hover:not([disabled]) {
  color: var(--mux-fg);
  background: var(--mux-surface-2);
  border-color: var(--mux-border);
}

.mux-action svg { width: 12px; height: 12px; }

/* data-copied is set by ActionBarPrimitive.Copy for copiedDuration */
.mux-action-done { display: none; }
.mux-action[data-copied] .mux-action-copy { display: none; }
.mux-action[data-copied] .mux-action-done {
  display: inline-flex;
  align-items: center;
  gap: var(--mux-space-1);
  color: var(--mux-ok);
}

.mux-action[disabled] { opacity: 0.4; cursor: not-allowed; }

/* \u2500\u2500 scroll-to-bottom (auto-disabled when already at bottom) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.mux-scroll-bottom {
  position: sticky;
  bottom: 84px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: var(--mux-radius-full);
  border: 1px solid var(--mux-border);
  background: var(--mux-surface-2);
  color: var(--mux-muted);
  cursor: pointer;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.35);
  transition: color var(--mux-dur) var(--mux-ease),
    border-color var(--mux-dur) var(--mux-ease);
}

.mux-scroll-bottom:hover:not([disabled]) {
  color: var(--mux-fg);
  border-color: color-mix(in srgb, var(--mux-accent) 50%, transparent);
}

.mux-scroll-bottom svg { width: 14px; height: 14px; }
.mux-scroll-bottom[disabled] { opacity: 0; pointer-events: none; }

/* \u2500\u2500 composer (sticky, dense) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.mux-footer {
  position: sticky;
  bottom: 0;
  background: linear-gradient(to top, var(--mux-bg) 72%, transparent);
  padding-top: var(--mux-space-2);
}

[data-mux-composer] {
  display: flex;
  gap: var(--mux-space-2);
  padding: var(--mux-space-2) var(--mux-space-4) var(--mux-space-3);
  align-items: flex-end;
}

[data-mux-composer-root] {
  display: flex;
  gap: var(--mux-space-2);
  flex: 1;
  align-items: flex-end;
  border: 1px solid var(--mux-border);
  border-radius: var(--mux-radius-lg);
  background: var(--mux-input-bg);
  padding: var(--mux-space-1);
  transition: border-color var(--mux-dur) var(--mux-ease),
    box-shadow var(--mux-dur) var(--mux-ease);
}

[data-mux-composer-root]:focus-within {
  border-color: color-mix(in srgb, var(--mux-accent) 60%, transparent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--mux-accent) 12%, transparent);
}

[data-mux-input],
[data-mux-composer] textarea {
  flex: 1;
  resize: none;
  min-height: var(--mux-control-sm);
  max-height: 180px;
  background: transparent;
  color: var(--mux-fg);
  border: none;
  outline: none;
  border-radius: var(--mux-radius);
  padding: var(--mux-space-1) var(--mux-space-2);
  font-family: var(--mux-font-mono);
  font-size: 12.5px;
  line-height: 1.6;
}

[data-mux-composer] textarea::placeholder {
  color: var(--mux-muted);
  font-family: var(--mux-font-sans);
}

[data-mux-send],
[data-mux-composer] button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--mux-space-1);
  border: none;
  background: var(--mux-primary);
  color: var(--mux-on-primary);
  border-radius: var(--mux-radius);
  padding: 0 var(--mux-space-3);
  min-height: var(--mux-control-sm);
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  transition: filter var(--mux-dur) var(--mux-ease),
    opacity var(--mux-dur) var(--mux-ease);
}

[data-mux-send]:hover:not([disabled]),
[data-mux-composer] button:hover:not([disabled]) { filter: brightness(1.1); }

[data-mux-send][disabled],
[data-mux-composer] button[disabled] {
  opacity: 0.4;
  cursor: not-allowed;
}

[data-mux-badge] {
  display: inline-flex;
  align-items: center;
  gap: var(--mux-space-1);
  height: var(--mux-control-sm);
  padding: 0 var(--mux-space-2);
  font-size: 11px;
  font-family: var(--mux-font-mono);
  color: var(--mux-badge);
  background: color-mix(in srgb, var(--mux-primary) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--mux-primary) 22%, transparent);
  border-radius: var(--mux-radius-sm);
  white-space: nowrap;
  max-width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
}

/* Icons: single stroke weight, currentColor, sized by the button box. */
[data-mux-panel] svg {
  flex: none;
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

@media (prefers-reduced-motion: reduce) {
  [data-mux-panel] * {
    transition: none !important;
    animation: none !important;
  }
}
`;var Qp=`/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */
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
`;var N=require("react/jsx-runtime"),my=()=>({parse:t=>t}),Xp=t=>({mode:"strict",typeSymbol:t,create:my}),Wp=(t,e)=>({name:t,wire:t,source:"json",codec:Xp(e)}),ws=t=>Xp(t),py={package:"@freepeak/dsh-mux",descriptors:[{id:"@freepeak/dsh-mux#mux/discover",service:"mux",namespace:"mux",method:"discover",invocation:{kind:"direct"},parameters:[],result:ws("@freepeak/dsh-mux#AdapterStatus[]")},{id:"@freepeak/dsh-mux#mux/listThreads",service:"mux",namespace:"mux",method:"listThreads",invocation:{kind:"direct"},parameters:[],result:ws("@freepeak/dsh-mux#MuxThread[]")},{id:"@freepeak/dsh-mux#mux/deleteThread",service:"mux",namespace:"mux",method:"deleteThread",invocation:{kind:"direct"},parameters:[Wp("id","string")],result:ws("boolean")},{id:"@freepeak/dsh-mux#mux/send",service:"mux",namespace:"mux",method:"send",invocation:{kind:"direct"},parameters:[Wp("request","@freepeak/dsh-mux#MuxSendRequest")],result:ws("@freepeak/dsh-mux#MuxTurnResult")}]},mc="mux",Jp="mux",ys=[{id:"claude",label:"Claude Code"},{id:"omp",label:"OMP"},{id:"pi",label:"Pi"},{id:"cursor",label:"Cursor"},{id:"agy",label:"Agy"},{id:"command-code",label:"Command Code"},{id:"opencode",label:"opencode"}],ko;function hy(){ko===void 0&&(ko=document.createElement("style"),ko.dataset.plugin="@freepeak/dsh-mux",ko.textContent=`${Qp}
${Kp}`,document.head.append(ko))}function fy({size:t}){let e=t??16;return pe.default.createElement("svg",{width:e,height:e,viewBox:"0 0 16 16","data-mux-icon":"",fill:"none",stroke:"currentColor","stroke-width":1.6,"stroke-linecap":"round"},pe.default.createElement("path",{d:"M2 4.5h9.5M9 2l2.5 2.5L9 7"}),pe.default.createElement("path",{d:"M14 11.5H4.5M7 9l-2.5 2.5L7 14"}))}function Zp(t){return t===null?[]:t.turns.map((e,r)=>({id:`${t.id}:${r}:${e.at}`,role:e.role==="prompt"?"user":"assistant",content:[{type:"text",text:e.text}],...e.role==="error"?{metadata:{muxError:!0}}:{}}))}function ar({name:t,size:e=14}){return(0,N.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:{copy:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),(0,N.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),check:(0,N.jsx)("path",{d:"M20 6 9 17l-5-5"}),chevron:(0,N.jsx)("path",{d:"m6 9 6 6 6-6"}),close:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("path",{d:"M18 6 6 18"}),(0,N.jsx)("path",{d:"m6 6 12 12"})]}),plus:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("path",{d:"M12 5v14"}),(0,N.jsx)("path",{d:"M5 12h14"})]}),arrowDown:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("path",{d:"M12 5v14"}),(0,N.jsx)("path",{d:"m19 12-7 7-7-7"})]}),link:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),(0,N.jsx)("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]})}[t]})}function Yp({role:t}){return(0,N.jsxs)(Po.Root,{"data-mux-turn":"","data-role":t,className:"mux-msg",children:[(0,N.jsxs)("div",{className:"mux-msg-body",children:[(0,N.jsx)(Po.Parts,{children:({part:e})=>e.type==="text"?(0,N.jsx)("p",{className:"mux-text",children:(0,N.jsx)(Za.Text,{})}):null}),(0,N.jsx)(Po.Error,{className:"mux-msg-error"})]}),t==="assistant"&&(0,N.jsx)(ns.Root,{hideWhenRunning:!0,autohide:"not-last",autohideFloat:"always",className:"mux-actionbar",children:(0,N.jsxs)(ns.Copy,{copiedDuration:2e3,className:"mux-action",title:"Copy answer","aria-label":"Copy answer",children:[(0,N.jsx)("span",{className:"mux-action-copy","aria-hidden":"true",children:(0,N.jsx)(ar,{name:"copy"})}),(0,N.jsxs)("span",{className:"mux-action-done","aria-hidden":"true",children:[(0,N.jsx)(ar,{name:"check",size:12}),"Copied"]})]})})]})}function gy({host:t,ready:e}){let[r,o]=(0,pe.useState)([]),[i,s]=(0,pe.useState)([]),[n,a]=(0,pe.useState)(null),[c,l]=(0,pe.useState)("claude"),[u,m]=(0,pe.useState)(!1),[d,p]=(0,pe.useState)(null),h=(0,pe.useCallback)(async()=>{try{await e;let T=t.get("remote.mux");if(T===void 0){p({kind:"error",text:"mux host remote not available (mount failed)."});return}let[R,L]=await Promise.all([T.listThreads(),T.discover()]);R.ok?s(R.value):p({kind:"error",text:`threads: ${R.error.message}`}),L.ok?o(L.value):p({kind:"error",text:`discover: ${L.error.message}`})}catch(T){p({kind:"error",text:String(T instanceof Error?T.message:T)})}},[t,e]);(0,pe.useEffect)(()=>{h()},[h]);let g=i.find(T=>T.id===n)??null,b=g!==null?g.cli:c,y=T=>r.find(R=>R.id===T),x=T=>y(T)?.installed===!0,S=T=>y(T)?.enabled!==!1,_=(0,pe.useCallback)(async T=>{let R=T.trim();if(!(R.length===0||u||!S(b))){m(!0),p(null);try{await e;let L=t.get("remote.mux");if(L===void 0)throw new Error("mux host remote not available");let q=await L.send({cli:b,prompt:R,...n!==null&&n!==""?{threadId:n}:{}});if(!q.ok){p({kind:"error",text:q.error.message});return}a(q.value.threadId),await h()}catch(L){p({kind:"error",text:String(L instanceof Error?L.message:L)})}finally{m(!1)}}},[u,t,e,h,n,b]),C=(0,pe.useRef)(_);C.current=_;let P=(0,pe.useCallback)(()=>{a(null),p(null)},[]),A=(0,pe.useCallback)(T=>{!x(T)||!S(T)||(l(T),g!==null&&g.cli!==T&&a(null))},[x,g]),w=(0,pe.useCallback)(async T=>{try{await e;let R=t.get("remote.mux");if(R===void 0)return;await R.deleteThread(T),n===T&&a(null),await h()}catch(R){p({kind:"error",text:String(R instanceof Error?R.message:R)})}},[t,e,h,n]),k=T=>{let R=T.turns??[],L=R[R.length-1];return L===void 0?"no turns yet":L.text.replace(/\s+/g," ").slice(0,80)},M=Zp(g),O=lo({messages:M,isRunning:u,convertMessage:T=>T,onNew:async T=>{let R=T,L=typeof R=="string"?R:R?.content,q=typeof L=="string"?L:Array.isArray(L)?L.map(X=>X.type==="text"?X.text??"":"").join(""):"";q.trim().length!==0&&C.current(q)}});return(0,N.jsxs)("div",{"data-mux-panel":"",children:[(0,N.jsx)("div",{"data-mux-strip":"",children:ys.map(T=>{let R=y(T.id),L=R?.installed===!0,q=R?.enabled!==!1,X=R===void 0?"checking\u2026":L?q?R.path??T.id:`${T.id} is disabled in this build (only claude enabled)`:`${T.id} not on PATH`;return(0,N.jsxs)("button",{type:"button","data-mux-chip":"","data-active":String(b===T.id),"data-installed":String(L),"data-enabled":String(q),title:X,disabled:!L||!q,onClick:()=>A(T.id),children:[(0,N.jsx)("span",{"data-mux-dot":"","data-on":String(L),"data-enabled":String(q)}),T.label]},T.id)})}),d!==null&&(0,N.jsx)("div",{"data-mux-notice":"","data-kind":d.kind,children:d.text}),(0,N.jsxs)("div",{"data-mux-body":"",children:[(0,N.jsxs)("div",{"data-mux-threads":"",children:[(0,N.jsxs)("div",{"data-mux-threads-head":"",children:[(0,N.jsx)("strong",{children:"Threads"}),(0,N.jsxs)("button",{type:"button","data-mux-new":"",onClick:P,"aria-label":"Start a new thread",children:[(0,N.jsx)(ar,{name:"plus",size:13}),"New"]})]}),i.map(T=>(0,N.jsxs)("div",{"data-mux-thread":"","data-active":String(T.id===n),role:"button",tabIndex:0,"aria-current":T.id===n?"true":void 0,onClick:()=>a(T.id),onKeyDown:R=>{(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),a(T.id))},children:[(0,N.jsxs)("div",{"data-mux-thread-title":"",children:[ys.find(R=>R.id===T.cli)?.label??T.cli,T.cliSessionId!==void 0&&(0,N.jsx)("span",{"data-mux-resume":"",title:`Resumes CLI session ${T.cliSessionId}`,children:(0,N.jsx)(ar,{name:"link",size:11})}),(0,N.jsx)("button",{type:"button","data-mux-delete":"",title:"Delete thread (CLI session files are kept)","aria-label":"Delete thread",onClick:R=>{R.stopPropagation(),w(T.id)},children:(0,N.jsx)(ar,{name:"close",size:13})})]}),(0,N.jsx)("div",{"data-mux-thread-preview":"",children:k(T)})]},T.id)),i.length===0&&(0,N.jsx)("div",{"data-mux-empty":"",style:{padding:"16px 12px"},children:"No threads yet \u2014 pick a CLI and send a message."})]}),(0,N.jsx)("div",{"data-mux-main":"",children:(0,N.jsx)(la,{runtime:O,children:(0,N.jsx)(nr.Root,{children:(0,N.jsxs)(nr.Viewport,{"data-mux-turns":"",children:[(0,N.jsx)(Yr,{condition:T=>T.thread.isEmpty,children:(0,N.jsxs)("div",{"data-mux-empty":"",className:"mux-empty",children:[(0,N.jsx)("div",{className:"mux-empty-title",children:`New thread on ${ys.find(T=>T.id===b)?.label??b}.`}),(0,N.jsx)("div",{className:"mux-empty-hint",children:"Send a message to start it."})]})}),(0,N.jsx)(nr.Messages,{children:({message:T})=>T.role==="user"?(0,N.jsx)(Yp,{role:"user"}):(0,N.jsx)(Yp,{role:"assistant"})}),(0,N.jsx)(nr.ScrollToBottom,{className:"mux-scroll-bottom","aria-label":"Scroll to latest",children:(0,N.jsx)(ar,{name:"arrowDown",size:14})}),(0,N.jsx)(nr.ViewportFooter,{className:"mux-footer",children:(0,N.jsxs)("div",{"data-mux-composer":"",children:[(0,N.jsx)("span",{"data-mux-badge":"",title:g?.cliSessionId===void 0?`Sending as ${b}`:`Resumes CLI session ${g.cliSessionId}`,children:b+(g!==null&&g.cliSessionId!==void 0?` \xB7 ${g.cliSessionId.slice(0,8)}`:"")}),(0,N.jsxs)(Ao.Root,{"data-mux-composer-root":"",className:"mux-composer-form",compact:!0,children:[(0,N.jsx)(Ao.Input,{"data-mux-input":"",placeholder:`Message ${ys.find(T=>T.id===b)?.label??b}\u2026`,rows:1,className:"mux-input",submitMode:"enter"}),(0,N.jsx)(Ao.Send,{"data-mux-send":"",className:"mux-send",disabled:u||!x(b)||!S(b),"aria-label":"Send message",children:u?"Running\u2026":(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(ar,{name:"arrowDown",size:13}),"Send"]})})]})]})})]})})})})]})]})}var vy=["slots","locale","remote"];function by(t){hy(),t.effect(()=>t.locale.register(mc,{zh:{"mux.panel":"Mux"},en:{"mux.panel":"Mux"}}),"dsh-mux: dictionaries");let e=t.remote.$mount(py).then(r=>r).catch(r=>{console.error("dsh-mux: remote mount failed",r)});return window.__dshMux=Object.freeze({ready:e,call:(r,o,...i)=>{let s=t.get(`remote.${r}`);if(s===void 0||typeof s[o]!="function")throw new Error(`remote.${r}.${o} not available`);return s[o](...i)}}),t.slots.inject("sidebar.panellist",()=>t.slots.register({name:"sidebar.panellist",id:Jp,order:10,label:"Mux",locale:mc},fy)),t.slots.inject("main",()=>t.slots.register({name:"main",key:Jp,locale:mc},()=>pe.default.createElement(gy,{host:t,ready:e}))),()=>{e.then(r=>r?.()).catch(()=>{})}}
return module.exports; } });
