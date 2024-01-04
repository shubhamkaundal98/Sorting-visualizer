function disableButtons() {
    for(let i=0;i<buttons.length;i++){
        if(buttons[i].id == "pause" || buttons[i].id == "resume"){
            continue
        }
        buttons[i].disabled = true
        buttons[i].style.pointerEvents = "none"
        buttons[i].classList.add("unselected")
    }
    array_size.disabled = true
}

function enableButtons() {
    for(let i=0;i<buttons.length;i++){
        buttons[i].disabled = false
        buttons[i].style.pointerEvents = "auto"
        buttons[i].classList.remove("unselected")
    }
    array_size.disabled = false
}