import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoveryChatComponent } from './discovery-process/discovery-chat/discovery-chat.component';
import { MyMotivationsComponent } from './personal-view/my-motivations/my-motivations.component';

const routes: Routes = [
  { path: 'discoveryChat', component: DiscoveryChatComponent },
  { path: 'personalView', component: MyMotivationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
