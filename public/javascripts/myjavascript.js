<script type="text/javascript" src="http://www.vietbando.com/API/VBDMapAPI.js?key=jSwEQzgO5MpfVPTv9f3NyMQSdjYvI0NMNkAJg3BdWTs=">
</script>
    function MyOverlay(latlng, img){
        this.latlng = latlng;
        this.img = img;
        
        this.initialize = initialize;
        this.remove = remove;
        this.copy = copy;
        this.redraw = redraw;
        
        function initialize(map){
            var myDiv = document.createElement("div");
            myDiv.id = map.id + "MyOverlay";
            myDiv.style.border = "1px solid #ff0000";
            myDiv.style.position = "absolute";
            myDiv.innerHTML = "<img src='" + this.img + "'/>";
            map.getOverlayContainer().appendChild(myDiv);
            this.mapObj = map;
            this.divObj = myDiv;
            this.redraw();
        }
        
        function remove(){
            this.divObj.parentNode.removeChild(this.divObj);
        }
        
        function copy(){
            return new MyOverlay(this.latlng, this.img);
        }
        
        function redraw(){
            var pt = this.mapObj.fromLatLngToDivPixel(this.latlng);
            this.divObj.style.left = pt.x + "px";
            this.divObj.style.top = pt.y + "px";
        }
    }
    
    MyOverlay.prototype = new VOverlay();
    
    function loadMap(){
        if (VBrowserIsCompatible()) {
            var map = new VMap(document.getElementById('container'));
            map.enableScrollWheelZoom();
            map.setCenter(new VLatLng(10.8152328, 106.680505), 4);
            map.addControl(new VScaleControl());
            map.addOverlay(new MyOverlay(new VLatLng(10.9233664, 106.475620), "<%=@my_image%>"));
        }
    }
