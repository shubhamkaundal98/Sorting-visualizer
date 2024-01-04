async function insertion_sort() {
    const divbars = document.querySelectorAll(".divbars");
    const bar_number = array_size.value;

    for (let i = 1; i < bar_number; i++) {
        let current = divbars[i].style.height;
        let j = i - 1;

        divbars[j].style.background = "red";
        divbars[j + 1].style.background = "red";

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 260)
        );

        while (j >= 0 && parseInt(divbars[j].style.height) > parseInt(current)) {
            divbars[j].style.background = "orange"
            divbars[j + 1].style.height = divbars[j].style.height;
            j--;
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 260)
        );
        }

        divbars[j + 1].style.height = current;

        for (let k = 0; k <= i; k++) {
            divbars[k].style.background = "green";
        }
    }
}
