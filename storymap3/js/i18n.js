
function getURLParameter(key) {
    var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
    return result && result[1] || ""; 
}

function toggleLang(lang) {
    var lang = lang || 'de';
    document.location = document.location.pathname + "?lang="+ lang;
}


<!-- Warning: always concatenate long text lines -->
var i18n = {
    'de': {
		"title": "Die 25 grössten Stauanlagen der Schweiz",
		"Zusammenfassung" : "Das Bundesamt für Energie übt die direkte Sicherheitsaufsicht über"
			+ " die 206 grössten" 
			+ " Stauanlagen der Schweiz aus, von denen drei Viertel der Wasserkraftnutzung dienen. 25"  
			+ " dieser Stauanlagen sind höher als 100 Meter, vier sogar höher als 200 Meter. Mit der 285"
			+ " Meter hohen Grande Dixence steht in der Schweiz zudem immer noch die höchste" 
			+ " Gewichtsstaumauer der Welt.",
        "Weitere Infos": "Weitere Informationen",
		"bfe": "Bundesamt für Energie",	
		"Tätigkeiten": "Tätigkeiten der Aufsichtsbehörde",
		"Stauanlagen": "Karte aller Stauanlagen unter Bundesaufsicht",
		"Geobasisdaten": "Geobasisdaten Stauanlagen",
		"Wasserkraftpotentiale": "Karte Wasserkraftpotentiale",
		"Realized with": "Umgesetzt mit",
		"Copyright and Data protection": "Copyright und Datenschutzerklärung",
		"Stauanlage": "Stauanlage:",
		"Sperrenhöhe": "Sperrenhöhe:",
		"Kronenkote": "Kronenkote:",
		"Inbetriebnahme": "Inbetriebnahme der Anlage:",
		"Zweck": "Zweck der Anlage:",
		"Sperrentyp": "Sperrentyp:",
		"Rang": "Rang:"
    },
    'fr': {
        "title": "Les 25 plus grands ouvrages d’accumulation de Suisse",
		"Zusammenfassung" : "L’Office fédéral de l’énergie est chargé de la surveillance directe"
			+ " de la sécurité des 206 plus grands ouvrages d’accumulation de la Suisse, dont les"
			+ " trois quarts servent à l’utilisation de la force hydrauliques. Vingt-cinq de ces"
			+ " barrages dépassent les 100 m de hauteur, voire les 200m pour quatre d’entre eux."
			+ " Grâce à la Grande Dixence, qui culmine à 285 m, la Suisse détient même la palme du"
			+ " barrage-poids le plus haut du monde.",
		"bfe": "Office fédéral de l’énergie",
		"Tätigkeiten": "Activités des autorités de surveillance",
		"Stauanlagen": "Carte de tous les ouvrages d’accumulation sous surveillance de la Confédération",
		"Geobasisdaten": "Géodonnées de base",

		"Realized with": "Réalisé avec",
		"Copyright and Data protection": "Conditions d'utilisation",
		"Stauanlage": "Ouvrage d'accumulation:",
		"Sperrenhöhe": "Hauteur de l'ouvrage de retenue:",
		"Kronenkote": "Niveau de couronnement:",
		"Inbetriebnahme": "Mise en service de l'ouvrage:",
		"Zweck": "But de l'ouvrage d'accumulation:",
		"Sperrentyp": "Type de l'ouvrage de retenue:",
		"Rang": "Rang:"
    },
    'it': { 
		"title": "I 25 più grandi impianti di accumulazione della Svizzera",
		"Zusammenfassung" : "L’Ufficio federale dell’energia esercita la vigilanza diretta sulla" 
			+ " sicurezza dei 206"
			+ " maggiori impianti di accumulazione della Svizzera. Il 75 per cento di essi è impiegato"
			+ " nello sfruttamento delle forze idriche, 25 hanno un’altezza superiore a 100 metri e"
			+ " quattro oltrepassano addirittura 200 metri. La diga a gra-vità più alta del mondo è"
			+ " tuttora la diga della Grande Dixence che ha un’altezza di 285 metri.",
		"bfe": "Ufficio federale dell’energia",	
   		"Weitere Infos": "Ulteriori informazioni",
		"Tätigkeiten": "Attività dell’autorità di vigilanza",
		"Stauanlagen": "Carta di tutti gli impianti di accumulazione sotto la vigilanza della"
			+ " Confederazione",
		"Geobasisdaten": "Geodati di base",
		"Wasserkraftpotentiale": "Carta energia idroelettrica potenziale",
		"Realized with": "Realizzato con",
		"Copyright and Data protection": "Copyright e protezione dei diritti d'autore",
		"Stauanlage": "Impianto di accumulazione:",
	 	"Sperrenhöhe": "Altezza dell'opera di sbarramento:",
		"Kronenkote": "Livello del coronamento:",
		"Inbetriebnahme": "Messa in esercizio dell'impianto:",
		"Zweck": "Scopo dell'impianto:",
		"Sperrentyp": "Tipo dell'opera di sbarramento:",
		"Rang": "Rango:"
    },
    'en': {
		"title": "The 25 largest dams and reservoirs in Switzerland",
		"Zusammenfassung" : "The Swiss Federal Office of Energy directly supervises the safety"
			+ " of Switzerland's 206 largest dams and reservoirs, three-quarter of which are used to"
			+ " generate hydropower. Twenty-five of the dams are over 100 metres tall, and four are"
			+ " even higher than 200 metres. Switzerland still has the tallest gravity dam in the world,"
			+ " the 285-metre high Grande Dixence dam.",
	    "Weitere Infos": "Further information",
		"bfe": "Swiss Federal Office of Energy",	
		"Tätigkeiten": "Activities of the supervisory authority",
		"Stauanlagen": "Map showing all the Dams and reservoirs under the supervision of the federal"
			+ " government",
		"Geobasisdaten": "Official Geodata",
		"Wasserkraftpotentiale": "Map showing the water power potential",
		"Realized with": "Realized with",
		"Copyright and Data protection": "Copyright and Data protection",
		"Stauanlage": "Facility:",
		"Sperrenhöhe": "Dam Height:",
		"Kronenkote": "Crest Level:",
		"Inbetriebnahme": "Beginning of Operation:",
		"Zweck": "Aim:",
		"Sperrentyp": "Dam Type:",
		"Rang": "Rank:"
    }
};

var lang = getURLParameter('lang') || 'de';


$('#lang').ready(function () {
    $("#lang li").each(function() {
        var li = $(this)[0]; 
        if (li.id == lang) $(this).addClass('selected');
    });
});

$('#infobox').ready(function () {
    document.title = i18n[lang].title;
    var info = $('#infobox');
    var tpl = info.html();
    var html = Mustache.to_html(tpl, i18n[lang]);
    info.html(html);
    info.show(2000);
});


$('#objectInfo').ready(function () {
    var Info2 = $('#objectInfo');
    var tpl2 = Info2.html();
    var html2 = Mustache.to_html(tpl2, i18n[lang]);
	Info2.html(html2);
	Info2.delay(800).fadeIn(1);
	
});




$("#close_box").ready(function(){
	$("#close_box").click(function(){
		$(infobox).hide();
	});
});







