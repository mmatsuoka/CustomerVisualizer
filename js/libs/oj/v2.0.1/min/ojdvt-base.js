/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojvalidation","ojs/internal-deps/dvt/DvtToolkit","promise"],function(b,f,a,d,c){function e(a,b){this.Fia=b;this.zka=a;this.$ba="/"}b.Og=function(a){this.Init(a)};o_("AttributeGroupHandler",b.Og,b);b.b.ga(b.Og,b.b,"oj.AttributeGroupHandler");b.Og.prototype.Init=function(a){b.Og.q.Init.call(this);this.kx=a?a:{};this.bw={};this.ID=0;this.Fz=this.mr();for(var c in this.kx)a=this.Fz.indexOf(this.kx[c]),-1!==a&&this.Fz.splice(a,1)};b.Og.prototype.mr=
function(){return[]};b.b.g("AttributeGroupHandler.prototype.getValueRamp",{mr:b.Og.prototype.mr});b.Og.prototype.Jc=function(a){if(this.kx[a])return this.kx[a];this.bw[a]||(this.bw[a]=this.Fz[this.ID],this.ID==this.Fz.length-1?this.ID=0:this.ID++);return this.bw[a]};b.b.g("AttributeGroupHandler.prototype.getValue",{Jc:b.Og.prototype.Jc});b.Og.prototype.M2=function(){var a=[],b;for(b in this.bw)a.push({category:b,value:this.bw[b]});return a};b.b.g("AttributeGroupHandler.prototype.getCategoryAssignments",
{M2:b.Og.prototype.M2});b.Og.prototype.E1=function(a,b){this.kx[a]=b};b.b.g("AttributeGroupHandler.prototype.addMatchRule",{E1:b.Og.prototype.E1});b.Ne=function(a){this.cw=[];if(f(document.body).hasClass("oj-hicontrast"))this.cw=b.Ne.dR.slice();else{if(!b.Ne.mw){b.Ne.mw=[];var c=f(document.createElement("div"));c.attr("style","display:none;");c.attr("id","attrGps");f(document.body).append(c);for(var d=0;d<b.Ne.pS.length;d++){var e=f(document.createElement("div"));e.addClass(b.Ne.pS[d]);c.append(e);
(e=e.css("color"))&&b.Ne.mw.push(e)}c.remove()}this.cw=0<b.Ne.mw.length?b.Ne.mw.slice():b.Ne.dR.slice()}this.Init(a)};o_("ColorAttributeGroupHandler",b.Ne,b);b.b.ga(b.Ne,b.Og,"oj.ColorAttributeGroupHandler");b.Ne.dR="#267db3 #68c182 #fad55c #ed6647 #8561c8 #6ddbdb #ffb54d #e371b2 #47bdef #a2bf39 #a75dba #f7f37b".split(" ");b.Ne.pS="oj-dvt-category1 oj-dvt-category2 oj-dvt-category3 oj-dvt-category4 oj-dvt-category5 oj-dvt-category6 oj-dvt-category7 oj-dvt-category8 oj-dvt-category9 oj-dvt-category10 oj-dvt-category11 oj-dvt-category12".split(" ");
b.Ne.mw=null;b.Ne.prototype.mr=function(){return this.cw.slice()};e.prototype.ska=function(a,b,c,d){for(var e={};a&&-1<b.indexOf(c);){var g=b.substring(0,b.indexOf(c));d&&void 0===a[g]&&(a[g]={});a=a[g];b=b.substring(b.indexOf(c)+1,b.length)}a&&(e.object=a,e.parameter=b);return e};e.prototype.I_=function(a){void 0===this.jx&&(a=this.ska(this.zka,this.Fia,this.$ba,a),this.jx=a.object,this.YK=a.parameter)};e.prototype.Jc=function(){this.I_(!1);return void 0===this.jx?void 0:this.jx[this.YK]};e.prototype.x5=
function(a,b){this.I_(!0);if(b||!this.jx[this.YK])this.jx[this.YK]=a};var g={CSS_TEXT_PROPERTIES:function(a){var b={};a&&(a.hasClass("oj-gaugeMetricLabel")&&a.hasClass(a.parentNode,"oj-ledGauge")?(b["font-size"]=!0,b.color=!0):a.hasClass(a,"oj-chartSliceLabel")?b.color=!0:a.hasClass("oj-treemap-node-header")&&(b["font-weight"]=!0));return g.iaa(a,b)},CSS_BACKGROUND_PROPERTIES:function(a){return g.$$(a)},CSS_URL:function(a){return g.Eia(a)},uR:"rgb(254, 0, 254)",g8:"Times",h8:"1px",wR:"1",vR:"normal",
Z7:4,lD:{},Nna:function(a,b){return a.css(b)},Eia:function(a){return(a=a.css("background-image"))&&-1!==a.indexOf("url(")?a.slice(a.indexOf("url(")+4,a.length-1).replace(/"/g,""):a},$$:function(a){var b={};a.css("border-top-color")&&(b["border-color"]=a.css("border-top-color"));a.css("border-width")&&a.css("border-style")&&"none"!=a.css("border-style")&&(b["border-width"]=a.css("border-width"));a.css("background-color")&&(b["background-color"]=a.css("background-color"));return b},iaa:function(a,b){var c=
{},d=a.css("font-family");d&&d!==g.g8&&(c["font-family"]=d.replace(/"/g,"'"));d=a.css("font-size");!d||-1<d.indexOf("px")&&parseFloat(d)<g.Z7||b["font-size"]||(c["font-size"]=d);(d=a.css("font-weight"))&&d!==g.wR&&!b["font-weight"]&&(c["font-weight"]=d);(d=a.css("color"))&&d!==g.uR&&!b.color&&(c.color=d);(d=a.css("font-style"))&&d!==g.vR&&(c["font-style"]=d);return c},Lpa:function(a,b,c,d){var e=f(document.createElement("div"));e.attr("style","display:none;");a.append(e);a="";for(var p=0;p<c.length;p++)a=
a+c[p]+" ";e.attr("class",a);f(document.body).append(e);c=f(document.createElement("div"));c.css("font-size",g.h8);c.css("color",g.uR);c.css("font-weight",g.wR);c.css("font-style",g.vR);e.append(c);for(var r in d)a=d[r],a instanceof Array||(a=[a]),g.bja(c,b,r,a);e.remove()},bja:function(a,b,c,d){g.lD[c]||(g.lD[c]={});for(var n=null,p=0;p<d.length;p++){var r=d[p],s=r.property;if(s){var q=g.lD[c][s];"undefined"==typeof q&&(n||(n=f(document.createElement("div")),n.addClass(c),a.append(n)),q=g.tka(n,
s),g.lD[c][s]=q);if(null!=q){var r=new e(b,r.path),t=g[s];if(null!=t){var w=r.Jc();if("CSS_URL"!==s){s="";if(null!=w){for(var x in q)-1===w.indexOf(x)&&(s+=x+":"+q[x]+";");s+=w}else for(x in q)s+=x+":"+q[x]+";";q=s}}r.x5(q,null!=t)}}}},tka:function(a,b){var c=g[b],c=c?c(a):g.Nna(a,b);return null==c||"string"==typeof c&&""==c.replace(/^\s+/g,"")?null:c}};b.ya("oj.dvtBaseComponent",f.oj.baseComponent,{_ComponentCreate:function(){this._super();this.vx=this.BL=0;this.Ck=null;this.nL=f(document.createElement("div"));
this.nL.attr("style","visibility:hidden;");this.element.append(this.nL);var a=this.element[0].parentElement;this.zf=a&&a.zI?a.zI:new c.Context(this.element[0],null,this.nL[0]);this.zf.setReadingDirection(this.dc());this.zf.setTooltipAttachedCallback(b.Components.df);this.zf.setOverlayAttachedCallback(b.Components.df);this.zf.setTooltipStyleClass("oj-dvt-tooltip");this.zf.setDatatipStyleClass("oj-dvt-datatip");f(document.body).hasClass("oj-hicontrast")&&c.Agent.setHighContrast(!0);this.la=this.pf(this.zf,
this.ck,this);this.zf.getStage().addChild(this.la);!1!==c.requireJS&&(this.ela(),this.KZ());this.vs();this.options._environment="jet";this.options._widgetConstructor=b.Components.Rf(this.element)},nf:function(){this._super();this.element.attr("tabIndex",0);this.kg();"off"!=this.options.trackResize&&this.$G()},refresh:function(){this._super();this.zf.setReadingDirection(this.dc());this.KZ();this.kg()},getNodeBySubId:function(a){var b=this.la&&this.la.getAutomation?this.la.getAutomation():null;if(b)return a=
this.ei(a),b.getDomElementForSubId(a)},getSubIdByNode:function(a){var b=this.la&&this.la.getAutomation?this.la.getAutomation():null;if(b)return(a=b.getSubIdForDomElement(a))?this.ig(a):null},ei:function(){return null},ig:function(){return null},gA:function(){for(var a=this.Fe(),b=0;b<a.length;b++)this.element.addClass(a[b]);g.Lpa(this.element,this.options,this.Fe(),this.gi())},Fe:function(){return["oj-dvtbase"]},gi:function(){return{"oj-dvt-no-data-message":{path:"_statusMessageStyle",property:"CSS_TEXT_PROPERTIES"}}},
ii:function(){return[]},ji:function(){var a=this.options.translations,a={"DvtUtilBundle.CLEAR_SELECTION":a.labelClearSelection,"DvtUtilBundle.COLON_SEP_LIST":a.labelAndValue,"DvtUtilBundle.INVALID_DATA":a.labelInvalidData,"DvtUtilBundle.NO_DATA":a.labelNoData,"DvtUtilBundle.DATA_VISUALIZATION":a.labelDataVisualization,"DvtUtilBundle.STATE_SELECTED":a.stateSelected,"DvtUtilBundle.STATE_UNSELECTED":a.stateUnselected,"DvtUtilBundle.STATE_MAXIMIZED":a.stateMaximized,"DvtUtilBundle.STATE_MINIMIZED":a.stateMinimized,
"DvtUtilBundle.STATE_EXPANDED":a.stateExpanded,"DvtUtilBundle.STATE_COLLAPSED":a.stateCollapsed,"DvtUtilBundle.STATE_ISOLATED":a.stateIsolated,"DvtUtilBundle.STATE_HIDDEN":a.stateHidden,"DvtUtilBundle.STATE_VISIBLE":a.stateVisible,"DvtUtilBundle.SCALING_SUFFIX_THOUSAND":a.labelScalingSuffixThousand,"DvtUtilBundle.SCALING_SUFFIX_MILLION":a.labelScalingSuffixMillion,"DvtUtilBundle.SCALING_SUFFIX_BILLION":a.labelScalingSuffixBillion,"DvtUtilBundle.SCALING_SUFFIX_TRILLION":a.labelScalingSuffixTrillion,
"DvtUtilBundle.SCALING_SUFFIX_QUADRILLION":a.labelScalingSuffixQuadrillion},c=b.Ja.Fy("abbreviated");a["DvtUtilBundle.MONTH_SHORT_JANUARY"]=c[0];a["DvtUtilBundle.MONTH_SHORT_FEBRUARY"]=c[1];a["DvtUtilBundle.MONTH_SHORT_MARCH"]=c[2];a["DvtUtilBundle.MONTH_SHORT_APRIL"]=c[3];a["DvtUtilBundle.MONTH_SHORT_MAY"]=c[4];a["DvtUtilBundle.MONTH_SHORT_JUNE"]=c[5];a["DvtUtilBundle.MONTH_SHORT_JULY"]=c[6];a["DvtUtilBundle.MONTH_SHORT_AUGUST"]=c[7];a["DvtUtilBundle.MONTH_SHORT_SEPTEMBER"]=c[8];a["DvtUtilBundle.MONTH_SHORT_OCTOBER"]=
c[9];a["DvtUtilBundle.MONTH_SHORT_NOVEMBER"]=c[10];a["DvtUtilBundle.MONTH_SHORT_DECEMBER"]=c[11];return a},KZ:function(){var a=this.ji();c.Bundle.addLocalizedStrings(a)},ela:function(){var a={};a.numberConverterFactory=b.qa.T2("number");a.dateToIsoConverter=function(a){return a instanceof Date?b.qb.dateToLocalIso(a):a};a.isoToDateConverter=function(a){return"string"==typeof a?b.qb.isoToLocalDate(a):a};this.zf.setLocaleHelpers(a)},_destroy:function(){this.zf.hideTooltips();this.la.destroy&&this.la.destroy();
this.xL();this.element.children().remove();this.element.removeAttr("role").removeAttr("tabIndex");for(var a=this.Fe(),b=0;b<a.length;b++)this.element.removeClass(a[b]);this._super()},_setOptions:function(a,b){this._superApply(arguments);var c=this.options.trackResize;"off"==c&&this.Ci?this.xL():"off"==c||this.Ci||this.$G();if(!this.sT){var d=!1,e=this.ii(),g=["highlightedCategories","selection","dataCursorPosition"];f.each(a,function(a){if(0>e.indexOf(a)&&0>g.indexOf(a))return d=!0,!1});d?this.kg():
(void 0!==a.highlightedCategories&&this.la.highlight(a.highlightedCategories),void 0!==a.selection&&this.la.select(a.selection),void 0!==a.dataCursorPosition&&this.la.positionDataCursor&&this.la.positionDataCursor(a.dataCursorPosition))}},pf:function(){return null},ck:function(a){var b=a.type;"selection"===b?this.vd("selection",a.selection):"categoryHide"===b||"categoryShow"===b?this.vd("hiddenCategories",a.hiddenCategories):"categoryHighlight"===b?this.vd("highlightedCategories",a.categories):"optionChange"===
b?this.vd(a.key,a.value,a.optionMetadata):"touchHoldRelease"===b&&this.options.contextMenu?this.tf(f.Event(a.nativeEvent),"touch"):"ready"===b&&0===this.vx&&(this.jL&&this.jL(!0),this.NZ=!0,this.iL=this.jL=null)},$G:function(){this.Ci||(this.Ci=this.Ye.bind(this),b.v.Oh(this.element[0],this.Ci,250))},xL:function(){this.Ci&&(b.v.Pi(this.element[0],this.Ci),this.Ci=null)},Ye:function(){var a=this.element.width(),b=this.element.height();(null==this.KD||null==this.hC||5<=Math.abs(a-this.KD)+Math.abs(b-
this.hC))&&this.kg(!0)},vs:function(){},kg:function(a){this.NZ=!1;this.zf.isReadyToRender()?(this.KD=this.Wz()?null:this.element.width(),this.hC=this.Wz()?null:this.element.height(),this.options._width=this.KD,this.options._height=this.hC,this.options._locale=b.ba.Bg(),this.gA(),this.BL++,a?this.Ck||this.AL(null):0===this.rka().length&&this.AL(this.options),this.DL=!1):this.DL=!0},vl:function(){this._super();this.DL&&this.kg()},rn:function(){this._super();this.DL&&this.kg()},li:function(){this._super();
this.zf.hideTooltips()},ul:function(){this._super();this.zf.hideTooltips()},vd:function(a,b,c){this.sT=!0;this.option(a,b,{_context:{Gc:!0,yr:c,Va:!0}});this.sT=!1},rf:function(a,b,c){"touch"!==c&&("keyboard"===c?this.tf(b,c,{position:{of:this.la.getKeyboardFocus()}}):this._super(a,b,c))},Fv:function(a){return(a=b.Components.Rf(a)("instance"))?a.la:null},Vg:function(a){if(a){var b={},c;for(c in a)this.i$(a,c,b);Object.defineProperties(a,b)}},i$:function(a,b,c){var d=("selected"==b?"is":"get")+b.charAt(0).toUpperCase()+
b.slice(1);c[d]={value:function(){return a[b]}}},Bp:function(a){for(var b="",c=0;c<a.length;c++)b+="["+a[c]+"]";return b},tl:function(a){for(var b=[],c=0;0<a.indexOf("[",c);){var d=a.indexOf("[",c)+1,c=a.indexOf("]",c);b.push(Number(a.substring(d,c)));c+=1}return b},Wg:function(a){return Number(this.Qz(a))},Qz:function(a){var b=a.indexOf("[")+1,c=a.indexOf("]");return a.substring(b,c)},hi:function(){return{}},rka:function(){this.Ck=null;var a=this.hi(),b;for(b in a)for(var c=a[b],d=0;d<c.length;d++)if("root"===
b){if(this.$p(this.options,c[d]))break}else{var e=this.options[b];if(e)for(var g=0;g<e.length&&!this.$p(e[g],c[d]);g++);}var f=[];this.vx=0;if(this.Ck){var s=this;for(b in a)c=a[b],c.forEach(function(a){var c;if("root"===b)(c=s.JW(s.Ck,a))&&f.push(c);else{var d=s.Ck[b];if(d)for(var e=0;e<d.length;e++)(c=s.JW(d[e],a))&&f.push(c)}})}return f},$p:function(a,b){if(!this.Ck){var d=(new e(a,b)).Jc();d&&(d instanceof Function||d instanceof Promise)&&(this.Ck=c.JsonUtils.clone(this.options))}return null!==
this.Ck},JW:function(a,b){var c=new e(a,b),d=c.Jc();d instanceof Function&&(d=Promise.resolve(d(this.rR(a))));if(d&&d instanceof Promise){this.vx++;var g=this.BL,f=this;d.then(function(a){f.w_(g,c,a)},function(){f.w_(g,c,[])});return d}return null},w_:function(a,b,c){a===this.BL&&(this.vx--,b.x5(c,!0),0===this.vx&&(this.AL(this.Ck),this.Ck=null))},AL:function(a){var b=this.Wz()&&this.Ci;b&&this.xL();this.la.render(a,this.KD,this.hC);b&&this.$G()},rR:function(){return{}},Wz:function(){return!1},whenReady:function(){if(this.NZ)return Promise.resolve(!0);
if(!this.iL){var a=this;this.iL=new Promise(function(b){a.jL=b})}return this.iL}},!0);b.vv=function(a){this.Init(a)};o_("ShapeAttributeGroupHandler",b.vv,b);b.b.ga(b.vv,b.Og,"oj.ShapeAttributeGroupHandler");b.vv.cw="square circle diamond plus triangleDown triangleUp human".split(" ");b.vv.prototype.mr=function(){return b.vv.cw.slice()}});