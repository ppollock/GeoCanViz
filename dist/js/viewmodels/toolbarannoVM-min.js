(function(){define(["jquery","knockout","gcviz-i18n","gcviz-gisgraphic"],function(d,b,c,e){var a;a=function(h,f){var g=function(k,o){var p=this,j="dist/images/annoDraw.png",l="dist/images/annoText.png",r="dist/images/annoErase.png",s="dist/images/annoMeasure.png",q="dist/images/annoImport.png",n="dist/images/annoExport.png",i=mapArray[o][0],m=new e.initialize(i);p.imgDraw=b.observable(j);p.imgText=b.observable(l);p.imgErase=b.observable(r);p.imgMeasure=b.observable(s);p.imgImport=b.observable(q);p.imgExport=b.observable(n);p.errorHandler=function(t){console.log("error toolbar annotation view model: ",t)};p.init=function(){return{controlsDescendantBindings:true}};p.drawClick=function(){m.drawLine()};p.textClick=function(){m.drawText("ze texte")};p.eraseClick=function(){m.erase()};p.measureClick=function(){};p.importClick=function(){};p.exportClick=function(){};p.init()};b.applyBindings(new g(h,f),h[0])};return{initialize:a}})}).call(this);