import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodycomponentComponent } from './bodycomponent/bodycomponent.component';
import { TodocomponentComponent } from './bodycomponent/todocomponent/todocomponent.component';
import { InprogresscomponentComponent } from './bodycomponent/inprogresscomponent/inprogresscomponent.component';
import { CompletedcomponentComponent } from './bodycomponent/completedcomponent/completedcomponent.component';
import { TaskcomponentComponent } from './taskcomponent/taskcomponent.component';



@NgModule({
  declarations: [
    AppComponent,
    BodycomponentComponent,
    TodocomponentComponent,
    InprogresscomponentComponent,
    CompletedcomponentComponent,
    TaskcomponentComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
