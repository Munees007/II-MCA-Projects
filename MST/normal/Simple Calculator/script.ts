const buttonsRef = document.getElementById("buttons") as HTMLDivElement
const expRef = document.getElementById("exp") as HTMLInputElement
document.addEventListener('DOMContentLoaded',()=>{
    const btns:string[] = ['AC','C','(',')','7','8','9','+','4','5','6','-','1','2','3','/','0','=','*','%']

    btns.forEach((value:string,index:number)=>{
        const p = document.createElement("p") as HTMLParagraphElement

        p.innerText = value;
        p.id = `key${index}`
        p.className = "text-center fw-bold btn-sm fs-5 mb-0 btn btn-dark"

        p.addEventListener('click',(e)=>{
            if(value == "AC")
            {
                expRef.value = ""
            }
            else if(value == "C")
            {
                expRef.value = expRef.value.substring(0,expRef.value.length-1)
            }
            else if(value == "=")
            {
                expRef.value = eval(expRef.value)
            }
            else
            {
                expRef.value += value;
            }
        })        
        buttonsRef.appendChild(p)
    })
    window.addEventListener('keydown',(e)=>{
        if(e.key == "Delete")
        {
            expRef.value = ""
        }
        if(e.key == "Backspace")
        {
            expRef.value = expRef.value.substring(0,expRef.value.length-1)
        }
        if(['.','7','8','9','4','5','6','1','2','3','0','+','-','/','*','%','(',')'].includes(e.key))
        {
            expRef.value += e.key;
        }
        if(e.key == 'Enter')
        {
            expRef.value = eval(expRef.value)
        }
    })
})