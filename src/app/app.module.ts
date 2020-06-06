import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialmoduleModule } from './materialmodule/materialmodule.module';
import { FiltertableComponent } from './filtertable/filtertable.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  
    NavbarComponent,
 
    
    routingcomponents,
 
    
    TableComponent,
 
    
    FiltertableComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialmoduleModule,
    NgbModule
 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
