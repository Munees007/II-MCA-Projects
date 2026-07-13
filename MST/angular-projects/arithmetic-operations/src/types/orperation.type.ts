export interface OperationType
{
    title:string,
    operation: () => string,
    inputCount: number
}