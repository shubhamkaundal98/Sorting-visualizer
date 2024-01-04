async function merge(start, mid, end) {
    const divbars = document.querySelectorAll(".divbars");

    const n1 = mid - start + 1;
    const n2 = end - mid;

    const leftArray = new Array(n1);
    const rightArray = new Array(n2);

    for (let i = 0; i < n1; i++) {
        leftArray[i] = divbars[start + i].style.height;
    }

    for (let j = 0; j < n2; j++) {
        rightArray[j] = divbars[mid + 1 + j].style.height;
    }

    let i = 0;
    let j = 0;
    let k = start;

    while (i < n1 && j < n2) {
        divbars[start + i].style.background = "red";
        divbars[mid + 1 + j].style.background = "red";

        while(isSortingPaused){
            await new Promise(resolve => setTimeout(resolve, 100))
        }

        await speed(delay)

        if (parseInt(leftArray[i]) <= parseInt(rightArray[j])) {
        divbars[start + i].style.background = "orange";

            divbars[k].style.height = leftArray[i];
            
            i++;
        } else {
        divbars[start + i].style.background = "orange";

            divbars[k].style.height = rightArray[j];
            j++;
        }
        
        k++;
    }

    

    while (i < n1) {
        divbars[start + i].style.background = "orange";
        
        await speed(delay)
        
        divbars[k].style.height = leftArray[i];
        i++;
        k++;
    }

    while (j < n2) {
        divbars[mid + 1 + j].style.background = "orange";
        
        await speed(delay)
        
        divbars[k].style.height = rightArray[j];
        j++;
        k++;
    }

    for (let x = start; x <= end; x++) {
        divbars[x].style.background = "green";
    }
}

async function partition(start, end) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);

        await partition(start, mid);
        await partition(mid + 1, end);

        await merge(start, mid, end);
    }
}

async function merge_sort() {
    const divbars = document.querySelectorAll(".divbars");
    
    await partition(0, divbars.length - 1);

    for (let i = 0; i < divbars.length; i++) {
        divbars[i].style.background = "green";
    }
}
