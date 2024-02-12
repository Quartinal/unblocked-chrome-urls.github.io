import*as e from"./platform.js";const t=new URLSearchParams(location.search);let n,s="";class r{constructor(){}static instance(e={forceNew:null}){const{forceNew:t}=e;return n&&!t||(n=new r),n}static removeInstance(){n=void 0}static queryParam(e){return t.get(e)}static setQueryParamForTesting(e,n){t.set(e,n)}static experimentsSetting(){try{return JSON.parse(self.localStorage&&self.localStorage.experiments?self.localStorage.experiments:"{}")}catch(e){return console.error("Failed to parse localStorage['experiments']"),{}}}static setPlatform(e){s=e}static platform(){return s}static isDescriptorEnabled(e){const t=e.experiment;if("*"===t)return!0;if(t&&t.startsWith("!")&&o.isEnabled(t.substring(1)))return!1;if(t&&!t.startsWith("!")&&!o.isEnabled(t))return!1;const n=e.condition;return!(n&&!n.startsWith("!")&&!r.queryParam(n))&&!(n&&n.startsWith("!")&&r.queryParam(n.substring(1)))}loadLegacyModule(e){return import(`../../${e}`)}}class i{#e;#t;#n;#s;#r;#i;constructor(){this.#e=[],this.#t=new Set,this.#n=new Set,this.#s=new Set,this.#r=new Set,this.#i=new Set}allConfigurableExperiments(){const e=[];for(const t of this.#e)this.#n.has(t.name)||this.#i.has(t.name)||e.push(t);return e}enabledExperiments(){return this.#e.filter((e=>e.isEnabled()))}setExperimentsSetting(e){self.localStorage&&(self.localStorage.experiments=JSON.stringify(e))}register(t,n,s,r,i){this.#t.add(t),this.#e.push(new a(this,t,n,Boolean(s),r??e.DevToolsPath.EmptyUrlString,i??e.DevToolsPath.EmptyUrlString))}isEnabled(e){return this.checkExperiment(e),!1!==r.experimentsSetting()[e]&&(!(!this.#n.has(e)&&!this.#s.has(e))||(!!this.#r.has(e)||Boolean(r.experimentsSetting()[e])))}setEnabled(e,t){this.checkExperiment(e);const n=r.experimentsSetting();n[e]=t,this.setExperimentsSetting(n)}enableExperimentsTransiently(e){for(const t of e)this.checkExperiment(t),this.#n.add(t)}enableExperimentsByDefault(e){for(const t of e)this.checkExperiment(t),this.#s.add(t)}setServerEnabledExperiments(e){for(const t of e)this.checkExperiment(t),this.#r.add(t)}setNonConfigurableExperiments(e){for(const t of e)this.checkExperiment(t),this.#i.add(t)}enableForTest(e){this.checkExperiment(e),this.#n.add(e)}disableForTest(e){this.checkExperiment(e),this.#n.delete(e)}clearForTest(){this.#e=[],this.#t.clear(),this.#n.clear(),this.#s.clear(),this.#r.clear()}cleanUpStaleExperiments(){const e=r.experimentsSetting(),t={};for(const{name:n}of this.#e)if(e.hasOwnProperty(n)){const s=e[n];(s||this.#s.has(n))&&(t[n]=s)}this.setExperimentsSetting(t)}checkExperiment(e){}}class a{name;title;unstable;docLink;feedbackLink;#e;constructor(e,t,n,s,r,i){this.name=t,this.title=n,this.unstable=s,this.docLink=r,this.feedbackLink=i,this.#e=e}isEnabled(){return this.#e.isEnabled(this.name)}setEnabled(e){this.#e.setEnabled(this.name,e)}}const o=new i;var l,c;!function(e){e.CAPTURE_NODE_CREATION_STACKS="captureNodeCreationStacks",e.CSS_OVERVIEW="cssOverview",e.LIVE_HEAP_PROFILE="liveHeapProfile",e.DEVELOPER_RESOURCES_VIEW="developerResourcesView",e.TIMELINE_REPLAY_EVENT="timelineReplayEvent",e.CSP_VIOLATIONS_VIEW="cspViolationsView",e.WASM_DWARF_DEBUGGING="wasmDWARFDebugging",e.ALL="*",e.PROTOCOL_MONITOR="protocolMonitor",e.WEBAUTHN_PANE="webauthnPane",e.FULL_ACCESSIBILITY_TREE="fullAccessibilityTree",e.PRECISE_CHANGES="preciseChanges",e.STYLES_PANE_CSS_CHANGES="stylesPaneCSSChanges",e.HEADER_OVERRIDES="headerOverrides",e.EYEDROPPER_COLOR_PICKER="eyedropperColorPicker",e.INSTRUMENTATION_BREAKPOINTS="instrumentationBreakpoints",e.CSS_AUTHORING_HINTS="cssAuthoringHints",e.AUTHORED_DEPLOYED_GROUPING="authoredDeployedGrouping",e.IMPORTANT_DOM_PROPERTIES="importantDOMProperties",e.JUST_MY_CODE="justMyCode",e.BREAKPOINT_VIEW="breakpointView",e.PRELOADING_STATUS_PANEL="preloadingStatusPanel",e.DISABLE_COLOR_FORMAT_SETTING="disableColorFormatSetting"}(l||(l={})),function(e){e.CAN_DOCK="can_dock",e.NOT_SOURCES_HIDE_ADD_FOLDER="!sources.hide_add_folder"}(c||(c={}));var E=Object.freeze({__proto__:null,getRemoteBase:function(e=self.location.toString()){const t=new URL(e),n=t.searchParams.get("remoteBase");if(!n)return null;const s=/\/serve_file\/(@[0-9a-zA-Z]+)\/?$/.exec(n);return s?{base:`${t.origin}/remote/serve_file/${s[1]}/`,version:s[1]}:null},Runtime:r,ExperimentsSupport:i,Experiment:a,experiments:o,get ExperimentName(){return l},get ConditionName(){return c}});export{E as Runtime};