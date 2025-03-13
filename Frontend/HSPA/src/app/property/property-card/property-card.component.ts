import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {

  Property: any = {
    "propertyid" : 1,
    "propertyname" : "House",
    "propertysize" : "1200sqft",
    "propertyprice": 10000
  }

}
