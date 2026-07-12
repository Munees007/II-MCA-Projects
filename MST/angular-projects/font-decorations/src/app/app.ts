import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomSelectType } from '../types/CustomSelect';
import { CustomSelect } from './components/custom-select/custom-select';
import { DecorationType } from '../types/DecorationType';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomSelect, FormsModule, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  textInput = "Hello World!"
  decorationData:DecorationType = {
    w_h:300,
    textColor:"",
    backgroundColor:"",
    borderColor:"",
    borderRadius:10,
    fontStyle:"Normal",
    fontWeight:"Normal",
    borderStyle:"None",
    fontFamily:"",
    textDecoration:"None",
    fontSize: 20
  }

  decorations: CustomSelectType[] = [
    {
      title:"Font Style",
      options: ["Normal","Italic"],
      handleValue: (value:string)=>{
        this.decorationData.fontStyle = value
      }
    },
    {
      title:"Font Weignt",
      options: ["Normal","Bold","Bolder","Lighter"],
      handleValue: (value:string)=>{
        this.decorationData.fontWeight = value
      }
    },
    {
      title:"Border Style",
      options: ["None","Solid","Dotted","Dashed"],
      handleValue: (value:string)=>{
        this.decorationData.borderStyle = value
      }
    },
    {
      title:"Text Decoration",
      options: ["None","Underline","Dotted","Dashed"],
      handleValue: (value:string)=>{
        this.decorationData.textDecoration = value
      }
    },
    {
      title:"Font Family",
      options: ["'Segoe UI', Tahoma, Geneva, Verdana, sans-serif","'Times New Roman', Times, serif",
        "'Courier New', Courier, monospace","Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"],
      handleValue: (value:string)=>{
        this.decorationData.fontFamily = value
      }
    }
  ]
  
  get boxStyle() {
    
    const wH = this.decorationData.w_h > 300 ? 300 : this.decorationData.w_h
    this.decorationData.w_h = wH
    return {
      width: `${wH}px`,
      height: `${wH}px`,
      backgroundColor: this.decorationData.backgroundColor,
      border: `2px ${this.decorationData.borderStyle} ${this.decorationData.borderColor}`,
      borderRadius: `${this.decorationData.borderRadius}px`
    };
  }

  get textStyle() {
    const textS = ["None","Underline"].includes(this.decorationData.textDecoration) ? this.decorationData.textDecoration : `underline ${this.decorationData.textDecoration}`
    return {
      color: this.decorationData.textColor,
      fontWeight: this.decorationData.fontWeight,
      fontStyle: this.decorationData.fontStyle,
      fontFamily: this.decorationData.fontFamily,
      textDecoration: textS,
      fontSize: `${this.decorationData.fontSize}px`
    };
  }
}
