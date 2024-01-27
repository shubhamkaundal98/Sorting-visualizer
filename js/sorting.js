const new_array = document.getElementById("new_array")
const array_size = document.getElementById("array_size")
const bars = document.getElementById("bars")
const buttons = document.querySelectorAll("button")
const speedValue = document.getElementById("speed")
const pause = document.getElementById("pause")
const resume = document.getElementById("resume")
const restart = document.getElementById("restart")
const bubble_btn = document.getElementById("bubble")
const insertion_btn = document.getElementById("insertion")
const merge_btn = document.getElementById("merge")
const selection_btn = document.getElementById("selection")
const quick_btn = document.getElementById("quick")

let array = []
let delay = 260/3
let isSortingPaused = false
let isSortingRestarted = false

function create_bars() {
    bars.innerHTML = ""

    let bar_number = array_size.value

    for(let i=0; i < bar_number ; i++){
        array[i] = Math.floor(Math.random() * 100) + 1
    }

    for(let i =0; i<bar_number ; i++){
        let newdiv = document.createElement("div")
        let margin_size=0.1
        let width = 100/bar_number -(2*margin_size)
        let height = array[i]*3.5
        newdiv.style = `margin:0% ${margin_size}%; width: ${width}%; height: ${height}px;`
        newdiv.classList.add("divbars")
        bars.appendChild(newdiv)
    }
}

create_bars()

function speed(millisec) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        },millisec)
    })
}

new_array.addEventListener("click",create_bars)
array_size.addEventListener("input",create_bars)
speedValue.addEventListener("input",() => {
    if(speedValue.value == 1){
        delay = 260
    } else if(speedValue.value == 3){
        delay = 260/3
    }else if(speedValue.value == 5){
        delay = 260/7
    }
})

pause.addEventListener("click",() => {
    isSortingPaused = true
})

resume.addEventListener("click",() => {
    isSortingPaused = false
})

restart.addEventListener("click",() => {
    isSortingRestarted = true
    isSortingPaused = false
    array_size.value = 50
    speedValue.value = 3
    create_bars()
})


bubble_btn.addEventListener("click",bubblefn)
insertion_btn.addEventListener("click",insertionfn)
merge_btn.addEventListener("click",mergefn)
selection_btn.addEventListener("click",selectionfn)
quick_btn.addEventListener("click",quickfn)

async function bubblefn() {
    this.classList.add("selected")

    disableButtons()

    this.classList.remove("unselected")

    if(isSortingRestarted) {
        isSortingRestarted=false
    }

    if(isSortingPaused) {
        isSortingPaused=false
    }

    await bubble_sort() 

    enableButtons()

    this.classList.remove("selected")
}

async function insertionfn() {
    this.classList.add("selected")

    disableButtons()

    this.classList.remove("unselected")

    if(isSortingRestarted) {
        isSortingRestarted=false
    }

    if(isSortingPaused) {
        isSortingPaused=false
    }

    await insertion_sort()
    
    enableButtons()

    this.classList.remove("selected")

}

async function mergefn() {
    this.classList.add("selected")

    disableButtons()

    this.classList.remove("unselected")

    if(isSortingPaused) {
        isSortingPaused=false
    }

    if(isSortingPaused) {
        isSortingPaused = false
    }

    await merge_sort()
    
    enableButtons()

    this.classList.remove("selected")

}

async function selectionfn() {
    this.classList.add("selected")

    disableButtons()

    this.classList.remove("unselected")

    if(isSortingRestarted) {
        isSortingRestarted=false
    }

    if(isSortingPaused) {
        isSortingPaused=false
    }

    await selection_sort()
    
    enableButtons()

    this.classList.remove("selected")

}

async function quickfn() {
    this.classList.add("selected")

    disableButtons()

    this.classList.remove("unselected")

    if(isSortingRestarted) {
        isSortingRestarted=false
    }

    if(isSortingPaused) {
        isSortingPaused=false
    }

    await quick_sort()

    enableButtons()

    this.classList.remove("selected")
}