type CTable = 
{
    sno:number,
    value:number
}

interface TableType
{
    tableNo?:number
    endNo?:number
    tables:CTable[]
}