// const searchButton = document.querySelector(".searchButton")
const $searchButton = $('.searchButton')

$searchButton.on("click", function () {

    // })

    // searchButton.addEventListener("click", function () {
    let $input = $(".input").val();
    // let input = document.querySelector(".input").value;

    var request = $.ajax({
        //$.ajax je zamenio celu pripremu(pravljenje objekta, konfigurisanje obj... po difol = get)
        url: `https://api.github.com/search/users?q=${$input}`,

    });

    request.done(function (response) {
        // console.log(response);
        for (let i = 0; i < response.items.length; i++) {
            var userAvatar = response.items[i].avatar_url;
            var userName = response.items[i].login;
            
            $div = $("<div>").addClass("userDiv");
            $img = $("<img>").attr("src", userAvatar);
            $($div).append($img);
            $p = $("<p>").append(userName);
            $($div).append($p);
            $('#log').append($div);
        }
    });

    // request.fail(function (jqXHR, textStatus) {
    //alert("Request failed: " + textStatus);
    //});

})