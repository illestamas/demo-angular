import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';

interface MenuItemData extends MenuItem {
  data: any[];
}

interface Passenger {
  id: number,
  firstName: string,
  lastName: string,
  title: string
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})

export class BookingComponent {
  form: FormGroup;

  stepperIndex: number = 0;

  items: MenuItemData[] = [];
  selectedStepperItemData: any;

  passengers: Passenger[] = [];

  _data: any;
  @Input() set data(value: any) {
    this._data = value;
    this.loadStepper();
    this.loadPassengers();
  };

  constructor() {}

  loadStepper() {
    const connections = this._data?.itinerary?.connections || [];

    for (const connection of connections) {
      const item: MenuItemData = {
        label: `${connection.origin?.IATACode} -> ${connection.destination?.IATACode}`, // compose a label that tells departure and destionation for the user
        data: connection.segments // data that will be displayed open steper's index change
      };

      this.items.push(item);
    }

    this.selectedStepperItemData = this.items[0]?.data[0];
  }

  loadPassengers() {
    // ! this should be an array, not an object
    const passenger: Passenger = this._data.passengers;
    this.passengers.push(passenger);
  }

  onStepperIndexChange(event: any) {
    this.stepperIndex = event;
    this.selectedStepperItemData = this.items[this.stepperIndex]?.data[0];
  }
}
