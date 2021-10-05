import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoveryChatComponent } from './discovery-chat/discovery-chat.component';



@NgModule({
  declarations: [
    DiscoveryChatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DiscoveryChatComponent
  ]
})
export class DiscoveryProcessModule { }
