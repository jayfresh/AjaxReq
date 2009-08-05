var AjaxReq = {};
AjaxReq.ajax = function(args) {
	if(AjaxReq.proxyURL) {
		args.url = AjaxReq.proxyURL+encodeURIComponent(args.url);
		args.url += "&nocache=" + Math.random(); // avoid caching of any proxied request
	}
	if(window.Components && window.netscape && window.netscape.security && document.location.protocol.indexOf("http") == -1) {
		window.netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
	}
	try {
		return jQuery.ajax(args);
	} catch(ex) {
		var errorMsg = "problem with AjaxReq ajax request";
		if(console && console.error) {
			console.error(errorMsg,ex);
		} else {
			alert(errorMsg+": "+ex.message);
		}
		return false;
	}
};