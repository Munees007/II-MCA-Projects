import { Component, input, output } from '@angular/core';
import { CustomSelectType } from '../../../types/CustomSelect';

@Component({
  selector: 'app-custom-select',
  imports: [],
  templateUrl: './custom-select.html',
  styleUrl: './custom-select.css',
})
export class CustomSelect {
  selectData = input<CustomSelectType>()
  sendData = output<string>();

  onSelect = (event:Event) =>{
    const Ref = event.target as HTMLInputElement 
    this.sendData.emit(Ref.value)
  }
}
