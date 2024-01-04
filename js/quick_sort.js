function swap(elem1,elem2){
    let temp = elem1.style.height
    elem1.style.height = elem2.style.height
    elem2.style.height = temp
}

async function partitionQuick(divbars,low,high){
    let pivot = parseInt(divbars[high].style.height)
    divbars[high].style.background = "red"

    let i = low -1
    
    for(let j=low;j<high;j++){
        divbars[j].style.background = "#0075ff"
        
        while(isSortingPaused){
            await new Promise(resolve => setTimeout(resolve, 100))
        }
        
        await speed(delay)

        if(parseInt(divbars[j].style.height) < pivot){
            i++;
            await speed(delay)
            swap(divbars[i],divbars[j])

            divbars[j].style.background = "orange"
    
        }
    }
    i++
    await speed(delay)
    swap(divbars[i],divbars[high])
    divbars[i].style.background = "green"

    await speed(delay)

    for(let k = 0; k < divbars.length; k++){
        if(divbars[k].style.background != 'green')
            divbars[k].style.background = 'cyan';
    }

    return i
}

async function quick(divbars,low,high) {
    if(low<high){

        let partitionIdx = await partitionQuick(divbars,low,high)

        await quick(divbars,low,partitionIdx-1)
        await quick(divbars,partitionIdx+1,high)

    } else {
        if(low >= 0 && high >= 0 && low < divbars.length && high < divbars.length){
            divbars[high].style.background = 'green';
            divbars[low].style.background = 'green';    
        }
        
    }
}

async function quick_sort() {
    const divbars = document.querySelectorAll(".divbars")

    await quick(divbars,0,divbars.length-1)
}
