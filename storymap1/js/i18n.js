
function getURLParameter(key) {
    var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
    return result && result[1] || ""; 
}


<!-- Warning: always concatenate long text lines -->
var i18n = {
    'de': {
        "title": "Morteratschgletscher: Ein Eisriese schwindet",
	"Zusammenfassung" : "Der lange Morteratschgletscher hat sich seit Beginn der Messungen im Jahre 1878 ununterbrochen " +
		         "zurückgezogen. Im Durchschnitt beträgt der Rückgang 16 Meter/ Jahr. In wärmeren Phasen (1935 bis 1965) wurde ein Rückgang"+
			" bis zu 48 Meter pro Jahr gemessen. Seit den 1990-er Jahren ist eine Verstärkung des Schwundes zu verzeichnen."+
		        " (Karte: Siegfriedkarte 1875/1876 und Landeskarte 2009",

        "Weitere Infos": "Weitere Infos",

	"Weitere Gletscher": "Weitere Gletscher (Zeitreihe)",
	"Meteoschweiz":  "Meteoschweiz",
	"Bundesamt für Umwelt": "Bundesamt für Umwelt",
	"Bundesamt für Landestopografie swisstopo": "Bundesamt für Landestopografie swisstopo",
	"Bundesamt für Statistik" :"Bundesamt für Statistik",
	"Arealstatistik": "Arealstatistik",
	"Arealstatistik: Gletscher": "Arealstatistik: Gletscher",
        "Karte": "Karte:",
	"Nomenklaturen" :"Nomenklaturen:",
        "Gletscher der Schweiz": "Gletscher der Schweiz",
	"Use case realized with GeoAdmin 2.5": "Umgesetzt mit GeoAdmin 2.5"

    },
    'fr': {
        "title": "Morteratschgletscher: Ein Eisriese schwindet",
	"Zusammenfassung" : "Der lange Morteratschgletscher hat sich seit Beginn der Messungen im Jahre 1878 ununterbrochen " +
		         "zurückgezogen. Im Durchschnitt beträgt der Rückgang 16 Meter/ Jahr. In wärmeren Phasen (1935 bis 1965) wurde ein Rückgang"+
			" bis zu 48 Meter pro Jahr gemessen. Seit den 1990-er Jahren ist eine Verstärkung des Schwundes zu verzeichnen."+
		        " (Karte: Siegfriedkarte 1875/1876 und Landeskarte 2009",

        "Weitere Infos": "Weitere Infos",

	"Weitere Gletscher": "Weitere Gletscher (Zeitreihe)",
	"Meteoschweiz":  "Meteoschweiz",
	"Bundesamt für Umwelt": "Bundesamt für Umwelt",
	"Bundesamt für Landestopografie swisstopo": "Bundesamt für Landestopografie swisstopo",
	"Bundesamt für Statistik" :"Bundesamt für Statistik",
	"Arealstatistik": "Arealstatistik",
	"Arealstatistik: Gletscher": "Arealstatistik: Gletscher",
        "Karte": "Karte:",
	"Nomenklaturen" :"Nomenklaturen:",
        "Gletscher der Schweiz": "Gletscher der Schweiz",
	"Use case realized with GeoAdmin 2.5": "Umgesetzt mit GeoAdmin 2.5"
    },
    'it': { 
	"title": "Morteratschgletscher: Ein Eisriese schwindet",
	"Zusammenfassung" : "Der lange Morteratschgletscher hat sich seit Beginn der Messungen im Jahre 1878 ununterbrochen " +
		         "zurückgezogen. Im Durchschnitt beträgt der Rückgang 16 Meter/ Jahr. In wärmeren Phasen (1935 bis 1965) wurde ein Rückgang"+
			" bis zu 48 Meter pro Jahr gemessen. Seit den 1990-er Jahren ist eine Verstärkung des Schwundes zu verzeichnen."+
		        " (Karte: Siegfriedkarte 1875/1876 und Landeskarte 2009",

        "Weitere Infos": "Weitere Infos",

	"Weitere Gletscher": "Weitere Gletscher (Zeitreihe)",
	"Meteoschweiz":  "Meteoschweiz",
	"Bundesamt für Umwelt": "Bundesamt für Umwelt",
	"Bundesamt für Landestopografie swisstopo": "Bundesamt für Landestopografie swisstopo",
	"Bundesamt für Statistik" :"Bundesamt für Statistik",
	"Arealstatistik": "Arealstatistik",
	"Arealstatistik: Gletscher": "Arealstatistik: Gletscher",
        "Karte": "Karte:",
	"Nomenklaturen" :"Nomenklaturen:",
        "Gletscher der Schweiz": "Gletscher der Schweiz",
	"Use case realized with GeoAdmin 2.5": "Umgesetzt mit GeoAdmin 2.5"
    },
    'en': {
	"title": "Morteratschgletscher: Ein Eisriese schwindet",
	"Zusammenfassung" : "Der lange Morteratschgletscher hat sich seit Beginn der Messungen im Jahre 1878 ununterbrochen " +
		         "zurückgezogen. Im Durchschnitt beträgt der Rückgang 16 Meter/ Jahr. In wärmeren Phasen (1935 bis 1965) wurde ein Rückgang"+
			" bis zu 48 Meter pro Jahr gemessen. Seit den 1990-er Jahren ist eine Verstärkung des Schwundes zu verzeichnen."+
		        " (Karte: Siegfriedkarte 1875/1876 und Landeskarte 2009",

        "Weitere Infos": "Weitere Infos",

	"Weitere Gletscher": "Weitere Gletscher (Zeitreihe)",
	"Meteoschweiz":  "Meteoschweiz",
	"Bundesamt für Umwelt": "Bundesamt für Umwelt",
	"Bundesamt für Landestopografie swisstopo": "Bundesamt für Landestopografie swisstopo",
	"Bundesamt für Statistik" :"Bundesamt für Statistik",
	"Arealstatistik": "Arealstatistik",
	"Arealstatistik: Gletscher": "Arealstatistik: Gletscher",
        "Karte": "Karte:",
	"Nomenklaturen" :"Nomenklaturen:",
        "Gletscher der Schweiz": "Gletscher der Schweiz",
	"Use case realized with GeoAdmin 2.5": "Umgesetzt mit GeoAdmin 2.5"
    }
};

var lang = getURLParameter('lang') || 'de';


$('#infobox').ready(function () {
    document.title = i18n[lang].title;
    var info = $('#infobox');
    var tpl = info.html();
    var html = Mustache.to_html(tpl, i18n[lang]);
    info.html(html);
    info.css('visibility', 'visible');
});

