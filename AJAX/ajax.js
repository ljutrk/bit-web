var getip = (function getIPOuter() {
    var x = "82.117.204.106";

    return x;
})();

(function getIp(x) {

    var newXHR = new XMLHttpRequest();

    newXHR.open('GET', `http://www.freegeoip.net/xml/${x}`);

    newXHR.send();

    newXHR.onload = function (response) {
        if (newXHR.status === 200) {
            var res = newXHR.responseXML;
            var from = res.querySelector("IP").textContent;
            console.log(from);
        }
    }
})(getip);