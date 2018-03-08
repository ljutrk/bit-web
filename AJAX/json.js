var getip = (function getIPOuter() {
    var x = "github.com";

    return x;
})();

(function getIp(x) {

    var newXHR = new XMLHttpRequest();

    newXHR.open('GET', `http://www.freegeoip.net/json/${x}`);

    newXHR.send();

    newXHR.onload = function (response) {
        if (newXHR.status === 200) {
            // var res = newXHR.responseXML;
            var res = newXHR.responseText;
            var obj = JSON.parse(res);
            console.log(obj);
        }
    }
})(getip);