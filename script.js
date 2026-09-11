function darkLightToggle() {
    var body = document.getElementsByTagName("body")[0]
    var main = document.getElementsByClassName("mainText")[0]
    var work = document.getElementsByClassName("workText")[0]

    if (body.style["background-color"] == "lightgray") {
        body.style["background-color"] = "rgba(17, 17, 17, 0.968)"
        body.style["color"] = "white"
        main.style["color"] = "white"
        work.style["color"] = "white"
    }
    else {
        body.style["background-color"] = "lightgray"
        body.style["color"] = "black"
        main.style["color"] = "lightgray"
        // work.style["color"] = "lightgray"
    }
}

/* would then need this to change on all pages or use local 
    storage but is a decent proof of concept - would do local storage and 
    then on page load*/

// also make it change to dark text on toggle ect \

// is going to have to be content dependent as well


