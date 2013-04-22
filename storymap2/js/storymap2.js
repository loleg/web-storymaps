

var api, map;

function init() {

   api = new GeoAdmin.API();

    map = api.createMap({div:'map'});

    api.map.zoomToExtent([431474.39994046,87603.68561567,911474.39994046,254353.68561567]);

//	api.map.switchComplementaryLayer("ch.swisstopo.pixelkarte-grau", {opacity: 0.7});

       var drawing = api.map.getLayersByName('drawing').pop();
       if (drawing) {
           drawing.events.on({
               featureselected: function (e) {
                    api.popup.setWidth(432)
               }
           });
       }

      api.showMarker({
          easting: 680000,
          northing: 250000,
          iconPath: 'https://dav0.bgdi.admin.ch/swisstopo/online/vision.png',
          graphicHeight: 50,          
		  graphicWidth: 50,
          html: '<h1>&nbsp;Z&uuml;rich</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/kSPdCR7uTBo?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/c15eb7d6" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'
      });
      api.showMarker({
          easting: 499800,
          northing: 117900,
          iconPath: 'https://dav0.bgdi.admin.ch/swisstopo/online/vision.png',
          graphicHeight: 50,          
		  graphicWidth: 50,
          html: '<h1>&nbsp;Gen&egrave;ve</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/HN67CI57Ufo?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/f5e2f911" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'
      });
      api.showMarker({
          easting: 612022,
          northing: 267408,
          iconPath: 'https://dav0.bgdi.admin.ch/swisstopo/online/vision.png',
          graphicHeight: 50,          
		  graphicWidth: 50,
          html: '<h1>&nbsp;Basel</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/BDoUtHYW-nk?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/505a7ca5" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'
      });
      api.showMarker({
          easting: 538688,
          northing: 153161,
          iconPath: 'https://dav0.bgdi.admin.ch/swisstopo/online/vision.png',
          graphicHeight: 50,          
		  graphicWidth: 50,
          html: '<h1>&nbsp;Lausanne</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/zSdauWdHMhM?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/d9630889" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'
      });	  
      api.showMarker({
          easting: 600801,
          northing: 199848,
          iconPath: 'https://dav0.bgdi.admin.ch/swisstopo/online/vision.png',
          graphicHeight: 50,
          graphicWidth: 50,
          html: '<h1>&nbsp;Bern</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/dnLuWVxzvok?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/c2a0241e" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'
      });
      api.showMarker({
          easting: 697607,
          northing: 262057,
          iconPath: 'https://dav0.bgdi.admin.ch/swisstopo/online/vision.png',
          graphicHeight: 50,          
		  graphicWidth: 50,
          html: '<h1>&nbsp;Winterthur</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/gspikUmYM7E?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/1837a782" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'
      });
      api.showMarker({
          easting: 664526,
          northing: 210307,
          iconPath: 'https://dav0.bgdi.admin.ch/swisstopo/online/vision.png',
          graphicHeight: 50,          
		  graphicWidth: 50,
          html: '<h1>&nbsp;Luzern-Kriens</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/ZEPEY_3umgk?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/92f0d122" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'
      });
      api.showMarker({
          easting: 747135,
          northing: 255268,
          iconPath: 'https://dav0.bgdi.admin.ch/swisstopo/online/vision.png',
          graphicHeight: 50,          
		  graphicWidth: 50,
          html: '<h1>&nbsp;St Gallen</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/qhBAMgqnlI4?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/1d557019" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'
      });
      api.showMarker({
          easting: 717122,
          northing: 96845,
          iconPath: 'https://dav0.bgdi.admin.ch/swisstopo/online/vision.png',
          graphicHeight: 50,          
		  graphicWidth: 50,
          html: '<h1>&nbsp;Lugano</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/DpQvFK8FTms?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/acba6a48" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'
      });
      api.showMarker({
          easting: 586376,
          northing: 221071,
          iconPath: 'https://dav0.bgdi.admin.ch/swisstopo/online/vision.png',
          graphicHeight: 50,          
		  graphicWidth: 50,
          html: '<h1>&nbsp;Biel</h1><br><iframe width="420" height="315" src="http://www.youtube.com/embed/WN9F6EQHVxo?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/7eb496c1" target="_blank">Link zur Zeitreise&nbsp;&nbsp;</a></div><br>'
      });
//      api.showMarker({
//          easting: 634073,
//          northing: 126269,
//          iconPath: 'https://dav0.bgdi.admin.ch/swisstopo/online/vision.png',
//          graphicHeight: 30,
//          graphicWidth: 30,
//          html: '<h1>&nbsp;Visp</h1><br><iframe width="420" height="236" src="http://www.youtube.com/embed/H3LDcIAr83w?rel=0" frameborder="0"></iframe><br><br><div align="right"><a href="http://s.geo.admin.ch/1725f8ee" target="_blank">more >>>>>&nbsp;</a></div><br>'
//      });	  
	  }
