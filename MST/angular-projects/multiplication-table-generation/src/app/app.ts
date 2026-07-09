import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('multiplication-table-generation');

  tableData = signal({
    tables: []
  } as TableType)

  generateTable = () =>{
    const {tableNo,endNo} = this.tableData()
    if(tableNo === undefined || endNo === undefined) return
    for(let i=1;i<=endNo;i++)
    {
      this.tableData.update((value)=>{
        const copy = {...value}
        copy.tables.push({
          sno: i,
          value: tableNo * i
        })
        return copy
      })
    }
  }
  clear = ()=>{
    this.tableData.set({tables:[]} as TableType)
  }
}
