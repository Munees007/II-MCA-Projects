import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OperationType } from '../types/orperation.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  num1: number | null = null
  num2: number | null = null
  fact = () =>{
    if(this.num1 ==null) return 0
    let c = 1
    for(let i=1;i<=this.num1!;i++)
    {
      c *= i;
    }
    return c
  }
  selectedIndex = 0
  resetValue = ()=>{
    this.num1 = null
    this.num2 = null
  }
  options:OperationType[] = [
    {
      title:"Addition",
      operation:()=>{return `${(this.num1 ?? 0) + (this.num2 ?? 0)}`},
      inputCount:2
    },
    {
      title:"Subtraction",
      operation:()=>{return `${(this.num1 ?? 0) - (this.num2 ?? 0)}`},
      inputCount:2
    },
    {
      title:"Multiplication",
      operation:()=>{return `${(this.num1 ?? 0) * (this.num2 ?? 0)}`},
      inputCount:2
    },
    {
      title:"Division",
      operation:()=>{return `${(this.num1 ?? 0) / (this.num2 ?? 0)}`},
      inputCount:2
    },
    {
      title:"Modulas",
      operation:()=>{return `${(this.num1 ?? 0) % (this.num2 ?? 0)}`},
      inputCount:2
    },
    {
      title:"Power",
      operation:()=>{return `${Math.pow(this.num1!,this.num2!)}`},
      inputCount:2
    },
    {
      title:"Factorial",
      operation:()=>{return `${this.fact()}`},
      inputCount:1
    }
  ]
}
