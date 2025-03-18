import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-property-list',
  imports: [PropertyCardComponent,NgFor],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{

  Properties: Array<any> = [
    {
      "propertyid" : 1,
      "propertyname" : "House-1",
      "propertysize" : "1200sqft",
      "propertyprice": 10000
      },
     {
      "propertyid" : 2,
      "propertyname" : "House-2",
      "propertysize" : "1200sqft",
      "propertyprice": 10000
      },
      { "propertyid" : 3,
      "propertyname" : "House-3",
      "propertysize" : "1200sqft",
      "propertyprice": 10000
      },
     {
      "propertyid" : 4,
      "propertyname" : "House-4",
      "propertysize" : "1200sqft",
      "propertyprice": 10000
      },
      { "propertyid" : 5,
        "propertyname" : "House-5",
        "propertysize" : "1200sqft",
        "propertyprice": 10000
        },
       {
        "propertyid" : 6,
        "propertyname" : "House-6",
        "propertysize" : "1200sqft",
        "propertyprice": 10000
        },
        { "propertyid" : 7,
          "propertyname" : "House-7",
          "propertysize" : "1200sqft",
          "propertyprice": 10000
          },
         {
          "propertyid" : 8,
          "propertyname" : "House-8",
          "propertysize" : "1200sqft",
          "propertyprice": 10000
          }


]

constructor(){

}

ngOnInit(): void {
  
}

}
