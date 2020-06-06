import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FiltertableComponent } from './filtertable/filtertable.component';


const routes: Routes = [
  {
    path:'table', component:TableComponent},
    {path:'filtertable',component:FiltertableComponent},
    {path:"**",component:TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
 export const routingcomponents=[TableComponent,FiltertableComponent]
