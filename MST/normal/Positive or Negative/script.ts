const numRef = document.getElementById("num")as HTMLInputElement
const resRef = document.getElementById("res") as HTMLParagraphElement
function Check(){
    const num:number = parseInt(numRef.value)
    numRef.value = ""
    if(num == 0)
    {
        resRef.innerText = `Result: ${num} is Zero`
    }
    else if(num > 0)
    {
        resRef.innerText = `Result: ${num} is Positive Number`
    }
    else
    {
        resRef.innerText = `Result: ${num} is Negative Number`
    }
}