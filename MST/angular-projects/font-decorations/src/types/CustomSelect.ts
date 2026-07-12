export interface CustomSelectType
{
    title:string,
    options: string[],
    handleValue: (value:string) => void
}