(function(){define(["jquery","gcviz-vm-map"],function(b,c){var a;a=function(i){var f=i.mapframe.id,d=i.mapframe.map.length,e=i.find("#"+f),g=i.mapframe.size,h=g.width;while(d--){e.prepend('<div id="'+f+"_"+d+'"></div>');i.find("#"+f+"_"+d).css({height:(g.height-80),width:h})}return c.initialize(i)};return{initialize:a}})}).call(this);