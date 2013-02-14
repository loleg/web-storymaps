

var map;

function init() {

    map = new GeoAdmin.Map('map');

    map.zoomToExtent([781953.5,138370.5,801153.5,147780.5]);

    var swipe = new OpenLayers.Control.Swipe({map: map});

    map.addControl(swipe);

    swipe.activate();

    map.addLayerByName("ch.swisstopo.hiks-siegfried");


}
