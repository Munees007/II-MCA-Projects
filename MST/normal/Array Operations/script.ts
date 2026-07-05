document.addEventListener("DOMContentLoaded",()=>{
    const arrayRef = document.getElementById("array") as HTMLDivElement
    const addBtn = document.getElementById("add") as HTMLButtonElement
    const powerBtn = document.getElementById("power") as HTMLButtonElement
    const posNegBtn = document.getElementById("posNeg") as HTMLButtonElement
    const oddEvenBtn = document.getElementById("oddEven") as HTMLButtonElement
    const clearBtn = document.getElementById("clear") as HTMLButtonElement
    const valuesRef = document.getElementById("values") as HTMLTextAreaElement
    const titleRef = document.getElementById("title") as HTMLParagraphElement
    let array:number[] = []

    const clearFunc = ()=>{
        while (arrayRef.firstChild) {
            arrayRef.removeChild(arrayRef.firstChild);
        }
    }

    addBtn.addEventListener("click",()=>{
        clearFunc()
        titleRef.innerText = "Values Added"
        const values = valuesRef.value.split(",")

        values.forEach((val)=>{
            array.push(parseInt(val))
        })

        array.forEach((val)=>{
            const pTag = document.createElement("p")

            pTag.className = "text-gray-300 tracking-widest uppercase";

            pTag.innerText = val.toString()

            arrayRef.appendChild(pTag)
        })

        valuesRef.value = ""
    })

    powerBtn.addEventListener("click",()=>{
        clearFunc()
        titleRef.innerText = "Power value of array"
        array.forEach((val)=>{
            const pTag = document.createElement("p")

            pTag.className = "text-gray-300 tracking-widest uppercase";

            pTag.innerText = `Power of ${val} = ${val * val}`

            arrayRef.appendChild(pTag)
        })
    })

    posNegBtn.addEventListener("click",()=>{
        clearFunc()
        titleRef.innerText = "Positive Negative Seperation"
        const posArr = array.filter(x => x > 0)
        const negArr = array.filter(x => x < 0)

        const posTTag = document.createElement("p")
        posTTag.className = "text-gray-300 tracking-widest uppercase";
        posTTag.innerText = `Positive Values`
        arrayRef.appendChild(posTTag)
        posArr.forEach((val)=>{
            const pTag = document.createElement("p")

            pTag.className = "text-gray-300 tracking-widest uppercase";

            pTag.innerText = `${val}`

            arrayRef.appendChild(pTag)
        })

        const negTTag = document.createElement("p")
        negTTag.className = "text-gray-300 tracking-widest uppercase";
        negTTag.innerText = `Negative Values`
        arrayRef.appendChild(negTTag)
        negArr.forEach((val)=>{
            const pTag = document.createElement("p")

            pTag.className = "text-gray-300 tracking-widest uppercase";

            pTag.innerText = `${val}`

            arrayRef.appendChild(pTag)
        })
    })

    oddEvenBtn.addEventListener("click",()=>{
        clearFunc()
        titleRef.innerText = "Odd or Even Seperation"
        const oddArr = array.filter(x => x %2 == 0)
        const evenArr = array.filter(x => x % 2 != 0)

        const oddTTag = document.createElement("p")
        oddTTag.className = "text-gray-300 tracking-widest uppercase";
        oddTTag.innerText = `Odd Values`
        arrayRef.appendChild(oddTTag)
        oddArr.forEach((val)=>{
            const pTag = document.createElement("p")

            pTag.className = "text-gray-300 tracking-widest uppercase";

            pTag.innerText = `${val}`

            arrayRef.appendChild(pTag)
        })

        const evenTTag = document.createElement("p")
        evenTTag.className = "text-gray-300 tracking-widest uppercase";
        evenTTag.innerText = `Even Values`
        arrayRef.appendChild(evenTTag)
        evenArr.forEach((val)=>{
            const pTag = document.createElement("p")

            pTag.className = "text-gray-300 tracking-widest uppercase";

            pTag.innerText = `${val}`

            arrayRef.appendChild(pTag)
        })
    })

    clearBtn.addEventListener("click",()=>{
        array = []
        clearFunc()
        valuesRef.value = ""
    })
})