var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")

function backgroundUpdate() {
    document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    css.textContent = document.body.style.background;

    if (color1.value === "#000000" || color2.value === "#000000") {
        document.body.style.color = "white"
    } else {
        document.body.style.color = "rgba(0, 0, 0, 0.5)";
    }
}


color1.addEventListener("input", backgroundUpdate)
color2.addEventListener("input", backgroundUpdate)


