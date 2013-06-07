
function changeHeader(){


if(lang=="fr") {
	var fra = ''
		+'<div id="adminch"><a href="http://www.admin.ch/ch/index.fr.html" target="_blank" title="Administration fédérale admin.ch">Administration fédérale admin.ch</a></div>'
		+'<div id="depart"><a href="http://www.uvek.admin.ch/index.html?lang=fr" target="_blank" title="Département de l'+"'"+'environnement, des transports, de l'+"'"+'énergie et de la communication">Département de l'+"'"+'environnement, des transports, de l'+"'"+'énergie et de la communication</a></div>'
		+'<h1><a href="http://www.bfe.admin.ch/index.html?lang=fr" title="Office fédéral de l'+"'"+'énergie OFEN">Office fédéral de l'+"'"+'énergie OFEN</a></h1>';
	document.getElementById('webHeaderLinks').innerHTML = fra;
}

if(lang=="it") {
	var ita = ''
		+'<div id="adminch"><a href="http://www.admin.ch/ch/index.it.html" target="_blank" title="Amministrazione federale admin.ch">Amministrazione federale admin.ch</a></div>'
		+'<div id="depart"><a href="http://www.uvek.admin.ch/index.html?lang=it" target="_blank" title="Dipartimento dell'+"'"+'ambiente, dei trasporti, dell'+"'"+'energia e delle comunicazioni">Dipartimento dell'+"'"+'ambiente, dei trasporti, dell'+"'"+'energia e delle comunicazioni</a></div>'
		+'<h1><a href="http://www.bfe.admin.ch/index.html?lang=it" title="Ufficio federale dell'+"'"+'energia UFE">Ufficio federale dell'+"'"+'energia UFE</a></h1>';
	document.getElementById('webHeaderLinks').innerHTML = ita;
}

if(lang=="en") {
	var eng = ''
		+'<div id="adminch"><a href="http://www.admin.ch/ch/index.en.html" target="_blank" title="Federal Administration admin.ch">Federal Administration admin.ch</a></div>'
		+'<div id="depart"><a href="http://www.uvek.admin.ch/index.html?lang=en" target="_blank" title="Department of the Environment, Transport, Energy and Communications">Department of the Environment, Transport, Energy and Communications</a></div>'
		+'<h1><a href="http://www.bfe.admin.ch/index.html?lang=en" title="Swiss Federal Office of Energy SFOE">Swiss Federal Office of Energy SFOE</a></h1>';
	document.getElementById('webHeaderLinks').innerHTML = eng;
}
































}
