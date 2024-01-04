function swap(elem1,elem2){
    let temp = elem1.style.height
    elem1.style.height = elem2.style.height
    elem2.style.height = temp
}

async function bubble_sort() {
    const divbars = document.querySelectorAll(".divbars")
    const bar_number = array_size.value

    for(let i =0; i < bar_number -1; i++){
        for(let j=0; j < bar_number -1 -i;j++){

            divbars[j].style.background = "red"
            divbars[j+1].style.background = "red"

            await new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                },260)
            })


            if(parseInt(divbars[j].style.height)>parseInt(divbars[j+1].style.height)){
                swap(divbars[j],divbars[j+1])
            }

            divbars[j].style.background = "yellow"
            divbars[j+1].style.background = "yellow"
            
        }

        divbars[bar_number -1 -i].style.background = "green"
    }
    divbars[0].style.background = "green"
}