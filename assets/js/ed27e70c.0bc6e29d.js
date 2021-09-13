"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[231],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7307:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:3},u="Finalize parameters",c={unversionedId:"tutorial-module-reality/finalize-parameters",id:"tutorial-module-reality/finalize-parameters",isDocsHomePage:!1,title:"Finalize parameters",description:"Now you can return to the Reality Module interface and enter your TemplateId. Here we'll enter ours from the example, 31.",source:"@site/docs/tutorial-module-reality/finalize-parameters.md",sourceDirName:"tutorial-module-reality",slug:"/tutorial-module-reality/finalize-parameters",permalink:"/zodiac/docs/tutorial-module-reality/finalize-parameters",editUrl:"https://github.com/gnosis/zodiac/edit/master/website/docs/tutorial-module-reality/finalize-parameters.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Add template",permalink:"/zodiac/docs/tutorial-module-reality/add-template"},next:{title:"Review module",permalink:"/zodiac/docs/tutorial-module-reality/review-module"}},s=[{value:"Add module",id:"add-module",children:[]},{value:"Submit transaction",id:"submit-transaction",children:[]}],d={toc:s};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"finalize-parameters"},"Finalize parameters"),(0,o.kt)("p",null,"Now you can return to the Reality Module interface and enter your ",(0,o.kt)("inlineCode",{parentName:"p"},"TemplateId"),". Here we'll enter ours from the example, 31."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reality Module Parameters",src:r(6591).Z})),(0,o.kt)("p",null,"You'll want to set each of the remaining Parameters to custom amounts. Some notes on what each field means and its importance: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Timeout"),": Duration that answers can be submitted to the oracle."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Cooldown"),": Duration required before the transaction can be executed (after the timeout has expired). "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Expiration"),": Duration that a transaction is valid in seconds (or 0 if valid forever) after the cooldown"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Bond"),": Minimum bond required for an answer to be accepted. For more on why a bond is required in an escalation-game-based oracle, read more here.")),(0,o.kt)("p",null,"Here we've entered smaller amounts for the purpose of the tutorial. These Parameters are very important for your DAO's security and should be considered carefully. We'll return to security practices at the end of this tutorial."),(0,o.kt)("h2",{id:"add-module"},"Add module"),(0,o.kt)("p",null,"When satifised with the Parameters you've entered, lick the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Module")," button."),(0,o.kt)("h2",{id:"submit-transaction"},"Submit transaction"),(0,o.kt)("p",null,"After that, you should see a Gnosis Safe modal prompting you to review the transaction. Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Submit")," when ready:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Submit",src:r(5862).Z})),(0,o.kt)("p",null,"Confirm the transaction with your web3 wallet that is a signer on the Gnosis Safe."))}m.isMDXComponent=!0},6591:function(e,t,r){t.Z=r.p+"assets/images/reality_4-dc37f6f74f98abf59cc8b3157cc9ac9d.png"},5862:function(e,t,r){t.Z=r.p+"assets/images/reality_5-fbeceeb501405c9e4d74d10ee918d38d.png"}}]);