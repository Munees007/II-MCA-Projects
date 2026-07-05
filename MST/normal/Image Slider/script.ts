const mouseDivRef = document.getElementById("mouseDiv") as HTMLDivElement


const createMouseDiv = () =>{
    const div = document.createElement("div")

    div.style.backgroundImage = 'url(images/1.png)'
    const changeBackgroundImage = (imageName:string)=>{
        div.style.backgroundImage = `url(images/${imageName})`
    }
    div.className = "w-96 h-96 bg-no-repeat bg-contain "
    div.addEventListener("mousedown",e => changeBackgroundImage('2.png'))
    div.addEventListener("mouseenter",e => changeBackgroundImage('3.png'))
    div.addEventListener("mouseleave",e => changeBackgroundImage('4.png'))
    mouseDivRef.replaceChildren(div)
}

const createRadioDiv = () =>{
    const Imagediv = document.createElement("div")
    const radioDiv = document.createElement("div")
    const images:string[] = ["1.png","2.png","3.png","4.png",
        "5.png","6.png","7.png","8.png"]
    Imagediv.style.backgroundImage = 'url(images/1.png)'
    const changeBackgroundImage = (imageName:string)=>{
        Imagediv.style.backgroundImage = `url(images/${imageName})`
    }
    const colors:string[] = ["bg-cyan-500","bg-red-500","bg-orange-500","bg-red-500","bg-blue-500",
        "bg-green-500","bg-yellow-500","bg-gray-500"
    ]
    Imagediv.className = "w-96 h-96 bg-no-repeat bg-contain "
    images.forEach((value,index)=>{

        const groupDiv = document.createElement("div")
        const radioButton = document.createElement("input")
        groupDiv.className = "relative w-fit h-fit"
        radioButton.type = "radio"
        radioButton.name = "radioAction"
        if(index == 0)
        {
            radioButton.checked = true
        }
        radioButton.style.backgroundImage = `url(images/${value})`
        const className = `appearance-none rounded-lg bg-no-repeat bg-contain border bg-white border-black w-10 h-10 checked:${colors[index]}`
        radioButton.className = className
        radioButton.addEventListener('click',(e)=>{
            changeBackgroundImage(value)
        })
        groupDiv.appendChild(radioButton)
        radioDiv.appendChild(groupDiv)
    })
    radioDiv.className = "flex gap-3 items-center"
    
    mouseDivRef.className = "flex gap-3 items-center flex-col"
    mouseDivRef.replaceChildren(Imagediv)
    mouseDivRef.appendChild(radioDiv)
}

document.addEventListener('DOMContentLoaded',e => createRadioDiv())