function blinkDiv(n) {
    var i, divObj;
    for(i = 0; i < 4; i++) {
        divObj = $(($("div"))[i]);
        if(divObj.hasClass(n)) {
            divObj.addClass("clicked");

            setTimeout(function() {
                $("div").removeClass("clicked");
            }, 100);

        }
    }
}

n = Math.random();
n = Math.floor(n * 4) + 1;
blinkDiv(n);
var arr = [];
arr.push(n);
count = 1;
level = 1;
setTimeout(function() {
    $("h1").text("Level " +level);
}, 1000);

$("div").on("click", function() {
    var divClass;
    /*$($(this)).addClass("clicked");
    setTimeout(function() {
        $("div").removeClass("clicked");
    }, 10);*/

    if($($(this)).hasClass(arr[0])) {
        arr = (arr.slice(1)).concat(arr[0]);
        console.log(arr);
        var audio;
        if($($(this)).hasClass("green"))
            audio = new Audio("sounds/green.mp3");

        else if($($(this)).hasClass("red"))
            audio = new Audio("sounds/red.mp3");

        else if($($(this)).hasClass("yellow"))
            audio = new Audio("sounds/yellow.mp3");

        else if($($(this)).hasClass("blue"))
            audio = new Audio("sounds/blue.mp3");
        audio.play();
        count--;

    }

    else {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("h1").text("Game Over");
        throw "";
    }

    if(count === 0) {
        level++;
        $("h1").text("Level " +level);
        n = Math.random();
        n = Math.floor(n * 4) + 1;
        arr.push(n);
        console.log(arr);
        count = arr.length;
        blinkDiv(n);
    }

});
