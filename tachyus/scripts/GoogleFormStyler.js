(function (XHR) {
    var open = XHR.prototype.open;
    XHR.prototype.open = function (method, url, async, user, pass) {
        this._url = url;
        if (url.indexOf("gstatic.com") !== -1 ||
            url.indexOf("docs.google.com") !== -1) {
            url = "https://googleformrestyler.apixml.net/corsProxy.aspx?base64Url=" + btoa(url);
        }
        open.call(this, method, url, async, user, pass);
    };
})(XMLHttpRequest);
(function() {
    var script = document.currentScript ||
        /*Polyfill*/ Array.prototype.slice.call(document.getElementsByTagName('script')).pop();
    var URL = script.getAttribute('form');
    var xhr = new XMLHttpRequest();
    xhr.open("GET", URL);
    xhr.onload = function() {
		console.log(xhr.response);
		
        document.write(xhr.response);
		document.formulario.outerHtml(xhr.response);
    };
    xhr.send();
})();