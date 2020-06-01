import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {MatCheckboxModule} from '@angular/material/checkbox';



const material=[MatToolbarModule,MatSidenavModule,MatTableModule,MatCheckboxModule] ;
@NgModule({ 
 
  imports: [material
  
  ],exports:[material] 
})
export class MaterialmoduleModule {   

}
