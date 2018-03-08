"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,n.default)(r,a.default.modulePrefix),e.default=r}),define("dummy/components/feature-controls",["exports","ember-feature-controls/components/feature-controls"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/feature-flag",["exports","ember-feature-flags/helpers/feature-flag"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var a,r=t.default.exportApplicationGlobal
a="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix),n[a]||(n[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment","ember-feature-controls/route-setup"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var a=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
a.map(function(){this.route("index",{path:"/"}),(0,n.default)(this,{path:"__featues"})}),e.default=a}),define("dummy/routes/features-list",["exports","ember-feature-controls/routes/features-list"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/features",["exports","ember-feature-flags/services/features","dummy/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({config:n.default,init:function(){this._super.apply(this,arguments),n.default.featureFlags&&this.setup(n.default.featureFlags)}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"gWtcE2sa",block:'{"symbols":[],"statements":[[4,"link-to",["index"],null,{"statements":[[0,"Index"]],"parameters":[]},null],[0,"\\n"],[4,"link-to",["features-list"],null,{"statements":[[0,"Features List"]],"parameters":[]},null],[0,"\\n\\n"],[1,[18,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/features-list",["exports","ember-feature-controls/templates/features-list"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"s5PWiZIr",block:'{"symbols":[],"statements":[[6,"h1"],[7],[0,"Welcome to Ember Feature Controls"],[8],[0,"\\n\\n"],[6,"div"],[9,"class","container"],[7],[0,"\\n  "],[6,"div"],[9,"class","row"],[7],[0,"\\n"],[4,"if",[[25,"feature-flag",["show-bear"],null]],null,{"statements":[[0,"      "],[6,"div"],[9,"class","column"],[7],[0,"\\n        "],[6,"img"],[10,"src",[26,[[18,"rootURL"],"/assets/bear-d9c820c93e6ca140e3158c8c8f01bb9c.jpg"]]],[9,"alt","bear"],[7],[8],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[]},null],[4,"if",[[25,"feature-flag",["show-bacon"],null]],null,{"statements":[[0,"      "],[6,"div"],[9,"class","column"],[7],[0,"\\n        "],[6,"img"],[10,"src",[26,[[18,"rootURL"],"/assets/bacon-c970e5109e826b4ae3431f6a0b057223.jpg"]]],[9,"alt","bacon"],[7],[8],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[]},null],[0,"  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
