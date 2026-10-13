const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Studio--iul5Y11.js","./index-client-CIZGV0cj.js","./src-D2cA26iP.js","./core-BTxsdRQz.js","./Studio-B35loj7e.css"])))=>i.map(i=>d[i]);
import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,T as y,U as b,V as x,W as S,X as C,Y as w,Z as T,_ as E,a as D,at as O,b as k,bt as A,c as j,ct as M,d as N,dt as P,et as F,f as I,g as ee,gt as L,h as R,ht as te,i as ne,it as z,j as re,k as B,l as V,m as ie,mt as ae,n as oe,nt as H,ot as U,p as se,r as ce,rt as W,s as le,t as ue,tt as de,u as fe,ut as G,v as pe,w as me,x as he,z as K}from"./index-client-CIZGV0cj.js";import{i as ge,t as _e}from"./core-BTxsdRQz.js";import{_ as ve,a as ye,c as be,d as xe,f as Se,g as Ce,h as we,i as Te,l as Ee,m as De,n as Oe,o as ke,p as Ae,r as je,s as Me,t as Ne,u as Pe}from"./src-D2cA26iP.js";var Fe=Object.defineProperty,Ie=(e,t)=>{let n={};for(var r in e)Fe(n,r,{get:e[r],enumerable:!0});return t||Fe(n,Symbol.toStringTag,{value:`Module`}),n};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function Le(e,t,n=`application/json`){let r=URL.createObjectURL(new Blob([t],{type:`${n};charset=utf-8`})),i=Object.assign(document.createElement(`a`),{href:r,download:e,rel:`noopener`});i.style.display=`none`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),3e4)}function Re(e=`.json,application/json`){return new Promise(t=>{let n=Object.assign(document.createElement(`input`),{type:`file`,accept:e});n.style.display=`none`;let r=!1,i=e=>{r||(r=!0,n.remove(),t(e))};n.addEventListener(`change`,()=>i(n.files?.[0]??null)),n.addEventListener(`cancel`,()=>i(null)),document.body.appendChild(n),n.click()})}var ze=class{ctx=null;effects;ambience;reverb;noise;drone=null;levels={effects:.8,ambience:.4};constructor(){let e=()=>{if(this.start(),this.ctx)for(let t of[`pointerdown`,`keydown`])removeEventListener(t,e)};for(let t of[`pointerdown`,`keydown`])addEventListener(t,e)}setLevels(e,t){if(this.levels={effects:e,ambience:t},!this.ctx)return;let n=this.ctx.currentTime;this.effects.gain.setTargetAtTime(e,n,.05),this.ambience.gain.setTargetAtTime(t*.5,n,.4)}play(e,t={}){let n=this.ctx;if(!n||n.state!==`running`||this.levels.effects<=0)return;let r=n.currentTime+.005;for(let i of e)this.voice(n,i,r,t)}setAmbience(e,t=600){this.drone?.stop(),this.drone=null,this.pendingAmbience=e?{notes:e,brightness:t}:null;let n=this.ctx;if(!n||!e)return;let r=n.currentTime,i=n.createGain();i.gain.setValueAtTime(0,r),i.gain.linearRampToValueAtTime(1,r+3);let a=n.createBiquadFilter();a.type=`lowpass`,a.frequency.value=t,a.Q.value=.7;let o=n.createOscillator(),s=n.createGain();o.frequency.value=.05,s.gain.value=t*.35,o.connect(s).connect(a.frequency),a.connect(i).connect(this.ambience);let c=e.flatMap((t,i)=>[-6,6].map(o=>{let s=n.createOscillator(),c=n.createGain();return s.type=i===0?`triangle`:`sine`,s.frequency.value=t,s.detune.value=o,c.gain.value=.16/e.length,s.connect(c).connect(a),s.start(r),s}));o.start(r);let l,u=()=>{if(l=setTimeout(u,3800+Math.random()*6500),n.state!==`running`||document.hidden)return;let t=2**(2+Math.floor(Math.random()*2)),r=e[Math.floor(Math.random()*e.length)]*t,i=Math.random()*1.2-.6,a=n.currentTime+.02;this.voice(n,{freq:r,type:`sine`,attack:.02,decay:2.8,gain:.05,space:.9,pan:i},a,{},this.ambience),this.voice(n,{freq:r*2.01,type:`sine`,attack:.01,decay:1.2,gain:.015,space:.9,pan:i},a,{},this.ambience),Math.random()<.35&&this.voice(n,{freq:r*1.5,type:`sine`,attack:.02,decay:2.4,delay:.42,gain:.03,space:.95,pan:-i},a,{},this.ambience)};l=setTimeout(u,2500),this.drone={stop:()=>{clearTimeout(l);let e=n.currentTime;i.gain.cancelScheduledValues(e),i.gain.setTargetAtTime(0,e,.5);for(let t of[...c,o])t.stop(e+3)}}}pendingAmbience=null;start(){if(this.ctx){this.ctx.resume();return}let e=window.AudioContext??window.webkitAudioContext;if(!e)return;let t=new e({latencyHint:`interactive`});this.ctx=t;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,n.connect(t.destination),this.effects=t.createGain(),this.ambience=t.createGain(),this.effects.connect(n),this.ambience.connect(n),this.reverb=t.createConvolver(),this.reverb.buffer=Be(t,2.4);let r=t.createGain();r.gain.value=.35,this.reverb.connect(r).connect(n);let i=t.createGain();i.gain.value=.8,this.ambience.connect(i).connect(this.reverb),this.noise=t.createBuffer(1,t.sampleRate,t.sampleRate);let a=this.noise.getChannelData(0);for(let e=0;e<a.length;e++)a[e]=Math.random()*2-1;this.setLevels(this.levels.effects,this.levels.ambience),this.pendingAmbience&&this.setAmbience(this.pendingAmbience.notes,this.pendingAmbience.brightness)}voice(e,t,n,r,i=this.effects){let a=n+(t.delay??0),o=t.attack??.004,s=a+o+t.decay,c=r.pitch??1,l=e.createGain();l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(Math.max(2e-4,(t.gain??.3)*(r.gain??1)),a+o),l.gain.exponentialRampToValueAtTime(1e-4,s);let u,d;if(t.type===`noise`){let n=e.createBufferSource();n.buffer=this.noise,n.loop=!0;let r=e.createBiquadFilter();r.type=`bandpass`,r.frequency.value=t.freq*c,r.Q.value=t.q??1,t.to&&r.frequency.exponentialRampToValueAtTime(t.to*c,s),n.connect(r),u=n,d=r}else{let n=e.createOscillator();if(n.type=t.type??`sine`,n.frequency.setValueAtTime(t.freq*c,a),t.to&&n.frequency.exponentialRampToValueAtTime(t.to*c,s),u=n,d=n,t.filter){let n=e.createBiquadFilter();n.type=`lowpass`,n.frequency.value=t.filter,n.Q.value=t.q??.7,d.connect(n),d=n}}let f=e.createStereoPanner();if(f.pan.value=Math.max(-1,Math.min(1,(t.pan??0)+(r.pan??0))),d.connect(l).connect(f).connect(i),t.space&&i===this.effects){let n=e.createGain();n.gain.value=t.space,f.connect(n).connect(this.reverb)}u.start(a),u.stop(s+.05)}};function Be(e,t){let n=Math.floor(e.sampleRate*t),r=e.createBuffer(2,n,e.sampleRate);for(let e=0;e<2;e++){let t=r.getChannelData(e);for(let e=0;e<n;e++)t[e]=(Math.random()*2-1)*(1-e/n)**3.2}return r}Object.freeze({inputBytes:16777216,outputBytes:33554432,games:128,expressions:256}),new TextEncoder,new TextDecoder(`utf-8`,{fatal:!0});var Ve=``,He=new Set([`__heapsUndefined`,`__heapsNumber`,`__heapsBigInt`,`__heapsType`]);function Ue(e){if(He.has(e))return`k`+e+`;`;if(!/[\ue000\ud800-\udfff]/u.test(e))return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r===57344?t+=``:r>=55296&&r<=56319&&e.charCodeAt(n+1)>=56320&&e.charCodeAt(n+1)<=57343?t+=e[n]+e[++n]:t+=r>=55296&&r<=57343?`u`+r.toString(16).padStart(4,`0`)+`;`:e[n]}return t}function We(e){if(!e.includes(Ve))return e;let t=``;for(let n=0;n<e.length;n++){if(e[n]!==Ve){t+=e[n];continue}if(e[n+1]===Ve){t+=Ve,n++;continue}let r=null;if(e[n+1]===`k`){for(let t of He)if(e.startsWith(`k`+t+`;`,n+1)){r=t;break}}if(r){t+=r,n+=r.length+2;continue}let i=e.slice(n+2,n+6),a=Number.parseInt(i,16);e[n+1]===`u`&&e[n+6]===`;`&&/^[\da-f]{4}$/i.test(i)&&a>=55296&&a<=57343?(t+=String.fromCharCode(a),n+=6):t+=Ve}return t}function Ge(e,t=new Set){if(typeof e==`string`)return Ue(e);if(typeof e==`number`&&!Number.isFinite(e))return{__heapsNumber:String(e)};if(e===void 0)return{__heapsUndefined:!0};if(typeof e==`bigint`)return{__heapsBigInt:e.toString()};if(typeof e==`function`||typeof e==`symbol`)return{__heapsType:typeof e};if(!e||typeof e!=`object`)return e;if(t.has(e))throw TypeError(`Le pont Rust ne transporte pas de références circulaires.`);t.add(e);try{if(Array.isArray(e))return Array.from(e,e=>Ge(e,t));let n=Object.create(null);for(let[r,i]of Object.entries(e))n[Ue(r)]=Ge(i,t);return n}finally{t.delete(e)}}function Ke(e){if(typeof e==`string`)return We(e);if(!e||typeof e!=`object`)return e;if(Array.isArray(e))return e.map(Ke);let t={};for(let[n,r]of Object.entries(e))Object.defineProperty(t,We(n),{value:Ke(r),enumerable:!0,writable:!0,configurable:!0});return t}function qe(e){return new Worker(new URL(`wasm-worker-D821PD1M.js`,import.meta.url).href,{type:`module`,name:e?.name})}var Je=class extends Error{code;constructor(e,t=``,n=`Error`){super(e),this.code=t,this.name=n}},Ye=()=>new Je(`Calcul annulé.`,``,`AbortError`);function Xe(e){if(e instanceof Je)return e;let t=e??{};return new Je(typeof e==`string`?e:t.message||`Le moteur a échoué.`,t.code??``,t.name||`Error`)}function Ze(){let e=1;return{async call(t,n,r,{signal:i,onProgress:a}){let o={op:n,args:Ge(r)};try{if(t===`fast`)return Ke(await ge(`engine`,o));if(i?.aborted)throw Ye();let n=e++,r=new _e;r.onmessage=e=>a?.(Ke(e));let s=ge(`analyse`,{...o,job:n,progress:r});return i?await new Promise((e,t)=>{let r=()=>{ge(`cancel`,{job:n}),t(Ye())};i.addEventListener(`abort`,r,{once:!0}),s.then(t=>e(Ke(t)),t).finally(()=>i.removeEventListener(`abort`,r))}):Ke(await s)}catch(e){throw Xe(e)}},async batch(e){try{return(await ge(`engine_batch`,{calls:e.map(([e,t])=>[e,Ge(t)])})).map(e=>e.ok?{ok:!0,value:Ke(e.value)}:e)}catch(e){throw Xe(e)}}}}var Qe=class{worker=new qe;pending=new Map;nextId=1;constructor(e){this.worker.postMessage({module:e}),this.worker.onmessage=({data:e})=>{let t=this.pending.get(e.id);t&&(`progress`in e?t.onProgress?.(e.progress):(this.pending.delete(e.id),e.ok?t.resolve(e.value):t.reject(Xe(e.error))))},this.worker.onerror=()=>this.fail(new Je(`Le moteur WebAssembly a rencontré une erreur.`))}get busy(){return this.pending.size>0}call(e,t,n){return this.send({op:e,args:t,progress:!!n},n)}batch(e){return this.send({batch:e})}send(e,t){let n=this.nextId++;return new Promise((r,i)=>{this.pending.set(n,{resolve:r,reject:i,onProgress:t});try{this.worker.postMessage({id:n,...e})}catch{this.worker.postMessage(JSON.parse(JSON.stringify({id:n,...e})))}})}fail(e){for(let t of this.pending.values())t.reject(e);this.pending.clear()}terminate(){this.worker.terminate(),this.fail(Ye())}};function $e(){let e=(async()=>{let e=new URL(`wasm/heaps_engine.wasm`,document.baseURI).href,t=await fetch(e);if(!t.ok)throw new Je(`Moteur introuvable (${t.status}).`);if(`compileStreaming`in WebAssembly&&/^application\/wasm\b/.test(t.headers.get(`content-type`)??``))try{return await WebAssembly.compileStreaming(t.clone())}catch{}return WebAssembly.compile(await t.arrayBuffer())})(),t=null,n=[];return{async call(r,i,a,{signal:o,onProgress:s}){let c=await e;if(r===`fast`)return(t??=new Qe(c)).call(i,a);if(o?.aborted)throw Ye();let l=n.pop()??new Qe(c),u=()=>l.terminate();o?.addEventListener(`abort`,u,{once:!0});try{let e=await l.call(i,a,s);return n.length<3?n.push(l):l.worker.terminate(),e}finally{o?.removeEventListener(`abort`,u)}},async batch(n){return(t??=new Qe(await e)).batch(n)}}}var et=ve?Ze():$e();function tt(e,t){return et.call(`fast`,e,t,{})}async function nt(e){return e.length?(await et.batch(e)).map(e=>e.ok?{ok:!0,value:e.value}:{ok:!1,error:Xe(e.error)}):[]}function rt(e,t,n={}){return et.call(`job`,e,t,n)}var it=new WeakMap;function at(e){let t=it.get(e);return t||(t=tt(`registerGame`,{game:e}).then(e=>e.handle),it.set(e,t),t.catch(()=>it.delete(e))),t}async function ot(e,t,n){for(let r=0;;r++){let i={gameRef:await at(n)};try{return await tt(e,{...t,game:i})}catch(e){if(r===0&&e instanceof Je&&e.code===`GAME_HANDLE_EXPIRED`){it.delete(n);continue}throw e}}}var st=Ie({botPlayerOf:()=>ut,engine:()=>ct,playerAt:()=>lt,positionAt:()=>ft,winnerAt:()=>dt}),ct={metadata:()=>tt(`metadata`,{}),createGame:(e,t={})=>tt(`createGame`,{id:e,overrides:t}),validateGame:e=>tt(`validateGame`,{raw:e}),validatePosition:(e,t)=>ot(`validatePosition`,{position:e},t),validateMove:(e,t,n)=>ot(`validateMove`,{before:e,after:t},n),parsePiles:e=>tt(`parsePiles`,{text:e}),normalizeAIDifficulty:e=>tt(`normalizeAIDifficulty`,{value:e}),pileCountBounds:e=>tt(`pileCountBounds`,{id:e}),generatePiles:e=>tt(`generatePiles`,{options:e}),resizePiles:(e,t)=>tt(`resizePiles`,{piles:e,count:t}),formatNumber:(e,t)=>tt(`formatNumber`,{value:e,options:t}),parseNumber:(e,t)=>tt(`parseNumber`,{text:e,options:t}),templateExpression:e=>tt(`templateExpression`,{options:e}),validateAutomaton:(e,t)=>tt(`validateAutomaton`,{raw:e,pileCount:t}),oddRemovalAutomaton:()=>tt(`oddRemovalAutomaton`,{}),runAutomaton:(e,t,n)=>tt(`runAutomaton`,{automaton:e,before:t,after:n,options:{trace:!0}}),makeSession:(e,t,n,r,i)=>tt(`makeSession`,{game:e,initial:t,opponent:n,name:r,difficulty:i}),sessionCapacity:e=>tt(`sessionCapacity`,{value:e,json:JSON.stringify(e)}),appendSessionMove:(e,t)=>tt(`appendSessionMove`,{value:e,move:t}),validateSession:(e,t)=>rt(`validateSession`,{value:e,options:{timeMs:t.timeMs??15e3}},t),validateGameLibrary:e=>tt(`validateGameLibrary`,{value:e}),prepareGameLibraryEntry:(e,t)=>tt(`prepareGameLibraryEntry`,{items:e,item:t,includeIdentity:!0}),terminalStatus:(e,t,n,r)=>rt(`terminalStatus`,{before:e,game:t,options:n},r),hint:(e,t,n,r)=>rt(`hint`,{before:e,game:t,options:n},r),chooseAIMove:(e,t,n,r)=>rt(`chooseAIMove`,{before:e,game:t,options:n},r),assessBotDecision:e=>tt(`assessBotDecision`,e),legalMoveOptions:(e,t,n)=>tt(`legalMoveOptions`,{position:e,game:t,settings:n}),enumerateLegalMoves:(e,t,n,r)=>rt(`enumerateLegalMoves`,{position:e,game:t,options:n},r),legalMoves:(e,t,n,r)=>rt(`legalMoves`,{before:e,game:t,options:n},r),validateStrategySpec:e=>tt(`validateStrategySpec`,{raw:e}),verifyStrategy:(e,t,n)=>rt(`verifyStrategy`,{raw:e,options:{...t,_hasProgress:!!n?.onProgress}},n),classifyPositions:(e,t={},n)=>rt(`classifyPositions`,{raw:e,options:{...t,_hasProgress:!!n?.onProgress}},n),evaluatePositions:(e,t={},n)=>rt(`evaluatePositions`,{raw:e,options:t},n)},lt=e=>e%2,ut=e=>e===`bot-first`?0:1,dt=(e,t)=>t===`normal`?1-lt(e):lt(e),ft=e=>e.cursor===0?e.initial:e.moves[e.cursor-1].after,pt;async function mt(){return pt=await ct.metadata(),pt}var ht=()=>pt.PRESETS.filter(e=>e.id!==`custom`&&e.id!==`automaton`),gt=e=>pt.PRESETS.find(t=>t.id===e),_t=e=>pt.AI_LEVELS.find(t=>t.id===e)??pt.AI_LEVELS[2],vt=[`aurora`,`ember`,`monolith`,`nebula`,`jade`,`sakura`,`circuit`,`rainbow`,`casino`,`observatory`,`atlantis`],yt=[{id:`aurora`,label:`Aurora`,description:`Glace et or · lumière boréale`,accent:`#52eff2`,warm:`#ffc46b`,background:`#050a10`,sky:{horizon:`#0b2a3a`,zenith:`#03070c`,glow:`#1ff0ff`},floor:`#05080e`,pedestal:`#0a1016`,chips:{material:`metal`,colors:[`#1fabba`,`#d18030`]},music:{notes:[110,164.81,246.94],brightness:700},camera:`high`},{id:`ember`,label:`Ember`,description:`Cuivre et braises · chaleur minérale`,accent:`#ff9565`,warm:`#ffd49b`,background:`#0d070a`,sky:{horizon:`#3a120a`,zenith:`#0a0407`,glow:`#ff661f`},floor:`#0c0608`,pedestal:`#160b0a`,chips:{material:`metal`,colors:[`#e85c21`,`#b27d45`]},music:{notes:[73.42,110,174.61],brightness:450},camera:`high`},{id:`monolith`,label:`Monolith`,description:`Argent et graphite · studio sobre`,accent:`#d2e4ff`,warm:`#bcc9ec`,background:`#060709`,sky:{horizon:`#1a1e26`,zenith:`#060709`,glow:`#bdd9ff`},floor:`#07080b`,pedestal:`#0e1013`,chips:{material:`metal`,colors:[`#a3b0bf`,`#7a859e`]},music:{notes:[65.41,98,146.83],brightness:380},camera:`high`},{id:`nebula`,label:`Nebula`,description:`Améthyste et étoiles · cosmos violet`,accent:`#bc91ff`,warm:`#84eaff`,background:`#06030f`,sky:{horizon:`#2a1048`,zenith:`#04020b`,glow:`#a35cff`},floor:`#06040e`,pedestal:`#110a1b`,chips:{material:`metal`,colors:[`#9e4fdb`,`#21a8d1`]},music:{notes:[92.5,138.59,220],brightness:750},camera:`high`},{id:`jade`,label:`Jade`,description:`Émeraude et bronze · ondes calmes`,accent:`#76e9b1`,warm:`#e9c384`,background:`#030a07`,sky:{horizon:`#0b2a1c`,zenith:`#030806`,glow:`#4af2a6`},floor:`#040b08`,pedestal:`#09150f`,chips:{material:`stone`,colors:[`#2eb26e`,`#bf8c40`]},music:{notes:[98,146.83,246.94],brightness:520},camera:`high`},{id:`sakura`,label:`Sakura`,description:`Porcelaine et cuivre rose · pétales`,accent:`#ffd1e4`,warm:`#ffcca9`,background:`#28141e`,sky:{horizon:`#5a2c42`,zenith:`#1f111b`,glow:`#ff96c4`},floor:`#251820`,pedestal:`#301f29`,chips:{material:`porcelain`,colors:[`#e8c2d9`,`#c26952`]},music:{notes:[164.81,246.94,329.63],brightness:900},camera:`high`},{id:`circuit`,label:`Circuit`,description:`Lime et cobalt · grille électrique`,accent:`#d1ff64`,warm:`#78baff`,background:`#020507`,sky:{horizon:`#0a2418`,zenith:`#020406`,glow:`#adff30`},floor:`#030709`,pedestal:`#070b0f`,chips:{material:`metal`,colors:[`#a8e329`,`#1f7df5`]},music:{notes:[61.74,92.5,146.83],brightness:820},camera:`high`},{id:`rainbow`,label:`Rainbow`,description:`Une couleur par pile · spectre métallique`,accent:`#8be9fd`,warm:`#f7b3ed`,background:`#070e1c`,sky:{horizon:`#1c2450`,zenith:`#050912`,glow:`#b2d1f5`},floor:`#060a12`,pedestal:`#0b1017`,chips:{material:`metal`,colors:[`#3dbdcf`,`#e06eb2`]},spectrum:!0,music:{notes:[130.81,164.81,196,246.94],brightness:1e3},camera:`high`},{id:`casino`,label:`Monte-Carlo`,description:`Feutre vert · laiton · jetons de poker`,accent:`#69d79d`,warm:`#e2bb65`,background:`#070b08`,sky:{horizon:`#1b2a1e`,zenith:`#060a07`,glow:`#e8b85e`},floor:`#072916`,pedestal:`#150b07`,chips:{material:`clay`,colors:[`#c7212b`,`#f0e6c2`,`#3266b0`]},music:{notes:[73.42,87.31,130.81,164.81],brightness:520},camera:`low`},{id:`observatory`,label:`Observatoire`,description:`Coupole céleste · lapis et laiton`,accent:`#91bdf4`,warm:`#efd394`,background:`#040711`,sky:{horizon:`#13224a`,zenith:`#030610`,glow:`#91baf5`},floor:`#070b16`,pedestal:`#0b101e`,chips:{material:`metal`,colors:[`#477dc9`,`#cca359`]},music:{notes:[77.78,116.54,174.61],brightness:620},camera:`low`},{id:`atlantis`,label:`Atlantis`,description:`Cité sous-marine · nacre et turquoise`,accent:`#89eddf`,warm:`#dfd2a0`,background:`#030c10`,sky:{horizon:`#0b3a44`,zenith:`#020a10`,glow:`#73ebe0`},floor:`#06161c`,pedestal:`#0c1a20`,chips:{material:`porcelain`,colors:[`#4ac4b8`,`#d4e0d1`]},music:{notes:[55,82.41,138.59],brightness:420},camera:`low`}];function bt(e){return yt.find(t=>t.id===e)??yt[0]}function xt(e,t){if(!e.spectrum)return e.chips.colors[t%e.chips.colors.length];let n=(190/360+t*.3819660112501051)%1,r=[56,64,48,70][Math.floor(t/128)%4];return`hsl(${Math.round(n*360)}, 66%, ${r}%)`}function St(e,t){switch(e.chips.material){case`clay`:return t%e.chips.colors.length===1?`#b0222c`:`#f2ead3`;case`porcelain`:return`#d9b25f`;case`stone`:return`#b48a4a`;default:return e.warm}}var Ct=(()=>{try{return new URLSearchParams(location.search).has(`preview`)}catch{return!1}})(),wt=Ct?`heaps.preview.`:`heaps.`,Tt={settings:wt+`settings.v2`,session:wt+`session.v1`,library:wt+`library.v1`,scores:wt+`scores.v1`,strategies:wt+`strategies.v1`,records:wt+`records.v1`};if(!Ct)try{let e=[[`strata.session.v1`,Tt.session],[`strata.library.v1`,Tt.library],[`strata.strategies.v1`,Tt.strategies],[`strata.settings.v1`,Tt.settings]];for(let[t,n]of e){let e=localStorage.getItem(t);e!==null&&localStorage.getItem(n)===null&&localStorage.setItem(n,e)}}catch{}function Et(e){let t=null;try{return t=localStorage.getItem(e),{value:t===null?null:JSON.parse(t),present:t!==null,error:null}}catch(e){return{value:null,present:t!==null,error:`Sauvegarde inaccessible : ${e.message}`}}}function Dt(e,t){try{return localStorage.setItem(e,t),!0}catch{return!1}}var Ot=Ie({motionAllowed:()=>jt,numerationOf:()=>Mt,prefs:()=>q}),kt=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches,q=be(Tt.settings,{theme:`aurora`,quality:`auto`,motion:!kt,sound:!0,effectsVolume:.7,ambienceVolume:.35,budget:1500,difficulty:`hard`,numeration:`decimal`,base:3,showLegalMoves:!0,guideV2:!1,consoleOpen:!0,consoleTab:`advice`,welcomed:!1,setupGame:`nim`,setupSize:`medium`,setupRival:`bot`,setupFirst:`me`});vt.includes(q.theme)||(q.theme=`aurora`),q.quality===`low`&&(q.quality=`eco`),[`auto`,`high`,`balanced`,`eco`].includes(q.quality)||(q.quality=`auto`),[`advice`,`moves`,`history`,`rules`].includes(q.consoleTab)||(q.consoleTab=`advice`),[300,1500,5e3].includes(q.budget)||(q.budget=1500);var At={discovery:`simple`,balanced:`medium`,master:`godlike`,expert:`hard`};At[q.difficulty]&&(q.difficulty=At[q.difficulty]),[`simple`,`medium`,`hard`,`godlike`].includes(q.difficulty)||(q.difficulty=`hard`),[`decimal`,`binary`,`hex`,`fibonacci`,`custom`].includes(q.numeration)||(q.numeration=`decimal`),[`short`,`medium`,`long`].includes(q.setupSize)||(q.setupSize=`medium`),q.setupRival!==`local`&&(q.setupRival=`bot`),q.setupFirst!==`ai`&&(q.setupFirst=`me`),q.guideV2||=(q.showLegalMoves=!0,!0),(!Number.isInteger(q.base)||q.base<2||q.base>36)&&(q.base=3);for(let e of[`effectsVolume`,`ambienceVolume`])q[e]>=0&&q[e]<=1||(q[e]=e===`effectsVolume`?.7:.35);var jt=()=>q.motion&&!kt;function Mt(){return q.numeration===`fibonacci`?{kind:`fibonacci`}:{kind:`base`,base:{decimal:10,binary:2,hex:16,custom:q.base}[q.numeration]??10}}var Nt={players:[0,1].map(e=>({player:e,points:0,combo:0,comboCertain:!0,last:null})),pending:0,storageBlocked:!1,counterUnavailable:!1},Pt=e=>({points:null,isP:null,quality:`unknown`,distance:null,reason:e,distanceExact:!1});function Ft(e,t,n){let r=setTimeout(()=>n.abort(),t+4e3);return e(n.signal).finally(()=>clearTimeout(r))}var It=class{#e=U(Nt);get snapshot(){return d(this.#e)}set snapshot(e){O(this.#e,e)}#t=U(null);get award(){return d(this.#t)}set award(e){O(this.#t,e)}#n=U(!1);get victoryUnavailable(){return d(this.#n)}set victoryUnavailable(e){O(this.#n,e,!0)}session=null;header=null;records=[];outcome=null;saved=null;storageBlocked=!1;counterUnavailable=!1;lastSnapshot=null;paused=!0;revision=0;active=null;ending=null;lastCursor=0;queue=Promise.resolve();keys=new WeakMap;constructor(){this.enqueue(()=>this.restore())}sync(e,t={}){return this.enqueue(()=>this.doSync(e,t))}record(e,t,{human:n=!0}={}){return this.enqueue(async()=>{await this.doSync(e);let r=await tt(`planScoreRecord`,{index:t,cursor:e.cursor,move:e.moves[t],human:n,previous:this.records[t],length:this.records.length,activeIndex:this.active?.index});if(!r.skip){r.cancel&&this.cancel(),this.records.length=r.length;for(let e=0;e<t;e++)this.records[e]===void 0&&(this.records[e]=null);this.records[t]={key:r.key,human:r.human,player:r.player,result:null},this.persist(),await this.publish(),this.pump()}})}finish(e){return this.enqueue(async()=>{await this.doSync(e);let t=this.context();this.ending&&Lt(this.ending,t)||(this.ending={...t,position:(t.position??[]).slice(),done:!1},this.pump())})}suspend(){this.paused=!0,this.cancel()}resume(){this.paused=!1,this.enqueue(async()=>this.pump())}enqueue(e){return this.queue=this.queue.then(e).catch(e=>console.warn(`Score :`,e)),this.queue}async restore(){let e=Et(Tt.scores);if(e.present)try{if(e.error)throw Error(e.error);this.saved=await tt(`restoreScoreDocument`,{raw:JSON.stringify(e.value),value:e.value})}catch{this.storageBlocked=!0}}async moveKeys(e){let t=[],n=[],r=e.moves.map((e,r)=>{let i=this.keys.get(e)?.get(r);return i===void 0&&(t.push([`scoreMoveKey`,{index:r,move:e}]),n.push(r)),i??``});return(await nt(t)).forEach((t,i)=>{if(!t.ok)throw t.error;let a=n[i],o=e.moves[a],s=this.keys.get(o);s||this.keys.set(o,s=new Map),s.set(a,t.value),r[a]=t.value}),r}context(){let e=this.session,t=e?.cursor??0;return{header:this.header,cursor:t,opponent:e?.opponent,lastMoveKey:e&&t?this.keys.get(e.moves[t-1])?.get(t-1)??null:null,position:e?t?e.moves[t-1].after:e.initial:void 0}}async doSync(e,{reset:t=!1}={}){let n=await this.moveKeys(e),r=await tt(`scoreHeader`,{game:e.game,initial:e.initial,name:e.name}),i=await tt(`planScoreSync`,{moveCount:e.moves.length,cursor:e.cursor,moveKeys:n,header:this.header,nextHeader:r,reset:t,savedHeader:this.saved?.header,savedKeys:this.saved?.records.map(e=>e?.key??null),recordKeys:this.records.map(e=>e?.key??null),hasSession:!!this.session,lastCursor:this.lastCursor,active:!!this.active});if(i.cancel&&this.cancel(),this.header=i.header,i.replacement!==`keep`){let e=i.replacement===`saved`?this.saved:null;this.records=e?e.records:[],this.outcome=e?.outcome??null,this.saved=null,this.ending=null,this.lastSnapshot=null,this.counterUnavailable=!1,this.victoryUnavailable=!1}this.records.length!==i.length&&(this.records=this.records.slice(0,i.length)),this.session=e,this.lastCursor=e.cursor,this.ending&&!Lt(this.ending,this.context())&&(this.active&&this.active.index===void 0&&this.cancel(),this.ending=null),i.persist&&this.persist(),await this.publish(),this.pump()}async computeSnapshot(){if(!this.counterUnavailable)try{this.lastSnapshot=await tt(`scoreSnapshot`,{records:this.records,...this.context(),outcome:this.outcome})}catch{this.counterUnavailable=!0}return{...this.lastSnapshot??Nt,storageBlocked:this.storageBlocked,counterUnavailable:this.counterUnavailable}}async publish(e={},t){this.snapshot=t??await this.computeSnapshot(),e.victoryUnavailable&&(this.victoryUnavailable=!0),e.award&&e.award.points>0&&!this.snapshot.counterUnavailable&&(this.award=e.award)}persist(){if(this.storageBlocked||!this.header)return;let e=JSON.stringify({schema:`heaps.scores`,version:1,metric:`p-proximity-v1`,header:this.header,records:this.records,...this.outcome?{outcome:this.outcome}:{}});(new TextEncoder().encode(e).byteLength>2e6||!Dt(Tt.scores,e))&&(this.storageBlocked=!0)}cancel(){this.revision++,this.active?.controller.abort(),this.active=null}pump(){let e=this.session;if(this.paused||this.active||!e||this.counterUnavailable)return;let t=this.records.slice(0,e.cursor).findIndex(e=>e?.human===!0&&e.result===null);if(t<0){this.pumpVictory();return}let n=this.records[t],r=e.moves[t],i=this.revision,a=new AbortController,o={index:t,record:n,controller:a};this.active=o,Ft(t=>rt(`evaluateMoveScore`,{before:r.before,after:r.after,game:e.game,options:{timeMs:300,profile:`rich`}},{signal:t}),300,a).then(e=>[e,null],e=>[null,e]).then(([e,r])=>this.enqueue(async()=>{if(this.active!==o||i!==this.revision||this.records[t]!==n)return;this.active=null;let a=await this.computeSnapshot();try{n.result=await tt(`normalizeScoreResult`,{value:r?null:e})}catch{n.result=Pt(`Calcul de score incomplet. Les points acquis sont conservés.`)}this.persist();let s=await this.computeSnapshot(),c=await tt(`scoreAward`,{before:a,after:s,player:n.player,result:n.result}).catch(()=>({}));await this.publish(c,s),this.pump()}))}pumpVictory(){let e=this.session,t=this.ending;if(!e||!t||t.done||this.active||this.paused)return;let n=this.revision,r=new AbortController,i={controller:r};this.active=i,Ft(n=>rt(`evaluateVictoryScore`,{position:t.position,game:e.game,options:{cursor:t.cursor,opponent:t.opponent,timeMs:80}},{signal:n}),80,r).then(e=>[e,null],e=>[null,e]).then(([e,r])=>this.enqueue(async()=>{if(this.active!==i||n!==this.revision||this.ending!==t)return;if(this.active=null,t.done=!0,r){await this.publish({victoryUnavailable:!0});return}let a=await this.computeSnapshot();try{let n=await tt(`planScoreVictory`,{...t,result:e,previous:this.outcome});if(!n.skip&&n.outcome){this.outcome=n.outcome,this.persist();let e=await this.computeSnapshot(),t=await tt(`scoreAward`,{before:a,after:e,player:n.outcome.winner,result:n.outcome});await this.publish(t,e)}else e?.certified===!1&&await this.publish({victoryUnavailable:!0})}catch{await this.publish({victoryUnavailable:!0})}}))}};function Lt(e,t){return e.header===t.header&&e.cursor===t.cursor&&e.lastMoveKey===t.lastMoveKey&&e.opponent===t.opponent}var Rt=Ie({closeDialog:()=>Ht,openDialog:()=>Vt,toast:()=>Bt,ui:()=>J}),J=z({flow:`menu`,view:`forge`,dialog:null,fromPause:!1,setup:!1,setupReturn:`menu`,newGamePreset:null,toast:{text:``,key:0}}),zt;function Bt(e){J.toast={text:e,key:J.toast.key+1},clearTimeout(zt),zt=setTimeout(()=>{J.toast={text:``,key:J.toast.key}},5e3)}function Vt(e,t={}){J.fromPause=!!t.fromPause,J.dialog=e}function Ht(){J.dialog=J.fromPause?`pause`:null,J.fromPause=!1}var Ut=new class{#e=U([]);get items(){return d(this.#e)}set items(e){O(this.#e,e)}blocked=!1;async restore(){let e=Et(Tt.library);if(!e.present)return;let t=e.error?{ok:!1,reason:e.error,items:[]}:await ct.validateGameLibrary(e.value);t.ok?this.items=Object.freeze(t.items):(this.blocked=!0,setTimeout(()=>Bt(`L’ancienne bibliothèque est conservée ; écriture suspendue : ${t.reason} Exportez vos nouvelles créations.`),750))}remove(e){if(e<0||e>=this.items.length)return!1;let t=this.items.filter((t,n)=>n!==e);return this.items=Object.freeze(t),!this.blocked&&Dt(Tt.library,JSON.stringify(t))}async save(e){let t=await ct.prepareGameLibraryEntry(this.items,e);if(!t.ok)return{ok:!1,persisted:!1,reason:t.reason??``};let{replaceIndex:n}=t,r=t.items.map((t,r)=>r===n||r===this.items.length?e:this.items[r]);return this.items=Object.freeze(r),!this.blocked&&Dt(Tt.library,JSON.stringify(r))?{ok:!0,persisted:!0,reason:``}:{ok:!1,persisted:!1,reason:this.blocked?`L’ancienne bibliothèque est conservée : son contenu ne peut pas être relu. Ce jeu reste disponible dans cette session ; exportez-le pour le conserver.`:`Le jeu reste disponible dans cette session, mais le navigateur ne l’a pas enregistré. Exportez-le pour le conserver.`}}},Wt=2e6,Gt=e=>{let t=e;return!!(t&&t.schema===`strata.strategy`&&t.version===1&&typeof t.name==`string`&&t.game&&Array.isArray(t.bounds)&&typeof t.candidate?.losingExpression==`string`)},Kt=new class{#e=U([]);get items(){return d(this.#e)}set items(e){O(this.#e,e)}blocked=!1;restore(){let e=Et(Tt.strategies);if(!e.present)return;this.blocked=!1;let t=e.value;e.error||t?.schema!==`strata.strategy.library`||t.version!==1||!Array.isArray(t.items)?this.blocked=!0:this.items=Object.freeze(t.items.filter(Gt).slice(0,100))}write(e){let t=JSON.stringify({schema:`strata.strategy.library`,version:1,items:e});return this.blocked?`Le carnet existant ne peut pas être relu : il est conservé et l’écriture est suspendue. Exportez ce document.`:new TextEncoder().encode(t).byteLength>Wt?`Le carnet dépasserait 2 Mo. Exportez ou retirez d’anciens documents.`:Dt(Tt.strategies,t)?``:`Le navigateur n’a pas enregistré le carnet. Exportez ce document pour le conserver.`}save(e){if(this.restore(),this.items.length>=100)return`Le carnet contient déjà 100 documents. Retirez-en un pour enregistrer.`;let t=[{schema:`strata.strategy`,version:1,...e,id:crypto.randomUUID(),savedAt:new Date().toISOString()},...this.items],n=this.write(t);return n||(this.items=Object.freeze(t)),n}remove(e){this.restore();let t=this.items.filter(t=>t.id!==e),n=this.write(t);return n||(this.items=Object.freeze(t)),n}},qt={text:`Un coup peut tout changer. Demandez une analyse de votre position.`,badge:``,partial:!1,after:null,busy:!1,asked:!1,source:null},Jt={phase:`off`,count:`—`,note:``,complete:!1,moves:[]},Yt=`Les anneaux lumineux marquent où couper ; seul « Jouer le coup » valide un retrait.`,Xt=new Intl.NumberFormat(`fr-BE`),Zt=e=>new Promise(t=>setTimeout(t,e)),Qt=e=>Object.freeze(e),Y=new class{#e=U(null);get session(){return d(this.#e)}set session(e){O(this.#e,e)}#t=U([]);get preview(){return d(this.#t)}set preview(e){O(this.#t,e)}#n=U(null);get verdict(){return d(this.#n)}set verdict(e){O(this.#n,e)}#r=U(!1);get terminal(){return d(this.#r)}set terminal(e){O(this.#r,e,!0)}#i=U(``);get endReason(){return d(this.#i)}set endReason(e){O(this.#i,e,!0)}#a=U(!0);get suspended(){return d(this.#a)}set suspended(e){O(this.#a,e,!0)}#o=U(!1);get botBusy(){return d(this.#o)}set botBusy(e){O(this.#o,e,!0)}#s=U(!1);get botPaused(){return d(this.#s)}set botPaused(e){O(this.#s,e,!0)}#c=U(null);get botHold(){return d(this.#c)}set botHold(e){O(this.#c,e)}#l=U(``);get notice(){return d(this.#l)}set notice(e){O(this.#l,e,!0)}#u=U(qt);get hint(){return d(this.#u)}set hint(e){O(this.#u,e)}#d=U(Jt);get legal(){return d(this.#d)}set legal(e){O(this.#d,e)}#f=U(-1);get legalFocus(){return d(this.#f)}set legalFocus(e){O(this.#f,e,!0)}#p=U(!1);get importing(){return d(this.#p)}set importing(e){O(this.#p,e,!0)}#m=U(!1);get committing(){return d(this.#m)}set committing(e){O(this.#m,e,!0)}#h=U(null);get load(){return d(this.#h)}set load(e){O(this.#h,e)}#g=U(`● Sauvegarde locale`);get saveLabel(){return d(this.#g)}set saveLabel(e){O(this.#g,e,!0)}score=new It;#_=M(()=>this.session?ft(this.session):[]);get position(){return d(this.#_)}set position(e){O(this.#_,e)}#v=M(()=>lt(this.session?.cursor??0));get player(){return d(this.#v)}set player(e){O(this.#v,e)}#y=M(()=>ut(this.session?.opponent??`local`));get botPlayer(){return d(this.#y)}set botPlayer(e){O(this.#y,e)}#b=M(()=>(this.session?.opponent??`local`)===`local`);get local(){return d(this.#b)}set local(e){O(this.#b,e)}#x=M(()=>!this.suspended&&!this.importing&&!this.local&&this.player===this.botPlayer&&!this.botPaused);get isBotTurn(){return d(this.#x)}set isBotTurn(e){O(this.#x,e)}#S=M(()=>this.suspended||this.importing||this.terminal||this.botBusy||this.committing||!!this.botHold||this.isBotTurn);get locked(){return d(this.#S)}set locked(e){O(this.#S,e)}#C=M(()=>this.position.some((e,t)=>e!==this.preview[t]));get changed(){return d(this.#C)}set changed(e){O(this.#C,e)}#w=M(()=>this.terminal&&this.session?dt(this.session.cursor,this.session.game.mode):null);get winner(){return d(this.#w)}set winner(e){O(this.#w,e)}#T=M(()=>this.session?this.session.name||gt(this.session.game.id)?.title||`Votre partie`:``);get title(){return d(this.#T)}set title(e){O(this.#T,e)}epoch=0;movedEpoch=-1;jobs=new Map;storageBlocked=!1;verdictRevision=0;importSerial=0;loadController=null;saveTimer;wheelEdit={index:-1,at:-1/0};listeners=new Map;on(e,t){let n=this.listeners.get(e);return n||this.listeners.set(e,n=new Set),n.add(t),()=>{n.delete(t)}}emit(e,t){for(let n of this.listeners.get(e)??[])n(t)}playerLabel(e){return this.local?`Joueur ${e+1}`:e===this.botPlayer?`L’IA`:`Vous`}async boot(){let e=await ct.createGame(`wythoff`);this.session=Qt(await ct.makeSession(e,[12,19],`local`,``,q.difficulty)),await Ut.restore(),Kt.restore();let t=Et(Tt.session);t.present&&(this.storageBlocked=!0),t.error&&setTimeout(()=>Bt(t.error),500),this.botPaused=this.session.cursor<this.session.moves.length,this.refresh({autoBot:!this.botPaused}),t.present&&!t.error&&this.revalidate(t.value,!0).then(e=>this.start(e,{restoring:!0})).catch(e=>Bt(e.name===`AbortError`?`Chargement annulé. L’ancienne sauvegarde est conservée ; démarrez une nouvelle partie pour la remplacer.`:`L’ancienne sauvegarde est conservée, mais ne peut pas être chargée : ${e.message}`))}async start(e,{restoring:t=!1}={}){let n=await ct.validateGame(e.game);if(!n.ok||!n.game)return Bt(n.errors.join(` `)),!1;let r=Qt({...e,game:Qt(n.game)}),i=await ct.sessionCapacity(r);return i.ok?(this.cancelLoad(),this.session=r,this.botPaused=r.cursor<r.moves.length,this.botHold=null,this.storageBlocked=!1,this.score.sync(r,{reset:!t}),t||(this.suspended=!1,J.flow=`play`),this.refresh({animate:!t,autoBot:!this.botPaused,fresh:!0}),t||Bt(this.botPaused?`Relecture restaurée. L’IA reste suspendue pour préserver les coups futurs.`:`Nouvelle partie prête. À vous d’imaginer le bon coup.`),!0):(Bt(i.reason),!1)}async newSession(e,t,n=`local`,r=``,i=q.difficulty){try{return await this.start(await ct.makeSession(e,t,n,r,i))}catch(e){return Bt(e.message),!1}}rematch(){let e=this.session;return this.newSession(e.game,e.initial,e.opponent,e.name,e.difficulty)}suspend(){this.score.suspend(),this.epoch++,this.cancelAll(),this.cancelLoad(),!this.suspended&&(this.suspended=!0,this.save())}resume(){if(!this.suspended)return;let e=this.preview.slice();this.suspended=!1,this.refresh({autoBot:!this.botPaused}),this.score.resume();let t=this.position;e.length===t.length&&e.every((e,n)=>e<=t[n])&&this.setPreview(e)}refresh({animate:e=!1,autoBot:t=!0,json:n,fresh:r=!1}={}){this.epoch++,this.cancelAll(),this.terminal=!1,this.endReason=``,this.hint=qt,this.legal=q.showLegalMoves?{...Jt,phase:`waiting`,note:Yt}:Jt,this.legalFocus=-1,this.wheelEdit={index:-1,at:-1/0},this.notice=``;let i=this.position;if(this.preview=i.slice(),this.verdict=null,this.emit(`position`,{position:i,animate:e,fresh:r}),this.suspended)q.showLegalMoves&&(this.legal={...this.legal,note:`L’aide reprendra avec la partie.`});else{let e=this.epoch,n=i.every(e=>e===0);this.run(`moves`,80,e=>n?Promise.resolve({terminal:!0,complete:!0,reason:`Aucun jeton à retirer.`}):ct.terminalStatus(i,this.session.game,{maxCandidates:15e3,timeMs:80},e),(n,r)=>{r||!n?(q.showLegalMoves&&this.legal.phase!==`ready`&&(this.legal={...this.legal,phase:`error`,count:`Incomplète`,note:`L’aide n’a pas pu vérifier cette position.`}),this.isBotTurn&&this.holdBot(r??`Le calcul a échoué.`)):n.terminal===!0?this.finish(n.reason):(n.terminal===null&&(this.notice=`Recherche incomplète : aucun coup encore trouvé.`),e===this.epoch&&this.emit(`turn`,{player:this.player,bot:this.isBotTurn}),t&&this.isBotTurn?this.playBot():this.legal.phase===`waiting`&&this.requestLegalMoves())})}this.botHold?this.showHold():this.botPaused&&!this.local&&(this.notice=`Relecture · IA suspendue. Changez l’adversaire pour reprendre.`),this.save(n),this.storageBlocked||(this.score.sync(this.session),!this.suspended&&!document.hidden&&!this.importing&&this.score.resume())}finish(e){if(this.terminal)return;this.terminal=!0,this.botHold=null,this.cancelAll(),this.legal={phase:`ready`,count:`0 · ensemble complet`,complete:!0,moves:[],note:`Aucun coup permis dans cette position terminale.`},this.legalFocus=-1,this.score.finish(this.session);let t=this.session,n=this.position.every(e=>e===0),r=t.game.mode===`normal`?`le dernier coup gagne.`:`le dernier coup perd.`;if(this.endReason=[n?`Plus aucun jeton sur le plateau : ${r}`:`Aucun coup possible : ${r}`,t.cursor===0?`La position initiale est terminale.`:``,n?``:e].filter(Boolean).join(` `),this.preview=this.position.slice(),!this.suspended){let e=dt(t.cursor,t.game.mode);this.emit(`end`,{winner:e,humanWon:this.local?null:e!==this.botPlayer,played:this.movedEpoch===this.epoch&&t.cursor>0})}}setRemoval(e,t){if(this.locked)return!1;let n=this.position;if(!Number.isInteger(e)||e<0||e>=n.length)return!1;let r=n[e];if(!Number.isSafeInteger(t)||t<0||t>r)return!1;let i=this.preview.slice();return i[e]=r-t,this.updatePreview(i),!0}toggleRemoval(e,t){let n=this.position;if(!Number.isInteger(e)||e<0||e>=n.length)return!1;if(t>0&&n[e]-this.preview[e]===t)return this.setRemoval(e,0);let r=this.legal;if(t>0&&t<=n[e]&&!this.locked&&r.phase===`ready`&&r.complete&&r.moves.length){let r=this.preview.slice(),i=n.slice();if(r[e]=i[e]=n[e]-t,!this.fitsLegal(r)&&this.fitsLegal(i))return this.updatePreview(i),!0}return this.setRemoval(e,t)}fitsLegal(e){let t=this.position;return this.legal.moves.some(n=>e.every((e,r)=>e===t[r]||n.after[r]===e))}adjustRemoval(e,t,n=performance.now()){if(this.locked||!Number.isInteger(e)||e<0||e>=this.position.length)return!1;if(this.wheelEdit.index===e&&n-this.wheelEdit.at<24)return!0;this.wheelEdit={index:e,at:n};let r=this.position[e],i=r-this.preview[e];return this.setRemoval(e,Math.max(0,Math.min(r,i+t)))}setPreview(e){if(this.locked)return;let t=this.position;e.length!==t.length||e.some((e,n)=>!Number.isSafeInteger(e)||e<0||e>t[n])||this.updatePreview(e.slice())}clearSelection(){if(this.locked)return!1;let e=this.changed;return this.updatePreview(this.position.slice()),e}updatePreview(e){this.preview=Qt(e);let t=this.position,n=e.some((e,n)=>e!==t[n]),r=++this.verdictRevision;n?ct.validateMove(t,e,this.session.game).then(e=>{r===this.verdictRevision&&(this.verdict=e)},e=>{r===this.verdictRevision&&(this.verdict={ok:!1,reason:e.message,family:null})}):this.verdict=null}async commit(e=this.preview,t=!1){if(this.suspended||this.importing||this.terminal||this.botHold||this.committing||!t&&(this.botBusy||this.isBotTurn))return!1;let n=this.epoch,r=this.session,i=this.position.slice();this.committing=!0;try{let a=await ct.validateMove(i,e,r.game);if(n!==this.epoch)return!1;if(!a.ok)return Bt(a.reason),this.emit(`invalid`,{reason:a.reason}),!1;let o={before:i,after:e.slice(),player:lt(r.cursor),family:a.family??``,time:new Date().toISOString()},s=await ct.appendSessionMove(r,o);if(n!==this.epoch)return!1;if(!s.ok)return t?this.holdBot(s.reason,`capacity`):(this.notice=s.reason,Bt(s.reason)),!1;let c=s.session,l=c.moves.map((e,t)=>t===c.cursor-1?o:r.moves[t]??e);return this.session=Qt({...c,game:r.game,moves:l}),this.score.record(this.session,this.session.cursor-1,{human:!t}),this.botPaused=!1,this.botHold=null,this.committing=!1,this.emit(`move`,{before:i,after:o.after,player:o.player,fromBot:t}),this.refresh({animate:!0,autoBot:!0,json:s.json}),this.movedEpoch=this.epoch,!0}catch(e){return Bt(e.message),!1}finally{this.committing=!1}}moveCursor(e){e<0||e>this.session.moves.length||this.importing||(this.session=Qt({...this.session,cursor:e}),this.botPaused=!0,this.botHold=null,this.emit(`rewind`,{}),this.refresh({animate:!0,autoBot:!1}),this.local||(this.notice=`Relecture · IA suspendue. Changez l’adversaire pour reprendre.`))}undo(){this.moveCursor(this.session.cursor-1)}redo(){this.moveCursor(this.session.cursor+1)}setOpponent(e){this.session=Qt({...this.session,opponent:e}),this.botPaused=!1,this.botHold=null,this.refresh()}setDifficulty(e){this.botHold&&(this.botHold=null,this.botPaused=!1),this.session=Qt({...this.session,difficulty:e}),q.difficulty=e,this.refresh({autoBot:!this.botPaused})}retryBot(){this.botHold&&(this.botHold=null,this.botPaused=!1,this.refresh())}switchToLocal(){this.session=Qt({...this.session,opponent:`local`}),this.botHold=null,this.botPaused=!1,this.refresh()}playBot(){if(this.terminal||this.botBusy||!this.isBotTurn)return;this.botBusy=!0,this.emit(`thinking`,{});let e=_t(this.session.difficulty),t=this.position,n=this.session.game,r=this.epoch,i=performance.now(),a=crypto.getRandomValues(new Uint32Array(1))[0];this.run(`bot`,e.timeMs,r=>ct.chooseAIMove(t,n,{difficulty:e.id,timeMs:e.timeMs,seed:a},r),async(a,o)=>{if(jt()&&await Zt(Math.max(0,480-(performance.now()-i))),r!==this.epoch||!this.isBotTurn)return;let s;try{s=await ct.assessBotDecision({position:t,game:n,result:a,error:o??void 0,difficulty:e.id})}catch(e){s={action:`hold`,kind:`error`,message:e.message}}r===this.epoch&&(this.botBusy=!1,s.action===`hold`?this.holdBot(s.message,s.kind):s.action===`terminal`?this.finish(s.message):await this.commit(s.after,!0)&&(this.hint={...qt,source:`ai`,text:a?.reason??``,partial:!s.exact,badge:`IA ${e.label.toUpperCase()} · ${s.exact?`COUP PARFAIT CERTIFIÉ`:`HEURISTIQUE · OPTIMALITÉ NON GARANTIE`}`}))})}holdBot(e,t=`error`){this.botPaused=!0,this.botBusy=!1,this.botHold={message:e,kind:t},this.showHold()}showHold(){let e=this.botHold;e&&(this.notice=e.kind===`proof`?`GODLIKE · aucun coup parfait certifié dans ce budget.`:e.kind===`capacity`?`Historique conservé · exportez cette partie avant de commencer une nouvelle partie.`:`IA en attente · le calcul ne peut pas avancer ce tour.`,this.hint={...qt,source:`hold`,text:e.message,partial:!0,badge:e.kind===`proof`?`GODLIKE · PREUVE INCOMPLÈTE`:e.kind===`capacity`?`LIMITE DE SAUVEGARDE`:`IA · CALCUL INTERROMPU`})}requestHint(){if(this.terminal||this.importing||this.suspended||this.hint.busy)return;this.hint={...this.hint,busy:!0};let e=performance.now(),t=this.position;this.run(`hint`,q.budget,e=>ct.hint(t,this.session.game,{timeMs:q.budget,maxNodes:3e4},e),(t,n)=>{if(n||!t){this.hint={...qt,text:n??`Le calcul a échoué.`,asked:!0,source:`hint`};return}let r=t.outcome===`winning`?`Une stratégie gagnante a été trouvée.`:t.outcome===`losing`?`Cette position est perdante contre un jeu parfait.`:`Le résultat stratégique reste inconnu.`;this.hint={text:`${r} ${t.reason}`,partial:!t.exact,after:t.after,busy:!1,asked:!0,source:`hint`,badge:`${t.exact?`RÉSULTAT EXACT POUR CETTE POSITION`:`RECHERCHE INCOMPLÈTE`} · ${t.nodes??0} nœuds · ${Math.round(performance.now()-e)} ms`},this.emit(`hint`,{found:!!t.after})})}applyHint(){this.hint.after&&!this.isBotTurn&&!this.botHold&&this.setPreview(this.hint.after)}setLegalVisible(e){q.showLegalMoves=e,this.jobs.get(`legal-aid`)?.abort(),this.legalFocus=-1,this.legal=e?{...Jt,phase:`waiting`,note:Yt}:Jt,e&&this.requestLegalMoves()}async requestLegalMoves(){if(!q.showLegalMoves||this.locked)return;let e=this.epoch,t=this.position,n=this.session.game;this.legalFocus=-1,this.legal={...Jt,phase:`searching`,count:`Recherche…`,note:`Énumération avec un budget de 0,3 seconde ; vos retraits restent disponibles.`};let r;try{r=await ct.legalMoveOptions(t,n,{budget:q.budget})}catch{r={}}e===this.epoch&&this.run(`legal-aid`,Number(r.timeMs)||300,e=>ct.enumerateLegalMoves(t,n,r,e),(e,t)=>{if(!q.showLegalMoves)return;if(t||!e||!Array.isArray(e.moves)){this.legal={...Jt,phase:`error`,count:`Incomplète`,note:`L’aide est indisponible. Vous pouvez préparer un coup avec les commandes de pile.`};return}let n=e.complete===!0;this.legal={phase:`ready`,complete:n,moves:Qt(e.moves),count:`${Xt.format(e.moves.length)} · ${n?`ensemble complet`:`aperçu partiel`}`,note:n?`Tous les coups permis sont recensés : les anneaux lumineux marquent où couper, les piles assombries n’offrent aucun coup.`:`${e.reason||`Le budget de recherche est atteint.`} Ce sont des coups trouvés, pas une liste exhaustive ; aucun coup trouvé ne prouve pas une fin de partie. Vous pouvez saisir un autre retrait.`},n&&e.moves.length===0&&this.finish(`L’énumération complète confirme qu’aucun coup n’est permis.`)})}async prepareLegal(e=this.legalFocus){let t=this.legal.moves[e],n=this.epoch;if(!t||this.locked)return!1;let r=await ct.validateMove(this.position,t.after,this.session.game);return n!==this.epoch||!r.ok?!1:(this.setPreview(t.after),!0)}save(e){clearTimeout(this.saveTimer),this.session&&(!this.storageBlocked&&Dt(Tt.session,e??JSON.stringify(this.session))?(this.saveLabel=`● Partie enregistrée`,this.saveTimer=setTimeout(()=>{this.saveLabel=`● Sauvegarde locale`},2200)):(this.saveLabel=this.storageBlocked?`● Ancienne sauvegarde préservée`:`● Export conseillé`,this.storageBlocked||Bt(`Le navigateur ne peut pas enregistrer. Exportez votre partie pour la conserver.`)))}flush(){this.save()}async revalidate(e,t){this.cancelLoad();let n=new AbortController;this.loadController=n,this.load={title:t?`Votre partie revient.`:`Votre partie arrive.`,status:`Vérification des règles et de l’historique…`,checked:0,expected:0};let r=setTimeout(()=>n.abort(`timeout`),15e3);try{return await ct.validateSession(e,{signal:n.signal,timeMs:15e3,onProgress:e=>{let t=e;this.loadController===n&&Number.isInteger(t.movesChecked)&&Number.isInteger(t.movesExpected)&&(this.load={...this.load,checked:t.movesChecked,expected:t.movesExpected,status:`${Xt.format(t.movesChecked)} / ${Xt.format(t.movesExpected)} coups revérifiés.`})}})}catch(e){throw n.signal.reason===`timeout`?new Je(`Le budget de revalidation de la partie a été atteint.`,``,`TimeoutError`):e}finally{clearTimeout(r),this.loadController===n&&(this.loadController=null,this.load=null)}}cancelLoad(){this.loadController?.abort()}async importFile(e){let t=++this.importSerial,n=this.session,r=this.preview.slice();this.cancelAll(),this.cancelLoad(),this.epoch++,this.importing=!0;try{if(e.size>2e6)throw Error(`Fichier trop volumineux : 2 Mo au maximum.`);let n;try{n=JSON.parse(await e.text())}catch{throw Error(`Le fichier n’est pas un document JSON lisible.`)}if(t!==this.importSerial)return;if(n?.schema===`strata.session`){let e=await this.revalidate(n,!1);if(t!==this.importSerial)return;this.importing=!1,await this.start(e)&&Bt(`Partie importée : tous les coups ont été revérifiés.`)}else if(n?.schema===`strata.game`&&n.version===1){let e=await ct.validateGame(n.game);if(!e.ok||!e.game)throw Error(e.errors.join(` `));let t=await ct.validatePosition(n.defaultPiles,e.game);if(!t.ok||!t.position)throw Error(t.errors.join(` `));let r={schema:`strata.game`,version:1,name:String(n.name||`Jeu importé`).slice(0,80),game:e.game,defaultPiles:t.position};this.importing=!1;let i=await Ut.save(r);await this.newSession(r.game,r.defaultPiles,`local`,r.name),i.ok||Bt(i.reason)}else throw Error(`Importez un jeu ou une partie au format HEAPS (JSON).`)}catch(e){t===this.importSerial&&Bt(e.name===`AbortError`?`Import annulé. Votre partie est conservée.`:`Import refusé : ${e.message}`)}finally{t===this.importSerial&&this.importing&&(this.importing=!1,this.session===n&&(this.refresh({autoBot:!this.botPaused}),this.setPreview(r)))}}run(e,t,n,r){this.jobs.get(e)?.abort();let i=new AbortController,a=this.epoch;this.jobs.set(e,i);let o=setTimeout(()=>i.abort(`timeout`),Math.min(5e3,t)+4e3);n({signal:i.signal}).then(e=>[e,null],e=>[null,e]).then(([t,n])=>{clearTimeout(o),this.jobs.get(e)===i&&this.jobs.delete(e),a===this.epoch&&(i.signal.reason===`timeout`?r(null,`Le budget maximal du calcul a été atteint.`):i.signal.aborted||r(t,n?n.message||`Le calcul a échoué.`:null))})}cancelAll(){for(let e of this.jobs.values())e.abort();this.jobs.clear(),this.botBusy=!1,this.legalFocus=-1}};typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`);var $t=e=>e;function en(e){let t=e-1;return t*t*t+1}function tn(e){let t=typeof e==`string`&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||`px`]:[e,`px`]}function nn(e,t,n){return Number.isNaN(t)?``:`${e}: ${n*t}px;`}function rn(e,{delay:t=0,duration:n=400,easing:r=$t}={}){let i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:e=>`opacity: ${e*i}`}}function an(e,{delay:t=0,duration:n=400,easing:r=en,x:i=0,y:a=0,opacity:o=0}={}){let s=getComputedStyle(e),c=+s.opacity,l=s.transform===`none`?``:s.transform,u=c*(1-o),[d,f]=tn(i),[p,m]=tn(a);return{delay:t,duration:n,easing:r,css:(e,t)=>`
			transform: ${l} translate(${(1-e)*d}${f}, ${(1-e)*p}${m});
			opacity: ${c-u*t}`}}function on(e,{delay:t=0,duration:n=400,easing:r=en,axis:i=`y`}={}){let a=getComputedStyle(e),o=+a.opacity,s=i===`y`?`height`:`width`,c=parseFloat(a[s]),l=i===`y`?[`top`,`bottom`]:[`left`,`right`],u=l.map(e=>`${e[0].toUpperCase()}${e.slice(1)}`),d=parseFloat(a[`padding${u[0]}`]),f=parseFloat(a[`padding${u[1]}`]),p=parseFloat(a[`margin${u[0]}`]),m=parseFloat(a[`margin${u[1]}`]),h=parseFloat(a[`border${u[0]}Width`]),g=parseFloat(a[`border${u[1]}Width`]);return{delay:t,duration:n,easing:r,css:e=>`overflow: hidden;opacity: ${Math.min(e*20,1)*o};`+nn(s,c,e)+nn(`padding-${l[0]}`,d,e)+nn(`padding-${l[1]}`,f,e)+nn(`margin-${l[0]}`,p,e)+nn(`margin-${l[1]}`,m,e)+nn(`border-${l[0]}-width`,h,e)+nn(`border-${l[1]}-width`,g,e)+`min-${s}: 0`}}var sn=new Set([`$$slots`,`$$events`,`$$legacy`,`variant`,`kbd`,`disabled`,`title`,`onclick`,`children`,`class`]),cn=K(`<kbd class="svelte-1l4sjoq"> </kbd>`),ln=K(`<button><!> <!></button>`);function un(e,t){let n=ce(t,`variant`,3,`ghost`),r=ce(t,`kbd`,3,``),a=ce(t,`disabled`,3,!1),s=ce(t,`title`,3,``),c=ce(t,`class`,3,``),l=ne(t,sn);var u=ln();se(u,()=>({type:`button`,class:`btn ${n()??``} ${c()??``}`,disabled:a(),title:s(),"aria-label":n()===`icon`?s():void 0,onclick:t.onclick,...l}),void 0,void 0,void 0,`svelte-1l4sjoq`);var d=F(u);i(d,()=>t.children);var m=W(d,2),h=e=>{var t=cn(),n=H(t,!0);T(()=>o(n,r())),f(e,t)};p(m,e=>{r()&&e(h)}),L(u),f(e,u)}var dn=K(`<button type="button" role="radio" class="svelte-1hm8t2b"> </button>`),fn=K(`<div class="choice svelte-1hm8t2b" role="radiogroup"></div>`);function pn(e,t){P(t,!0);let n=ce(t,`value`,15),r=ce(t,`label`,3,``),i=ce(t,`columns`,3,0);var a=fn();let s;B(a,21,()=>t.options,e=>e.id,(e,r)=>{var i=dn(),a=H(i,!0);T(()=>{R(i,`aria-checked`,n()===d(r).id),i.disabled=d(r).disabled,R(i,`title`,d(r).hint),o(a,d(r).label)}),b(`click`,i,()=>{n(d(r).id),t.onchange?.(d(r).id)}),f(e,i)}),L(a),T(()=>{R(a,`aria-label`,r()),s=k(a,``,s,{"grid-template-columns":i()?`repeat(${i()}, 1fr)`:void 0})}),f(e,a),G()}c([`click`]);function mn(e){return e}function hn(e){return e*e*e}function gn(e){let t=e-1;return t*t*t+1}var _n=new Set([`$$slots`,`$$events`,`$$legacy`,`frame`,`strong`,`class`,`children`]),vn=K(`<div><!></div>`);function yn(e,t){let n=ce(t,`frame`,3,`var(--kit-accent)`),r=ce(t,`strong`,3,!1),a=ce(t,`class`,3,``),o=ne(t,_n);var s=vn();se(s,()=>({class:`panel ${a()??``}`,...o,[N]:{strong:r()},[I]:{"--frame":n()}}),void 0,void 0,void 0,`svelte-espygs`);var c=F(s);i(c,()=>t.children),L(s),f(e,s)}var bn=K(`<span class="eyebrow svelte-3g3iw7"> </span>`),xn=K(`<footer class="svelte-3g3iw7"><!></footer>`),Sn=K(`<header class="svelte-3g3iw7"><div class="titles svelte-3g3iw7"><!> <h2 class="svelte-3g3iw7"> </h2></div> <button type="button" class="x svelte-3g3iw7" aria-label="Fermer">×</button></header> <div class="body svelte-3g3iw7"><!></div> <!>`,1),Cn=K(`<dialog><!></dialog>`);function wn(e,t){P(t,!0);let n=ce(t,`open`,15,!1),a=ce(t,`eyebrow`,3,``),s=ce(t,`size`,3,`normal`),c=ce(t,`class`,3,``),l=U(void 0),u=null,m=`kit-modal-${Math.random().toString(36).slice(2,8)}`;_(()=>{d(l)&&(n()&&!d(l).open&&(u=document.activeElement,d(l).showModal()),!n()&&d(l).open&&d(l).close())}),_(()=>()=>{let e=u;queueMicrotask(()=>{(!document.activeElement||document.activeElement===document.body)&&e instanceof HTMLElement&&e.isConnected&&e.focus({preventScroll:!0})})});let h=e=>({duration:ke()?170:0,easing:hn,css:e=>`opacity: ${e}; transform: translateY(${(1-e)*10}px) scale(${.985+e*.015})`}),g=()=>{n()&&!d(l)?.inert&&(t.onclose?.(),queueMicrotask(()=>{d(l)?.isConnected&&!d(l).inert&&n(!1)}),u instanceof HTMLElement&&u.isConnected&&u.focus({preventScroll:!0}))};var v=Cn();yn(F(v),{strong:!0,class:`sheet`,children:(e,n)=>{var r=Sn(),s=de(r),c=F(s),l=F(c),u=e=>{var t=bn(),n=H(t,!0);T(()=>o(n,a())),f(e,t)};p(l,e=>{a()&&e(u)});var d=W(l,2),h=H(d,!0);L(c);var _=W(c,2);L(s);var v=W(s,2),y=F(v);i(y,()=>t.children),L(v);var x=W(v,2),S=e=>{var n=xn(),r=F(n);i(r,()=>t.footer),L(n),f(e,n)};p(x,e=>{t.footer&&e(S)}),T(()=>{R(d,`id`,m),o(h,t.title)}),b(`click`,_,g),f(e,r)},$$slots:{default:!0}}),L(v),le(v,e=>O(l,e),()=>d(l)),T(()=>{he(v,1,`kit-modal ${s()??``} ${c()??``}`,`svelte-3g3iw7`),R(v,`aria-labelledby`,m)}),S(`close`,v,g),S(`cancel`,v,e=>{e.preventDefault(),g()}),b(`click`,v,e=>{e.target===d(l)&&g()}),r(2,v,()=>h),f(e,v),G()}c([`click`]);var Tn=K(`<label class="slider svelte-11s19td"><span class="row svelte-11s19td"><span> </span><output class="svelte-11s19td"> </output></span> <input type="range" class="svelte-11s19td"/></label>`);function En(e,t){P(t,!0);let n=ce(t,`value`,15,0),r=ce(t,`min`,3,0),i=ce(t,`max`,3,1),a=ce(t,`step`,3,.01),s=ce(t,`format`,3,e=>`${Math.round(e*100)} %`),c=M(()=>(n()-r())/(i()-r())*100);var l=Tn(),u=F(l),p=F(u),m=H(p,!0),h=W(p),g=H(h,!0);L(u);var _=W(u,2);ie(_);let v;L(l),T(e=>{o(m,t.label),o(g,e),R(_,`min`,r()),R(_,`max`,i()),R(_,`step`,a()),v=k(_,``,v,{"--fill":`${d(c)??``}%`})},[()=>s()(n())]),b(`input`,_,()=>t.oninput?.(n())),fe(_,n),f(e,l),G()}c([`input`]);var Dn=K(`<small class="svelte-dy7pbm"> </small>`),On=K(`<label class="switch svelte-dy7pbm"><span class="text svelte-dy7pbm"><span> </span><!></span> <input type="checkbox" role="switch" class="svelte-dy7pbm"/> <i aria-hidden="true" class="svelte-dy7pbm"></i></label>`);function kn(e,t){P(t,!0);let n=ce(t,`checked`,15,!1),r=ce(t,`hint`,3,``);var i=On(),a=F(i),s=F(a),c=H(s,!0),l=W(s),u=e=>{var t=Dn(),n=H(t,!0);T(()=>o(n,r())),f(e,t)};p(l,e=>{r()&&e(u)}),L(a);var d=W(a,2);ie(d),te(2),L(i),T(()=>o(c,t.label)),b(`change`,d,()=>t.onchange?.(n())),V(d,n),f(e,i),G()}c([`change`]),ae();var An=K(`<p class="svelte-yk97fl"><b> </b> L'appli redémarre après l'installation.</p> <div class="actions svelte-yk97fl"><!> <!></div>`,1),jn=K(`<p class="svelte-yk97fl"><b> </b></p> <progress max="1" class="svelte-yk97fl"></progress>`,1),Mn=K(`<p class="svelte-yk97fl"><b>Installation terminée.</b> Redémarrage…</p>`),Nn=K(`<p class="svelte-yk97fl"><b>La mise à jour a échoué.</b> </p> <div class="actions svelte-yk97fl"><!></div>`,1),Pn=K(`<div class="inner svelte-yk97fl"><!></div>`),Fn=K(`<div class="notice svelte-yk97fl" role="status"><!></div>`);function In(e,t){P(t,!1),D();var n=v(),r=de(n),i=e=>{var t=Fn();yn(F(t),{strong:!0,children:(e,t)=>{var n=Pn(),r=F(n),i=e=>{var t=An(),n=de(t),r=F(n),i=H(r);te(),L(n);var a=W(n,2),s=F(a);un(s,{get onclick(){return je},children:(e,t)=>{te();var n=x(`Plus tard`);f(e,n)},$$slots:{default:!0}}),un(W(s,2),{variant:`primary`,get onclick(){return Te},children:(e,t)=>{te();var n=x(`Mettre à jour`);f(e,n)},$$slots:{default:!0}}),L(a),T(()=>o(i,`Version ${ye.version??``} disponible.`)),f(e,t)},a=e=>{var t=jn(),n=de(t),r=F(n),i=H(r);L(n);var a=W(n,2);T(()=>{o(i,`Téléchargement de la version ${ye.version??``}…`),ee(a,ye.progress)}),f(e,t)},s=e=>{var t=Mn();f(e,t)},c=e=>{var t=Nn(),n=de(t),r=W(F(n));L(n);var i=W(n,2);un(F(i),{get onclick(){return je},children:(e,t)=>{te();var n=x(`Fermer`);f(e,n)},$$slots:{default:!0}}),L(i),T(()=>o(r,` ${ye.error??``}`)),f(e,t)};p(r,e=>{ye.phase===`available`?e(i):ye.phase===`downloading`?e(a,1):ye.phase===`ready`?e(s,2):e(c,-1)}),L(n),f(e,n)},$$slots:{default:!0}}),L(t),f(e,t)};p(r,e=>{ye.phase!==`idle`&&e(i)}),f(e,n),G()}var Ln={tick:[{freq:2400,type:`sine`,decay:.035,gain:.05}],confirm:[{freq:660,type:`triangle`,decay:.12,gain:.14,space:.2},{freq:990,type:`sine`,decay:.18,delay:.05,gain:.1,space:.3}],open:[{freq:500,to:2600,type:`noise`,q:1.4,decay:.22,gain:.08,space:.3}],close:[{freq:2400,to:500,type:`noise`,q:1.4,decay:.18,gain:.06}],select:[{freq:880,to:1320,type:`sine`,decay:.16,gain:.16,space:.35},{freq:2640,type:`sine`,decay:.09,gain:.05}],deselect:[{freq:1100,to:640,type:`sine`,decay:.14,gain:.12,space:.2}],invalid:[{freq:150,type:`square`,filter:600,decay:.16,gain:.12},{freq:142,type:`square`,filter:600,decay:.16,delay:.09,gain:.1}],play:[{freq:400,to:3e3,type:`noise`,q:1.1,attack:.06,decay:.32,gain:.12,space:.4},{freq:1320,type:`sine`,decay:.3,delay:.14,gain:.09,space:.5}],yourTurn:[{freq:523.25,type:`sine`,decay:.2,gain:.1,space:.4},{freq:659.25,type:`sine`,decay:.3,delay:.1,gain:.1,space:.5}],rivalTurn:[{freq:440,type:`triangle`,decay:.2,gain:.08,space:.4},{freq:349.23,type:`triangle`,decay:.3,delay:.1,gain:.08,space:.5}],hint:[0,1,2,3].map(e=>({freq:[1046.5,1318.5,1568,2093][e],type:`sine`,decay:.25,delay:e*.06,gain:.07,space:.6})),undo:[{freq:2600,to:420,type:`noise`,q:1.6,decay:.24,gain:.08,space:.2}],victory:[...[523.25,659.25,783.99,1046.5,1318.5].map((e,t)=>({freq:e,type:`triangle`,decay:.7,delay:t*.09,gain:.12,space:.6})),{freq:3e3,to:9e3,type:`noise`,q:.8,attack:.2,decay:1.2,delay:.3,gain:.05,space:.8}],achievement:[...[783.99,1174.66,1567.98].map((e,t)=>({freq:e,type:`sine`,decay:.9,delay:t*.07,gain:.08,space:.7})),{freq:3135.96,type:`sine`,decay:1.4,delay:.24,gain:.035,space:.9}],defeat:[392,349.23,311.13,261.63].map((e,t)=>({freq:e,type:`triangle`,filter:1800,decay:.6,delay:t*.14,gain:.11,space:.6}))};function Rn(e){return e===`metal`?[{freq:1850,type:`sine`,decay:.12,gain:.1,space:.25},{freq:2710,type:`sine`,decay:.07,gain:.06},{freq:5200,type:`noise`,q:3,decay:.03,gain:.05}]:[{freq:2200,type:`noise`,q:.9,decay:.035,gain:.16},{freq:190,to:120,type:`sine`,decay:.06,gain:.12}]}function zn(e){let t=660*2**(Math.min(e-1,1)*7/12);return[{freq:t,type:`sine`,decay:.22,gain:.08,space:.5},{freq:t*1.5,type:`sine`,decay:.3,delay:.07,gain:.06,space:.6}]}var Bn=new ze,Vn=z({hushed:!1});function Hn(){_(()=>{let e=q.sound;Bn.setLevels(e?q.effectsVolume:0,e?q.ambienceVolume*(Vn.hushed?.3:1):0)});let e=M(()=>q.sound&&q.ambienceVolume>0?q.theme:null);_(()=>{let t=d(e)?bt(d(e)).music:null;Bn.setAmbience(t?.notes??null,t?.brightness)})}function Un(e){Vn.hushed=e}function Wn(e,t={}){q.sound&&Bn.play(Ln[e],t)}function Gn(e=0,t=1){if(!q.sound)return;let n=bt(q.theme).chips.material;Bn.play(Rn(n===`clay`||n===`stone`?`clay`:`metal`),{pan:e,gain:t,pitch:.92+Math.random()*.16})}function Kn(e){q.sound&&Bn.play(zn(e))}var qn=1e3,Jn=1001,Yn=1002,Xn=1003,Zn=1004,Qn=1005,$n=1006,er=1007,tr=1008,nr=1009,rr=1010,ir=1011,ar=1012,or=1013,sr=1014,cr=1015,lr=1016,ur=1017,dr=1018,fr=1020,pr=35902,mr=35899,hr=1021,gr=1022,_r=1023,vr=1026,yr=1027,br=1028,xr=1029,Sr=1030,Cr=1031,wr=1033,Tr=33776,Er=33777,Dr=33778,Or=33779,kr=35840,Ar=35841,jr=35842,Mr=35843,Nr=36196,Pr=37492,Fr=37496,Ir=37488,Lr=37489,Rr=37490,zr=37491,Br=37808,Vr=37809,Hr=37810,Ur=37811,Wr=37812,Gr=37813,Kr=37814,qr=37815,Jr=37816,Yr=37817,Xr=37818,Zr=37819,Qr=37820,$r=37821,ei=36492,ti=36494,ni=36495,ri=36283,ii=36284,ai=36285,oi=36286,si=2300,ci=2301,li=2302,ui=2303,di=2400,fi=2401,pi=2402,mi=3200,hi=`srgb`,gi=`srgb-linear`,_i=`linear`,vi=`srgb`,yi=7680,bi=35044,xi=35048,Si=2e3;function Ci(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function wi(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ti(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ei(){let e=Ti(`canvas`);return e.style.display=`block`,e}var Di={};function Oi(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ki(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function Ai(...e){e=ki(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function ji(...e){e=ki(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Mi(...e){let t=e.join(` `);t in Di||(Di[t]=!0,Ai(...e))}function Ni(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Pi={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Ii=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Li=Math.PI/180,Ri=180/Math.PI;function zi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ii[e&255]+Ii[e>>8&255]+Ii[e>>16&255]+Ii[e>>24&255]+`-`+Ii[t&255]+Ii[t>>8&255]+`-`+Ii[t>>16&15|64]+Ii[t>>24&255]+`-`+Ii[n&63|128]+Ii[n>>8&255]+`-`+Ii[n>>16&255]+Ii[n>>24&255]+Ii[r&255]+Ii[r>>8&255]+Ii[r>>16&255]+Ii[r>>24&255]).toLowerCase()}function Bi(e,t,n){return Math.max(t,Math.min(n,e))}function Vi(e,t){return(e%t+t)%t}function Hi(e,t,n){return(1-n)*e+n*t}function Ui(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Wi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var X=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Bi(this.x,e.x,t.x),this.y=Bi(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Bi(this.x,e,t),this.y=Bi(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Bi(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:Ai(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bi(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qi.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qi.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Bi(this.x,e.x,t.x),this.y=Bi(this.y,e.y,t.y),this.z=Bi(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Bi(this.x,e,t),this.y=Bi(this.y,e,t),this.z=Bi(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Bi(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ki.copy(this).projectOnVector(e),this.sub(Ki)}reflect(e){return this.sub(Ki.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ki=new Z,qi=new Gi,Ji=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Mi(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Yi.makeScale(e,t)),this}rotate(e){return Mi(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Yi.makeRotation(-e)),this}translate(e,t){return Mi(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Yi.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yi=new Ji,Xi=new Ji().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zi=new Ji().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qi(){let e={enabled:!0,workingColorSpace:gi,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=ea(e.r),e.g=ea(e.g),e.b=ea(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=ta(e.r),e.g=ta(e.g),e.b=ta(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?_i:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Mi(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Mi(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[gi]:{primaries:t,whitePoint:r,transfer:_i,toXYZ:Xi,fromXYZ:Zi,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:r,transfer:vi,toXYZ:Xi,fromXYZ:Zi,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),e}var $i=Qi();function ea(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ta(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var na,ra=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{na===void 0&&(na=Ti(`canvas`)),na.width=e.width,na.height=e.height;let t=na.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=na}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ti(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=ea(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(ea(t[e]/255)*255):t[e]=ea(t[e]);return{data:t,width:e.width,height:e.height}}return Ai(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},ia=0,aa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ia++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(oa(r[t].image)):e.push(oa(r[t]))}else e=oa(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function oa(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?ra.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ai(`Texture: Unable to serialize Texture.`),{})}var sa=0,ca=new Z,la=class e extends Fi{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Jn,i=Jn,a=$n,o=tr,s=_r,c=nr,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sa++}),this.uuid=zi(),this.name=``,this.source=new aa(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ji,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ai(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Ai(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qn:e.x-=Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Yn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case qn:e.y-=Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Yn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};la.DEFAULT_IMAGE=null,la.DEFAULT_MAPPING=300,la.DEFAULT_ANISOTROPY=1;var ua=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Bi(this.x,e.x,t.x),this.y=Bi(this.y,e.y,t.y),this.z=Bi(this.z,e.z,t.z),this.w=Bi(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Bi(this.x,e,t),this.y=Bi(this.y,e,t),this.z=Bi(this.z,e,t),this.w=Bi(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Bi(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},da=class extends Fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ua(0,0,e,t),this.scissorTest=!1,this.viewport=new ua(0,0,e,t),this.textures=[];let r=new la({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new aa(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},fa=class extends da{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pa=class extends la{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ma=class extends la{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},ha=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ga.setFromMatrixColumn(e,0).length(),i=1/ga.setFromMatrixColumn(e,1).length(),a=1/ga.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(va,e,ya)}lookAt(e,t,n){let r=this.elements;return Sa.subVectors(e,t),Sa.lengthSq()===0&&(Sa.z=1),Sa.normalize(),ba.crossVectors(n,Sa),ba.lengthSq()===0&&(Math.abs(n.z)===1?Sa.x+=1e-4:Sa.z+=1e-4,Sa.normalize(),ba.crossVectors(n,Sa)),ba.normalize(),xa.crossVectors(Sa,ba),r[0]=ba.x,r[4]=xa.x,r[8]=Sa.x,r[1]=ba.y,r[5]=xa.y,r[9]=Sa.y,r[2]=ba.z,r[6]=xa.z,r[10]=Sa.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=ga.set(r[0],r[1],r[2]).length(),o=ga.set(r[4],r[5],r[6]).length(),s=ga.set(r[8],r[9],r[10]).length();i<0&&(a=-a),_a.copy(this);let c=1/a,l=1/o,u=1/s;return _a.elements[0]*=c,_a.elements[1]*=c,_a.elements[2]*=c,_a.elements[4]*=l,_a.elements[5]*=l,_a.elements[6]*=l,_a.elements[8]*=u,_a.elements[9]*=u,_a.elements[10]*=u,t.setFromRotationMatrix(_a),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Si,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Si,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ga=new Z,_a=new ha,va=new Z(0,0,0),ya=new Z(1,1,1),ba=new Z,xa=new Z,Sa=new Z,Ca=new ha,wa=new Gi,Ta=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Bi(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Bi(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Bi(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Bi(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Bi(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Bi(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:Ai(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ca,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wa.setFromEuler(this),this.setFromQuaternion(wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ta.DEFAULT_ORDER=`XYZ`;var Ea=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Da=0,Oa=new Z,ka=new Gi,Aa=new ha,ja=new Z,Ma=new Z,Na=new Z,Pa=new Gi,Fa=new Z(1,0,0),Ia=new Z(0,1,0),La=new Z(0,0,1),Ra={type:`added`},za={type:`removed`},Ba={type:`childadded`,child:null},Va={type:`childremoved`,child:null},Ha=class e extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Da++}),this.uuid=zi(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Z,n=new Ta,r=new Gi,i=new Z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ha},normalMatrix:{value:new Ji}}),this.matrix=new ha,this.matrixWorld=new ha,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ka.setFromAxisAngle(e,t),this.quaternion.multiply(ka),this}rotateOnWorldAxis(e,t){return ka.setFromAxisAngle(e,t),this.quaternion.premultiply(ka),this}rotateX(e){return this.rotateOnAxis(Fa,e)}rotateY(e){return this.rotateOnAxis(Ia,e)}rotateZ(e){return this.rotateOnAxis(La,e)}translateOnAxis(e,t){return Oa.copy(e).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fa,e)}translateY(e){return this.translateOnAxis(Ia,e)}translateZ(e){return this.translateOnAxis(La,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ja.copy(e):ja.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(Ma,ja,this.up):Aa.lookAt(ja,Ma,this.up),this.quaternion.setFromRotationMatrix(Aa),r&&(Aa.extractRotation(r.matrixWorld),ka.setFromRotationMatrix(Aa),this.quaternion.premultiply(ka.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(ji(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ra),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null):ji(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(za),Va.child=e,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ra),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,Na),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,Pa,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Ha.DEFAULT_UP=new Z(0,1,0),Ha.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ha.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ua=class extends Ha{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Wa={type:`move`},Ga=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wa)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ua;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Ya(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$i.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=$i.workingColorSpace){return this.r=e,this.g=t,this.b=n,$i.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=$i.workingColorSpace){if(e=Vi(e,1),t=Bi(t,0,1),n=Bi(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ya(i,r,e+1/3),this.g=Ya(i,r,e),this.b=Ya(i,r,e-1/3)}return $i.colorSpaceToWorking(this,r),this}setStyle(e,t=hi){function n(t){t!==void 0&&parseFloat(t)<1&&Ai(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:Ai(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);Ai(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){let n=Ka[e.toLowerCase()];return n===void 0?Ai(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return $i.workingToColorSpace(Xa.copy(this),e),Math.round(Bi(Xa.r*255,0,255))*65536+Math.round(Bi(Xa.g*255,0,255))*256+Math.round(Bi(Xa.b*255,0,255))}getHexString(e=hi){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$i.workingColorSpace){$i.workingToColorSpace(Xa.copy(this),t);let n=Xa.r,r=Xa.g,i=Xa.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=$i.workingColorSpace){return $i.workingToColorSpace(Xa.copy(this),t),e.r=Xa.r,e.g=Xa.g,e.b=Xa.b,e}getStyle(e=hi){$i.workingToColorSpace(Xa.copy(this),e);let t=Xa.r,n=Xa.g,r=Xa.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(qa),this.setHSL(qa.h+e,qa.s+t,qa.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qa),e.getHSL(Ja);let n=Hi(qa.h,Ja.h,t),r=Hi(qa.s,Ja.s,t),i=Hi(qa.l,Ja.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xa=new Q;Q.NAMES=Ka;var Za=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new Q(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Qa=class extends Ha{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$a=new Z,eo=new Z,to=new Z,no=new Z,ro=new Z,io=new Z,ao=new Z,oo=new Z,so=new Z,co=new Z,lo=new ua,uo=new ua,fo=new ua,po=class e{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),$a.subVectors(e,t),r.cross($a);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){$a.subVectors(r,t),eo.subVectors(n,t),to.subVectors(e,t);let a=$a.dot($a),o=$a.dot(eo),s=$a.dot(to),c=eo.dot(eo),l=eo.dot(to),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,no)!==null&&no.x>=0&&no.y>=0&&no.x+no.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,no)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,no.x),s.addScaledVector(a,no.y),s.addScaledVector(o,no.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return lo.setScalar(0),uo.setScalar(0),fo.setScalar(0),lo.fromBufferAttribute(e,t),uo.fromBufferAttribute(e,n),fo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(lo,i.x),a.addScaledVector(uo,i.y),a.addScaledVector(fo,i.z),a}static isFrontFacing(e,t,n,r){return $a.subVectors(n,t),eo.subVectors(e,t),$a.cross(eo).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $a.subVectors(this.c,this.b),eo.subVectors(this.a,this.b),$a.cross(eo).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;ro.subVectors(r,n),io.subVectors(i,n),oo.subVectors(e,n);let s=ro.dot(oo),c=io.dot(oo);if(s<=0&&c<=0)return t.copy(n);so.subVectors(e,r);let l=ro.dot(so),u=io.dot(so);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(ro,a);co.subVectors(e,i);let f=ro.dot(co),p=io.dot(co);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(io,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return ao.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(ao,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(ro,a).addScaledVector(io,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mo=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(go.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(go.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=go.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,go):go.fromBufferAttribute(r,t),go.applyMatrix4(e.matrixWorld),this.expandByPoint(go);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,go),go.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),To.subVectors(this.max,wo),vo.subVectors(e.a,wo),yo.subVectors(e.b,wo),bo.subVectors(e.c,wo),xo.subVectors(yo,vo),So.subVectors(bo,yo),Co.subVectors(vo,bo);let t=[0,-xo.z,xo.y,0,-So.z,So.y,0,-Co.z,Co.y,xo.z,0,-xo.x,So.z,0,-So.x,Co.z,0,-Co.x,-xo.y,xo.x,0,-So.y,So.x,0,-Co.y,Co.x,0];return!Oo(t,vo,yo,bo,To)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,vo,yo,bo,To))?!1:(Eo.crossVectors(xo,So),t=[Eo.x,Eo.y,Eo.z],Oo(t,vo,yo,bo,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,go).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(go).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ho[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ho[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ho[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ho[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ho[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ho[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ho[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ho[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ho)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ho=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],go=new Z,_o=new mo,vo=new Z,yo=new Z,bo=new Z,xo=new Z,So=new Z,Co=new Z,wo=new Z,To=new Z,Eo=new Z,Do=new Z;function Oo(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Do.fromArray(e,a);let o=i.x*Math.abs(Do.x)+i.y*Math.abs(Do.y)+i.z*Math.abs(Do.z),s=t.dot(Do),c=n.dot(Do),l=r.dot(Do);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ko=new Z,Ao=new X,jo=0,Mo=class extends Fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jo++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=bi,this.updateRanges=[],this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ao.fromBufferAttribute(this,t),Ao.applyMatrix3(e),this.setXY(t,Ao.x,Ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXYZ(t,ko.x,ko.y,ko.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix4(e),this.setXYZ(t,ko.x,ko.y,ko.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyNormalMatrix(e),this.setXYZ(t,ko.x,ko.y,ko.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.transformDirection(e),this.setXYZ(t,ko.x,ko.y,ko.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wi(t,this.array),n=Wi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Wi(t,this.array),n=Wi(n,this.array),r=Wi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Wi(t,this.array),n=Wi(n,this.array),r=Wi(r,this.array),i=Wi(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},No=class extends Mo{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Po=class extends Mo{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Fo=class extends Mo{constructor(e,t,n){super(new Float32Array(e),t,n)}},Io=new mo,Lo=new Z,Ro=new Z,zo=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Io.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);let t=Lo.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Lo,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(Ro)),this.expandByPoint(Lo.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Bo=0,Vo=new ha,Ho=new Ha,Uo=new Z,Wo=new mo,Go=new mo,Ko=new Z,qo=class e extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bo++}),this.uuid=zi(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ci(e)?Po:No)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Ji().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vo.makeRotationFromQuaternion(e),this.applyMatrix4(Vo),this}rotateX(e){return Vo.makeRotationX(e),this.applyMatrix4(Vo),this}rotateY(e){return Vo.makeRotationY(e),this.applyMatrix4(Vo),this}rotateZ(e){return Vo.makeRotationZ(e),this.applyMatrix4(Vo),this}translate(e,t,n){return Vo.makeTranslation(e,t,n),this.applyMatrix4(Vo),this}scale(e,t,n){return Vo.makeScale(e,t,n),this.applyMatrix4(Vo),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Fo(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&Ai(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)ji(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Wo.setFromBufferAttribute(n),this.morphTargetsRelative?(Ko.addVectors(this.boundingBox.min,Wo.min),this.boundingBox.expandByPoint(Ko),Ko.addVectors(this.boundingBox.max,Wo.max),this.boundingBox.expandByPoint(Ko)):(this.boundingBox.expandByPoint(Wo.min),this.boundingBox.expandByPoint(Wo.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ji(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)ji(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Z,1/0);else if(e){let n=this.boundingSphere.center;if(Wo.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Go.setFromBufferAttribute(n),this.morphTargetsRelative?(Ko.addVectors(Wo.min,Go.min),Wo.expandByPoint(Ko),Ko.addVectors(Wo.max,Go.max),Wo.expandByPoint(Ko)):(Wo.expandByPoint(Go.min),Wo.expandByPoint(Go.max))}Wo.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ko.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ko));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ko.fromBufferAttribute(a,t),o&&(Uo.fromBufferAttribute(e,t),Ko.add(Uo)),r=Math.max(r,n.distanceToSquared(Ko))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ji(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ji(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Mo(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Z,s[e]=new Z;let c=new Z,l=new Z,u=new Z,d=new X,f=new X,p=new X,m=new Z,h=new Z;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Z,y=new Z,b=new Z,x=new Z;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Mo(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Z,i=new Z,a=new Z,o=new Z,s=new Z,c=new Z,l=new Z,u=new Z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ko.fromBufferAttribute(e,t),Ko.normalize(),e.setXYZ(t,Ko.x,Ko.y,Ko.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Mo(a,r,i)}if(this.index===null)return Ai(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Jo=new Z,Yo=new Z,Xo=new Ji,Zo=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Jo.subVectors(n,t).cross(Yo.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Jo),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xo.getNormalMatrix(e),r=this.coplanarPoint(Jo).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Qo=0,$o=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qo++}),this.uuid=zi(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Q(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ai(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Ai(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Q().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Zo().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new X().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new X().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},es=new Z,ts=new Z,ns=new Z,rs=new Z,is=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(es.copy(this.origin).addScaledVector(this.direction,t),es.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ts.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(ts);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ns),o=rs.dot(this.direction),s=-rs.dot(ns),c=rs.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ts).addScaledVector(ns,d),f}intersectSphere(e,t){if(e.radius<0)return null;es.subVectors(e.center,this.origin);let n=es.dot(this.direction),r=es.dot(es)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,es)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,ee=T-P*D,L=E-F*D,R=O-P*A,te=k-F*A,ne=j-P*N,z=M-F*N,re=ne*te-z*R,B=ee*z-L*ne,V=R*L-te*ee;if(r){if(re<0||B<0||V<0)return null}else if((re<0||B<0||V<0)&&(re>0||B>0||V>0))return null;let ie=re+B+V;if(ie===0)return null;let ae=I*(re*D+B*A+V*N);return(ie>0?ae<0:ae>0)?null:this.at(ae/ie,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},as=class extends $o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},os=new ha,ss=new is,cs=new zo,ls=new Z,us=new Z,ds=new Z,fs=new Z,ps=new Z,ms=new Z,hs=new Z,gs=new Z,_s=class extends Ha{constructor(e=new qo,t=new as){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ms.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ps.fromBufferAttribute(s,e),a?ms.addScaledVector(ps,r):ms.addScaledVector(ps.sub(t),r))}t.add(ms)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(i),ss.copy(e.ray).recast(e.near),!(cs.containsPoint(ss.origin)===!1&&(ss.intersectSphere(cs,ls)===null||ss.origin.distanceToSquared(ls)>(e.far-e.near)**2))&&(os.copy(i).invert(),ss.copy(e.ray).applyMatrix4(os),(n.boundingBox===null||ss.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ys(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ys(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ys(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ys(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function vs(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;gs.copy(s),gs.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(gs);return l<n.near||l>n.far?null:{distance:l,point:gs.clone(),object:e}}function ys(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,us),e.getVertexPosition(c,ds),e.getVertexPosition(l,fs);let u=vs(e,t,n,r,us,ds,fs,hs);if(u){let e=new Z;po.getBarycoord(hs,us,ds,fs,e),i&&(u.uv=po.getInterpolatedAttribute(i,s,c,l,e,new X)),a&&(u.uv1=po.getInterpolatedAttribute(a,s,c,l,e,new X)),o&&(u.normal=po.getInterpolatedAttribute(o,s,c,l,e,new Z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Z,materialIndex:0};po.getNormal(us,ds,fs,t.normal),u.face=t,u.barycoord=e}return u}var bs=class extends la{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Xn,l=Xn,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xs=class extends Mo{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ss=new ha,Cs=new ha,ws=[],Ts=new mo,Es=new ha,Ds=new _s,Os=new zo,ks=class extends _s{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Es)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mo),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),Ts.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Ts)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),Os.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(Os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),e.ray.intersectsSphere(Os)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ss),Cs.multiplyMatrices(n,Ss),Ds.matrixWorld=Cs,Ds.raycast(e,ws);for(let e=0,n=ws.length;e<n;e++){let n=ws[e];n.instanceId=i,n.object=this,t.push(n)}ws.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new bs(new Float32Array(r*this.count),r,this.count,br,cr));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new zo,js=new X(.5,.5),Ms=new Z,Ns=class{constructor(e=new Zo,t=new Zo,n=new Zo,r=new Zo,i=new Zo,a=new Zo){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){return As.center.set(0,0,0),As.radius=.7071067811865476+js.distanceTo(e.center),As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ms.x=r.normal.x>0?e.max.x:e.min.x,Ms.y=r.normal.y>0?e.max.y:e.min.y,Ms.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ps=class extends $o{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Q(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fs=new Z,Is=new Z,Ls=new ha,Rs=new is,zs=new zo,Bs=new Z,Vs=new Z,Hs=class extends Ha{constructor(e=new qo,t=new Ps){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Fs.fromBufferAttribute(t,e-1),Is.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Fs.distanceTo(Is);e.setAttribute(`lineDistance`,new Fo(n,1))}else Ai(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(r),zs.radius+=i,e.ray.intersectsSphere(zs)===!1)return;Ls.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(Ls);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Us(this,e,Rs,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Us(this,e,Rs,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Us(this,e,Rs,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Us(this,e,Rs,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Us(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Fs.fromBufferAttribute(s,i),Is.fromBufferAttribute(s,a),n.distanceSqToSegment(Fs,Is,Bs,Vs)>r)return;Bs.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Bs);if(!(c<t.near||c>t.far))return{distance:c,point:Vs.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ws=new Z,Gs=new Z,Ks=class extends Hs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Ws.fromBufferAttribute(t,e),Gs.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Ws.distanceTo(Gs);e.setAttribute(`lineDistance`,new Fo(n,1))}else Ai(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},qs=class extends $o{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Js=new ha,Ys=new is,Xs=new zo,Zs=new Z,Qs=class extends Ha{constructor(e=new qo,t=new qs){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),Xs.radius+=i,e.ray.intersectsSphere(Xs)===!1)return;Js.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(Js);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Zs.fromBufferAttribute(l,n),$s(Zs,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Zs.fromBufferAttribute(l,a),$s(Zs,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function $s(e,t,n,r,i,a,o){let s=Ys.distanceSqToPoint(e);if(s<n){let n=new Z;Ys.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ec=class extends la{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tc=class extends la{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},nc=class extends la{constructor(e,t,n=sr,r,i,a,o=Xn,s=Xn,c,l=vr,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new aa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},rc=class extends nc{constructor(e,t=sr,n=301,r,i,a=Xn,o=Xn,s,c=vr){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ic=class extends la{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ac=class e extends qo{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Fo(c,3)),this.setAttribute(`normal`,new Fo(l,3)),this.setAttribute(`uv`,new Fo(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},oc=class e extends qo{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new Z,l=new X;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Fo(a,3)),this.setAttribute(`normal`,new Fo(o,3)),this.setAttribute(`uv`,new Fo(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},sc=class e extends qo{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Fo(u,3)),this.setAttribute(`normal`,new Fo(d,3)),this.setAttribute(`uv`,new Fo(f,2));function _(){let a=new Z,_=new Z,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new X,m=new Z,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cc=class e extends sc{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lc=class e extends qo{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Fo(i,3)),this.setAttribute(`normal`,new Fo(i.slice(),3)),this.setAttribute(`uv`,new Fo(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new Z,r=new Z,i=new Z;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new Z;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new Z;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new Z,t=new Z,n=new Z,r=new Z,o=new X,s=new X,c=new X;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},uc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ai(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new X:new Z);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Z,r=[],i=[],a=[],o=new Z,s=new ha;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new Z)}i[0]=new Z,a[0]=new Z;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Bi(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Bi(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},dc=class extends uc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new X){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fc=class extends dc{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function pc(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var mc=new Z,hc=new Z,gc=new pc,_c=new pc,vc=new pc,yc=class extends uc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new Z){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(hc.subVectors(r[0],r[1]).add(r[0]),c=hc);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(mc.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=mc),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),gc.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),_c.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),vc.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(gc.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),_c.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),vc.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(gc.calc(s),_c.calc(s),vc.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new Z().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bc(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function xc(e,t){let n=1-e;return n*n*t}function Sc(e,t){return 2*(1-e)*e*t}function Cc(e,t){return e*e*t}function wc(e,t,n,r){return xc(e,t)+Sc(e,n)+Cc(e,r)}function Tc(e,t){let n=1-e;return n*n*n*t}function Ec(e,t){let n=1-e;return 3*n*n*e*t}function Dc(e,t){return 3*(1-e)*e*e*t}function Oc(e,t){return e*e*e*t}function kc(e,t,n,r,i){return Tc(e,t)+Ec(e,n)+Dc(e,r)+Oc(e,i)}var Ac=class extends uc{constructor(e=new X,t=new X,n=new X,r=new X){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new X){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(kc(e,r.x,i.x,a.x,o.x),kc(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jc=class extends uc{constructor(e=new Z,t=new Z,n=new Z,r=new Z){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(kc(e,r.x,i.x,a.x,o.x),kc(e,r.y,i.y,a.y,o.y),kc(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mc=class extends uc{constructor(e=new X,t=new X){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new X){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nc=class extends uc{constructor(e=new Z,t=new Z){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new Z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pc=class extends uc{constructor(e=new X,t=new X,n=new X){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(wc(e,r.x,i.x,a.x),wc(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fc=class extends uc{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(wc(e,r.x,i.x,a.x),wc(e,r.y,i.y,a.y),wc(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ic=class extends uc{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new X){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(bc(o,s.x,c.x,l.x,u.x),bc(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new X().fromArray(n))}return this}},Lc=Object.freeze({__proto__:null,ArcCurve:fc,CatmullRomCurve3:yc,CubicBezierCurve:Ac,CubicBezierCurve3:jc,EllipseCurve:dc,LineCurve:Mc,LineCurve3:Nc,QuadraticBezierCurve:Pc,QuadraticBezierCurve3:Fc,SplineCurve:Ic}),Rc=class extends uc{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Lc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Lc[n.type]().fromJSON(n))}return this}},zc=class extends Rc{constructor(e){super(),this.type=`Path`,this.currentPoint=new X,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Mc(this.currentPoint.clone(),new X(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Pc(this.currentPoint.clone(),new X(e,t),new X(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Ac(this.currentPoint.clone(),new X(e,t),new X(n,r),new X(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Ic([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new dc(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Bc=class extends zc{constructor(e){super(e),this.uuid=zi(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new zc().fromJSON(n))}return this}};function Vc(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Hc(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Yc(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Wc(a,o,n,s,c,l,0),o}function Hc(e,t,n,r,i){let a;if(i===yl(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=gl(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=gl(i/r|0,e[i],e[i+1],a);return a&&cl(a,a.next)&&(_l(a),a=a.next),a}function Uc(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(cl(n,n.next)||sl(n.prev,n,n.next)===0)){if(_l(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Wc(e,t,n,r,i,a,o){if(!e)return;!o&&a&&el(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Kc(e,r,i,a):Gc(e))t.push(c.i,e.i,l.i),_l(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=qc(Uc(e),t),Wc(e,t,n,r,i,a,2)):o===2&&Jc(e,t,n,r,i,a):Wc(Uc(e),t,n,r,i,a,1);break}}}function Gc(e){let t=e.prev,n=e,r=e.next;if(sl(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&al(i,s,a,c,o,l,m.x,m.y)&&sl(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Kc(e,t,n,r){let i=e.prev,a=e,o=e.next;if(sl(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=nl(p,m,t,n,r),v=nl(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&al(s,u,c,d,l,f,y.x,y.y)&&sl(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&al(s,u,c,d,l,f,b.x,b.y)&&sl(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&al(s,u,c,d,l,f,y.x,y.y)&&sl(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&al(s,u,c,d,l,f,b.x,b.y)&&sl(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function qc(e,t){let n=e;do{let r=n.prev,i=n.next.next;!cl(r,i)&&ll(r,n,n.next,i)&&pl(r,i)&&pl(i,r)&&(t.push(r.i,n.i,i.i),_l(n),_l(n.next),n=e=i),n=n.next}while(n!==e);return Uc(n)}function Jc(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ol(o,e)){let s=hl(o,e);o=Uc(o,o.next),s=Uc(s,s.next),Wc(o,t,n,r,i,a,0),Wc(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Yc(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Hc(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(rl(o))}i.sort(Xc);for(let e=0;e<i.length;e++)n=Zc(i[e],n);return n}function Xc(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Zc(e,t){let n=Qc(e,t);if(!n)return t;let r=hl(n,e);return Uc(r,r.next),Uc(n,n.next)}function Qc(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(cl(e,n))return n;do{if(cl(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&il(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);pl(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&$c(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function $c(e,t){return sl(e.prev,e,t.prev)<0&&sl(t.next,e,e.next)<0}function el(e,t,n,r){let i=e;do i.z===0&&(i.z=nl(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,tl(i)}function tl(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function nl(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function rl(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function il(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function al(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&il(e,t,n,r,i,a,o,s)}function ol(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!fl(e,t)&&(pl(e,t)&&pl(t,e)&&ml(e,t)&&(sl(e.prev,e,t.prev)||sl(e,t.prev,t))||cl(e,t)&&sl(e.prev,e,e.next)>0&&sl(t.prev,t,t.next)>0)}function sl(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function cl(e,t){return e.x===t.x&&e.y===t.y}function ll(e,t,n,r){let i=dl(sl(e,t,n)),a=dl(sl(e,t,r)),o=dl(sl(n,r,e)),s=dl(sl(n,r,t));return!!(i!==a&&o!==s||i===0&&ul(e,n,t)||a===0&&ul(e,r,t)||o===0&&ul(n,e,r)||s===0&&ul(n,t,r))}function ul(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function dl(e){return e>0?1:e<0?-1:0}function fl(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&ll(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function pl(e,t){return sl(e.prev,e,e.next)<0?sl(e,t,e.next)>=0&&sl(e,e.prev,t)>=0:sl(e,t,e.prev)<0||sl(e,e.next,t)<0}function ml(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function hl(e,t){let n=vl(e.i,e.x,e.y),r=vl(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function gl(e,t,n,r){let i=vl(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function _l(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function vl(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yl(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var bl=class{static triangulate(e,t,n=2){return Vc(e,t,n)}},xl=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Sl(e),Cl(n,e);let a=e.length;t.forEach(Sl);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Cl(n,t[e]);let o=bl.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Sl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Cl(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var wl=class e extends qo{constructor(e=new Bc([new X(.5,.5),new X(-.5,.5),new X(-.5,-.5),new X(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Fo(r,3)),this.setAttribute(`uv`,new Fo(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Tl:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new Z,b=new Z,x=new Z}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!xl.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];xl.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||ji(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new X(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new X(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=xl.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ne(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);ne(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=xl.triangulateShape(e,t)}let I=F.length,ee=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],ee):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ne(x.x,x.y,x.z)):ne(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],ee):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ne(x.x,x.y,x.z)):ne(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ne(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?ne(i.x,i.y+g[s-1].y,g[s-1].x+n):ne(i.x,i.y,c+n)}}}L(),R();function L(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<I;e++){let n=F[e];z(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<I;e++){let n=F[e];z(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<I;e++){let t=F[e];z(t[2],t[1],t[0])}for(let e=0;e<I;e++){let t=F[e];z(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function R(){let e=r.length/3,t=0;te(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];te(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function te(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);re(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ne(e,t,n){a.push(e),a.push(t),a.push(n)}function z(e,t,i){B(e),B(t),B(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);V(o[0]),V(o[1]),V(o[2])}function re(e,t,i,a){B(e),B(t),B(a),B(t),B(i),B(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);V(s[0]),V(s[1]),V(s[3]),V(s[1]),V(s[2]),V(s[3])}function B(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function V(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return El(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Lc[i.type]().fromJSON(i)),new e(r,t.options)}},Tl={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new X(a,o),new X(s,c),new X(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new X(o,1-c),new X(l,1-d),new X(f,1-m),new X(h,1-_)]:[new X(s,1-c),new X(u,1-d),new X(p,1-m),new X(g,1-_)]}};function El(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Dl=class e extends lc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ol=class e extends qo{constructor(e=[new X(0,-.5),new X(.5,0),new X(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Bi(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new Z,d=new X,f=new Z,p=new Z,m=new Z,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Fo(a,3)),this.setAttribute(`uv`,new Fo(o,2)),this.setAttribute(`normal`,new Fo(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},kl=class e extends lc{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Al=class e extends qo{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Fo(p,3)),this.setAttribute(`normal`,new Fo(m,3)),this.setAttribute(`uv`,new Fo(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},jl=class e extends qo{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new Z,p=new X;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Fo(s,3)),this.setAttribute(`normal`,new Fo(c,3)),this.setAttribute(`uv`,new Fo(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ml=class e extends qo{constructor(e=new Bc([new X(0,.5),new X(-.5,-.5),new X(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Fo(r,3)),this.setAttribute(`normal`,new Fo(i,3)),this.setAttribute(`uv`,new Fo(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;xl.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];xl.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=xl.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Nl(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Nl(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Pl=class e extends qo{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new Z,d=new Z,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Fo(p,3)),this.setAttribute(`normal`,new Fo(m,3)),this.setAttribute(`uv`,new Fo(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Fl=class e extends qo{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new Z,f=new Z,p=new Z;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Fo(c,3)),this.setAttribute(`normal`,new Fo(l,3)),this.setAttribute(`uv`,new Fo(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Il=class e extends qo{constructor(e=1,t=.4,n=64,r=8,i=2,a=3){super(),this.type=`TorusKnotGeometry`,this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:i,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],s=[],c=[],l=[],u=new Z,d=new Z,f=new Z,p=new Z,m=new Z,h=new Z,g=new Z;for(let o=0;o<=n;++o){let v=o/n*i*Math.PI*2;_(v,i,a,e,f),_(v+.01,i,a,e,p),h.subVectors(p,f),g.addVectors(p,f),m.crossVectors(h,g),g.crossVectors(m,h),m.normalize(),g.normalize();for(let e=0;e<=r;++e){let i=e/r*Math.PI*2,a=-t*Math.cos(i),p=t*Math.sin(i);u.x=f.x+(a*g.x+p*m.x),u.y=f.y+(a*g.y+p*m.y),u.z=f.z+(a*g.z+p*m.z),s.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),l.push(o/n),l.push(e/r)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,s=(r+1)*(e-1)+t;o.push(n,i,s),o.push(i,a,s)}this.setIndex(o),this.setAttribute(`position`,new Fo(s,3)),this.setAttribute(`normal`,new Fo(c,3)),this.setAttribute(`uv`,new Fo(l,2));function _(e,t,n,r,i){let a=Math.cos(e),o=Math.sin(e),s=n/t*e,c=Math.cos(s);i.x=r*(2+c)*.5*a,i.y=r*(2+c)*o*.5,i.z=r*Math.sin(s)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Ll=class e extends qo{constructor(e=new Fc(new Z(-1,-1,0),new Z(-1,1,0),new Z(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new Z,s=new Z,c=new X,l=new Z,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Fo(u,3)),this.setAttribute(`normal`,new Fo(d,3)),this.setAttribute(`uv`,new Fo(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Lc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Rl(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Bl(i))i.isRenderTargetTexture?(Ai(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Bl(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function zl(e){let t={};for(let n=0;n<e.length;n++){let r=Rl(e[n]);for(let e in r)t[e]=r[e]}return t}function Bl(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Vl(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Hl(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$i.workingColorSpace}var Ul={clone:Rl,merge:zl},Wl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kl=class extends $o{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wl,this.fragmentShader=Gl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rl(e.uniforms),this.uniformsGroups=Vl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Q().setHex(r.value);break;case`v2`:this.uniforms[n].value=new X().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Z().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new ua().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Ji().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new ha().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ql=class extends Kl{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Jl=class extends $o{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yl=class extends Jl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bi(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Q(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Q(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Q(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Xl=class extends $o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=mi,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zl=class extends $o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ql=class extends Ps{constructor(e){super(),this.isLineDashedMaterial=!0,this.type=`LineDashedMaterial`,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function $l(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function eu(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var tu=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},nu=class extends tu{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:di,endingEnd:di}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case fi:i=e,o=2*t-n;break;case pi:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case fi:a=e,s=2*n-t;break;case pi:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ru=class extends tu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},iu=class extends tu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},au=class extends tu{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=cu(n,t,g,y,r);i[p]=ou(x,o,_,b,m)}return i}};function ou(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function su(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function cu(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ou(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=su(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var lu=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=$l(t,this.TimeBufferType),this.values=$l(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$l(e.times,Array),values:$l(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),eu(e.settings)&&(n.settings={inTangents:$l(e.settings.inTangents,Array),outTangents:$l(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new au(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case si:t=this.InterpolantFactoryMethodDiscrete;break;case ci:t=this.InterpolantFactoryMethodLinear;break;case li:t=this.InterpolantFactoryMethodSmooth;break;case ui:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return Ai(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return si;case this.InterpolantFactoryMethodLinear:return ci;case this.InterpolantFactoryMethodSmooth:return li;case this.InterpolantFactoryMethodBezier:return ui}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;eu(this.settings)&&(uu(this.settings.inTangents,e),uu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ji(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(ji(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){ji(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){ji(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&wi(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){ji(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===li,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,eu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function uu(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}lu.prototype.ValueTypeName=``,lu.prototype.TimeBufferType=Float32Array,lu.prototype.ValueBufferType=Float32Array,lu.prototype.DefaultInterpolation=ci;var du=class extends lu{constructor(e,t,n){super(e,t,n)}};du.prototype.ValueTypeName=`bool`,du.prototype.ValueBufferType=Array,du.prototype.DefaultInterpolation=si,du.prototype.InterpolantFactoryMethodLinear=void 0,du.prototype.InterpolantFactoryMethodSmooth=void 0;var fu=class extends lu{constructor(e,t,n,r){super(e,t,n,r)}};fu.prototype.ValueTypeName=`color`;var pu=class extends lu{constructor(e,t,n,r){super(e,t,n,r)}};pu.prototype.ValueTypeName=`number`;var mu=class extends tu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Gi.slerpFlat(i,0,a,c-o,a,c,s);return i}},hu=class extends lu{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new mu(this.times,this.values,this.getValueSize(),e)}};hu.prototype.ValueTypeName=`quaternion`,hu.prototype.InterpolantFactoryMethodSmooth=void 0;var gu=class extends lu{constructor(e,t,n){super(e,t,n)}};gu.prototype.ValueTypeName=`string`,gu.prototype.ValueBufferType=Array,gu.prototype.DefaultInterpolation=si,gu.prototype.InterpolantFactoryMethodLinear=void 0,gu.prototype.InterpolantFactoryMethodSmooth=void 0;var _u=class extends lu{constructor(e,t,n,r){super(e,t,n,r)}};_u.prototype.ValueTypeName=`vector`;var vu=class extends Ha{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Q(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},yu=class extends vu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Ha.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Q(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},bu=new ha,xu=new Z,Su=new Z,Cu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X(512,512),this.mapType=nr,this.map=null,this.mapPass=null,this.matrix=new ha,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new ua(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(xu),Su.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Su),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){bu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(bu,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wu=new Z,Tu=new Gi,Eu=new Z,Du=class extends Ha{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new ha,this.projectionMatrix=new ha,this.projectionMatrixInverse=new ha,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wu,Tu,Eu),Eu.x===1&&Eu.y===1&&Eu.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wu,Tu,Eu.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(wu,Tu,Eu),Eu.x===1&&Eu.y===1&&Eu.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wu,Tu,Eu.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ou=new Z,ku=new X,Au=new X,ju=class extends Du{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ri*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Li*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ri*2*Math.atan(Math.tan(Li*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ou.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ou.x,Ou.y).multiplyScalar(-e/Ou.z),Ou.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ou.x,Ou.y).multiplyScalar(-e/Ou.z)}getViewSize(e,t){return this.getViewBounds(e,ku,Au),t.subVectors(Au,ku)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Li*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Mu=class extends Cu{constructor(){super(new ju(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ri*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Nu=class extends vu{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Ha.DEFAULT_UP),this.updateMatrix(),this.target=new Ha,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Mu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Pu=class extends Du{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fu=class extends Cu{constructor(){super(new Pu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Iu=class extends vu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Ha.DEFAULT_UP),this.updateMatrix(),this.target=new Ha,this.shadow=new Fu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Lu=-90,Ru=1,zu=class extends Ha{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ju(Lu,Ru,e,t);r.layers=this.layers,this.add(r);let i=new ju(Lu,Ru,e,t);i.layers=this.layers,this.add(i);let a=new ju(Lu,Ru,e,t);a.layers=this.layers,this.add(a);let o=new ju(Lu,Ru,e,t);o.layers=this.layers,this.add(o);let s=new ju(Lu,Ru,e,t);s.layers=this.layers,this.add(s);let c=new ju(Lu,Ru,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Bu=class extends ju{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Vu=`\\[\\]\\.:\\/`,Hu=RegExp(`[\\[\\]\\.:\\/]`,`g`),Uu=`[^\\[\\]\\.:\\/]`,Wu=`[^`+Vu.replace(`\\.`,``)+`]`,Gu=`((?:WC+[\\/:])*)`.replace(`WC`,Uu),Ku=`(WCOD+)?`.replace(`WCOD`,Wu),qu=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Uu),Ju=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Uu),Yu=RegExp(`^`+Gu+Ku+qu+Ju+`$`),Xu=[`material`,`materials`,`bones`,`map`],Zu=class{constructor(e,t,n){let r=n||Qu.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qu=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Hu,``)}static parseTrackName(e){let t=Yu.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Xu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ai(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){ji(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){ji(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){ji(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){ji(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){ji(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){ji(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){ji(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;ji(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){ji(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){ji(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qu.Composite=Zu,Qu.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Qu.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Qu.prototype.GetterByBindingType=[Qu.prototype._getValue_direct,Qu.prototype._getValue_array,Qu.prototype._getValue_arrayElement,Qu.prototype._getValue_toArray],Qu.prototype.SetterByBindingTypeAndVersioning=[[Qu.prototype._setValue_direct,Qu.prototype._setValue_direct_setNeedsUpdate,Qu.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qu.prototype._setValue_array,Qu.prototype._setValue_array_setNeedsUpdate,Qu.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qu.prototype._setValue_arrayElement,Qu.prototype._setValue_arrayElement_setNeedsUpdate,Qu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qu.prototype._setValue_fromArray,Qu.prototype._setValue_fromArray_setNeedsUpdate,Qu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $u=class e{constructor(e){this.value=e}clone(){return new e(this.value.clone===void 0?this.value:this.value.clone())}},ed=new ha,td=class{constructor(e,t,n=0,r=1/0){this.ray=new is(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ji(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return ed.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ed),this}intersectObject(e,t=!0,n=[]){return rd(e,this,n,t),n.sort(nd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)rd(e[r],this,n,t);return n.sort(nd),n}};function nd(e,t){return e.distance-t.distance}function rd(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)rd(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function id(e,t,n,r){let i=ad(r);switch(n){case hr:return e*t;case br:return e*t/i.components*i.byteLength;case xr:return e*t/i.components*i.byteLength;case Sr:return e*t*2/i.components*i.byteLength;case Cr:return e*t*2/i.components*i.byteLength;case gr:return e*t*3/i.components*i.byteLength;case _r:return e*t*4/i.components*i.byteLength;case wr:return e*t*4/i.components*i.byteLength;case Tr:case Er:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Dr:case Or:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ar:case Mr:return Math.max(e,16)*Math.max(t,8)/4;case kr:case jr:return Math.max(e,8)*Math.max(t,8)/2;case Nr:case Pr:case Ir:case Lr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Fr:case Rr:case zr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Br:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Vr:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Hr:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Gr:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case qr:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Jr:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Zr:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Qr:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case $r:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ei:case ti:case ni:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ri:case ii:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ai:case oi:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ad(e){switch(e){case nr:case rr:return{byteLength:1,components:1};case ar:case ir:case lr:return{byteLength:2,components:1};case ur:case dr:return{byteLength:2,components:4};case sr:case or:case cr:return{byteLength:4,components:1};case pr:case mr:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?Ai(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function od(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function sd(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var cd={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new Q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ji},alphaMap:{value:null},alphaMapTransform:{value:new Ji},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ji}},envmap:{envMap:{value:null},envMapRotation:{value:new Ji},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ji}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ji}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ji},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ji},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ji},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ji}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ji}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ji}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ji},alphaTest:{value:0},uvTransform:{value:new Ji}},sprite:{diffuse:{value:new Q(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ji},alphaMap:{value:null},alphaMapTransform:{value:new Ji},alphaTest:{value:0}}},ld={basic:{uniforms:zl([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:cd.meshbasic_vert,fragmentShader:cd.meshbasic_frag},lambert:{uniforms:zl([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Q(0)},envMapIntensity:{value:1}}]),vertexShader:cd.meshlambert_vert,fragmentShader:cd.meshlambert_frag},phong:{uniforms:zl([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Q(0)},specular:{value:new Q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:cd.meshphong_vert,fragmentShader:cd.meshphong_frag},standard:{uniforms:zl([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:cd.meshphysical_vert,fragmentShader:cd.meshphysical_frag},toon:{uniforms:zl([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new Q(0)}}]),vertexShader:cd.meshtoon_vert,fragmentShader:cd.meshtoon_frag},matcap:{uniforms:zl([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:cd.meshmatcap_vert,fragmentShader:cd.meshmatcap_frag},points:{uniforms:zl([$.points,$.fog]),vertexShader:cd.points_vert,fragmentShader:cd.points_frag},dashed:{uniforms:zl([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:cd.linedashed_vert,fragmentShader:cd.linedashed_frag},depth:{uniforms:zl([$.common,$.displacementmap]),vertexShader:cd.depth_vert,fragmentShader:cd.depth_frag},normal:{uniforms:zl([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:cd.meshnormal_vert,fragmentShader:cd.meshnormal_frag},sprite:{uniforms:zl([$.sprite,$.fog]),vertexShader:cd.sprite_vert,fragmentShader:cd.sprite_frag},background:{uniforms:{uvTransform:{value:new Ji},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:cd.background_vert,fragmentShader:cd.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ji}},vertexShader:cd.backgroundCube_vert,fragmentShader:cd.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:cd.cube_vert,fragmentShader:cd.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:cd.equirect_vert,fragmentShader:cd.equirect_frag},distance:{uniforms:zl([$.common,$.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:cd.distance_vert,fragmentShader:cd.distance_frag},shadow:{uniforms:zl([$.lights,$.fog,{color:{value:new Q(0)},opacity:{value:1}}]),vertexShader:cd.shadow_vert,fragmentShader:cd.shadow_frag}};ld.physical={uniforms:zl([ld.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ji},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ji},clearcoatNormalScale:{value:new X(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ji},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ji},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ji},sheen:{value:0},sheenColor:{value:new Q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ji},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ji},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ji},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ji},attenuationDistance:{value:0},attenuationColor:{value:new Q(0)},specularColor:{value:new Q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ji},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ji},anisotropyVector:{value:new X},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ji}}]),vertexShader:cd.meshphysical_vert,fragmentShader:cd.meshphysical_frag};var ud={r:0,b:0,g:0},dd=new ha,fd=new Ji;fd.set(-1,0,0,0,1,0,0,0,1);function pd(e,t,n,r,i,a){let o=new Q(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new _s(new ac(1,1,1),new Kl({name:`BackgroundCubeMaterial`,uniforms:Rl(ld.backgroundCube.uniforms),vertexShader:ld.backgroundCube.vertexShader,fragmentShader:ld.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(dd.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(fd),l.material.toneMapped=$i.getTransfer(i.colorSpace)!==vi,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new _s(new Al(2,2),new Kl({name:`BackgroundMaterial`,uniforms:Rl(ld.background.uniforms),vertexShader:ld.background.vertexShader,fragmentShader:ld.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=$i.getTransfer(i.colorSpace)!==vi,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ud,Hl(e)),n.buffers.color.setClear(ud.r,ud.g,ud.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function md(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function hd(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function gd(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Ai(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&Ai(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function _d(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Zo,s=new Ji,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var vd=4,yd=6,bd=20,xd=256,Sd=new Pu,Cd=new Q,wd=null,Td=0,Ed=0,Dd=!1,Od=new Z,kd=new Z,Ad=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Od}=i;wd=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wd,Td,Ed),this._renderer.xr.enabled=Dd,e.scissorTest=!1,Nd(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wd=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:lr,format:_r,colorSpace:gi,depthBuffer:!1},r=Md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jd(r)),this._blurMaterial=Fd(r,e,t),this._ggxMaterial=Pd(r,e,t)}return r}_compileMaterial(e){let t=new _s(new qo,e);this._renderer.compile(t,Sd)}_sceneToCubeUV(e,t,n,r,i){let a=new ju(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Cd),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _s(new ac,new as({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Cd),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Nd(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Nd(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Sd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-vd?n-d+vd:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Nd(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Sd),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Nd(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Sd)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Nd(t,3*l*(r>this._lodMax-vd?r-this._lodMax+vd:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Sd)}};function jd(e){let t=[],n=[],r=e,i=e-vd+1+yd;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?kd.set(1,r,n):e===1?kd.set(-n,1,-r):e===2?kd.set(-n,r,1):e===3?kd.set(-1,r,-n):e===4?kd.set(-n,-1,r):kd.set(n,r,-1),kd.toArray(l,(e*6+t)*3)}}let u=new qo;u.setAttribute(`position`,new Mo(c,3)),u.setAttribute(`outputDirection`,new Mo(l,3)),n.push(new _s(u,null)),r>vd&&r--}return{lodMeshes:n,sizeLods:t}}function Md(e,t,n){let r=new fa(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Nd(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Pd(e,t,n){return new Kl({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:xd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fd(e,t,n){return new Kl({name:`SphericalGaussianBlur`,defines:{SAMPLES:bd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Id(){return new Kl({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ld(){return new Kl({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rd(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zd=class extends fa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ec(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ac(5,5,5),i=new Kl({name:`CubemapFromEquirect`,uniforms:Rl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new _s(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=$n),new zu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Bd(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new zd(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ad(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ad(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Vd(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Mi(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Hd(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Po:No)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ud(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Wd(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:ji(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Gd(e,t,n){let r=new WeakMap,i=new ua;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new pa(h,p,m,u);g.type=cr,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new X(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Kd(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var qd={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Jd(e,t,n,r,i,a){let o=new fa(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new qo;l.setAttribute(`position`,new Fo([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Fo([0,2,0,0,2,0],2));let u=new ql({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new _s(l,u),f=new Pu(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new fa(t,n,{type:lr,depthBuffer:!1,stencilBuffer:!1}),c=new fa(t,n,{type:lr,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},$i.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=qd[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Yd=new la,Xd=new nc(1,1),Zd=new pa,Qd=new ma,$d=new ec,ef=[],tf=[],nf=new Float32Array(16),rf=new Float32Array(9),af=new Float32Array(4);function of(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ef[i];if(a===void 0&&(a=new Float32Array(i),ef[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function sf(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function cf(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function lf(e,t){let n=tf[t];n===void 0&&(n=new Int32Array(t),tf[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function uf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function df(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(sf(n,t))return;e.uniform2fv(this.addr,t),cf(n,t)}}function ff(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(sf(n,t))return;e.uniform3fv(this.addr,t),cf(n,t)}}function pf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(sf(n,t))return;e.uniform4fv(this.addr,t),cf(n,t)}}function mf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(sf(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),cf(n,t)}else{if(sf(n,r))return;af.set(r),e.uniformMatrix2fv(this.addr,!1,af),cf(n,r)}}function hf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(sf(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),cf(n,t)}else{if(sf(n,r))return;rf.set(r),e.uniformMatrix3fv(this.addr,!1,rf),cf(n,r)}}function gf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(sf(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),cf(n,t)}else{if(sf(n,r))return;nf.set(r),e.uniformMatrix4fv(this.addr,!1,nf),cf(n,r)}}function _f(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function vf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(sf(n,t))return;e.uniform2iv(this.addr,t),cf(n,t)}}function yf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(sf(n,t))return;e.uniform3iv(this.addr,t),cf(n,t)}}function bf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(sf(n,t))return;e.uniform4iv(this.addr,t),cf(n,t)}}function xf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Sf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(sf(n,t))return;e.uniform2uiv(this.addr,t),cf(n,t)}}function Cf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(sf(n,t))return;e.uniform3uiv(this.addr,t),cf(n,t)}}function wf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(sf(n,t))return;e.uniform4uiv(this.addr,t),cf(n,t)}}function Tf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Xd.compareFunction=n.isReversedDepthBuffer()?518:515,a=Xd):a=Yd,n.setTexture2D(t||a,i)}function Ef(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Qd,i)}function Df(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||$d,i)}function Of(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Zd,i)}function kf(e){switch(e){case 5126:return uf;case 35664:return df;case 35665:return ff;case 35666:return pf;case 35674:return mf;case 35675:return hf;case 35676:return gf;case 5124:case 35670:return _f;case 35667:case 35671:return vf;case 35668:case 35672:return yf;case 35669:case 35673:return bf;case 5125:return xf;case 36294:return Sf;case 36295:return Cf;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Tf;case 35679:case 36299:case 36307:return Ef;case 35680:case 36300:case 36308:case 36293:return Df;case 36289:case 36303:case 36311:case 36292:return Of}}function Af(e,t){e.uniform1fv(this.addr,t)}function jf(e,t){let n=of(t,this.size,2);e.uniform2fv(this.addr,n)}function Mf(e,t){let n=of(t,this.size,3);e.uniform3fv(this.addr,n)}function Nf(e,t){let n=of(t,this.size,4);e.uniform4fv(this.addr,n)}function Pf(e,t){let n=of(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ff(e,t){let n=of(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function If(e,t){let n=of(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Lf(e,t){e.uniform1iv(this.addr,t)}function Rf(e,t){e.uniform2iv(this.addr,t)}function zf(e,t){e.uniform3iv(this.addr,t)}function Bf(e,t){e.uniform4iv(this.addr,t)}function Vf(e,t){e.uniform1uiv(this.addr,t)}function Hf(e,t){e.uniform2uiv(this.addr,t)}function Uf(e,t){e.uniform3uiv(this.addr,t)}function Wf(e,t){e.uniform4uiv(this.addr,t)}function Gf(e,t,n){let r=this.cache,i=t.length,a=lf(n,i);sf(r,a)||(e.uniform1iv(this.addr,a),cf(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Xd:Yd;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Kf(e,t,n){let r=this.cache,i=t.length,a=lf(n,i);sf(r,a)||(e.uniform1iv(this.addr,a),cf(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Qd,a[e])}function qf(e,t,n){let r=this.cache,i=t.length,a=lf(n,i);sf(r,a)||(e.uniform1iv(this.addr,a),cf(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||$d,a[e])}function Jf(e,t,n){let r=this.cache,i=t.length,a=lf(n,i);sf(r,a)||(e.uniform1iv(this.addr,a),cf(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Zd,a[e])}function Yf(e){switch(e){case 5126:return Af;case 35664:return jf;case 35665:return Mf;case 35666:return Nf;case 35674:return Pf;case 35675:return Ff;case 35676:return If;case 5124:case 35670:return Lf;case 35667:case 35671:return Rf;case 35668:case 35672:return zf;case 35669:case 35673:return Bf;case 5125:return Vf;case 36294:return Hf;case 36295:return Uf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Gf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return Jf}}var Xf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kf(t.type)}},Zf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yf(t.type)}},Qf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},$f=/(\w+)(\])?(\[|\.)?/g;function ep(e,t){e.seq.push(t),e.map[t.id]=t}function tp(e,t,n){let r=e.name,i=r.length;for($f.lastIndex=0;;){let a=$f.exec(r),o=$f.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ep(n,l===void 0?new Xf(s,e,t):new Zf(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Qf(s),ep(n,e)),n=e}}}var np=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);tp(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function rp(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ip=37297,ap=0;function op(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var sp=new Ji;function cp(e){$i._getMatrix(sp,$i.workingColorSpace,e);let t=`mat3( ${sp.elements.map(e=>e.toFixed(4))} )`;switch($i.getTransfer(e)){case _i:return[t,`LinearTransferOETF`];case vi:return[t,`sRGBTransferOETF`];default:return Ai(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function lp(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+op(e.getShaderSource(t),r)}return i}function up(e,t){let n=cp(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var dp={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function fp(e,t){let n=dp[t];return n===void 0?(Ai(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var pp=new Z;function mp(){return $i.getLuminanceCoefficients(pp),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${pp.x.toFixed(4)}, ${pp.y.toFixed(4)}, ${pp.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function hp(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(vp).join(`
`)}function gp(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function _p(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function vp(e){return e!==``}function yp(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bp(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sp(e){return e.replace(xp,wp)}var Cp=new Map;function wp(e,t){let n=cd[t];if(n===void 0){let e=Cp.get(t);if(e!==void 0)n=cd[e],Ai(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Sp(n)}var Tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ep(e){return e.replace(Tp,Dp)}function Dp(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Op(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var kp={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ap(e){return kp[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var jp={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Mp(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:jp[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Np={302:`ENVMAP_MODE_REFRACTION`};function Pp(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Np[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Fp={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ip(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Fp[e.combine]||`ENVMAP_BLENDING_NONE`}function Lp(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Rp(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ap(n),l=Mp(n),u=Pp(n),d=Ip(n),f=Lp(n),p=hp(n),m=gp(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(vp).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(vp).join(`
`),_.length>0&&(_+=`
`)):(g=[Op(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(vp).join(`
`),_=[Op(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:cd.tonemapping_pars_fragment,n.toneMapping===0?``:fp(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,cd.colorspace_pars_fragment,up(`linearToOutputTexel`,n.outputColorSpace),mp(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(vp).join(`
`)),o=Sp(o),o=yp(o,n),o=bp(o,n),s=Sp(s),s=yp(s,n),s=bp(s,n),o=Ep(o),s=Ep(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=rp(i,i.VERTEX_SHADER,y),S=rp(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=lp(i,x,`vertex`),n=lp(i,S,`fragment`);ji(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Ai(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new np(i,h),T=_p(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,ip)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ap++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var zp=0,Bp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vp(e),t.set(e,n)),n}},Vp=class{constructor(e){this.id=zp++,this.code=e,this.usedTimes=0}};function Hp(e){return e===1030||e===37490||e===36285}function Up(e,t,n,r,i,a){let o=new Ea,s=new Bp,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&Ai(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ld[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,ee=!!x,L=!!i.aoMap,R=!!i.lightMap,te=!!i.bumpMap&&i.wireframe===!1,ne=!!i.normalMap,z=!!i.displacementMap,re=!!i.emissiveMap,B=!!i.metalnessMap,V=!!i.roughnessMap,ie=i.anisotropy>0,ae=i.clearcoat>0,oe=i.dispersion>0,H=i.retroreflectivity>0,U=i.iridescence>0,se=i.sheen>0,ce=i.transmission>0,W=ie&&!!i.anisotropyMap,le=ae&&!!i.clearcoatMap,ue=ae&&!!i.clearcoatNormalMap,de=ae&&!!i.clearcoatRoughnessMap,fe=U&&!!i.iridescenceMap,G=U&&!!i.iridescenceThicknessMap,pe=se&&!!i.sheenColorMap,me=se&&!!i.sheenRoughnessMap,he=!!i.specularMap,K=!!i.specularColorMap,ge=!!i.specularIntensityMap,_e=ce&&!!i.transmissionMap,ve=ce&&!!i.thicknessMap,ye=!!i.gradientMap,be=!!i.alphaMap,xe=i.alphaTest>0,Se=!!i.alphaHash,Ce=!!i.extensions,we=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(we=e.toneMapping);let Te={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:$i.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:ee,envMapMode:ee&&x.mapping,envMapCubeUVHeight:S,aoMap:L,lightMap:R,bumpMap:te,normalMap:ne,displacementMap:z,emissiveMap:re,normalMapObjectSpace:ne&&i.normalMapType===1,normalMapTangentSpace:ne&&i.normalMapType===0,packedNormalMap:ne&&i.normalMapType===0&&Hp(i.normalMap.format),metalnessMap:B,roughnessMap:V,anisotropy:ie,anisotropyMap:W,clearcoat:ae,clearcoatMap:le,clearcoatNormalMap:ue,clearcoatRoughnessMap:de,dispersion:oe,retroreflection:H,iridescence:U,iridescenceMap:fe,iridescenceThicknessMap:G,sheen:se,sheenColorMap:pe,sheenRoughnessMap:me,specularMap:he,specularColorMap:K,specularIntensityMap:ge,transmission:ce,transmissionMap:_e,thicknessMap:ve,gradientMap:ye,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:be,alphaTest:xe,alphaHash:Se,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:L&&m(i.aoMap.channel),lightMapUv:R&&m(i.lightMap.channel),bumpMapUv:te&&m(i.bumpMap.channel),normalMapUv:ne&&m(i.normalMap.channel),displacementMapUv:z&&m(i.displacementMap.channel),emissiveMapUv:re&&m(i.emissiveMap.channel),metalnessMapUv:B&&m(i.metalnessMap.channel),roughnessMapUv:V&&m(i.roughnessMap.channel),anisotropyMapUv:W&&m(i.anisotropyMap.channel),clearcoatMapUv:le&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:G&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:me&&m(i.sheenRoughnessMap.channel),specularMapUv:he&&m(i.specularMap.channel),specularColorMapUv:K&&m(i.specularColorMap.channel),specularIntensityMapUv:ge&&m(i.specularIntensityMap.channel),transmissionMapUv:_e&&m(i.transmissionMap.channel),thicknessMapUv:ve&&m(i.thicknessMap.channel),alphaMapUv:be&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ne||ie),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||be),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ne===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:we,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&$i.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:re&&i.emissiveMap.isVideoTexture===!0&&$i.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ce&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ce&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ld[t];n=Ul.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Rp(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Wp(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Gp(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Kp(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function qp(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Gp),r.length>1&&r.sort(t||Kp),i.length>1&&i.sort(t||Kp)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Jp(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new qp,e.set(t,[i])):n>=r.length?(i=new qp,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Yp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Z,color:new Q};break;case`SpotLight`:n={position:new Z,direction:new Z,color:new Q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Z,color:new Q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Z,skyColor:new Q,groundColor:new Q};break;case`RectAreaLight`:n={color:new Q,position:new Z,halfWidth:new Z,halfHeight:new Z}}return e[t.id]=n,n}}}function Xp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Zp=0;function Qp(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function $p(e){let t=new Yp,n=Xp(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Z);let i=new Z,a=new ha,o=new ha;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Qp);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Zp++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function em(e){let t=new $p(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function tm(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new em(e),t.set(n,[a])):r>=i.length?(a=new em(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,im=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],am=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],om=new ha,sm=new Z,cm=new Z;function lm(e,t,n){let r=new Ns,i=new X,a=new X,o=new ua,s=new Xl,c=new Zl,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Kl({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:nm,fragmentShader:rm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new qo;m.setAttribute(`position`,new Mo(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new _s(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(Ai(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){Ai(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){Ai(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new fa(i.x,i.y,{format:Sr,type:lr,minFilter:$n,magFilter:$n,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new nc(i.x,i.y,cr),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=vr,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Xn,d.map.depthTexture.magFilter=Xn}else l.isPointLight?(d.map=new zd(i.x),d.map.depthTexture=new rc(i.x,sr)):(d.map=new fa(i.x,i.y),d.map.depthTexture=new nc(i.x,i.y,sr)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=vr,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=$n,d.map.depthTexture.magFilter=$n):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Xn,d.map.depthTexture.magFilter=Xn);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),sm.setFromMatrixPosition(l.matrixWorld),e.position.copy(sm),cm.copy(e.position),cm.add(im[t]),e.up.copy(am[t]),e.lookAt(cm),e.updateMatrixWorld(),n.makeTranslation(-sm.x,-sm.y,-sm.z),om.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(om,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new fa(i.x,i.y,{format:Sr,type:lr}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function um(e,t){function n(){let t=!1,n=new ua,r=null,i=new ua(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?B(e.DEPTH_TEST):V(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Pi[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?B(e.STENCIL_TEST):V(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Q(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,ee={},L=e.getParameter(e.SCISSOR_BOX),R=e.getParameter(e.VIEWPORT),te=new ua().fromArray(L),ne=new ua().fromArray(R);function z(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let re={};re[e.TEXTURE_2D]=z(e.TEXTURE_2D,e.TEXTURE_2D,1),re[e.TEXTURE_CUBE_MAP]=z(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[e.TEXTURE_2D_ARRAY]=z(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),re[e.TEXTURE_3D]=z(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),B(e.DEPTH_TEST),o.setFunc(3),W(!1),le(1),B(e.CULL_FACE),se(0);function B(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function V(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ie(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ae(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function oe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let H={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};H[103]=e.MIN,H[104]=e.MAX;let U={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function se(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(V(e.BLEND),g=!1);else if(g===!1&&(B(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ji(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:ji(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:ji(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:ji(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(H[n],H[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(U[r],U[i],U[o],U[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ce(t,n){t.side===2?V(e.CULL_FACE):B(e.CULL_FACE);let r=t.side===1;n&&(r=!r),W(r),t.blending===1&&t.transparent===!1?se(0):se(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),de(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?B(e.SAMPLE_ALPHA_TO_COVERAGE):V(e.SAMPLE_ALPHA_TO_COVERAGE)}function W(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function le(t){t===0?V(e.CULL_FACE):(B(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ue(t){t!==k&&(N&&e.lineWidth(t),k=t)}function de(t,n,r){t?(B(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):V(e.POLYGON_OFFSET_FILL)}function fe(t){t?B(e.SCISSOR_TEST):V(e.SCISSOR_TEST)}function G(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function pe(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=ee[r];i===void 0&&(i={type:void 0,texture:void 0},ee[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||re[t]),i.type=t,i.texture=n)}function me(){let t=ee[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function he(){try{e.compressedTexImage2D(...arguments)}catch(e){ji(`WebGLState:`,e)}}function K(){try{e.compressedTexImage3D(...arguments)}catch(e){ji(`WebGLState:`,e)}}function ge(){try{e.texSubImage2D(...arguments)}catch(e){ji(`WebGLState:`,e)}}function _e(){try{e.texSubImage3D(...arguments)}catch(e){ji(`WebGLState:`,e)}}function ve(){try{e.compressedTexSubImage2D(...arguments)}catch(e){ji(`WebGLState:`,e)}}function ye(){try{e.compressedTexSubImage3D(...arguments)}catch(e){ji(`WebGLState:`,e)}}function be(){try{e.texStorage2D(...arguments)}catch(e){ji(`WebGLState:`,e)}}function xe(){try{e.texStorage3D(...arguments)}catch(e){ji(`WebGLState:`,e)}}function Se(){try{e.texImage2D(...arguments)}catch(e){ji(`WebGLState:`,e)}}function Ce(){try{e.texImage3D(...arguments)}catch(e){ji(`WebGLState:`,e)}}function we(t){return d[t]===void 0?e.getParameter(t):d[t]}function Te(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ee(t){te.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),te.copy(t))}function De(t){ne.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ne.copy(t))}function Oe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ke(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ae(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,ee={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Q(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,te.set(0,0,e.canvas.width,e.canvas.height),ne.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:B,disable:V,bindFramebuffer:ie,drawBuffers:ae,useProgram:oe,setBlending:se,setMaterial:ce,setFlipSided:W,setCullFace:le,setLineWidth:ue,setPolygonOffset:de,setScissorTest:fe,activeTexture:G,bindTexture:pe,unbindTexture:me,compressedTexImage2D:he,compressedTexImage3D:K,texImage2D:Se,texImage3D:Ce,pixelStorei:Te,getParameter:we,updateUBOMapping:Oe,uniformBlockBinding:ke,texStorage2D:be,texStorage3D:xe,texSubImage2D:ge,texSubImage3D:_e,compressedTexSubImage2D:ve,compressedTexSubImage3D:ye,scissor:Ee,viewport:De,reset:Ae}}function dm(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new X,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Ti(`canvas`)}function g(e,t,n){let r=1,i=he(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Ai(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Ai(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];Ai(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||Ai(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?_i:$i.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Ai(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&Ai(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&pe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)Ai(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Ai(`WebGLRenderer: Texture marked for update but image is incomplete`);else{V(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?V(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function I(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?V(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ee(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?ie(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let L={[qn]:e.REPEAT,[Jn]:e.CLAMP_TO_EDGE,[Yn]:e.MIRRORED_REPEAT},R={[Xn]:e.NEAREST,[Zn]:e.NEAREST_MIPMAP_NEAREST,[Qn]:e.NEAREST_MIPMAP_LINEAR,[$n]:e.LINEAR,[er]:e.LINEAR_MIPMAP_NEAREST,[tr]:e.LINEAR_MIPMAP_LINEAR},te={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ne(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&Ai(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,L[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,L[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,L[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,R[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,R[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,te[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function z(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function re(e,t,n){return Math.floor(Math.floor(e/n)/t)}function B(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=re(n.start,r.width,4),c=re(t.start,r.width,4);n.start<=i+1&&a===c&&re(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function V(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=z(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=$i.getPrimaries($i.workingColorSpace),r=o.colorSpace===``?null:$i.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=me(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ne(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===yr,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&B(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=id(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else Ai(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?Ai(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=id(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=he(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=he(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ie(t,o,s){if(o.image.length!==6)return;let c=z(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=$i.getPrimaries($i.workingColorSpace),r=o.colorSpace===``?null:$i.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=me(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);ne(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?Ai(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=he(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ae(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),G(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,fe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function oe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;G(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);G(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function H(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ne(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=fe(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)G(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)G(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function U(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)H(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?H(i.__webglFramebuffer[0],t,0):H(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),oe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),oe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function se(t,n,i){let a=r.get(t);n!==void 0&&ae(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&U(t)}function ce(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&G(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=fe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),oe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ne(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ae(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ne(c,a),ae(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ne(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ae(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&U(t)}function W(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let le=[],ue=[];function de(t){if(t.samples>0){if(G(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(le.length=0,ue.length=0,le.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(le.push(l),ue.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ue)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,le))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function fe(e){return Math.min(i.maxSamples,e.samples)}function G(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function pe(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function me(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&($i.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Ai(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):ji(`WebGLTextures: Unsupported texture color space:`,n)),t}function he(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=P,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=ee,this.rebindTextures=se,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=G,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function fm(e,t){function n(n,r=``){let i,a=$i.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ic(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Kl({vertexShader:pm,fragmentShader:mm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _s(new Al(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gm=class extends Fi{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new hm,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new X,C=null,w=null,T=new ju;T.viewport=new ua;let E=new ju;E.viewport=new ua;let D=[T,E],O=new Bu,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Ga,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Ga,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Ga,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Ai(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&Ai(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?yr:vr,a=_.stencil?fr:sr);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new fa(d.textureWidth,d.textureHeight,{format:_r,type:nr,depthTexture:new nc(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new fa(f.framebufferWidth,f.framebufferHeight,{format:_r,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let P=new Z,F=new Z;function I(e,t,n){P.setFromMatrixPosition(t.matrixWorld),F.setFromMatrixPosition(n.matrixWorld);let r=P.distanceTo(F),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ee(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ee(O,i);for(let e=0;e<a.length;e++)ee(a[e],i);a.length===2?I(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),L(e,O,i)};function L(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ri*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let R=null;function te(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new ju,o.layers.enable(n),o.viewport=new ua,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ic,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}R&&R(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ne=new od;ne.setAnimationLoop(te),this.setAnimationLoop=function(e){R=e},this.dispose=function(){}}},_m=new ha,vm=new Ji;vm.set(-1,0,0,0,1,0,0,0,1);function ym(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Hl(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(_m.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(vm),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function bm(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return ji(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?Ai(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):Ai(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var xm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sm=null;function Cm(){return Sm===null&&(Sm=new bs(xm,16,16,Sr,lr),Sm.name=`DFG_LUT`,Sm.minFilter=$n,Sm.magFilter=$n,Sm.wrapS=Jn,Sm.wrapT=Jn,Sm.generateMipmaps=!1,Sm.needsUpdate=!0),Sm}var wm=class{constructor(e={}){let{canvas:t=Ei(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=nr}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([wr,Cr,xr]),g=new Set([nr,sr,ar,fr,ur,dr]),_=new Uint32Array(4),v=new Int32Array(4),y=new Z,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=hi;let j=0,M=0,N=null,P=-1,F=null,I=new ua,ee=new ua,L=null,R=new Q(0),te=0,ne=t.width,z=t.height,re=1,B=null,V=null,ie=new ua(0,0,ne,z),ae=new ua(0,0,ne,z),oe=!1,H=new Ns,U=!1,se=!1,ce=new ha,W=new Z,le=new ua,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function fe(){return N===null?re:1}let G=n;function pe(e,n){return t.getContext(e,n)}let me,he,K,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Re,!1),t.addEventListener(`webglcontextrestored`,ze,!1),t.addEventListener(`webglcontextcreationerror`,Be,!1),G===null){let t=`webgl2`;if(G=pe(t,e),G===null)throw pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ie()}catch(e){throw t.removeEventListener(`webglcontextlost`,Re,!1),t.removeEventListener(`webglcontextrestored`,ze,!1),t.removeEventListener(`webglcontextcreationerror`,Be,!1),ji(`WebGLRenderer: `+e.message),e}function Ie(){me=new Vd(G),me.init(),Ne=new fm(G,me),he=new gd(G,me,e,Ne),K=new um(G,me),he.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),O=G.createFramebuffer(),k=G.createFramebuffer(),A=G.createFramebuffer(),ge=new Wd(G),_e=new Wp,ve=new dm(G,me,K,_e,he,Ne,ge),ye=new Bd(T),be=new sd(G),Pe=new md(G,be),xe=new Hd(G,be,ge,Pe),Se=new Kd(G,xe,be,Pe,ge),Ae=new Gd(G,he,ve),De=new _d(_e),Ce=new Up(T,ye,me,he,Pe,De),we=new ym(T,_e),Te=new Jp,Ee=new tm(me),ke=new pd(T,ye,K,Se,p,s),Oe=new lm(T,Se,he),Fe=new bm(G,ge,he,K),je=new hd(G,me,ge),Me=new Ud(G,me,ge),ge.programs=Ce.programs,T.capabilities=he,T.extensions=me,T.properties=_e,T.renderLists=Te,T.shadowMap=Oe,T.state=K,T.info=ge}m!==1009&&(w=new Jd(m,t.width,t.height,o,r,i));let Le=new gm(T,G);this.xr=Le,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let e=me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(e){e!==void 0&&(re=e,this.setSize(ne,z,!1))},this.getSize=function(e){return e.set(ne,z)},this.setSize=function(e,n,r=!0){Le.isPresenting?Ai(`WebGLRenderer: Can't change size while VR device is presenting.`):(ne=e,z=n,t.width=Math.floor(e*re),t.height=Math.floor(n*re),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ne*re,z*re).floor()},this.setDrawingBufferSize=function(e,n,r){ne=e,z=n,re=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)ji(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Ai(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(I)},this.getViewport=function(e){return e.copy(ie)},this.setViewport=function(e,t,n,r){e.isVector4?ie.set(e.x,e.y,e.z,e.w):ie.set(e,t,n,r),K.viewport(I.copy(ie).multiplyScalar(re).round())},this.getScissor=function(e){return e.copy(ae)},this.setScissor=function(e,t,n,r){e.isVector4?ae.set(e.x,e.y,e.z,e.w):ae.set(e,t,n,r),K.scissor(ee.copy(ae).multiplyScalar(re).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(e){K.setScissorTest(oe=e)},this.setOpaqueSort=function(e){B=e},this.setTransparentSort=function(e){V=e},this.getClearColor=function(e){return e.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=ke.getClearColor(),r=ke.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,G.clearBufferuiv(G.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,G.clearBufferiv(G.COLOR,0,v))}else r|=G.COLOR_BUFFER_BIT}t&&(r|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&G.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Re,!1),t.removeEventListener(`webglcontextrestored`,ze,!1),t.removeEventListener(`webglcontextcreationerror`,Be,!1),ke.dispose(),Te.dispose(),Ee.dispose(),_e.dispose(),ye.dispose(),Se.dispose(),Pe.dispose(),Fe.dispose(),Ce.dispose(),Le.dispose(),Le.removeEventListener(`sessionstart`,qe),Le.removeEventListener(`sessionend`,Je),Ye.stop()};function Re(e){e.preventDefault(),Oi(`WebGLRenderer: Context Lost.`),E=!0}function ze(){Oi(`WebGLRenderer: Context Restored.`),E=!1;let e=ge.autoReset,t=Oe.enabled,n=Oe.autoUpdate,r=Oe.needsUpdate,i=Oe.type;Ie(),ge.autoReset=e,Oe.enabled=t,Oe.autoUpdate=n,Oe.needsUpdate=r,Oe.type=i}function Be(e){ji(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ve(e){let t=e.target;t.removeEventListener(`dispose`,Ve),He(t)}function He(e){Ue(e),_e.remove(e)}function Ue(e){let t=_e.get(e).programs;t!==void 0&&(t.forEach(function(e){Ce.releaseProgram(e)}),e.isShaderMaterial&&Ce.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ue);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=at(e,t,n,r,i);K.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=xe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Pe.setup(i,r,s,n,c);let h,g=je;if(c!==null&&(h=be.get(c),g=Me,g.setIndex(h)),i.isMesh)r.wireframe===!0?(K.setLineWidth(r.wireframeLinewidth*fe()),g.setMode(G.LINES)):g.setMode(G.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),K.setLineWidth(e*fe()),i.isLineSegments?g.setMode(G.LINES):i.isLineLoop?g.setMode(G.LINE_LOOP):g.setMode(G.LINE_STRIP)}else i.isPoints?g.setMode(G.POINTS):i.isSprite&&g.setMode(G.TRIANGLES);if(i.isBatchedMesh){if(me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?be.get(c).bytesPerElement:1,o=_e.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(G,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function We(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),U===!0&&De.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,tt(e,t,r),e.side=0,e.needsUpdate=!0,tt(e,t,r),e.side=2):tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ee.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),se=this.localClippingEnabled,U=De.init(this.clippingPlanes,se),U===!0&&De.setGlobalState(this.clippingPlanes,t),D!==null&&Oe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];We(o,n,t,e),r.add(o)}else We(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=_e.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ge=null;function Ke(e){Ge&&Ge(e)}function qe(){Ye.stop()}function Je(){Ye.start()}let Ye=new od;Ye.setAnimationLoop(Ke),typeof self<`u`&&Ye.setContext(self),this.setAnimationLoop=function(e){Ge=e,Le.setAnimationLoop(e),e===null?Ye.stop():Ye.start()},Le.addEventListener(`sessionstart`,qe),Le.addEventListener(`sessionend`,Je),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){ji(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Le.enabled===!0&&Le.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(t),t=Le.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Ee.get(e,C.length),x.init(t),x.state.textureUnits=ve.getTextureUnits(),C.push(x),ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),H.setFromProjectionMatrix(ce,Si,t.reversedDepth),se=this.localClippingEnabled,U=De.init(this.clippingPlanes,se),b=Te.get(e,S.length),b.init(),S.push(b),Le.enabled===!0&&Le.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&Xe(e,t,-1/0,T.sortObjects)}Xe(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(B,V),de=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,de&&ke.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),U===!0&&De.beginShadows();let i=x.state.shadowsArray;if(Oe.render(i,e,t),U===!0&&De.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Qe(n,r,e,a)}de&&ke.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ze(b,e,n,n.viewport)}}else r.length>0&&Qe(n,r,e,t),de&&ke.render(e),Ze(b,e,t)}N!==null&&M===0&&(ve.updateMultisampleRenderTarget(N),ve.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Pe.resetDefaultState(),P=-1,F=null,C.pop(),C.length>0?(x=C[C.length-1],ve.setTextureUnits(x.state.textureUnits),U===!0&&De.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function Xe(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(H)){r&&le.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ce);let i=Se.update(e),a=e.material;a.visible&&b.push(e,i,a,n,le.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(H))){let i=Se.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),le.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),le.copy(e.boundingSphere.center)),le.applyMatrix4(e.matrixWorld).applyMatrix4(ce)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,le.z,s,t)}}else a.visible&&b.push(e,i,a,n,le.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Xe(i[e],t,n,r)}function Ze(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),U===!0&&De.setGlobalState(T.clippingPlanes,n),r&&K.viewport(I.copy(r)),i.length>0&&$e(i,t,n),a.length>0&&$e(a,t,n),o.length>0&&$e(o,t,n),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Qe(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=me.has(`EXT_color_buffer_half_float`)||me.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new fa(1,1,{generateMipmaps:!0,type:e?lr:nr,minFilter:tr,samples:Math.max(4,he.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$i.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||I;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(R),te=T.getClearAlpha(),te<1&&T.setClearColor(16777215,.5),T.clear(),de&&ke.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),U===!0&&De.setGlobalState(T.clippingPlanes,r),$e(e,n,r),ve.updateMultisampleRenderTarget(a),ve.updateRenderTargetMipmap(a),me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ve.updateMultisampleRenderTarget(a),ve.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(R,te),d!==void 0&&(r.viewport=d),T.toneMapping=u}function $e(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&et(o,t,n,s,l,c)}}function et(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function tt(e,t,n){t.isScene!==!0&&(t=ue);let r=_e.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ce.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ce.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ye.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ve),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return rt(e,s),d}else s.uniforms=Ce.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ce.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=De.uniform),rt(e,s),r.needsLights=st(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function nt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=np.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function rt(e,t){let n=_e.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function it(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function at(e,t,n,r,i){t.isScene!==!0&&(t=ue),ve.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:$i.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ye.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=_e.get(r),y=x.state.lights;if(U===!0&&(se===!0||e!==F)){let t=e===F&&r.id===P;De.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==De.numPlanes||v.numIntersection!==De.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=tt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(K.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==P&&(P=r.id,w=!0),v.needsLights){let e=it(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||F!==e){K.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(G,`projectionMatrix`,e.projectionMatrix),O.setValue(G,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(G,W.setFromMatrixPosition(e.matrixWorld)),he.logarithmicDepthBuffer&&O.setValue(G,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(G,`isOrthographic`,e.isOrthographicCamera===!0),F!==e&&(F=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(G,`sunShadowMap`,y.state.sunShadowMap,ve),y.state.directionalShadowMap.length>0&&O.setValue(G,`directionalShadowMap`,y.state.directionalShadowMap,ve),y.state.spotShadowMap.length>0&&O.setValue(G,`spotShadowMap`,y.state.spotShadowMap,ve),y.state.pointShadowMap.length>0&&O.setValue(G,`pointShadowMap`,y.state.pointShadowMap,ve)),i.isSkinnedMesh){O.setOptional(G,i,`bindMatrix`),O.setOptional(G,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(G,`boneTexture`,e.boneTexture,ve))}i.isBatchedMesh&&(O.setOptional(G,i,`batchingTexture`),O.setValue(G,`batchingTexture`,i._matricesTexture,ve),O.setOptional(G,i,`batchingIdTexture`),O.setValue(G,`batchingIdTexture`,i._indirectTexture,ve),O.setOptional(G,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(G,`batchingColorTexture`,i._colorsTexture,ve));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ae.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(G,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Cm()),w){if(O.setValue(G,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ot(k,E),a&&r.fog===!0&&we.refreshFogUniforms(k,a),we.refreshMaterialUniforms(k,r,re,z,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}np.upload(G,nt(v),k,ve)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(np.upload(G,nt(v),k,ve),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(G,`center`,i.center),O.setValue(G,`modelViewMatrix`,i.modelViewMatrix),O.setValue(G,`normalMatrix`,i.normalMatrix),O.setValue(G,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Fe.update(n,S),Fe.bind(n,S)}}return S}function ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function st(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=_e.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),_e.get(e.texture).__webglTexture=t,_e.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=_e.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=_e.get(e);if(o.__useDefaultFramebuffer!==void 0){K.bindFramebuffer(G.FRAMEBUFFER,o.__webglFramebuffer),I.copy(e.viewport),ee.copy(e.scissor),L=e.scissorTest,K.viewport(I),K.scissor(ee),K.setScissorTest(L),P=-1;return}if(o.__webglFramebuffer===void 0)ve.setupRenderTarget(e);else if(o.__hasExternalTextures)ve.rebindTextures(e,_e.get(e.texture).__webglTexture,_e.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&_e.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ve.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=_e.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ve.useMultisampledRTT(e)===!1?_e.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,I.copy(e.viewport),ee.copy(e.scissor),L=e.scissorTest}else I.copy(ie).multiplyScalar(re).floor(),ee.copy(ae).multiplyScalar(re).floor(),L=oe;if(n!==0&&(r=O),K.bindFramebuffer(G.FRAMEBUFFER,r)&&K.drawBuffers(e,r),K.viewport(I),K.scissor(ee),K.setScissorTest(L),i){let r=_e.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=_e.get(e.textures[t]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=_e.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,t.__webglTexture,n)}P=-1};function ct(e){let t=_e.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=he.textureFormatReadable(e.format),t.__typeReadable=he.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){ji(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=_e.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){K.bindFramebuffer(G.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s);let u=ct(o);if(u.__formatReadable===!1){ji(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){ji(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&G.readPixels(t,n,r,i,Ne.convert(c),Ne.convert(l),a)}finally{let e=N===null?null:_e.get(N).__webglFramebuffer;K.bindFramebuffer(G.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=_e.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){K.bindFramebuffer(G.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s);let d=ct(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,f),G.bufferData(G.PIXEL_PACK_BUFFER,a.byteLength,G.STREAM_READ),G.readPixels(t,n,r,i,Ne.convert(l),Ne.convert(u),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let p=N===null?null:_e.get(N).__webglFramebuffer;K.bindFramebuffer(G.FRAMEBUFFER,p);let m=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Ni(G,m,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,f),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,a),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(f),G.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ve.setTexture2D(e,0),G.copyTexSubImage2D(G.TEXTURE_2D,n,0,0,o,s,i,a),K.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ne.convert(t.format),_=Ne.convert(t.type),v;t.isData3DTexture?(ve.setTexture3D(t,0),v=G.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ve.setTexture2DArray(t,0),v=G.TEXTURE_2D_ARRAY):(ve.setTexture2D(t,0),v=G.TEXTURE_2D),K.activeTexture(G.TEXTURE0),K.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,t.flipY),K.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),K.pixelStorei(G.UNPACK_ALIGNMENT,t.unpackAlignment);let y=K.getParameter(G.UNPACK_ROW_LENGTH),b=K.getParameter(G.UNPACK_IMAGE_HEIGHT),x=K.getParameter(G.UNPACK_SKIP_PIXELS),S=K.getParameter(G.UNPACK_SKIP_ROWS),C=K.getParameter(G.UNPACK_SKIP_IMAGES);K.pixelStorei(G.UNPACK_ROW_LENGTH,h.width),K.pixelStorei(G.UNPACK_IMAGE_HEIGHT,h.height),K.pixelStorei(G.UNPACK_SKIP_PIXELS,l),K.pixelStorei(G.UNPACK_SKIP_ROWS,u),K.pixelStorei(G.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=_e.get(e),r=_e.get(t),h=_e.get(n.__renderTarget),g=_e.get(r.__renderTarget);K.bindFramebuffer(G.READ_FRAMEBUFFER,h.__webglFramebuffer),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,_e.get(e).__webglTexture,i,d+n),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,_e.get(t).__webglTexture,a,m+n)),G.blitFramebuffer(l,u,o,s,f,p,o,s,G.DEPTH_BUFFER_BIT,G.NEAREST);K.bindFramebuffer(G.READ_FRAMEBUFFER,null),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||_e.has(e)){let n=_e.get(e),r=_e.get(t);K.bindFramebuffer(G.READ_FRAMEBUFFER,k),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,n.__webglTexture,i),T?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,r.__webglTexture,a),i===0?T?G.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):G.copyTexSubImage2D(v,a,f,p,l,u,o,s):G.blitFramebuffer(l,u,o,s,f,p,o,s,G.COLOR_BUFFER_BIT,G.NEAREST);K.bindFramebuffer(G.READ_FRAMEBUFFER,null),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?G.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h);K.pixelStorei(G.UNPACK_ROW_LENGTH,y),K.pixelStorei(G.UNPACK_IMAGE_HEIGHT,b),K.pixelStorei(G.UNPACK_SKIP_PIXELS,x),K.pixelStorei(G.UNPACK_SKIP_ROWS,S),K.pixelStorei(G.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&G.generateMipmap(v),K.unbindTexture()},this.initRenderTarget=function(e){_e.get(e).__webglFramebuffer===void 0&&ve.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ve.setTextureCube(e,0):e.isData3DTexture?ve.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ve.setTexture2DArray(e,0):ve.setTexture2D(e,0),K.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,K.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$i._getDrawingBufferColorSpace(e),t.unpackColorSpace=$i._getUnpackColorSpace()}},Tm=(()=>{let e=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t=new Float32Array([0,0,2,0,0,2]),n=new qo;return n.setAttribute(`position`,new Mo(e,3)),n.setAttribute(`uv`,new Mo(t,2)),n})(),Em=class e{static get fullscreenGeometry(){return Tm}constructor(e=`Pass`,t=new Qa,n=new Pu){this.name=e,this.renderer=null,this.scene=t,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen===null?null:this.screen.material}set fullscreenMaterial(t){let n=this.screen;n===null?(n=new _s(e.fullscreenGeometry,t),n.frustumCulled=!1,this.scene===null&&(this.scene=new Qa),this.scene.add(n),this.screen=n):n.material=t}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=mi){}render(e,t,n,r,i){throw Error(`Render method not implemented!`)}setSize(e,t){}initialize(e,t,n){}dispose(){for(let t of Object.keys(this)){let n=this[t];(n instanceof fa||n instanceof $o||n instanceof la||n instanceof e)&&this[t].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Dm=class extends Em{constructor(){super(`ClearMaskPass`,null,null),this.needsSwap=!1}render(e,t,n,r,i){let a=e.state.buffers.stencil;a.setLocked(!1),a.setTest(!1)}},Om=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,km=`varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}`,Am=class extends Kl{constructor(){super({name:`CopyMaterial`,defines:{COLOR_SPACE_CONVERSION:`1`,DEPTH_PACKING:`0`,COLOR_WRITE:`1`},uniforms:{inputBuffer:new $u(null),depthBuffer:new $u(null),channelWeights:new $u(null),opacity:new $u(1)},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Om,vertexShader:km}),this.depthFunc=1}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(e){let t=e!==null;this.colorWrite!==t&&(t?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=t,this.needsUpdate=!0),this.uniforms.inputBuffer.value=e}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){let t=e!==null;this.depthWrite!==t&&(t?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=t,this.depthWrite=t,this.needsUpdate=!0),this.uniforms.depthBuffer.value=e}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(e){this.colorSpaceConversion!==e&&(e?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(e){e===null?delete this.defines.USE_WEIGHTS:(this.defines.USE_WEIGHTS=`1`,this.uniforms.channelWeights.value=e),this.needsUpdate=!0}setInputBuffer(e){this.uniforms.inputBuffer.value=e}getOpacity(e){return this.uniforms.opacity.value}setOpacity(e){this.uniforms.opacity.value=e}},jm=class extends Em{constructor(e,t=!0){super(`CopyPass`),this.fullscreenMaterial=new Am,this.needsSwap=!1,this.renderTarget=e,e===void 0&&(this.renderTarget=new fa(1,1,{minFilter:$n,magFilter:$n,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name=`CopyPass.Target`),this.autoResize=t}get resize(){return this.autoResize}set resize(e){this.autoResize=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(e){this.autoResize=e}render(e,t,n,r,i){this.fullscreenMaterial.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){this.autoResize&&this.renderTarget.setSize(e,t)}initialize(e,t,n){n!==void 0&&(this.renderTarget.texture.type=n,n===1009?e!==null&&e.outputColorSpace===`srgb`&&(this.renderTarget.texture.colorSpace=hi):this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`)}},Mm=new Q,Nm=class extends Em{constructor(e=!0,t=!0,n=!1){super(`ClearPass`,null,null),this.needsSwap=!1,this.color=e,this.depth=t,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(e,t,n){this.color=e,this.depth=t,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(e){this.overrideClearColor=e}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(e){this.overrideClearAlpha=e}render(e,t,n,r,i){let a=this.overrideClearColor,o=this.overrideClearAlpha,s=e.getClearAlpha(),c=a!==null,l=o>=0;c?(e.getClearColor(Mm),e.setClearColor(a,l?o:s)):l&&e.setClearAlpha(o),e.setRenderTarget(this.renderToScreen?null:t),e.clear(this.color,this.depth,this.stencil),c?e.setClearColor(Mm,s):l&&e.setClearAlpha(s)}},Pm=class extends Em{constructor(e,t){super(`MaskPass`,e,t),this.needsSwap=!1,this.clearPass=new Nm(!1,!1,!0),this.inverse=!1}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get inverted(){return this.inverse}set inverted(e){this.inverse=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(e){this.inverted=e}render(e,t,n,r,i){let a=e.getContext(),o=e.state.buffers,s=this.scene,c=this.camera,l=this.clearPass,u=+!this.inverted,d=1-u;o.color.setMask(!1),o.depth.setMask(!1),o.color.setLocked(!0),o.depth.setLocked(!0),o.stencil.setTest(!0),o.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.stencil.setFunc(a.ALWAYS,u,4294967295),o.stencil.setClear(d),o.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?l.render(e,null):(l.render(e,t),l.render(e,n))),this.renderToScreen?(e.setRenderTarget(null),e.render(s,c)):(e.setRenderTarget(t),e.render(s,c),e.setRenderTarget(n),e.render(s,c)),o.color.setLocked(!1),o.depth.setLocked(!1),o.stencil.setLocked(!1),o.stencil.setFunc(a.EQUAL,1,4294967295),o.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.stencil.setLocked(!0)}};function Fm(e,t){let n=e.getContext();if(t<=0||typeof n.renderbufferStorageMultisample!=`function`)return 0;let r=n.getParameter(n.MAX_SAMPLES),i=Math.min(t,r);if(i<=0)return 0;let a=n.getParameter(n.RENDERBUFFER_BINDING),o=n.createRenderbuffer();try{return n.bindRenderbuffer(n.RENDERBUFFER,o),n.renderbufferStorageMultisample(n.RENDERBUFFER,i,n.RGBA8,1,1),i}catch{return 0}finally{n.bindRenderbuffer(n.RENDERBUFFER,a),n.deleteRenderbuffer(o)}}var Im=1/1e3,Lm=1e3,Rm=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(e){typeof document<`u`&&document.hidden!==void 0&&(e?document.addEventListener(`visibilitychange`,this):document.removeEventListener(`visibilitychange`,this),this._autoReset=e)}get delta(){return this._delta*Im}get fixedDelta(){return this._fixedDelta*Im}set fixedDelta(e){this._fixedDelta=e*Lm}get elapsed(){return this._elapsed*Im}update(e){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(e===void 0?performance.now():e)-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(e){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},zm=class{constructor(e=null,{depthBuffer:t=!0,stencilBuffer:n=!1,multisampling:r=0,frameBufferType:i=nr}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,n,i,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new jm,this.depthRenderTarget=null,this.passes=[],this.timer=new Rm,this.autoRenderToScreen=!0,this.setRenderer(e)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(e){let t=this.renderer===null?e:Fm(this.renderer,e);this.multisampling!==t&&(this.inputBuffer.samples=t,this.outputBuffer.samples=t,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(e){if(this.renderer=e,e!==null){let t=e.getSize(new X),n=e.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===1009&&e.outputColorSpace===`srgb`&&(this.inputBuffer.texture.colorSpace=hi,this.outputBuffer.texture.colorSpace=hi,this.inputBuffer.dispose(),this.outputBuffer.dispose());let i=this.multisampling;this.multisampling=i,e.autoClear=!1,this.setSize(t.width,t.height);for(let t of this.passes)t.initialize(e,n,r)}}replaceRenderer(e,t=!0){let n=this.renderer,r=n.domElement.parentNode;return this.setRenderer(e),t&&r!==null&&(r.removeChild(n.domElement),r.appendChild(e.domElement)),n}createDepthTexture(){let e=new nc;e.name=`EffectComposer.InputDepth`,this.inputBuffer.stencilBuffer?(e.format=yr,e.type=fr):e.type=cr;let t=new nc;t.format=e.format,t.type=e.type,t.name=`EffectComposer.OutputDepth`;let n=new nc;n.format=e.format,n.type=e.type,n.name=`EffectComposer.StableDepth`,this.inputBuffer.depthTexture=e,this.outputBuffer.depthTexture=t,this.inputBuffer.dispose(),this.outputBuffer.dispose();let{width:r,height:i}=this.inputBuffer;this.depthRenderTarget=new fa(r,i,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:n})}blitDepthBuffer(e){let t=this.renderer,n=this.depthRenderTarget,r=t.properties,i=t.getContext();t.setRenderTarget(n);let a=r.get(e).__webglFramebuffer,o=r.get(n).__webglFramebuffer,s=e.stencilBuffer?i.DEPTH_BUFFER_BIT|i.STENCIL_BUFFER_BIT:i.DEPTH_BUFFER_BIT;i.bindFramebuffer(i.READ_FRAMEBUFFER,a),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,o),i.blitFramebuffer(0,0,e.width,e.height,0,0,n.width,n.height,s,i.NEAREST),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),t.setRenderTarget(null)}deleteDepthTexture(){let e=this.stableDepthTexture;for(let t of this.passes)t.getDepthTexture()===e&&t.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(e,t,n,r){let i=this.renderer,a=i===null?new X:i.getDrawingBufferSize(new X),o=new fa(a.width,a.height,{minFilter:$n,magFilter:$n,samples:r,stencilBuffer:t,depthBuffer:e,type:n});return n===1009&&i!==null&&i.outputColorSpace===`srgb`&&(o.texture.colorSpace=hi),o.texture.name=`EffectComposer.Buffer`,o.texture.generateMipmaps=!1,o}setMainScene(e){for(let t of this.passes)t.mainScene=e}setMainCamera(e){for(let t of this.passes)t.mainCamera=e}addPass(e,t){let n=this.passes,r=this.renderer,i=r.getDrawingBufferSize(new X),a=r.getContext().getContextAttributes().alpha,o=this.inputBuffer.texture.type;if(e.renderer=r,e.setSize(i.width,i.height),e.initialize(r,a,o),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),e.renderToScreen&&(this.autoRenderToScreen=!1)),t===void 0?n.push(e):n.splice(t,0,e),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),e.needsDepthTexture||this.depthRenderTarget!==null){if(this.depthRenderTarget===null){this.createDepthTexture();for(let e of n)e.setDepthTexture(this.stableDepthTexture)}else e.setDepthTexture(this.stableDepthTexture)}}removePass(e){let t=this.passes,n=t.indexOf(e);if(n!==-1&&t.splice(n,1).length>0){let r=this.stableDepthTexture;r!==null&&(t.reduce((e,t)=>e||t.needsDepthTexture,!1)||(e.getDepthTexture()===r&&e.setDepthTexture(null),this.deleteDepthTexture())),this.autoRenderToScreen&&n===t.length&&(e.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){let e=this.passes;this.deleteDepthTexture(),e.length>0&&(this.autoRenderToScreen&&(e[e.length-1].renderToScreen=!1),this.passes=[])}render(e){let t=this.renderer,n=this.copyPass,r=this.inputBuffer,i=this.outputBuffer,a,o=!1;e===void 0&&(this.timer.update(),e=this.timer.getDelta());for(let s of this.passes)if(s.enabled){if(s.render(t,r,i,e,o),s.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(r),s.needsSwap){if(o){n.renderToScreen=s.renderToScreen;let a=t.getContext(),c=t.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),n.render(t,r,i,e,o),c.setFunc(a.EQUAL,1,4294967295)}a=r,r=i,i=a}s instanceof Pm?o=!0:s instanceof Dm&&(o=!1)}}setSize(e,t,n){let r=this.renderer,i=r.getSize(new X);(e===void 0||t===void 0)&&(e=i.width,t=i.height),(i.width!==e||i.height!==t)&&r.setSize(e,t,n);let a=r.getDrawingBufferSize(new X);this.inputBuffer.setSize(a.width,a.height),this.outputBuffer.setSize(a.width,a.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(a.width,a.height);for(let e of this.passes)e.setSize(a.width,a.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let e of this.passes)e.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],Em.fullscreenGeometry.dispose()}},Bm={NONE:0,DEPTH:1,CONVOLUTION:2},Vm={FRAGMENT_HEAD:`FRAGMENT_HEAD`,FRAGMENT_MAIN_UV:`FRAGMENT_MAIN_UV`,FRAGMENT_MAIN_IMAGE:`FRAGMENT_MAIN_IMAGE`,VERTEX_HEAD:`VERTEX_HEAD`,VERTEX_MAIN_SUPPORT:`VERTEX_MAIN_SUPPORT`},Hm=class{constructor(){this.shaderParts=new Map([[Vm.FRAGMENT_HEAD,null],[Vm.FRAGMENT_MAIN_UV,null],[Vm.FRAGMENT_MAIN_IMAGE,null],[Vm.VERTEX_HEAD,null],[Vm.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Bm.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=gi}},Um=!1,Wm=class{constructor(e=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(e),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case 2:t=this.materialsFlatShadedDoubleSide;break;case 1:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded}else switch(e.material.side){case 2:t=this.materialsDoubleSide;break;case 1:t=this.materialsBackSide;break;default:t=this.materials}this.originalMaterials.set(e,e.material),e.material=e.isSkinnedMesh?t[2]:e.isInstancedMesh?t[1]:t[0],++this.meshCount}}}cloneMaterial(e){if(!(e instanceof Kl))return e.clone();let t=e.uniforms,n=new Map;for(let e in t){let r=t[e].value;r.isRenderTargetTexture&&(t[e].value=null,n.set(e,r))}let r=e.clone();for(let e of n)t[e[0]].value=e[1],r.uniforms[e[0]].value=e[1];return r}setMaterial(e){if(this.disposeMaterials(),this.material=e,e!==null){let t=this.materials=[this.cloneMaterial(e),this.cloneMaterial(e),this.cloneMaterial(e)];for(let n of t)n.uniforms=Object.assign({},e.uniforms),n.side=0;t[2].skinning=!0,this.materialsBackSide=t.map(t=>{let n=this.cloneMaterial(t);return n.uniforms=Object.assign({},e.uniforms),n.side=1,n}),this.materialsDoubleSide=t.map(t=>{let n=this.cloneMaterial(t);return n.uniforms=Object.assign({},e.uniforms),n.side=2,n}),this.materialsFlatShaded=t.map(t=>{let n=this.cloneMaterial(t);return n.uniforms=Object.assign({},e.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=t.map(t=>{let n=this.cloneMaterial(t);return n.uniforms=Object.assign({},e.uniforms),n.flatShading=!0,n.side=1,n}),this.materialsFlatShadedDoubleSide=t.map(t=>{let n=this.cloneMaterial(t);return n.uniforms=Object.assign({},e.uniforms),n.flatShading=!0,n.side=2,n})}}render(e,t,n){let r=e.shadowMap.enabled;if(e.shadowMap.enabled=!1,Um){let r=this.originalMaterials;this.meshCount=0,t.traverse(this.replaceMaterial),e.render(t,n);for(let e of r)e[0].material=e[1];this.meshCount!==r.size&&r.clear()}else{let r=t.overrideMaterial;t.overrideMaterial=this.material,e.render(t,n),t.overrideMaterial=r}e.shadowMap.enabled=r}disposeMaterials(){if(this.material!==null){let e=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let t of e)t.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Um}static set workaroundEnabled(e){Um=e}},Gm=-1,Km=class extends Fi{constructor(e=null,t=Gm,n=Gm,r=1){super(),e!==null&&this.addEventListener(`change`,()=>e.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new X(1,1),this.preferredSize=new X(t,n),this.target=this.preferredSize,this.s=r,this.effectiveSize=new X,this.addEventListener(`change`,()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){let e=this.baseSize,t=this.preferredSize,n=this.effectiveSize,r=this.scale;n.width=t.width===Gm?t.height===Gm?Math.round(e.width*r):Math.round(t.height*(e.width/Math.max(e.height,1))):t.width,n.height=t.height===Gm?t.width===Gm?Math.round(e.height*r):Math.round(t.width/Math.max(e.width/Math.max(e.height,1),1)):t.height}get width(){return this.effectiveSize.width}set width(e){this.preferredWidth=e}get height(){return this.effectiveSize.height}set height(e){this.preferredHeight=e}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(e){this.s!==e&&(this.s=e,this.preferredSize.setScalar(Gm),this.dispatchEvent({type:`change`}))}getScale(){return this.scale}setScale(e){this.scale=e}get baseWidth(){return this.baseSize.width}set baseWidth(e){this.baseSize.width!==e&&(this.baseSize.width=e,this.dispatchEvent({type:`change`}))}getBaseWidth(){return this.baseWidth}setBaseWidth(e){this.baseWidth=e}get baseHeight(){return this.baseSize.height}set baseHeight(e){this.baseSize.height!==e&&(this.baseSize.height=e,this.dispatchEvent({type:`change`}))}getBaseHeight(){return this.baseHeight}setBaseHeight(e){this.baseHeight=e}setBaseSize(e,t){(this.baseSize.width!==e||this.baseSize.height!==t)&&(this.baseSize.set(e,t),this.dispatchEvent({type:`change`}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(e){this.preferredSize.width!==e&&(this.preferredSize.width=e,this.dispatchEvent({type:`change`}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(e){this.preferredWidth=e}get preferredHeight(){return this.preferredSize.height}set preferredHeight(e){this.preferredSize.height!==e&&(this.preferredSize.height=e,this.dispatchEvent({type:`change`}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(e){this.preferredHeight=e}setPreferredSize(e,t){(this.preferredSize.width!==e||this.preferredSize.height!==t)&&(this.preferredSize.set(e,t),this.dispatchEvent({type:`change`}))}copy(e){this.s=e.scale,this.baseSize.set(e.baseWidth,e.baseHeight),this.preferredSize.set(e.preferredWidth,e.preferredHeight),this.dispatchEvent({type:`change`})}static get AUTO_SIZE(){return Gm}},qm={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Jm=new Map([[qm.ADD,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.ALPHA,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}`],[qm.AVERAGE,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.COLOR,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.COLOR_BURN,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.COLOR_DODGE,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.DARKEN,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.DIFFERENCE,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.DIVIDE,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.DST,null],[qm.EXCLUSION,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.HARD_LIGHT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.HARD_MIX,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.HUE,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.INVERT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.INVERT_RGB,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.LIGHTEN,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.LINEAR_BURN,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.LINEAR_DODGE,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.LINEAR_LIGHT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.LUMINOSITY,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.MULTIPLY,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.NEGATION,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.NORMAL,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}`],[qm.OVERLAY,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.PIN_LIGHT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.REFLECT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.SATURATION,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.SCREEN,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.SOFT_LIGHT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.SRC,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}`],[qm.SUBTRACT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`],[qm.VIVID_LIGHT,`vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}`]]),Ym=class extends Fi{constructor(e,t=1){super(),this._blendFunction=e,this.opacity=new $u(t)}getOpacity(){return this.opacity.value}setOpacity(e){this.opacity.value=e}get blendFunction(){return this._blendFunction}set blendFunction(e){this._blendFunction=e,this.dispatchEvent({type:`change`})}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e}getShaderCode(){return Jm.get(this.blendFunction)}},Xm=class extends Fi{constructor(e,t,{attributes:n=Bm.NONE,blendFunction:r=qm.NORMAL,defines:i=new Map,uniforms:a=new Map,extensions:o=null,vertexShader:s=null}={}){super(),this.name=e,this.renderer=null,this.attributes=n,this.fragmentShader=t,this.vertexShader=s,this.defines=i,this.uniforms=a,this.extensions=o,this.blendMode=new Ym(r),this.blendMode.addEventListener(`change`,e=>this.setChanged()),this._inputColorSpace=gi,this._outputColorSpace=``}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(e){this._inputColorSpace=e,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e,this.setChanged()}set mainScene(e){}set mainCamera(e){}getName(){return this.name}setRenderer(e){this.renderer=e}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(e){this.attributes=e,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(e){this.fragmentShader=e,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(e){this.vertexShader=e,this.setChanged()}setChanged(){this.dispatchEvent({type:`change`})}setDepthTexture(e,t=mi){}update(e,t,n){}setSize(e,t){}initialize(e,t,n){}dispose(){for(let e of Object.keys(this)){let t=this[e];(t instanceof fa||t instanceof $o||t instanceof la||t instanceof Em)&&this[e].dispose()}}},Zm={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},Qm=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,$m=`uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}`,eh=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],th=class extends Kl{constructor(e=new ua){super({name:`KawaseBlurMaterial`,uniforms:{inputBuffer:new $u(null),texelSize:new $u(new ua),scale:new $u(1),kernel:new $u(0)},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Qm,vertexShader:$m}),this.setTexelSize(e.x,e.y),this.kernelSize=Zm.MEDIUM}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.inputBuffer=e}get kernelSequence(){return eh[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(e){this.uniforms.scale.value=e}getScale(){return this.uniforms.scale.value}setScale(e){this.uniforms.scale.value=e}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(e){this.uniforms.kernel.value=e}setKernel(e){this.kernel=e}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t,e*.5,t*.5)}setSize(e,t){let n=1/e,r=1/t;this.uniforms.texelSize.value.set(n,r,n*.5,r*.5)}},nh=class extends Em{constructor({kernelSize:e=Zm.MEDIUM,resolutionScale:t=.5,width:n=Km.AUTO_SIZE,height:r=Km.AUTO_SIZE,resolutionX:i=n,resolutionY:a=r}={}){super(`KawaseBlurPass`),this.renderTargetA=new fa(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name=`Blur.Target.A`,this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name=`Blur.Target.B`;let o=this.resolution=new Km(this,i,a,t);o.addEventListener(`change`,e=>this.setSize(o.baseWidth,o.baseHeight)),this._blurMaterial=new th,this._blurMaterial.kernelSize=e,this.copyMaterial=new Am}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(e){this._blurMaterial=e}get dithering(){return this.copyMaterial.dithering}set dithering(e){this.copyMaterial.dithering=e}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(e){this.blurMaterial.kernelSize=e}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get scale(){return this.blurMaterial.scale}set scale(e){this.blurMaterial.scale=e}getScale(){return this.blurMaterial.scale}setScale(e){this.blurMaterial.scale=e}getKernelSize(){return this.kernelSize}setKernelSize(e){this.kernelSize=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,n,r,i){let a=this.scene,o=this.camera,s=this.renderTargetA,c=this.renderTargetB,l=this.blurMaterial,u=l.kernelSequence,d=t;this.fullscreenMaterial=l;for(let t=0,n=u.length;t<n;++t){let n=t&1?c:s;l.kernel=u[t],l.inputBuffer=d.texture,e.setRenderTarget(n),e.render(a,o),d=n}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=d.texture,e.setRenderTarget(this.renderToScreen?null:n),e.render(a,o)}setSize(e,t){let n=this.resolution;n.setBaseSize(e,t);let r=n.width,i=n.height;this.renderTargetA.setSize(r,i),this.renderTargetB.setSize(r,i),this.blurMaterial.setSize(e,t)}initialize(e,t,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n===1009?e!==null&&e.outputColorSpace===`srgb`&&(this.renderTargetA.texture.colorSpace=hi,this.renderTargetB.texture.colorSpace=hi):(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`,this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`))}static get AUTO_SIZE(){return Km.AUTO_SIZE}},rh=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,ih=class extends Kl{constructor(e=!1,t=null){super({name:`LuminanceMaterial`,defines:{THREE_REVISION:`186`.replace(/\D+/g,``)},uniforms:{inputBuffer:new $u(null),threshold:new $u(0),smoothing:new $u(1),range:new $u(null)},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:rh,vertexShader:km}),this.colorOutput=e,this.luminanceRange=t}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get threshold(){return this.uniforms.threshold.value}set threshold(e){this.smoothing>0||e>0?this.defines.THRESHOLD=`1`:delete this.defines.THRESHOLD,this.uniforms.threshold.value=e}getThreshold(){return this.threshold}setThreshold(e){this.threshold=e}get smoothing(){return this.uniforms.smoothing.value}set smoothing(e){this.threshold>0||e>0?this.defines.THRESHOLD=`1`:delete this.defines.THRESHOLD,this.uniforms.smoothing.value=e}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(e){this.smoothing=e}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(e){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(e){e?this.defines.COLOR=`1`:delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(e){return this.colorOutput}setColorOutputEnabled(e){this.colorOutput=e}get useRange(){return this.luminanceRange!==null}set useRange(e){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(e){e===null?delete this.defines.RANGE:this.defines.RANGE=`1`,this.uniforms.range.value=e,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(e){this.luminanceRange=e}},ah=class extends Em{constructor({renderTarget:e,luminanceRange:t,colorOutput:n,resolutionScale:r=1,width:i=Km.AUTO_SIZE,height:a=Km.AUTO_SIZE,resolutionX:o=i,resolutionY:s=a}={}){super(`LuminancePass`),this.fullscreenMaterial=new ih(n,t),this.needsSwap=!1,this.renderTarget=e,this.renderTarget===void 0&&(this.renderTarget=new fa(1,1,{depthBuffer:!1}),this.renderTarget.texture.name=`LuminancePass.Target`);let c=this.resolution=new Km(this,o,s,r);c.addEventListener(`change`,e=>this.setSize(c.baseWidth,c.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(e,t,n,r,i){let a=this.fullscreenMaterial;a.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){let n=this.resolution;n.setBaseSize(e,t),this.renderTarget.setSize(n.width,n.height)}initialize(e,t,n){n!==void 0&&n!==1009&&(this.renderTarget.texture.type=n,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`)}},oh=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,sh=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}`,ch=class extends Kl{constructor(){super({name:`DownsamplingMaterial`,uniforms:{inputBuffer:new $u(null),texelSize:new $u(new X)},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:oh,vertexShader:sh})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},lh=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,uh=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}`,dh=class extends Kl{constructor(){super({name:`UpsamplingMaterial`,uniforms:{inputBuffer:new $u(null),supportBuffer:new $u(null),texelSize:new $u(new X),radius:new $u(.85)},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:lh,vertexShader:uh})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}set supportBuffer(e){this.uniforms.supportBuffer.value=e}get radius(){return this.uniforms.radius.value}set radius(e){this.uniforms.radius.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},fh=class extends Em{constructor(){super(`MipmapBlurPass`),this.needsSwap=!1,this.renderTarget=new fa(1,1,{depthBuffer:!1}),this.renderTarget.texture.name=`Upsampling.Mipmap0`,this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new ch,this.upsamplingMaterial=new dh,this.resolution=new X}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(e){if(this.levels!==e){let t=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let n=0;n<e;++n){let e=t.clone();e.texture.name=`Downsampling.Mipmap`+n,this.downsamplingMipmaps.push(e)}this.upsamplingMipmaps.push(t);for(let n=1,r=e-1;n<r;++n){let e=t.clone();e.texture.name=`Upsampling.Mipmap`+n,this.upsamplingMipmaps.push(e)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(e){this.upsamplingMaterial.radius=e}render(e,t,n,r,i){let{scene:a,camera:o}=this,{downsamplingMaterial:s,upsamplingMaterial:c}=this,{downsamplingMipmaps:l,upsamplingMipmaps:u}=this,d=t;this.fullscreenMaterial=s;for(let t=0,n=l.length;t<n;++t){let n=l[t];s.setSize(d.width,d.height),s.inputBuffer=d.texture,e.setRenderTarget(n),e.render(a,o),d=n}this.fullscreenMaterial=c;for(let t=u.length-1;t>=0;--t){let n=u[t];c.setSize(d.width,d.height),c.inputBuffer=d.texture,c.supportBuffer=l[t].texture,e.setRenderTarget(n),e.render(a,o),d=n}}setSize(e,t){let n=this.resolution;n.set(e,t);let r=n.width,i=n.height;for(let e=0,t=this.downsamplingMipmaps.length;e<t;++e)r=Math.round(r*.5),i=Math.round(i*.5),this.downsamplingMipmaps[e].setSize(r,i),e<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[e].setSize(r,i)}initialize(e,t,n){if(n!==void 0){let t=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(let e of t)e.texture.type=n;if(n!==1009)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`,this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`;else if(e!==null&&e.outputColorSpace===`srgb`)for(let e of t)e.texture.colorSpace=hi}}dispose(){super.dispose();for(let e of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))e.dispose()}},ph=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,mh=class extends Xm{constructor({blendFunction:e=qm.SCREEN,luminanceThreshold:t=1,luminanceSmoothing:n=.03,mipmapBlur:r=!0,intensity:i=1,radius:a=.85,levels:o=8,kernelSize:s=Zm.LARGE,resolutionScale:c=.5,width:l=Km.AUTO_SIZE,height:u=Km.AUTO_SIZE,resolutionX:d=l,resolutionY:f=u}={}){super(`BloomEffect`,ph,{blendFunction:e,uniforms:new Map([[`map`,new $u(null)],[`intensity`,new $u(i)]])}),this.renderTarget=new fa(1,1,{depthBuffer:!1}),this.renderTarget.texture.name=`Bloom.Target`,this.blurPass=new nh({kernelSize:s}),this.luminancePass=new ah({colorOutput:!0}),this.luminanceMaterial.threshold=t,this.luminanceMaterial.smoothing=n,this.mipmapBlurPass=new fh,this.mipmapBlurPass.enabled=r,this.mipmapBlurPass.radius=a,this.mipmapBlurPass.levels=o,this.uniforms.get(`map`).value=r?this.mipmapBlurPass.texture:this.renderTarget.texture;let p=this.resolution=new Km(this,d,f,c);p.addEventListener(`change`,e=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get dithering(){return this.blurPass.dithering}set dithering(e){this.blurPass.dithering=e}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(e){this.blurPass.kernelSize=e}get distinction(){return console.warn(this.name,`distinction was removed`),1}set distinction(e){console.warn(this.name,`distinction was removed`)}get intensity(){return this.uniforms.get(`intensity`).value}set intensity(e){this.uniforms.get(`intensity`).value=e}getIntensity(){return this.intensity}setIntensity(e){this.intensity=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}update(e,t,n){let r=this.renderTarget,i=this.luminancePass;i.enabled?(i.render(e,t),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(e,i.renderTarget):this.blurPass.render(e,i.renderTarget,r)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(e,t):this.blurPass.render(e,t,r)}setSize(e,t){let n=this.resolution;n.setBaseSize(e,t),this.renderTarget.setSize(n.width,n.height),this.blurPass.resolution.copy(n),this.luminancePass.setSize(e,t),this.mipmapBlurPass.setSize(e,t)}initialize(e,t,n){this.blurPass.initialize(e,t,n),this.luminancePass.initialize(e,t,n),this.mipmapBlurPass.initialize(e,t,n),n!==void 0&&(this.renderTarget.texture.type=n,e!==null&&e.outputColorSpace===`srgb`&&(this.renderTarget.texture.colorSpace=hi))}},hh=`#define QUALITY(q) ((q) < 5 ? 1.0 : ((q) > 5 ? ((q) < 10 ? 2.0 : ((q) < 11 ? 4.0 : 8.0)) : 1.5))
#define ONE_OVER_TWELVE 0.08333333333333333
varying vec2 vUvDown;varying vec2 vUvUp;varying vec2 vUvLeft;varying vec2 vUvRight;varying vec2 vUvDownLeft;varying vec2 vUvUpRight;varying vec2 vUvUpLeft;varying vec2 vUvDownRight;vec4 fxaa(const in vec4 inputColor,const in vec2 uv){float lumaCenter=luminance(inputColor.rgb);float lumaDown=luminance(texture2D(inputBuffer,vUvDown).rgb);float lumaUp=luminance(texture2D(inputBuffer,vUvUp).rgb);float lumaLeft=luminance(texture2D(inputBuffer,vUvLeft).rgb);float lumaRight=luminance(texture2D(inputBuffer,vUvRight).rgb);float lumaMin=min(lumaCenter,min(min(lumaDown,lumaUp),min(lumaLeft,lumaRight)));float lumaMax=max(lumaCenter,max(max(lumaDown,lumaUp),max(lumaLeft,lumaRight)));float lumaRange=lumaMax-lumaMin;if(lumaRange<max(EDGE_THRESHOLD_MIN,lumaMax*EDGE_THRESHOLD_MAX)){return inputColor;}float lumaDownLeft=luminance(texture2D(inputBuffer,vUvDownLeft).rgb);float lumaUpRight=luminance(texture2D(inputBuffer,vUvUpRight).rgb);float lumaUpLeft=luminance(texture2D(inputBuffer,vUvUpLeft).rgb);float lumaDownRight=luminance(texture2D(inputBuffer,vUvDownRight).rgb);float lumaDownUp=lumaDown+lumaUp;float lumaLeftRight=lumaLeft+lumaRight;float lumaLeftCorners=lumaDownLeft+lumaUpLeft;float lumaDownCorners=lumaDownLeft+lumaDownRight;float lumaRightCorners=lumaDownRight+lumaUpRight;float lumaUpCorners=lumaUpRight+lumaUpLeft;float edgeHorizontal=(abs(-2.0*lumaLeft+lumaLeftCorners)+abs(-2.0*lumaCenter+lumaDownUp)*2.0+abs(-2.0*lumaRight+lumaRightCorners));float edgeVertical=(abs(-2.0*lumaUp+lumaUpCorners)+abs(-2.0*lumaCenter+lumaLeftRight)*2.0+abs(-2.0*lumaDown+lumaDownCorners));bool isHorizontal=(edgeHorizontal>=edgeVertical);float stepLength=isHorizontal?texelSize.y:texelSize.x;float luma1=isHorizontal?lumaDown:lumaLeft;float luma2=isHorizontal?lumaUp:lumaRight;float gradient1=abs(luma1-lumaCenter);float gradient2=abs(luma2-lumaCenter);bool is1Steepest=gradient1>=gradient2;float gradientScaled=0.25*max(gradient1,gradient2);float lumaLocalAverage=0.0;if(is1Steepest){stepLength=-stepLength;lumaLocalAverage=0.5*(luma1+lumaCenter);}else{lumaLocalAverage=0.5*(luma2+lumaCenter);}vec2 currentUv=uv;if(isHorizontal){currentUv.y+=stepLength*0.5;}else{currentUv.x+=stepLength*0.5;}vec2 offset=isHorizontal?vec2(texelSize.x,0.0):vec2(0.0,texelSize.y);vec2 uv1=currentUv-offset*QUALITY(0);vec2 uv2=currentUv+offset*QUALITY(0);float lumaEnd1=luminance(texture2D(inputBuffer,uv1).rgb);float lumaEnd2=luminance(texture2D(inputBuffer,uv2).rgb);lumaEnd1-=lumaLocalAverage;lumaEnd2-=lumaLocalAverage;bool reached1=abs(lumaEnd1)>=gradientScaled;bool reached2=abs(lumaEnd2)>=gradientScaled;bool reachedBoth=reached1&&reached2;if(!reached1){uv1-=offset*QUALITY(1);}if(!reached2){uv2+=offset*QUALITY(1);}if(!reachedBoth){for(int i=2;i<SAMPLES;++i){if(!reached1){lumaEnd1=luminance(texture2D(inputBuffer,uv1).rgb);lumaEnd1=lumaEnd1-lumaLocalAverage;}if(!reached2){lumaEnd2=luminance(texture2D(inputBuffer,uv2).rgb);lumaEnd2=lumaEnd2-lumaLocalAverage;}reached1=abs(lumaEnd1)>=gradientScaled;reached2=abs(lumaEnd2)>=gradientScaled;reachedBoth=reached1&&reached2;if(!reached1){uv1-=offset*QUALITY(i);}if(!reached2){uv2+=offset*QUALITY(i);}if(reachedBoth){break;}}}float distance1=isHorizontal?(uv.x-uv1.x):(uv.y-uv1.y);float distance2=isHorizontal?(uv2.x-uv.x):(uv2.y-uv.y);bool isDirection1=distance1<distance2;float distanceFinal=min(distance1,distance2);float edgeThickness=(distance1+distance2);bool isLumaCenterSmaller=lumaCenter<lumaLocalAverage;bool correctVariation1=(lumaEnd1<0.0)!=isLumaCenterSmaller;bool correctVariation2=(lumaEnd2<0.0)!=isLumaCenterSmaller;bool correctVariation=isDirection1?correctVariation1:correctVariation2;float pixelOffset=-distanceFinal/edgeThickness+0.5;float finalOffset=correctVariation?pixelOffset:0.0;float lumaAverage=ONE_OVER_TWELVE*(2.0*(lumaDownUp+lumaLeftRight)+lumaLeftCorners+lumaRightCorners);float subPixelOffset1=clamp(abs(lumaAverage-lumaCenter)/lumaRange,0.0,1.0);float subPixelOffset2=(-2.0*subPixelOffset1+3.0)*subPixelOffset1*subPixelOffset1;float subPixelOffsetFinal=subPixelOffset2*subPixelOffset2*SUBPIXEL_QUALITY;finalOffset=max(finalOffset,subPixelOffsetFinal);vec2 finalUv=uv;if(isHorizontal){finalUv.y+=finalOffset*stepLength;}else{finalUv.x+=finalOffset*stepLength;}return texture2D(inputBuffer,finalUv);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=fxaa(inputColor,uv);}`,gh=`varying vec2 vUvDown;varying vec2 vUvUp;varying vec2 vUvLeft;varying vec2 vUvRight;varying vec2 vUvDownLeft;varying vec2 vUvUpRight;varying vec2 vUvUpLeft;varying vec2 vUvDownRight;void mainSupport(const in vec2 uv){vUvDown=uv+vec2(0.0,-1.0)*texelSize;vUvUp=uv+vec2(0.0,1.0)*texelSize;vUvRight=uv+vec2(1.0,0.0)*texelSize;vUvLeft=uv+vec2(-1.0,0.0)*texelSize;vUvDownLeft=uv+vec2(-1.0,-1.0)*texelSize;vUvUpRight=uv+vec2(1.0,1.0)*texelSize;vUvUpLeft=uv+vec2(-1.0,1.0)*texelSize;vUvDownRight=uv+vec2(1.0,-1.0)*texelSize;}`,_h=class extends Xm{constructor({blendFunction:e=qm.SRC}={}){super(`FXAAEffect`,hh,{vertexShader:gh,blendFunction:e,defines:new Map([[`EDGE_THRESHOLD_MIN`,`0.0312`],[`EDGE_THRESHOLD_MAX`,`0.125`],[`SUBPIXEL_QUALITY`,`0.75`],[`SAMPLES`,`12`]])})}get minEdgeThreshold(){return Number(this.defines.get(`EDGE_THRESHOLD_MIN`))}set minEdgeThreshold(e){this.defines.set(`EDGE_THRESHOLD_MIN`,e.toFixed(12)),this.setChanged()}get maxEdgeThreshold(){return Number(this.defines.get(`EDGE_THRESHOLD_MAX`))}set maxEdgeThreshold(e){this.defines.set(`EDGE_THRESHOLD_MAX`,e.toFixed(12)),this.setChanged()}get subpixelQuality(){return Number(this.defines.get(`SUBPIXEL_QUALITY`))}set subpixelQuality(e){this.defines.set(`SUBPIXEL_QUALITY`,e.toFixed(12)),this.setChanged()}get samples(){return Number(this.defines.get(`SAMPLES`))}set samples(e){this.defines.set(`SAMPLES`,e.toFixed(0)),this.setChanged()}},vh=class extends Em{constructor(e,t,n=null){super(`RenderPass`,e,t),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Nm,this.overrideMaterialManager=n===null?null:new Wm(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get renderToScreen(){return super.renderToScreen}set renderToScreen(e){super.renderToScreen=e,this.clearPass.renderToScreen=e}get overrideMaterial(){let e=this.overrideMaterialManager;return e===null?null:e.material}set overrideMaterial(e){let t=this.overrideMaterialManager;e===null?t!==null&&(t.dispose(),this.overrideMaterialManager=null):t===null?this.overrideMaterialManager=new Wm(e):t.setMaterial(e)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(e){this.overrideMaterial=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getSelection(){return this.selection}setSelection(e){this.selection=e}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(e){this.ignoreBackground=e}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(e){this.skipShadowMapUpdate=e}getClearPass(){return this.clearPass}render(e,t,n,r,i){let a=this.scene,o=this.camera,s=this.selection,c=o.layers.mask,l=a.background,u=e.shadowMap.autoUpdate,d=this.renderToScreen?null:t;s!==null&&o.layers.set(s.getLayer()),this.skipShadowMapUpdate&&(e.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(a.background=null),this.clearPass.enabled&&this.clearPass.render(e,t),e.setRenderTarget(d),this.overrideMaterialManager===null?e.render(a,o):this.overrideMaterialManager.render(e,a,o),o.layers.mask=c,a.background=l,e.shadowMap.autoUpdate=u}},yh={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,UNCHARTED2:4,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},bh={DEFAULT:0,ESKIL:1},xh=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,Sh=class extends Kl{constructor(){super({name:`AdaptiveLuminanceMaterial`,defines:{MIP_LEVEL_1X1:`0.0`},uniforms:{luminanceBuffer0:new $u(null),luminanceBuffer1:new $u(null),minLuminance:new $u(.01),deltaTime:new $u(0),tau:new $u(1)},extensions:{shaderTextureLOD:!0},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:xh,vertexShader:km})}set luminanceBuffer0(e){this.uniforms.luminanceBuffer0.value=e}setLuminanceBuffer0(e){this.uniforms.luminanceBuffer0.value=e}set luminanceBuffer1(e){this.uniforms.luminanceBuffer1.value=e}setLuminanceBuffer1(e){this.uniforms.luminanceBuffer1.value=e}set mipLevel1x1(e){this.defines.MIP_LEVEL_1X1=e.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(e){this.mipLevel1x1=e}set deltaTime(e){this.uniforms.deltaTime.value=e}setDeltaTime(e){this.uniforms.deltaTime.value=e}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(e){this.uniforms.minLuminance.value=e}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(e){this.uniforms.minLuminance.value=e}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(e){this.uniforms.tau.value=e}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(e){this.uniforms.tau.value=e}},Ch=class extends Em{constructor(e,{minLuminance:t=.01,adaptationRate:n=1}={}){super(`AdaptiveLuminancePass`),this.fullscreenMaterial=new Sh,this.needsSwap=!1,this.renderTargetPrevious=new fa(1,1,{minFilter:Xn,magFilter:Xn,depthBuffer:!1}),this.renderTargetPrevious.texture.name=`Luminance.Previous`;let r=this.fullscreenMaterial;r.luminanceBuffer0=this.renderTargetPrevious.texture,r.luminanceBuffer1=e,r.minLuminance=t,r.adaptationRate=n,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name=`Luminance.Adapted`,this.copyPass=new jm(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(e){this.fullscreenMaterial.mipLevel1x1=e}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(e){this.fullscreenMaterial.adaptationRate=e}render(e,t,n,r,i){this.fullscreenMaterial.deltaTime=r,e.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),e.render(this.scene,this.camera),this.copyPass.render(e,this.renderTargetAdapted)}},wh=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,Th=class extends Xm{constructor({blendFunction:e=qm.SRC,adaptive:t=!1,mode:n=t?yh.REINHARD2_ADAPTIVE:yh.AGX,resolution:r=256,maxLuminance:i=4,whitePoint:a=i,middleGrey:o=.6,minLuminance:s=.01,averageLuminance:c=1,adaptationRate:l=1}={}){super(`ToneMappingEffect`,wh,{blendFunction:e,uniforms:new Map([[`luminanceBuffer`,new $u(null)],[`maxLuminance`,new $u(i)],[`whitePoint`,new $u(a)],[`middleGrey`,new $u(o)],[`averageLuminance`,new $u(c)]])}),this.renderTargetLuminance=new fa(1,1,{minFilter:tr,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name=`Luminance`,this.luminancePass=new ah({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new Ch(this.luminancePass.texture,{minLuminance:s,adaptationRate:l}),this.uniforms.get(`luminanceBuffer`).value=this.adaptiveLuminancePass.texture,this.resolution=r,this.mode=n}get mode(){return Number(this.defines.get(`TONE_MAPPING_MODE`))}set mode(e){if(this.mode===e)return;let t=`186`.replace(/\D+/g,``)>=168?`CineonToneMapping(texel)`:`OptimizedCineonToneMapping(texel)`;switch(this.defines.clear(),this.defines.set(`TONE_MAPPING_MODE`,e.toFixed(0)),e){case yh.LINEAR:this.defines.set(`toneMapping(texel)`,`LinearToneMapping(texel)`);break;case yh.REINHARD:this.defines.set(`toneMapping(texel)`,`ReinhardToneMapping(texel)`);break;case yh.CINEON:case yh.OPTIMIZED_CINEON:this.defines.set(`toneMapping(texel)`,t);break;case yh.ACES_FILMIC:this.defines.set(`toneMapping(texel)`,`ACESFilmicToneMapping(texel)`);break;case yh.AGX:this.defines.set(`toneMapping(texel)`,`AgXToneMapping(texel)`);break;case yh.NEUTRAL:this.defines.set(`toneMapping(texel)`,`NeutralToneMapping(texel)`);break;default:this.defines.set(`toneMapping(texel)`,`texel`)}this.adaptiveLuminancePass.enabled=e===yh.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(e){this.mode=e}get whitePoint(){return this.uniforms.get(`whitePoint`).value}set whitePoint(e){this.uniforms.get(`whitePoint`).value=e}get middleGrey(){return this.uniforms.get(`middleGrey`).value}set middleGrey(e){this.uniforms.get(`middleGrey`).value=e}get averageLuminance(){return this.uniforms.get(`averageLuminance`).value}set averageLuminance(e){this.uniforms.get(`averageLuminance`).value=e}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(e){let t=Math.max(0,Math.ceil(Math.log2(e))),n=2**t;this.luminancePass.resolution.setPreferredSize(n,n),this.adaptiveLuminanceMaterial.mipLevel1x1=t}getResolution(){return this.resolution}setResolution(e){this.resolution=e}get adaptive(){return this.mode===yh.REINHARD2_ADAPTIVE}set adaptive(e){this.mode=e?yh.REINHARD2_ADAPTIVE:yh.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(e){this.adaptiveLuminanceMaterial.adaptationRate=e}get distinction(){return console.warn(this.name,`distinction was removed.`),1}set distinction(e){console.warn(this.name,`distinction was removed.`)}update(e,t,n){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(e,t),this.adaptiveLuminancePass.render(e,null,null,n))}initialize(e,t,n){this.adaptiveLuminancePass.initialize(e,t,n)}},Eh=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,Dh=class extends Xm{constructor({blendFunction:e,eskil:t=!1,technique:n=t?bh.ESKIL:bh.DEFAULT,offset:r=.5,darkness:i=.5}={}){super(`VignetteEffect`,Eh,{blendFunction:e,defines:new Map([[`VIGNETTE_TECHNIQUE`,n.toFixed(0)]]),uniforms:new Map([[`offset`,new $u(r)],[`darkness`,new $u(i)]])})}get technique(){return Number(this.defines.get(`VIGNETTE_TECHNIQUE`))}set technique(e){this.technique!==e&&(this.defines.set(`VIGNETTE_TECHNIQUE`,e.toFixed(0)),this.setChanged())}get eskil(){return this.technique===bh.ESKIL}set eskil(e){this.technique=e?bh.ESKIL:bh.DEFAULT}getTechnique(){return this.technique}setTechnique(e){this.technique=e}get offset(){return this.uniforms.get(`offset`).value}set offset(e){this.uniforms.get(`offset`).value=e}getOffset(){return this.offset}setOffset(e){this.offset=e}get darkness(){return this.uniforms.get(`darkness`).value}set darkness(e){this.uniforms.get(`darkness`).value=e}getDarkness(){return this.darkness}setDarkness(e){this.darkness=e}},Oh=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,kh=`uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}`,Ah=class extends Kl{constructor(e,t,n,r,i=!1){super({name:`EffectMaterial`,defines:{THREE_REVISION:`186`.replace(/\D+/g,``),DEPTH_PACKING:`0`,ENCODE_OUTPUT:`1`},uniforms:{inputBuffer:new $u(null),depthBuffer:new $u(null),resolution:new $u(new X),texelSize:new $u(new X),cameraNear:new $u(.3),cameraFar:new $u(1e3),aspect:new $u(1),time:new $u(0)},blending:0,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:i}),e&&this.setShaderParts(e),t&&this.setDefines(t),n&&this.setUniforms(n),this.copyCameraSettings(r)}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer(e,t=mi){this.depthBuffer=e,this.depthPacking=t}setShaderData(e){this.setShaderParts(e.shaderParts),this.setDefines(e.defines),this.setUniforms(e.uniforms),this.setExtensions(e.extensions)}setShaderParts(e){return this.fragmentShader=Oh.replace(Vm.FRAGMENT_HEAD,e.get(Vm.FRAGMENT_HEAD)||``).replace(Vm.FRAGMENT_MAIN_UV,e.get(Vm.FRAGMENT_MAIN_UV)||``).replace(Vm.FRAGMENT_MAIN_IMAGE,e.get(Vm.FRAGMENT_MAIN_IMAGE)||``),this.vertexShader=kh.replace(Vm.VERTEX_HEAD,e.get(Vm.VERTEX_HEAD)||``).replace(Vm.VERTEX_MAIN_SUPPORT,e.get(Vm.VERTEX_MAIN_SUPPORT)||``),this.needsUpdate=!0,this}setDefines(e){for(let t of e.entries())this.defines[t[0]]=t[1];return this.needsUpdate=!0,this}setUniforms(e){for(let t of e.entries())this.uniforms[t[0]]=t[1];return this}setExtensions(e){this.extensions={};for(let t of e)this.extensions[t]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(e){this.encodeOutput!==e&&(e?this.defines.ENCODE_OUTPUT=`1`:delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(e){return this.encodeOutput}setOutputEncodingEnabled(e){this.encodeOutput=e}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}setDeltaTime(e){this.uniforms.time.value+=e}adoptCameraSettings(e){this.copyCameraSettings(e)}copyCameraSettings(e){e&&(this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,e instanceof ju?this.defines.PERSPECTIVE_CAMERA=`1`:delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(e,t){let n=this.uniforms;n.resolution.value.set(e,t),n.texelSize.value.set(1/e,1/t),n.aspect.value=e/t}static get Section(){return Vm}};Number(`186`.replace(/\D+/g,``));var jh=255/256;new Float32Array([jh/256**3,jh/256**2,jh/256,jh]),new Float32Array([jh,jh/256,jh/256**2,1/256**3]);function Mh(e,t,n){for(let r of t){let t=`$1`+e+r.charAt(0).toUpperCase()+r.slice(1),i=RegExp(`([^\\.])(\\b`+r+`\\b)`,`g`);for(let e of n.entries())e[1]!==null&&n.set(e[0],e[1].replace(i,t))}}function Nh(e,t,n){let r=t.getFragmentShader(),i=t.getVertexShader(),a=r!==void 0&&/mainImage/.test(r),o=r!==void 0&&/mainUv/.test(r);if(n.attributes|=t.getAttributes(),r===void 0)throw Error(`Missing fragment shader (${t.name})`);if(o&&(n.attributes&Bm.CONVOLUTION)!==0)throw Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);if(!a&&!o)throw Error(`Could not find mainImage or mainUv function (${t.name})`);{let s=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,c=n.shaderParts,l=c.get(Vm.FRAGMENT_HEAD)||``,u=c.get(Vm.FRAGMENT_MAIN_UV)||``,d=c.get(Vm.FRAGMENT_MAIN_IMAGE)||``,f=c.get(Vm.VERTEX_HEAD)||``,p=c.get(Vm.VERTEX_MAIN_SUPPORT)||``,m=new Set,h=new Set;if(o&&(u+=`	${e}MainUv(UV);
`,n.uvTransformation=!0),i!==null&&/mainSupport/.test(i)){let t=/mainSupport *\([\w\s]*?uv\s*?\)/.test(i);p+=`	${e}MainSupport(`,p+=t?`vUv);
`:`);
`;for(let e of i.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let t of e[1].split(/\s*,\s*/))n.varyings.add(t),m.add(t),h.add(t);for(let e of i.matchAll(s))h.add(e[1])}for(let e of r.matchAll(s))h.add(e[1]);for(let e of t.defines.keys())h.add(e.replace(/\([\w\s,]*\)/g,``));for(let e of t.uniforms.keys())h.add(e);h.delete(`while`),h.delete(`for`),h.delete(`if`),t.uniforms.forEach((t,r)=>n.uniforms.set(e+r.charAt(0).toUpperCase()+r.slice(1),t)),t.defines.forEach((t,r)=>n.defines.set(e+r.charAt(0).toUpperCase()+r.slice(1),t));let g=new Map([[`fragment`,r],[`vertex`,i]]);Mh(e,h,n.defines),Mh(e,h,g),r=g.get(`fragment`),i=g.get(`vertex`);let _=t.blendMode;if(n.blendModes.set(_.blendFunction,_),a){t.inputColorSpace!==null&&t.inputColorSpace!==n.colorSpace&&(d+=t.inputColorSpace===`srgb`?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),t.outputColorSpace===``?t.inputColorSpace!==null&&(n.colorSpace=t.inputColorSpace):n.colorSpace=t.outputColorSpace,d+=`${e}MainImage(color0, UV, `,(n.attributes&Bm.DEPTH)!==0&&/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/.test(r)&&(d+=`depth, `,n.readDepth=!0),d+=`color1);
	`;let i=e+`BlendOpacity`;n.uniforms.set(i,_.opacity),d+=`color0 = blend${_.blendFunction}(color0, color1, ${i});

	`,l+=`uniform float ${i};

`}if(l+=r+`
`,i!==null&&(f+=i+`
`),c.set(Vm.FRAGMENT_HEAD,l),c.set(Vm.FRAGMENT_MAIN_UV,u),c.set(Vm.FRAGMENT_MAIN_IMAGE,d),c.set(Vm.VERTEX_HEAD,f),c.set(Vm.VERTEX_MAIN_SUPPORT,p),t.extensions!==null)for(let e of t.extensions)n.extensions.add(e)}}var Ph=class extends Em{constructor(e,...t){super(`EffectPass`),this.fullscreenMaterial=new Ah(null,null,null,e),this.listener=e=>this.handleEvent(e),this.effects=[],this.setEffects(t),this.skipRendering=!1,this.minTime=1,this.maxTime=1/0,this.timeScale=1}set mainScene(e){for(let t of this.effects)t.mainScene=e}set mainCamera(e){this.fullscreenMaterial.copyCameraSettings(e);for(let t of this.effects)t.mainCamera=e}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(e){this.fullscreenMaterial.encodeOutput=e}get dithering(){return this.fullscreenMaterial.dithering}set dithering(e){let t=this.fullscreenMaterial;t.dithering=e,t.needsUpdate=!0}setEffects(e){for(let e of this.effects)e.removeEventListener(`change`,this.listener);this.effects=e.sort((e,t)=>t.attributes-e.attributes);for(let e of this.effects)e.addEventListener(`change`,this.listener)}updateMaterial(){let e=new Hm,t=0;for(let n of this.effects)if(n.blendMode.blendFunction===qm.DST)e.attributes|=n.getAttributes()&Bm.DEPTH;else if((e.attributes&n.getAttributes()&Bm.CONVOLUTION)!==0)throw Error(`Convolution effects cannot be merged (${n.name})`);else Nh(`e`+t++,n,e);let n=e.shaderParts.get(Vm.FRAGMENT_HEAD),r=e.shaderParts.get(Vm.FRAGMENT_MAIN_IMAGE),i=e.shaderParts.get(Vm.FRAGMENT_MAIN_UV),a=/\bblend\b/g;for(let t of e.blendModes.values())n+=t.getShaderCode().replace(a,`blend${t.blendFunction}`)+`
`;(e.attributes&Bm.DEPTH)===0?this.needsDepthTexture=!1:(e.readDepth&&(r=`float depth = readDepth(UV);

	`+r),this.needsDepthTexture=this.getDepthTexture()===null),e.colorSpace===`srgb`&&(r+=`color0 = sRGBToLinear(color0);
	`),e.uvTransformation?(i=`vec2 transformedUv = vUv;
`+i,e.defines.set(`UV`,`transformedUv`)):e.defines.set(`UV`,`vUv`),e.shaderParts.set(Vm.FRAGMENT_HEAD,n),e.shaderParts.set(Vm.FRAGMENT_MAIN_IMAGE,r),e.shaderParts.set(Vm.FRAGMENT_MAIN_UV,i);for(let[t,n]of e.shaderParts)n!==null&&e.shaderParts.set(t,n.trim().replace(/^#/,`
#`));this.skipRendering=t===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(e)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(e,t=mi){this.fullscreenMaterial.depthBuffer=e,this.fullscreenMaterial.depthPacking=t;for(let n of this.effects)n.setDepthTexture(e,t)}render(e,t,n,r,i){for(let n of this.effects)n.update(e,t,r);if(!this.skipRendering||this.renderToScreen){let i=this.fullscreenMaterial;i.inputBuffer=t.texture,i.time+=r*this.timeScale,e.setRenderTarget(this.renderToScreen?null:n),e.render(this.scene,this.camera)}}setSize(e,t){this.fullscreenMaterial.setSize(e,t);for(let n of this.effects)n.setSize(e,t)}initialize(e,t,n){this.renderer=e;for(let r of this.effects)r.initialize(e,t,n);this.updateMaterial(),n!==void 0&&n!==1009&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH=`1`)}dispose(){super.dispose();for(let e of this.effects)e.removeEventListener(`change`,this.listener),e.dispose()}handleEvent(e){e.type===`change`&&this.recompile()}};new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1]),new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125]),new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4]),new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3]),Ih(0,0,0,0),new Float32Array([0,0,0,0]),Ih(0,0,0,1),new Float32Array([0,0,0,1]),Ih(0,0,1,0),new Float32Array([0,0,1,0]),Ih(0,0,1,1),new Float32Array([0,0,1,1]),Ih(0,1,0,0),new Float32Array([0,1,0,0]),Ih(0,1,0,1),new Float32Array([0,1,0,1]),Ih(0,1,1,0),new Float32Array([0,1,1,0]),Ih(0,1,1,1),new Float32Array([0,1,1,1]),Ih(1,0,0,0),new Float32Array([1,0,0,0]),Ih(1,0,0,1),new Float32Array([1,0,0,1]),Ih(1,0,1,0),new Float32Array([1,0,1,0]),Ih(1,0,1,1),new Float32Array([1,0,1,1]),Ih(1,1,0,0),new Float32Array([1,1,0,0]),Ih(1,1,0,1),new Float32Array([1,1,0,1]),Ih(1,1,1,0),new Float32Array([1,1,1,0]),Ih(1,1,1,1),new Float32Array([1,1,1,1]);function Fh(e,t,n){return e+(t-e)*n}function Ih(e,t,n,r){return Fh(Fh(e,t,.75),Fh(n,r,.75),.875)}var Lh={high:{ratio:2,msaa:4,shadow:2048,bloom:!0,ambientFps:60,rank:2},balanced:{ratio:1.5,msaa:2,shadow:1024,bloom:!0,ambientFps:30,rank:1},eco:{ratio:1,msaa:0,shadow:0,bloom:!1,ambientFps:0,rank:0}},Rh=class extends _h{constructor(){super();let e=this.getFragmentShader().replace(/luminance\(/g,`perceivedLuma(`);this.setFragmentShader(`float perceivedLuma(const in vec3 c) { return sqrt(max(luminance(c), 0.0)); }\n${e}`),this.subpixelQuality=.55}},zh=class{container;renderer;scene=new Qa;camera;reducedMotion=matchMedia(`(prefers-reduced-motion: reduce)`).matches;clocks=new Set;onQuality;onFps;onResize;afterRender;composer;passes=[];systems=new Set;choice=`auto`;current=`balanced`;upgraded=!1;look={};time=0;dirty=2;lastFrame=0;lastRender=0;samples=[];raf=0;observer;ambient=!0;paused=!1;lost=!1;constructor(e,t={}){this.container=e,this.renderer=new wm({antialias:!1,stencil:!1,depth:!1,powerPreference:`high-performance`}),this.renderer.outputColorSpace=hi,this.renderer.toneMapping=0,this.renderer.shadowMap.type=1,this.renderer.shadowMap.autoUpdate=!1,this.renderer.domElement.style.cssText=`display:block;width:100%;height:100%;touch-action:none`,e.appendChild(this.renderer.domElement),this.camera=new ju(t.fov??40,1,.1,400),this.composer=new zm(this.renderer,{frameBufferType:lr,multisampling:0}),this.look=t.look??{},this.choice=t.quality??`auto`,this.apply(this.choice===`auto`?`balanced`:this.choice),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.resize(),document.addEventListener(`visibilitychange`,this.wake),this.renderer.domElement.addEventListener(`webglcontextlost`,this.onLost),this.renderer.domElement.addEventListener(`webglcontextrestored`,this.onRestored),this.raf=requestAnimationFrame(this.loop)}get level(){return this.current}get quality(){return this.choice}setQuality(e){this.choice=e,this.upgraded=!1,this.apply(e===`auto`?`balanced`:e)}setLook(e){this.look=e,this.apply(this.current)}setAmbient(e){this.ambient=e,e&&this.invalidate()}setPaused(e){this.paused=e,e||(this.lastFrame=performance.now(),this.invalidate())}invalidate(e=2){this.dirty=Math.max(this.dirty,e)}refreshShadows(){this.renderer.shadowMap.needsUpdate=!0}add(e){return this.systems.add(e),this.invalidate(),()=>{this.systems.delete(e)}}tween(e,t,n=e=>1-(1-e)**3){return new Promise(r=>{let i=0,a=o=>{i+=o;let s=Math.min(i/Math.max(e,.001),1);return t(n(s)),s>=1&&(this.systems.delete(a),r()),s<1};this.add(a)})}async warmUp(){let e=this.renderer.getRenderTarget(),t=null;this.renderer.setRenderTarget(this.composer.inputBuffer);try{t=this.renderer.compileAsync(this.scene,this.camera)}catch{}finally{this.renderer.setRenderTarget(e)}try{await t}catch{}this.invalidate()}dispose(){cancelAnimationFrame(this.raf),this.observer.disconnect(),document.removeEventListener(`visibilitychange`,this.wake),this.renderer.domElement.removeEventListener(`webglcontextlost`,this.onLost),this.renderer.domElement.removeEventListener(`webglcontextrestored`,this.onRestored);for(let e of this.passes)e.dispose();this.composer.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}wake=()=>{this.lastFrame=performance.now(),this.invalidate()};onLost=e=>{e.preventDefault(),this.lost=!0};onRestored=()=>{this.lost=!1,this.apply(this.current)};apply(e){this.current=e;let t=Lh[e];this.renderer.setPixelRatio(Math.min(devicePixelRatio,t.ratio));let n=t.shadow>0,r=this.renderer.shadowMap.enabled!==n;this.renderer.shadowMap.enabled=n,this.scene.traverse(e=>{let n=e;n.isLight&&n.castShadow&&n.shadow&&(n.shadow.mapSize.set(t.shadow||512,t.shadow||512),n.shadow.map?.dispose(),n.shadow.map=null);let i=e.userData.minQuality;i!==void 0&&(e.visible=t.rank>=i);let a=e.material;if(a)for(let e of Array.isArray(a)?a:[a]){let n=e.uniforms?.uQuality??e.userData.uQuality;n&&(n.value=t.rank),r&&(e.needsUpdate=!0)}});for(let e of this.passes)e.dispose();this.composer.removeAllPasses(),this.composer.multisampling=t.msaa;let i=this.look.bloom??{threshold:.62,intensity:1.15,radius:.72},a=this.look.vignette??{offset:.32,darkness:.62},o=[new Rh];t.bloom&&o.push(new mh({mipmapBlur:!0,luminanceThreshold:i.threshold,luminanceSmoothing:.3,intensity:i.intensity,radius:i.radius})),o.push(new Dh(a)),o.push(new Th({mode:yh.ACES_FILMIC})),this.passes=[new vh(this.scene,this.camera),new Ph(this.camera,...o)];for(let e of this.passes)this.composer.addPass(e);this.renderer.toneMappingExposure=this.look.exposure??1,this.resize(),this.refreshShadows(),this.onQuality?.(e),this.invalidate()}resize(){let e=this.container.clientWidth,t=this.container.clientHeight;e&&t&&(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.onResize?.(e,t),this.invalidate())}loop=e=>{if(this.raf=requestAnimationFrame(this.loop),document.hidden||this.paused||this.lost)return;let t=Math.min((e-(this.lastFrame||e))/1e3,1/20);this.lastFrame=e,this.time+=t;let n=!1;for(let e of[...this.systems])n=e(t,this.time)||n;let r=this.reducedMotion||!this.ambient?0:Lh[this.current].ambientFps,i=r>0&&e-this.lastRender>=1e3/r-2;if(!(!n&&this.dirty<=0&&!i)){for(let e of this.clocks)e.value=this.time;this.composer.render(t),this.afterRender?.(),n&&this.measure(e-this.lastRender),this.lastRender=e,this.dirty--}};measure(e){if(e>250||(this.samples.push(e),this.samples.length<60))return;let t=this.samples.reduce((e,t)=>e+t,0)/this.samples.length;this.samples=[],this.onFps?.(Math.round(1e3/t)),this.choice===`auto`&&(t>25&&this.current!==`eco`?this.apply(this.current===`high`?`balanced`:`eco`):t<9&&this.current===`balanced`&&!this.upgraded&&(this.upgraded=!0,this.apply(`high`)))}},Bh=.6,Vh=.15,Hh=.016;function Uh(e,t){let n=Bh,r=Vh/2,i=Hh,a=[],o=[],s=[],c=[],l=(e,t)=>[.25+e/n*.245,.5+t/n*.49],u=n=>{let u=n?1:-1,d=a.length/3,f=[{r:0,y:r*u,nr:0,ny:u},{r:.584,y:r*u,nr:0,ny:u}];for(let e=1;e<=t;e++){let n=e/t*(Math.PI/2);f.push({r:.584+Math.sin(n)*i,y:(.059+Math.cos(n)*i)*u,nr:Math.sin(n),ny:Math.cos(n)*u})}for(let t of f)for(let n=0;n<=e;n++){let r=n/e*Math.PI*2,i=Math.cos(r),c=Math.sin(r);a.push(t.r*i,t.y,t.r*c),o.push(t.nr*i,t.ny,t.nr*c),s.push(...l(t.r*i,t.r*c*u))}let p=e+1;for(let t=0;t<f.length-1;t++)for(let r=0;r<e;r++){let e=d+t*p+r,i=e+p;n?c.push(e,i,e+1,e+1,i,i+1):c.push(e,e+1,i,e+1,i+1,i)}};u(!0),u(!1),(()=>{let t=a.length/3,i=e+1;for(let t of[-.059,.059])for(let i=0;i<=e;i++){let c=i/e*Math.PI*2,l=Math.cos(c),u=Math.sin(c);a.push(n*l,t,n*u),o.push(l,0,u),s.push(.5+i/e*.5,(t+r)/(2*r))}for(let n=0;n<e;n++){let e=t+n,r=e+i;c.push(e,r,e+1,e+1,r,r+1)}})();let d=new qo;return d.setAttribute(`position`,new Fo(a,3)),d.setAttribute(`normal`,new Fo(o,3)),d.setAttribute(`uv`,new Fo(s,2)),d.setIndex(c),d.computeBoundingSphere(),d}var Wh=1024,Gh=512,Kh={cx:256,cy:256,r:251};function qh(e){let t=document.createElement(`canvas`);t.width=Wh,t.height=Gh;let n=t.getContext(`2d`,{willReadFrequently:!0});return n.fillStyle=e,n.fillRect(0,0,Wh,Gh),n}function Jh(e){let t=e>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function Yh(e,t,n,r,i=[]){e.save(),e.strokeStyle=r,e.lineWidth=n,e.setLineDash(i),e.beginPath(),e.arc(Kh.cx,Kh.cy,t*Kh.r,0,Math.PI*2),e.stroke(),e.restore()}function Xh(e,t,n){e.fillStyle=n,e.beginPath(),e.arc(Kh.cx,Kh.cy,t*Kh.r,0,Math.PI*2),e.fill()}function Zh(e,t,n){e.save(),e.translate(Kh.cx,Kh.cy),e.fillStyle=n;for(let[n,r]of[[-.42,.62],[0,.8],[.42,1]])e.beginPath(),e.moveTo(0,(n-.17)*t),e.lineTo(r/2*t,n*t),e.lineTo(0,(n+.17)*t),e.lineTo(-(r/2)*t,n*t),e.closePath(),e.fill();e.restore()}function Qh(e,t,n,r,i,a,o=0){e.fillStyle=a;for(let a=0;a<t;a++){let s=o+a/t*Math.PI*2-i/2,c=s+i;e.beginPath(),e.arc(Kh.cx,Kh.cy,r*Kh.r,s,c),e.arc(Kh.cx,Kh.cy,n*Kh.r,c,s,!0),e.closePath(),e.fill()}}function $h(e,t,n,r){e.fillStyle=r,e.fillRect(512,Gh*(1-n),512,Gh*(n-t))}function eg(e,t,n,r,i=0,a=1){e.fillStyle=r;for(let r=0;r<t;r++){let o=512+(r+.5)/t*512-n*512/2;e.fillRect(o,Gh*(1-a),n*512,Gh*(a-i))}}function tg(e,t){let n=Jh(e.length*7919),{shade:r,inlay:i,glow:a,height:o}=t;if(e===`metal`){for(let e=4;e<Kh.r;e+=1.5)r.strokeStyle=`rgba(0,0,0,${.03+n()*.07})`,r.lineWidth=1,r.beginPath(),r.arc(Kh.cx,Kh.cy,e,0,Math.PI*2),r.stroke();let e=r.createRadialGradient(Kh.cx*.85,Kh.cy*.8,10,Kh.cx,Kh.cy,Kh.r);e.addColorStop(0,`rgba(255,255,255,0.12)`),e.addColorStop(1,`rgba(0,0,0,0.12)`),r.fillStyle=e,r.fillRect(0,0,512,512);for(let[e,t]of[[.84,7],[.7,5],[.56,5],[.29,4]])Yh(o,e,t,`#404040`),Yh(r,e,t,`rgba(0,0,0,0.45)`),Yh(a,e,t*.4,e>.8?`#c4c4c4`:`#8a8a8a`);Qh(o,12,.73,.81,.05,`#555555`),Qh(a,12,.745,.795,.018,`#a0a0a0`),Zh(o,120,`#d0d0d0`),Zh(a,120,`#3a3a3a`);for(let e=512;e<1024;e+=8)o.fillStyle=`#707070`,o.fillRect(e,90,4,332),r.fillStyle=`rgba(0,0,0,0.08)`,r.fillRect(e,90,4,332);$h(o,.47,.53,`#4a4a4a`),$h(r,.47,.53,`rgba(0,0,0,0.35)`),$h(a,.485,.515,`#b0b0b0`)}else if(e===`clay`)Qh(i,8,.8,1.01,.26,`#ffffff`,-Math.PI/2),Qh(o,8,.8,1.01,.26,`#8a8a8a`,-Math.PI/2),Yh(i,.71,6,`#ffffff`,[16,11]),Xh(o,.6,`#909090`),Yh(o,.6,6,`#5a5a5a`),Xh(i,.57,`#ffffff`),Zh(i,110,`#000000`),Zh(o,110,`#9a9a9a`),eg(i,8,.07,`#ffffff`,.08,.92),eg(o,8,.07,`#8a8a8a`,.08,.92),$h(r,0,.07,`rgba(0,0,0,0.25)`),$h(r,.93,1,`rgba(0,0,0,0.25)`);else if(e===`porcelain`){Yh(i,.94,7,`#ffffff`),Yh(i,.86,3,`#ffffff`),Yh(i,.38,3,`#ffffff`),i.save(),i.translate(Kh.cx,Kh.cy),i.fillStyle=`#ffffff`;for(let e=0;e<10;e++)i.rotate(Math.PI*2/10),i.beginPath(),i.ellipse(0,-.62*Kh.r,13,34,0,0,Math.PI*2),i.fill();i.restore(),Zh(i,64,`#ffffff`),Yh(o,.97,10,`#bdbdbd`),$h(i,.08,.16,`#ffffff`),$h(i,.84,.92,`#ffffff`)}else{for(let e=0;e<26;e++){r.strokeStyle=`rgba(${n()<.5?`0,0,0`:`255,255,255`},${.06+n()*.1})`,r.lineWidth=1+n()*3,r.beginPath();let e=n()*1024,t=n()*512;r.moveTo(e,t);for(let i=0;i<6;i++)e+=(n()-.5)*180,t+=(n()-.5)*120,r.lineTo(e,t);r.stroke()}Yh(i,.9,10,`#ffffff`),Yh(o,.9,10,`#a0a0a0`),Yh(o,.5,5,`#5a5a5a`),Zh(o,100,`#5c5c5c`),Zh(i,100,`#ffffff`),$h(i,.44,.56,`#ffffff`)}}function ng(e,t){let n={shade:qh(`#e0e0e0`),inlay:qh(`#000000`),glow:qh(`#000000`),height:qh(`#808080`)};tg(e,n);let r=Jh(31337),i=e=>e.getImageData(0,0,Wh,Gh).data,[a,o,s,c]=[i(n.shade),i(n.inlay),i(n.glow),i(n.height)],l=new Uint8Array(Wh*Gh*4),u=e===`clay`?18:e===`stone`?12:6;for(let e=0,t=0;e<l.length;e+=4,t++)l[e]=Math.max(0,Math.min(255,a[e]+(r()-.5)*u)),l[e+1]=o[e],l[e+2]=s[e],l[e+3]=255;let d=new Uint8Array(Wh*Gh*4),f=(e,t)=>c[(Math.min(511,Math.max(0,t))*Wh+Math.min(1023,Math.max(0,e)))*4]/255,p=1.6;for(let e=0;e<Gh;e++)for(let t=0;t<Wh;t++){let n=f(t+1,e-1)+2*f(t+1,e)+f(t+1,e+1)-(f(t-1,e-1)+2*f(t-1,e)+f(t-1,e+1)),r=f(t-1,e+1)+2*f(t,e+1)+f(t+1,e+1)-(f(t-1,e-1)+2*f(t,e-1)+f(t+1,e-1)),i=-n*p,a=r*p,o=1,s=Math.hypot(i,a,o);i/=s,a/=s,o/=s;let c=(e*Wh+t)*4;d[c]=(i*.5+.5)*255,d[c+1]=(a*.5+.5)*255,d[c+2]=(o*.5+.5)*255,d[c+3]=255}let m=e=>{let n=new Uint8Array(e.length),r=Wh*4;for(let t=0;t<Gh;t++)n.set(e.subarray(t*r,(t+1)*r),(511-t)*r);let i=new bs(n,Wh,Gh,_r);return i.generateMipmaps=!0,i.minFilter=tr,i.magFilter=$n,i.anisotropy=t,i.needsUpdate=!0,i};return{detail:m(l),normal:m(d)}}var rg={metal:{rough:.3,metal:.86,inlayRough:.22,inlayMetal:1,lineGlow:1.1,inner:.04,clearcoat:0,rim:.22},clay:{rough:.62,metal:0,inlayRough:.48,inlayMetal:0,lineGlow:0,inner:0,clearcoat:.25,rim:.18},porcelain:{rough:.2,metal:0,inlayRough:.2,inlayMetal:1,lineGlow:0,inner:.03,clearcoat:.45,rim:.2},stone:{rough:.3,metal:0,inlayRough:.3,inlayMetal:1,lineGlow:0,inner:.08,clearcoat:.3,rim:.22}},ig=new Map;function ag(e,t){let n=ig.get(e);n||ig.set(e,n=ng(e,t));let r=rg[e],i=new Q(`#ffffff`),a=new Yl({map:n.detail,normalMap:n.normal,normalScale:new X(.9,.9),roughness:r.rough,metalness:r.metal,clearcoat:r.clearcoat,clearcoatRoughness:.12,envMapIntensity:e===`metal`?1.15:1});return a.onBeforeCompile=e=>{e.uniforms.uHighlight={value:i},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec3 aInlay;
attribute vec2 aGlow;
varying vec3 vInlay;
varying vec2 vGlow;`).replace(`#include <color_vertex>`,`#include <color_vertex>
vInlay = aInlay;
vGlow = aGlow;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 uHighlight;
varying vec3 vInlay;
varying vec2 vGlow;`).replace(`#include <map_fragment>`,`
        vec4 chipDetail = texture2D( map, vMapUv );
        vec3 chipTint = vColor.rgb;
        diffuseColor.rgb = mix( chipTint, vInlay, chipDetail.g ) * ( chipDetail.r * 1.06 );`).replace(`#include <color_fragment>`,``).replace(`#include <roughnessmap_fragment>`,`float roughnessFactor = mix( ${r.rough.toFixed(3)}, ${r.inlayRough.toFixed(3)}, chipDetail.g );`).replace(`#include <metalnessmap_fragment>`,`float metalnessFactor = mix( ${r.metal.toFixed(3)}, ${r.inlayMetal.toFixed(3)}, chipDetail.g );`).replace(`#include <emissivemap_fragment>`,`
        vec3 glowColor = mix( chipTint, uHighlight, vGlow.y );
        totalEmissiveRadiance = chipTint * ( chipDetail.b * ${r.lineGlow.toFixed(3)} + ${r.inner.toFixed(3)} )
          + glowColor * vGlow.x * ( 0.35 + chipDetail.b * 1.6 + chipDetail.g * 0.4 );
        // Liseré de contre-jour à la teinte de la pile : la silhouette de chaque
        // jeton se détache du décor sombre, même loin de la lumière principale.
        float chipRim = 1.0 - abs( dot( normal, normalize( vViewPosition ) ) );
        totalEmissiveRadiance += chipTint * pow( chipRim, 3.0 ) * ${r.rim.toFixed(3)};`)},a.customProgramCacheKey=()=>`chip-${e}`,{material:a,highlight:i,dispose:()=>a.dispose()}}function og(){for(let e of ig.values())e.detail.dispose(),e.normal.dispose();ig.clear()}var sg=(e=2)=>({positions:[],normals:[],colors:[],extra:[],index:[],size:e}),cg=()=>({solid:sg(3),glow:sg(),beam:sg(3)}),lg=-2,ug=`
  float dHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float dNoise(vec3 x) {
    vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(dHash(i), dHash(i + vec3(1,0,0)), f.x), mix(dHash(i + vec3(0,1,0)), dHash(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(dHash(i + vec3(0,0,1)), dHash(i + vec3(1,0,1)), f.x), mix(dHash(i + vec3(0,1,1)), dHash(i + vec3(1,1,1)), f.x), f.y), f.z);
  }`,dg=`
  float seeThrough(vec3 p) {
    vec3 c = cameraPosition, f = vec3(0.0, 0.9, 0.0), cf = f - c;
    float t = dot(p - c, cf) / dot(cf, cf);
    float near = smoothstep(2.5, 5.0, distance(p, c));
    if (t <= 0.0 || t >= 0.94) return near;
    float d = distance(p, c + cf * t), radius = mix(1.2, 7.5, t);
    return min(near, smoothstep(radius * 0.75, radius * 1.15, d));
  }
  // Trame ordonnée 4 × 4 (Bayer) : un effacement progressif sans transparence.
  float bayer2(vec2 a) { a = floor(a); return fract(a.x / 2.0 + a.y * a.y * 0.75); }
  float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a) + 0.03; }`,fg=e=>Math.atan2(-Math.cos(e),-Math.sin(e)),pg=new Z(0,1,0),mg=class e{base=cg();extra=cg();target=this.base;children=[];cache=new Map;m=new ha;n=new Ji;q=new Gi;e=new Ta;v=new Z;c=new Q;s=new Z;triangles=0;fine(e){let t=this.target;this.target=this.extra;try{e()}finally{this.target=t}}box(e,t,n,r,i={},a={}){return this.solidPart(this.geo(`box`,()=>new ac(1,1,1)),r,{...i,sx:e*(i.sx??1),sy:t*(i.sy??1),sz:n*(i.sz??1)},a)}cyl(e,t,n,r,i,a={},o={}){let s=`cyl:${e}:${t}:${r}:${+!!o.open}`;return this.solidPart(this.geo(s,()=>new sc(e,t,1,r,1,o.open)),i,{...a,sy:n*(a.sy??1)},o)}torus(e,t,n,r,i,a,o={},s={}){return this.solidPart(this.geo(`torus:${e}:${t}:${n}:${r}:${i}`,()=>new Fl(e,t,n,r,i)),a,o,s)}sphere(e,t,n,r,i={},a={}){return this.solidPart(this.geo(`sphere:${e}:${t}:${n}:${+!!a.dome}`,()=>new Pl(e,t,n,0,Math.PI*2,0,a.dome?Math.PI/2:Math.PI)),r,i,a)}cone(e,t,n,r,i={},a={}){return this.solidPart(this.geo(`cone:${e}:${n}`,()=>new cc(e,1,n)),r,{...i,sy:t*(i.sy??1)},a)}octa(e,t,n={},r={}){return this.solidPart(this.geo(`octa:${e}`,()=>new kl(e,0)),t,n,r)}lathe(e,t,n,r,i={},a={}){return this.solidPart(this.geo(`lathe:${e}:${n}`,()=>new Ol(t.map(([e,t])=>new X(e,t)),n)),r,i,a)}rock(e,t,n,r={},i={}){let a=`rock:${t%6}:${i.jag??.28}`;return this.solidPart(this.geo(a,()=>_g(t%6,i.jag??.28)),n,{...r,sx:e*(r.sx??1),sy:e*(r.sy??1),sz:e*(r.sz??1)},i)}prism(e,t,n,r={},i={}){return this.solidPart(this.geo(`prism`,vg),n,{...r,sx:e*(r.sx??1),sy:t*(r.sy??1),sz:e*(r.sz??1)},i)}strut(e,t,n,r,i,a={}){return this.append(this.target.solid,this.geo(`cyl:1:1:${r}:1`,()=>new sc(1,1,1,r,1,!0)),i,this.between(e,t,n),[a.rough??.7,a.metal??0,a.glow??0],1),this}tube(e,t,n,r,i={}){let a=new yc(e.map(e=>new Z(...e)));return this.append(this.target.solid,new Ll(a,Math.max(4,e.length*4),t,n),r,{},[i.rough??.7,i.metal??0,i.glow??0],1),this}shape(e,t,n,r={},i={}){return this.solidPart(this.geo(e,t),n,r,i)}glowBox(e,t,n,r,i={},a={}){this.glowPart(this.geo(`box`,()=>new ac(1,1,1)),r,{...i,sx:e*(i.sx??1),sy:t*(i.sy??1),sz:n*(i.sz??1)},a)}glowCyl(e,t,n,r,i,a={},o={}){this.glowPart(this.geo(`cyl:${e}:${t}:${r}:0`,()=>new sc(e,t,1,r)),i,{...a,sy:n*(a.sy??1)},o)}glowTorus(e,t,n,r,i,a,o={},s={}){this.glowPart(this.geo(`torus:${e}:${t}:${n}:${r}:${i}`,()=>new Fl(e,t,n,r,i)),a,o,s)}glowSphere(e,t,n={},r={}){this.glowPart(this.geo(`sphere:${e}:12:8:0`,()=>new Pl(e,12,8)),t,n,r)}glowShape(e,t,n,r={},i={}){this.glowPart(this.geo(e,t),n,r,i)}glowStrut(e,t,n,r,i={}){this.append(this.target.glow,this.geo(`cyl:1:1:4:1`,()=>new sc(1,1,1,4,1,!0)),r,this.between(e,t,n),[i.flow?-i.flow:i.pulse??0,i.phase??Math.random()*6.28],i.intensity??2)}glassBox(e,t,n,r,i={},a={}){this.append(this.target.beam,this.geo(`box`,()=>new ac(1,1,1)),r,{...i,sx:e*(i.sx??1),sy:t*(i.sy??1),sz:n*(i.sz??1)},[a.opacity??.3,lg,0],1)}glassCyl(e,t,n,r,i,a={},o={}){this.append(this.target.beam,this.geo(`cyl:${e}:${t}:${r}:${+!!o.open}`,()=>new sc(e,t,1,r,1,o.open)),i,{...a,sy:n*(a.sy??1)},[o.opacity??.3,lg,0],1)}glassSphere(e,t,n={},r={}){this.append(this.target.beam,this.geo(`sphere:${e}:16:10:0`,()=>new Pl(e,16,10)),t,n,[r.opacity??.3,lg,0],1)}glassShape(e,t,n,r={},i={}){this.append(this.target.beam,this.geo(e,t),n,r,[i.opacity??.3,lg,0],1)}beam(e,t,n,r,i={},a={}){let o=this.geo(`beam:${e}:${t}`,()=>new sc(e,t,1,20,1,!0));this.beamPart(o,r,{...i,sy:n*(i.sy??1)},a,-1)}beamPlane(e,t,n,r={},i={}){this.beamPart(this.geo(`plane`,()=>new Al(1,1)),n,{...r,sx:e*(r.sx??1),sy:t*(r.sy??1)},i,1)}around(e,t,n,r=0){for(let i=0;i<e;i++){let a=r+i/e*Math.PI*2;n(i,a,Math.cos(a)*t,Math.sin(a)*t)}}animated(t,n){let r=new e;return r.cache=this.cache,this.target===this.extra&&(r.target=r.extra),this.children.push({builder:r,at:t,spin:n.spin&&{axis:new Z(...n.spin.axis).normalize(),speed:n.spin.speed},sway:n.sway,bob:n.bob&&{amount:n.bob.amount,speed:n.bob.speed,phase:n.bob.phase??0}}),r}geo(e,t){let n=this.cache.get(e);return n||(n=t(),this.cache.set(e,n)),n}solidPart(e,t,n,r){return this.append(this.target.solid,e,t,n,[r.rough??.7,r.metal??0,r.glow??0],1),this}glowPart(e,t,n,r){this.append(this.target.glow,e,t,n,[r.flow?-r.flow:r.pulse??0,r.phase??Math.random()*6.28],r.intensity??2)}beamPart(e,t,n,r,i){let a=r.from===`bottom`?1:-1;this.append(this.target.beam,e,t,n,(e,t)=>[r.opacity??.3,i>0?e+.5:-1,.5+a*t],1)}between(e,t,n){let r=new Z(...e),i=new Z(...t),a=i.clone().sub(r),o=a.length(),s=new Gi().setFromUnitVectors(pg,a.normalize());return new ha().compose(r.add(i).multiplyScalar(.5),s,new Z(n,o,n))}append(e,t,n,r,i,a){if(r instanceof ha)this.m.copy(r);else{let e=r.s??1;this.e.set(r.rx??0,r.ry??0,r.rz??0,`YXZ`),this.m.compose(this.v.set(r.x??0,r.y??0,r.z??0),this.q.setFromEuler(this.e),this.s.set((r.sx??1)*e,(r.sy??1)*e,(r.sz??1)*e))}this.n.getNormalMatrix(this.m),this.c.set(n).multiplyScalar(a);let o=t.getAttribute(`position`),s=t.getAttribute(`normal`),c=e.positions.length/3,l=new Z,u=new Z;for(let t=0;t<o.count;t++)l.fromBufferAttribute(o,t),typeof i==`function`?e.extra.push(...i(l.x,l.y)):e.extra.push(...i),l.applyMatrix4(this.m),u.fromBufferAttribute(s,t).applyMatrix3(this.n).normalize(),e.positions.push(l.x,l.y,l.z),e.normals.push(u.x,u.y,u.z),e.colors.push(this.c.r,this.c.g,this.c.b);let d=t.getIndex();if(d)for(let t=0;t<d.count;t++)e.index.push(d.getX(t)+c);else for(let t=0;t<o.count;t++)e.index.push(t+c);this.triangles+=(d?d.count:o.count)/3}build(e){let t=new Ua,n=[],r=[],i=this.triangles,a=(e,n,r,i)=>{if(!e.index.length)return null;let a=new qo;a.setAttribute(`position`,new Fo(e.positions,3)),a.setAttribute(`normal`,new Fo(e.normals,3)),a.setAttribute(`color`,new Fo(e.colors,3)),a.setAttribute(r,new Fo(e.extra,e.size)),a.setIndex(e.positions.length/3>65535?new Po(e.index,1):new No(e.index,1)),a.computeBoundingSphere();let o=new _s(a,n);return o.matrixAutoUpdate=!1,i&&(o.userData.minQuality=1),t.add(o),o};for(let[t,n]of[[this.base,!1],[this.extra,!0]]){a(t.solid,e.solid,`aSurface`,n);let i=a(t.glow,e.glow,`aPulse`,n);i&&r.push(i),a(t.beam,e.beam,`aBeam`,n)}for(let r of this.children){let a=r.builder.build(e),o=new Ua;o.position.set(r.at.x??0,r.at.y??0,r.at.z??0),o.rotation.set(r.at.rx??0,r.at.ry??0,r.at.rz??0),o.add(a.group),t.add(o),n.push({object:a.group,spin:r.spin,sway:r.sway,bob:r.bob},...a.movers),i+=a.triangles}return{group:t,movers:n,triangles:i,glows:r}}dispose(){for(let e of this.cache.values())e.dispose();this.cache.clear()}};function hg(e,t){for(let n of e)n.spin&&n.object.quaternion.setFromAxisAngle(n.spin.axis,t*n.spin.speed),n.sway&&(n.object.rotation.z=Math.sin(t*n.sway.speed)*n.sway.amount),n.bob&&(n.object.position.y=Math.sin(t*n.bob.speed+n.bob.phase)*n.bob.amount)}function gg(e){let t=e>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function _g(e,t){let n=gg(9001+e*131),r=new Dl(1,1),i=r.getAttribute(`position`),a=new Map;for(let e=0;e<i.count;e++){let r=`${i.getX(e).toFixed(3)},${i.getY(e).toFixed(3)},${i.getZ(e).toFixed(3)}`;a.has(r)||a.set(r,1+(n()-.5)*2*t);let o=a.get(r);i.setXYZ(e,i.getX(e)*o,i.getY(e)*o*.85,i.getZ(e)*o)}return r.computeVertexNormals(),r}function vg(){let e=new Ol([new X(0,0),new X(.92,0),new X(1,.08),new X(1,.72),new X(0,1)],6).toNonIndexed();return e.computeVertexNormals(),e}var yg=`
  #include <common>
  #include <fog_pars_vertex>
  attribute vec3 color; attribute vec2 aPulse;
  uniform float uTime, uMirror;
  varying vec3 vColor; varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    // Respiration (pulse > 0) ou impulsions qui montent (pulse < 0).
    float pulse = aPulse.x > 0.0 ? 0.55 + 0.45 * sin(uTime * aPulse.x + aPulse.y)
      : aPulse.x < 0.0 ? 0.3 + 0.7 * pow(fract(world.y * 0.18 - uTime * -aPulse.x * 0.25 + aPulse.y), 3.0) * 1.6 : 1.0;
    vColor = color * pulse;
    // Reflet au sol (uMirror > 0) : il s'éteint en s'éloignant de la surface.
    if (uMirror > 0.0) vColor *= uMirror * exp(world.y * 0.32);
    vWorld = world.xyz;
    vec4 mvPosition = viewMatrix * world;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }`,bg=`
  #include <common>
  #include <fog_pars_fragment>
  uniform float uMirror;
  varying vec3 vColor; varying vec3 vWorld;
  ${dg}
  void main() {
    if (uMirror <= 0.0 && seeThrough(vWorld) < bayer4(gl_FragCoord.xy)) discard;
    gl_FragColor = vec4(vColor, 1.0);
    #include <fog_fragment>
  }`;function xg(e){let t={value:0},n={value:2},r={value:new Q(e.rim).multiplyScalar(e.rimStrength)},i=new Jl({vertexColors:!0,roughness:1,metalness:0,envMapIntensity:.7});i.userData.uQuality=n,i.onBeforeCompile=e=>{e.uniforms.uRim=r,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec3 aSurface;
varying vec3 vSurface;
varying vec3 vWorldPos;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
vSurface = aSurface;
vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\nuniform vec3 uRim;\nvarying vec3 vSurface;\nvarying vec3 vWorldPos;\n${ug}\n${dg}`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
        if (seeThrough(vWorldPos) < bayer4(gl_FragCoord.xy)) discard;`).replace(`#include <color_fragment>`,`#include <color_fragment>
        float grain = dNoise(vWorldPos * 2.7) * 0.6 + dNoise(vWorldPos * 11.0) * 0.4;
        // Ombre de contact : le pied des pièces s'assombrit près du sol.
        diffuseColor.rgb *= (0.86 + 0.24 * grain) * mix(0.5, 1.0, smoothstep(0.0, 1.4, vWorldPos.y));`).replace(`#include <roughnessmap_fragment>`,`float roughnessFactor = clamp(vSurface.x + (grain - 0.5) * 0.12, 0.04, 1.0);`).replace(`#include <metalnessmap_fragment>`,`float metalnessFactor = vSurface.y;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        float rimLight = 1.0 - abs(dot(normal, normalize(vViewPosition)));
        totalEmissiveRadiance += uRim * pow(rimLight, 3.0) * smoothstep(-0.5, 2.0, vWorldPos.y) + diffuseColor.rgb * vSurface.z;`)},i.customProgramCacheKey=()=>`decor-solid-2`;let a=e=>Ul.merge([$.fog,{uTime:{value:0},uMirror:{value:e}}]),o=new Kl({fog:!0,uniforms:a(0),vertexShader:yg,fragmentShader:bg});o.uniforms.uTime=t;let s=new Kl({fog:!0,uniforms:a(Math.max(.01,e.mirror)),vertexShader:yg,fragmentShader:bg});s.uniforms.uTime=t;let c=new Kl({transparent:!0,depthWrite:!1,blending:2,side:2,fog:!0,uniforms:Ul.merge([$.fog,{uTime:{value:0}}]),vertexShader:`
      #include <common>
      #include <fog_pars_vertex>
      attribute vec3 color; attribute vec3 aBeam;
      varying vec3 vColor; varying vec3 vBeam; varying vec3 vWorld; varying vec3 vNormalW;
      void main() {
        vColor = color; vBeam = aBeam;
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vNormalW = normalize(mat3(modelMatrix) * normal);
        vec4 mvPosition = viewMatrix * world;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      #include <common>
      #include <fog_pars_fragment>
      uniform float uTime;
      varying vec3 vColor; varying vec3 vBeam; varying vec3 vWorld; varying vec3 vNormalW;
      ${dg}
      void main() {
        vec3 view = normalize(cameraPosition - vWorld);
        float facing = abs(dot(normalize(vNormalW), view));
        float a;
        if (vBeam.y < -1.5) {
          // Voile translucide : plus dense sur la silhouette (effet de verre).
          float rim = 1.0 - facing;
          a = vBeam.x * (0.35 + 0.65 * rim * rim);
        } else {
          // Cône : plein au centre, nul sur la silhouette. Nappe : estompée sur les côtés.
          float edge = vBeam.y < 0.0 ? facing * facing : pow(sin(3.14159 * clamp(vBeam.y, 0.0, 1.0)), 1.5);
          float t = clamp(vBeam.z, 0.0, 1.0);
          float along = smoothstep(0.0, 0.06, t) * pow(1.0 - t, 1.3);
          // Poussière qui passe dans la lumière.
          float shimmer = 0.78 + 0.22 * sin(uTime * 0.6 + vWorld.y * 0.9 + vWorld.x * 0.4 + vWorld.z * 0.3);
          a = vBeam.x * edge * along * shimmer;
        }
        a *= seeThrough(vWorld);
        gl_FragColor = vec4(vColor * a, 1.0);
        #ifdef USE_FOG
          #ifdef FOG_EXP2
            float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
          #else
            float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
          #endif
          gl_FragColor.rgb *= 1.0 - fogFactor;
        #endif
      }`});return c.uniforms.uTime=t,{solid:i,glow:o,beam:c,mirror:s,time:t,dispose(){for(let e of[i,o,c,s])e.dispose()}}}var Sg=`
  // Hachages sans sinus : stables sur les GPU mobiles.
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  float hash13(vec3 p3) { p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
  vec2 hash22(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
  }
  float noise3(vec3 p) {
    vec3 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), u.x), mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), u.x), u.y),
               mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), u.x), mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), u.x), u.y), u.z);
  }
  float fbm(vec2 p, int octaves) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 6; i++) { if (i >= octaves) break; v += a * noise(p); p = p * 2.03 + 17.1; a *= 0.5; }
    return v;
  }
  float fbm3(vec3 p, int octaves) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) { if (i >= octaves) break; v += a * noise3(p); p = p * 2.07 + 11.3; a *= 0.5; }
    return v;
  }
  // Cellules de Voronoï : distance au germe, à la frontière, et identité de la cellule.
  vec3 voronoi(vec2 x) {
    vec2 n = floor(x), f = fract(x);
    float f1 = 8.0, f2 = 8.0, id = 0.0;
    for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j)), o = hash22(n + g), r = g + o - f;
      float d = dot(r, r);
      if (d < f1) { f2 = f1; f1 = d; id = hash12(n + g); } else if (d < f2) f2 = d;
    }
    return vec3(sqrt(f1), sqrt(f2), id);
  }
  vec3 hue(float h) { return clamp(abs(mod(h * 6.0 + vec3(0, 4, 2), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
  // Trait d'épaisseur constante à l'écran, sans crénelage.
  float lineAA(float v, float width) { float w = fwidth(v) * width; return 1.0 - smoothstep(0.0, w, abs(fract(v - 0.5) - 0.5)); }
  float ringAA(float r, float at, float width) { return 1.0 - smoothstep(0.0, fwidth(r) * width, abs(r - at)); }
  float band(float v, float a, float b, float soft) { return smoothstep(a - soft, a + soft, v) * (1.0 - smoothstep(b - soft, b + soft, v)); }
`,Cg={aurora:0,ember:1,monolith:2,nebula:3,jade:4,sakura:5,circuit:6,rainbow:7,casino:8,observatory:9,atlantis:10};function wg(e,t){return new Kl({side:1,depthWrite:!1,fog:!1,defines:{MODE:Cg[e.id]},uniforms:{uTime:{value:0},uQuality:{value:2},uReflect:{value:t.reflect},uHorizon:{value:new Q(e.sky.horizon)},uZenith:{value:new Q(e.sky.zenith)},uGlow:{value:new Q(e.sky.glow)},uWarm:{value:new Q(e.warm)},uAccent:{value:new Q(e.accent)},uFog:{value:new Q(t.fog)}},vertexShader:`
      varying vec3 vDir;
      void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float uTime, uReflect; uniform int uQuality; uniform vec3 uHorizon, uZenith, uGlow, uWarm, uAccent, uFog;
      varying vec3 vDir;
      ${Sg}
      // Étoiles fixées sur la sphère (sans couture), au moins un pixel de large.
      float stars(vec3 d, float scale, float density, float twinkle) {
        vec3 p = d * scale, id = floor(p), f = fract(p) - 0.5;
        float r = hash13(id);
        if (r < 1.0 - density) return 0.0;
        vec3 o = (vec3(hash13(id + 1.7), hash13(id + 5.3), hash13(id + 9.1)) - 0.5) * 0.7;
        float size = mix(0.05, 0.16, hash13(id + 3.3)), px = max(fwidth(p.x) * 0.9, 0.02);
        float s = smoothstep(max(size, px), 0.0, length(f - o)) * (size / max(size, px));
        return s * (1.0 - twinkle + twinkle * (0.5 + 0.5 * sin(uTime * (1.0 + r * 3.0) + r * 60.0)));
      }
      // Silhouette lointaine : 1 sous la ligne de crête, bord adouci d'un pixel.
      float below(float h, float crest) { float w = fwidth(h) * 1.2 + 0.0015; return smoothstep(crest + w, crest - w, h); }
      float ridged(vec2 p, int o) { float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { if (i >= o) break; v += a * (1.0 - abs(noise(p) * 2.0 - 1.0)); p = p * 2.1 + 3.7; a *= 0.5; } return v; }

      vec3 sky(vec3 d) {
        float h = d.y;
        vec2 c2 = normalize(d.xz + 1e-5);
        float az = atan(d.z, d.x);
        int oct = 3 + uQuality;
        vec3 col = mix(uHorizon, uZenith, smoothstep(-0.02, 0.6, h));
        // Le fond de la scène est vers −z : c'est là que se placent les grands motifs.
        float back = dot(c2, vec2(0.0, -1.0)), side = dot(c2, vec2(1.0, 0.0));
      #if MODE == 0
        // Aurora : ciel polaire, deux rideaux d'aurore, crêtes glacées.
        col += uGlow * 0.1 * exp(-max(h, 0.0) * 9.0);
        col += vec3(0.8, 0.92, 1.0) * stars(d, 240.0, 0.05, 0.6) * smoothstep(0.04, 0.35, h);
        for (int k = 0; k < 2; k++) {
          float fk = float(k);
          float base = 0.11 + fk * 0.09 + 0.07 * noise(c2 * (2.0 + fk) + vec2(uTime * 0.012, fk * 7.0));
          float above = h - base;
          float curtain = smoothstep(-0.004, 0.02, above) * exp(-max(above, 0.0) * (6.0 - fk * 2.0));
          curtain *= smoothstep(0.32, 0.72, noise(c2 * (2.6 + fk) + vec2(fk * 3.1, uTime * 0.02)));
          float rays = noise(c2 * (70.0 + fk * 30.0) + vec2(uTime * 0.04, -uTime * 0.02));
          curtain *= 0.45 + 0.9 * rays * rays;
          vec3 tint = mix(mix(uGlow, vec3(0.25, 1.0, 0.62), 0.45), vec3(0.62, 0.32, 1.0), smoothstep(0.02, 0.22, above));
          col += tint * curtain * (0.5 - fk * 0.18);
        }
        float far = 0.035 + 0.075 * ridged(c2 * 2.6 + 11.0, oct);
        float near = 0.012 + 0.05 * ridged(c2 * 4.3 + 37.0, oct) * (0.6 + 0.4 * back);
        col = mix(col, mix(uHorizon * 0.7, uGlow * 0.18, 0.25) + uGlow * 0.25 * exp(-max(far - h, 0.0) * 160.0), below(h, far));
        col = mix(col, uZenith * 0.7 + uGlow * 0.12 * exp(-max(near - h, 0.0) * 200.0), below(h, near));
      #elif MODE == 1
        // Ember : fumées rougeoyantes, volcan au fond, lueur d'incendie.
        col += uGlow * 0.28 * exp(-max(h, 0.0) * 7.0);
        float smoke = fbm3(vec3(c2 * 3.0, h * 4.0 - uTime * 0.035), oct);
        col = mix(col, col * 0.45 + uGlow * 0.05, smoothstep(0.45, 0.8, smoke) * smoothstep(0.02, 0.25, h));
        col += uGlow * smoothstep(0.55, 0.9, fbm3(vec3(c2 * 5.0, h * 7.0 - uTime * 0.05), oct)) * 0.12 * smoothstep(0.4, 0.02, h);
        float x = side, cone = 0.17 - abs(x) * 0.42 + 0.012 * noise(c2 * 40.0);
        float crest = max(min(cone, 0.13), 0.018 + 0.03 * ridged(c2 * 3.5 + 5.0, oct));
        float volcano = below(h, crest) * step(0.0, back);
        float lava = smoothstep(0.75, 0.95, noise(vec2(x * 60.0, h * 6.0 - uTime * 0.1))) * smoothstep(0.13, 0.02, h) * smoothstep(0.3, 0.0, abs(x)) * step(0.0, back);
        col = mix(col, uZenith * 0.8 + uGlow * lava * 1.4, volcano);
        col += uGlow * 1.2 * exp(-max(h - 0.13, 0.0) * 18.0) * exp(-x * x * 300.0) * step(0.13, h) * step(0.0, back) * (0.75 + 0.25 * sin(uTime * 1.3));
        col += vec3(1.0, 0.55, 0.2) * stars(d + vec3(0.0, uTime * 0.004, 0.0), 160.0, 0.025, 0.9) * smoothstep(0.05, 0.4, h);
      #elif MODE == 2
        // Monolith : cyclorama de studio, rangée de panneaux lumineux lointains.
        col += uGlow * 0.05 * exp(-abs(h - 0.08) * 14.0);
        float k = fract(az / 6.2831853 * 16.0);
        float panel = band(k, 0.32, 0.68, 0.02) * band(h, 0.05, 0.19, 0.004);
        col += mix(uGlow, vec3(1.0), 0.6) * panel * 0.22 * (0.7 + 0.3 * back);
        col += uGlow * 0.035 * band(h, 0.2, 0.205, 0.002);
        float slab = 0.025 + 0.05 * step(0.55, hash12(vec2(floor(az * 9.0), 3.0))) * step(0.0, back);
        col = mix(col, uZenith * 0.9, below(h, slab));
      #elif MODE == 3
        // Nebula : nébuleuse en volutes, poussières sombres, étoiles, planète à anneau.
        vec3 q = d * 2.2;
        float warp = fbm3(q * 1.3 + 4.0, oct);
        float n1 = fbm3(q + warp * 1.6 + vec3(0.0, 0.0, uTime * 0.004), oct), n2 = fbm3(q * 1.7 - warp + 9.0, oct);
        col += uGlow * smoothstep(0.42, 0.85, n1) * 0.55 + uWarm * smoothstep(0.5, 0.92, n2) * 0.3 + vec3(1.0, 0.35, 0.7) * smoothstep(0.62, 0.95, n1 * n2 * 1.8) * 0.2;
        col *= 0.55 + 0.45 * smoothstep(0.25, 0.55, fbm3(q * 2.3 + 1.0, oct));
        col += vec3(0.9, 0.85, 1.0) * (stars(d, 200.0, 0.04, 0.5) + stars(d, 420.0, 0.03, 0.3) * 0.6);
        vec3 pd = normalize(vec3(0.42, 0.2, -1.0));
        float pr = 0.1, pc = acos(clamp(dot(d, pd), -1.0, 1.0));
        vec3 pu = normalize(cross(pd, vec3(0.0, 1.0, 0.0))), pv = cross(pu, pd);
        vec2 pp = vec2(dot(d - pd, pu), dot(d - pd, pv)) / pr;
        float disc = smoothstep(1.0 + fwidth(pp.x) * 1.5, 1.0, length(pp));
        vec3 pn = vec3(pp, sqrt(max(0.0, 1.0 - dot(pp, pp))));
        float lit = clamp(dot(pn, normalize(vec3(-0.6, 0.5, 0.6))), 0.0, 1.0);
        vec3 surf = mix(vec3(0.25, 0.12, 0.45), uWarm * 0.8, noise(vec2(pp.y * 9.0 + noise(pp * 6.0) * 1.5, 1.0))) * (0.08 + lit);
        col = mix(col, surf, disc);
        col += uGlow * 0.5 * exp(-max(length(pp) - 1.0, 0.0) * 12.0) * (1.0 - disc) * step(pc, pr * 3.0);
        vec2 rp = vec2(pp.x, (pp.y - pp.x * 0.25) * 3.6);
        float ring = band(length(rp), 1.45, 2.05, 0.02) * (0.6 + 0.4 * noise(vec2(length(rp) * 30.0, 0.0))) * (pp.y - pp.x * 0.25 < 0.0 || disc < 0.5 ? 1.0 : 0.0);
        col = mix(col, uWarm * 0.55 + uGlow * 0.2, ring * 0.75);
      #elif MODE == 4
        // Jade : soir brumeux, lune pâle, pitons karstiques en couches de brume.
        col += uGlow * 0.07 * exp(-max(h, 0.0) * 8.0);
        vec3 md = normalize(vec3(-0.45, 0.32, -1.0));
        float mc = dot(d, md);
        col += vec3(0.85, 1.0, 0.9) * smoothstep(0.9993, 0.9996, mc) * 0.9 + uGlow * pow(max(mc, 0.0), 60.0) * 0.18;
        col += vec3(0.85, 1.0, 0.9) * stars(d, 220.0, 0.02, 0.5) * smoothstep(0.15, 0.5, h) * 0.6;
        for (int k = 0; k < 3; k++) {
          float fk = float(k);
          float peaks = pow(noise(c2 * (3.0 + fk * 2.2) + fk * 13.0), 2.5) * (0.22 - fk * 0.05) + 0.02 * noise(c2 * 40.0 + fk);
          float crest = 0.015 + fk * 0.004 + peaks;
          vec3 tone = mix(uHorizon * 1.15 + uGlow * 0.04, uZenith * 0.8, fk / 2.0);
          col = mix(col, tone, below(h, crest));
          col += uGlow * 0.04 * exp(-abs(h - crest * 0.4) * 30.0) * (1.0 - fk * 0.3);
        }
      #elif MODE == 5
        // Sakura : couchant rose, grand soleil, Fuji enneigé, nuages en écharpes.
        vec3 sd = normalize(vec3(-0.2, 0.07, -1.0));
        float sc = max(dot(d, sd), 0.0);
        col = mix(col, uWarm * 0.75, exp(-max(h, 0.0) * 6.0) * 0.55);
        col += uWarm * pow(sc, 900.0) * 3.0 + uWarm * pow(sc, 60.0) * 0.4 + uGlow * pow(sc, 6.0) * 0.18;
        float streak = fbm(vec2(az * 3.0, h * 26.0 + noise(c2 * 3.0) * 4.0), oct);
        col = mix(col, mix(uGlow * 0.6, uWarm * 0.7, pow(sc, 3.0)), smoothstep(0.55, 0.8, streak) * band(h, 0.08, 0.32, 0.04) * 0.6);
        float fx = dot(c2, normalize(vec2(0.55, -1.0)));
        float fy = dot(c2, normalize(vec2(1.0, 0.55)));
        float fuji = (0.19 - abs(fy) * 0.62) * step(0.0, fx);
        fuji = min(fuji, 0.165 - abs(fy) * 0.08);
        float hills = 0.018 + 0.03 * fbm(c2 * 5.0 + 3.0, oct);
        float crest = max(fuji, hills);
        float snow = smoothstep(0.12, 0.125, h + noise(vec2(fy * 80.0, 0.0)) * 0.012) * step(0.0, fx);
        col = mix(col, mix(uZenith * 1.1 + uGlow * 0.06, uWarm * 0.45 + 0.1, snow * step(hills + 0.01, h)), below(h, crest));
      #elif MODE == 6
        // Circuit : pluie de données, tours de serveurs éclairées au loin.
        float cols = 220.0, ci = floor((az / 6.2831853 + 0.5) * cols);
        float rnd = hash12(vec2(ci, 1.0)), cx = fract((az / 6.2831853 + 0.5) * cols);
        float fall = fract(h * (1.5 + rnd * 2.0) + uTime * (0.08 + rnd * 0.14) + rnd * 10.0);
        float head = smoothstep(0.86, 1.0, fall), trail = smoothstep(0.35, 1.0, fall) * 0.35;
        float glyph = step(0.35, hash12(vec2(ci, floor(h * 180.0 + uTime * 6.0 * rnd))));
        float rain = (head + trail * glyph) * band(cx, 0.25, 0.75, 0.1) * step(0.55, rnd) * smoothstep(0.05, 0.3, h) * smoothstep(0.95, 0.4, h);
        col += mix(uAccent, vec3(1.0), head * 0.5) * rain * 0.55;
        col += uGlow * 0.08 * exp(-max(h, 0.0) * 10.0);
        float bi = floor((az / 6.2831853 + 0.5) * 70.0);
        float tower = 0.02 + pow(hash12(vec2(bi, 5.0)), 2.0) * 0.11 * (0.5 + 0.5 * max(back, 0.0));
        float inside = below(h, tower);
        vec2 win = vec2(fract((az / 6.2831853 + 0.5) * 900.0), fract(h * 260.0));
        float lit = step(0.72, hash12(vec2(floor((az / 6.2831853 + 0.5) * 900.0), floor(h * 260.0)))) * band(win.x, 0.3, 0.7, 0.05) * band(win.y, 0.3, 0.7, 0.05);
        col = mix(col, uZenith * 0.6 + mix(uAccent, uWarm, step(0.5, hash12(vec2(bi, 9.0)))) * lit * 0.6, inside);
      #elif MODE == 7
        // Rainbow : voiles spectraux, étoiles, double arc-en-ciel au fond.
        float n = fbm(vec2(az * 2.0 - uTime * 0.01, h * 3.0), oct);
        col += hue(fract(az * 0.16 + h * 0.4 + uTime * 0.01)) * smoothstep(0.5, 0.85, n) * smoothstep(0.02, 0.25, h) * 0.25;
        col += stars(d, 230.0, 0.04, 0.5) * 0.8;
        vec3 anti = normalize(vec3(0.0, -0.42, -1.0));
        float ang = degrees(acos(clamp(dot(d, anti), -1.0, 1.0)));
        float bow = band(ang, 40.5, 42.5, 0.4), bow2 = band(ang, 50.0, 53.0, 0.5);
        col += hue((42.5 - ang) / 2.2 * 0.8) * bow * 0.3 * smoothstep(0.0, 0.08, h) + hue((ang - 50.0) / 3.0 * 0.8) * bow2 * 0.1 * smoothstep(0.0, 0.08, h);
        col += vec3(0.6, 0.7, 1.0) * 0.06 * smoothstep(42.5, 30.0, ang);
      #elif MODE == 8
        // Monte-Carlo : plafond chaud, rosaces dorées à peine visibles.
        vec2 cp = d.xz / max(h, 0.05) * 0.6;
        float coffer = max(lineAA(cp.x, 1.4), lineAA(cp.y, 1.4));
        col += uGlow * 0.06 * exp(-max(h, 0.0) * 6.0) + uGlow * coffer * 0.025 * smoothstep(0.15, 0.5, h);
        col += uGlow * 0.12 * pow(max(h, 0.0), 6.0);
      #elif MODE == 9
        // Observatoire : voie lactée, constellations reliées, grille céleste de laiton.
        float tilt = h - 0.42 * sin(az + 0.6);
        float milky = exp(-tilt * tilt * 14.0);
        float dust = fbm3(d * 6.0, oct);
        col += mix(uGlow, uWarm, 0.3) * milky * (dust * 0.45 + 0.06) * (1.0 - smoothstep(0.55, 0.75, dust) * 0.6);
        col += vec3(0.85, 0.9, 1.0) * (stars(d, 210.0, 0.05, 0.5) + stars(d, 380.0, 0.04, 0.3) * 0.7 + milky * stars(d, 520.0, 0.12, 0.2) * 0.6);
        if (h > 0.05) {
          vec2 sp = d.xz / (1.0 + h) * 5.0;
          if (uQuality > 0) {
            vec2 cell = floor(sp);
            float lines = 0.0, dots = 0.0;
            for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
              vec2 g = cell + vec2(float(i), float(j));
              vec2 a = g + 0.2 + 0.6 * hash22(g);
              dots += smoothstep(0.07, 0.02, length(sp - a)) * step(0.45, hash12(g + 4.0));
              for (int e = 0; e < 2; e++) {
                vec2 g2 = g + (e == 0 ? vec2(1.0, 0.0) : vec2(0.0, 1.0));
                if (hash12(g + float(e) * 7.0) > 0.42 || hash12(g + 4.0) < 0.45 || hash12(g2 + 4.0) < 0.45) continue;
                vec2 b = g2 + 0.2 + 0.6 * hash22(g2), ab = b - a;
                float t = clamp(dot(sp - a, ab) / dot(ab, ab), 0.08, 0.92);
                lines = max(lines, 1.0 - smoothstep(0.0, fwidth(sp.x) * 1.2, length(sp - a - ab * t)));
              }
            }
            col += uWarm * (lines * 0.16 + dots * 0.5) * smoothstep(0.05, 0.25, h);
          }
          float rr = length(sp), ra = atan(sp.y, sp.x);
          col += uWarm * 0.05 * (lineAA(rr * 0.8, 1.2) + lineAA(ra / 6.2831853 * 24.0, 1.2) * smoothstep(0.6, 1.2, rr));
        }
      #else
        // Atlantis : fenêtre de surface ondulante, rais de lumière, ruines dans la brume.
        vec2 sp = d.xz / max(h, 0.08);
        float window = smoothstep(0.45, 0.9, h);
        vec3 v = voronoi(sp * 1.6 + vec2(uTime * 0.12, uTime * 0.07));
        float caust = pow(1.0 - smoothstep(0.0, 0.25, v.y - v.x), 3.0);
        col += uGlow * window * (0.35 + caust * 0.7) * 0.6;
        float rays = pow(noise(c2 * 26.0 + vec2(uTime * 0.05, 0.0)) * noise(c2 * 11.0 - vec2(uTime * 0.03, 2.0)), 1.5);
        col += uGlow * rays * smoothstep(0.05, 0.6, h) * smoothstep(1.0, 0.6, h) * 0.5;
        col += uGlow * 0.12 * exp(-max(h, 0.0) * 5.0);
        float bi = floor((az / 6.2831853 + 0.5) * 48.0), bx = fract((az / 6.2831853 + 0.5) * 48.0);
        float r1 = hash12(vec2(bi, 2.0));
        float tower = r1 > 0.55 ? (0.05 + r1 * 0.12) * band(bx, 0.3, 0.7, 0.03) : 0.0;
        float dome = r1 < 0.25 ? 0.04 + 0.05 * sqrt(max(0.0, 1.0 - pow((bx - 0.5) * 2.0, 2.0))) : 0.0;
        float ruins = max(max(tower, dome), 0.02 + 0.02 * noise(c2 * 20.0));
        col = mix(col, mix(uHorizon, uGlow * 0.3, 0.2), below(h, ruins) * 0.85);
        col += uGlow * 0.6 * stars(d + vec3(0.0, -uTime * 0.01, 0.0), 120.0, 0.03, 0.0) * smoothstep(0.0, 0.3, h);
      #endif
        return col;
      }

      void main() {
        vec3 d = normalize(vDir);
        // Sous l'horizon : reflet du ciel qui se fond dans le brouillard. En
        // Économie, ce reflet (vu à travers le sol) se réduit au dégradé : le
        // sol et le ciel ne paient pas deux fois le shader le plus lourd.
        vec3 col = d.y < 0.0 && uQuality == 0 ? mix(uHorizon, uZenith, smoothstep(0.0, 0.6, -d.y)) : sky(vec3(d.x, abs(d.y), d.z));
        if (d.y < 0.0) col = mix(uFog, col * uReflect + uFog * (1.0 - uReflect), smoothstep(-0.35, -0.01, d.y));
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`})}function Tg(e,t,n){let r=n.pools.slice(0,8),i=Array.from({length:8},(e,t)=>r[t]?new ua(r[t].x,r[t].z,r[t].radius,r[t].intensity):new ua),a=Array.from({length:8},(e,t)=>new Q(r[t]?.color??`#000000`));return new Kl({transparent:!0,depthWrite:!0,blending:5,blendSrc:201,blendDst:205,defines:{MODE:Cg[e.id],POOLS:r.length},uniforms:{uTime:{value:0},uQuality:{value:2},uRadius:{value:t},uGloss:{value:n.gloss},uBase:{value:new Q(e.floor)},uLine:{value:new Q(e.accent)},uWarm:{value:new Q(e.warm)},uGlow:{value:new Q(e.sky.glow)},uFogColor:{value:new Q(e.background)},uFogDensity:{value:.03},uPools:{value:i},uPoolColors:{value:a}},vertexShader:`
      varying vec2 vXZ; varying float vDepth; varying vec3 vWorld;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vXZ = world.xz;
        vWorld = world.xyz;
        vec4 view = viewMatrix * world;
        vDepth = -view.z;
        gl_Position = projectionMatrix * view;
      }`,fragmentShader:`
      uniform float uTime, uRadius, uFogDensity, uGloss; uniform int uQuality;
      uniform vec3 uBase, uLine, uWarm, uGlow, uFogColor;
      uniform vec4 uPools[8]; uniform vec3 uPoolColors[8];
      varying vec2 vXZ; varying float vDepth; varying vec3 vWorld;
      ${Sg}
      void main() {
        vec2 p = vXZ;
        float r = length(p), a = atan(p.y, p.x), R = uRadius;
        float inside = 1.0 - smoothstep(R - 0.4, R, r);
        float fade = exp(-r * 0.06);
        int oct = 2 + uQuality;
        float gloss = uGloss;
        bool rings = true;
        vec3 col = uBase * (0.6 + 0.8 * exp(-r * 0.13));
      #if MODE == 0
        // Glace sombre en plaques, fissures bleutées, givre, grille holographique.
        vec3 v = voronoi(p * 0.42);
        float crack = 1.0 - smoothstep(0.0, 0.05 + fwidth(v.y - v.x), v.y - v.x);
        col *= 0.75 + 0.5 * v.z;
        // Fissures discrètes près du plateau, plus vives au loin.
        float calm = smoothstep(R * 0.7, R * 1.6, r);
        col += uLine * crack * (0.04 + 0.1 * calm) * (0.4 + fade);
        if (uQuality > 0) {
          vec3 v2 = voronoi(p * 1.7 + 3.0);
          col += uLine * (1.0 - smoothstep(0.0, 0.04, v2.y - v2.x)) * 0.05 * fade;
          col += uLine * 0.04 * fbm(p * 0.9, oct);
        }
        float grid = max(lineAA(p.x * 0.5, 1.1), lineAA(p.y * 0.5, 1.1));
        col += uLine * grid * 0.05 * fade;
        gloss *= 1.0 - crack * 0.6;
      #elif MODE == 1
        // Basalte en dalles, lave qui coule dans les joints, braises.
        vec3 v = voronoi(p * 0.38);
        float edge = v.y - v.x;
        float seam = smoothstep(0.015, 0.09, edge);
        float flow = fbm(p * 0.5 + vec2(uTime * 0.06, -uTime * 0.04), oct);
        float heat = 0.55 + 0.45 * sin(uTime * 0.9 + flow * 10.0 + v.z * 6.0);
        vec3 lava = mix(uLine, uWarm, smoothstep(0.03, 0.0, edge) * 0.8);
        col = col * (0.55 + 0.6 * v.z) * (0.7 + 0.5 * fbm(p * 1.3, oct)) * seam;
        // La lave ne court que dans une partie des joints, et s'éteint près du plateau.
        float live = smoothstep(0.4, 0.62, flow) * (0.25 + 0.75 * smoothstep(R * 0.6, R * 1.5, r));
        col += lava * (1.0 - seam) * heat * (0.35 + 0.8 * fade) * (0.12 + 0.88 * live);
        col += uLine * smoothstep(0.8, 1.0, noise(p * 2.0 + uTime * 0.2)) * 0.25 * seam * fade * float(uQuality > 0);
        gloss *= seam * 0.6;
      #elif MODE == 2
        // Béton poli en grandes dalles, joints fins, filets de lumière incrustés.
        vec2 tile = p / 3.0;
        float seam = max(lineAA(tile.x, 1.0), lineAA(tile.y, 1.0));
        float tone = hash12(floor(tile));
        col *= 0.8 + 0.35 * tone + 0.25 * (fbm(p * 0.7, oct) - 0.5);
        col = mix(col, col * 0.4, seam * 0.8);
        col += uLine * (ringAA(r, R + 2.5, 1.4) + ringAA(r, R + 5.5, 1.2) * 0.6) * 0.5;
        rings = false;
        gloss *= 1.0 - seam * 0.7;
      #elif MODE == 3
        // Pont de station : plaques décalées, rivets, bandes de signalisation, liserés.
        vec2 q = p / vec2(2.4, 1.2);
        q.x += step(1.0, mod(floor(q.y), 2.0)) * 0.5;
        vec2 cell = floor(q), f = fract(q);
        float seam = max(lineAA(q.x, 1.0), lineAA(q.y, 1.0));
        col *= 0.75 + 0.45 * hash12(cell);
        col = mix(col, col * 0.3, seam);
        vec2 rv = abs(f - 0.5) - vec2(0.44, 0.38);
        col += vec3(0.3) * smoothstep(0.035, 0.02, length(max(rv, 0.0))) * float(uQuality > 0) * col;
        float stripe = band(r, R + 1.0, R + 1.8, 0.03) * step(0.5, fract((p.x + p.y) * 0.9));
        col = mix(col, mix(uWarm * 0.35, col, 0.4), stripe);
        col += uLine * lineAA(p.x * 0.125 + 0.5, 1.4) * 0.35 * fade * step(R + 2.0, r);
        gloss *= 1.0 - seam * 0.8;
      #elif MODE == 4
        // Eau calme : ondes concentriques de quelques sources, reflets qui tremblent.
        float wave = 0.0;
        for (int i = 0; i < 4; i++) {
          vec2 src = vec2(cos(float(i) * 2.4 + 0.5), sin(float(i) * 2.4 + 0.5)) * (15.0 + float(i) * 4.0);
          float dd = length(p - src);
          wave += sin(dd * 2.2 - uTime * 1.3 + float(i)) * exp(-dd * 0.08);
        }
        wave += (fbm(p * 0.8 + uTime * vec2(0.05, 0.03), oct) - 0.5) * 1.4;
        col = uBase * (0.7 + 0.5 * exp(-r * 0.1)) + uLine * (0.02 + 0.03 * wave) * fade;
        col += uLine * ringAA(r, R + 0.6 + 0.15 * sin(uTime * 0.8), 1.4) * 0.25;
        gloss = uGloss * (0.85 + 0.15 * wave);
        rings = false;
      #elif MODE == 5
        // Plancher laqué sombre, veines du bois, pétales tombés.
        vec2 q = vec2(p.x * 2.2, p.y * 0.22);
        float plank = floor(q.x);
        q.y += hash12(vec2(plank, 2.0)) * 7.0;
        float grain = fbm(vec2(q.x * 6.0, q.y * 18.0), oct);
        vec3 wood = mix(uBase * 0.8, uBase * 1.7 + vec3(0.04, 0.01, 0.0), grain) * (0.85 + 0.3 * hash12(vec2(plank, floor(q.y))));
        float seam = max(lineAA(q.x, 1.0), lineAA(q.y, 0.8));
        col = mix(wood, wood * 0.35, seam) * (0.6 + 0.8 * exp(-r * 0.08));
        vec2 pc = p * 1.4;
        vec2 cell = floor(pc), f = fract(pc) - 0.5 - (hash22(cell) - 0.5) * 0.6;
        float ang = hash12(cell + 3.0) * 6.28;
        vec2 pf = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * f;
        float petal = smoothstep(1.0, 0.8, length(pf * vec2(9.0, 15.0))) * step(0.78, hash12(cell + 9.0)) * smoothstep(R * 0.6, R + 3.0, r);
        col = mix(col, mix(vec3(0.85, 0.42, 0.56), vec3(0.95, 0.66, 0.74), hash12(cell)) * 0.3, petal);
        col += uWarm * lineAA(r * 0.7 + 0.2 * sin(a * 12.0), 1.0) * 0.04 * inside;
        gloss *= (1.0 - petal) * (1.0 - seam * 0.6);
        rings = false;
      #elif MODE == 6
        // Circuit imprimé : pistes, pastilles, vias, impulsions qui courent.
        vec2 g = p * 0.8, cell = floor(g), f = fract(g);
        float h1 = hash12(cell), h2 = hash12(cell + 17.0);
        float trace = 0.0;
        if (h1 > 0.45) trace = max(trace, 1.0 - smoothstep(0.0, fwidth(g.y) * 1.2, abs(f.y - 0.5)));
        if (h2 > 0.55) trace = max(trace, 1.0 - smoothstep(0.0, fwidth(g.x) * 1.2, abs(f.x - 0.5)));
        float pad = smoothstep(0.16, 0.12, length(f - 0.5)) * step(0.7, hash12(cell + 5.0));
        float via = smoothstep(0.07, 0.05, length(f - 0.5)) * pad;
        float runner = smoothstep(0.88, 1.0, fract((h1 > 0.45 ? g.x : g.y) * 0.08 - uTime * 0.35 + h1 * 7.0));
        col = uBase * (0.7 + 0.6 * exp(-r * 0.1)) + uLine * 0.012;
        col += uLine * trace * (0.08 + runner * 1.1) * (0.35 + fade);
        col += uWarm * pad * 0.25 * (0.35 + fade) - col * via * 0.8;
        col += uLine * max(lineAA(p.x * 0.5, 1.1), lineAA(p.y * 0.5, 1.1)) * 0.05 * fade;
        gloss *= 1.0 - trace * 0.5;
      #elif MODE == 7
        // Marbre noir poli aux veines claires, grille irisée.
        float warp = fbm(p * 0.25, oct);
        float vein = 1.0 - smoothstep(0.0, 0.06, abs(fbm(p * 0.35 + warp * 2.0, oct) - 0.5));
        col = uBase * (0.7 + 0.4 * warp) + vec3(0.25, 0.28, 0.35) * vein * 0.35;
        float grid = max(lineAA(p.x * 0.5, 1.1), lineAA(p.y * 0.5, 1.1));
        col += hue(fract(a / 6.2831853 + r * 0.02 + uTime * 0.01)) * grid * 0.12 * fade;
        gloss *= 1.0 - vein * 0.3;
      #elif MODE == 8
        // Monte-Carlo : parquet ciré, grand tapis à médaillon sous la table.
        vec2 q = p * vec2(1.6, 0.42);
        float row = floor(q.x);
        q.y += hash12(vec2(row, 7.0)) * 3.0;
        vec2 cell = vec2(row, floor(q.y));
        float tone = hash12(cell);
        vec3 wood = mix(vec3(0.075, 0.035, 0.018), vec3(0.16, 0.08, 0.036), tone);
        wood *= 0.85 + 0.3 * noise(vec2(q.x * 30.0, q.y * 1.5) + cell * 10.0);
        float seam = max(lineAA(q.x, 1.0), lineAA(q.y, 1.0));
        col = mix(wood, vec3(0.02, 0.01, 0.005), seam * 0.9) * (0.45 + 1.1 * exp(-r * 0.06));
        float rug = 1.0 - smoothstep(12.9, 13.0 + fwidth(r), r);
        vec2 d2 = vec2(p.x + p.y, p.x - p.y) * 0.9;
        vec2 df = abs(fract(d2) - 0.5);
        float lattice = 1.0 - smoothstep(0.0, fwidth(d2.x) * 1.5, abs(df.x + df.y - 0.5));
        float flower = smoothstep(0.16, 0.1, length(df - 0.5)) + smoothstep(0.1, 0.05, length(df));
        vec3 red = vec3(0.17, 0.018, 0.03) * (0.85 + 0.3 * noise(p * 6.0));
        vec3 gold = vec3(0.55, 0.38, 0.14);
        vec3 carpet = mix(red, gold * 0.5, lattice * 0.55 + flower * 0.35);
        float border = band(r, 11.2, 12.7, 0.02);
        float motif = smoothstep(0.3, 0.9, sin(a * 48.0) * 0.5 + 0.5) * band(r, 11.55, 12.35, 0.02);
        carpet = mix(carpet, mix(vec3(0.05, 0.012, 0.016), gold * 0.6, motif), border);
        carpet += gold * 0.7 * (ringAA(r, 12.7, 1.6) + ringAA(r, 11.2, 1.6) + ringAA(r, 12.9, 1.2) * 0.6);
        carpet *= 0.6 + 0.9 * exp(-r * 0.07);
        col = mix(col, carpet, rug);
        gloss *= (1.0 - rug) * (1.0 - seam * 0.6);
        rings = false;
      #elif MODE == 9
        // Lapis-lazuli moucheté d'or, roue du zodiaque, rose des vents.
        float warp = fbm(p * 0.3, oct);
        col = mix(uBase * 0.7, uBase * 2.2 + vec3(0.0, 0.01, 0.05), warp) * (0.6 + 0.7 * exp(-r * 0.09));
        col += vec3(0.5, 0.5, 0.6) * (1.0 - smoothstep(0.0, 0.05, abs(fbm(p * 0.6 + warp, oct) - 0.5))) * 0.06;
        vec2 fl = floor(p * 9.0);
        col += uWarm * step(0.985, hash12(fl)) * smoothstep(0.45, 0.1, length(fract(p * 9.0) - 0.5)) * 0.8 * float(uQuality > 0);
        col += uWarm * (ringAA(r, R * 0.5, 1.3) + ringAA(r, R * 0.82, 1.3) + ringAA(r, R * 1.25, 1.3) + ringAA(r, R * 1.32, 1.1)) * 0.35;
        col += uWarm * lineAA(a / 6.2831853 * 12.0, 1.0) * band(r, R * 0.5, R * 0.82, 0.02) * 0.3;
        col += uLine * lineAA(a / 6.2831853 * 72.0, 1.0) * band(r, R * 1.25, R * 1.32, 0.02) * 0.4;
        float sector = fract(a / 6.2831853 * 12.0);
        col += uWarm * smoothstep(0.35, 0.25, length(vec2((sector - 0.5) * r * 0.52, r - R * 0.66))) * 0.18;
        float star = abs(cos(a * 4.0));
        col += uLine * (1.0 - smoothstep(0.0, fwidth(r) * 1.5, abs(r - mix(R * 1.4, R * 2.4, pow(star, 8.0))))) * 0.12 * step(R * 1.35, r);
        rings = false;
      #else
        // Sable ridé, caustiques mouvantes, couronne de mosaïque autour du plateau.
        float rip = sin(dot(p, vec2(0.8, 0.6)) * 3.0 + fbm(p * 0.4, oct) * 6.0);
        col = uBase * (0.85 + 0.25 * rip) * (0.65 + 0.8 * exp(-r * 0.08));
        vec3 v = voronoi(p * 0.55 + vec2(uTime * 0.11, uTime * 0.07));
        float caust = pow(1.0 - smoothstep(0.0, 0.22, v.y - v.x), 3.0);
        // Second réseau de caustiques, croisé : seulement hors Économie.
        if (uQuality > 0) { vec3 w = voronoi(p * 0.75 - vec2(uTime * 0.08, -uTime * 0.05)); caust += pow(1.0 - smoothstep(0.0, 0.2, w.y - w.x), 3.0) * 0.7; }
        col += uLine * caust * 0.14 * (0.35 + fade);
        float mosaic = band(r, R + 0.3, R + 3.2, 0.03);
        vec2 tq = vec2(a * (R + 1.5) / 0.45, r / 0.45);
        float tess = 1.0 - max(lineAA(tq.x, 1.0), lineAA(tq.y, 1.0)) * 0.7;
        vec3 tile = mix(vec3(0.05, 0.22, 0.24), vec3(0.62, 0.66, 0.6), step(0.6, hash12(floor(tq)))) * (0.6 + 0.4 * hash12(floor(tq) + 3.0));
        col = mix(col, (tile * 0.35 + uLine * caust * 0.2) * tess, mosaic);
        gloss *= mosaic * 0.6 + (1.0 - mosaic) * 0.2;
        rings = false;
      #endif
        // Flaques de lumière sous les lampes, les foyers, les fenêtres.
        for (int i = 0; i < POOLS; i++) {
          vec4 pl = uPools[i];
          float dd = length(p - pl.xy) / pl.z;
          col += uPoolColors[i] * pl.w * exp(-dd * dd * 2.2);
        }
        // Anneaux, rayons, bord lumineux et onde de balayage du plateau holographique.
        if (rings) {
          col += uLine * lineAA(r * 0.5, 1.4) * inside * 0.14;
          col += uLine * lineAA(a / 6.2831853 * 24.0, 1.2) * inside * smoothstep(1.0, 3.0, r) * 0.05;
          col += uLine * ringAA(r, R, 2.4) * 1.4 + uLine * ringAA(r, R + 0.35, 1.2) * 0.5;
          float scan = mod(uTime * 2.2, 28.0);
          col += uLine * smoothstep(1.2, 0.0, abs(r - scan)) * 0.07 * inside;
        }
        float fog = 1.0 - exp(-vDepth * vDepth * uFogDensity * uFogDensity);
        col = mix(col, uFogColor, fog);
        // Reflet : plus fort en vue rasante, nul au bord du disque (le ciel prend le relais).
        vec3 view = normalize(cameraPosition - vWorld);
        float fresnel = 0.18 + 0.82 * pow(1.0 - clamp(view.y, 0.0, 1.0), 4.0);
        float refl = clamp(gloss * fresnel, 0.0, 0.92) * (1.0 - fog * 0.7);
        float edgeFade = smoothstep(60.0, 69.0, r);
        refl = mix(refl, 1.0, edgeFade);
        gl_FragColor = vec4(col * (1.0 - edgeFade) * (1.0 - refl * 0.35), 1.0 - refl);
        #include <colorspace_fragment>
      }`})}function Eg(e){let{count:t,area:n}=e,r=new Float32Array(t*4);for(let e=0;e<r.length;e++)r[e]=Math.random();let i=new qo;i.setAttribute(`position`,new Mo(new Float32Array(t*3),3)),i.setAttribute(`aSeed`,new Mo(r,4));let a={rise:0,fall:1,float:2,swirl:3}[e.kind],o=new Qs(i,new Kl({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:{value:0},uColor:{value:new Q(e.color)},uSize:{value:e.size},uArea:{value:new Z(...n)},uSpeed:{value:e.speed??1},uKind:{value:a},uOpacity:{value:e.opacity??1},uScale:{value:300}},vertexShader:`
      attribute vec4 aSeed;
      uniform float uTime, uSize, uSpeed, uScale; uniform vec3 uArea; uniform int uKind;
      varying float vAlpha; varying float vSpin;
      void main() {
        float t = uTime * uSpeed * (0.4 + aSeed.w * 0.6);
        float life = fract(t * 0.05 + aSeed.y);
        float angle = aSeed.x * 6.2831853, radius = mix(0.35, 1.0, sqrt(aSeed.z)) * uArea.x;
        vec3 p = vec3(cos(angle) * radius, 0.0, sin(angle) * radius);
        if (uKind == 0) p.y = life * uArea.y;                       // monte
        else if (uKind == 1) p.y = (1.0 - life) * uArea.y;          // tombe
        else p.y = (0.15 + aSeed.y * 0.85) * uArea.y + sin(t * 0.7 + aSeed.x * 20.0) * 0.4;
        if (uKind == 3) { float s = t * 0.06 + aSeed.x * 6.28; p.xz = vec2(cos(s), sin(s)) * radius; }
        p.x += sin(t * 0.5 + aSeed.z * 30.0) * uArea.z;
        p.z += cos(t * 0.4 + aSeed.x * 30.0) * uArea.z;
        vAlpha = (uKind < 2 ? sin(life * 3.14159) : 0.6 + 0.4 * sin(t + aSeed.z * 10.0)) * (0.4 + 0.6 * aSeed.w);
        // Rien de gros ni de brillant juste devant l'objectif.
        vec4 world = modelMatrix * vec4(p, 1.0);
        vAlpha *= smoothstep(2.0, 6.0, distance(world.xyz, cameraPosition));
        vSpin = t + aSeed.x * 6.28;
        vec4 mv = viewMatrix * world;
        gl_PointSize = min(uSize * (0.5 + aSeed.w) * uScale / -mv.z, 64.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uColor; uniform float uOpacity; uniform int uKind;
      varying float vAlpha; varying float vSpin;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float a;
        if (uKind == 1) {   // pétale : ellipse qui tourne
          vec2 q = mat2(cos(vSpin), -sin(vSpin), sin(vSpin), cos(vSpin)) * c;
          a = smoothstep(0.5, 0.35, length(q * vec2(1.0, 2.2)));
        } else a = smoothstep(0.5, 0.0, length(c));
        a *= vAlpha * uOpacity;
        if (a < 0.01) discard;
        gl_FragColor = vec4(uColor * a * 1.6, 1.0);
      }`}));return o.frustumCulled=!1,e.minQuality&&(o.userData.minQuality=e.minQuality),o}var Dg=Math.PI*2,Og=-Math.PI/2,kg=(e,t=.9)=>Math.abs(Math.atan2(Math.sin(e-Math.PI/2),Math.cos(e-Math.PI/2)))<t,Ag=(e,t)=>({x:Math.cos(e)*t,z:Math.sin(e)*t}),jg=(e,t,n,r,i,a={})=>({x:Math.cos(e)*(t-i)-Math.sin(e)*n,y:r,z:Math.sin(e)*(t-i)+Math.cos(e)*n,ry:fg(e),...a}),Mg=(e,t,n)=>`#`+new Q().setHSL((e%1+1)%1,t,n).getHexString(),Ng=(e,t={})=>({key:[`#ffffff`,2.2],rim:[e.accent,2.2],fill:[e.warm,1.3],hemi:[e.accent,e.floor,.42],...t});function Pg(e,t,n,r,i,a){let o=n[0]-t[0],s=n[1]-t[1],c=n[2]-t[2],l=Math.hypot(o,s,c),u=Math.atan2(o,c)-Math.PI/2,d=Math.atan2(Math.hypot(o,c),-s);e.beamPlane(r,l,i,{x:(t[0]+n[0])/2,y:(t[1]+n[1])/2,z:(t[2]+n[2])/2,ry:u,rz:-d},{opacity:a})}var Fg={aurora:{fog:.016,exposure:1.05,bloom:{threshold:.62,intensity:1.15},gloss:.45,reflect:.4,mirror:.45,rim:`#52eff2`,rimStrength:.35,drift:[{kind:`fall`,color:`#d9f6ff`,count:160,size:.07,area:[24,14,1],speed:.35,opacity:.8},{kind:`float`,color:`#8ff6ff`,count:90,size:.09,area:[22,9,.6],minQuality:1}],spark:`shard`,rig:e=>Ng(e,{key:[`#e8f6ff`,2.2],fill:[`#ffc46b`,1.1]}),build:(e,t,n,r)=>{let i=`#12455c`,a=`#2b8aa3`,o=`#0a2735`,s=(r,s,c,l,u=.18)=>{for(let t=0;t<l;t++){let o=c*(t===0?1:.3+n()*.5),l=o*(.12+n()*.06),d=t?(n()-.5)*c*.5:0,f=t?(n()-.5)*c*.5:0,p=t?.25+n()*.45:n()*.12,m=Math.atan2(f,d)||n()*Dg;e.prism(l,o,t%3==2?a:i,{x:r+d,y:-o*.04,z:s+f,ry:n()*Dg,rx:Math.sin(m)*p,rz:-Math.cos(m)*p},{rough:.1,metal:.3,glow:u*(.6+n()*.8)})}e.fine(()=>e.glowCyl(c*.03,c*.012,c*.75,4,t.accent,{x:r,y:c*.36,z:s},{intensity:1.3,pulse:.5,phase:n()*6})),e.rock(c*.22,Math.floor(n()*6),o,{x:r,y:0,z:s,sy:.35},{rough:.3,metal:.2})};for(let e=0;e<12;e++){let t=Og+(e/11-.5)*4.4+(n()-.5)*.2;if(kg(t,.95))continue;let r=Ag(t,12.5+n()*6);s(r.x,r.z,1.3+n()*1.6,4+Math.floor(n()*3))}for(let t=0;t<26;t++){let r=n()*Dg,i=10.5+n()*12;if(kg(r,.8))continue;let a=Ag(r,i);e.rock(.6+n()*1.2,t,t%4?o:`#163e4e`,{x:a.x,y:.02,z:a.z,sy:.18+n()*.12,ry:n()*Dg},{rough:.18,metal:.25,jag:.35})}for(let e=0;e<14;e++){let t=Og+(e/13-.5)*4.9+(n()-.5)*.15;if(kg(t,.75))continue;let r=Ag(t,22+n()*7);s(r.x,r.z,3.5+n()*4.5,5+Math.floor(n()*3),.22)}e.around(7,17.5,(r,i,a,o)=>{if(!kg(i,1)){e.rock(.9,r+2,`#0d1d26`,{x:a,y:.25,z:o,sy:.6},{rough:.6,jag:.4});for(let t=0;t<4;t++)e.octa(.14+n()*.16,`#e0aa4e`,{x:a+(n()-.5)*.9,y:.55+n()*.35,z:o+(n()-.5)*.9,ry:n()*3,rx:n()},{rough:.2,metal:1,glow:.12});e.fine(()=>e.glowSphere(.09,t.warm,{x:a,y:.75,z:o},{intensity:2.6,pulse:.9,phase:r}))}},.4);for(let t of[-1,1])e.prism(1.9,21,i,{x:t*8,y:-.5,z:-30,rz:t*.22,ry:.3},{rough:.08,metal:.35,glow:.3}),e.prism(1.1,13,a,{x:t*10.5,y:-.4,z:-28.5,rz:t*.35,ry:1.1},{rough:.08,metal:.35,glow:.25}),e.prism(.8,8,i,{x:t*5.8,y:-.3,z:-28,rz:t*.12,ry:2.3},{rough:.1,metal:.3,glow:.3}),s(t*12.5,-27,5,6,.25);e.prism(1.4,15,a,{x:0,y:-.3,z:-33,ry:.4},{rough:.06,metal:.4,glow:.35}),e.glowCyl(.12,.04,13,4,t.accent,{x:0,y:6.5,z:-33},{intensity:2.2,pulse:.35});let c=[`#3dffc8`,t.accent,`#9b6bff`];for(let t=0;t<7;t++){let r=(t/6-.5)*11;e.beamPlane(2.2+n()*1.5,14+n()*5,c[t%3],{x:r,y:7.5+n()*2,z:-30.5+(n()-.5)*1.5,ry:(n()-.5)*.4},{opacity:.16+n()*.08,from:`bottom`})}r.pool(0,-25,9,t.accent,.3);for(let[r,o,s,c]of[[-11,6.5,-18,0],[12,7.5,-20,2.1]]){let l=e.animated({x:r,y:o,z:s},{bob:{amount:.45,speed:.45,phase:c},spin:{axis:[0,1,0],speed:.06}});for(let e=0;e<6;e++){let t=.8+n()*1.8;l.prism(t*.18,t,e%2?i:a,{x:(n()-.5)*3.5,y:(n()-.5)*2-t/2,z:(n()-.5)*3.5,rx:(n()-.5)*.8,rz:(n()-.5)*.8},{rough:.08,metal:.35,glow:.35})}l.glowSphere(.12,t.warm,{},{intensity:2.4,pulse:1.1})}e.fine(()=>{for(let n of[Og-.9,Og-.35,Og+.4,Og+1]){let r=Ag(n,21);e.beam(.5,2.6,22,t.accent,{x:r.x,y:11,z:r.z},{opacity:.09})}}),r.pool(-12,-16,6,t.accent,.16),r.pool(13,-15,6,t.accent,.16),r.pool(-6,-13,3,t.warm,.1),r.pool(8,-14,3,t.warm,.1)}},ember:{fog:.019,exposure:1,bloom:{threshold:.58,intensity:1.35},gloss:.3,reflect:.45,mirror:.6,rim:`#ff7a3a`,rimStrength:.4,drift:[{kind:`rise`,color:`#ff7a2e`,count:200,size:.08,area:[20,14,1.2],speed:1.4},{kind:`float`,color:`#7a6a66`,count:70,size:.12,area:[22,10,1.4],speed:.4,opacity:.35,minQuality:1}],spark:`shard`,rig:e=>Ng(e,{key:[`#ffe2cc`,1.9],rim:[`#ff6a2a`,2.8],fill:[`#ffb36b`,1.2],hemi:[`#ff9565`,`#0c0608`,.38]}),build:(e,t,n,r)=>{let i=`#1a1210`,a=`#231714`,o=`#20160f`,s=`#c0703c`,c=`#ff5a14`,l=`#ffb45a`,u=(t,r,o,s,l=.55)=>{let u=l*1.78,d=n()*Dg;for(let f=-6;f<=6;f++)for(let p=-6;p<=6;p++){let m=(f+p%2*.5)*u,h=p*u*.87,g=Math.hypot(m,h);if(g>o||n()<.12)continue;let _=t+m*Math.cos(d)-h*Math.sin(d),v=r+m*Math.sin(d)+h*Math.cos(d),y=Math.max(.25,s*(1-g/(o*1.15))*(.55+n()*.6));e.cyl(l,l*1.04,y,6,n()<.5?i:a,{x:_,y:y/2,z:v,ry:d+Math.PI/6},{rough:.85}),n()<.16&&e.cyl(l*.8,l*.8,.05,6,c,{x:_,y:y+.02,z:v,ry:d+Math.PI/6},{rough:.6,glow:1.6})}};for(let e=0;e<9;e++){let t=Og+(e/8-.5)*4.6+(n()-.5)*.25;if(kg(t,.95))continue;let r=Ag(t,14+n()*4);u(r.x,r.z,1.6+n()*1.2,1.2+n()*2.2)}for(let e=0;e<11;e++){let t=Og+(e/10-.5)*5+(n()-.5)*.2;if(kg(t,.75))continue;let r=Ag(t,22+n()*8);u(r.x,r.z,2.6+n()*2,4+n()*6,.7)}e.box(17,1.2,8,i,{x:0,y:.6,z:-27},{rough:.9}),e.box(12,10,6,o,{x:0,y:6,z:-27.5},{rough:.7,metal:.4});for(let t of[-1,1]){e.box(2.4,12,7,a,{x:t*6.6,y:6,z:-27.3,rz:t*.05},{rough:.85}),e.box(1.4,5,1.4,i,{x:t*3.4,y:3.7,z:-24.2},{rough:.85});for(let n=0;n<4;n++)e.box(2.6,.18,7.2,s,{x:t*6.6,y:2+n*3,z:-27.3},{rough:.3,metal:.95})}e.torus(3.4,.7,8,24,Math.PI,i,{x:0,y:6.2,z:-24.2},{rough:.85}),e.fine(()=>{e.torus(3.4,.08,6,32,Math.PI,s,{x:0,y:6.2,z:-23.45},{rough:.3,metal:1});for(let t=0;t<9;t++){let n=t/8*Math.PI;e.box(.5,.9,.8,a,{x:Math.cos(n)*3.4,y:6.2+Math.sin(n)*3.4,z:-23.9,rz:n-Math.PI/2},{rough:.8})}}),e.box(6.2,9.5,.4,`#0a0504`,{x:0,y:4.8,z:-25.7},{rough:1}),e.glowBox(5.6,4.8,.1,`#ff3c0a`,{x:0,y:3.5,z:-25.45},{intensity:1.3,pulse:.6}),e.glowShape(`half-disc`,()=>new oc(3,28,0,Math.PI),`#ff5a14`,{x:0,y:5.9,z:-25.44},{intensity:1.1,pulse:.5,phase:1}),e.glowBox(3.8,2.4,.1,l,{x:0,y:2.3,z:-25.38},{intensity:2,pulse:1.4}),e.box(6.6,.6,2.2,a,{x:0,y:1,z:-24.6},{rough:.8});for(let t=0;t<16;t++)e.glowSphere(.14+n()*.12,t%3?c:l,{x:(n()-.5)*5,y:1.35,z:-25+n()*.8,sy:.6},{intensity:2.2,pulse:1+n()*2,phase:n()*6});for(let t=0;t<5;t++)e.glowShape(`flame`,()=>new cc(.35,1,6),t%2?`#ff7a2a`:l,{x:(t-2)*1.1,y:2.4,z:-25.1,sy:1.6+n()*1.2},{intensity:2.2,pulse:3+t,phase:t});for(let t=0;t<9;t++)e.strut([(t-4)*.7,1.3,-23.75],[(t-4)*.7,5.8-Math.abs(t-4)*.25,-23.75],.06,6,`#120c09`,{rough:.5,metal:.8});e.strut([-3,3.4,-23.75],[3,3.4,-23.75],.07,6,`#120c09`,{rough:.5,metal:.8}),e.cyl(2.6,4.5,3,8,o,{x:0,y:12.5,z:-27.5},{rough:.6,metal:.5}),e.cyl(2,2.6,15,12,a,{x:0,y:21.5,z:-27.5},{rough:.8});for(let t=0;t<5;t++)e.torus(2.45-t*.1,.16,6,28,Dg,s,{x:0,y:15+t*3,z:-27.5,rx:Math.PI/2},{rough:.3,metal:1});e.glowTorus(2,.12,6,28,Dg,c,{x:0,y:29,z:-27.5,rx:Math.PI/2},{intensity:2.2,pulse:.7}),e.fine(()=>e.beam(1.5,2.8,12,`#ff7a2a`,{x:0,y:6.5,z:-24.5},{opacity:.08,from:`bottom`})),r.pool(0,-20.5,8,`#ff5a14`,.65),e.fine(()=>{let t=6.8,n=-19.5;e.cyl(.55,.75,1.1,8,`#2a1d17`,{x:t,y:.55,z:n},{rough:.9}),e.box(1.5,.45,.6,`#3a3634`,{x:t,y:1.3,z:n},{rough:.35,metal:.9}),e.cone(.3,.9,6,`#3a3634`,{x:7.9,y:1.38,z:n,rz:Math.PI/2,sx:.6},{rough:.35,metal:.9}),e.glowBox(.7,.14,.24,l,{x:6.7,y:1.6,z:n},{intensity:2.2,pulse:.8}),e.strut([6,1.56,-19.45],[4.699999999999999,.1,-18.9],.035,5,`#141010`,{metal:.9,rough:.4})});for(let[t,r,a]of[[-13.5,-12,2.4],[14.5,-9.5,1.9],[-6,-20.5,1.5]]){e.glowShape(`lava-disc`,()=>new oc(1,28).rotateX(-Math.PI/2),c,{x:t,y:.03,z:r,s:a},{intensity:1.4,pulse:.4,phase:t}),e.glowShape(`lava-disc`,()=>new oc(1,28).rotateX(-Math.PI/2),l,{x:t,y:.035,z:r,s:a*.45},{intensity:1.6,pulse:.7,phase:r});for(let o=0;o<9;o++){let s=o/9*Dg+n()*.4;e.rock(.35+n()*.35,o,i,{x:t+Math.cos(s)*a*(1.05+n()*.2),y:.08,z:r+Math.sin(s)*a*(1.05+n()*.2),sy:.5},{rough:.9,jag:.4})}}r.pool(-13.5,-12,4.5,c,.45),r.pool(14.5,-9.5,4,c,.4);for(let t of[Og-.55,Og+.55,Og-1.45,Og+1.45]){let{x:n,z:r}=Ag(t,12.5);for(let t=0;t<3;t++){let i=t/3*Dg;e.strut([n+Math.cos(i)*.75,0,r+Math.sin(i)*.75],[n+Math.cos(i)*.38,1.6,r+Math.sin(i)*.38],.05,6,s,{rough:.3,metal:.95})}e.cyl(.85,.45,.55,16,s,{x:n,y:1.75,z:r},{rough:.3,metal:.95,open:!0}),e.torus(.85,.06,6,24,Dg,s,{x:n,y:2.02,z:r,rx:Math.PI/2},{rough:.3,metal:.95}),e.glowSphere(.72,c,{x:n,y:1.95,z:r,sy:.25},{intensity:2.4,pulse:1.1,phase:t});for(let i=0;i<3;i++)e.glowShape(`flame`,()=>new cc(.35,1,6),i===1?l:`#ff8a3d`,{x:n+(i-1)*.25,y:2.5+(i===1?.15:0),z:r,sx:.7,sz:.7,sy:.9+(i===1?.5:0)},{intensity:2.4,pulse:3+i,phase:t+i});e.fine(()=>e.beam(.5,.9,5,`#ff7a2a`,{x:n,y:4.6,z:r},{opacity:.07,from:`bottom`}))}r.pool(-6.8,-10.5,3.2,`#ff7a2a`,.3),r.pool(6.8,-10.5,3.2,`#ff7a2a`,.3),e.fine(()=>{for(let t of[-1,1]){e.tube([[t*7.8,7,-26],[t*11,6.2,-24],[t*15,3,-19],[t*17.5,.6,-14],[t*18.5,.3,-10]],.22,8,s,{rough:.3,metal:1});for(let n of[.3,.55,.8])e.torus(.27,.05,6,12,Dg,`#7a4425`,{x:t*(7.8+n*10),y:7-n*6.4,z:-26+n*15,ry:t*.8,rx:.3},{rough:.4,metal:1})}})}},monolith:{fog:.013,exposure:1.1,bloom:{threshold:.66,intensity:.95},gloss:.5,reflect:.5,mirror:.5,rim:`#d2e4ff`,rimStrength:.3,drift:[{kind:`float`,color:`#c9d6ea`,count:110,size:.06,area:[22,14,.4],opacity:.6}],spark:`shard`,rig:e=>Ng(e,{key:[`#ffffff`,2.6],fill:[`#bcc9ec`,1.2]}),build:(e,t,n,r)=>{let i=`#2a2e35`,a=`#353a42`,o=`#0b0d10`,s=t.accent;for(let[t,n,r]of[[0,18.2,.35],[1,20.2,.75],[2,22.2,1.15]]){let o=34+t*4;e.around(o,n,(c,l,u,d)=>{if(kg(l,1.15))return;let f=2*n*Math.sin(Math.PI/o)+.04;e.box(f,r,2.05,c%2?i:a,{x:u,y:r/2,z:d,ry:fg(l)},{rough:.8}),e.glowBox(f,.035,.04,s,jg(l,n,0,r-.06,1.03),{intensity:t===0?1.2:.9})})}e.around(10,26.5,(t,n)=>{if(kg(n,.85))return;let r=t%2?9:12;for(let t of[-1,1])e.box(2.2,r,2.2,i,jg(n,26.5,t*3.6,r/2,0),{rough:.85}),e.glowBox(.1,r-1.2,.1,s,jg(n,26.5,t*3.6,r/2,1.12),{intensity:1.6});e.box(9.6,2.2,2.8,a,jg(n,26.5,0,r+1.1,0),{rough:.85}),e.glowBox(9.6,.06,.12,s,jg(n,26.5,0,r+.03,1.4),{intensity:1.4})},Math.PI/10),e.around(30,33,(t,n,r,i)=>{kg(n,1)||e.glowBox(.14,16,.14,t%5==0?`#ffffff`:s,{x:r,y:8,z:i,ry:fg(n)},{intensity:t%5==0?1.6:.8})});for(let t of[-1,1])e.box(4.2,24,4.2,i,{x:t*8.5,y:12,z:-34},{rough:.85}),e.glowBox(.14,22,.14,s,{x:t*6.35,y:11.5,z:-31.9},{intensity:1.4});e.box(21.2,4.4,5.4,a,{x:0,y:26.2,z:-34},{rough:.85}),e.box(13,24,1.2,o,{x:0,y:12,z:-35.6},{rough:.12,metal:.7}),e.glowBox(.9,22,.25,`#eef4ff`,{x:0,y:11.5,z:-34.9},{intensity:3}),e.fine(()=>{for(let t=-3;t<=3;t++)e.beamPlane(2.4,26,`#cfe0ff`,{x:t*.5,y:13,z:-34.6,rz:t*.13},{opacity:.07,from:`bottom`})}),r.pool(0,-27,9,`#cfe0ff`,.28);for(let[t,n,r,i]of[[-9.5,-16,5.2,0],[.5,-21.5,6.5,1.7],[10,-15.5,4.6,3.3]]){let a=e.animated({x:t,y:1.1,z:n,ry:Math.atan2(t,-n)*.6},{bob:{amount:.25,speed:.5,phase:i}});a.box(1.7,r,.5,o,{y:r/2},{rough:.06,metal:.8});for(let e of[-1,1])a.glowBox(.04,r,.04,s,{x:e*.86,y:r/2,z:.26},{intensity:1.8});a.glowBox(1.72,.04,.04,s,{y:r,z:.26},{intensity:1.8}),a.glowBox(1.4,.06,1.4,s,{y:-.95},{intensity:.6,pulse:.8,phase:i})}r.pool(-9.5,-16,2.5,s,.12),r.pool(10,-15.5,2.5,s,.12);for(let t of[Og-.78,Og+.78,Og-1.5,Og+1.5]){let{x:n,z:r}=Ag(t,14.5);e.box(1.3,1.4,1.3,a,{x:n,y:.7,z:r,ry:t},{rough:.7}),e.glowBox(1.32,.03,1.32,s,{x:n,y:1.36,z:r,ry:t},{intensity:1}),e.sphere(.72,32,20,`#e2e8f0`,{x:n,y:2.12,z:r},{rough:.04,metal:1})}for(let t of[Og-.55,Og,Og+.55]){let n=Ag(t,19.5);e.box(6.4,.3,2.8,`#16191e`,{x:n.x,y:11.15,z:n.z,ry:fg(t),rx:-.35},{rough:.5,metal:.6}),e.glowBox(6,.05,2.4,`#eaf2ff`,{x:n.x-Math.cos(t)*.05,y:10.95,z:n.z-Math.sin(t)*.05,ry:fg(t),rx:-.35},{intensity:1.5}),e.fine(()=>e.beam(2.2,4.2,11,`#dfe8ff`,{x:n.x*.93,y:5.4,z:n.z*.93},{opacity:.06}))}r.pool(0,-18,6,`#dfe8ff`,.16),r.pool(-9,-16,5,`#dfe8ff`,.1),r.pool(9,-16,5,`#dfe8ff`,.1)}},nebula:{fog:.012,exposure:1.05,bloom:{threshold:.6,intensity:1.2},gloss:.42,reflect:.6,mirror:.5,rim:`#bc91ff`,rimStrength:.4,drift:[{kind:`swirl`,color:`#c49bff`,count:170,size:.09,area:[24,14,.8]},{kind:`float`,color:`#84eaff`,count:80,size:.06,area:[26,16,.4],minQuality:1}],spark:`round`,rig:e=>Ng(e,{key:[`#f0e8ff`,2.1]}),build:(e,t,n,r)=>{let i=`#1a1530`,a=`#272042`,o=t.warm;e.around(28,17.5,(n,r,i,a)=>{e.box(3.7,.3,3.4,`#221b3a`,{x:i,y:.15,z:a,ry:fg(r)},{rough:.35,metal:.75});let s=Ag(r+Math.PI/28,17.5);e.glowBox(.05,.02,3.2,n%2?t.accent:o,{x:s.x,y:.31,z:s.z,ry:fg(r+Math.PI/28)},{intensity:1.5})});for(let r of[Og-.5,Og+.5,Og-1.2,Og+1.2,Og]){let s=r===Og?15:14;e.box(2.8,1,1.2,a,jg(r,s,0,.5,0),{rough:.35,metal:.8}),e.box(2.8,.1,1.3,i,jg(r,s,0,1.05,.1,{rx:-.35}),{rough:.3,metal:.8}),e.glowBox(2.4,.04,.5,t.accent,jg(r,s,0,1.12,.15,{rx:-.35}),{intensity:1.1}),e.glassBox(2.6,1.5,.03,o,jg(r,s,0,2.3,-.2,{rx:.1}),{opacity:.35}),e.fine(()=>{for(let i=0;i<5;i++)e.glowBox(.4+n()*1.4,.05,.02,i%2?o:t.accent,jg(r,s,(n()-.5)*.8,1.8+i*.22,-.18,{rx:.1}),{intensity:1.4,pulse:.6+n(),phase:n()*6})})}r.pool(0,-14,4,o,.14),e.around(16,31,(n,r,a,s)=>{if(kg(r,.9))return;let c=Ag(r,24.5);e.box(1.1,12,1.5,i,{x:a,y:6,z:s,ry:fg(r)},{rough:.35,metal:.85}),e.strut([a,11.6,s],[c.x,17.5,c.z],.5,6,i,{rough:.35,metal:.85}),e.glowBox(.06,11,.06,n%2?t.accent:o,jg(r,31,0,6,.78),{intensity:1.4}),e.fine(()=>e.glowStrut([a-Math.cos(r)*.55,12,s-Math.sin(r)*.55],[c.x-Math.cos(r)*.5,17.6,c.z-Math.sin(r)*.5],.04,t.accent,{intensity:1.2}))}),e.around(32,31,(n,r,i,o)=>{kg(r,1)||(e.box(6.2,.6,1.6,a,{x:i,y:.3,z:o,ry:fg(r)},{rough:.4,metal:.8}),n%2&&e.glowBox(6,.05,.05,t.accent,jg(r,31,0,.62,.8),{intensity:1.2}))});for(let[t,n]of[Og-.95,Og-.3,Og+.35,Og+1].entries()){let{x:r,z:s}=Ag(n,25.5),c=9+t%2*4;e.cyl(.25,.75,c,8,a,{x:r,y:c/2,z:s},{rough:.35,metal:.85}),e.torus(.6,.08,6,16,Dg,i,{x:r,y:c*.4,z:s,rx:Math.PI/2},{rough:.4,metal:.9}),e.glowSphere(.22,t%2?`#ff4f9a`:o,{x:r,y:c+.15,z:s},{intensity:3,pulse:2.2,phase:t})}let s=-11.5;e.cyl(1,1.3,.8,16,a,{x:s,y:.4,z:-13},{rough:.3,metal:.85}),e.glowTorus(.85,.05,6,32,Dg,t.accent,{x:s,y:.82,z:-13,rx:Math.PI/2},{intensity:2}),e.beam(1.6,.5,4.2,t.accent,{x:s,y:2.9,z:-13},{opacity:.16,from:`bottom`}),e.glassSphere(1.4,t.accent,{x:s,y:5.4,z:-13},{opacity:.45}),e.glowSphere(.5,`#e7d8ff`,{x:s,y:5.4,z:-13},{intensity:1.4,pulse:.5});let c=e.animated({x:s,y:5.4,z:-13,rx:.45,rz:.2},{spin:{axis:[0,1,0],speed:.25}});c.glowTorus(2.2,.03,4,64,Dg,o,{rx:Math.PI/2},{intensity:1.6}),c.glowTorus(2.6,.02,4,64,Dg,t.accent,{rx:Math.PI/2},{intensity:1.2}),c.glowSphere(.16,o,{x:2.2},{intensity:2.6}),r.pool(s,-13,3.5,t.accent,.3);for(let t of[-1,1])e.strut([t*4,0,-40],[t*6.2,3.5999999999999996,-42],.7,6,i,{rough:.4,metal:.85}),e.box(3,1.4,4,a,{x:t*4,y:.7,z:-40},{rough:.4,metal:.8});let l=e.animated({x:0,y:10,z:-42},{spin:{axis:[0,0,1],speed:.05}});l.torus(9,.9,10,72,Dg,i,{},{rough:.3,metal:.85}),l.glowTorus(8,.08,4,96,Dg,t.accent,{},{intensity:2});for(let e=0;e<9;e++){let t=e/9*Dg;l.box(1.4,1,2.2,a,{x:Math.cos(t)*9,y:Math.sin(t)*9,rz:t},{rough:.3,metal:.9}),l.glowBox(.5,.5,.1,o,{x:Math.cos(t)*9.15,y:Math.sin(t)*9.15,z:1.12,rz:t+Math.PI/4},{intensity:2.4,pulse:1.2,phase:e})}e.glassShape(`gate-disc`,()=>new oc(7.8,48),`#b98cff`,{x:0,y:10,z:-42.2},{opacity:.22}),e.fine(()=>e.beamPlane(9,22,`#c9a6ff`,{x:0,y:9,z:-41.5},{opacity:.08}));let u=e.animated({x:0,y:0,z:0},{bob:{amount:.6,speed:.25}});for(let e=0;e<10;e++){let t=Og+(n()-.5)*2.6,r=24+n()*12;if(kg(t,1.2))continue;let i=Ag(t,r);u.rock(.6+n()*1.6,e,`#2a2338`,{x:i.x,y:6+n()*9,z:i.z,ry:n()*Dg,rx:n()},{rough:.85,jag:.4})}}},jade:{fog:.02,exposure:1.05,bloom:{threshold:.62,intensity:1.1},gloss:.72,reflect:.7,mirror:.6,rim:`#76e9b1`,rimStrength:.3,drift:[{kind:`float`,color:`#d7ff8a`,count:90,size:.11,area:[22,6,1.6],speed:.6}],spark:`round`,rig:e=>Ng(e,{key:[`#fff6e2`,2.1],fill:[`#e9c384`,1.3]}),build:(e,t,n,r)=>{let i=`#2d8a60`,a=`#9a7438`,o=`#4b5a50`,s=`#ffcf7a`,c=[];for(let t=0;t<9;t++){let n=-Math.PI+.42+t/8*(Math.PI-.84),r=Ag(n,18);c.push({...r,a:n}),e.box(1.4,.6,1.4,a,{x:r.x,y:.3,z:r.z,ry:fg(n)},{rough:.4,metal:.9}),e.cyl(.42,.5,7,16,i,{x:r.x,y:4.1,z:r.z},{rough:.22,glow:.05}),e.torus(.47,.07,6,20,Dg,a,{x:r.x,y:1.3,z:r.z,rx:Math.PI/2},{rough:.35,metal:.9}),e.box(1.3,.5,1.3,a,{x:r.x,y:7.85,z:r.z,ry:fg(n)},{rough:.4,metal:.9})}c.forEach((t,n)=>{if(n===c.length-1)return;let r=c[n+1],i=(t.x+r.x)/2,o=(t.z+r.z)/2,l=Math.hypot(r.x-t.x,r.z-t.z),u=-Math.atan2(r.z-t.z,r.x-t.x);e.box(l,.5,.55,`#14402d`,{x:i,y:8.35,z:o,ry:u},{rough:.5}),e.box(l+.8,.3,3.4,`#0f2a1f`,{x:i*1.02,y:8.95,z:o*1.02,ry:u,rx:0},{rough:.6}),e.box(l+.8,.12,.25,a,{x:i*.93,y:8.85,z:o*.93,ry:u},{rough:.35,metal:.9}),e.strut([i,8.1,o],[i,6.9,o],.02,4,a,{metal:.9,rough:.4}),e.cone(.48,.35,8,a,{x:i,y:6.75,z:o},{metal:.9,rough:.35}),e.glowCyl(.26,.3,.6,8,s,{x:i,y:6.25,z:o},{intensity:2,pulse:.8,phase:n}),e.fine(()=>e.cyl(.33,.37,.7,8,a,{x:i,y:6.25,z:o},{metal:.9,rough:.35,open:!0}))});for(let t of c)e.cone(.25,1.3,6,a,{x:t.x*1.08,y:9.35,z:t.z*1.08,rx:Math.sin(t.a)*.9,rz:-Math.cos(t.a)*.9},{rough:.35,metal:.9});e.torus(4.4,.95,10,48,Dg,i,{x:0,y:5,z:-27},{rough:.25,glow:.06}),e.torus(3.5,.09,6,48,Dg,a,{x:0,y:5,z:-26.4},{rough:.3,metal:1}),e.glowTorus(3.42,.03,4,64,Dg,t.accent,{x:0,y:5,z:-26.35},{intensity:1.6});for(let t of[-1,1])e.box(9,6,1.2,`#1b3b2c`,{x:t*9.6,y:3,z:-26.8},{rough:.8}),e.box(9.8,.4,2,`#0f2a1f`,{x:t*9.6,y:6.2,z:-26.8},{rough:.6}),e.fine(()=>{for(let n=0;n<3;n++)e.glowShape(`lattice`,()=>new jl(.62,.7,6),s,{x:t*(7+n*2.6),y:3.4,z:-26.18},{intensity:1.3})});e.box(2.6,.5,2.6,o,{x:0,y:.25,z:-25},{rough:.85}),r.pool(0,-22,7,s,.22);for(let[t,r,i]of[[-17,-14,14],[16.5,-17,13],[-23,-2,9]]){let a=e.animated({x:t,y:0,z:r},{sway:{amount:.025,speed:.55}});for(let e=0;e<i;e++){let t=(n()-.5)*4.2,r=(n()-.5)*4.2,i=6+n()*5,o=.09+n()*.05,s=(n()-.5)*.12;a.cyl(o,o*1.1,i,6,e%3?`#3f7a3a`:`#557f3a`,{x:t,y:i/2,z:r,rz:s},{rough:.5}),a.fine(()=>{for(let e=1;e<5;e++)a.cyl(o*1.25,o*1.25,.06,6,`#6c9446`,{x:t-s*i*(e/5-.5),y:i*e/5,z:r},{rough:.5});for(let e=0;e<4;e++)a.cone(.14,.9,3,`#2f6b32`,{x:t-s*i*.5+(n()-.5)*.8,y:i*(.7+n()*.3),z:r+(n()-.5)*.8,rx:n()*2-1,rz:n()*2-1,sz:.25},{rough:.6})})}}for(let[t,n,r]of[[-12,-11,3.4],[11.5,-12.5,2.6],[-5,-16,1.8],[14.5,-3.5,2.2]])e.rock(1,Math.floor(t*7)+3,`#2e3a33`,{x:t,y:r*.45,z:n,sy:r*.75,sx:.8,sz:.7,ry:t},{rough:.55,jag:.45}),e.rock(.6,Math.floor(n*5)+1,`#26302a`,{x:t+.6,y:r*.9,z:n+.2,sy:1.2,ry:n},{rough:.55,jag:.5});e.around(10,23,(t,n,r,i)=>{kg(n,.9)||(e.cyl(.7,.85,.5,8,o,{x:r,y:.25,z:i},{rough:.9}),e.cyl(.28,.32,1.8,8,o,{x:r,y:1.4,z:i},{rough:.9}),e.box(1.2,.9,1.2,o,{x:r,y:2.75,z:i,ry:n},{rough:.9}),e.glowBox(.7,.5,1.25,s,{x:r,y:2.75,z:i,ry:n},{intensity:2,pulse:.6,phase:t}),e.cone(1.15,.8,4,o,{x:r,y:3.6,z:i,ry:n+Math.PI/4},{rough:.9}),e.sphere(.18,8,6,o,{x:r,y:4.1,z:i},{rough:.9}))},.2);for(let t=0;t<36;t++){let r=n()*Dg,i=10+n()*13;if(kg(r,.55))continue;let{x:a,z:o}=Ag(r,i),s=.5+n()*.6;e.shape(`pad`,()=>new oc(1,14,.3,Dg-.3).rotateX(-Math.PI/2),t%3?`#245f36`:`#2f7a40`,{x:a,y:.03,z:o,s,ry:n()*Dg},{rough:.45}),t%3==0&&(e.glowShape(`lotus`,()=>new cc(.25,1,6,1,!0),t%2?`#ff7fb0`:`#ffa6c9`,{x:a,y:.22,z:o,sy:.4,s:1.1},{intensity:.85,pulse:.4,phase:t}),e.fine(()=>e.glowSphere(.07,`#fff2b0`,{x:a,y:.3,z:o},{intensity:2.2})))}r.pool(-12,-9,4,`#ff9ec4`,.08),r.pool(12,-10,4,s,.08)}},sakura:{fog:.018,exposure:1,bloom:{threshold:.66,intensity:.95},gloss:.35,reflect:.5,mirror:.45,rim:`#ffb0cc`,rimStrength:.3,drift:[{kind:`fall`,color:`#ffb7d0`,count:170,size:.22,area:[24,14,1.8],speed:.7,opacity:.85}],spark:`petal`,rig:e=>Ng(e,{key:[`#fff0ea`,2.2],rim:[`#ff9ec4`,1.8]}),build:(e,t,n,r)=>{let i=`#4a2a24`,a=`#2b1a1f`,o=`#c8412c`,s=`#2a1a17`,c=[];e.around(16,18,(e,t,n,r)=>c.push({x:n,z:r,a:t,keep:!kg(t,1.05)})),c.forEach((t,n)=>{if(!t.keep)return;e.box(.45,6.4,.45,i,{x:t.x,y:3.2,z:t.z,ry:fg(t.a)},{rough:.6});let r=c[(n+1)%16];if(!r.keep)return;let o=(t.x+r.x)/2,s=(t.z+r.z)/2,l=Math.hypot(r.x-t.x,r.z-t.z),u=-Math.atan2(r.z-t.z,r.x-t.x),d=t.a+Math.PI/16;e.box(l,.5,.6,i,{x:o,y:6.5,z:s,ry:u},{rough:.6}),e.box(l+.6,.2,2.8,a,{x:o*1.05,y:7.2,z:s*1.05,ry:u,rx:0},{rough:.7}),e.box(l+.4,.16,3.4,n%2?`#6b4234`:`#5d3a2e`,{x:o*1.02,y:.08,z:s*1.02,ry:u},{rough:.5});let f=-Math.cos(d),p=-Math.sin(d);if(e.glassBox(l-.5,4.8,.05,`#ffd9c2`,{x:o,y:3.1,z:s,ry:u},{opacity:.5}),e.glowBox(l-.5,4.8,.02,`#ffcfb4`,{x:o-f*.06,y:3.1,z:s-p*.06,ry:u},{intensity:.5}),e.fine(()=>{for(let n=1;n<4;n++)e.box(.06,4.8,.08,i,{x:o+(r.x-t.x)*(n/4-.5)+f*.06,y:3.1,z:s+(r.z-t.z)*(n/4-.5)+p*.06,ry:u},{rough:.6});for(let t=0;t<5;t++)e.box(l-.5,.06,.08,i,{x:o+f*.06,y:.7+t*1.2,z:s+p*.06,ry:u},{rough:.6})}),n%2==0){let t=o+f*1,r=s+p*1;e.strut([t,6.25,r],[t,5.35,r],.015,4,i),e.cyl(.2,.2,.1,10,i,{x:t,y:5.32,z:r}),e.glowSphere(.42,`#ffb0c4`,{x:t,y:4.75,z:r,sy:1.3},{intensity:1.7,pulse:.5,phase:n}),e.cyl(.2,.2,.1,10,i,{x:t,y:4.18,z:r})}});let l=(t,i,a,o)=>{let c=(n()-.5)*.8,l=[t+c,a,i+(n()-.5)*.6];e.tube([[t,-.2,i],[t+c*.2,a*.35,i],[t+c*.6,a*.7,i+.2],l],.42,8,s,{rough:.9});let u=[];for(let t=0;t<5;t++){let r=t/5*Dg+n()*.8,i=o*(.6+n()*.5),c=[l[0]+Math.cos(r)*i,a+.8+n()*1.8,l[2]+Math.sin(r)*i];e.tube([[l[0],a-.8,l[2]],[(l[0]+c[0])/2,a+.4,(l[2]+c[2])/2],c],.16,6,s,{rough:.9}),u.push(c)}for(let t of u){for(let r=0;r<3;r++){let i=1+n()*.9;e.sphere(i,10,7,r%2?`#f2a9c4`:`#e88ab0`,{x:t[0]+(n()-.5)*1.6,y:t[1]+(n()-.5)*.9,z:t[2]+(n()-.5)*1.6,sy:.75},{rough:.85,glow:.14})}e.fine(()=>e.sphere(.8,8,6,`#ffd3e2`,{x:t[0],y:t[1]+.8,z:t[2],sy:.7},{rough:.85,glow:.22}))}r.pool(t,i,o*1.8,`#ff8fb8`,.1)};l(-14.5,-23,5.5,2.6),l(15,-25,6,2.8),l(-26,-8,5,2.4),l(26.5,-9,5.2,2.4),e.fine(()=>l(-7,-34,6.5,3));for(let t of[-1,1])e.cyl(.42,.5,9,16,o,{x:t*4.2,y:4.5,z:-31},{rough:.45}),e.cyl(.62,.62,.7,16,`#1b1112`,{x:t*4.2,y:.35,z:-31},{rough:.6}),e.box(1.2,.6,1.2,`#3a2a26`,{x:t*6,y:.3,z:-29.4},{rough:.9}),e.glowBox(.6,.6,.6,`#ffb36b`,{x:t*6,y:1.2,z:-29.4},{intensity:1.8,pulse:.6,phase:t}),e.cone(.75,.5,4,`#3a2a26`,{x:t*6,y:1.75,z:-29.4,ry:Math.PI/4},{rough:.9});e.box(12.5,.55,1,`#1b1112`,{x:0,y:9.55,z:-31},{rough:.5});for(let t of[-1,1])e.box(1.6,.55,1,`#1b1112`,{x:t*6.8,y:9.7,z:-31,rz:t*.18},{rough:.5});e.box(11.2,.45,.8,o,{x:0,y:9,z:-31},{rough:.45}),e.box(10.2,.4,.5,o,{x:0,y:7.3,z:-31},{rough:.45}),e.box(.6,1.2,.3,`#1b1112`,{x:0,y:8.15,z:-30.8},{rough:.5});for(let t=0;t<8;t++){let n=-13.5-t*2.1;e.rock(.85,t,`#3d2c2f`,{x:Math.sin(t*1.3)*.7,y:.03,z:n,sy:.14,ry:t},{rough:.7,jag:.2})}r.pool(0,-28,6,`#ff9a6b`,.18),e.fine(()=>{for(let t=0;t<5;t++){let n=4.6-t*.7,r=1+t*2.6;e.box(n*.7,2.2,n*.7,`#3a1f1d`,{x:-21,y:r+1.1,z:-38},{rough:.7}),e.glowBox(n*.5,.6,n*.71,`#ffb070`,{x:-21,y:r+1.2,z:-38},{intensity:1,pulse:.4,phase:t}),e.cone(n*.85,.9,4,a,{x:-21,y:r+2.55,z:-38,ry:Math.PI/4},{rough:.6})}e.cyl(.08,.12,3.5,6,`#c8a160`,{x:-21,y:15.2,z:-38},{rough:.3,metal:1})})}},circuit:{fog:.016,exposure:1.05,bloom:{threshold:.6,intensity:1.2},gloss:.32,reflect:.45,mirror:.55,rim:`#d1ff64`,rimStrength:.3,drift:[{kind:`rise`,color:`#c6ff4a`,count:120,size:.05,area:[22,12,.2],speed:2}],spark:`shard`,rig:e=>Ng(e,{key:[`#f2ffe8`,2.1]}),build:(e,t,n,r)=>{let i=`#141c24`,a=`#b8c2c8`,o=(n,r,i,o,s)=>{e.box(i,.45,o,`#0c0f12`,{x:n,y:.28,z:r,ry:s},{rough:.35,metal:.2});let c=Math.cos(s),l=Math.sin(s),u=(e,t,i,a=.12)=>({x:n+e*c+t*l,y:a,z:r-e*l+t*c,ry:s+i});e.glowBox(i*.5,.01,.05,t.accent,u(0,o*.3,0,.51),{intensity:1.2}),e.fine(()=>{let t=Math.round(i/.45);for(let n=0;n<t;n++){let r=(n/(t-1)-.5)*(i-.5);for(let t of[-1,1])e.box(.14,.08,.5,a,u(r,t*(o/2+.2),0),{rough:.3,metal:1})}e.cyl(.12,.12,.02,12,`#2a3036`,u(-i*.32,-o*.3,0,.51),{rough:.6})})};o(-9.5,-9.5,3.4,3.4,.5),o(9.5,-11,4,2.6,-.35),o(-15,-1.5,2.6,2.6,.9),o(0,-15,3,3,0),o(16,-3,2.4,3.2,.2);for(let[r,i]of[[-5.5,-13],[5.5,-14.5],[-13,-6.5],[13,-7],[-3,-19],[12.5,-17]]){let a=1.2+n()*1.3,o=.5+n()*.3;e.cyl(o,o,a,16,`#1f4fa8`,{x:r,y:a/2,z:i},{rough:.3,metal:.6}),e.cyl(o*1.01,o*1.01,.18,16,`#c7d0d8`,{x:r,y:a-.05,z:i},{rough:.25,metal:1}),e.glowTorus(o*1.02,.03,4,24,Dg,t.accent,{x:r,y:.1,z:i,rx:Math.PI/2},{intensity:1.6}),e.fine(()=>e.box(o*1.3,.02,.06,`#5a646c`,{x:r,y:a+.04,z:i,ry:.6},{rough:.4,metal:1}))}e.fine(()=>{for(let[t,n,r]of[[-7,-17,.3],[7.5,-8,1.2],[-17,-10,2]]){e.cyl(.32,.32,1.6,12,`#c9b48a`,{x:t,y:.34,z:n,rz:Math.PI/2,ry:r},{rough:.5}),[`#7a3b1c`,`#111`,`#d4442a`,`#c9a24a`].forEach((i,a)=>e.cyl(.335,.335,.12,12,i,{x:t+Math.cos(r)*(a*.28-.42),y:.34,z:n-Math.sin(r)*(a*.28-.42),rz:Math.PI/2,ry:r},{rough:.5}));for(let i of[-1,1])e.strut([t+Math.cos(r)*i*.8,.34,n-Math.sin(r)*i*.8],[t+Math.cos(r)*i*1.5,.02,n-Math.sin(r)*i*1.5],.04,4,a,{metal:1,rough:.3})}}),e.around(12,23,(r,a)=>{if(!kg(a,.85)){for(let r of[-1,1]){e.box(2.5,7.2,1.6,`#0b1014`,jg(a,23,r*1.45,3.6,0),{rough:.4,metal:.7});for(let i=0;i<8;i++)for(let o=0;o<3;o++)e.glowBox(.22,.06,.03,n()<.6?t.accent:t.warm,jg(a,23,r*1.45+(o-1)*.6,.9+i*.75,.82),{intensity:2.2,pulse:n()<.35?2+n()*6:0,phase:n()*6});e.fine(()=>{for(let t=0;t<4;t++)e.box(2.1,.05,.05,`#1e2a33`,jg(a,23,r*1.45,.5+t*.09,.82),{rough:.5,metal:.6})})}e.box(.5,9,.6,i,jg(a,23,3.1,4.5,0),{rough:.35,metal:.8}),e.box(6.8,.6,2,i,jg(a,23,0,8.6,0),{rough:.35,metal:.8}),e.glowBox(6.4,.05,.05,t.accent,jg(a,23,0,8.3,1.02),{intensity:2})}},Math.PI/12),e.cyl(3.4,3.8,1.2,6,i,{x:0,y:.6,z:-30},{rough:.35,metal:.8}),e.cyl(2,2.4,18,6,`#0e151b`,{x:0,y:9.6,z:-30},{rough:.3,metal:.8}),e.glassCyl(2.6,2.6,17,6,t.accent,{x:0,y:9.7,z:-30},{opacity:.18});for(let n=0;n<6;n++){let r=n/6*Dg;e.glowBox(.07,17,.07,n%2?t.accent:t.warm,{x:Math.cos(r)*2.6,y:9.7,z:-30+Math.sin(r)*2.6},{intensity:2,flow:1.4,phase:n})}e.glowCyl(.5,.5,18,8,t.accent,{x:0,y:9.6,z:-30},{intensity:1.4,flow:2});for(let[n,r]of[[6,.35],[12.5,-.25]]){let a=e.animated({x:0,y:n,z:-30},{spin:{axis:[0,1,0],speed:r}});a.torus(4.2,.18,6,48,Dg,i,{rx:Math.PI/2},{rough:.3,metal:.9}),a.glowTorus(4.2,.05,4,64,Dg,t.accent,{rx:Math.PI/2,y:.2},{intensity:1.8}),a.around(6,4.2,(e,n,r,i)=>a.glowBox(.4,.4,.4,t.warm,{x:r,z:i},{intensity:2.2,pulse:2,phase:r}))}r.pool(0,-25,7,t.accent,.3);for(let n of[Og-1.05,Og-.55,Og+.55,Og+1.05,Og-1.6,Og+1.6]){let{x:r,z:a}=Ag(n,27);e.glassCyl(.6,.6,14,12,t.warm,{x:r,y:7,z:a},{opacity:.22,open:!0}),e.glowCyl(.16,.16,14,6,n>Og?t.warm:t.accent,{x:r,y:7,z:a},{intensity:1.8,flow:1.6,phase:n}),e.cyl(.9,1,.6,12,i,{x:r,y:.3,z:a},{rough:.35,metal:.8}),e.cyl(.9,.9,.5,12,i,{x:r,y:14.2,z:a},{rough:.35,metal:.8})}e.fine(()=>{for(let t=0;t<6;t++){let n=(t-2.5)*2.2;e.tube([[n*2.5,.12,-20],[n*1.6,.15,-23.5],[n*.5,.2,-26.5],[n*.25,.9,-26.8]],.12,6,`#0b0e11`,{rough:.55})}}),e.fine(()=>{for(let[n,r,i]of[[-8,4.5,-21],[-4.5,6.5,-24],[5,5.5,-22.5],[9,3.8,-19.5]])e.glowShape(`hex-frame`,()=>new jl(1,1.08,6),t.accent,{x:n,y:r,z:i,ry:Math.atan2(-n,-i)+Math.PI},{intensity:1.6,pulse:.7,phase:n}),e.glassShape(`hex-fill`,()=>new oc(1,6),t.accent,{x:n,y:r,z:i,ry:Math.atan2(-n,-i)+Math.PI},{opacity:.12})}),e.around(12,15.5,(n,r,i,a)=>{kg(r,.5)||e.glowBox(7,.03,.09,n%3?t.accent:t.warm,{x:i,y:.03,z:a,ry:-r},{intensity:1.3,pulse:1.4,phase:n})},Math.PI/12),r.pool(-9.5,-9.5,3,t.accent,.12),r.pool(9.5,-11,3,t.accent,.12)}},rainbow:{fog:.012,exposure:1.05,bloom:{threshold:.62,intensity:1.15},gloss:.6,reflect:.55,mirror:.55,rim:`#b2d1f5`,rimStrength:.35,drift:[{kind:`float`,color:`#e8f2ff`,count:100,size:.07,area:[22,12,.6]}],spark:`round`,rig:e=>Ng(e,{rim:[`#8be9fd`,1.8],fill:[`#f7b3ed`,1.4]}),build:(e,t,n,r)=>{let i=`#3a414e`,a=`#d5d9e0`;e.around(22,29,(t,n,r,a)=>{if(kg(n,.75))return;let o=fg(n);e.box(8.4,13,.8,`#1c212c`,{x:r,y:6.5,z:a,ry:o},{rough:.7}),e.box(8.4,.5,1.1,i,{x:r*.985,y:.25,z:a*.985,ry:o},{rough:.4,metal:.6}),e.box(8.4,.6,1.2,i,{x:r*.985,y:13,z:a*.985,ry:o},{rough:.4,metal:.6}),e.glowBox(8.4,.05,.05,Mg(t/22,.85,.6),jg(n,29,0,.55,.6),{intensity:1.6}),e.glowBox(8.4,.05,.05,Mg(t/22+.5,.85,.6),jg(n,29,0,12.6,.62),{intensity:1.2})}),e.around(12,22,(t,n)=>{if(kg(n,.7))return;let r=Mg(t/12,.8,.6);for(let t of[-1,1])e.box(.5,7.4,.5,a,jg(n,22,t*2.3,3.7,0),{rough:.12,metal:1}),e.glowBox(.08,6.8,.08,r,jg(n,22,t*2,3.6,0),{intensity:2.2});e.box(5.1,.5,.5,a,jg(n,22,0,7.6,0),{rough:.12,metal:1}),e.glowBox(4.1,.08,.08,r,jg(n,22,0,7.2,0),{intensity:2.2}),e.glassBox(4,7,.04,r,jg(n,22,0,3.6,0),{opacity:.12})},Math.PI/12);let o=4.4;e.box(3.2,2.6,3.2,`#13161c`,{x:0,y:1.3,z:-19},{rough:.15,metal:.3}),e.box(3.4,.12,3.4,a,{x:0,y:2.66,z:-19},{rough:.15,metal:1}),e.glassShape(`prism`,()=>new sc(1.25,1.25,1.6,3).rotateX(Math.PI/2).rotateZ(Math.PI/6),`#eaf4ff`,{x:0,y:o,z:-19},{opacity:.55});for(let t=0;t<3;t++){let n=Math.PI/2+t/3*Dg,r=n+Dg/3;for(let t of[-.8,.8])e.glowStrut([Math.cos(n)*1.25,o+Math.sin(n)*1.25,-19+t],[Math.cos(r)*1.25,o+Math.sin(r)*1.25,-19+t],.025,`#ffffff`,{intensity:1.6})}e.glowBox(.9,.5,.5,`#ffffff`,{x:-15,y:9.5,z:-19,rz:-.35},{intensity:2.4}),e.box(1.6,.9,.9,i,{x:-15.6,y:9.7,z:-19,rz:-.35},{rough:.3,metal:.8}),Pg(e,[-14.5,9.3,-19],[-.9,4.7,-19],.45,`#ffffff`,.5);for(let t=0;t<7;t++)Pg(e,[.7,4.25,-19],[6+t*1.15,.05,-17+t*.35],.55,Mg(t/7*.83,.95,.58),.42);r.pool(9.5,-16,5,`#ffffff`,.12),r.pool(0,-17,3.5,`#bfe6ff`,.12),e.around(7,16,(t,n,r,o)=>{kg(n,1)||Math.abs(r)<3&&o<0||(e.box(1.4,1.3,1.4,i,{x:r,y:.65,z:o,ry:n},{rough:.4,metal:.5}),e.glowBox(1.42,.04,1.42,Mg(t/7,.8,.6),{x:r,y:1.3,z:o,ry:n},{intensity:1.4}),t%2?e.shape(`knot`,()=>new Il(.55,.16,96,10),Mg(t/7+.05,.7,.55),{x:r,y:2.15,z:o,ry:n},{rough:.15,metal:1}):e.sphere(.65,24,16,a,{x:r,y:2,z:o},{rough:.05,metal:1}))},.2);let s=e.animated({x:0,y:0,z:0},{bob:{amount:.35,speed:.6}});for(let[e,t,n,r]of[[-8,6.5,-21,.9],[-4.5,9,-25,.6],[5,7.5,-24,.75],[9.5,5.5,-17,.5],[-11,4.5,-14,.45]])s.sphere(r,28,18,a,{x:e,y:t,z:n},{rough:.04,metal:1});e.fine(()=>{for(let t=0;t<5;t++){let n=Ag(Og+(t-2)*.55,25);e.beam(.6,2.2,13,Mg(t/5,.9,.6),{x:n.x,y:6.5,z:n.z},{opacity:.08})}})}},casino:{fog:.02,exposure:1,bloom:{threshold:.66,intensity:.95},gloss:.22,reflect:.3,mirror:.4,rim:`#e8b85e`,rimStrength:.22,drift:[{kind:`float`,color:`#ffd9a0`,count:60,size:.05,area:[18,9,.5],speed:.4,opacity:.5}],spark:`round`,rig:e=>Ng(e),build:(e,t,n,r)=>{let i=`#3a1f12`,a=`#24130b`,o=`#b08b46`,s=`#5a1620`,c=`#14513a`,l=`#ffd59a`,u=`#2a0a0e`;e.around(18,29,(t,n,r,s)=>{let c=fg(n),u=58*Math.sin(Math.PI/18);e.box(u,14,.6,`#3d0f14`,{x:r*1.06,y:7,z:s*1.06,ry:c},{rough:.85}),e.box(u,2.8,.35,i,{x:r*1.04,y:1.4,z:s*1.04,ry:c},{rough:.35}),e.box(u,.1,.14,o,{x:r*1.035,y:2.85,z:s*1.035,ry:c},{rough:.3,metal:1});let d=n-Math.PI/18,f=Math.cos(d)*29,p=Math.sin(d)*29;e.box(1.3,9.4,1.3,a,{x:f,y:4.7,z:p,ry:fg(d)},{rough:.4}),e.box(1.7,.5,1.7,o,{x:f,y:9.5,z:p,ry:fg(d)},{rough:.3,metal:1}),e.torus(u/2,.32,8,22,Math.PI,o,{x:r,y:9.6,z:s,ry:c},{rough:.3,metal:1});let m=f-Math.cos(d)*.9,h=p-Math.sin(d)*.9;e.strut([f-Math.cos(d)*.6,5.5,p-Math.sin(d)*.6],[m,5.6,h],.05,6,o,{metal:1,rough:.3}),e.glowSphere(.16,l,{x:m,y:5.7,z:h},{intensity:2.6}),e.glassCyl(.18,.32,.45,12,`#ffcf8a`,{x:m,y:5.85,z:h},{opacity:.5,open:!0}),e.fine(()=>{e.box(u*.8,.08,.08,o,jg(n,29*1.06,0,8.6,.32),{rough:.3,metal:1}),e.box(u*.8,.08,.08,o,jg(n,29*1.06,0,3.4,.32),{rough:.3,metal:1})})});for(let t=0;t<9;t++){let n=Og+(t-4)*.105,r=(e,t,r,i={})=>jg(n,25.5,e,t,r,i);e.box(1.5,.5,1.3,a,r(0,.25,0),{rough:.5}),e.box(1.4,2.4,1.1,t%2?u:`#14243a`,r(0,1.7,0),{rough:.3,metal:.4}),e.box(1.3,.12,.6,o,r(0,1.2,.6,{rx:-.3}),{rough:.3,metal:1}),e.glowBox(1,.75,.04,`#ffe0a6`,r(0,2.05,.56),{intensity:1.1,pulse:.5,phase:t});for(let n=0;n<3;n++)e.glowBox(.24,.5,.04,[`#ff5a5a`,`#ffd25a`,`#5ab4ff`][(n+t)%3],r((n-1)*.3,2.05,.6),{intensity:1.4});e.box(1.5,.6,1.2,o,r(0,3.2,0),{rough:.3,metal:1}),e.glowBox(1.2,.35,.05,t%2?`#ff6a8a`:`#ffd27a`,r(0,3.2,.62),{intensity:2.2,pulse:4+t%3,phase:t}),e.glowSphere(.16,t%3?`#ffd27a`:`#ff5a5a`,r(0,3.7,0),{intensity:2.6,pulse:6,phase:t*1.3}),e.fine(()=>{let t=r(.8,1.9,.2),n=r(.85,2.7,.35);e.strut([t.x,t.y,t.z],[n.x,n.y,n.z],.03,6,`#d8dde2`,{metal:1,rough:.2}),e.sphere(.09,10,8,`#c21a1a`,{x:n.x,y:n.y+.05,z:n.z},{rough:.3})})}r.pool(0,-22,7,`#ffb35a`,.22),e.box(4.2,.95,2.6,i,{x:-13,y:.48,z:-13,ry:.6},{rough:.35}),e.box(4,.06,2.4,c,{x:-13,y:.98,z:-13,ry:.6},{rough:1});let d=-13-Math.cos(.6)*1.3,f=-13+Math.sin(.6)*1.3;e.cyl(1.15,1,.35,32,a,{x:d,y:1.15,z:f},{rough:.35});let p=e.animated({x:d,y:1.34,z:f},{spin:{axis:[0,1,0],speed:.9}});p.cyl(.9,.9,.05,36,`#3a2a1a`,{},{rough:.3,metal:.4});for(let e=0;e<18;e++){let t=e/18*Dg;p.box(.28,.06,.16,e===0?`#1b8a3a`:e%2?`#a3121b`:`#121212`,{x:Math.cos(t)*.72,y:.04,z:Math.sin(t)*.72,ry:-t},{rough:.4})}p.cone(.2,.35,8,o,{y:.2},{rough:.25,metal:1}),p.box(.8,.04,.05,o,{y:.32},{rough:.25,metal:1}),e.cyl(.04,.04,2.2,4,o,{x:-13,y:4.6,z:-13},{metal:1,rough:.3}),e.cyl(.35,1,.6,16,`#1f4d33`,{x:-13,y:3.4,z:-13},{rough:.5,open:!0}),e.glowCyl(.95,.95,.02,16,`#ffe2b0`,{x:-13,y:3.12,z:-13},{intensity:1.2}),r.pool(-13,-13,3.2,`#ffd9a0`,.3);let m=Og+.85,h=(e,t,n)=>jg(m,22,e,t,n);e.box(8,1.2,1.2,u,h(0,.6,1.5),{rough:.25,metal:.2}),e.box(8.2,.12,1.5,i,h(0,1.26,1.5),{rough:.25}),e.box(8,3.4,.6,a,h(0,1.7,-.6),{rough:.45});for(let t=0;t<3;t++){e.box(7.6,.06,.5,o,h(0,1+t*.9,-.3),{rough:.3,metal:1});for(let r=0;r<11;r++){let i=[`#ffb347`,`#7bd17a`,`#ff6b6b`,`#ffd98a`,`#9ad0ff`][(r+t*2)%5],a=.4+n()*.2;e.glowCyl(.08,.1,a,6,i,h((r-5)*.65+(n()-.5)*.1,1.03+t*.9+a/2,-.3),{intensity:.9+n()*.5})}}e.glowBox(7.6,.04,.04,`#ffb35a`,h(0,3.45,-.25),{intensity:2});for(let t=0;t<4;t++){let n=h((t-1.5)*1.9,0,2.9);e.cyl(.05,.12,1.1,6,o,{x:n.x,y:.55,z:n.z},{metal:1,rough:.3}),e.cyl(.35,.35,.12,14,s,{x:n.x,y:1.15,z:n.z},{rough:.8})}for(let t=0;t<3;t++){let n=h((t-1)*2.6,4.2,1.5);e.strut([n.x,6,n.z],[n.x,4.4,n.z],.02,4,o,{metal:1,rough:.3}),e.glassCyl(.2,.35,.4,12,`#ffcf8a`,{x:n.x,y:4.3,z:n.z},{opacity:.5,open:!0}),e.glowSphere(.12,l,{x:n.x,y:4.2,z:n.z},{intensity:2.4})}let g=h(0,0,1.5);r.pool(g.x,g.z,4.5,`#ffb35a`,.3);for(let t of[Og-1.45,Og+1.5,Og-.05]){let{x:l,z:u}=Ag(t,t===Og-.05?18:16.5);e.cyl(.35,.6,1.1,12,a,{x:l,y:.55,z:u},{rough:.45}),e.cyl(1.9,1.9,.14,32,i,{x:l,y:1.15,z:u},{rough:.35}),e.cyl(1.72,1.72,.05,32,c,{x:l,y:1.24,z:u},{rough:1}),e.torus(1.86,.06,6,40,Dg,o,{x:l,y:1.22,z:u,rx:Math.PI/2},{rough:.3,metal:1});for(let t=0;t<5;t++){let r=n()*Dg,i=.5+n()*.8,a=.1+n()*.3;e.cyl(.13,.13,a,12,[`#c7212b`,`#f0e6c2`,`#3266b0`,`#161616`][t%4],{x:l+Math.cos(r)*i,y:1.27+a/2,z:u+Math.sin(r)*i},{rough:.5})}e.fine(()=>{for(let t=0;t<4;t++)e.box(.22,.01,.32,`#f4f1ea`,{x:l+(t-1.5)*.3,y:1.275,z:u+.9,ry:(n()-.5)*.4},{rough:.6})}),e.strut([l,6.5,u],[l,3.4,u],.03,4,o,{metal:1,rough:.3}),e.cyl(.3,.75,.5,14,`#1f4d33`,{x:l,y:3.2,z:u},{rough:.5,open:!0}),e.glowCyl(.7,.7,.02,14,`#ffe2b0`,{x:l,y:2.96,z:u},{intensity:1.1});for(let n=0;n<3;n++){let r=t+(n-1)*.9+Math.PI,i=l+Math.cos(r)*2.7,o=u+Math.sin(r)*2.7;e.box(1.1,.5,1,s,{x:i,y:.75,z:o,ry:fg(r)+Math.PI},{rough:.9}),e.box(1.1,1.2,.25,s,{x:i+Math.cos(r)*.45,y:1.4,z:o+Math.sin(r)*.45,ry:fg(r)+Math.PI},{rough:.9}),e.box(1.2,.5,1.1,a,{x:i,y:.25,z:o,ry:fg(r)+Math.PI},{rough:.5})}r.pool(l,u,2.8,`#ffe2b0`,.28)}e.torus(5.2,.09,6,96,Dg,o,{y:11.4,rx:Math.PI/2},{rough:.3,metal:1}),e.around(20,5.2,(t,n,r,i)=>e.glowSphere(.13,l,{x:r,y:11.25,z:i},{intensity:2.6,pulse:.15,phase:t})),e.cyl(.03,.03,4,4,o,{y:13.6},{metal:1,rough:.3})}},observatory:{fog:.011,exposure:1.05,bloom:{threshold:.62,intensity:1.1},gloss:.45,reflect:.55,mirror:.45,rim:`#91bdf4`,rimStrength:.3,drift:[{kind:`float`,color:`#a9c8ff`,count:90,size:.06,area:[26,18,.3],speed:.3}],spark:`round`,rig:e=>Ng(e,{key:[`#e6eeff`,2],fill:[`#efd394`,1.4]}),build:(e,t,n,r)=>{let i=`#b08a45`,a=`#1b2440`,o=`#1d2f5e`,s=`#3a2416`;e.around(28,30,(t,r,o,c)=>{let l=fg(r);if(e.box(6.9,4.4,1.1,a,{x:o,y:2.2,z:c,ry:l},{rough:.8}),e.box(6.9,.22,1.5,i,{x:o*.99,y:4.45,z:c*.99,ry:l},{rough:.35,metal:1}),e.box(.7,4.4,1.5,`#243156`,jg(r-Math.PI/28,30,0,2.2,.1),{rough:.7}),!kg(r,1.1)){e.box(5.4,3.6,.35,s,jg(r,30,0,2.1,.45),{rough:.6});for(let t=0;t<3;t++)e.box(5.4,.07,.6,s,jg(r,30,0,.75+t*1.15,.7),{rough:.6}),e.fine(()=>{let i=-2.5;for(;i<2.4;){let a=.12+n()*.12,o=.6+n()*.35;e.box(a,o,.45,[`#5a1c1c`,`#1c3a5a`,`#2d4a24`,`#6a4a1c`,`#3a1c4a`][Math.floor(n()*5)],jg(r,30,i+a/2,.79+t*1.15+o/2,.75),{rough:.8}),i+=a+.02}});t%2==0&&e.glowBox(1,1.6,.05,`#ffd99a`,jg(r,30,0,5.6,.6),{intensity:.8})}}),e.around(12,0,(t,n)=>e.torus(30,.28,6,48,Math.PI/2,i,{y:4.6,ry:-n,sy:.75},{rough:.35,metal:1}));for(let t of[.42,.85])e.torus(30*Math.cos(t),.18,6,120,Dg,i,{y:4.6+22.5*Math.sin(t),rx:Math.PI/2},{rough:.35,metal:1});e.torus(3.2,.35,8,48,Dg,i,{y:27,rx:Math.PI/2},{rough:.35,metal:1}),e.glowTorus(29.4,.04,4,160,Dg,t.accent,{y:4.85,rx:Math.PI/2},{intensity:1.2}),e.beam(2.6,4.2,26,`#a9c8ff`,{x:0,y:13.5,z:-6,rx:-.12},{opacity:.09}),r.pool(0,-8.5,5,`#91bdf4`,.22),e.cyl(1.4,1.9,1.2,16,a,{x:0,y:.6,z:-19},{rough:.6}),e.cyl(.6,.8,3.4,16,o,{x:0,y:2.9,z:-19},{rough:.4,metal:.4});for(let t of[-1,1])e.box(.35,2.6,.9,i,{x:t*1.15,y:5.4,z:-19},{rough:.3,metal:1});e.box(2.7,.35,.9,i,{x:0,y:4.4,z:-19},{rough:.3,metal:1});let c=-.75;e.cyl(.75,1,9,24,o,{x:0,y:6.2+Math.cos(c)*1.2,z:-19+Math.sin(c)*1.2,rx:c},{rough:.3,metal:.5});for(let t of[-3.6,-1.2,1.4,3.9])e.torus(.82+t*.025,.1,6,32,Dg,i,{x:0,y:6.2+Math.cos(c)*(1.2+t),z:-19+Math.sin(c)*(1.2+t),rx:c+Math.PI/2},{rough:.3,metal:1});e.cyl(1.05,1.05,2,24,i,{x:0,y:6.2+Math.cos(c)*6.2,z:-19+Math.sin(c)*6.2,rx:c},{rough:.3,metal:1,open:!0}),e.glowShape(`lens`,()=>new oc(.9,24),`#9fc0ff`,{x:0,y:6.2+Math.cos(c)*5.5,z:-19+Math.sin(c)*5.5,rx:c-Math.PI/2},{intensity:1.2}),e.cyl(.18,.18,1.2,10,i,{x:0,y:6.2+Math.cos(c)*-3.5+.4,z:-19+Math.sin(c)*-3.5+.6,rx:-1.95},{rough:.3,metal:1}),r.pool(0,-17,4,t.warm,.12);let l=-11.5,u=-10.5;e.cyl(.9,1.3,1.6,16,s,{x:l,y:.8,z:u},{rough:.45}),e.cyl(.08,.08,1.6,8,i,{x:l,y:2.4,z:u},{metal:1,rough:.3}),e.glowSphere(.55,`#ffd27a`,{x:l,y:3.4,z:u},{intensity:2.6,pulse:.4});for(let[t,n,r,a,o]of[[1.5,.5,.16,`#c9a07a`,!1],[2.4,.3,.24,`#4f86c9`,!1],[3.4,.18,.3,`#d8b878`,!0]]){let s=e.animated({x:l,y:3.4,z:u},{spin:{axis:[0,1,0],speed:n}});s.strut([0,-.6,0],[t,-.6,0],.025,4,i,{metal:1,rough:.3}),s.strut([t,-.6,0],[t,-.1,0],.025,4,i,{metal:1,rough:.3}),s.sphere(r,16,12,a,{x:t},{rough:.5,metal:.2}),o&&s.torus(r*1.8,.02,4,32,Dg,`#e8d6a8`,{x:t,rx:Math.PI/2+.4},{rough:.4,metal:.6}),s.torus(t,.012,3,64,Dg,i,{y:-.6,rx:Math.PI/2},{metal:1,rough:.3})}r.pool(l,u,3.5,`#ffd27a`,.3);let d=11.5;e.cyl(.45,.7,3.6,16,a,{x:d,y:1.8,z:-11},{rough:.6}),e.cyl(.9,.9,.25,20,i,{x:d,y:3.7,z:-11},{rough:.3,metal:1}),e.sphere(.95,28,18,o,{x:d,y:5.6,z:-11},{rough:.35,metal:.2}),e.glowTorus(.97,.025,4,48,Dg,t.warm,{x:d,y:5.6,z:-11,rx:Math.PI/2},{intensity:1.6});for(let[t,n,r,a]of[[2.1,.06,[.3,1,0],.18],[2.6,.07,[.2,.5,1],.08]]){let o=e.animated({x:d,y:5.6,z:-11},{spin:{axis:[...r],speed:a}});o.torus(t,n,6,72,Dg,i,{},{rough:.28,metal:1}),o.torus(t*.9,n*.6,6,72,Dg,i,{rx:Math.PI/2},{rough:.28,metal:1})}e.cyl(.3,.6,2.8,12,s,{x:14,y:1.4,z:2},{rough:.5}),e.sphere(1,24,16,`#20335e`,{x:14,y:3.6,z:2},{rough:.4,glow:.04}),e.torus(1.15,.05,6,48,Dg,i,{x:14,y:3.6,z:2,rz:.4},{metal:1,rough:.3}),e.fine(()=>{e.box(2.4,1.1,1.4,s,{x:-14.5,y:.55,z:1.5,ry:1.2},{rough:.5}),e.box(2.5,.08,1.6,`#e8dcc0`,{x:-14.5,y:1.2,z:1.5,ry:1.2,rx:-.25},{rough:.9,glow:.08})})}},atlantis:{fog:.023,exposure:1.05,bloom:{threshold:.62,intensity:1.15},gloss:.18,reflect:.35,mirror:.35,rim:`#89eddf`,rimStrength:.35,drift:[{kind:`rise`,color:`#9ff5ea`,count:150,size:.1,area:[22,14,.9],speed:.8},{kind:`float`,color:`#d8fff8`,count:90,size:.05,area:[20,10,1.2],speed:.3,opacity:.6,minQuality:1}],spark:`round`,rig:e=>Ng(e,{key:[`#e0fff8`,2]}),build:(e,t,n,r)=>{let i=`#c9d4cc`,a=`#a9c2bf`,o=[];e.around(12,17,(t,n,r,s)=>{kg(n,.95)||(o.push({x:r,z:s,a:n}),e.box(1.7,.5,1.7,a,{x:r,y:.25,z:s,ry:n},{rough:.4}),e.cyl(.58,.68,7.6,12,i,{x:r,y:4.3,z:s},{rough:.28,metal:.15}),e.cyl(1,.62,.5,12,a,{x:r,y:8.3,z:s},{rough:.35}),e.box(1.9,.4,1.9,a,{x:r,y:8.75,z:s,ry:n},{rough:.4}))},Math.PI/12),o.forEach((n,r)=>{let i=o[r+1];if(!i||Math.abs(i.a-n.a)>.6)return;let s=(n.x+i.x)/2,c=(n.z+i.z)/2,l=Math.hypot(i.x-n.x,i.z-n.z),u=-Math.atan2(i.z-n.z,i.x-n.x);e.torus(l/2,.55,8,22,Math.PI,a,{x:s,y:8.95,z:c,ry:u},{rough:.38,metal:.1}),e.glowTorus(l/2-.6,.04,4,30,Math.PI,t.accent,{x:s,y:8.95,z:c,ry:u},{intensity:1.2})});for(let[t,n,r,o]of[[-12,-9,3.2,.4],[13,-7,2,1.2],[-7,-14,1.2,2.1],[8,-15.5,4.2,-.4]])e.cyl(.55,.62,r,12,i,{x:t,y:r/2,z:n},{rough:.35,metal:.1}),e.cyl(.55,.55,1.4,12,a,{x:t+Math.cos(o)*1.6,y:.5,z:n+Math.sin(o)*1.6,rz:Math.PI/2,ry:o},{rough:.4});for(let[r,i,o]of[[25,3,30],[30,7,34],[35,12,38]])e.around(o,r,(s,c,l,u)=>{if(!kg(c,.5)){if(e.box(2*r*Math.sin(Math.PI/o)+.05,i,3.4,s%2?a:`#93ada9`,{x:l,y:i/2,z:u,ry:fg(c)},{rough:.5}),s%4==1&&e.sphere(1.6+n()*1.2,16,10,`#2f8f87`,{x:l,y:i,z:u},{rough:.25,metal:.6,dome:!0}),s%6==3){let r=5+n()*6;e.cone(.5,r,8,`#d8c48a`,{x:l,y:i+r/2,z:u},{rough:.3,metal:1}),e.glowSphere(.16,t.accent,{x:l,y:i+r+.1,z:u},{intensity:2.6,pulse:1.2,phase:s})}s%3==0&&e.glowBox(.8,1.2,.05,`#bff7ee`,jg(c,r,0,i*.5,1.75),{intensity:.9})}},r*.01);let s=[`#ff8f7a`,`#f2b25e`,`#d46ad8`,`#ff6f91`];for(let r=0;r<16;r++){let i=Og+(r/15-.5)*4.6+(n()-.5)*.2;if(kg(i,1))continue;let{x:a,z:o}=Ag(i,11.5+n()*8),c=s[r%4],l=r%4;if(l===0)for(let t=0;t<6;t++){let r=n()*Dg,i=.8+n()*1.2;e.strut([a,0,o],[a+Math.cos(r)*.5,i,o+Math.sin(r)*.5],.07,5,c,{rough:.7,glow:.12}),e.fine(()=>e.glowSphere(.06,`#ffe6d0`,{x:a+Math.cos(r)*.5,y:i,z:o+Math.sin(r)*.5},{intensity:1.6,pulse:.8,phase:t}))}else if(l===1)e.rock(.8+n()*.4,r,c,{x:a,y:.3,z:o,sy:.7},{rough:.8,jag:.18,glow:.06});else if(l===2)e.glassShape(`fan`,()=>new oc(1.3,16,0,Math.PI),c,{x:a,y:.1,z:o,ry:n()*Dg},{opacity:.35}),e.strut([a,0,o],[a,1.2,o],.05,4,c,{rough:.7});else for(let n=0;n<7;n++){let r=n/7*Dg,i=.25;e.cone(.06,.8,5,`#e66fa8`,{x:a+Math.cos(r)*i,y:.4,z:o+Math.sin(r)*i,rx:Math.sin(r)*.4,rz:-Math.cos(r)*.4},{rough:.6,glow:.18}),e.glowSphere(.05,t.accent,{x:a+Math.cos(r)*.5700000000000001,y:.78,z:o+Math.sin(r)*.5700000000000001},{intensity:2.4,pulse:1,phase:n})}}let c=7.5;e.sphere(1.6,18,8,`#8fa7a2`,{x:c,y:.1,z:-13,sy:.45},{rough:.45,metal:.2,dome:!0}),e.sphere(1.6,18,8,`#9fb8b2`,{x:c,y:.75,z:-13.6,sy:.45,rx:-1.1},{rough:.45,metal:.2,dome:!0}),e.glowSphere(.32,`#eafffb`,{x:c,y:.6,z:-12.8},{intensity:2.6,pulse:.5}),r.pool(c,-12,3,`#bff7ee`,.3);for(let[t,r,i]of[[-15,-9,7],[-6,-21,6],[16,-13,7]]){let a=e.animated({x:t,y:0,z:r},{sway:{amount:.06,speed:.4}});for(let e=0;e<i;e++){let e=(n()-.5)*3,t=(n()-.5)*3,r=5+n()*6,i=n()*6,o=[];for(let n=0;n<=5;n++)o.push([e+Math.sin(i+n*1.1)*.35,r*n/5,t+Math.cos(i+n*.9)*.25]);a.tube(o,.07,5,`#3f6b33`,{rough:.6,glow:.05}),a.fine(()=>{for(let e=1;e<5;e++)a.sphere(.22,6,4,`#557d30`,{x:o[e][0]+.2,y:o[e][1],z:o[e][2],sx:1.6,sy:.35,sz:.6,ry:e},{rough:.6,glow:.04})})}}let l=e.animated({x:-4,y:7,z:-24},{spin:{axis:[0,1,.15],speed:.35}});for(let e=0;e<26;e++){let t=e/26*Dg+n()*.2,r=4.5+n()*2;l.octa(.18,`#cfe3ea`,{x:Math.cos(t)*r,y:(n()-.5)*2.4,z:Math.sin(t)*r,ry:-t,sx:.5,sz:2.4},{rough:.25,metal:.8,glow:.05})}e.fine(()=>{for(let r=0;r<7;r++){let r=Ag(Og+(n()-.5)*3,9+n()*14);e.beam(.5,2.6,30,t.accent,{x:r.x,y:15,z:r.z,rz:(n()-.5)*.2},{opacity:.07})}}),r.pool(-15,-9,4,t.accent,.12),r.pool(0,-18,6,t.accent,.12)}}},Ig=.22;function Lg(e,t,n){let r=new Bc,i=Math.min(n,e,t);return r.moveTo(-e+i,-t),r.lineTo(e-i,-t),r.quadraticCurveTo(e,-t,e,-t+i),r.lineTo(e,t-i),r.quadraticCurveTo(e,t,e-i,t),r.lineTo(-e+i,t),r.quadraticCurveTo(-e,t,-e,t-i),r.lineTo(-e,-t+i),r.quadraticCurveTo(-e,-t,-e+i,-t),r}function Rg(e,t,n,r,i=14){let a=[],o=[[e-n,t-n,0],[-(e-n),t-n,Math.PI/2],[-(e-n),-(t-n),Math.PI],[e-n,-(t-n),Math.PI*1.5]];for(let[e,t,n]of o)for(let r=0;r<=i;r++){let o=n+r/i*(Math.PI/2);a.push({cx:e,cz:t,nx:Math.cos(o),nz:Math.sin(o)})}let s=r.map((e,t)=>{let n=r[Math.max(0,t-1)],i=r[Math.min(r.length-1,t+1)],a=i[0]-n[0],o=i[1]-n[1],s=Math.hypot(a,o)||1;return[-o/s,a/s]}),c=[],l=[],u=[];for(let e of a)for(let t=0;t<r.length;t++){let[i,a]=r[t],o=n+i;c.push(e.cx+e.nx*o,a,e.cz+e.nz*o);let[u,d]=s[t];l.push(e.nx*u,d,e.nz*u)}let d=a.length,f=r.length;for(let e=0;e<d;e++){let t=(e+1)%d;for(let n=0;n<f-1;n++){let r=e*f+n,i=t*f+n;u.push(r,i,r+1,r+1,i,i+1)}}let p=new qo;return p.setAttribute(`position`,new Fo(c,3)),p.setAttribute(`normal`,new Fo(l,3)),p.setIndex(u),p}var zg=`
  float sdRounded(vec2 p, vec2 hs, float r) {
    vec2 q = abs(p) - hs + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  }
  float lineAt(float d, float w) { float aa = fwidth(d) * 1.2; return 1.0 - smoothstep(w, w + aa, abs(d)); }`;function Bg(e,t,n,r,i,a,o){let s=new Jl({color:e,roughness:t,metalness:n}),c={uLine:{value:r},uHalf:{value:new X(i,a)},uR:{value:o}};return s.onBeforeCompile=e=>{Object.assign(e.uniforms,c),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vSlab; varying vec3 vSlabN;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
vSlab = position; vSlabN = normal;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\nuniform vec3 uLine; uniform vec2 uHalf; uniform float uR;\nvarying vec3 vSlab; varying vec3 vSlabN;\n${zg}`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
        float top = step(0.7, vSlabN.y);
        float sd = sdRounded(vSlab.xz, uHalf, uR);
        // Brossage concentrique très fin : le reflet se casse en anneaux.
        float brush = sin(length(vSlab.xz) * 90.0) * 0.5 + 0.5;
        roughnessFactor = clamp(roughnessFactor + (brush - 0.5) * 0.08 * top, 0.04, 1.0);`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        // Liseré au bord, filet intérieur, graduations entre les deux.
        float edge = lineAt(sd + 0.07, 0.022);
        float inner = lineAt(sd + 0.42, 0.008);
        float along = abs(vSlab.x) > abs(vSlab.z) * (uHalf.x / uHalf.y) ? vSlab.z : vSlab.x;
        float ticks = lineAt(fract(along * 2.0 + 0.5) - 0.5, 0.02) * step(-0.36, sd) * step(sd, -0.13);
        float glow = top * (edge * 1.0 + inner * 0.55 + ticks * 0.35);
        // Sur le chant : une ligne de lumière à mi-hauteur.
        glow += (1.0 - top) * lineAt(vSlab.y - 0.1, 0.012) * step(abs(vSlabN.y), 0.5) * 0.9;
        totalEmissiveRadiance += uLine * glow;`)},s.customProgramCacheKey=()=>`pedestal-slab`,s}function Vg(e,t,n,r){let i=new Ua,a=[`sakura`,`jade`,`atlantis`].includes(e.id),o=new Q(a?e.warm:e.accent),s=(e,t,n)=>{let r=new wl(e,{depth:t,bevelEnabled:n>0,bevelSize:n,bevelThickness:n,bevelSegments:3,curveSegments:18});return r.rotateX(-Math.PI/2),r},c=new _s(s(Lg(t,n,r),.14,.08),Bg(e.pedestal,a?.42:.24,a?.15:.7,o.clone().multiplyScalar(a?1.1:1.6),t,n,r));c.receiveShadow=!0;let l=new _s(s(Lg(t+.55,n+.55,r+.55),.05,.03),Bg(new Q(e.pedestal).multiplyScalar(.7),.55,a?.05:.5,new Q(0,0,0),t+.55,n+.55,r+.55));l.receiveShadow=!0;let u=2.2,d=new Al((t+u)*2,(n+u)*2);d.rotateX(-Math.PI/2);let f=new _s(d,new Kl({transparent:!0,depthWrite:!1,blending:2,uniforms:{uColor:{value:o.clone().multiplyScalar(a?.35:.5)},uHalf:{value:new X(t+.55,n+.55)},uR:{value:r+.55}},vertexShader:`varying vec2 vP; void main() { vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform vec3 uColor; uniform vec2 uHalf; uniform float uR; varying vec2 vP;
      ${zg}
      void main() {
        float d = sdRounded(vP, uHalf, uR);
        float a = d < 0.0 ? 0.0 : exp(-d * 2.4) * 0.8 + exp(-d * 9.0) * 0.6;
        gl_FragColor = vec4(uColor * a, 1.0);
      }`}));return f.position.y=.012,f.renderOrder=-5,i.add(c,l,f),i}var Hg=null;function Ug(){if(Hg)return Hg;let e=document.createElement(`canvas`);e.width=1024,e.height=192;let t=e.getContext(`2d`);return t.fillStyle=`#fff`,t.textAlign=`center`,t.textBaseline=`middle`,t.font=`600 84px Oxanium, Bahnschrift, sans-serif`,`letterSpacing`in t&&(t.letterSpacing=`14px`),t.fillText(`MONTE-CARLO`,512,70),t.font=`500 30px Oxanium, Bahnschrift, sans-serif`,`letterSpacing`in t&&(t.letterSpacing=`6px`),t.fillText(`SALON DES PILES · LE DERNIER JETON DÉCIDE`,512,150),t.fillRect(150,118,724,2),Hg=new tc(e),Hg.anisotropy=8,Hg}function Wg(e,t,n){let r=new Ua,i=Ig,a=e-.24,o=t-.24,s=n-.24,c=new Ml(Lg(a+.02,o+.02,s+.02),24);c.rotateX(-Math.PI/2);let l=new Jl({color:`#1d6a4f`,roughness:.95,metalness:0}),u=Math.min(2.8,a*.55),d=192/1024*u,f={uHalf:{value:new X(a,o)},uR:{value:s},uSign:{value:Ug()},uSignRect:{value:new ua(0,o-.52-d/2,u/2,d/2)}};l.onBeforeCompile=e=>{Object.assign(e.uniforms,f),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec2 vFelt;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
vFelt = position.xz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\nuniform vec2 uHalf; uniform float uR; uniform sampler2D uSign; uniform vec4 uSignRect; varying vec2 vFelt;\n${zg}
        float fh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float fn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(fh(i), fh(i + vec2(1, 0)), f.x), mix(fh(i + vec2(0, 1)), fh(i + vec2(1, 1)), f.x), f.y); }`).replace(`#include <color_fragment>`,`#include <color_fragment>
        float sd = sdRounded(vFelt, uHalf, uR);
        // Fibres : bruit fin étiré, plus un voile large (feutre un peu usé).
        float fiber = fn(vFelt * vec2(70.0, 22.0)) * 0.5 + fn(vFelt * vec2(23.0, 61.0)) * 0.5;
        float cloud = fn(vFelt * 1.3) * 0.6 + fn(vFelt * 4.1) * 0.4;
        diffuseColor.rgb *= 0.8 + 0.22 * fiber + 0.16 * (cloud - 0.5);
        // Le bord s'assombrit sous le bourrelet.
        diffuseColor.rgb *= mix(0.55, 1.0, smoothstep(0.0, 0.35, -sd));
        // Deux filets dorés qui suivent le contour.
        float gold = max(lineAt(sd + 0.36, 0.022), lineAt(sd + 0.47, 0.008));
        vec2 signUv = (vFelt - uSignRect.xy) / uSignRect.zw * 0.5 + 0.5;
        if (all(greaterThan(signUv, vec2(0.0))) && all(lessThan(signUv, vec2(1.0)))) gold = max(gold, texture2D(uSign, vec2(signUv.x, 1.0 - signUv.y)).g * 0.85);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.47, 0.2), gold * 0.9);`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.4, gold);`).replace(`#include <metalnessmap_fragment>`,`#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.8, gold);`)},l.customProgramCacheKey=()=>`casino-felt`;let p=new _s(c,l);p.position.y=i,p.receiveShadow=!0;let m=new Jl({color:`#4a1f0e`,roughness:.28,metalness:.05}),h=new Jl({color:`#1e0f0a`,roughness:.48,metalness:.05}),g=new Jl({color:`#c79a48`,roughness:.26,metalness:1}),_=new Jl({color:`#0d0705`,roughness:.7}),v=(e,t,n=!0)=>{let i=new _s(Rg(a,o,s,e),t);i.receiveShadow=n,r.add(i)};v([[-.01,.215],[0,.232],[.02,.238],[.2,.238],[.22,.232]],m);let y=[[.21,.23]];for(let e=0;e<=12;e++){let t=Math.PI-e/12*Math.PI;y.push([.62+Math.cos(t)*.4,.32+Math.sin(t)*.17])}y.push([1.02,.24]),v(y,h);let b=[];for(let e=0;e<=8;e++){let t=Math.PI*.5-e/8*Math.PI;b.push([1+Math.cos(t)*.04,.22+Math.sin(t)*.04])}return v(b,g),v([[1,.18],[1.03,.15],[1.03,.1],[1,.07]],m),v([[.98,.07],[.92,.06],[.92,0]],_,!1),r.add(p),r}function Gg(e,t,n){let r=t+1.1,i=n+1.1,a=Math.min(r,i)*.7;return e.id===`casino`?Wg(r,i,a):Vg(e,r,i,a)}function Kg(e){let t=e>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function qg(e,t){if(e.id===`casino`){let e=new Nu(`#ffe2b8`,520,0,.6,.55,2);e.position.set(0,11.5,.4),e.target.position.set(0,0,0),t.add(e,e.target,new yu(`#5a4a3a`,`#120a06`,.7));let n=new Iu(`#8fb6ff`,.5);n.position.set(-6,5,-10);let r=new Iu(`#ffb35a`,.6);return r.position.set(8,3,-9),t.add(n,r),e}let n=Fg[e.id].rig(e),r=new Iu(...n.key);r.position.set(4,14,7),t.add(r,r.target);let i=new Iu(...n.rim);i.position.set(-7,5,-9);let a=new Iu(...n.fill);return a.position.set(8,3,-5),t.add(i,a,new yu(...n.hemi)),r}function Jg(e,t){let n=Fg[e.id],r=xg({rim:n.rim,rimStrength:n.rimStrength,mirror:n.mirror}),i=new mg,a=[];n.build(i,e,Kg(e.id.length*104729+e.id.charCodeAt(0)),{pool(e,t,n,r,i){a.length<8&&a.push({x:e,z:t,radius:n,color:`#`+new Q(r).getHexString(),intensity:i})}});let o=i.build(r);i.dispose();let s=o.group,c=new Ua;c.scale.y=-1,c.userData.minQuality=1;for(let e of o.glows){let t=new _s(e.geometry,r.mirror);t.matrixAutoUpdate=!1,e.userData.minQuality&&(t.userData.minQuality=e.userData.minQuality),c.add(t)}s.add(c);let l=new _s(new Pl(140,48,24),wg(e,{reflect:n.reflect,fog:e.background}));l.frustumCulled=!1,l.renderOrder=5;let u=new _s(new oc(70,128),Tg(e,11,{gloss:n.gloss,pools:a}));u.rotation.x=-Math.PI/2,u.position.y=-.002,u.renderOrder=-10;let d=u.material.uniforms;d.uFogDensity.value=n.fog,s.add(l,u);let f=qg(e,s),p=[r.time,l.material.uniforms.uTime,d.uTime];if(t.particles)for(let e of n.drift){let t=Eg(e);s.add(t),p.push(t.material.uniforms.uTime)}let m=new Set([r.solid,r.glow,r.beam,r.mirror]);return{group:s,key:f,clocks:p,movers:o.movers,sparkShape:n.spark,triangles:o.triangles,look:{bloom:{threshold:n.bloom.threshold,intensity:n.bloom.intensity,radius:.72},vignette:{offset:.3,darkness:.66},exposure:n.exposure},animate:e=>hg(o.movers,e),dispose(){let e=new Set;s.traverse(t=>{let n=t;n.geometry&&e.add(n.geometry);let r=n.material;r&&!m.has(r)&&r.dispose()});for(let t of e)t.dispose();r.dispose()}}}var Yg=e=>Fg[e.id].fog;function Xg(e){let t=new Qa,n=[],r=(e,t)=>{let r=new as({color:new Q(e).multiplyScalar(t),side:2});return n.push(r),r},i=e=>(n.push(e),e),a=i(new Pl(20,32,16)),o=a.getAttribute(`position`),s=new Float32Array(o.count*3),c=new Q(`#06070a`),l=new Q(`#2f3748`),u=new Q(`#161b26`),d=new Q;for(let e=0;e<o.count;e++){let t=o.getY(e)/20;t<0?d.copy(l).lerp(c,Math.min(1,-t*3)):d.copy(l).lerp(u,Math.min(1,t*1.6)),d.toArray(s,e*3)}a.setAttribute(`color`,new Mo(s,3));let f=new as({vertexColors:!0,side:1});n.push(f),t.add(new _s(a,f));let p=(e,n,r,a,o,s)=>{let c=new _s(i(new Al(e,n)),r);c.position.set(a,o,s),c.lookAt(0,0,0),t.add(c)};p(9,9,r(`#fff6ec`,2.2),1.5,15,4);let m=r(`#bfe4ff`,2.6),h=r(`#ffd9b0`,2);for(let e=0;e<8;e++){let t=e/8*Math.PI*2+.3;p(e%2?.7:1.1,7,e%4==1?h:m,Math.cos(t)*14,2,Math.sin(t)*14)}p(30,3,r(`#8fa3c0`,1),0,1,-16);let g=new _s(i(new Fl(12,.15,6,64)),r(`#bfe4ff`,1.2));g.rotation.x=Math.PI/2,g.position.y=-2,t.add(g);let _=new Ad(e),v=_.fromScene(t,.035).texture;_.dispose();for(let e of n)e.dispose();return v}var Zg=900,Qg=12,$g=class{points;material;pos=new Float32Array(Zg*3);vel=new Float32Array(Zg*3);color=new Float32Array(Zg*3);size=new Float32Array(Zg);alpha=new Float32Array(Zg);spin=new Float32Array(Zg);life=new Float32Array(Zg);maxLife=new Float32Array(Zg);next=0;alive=0;gravity=4.5;constructor(){let e=new qo;e.setAttribute(`position`,new Mo(this.pos,3).setUsage(xi)),e.setAttribute(`aColor`,new Mo(this.color,3).setUsage(xi)),e.setAttribute(`aSize`,new Mo(this.size,1).setUsage(xi)),e.setAttribute(`aAlpha`,new Mo(this.alpha,1).setUsage(xi)),e.setAttribute(`aSpin`,new Mo(this.spin,1).setUsage(xi)),e.setDrawRange(0,0),this.material=new Kl({transparent:!0,depthWrite:!1,blending:2,uniforms:{uScale:{value:300},uShape:{value:0}},vertexShader:`
        attribute float aSize; attribute float aAlpha; attribute vec3 aColor; attribute float aSpin;
        varying float vAlpha; varying vec3 vColor; varying float vSpin;
        uniform float uScale;
        void main() {
          vAlpha = aAlpha; vColor = aColor; vSpin = aSpin;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uScale / -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform int uShape;
        varying float vAlpha; varying vec3 vColor; varying float vSpin;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          vec2 q = mat2(cos(vSpin), -sin(vSpin), sin(vSpin), cos(vSpin)) * c;
          float a;
          if (uShape == 1) a = smoothstep(0.5, 0.3, length(q * vec2(1.0, 2.1)));          // pétale
          else if (uShape == 2) a = smoothstep(0.5, 0.25, max(abs(q.x) * 3.2, abs(q.y)));  // éclat
          else a = smoothstep(0.5, 0.0, length(c));                                      // point
          a *= vAlpha;
          if (a < 0.01) discard;
          gl_FragColor = vec4(vColor * a * 2.2, 1.0);
        }`}),this.points=new Qs(e,this.material),this.points.frustumCulled=!1,this.points.renderOrder=10}get active(){return this.alive>0}setScale(e){this.material.uniforms.uScale.value=e*.9}setShape(e){this.material.uniforms.uShape.value={round:0,petal:1,shard:2}[e],this.gravity=e===`petal`?1.2:4.5}emit(e,t,n,r=3,i=2,a=.12,o=.9){for(let s=0;s<n;s++){let n=this.next;this.next=(this.next+1)%Zg,this.life[n]<=0&&this.alive++;let s=Math.random()*Math.PI*2,c=r*(.3+Math.random()*.7);this.pos[n*3]=e.x,this.pos[n*3+1]=e.y,this.pos[n*3+2]=e.z,this.vel[n*3]=Math.cos(s)*c,this.vel[n*3+1]=i*(.4+Math.random()),this.vel[n*3+2]=Math.sin(s)*c,this.color[n*3]=t.r,this.color[n*3+1]=t.g,this.color[n*3+2]=t.b,this.size[n]=a*(.5+Math.random()),this.spin[n]=Math.random()*6.28,this.maxLife[n]=this.life[n]=o*(.6+Math.random()*.6)}this.points.geometry.setDrawRange(0,Zg)}update(e){if(!this.alive)return;let t=0,n=1-1.8*e,r=this.gravity*e;for(let i=0;i<Zg;i++){if(this.life[i]<=0)continue;if(this.life[i]-=e,this.life[i]<=0){this.alpha[i]=0;continue}t++;let a=i*3;this.vel[a+1]-=r,this.vel[a]*=n,this.vel[a+2]*=n,this.pos[a]+=this.vel[a]*e,this.pos[a+1]+=this.vel[a+1]*e,this.pos[a+2]+=this.vel[a+2]*e,this.spin[i]+=e*3;let o=this.life[i]/this.maxLife[i];this.alpha[i]=o*o*(3-2*o)}this.alive=t;let i=this.points.geometry;t||i.setDrawRange(0,0);for(let e of[`position`,`aColor`,`aSize`,`aAlpha`,`aSpin`])i.getAttribute(e).needsUpdate=!0}clear(){this.life.fill(0),this.alpha.fill(0),this.alive=0,this.points.geometry.setDrawRange(0,0)}dispose(){this.points.geometry.dispose(),this.material.dispose()}},e_=class{group=new Ua;pool=[];geometry=new jl(.9,1,96);constructor(){for(let e=0;e<Qg;e++){let e=new as({transparent:!0,blending:2,depthWrite:!1,side:2}),t=new _s(this.geometry,e);t.rotation.x=-Math.PI/2,t.visible=!1,t.renderOrder=9,this.group.add(t),this.pool.push({mesh:t,t:0,duration:1,radius:1,busy:!1})}}get active(){return this.pool.some(e=>e.busy)}spawn(e,t,n=3,r=.8){let i=this.pool.find(e=>!e.busy)??this.pool.reduce((e,t)=>e.t/e.duration>t.t/t.duration?e:t);i.busy=!0,i.t=0,i.duration=r,i.radius=n,i.mesh.material.color.copy(t),i.mesh.position.set(e.x,e.y+.02,e.z),i.mesh.visible=!0}update(e){for(let t of this.pool){if(!t.busy)continue;t.t+=e;let n=Math.min(t.t/t.duration,1),r=1-(1-n)**3;t.mesh.scale.setScalar(.15+r*t.radius),t.mesh.material.opacity=(1-n)*1.3,n>=1&&(t.busy=!1,t.mesh.visible=!1)}}clear(){for(let e of this.pool)e.busy=!1,e.mesh.visible=!1}dispose(){this.geometry.dispose();for(let e of this.pool)e.mesh.material.dispose()}},t_=24,n_=12,r_=928,i_={select:.32,hover:.1},a_={k:190,c:17},o_={yaw:-.08,pitch:.48,lowPitch:.34,minPitch:.24,maxPitch:1.12,minZoom:.65,maxZoom:1.9},s_=Math.PI*2,c_={high:[64,4],balanced:[40,3],eco:[24,2]},l_=class{stage;handlers;theme;decor=null;envMap;anisotropy;kit=null;chips;inlayAttr;glowAttr;sockets;socketRings;emptyRings;cutRings;hintRings;sleeves;ghostRings;focusRing;links;pedestal=null;sparks=new $g;waves=new e_;world=new Ua;tagLayer;position=[];preview=[];player=0;views=[];flights=[];guide={source:null,complete:!1,moves:[],any:new Map,next:new Map};ghost=null;focusPile=-1;hover=null;pendingPointer=null;interactive=!0;motion=!0;attract=!1;pageIndex=0;revision=0;extent={halfW:2,halfD:1,top:2};layoutKey=``;insets={top:0,right:0,bottom:0,left:0};cam={yaw:o_.yaw,pitch:o_.pitch,zoom:1,yawT:o_.yaw,pitchT:o_.pitch,zoomT:1,fit:0,fitT:14,targetY:1,targetYT:1};orbitSpin=0;shadowsDirty=!0;chipsDirty=!0;tmp={m:new ha,q:new Gi,s:new Z,p:new Z,c:new Q,v:new Z,e:new Ta};ray=new td;ndc=new X;cleanup=[];constructor(e,t,n){this.handlers=t,this.motion=n.motion,this.attract=!!n.attract,this.stage=new zh(e,{quality:n.quality,fov:38});let{renderer:r,scene:i}=this.stage;r.domElement.setAttribute(`role`,`application`),r.domElement.setAttribute(`aria-roledescription`,`plateau 3D`),this.anisotropy=Math.min(8,r.capabilities.getMaxAnisotropy()),this.envMap=Xg(r),i.environment=this.envMap,i.add(this.world,this.sparks.points,this.waves.group);let a=(e,t={})=>new as({color:e,...t});this.sockets=new ks(new sc(Bh+.16,Bh+.24,.1,40),new Jl({color:`#0f151c`,metalness:.8,roughness:.32}),t_),this.sockets.receiveShadow=!0,this.socketRings=new ks(new Fl(Bh+.2,.022,6,56),a(`#ffffff`),t_),this.emptyRings=new ks(h_(Bh+.02,.035,22),a(`#ffffff`,{transparent:!0,opacity:.75}),t_),this.cutRings=new ks(new Fl(Bh+.12,.028,6,56),a(`#ffffff`),t_);let o={transparent:!0,depthWrite:!1,blending:2};this.hintRings=new ks(new Fl(Bh+.075,.016,6,56),a(`#ffffff`,o),432),this.hintRings.renderOrder=2,this.sleeves=new ks(new sc(Bh+.1,Bh+.1,1,40,1,!0),a(`#ffffff`,{...o,opacity:.22,side:2}),t_),this.ghostRings=new ks(h_(Bh+.16,.03,28),a(`#ffffff`),t_),this.focusRing=new _s(new Fl(Bh+.34,.035,6,64),a(`#ffffff`)),this.focusRing.rotation.x=Math.PI/2,this.focusRing.visible=!1,this.links=new Ks(new qo,new Ql({color:`#ffffff`,dashSize:.14,gapSize:.1,transparent:!0,opacity:.85})),this.links.frustumCulled=!1;for(let e of[this.sockets,this.socketRings,this.emptyRings,this.cutRings,this.hintRings,this.sleeves,this.ghostRings])e.count=0,e.frustumCulled=!1,e.instanceMatrix.setUsage(xi);i.add(this.sockets,this.socketRings,this.emptyRings,this.cutRings,this.hintRings,this.sleeves,this.ghostRings,this.focusRing,this.links),this.tagLayer=Object.assign(document.createElement(`div`),{className:`pile-tags`}),this.tagLayer.setAttribute(`aria-hidden`,`true`),e.appendChild(this.tagLayer),this.stage.onResize=()=>this.relayout(),this.stage.onQuality=e=>{this.buildChips(e),this.handlers.onQuality?.(e)},this.stage.onFps=e=>this.handlers.onFps?.(e),this.stage.afterRender=()=>this.placeTags(),this.buildChips(this.stage.level),this.setTheme(n.theme),this.stage.add(this.step),this.bindInput(),this.applyAttract(),this.resetCamera(),Object.assign(this.cam,{yaw:this.cam.yawT,pitch:this.cam.pitchT,zoom:this.cam.zoomT}),this.relayout()}setTheme(e){let t=bt(e);if(this.theme?.id===t.id&&this.decor)return;this.theme=t;let n=this.stage.scene;if(this.decor){this.world.remove(this.decor.group);for(let e of this.decor.clocks)this.stage.clocks.delete(e);this.decor.dispose()}this.decor=Jg(t,{particles:!0}),this.world.add(this.decor.group);for(let e of this.decor.clocks)this.stage.clocks.add(e);n.background=new Q(t.background),n.fog=new Za(t.background,Yg(t)),n.environmentIntensity=t.id===`casino`?.55:1,this.stage.setLook(this.decor.look),this.sparks.setShape(this.decor.sparkShape),this.shadowCaster(this.decor.key),this.kit?.dispose(),this.kit=ag(t.chips.material,this.anisotropy),this.chips.material=this.kit.material,this.kit.highlight.set(this.player?t.warm:t.accent);let r=new Q(t.accent);this.emptyRings.material.color.copy(r).multiplyScalar(.8),this.focusRing.material.color.copy(r).multiplyScalar(2),this.cutRings.material.color.set(this.player?t.warm:t.accent).multiplyScalar(2.2),this.sockets.material.color.set(t.id===`casino`?`#1b2a20`:t.pedestal).multiplyScalar(1.4),this.layoutKey=``,this.position.length&&this.rebuildViews(!1);let i=this.attract?t.camera===`low`?.34:.39:t.camera===`low`?o_.lowPitch:o_.pitch;(Math.abs(this.cam.pitchT-o_.pitch)<.2||this.attract)&&(this.cam.pitchT=i),this.stage.refreshShadows(),this.stage.warmUp()}setQuality(e){this.stage.setQuality(e)}setAttract(e){e!==this.attract&&(this.attract=e,this.applyAttract(),this.resetCamera(),this.relayout())}setActive(e){this.stage.setPaused(!e)}setAmbient(e){this.stage.setAmbient(e)}setMotion(e){this.motion=e&&!this.stage.reducedMotion,this.stage.invalidate()}setInsets(e){Object.entries(e).every(([e,t])=>Math.abs(this.insets[e]-t)<1)||(this.insets={...e},this.relayout())}setInteractive(e){this.interactive=e,e||this.setHover(null),this.stage.renderer.domElement.style.cursor=e?`grab`:`default`,this.tagLayer.classList.toggle(`locked`,!e)}get pageSize(){let e=this.stage.container.clientWidth-this.insets.left-this.insets.right,t=this.stage.container.clientHeight-this.insets.top-this.insets.bottom;return e<600||t<440?n_:t_}get page(){return this.pageIndex}get pageCount(){return Math.max(1,Math.ceil(this.position.length/this.pageSize))}get pageRange(){let e=this.pageSize,t=this.pageIndex*e;return[t,Math.min(this.position.length,t+e)]}setPage(e){let t=Math.max(0,Math.min(this.pageCount-1,e));t!==this.pageIndex&&(this.pageIndex=t,this.revision++,this.rebuildViews(this.motion?`drop`:!1),this.handlers.onPage?.(t))}revealPile(e){this.setPage(Math.floor(e/this.pageSize))}setPosition(e,t=!1){let n=this.position;if(this.position=e.slice(),this.preview=e.slice(),this.ghost=null,this.clearGuide(),this.revision++,this.describe(),this.pageIndex>=this.pageCount&&(this.pageIndex=0),t===`settle`&&n.length===e.length&&this.views.length){for(let t of this.views){let r=n[t.index],i=e[t.index];if(r===i)continue;let a=Math.min(r,18),o=Math.min(i,18);if(i<r&&this.motion)for(let e=o;e<a;e++)this.launch(t,e,0,!0);if(t.count=i,t.removal=0,o>a&&this.motion)for(let e=a;e<o;e++)Object.assign(t.chips[e],{y:2.2+(e-a)*.25,v:0,delay:(e-a)*.03})}this.applyTargets(),this.updateStatics()}else this.rebuildViews(t===`drop`&&this.motion?`drop`:!1);this.shadowsDirty=!0,this.chipsDirty=!0,this.stage.invalidate()}setPreview(e,t){this.preview=e.slice(),t!==this.player&&(this.player=t,this.kit?.highlight.set(t?this.theme.warm:this.theme.accent),this.cutRings.material.color.set(t?this.theme.warm:this.theme.accent).multiplyScalar(2.2));for(let t of this.views)t.removal=Math.max(0,t.count-(e[t.index]??t.count));this.updateGuides(),this.applyTargets()}playMove(e,t){this.revision++,this.ghost=null,this.clearGuide();let[n,r]=this.pageRange,i=0;for(let n of this.views){let r=e[n.index]-t[n.index];if(r<=0)continue;let a=Math.min(e[n.index],18),o=Math.min(t[n.index],18),s=a===o?Math.min(r,6):a-o;if(this.motion){for(let e=0;e<s;e++)this.launch(n,a-1-e,i++*.045,!1,e===s-1);if(a===o)for(let e=0;e<s;e++)Object.assign(n.chips[o-1-e],{y:1.8+e*.2,v:0,delay:.35+e*.03});this.waves.spawn(n.base,n.tint,1.9,.6),this.handlers.onFx?.(`burst`,this.pan(n.base))}n.count=t[n.index],n.removal=0}this.position=t.slice(),this.preview=t.slice(),(n>0||r<t.length)&&this.revision++,this.applyTargets(),this.updateStatics(),this.shadowsDirty=!0,this.chipsDirty=!0,this.stage.invalidate()}reject(){for(let e of this.views)if(e.removal){for(let t=0;t<Math.min(e.count,18);t++)e.chips[t].v+=t>=Math.min(e.count,18)-e.removal?-3:0;this.motion&&this.waves.spawn(e.base,new Q(`#ff4d4d`),1.4,.45)}this.stage.invalidate()}celebrate(e){let t=new Q(e?this.theme.warm:this.theme.accent);if(!this.motion)return;this.waves.spawn(new Z(0,Ig,0),t,14,2.4);let n=0,r=0,i=new Q(this.theme.warm);this.stage.add(e=>{for(n+=e;n>r*.16&&r<12;){for(let e of this.views){let t=this.chipY(Math.min(e.count,18))+.3;this.sparks.emit(this.tmp.v.set(e.base.x,t,e.base.z),r%2?i:e.tint,Math.max(3,Math.round(36/Math.max(1,this.views.length))),2.4,5.5,.14,2.6)}r++}return r<12}),this.orbitSpin=6}setLegal(e,t=-1,n=!1){let r=this.guide;if(e!==r.source||n!==r.complete){r.source=e,r.complete=n,r.moves=[],r.any.clear();for(let t of e??[]){if(t.after.length!==this.position.length)continue;let e=[],n=!1;if(t.after.forEach((t,r)=>{let i=this.position[r]-t;i>0?e.push([r,i]):i<0&&(n=!0)}),!n&&e.length){r.moves.push(e);for(let[t,n]of e)p_(r.any,t,n)}}this.updateGuides(),this.applyTargets()}this.setGhost(t>=0&&e?.[t]?e[t].after:null)}cutAllowed(e,t){let n=this.guide;return!n.complete||!n.moves.length||t<=0||this.position[e]-(this.preview[e]??this.position[e])===t||!!(n.next.get(e)?.has(t)||n.any.get(e)?.has(t))}setGhost(e){this.ghost=e?e.slice():null,this.updateGhost(),this.stage.invalidate()}setFocusPile(e){this.focusPile=e,e>=0&&this.revealPile(e),this.updateStatics(),this.stage.invalidate()}orbit(e,t){this.cam.yawT+=e,this.cam.pitchT=Math.max(o_.minPitch,Math.min(o_.maxPitch,this.cam.pitchT+t)),this.orbitSpin=0,this.stage.invalidate()}zoomBy(e){this.cam.zoomT=Math.max(o_.minZoom,Math.min(o_.maxZoom,this.cam.zoomT*e)),this.stage.invalidate()}resetCamera(){let e=this.attract?-.19:o_.yaw,t=this.cam.yaw-e;this.cam.yaw=e+(t%s_+s_+Math.PI)%s_-Math.PI,this.cam.yawT=e,this.cam.pitchT=this.attract?this.theme.camera===`low`?.34:.39:this.theme.camera===`low`?o_.lowPitch:o_.pitch,this.cam.zoomT=1,this.orbitSpin=0,this.stage.invalidate()}pileScreen(e){let t=this.views.find(t=>t.index===e);return t?{x:t.tagX,y:t.tagY}:null}dispose(){for(let e of this.cleanup)e();this.decor?.dispose(),this.kit?.dispose(),this.sparks.dispose(),this.waves.dispose(),this.envMap.dispose(),og(),this.stage.dispose(),this.tagLayer.remove()}describe(){let e=this.stage.renderer.domElement;if(this.attract){e.setAttribute(`aria-label`,``);return}let t=this.position.slice(0,24).map((e,t)=>`Pile ${t+1} : ${e} jeton${e>1?`s`:``}`).join(`. `),n=this.position.length>24?` Et ${this.position.length-24} autres piles.`:``;e.setAttribute(`aria-label`,`Arène 3D. ${t}.${n} Flèches gauche et droite : choisir une pile ; haut et bas : ajuster le retrait ; Entrée : jouer.`)}applyAttract(){let e=this.stage.renderer.domElement;e.tabIndex=this.attract?-1:0,this.attract?e.setAttribute(`aria-hidden`,`true`):e.removeAttribute(`aria-hidden`),this.describe(),this.tagLayer.hidden=this.attract,this.attract&&(this.setHover(null),this.orbitSpin=0),this.updateStatics(),this.stage.invalidate()}buildChips(e){let[t,n]=c_[e],r=Uh(t,n);if(this.chips){r.setAttribute(`aInlay`,this.inlayAttr),r.setAttribute(`aGlow`,this.glowAttr),this.chips.geometry.dispose(),this.chips.geometry=r,this.stage.invalidate();return}let i=new ks(r,new Jl,r_);i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i.instanceMatrix.setUsage(xi),i.instanceColor=new xs(new Float32Array(r_*3),3).setUsage(xi),this.inlayAttr=new xs(new Float32Array(r_*3),3).setUsage(xi),this.glowAttr=new xs(new Float32Array(r_*2),2).setUsage(xi),r.setAttribute(`aInlay`,this.inlayAttr),r.setAttribute(`aGlow`,this.glowAttr),i.count=0,this.chips=i,this.chipsDirty=!0,this.stage.scene.add(i)}shadowCaster(e){let t=Lh[this.stage.level].shadow||512;e.castShadow=!0,e.shadow.bias=-4e-4,e.shadow.normalBias=.02,e.shadow.mapSize.set(t,t)}rebuildViews(e){for(let e of this.views)e.tag.remove();let[t,n]=this.pageRange,r=n-t,i=r<=5?r:r<=12?Math.ceil(r/2):6,a=Math.max(1,Math.ceil(r/Math.max(1,i))),o=r>12?1.75:2.05,s=r>12?2.05:2.4;this.views=[];for(let n=0;n<r;n++){let c=t+n,l=Math.floor(n/i),u=(n%i-(Math.min(i,r-l*i)-1)/2)*o,d=(l-(a-1)/2)*s-(a===1?.035*u*u:0),f=this.position[c],p=Array.from({length:18},(t,r)=>({y:e?5+r*.32:0,v:0,target:0,glow:0,glowTarget:0,mix:0,delay:e?.15+n*.07+r*.022:0,spin:m_(c*31+r)*Math.PI*2,dx:(m_(c*7+r*3)-.5)*.035,dz:(m_(c*13+r*5)-.5)*.035})),m=document.createElement(`button`);m.type=`button`,m.className=`pile-tag`,m.tabIndex=-1,m.addEventListener(`click`,e=>{e.stopPropagation(),this.interactive&&this.position[c]>0&&this.handlers.onTag(c)}),m.addEventListener(`pointerenter`,()=>{this.interactive&&this.handlers.onHoverPile?.(c)}),this.tagLayer.appendChild(m),this.views.push({index:c,count:f,base:new Z(u,Ig,d),chips:p,tint:new Q(xt(this.theme,c)),inlay:new Q(St(this.theme,c)),tag:m,tagKey:``,tagX:-999,tagY:-999,removal:Math.max(0,f-(this.preview[c]??f)),dim:0,dimTarget:0,hints:new Float32Array(18)})}e&&this.handlers.onFx?.(`drop`,0);let c=Math.max(1.2,...this.views.map(e=>Math.abs(e.base.x)))+Bh,l=Math.max(.8,...this.views.map(e=>Math.abs(e.base.z)))+Bh,u=this.chipY(Math.min(18,Math.max(1,...this.views.map(e=>e.count))))+.7;this.extent={halfW:c,halfD:l,top:u};let d=`${this.theme.id}:${c.toFixed(2)}:${l.toFixed(2)}`;if(d!==this.layoutKey){this.layoutKey=d,this.pedestal&&(this.world.remove(this.pedestal),g_(this.pedestal)),this.pedestal=Gg(this.theme,c,l),this.world.add(this.pedestal);let e=this.decor?.key;if(e instanceof Iu){let t=Math.max(c,l)+2.5;Object.assign(e.shadow.camera,{left:-t,right:t,top:t,bottom:-t,near:1,far:40}),e.shadow.camera.updateProjectionMatrix()}}this.applyTargets(),this.updateGhost(),this.relayout(),this.shadowsDirty=!0,this.chipsDirty=!0}clearGuide(){let e=this.guide;e.source=null,e.moves=[],e.any.clear(),e.next.clear()}updateGuides(){let e=this.guide;if(e.next.clear(),!e.moves.length)return;let t=[];this.position.forEach((e,n)=>{let r=e-(this.preview[n]??e);r>0&&t.push([n,r])});for(let n of e.moves){let r=0,i=-1;for(let[e,a]of t){let t=0;for(let[r,i]of n)if(r===e){t=i;break}if(t!==a&&++r===1&&(i=e),r>1)break}if(r===0)for(let[t,r]of n)p_(e.next,t,r);else if(r===1){for(let[t,r]of n)if(t===i){p_(e.next,t,r);break}}}}paintHints(e){let t=this.guide,n=e.hints;if(n.fill(0),e.dimTarget=0,this.attract||!t.moves.length&&!t.complete)return;let r=t.any.get(e.index),i=t.next.get(e.index);if(t.complete&&!r?.size&&e.count>0){e.dimTarget=1;return}let a=Math.min(e.count,18),o=(t,r)=>{if(!(!t||t.size>=e.count))for(let i of t){let t=a-this.shownRemoval(e,i);t>=0&&t<a&&(n[t]=Math.max(n[t],r))}},s=this.position.some((e,t)=>e>(this.preview[t]??e));s&&!e.removal&&new Set([...r??[],...i??[]]).size<e.count&&o(r,.16),o(i,s?.5:.32)}chipY(e){return Ig+.05+Vh/2+e*Vh}shownRemoval(e,t){let n=Math.min(e.count,18);return t<=0?0:t>=e.count?n:Math.min(t,n-1)}applyTargets(){for(let e of this.views){this.paintHints(e);let t=Math.min(e.count,18),n=this.shownRemoval(e,e.removal),r=this.hover?.pile===e.index,i=r?this.shownRemoval(e,this.hover.removal):0,a=!r||this.cutAllowed(e.index,this.hover.removal);e.chips.forEach((r,o)=>{if(o>=t){r.target=0,r.glowTarget=0;return}let s=t-o,c=s<=n,l=!c&&s<=i,u=e.hints[o];r.target=c?i_.select:l?i_.hover*(a?1:.35):0,r.glowTarget=c?1.6:l&&a?.55:u,r.mix=c||l&&a||u>0?1:0})}this.updateStatics(),this.stage.invalidate()}updateStatics(){let{m:e,q:t,s:n,p:r,c:i}=this.tmp,a=0,o=0,s=0,c=0,l=new Q(this.player?this.theme.warm:this.theme.accent),u=t.setFromAxisAngle(Ha.DEFAULT_UP,0),d=new Gi().setFromEuler(new Ta(Math.PI/2,0,0));for(let t of this.views){e.compose(r.set(t.base.x,Ig+.05,t.base.z),u,n.set(1,1,1)),this.sockets.setMatrixAt(a,e),e.compose(r.set(t.base.x,Ig+.1,t.base.z),d,n.set(1,1,1)),this.socketRings.setMatrixAt(a,e);let f=this.hover?.pile===t.index||t.removal>0;this.socketRings.setColorAt(a,i.copy(t.tint).multiplyScalar(t.count?(f?2.6:1.3)*(1-.7*t.dimTarget):.35)),a++,t.count||(e.compose(r.set(t.base.x,Ig+.12,t.base.z),d,n.set(1,1,1)),this.emptyRings.setMatrixAt(o++,e));let p=this.shownRemoval(t,t.removal),m=Math.min(t.count,18);p>0&&(e.compose(r.set(t.base.x,this.chipY(m-p)-Vh/2+.01,t.base.z),d,n.set(1,1,1)),this.cutRings.setMatrixAt(s++,e));for(let a=0;a<m;a++){let o=t.hints[a];!o||p>0&&a===m-p||(e.compose(r.set(t.base.x,this.chipY(a)-Vh/2+.006+t.chips[a].target,t.base.z),d,n.set(1,1,1)),this.hintRings.setMatrixAt(c,e),this.hintRings.setColorAt(c++,i.copy(l).multiplyScalar(o>=.3?3.2*o:2.4*o)))}}for(let[e,t]of[[this.sockets,a],[this.socketRings,a],[this.emptyRings,o],[this.cutRings,s],[this.hintRings,c]])e.count=t,e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0);let f=this.views.find(e=>e.index===this.focusPile);this.focusRing.visible=!!f&&!this.attract,f&&this.focusRing.position.set(f.base.x,Ig+.08,f.base.z),this.tagLayer.dataset.player=String(this.player)}updateGhost(){let{m:e,q:t,s:n,p:r}=this.tmp,i=0,a=[],o=t.identity();if(this.ghost)for(let s of this.views){let c=this.ghost[s.index];if(c===void 0||c>=s.count)continue;let l=Math.min(s.count,18),u=this.shownRemoval(s,s.count-c),d=this.chipY(l-u)-Vh/2,f=this.chipY(l)-Vh/2;e.compose(r.set(s.base.x,(d+f)/2,s.base.z),o,n.set(1,Math.max(.05,f-d),1)),this.sleeves.setMatrixAt(i,e),e.compose(r.set(s.base.x,d,s.base.z),this.tmp.q.setFromEuler(this.tmp.e.set(Math.PI/2,0,0)),n.set(1,1,1)),this.ghostRings.setMatrixAt(i,e),t.identity(),a.push(s.base.x,d,s.base.z),i++}this.sleeves.count=i,this.ghostRings.count=i,this.sleeves.instanceMatrix.needsUpdate=!0,this.ghostRings.instanceMatrix.needsUpdate=!0;let s=[];for(let e=0;e+3<a.length;e+=3)s.push(a[e],a[e+1],a[e+2],a[e+3],a[e+4],a[e+5]);let c=new qo;c.setAttribute(`position`,new Fo(s,3)),this.links.geometry.dispose(),this.links.geometry=c,this.links.computeLineDistances();let l=new Q(this.theme.warm).multiplyScalar(2);this.sleeves.material.color.copy(l).multiplyScalar(.5),this.ghostRings.material.color.copy(l),this.links.material.color.copy(l)}launch(e,t,n,r,i=!1){if(this.flights.length>432)return;let a=e.chips[t],o=new Z(e.base.x+a.dx,this.chipY(t)+Math.max(0,a.y),e.base.z+a.dz),s=new Z(e.base.x,0,e.base.z).normalize().multiplyScalar(.6+Math.random()*.6);this.flights.push({from:o,t:0,delay:n,duration:r?.35:.8,spin:a.spin,tint:e.tint,inlay:e.inlay,drift:new Z(s.x+(Math.random()-.5)*.8,r?.3:1.6+Math.random()*.9,s.z+(Math.random()-.5)*.8),dissolve:r,burst:i})}step=(e,t)=>{this.resolveHover();let n=this.stepCamera(e),r=this.stepChips(e,t),i=this.stepFlights(e);return this.sparks.update(e),this.waves.update(e),this.decor?.animate(t),(r||i||this.chipsDirty)&&(this.writeChips(),this.chipsDirty=!1),(r||i||this.shadowsDirty)&&this.stage.level!==`eco`&&(this.stage.refreshShadows(),this.shadowsDirty=!1),n||r||i||this.sparks.active||this.waves.active};stepCamera(e){let t=this.cam;this.attract&&this.motion&&this.stage.level!==`eco`&&(t.yawT+=e*.035),this.orbitSpin>0&&this.motion&&(t.yawT+=e*.12,this.orbitSpin-=e);let n=1-Math.exp(-e*7),r=Math.abs(t.fitT-t.fit)>.001||Math.abs(t.targetYT-t.targetY)>1e-4,i=r||Math.abs(t.yawT-t.yaw)>1e-4||Math.abs(t.pitchT-t.pitch)>1e-4||Math.abs(t.zoomT-t.zoom)>1e-4;t.yaw+=(t.yawT-t.yaw)*n,t.pitch+=(t.pitchT-t.pitch)*n,t.zoom+=(t.zoomT-t.zoom)*n;let a=1-Math.exp(-e*4);return t.fit+=(t.fitT-t.fit)*a,t.targetY+=(t.targetYT-t.targetY)*a,this.placeCamera(this.stage.camera,t.yaw,t.pitch,t.fit*t.zoom),i&&!(this.attract&&!r&&this.orbitSpin<=0&&Math.abs(t.pitchT-t.pitch)<.001&&Math.abs(t.zoomT-t.zoom)<.001)}placeCamera(e,t,n,r,i=this.cam.targetY){let a=this.tmp.v.set(0,i,0),o=Math.min(r,26);e.position.set(Math.sin(t)*Math.cos(n)*o,a.y+Math.sin(n)*o,Math.cos(t)*Math.cos(n)*o),e.lookAt(a),e.updateMatrixWorld()}stepChips(e,t){let n=!1,r=1-Math.exp(-e*12);for(let i of this.views){let a=Math.min(i.count,18);Math.abs(i.dim-i.dimTarget)>.001&&(i.dim+=(i.dimTarget-i.dim)*(1-Math.exp(-e*6)),n=!0);for(let o=0;o<a;o++){let a=i.chips[o];if(a.delay>0){a.delay-=e,n=!0;continue}let s=a.target===i_.select&&this.motion?Math.sin(t*2.4+o*.4)*.025:0,c=a.target+s;if(Math.abs(a.y-c)>1e-4||Math.abs(a.v)>.001){let t=a.y>.6;a.v+=(a_.k*(c-a.y)-a_.c*a.v)*e,a.y+=a.v*e,a.y<0&&a.target===0&&a.v<0&&((t||a.v<-4)&&this.landed(i,o),a.y=-a.y*.25,a.v=-a.v*.25),n=!0}Math.abs(a.glow-a.glowTarget)>.001&&(a.glow+=(a.glowTarget-a.glow)*r,n=!0)}}return n}landedAt=0;landed(e,t){let n=performance.now();n-this.landedAt<45||(this.landedAt=n,t<3&&this.handlers.onFx?.(`land`,this.pan(e.base)))}stepFlights(e){return this.flights.length?(this.flights=this.flights.filter(t=>{if(t.delay>0)return t.delay-=e,!0;if(t.t+=e,t.t>=t.duration){let e=this.flightPosition(t,1,this.tmp.p);return this.motion&&this.sparks.emit(e,t.tint,t.dissolve?4:9,1.2,1.2,.1,.7),t.burst&&this.waves.spawn(new Z(e.x,Ig,e.z),t.tint,1.2,.5),!1}return!t.dissolve&&Math.random()<.5&&this.sparks.emit(this.flightPosition(t,t.t/t.duration,this.tmp.p),t.tint,1,.3,.2,.07,.4),!0}),!0):!1}flightPosition(e,t,n){let r=1-(1-t)**2;return n.set(e.from.x+e.drift.x*r,e.from.y+e.drift.y*r,e.from.z+e.drift.z*r)}writeChips(){if(!this.chips)return;let{m:e,q:t,s:n,p:r,e:i}=this.tmp,a=this.chips.instanceColor,o=0;for(let i of this.views){let s=Math.min(i.count,18),c=1-.3*i.dim,l=.65*i.dim,u=this.tmp.c.copy(i.tint),d=u.r*.3+u.g*.59+u.b*.11;u.setRGB((u.r+(d-u.r)*l)*c,(u.g+(d-u.g)*l)*c,(u.b+(d-u.b)*l)*c);for(let l=0;l<s;l++){let s=i.chips[l];r.set(i.base.x+s.dx,this.chipY(l)+s.y,i.base.z+s.dz),t.setFromAxisAngle(Ha.DEFAULT_UP,s.spin),e.compose(r,t,n.set(1,1,1)),this.chips.setMatrixAt(o,e),a.setXYZ(o,u.r,u.g,u.b),this.inlayAttr.setXYZ(o,i.inlay.r*c,i.inlay.g*c,i.inlay.b*c),this.glowAttr.setXY(o,s.glow,s.mix),o++}}for(let s of this.flights){if(o>=r_)break;let c=s.delay>0?0:Math.min(s.t/s.duration,1);this.flightPosition(s,c,r),i.set(c*Math.PI*(s.dissolve?.5:2.2),s.spin+c*2,0),t.setFromEuler(i);let l=s.dissolve?1-c:c<.6?1:1-(c-.6)/.4;e.compose(r,t,n.setScalar(Math.max(.001,l))),this.chips.setMatrixAt(o,e),a.setXYZ(o,s.tint.r,s.tint.g,s.tint.b),this.inlayAttr.setXYZ(o,s.inlay.r,s.inlay.g,s.inlay.b),this.glowAttr.setXY(o,.6+c*2.4,0),o++}this.chips.count=o,this.chips.instanceMatrix.needsUpdate=!0,a.needsUpdate=!0,this.inlayAttr.needsUpdate=!0,this.glowAttr.needsUpdate=!0}relayout(){let e=this.stage.camera,t=this.stage.container.clientWidth,n=this.stage.container.clientHeight;if(!t||!n)return;let r=this.insets,i=Math.max(120,t-r.left-r.right),a=Math.max(120,n-r.top-r.bottom);e.fov=t/n<.8?50:38,e.aspect=t/n;let o=r.left+i/2,s=r.top+a/2;e.setViewOffset(t,n,t/2-o,n/2-s,t,n),e.updateProjectionMatrix(),this.sparks.setScale(n*this.stage.renderer.getPixelRatio());let c=this.pageSize;this.position.length&&this.pageIndex*c>=this.position.length&&(this.pageIndex=0);let{halfW:l,halfD:u,top:d}=this.extent;this.cam.targetYT=Math.min(d*.42,1.6);let f=this.theme.camera===`low`?o_.lowPitch:o_.pitch,p={x0:-1+2*r.left/t,x1:1-2*r.right/t,y0:-1+2*r.bottom/n,y1:1-2*r.top/n},m=.06*(p.x1-p.x0),h=.08*(p.y1-p.y0),g=e.clone(),_=[];for(let e of[-l,l])for(let t of[-u,u])for(let n of[0,d])_.push(new Z(e,n,t));let v=e=>(this.placeCamera(g,o_.yaw,f,e,this.cam.targetYT),g.updateProjectionMatrix(),_.every(e=>{let t=e.clone().project(g);return t.z<1&&t.x>p.x0+m&&t.x<p.x1-m&&t.y>p.y0+h&&t.y<p.y1-h})),y=4,b=60;for(let e=0;e<22;e++){let e=(y+b)/2;v(e)?b=e:y=e}this.cam.fitT=this.attract?b*1.05:b,this.cam.fit||(this.cam.fit=this.cam.fitT,this.cam.targetY=this.cam.targetYT),this.placeCamera(e,this.cam.yaw,this.cam.pitch,this.cam.fit*this.cam.zoom),this.stage.invalidate()}pan(e){let t=this.tmp.v.copy(e).project(this.stage.camera);return Math.max(-1,Math.min(1,t.x*.8))}placeTags(){if(this.attract)return;let e=this.stage.container.clientWidth,t=this.stage.container.clientHeight,n=this.tmp.v,r=[],i=[...this.views].sort((e,t)=>t.base.z-e.base.z);for(let a of i){let i=Math.min(a.count,18);n.set(a.base.x,this.chipY(Math.max(i,1))+.15,a.base.z).project(this.stage.camera);let o=(n.x+1)/2*e,s=(1-n.y)/2*t-8;for(let e of r)Math.abs(e.x-o)<64&&Math.abs(e.y-s)<36&&(s=e.y-38);r.push({x:o,y:s}),(Math.abs(o-a.tagX)>.3||Math.abs(s-a.tagY)>.3)&&(a.tagX=o,a.tagY=s,a.tag.style.transform=`translate3d(${o.toFixed(1)}px, ${s.toFixed(1)}px, 0) translate(-50%, -100%)`);let c=a.count-a.removal,l=`${a.count}:${a.removal}:${+(this.hover?.pile===a.index)}:${+(this.focusPile===a.index)}:${a.dimTarget}`;if(l===a.tagKey)continue;a.tagKey=l;let u=a.count>18&&this.views.length<=12;a.tag.innerHTML=`<span>Pile ${String(a.index+1).padStart(2,`0`)}</span><b>${f_(a.count)}</b>${a.removal?`<i>→ ${f_(c)}</i>`:``}${u?`<small>${e<600?`18 dessinés`:`18 jetons représentés`}</small>`:``}`,a.tag.style.setProperty(`--tint`,`#${a.tint.getHexString()}`),a.tag.classList.toggle(`active`,a.removal>0),a.tag.classList.toggle(`hot`,this.hover?.pile===a.index||this.focusPile===a.index),a.tag.classList.toggle(`empty`,a.count===0),a.tag.classList.toggle(`muted`,a.dimTarget>0),a.tag.setAttribute(`aria-label`,`Pile ${a.index+1} : ${a.count} jetons`)}}bindInput(){let e=this.stage.renderer.domElement,t=new Map,n=null,r=0,i=(t,n,r)=>{e.addEventListener(t,n,r),this.cleanup.push(()=>e.removeEventListener(t,n,r))};i(`pointerdown`,i=>{this.attract||(e.setPointerCapture(i.pointerId),t.set(i.pointerId,{x:i.clientX,y:i.clientY}),t.size===1?n={x:i.clientX,y:i.clientY,button:i.button,revision:this.revision,moved:!1}:(n=null,r=0),this.orbitSpin=0)}),i(`pointermove`,i=>{if(this.attract)return;let a=t.get(i.pointerId);if(i.pointerType!==`touch`&&!a){this.pendingPointer={x:i.clientX,y:i.clientY},this.stage.invalidate();return}if(!a)return;let o={x:i.clientX,y:i.clientY};if(t.set(i.pointerId,o),t.size===2){let[e,n]=[...t.values()],i=Math.hypot(e.x-n.x,e.y-n.y);r&&this.zoomBy(r/i),r=i}else n&&!n.moved&&Math.hypot(o.x-n.x,o.y-n.y)>5&&(n.moved=!0,e.style.cursor=`grabbing`,this.setHover(null)),n?.moved?this.orbit(-(o.x-a.x)*.006,(o.y-a.y)*.004):i.pointerType!==`touch`&&(this.pendingPointer=o,this.stage.invalidate())});let a=i=>{t.delete(i.pointerId),t.size<2&&(r=0),e.style.cursor=this.interactive?`grab`:`default`;let a=n&&!n.moved&&n.revision===this.revision&&i.type===`pointerup`,o=n?.button;if(n=null,!a||!this.interactive)return;if(o===2){this.handlers.onClear();return}if(o!==0)return;let s=this.pick(i.clientX,i.clientY);s?this.handlers.onPick(s.pile,s.removal):this.handlers.onClear()};i(`pointerup`,a),i(`pointercancel`,a),i(`pointerleave`,e=>{e.pointerType!==`touch`&&(this.pendingPointer=null,this.setHover(null))}),i(`contextmenu`,e=>e.preventDefault());let o=0;i(`wheel`,e=>{if(!this.attract){if(e.preventDefault(),Math.abs(e.deltaX)>Math.abs(e.deltaY)*1.5&&this.pageCount>1){let t=performance.now();t-o>250&&(o=t,this.setPage(this.pageIndex+Math.sign(e.deltaX)))}else this.interactive&&!e.ctrlKey&&this.hover?this.handlers.onAdjust(this.hover.pile,e.deltaY<0?1:-1):this.zoomBy(Math.exp(e.deltaY*.0012))}},{passive:!1})}resolveHover(){if(!this.pendingPointer)return;let{x:e,y:t}=this.pendingPointer;this.pendingPointer=null;let n=this.interactive?this.pick(e,t):null;this.setHover(n),this.stage.renderer.domElement.style.cursor=n?this.cutAllowed(n.pile,n.removal)?`pointer`:`not-allowed`:this.interactive?`grab`:`default`}setHover(e){if(e?.pile===this.hover?.pile&&e?.removal===this.hover?.removal)return;let t=e?.pile!==this.hover?.pile;this.hover=e,t&&this.handlers.onHoverPile?.(e?.pile??null),this.applyTargets()}pick(e,t){let n=this.stage.renderer.domElement.getBoundingClientRect();this.ndc.set((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.stage.camera);let{origin:r,direction:i}=this.ray.ray,a=null,o=Bh+.04;for(let e of this.views){let t=Math.min(e.count,18);if(!t)continue;let n=this.chipY(0)-Vh/2,s=e.removal?i_.select:0,c=this.chipY(t)-Vh/2+s,l=r.x-e.base.x,u=r.z-e.base.z,d=i.x*i.x+i.z*i.z,f=2*(l*i.x+u*i.z),p=l*l+u*u-o*o,m=f*f-4*d*p,h=1/0;if(m>=0&&d>1e-9){let e=(-f-Math.sqrt(m))/(2*d),t=r.y+i.y*e;e>0&&t>=n&&t<=c&&(h=e)}if(Math.abs(i.y)>1e-6){let e=(c-r.y)/i.y,t=l+i.x*e,n=u+i.z*e;e>0&&e<h&&t*t+n*n<=o*o&&(h=e)}if(h===1/0||a&&h>=a.t)continue;let g=Math.min(c-.001,r.y+i.y*h),_=this.shownRemoval(e,e.removal),v=this.chipY(t-_)-Vh/2,y=_&&g>v?g-s:g,b=t-Math.max(0,Math.min(t-1,Math.floor((y-n)/Vh)));a={pile:e.index,removal:b>=t?e.count:b,t:h}}return a?{pile:a.pile,removal:a.removal}:null}},u_=new Intl.NumberFormat(`fr-BE`,{notation:`compact`,maximumFractionDigits:1}),d_=new Intl.NumberFormat(`fr-BE`),f_=e=>e>=1e5?u_.format(e):d_.format(e);function p_(e,t,n){let r=e.get(t);r||e.set(t,r=new Set),r.add(n)}function m_(e){let t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)}function h_(e,t,n){let r=[];for(let i=0;i<n;i++){let a=i/n*Math.PI*2;r.push(new jl(e-t,e+t,3,1,a,Math.PI*2/n*.55))}let i=[],a=[];for(let e of r){let t=i.length/3,n=e.getAttribute(`position`),r=e.getIndex();for(let e=0;e<n.count;e++)i.push(n.getX(e),n.getY(e),n.getZ(e));for(let e=0;e<r.count;e++)a.push(r.getX(e)+t);e.dispose()}let o=new qo;return o.setAttribute(`position`,new Fo(i,3)),o.setIndex(a),o.rotateX(Math.PI),o}function g_(e){e.traverse(e=>{let t=e;t.geometry?.dispose(),t.material?.dispose()})}var __=Ie({arenaApi:()=>S_,mountStage:()=>w_,showcase:()=>b_,stage:()=>y_}),v_=[9,14,18],y_=z({ready:!1,failed:``,level:`balanced`,fps:0,page:0,pageCount:1,pageRange:[0,0],hoverPile:-1,focusPile:-1}),b_=z({piles:null}),x_=null,S_={resetCamera:()=>x_?.resetCamera(),orbit:(e,t)=>x_?.orbit(e,t),zoom:e=>x_?.zoomBy(e),setPage:e=>{x_?.setPage(e),C_()},reveal:e=>{x_?.revealPile(e),C_()},ghost:e=>x_?.setGhost(e),instance:()=>x_,setInsets:e=>{x_?.setInsets(e),C_()},focusPile(e){y_.focusPile=e,x_?.setFocusPile(e),C_()}};function C_(){x_&&(y_.page=x_.page,y_.pageCount=x_.pageCount,y_.pageRange=x_.pageRange)}function w_(e){try{x_=new l_(e,{onPick(e,t){let n=Y.preview[e];Y.toggleRemoval(e,t)&&(Wn(Y.preview[e]===Y.position[e]?`deselect`:`select`,{pitch:n>Y.preview[e]?1.06:1}),S_.focusPile(e))},onTag(e){Y.toggleRemoval(e,1)&&(Wn(Y.preview[e]===Y.position[e]?`deselect`:`select`),S_.focusPile(e))},onAdjust(e,t){let n=Y.preview[e];Y.adjustRemoval(e,t),Y.preview[e]!==n&&Wn(`tick`,{pitch:.8+Math.min(1,(Y.position[e]-Y.preview[e])/Math.max(1,Y.position[e]))*.6})},onClear(){Y.clearSelection()&&Wn(`deselect`)},onHoverPile(e){y_.hoverPile=e??-1,e!==null&&!Y.locked&&Wn(`tick`,{gain:.6})},onPage(e){y_.page=e,C_()},onFx(e,t){if(e===`burst`)Gn(t,1.1);else if(e===`land`)Gn(t,.55);else if(e===`drop`)for(let e=0;e<5;e++)setTimeout(()=>Gn((Math.random()-.5)*1.2,.35),420+e*110)},onQuality(e){y_.level=e},onFps(e){y_.fps=e}},{theme:q.theme,quality:q.quality,motion:jt(),attract:J.flow!==`play`})}catch(e){return y_.failed=e instanceof Error?e.message:String(e),console.error(`Arène 3D indisponible :`,e),()=>{}}let t=x_;y_.level=t.stage.level,y_.ready=!0;let n=[],r=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),i=(e,r)=>{n=e.slice(),t.setPosition(e,r),C_()},a=[Y.on(`position`,({position:e,animate:t,fresh:a})=>{J.flow===`play`&&i(e,a?!r(e,n)&&`drop`:t?`settle`:!1)}),Y.on(`move`,({before:e,after:r})=>{n=r.slice(),t.playMove(e,r),Wn(`play`),C_()}),Y.on(`invalid`,()=>{t.reject(),Wn(`invalid`)}),Y.on(`rewind`,()=>Wn(`undo`)),Y.on(`hint`,({found:e})=>{e&&Wn(`hint`)}),Y.on(`turn`,({player:e,bot:t})=>{Y.local?Wn(`yourTurn`,{pitch:e?.84:1,gain:.7}):Wn(t?`rivalTurn`:`yourTurn`)}),Y.on(`end`,({winner:e,humanWon:n,played:r})=>{r&&(t.celebrate(e),Wn(n===!1?`defeat`:`victory`))})],o=w(()=>{_(()=>t.setTheme(q.theme)),_(()=>t.setQuality(q.quality)),_(()=>t.setMotion(jt()));let e=``;_(()=>{let a=J.flow,o=b_.piles,s=a!==e;if(e=a,t.setActive(a!==`studio`),a===`studio`)return;if(t.setAttract(a===`menu`),a===`menu`){let e=o??v_;(s||!r(e,n))&&i(e,!s&&e.length===n.length?`settle`:`drop`);return}if(!s)return;let c=u(()=>Y.position);i(c,!r(c,n)&&`drop`)}),_(()=>{J.flow===`play`&&t.setPreview(Y.preview,Y.player)}),_(()=>t.setInteractive(J.flow===`play`&&!Y.locked)),_(()=>{let e=Y.legal,n=J.flow===`play`&&q.showLegalMoves&&e.phase===`ready`&&!Y.locked;t.setLegal(n?e.moves:null,n?Y.legalFocus:-1,e.complete)}),_(()=>t.setAmbient(!J.dialog))});return()=>{o();for(let e of a)e();t.dispose(),x_=null,y_.ready=!1}}var T_=[{id:`first-move`,icon:`◇`,title:`Premier jeton`,description:`Jouer votre premier coup.`},{id:`first-win`,icon:`✦`,title:`Première victoire`,description:`Remporter une partie contre l’IA.`},{id:`beat-simple`,icon:`I`,title:`Échauffement`,description:`Battre l’IA Simple.`},{id:`beat-medium`,icon:`II`,title:`Lecture du jeu`,description:`Battre l’IA Moyenne.`},{id:`beat-hard`,icon:`III`,title:`Stratège`,description:`Battre l’IA Difficile.`},{id:`beat-godlike`,icon:`∞`,title:`Au-delà du parfait`,description:`Battre l’IA GODLIKE.`},{id:`perfect`,icon:`★`,title:`Sans faute`,description:`Battre l’IA en ne jouant que des positions P certifiées.`},{id:`unaided`,icon:`◎`,title:`Sans filet`,description:`Battre l’IA Difficile ou GODLIKE sans demander de conseil.`},{id:`combo-5`,icon:`×5`,title:`Série en or`,description:`Enchaîner cinq positions P certifiées dans une partie.`},{id:`score-1000`,icon:`1k`,title:`Le millier`,description:`Atteindre 1 000 points dans une partie.`},{id:`misere`,icon:`↯`,title:`L’art de perdre`,description:`Gagner une partie en misère contre l’IA Difficile ou GODLIKE.`},{id:`duel`,icon:`⚔`,title:`Face à face`,description:`Terminer un duel local.`},{id:`collector`,icon:`❖`,title:`Collectionneur`,description:`Terminer une partie dans cinq jeux différents.`},{id:`traveller`,icon:`◐`,title:`Grand voyageur`,description:`Jouer dans les onze ambiances.`},{id:`titan`,icon:`▲`,title:`Montagne`,description:`Terminer une partie qui comptait plus de 100 000 jetons.`},{id:`architect`,icon:`⌘`,title:`Architecte`,description:`Enregistrer un jeu de votre invention.`},{id:`scholar`,icon:`∴`,title:`Chercheur`,description:`Vérifier une stratégie dans le carnet.`}],E_=[`simple`,`medium`,`hard`,`godlike`],D_=()=>({simple:0,medium:0,hard:0,godlike:0}),O_=be(Tt.records,{version:1,finished:0,wins:D_(),losses:D_(),duels:0,moves:0,bestScore:0,bestCombo:0,streak:0,bestStreak:0,games:[],themes:[],unlocked:{},history:[]});for(let e of[`wins`,`losses`]){let t=O_[e];if(!t||typeof t!=`object`)O_[e]=D_();else for(let n of E_)Number.isFinite(t[n])||(O_[e][n]=0)}for(let e of[`games`,`themes`,`history`])Array.isArray(O_[e])||(O_[e]=[]);(!O_.unlocked||typeof O_.unlocked!=`object`||Array.isArray(O_.unlocked))&&(O_.unlocked={});var k_=z({list:[]}),A_=new Set;function j_(e){return A_.add(e),()=>A_.delete(e)}function M_(e){if(O_.unlocked[e])return;let t=T_.find(t=>t.id===e);if(t){O_.unlocked={...O_.unlocked,[e]:new Date().toISOString()},k_.list=[...k_.list,t];for(let e of A_)e(t)}}function N_(e){k_.list=k_.list.filter(t=>t.id!==e)}function P_(e,t){O_.themes.includes(e)||(O_.themes=[...O_.themes,e]),O_.themes.length>=t&&M_(`traveller`)}var F_={counted:!1,hintUsed:!1},I_={start(){F_={counted:!1,hintUsed:!1}},hint(){F_.hintUsed=!0},move(e){e&&(O_.moves++,M_(`first-move`))},combo(e){e>O_.bestCombo&&(O_.bestCombo=e),e>=5&&M_(`combo-5`)},score(e){e>O_.bestScore&&(O_.bestScore=e),e>=1e3&&M_(`score-1000`)},end(e){if(F_.counted)return;F_.counted=!0,O_.finished++;let t=e.humanWon===null?`duel`:e.humanWon?`win`:`loss`;t===`duel`?(O_.duels++,M_(`duel`)):t===`win`?(O_.wins[e.difficulty]++,O_.streak++,O_.bestStreak=Math.max(O_.bestStreak,O_.streak),M_(`first-win`),M_(`beat-${e.difficulty}`),e.perfect&&M_(`perfect`),!F_.hintUsed&&(e.difficulty===`hard`||e.difficulty===`godlike`)&&M_(`unaided`),e.mode===`misere`&&(e.difficulty===`hard`||e.difficulty===`godlike`)&&M_(`misere`)):(O_.losses[e.difficulty]++,O_.streak=0),O_.games.includes(e.gameId)||(O_.games=[...O_.games,e.gameId]),O_.games.length>=5&&M_(`collector`),e.tokens>1e5&&M_(`titan`),O_.history=[{date:new Date().toISOString(),title:e.title.slice(0,80),mode:e.mode,opponent:e.opponent,difficulty:e.difficulty,outcome:t,points:e.points,moves:e.moves},...O_.history].slice(0,30)}},L_=()=>E_.reduce((e,t)=>e+O_.wins[t],0),R_=()=>E_.reduce((e,t)=>e+O_.losses[t],0),z_=z({draft:null,key:0,study:null,studyKey:0});function B_(e,t=!1){z_.draft=t?{...e,name:`${e.name} · copie`.slice(0,80)}:e,z_.key++}function V_(e,t,n){z_.study={game:e,position:t.slice(),title:n},z_.studyKey++}var H_=Ie({adjustFocused:()=>sv,askHint:()=>rv,back:()=>cv,clearSelection:()=>ev,close:()=>G_,closeSetup:()=>Q_,editCurrentGame:()=>X_,editGame:()=>Y_,enterPlay:()=>K_,escape:()=>av,exportSession:()=>dv,fullscreen:()=>lv,importFile:()=>fv,newGame:()=>Z_,open:()=>W_,openStudio:()=>J_,pause:()=>iv,playMove:()=>$_,quickGame:()=>pv,quit:()=>uv,redo:()=>nv,stepPile:()=>ov,toMenu:()=>q_,undo:()=>tv,view:()=>U_}),U_=z({fullscreen:!1,sheet:!1});function W_(e,t={}){Wn(`open`),Vt(e,t)}function G_(){Wn(`close`),Ht()}function K_(){Wn(`confirm`),J.setup=!1,J.flow=`play`,J.dialog=null}function q_(){Wn(`close`),J.dialog=null,J.setup=!1,J.flow=`menu`}function J_(e){Wn(`open`),J.dialog=null,J.setup=!1,J.view=e,J.flow=`studio`}function Y_(e,t=!1){B_(e,t),J_(`forge`)}function X_(){let e=Y.session;Y_({schema:`strata.game`,version:1,name:e.name||Y.title,game:e.game,defaultPiles:e.initial.slice()})}function Z_(e=null,t=!1){Wn(`open`),J.newGamePreset=e,J.setupReturn=t?`play`:J.flow,J.dialog=null,J.fromPause=!1,J.flow=`menu`,J.setup=!0}function Q_(){J.setup&&(Wn(`close`),J.setup=!1,J.setupReturn!==`menu`&&(J.flow=J.setupReturn))}async function $_(){!Y.changed||!Y.verdict?.ok||Y.locked?Y.changed&&Y.verdict&&!Y.verdict.ok&&(Wn(`invalid`),Bt(Y.verdict.reason)):await Y.commit()}function ev(){Y.clearSelection()&&Wn(`deselect`)}function tv(){Y.importing||Y.session.cursor===0||Y.undo()}function nv(){Y.importing||Y.session.cursor>=Y.session.moves.length||Y.redo()}function rv(){Y.terminal||Y.hint.busy||(I_.hint(),q.consoleTab=`advice`,Y.requestHint())}function iv(){J.flow!==`play`||J.dialog||W_(`pause`)}function av(){U_.sheet?U_.sheet=!1:Y.changed&&!Y.locked?ev():iv()}function ov(e){let t=Y.position;if(!t.length)return;let n=y_.focusPile;for(let r=0;r<t.length&&(n=n<0?e>0?0:t.length-1:(n+e+t.length)%t.length,!(t[n]>0));r++);t[n]>0&&(S_.focusPile(n),Wn(`tick`))}function sv(e){(y_.focusPile<0||Y.position[y_.focusPile]===0)&&ov(1);let t=y_.focusPile;if(t<0)return;let n=Y.preview[t];Y.adjustRemoval(t,e),Y.preview[t]!==n&&Wn(e>0?`select`:`deselect`,{gain:.7})}function cv(){return Y.load?(Y.cancelLoad(),!0):J.dialog?(G_(),!0):J.setup?(Q_(),!0):U_.sheet?(U_.sheet=!1,!0):J.flow===`play`?(av(),!0):J.flow===`studio`?(q_(),!0):(Bt(`Appuyez encore sur Retour pour quitter HEAPS.`),Y.flush(),!1)}async function lv(){let e=await De();U_.fullscreen=e.on,e.error&&Bt(e.error)}async function uv(){Y.flush();let e=await Ae();e&&Bt(e)}function dv(){Le(`heaps-partie.json`,JSON.stringify(Y.session)),Bt(`Partie exportée avec ses règles et son historique.`)}async function fv(){let e=await Re();e&&(J.dialog=null,await Y.importFile(e))}async function pv(){let e=[{id:`nim`,count:[3,5],max:12},{id:`wythoff`,count:[2,2],max:24},{id:`subtraction`,count:[3,4],max:16},{id:`wythoff-k`,count:[3,4],max:12}],t=e[Math.floor(Math.random()*e.length)],n=t.count[0]+Math.floor(Math.random()*(t.count[1]-t.count[0]+1));try{let e=await ct.generatePiles({count:n,minimum:3,maximum:t.max,seed:`heaps-${Math.random().toString(36).slice(2,10)}`,shape:`random`}),r=await ct.createGame(t.id,{pileCount:e.length});Wn(`confirm`),await Y.newSession(r,e,`bot`,``,q.difficulty)}catch(e){Bt(e.message)}}var mv=z({connected:!1,label:``}),hv={a:0,b:1,x:2,y:3,lb:4,rb:5,lt:6,rt:7,back:8,start:9,up:12,down:13,left:14,right:15},gv=`button, [href], input, select, textarea, summary, [tabindex]:not([tabindex="-1"])`;function _v(){let e=0,t=new Map,n=performance.now(),r=()=>[...navigator.getGamepads?.()??[]].filter(e=>!!(e&&e.connected)),i=a=>{let o=r();if(!o.length){e=0,mv.connected=!1;return}e=requestAnimationFrame(i);let s=Math.min(.05,(a-n)/1e3);n=a;let c=o[0],l=e=>!!c.buttons[e]?.pressed,[u=0,d=0,f=0,p=0]=c.axes,m={up:l(hv.up)||d<-.6,down:l(hv.down)||d>.6,left:l(hv.left)||u<-.6,right:l(hv.right)||u>.6},h=(e,n,r=!1)=>{if(!n)return t.delete(e),!1;let i=t.get(e);return i===void 0?(t.set(e,a+(r?380:1/0)),!0):r&&a>=i?(t.set(e,a+90),!0):!1};for(let e of[`up`,`down`,`left`,`right`])h(e,m[e],!0)&&yv(e);if(h(`a`,l(hv.a))&&bv(`a`),h(`b`,l(hv.b))&&bv(`b`),h(`x`,l(hv.x))&&bv(`x`),h(`y`,l(hv.y))&&bv(`y`),h(`lb`,l(hv.lb))&&bv(`lb`),h(`rb`,l(hv.rb))&&bv(`rb`),h(`start`,l(hv.start))&&bv(`start`),h(`back`,l(hv.back))&&bv(`back`),J.flow===`play`&&!J.dialog){let e=e=>Math.abs(e)<.18?0:e;(e(f)||e(p))&&S_.orbit(-e(f)*s*2.2,e(p)*s*1.4);let t=(c.buttons[hv.rt]?.value??0)-(c.buttons[hv.lt]?.value??0);Math.abs(t)>.1&&S_.zoom(Math.exp(-t*s*1.6))}},a=t=>{mv.connected=!0,mv.label=t.gamepad.id,e||=(n=performance.now(),requestAnimationFrame(i))};return addEventListener(`gamepadconnected`,a),r().length&&(mv.connected=!0,e=requestAnimationFrame(i)),()=>{cancelAnimationFrame(e),removeEventListener(`gamepadconnected`,a)}}var vv=()=>J.flow===`play`&&!J.dialog;function yv(e){vv()?e===`left`||e===`right`?ov(e===`right`?1:-1):sv(e===`up`?1:-1):Sv(e)}function bv(e){if(vv()){switch(e){case`a`:Y.changed?$_():sv(1);break;case`b`:av();break;case`x`:rv();break;case`y`:Y.setLegalVisible(!q.showLegalMoves);break;case`lb`:tv();break;case`rb`:nv();break;case`start`:iv();break;case`back`:Z_()}return}let t=document.activeElement;switch(e){case`a`:t&&t!==document.body?t.click():Sv(`down`);break;case`b`:case`start`:J.dialog?G_():J.flow===`studio`&&q_()}}function xv(){return[...(document.querySelector(`dialog[open]:not([inert])`)??document.querySelector(`:not([inert]) > [data-screen]`)??document.body).querySelectorAll(gv)].filter(e=>!e.disabled&&e.getClientRects().length>0&&!e.closest(`[inert], [hidden]`))}function Sv(e){let t=document.activeElement;if(t instanceof HTMLInputElement&&t.type===`range`&&(e===`left`||e===`right`)){e===`right`?t.stepUp():t.stepDown(),t.dispatchEvent(new Event(`input`,{bubbles:!0})),t.dispatchEvent(new Event(`change`,{bubbles:!0}));return}let n=xv();if(!n.length)return;if(!t||!n.includes(t)){Cv(n[0]);return}let r=t.getBoundingClientRect(),i=r.left+r.width/2,a=r.top+r.height/2,o=null,s=1/0;for(let r of n){if(r===t)continue;let n=r.getBoundingClientRect(),c=n.left+n.width/2-i,l=n.top+n.height/2-a,u=e===`right`?c:e===`left`?-c:e===`down`?l:-l,d=Math.abs(e===`left`||e===`right`?l:c);if(u<=2)continue;let f=u+d*2.4;f<s&&(s=f,o=r)}o&&Cv(o)}function Cv(e){e.focus({preventScroll:!1,focusVisible:!0}),e.scrollIntoView({block:`nearest`,inline:`nearest`})}var wv=e=>e instanceof HTMLElement&&(e.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(e.tagName)),Tv=e=>e instanceof HTMLElement&&/^(BUTTON|A|SUMMARY)$/.test(e.tagName);function Ev(e){if(e.key===`F11`&&!e.repeat){e.preventDefault(),lv();return}if(e.defaultPrevented||J.dialog||wv(e.target)||J.flow!==`play`)return;let t=e.ctrlKey||e.metaKey,n=e.key;if(t&&!e.altKey&&n.toLowerCase()===`z`)e.preventDefault(),e.shiftKey?nv():tv();else if(t&&!e.altKey&&n.toLowerCase()===`y`)e.preventDefault(),nv();else if(!(t||e.altKey)){switch(n){case`Escape`:e.repeat||av();break;case`Enter`:if(Tv(e.target)||e.repeat)return;$_();break;case`h`:case`H`:rv();break;case`n`:case`N`:Z_();break;case`ArrowLeft`:case`ArrowRight`:{let t=n===`ArrowRight`?1:-1;e.shiftKey?S_.orbit(-t*.12,0):ov(t);break}case`ArrowUp`:case`ArrowDown`:{let t=n===`ArrowUp`?1:-1;e.shiftKey?S_.orbit(0,t*.07):sv(t);break}case`+`:case`=`:S_.zoom(1/1.12);break;case`-`:case`_`:S_.zoom(1.12);break;case`Home`:S_.resetCamera();break;case`PageUp`:case`PageDown`:S_.setPage(y_.page+(n===`PageDown`?1:-1));break;default:return}e.preventDefault()}}var Dv=null,Ov=()=>Y.local?[0,1]:[+(Y.botPlayer===0)];function kv(){if(!Dv)return;clearTimeout(Dv.timer);let{humanWon:e,winner:t}=Dv;Dv=null;let n=Y.session,r=Y.score.snapshot,i=Y.local?t:Ov()[0],a=r.players.find(e=>e.player===i),o=n.moves.slice(0,n.cursor).filter(e=>e.player===i).length;I_.end({humanWon:e,gameId:n.game.id,title:Y.title,mode:n.game.mode,opponent:n.opponent,difficulty:n.difficulty,points:a?.points??0,moves:n.cursor,tokens:n.initial.reduce((e,t)=>e+t,0),perfect:e===!0&&o>0&&(a?.combo??0)>=o&&a?.comboCertain!==!1})}function Av(){if(!Dv)return;let e=Y.score.snapshot;e.pending>0||(Dv.humanWon===!1||e.victory||Y.score.victoryUnavailable||e.counterUnavailable)&&kv()}function jv(){let e=[Y.on(`position`,({fresh:e})=>{e&&(kv(),I_.start())}),Y.on(`move`,({fromBot:e})=>I_.move(!e)),Y.on(`end`,({humanWon:e,winner:t,played:n})=>{n&&(Dv&&clearTimeout(Dv.timer),Dv={humanWon:e,winner:t,timer:setTimeout(kv,6e3)},Av())}),j_(()=>setTimeout(()=>Wn(`achievement`),350))],t=w(()=>{_(()=>{let e=Y.score.snapshot;u(()=>{for(let t of Ov()){let n=e.players.find(e=>e.player===t);n&&(I_.combo(n.combo),I_.score(n.points))}Av()})})});return()=>{t();for(let t of e)t();kv()}}function Mv(e){let t=document.documentElement;t.dataset.ambiance=e.id,t.style.setProperty(`--kit-bg`,e.background),t.style.setProperty(`--kit-accent`,e.accent),t.style.setProperty(`--kit-warm`,e.warm),t.style.setProperty(`--theme-a`,e.accent),t.style.setProperty(`--theme-b`,e.warm),document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,e.background)}var Nv=Object.freeze({aurora:`<path d="M24 58Q48 8 79 36T151 22M26 65Q56 25 89 48T155 39" fill="none" stroke="var(--theme-a)" stroke-width="7" stroke-opacity=".45"/><path d="m90 18 19 29-19 27-19-27z" fill="var(--theme-a)" fill-opacity=".22" stroke="var(--theme-a)" stroke-width="1.6"/><path d="m90 18-7 29 7 27 7-27zM71 47h38" fill="none" stroke="var(--theme-b)"/><path d="m39 22 2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="var(--theme-b)"/>`,ember:`<path d="M88 12c8 18 3 24 16 31 3-9 6-13 10-16 8 13 16 25 12 37-5 19-51 22-66 7-12-12-4-27 6-41-1 13 3 19 8 19 9-12 2-25 14-37z" fill="#dc654026" stroke="var(--theme-a)" stroke-width="1.7"/><path d="M90 40c6 11 19 19 14 30-5 10-24 11-29 0-4-8 10-20 15-30z" fill="var(--theme-b)" fill-opacity=".68"/><path d="M51 77h79M41 69l7-5m87-13 7-5M65 20l-2-7" stroke="var(--theme-a)" stroke-width="1.8"/>`,monolith:`<path d="m90 11 20 8v47l-20 13-20-13V19z" fill="var(--theme-a)" fill-opacity=".11" stroke="var(--theme-a)" stroke-width="1.5"/><path d="M90 11v68m0-54 20-6m-20 6-20-6" fill="none" stroke="var(--theme-a)" stroke-opacity=".7"/><path d="m54 69 36 13 36-13M42 75l48 11 48-11" fill="none" stroke="var(--theme-b)" stroke-opacity=".6"/><path d="M65 42h-9m59 0h9M90 6V2" stroke="var(--theme-b)"/><circle cx="90" cy="38" r="2.5" fill="var(--theme-b)"/>`,nebula:`<ellipse cx="90" cy="46" rx="53" ry="26" transform="rotate(-23 90 46)" fill="none" stroke="var(--theme-a)" stroke-opacity=".3"/><path d="M98 46c0-12-22-13-26-2-6 16 24 28 41 13 21-19-8-49-35-41-34 10-30 51-4 62" fill="none" stroke="var(--theme-a)" stroke-width="2.3"/><circle cx="90" cy="45" r="7" fill="var(--theme-b)" fill-opacity=".88"/><path d="m41 20 2 5 5 2-5 2-2 5-2-5-5-2 5-2zm99 43 2 4 4 2-4 2-2 4-2-4-4-2 4-2z" fill="var(--theme-b)"/><circle cx="131" cy="19" r="1.7" fill="var(--theme-a)"/>`,jade:`<path d="M90 16c-14 13-16 28 0 43 16-15 14-30 0-43zM59 29c-5 22 3 32 31 35-3-24-16-34-31-35zm62 0c5 22-3 32-31 35 3-24 16-34 31-35z" fill="var(--theme-a)" fill-opacity=".17" stroke="var(--theme-a)" stroke-width="1.5"/><path d="M43 46c1 22 19 32 47 20-23-16-34-19-47-20zm94 0c-1 22-19 32-47 20 23-16 34-19 47-20z" fill="var(--theme-b)" fill-opacity=".13" stroke="var(--theme-b)"/><ellipse cx="90" cy="75" rx="40" ry="6" fill="none" stroke="var(--theme-a)" stroke-opacity=".45"/><path d="m90 29 7 12-7 11-7-11z" fill="var(--theme-a)" fill-opacity=".8"/>`,sakura:`<path d="M42 76c39-6 39-31 72-49m-34 29-2-23m19 9 26 11" fill="none" stroke="var(--theme-b)" stroke-width="3" stroke-linecap="round"/><g fill="var(--theme-a)" fill-opacity=".68" stroke="var(--theme-a)" stroke-width=".8"><path d="M115 15c12-8 18 4 11 11 14 1 13 14 2 17-2 13-14 12-17 0-13 3-17-9-6-16-10-10-2-17 10-12z"/><path d="M79 27c9-6 13 3 8 8 10 1 9 10 1 12-1 9-10 8-12 0-9 2-12-6-4-11-7-7-1-12 7-9z"/></g><circle cx="116" cy="30" r="3" fill="var(--theme-b)"/><circle cx="80" cy="38" r="2" fill="var(--theme-b)"/><path d="m53 28 6 4-4 7-6-5zm78 42 7-3 3 6-7 4z" fill="var(--theme-a)" fill-opacity=".6"/>`,circuit:`<rect x="64" y="22" width="52" height="48" rx="7" fill="var(--theme-a)" fill-opacity=".1" stroke="var(--theme-a)" stroke-width="1.8"/><path d="M75 22V12h-20v8m35 2V8m15 14V12h19v9M75 70v9H53v-9m37 0v14m15-14v9h22v-9M64 34H43v-8m21 20H34m30 12H46v12m70-36h21v-8m-21 20h29m-29 12h18v12" fill="none" stroke="var(--theme-a)" stroke-opacity=".65" stroke-width="1.3"/><rect x="76" y="34" width="28" height="24" rx="3" fill="var(--theme-b)" fill-opacity=".22" stroke="var(--theme-b)"/><path d="m86 40-4 6 4 6m8-12 4 6-4 6" fill="none" stroke="var(--theme-a)"/><circle cx="34" cy="46" r="2" fill="var(--theme-b)"/><circle cx="145" cy="46" r="2" fill="var(--theme-b)"/>`,rainbow:`<g fill="none" stroke-width="3.2"><ellipse cx="90" cy="45" rx="46" ry="23" stroke="#ee9aaf" transform="rotate(-36 90 45)"/><ellipse cx="90" cy="45" rx="46" ry="23" stroke="#e8cf86" transform="rotate(24 90 45)"/><ellipse cx="90" cy="45" rx="46" ry="23" stroke="#89d9b8" transform="rotate(84 90 45)"/></g><circle cx="90" cy="45" r="12" fill="#122937" stroke="#a9dfff" stroke-width="1.5"/><path d="m90 37 7 8-7 8-7-8z" fill="#b2b8f2"/><path d="M30 78h20m10 0h20m10 0h20m10 0h20m10 0h10" stroke="#9ad8ef" stroke-opacity=".5"/>`,casino:`<path d="M18 71V35a22 22 0 0 1 44 0v36M118 71V35a22 22 0 0 1 44 0v36" fill="none" stroke="#c5a15a" stroke-opacity=".35"/><ellipse cx="90" cy="74" rx="62" ry="8" fill="#030b07" fill-opacity=".45"/><g transform="translate(90 43)"><circle r="31" fill="#0e2a1b" stroke="#e2bb65" stroke-width="2.5"/><circle r="26" fill="#b42734" stroke="#f2e4bf" stroke-width="1.3"/><path d="M-4-25h8v7h-8zM-4 18h8v7h-8zM18-4h7v8h-7zM-25-4h7v8h-7z" fill="#f2e4bf"/><circle r="18" fill="#ece3c9" stroke="#b08b46"/><path d="M0-12C-3-8-12-3-12 3c0 8 9 9 12 3 3 6 12 5 12-3C12-3 3-8 0-12M0 4-4 13h8z" fill="#17372b"/></g><g stroke="#efe5c4" stroke-width="1.3"><ellipse cx="44" cy="68" rx="12" ry="4" fill="#34649f"/><ellipse cx="44" cy="64" rx="12" ry="4" fill="#34649f"/><ellipse cx="136" cy="68" rx="12" ry="4" fill="#e8dec0"/><ellipse cx="136" cy="64" rx="12" ry="4" fill="#e8dec0"/></g>`,observatory:`<g fill="none" stroke="var(--theme-b)"><circle cx="90" cy="43" r="30" stroke-width="1.6"/><ellipse cx="90" cy="43" rx="17" ry="30" transform="rotate(28 90 43)"/><ellipse cx="90" cy="43" rx="30" ry="10" transform="rotate(-22 90 43)"/><path d="M90 8v7m0 57v7M55 43h8m54 0h8M65 18l6 6m38 38 6 6M65 68l6-6m38-38 6-6M90 73v9m-19 2h38" stroke-width="1.6"/></g><path d="m84 52 7-28 5 17-12 11z" fill="var(--theme-a)" fill-opacity=".8"/><circle cx="90" cy="43" r="3" fill="var(--theme-b)"/><path d="m140 17 2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="var(--theme-a)"/><circle cx="36" cy="59" r="2" fill="var(--theme-a)"/>`,atlantis:`<path d="M49 75V35a41 41 0 0 1 82 0v40M57 75V36a33 33 0 0 1 66 0v39" fill="none" stroke="var(--theme-a)" stroke-opacity=".7" stroke-width="2"/><path d="M90 18v58m-14-44v14c0 11 28 11 28 0V32m-14-14-5 8m5-8 5 8M76 32l-4 6m4-6 4 6m24-6-4 6m4-6 4 6" fill="none" stroke="var(--theme-b)" stroke-width="2.2" stroke-linecap="round"/><path d="M36 79q12-7 24 0t24 0 24 0 24 0 24 0M42 85q12-6 24 0t24 0 24 0 24 0" fill="none" stroke="var(--theme-a)" stroke-opacity=".55"/><circle cx="142" cy="36" r="3" fill="none" stroke="var(--theme-a)"/><circle cx="35" cy="23" r="2" fill="var(--theme-a)" fill-opacity=".7"/>`});function Pv(e){return`<svg class="theme-emblem" viewBox="0 0 180 90" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true"><ellipse cx="90" cy="77" rx="65" ry="8" fill="var(--theme-a)" fill-opacity=".045"/>`+Nv[Object.hasOwn(Nv,e)?e:`aurora`]+`</svg>`}var Fv=K(`<small class="svelte-3bcpqf"> </small>`),Iv=K(`<span class="words svelte-3bcpqf"><b class="svelte-3bcpqf">HEAPS</b> <!></span>`),Lv=K(`<span class="logo svelte-3bcpqf"><svg viewBox="0 0 40 44" aria-hidden="true" focusable="false" class="svelte-3bcpqf"><defs><linearGradient x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color: var(--kit-accent)"></stop><stop offset="1" style="stop-color: var(--kit-warm)"></stop></linearGradient><radialGradient cx="0.5" cy="0.4" r="0.6"><stop offset="0" style="stop-color: var(--kit-accent); stop-opacity: 0.55"></stop><stop offset="1" style="stop-color: var(--kit-accent); stop-opacity: 0"></stop></radialGradient></defs><ellipse cx="20" cy="13" rx="19" ry="12"></ellipse><path d="M4 28.5 20 37l16-8.5" class="layer far svelte-3bcpqf"></path><path d="M4 20.5 20 29l16-8.5" class="layer near svelte-3bcpqf"></path><path d="M20 3.5 36 12 20 20.5 4 12Z" class="top svelte-3bcpqf"></path><path d="M20 7.2 29 12l-9 4.8L11 12Z" class="facet svelte-3bcpqf"></path></svg> <!></span>`);function Rv(e,t){P(t,!0);let n=ce(t,`size`,3,36),r=ce(t,`wordmark`,3,!0),i=ce(t,`tagline`,3,``),a=`heaps-logo-${Math.random().toString(36).slice(2,8)}`;var s=Lv();let c;var l=F(s),u=F(l),d=F(u),m=W(d);L(u);var h=W(u),g=W(h,3);te(),L(l);var _=W(l,2),v=e=>{var t=Iv(),n=W(F(t),2),r=e=>{var t=Fv(),n=H(t,!0);T(()=>o(n,i())),f(e,t)};p(n,e=>{i()&&e(r)}),L(t),f(e,t)};p(_,e=>{r()&&e(v)}),L(s),T(()=>{c=k(s,``,c,{"--size":`${n()??``}px`}),R(d,`id`,`${a}-top`),R(m,`id`,`${a}-glow`),R(h,`fill`,`url(#${a}-glow)`),R(g,`fill`,`url(#${a}-top)`)}),f(e,s),G()}var zv=[{id:`local`,label:`Duel local`,hint:`Deux joueurs sur cet appareil`},{id:`bot`,label:`IA · je commence`,hint:`Vous jouez le premier coup`},{id:`bot-first`,label:`IA · elle commence`,hint:`L’IA joue le premier coup`}],Bv=[{id:`decimal`,label:`Décimal`,hint:`Base 10`},{id:`binary`,label:`Binaire`,hint:`Base 2`},{id:`hex`,label:`Hexadécimal`,hint:`Base 16`},{id:`fibonacci`,label:`Zeckendorf`,hint:`Somme de nombres de Fibonacci non consécutifs`},{id:`custom`,label:`Autre base`,hint:`Base personnalisée, de 2 à 36`}];function Vv(e){switch(e.id){case`nim`:return`Retirez autant de jetons que vous voulez, dans une seule pile.`;case`wythoff`:return`Retirez des jetons d’une pile, ou une même quantité des deux piles.`;case`wythoff-k`:return`Retirez dans une pile, ou la même quantité dans deux piles quelconques.`;case`flora`:return`Conservez une pile, ou appliquez une des règles spéciales II–III aux quatre piles.`;case`flora-h`:return`Hors de H, les retraits sont libres. Dans H, ils préservent u, l’écart, ou croisent les paramètres.`;case`flora-k`:return`Choisissez un bloc de quatre piles et jouez Flora ; les autres piles restent intactes.`;case`subtraction`:return`Retirez ${(e.subtraction??[]).join(`, `)} jetons d’une seule pile.`;case`custom`:return`Le coup doit satisfaire : ${e.expression??``}`;case`automaton`:return`Les chiffres synchronisés du coup doivent terminer dans un état acceptant de l’automate.`;default:return``}}var Hv={nim:`<h3>Nim</h3><p>Un coup diminue exactement une pile, d’une quantité strictement positive. Toutes les autres piles restent inchangées. L’analyse utilise le xor entier, avec la stratégie spéciale des piles de taille 1 en mode misère.</p>`,wythoff:`<h3>Wythoff</h3><p>Deux piles. Diminuez une seule pile d’une quantité positive, ou les deux d’une quantité identique. Le mode normal possède un conseil exact fondé sur les paires de Beatty, calculées avec des entiers. Le mode misère utilise le solveur borné.</p>`,"wythoff-k":`<h3>Wythoff · paires libres</h3><p>Cette extension est définie ici : diminuer une pile, ou deux piles quelconques de la même quantité. Elle accepte tout nombre de piles pris en charge. Les résultats du jeu à deux piles ne sont pas appliqués à cette extension.</p>`,flora:`<h3>Flora · règles imprimées de Fraenkel</h3><p>Les rangs sont recalculés avant et après le coup ; chaque pile garde son identité physique sur le plateau.</p><p><b>I.</b> Retirer des quantités positives indépendantes dans un, deux ou trois tas : au moins un tas physique est conservé.</p><p><b>II.</b> Vider les quatre tas si deux tailles sont égales, si les deux tailles centrales sont consécutives, ou si le troisième critère arithmétique de l’article est satisfait.</p><p><b>III.</b> Pour quatre tailles strictement positives et distinctes, diminuer les deux plus grands tas ; les petits tas peuvent perdre une quantité quelconque ou rester inchangés. Les grands retraits sont égaux, ou diffèrent de 1 suivant l’appartenance de leur écart à V₂. La réserve spéciale du retrait 5 est contrôlée.</p><p>L’exemple (1,2,3,4) → (0,0,0,0) est légal par II(ii). La liste publiée n’est donc pas utilisée comme stratégie des règles imprimées.</p>`,"flora-h":`<h3>Flora · notre variante H</h3><p>La forme H(u,v), pour 0&lt;u&lt;v, est le multiensemble {u+v−2, v, u+v, u+2v−1}, avec H(0,0) = zéro.</p><p>Après des retraits physiques valides, si la source ou la cible est hors H, le coup est autorisé. Si les deux sont H(u,v) et H(s,t), il faut s=u, ou t−s=v−u, ou t=u. Cette variante est distincte des règles imprimées de Fraenkel.</p>`,"flora-k":`<h3>Flora · k piles, par blocs de quatre</h3><p>Extension opérationnelle explicitement définie : choisissez quatre piles parmi k, jouez un coup des règles imprimées de Flora sur ce bloc, et gardez toutes les autres piles inchangées. À k=4, on retrouve exactement Flora. Pour k&gt;4, aucune formule de positions perdantes n’est présumée.</p>`,subtraction:`<h3>Jeu de soustraction</h3><p>Diminuez une seule pile d’une quantité appartenant à l’ensemble configuré. La partie se termine lorsqu’aucune pile ne permet le plus petit retrait autorisé ; il peut donc rester des jetons sur le plateau.</p>`,custom:`<h3>Expression sur mesure</h3><p>Votre expression est interprétée dans un langage borné, sans exécution de code. Le coup doit aussi conserver le nombre de piles, ne jamais ajouter de jetons, et en retirer au moins un.</p>`,automaton:`<h3>Règle par automate</h3><p>Les entrées choisies (tailles sources, tailles cibles, retraits ou totaux) sont représentées dans la numération déclarée. Les écritures sont complétées par des zéros du côté adapté, puis lues en colonnes synchronisées. Une transition absente rejette le coup ; un état final acceptant l’autorise, sous les invariants de retrait.</p>`};function Uv(e,t){let n=t===`misere`?`<p><b>Convention misère.</b> Le joueur qui joue le dernier coup perd.</p>`:`<p><b>Convention normale.</b> Le joueur qui joue le dernier coup gagne.</p>`;return(Hv[e.id]??`<p>Règle inconnue de cette version.</p>`)+n}var Wv=[[`Entrée`,`Jouer le coup préparé`],[`Échap`,`Annuler la sélection, puis ouvrir la pause`],[`Ctrl Z`,`Annuler`],[`Ctrl Maj Z`,`Rétablir`],[`H`,`Analyser la position`],[`N`,`Nouvelle partie`],[`← →`,`Choisir une pile`],[`↑ ↓`,`Retirer un jeton de plus ou de moins dans la pile choisie`],[`Maj + flèches`,`Orienter la caméra`],[`+ −`,`Zoomer, dézoomer`],[`Début`,`Recentrer la caméra`],[`Page ↑ · Page ↓`,`Changer de page de piles`],[`F11`,`Plein écran`],[`Manette`,`Croix : piles et retrait · A : jouer · B : annuler · X : conseil · Y : guidage · LB/RB : annuler/rétablir · stick droit : caméra · Start : pause`]],Gv=[{title:`Du premier jeton au dernier coup`,html:`<p>Cliquez un jeton du plateau pour sélectionner ce jeton et ceux placés au-dessus. Recliquez le même retrait pour désélectionner cette pile. Un clic sur le fond ou un clic droit annule toute la sélection, sans jouer. Vous pouvez aussi utiliser les compteurs, les boutons +/− ou les curseurs de l’onglet Retraits de la console. Combinez les piles, vérifiez le verdict, puis jouez.</p><p>Glissez pour orienter la caméra. La molette sur une pile ajuste le retrait de +/−1 ; sur le fond ou avec Ctrl, elle zoome. Sur écran tactile, pincez pour zoomer. Les très grandes piles sont représentées par un échantillon, avec leur compte exact. Au-delà de 24 piles, le plateau est paginé.</p>`},{title:`Le guidage des coups`,html:`<p>Le guidage lit les règles pour vous, directement sur les piles. Un anneau lumineux marque une coupe permise : cliquez le jeton juste au-dessus, il part avec ceux du dessus. Quand toutes les coupes d’une pile sont permises, rien ne s’allume ; une pile assombrie n’offre aucun coup. Après une première sélection, le plateau montre ce qui la complète (dans Wythoff, la même quantité sur l’autre pile) et un clic sur une autre pile y déplace la sélection quand les deux ne vont pas ensemble. Une coupe interdite se soulève à peine. Seul Jouer le coup engage le coup. La liste complète reste dans l’onglet Coups de la console. Ensemble complet certifie que tous les coups ont été recensés ; aperçu partiel signale un budget atteint, pas des coups interdits.</p>`},{title:`Jouer et explorer`,html:`<p>Choisissez un jeu dans la collection ou créez le vôtre. La sélection ouvre une nouvelle partie et vous permet de régler sa position, son adversaire et la convention normal/misère. L’analyse indique sa portée : exacte pour la position, ou incomplète.</p><p>L’historique permet une relecture. Annuler ou revoir un coup suspend l’IA ; changez l’adversaire pour reprendre. Les conseils et résultats périmés sont annulés lorsqu’une position change.</p>`},{title:`Préparer le défi`,html:`<p>La création se déroule en trois étapes : jeu, piles et défi. Flora à k piles permet de choisir k entre 4 et 512. Modifiez les tailles, ou générez une position avec une graine reproductible. Simple, Moyen et Difficile choisissent leurs coups par des heuristiques de plus en plus poussées. GODLIKE ne joue que des coups parfaits certifiés ; si le calcul reste incomplet, il vous propose de réessayer ou de changer de niveau. Les onze ambiances sont disponibles sans relancer le jeu : Rainbow donne une couleur stable à chaque pile, et Monte-Carlo habille jetons et interface de feutre, de bois sombre et de laiton.</p>`},{title:`Le score de votre partie`,html:`<p>En duel local, chaque joueur a son propre score ; face à l’IA, seuls vos coups sont évalués. Le barème commun récompense une position P vérifiée par 100 points et estime sinon sa proximité avec un témoin P trouvé. Une estimation reste indicative, et un résultat inconnu n’invente aucun point. Les positions P certifiées consécutives d’un même joueur forment un combo : le score de base est multiplié par 1, puis 1,25, 1,5, 1,75 et enfin 2 au maximum, sans compter les tours de son adversaire. Un bonus de configuration de 0 à 50 points peut s’ajouter à une P certifiée : il récompense la quantité de jetons et les piles actives avant le coup, sans prétendre mesurer sa difficulté stratégique. Le détail Coup · Combo · Configuration accompagne les points. Une victoire humaine certifiée, après au moins un coup, ajoute une seule fois 300 points ; une victoire de l’IA ou un résultat inconnu ne reçoit pas ce bonus. Un calcul inconnu interrompt la certitude de la série sans retirer vos points acquis.</p><p>Annuler ou revoir un coup recalcule le score de l’historique actif ; le même coup rétabli ne reçoit pas une seconde récompense. Une nouvelle partie commence un nouveau score. Les anciennes parties importées ne reçoivent pas de points présumés. Les jeux créés peuvent garder le barème commun ou choisir une expression de score bornée : ce score ludique ne constitue pas une preuve mathématique.</p>`},{title:`Palmarès & succès`,html:`<p>Chaque partie terminée face à l’IA ou en duel entre dans votre palmarès : victoires par niveau, meilleure série, meilleur score par jeu. Les succès marquent des étapes, du premier coup parfait à la victoire contre GODLIKE. Tout reste sur cet appareil ; une partie revue dans l’historique ou importée ne compte qu’une fois.</p>`},{title:`Écrire et vérifier une stratégie`,html:`<p>Dans Stratégies &amp; preuves, écrivez une expression qui reconnaît les positions perdantes P, puis une politique facultative qui choisit les coups. Fixez un maximum par pile et lancez la vérification. Un résultat complet certifie ce domaine fini ; un calcul incomplet reste inconnu. Une contradiction fournit une position témoin que vous pouvez ouvrir comme nouvelle partie.</p><p>Les notes se conservent avec Enregistrer une copie. Un diagnostic importé reste une archive à recalculer avant toute certification dans cette session. L’import d’une partie revalide son historique, avec progression, annulation et délai maximal de 15 secondes.</p>`},{title:`Vos données vous appartiennent`,html:`<p>Les parties, vos jeux, vos stratégies et votre palmarès sont conservés sur cet appareil. Exporter produit un fichier JSON transférable. L’import réexamine la configuration et chacun des coups avant d’ouvrir la partie. Aucun compte ni service distant n’est nécessaire pour jouer.</p>`},{title:`Limites explicites`,html:`<p>Jusqu’à 512 piles et un milliard de jetons par pile. Les recherches et les expressions ont leurs propres budgets. La version actuelle traite les jeux impartiaux finis qui retirent des jetons, avec règles sans mémoire ; elle ne modélise pas encore les ajouts, cycles, probabilités ou pouvoirs propres à chaque joueur.</p>`}],Kv=`<p>Opérateurs : <code>+ − * / %</code>, comparaisons, <code>&amp;&amp; || !</code>, parenthèses et indexation de vecteurs. Fonctions : sum, min, max, count, allEqual, xor, gcd, abs, bit, digit, fibLength, phi, phi2.</p><p><code>all(i, r[i] == 0 || r[i] == 2)</code> exige des retraits de 0 ou 2. <code>countIf(i, r[i] &gt; 0) == 2</code> exige deux piles modifiées.</p><p>512 piles, 1 000 000 000 jetons par pile ; expressions de 4 096 caractères, 1 024 éléments, profondeur 64 et 32 768 opérations par évaluation. Automates : 4 096 états, 100 000 transitions, 64 pistes. Les jeux à ajouts, cycles, hasard ou règles propres à chaque joueur ne sont pas modélisés dans cette version.</p>`,qv=[[`before[i] / after[i]`,`Taille de la pile i avant / après.`],[`removed[i]`,`Nombre de jetons retirés de la pile i.`],[`changed / total / k`,`Piles modifiées, retrait total, nombre de piles.`],[`equal`,`Tous les retraits non nuls sont égaux.`],[`sum(v), min(v), max(v)`,`Calculer sur un vecteur.`],[`all(i, expression), any(i, expression)`,`Quantifier sur les indices de toutes les piles.`]],Jv=[{title:``,html:`<p>HEAPS conserve vos parties, règles, stratégies, notes, palmarès et préférences sur l’appareil où vous jouez. Ces données permettent de reprendre une partie, retrouver vos créations et garder vos réglages.</p>`},{title:`Jeu local`,html:`<p>Le jeu ne demande aucun compte et n’intègre ni publicité, ni suivi publicitaire, ni service d’analyse à distance. Les règles, l’IA et les vérifications mathématiques s’exécutent localement. Vos notes peuvent contenir les informations que vous choisissez d’y écrire.</p><p>Sur ordinateur, l’appli installée vérifie au démarrage si une nouvelle version est publiée : elle lit un petit fichier de version sur GitHub, qui reçoit alors l’adresse réseau de l’appareil comme pour toute page web. Aucune donnée de jeu n’est envoyée. Une mise à jour n’est installée qu’après votre accord, et sa signature est vérifiée avant installation. Distribuée par Steam ou Google Play, l’appli laisse cette plateforme gérer les mises à jour. Dans la version Steam, les succès obtenus sont transmis à Steam, qui les affiche sur votre profil.</p>`},{title:`Import et export à votre demande`,html:`<p>Un import lit uniquement le document que vous choisissez et vérifie son contenu avant de l’utiliser. Un export crée un fichier JSON à votre demande.</p><p>Un emplacement choisi peut appartenir à un service de stockage distant. Son fournisseur applique alors ses propres règles. HEAPS ne téléverse pas automatiquement vos parties et ne vend pas vos données. Vérifiez le contenu de vos notes et fichiers avant de les transmettre.</p>`},{title:`Conservation, protection et suppression`,html:`<p>Vos données locales restent disponibles jusqu’à leur suppression ou à l’effacement du profil de jeu. HEAPS ne les chiffre pas lui-même. La protection de l’appareil, ses sauvegardes et les fichiers exportés dépendent de votre système et de vos choix.</p><p>Désinstaller HEAPS, ou effacer ses données dans les réglages du système, supprime le profil local. Ces actions ne suppriment pas les fichiers déjà exportés : vous devez les effacer dans leur emplacement. Exportez les données à conserver avant un effacement. Un journal technique de l’appli (sans contenu de partie) est conservé dans son dossier pour le diagnostic.</p>`},{title:`Plateforme de distribution et assistance`,html:`<p>La plateforme par laquelle vous obtenez HEAPS, le système et un fournisseur de documents peuvent traiter des données selon leurs propres politiques. Si vous adressez des informations au support indiqué par votre plateforme de distribution, limitez votre message aux éléments utiles et masquez les informations personnelles contenues dans vos notes ou exports.</p>`}],Yv=K(`<button type="button" role="radio"><span class="glyph svelte-x96sgx" aria-hidden="true"> </span> </button>`),Xv=K(`<p class="pitch svelte-x96sgx"><b class="svelte-x96sgx"> </b> </p>`),Zv=K(`<input class="num svelte-x96sgx" type="text" inputmode="numeric"/>`),Qv=K(`<span class="more num svelte-x96sgx"> </span>`),$v=K(`<div class="editor svelte-x96sgx"><div class="stepper svelte-x96sgx"><span class="svelte-x96sgx">Piles</span> <button type="button" aria-label="Une pile de moins" class="svelte-x96sgx">−</button> <b class="num svelte-x96sgx"> </b> <button type="button" aria-label="Une pile de plus" class="svelte-x96sgx">+</button> <small> </small></div> <div class="piles svelte-x96sgx"><!> <!></div> <label class="paste svelte-x96sgx"><span class="svelte-x96sgx">Toutes les tailles</span> <input type="text" spellcheck="false" autocomplete="off" placeholder="3 5 7" class="svelte-x96sgx"/></label> <!></div>`),ey=K(`<div class="bot svelte-x96sgx"><!> <div class="first svelte-x96sgx"><span class="svelte-x96sgx">Premier coup</span> <!></div></div>`),ty=K(`<small class="svelte-x96sgx"> </small>`),ny=K(`<small class="bad svelte-x96sgx" role="alert"> </small>`),ry=K(`<form class="setup svelte-x96sgx" aria-label="Nouvelle partie" novalidate=""><header class="head svelte-x96sgx"><button type="button" class="back svelte-x96sgx"><span aria-hidden="true">←</span> Retour</button> <div class="eyebrow svelte-x96sgx"><i class="live-dot"></i>NOUVELLE PARTIE</div> <h2 class="svelte-x96sgx">À quoi jouons-nous<span class="svelte-x96sgx">&#8239;?</span></h2></header> <section class="block svelte-x96sgx" aria-labelledby="setup-game"><h3 id="setup-game" class="svelte-x96sgx">Le jeu</h3> <div class="games svelte-x96sgx" role="radiogroup" aria-labelledby="setup-game"></div> <!></section> <section class="block svelte-x96sgx" aria-labelledby="setup-size"><div class="line svelte-x96sgx"><h3 id="setup-size" class="svelte-x96sgx">La partie</h3> <span class="count num svelte-x96sgx"> </span></div> <div class="sizes svelte-x96sgx"><!> <button type="button" class="round svelte-x96sgx" title="Nouveau tirage" aria-label="Nouveau tirage de la position">↻</button> <button type="button" title="Choisir les piles" aria-label="Choisir les piles une à une">✎</button></div> <!></section> <section class="block svelte-x96sgx" aria-labelledby="setup-rival"><h3 id="setup-rival" class="svelte-x96sgx">L’adversaire</h3> <!> <!></section> <footer class="go svelte-x96sgx"><div class="recap svelte-x96sgx"><b class="svelte-x96sgx"> </b> <!></div> <button type="submit" class="play svelte-x96sgx">Jouer <span aria-hidden="true" class="svelte-x96sgx">▶</span></button></footer></form>`);function iy(n,i){P(i,!0);let a=new Intl.NumberFormat(`fr-BE`),s={nim:`◇`,wythoff:`⟋`,"wythoff-k":`⋈`,flora:`✿`,"flora-h":`H`,"flora-k":`❖`,subtraction:`−`},c={nim:`Autant de jetons que vous voulez, dans une seule pile.`,wythoff:`Deux piles : retirez dans l’une, ou autant dans les deux.`,"wythoff-k":`Une pile, ou la même quantité dans deux piles au choix.`,flora:`Quatre piles et les règles imprimées de Fraenkel.`,"flora-h":`Flora en version H, la variante maison.`,"flora-k":`Flora joué sur quatre piles choisies parmi d’autres.`},l=[{id:`short`,label:`Courte`,hint:`Peu de piles, petites`},{id:`medium`,label:`Moyenne`,hint:`La partie type`},{id:`long`,label:`Longue`,hint:`Plus de piles, plus hautes`}],m=[{id:`bot`,label:`Contre l’IA`},{id:`local`,label:`À deux`}],h=[{id:`me`,label:`Vous`},{id:`ai`,label:`L’IA`}],g=ht(),v=z({}),y=M(()=>[...g.map(e=>({key:e.id,title:e.title,pitch:c[e.id]??v[e.id]??e.description,glyph:s[e.id]??`◇`,mine:!1,item:null})),...Ut.items.map(e=>({key:`lib:${e.name}`,title:e.name,pitch:v[`lib:${e.name}`]??`Votre règle.`,glyph:`⌘`,mine:!0,item:e}))]),x=U(void 0),C=U(`nim`),w=U(`medium`),E=U(z([3,5,7])),D=U(z({min:1,max:512,fixed:!1})),k=U(`normal`),A=U(z(q.setupRival===`local`?`local`:`bot`)),j=U(z(q.setupFirst===`ai`?`ai`:`me`)),N=U(z(q.difficulty)),I=U(!1),ne=U(``),V=U(z({ok:!0,message:``})),ae=U(!1),se=U(!1),ce=0,de=0,pe=M(()=>d(y).find(e=>e.key===d(C))??d(y)[0]),me=M(()=>d(E).reduce((e,t)=>e+t,0)),K=M(()=>d(V).ok&&!d(ae)&&!d(se)),ge=M(()=>`${d(E).length} pile${d(E).length>1?`s`:``} · ${a.format(d(me))} jeton${d(me)>1?`s`:``}`),_e=M(()=>d(A)===`local`?`À deux sur cet appareil`:`IA ${_t(d(N)).label.toLowerCase()} · ${d(j)===`me`?`vous commencez`:`elle commence`}`);oe(()=>{for(let e of g)c[e.id]||ct.createGame(e.id).then(t=>{v[e.id]=Vv(t)}).catch(()=>{});for(let e of Ut.items)v[`lib:${e.name}`]=Vv(e.game);let e=J.newGamePreset;J.newGamePreset=null;let t=q.setupGame;if(e?.startsWith(`lib:`)){let n=Number(e.slice(4));t=Number.isInteger(n)&&Ut.items[n]?`lib:${Ut.items[n].name}`:e}else e&&(t=e);d(y).some(e=>e.key===t)||(t=`nim`),ve(t,{sound:!1,size:e?void 0:q.setupSize}),requestAnimationFrame(()=>{let e=d(x),t=e?.querySelector(`[aria-checked="true"]`);e&&t&&e.scrollWidth>e.clientWidth&&(e.scrollLeft=t.offsetLeft-(e.clientWidth-t.offsetWidth)/2)})}),ue(()=>{b_.piles=null}),_(()=>{b_.piles=d(E).slice()});async function ve(e,{sound:t=!0,size:n}={}){O(C,e,!0),t&&Wn(`select`);let r=d(y).find(t=>t.key===e);r?.item&&O(k,r.item.game.mode,!0),O(D,await ct.pileCountBounds(r?.item?.game.id??e),!0),d(C)===e&&(O(I,!1),r?.item&&!n?(O(w,`custom`),be(r.item.defaultPiles.slice())):await ye(n??(d(w)===`custom`?`medium`:d(w))))}async function ye(e,t=!1){O(w,e,!0);let n=d(D).fixed&&d(D).min<=2,r={short:3,medium:4,long:6}[e]+(d(D).min>3?{short:0,medium:1,long:4}[e]:0),i=d(D).fixed?d(D).min:Math.max(d(D).min,Math.min(d(D).max,r)),[a,o]=(n?{short:[3,9],medium:[6,16],long:[12,30]}:{short:[1,7],medium:[3,12],long:[6,20]})[e],s=`heaps-${Date.now().toString(36)}-${++de}`;try{let n=await ct.generatePiles({count:i,minimum:a,maximum:o,seed:s,shape:`random`});d(w)===e&&be(n),t&&Wn(`select`)}catch(e){O(V,{ok:!1,message:e.message},!0)}}function be(e){O(E,e,!0),O(ne,e.join(` `),!0)}async function xe(e){let t=Math.max(d(D).min,Math.min(d(D).max,Math.round(e)||d(D).min));t!==d(E).length&&(O(w,`custom`),be(await ct.resizePiles(d(E),t)),Wn(`tick`))}function Se(e,t){let n=Number(t.trim());if(!/^\d+$/.test(t.trim())||!Number.isSafeInteger(n)||n>pt.LIMITS.pileSize)return;O(w,`custom`);let r=d(E).slice();r[e]=n,be(r)}async function Ce(){try{let e=await ct.parsePiles(d(ne));if(e.length<d(D).min||e.length>d(D).max){O(V,{ok:!1,message:d(D).fixed?`Ce jeu se joue avec exactement ${d(D).min} piles.`:`Ce jeu demande ${d(D).min} à ${d(D).max} piles.`},!0);return}O(w,`custom`),be(e)}catch(e){O(V,{ok:!1,message:e.message},!0)}}async function we(){let e=d(pe).item;if(e){let t=await ct.validateGame({...e.game,mode:d(k),pileCount:d(E).length});if(!t.ok||!t.game)throw Error(t.errors.join(` `));return t.game}return ct.createGame(d(pe).key,{mode:d(k),pileCount:d(E).length})}_(()=>{d(E),d(k),d(C);let e=++ce;u(()=>{O(ae,!0)}),(async()=>{try{let t=await we(),n=await ct.validatePosition(d(E).slice(),t);e===ce&&O(V,n.ok?{ok:!0,message:``}:{ok:!1,message:n.errors.join(` `)},!0)}catch(t){e===ce&&O(V,{ok:!1,message:t.message},!0)}finally{e===ce&&O(ae,!1)}})()});async function Te(){if(!d(K))d(V).ok||Wn(`invalid`);else{O(se,!0);try{let e=await we();q.setupGame=d(C),d(w)!==`custom`&&(q.setupSize=d(w)),q.setupRival=d(A),q.setupFirst=d(j),d(A)===`bot`&&(q.difficulty=d(N));let t=d(A)===`local`?`local`:d(j)===`ai`?`bot-first`:`bot`;Wn(`confirm`),await Y.newSession(e,d(E).slice(),t,d(pe).item?.name??``,d(N))&&(J.setup=!1,S_.resetCamera())}catch(e){O(V,{ok:!1,message:e.message},!0)}finally{O(se,!1)}}}let Ee=e=>e instanceof HTMLElement&&/^(INPUT|TEXTAREA|SELECT|BUTTON|A|SUMMARY)$/.test(e.tagName);function De(e){e.defaultPrevented||J.dialog||(e.key===`Escape`?(e.preventDefault(),Q_()):e.key===`Enter`&&!e.repeat&&!Ee(e.target)&&(e.preventDefault(),Te()))}let Oe=e=>on(e,{duration:jt()?220:0});var ke=ry();S(`keydown`,e,De);var Ae=F(ke),je=F(Ae);te(4),L(Ae);var Me=W(Ae,2),Ne=W(F(Me),2);B(Ne,21,()=>d(y),e=>e.key,(e,t)=>{var n=Yv();let r;var i=F(n),a=H(i,!0),s=W(i,1,!0);L(n),T(()=>{r=he(n,1,`game svelte-x96sgx`,null,r,{mine:d(t).mine}),R(n,`aria-checked`,d(C)===d(t).key),R(n,`title`,d(t).pitch),o(a,d(t).glyph),o(s,d(t).title)}),b(`click`,n,()=>d(C)!==d(t).key&&ve(d(t).key)),f(e,n)}),L(Ne),le(Ne,e=>O(x,e),()=>d(x));var Pe=W(Ne,2);re(Pe,()=>d(pe).key,e=>{var t=Xv(),n=F(t),i=H(n),a=W(n);L(t),T(()=>{o(i,`${d(pe).title??``}.`),o(a,` ${d(pe).pitch??``}`)}),r(1,t,()=>rn,()=>({duration:jt()?180:0})),f(e,t)}),L(Me);var Fe=W(Me,2),Ie=F(Fe),Le=W(F(Ie),2),Re=H(Le,!0);L(Ie);var ze=W(Ie,2),Be=F(ze);{let e=M(()=>d(w)===`custom`?``:d(w));pn(Be,{get options(){return l},get value(){return d(e)},label:`Longueur de la partie`,onchange:e=>ye(e,!0)})}var Ve=W(Be,2),He=W(Ve,2);let Ue;L(ze);var We=W(ze,2),Ge=e=>{var n=$v(),i=F(n),a=W(F(i),2),s=W(a,2),c=H(s,!0),l=W(s,2),u=W(l,2),m=H(u,!0);L(i);var h=W(i,2),g=F(h);B(g,17,()=>d(E).slice(0,30),t,(e,t,n)=>{var r=Zv();ie(r),R(r,`aria-label`,`Pile ${n+1}`),T(()=>ee(r,d(t))),b(`change`,r,e=>Se(n,e.currentTarget.value)),f(e,r)});var _=W(g,2),v=e=>{var t=Qv(),n=H(t);T(()=>o(n,`+${d(E).length-30}`)),f(e,t)};p(_,e=>{d(E).length>30&&e(v)}),L(h);var y=W(h,2),x=W(F(y),2);ie(x),L(y);var S=W(y,2);{let e=M(()=>d(k)===`misere`);kn(S,{get checked(){return d(e)},label:`Misère`,hint:`Le dernier coup perd au lieu de gagner.`,onchange:e=>O(k,e?`misere`:`normal`,!0)})}L(n),T(()=>{a.disabled=d(D).fixed||d(E).length<=d(D).min,o(c,d(E).length),l.disabled=d(D).fixed||d(E).length>=d(D).max,o(m,d(D).fixed?`fixé par la règle`:`${d(D).min} à ${d(D).max}`)}),b(`click`,a,()=>xe(d(E).length-1)),b(`click`,l,()=>xe(d(E).length+1)),b(`change`,x,Ce),fe(x,()=>d(ne),e=>O(ne,e)),r(3,n,()=>Oe),f(e,n)};p(We,e=>{d(I)&&e(Ge)}),L(Fe);var Ke=W(Fe,2),qe=W(F(Ke),2);{let e=M(()=>[...m]);pn(qe,{get options(){return d(e)},get value(){return d(A)},label:`Adversaire`,onchange:e=>{O(A,e,!0),Wn(`tick`)}})}var Je=W(qe,2),Ye=e=>{var t=ey(),n=F(t);{let e=M(()=>pt.AI_LEVELS.map(e=>({id:e.id,label:e.label,hint:e.description})));pn(n,{get options(){return d(e)},get value(){return d(N)},label:`Niveau de l’IA`,onchange:e=>{O(N,e,!0),Wn(`tick`)}})}var i=W(n,2),a=W(F(i),2);{let e=M(()=>[...h]);pn(a,{get options(){return d(e)},get value(){return d(j)},label:`Premier coup`,onchange:e=>{O(j,e,!0),Wn(`tick`)}})}L(i),L(t),r(3,t,()=>Oe),f(e,t)};p(Je,e=>{d(A)===`bot`&&e(Ye)}),L(Ke);var Xe=W(Ke,2),Ze=F(Xe),Qe=F(Ze),$e=H(Qe),et=W(Qe,2),tt=e=>{var t=ty(),n=H(t);T(()=>o(n,`${d(ge)??``} · ${d(_e)??``}`)),f(e,t)},nt=e=>{var t=ny(),n=H(t,!0);T(()=>o(n,d(V).message)),f(e,t)};p(et,e=>{d(V).ok?e(tt):e(nt,-1)}),L(Ze);var rt=W(Ze,2);L(Xe),L(ke),T(()=>{o(Re,d(ge)),Ve.disabled=d(w)===`custom`,Ue=he(He,1,`round svelte-x96sgx`,null,Ue,{on:d(I)}),R(He,`aria-expanded`,d(I)),o($e,`${d(pe).title??``}${d(k)===`misere`?` · misère`:``}`),rt.disabled=!d(K)}),S(`submit`,ke,e=>{e.preventDefault(),Te()}),b(`click`,je,function(...e){Q_?.apply(this,e)}),b(`click`,Ve,()=>d(w)!==`custom`&&ye(d(w),!0)),b(`click`,He,()=>{O(I,!d(I)),Wn(`tick`)}),f(n,ke),G()}c([`click`,`change`]);var ay=K(`<small class="svelte-ho1ogx"> </small> <small class="details svelte-ho1ogx"> </small>`,1),oy=K(`<small class="svelte-ho1ogx">Créez votre première partie.</small>`),sy=K(`<div class="content svelte-ho1ogx"><div class="eyebrow svelte-ho1ogx"><i class="live-dot"></i> </div> <h1 class="svelte-ho1ogx">Le prochain coup<br/>vous appartient<span class="svelte-ho1ogx">.</span></h1> <p class="intro svelte-ho1ogx">Des piles de jetons. Vos règles. Une arène pour jouer, inventer et comprendre.</p> <nav class="actions svelte-ho1ogx" aria-label="Jouer et explorer"><button type="button" class="action continue svelte-ho1ogx"><span class="icon svelte-ho1ogx">▷</span> <span class="text svelte-ho1ogx"><strong class="svelte-ho1ogx">Continuer la partie</strong> <!></span> <span class="tail svelte-ho1ogx">↗</span></button> <div class="pair svelte-ho1ogx"><button type="button" class="action new svelte-ho1ogx"><span class="icon svelte-ho1ogx">＋</span> <span class="text svelte-ho1ogx"><strong class="svelte-ho1ogx">Nouvelle partie</strong><small class="svelte-ho1ogx">Choisissez le jeu, les piles et votre défi.</small></span> <span class="tail svelte-ho1ogx">→</span></button> <button type="button" class="action quick svelte-ho1ogx"><span class="icon svelte-ho1ogx">⚡</span> <span class="text svelte-ho1ogx"><strong class="svelte-ho1ogx">Partie rapide</strong><small class="svelte-ho1ogx">Un jeu au hasard, face à l’IA.</small></span></button></div> <div class="section-heading svelte-ho1ogx"><span>EXPLOREZ LE JEU</span><i class="svelte-ho1ogx"></i><span>01 — 04</span></div> <div class="destinations svelte-ho1ogx"><button type="button" class="action destination svelte-ho1ogx"><span class="icon svelte-ho1ogx">⌘</span><span class="text svelte-ho1ogx"><strong class="svelte-ho1ogx">Atelier des jeux</strong><small class="svelte-ho1ogx">Imaginez les règles. Donnez-leur vie.</small></span><span class="tail svelte-ho1ogx">01</span></button> <button type="button" class="action destination svelte-ho1ogx"><span class="icon svelte-ho1ogx">∴</span><span class="text svelte-ho1ogx"><strong class="svelte-ho1ogx">Stratégies & preuves</strong><small class="svelte-ho1ogx">Confrontez une formule aux positions.</small></span><span class="tail svelte-ho1ogx">02</span></button> <button type="button" class="action destination svelte-ho1ogx"><span class="icon svelte-ho1ogx">⌁</span><span class="text svelte-ho1ogx"><strong class="svelte-ho1ogx">Laboratoire</strong><small class="svelte-ho1ogx">Numérations, coups et automates.</small></span><span class="tail svelte-ho1ogx">03</span></button> <button type="button" class="action destination svelte-ho1ogx"><span class="icon svelte-ho1ogx">✦</span><span class="text svelte-ho1ogx"><strong class="svelte-ho1ogx">Palmarès & succès</strong><small class="svelte-ho1ogx">Vos victoires, vos records, vos défis.</small></span><span class="tail svelte-ho1ogx">04</span></button></div></nav> <nav class="utilities svelte-ho1ogx" aria-label="Options du jeu"><button type="button" class="svelte-ho1ogx"><span class="svelte-ho1ogx">⚙</span> Réglages</button> <button type="button" class="svelte-ho1ogx"><span class="svelte-ho1ogx">?</span> Guide</button> <button type="button" class="svelte-ho1ogx">Confidentialité</button> <button type="button" class="svelte-ho1ogx"><span class="svelte-ho1ogx">↥</span> Importer</button> <button type="button" class="svelte-ho1ogx"><span class="svelte-ho1ogx">⏻</span> Quitter</button></nav></div>`),cy=K(`<span class="keys svelte-ho1ogx"><kbd class="svelte-ho1ogx">ENTRÉE</kbd> JOUER <kbd class="svelte-ho1ogx">ÉCHAP</kbd> RETOUR</span>`),ly=K(`<span class="keys svelte-ho1ogx"><kbd class="svelte-ho1ogx">↑</kbd><kbd class="svelte-ho1ogx">↓</kbd> NAVIGUER <kbd class="svelte-ho1ogx">ENTRÉE</kbd> CHOISIR</span>`),uy=K(`<section class="menu svelte-ho1ogx" data-screen="" aria-label="Menu principal de HEAPS"><div class="scrim svelte-ho1ogx" aria-hidden="true"></div> <div class="column svelte-ho1ogx"><header class="brand svelte-ho1ogx"><!></header> <!></div> <aside class="showcase svelte-ho1ogx" aria-label="Ambiance"><div class="caption svelte-ho1ogx" aria-hidden="true"><span class="svelte-ho1ogx">CHAQUE JETON EST UN CHOIX</span><b class="svelte-ho1ogx">ET CHAQUE CHOIX CHANGE TOUT.</b></div> <div class="ambiance svelte-ho1ogx"><button type="button" class="arrow svelte-ho1ogx" aria-label="Ambiance précédente">‹</button> <div class="current svelte-ho1ogx"><!> <span class="svelte-ho1ogx"><small class="svelte-ho1ogx">AMBIANCE</small><b class="svelte-ho1ogx"> </b><em class="svelte-ho1ogx"> </em></span></div> <button type="button" class="arrow svelte-ho1ogx" aria-label="Ambiance suivante">›</button></div></aside> <footer class="footer svelte-ho1ogx"><span class="svelte-ho1ogx"><i class="live-dot"></i> HEAPS <b class="svelte-ho1ogx"></b> <em class="svelte-ho1ogx"> </em></span> <!> <span class="motto svelte-ho1ogx">UNE RÈGLE SIMPLE. UNE INFINITÉ DE DÉCISIONS.</span></footer></section>`);function dy(e,t){P(t,!0);let n=new Intl.NumberFormat(`fr-BE`),r=U(void 0),i=U(void 0),a=U(0),s=U(0),c=M(()=>bt(q.theme)),l=M(()=>(Y.session,Et(Tt.session).present)),u=M(()=>{let e=Y.session;if(!e)return null;let t=Y.position,r=t.reduce((e,t)=>e+t,0);return{title:e.name||gt(e.game.id)?.title||`Votre partie`,details:`${t.length} pile${t.length>1?`s`:``} · ${n.format(r)} jeton${r>1?`s`:``} · ${e.cursor} coup${e.cursor>1?`s`:``} · ${e.opponent===`local`?`Duel local`:`Face à l’IA`}`}});_(()=>{if(!d(i)||!d(a))return;let e=d(a)<820,t=d(i).getBoundingClientRect(),n=J.setup?.3:.36;S_.setInsets(e?{top:64,right:0,bottom:Math.max(d(s)*.5,d(s)-64-d(s)*n),left:0}:{top:40,right:30,bottom:70,left:Math.min(d(a)*.6,t.right+10)})}),oe(()=>{(d(r)?.querySelector(`.action:not(:disabled)`))?.focus({preventScroll:!0})});let m=J.setup;_(()=>{let e=J.setup;e!==m&&(m=e,d(i)?.scrollTo({top:0}),e||queueMicrotask(()=>d(r)?.querySelector(`.action.new`)?.focus({preventScroll:!0})))});function g(e){if(![`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)||!d(r))return;let t=[...d(r).querySelectorAll(`nav button:not(:disabled)`)];if(!t.length)return;e.preventDefault();let n=t.indexOf(document.activeElement),i=e.key===`Home`?0:e.key===`End`?t.length-1:(n+(e.key===`ArrowDown`?1:-1)+t.length)%t.length;t[n<0&&e.key===`ArrowUp`?t.length-1:i].focus(),Wn(`tick`)}function v(e){q.theme=yt[(yt.findIndex(e=>e.id===q.theme)+e+yt.length)%yt.length].id,Wn(`select`)}let y=e=>{e.pointerType===`mouse`&&Wn(`tick`,{gain:.5})};var x=uy(),C=W(F(x),2),w=F(C);Rv(F(w),{size:42,tagline:`JEUX · MOTS · STRATÉGIES`}),L(w);var E=W(w,2),D=e=>{iy(e,{})},A=e=>{var t=sy(),n=F(t);k(n,``,{},{"--i":`0`});var r=W(F(n));L(n);var i=W(n,2);k(i,``,{},{"--i":`1`});var a=W(i,2);k(a,``,{},{"--i":`2`});var s=W(a,2),m=F(s);k(m,``,{},{"--i":`3`});var h=W(F(m),2),g=W(F(h),2),_=e=>{var t=ay(),n=de(t),r=H(n,!0),i=W(n,2),a=H(i,!0);T(()=>{o(r,d(u).title),o(a,d(u).details)}),f(e,t)},v=e=>{var t=oy();f(e,t)};p(g,e=>{d(l)&&d(u)?e(_):e(v,-1)}),L(h),te(2),L(m);var x=W(m,2),C=F(x);k(C,``,{},{"--i":`4`});var w=W(C,2);k(w,``,{},{"--i":`5`}),L(x);var E=W(x,2);k(E,``,{},{"--i":`6`});var D=W(E,2),O=F(D);k(O,``,{},{"--i":`7`});var A=W(O,2);k(A,``,{},{"--i":`8`});var j=W(A,2);k(j,``,{},{"--i":`9`});var M=W(j,2);k(M,``,{},{"--i":`10`}),L(D),L(s);var N=W(s,2);k(N,``,{},{"--i":`11`});var P=F(N),I=W(P,2),ee=W(I,2),R=W(ee,2),ne=W(R,2);L(N),L(t),T(()=>{o(r,`${d(c).id===`casino`?`♠ `:``}UN MONDE DE POSSIBILITÉS`),m.disabled=!d(l)}),b(`click`,m,function(...e){K_?.apply(this,e)}),S(`pointerenter`,m,y),b(`click`,C,()=>Z_()),S(`pointerenter`,C,y),b(`click`,w,function(...e){pv?.apply(this,e)}),S(`pointerenter`,w,y),b(`click`,O,()=>J_(`forge`)),S(`pointerenter`,O,y),b(`click`,A,()=>J_(`research`)),S(`pointerenter`,A,y),b(`click`,j,()=>J_(`lab`)),S(`pointerenter`,j,y),b(`click`,M,()=>W_(`records`)),S(`pointerenter`,M,y),b(`click`,P,()=>W_(`settings`)),b(`click`,I,()=>W_(`guide`)),b(`click`,ee,()=>W_(`privacy`)),b(`click`,R,function(...e){fv?.apply(this,e)}),b(`click`,ne,function(...e){uv?.apply(this,e)}),f(e,t)};p(E,e=>{J.setup?e(D):e(A,-1)}),L(C),le(C,e=>O(i,e),()=>d(i));var N=W(C,2),I=F(N),ee=W(I,2),ne=F(ee),z=W(ne,2);let re;var B=F(z);h(B,()=>Pv(d(c).id));var V=W(B,2),ie=W(F(V)),ae=H(ie,!0),se=W(ie),ce=H(se,!0);L(V),L(z);var ue=W(z,2);L(ee),L(N);var fe=W(N,2),pe=F(fe),me=W(F(pe),2);me.textContent=`2.0.2`;var he=W(me,2),K=H(he,!0);L(pe);var ge=W(pe,2),_e=e=>{var t=cy();f(e,t)},ve=e=>{var t=ly();f(e,t)};p(ge,e=>{J.setup?e(_e):e(ve,-1)}),te(2),L(fe),L(x),le(x,e=>O(r,e),()=>d(r)),T(e=>{R(I,`hidden`,J.setup),re=k(z,``,re,{"--theme-a":d(c).accent,"--theme-b":d(c).warm}),o(ae,d(c).label),o(ce,d(c).description),o(K,e)},[()=>Se()]),b(`keydown`,x,g),b(`click`,ne,()=>v(-1)),b(`click`,ue,()=>v(1)),j(x,`clientWidth`,e=>O(a,e)),j(x,`clientHeight`,e=>O(s,e)),f(e,x),G()}c([`keydown`,`click`]);var fy=K(`<div> </div>`),py=K(`<i class="spinner svelte-jf6ym3" aria-hidden="true"></i> Analyse en cours…`,1),my=K(` <span>↗</span>`,1),hy=K(`<button type="button" class="text-button">Préparer le coup proposé →</button>`),gy=K(`<div class="legal svelte-jf6ym3"><b class="num svelte-jf6ym3"> </b> <p class="svelte-jf6ym3"> </p></div>`),_y=K(`<button type="button" class="text-button edit svelte-jf6ym3">Modifier ce jeu dans l’atelier →</button>`),vy=K(`<div class="advice svelte-jf6ym3"><section class="card insight svelte-jf6ym3"><div class="label svelte-jf6ym3"><span class="spark svelte-jf6ym3">✧</span> LE CONSEIL STRATÉGIQUE</div> <p aria-live="polite" class="svelte-jf6ym3"> </p> <!> <div class="buttons svelte-jf6ym3"><button type="button" class="analyse svelte-jf6ym3"><!> <kbd class="svelte-jf6ym3">H</kbd></button> <!></div></section> <section class="card svelte-jf6ym3"><span class="field-label svelte-jf6ym3">ADVERSAIRE</span> <!></section> <section><span class="field-label svelte-jf6ym3">NIVEAU DE L’IA</span> <!> <p class="muted small svelte-jf6ym3"> </p></section> <section class="card svelte-jf6ym3"><!> <!></section> <!></div>`);function yy(e,t){P(t,!0);let n=M(()=>pt.AI_LEVELS.map(e=>({id:e.id,label:e.label,hint:e.description,disabled:Y.local}))),r=M(()=>[`custom`,`subtraction`,`automaton`].includes(Y.session.game.id));var i=vy(),a=F(i),s=W(F(a),2),c=H(s,!0),l=W(s,2),u=e=>{var t=fy();let n;var r=H(t,!0);T(()=>{n=he(t,1,`badge svelte-jf6ym3`,null,n,{partial:Y.hint.partial}),o(r,Y.hint.badge)}),f(e,t)};p(l,e=>{Y.hint.badge&&e(u)});var m=W(l,2),h=F(m),g=F(h),_=e=>{var t=py();te(),f(e,t)},v=e=>{var t=my(),n=de(t);te(),T(()=>o(n,`${Y.hint.asked?`Analyser à nouveau`:`Analyser la position`} `)),f(e,t)};p(g,e=>{Y.hint.busy?e(_):e(v,-1)}),te(2),L(h);var y=W(h,2),x=e=>{var t=hy();T(()=>t.disabled=Y.locked),S(`pointerenter`,t,()=>S_.ghost(Y.hint.after)),S(`pointerleave`,t,()=>S_.ghost(null)),S(`focus`,t,()=>S_.ghost(Y.hint.after)),S(`blur`,t,()=>S_.ghost(null)),b(`click`,t,()=>{S_.ghost(null),Y.applyHint()}),f(e,t)};p(y,e=>{Y.hint.after&&Y.hint.source===`hint`&&e(x)}),L(m),L(a);var C=W(a,2);pn(W(F(C),2),{get options(){return zv},get value(){return Y.session.opponent},columns:1,label:`Adversaire`,onchange:e=>Y.setOpponent(e)}),L(C);var w=W(C,2);let E;var D=W(F(w),2);pn(D,{get options(){return d(n)},get value(){return Y.session.difficulty},label:`Niveau de l’IA`,columns:4,onchange:e=>Y.setDifficulty(e)});var O=W(D,2),k=H(O,!0);L(w);var A=W(w,2),j=F(A);kn(j,{get checked(){return q.showLegalMoves},label:`Guidage des coups`,hint:`Un anneau lumineux marque chaque coupe permise ; un clic sur une autre pile y déplace la sélection.`,onchange:e=>Y.setLegalVisible(e)});var N=W(j,2),I=e=>{var t=gy(),n=F(t),r=H(n,!0),i=W(n,2),a=H(i,!0);L(t),T(()=>{R(t,`data-phase`,Y.legal.phase),o(r,Y.legal.count),o(a,Y.legal.note)}),f(e,t)};p(N,e=>{q.showLegalMoves&&e(I)}),L(A);var ee=W(A,2),ne=e=>{var t=_y();b(`click`,t,function(...e){X_?.apply(this,e)}),f(e,t)};p(ee,e=>{d(r)&&e(ne)}),L(i),T(e=>{o(c,Y.hint.text),h.disabled=Y.terminal||Y.hint.busy||Y.importing,E=he(w,1,`card svelte-jf6ym3`,null,E,{off:Y.local}),o(k,e)},[()=>Y.local?`Choisissez une partie contre l’IA pour régler son niveau.`:_t(Y.session.difficulty).description]),b(`click`,h,function(...e){rv?.apply(this,e)}),f(e,i),G()}c([`click`]);var by=new Intl.NumberFormat(`fr-BE`),xy=e=>String(e).padStart(2,`0`),Sy=[[`basePoints`,`Coup`],[`comboBonus`,`Combo`],[`positionBonus`,`Configuration`],[`victoryBonus`,`Victoire`]];function Cy(e){if(!e||!Number.isSafeInteger(e.total)||e.total<0)return``;let t=[];for(let[n,r]of Sy){if(!Number.isSafeInteger(e[n])||e[n]<0)return``;e[n]>0&&t.push(`${r} +${by.format(e[n])}`)}return t.join(` · `)}function wy(e){return e.combo>1&&e.comboCertain?`COMBO ${e.combo}`:e.combo>0?`SÉRIE P : ${e.combo}${e.comboCertain===!1?` · incertaine`:``}`:e.last?`Série P à démarrer`:`Prêt pour le premier coup`}function Ty(e,t){if(t.counterUnavailable)return`Compteur indisponible · partie jouable`;let n=e.last?.quality;return n===`certified-p`?`Bonus de position P`:n===`estimated-distance`?`Distance estimée · score indicatif`:n===`certified-n`?`Cible N · score de jeu`:n===`custom`||n===`custom-expression`?`Barème personnalisé`:n===`unknown`?`Coup non évalué · aucun point présumé`:`Aucun coup évalué`}function Ey(e){return e.counterUnavailable?`Compteur indisponible · totaux précédents conservés, jeu disponible.`:e.storageBlocked?`Ancien score préservé · nouveau score non enregistré.`:e.pending?`Évaluation du coup en cours…`:`Score par joueur · coups non évalués sans points présumés.`}function Dy(e){return e.length<=12?e.map(e=>by.format(e)).join(` · `):`${e.slice(0,8).map(e=>by.format(e)).join(` · `)} … (${e.length} piles)`}var Oy=K(`<p class="empty svelte-3lrecb">Chaque décision laisse une trace. Vos coups apparaîtront ici.</p>`),ky=K(`<button type="button" class="text-button more svelte-3lrecb">Voir les coups suivants →</button>`),Ay=K(`<li class="svelte-3lrecb"><button type="button"><span class="n num svelte-3lrecb"> </span> <span class="body svelte-3lrecb"><b class="num svelte-3lrecb"> </b> <small class="svelte-3lrecb"> </small></span></button></li>`),jy=K(`<li class="svelte-3lrecb"><button type="button"><span class="n svelte-3lrecb">◇</span><span class="body svelte-3lrecb"><b class="num svelte-3lrecb"> </b><small class="svelte-3lrecb">Position initiale</small></span></button></li>`),My=K(`<button type="button" class="text-button more svelte-3lrecb"></button>`),Ny=K(`<!> <ol class="svelte-3lrecb"><!> <!></ol> <!>`,1),Py=K(`<div class="history svelte-3lrecb"><header class="svelte-3lrecb"><div class="svelte-3lrecb"><span class="index svelte-3lrecb">02</span><h3 class="svelte-3lrecb">Le fil de la partie</h3></div> <small class="muted svelte-3lrecb">Relecture & historique</small></header> <!></div>`);function Fy(e,t){P(t,!0);let n=U(0),r=M(()=>Y.session),i=M(()=>d(r).moves.length),a=M(()=>Math.max(1,Math.ceil(d(i)/150))),s=M(()=>{let e=d(i)-d(n)*150,t=Math.max(0,e-150),r=[];for(let n=e-1;n>=t;n--)r.push(n);return r});_(()=>{d(n)>=d(a)&&O(n,d(a)-1)});let c=e=>Y.local?`Joueur ${e+1}`:e===Y.botPlayer?`IA`:`Vous`;function l(e){e!==d(r).cursor&&(Wn(`tick`),Y.moveCursor(e))}var u=Py(),m=W(F(u),2),h=e=>{var t=Oy();f(e,t)},g=e=>{var t=Ny(),i=de(t),u=e=>{var t=ky();b(`click`,t,()=>O(n,d(n)-1)),f(e,t)};p(i,e=>{d(n)>0&&e(u)});var m=W(i,2),h=F(m);B(h,16,()=>d(s),e=>e,(e,t)=>{let n=M(()=>d(r).moves[t]);var i=Ay(),a=F(i);let s;var u=F(a),p=H(u,!0),m=W(u,2),h=F(m),g=H(h,!0),_=W(h,2),v=H(_);L(m),L(a),L(i),T((e,i,c,l)=>{R(a,`data-player`,d(n).player),s=he(a,1,`svelte-3lrecb`,null,s,{current:t===d(r).cursor-1,future:t>=d(r).cursor}),o(p,e),o(g,i),o(v,`${c??``} · ${(d(n).family||`Coup`)??``} · −${l??``}`)},[()=>xy(t+1),()=>Dy(d(n).after),()=>c(d(n).player),()=>by.format(d(n).before.reduce((e,t)=>e+t,0)-d(n).after.reduce((e,t)=>e+t,0))]),b(`click`,a,()=>l(t+1)),f(e,i)});var g=W(h,2),_=e=>{var t=jy(),n=F(t);let i;var a=W(F(n)),s=F(a),c=H(s,!0);te(),L(a),L(n),L(t),T(e=>{i=he(n,1,`origin svelte-3lrecb`,null,i,{current:d(r).cursor===0}),o(c,e)},[()=>Dy(d(r).initial)]),b(`click`,n,()=>l(0)),f(e,t)};p(g,e=>{d(n)===d(a)-1&&e(_)}),L(m);var v=W(m,2),y=e=>{var t=My();t.textContent=`← Voir les 150 coups précédents`,b(`click`,t,()=>O(n,d(n)+1)),f(e,t)};p(v,e=>{d(n)<d(a)-1&&e(y)}),f(e,t)};p(m,e=>{d(i)?e(g,-1):e(h)}),L(u),f(e,u),G()}c([`click`]);var Iy=K(`<small class="repr svelte-jh99x1"> </small>`),Ly=K(`<em class="svelte-jh99x1"> </em>`),Ry=K(`<i class="svelte-jh99x1"> </i>`),zy=K(`APRÈS <b class="num svelte-jh99x1"> </b><!>`,1),By=K(`<article><button type="button" class="head svelte-jh99x1" title="Montrer cette pile sur le plateau"><span class="name svelte-jh99x1"> </span> <b> </b> <!></button> <div class="stepper svelte-jh99x1"><button type="button" class="svelte-jh99x1">−</button> <label><span class="kit-sr"></span> <input type="text" inputmode="numeric" class="svelte-jh99x1"/></label> <button type="button" class="svelte-jh99x1">+</button></div> <input class="range svelte-jh99x1" type="range" min="0" step="1"/> <span class="target svelte-jh99x1"><!></span></article>`),Vy=K(`<div class="moves svelte-jh99x1"><header class="svelte-jh99x1"><div class="svelte-jh99x1"><span class="index svelte-jh99x1">01</span><h3 class="svelte-jh99x1">Votre prochain coup</h3></div> <button type="button" class="text-button">Réinitialiser ↺</button></header> <div class="list svelte-jh99x1"></div></div>`);function Hy(e,n){P(n,!0);let r=M(()=>bt(q.theme)),i=M(Mt),a=M(()=>q.numeration!==`decimal`),s=z({}),c=z({});_(()=>{if(!d(a))return;let e=d(i),t=[...new Set(Y.position)].slice(0,600),n=t=>`${JSON.stringify(e)}:${t}`;for(let r of t)s[n(r)]===void 0&&ct.formatNumber(r,e).then(e=>{s[n(r)]=e},()=>{s[n(r)]=`—`})});let l=e=>s[`${JSON.stringify(d(i))}:${e}`]??`…`;function u(e,t){c[e]=t;let n=Y.position[e],r=Number(t);!/^\d+$/.test(t.trim())||r>n||Y.setRemoval(e,r)}function m(e){delete c[e]}function h(e,t){e.preventDefault(),Y.adjustRemoval(t,e.deltaY<0?1:-1)}let g=e=>{S_.focusPile(e),S_.reveal(e)};var v=Vy(),y=F(v),x=W(F(y),2);L(y);var C=W(y,2);B(C,21,()=>Y.position,t,(e,t,n)=>{let i=M(()=>Y.preview[n]??d(t)),s=M(()=>c[n]),_=M(()=>d(s)!==void 0&&(!/^\d+$/.test(d(s).trim())||Number(d(s))>d(t)));var v=By();let y,x;var C=F(v),w=F(C),E=H(w),D=W(w,2);let O;var A=H(D,!0),j=W(D,2),N=e=>{var n=Iy(),r=H(n,!0);T(e=>o(r,e),[()=>l(d(t))]),f(e,n)};p(j,e=>{d(a)&&e(N)}),L(C);var P=W(C,2),I=F(P);R(I,`aria-label`,`Retirer un jeton de moins dans la pile ${n+1}`);var te=W(I,2);let ne;var z=F(te);z.textContent=`Jetons retirés de la pile ${n+1}`;var re=W(z,2);ie(re),L(te);var B=W(te,2);R(B,`aria-label`,`Retirer un jeton de plus dans la pile ${n+1}`),L(P);var V=W(P,2);ie(V),R(V,`aria-label`,`Retrait dans la pile ${n+1}`);let ae;var oe=W(V,2),U=F(oe),se=e=>{var n=Ly(),r=H(n);T(e=>o(r,`Entier entre 0 et ${e??``}.`),[()=>by.format(d(t))]),f(e,n)},ce=e=>{var n=zy(),r=W(de(n)),a=H(r,!0),s=W(r),c=e=>{var n=Ry(),r=H(n);T(e=>o(r,`· −${e??``}`),[()=>by.format(d(t)-d(i))]),f(e,n)};p(s,e=>{d(i)!==d(t)&&e(c)}),T(e=>o(a,e),[()=>by.format(d(i))]),f(e,n)};p(U,e=>{d(_)?e(se):e(ce,-1)}),L(oe),L(v),T((e,r,a,s)=>{y=he(v,1,`pile svelte-jh99x1`,null,y,{changed:d(i)!==d(t),hot:y_.hoverPile===n||y_.focusPile===n,empty:d(t)===0}),x=k(v,``,x,{"--tint":e}),o(E,`PILE ${r??``}`),O=he(D,1,`num svelte-jh99x1`,null,O,{large:d(t)>=1e6}),o(A,a),I.disabled=d(t)===0||Y.locked||d(i)>=d(t),ne=he(te,1,`svelte-jh99x1`,null,ne,{invalid:d(_)}),ee(re,s),re.disabled=d(t)===0||Y.locked,B.disabled=d(t)===0||Y.locked||d(i)<=0,R(V,`max`,d(t)),ee(V,d(t)-d(i)),V.disabled=d(t)===0||Y.locked,ae=k(V,``,ae,{"--fill":`${d(t)?(d(t)-d(i))/d(t)*100:0}%`})},[()=>xt(d(r),n),()=>xy(n+1),()=>by.format(d(t)),()=>d(s)??String(d(t)-d(i))]),b(`click`,C,()=>g(n)),b(`click`,I,()=>Y.setRemoval(n,d(t)-d(i)-1)),b(`input`,re,e=>u(n,e.currentTarget.value)),S(`blur`,re,()=>m(n)),S(`wheel`,re,e=>h(e,n)),b(`click`,B,()=>Y.setRemoval(n,d(t)-d(i)+1)),b(`input`,V,e=>Y.setRemoval(n,Number(e.currentTarget.value))),S(`wheel`,V,e=>h(e,n)),f(e,v)}),L(C),L(v),T(()=>x.disabled=!Y.changed||Y.locked),b(`click`,x,()=>Y.clearSelection()),f(e,v),G()}c([`click`,`input`]);var Uy=K(`<div class="rules svelte-x3avie"><header class="svelte-x3avie"><span class="index svelte-x3avie">03</span><h3 class="svelte-x3avie">Les règles du jeu</h3></header> <section class="card svelte-x3avie"><span class="kind svelte-x3avie"> </span> <p class="summary svelte-x3avie"> </p> <p class="convention svelte-x3avie"><b class="svelte-x3avie"> </b> </p> <button type="button" class="text-button">Lire les règles détaillées <span>↗</span></button></section> <section class="card how svelte-x3avie"><span class="kind svelte-x3avie">COMMENT JOUER</span> <ul class="svelte-x3avie"><li><b class="svelte-x3avie">Cliquez un jeton</b> : ce jeton et ceux du dessus sont retirés. Recliquez pour désélectionner.</li> <li><b class="svelte-x3avie">Molette sur une pile</b> : un jeton de plus ou de moins. Ailleurs : zoom.</li> <li><b class="svelte-x3avie">Glissez</b> pour tourner autour du plateau ; clic droit pour tout effacer.</li> <li><b class="svelte-x3avie">Jouer le coup</b> valide ; rien n’est joué avant.</li></ul></section></div>`);function Wy(e,t){P(t,!0);let n=M(()=>Y.session),r=M(()=>gt(d(n).game.id));var i=Uy(),a=W(F(i),2),s=F(a),c=H(s),l=W(s,2),u=H(l,!0),p=W(l,2),m=F(p),h=H(m),g=W(m);L(p);var _=W(p,2);L(a),te(2),L(i),T(e=>{o(c,`${d(r)?.title??`Règle`??``}${d(n).name?` · ${d(n).name}`:``}`),o(u,e),o(h,`${d(n).game.mode===`normal`?`Convention normale`:`Convention misère`}.`),o(g,` ${d(n).game.mode===`normal`?`Le joueur qui joue le dernier coup gagne.`:`Le joueur qui joue le dernier coup perd.`}`)},[()=>Vv(d(n).game)]),b(`click`,_,()=>W_(`rules`)),f(e,i),G()}c([`click`]);var Gy=K(`<button type="button" class="grab svelte-1r3vuxq" aria-label="Fermer le volet"><i class="svelte-1r3vuxq"></i></button>`),Ky=K(`<section class="hold svelte-1r3vuxq" role="status"><p class="svelte-1r3vuxq"> </p> <div class="svelte-1r3vuxq"><button type="button" class="hold-retry svelte-1r3vuxq">Réessayer ce tour ↗</button> <button type="button" class="text-button">Passer en duel local →</button></div></section>`),qy=K(`<button type="button" role="tab" class="svelte-1r3vuxq"><span aria-hidden="true" class="svelte-1r3vuxq"> </span> </button>`),Jy=K(`<aside aria-label="Informations de partie"><!> <section class="turn svelte-1r3vuxq"><div class="row svelte-1r3vuxq"><span class="eyebrow"> </span> <span class="count num svelte-1r3vuxq"> </span></div> <div class="who svelte-1r3vuxq"><span class="avatar svelte-1r3vuxq"> </span> <div><h2 class="svelte-1r3vuxq"> </h2><p class="svelte-1r3vuxq"> </p></div></div> <dl class="stats svelte-1r3vuxq"><div class="svelte-1r3vuxq"><dt class="svelte-1r3vuxq">JETONS</dt><dd class="num svelte-1r3vuxq"> </dd></div> <div class="svelte-1r3vuxq"><dt class="svelte-1r3vuxq">PILES</dt><dd class="num svelte-1r3vuxq"> </dd></div> <div class="svelte-1r3vuxq"><dt class="svelte-1r3vuxq">COUPS</dt><dd class="num svelte-1r3vuxq"> </dd></div></dl></section> <!> <div class="tabs svelte-1r3vuxq" role="tablist" aria-label="Panneaux de la console"></div> <div class="panel svelte-1r3vuxq" role="tabpanel"><!></div> <footer class="motto svelte-1r3vuxq">UNE RÈGLE SIMPLE. UN MONDE DE POSSIBILITÉS.</footer></aside>`);function Yy(e,t){P(t,!0);let n=ce(t,`sheet`,3,!1),r=[{id:`advice`,label:`Conseil`,icon:`✧`},{id:`moves`,label:`Retraits`,icon:`≡`},{id:`history`,label:`Historique`,icon:`⟲`},{id:`rules`,label:`Règles`,icon:`◇`}],i=M(()=>Y.position.reduce((e,t)=>e+t,0)),a=M(()=>{let e=Y.session.game.mode===`normal`?`dernier coup gagnant`:`dernier coup perdant`;if(Y.terminal){let e=Y.winner??0;return{heading:`PARTIE TERMINÉE`,avatar:e,name:Y.local?`Joueur ${e+1} · victoire`:e===Y.botPlayer?`Victoire de l’IA`:`Votre victoire`,sub:Y.local?`Duel terminé`:`Partie terminée`}}let t=!Y.local&&Y.player===Y.botPlayer;return{heading:`LE TOUR ACTUEL`,avatar:Y.player,name:Y.local?`Joueur ${Y.player+1}`:t?`Au tour de l’IA`:`À vous de jouer`,sub:`${Y.local?`Duel local`:`Face à l’IA`} · ${e}`}});function s(e){q.consoleTab!==e&&(q.consoleTab=e,Wn(`tick`))}function c(e){if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;e.preventDefault(),e.stopPropagation();let t=r.findIndex(e=>e.id===q.consoleTab),n=r[(t+(e.key===`ArrowRight`?1:-1)+r.length)%r.length];s(n.id),e.currentTarget.querySelector(`[data-tab="${n.id}"]`)?.focus()}var l=Jy();let u;var m=F(l),h=e=>{var t=Gy();b(`click`,t,()=>U_.sheet=!1),f(e,t)};p(m,e=>{n()&&e(h)});var g=W(m,2),_=F(g),v=F(_),y=H(v,!0),x=W(v,2),S=H(x,!0);L(_);var C=W(_,2),w=F(C),E=H(w,!0),D=W(w,2),O=F(D),k=H(O,!0),A=W(O),j=H(A,!0);L(D),L(C);var N=W(C,2),I=F(N),ee=W(F(I)),ne=H(ee,!0);L(I);var z=W(I,2),re=W(F(z)),V=H(re,!0);L(z);var ie=W(z,2),ae=W(F(ie)),oe=H(ae,!0);L(ie),L(N),L(g);var U=W(g,2),se=e=>{var t=Ky(),n=F(t),r=H(n,!0),i=W(n,2),a=F(i),s=W(a,2);L(i),L(t),T(()=>o(r,Y.botHold.message)),b(`click`,a,()=>Y.retryBot()),b(`click`,s,()=>Y.switchToLocal()),f(e,t)};p(U,e=>{Y.botHold&&e(se)});var le=W(U,2);B(le,21,()=>r,e=>e.id,(e,t)=>{var n=qy(),r=F(n),i=H(r,!0),a=W(r,1,!0);L(n),T(()=>{R(n,`data-tab`,d(t).id),R(n,`aria-selected`,q.consoleTab===d(t).id),R(n,`tabindex`,q.consoleTab===d(t).id?0:-1),o(i,d(t).icon),o(a,d(t).label)}),b(`click`,n,()=>s(d(t).id)),f(e,n)}),L(le);var ue=W(le,2),de=F(ue),fe=e=>{yy(e,{})},pe=e=>{Hy(e,{})},me=e=>{Fy(e,{})},K=e=>{Wy(e,{})};p(de,e=>{q.consoleTab===`advice`?e(fe):q.consoleTab===`moves`?e(pe,1):q.consoleTab===`history`?e(me,2):e(K,-1)}),L(ue),te(2),L(l),T((e,t,r,i,s)=>{u=he(l,1,`console svelte-1r3vuxq`,null,u,{sheet:n()}),R(g,`data-player`,d(a).avatar),o(y,d(a).heading),o(S,e),o(E,t),o(k,d(a).name),o(j,d(a).sub),o(ne,r),o(V,i),o(oe,s)},[()=>xy(Y.session.cursor+ +!Y.terminal),()=>xy(d(a).avatar+1),()=>by.format(d(i)),()=>xy(Y.position.length),()=>xy(Y.session.cursor)]),b(`keydown`,le,c),f(e,l),G()}c([`click`,`keydown`]);var Xy=K(`<button type="button" class="round svelte-1rgobd6" aria-label="Conseil, retraits précis et historique">☰</button>`),Zy=K(`<button type="button" class="cancel svelte-1rgobd6" title="Annuler les retraits préparés · Échap">Annuler<span class="wide svelte-1rgobd6">&nbsp;la sélection</span></button>`),Qy=K(`<button type="button">Jouer le coup <span aria-hidden="true">↗</span><kbd class="svelte-1rgobd6">ENTRÉE</kbd></button>`),$y=K(`<div class="dock svelte-1rgobd6"><div class="history svelte-1rgobd6"><button type="button" class="round svelte-1rgobd6" title="Annuler le coup · Ctrl Z" aria-label="Annuler le dernier coup">↶</button> <button type="button" class="round svelte-1rgobd6" title="Rétablir · Ctrl Maj Z" aria-label="Rétablir le coup">↷</button></div> <div class="verdict svelte-1rgobd6" role="status" aria-live="polite"><i class="dot svelte-1rgobd6"></i> <div class="svelte-1rgobd6"><strong class="svelte-1rgobd6"> </strong><span class="svelte-1rgobd6"> </span></div></div> <div class="actions svelte-1rgobd6"><!> <!> <!></div></div>`);function eb(e,t){P(t,!0);let n=ce(t,`sheetButton`,3,!1),r=M(()=>Y.position.reduce((e,t,n)=>e+t-(Y.preview[n]??t),0)),i=M(()=>{if(Y.importing||Y.load)return{tone:`busy`,label:`Vérification de l’import…`,detail:`Chaque coup est revérifié.`};if(Y.terminal)return{tone:`end`,label:`La partie est terminée`,detail:Y.endReason};if(Y.botHold)return{tone:`hold`,label:`IA en attente · choisissez la suite`,detail:Y.botHold.message};if(Y.botBusy)return{tone:`busy`,label:`L’IA réfléchit…`,detail:`Son coup arrive.`};if(Y.isBotTurn)return{tone:`busy`,label:`Tour de l’IA`,detail:`Son coup arrive.`};if(!Y.changed){let e=Y.legal,t=e.moves.length;return{tone:`idle`,label:`Sélectionnez des jetons`,detail:`Un jeton part avec ceux du dessus${e.phase===`ready`&&t?` · ${e.complete?``:`au moins `}${by.format(t)} coup${t>1?`s`:``} possible${t>1?`s`:``}`:``}.`}}let e=Y.verdict;return e?e.ok?{tone:`ok`,label:`Coup autorisé · ${e.family??``}`,detail:`${by.format(d(r))} jeton${d(r)>1?`s`:``} · ${e.reason}`}:{tone:`bad`,label:`Ce coup n’est pas autorisé`,detail:e.reason}:{tone:`busy`,label:`Vérification…`,detail:`${by.format(d(r))} jeton${d(r)>1?`s`:``}`}}),a=M(()=>d(i).tone===`ok`&&!Y.locked),s=M(()=>Y.session);var c=$y(),l=F(c),u=F(l),m=W(u,2);L(l);var h=W(l,2),g=W(F(h),2),_=F(g),v=H(_,!0),y=W(_),x=H(y,!0);L(g),L(h);var S=W(h,2),C=F(S),w=e=>{var t=Xy();T(()=>R(t,`aria-expanded`,U_.sheet)),b(`click`,t,()=>U_.sheet=!U_.sheet),f(e,t)};p(C,e=>{n()&&e(w)});var E=W(C,2),D=e=>{var t=Zy();T(()=>t.disabled=Y.locked),b(`click`,t,function(...e){ev?.apply(this,e)}),f(e,t)};p(E,e=>{Y.changed&&!Y.terminal&&e(D)});var O=W(E,2);re(O,()=>d(a),e=>{var t=Qy();let n;T(()=>{n=he(t,1,`play svelte-1rgobd6`,null,n,{ready:d(a)}),t.disabled=!d(a)}),b(`click`,t,()=>$_()),f(e,t)}),L(S),L(c),T(()=>{R(c,`data-tone`,d(i).tone),u.disabled=d(s).cursor===0||Y.importing,m.disabled=d(s).cursor>=d(s).moves.length||Y.importing,o(v,d(i).label),o(x,d(i).detail)}),b(`click`,u,function(...e){tv?.apply(this,e)}),b(`click`,m,function(...e){nv?.apply(this,e)}),f(e,c),G()}c([`click`]);var tb=n(`<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1wet7vc"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"></path><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"></path></svg>`),nb=n(`<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1wet7vc"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"></path><path d="M16 9.5l5 5M21 9.5l-5 5"></path></svg>`),rb=n(`<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1wet7vc"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"></path></svg>`),ib=n(`<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1wet7vc"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"></path></svg>`),ab=K(`<button type="button" title="Plein écran · F11" aria-label="Plein écran" class="svelte-1wet7vc"><!></button>`),ob=K(`<button type="button" aria-label="Console de partie" class="svelte-1wet7vc"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1wet7vc"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"></rect><path d="M14.5 4.5v15"></path><path d="M16.8 9h1.7M16.8 12h1.7" opacity=".6"></path></svg></button>`),sb=K(`<div class="tools svelte-1wet7vc" role="toolbar" aria-label="Outils du plateau" aria-orientation="vertical"><button type="button" title="Recentrer la caméra · Début" aria-label="Recentrer la caméra" class="svelte-1wet7vc"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1wet7vc"><circle cx="12" cy="12" r="3.2"></circle><path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4"></path><circle cx="12" cy="12" r="7.5" opacity=".45"></circle></svg></button> <button type="button" title="Analyser la position · H" aria-label="Analyser la position"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1wet7vc"><path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z"></path><path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" opacity=".6"></path></svg></button> <button type="button" title="Guidage des coups · Y (manette)" aria-label="Guidage des coups" class="svelte-1wet7vc"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1wet7vc"><path d="M5 18.5h10M5 14.5h10M5 6.5h10" opacity=".55"></path><path d="M5 10.5h10"></path><path d="M18 10.5h2.5M19.25 9.25v2.5"></path></svg></button> <span class="sep svelte-1wet7vc" aria-hidden="true"></span> <button type="button" aria-label="Son" class="svelte-1wet7vc"><!></button> <!> <!></div>`);function cb(e,t){P(t,!0);let n=ce(t,`docked`,3,!1),r=ce(t,`wide`,3,!1);function i(){rv(),r()||(U_.sheet=!0)}function a(){Y.setLegalVisible(!q.showLegalMoves),Wn(q.showLegalMoves?`select`:`deselect`)}function o(){q.sound=!q.sound,Wn(`select`)}function s(){q.consoleOpen=!q.consoleOpen,Wn(q.consoleOpen?`open`:`close`)}var c=sb(),l=F(c),u=W(l,2);let m;var h=W(u,2),g=W(h,4),_=F(g),v=e=>{var t=tb();f(e,t)},y=e=>{var t=nb();f(e,t)};p(_,e=>{q.sound?e(v):e(y,-1)}),L(g);var x=W(g,2),S=e=>{var t=ab(),n=F(t),r=e=>{var t=rb();f(e,t)},i=e=>{var t=ib();f(e,t)};p(n,e=>{U_.fullscreen?e(r):e(i,-1)}),L(t),T(()=>R(t,`aria-pressed`,U_.fullscreen)),b(`click`,t,function(...e){lv?.apply(this,e)}),f(e,t)},C=M(()=>Ee());p(x,e=>{d(C)&&e(S)});var w=W(x,2),E=e=>{var t=ob();T(()=>{R(t,`title`,n()?`Masquer la console`:`Afficher la console`),R(t,`aria-pressed`,n())}),b(`click`,t,s),f(e,t)};p(w,e=>{r()&&e(E)}),L(c),T(()=>{u.disabled=Y.terminal||Y.hint.busy,m=he(u,1,`svelte-1wet7vc`,null,m,{busy:Y.hint.busy}),R(h,`aria-pressed`,q.showLegalMoves),R(g,`title`,q.sound?`Couper le son`:`Rétablir le son`),R(g,`aria-pressed`,q.sound)}),b(`click`,l,()=>{S_.resetCamera(),Wn(`tick`)}),b(`click`,u,i),b(`click`,h,a),b(`click`,g,o),f(e,c),G()}c([`click`]);var lb=class{#e;#t;constructor(e,t){this.#e=e,this.#t=l(t)}get current(){return this.#t(),this.#e()}},ub=/\(.+\)/,db=new Set([`all`,`print`,`screen`,`and`,`or`,`not`,`only`]),fb=class extends lb{constructor(e,t){let n=ub.test(e)||e.split(/[\s,]+/).some(e=>db.has(e.trim()))?e:`(${e})`,r=window.matchMedia(n);super(()=>r.matches,e=>s(r,`change`,e))}};function pb(e){return Object.prototype.toString.call(e)===`[object Date]`}function mb(e,t){if(e===t||e!==e)return()=>e;let n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw Error(`Cannot interpolate values of different type`);if(Array.isArray(e)){let n=t.map((t,n)=>mb(e[n],t));return e=>n.map(t=>t(e))}if(n===`object`){if(!e||!t)throw Error(`Object cannot be null`);if(pb(e)&&pb(t)){let n=e.getTime(),r=t.getTime()-n;return e=>new Date(n+e*r)}let n=Object.keys(t),r={};return n.forEach(n=>{r[n]=mb(e[n],t[n])}),e=>{let t={};return n.forEach(n=>{t[n]=r[n](e)}),t}}if(n===`number`){let n=t-e;return t=>e+t*n}return()=>t}var hb=class e{#e;#t;#n;#r=null;constructor(e,t={}){this.#e=U(e),this.#t=U(e),this.#n=t}static of(t,n){let r=new e(t(),n);return C(()=>{r.set(t())}),r}set(e,t){O(this.#t,e);let{delay:n=0,duration:r=400,easing:i=mn,interpolate:a=mb}={...this.#n,...t};if(r===0)return this.#r?.abort(),O(this.#e,e),Promise.resolve();let o=y.now()+n,s,c=!1,l=this.#r;return this.#r=me(t=>{if(t<o)return!0;if(!c){c=!0;let t=this.#e.v;s=a(t,e),typeof r==`function`&&(r=r(t,e)),l?.abort(),l=null}let n=t-o;return n>r?(O(this.#e,e),!1):(O(this.#e,s(i(n/r))),!0)}),this.#r.promise}get current(){return d(this.#e)}get target(){return d(this.#t)}set target(e){this.set(e)}},gb=K(`<span class="svelte-uqt091"> </span>`),_b=K(`<span class="receipt svelte-uqt091" aria-hidden="true"><b class="svelte-uqt091"> </b><small class="svelte-uqt091"> </small></span>`),vb=K(`<article tabindex="0"><span class="name svelte-uqt091"> </span> <strong class="num svelte-uqt091"> <small class="svelte-uqt091">PTS</small></strong> <b class="combo svelte-uqt091"> </b> <div class="details svelte-uqt091" role="tooltip"><b class="svelte-uqt091"> </b> <!> <p class="svelte-uqt091"> </p> <small class="svelte-uqt091"> </small></div> <!></article>`);function yb(e,t){P(t,!0);let n=ce(t,`active`,3,!1),r=new hb(0,{duration:520,easing:gn}),i=U(null),a=null,s;_(()=>{r.set(t.entry.points,{duration:jt()?520:0})}),_(()=>{let e=t.award;if(!(!e||e===a||e.player!==t.player||e.points<=0||t.snapshot.counterUnavailable))return a=e,O(i,{value:`+${by.format(e.points)}`,label:e.kind===`victory`?`Victoire`:`Points obtenus`,key:Date.now()},!0),Kn(e.kind===`victory`?3:Math.max(1,e.combo??1)),clearTimeout(s),s=setTimeout(()=>{O(i,null)},1800),()=>clearTimeout(s)});let c=M(()=>Cy(t.entry.last?.breakdown)),l=M(()=>t.entry.victoryPoints&&t.entry.victoryPoints>0?`Victoire +${by.format(t.entry.victoryPoints)}`:d(c)),u=M(()=>wy(t.entry)),m=M(()=>t.entry.combo>1&&t.entry.comboCertain);var h=vb();let g;var y=F(h),b=H(y,!0),x=W(y,2),S=F(x,!0);te(),L(x);var C=W(x,2),w=H(C,!0),E=W(C,2),D=F(E),k=H(D,!0),A=W(D,2),j=e=>{var t=gb(),n=H(t,!0);T(()=>o(n,d(l))),f(e,t)};p(A,e=>{d(l)&&e(j)});var N=W(A,2),I=H(N),ee=W(N,2),ne=H(ee,!0);L(E);var z=W(E,2);re(z,()=>d(i)?.key,e=>{var t=v(),n=de(t),r=e=>{var t=_b(),n=F(t),r=H(n,!0),a=W(n),s=H(a,!0);L(t),T(()=>{o(r,d(i).value),o(s,d(i).label)}),f(e,t)};p(n,e=>{d(i)&&e(r)}),f(e,t)}),L(h),T((e,r,i,a)=>{g=he(h,1,`score svelte-uqt091`,null,g,{active:n(),hot:d(m)}),R(h,`data-player`,t.player),R(h,`aria-label`,`${t.name??``} : ${e??``}. ${d(u)??``}.`),o(b,t.name),o(S,r),o(w,d(u)),o(k,i),o(I,`${(t.entry.last?.reason||`Score ludique de vos coups, indépendant du niveau de l’IA.`)??``}${d(c)?` Le bonus de configuration récompense l’amplitude, pas une difficulté démontrée.`:``}`),o(ne,a)},[()=>t.snapshot.counterUnavailable?`compteur indisponible`:`${by.format(t.entry.points)} points`,()=>t.snapshot.counterUnavailable?`—`:by.format(Math.round(r.current)),()=>Ty(t.entry,t.snapshot),()=>Ey(t.snapshot)]),f(e,h),G()}var bb=K(`<small class="svelte-1gn0ox9"> </small>`),xb=K(`<em class="dots svelte-1gn0ox9"><i class="svelte-1gn0ox9">.</i><i class="svelte-1gn0ox9">.</i><i class="svelte-1gn0ox9">.</i></em>`),Sb=K(`<div class="turn svelte-1gn0ox9" role="status" aria-live="polite"><i></i> <span class="svelte-1gn0ox9"><b class="svelte-1gn0ox9"> <!></b><small class="svelte-1gn0ox9"> </small></span></div>`),Cb=K(`<header><div class="identity svelte-1gn0ox9"><button type="button" class="home svelte-1gn0ox9" title="Menu principal" aria-label="Retour au menu principal"><!></button> <div class="game svelte-1gn0ox9"><h1 class="svelte-1gn0ox9"> <span class="svelte-1gn0ox9">.</span></h1> <p class="svelte-1gn0ox9"><span class="tag svelte-1gn0ox9"> </span><span class="svelte-1gn0ox9"> </span><span class="svelte-1gn0ox9"> </span></p> <!></div></div> <!> <div class="right svelte-1gn0ox9"><div class="scores svelte-1gn0ox9" aria-label="Scores humains de cette partie"></div> <button type="button" class="pause svelte-1gn0ox9" aria-haspopup="dialog"><span aria-hidden="true" class="svelte-1gn0ox9">Ⅱ</span><span class="label svelte-1gn0ox9">Pause</span><kbd class="svelte-1gn0ox9">ÉCHAP</kbd></button></div></header>`);function wb(e,t){P(t,!0);let n=ce(t,`compact`,3,!1),r=M(()=>Y.session),i=M(()=>Y.score.snapshot),a=M(()=>[0,1].filter(e=>Y.local||e!==Y.botPlayer)),s=M(()=>d(r).opponent===`local`?`DUEL LOCAL`:`IA ${_t(d(r).difficulty).label.toUpperCase()}`),c=M(()=>{if(Y.terminal){let e=Y.winner??0;return{tone:e,title:`PARTIE TERMINÉE`,sub:Y.local?`Joueur ${e+1} · victoire`:e===Y.botPlayer?`Victoire de l’IA`:`Votre victoire`,busy:!1}}return Y.importing||Y.load?{tone:-1,title:`VÉRIFICATION`,sub:`Import de la partie…`,busy:!0}:Y.botHold?{tone:Y.botPlayer,title:`IA EN ATTENTE`,sub:`Choisissez la suite`,busy:!1}:!Y.local&&Y.botPaused?{tone:-1,title:`RELECTURE`,sub:`IA suspendue`,busy:!1}:!Y.local&&Y.player===Y.botPlayer?{tone:Y.player,title:`L’IA RÉFLÉCHIT`,sub:`Niveau ${_t(d(r).difficulty).label}`,busy:!0}:Y.local?{tone:Y.player,title:`JOUEUR ${Y.player+1}`,sub:`À vous de jouer`,busy:!1}:{tone:Y.player,title:`À VOUS DE JOUER`,sub:d(r).game.mode===`normal`?`Le dernier coup gagne`:`Le dernier coup perd`,busy:!1}});var l=Cb();let u;var m=F(l),h=F(m);Rv(F(h),{size:26,wordmark:!1}),L(h);var g=W(h,2),_=F(g),v=F(_,!0);te(),L(_);var y=W(_,2),x=F(y),S=H(x,!0),C=W(x),w=H(C,!0),E=W(C),D=H(E);L(y);var O=W(y,2),k=e=>{var t=bb(),n=H(t,!0);T(e=>o(n,e),[()=>d(r).name?`Vos règles, votre terrain de jeu.`:gt(d(r).game.id)?.description??``]),f(e,t)};p(O,e=>{n()||e(k)}),L(g),L(m);var A=W(m,2);re(A,()=>d(c).title+d(c).tone,e=>{var t=Sb(),n=F(t);let r;var i=W(n,2),a=F(i),s=F(a,!0),l=W(s),u=e=>{var t=xb();f(e,t)};p(l,e=>{d(c).busy&&e(u)}),L(a);var m=W(a),h=H(m,!0);L(i),L(t),T(()=>{R(t,`data-tone`,d(c).tone),r=he(n,1,`dot svelte-1gn0ox9`,null,r,{busy:d(c).busy}),o(s,d(c).title),o(h,d(c).sub)}),f(e,t)});var j=W(A,2),N=F(j);B(N,20,()=>d(a),e=>e,(e,t)=>{{let n=M(()=>d(i).players.find(e=>e.player===t)??{player:t,points:0,combo:0,comboCertain:!0,last:null}),r=M(()=>Y.local?`Joueur ${t+1}`:`Vous`),a=M(()=>!Y.terminal&&Y.player===t);yb(e,{get player(){return t},get snapshot(){return d(i)},get award(){return Y.score.award},get entry(){return d(n)},get name(){return d(r)},get active(){return d(a)}})}}),L(N);var I=W(N,2);L(j),L(l),T((e,t)=>{u=he(l,1,`top svelte-1gn0ox9`,null,u,{compact:n()}),o(v,Y.title),o(S,d(r).game.mode===`normal`?`NORMAL`:`MISÈRE`),o(w,d(s)),o(D,`COUP ${e??``}${t??``}`)},[()=>xy(d(r).cursor),()=>d(r).cursor<d(r).moves.length?` / ${xy(d(r).moves.length)}`:``]),b(`click`,h,function(...e){q_?.apply(this,e)}),b(`click`,I,function(...e){iv?.apply(this,e)}),f(e,l),G()}c([`click`]);var Tb=K(`<button type="button" class="pill svelte-1kih1w7"><span class="svelte-1kih1w7">✦</span> Partie terminée · <b> </b> <em class="svelte-1kih1w7">Voir le bilan</em></button>`),Eb=K(`<p class="bonus svelte-1kih1w7"> </p>`),Db=K(`<p class="bonus muted svelte-1kih1w7">Bonus de victoire indisponible · aucun point attribué</p>`),Ob=K(`<p class="bonus muted svelte-1kih1w7">Évaluation des derniers coups…</p>`),kb=K(`<li class="svelte-1kih1w7"><span class="icon svelte-1kih1w7"> </span><div class="svelte-1kih1w7"><b class="svelte-1kih1w7"> </b><small class="svelte-1kih1w7"> </small></div></li>`),Ab=K(`<ul aria-label="Succès débloqués"></ul>`),jb=K(`<section class="victory svelte-1kih1w7" aria-labelledby="victory-title"><div class="glow svelte-1kih1w7" aria-hidden="true"></div> <span class="eyebrow svelte-1kih1w7">✦ LA PARTIE EST TERMINÉE</span> <h2 id="victory-title" class="svelte-1kih1w7"> <span class="svelte-1kih1w7">.</span></h2> <p class="sub svelte-1kih1w7"> </p> <p class="reason svelte-1kih1w7"> </p> <dl class="stats svelte-1kih1w7"><div class="score svelte-1kih1w7"><dt class="svelte-1kih1w7"> </dt><dd class="num svelte-1kih1w7"> </dd></div> <div class="svelte-1kih1w7"><dt class="svelte-1kih1w7">COUPS</dt><dd class="num svelte-1kih1w7"> </dd></div> <div class="svelte-1kih1w7"><dt class="svelte-1kih1w7">JETONS RETIRÉS</dt><dd class="num svelte-1kih1w7"> </dd></div> <div class="svelte-1kih1w7"><dt class="svelte-1kih1w7">MEILLEURE SÉRIE</dt><dd class="num svelte-1kih1w7"> </dd></div></dl> <!> <!> <div class="actions svelte-1kih1w7"><button type="button" class="primary svelte-1kih1w7">Rejouer cette position <span>↗</span></button> <button type="button" class="secondary svelte-1kih1w7">Nouvelle partie</button></div> <div class="links svelte-1kih1w7"><button type="button" class="text-button">Revoir le plateau</button> <button type="button" class="text-button">Palmarès & succès</button> <button type="button" class="text-button">Menu principal</button></div></section>`);function Mb(e,t){P(t,!0);let n=U(!1),r=U(void 0),i=Date.now()-1500,a=M(()=>Y.session),s=M(()=>Y.winner??0),c=M(()=>Y.local?null:d(s)!==Y.botPlayer),l=M(()=>Y.local?d(s):+(Y.botPlayer===0)),u=M(()=>Y.score.snapshot.players.find(e=>e.player===d(l))),m=M(()=>Y.score.snapshot.victory),h=M(()=>d(c)===null?`Joueur ${d(s)+1} remporte la partie`:d(c)?`Vous remportez la partie`:`L’IA remporte la partie`),g=M(()=>d(c)===null?`Duel local terminé.`:d(c)?`Vous avez joué le dernier coup décisif.`:`Elle a trouvé le chemin. Rejouez la position pour prendre votre revanche.`),y=M(()=>d(a).initial.reduce((e,t)=>e+t,0)-Y.position.reduce((e,t)=>e+t,0)),x=M(()=>T_.filter(e=>O_.unlocked[e.id]&&Date.parse(O_.unlocked[e.id])>=i)),S=new hb(0,{duration:900,easing:gn});_(()=>{S.set(d(u)?.points??0,{duration:jt()?900:0})}),oe(()=>{let e=setTimeout(()=>d(r)?.querySelector(`.primary`)?.focus({preventScroll:!0}),700);return()=>clearTimeout(e)});function C(){O(n,!d(n)),Wn(d(n)?`close`:`open`)}async function w(){Wn(`confirm`),await Y.rematch()}var E=v(),D=de(E),k=e=>{var t=Tb(),n=W(F(t),2),r=H(n,!0);te(2),L(t),T(()=>{R(t,`data-player`,d(s)),o(r,d(h))}),b(`click`,t,C),f(e,t)},A=e=>{var t=jb(),n=W(F(t),4),i=F(n,!0);te(),L(n);var _=W(n,2),v=H(_,!0),E=W(_,2),D=H(E,!0),k=W(E,2),A=F(k),j=F(A),M=H(j,!0),N=W(j),P=H(N,!0);L(A);var I=W(A,2),ee=W(F(I)),ne=H(ee,!0);L(I);var z=W(I,2),re=W(F(z)),V=H(re,!0);L(z);var ie=W(z,2),ae=W(F(ie)),oe=H(ae,!0);L(ie),L(k);var U=W(k,2),se=e=>{var t=Eb(),n=H(t);T(e=>o(n,`Bonus de victoire · +${e??``} points`),[()=>by.format(d(m).points)]),f(e,t)},ce=e=>{var t=Db();f(e,t)},ue=e=>{var t=Ob();f(e,t)};p(U,e=>{d(m)&&d(m).human&&d(m).points>0?e(se):Y.score.victoryUnavailable?e(ce,1):Y.score.snapshot.pending&&e(ue,2)});var de=W(U,2),fe=e=>{var t=Ab();let n;B(t,21,()=>d(x),e=>e.id,(e,t)=>{var n=kb(),r=F(n),i=H(r,!0),a=W(r),s=F(a),c=H(s,!0),l=W(s),u=H(l,!0);L(a),L(n),T(()=>{R(n,`title`,d(t).description),o(i,d(t).icon),o(c,d(t).title),o(u,d(t).description)}),f(e,n)}),L(t),T(()=>n=he(t,1,`earned svelte-1kih1w7`,null,n,{compact:d(x).length>2})),f(e,t)};p(de,e=>{d(x).length&&e(fe)});var G=W(de,2),pe=F(G),me=W(pe,2);L(G);var K=W(G,2),ge=F(K),_e=W(ge,2),ve=W(_e,2);L(K),L(t),le(t,e=>O(r,e),()=>d(r)),T((e,n,r)=>{R(t,`data-player`,d(s)),R(t,`data-outcome`,d(c)===null?`duel`:d(c)?`win`:`loss`),o(i,d(h)),o(v,d(g)),o(D,Y.endReason),o(M,Y.local?`SCORE · JOUEUR ${d(l)+1}`:`VOTRE SCORE`),o(P,e),o(ne,n),o(V,r),o(oe,d(u)?.combo??0)},[()=>by.format(Math.round(S.current)),()=>xy(d(a).cursor),()=>by.format(d(y))]),b(`click`,pe,w),b(`click`,me,()=>Z_()),b(`click`,ge,C),b(`click`,_e,()=>W_(`records`)),b(`click`,ve,function(...e){q_?.apply(this,e)}),f(e,t)};p(D,e=>{d(n)?e(k):e(A,-1)}),f(e,E),G()}c([`click`]);var Nb=K(`<div class="console-dock svelte-z2iv7j"><!></div>`),Pb=K(`<div class="notice svelte-z2iv7j" role="status"><i class="svelte-z2iv7j"></i> </div>`),Fb=K(`<aside class="welcome svelte-z2iv7j" aria-label="Premiers pas"><span class="eyebrow">PREMIERS PAS</span> <p class="svelte-z2iv7j"><b>Cliquez un jeton</b> : il part avec ceux du dessus. Validez avec <b>Jouer le coup</b>. <span class="muted">Glissez pour tourner autour du plateau ; la molette dose jeton par jeton.</span></p> <div class="svelte-z2iv7j"><button type="button" class="ok svelte-z2iv7j">Compris</button><button type="button" class="text-button">Guide →</button></div></aside>`),Ib=K(`<div class="end svelte-z2iv7j"><!></div>`),Lb=K(`<div class="pages svelte-z2iv7j" role="group" aria-label="Pages de piles"><button type="button" aria-label="Page précédente" class="svelte-z2iv7j">‹</button> <span class="num">Piles <b class="svelte-z2iv7j"> </b> </span> <button type="button" aria-label="Page suivante" class="svelte-z2iv7j">›</button></div>`),Rb=K(`<p class="pad svelte-z2iv7j" aria-hidden="true"><b class="svelte-z2iv7j">A</b> jouer · <b class="svelte-z2iv7j">B</b> annuler · <b class="svelte-z2iv7j">X</b> conseil · <b class="svelte-z2iv7j">Y</b> guidage · <b class="svelte-z2iv7j">☰</b> pause</p>`),zb=K(`<button type="button" class="scrim svelte-z2iv7j" aria-label="Fermer le volet"></button> <div class="sheet svelte-z2iv7j"><!></div>`,1),Bb=K(`<section class="play svelte-z2iv7j" data-screen="" aria-label="Partie en cours"><div class="vignette svelte-z2iv7j" aria-hidden="true"></div> <div class="top svelte-z2iv7j"><!></div> <div><!></div> <!> <div class="free svelte-z2iv7j"><!> <!> <!></div> <div class="bottom svelte-z2iv7j"><div class="float svelte-z2iv7j"><!></div> <!> <!></div> <!></section>`);function Vb(e,t){P(t,!0);let n=U(0),i=U(0),a=U(0),s=U(0),c=U(0),l=U(0),u=M(()=>d(n)>=1024),m=M(()=>d(u)&&q.consoleOpen),h=M(()=>d(n)<560?10:d(n)<1180?16:22),g=M(()=>+!!jt());_(()=>{d(m)&&(U_.sheet=!1)}),_(()=>{Y.terminal&&(U_.sheet=!1)}),_(()=>{d(n)&&d(i)&&S_.setInsets({top:d(a)+6,right:d(m)?d(c)+d(h)*2:d(h),bottom:d(s)+d(h)+(y_.pageCount>1?30:8),left:d(u)?d(l)+d(h)*2:d(h)})});function v(e){S_.setPage(y_.page+e),Wn(`tick`)}function y(){q.welcomed=!0,Wn(`confirm`)}var x=Bb();let S;var C=W(F(x),2),w=F(C);{let e=M(()=>!d(u));wb(w,{get compact(){return d(e)}})}L(C);var E=W(C,2);let D;cb(F(E),{get docked(){return d(m)},get wide(){return d(u)}}),L(E);var A=W(E,2),N=e=>{var t=Nb();Yy(F(t),{}),L(t),j(t,`clientWidth`,e=>O(c,e)),r(3,t,()=>an,()=>({x:40,duration:320*d(g),easing:gn})),f(e,t)};p(A,e=>{d(m)&&e(N)});var I=W(A,2),ee=F(I),R=e=>{var t=Pb(),n=W(F(t),1,!0);L(t),T(()=>o(n,Y.notice)),r(3,t,()=>an,()=>({y:-8,duration:240*d(g)})),f(e,t)};p(ee,e=>{Y.notice&&!Y.terminal&&e(R)});var te=W(ee,2),ne=e=>{var t=Fb(),n=W(F(t),4),i=F(n),a=W(i);L(n),L(t),b(`click`,i,y),b(`click`,a,()=>{y(),W_(`guide`)}),r(3,t,()=>an,()=>({y:10,duration:300*d(g)})),f(e,t)};p(te,e=>{!q.welcomed&&!Y.terminal&&Y.session.cursor===0&&e(ne)});var z=W(te,2),re=e=>{var t=Ib();Mb(F(t),{}),L(t),f(e,t)};p(z,e=>{Y.terminal&&!J.dialog&&e(re)}),L(I);var B=W(I,2),V=F(B),ie=F(V),ae=e=>{var t=Lb(),n=F(t),r=W(n,2),i=W(F(r)),a=H(i),s=W(i);L(r);var c=W(r,2);L(t),T((e,t,r)=>{n.disabled=y_.page===0,o(a,`${e??``}–${t??``}`),o(s,` / ${r??``}`),c.disabled=y_.page>=y_.pageCount-1},[()=>by.format(y_.pageRange[0]+1),()=>by.format(y_.pageRange[1]),()=>by.format(Y.position.length)]),b(`click`,n,()=>v(-1)),b(`click`,c,()=>v(1)),f(e,t)};p(ie,e=>{y_.pageCount>1&&e(ae)}),L(V);var oe=W(V,2);{let e=M(()=>!d(m));eb(oe,{get sheetButton(){return d(e)}})}var se=W(oe,2),ce=e=>{var t=Rb();f(e,t)};p(se,e=>{mv.connected&&d(u)&&e(ce)}),L(B);var le=W(B,2),ue=e=>{var t=zb(),n=de(t),i=W(n,2);Yy(F(i),{sheet:!0}),L(i),b(`click`,n,()=>U_.sheet=!1),r(3,n,()=>rn,()=>({duration:200*d(g)})),r(3,i,()=>an,()=>({y:380,duration:340*d(g),easing:gn})),f(e,t)};p(le,e=>{!d(m)&&U_.sheet&&e(ue)}),L(x),T(()=>{S=k(x,``,S,{"--gutter":`${d(h)??``}px`,"--top-h":`${d(a)??``}px`,"--dock-h":`${d(s)??``}px`,"--console-w":`${(d(m)?d(c):0)??``}px`,"--tools-w":`${(d(u)?d(l):0)??``}px`}),D=he(E,1,`tools svelte-z2iv7j`,null,D,{wide:d(u)})}),j(C,`clientHeight`,e=>O(a,e)),j(E,`clientWidth`,e=>O(l,e)),j(B,`clientHeight`,e=>O(s,e)),j(x,`clientWidth`,e=>O(n,e)),j(x,`clientHeight`,e=>O(i,e)),f(e,x),G()}c([`click`]);var Hb=K(`<button type="button" class="svelte-104d7c8"><span class="num svelte-104d7c8"> </span> </button>`),Ub=K(`<div class="copy svelte-104d7c8"><h3 class="svelte-104d7c8"> </h3> <!></div>`),Wb=K(`<em class="svelte-104d7c8">ou</em>`),Gb=K(`<!><kbd class="svelte-104d7c8"> </kbd>`,1),Kb=K(`<div class="svelte-104d7c8"><dt class="svelte-104d7c8"></dt><dd class="svelte-104d7c8"> </dd></div>`),qb=K(`<div class="copy svelte-104d7c8"><h3 class="svelte-104d7c8">Raccourcis</h3> <dl class="keys svelte-104d7c8"></dl></div>`),Jb=K(`<div class="guide svelte-104d7c8"><nav aria-label="Chapitres du guide" class="svelte-104d7c8"></nav> <article class="svelte-104d7c8"><!> <footer class="svelte-104d7c8"><button type="button" class="text-button">← Précédent</button> <button type="button" class="text-button">Suivant →</button></footer></article></div>`);function Yb(e,n){P(n,!0);let r=[...Gv.map(e=>e.title),`Raccourcis`],i=U(0),a=U(void 0);function s(e){O(i,e,!0),Wn(`tick`),d(a)?.scrollTo({top:0})}wn(e,{open:!0,title:`La beauté du bon coup.`,eyebrow:`BIENVENUE DANS HEAPS`,size:`wide`,get onclose(){return G_},children:(e,n)=>{var c=Jb(),l=F(c);B(l,22,()=>r,e=>e,(e,t,n)=>{var r=Hb(),a=F(r),c=H(a,!0),l=W(a,1,!0);L(r),T(e=>{R(r,`aria-current`,d(i)===d(n)?`page`:void 0),o(c,e),o(l,t)},[()=>String(d(n)+1).padStart(2,`0`)]),b(`click`,r,()=>s(d(n))),f(e,r)}),L(l);var u=W(l,2),m=F(u),g=e=>{var t=v(),n=de(t);re(n,()=>d(i),e=>{var t=Ub(),n=F(t),r=H(n,!0),a=W(n,2);h(a,()=>Gv[d(i)].html),L(t),T(()=>o(r,Gv[d(i)].title)),f(e,t)}),f(e,t)},_=e=>{var n=qb(),r=W(F(n),2);B(r,21,()=>Wv,([e,t])=>e,(e,n)=>{var r=M(()=>A(d(n),2));let i=()=>d(r)[0],a=()=>d(r)[1];var s=Kb(),c=F(s);B(c,21,()=>i().split(` · `),t,(e,t,n)=>{var r=Gb(),i=de(r),a=e=>{var t=Wb();f(e,t)};p(i,e=>{n&&e(a)});var s=W(i),c=H(s,!0);T(()=>o(c,d(t))),f(e,r)}),L(c);var l=W(c),u=H(l,!0);L(s),T(()=>o(u,a())),f(e,s)}),L(r),L(n),f(e,n)};p(m,e=>{d(i)<Gv.length?e(g):e(_,-1)});var y=W(m,2),x=F(y),S=W(x,2);L(y),L(u),le(u,e=>O(a,e),()=>d(a)),L(c),T(()=>{x.disabled=d(i)===0,S.disabled=d(i)===r.length-1}),b(`click`,x,()=>s(d(i)-1)),b(`click`,S,()=>s(d(i)+1)),f(e,c)},$$slots:{default:!0}}),G()}c([`click`]);var Xb=K(`<div class="load svelte-1l70jw4"><p role="status" aria-live="polite" class="svelte-1l70jw4"> </p> <div role="progressbar" aria-label="Revalidation de l’historique"><i class="svelte-1l70jw4"></i></div> <p class="muted svelte-1l70jw4">Les règles et tous les coups sont contrôlés avant de reprendre la partie.</p></div>`);function Zb(e,t){P(t,!0);let n=M(()=>Y.load),r=M(()=>d(n).expected?d(n).checked/d(n).expected:0);wn(e,{open:!0,get title(){return d(n).title},eyebrow:`CHAQUE COUP COMPTE`,size:`small`,onclose:()=>Y.cancelLoad(),footer:e=>{un(e,{onclick:()=>Y.cancelLoad(),children:(e,t)=>{te();var n=x(`Annuler le chargement`);f(e,n)},$$slots:{default:!0}})},children:(e,t)=>{var i=Xb(),a=F(i),s=H(a,!0),c=W(a,2);let l;R(c,`aria-valuemin`,0);var u=F(c);let p;L(c),te(2),L(i),T(()=>{o(s,d(n).status),l=he(c,1,`bar svelte-1l70jw4`,null,l,{indeterminate:!d(n).expected}),R(c,`aria-valuemax`,d(n).expected||void 0),R(c,`aria-valuenow`,d(n).expected?d(n).checked:void 0),p=k(u,``,p,{width:`${d(n).expected?d(r)*100:35}%`})}),f(e,i)},$$slots:{footer:!0,default:!0}}),G()}var Qb=K(`<p class="summary svelte-vc3qii"> </p> <nav aria-label="Menu de pause" class="svelte-vc3qii"><button type="button" class="resume svelte-vc3qii"><span class="svelte-vc3qii">▷</span> Reprendre la partie <kbd class="svelte-vc3qii">ÉCHAP</kbd></button> <button type="button" class="svelte-vc3qii"><span class="svelte-vc3qii">＋</span> Nouvelle partie</button> <button type="button" class="svelte-vc3qii"><span class="svelte-vc3qii">↻</span> Rejouer cette position</button> <div class="row svelte-vc3qii"><button type="button" class="svelte-vc3qii"><span class="svelte-vc3qii">↧</span> Exporter</button> <button type="button" class="svelte-vc3qii"><span class="svelte-vc3qii">↥</span> Importer</button></div> <div class="row svelte-vc3qii"><button type="button" class="svelte-vc3qii"><span class="svelte-vc3qii">◇</span> Règles</button> <button type="button" class="svelte-vc3qii"><span class="svelte-vc3qii">?</span> Guide</button></div> <button type="button" class="svelte-vc3qii"><span class="svelte-vc3qii">⚙</span> Réglages</button> <i class="sep svelte-vc3qii"></i> <button type="button" class="svelte-vc3qii"><span class="svelte-vc3qii">⌂</span> Menu principal</button> <button type="button" class="svelte-vc3qii"><span class="svelte-vc3qii">⏻</span> Quitter</button></nav> <div class="quick svelte-vc3qii"><div class="ambiance svelte-vc3qii"><button type="button" aria-label="Ambiance précédente" class="svelte-vc3qii">‹</button> <!> <span class="svelte-vc3qii"><small class="svelte-vc3qii">AMBIANCE</small><b class="svelte-vc3qii"> </b></span> <button type="button" aria-label="Ambiance suivante" class="svelte-vc3qii">›</button></div> <button type="button" class="sound svelte-vc3qii"> </button></div> <p class="note svelte-vc3qii"> </p>`,1);function $b(e,t){P(t,!0);let n=new Intl.NumberFormat(`fr-BE`),r=U(void 0),i=M(()=>{let e=Y.session,t=Y.position.reduce((e,t)=>e+t,0);return[Y.title,e.game.mode===`normal`?`Normal`:`Misère`,`${Y.position.length} pile${Y.position.length>1?`s`:``}`,`${n.format(t)} jeton${t>1?`s`:``}`,`${e.cursor} coup${e.cursor>1?`s`:``}`,e.opponent===`local`?`Duel local`:`Face à l’IA`].join(` · `)}),a=M(()=>bt(q.theme));oe(()=>d(r)?.querySelector(`.resume`)?.focus());let s=e=>W_(e,{fromPause:!0});function c(e){q.theme=yt[(yt.findIndex(e=>e.id===q.theme)+e+yt.length)%yt.length].id,Wn(`select`)}function l(e){if(![`ArrowUp`,`ArrowDown`].includes(e.key)||!d(r))return;let t=[...d(r).querySelectorAll(`button:not(:disabled)`)],n=t.indexOf(document.activeElement);e.preventDefault(),t[(n+(e.key===`ArrowDown`?1:-1)+t.length)%t.length]?.focus(),Wn(`tick`)}wn(e,{open:!0,title:`Partie en pause.`,eyebrow:`LE TEMPS VOUS APPARTIENT`,size:`small`,class:`pause`,get onclose(){return G_},children:(e,t)=>{var n=Qb(),u=de(n),p=H(u,!0),m=W(u,2),g=F(m),_=W(g,2),v=W(_,2),y=W(v,2),x=F(y),S=W(x,2);L(y);var C=W(y,2),w=F(C),E=W(w,2);L(C);var D=W(C,2),A=W(D,4),j=W(A,2);L(m),le(m,e=>O(r,e),()=>d(r));var M=W(m,2),N=F(M);let P;var I=F(N),ee=W(I,2);h(ee,()=>Pv(d(a).id));var te=W(ee,2),ne=W(F(te)),z=H(ne,!0);L(te);var re=W(te,2);L(N);var B=W(N,2),V=H(B,!0);L(M);var ie=W(M,2),ae=H(ie);T(()=>{o(p,d(i)),P=k(N,``,P,{"--theme-a":d(a).accent,"--theme-b":d(a).warm}),o(z,d(a).label),R(B,`aria-pressed`,q.sound),o(V,q.sound?`♪ Son`:`× Muet`),o(ae,`${Y.saveLabel??``} · Votre partie et le coup en préparation vous attendent.`)}),b(`keydown`,m,l),b(`click`,g,function(...e){G_?.apply(this,e)}),b(`click`,_,()=>Z_(null,!0)),b(`click`,v,()=>{Wn(`confirm`),J.dialog=null,Y.rematch()}),b(`click`,x,function(...e){dv?.apply(this,e)}),b(`click`,S,function(...e){fv?.apply(this,e)}),b(`click`,w,()=>s(`rules`)),b(`click`,E,()=>s(`guide`)),b(`click`,D,()=>s(`settings`)),b(`click`,A,function(...e){q_?.apply(this,e)}),b(`click`,j,function(...e){uv?.apply(this,e)}),b(`click`,I,()=>c(-1)),b(`click`,re,()=>c(1)),b(`click`,B,()=>{q.sound=!q.sound,Wn(`select`)}),f(e,n)},$$slots:{default:!0}}),G()}c([`keydown`,`click`]);var ex=K(`<h3 class="svelte-trrh7s"> </h3>`),tx=K(`<section class="svelte-trrh7s"><!> <!></section>`),nx=K(`<li class="svelte-trrh7s"><b class="svelte-trrh7s"> </b> <span class="muted"> </span><em class="svelte-trrh7s"> </em></li>`),rx=K(`<pre class="full svelte-trrh7s" tabindex="0" aria-label="Textes complets des licences"> </pre>`),ix=K(`<span class="muted">Lecture impossible.</span> <button type="button" class="text-button">Réessayer</button>`,1),ax=K(`<p class="svelte-trrh7s"><button type="button" class="text-button"> </button> <!></p>`),ox=K(`<div class="privacy svelte-trrh7s"><!> <details class="svelte-trrh7s"><summary class="svelte-trrh7s"> </summary> <p class="muted svelte-trrh7s"> </p> <ul class="svelte-trrh7s"></ul> <details class="inner svelte-trrh7s"><summary class="svelte-trrh7s"> </summary> <ul class="svelte-trrh7s"></ul></details> <!></details></div>`);function sx(e,n){P(n,!0);let r=U(z([]));_(()=>{we(()=>import(`./licences-hwqvH1ot.js`).then(e=>{O(r,e.LICENCES,!0)}),[],import.meta.url)});let i=M(()=>d(r).filter(e=>e.kind===`js`)),a=M(()=>d(r).filter(e=>e.kind===`rust`)),s=U(z({state:`idle`,text:``}));async function c(){O(s,{state:`loading`,text:``},!0);try{let e=await fetch(`./licences.txt`);if(!e.ok)throw Error(String(e.status));O(s,{state:`ready`,text:await e.text()},!0)}catch{O(s,{state:`error`,text:``},!0)}}wn(e,{open:!0,title:`Politique de confidentialité`,eyebrow:`VOS DONNÉES DANS HEAPS`,size:`wide`,get onclose(){return G_},children:(e,n)=>{var l=ox(),u=F(l);B(u,17,()=>Jv,t,(e,t)=>{var n=tx(),r=F(n),i=e=>{var n=ex(),r=H(n,!0);T(()=>o(r,d(t).title)),f(e,n)};p(r,e=>{d(t).title&&e(i)});var a=W(r,2);h(a,()=>d(t).html),L(n),f(e,n)});var m=W(u,2),g=F(m),_=H(g),v=W(g,2),y=H(v),x=W(v,2);B(x,21,()=>d(i),e=>e.name,(e,t)=>{var n=nx(),r=F(n),i=H(r,!0),a=W(r,2),s=H(a,!0),c=W(a),l=H(c,!0);L(n),T(()=>{o(i,d(t).name),o(s,d(t).version),o(l,d(t).licence)}),f(e,n)}),L(x);var S=W(x,2),C=F(S),w=H(C),E=W(C,2);B(E,21,()=>d(a),e=>`${e.name}@${e.version}`,(e,t)=>{var n=nx(),r=F(n),i=H(r,!0),a=W(r,2),s=H(a,!0),c=W(a),l=H(c,!0);L(n),T(()=>{o(i,d(t).name),o(s,d(t).version),o(l,d(t).licence)}),f(e,n)}),L(E),L(S);var D=W(S,2),O=e=>{var t=rx(),n=H(t,!0);T(()=>o(n,d(s).text)),f(e,t)},k=e=>{var t=ax(),n=F(t),r=H(n,!0),i=W(n,2),a=e=>{var t=ix(),n=W(de(t),2);b(`click`,n,c),f(e,t)};p(i,e=>{d(s).state===`error`&&e(a)}),L(t),T(()=>{n.disabled=d(s).state===`loading`,o(r,d(s).state===`loading`?`Lecture…`:`Lire les textes complets des licences →`)}),b(`click`,n,c),f(e,t)};p(D,e=>{d(s).state===`ready`?e(O):e(k,-1)}),L(m),L(l),T(()=>{o(_,`Composants libres et licences (${d(r).length??``})`),o(y,`HEAPS est construit avec ces composants libres : ${d(i).length??``} pour l’interface, ${d(a).length??``} pour le moteur et l’application. Merci à leurs auteurs.`),o(w,`Moteur et application (${d(a).length??``})`)}),f(e,l)},$$slots:{default:!0}}),G()}c([`click`]);var cx=K(`<div class="level svelte-8zhk7e"><span class="name svelte-8zhk7e"> </span> <div class="bar svelte-8zhk7e" aria-hidden="true"><i class="svelte-8zhk7e"></i></div> <span class="num svelte-8zhk7e"><b class="svelte-8zhk7e"> </b> </span></div>`),lx=K(`<em class="svelte-8zhk7e"> </em>`),ux=K(`<li><span class="icon svelte-8zhk7e"> </span> <div class="svelte-8zhk7e"><b class="svelte-8zhk7e"> </b><small class="svelte-8zhk7e"> </small><!></div></li>`),dx=K(`<li class="svelte-8zhk7e"><span class="outcome svelte-8zhk7e"> </span> <span class="title svelte-8zhk7e"> <small class="svelte-8zhk7e"> </small></span> <span class="points num svelte-8zhk7e"> </span> <time class="muted svelte-8zhk7e"> </time></li>`),fx=K(`<ol class="history svelte-8zhk7e"></ol>`),px=K(`<p class="empty svelte-8zhk7e">Terminez une partie pour ouvrir votre palmarès.</p>`),mx=K(`<div class="records svelte-8zhk7e"><dl class="stats svelte-8zhk7e"><div class="hero svelte-8zhk7e"><dt class="svelte-8zhk7e">VICTOIRES CONTRE L’IA</dt><dd class="num svelte-8zhk7e"> </dd><small class="svelte-8zhk7e"> </small></div> <div class="svelte-8zhk7e"><dt class="svelte-8zhk7e">PARTIES TERMINÉES</dt><dd class="num svelte-8zhk7e"> </dd></div> <div class="svelte-8zhk7e"><dt class="svelte-8zhk7e">MEILLEUR SCORE</dt><dd class="num svelte-8zhk7e"> </dd></div> <div class="svelte-8zhk7e"><dt class="svelte-8zhk7e">MEILLEURE SÉRIE P</dt><dd class="num svelte-8zhk7e"> </dd></div> <div class="svelte-8zhk7e"><dt class="svelte-8zhk7e">VICTOIRES D’AFFILÉE</dt><dd class="num svelte-8zhk7e"> <small class="svelte-8zhk7e"> </small></dd></div> <div class="svelte-8zhk7e"><dt class="svelte-8zhk7e">DUELS LOCAUX</dt><dd class="num svelte-8zhk7e"> </dd></div> <div class="svelte-8zhk7e"><dt class="svelte-8zhk7e">COUPS JOUÉS</dt><dd class="num svelte-8zhk7e"> </dd></div></dl> <section class="levels svelte-8zhk7e" aria-label="Résultats par niveau d’IA"></section> <section><header class="svelte-8zhk7e"><h3 class="svelte-8zhk7e">Succès</h3><span class="muted num"> </span></header> <ul class="achievements svelte-8zhk7e"></ul></section> <section><header class="svelte-8zhk7e"><h3 class="svelte-8zhk7e">Dernières parties</h3></header> <!></section></div>`);function hx(e,n){P(n,!0);let r=new Intl.NumberFormat(`fr-BE`),i=new Intl.DateTimeFormat(`fr-BE`,{day:`numeric`,month:`short`,year:`numeric`}),a=new Intl.DateTimeFormat(`fr-BE`,{day:`numeric`,month:`short`,hour:`2-digit`,minute:`2-digit`}),s=M(()=>T_.filter(e=>O_.unlocked[e.id]).length),c=M(L_),l=M(R_),u=M(()=>d(c)+d(l)?Math.round(d(c)/(d(c)+d(l))*100):null),m={win:`Victoire`,loss:`Défaite`,duel:`Duel`},h=e=>e.opponent===`local`?`Duel local`:`IA ${pt.AI_LEVELS.find(t=>t.id===e.difficulty)?.label??``}`;wn(e,{open:!0,title:`Vos victoires, vos records.`,eyebrow:`PALMARÈS & SUCCÈS`,size:`wide`,get onclose(){return G_},children:(e,n)=>{var g=mx(),_=F(g),v=F(_),y=W(F(v)),b=H(y,!0),x=W(y),S=H(x,!0);L(v);var C=W(v,2),w=W(F(C)),E=H(w,!0);L(C);var D=W(C,2),O=W(F(D)),A=H(O,!0);L(D);var j=W(D,2),N=W(F(j)),P=H(N,!0);L(j);var I=W(j,2),ee=W(F(I)),te=F(ee),ne=W(te),z=H(ne);L(ee),L(I);var re=W(I,2),V=W(F(re)),ie=H(V,!0);L(re);var ae=W(re,2),oe=W(F(ae)),U=H(oe,!0);L(ae),L(_);var se=W(_,2);B(se,21,()=>pt.AI_LEVELS,e=>e.id,(e,t)=>{let n=M(()=>O_.wins[d(t).id]),r=M(()=>O_.losses[d(t).id]);var i=cx(),a=F(i),s=H(a,!0),c=W(a,2),l=F(c);let u;L(c);var p=W(c,2),m=F(p),h=H(m,!0),g=W(m);L(p),L(i),T(()=>{R(i,`data-level`,d(t).id),o(s,d(t).label),u=k(l,``,u,{width:`${d(n)+d(r)?d(n)/(d(n)+d(r))*100:0}%`}),o(h,d(n)),o(g,` V · ${d(r)??``} D`)}),f(e,i)}),L(se);var ce=W(se,2),le=F(ce),ue=W(F(le)),de=H(ue);L(le);var fe=W(le,2);B(fe,21,()=>T_,e=>e.id,(e,t)=>{let n=M(()=>O_.unlocked[d(t).id]);var r=ux();let a;var s=F(r),c=H(s,!0),l=W(s,2),u=F(l),m=H(u,!0),h=W(u),g=H(h,!0),_=W(h),v=e=>{var t=lx(),r=H(t,!0);T(e=>o(r,e),[()=>i.format(new Date(d(n)))]),f(e,t)};p(_,e=>{d(n)&&e(v)}),L(l),L(r),T(()=>{a=he(r,1,`svelte-8zhk7e`,null,a,{on:d(n)}),o(c,d(t).icon),o(m,d(t).title),o(g,d(t).description)}),f(e,r)}),L(fe),L(ce);var G=W(ce,2),pe=W(F(G),2),me=e=>{var n=fx();B(n,21,()=>O_.history,t,(e,t)=>{var n=dx(),i=F(n),s=H(i,!0),c=W(i,2),l=F(c,!0),u=W(l),p=H(u);L(c);var g=W(c,2),_=H(g),v=W(g,2),y=H(v,!0);L(n),T((e,r,i)=>{R(n,`data-outcome`,d(t).outcome),o(s,m[d(t).outcome]),o(l,d(t).title),o(p,`${d(t).mode===`normal`?`Normal`:`Misère`} · ${e??``} · ${d(t).moves??``} coups`),o(_,`${r??``} pts`),R(v,`datetime`,d(t).date),o(y,i)},[()=>h(d(t)),()=>r.format(d(t).points),()=>a.format(new Date(d(t).date))]),f(e,n)}),L(n),f(e,n)},K=e=>{var t=px();f(e,t)};p(pe,e=>{O_.history.length?e(me):e(K,-1)}),L(G),L(g),T((e,t,n,r,i,a)=>{o(b,e),o(S,t),o(E,n),o(A,r),o(P,O_.bestCombo),o(te,`${O_.streak??``} `),o(z,`/ record ${O_.bestStreak??``}`),o(ie,i),o(U,a),o(de,`${d(s)??``} / ${T_.length??``}`)},[()=>r.format(d(c)),()=>d(u)===null?`Aucune partie contre l’IA`:`${d(u)} % de victoires · ${r.format(d(l))} défaite${d(l)>1?`s`:``}`,()=>r.format(O_.finished),()=>r.format(O_.bestScore),()=>r.format(O_.duels),()=>r.format(O_.moves)]),f(e,g)},$$slots:{default:!0}}),G()}var gx=K(`<details class="svelte-ygmf57"><summary class="svelte-ygmf57">Le langage des règles</summary><div class="copy svelte-ygmf57"></div></details>`),_x=K(`<div class="rules svelte-ygmf57"><p class="lead svelte-ygmf57"> </p> <div class="copy svelte-ygmf57"></div> <!> <section class="how svelte-ygmf57"><h3 class="svelte-ygmf57">Comment jouer</h3> <ol class="svelte-ygmf57"><li>Cliquez un jeton : il est retiré avec ceux du dessus. Recliquez pour désélectionner.</li> <li>Préparez autant de piles que la règle le permet ; le verdict s’affiche en bas.</li> <li><b>Jouer le coup</b> valide. Rien n’est joué avant.</li></ol></section></div>`);function vx(e,t){P(t,!0);let n=M(()=>Y.session.game);wn(e,{open:!0,get title(){return Y.title},eyebrow:`LES RÈGLES DU JEU`,get onclose(){return G_},children:(e,t)=>{var r=_x(),i=F(r),a=H(i,!0),s=W(i,2);h(s,()=>Uv(d(n),d(n).mode),!0),L(s);var c=W(s,2),l=e=>{var t=gx(),n=W(F(t));h(n,()=>Kv,!0),L(n),L(t),f(e,t)};p(c,e=>{d(n).id===`custom`&&e(l)}),te(2),L(r),T(e=>o(a,e),[()=>Vv(d(n))]),f(e,r)},$$slots:{default:!0}}),G()}var yx=K(`<p class="foot svelte-ruuki3"> </p> <button type="button" class="text-button">Revoir les premiers pas</button> <!>`,1),bx=K(`<i class="check svelte-ruuki3" aria-hidden="true">✓</i>`),xx=K(`<button type="button" role="radio" class="svelte-ruuki3"><span class="art svelte-ruuki3"></span> <span class="label svelte-ruuki3"><b class="svelte-ruuki3"> </b><small class="svelte-ruuki3"> </small></span> <!></button>`),Sx=K(`<option> </option>`),Cx=K(`<label class="field base svelte-ruuki3"><span>Base</span><input type="number" min="2" max="36"/></label>`),wx=K(`<div class="settings svelte-ruuki3"><section class="gallery svelte-ruuki3" aria-label="Galerie des univers"><div class="grid svelte-ruuki3" role="radiogroup" aria-label="Univers visuel"></div></section> <div class="prefs svelte-ruuki3"><section class="svelte-ruuki3"><h3 class="svelte-ruuki3">Affichage</h3> <div class="field-block svelte-ruuki3"><span class="field-label svelte-ruuki3">QUALITÉ DU RENDU</span> <!> <small class="muted svelte-ruuki3"> </small></div> <!> <!></section> <section class="svelte-ruuki3"><h3 class="svelte-ruuki3">Son</h3> <!> <div><!> <!></div></section> <section class="svelte-ruuki3"><h3 class="svelte-ruuki3">Jeu</h3> <!> <div class="field-block svelte-ruuki3"><span class="field-label svelte-ruuki3">BUDGET D’ANALYSE</span> <!></div> <div class="field-block svelte-ruuki3"><span class="field-label svelte-ruuki3">NIVEAU DE L’IA PAR DÉFAUT</span> <!> <small class="muted svelte-ruuki3">Utilisé par la partie rapide et proposé pour les nouvelles parties.</small></div> <div class="row svelte-ruuki3"><label class="field svelte-ruuki3"><span>Écriture des tailles</span> <select></select></label> <!></div> <small class="muted svelte-ruuki3">Affichée sous chaque pile dans « Retraits ». Les règles ne changent pas.</small></section></div></div>`);function Tx(e,t){P(t,!0);let n=[{id:`auto`,label:`Auto`,hint:`Adaptative · recommandée`},{id:`high`,label:`Haute`,hint:`Haute définition · ombres fines`},{id:`balanced`,label:`Équilibrée`,hint:`Ombres plus légères`},{id:`eco`,label:`Économe`,hint:`Sans ombres ni décor animé · batterie`}],r={high:`Haute définition`,balanced:`Équilibrée`,eco:`Économe`},i=[{id:`300`,label:`Rapide`,hint:`0,3 seconde`},{id:`1500`,label:`Équilibré`,hint:`1,5 seconde`},{id:`5000`,label:`Approfondi`,hint:`5 secondes`}],a=M(()=>pt.AI_LEVELS.map(e=>({id:e.id,label:e.label,hint:e.description})));function s(e){q.theme!==e&&(q.theme=e,Wn(`select`))}function c(e){if(![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(e.key))return;e.preventDefault();let t=[...e.currentTarget.querySelectorAll(`button`)],n=t.indexOf(document.activeElement),r=getComputedStyle(e.currentTarget).gridTemplateColumns.split(` `).length,i=e.key===`ArrowLeft`?-1:e.key===`ArrowRight`?1:e.key===`ArrowUp`?-r:r,a=t[Math.max(0,Math.min(t.length-1,n+i))];a?.focus(),a?.click()}let l=M(()=>J.fromPause?`Revenir à la pause`:J.flow===`play`?`Revenir au jeu`:`Terminé`);wn(e,{open:!0,title:`Onze univers. Votre arène.`,eyebrow:`FAÇONNEZ L’AMBIANCE`,size:`full`,get onclose(){return G_},footer:e=>{var t=yx(),n=de(t),r=H(n),i=W(n,2);un(W(i,2),{variant:`primary`,get onclick(){return G_},children:(e,t)=>{te();var n=x();T(()=>o(n,`${d(l)??``} ↗`)),f(e,n)},$$slots:{default:!0}}),T(e=>{o(r,`Partie, règles et préférences restent sur cet appareil · HEAPS 2.0.2 · ${e??``}`),i.disabled=!q.welcomed},[()=>Se()]),b(`click`,i,()=>{q.welcomed=!1,Wn(`tick`)}),f(e,t)},children:(e,t)=>{var l=wx(),u=F(l),m=F(u);B(m,21,()=>yt,e=>e.id,(e,t)=>{var n=xx();let r;var i=F(n);h(i,()=>Pv(d(t).id),!0),L(i);var a=W(i,2),c=F(a),l=H(c,!0),u=W(c),m=H(u,!0);L(a);var g=W(a,2),_=e=>{var t=bx();f(e,t)};p(g,e=>{q.theme===d(t).id&&e(_)}),L(n),T(()=>{R(n,`aria-checked`,q.theme===d(t).id),R(n,`tabindex`,q.theme===d(t).id?0:-1),r=k(n,``,r,{"--theme-a":d(t).accent,"--theme-b":d(t).warm,"--theme-bg":d(t).background}),o(l,d(t).label),o(m,d(t).description)}),b(`click`,n,()=>s(d(t).id)),f(e,n)}),L(m),L(u);var g=W(u,2),_=F(g),y=W(F(_),2),x=W(F(y),2);pn(x,{get options(){return n},get value(){return q.quality},label:`Qualité du rendu`,onchange:e=>{q.quality=e,Wn(`select`)}});var S=W(x,2),C=H(S);L(y);var w=W(y,2);kn(w,{get checked(){return q.motion},label:`Animations et particules`,hint:`Respecte aussi le réglage système.`,onchange:e=>q.motion=e});var D=W(w,2),O=e=>{var t=v(),n=de(t),r=e=>{kn(e,{get checked(){return U_.fullscreen},label:`Plein écran`,hint:`F11 à tout moment.`,onchange:()=>lv()})},i=M(()=>Ee());p(n,e=>{d(i)&&e(r)}),f(e,t)};p(D,e=>{xe.android||e(O)}),L(_);var A=W(_,2),j=W(F(A),2);kn(j,{get checked(){return q.sound},label:`Son du jeu`,hint:`Jetons, interface et nappe de l’univers, synthétisés localement.`,onchange:e=>{q.sound=e,e&&Wn(`select`)}});var N=W(j,2);let P;var I=F(N);En(I,{label:`Effets`,oninput:()=>Wn(`tick`),get value(){return q.effectsVolume},set value(e){q.effectsVolume=e}}),En(W(I,2),{label:`Ambiance`,get value(){return q.ambienceVolume},set value(e){q.ambienceVolume=e}}),L(N),L(A);var ee=W(A,2),ne=W(F(ee),2);kn(ne,{get checked(){return q.showLegalMoves},label:`Guidage des coups`,hint:`Un anneau lumineux marque chaque coupe permise ; un clic sur une autre pile y déplace la sélection.`,onchange:e=>Y.setLegalVisible(e)});var z=W(ne,2),re=W(F(z),2);{let e=M(()=>String(q.budget));pn(re,{get options(){return i},get value(){return d(e)},label:`Budget d’analyse`,onchange:e=>q.budget=Number(e)})}L(z);var V=W(z,2);pn(W(F(V),2),{get options(){return d(a)},get value(){return q.difficulty},label:`Niveau de l’IA par défaut`,onchange:e=>q.difficulty=e}),te(2),L(V);var ae=W(V,2),oe=F(ae),U=W(F(oe),2);B(U,21,()=>Bv,e=>e.id,(e,t)=>{var n=Sx(),r=H(n),i={};T(()=>{o(r,`${d(t).label??``} · ${d(t).hint??``}`),i!==(i=d(t).id)&&(n.value=(n.__value=i)??``)}),f(e,n)}),L(U),pe(U),L(oe);var se=W(oe,2),ce=e=>{var t=Cx(),n=W(F(t));ie(n),L(t),fe(n,()=>q.base,e=>q.base=e),f(e,t)};p(se,e=>{q.numeration===`custom`&&e(ce)}),L(ae),te(2),L(ee),L(g),L(l),T(()=>{o(C,`Rendu actuel : ${r[y_.level]??``}${y_.fps?` · ${y_.fps} images/s`:``}${q.quality===`auto`?` · ajusté selon l’appareil`:``}`),P=he(N,1,`sliders svelte-ruuki3`,null,P,{off:!q.sound})}),b(`keydown`,m,c),E(U,()=>q.numeration,e=>q.numeration=e),f(e,l)},$$slots:{footer:!0,default:!0}}),G()}c([`click`,`keydown`]);function Ex(e,t){P(t,!1),D();var n=v(),r=de(n),i=e=>{Zb(e,{})},a=e=>{$b(e,{})},o=e=>{Tx(e,{})},s=e=>{Yb(e,{})},c=e=>{vx(e,{})},l=e=>{sx(e,{})},u=e=>{hx(e,{})};p(r,e=>{Y.load?e(i):J.dialog===`pause`?e(a,1):J.dialog===`settings`?e(o,2):J.dialog===`guide`?e(s,3):J.dialog===`rules`?e(c,4):J.dialog===`privacy`?e(l,5):J.dialog===`records`&&e(u,6)}),f(e,n),G()}var Dx=K(`<button type="button" class="achievement svelte-1br0hsq"><span class="icon svelte-1br0hsq"> </span> <span class="text svelte-1br0hsq"><small class="svelte-1br0hsq">SUCCÈS DÉBLOQUÉ</small><b class="svelte-1br0hsq"> </b><em class="svelte-1br0hsq"> </em></span></button>`),Ox=K(`<div class="toast svelte-1br0hsq" role="status"> </div>`),kx=K(`<div class="toasts svelte-1br0hsq" aria-live="polite"><!> <!></div>`);function Ax(e,t){P(t,!0);let n=M(()=>+!!jt()),i=M(()=>Y.terminal&&!J.dialog&&J.flow===`play`?[]:k_.list);_(()=>{let e=k_.list.map((e,t)=>setTimeout(()=>N_(e.id),6e3+t*600));return()=>e.forEach(clearTimeout)});var a=kx(),s=F(a);B(s,17,()=>d(i),e=>e.id,(e,t)=>{var i=Dx(),a=F(i),s=H(a,!0),c=W(a,2),l=W(F(c)),u=H(l,!0),p=W(l),m=H(p,!0);L(c),L(i),T(()=>{o(s,d(t).icon),o(u,d(t).title),o(m,d(t).description)}),b(`click`,i,()=>N_(d(t).id)),r(1,i,()=>an,()=>({y:-16,duration:380*d(n)})),r(2,i,()=>an,()=>({y:-10,duration:240*d(n)})),f(e,i)});var c=W(s,2);re(c,()=>J.toast.key,e=>{var t=v(),i=de(t),a=e=>{var t=Ox(),i=H(t,!0);T(()=>o(i,J.toast.text)),r(1,t,()=>an,()=>({y:12,duration:280*d(n)})),r(2,t,()=>an,()=>({y:8,duration:200*d(n)})),f(e,t)};p(i,e=>{J.toast.text&&e(a)}),f(e,t)}),L(a),f(e,a),G()}c([`click`]);var jx=K(`<div class="no-3d svelte-1n46o8q" role="status"><b>L’arène 3D ne peut pas s’afficher sur cet appareil.</b> <span class="svelte-1n46o8q"> </span></div>`),Mx=K(`<div class="screen svelte-1n46o8q"><!></div>`),Nx=K(`<div class="screen solid svelte-1n46o8q"><!></div>`),Px=K(`<div></div> <!> <!> <!> <!> <!>`,1);function Fx(t,n){P(n,!0);let i=()=>we(()=>import(`./Studio--iul5Y11.js`),__vite__mapDeps([0,1,2,3,4]),import.meta.url),s=U(void 0),c=U(!document.hidden);oe(()=>{let e=w_(d(s)),t=_v(),n=jv(),r=Pe(cv),i=e=>void Ce(`achievement`,{id:e}).catch(()=>{});if(xe.store===`steam`)for(let e of Object.keys(O_.unlocked))i(e);let a=xe.store===`steam`?j_(e=>i(e.id)):()=>{},o=w(()=>{_(()=>{J.flow,J.dialog,r.rearm()})}),l=()=>Y.flush(),u=()=>{O(c,!document.hidden),document.hidden&&l()};return document.addEventListener(`visibilitychange`,u),addEventListener(`pagehide`,l),()=>{e(),t(),n(),r.stop(),a(),o(),document.removeEventListener(`visibilitychange`,u),removeEventListener(`pagehide`,l)}}),Hn(),_(()=>Me(jt()));let l=e=>rn(e,{duration:jt()?260:0});function u(e){return e.inert=!0,rn(e,{duration:jt()?180:0})}_(()=>{let e=bt(q.theme);Mv(e),P_(e.id,yt.length)}),_(()=>{J.flow===`play`&&!J.dialog&&d(c)&&!Y.load?Y.resume():Y.suspend()}),_(()=>Un(!!J.dialog||!d(c)));var h=Px();S(`keydown`,e,function(...e){Ev?.apply(this,e)});var g=de(h);let y;le(g,e=>O(s,e),()=>d(s));var b=W(g,2),x=e=>{var t=jx(),n=W(F(t),2),r=H(n,!0);L(t),T(()=>o(r,y_.failed)),f(e,t)};p(b,e=>{y_.failed&&e(x)});var C=W(b,2),E=e=>{var t=Mx();dy(F(t),{}),L(t),r(1,t,()=>l),r(2,t,()=>u),f(e,t)},D=e=>{var t=Mx();Vb(F(t),{}),L(t),r(1,t,()=>l),r(2,t,()=>u),f(e,t)},k=e=>{var t=Nx(),n=F(t);m(n,i,null,(e,t)=>{var n=M(()=>{var{default:e}=d(t);return{Studio:e}}),r=M(()=>d(n).Studio),i=v(),o=de(i);a(o,()=>d(r),(e,t)=>{t(e,{})}),f(e,i)}),L(t),r(1,t,()=>l),r(2,t,()=>u),f(e,t)};p(C,e=>{J.flow===`menu`?e(E):J.flow===`play`?e(D,1):e(k,-1)});var A=W(C,2);Ex(A,{});var j=W(A,2);Ax(j,{}),In(W(j,2),{}),T(()=>{y=he(g,1,`stage svelte-1n46o8q`,null,y,{dim:J.flow===`studio`}),R(g,`data-flow`,J.flow)}),f(t,h),G()}var Ix=document.getElementById(`boot`);async function Lx(){if(await mt(),g(Fx,{target:document.getElementById(`app`)}),await Y.boot(),new URLSearchParams(location.search).has(`preview`)){let[e,t,n,r,i]=await Promise.all([we(()=>Promise.resolve().then(()=>H_),void 0,import.meta.url),we(()=>Promise.resolve().then(()=>st),void 0,import.meta.url),we(()=>Promise.resolve().then(()=>Rt),void 0,import.meta.url),we(()=>Promise.resolve().then(()=>Ot),void 0,import.meta.url),we(()=>Promise.resolve().then(()=>__),void 0,import.meta.url)]);Object.assign(window,{__heaps:{match:Y,act:e,engine:t.engine,ui:n.ui,prefs:r.prefs,arena:i.arenaApi}})}requestAnimationFrame(()=>Ix?.classList.add(`gone`)),setTimeout(()=>Ix?.remove(),700),Oe(),Ne()}Lx().catch(e=>{console.error(e);let t=document.createElement(`p`);t.textContent=`HEAPS n’a pas pu démarrer : ${e instanceof Error?e.message:String(e)}`,Ix?.querySelector(`div`)?.append(t),Ix?.querySelector(`i`)?.remove()});export{pt as A,Kt as C,jt as D,J as E,Le as F,gt as M,ct as N,Mt as O,Re as P,Gt as S,Bt as T,gn as _,Bv as a,an as b,Rv as c,W_ as d,q_ as f,Wn as g,M_ as h,qv as i,ht as j,q as k,K_ as l,z_ as m,Hv as n,zv as o,V_ as p,Kv as r,Vv as s,fb as t,fv as u,pn as v,Ut as w,Y as x,rn as y};