(function() {

    // this function changes double slashes to single slashes
    // in the URL, skipping the first double slash
    function cleanup(url) {
        var idx = url.indexOf("//") + 2;
        return url.slice(0, idx) + url.slice(idx).replace(/\/\//g, "/");
    }
    function getParamValue(param,url)
    { 
	var u = url == undefined ? document.location.href : url;
	var reg = new RegExp('(\\?|&|^)'+param+'=(.*?)(&|$)');
	matches = u.match(reg);
	if (matches) {
           return matches[2] != undefined ? decodeURIComponent(matches[2]).replace(/\+/g,' ') : '';
        } else {
           return null;
        }
    }
    // Manage JavaScript
    var scriptSrc = null;    
    var theseScripts = document.getElementsByTagName("script");
    var thisScriptTag = theseScripts[ theseScripts.length - 1 ];
    var mode = getParamValue("mode",thisScriptTag.src);
    var hostBase = document.location.protocol + '//' + 'api.geo.admin.ch';
    switch(mode)  {
        case 'debug':
            scriptSrc = cleanup(hostBase + "/1505131601/main/wsgi/build/api-debug.js");
            break;
        case 'full':
            scriptSrc = cleanup(hostBase + "/1505131601/main/wsgi/build/api-full.js");
            break;
        case 'full-debug':
            scriptSrc = cleanup(hostBase + "/1505131601/main/wsgi/build/api-full-debug.js");
            break;
        case 'light':
            scriptSrc = cleanup(hostBase + "/1505131601/main/wsgi/build/api-light.js");
            break;
        case 'light-debug':
            scriptSrc = cleanup(hostBase + "/1505131601/main/wsgi/build/api-light-debug.js");
            break;
        default:
            scriptSrc = cleanup(hostBase + "/1505131601/main/wsgi/build/api.js");
    }
    document.write('<scr' + 'ipt type="text/javascript" src="' + scriptSrc + '"></scr' + 'ipt>');

    var OpenLayersImgPath = cleanup(hostBase + "/1505131601/main/wsgi/GeoAdmin.ux/Map/img/");
    document.write(
        '<scr' + 'ipt type="text/javascript">' +
            'if (!window.GeoAdmin) {' +
                'window.GeoAdmin = {};' +
            '}' +
            'window.GeoAdmin.version = "1505131601";' +
            'window.GeoAdmin.webServicesUrl = "' + hostBase + '/main/wsgi";' +
            'window.GeoAdmin.OpenLayersImgPath = "' + OpenLayersImgPath + '";' +
            'window.GeoAdmin.protocol = document.location.protocol;' +
        '</scr' + 'ipt>');

    // Manage CSS
    var cssHref = null;
    switch(mode)  {
        case 'light':
            cssHref = cleanup(hostBase + "/1505131601/main/wsgi/build/api-light.css");
            break;
        case 'light-debug':
            cssHref = cleanup(hostBase + "/1505131601/main/wsgi/build/api-light.css");
            break;
        default:
            cssHref = cleanup(hostBase + "/1505131601/main/wsgi/build/api.css");
    }
    document.write('<link rel="stylesheet" type="text/css" href="' + cssHref + '" />');
})();
