(function(){define(["gcviz-vm-tbfoot"],function(b){var a;a=function(f){var e,d=f.toolbarfoot,c=f.mapframe.id;f.find("#"+c).append('<div id="tbfoot'+c+'" class="toolbarfoot"></div>');e=f.find(".toolbarfoot");if(d.northarrow.enable){e.append('<div id="north_'+c+'" class="toolbarfoot-north"><img class="img-button" data-bind="attr:{src: imgNorth}"></img></div>')}if(d.mousecoords.enable){e.append('<div id="mousecoord_'+c+'" class="toolbarfoot-coords"></div>')}b.initialize(f.find(".toolbarfoot"),c,d)};return{initialize:a}})}).call(this);