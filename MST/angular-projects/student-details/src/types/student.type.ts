export interface Student
{
    rollNo:string
    name:string

    marks:number[] | null[]

    getTotal: ()=> number
}

export interface StudentType
{
    markCount: number
    students:Student[]
    totalMarks: number 
    markArr: number[] | null[] 
}

export function generateMarksArray (markCount:number)
{
    const arr = []
    for(let i=0;i<markCount;i++)
    {
        if(markCount == 7) return arr
        arr.push(null)
    }
    return arr
}