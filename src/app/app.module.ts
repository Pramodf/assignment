import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ClassRoomComponent } from './class-room/class-room.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { ClassListService } from './service/class-list.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ClassRoomComponent,
    ClassDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ClassListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
