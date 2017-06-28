function EchartsOverlay(options){
    this.options = options || {};
    this.width = this.options.width || 100;
    this.height = this.options.height || 100;
}

EchartsOverlay.prototype = new BMap.Overlay();

EchartsOverlay.prototype.initialize = function(map){
    this._map = map;
    var div = this._div = document.createElement("div");
    div.style.position = "absolute";
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    map.getPanes().labelPane.appendChild(div);

    var myChart = echarts.init(div);
    myChart.setOption(this.options.chartOption);
  
    return div;
}

EchartsOverlay.prototype.draw = function(){
    var map = this._map;
    var pixel = map.pointToOverlayPixel(this.options.point);
    this._div.style.left = pixel.x - this.width / 2 + "px";
    this._div.style.top  = pixel.y - this.height / 2 + "px";
}
    
