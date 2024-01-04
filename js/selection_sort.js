function swap(elem1,elem2){
    let temp = elem1.style.height
    elem1.style.height = elem2.style.height
    elem2.style.height = temp
}

async function selection_sort() {
    
    const divbars = document.querySelectorAll(".divbars")
    for(let i = 0;i<divbars.length-1;i++){
        let min_idx = i
        
        divbars[i].style.background = "#0075ff"

        await speed(delay)

        for(let j =i+1;j<divbars.length;j++){
            divbars[j].style.background = "red"
            
            while(isSortingPaused){
                await new Promise(resolve => setTimeout(resolve, 100))
            }

            await speed(delay)

            if(parseInt(divbars[j].style.height)<parseInt(divbars[min_idx].style.height)){
                if(min_idx !== i){
                    divbars[min_idx].style.background = "yellow"
                }
                
                min_idx = j                
            }else {
            divbars[j].style.background = "yellow"
            }
            
        }

        swap(divbars[i],divbars[min_idx])
        
        divbars[i].style.background = "green"
        
    }
    divbars[divbars.length-1].style.background = "green"
}