import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMotivationsComponent } from './my-motivations/my-motivations.component';



@NgModule({
  declarations: [
    MyMotivationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyMotivationsComponent
  ]
})
export class PersonalViewModule { }
