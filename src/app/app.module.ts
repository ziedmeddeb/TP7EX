import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeComponent } from './employe/employe.component';
import { ListemployesComponent } from './listemployes/listemployes.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    ListemployesComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
