(function(){define(["jquery","knockout","gcviz-i18n","gcviz-gisgeo"],function(e,c,d,b){var a;a=function(i,f,g){var h=function(m,k,l){var j=this,n="dist/images/footNorthArrow.png";j.errorHandler=function(o){console.log("error toolbar foot view model: ",o)};j.imgNorth=n;j.init=function(){var p,o=mapArray[k].length;while(o--){p=mapArray[k][o];if(l.mousecoords){p.on("mouse-move",function(q){j.showCoordinates(q,"mousecoord_"+k)})}if(l.northarrow){p.on("pan-end",function(q){j.showNorthArrow(q,"north_"+k)});p.on("zoom-end",function(q){j.showNorthArrow(q,"north_"+k)})}}return{controlsDescendantBindings:true}};j.showCoordinates=function(o,p){b.getCoord(o.mapPoint,p,l.mousecoords)};j.showNorthArrow=function(o,p){b.getNorthAngle(o.extent,p,l.northarrow)};j.init()};c.applyBindings(new h(i,f,g),i[0])};return{initialize:a}})}).call(this);