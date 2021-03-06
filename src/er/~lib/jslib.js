///import er.lib;



///import js.util.Class;

er.lib.inherits = js.util.Class.inherit;

er.lib.extend = function (target, source) {
	return js.util.Class.mix(target, source, true);
};

er.lib.clone = js.util.Class.clone;



///import js.dom.Stage.loadScript;

er.lib.loadScript = function (url, onload) {
	js.dom.Stage.loadScript(url, {onload: onload});
};




///import js.client.Browser;

er.lib.firefox = js.client.Browser.Firefox;

er.lib.ie = js.client.Browser.IE;



///import js.dom.Stage.get;

er.lib.g = js.dom.Stage.get;

///import js.client.Features.~stringTrim;

er.lib.trim = function (str) {
	return str.trim();
};

///import js.text.Template;

er.lib.format = js.text.Template.format;



///import js.text.Escaper.encodeHTML;

er.lib.encodeHTML = js.text.Escaper.encodeHTML;



///import js.net.Ajax;

er.lib.ajax = function (url, options) {
	options.url = url;
	var _onsuccess = options.onsuccess;
	options.onsuccess = function (response, request) {
		_onsuccess.call(this, request, response);
	};
	return js.net.Ajax.request(options);
};



///import js.util.Namespace;

er.lib.namespace = js.util.Namespace.get;
