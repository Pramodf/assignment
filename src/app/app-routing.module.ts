import { ClassDetailComponent } from './class-detail/class-detail.component';
import { ClassRoomComponent } from './class-room/class-room.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: 'classes', component: ClassRoomComponent,  children: [
      {
        path: ':className',
        component: ClassDetailComponent
      }
    ]}
];
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {

}
