/*!
 *
 * GeoCanViz viewer / Visionneuse GéoCanViz
 * gcviz.github.io/gcviz/License-eng.txt / gcviz.github.io/gcviz/Licence-fra.txt
 *
 * Version: v0.0.1-development Build: 2013-09-25- 10:30 AM
 *
 */
var mapArray={};(function(){var b,a;define(["jquery","gcviz-v-map","gcviz-v-tbmain","gcviz-v-tbfoot","gcviz-v-tbanno","gcviz-v-tbnav"],function(h,c,d,j,f,g){var i,k,e;i=function(){var n=h(".gcviz"),m,l=n.length;b=l;a=0;while(l--){m=n[l];k(m)}};k=function(l){h.ajax({url:l.getAttribute("data-gcviz"),dataType:"json",async:false,success:function(m){m.gcviz.mapframe.id=l.getAttribute("id");e(l,m.gcviz);console.log("config file read")},error:function(){console.log("error loading config file")}})};e=function(q,m){var p,o=h(q),l=m.mapframe.id,n=m.mapframe.size;o.wrap("<section id=section"+l+' class="gcviz-section" style="width: '+n.width+"px; height: "+n.height+'px;">');p=h(document).find("#section"+l);h.extend(p,m);mapArray[l]=c.initialize(p);mapArray[l].reverse();d.initialize(p);j.initialize(p);if(m.toolbaranno.enable){f.initialize(p)}if(m.toolbarnav.enable){g.initialize(p)}a+=1;if(a===b){h.event.trigger("gcviz-ready")}};return{initialize:i}})}).call(this);