//
//function MyOverlay(latlng, img){
//    this.latlng = latlng;
//    this.img = img;
//    
//    this.initialize = initialize;
//    this.remove = remove;
//    this.copy = copy;
//    this.redraw = redraw;
//    
//    function initialize(map){
//        var myDiv = document.createElement("div");
//        myDiv.id = map.id + "MyOverlay";
//        myDiv.style.border = "1px solid #ff0000";
//        myDiv.style.position = "absolute";
//        myDiv.innerHTML = "<img src='" + this.img + "'/>";
//        map.getOverlayContainer().appendChild(myDiv);
//        this.mapObj = map;
//        this.divObj = myDiv;
//        this.redraw();
//    }
//    
//    function remove(){
//        this.divObj.parentNode.removeChild(this.divObj);
//    }
//    
//    function copy(){
//        return new MyOverlay(this.latlng, this.img);
//    }
//    
//    function redraw(){
//        var pt = this.mapObj.fromLatLngToDivPixel(this.latlng);
//        this.divObj.style.left = pt.x + "px";
//        this.divObj.style.top = pt.y + "px";
//    }
//}
//
//MyOverlay.prototype = new VOverlay();


isIE = document.all;
isNN = !document.all && document.getElementById;
isN4 = document.layers;
isHot = false;
function hideMe(){
    document.getElementById("theLayer").style.visibility = "hidden";
}

function showMe(id_layer){
    if (isIE || isNN) 
        document.getElementById(id_layer).style.visibility = "visible";
    else 
        if (isN4) 
            document.theLayer.visibility = "show";
}


// check mail


