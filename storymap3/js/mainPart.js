

function workLoad(){
	
	// create style map for vector layer     
	var styleMap = new OpenLayers.StyleMap({
		'default': {
            pointRadius: 6,
			fillColor: fillColor,
			fillOpacity: 0.4,
			strokeColor: fillColor,
			strokeOpacity: 1,
			strokeWidth: 2,
			cursor: "pointer"
		},
		"select": {
            pointRadius: 6,
			fillColor: highlightColor,
			fillOpacity: 0.4,
			strokeColor: highlightColor,
			strokeOpacity: 1,
			strokeWidth: 2,
			cursor: "pointer"
		}
	});
	
	// create main map 
	detailMap = new GeoAdmin.Map("detailMap", {
	//	doZoomToMaxExtent: true
	});
	
	// create vecotr layer containing the dams
	damOverviewVector = new OpenLayers.Layer.Vector("Dams", {
	styleMap: styleMap,
		strategies: [new OpenLayers.Strategy.Fixed()],
		protocol: new OpenLayers.Protocol.HTTP({
			url: "data/stauanlagen.geojson",
			format: new OpenLayers.Format.GeoJSON()
		})
	});

	overviewMap = new GeoAdmin.Map("overviewMap", {
		doZoomToMaxExtent: true
	});

	// change base layer of overview map
	overviewMap.switchComplementaryLayer("ch.swisstopo.pixelkarte-grau", {
		opacity: 1
	});

	//add dam vector to the main map
	overviewMap.addLayers([damOverviewVector]);
	
	//create hover select feature control for the dam/lake vector 
	selectFeature = new OpenLayers.Control.SelectFeature(damOverviewVector, {
		multiple: false,
		clickout: false,	
		hover: false
	});
	
	// add select control to main map
	overviewMap.addControl(selectFeature);
	selectFeature.activate();


	// add events to lake vector layer	
	damOverviewVector.events.on({
		'featureselected': function(evt) {
			$('#rect-' + previousID).tipsy('hide');	
			var id = evt.feature.attributes.reservoir_stabil_id;
			highlightBar(id);
			zoomToFeature(id);
			previousID = id;
			fid = id;
			getObjectinfo(id);
			getIdIndex(id);
			$('#rect-' + id).tipsy('show');
			$("#rank").text(ii+1);
		},
		'loadend': function(evt){
			randomIndex = Math.floor(Math.random()*25);
			ii = randomIndex;
			previousID = dataset[randomIndex].reservoir_stabil_id;	
			selectOverviewFeature(previousID);
			highlightBar(previousID);
			getObjectinfo(previousID);
			zoomToFeature(previousID);	
			$('#rect-' + previousID).tipsy('show');
			fid = previousID;
			$("#rank").text(ii+1);
		}
	});

	svgWidth = $('#chart').width();
	var svgHeight = 180;
	barPadding = 5;

	// add svg variale to chart div
	svg = d3.select('#chart').append('svg').attr({
		'width': svgWidth,
		'height': svgHeight,
	});
 
	d3.csv("data/stauanlagen.csv", function(error, data) {

		data.forEach(function(d) {
			d.reservoir_stabil_id = +d.reservoir_stabil_id,
			d.reservoirname = d.reservoirname,
			d.dam_stabil_id = +d.dam_stabil_id,
			d.damname = d.damname,
			d.damheight = +d.damheight,
			d.damtype = d.damtype,
			d.damtype_de = d.damtype_de,
			d.damtype_en = d.damtype_en,
			d.damtype_fr = d.damtype_fr,
			d.facility_stabil_id = +d.facility_stabil_id,
			d.facilityname = d.facilityname,
			d.facilityr1 = d.facilityr1,
			d.facilityr2 = d.facilityr2,
			d.facilityr3 = d.facilityr3,
			d.crestlevel = +d.crestlevel,
			d.facaim_fr = d.facaim_fr,
			d.facaim_de = d.facaim_de,
			d.facaim_en = d.facaim_en,
			d.beginningofoperation = d.beginningofoperation
		});
		
		// define scale of x-axis
		xScale = d3.scale.linear().domain([0, data.length]).range([0, svgWidth]);
     
		// define scale of y-axis
		var padding = 5; 
		var yScale = d3.scale.linear().domain([0, d3.max(data, function(datum) {
			return datum.damheight;
		})]).rangeRound([svgHeight-padding,padding]);

   /*    
		// set up yAxis 
		var yAxis = d3.svg.axis()
			.scale(yScale)
			.orient("right")
			.ticks(5)
			;
        
		svg.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(" + 0 + ",0)") 
			.call(yAxis);
  */
     	
		dataset = data.sort(function(a,b) {return b.damheight-a.damheight;});
	

	
//		dataset = svg.selectAll("rect").data().length; 
		bars = svg.selectAll("rect")
			.data(data).enter()
			.append("svg:rect")
			.attr("x", function(datum, index) { return xScale(index);})
			.attr("y", function(datum) { return yScale(datum.damheight);  })
			.attr("height", function(datum) { return svgHeight - yScale(datum.damheight); })
			.attr("width", svgWidth / data.length * 0.6)
			.attr("id", function(datum, i) { return "rect-" + datum.reservoir_stabil_id; })
			.attr("fill", fillColor)
			.attr("title", function(datum, index) {return datum.damname;})
			.attr("class","bar")
			.attr("cursor", "pointer")	
			.on("click",function (d,i){
				fid = dataset[i].reservoir_stabil_id;
				ii = i;
				getObjectinfo(fid);				
				zoomToFeature(fid);	
				selectOverviewFeature(fid);
				highlightBar(fid);	
				overviewMap.zoomToMaxExtent();
				$("#rank").text(ii+1);
				var cl  =  "#rect-" + dataset[i].reservoir_stabil_id;
				$(cl).tipsy('show');
			})
	/*		.on('mouseover',function (d,i) {
					
			});
	*/
//		$(".bar").tooltip();
		

		$(".bar").tipsy({
			trigger:' manual', 
			gravity: 's',
			html: true,
			title: function(){
				var name = dataset[ii].damname;
				var number = dataset[ii].damheight;
				return '<h1 class="tips" >' + name + '<br>' + number + ' m  </h1>';
			}
		});





	
	});
}
