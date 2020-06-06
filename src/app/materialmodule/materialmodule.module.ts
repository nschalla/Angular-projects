import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox'; 

import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field'; 

const material=[MatToolbarModule,MatInputModule,MatSidenavModule,MatTableModule,MatSortModule,MatCheckboxModule,MatFormFieldModule] ;
const mat=[]
@NgModule({ 
 
  imports: [material],
  exports:[material] 
})
export class MaterialmoduleModule {   

}
