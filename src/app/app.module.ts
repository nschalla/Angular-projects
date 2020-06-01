import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialmoduleModule } from './materialmodule/materialmodule.module';
import { FiltertableComponent } from './filtertable/filtertable.component';

@NgModule({
  declarations: [
    AppComponent,
 
    TableComponent,
 
    NavbarComponent,
 
    FiltertableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialmoduleModule
 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
