(function(){define([],function(){var a;a=function(b){var c=function(e){var d=this,f,g,i,h=e;d.init=function(){g=new esri.toolbars.Draw(h,{showTooltips:false});dojo.connect(g,"onDrawEnd",f)};d.drawLine=function(){g.activate(esri.toolbars.Draw.FREEHAND_POLYLINE)};d.drawText=function(j){i=j;g.activate(esri.toolbars.Draw.POINT)};d.erase=function(){h.graphics.clear()};f=function(k){var j,l;g.deactivate();if(k.type==="polyline"){j=new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,new dojo.Color("#FF0000"),3)}else{if(k.type==="point"){j=new esri.symbol.TextSymbol(i);j.setOffset(0,0);i=""}}l=new esri.Graphic(k,j);h.graphics.add(l)};d.init()};return new c(b)};return{initialize:a}})}());