function darkLightToggle() {
    var body = document.getElementsByTagName("body")[0]
    var text = document.getElementsByClassName("bgToggle")

    if (body.style["background-color"] == "white") {
        body.style["background-color"] = "black"
        body.style["color"] = "white"
    }
    else {
        body.style["background-color"] = "white"
        body.style["color"] = "black"
    }
}

/* would then need this to change on all pages or use local 
    storage but is a decent proof of concept */

// also make it change to dark on toggle ect 


