import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  Date: string;
  Region: string;
  Rep:string;
  Item: string;
  Units: string;
  Unitcost: number;
  Total: number;
  }

  const ELEMENT_DATA: PeriodicElement[] =[
    {
      Date: "1/12/2020",
      Region: "Missouri",
    Rep: "Erastus",
    Item: "German",
  Units: "53.12",
  Unitcost: 1.1,
     Total: 1.96
  }, {
    Date: "1/23/2020",
    Region: "Texas",
    Rep: "Barron",
    Item: "Amharic",
    Units: "38.29",
    Unitcost: 5.11,
    Total: 65.71
  }, {
    Date: "10/29/2019",
    Region: "Minnesota",
    Rep: "Miles",
    Item: "Dutch",
    Units: "10.09",
    Unitcost: 75.43,
    Total: 5.69
  }, {
    Date: "5/2/2020",
    Region: "Texas",
    Rep: "Hilliard",
    Item: "Swedish",
    Units: "39.66",
    Unitcost: 51.38,
    Total: 87.26
  }, {
    Date: "7/27/2019",
    Region: "Colorado",
    Rep: "Lock",
    Item: "Burmese",
    Units: "66.49",
    Unitcost: 18.21,
    Total: 2.53
  }, {
    Date: "5/17/2020",
    Region: "Texas",
    Rep: "Ignacio",
    Item: "Lithuanian",
     Units: "99.55",
    Unitcost: 1.07,
    Total: 47.07
  }, {
    Date: "9/27/2019",
    Region: "South Carolina",
    Rep: "Bernardo",
    Item: "Malayalam",
    Units: "62.64",
    Unitcost: 59.95,
    Total: 92.89
  }, {
    Date: "4/5/2020",
    Region: "Virginia",
    Rep: "Reilly",
    Item: "Swedish",
    Units: "27.16",
    Unitcost: 60.68,
    Total: 93.52
  }, {
    Date: "7/8/2019",
    Region: "Massachusetts",
    Rep: "Leeland",
    Item: "Bislama",
    Units: "67.84",
    Unitcost: 80.09,
    Total: 23.47
  }, {
    Date: "12/9/2019",
    Region: "Massachusetts",
    Rep: "Hamilton",
    Item: "Guaraní",
    Units: "37.83",
    Unitcost: 40.58,
    Total: 78.72 
  }, {
    Date: "10/20/2019",
    Region: "Ohio",
    Rep: "Gabriel",
    Item: "Spanish",
    Units: "1.88",
    Unitcost: 61.06,
    Total: 73.75
  }, {
    Date: "10/27/2019",
    Region: "Virginia",
    Rep: "Tymon",
    Item: "Hiri Motu",
    Units: "16.15",
    Unitcost: 45.78,
    Total: 81.13
  }, {
    Date: "4/20/2020",
    Region: "West Virginia",
    Rep: "Courtney",
    Item: "Swati",
    Units: "42.29",
    Unitcost: 32.72,
    Total: 46.62
  }, {
    Date: "8/14/2019",
    Region: "Texas",
     Rep: "Jean",
    Item: "Tsonga",
    Units: "75.86",
    Unitcost: 56.88,
    Total: 49.47
  }, {
    Date: "4/14/2020",
    Region: "Florida",
    Rep: "Hazlett",
    Item: "Portuguese",
    Units: "91.55",
    Unitcost: 63.81,
    Total: 6.54
  }, {
    Date: "3/31/2020",
    Region: "Pennsylvania",
    Rep: "Dalston",
  Item: "Estonian",
  Units: "0.06",
    Unitcost: 79.34,
    Total: 7.51
  }, {
    Date: "5/14/2020",
    Region: "Missouri",
    Rep: "Tuckie",
  Item: "Malayalam",
    Units: "71.35",
    Unitcost: 55.98,
    Total: 1.72
  }
  ];
  





@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['Date', 'Region', 'Rep', 'Item','Units','Unitcost','Total'];  
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(){
    this.dataSource.sort = this.sort;

  }
  
}
