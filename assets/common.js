function cancelBack() {
    if ((event.keyCode == 8 && (event.srcElement.form == null || event.srcElement.isTextEdit == false)) ||
        event.keyCode == 37 && event.altKey ||
        event.keyCode == 39 && event.altKey
    ) {
        event.cancelBubble = true;
        event.returnValue = false;
    }
}

window.addEventListener("load", function () {
    setTimeout(function(){
        var loader = document.getElementById("preloader");
        loader.style.display = "none";
    }, 200);
})

