(function(){define(["gcviz-vm-tbanno","dijit/TitlePane"],function(c,b){var a;a=function(g){var f,e=g.toolbaranno,d=g.mapframe.id,h;h=new b({id:"tbanno"+d,title:"Annotation",content:'<div class="toolbaranno-content toolbar-content"></div>',open:false});g.find(".toolbars-holder").append(h.domNode);h.startup();f=g.find(".toolbaranno-content");if(e.drawline){f.append('<button class="toolbar-button" data-bind="click: drawClick"><img class="img-button" data-bind="attr:{src: imgDraw}"></img></button>')}if(e.drawtext){f.append('<button class="toolbar-button" data-bind="click: textClick"><img class="img-button" data-bind="attr:{src: imgText}"></img></button>')}f.append('<button class="toolbar-button" data-bind="click: eraseClick"><img class="img-button" data-bind="attr:{src: imgErase}"></img></button>');if(e.measure){f.append('<button class="toolbar-button" data-bind="click: measureClick"><img class="img-button" data-bind="attr:{src: imgMeasure}"></img></button>')}if(e.importsave){f.append('<button class="toolbar-button" data-bind="click: importClick"><img class="img-button" data-bind="attr:{src: imgImport}"></img></button>');f.append('<button class="toolbar-button" data-bind="click: exportClick"><img class="img-button" data-bind="attr:{src: imgExport}"></img></button>')}c.initialize(g.find(".toolbaranno-content"),d)};return{initialize:a}})}).call(this);