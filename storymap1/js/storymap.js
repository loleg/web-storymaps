



function init() {

    var map = new GeoAdmin.Map('map');

    map.zoomToExtent([776453.5,138490.5,808813.5,146970.5]);

    var swipe = new OpenLayers.Control.Swipe({map: map});

    map.addControl(swipe);

    swipe.activate();

    map.addLayerByName("ch.swisstopo.hiks-siegfried");


}
