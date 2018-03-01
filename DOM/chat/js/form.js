var send = document.querySelector("#send");
var message = document.querySelector("#message");
var chat = document.querySelector(".chat");

send.onclick = function() {
    if (!message.value) {
        return;
    }
    var p = document.createElement("p");
    p.textContent = message.value;
    chat.appendChild(p);
    message.value = "";
}