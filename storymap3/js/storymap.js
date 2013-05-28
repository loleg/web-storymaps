
var detailMap, damDetailVector, selectFeature, overviewMap;
var previousID, previousBar;
var svgWidth, abar;
var ii, fid, svg, bars, xScale, dataset, barPadding;
var	fillColor = "#2d578b";
var	highlightColor = "red";

// zoom to feature on detail map
function zoomToFeature(id) {
	var features = damOverviewVector.getFeaturesByAttribute('reservoir_stabil_id',id);
	if (features.length >0 ){
		var feat = features[0];
		center = feat.geometry.getBounds().getCenterLonLat();
		center.lon = center.lon + 350;
		detailMap.setCenter(center, 8, false, true); 
		center.lon = center.lon -  350; //find nicer solution
	}
}

// select feature on overview map	
function selectOverviewFeature(id) {
	var features = damOverviewVector.getFeaturesByAttribute('reservoir_stabil_id',id);
	selectFeature.unselectAll();
	if (features.length >0 ){
		var feat = features[0];
		selectFeature.select(feat);
	}
}

// change color of bars
function highlightBar(id){
	d3.select("#rect-" + previousID).style("fill", fillColor);
	d3.select("#rect-" + id).style("fill", highlightColor);
}

// obtain dataset index from reservoir_id
function getIdIndex(inp){
	for (var z=0; z<=dataset.length-1; z++) {
		var tmp = dataset[z].reservoir_stabil_id; 
		if (tmp == inp){ ii = z;};
	}
}

// add tiply tooltip to selected to chart bar
function addTipsyToolTip(id){
	$(id).tipsy('show');
} 

// get feature id by index
function getIdByIndex(inp){
	var rid = dataset[inp].reservoir_stabil_id;
	return rid;	
}

// Step one rank up or down
function moveOneRank(inp){
	if (inp == "up" && ii > 0){ii = ii-1};
	if (inp == "down" && ii < 24){ii = ii+1};
	fid =  getIdByIndex(ii);	
	zoomToFeature(fid);
	selectOverviewFeature(fid);
}

// get data of object and upadate objectinfo window
function getObjectinfo (id){
	object = damOverviewVector.getFeaturesByAttribute('reservoir_stabil_id', id)[0].data;
	OpenLayers.Util.getElement('stauanlage').innerHTML = object.damname;
	OpenLayers.Util.getElement('sperrenhöhe').innerHTML = object.damheight + " m";
	var crl 
	switch (lang){
		case "de": crl = object.crestlevel + " m ü.M."; break;
		case "fr": crl = object.crestlevel + " m s.m."; break;
		case "it": crl = object.crestlevel + " m s.l.m."; break;
		case "en": crl = object.crestlevel + " m a.s.l."; break;
	}
	OpenLayers.Util.getElement('kronenkote').innerHTML = crl;
	var aim 
	switch (lang){
		case "de": aim = object.facaim_de; break;
		case "fr": aim = object.facaim_fr; break;
		case "it": aim = "Idroelettricità"; break;
		case "en": aim = object.facaim_en; break;
	}	
	OpenLayers.Util.getElement('zweck').innerHTML = aim;
	var it_damtype;
	switch (object.damtype_fr){
		case "Poids": it_damtype = "Dighe a gravità"; break;
		case "Voûte": it_damtype = "Dighe ad arco"; break;
		case "Enrochement": it_damtype = "Diga a riempimento"; break;
		case "Terre": it_damtype = "In terra"; break;
		case "Poids-voûte": it_damtype = "Dighe a gravità e ad arco"; break;
	}
	var damt
	switch (lang){
		case "de": damt = object.damtype_de; break;
		case "fr": damt = object.damtype_fr; break;
		case "en": damt = object.damtype_en; break;
		case "it": damt = it_damtype; break;
	}	
	OpenLayers.Util.getElement('sperrentyp').innerHTML = damt;
	OpenLayers.Util.getElement('inbetriebnahme').innerHTML = object.beginningofoperation;
	var link = "http://api.geo.admin.ch/main/wsgi/feature/"
		+ object.dam_stabil_id
		+".html?layer=ch.bfe.stauanlagen-bundesaufsicht&lang="
		+ lang
		+"&baseUrl=http://map.geo.admin.ch/";
	var details 
	switch (lang){
		case "de": details = "Details"; break;
		case "fr": details = "Détails";	break;
		case "it": details = "Dettagli"; break;
		case "en": details = "Details"; break;
	}		
	$('#details').empty();
	$('<a>',{
	    text: details,
	    href:link,
		target: "_blank"
	}).appendTo('#details');
}


function init() {
	if ( $.browser.msie && $.browser.version <= 8) {
		$('div#mainWindow').replaceWith(
			'<div class="browserError">'
				+'<h1>Incompatible Browser</h1>'
				+ '<p>Please update your browser or use different modern web browser!</p>'
			+'</div)');
	}
	else{
		workLoad();	
	}
}

// adapt bar chart do div size when window is being chaged
$(window).resize(function(){  //add after resize function
	$('#rect-' + fid).tipsy('hide');
	svgWidth = $('#chart').width();	
	xScale = d3.scale.linear().domain([0, 25]).range([0, svgWidth]);
	bars.transition()
		.attr("x", function(datum, index) { return xScale(index);})
		.attr("width", svgWidth / 25 * 0.6);
	svg.transition()
		.attr("width", svgWidth);
//	$('#rect-' + fid).tipsy('show');

});


