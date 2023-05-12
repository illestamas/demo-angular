import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

const json = 
{
    "bookingCode": "PZIGZ3",
    "contactDetails": [
        {
            "@class": "EmailAddress",
            "address": "TRAINER@YAHOO.FR"
        }
    ],
    "itinerary": {
        "type": "ONE_WAY",
        "connections": [
            {
                "id": 1,
                "duration": "120",
                "origin": {
                    "IATACode": "AMS",
                    "name": "Schiphol",
                    "city": {
                        "IATACode": "AMS",
                        "name": "Amsterdam",
                        "country": {
                            "code": "NL",
                            "name": "The Netherlands"
                        }
                    }
                },
                "destination": {
                    "IATACode": "NCE",
                    "name": "Cote D'Azur Airport",
                    "city": {
                        "IATACode": "NCE",
                        "name": "Nice",
                        "country": {
                            "code": "FR",
                            "name": "France"
                        }
                    }
                },
                "segments": [
                    {
                        "id": 2,
                        "type": "LOCAL",
                        "informational": false,
                        "departFrom": {
                            "IATACode": "AMS",
                            "name": "Schiphol",
                            "city": {
                                "IATACode": "AMS",
                                "name": "Amsterdam",
                                "country": {
                                    "code": "NL",
                                    "name": "The Netherlands"
                                }
                            }
                        },
                        "arriveOn": {
                            "IATACode": "NCE",
                            "name": "Cote D'Azur Airport",
                            "city": {
                                "IATACode": "NCE",
                                "name": "Nice",
                                "country": {
                                    "code": "FR",
                                    "name": "France"
                                }
                            }
                        },
                        "marketingFlight": {
                            "number": "1263",
                            "carrier": {
                                "code": "KL",
                                "name": "KLM"
                            },
                            "status": {
                                "code": "CONFIRMED",
                                "name": "Confirmed"
                            },
                            "numberOfStops": 0,
                            "sellingClass": {
                                "code": "Z"
                            },
                            "operatingFlight": {
                                "number": "1263",
                                "carrier": {
                                    "code": "KL",
                                    "name": "KLM"
                                },
                                "duration": "PT2H",
                                "flown": false,
                                "checkInStart": "2016-10-13T03:35+02:00",
                                "localCheckInStart": "2016-10-13T03:35",
                                "checkInEnd": "2016-10-14T08:35+02:00",
                                "localCheckInEnd": "2016-10-14T08:35",
                                "scheduledArrival": "2016-10-14T11:35+02:00",
                                "localScheduledArrival": "2016-10-14T11:35",
                                "scheduledDeparture": "2016-10-14T09:35+02:00",
                                "localScheduledDeparture": "2016-10-14T09:35",
                                "arrivalTerminal": {
                                    "name": "2"
                                },
                                "cabin": {
                                    "code": "10",
                                    "name": "Business"
                                },
                                "equipment": {
                                    "code": "73H",
                                    "name": "Boeing 737-800"
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    "passengers": {
        "id": 1,
        "firstName": "RUUD",
        "lastName": "HESP",
        "title": {
            "code": "MR",
            "name": "Mr"
        }
    }
}


@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent {
  form: FormGroup;

  data: any = {};

  loaded: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
        bookingCode: ["", [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(6),
            Validators.pattern("^[a-zA-Z2-8_.-]*$")
        ]],
        familyName: ["", [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(30)
        ]]
    });
  }

  loadDetails() {
    this.data = json;
    //console.log(json);

    // validate request
    const bookingCode = this.form.controls['bookingCode'].value;
    const familyName = this.form.controls['familyName'].value;

    if (bookingCode.toLowerCase() !== this.data.bookingCode.toLowerCase()) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid booking code!' });

        return {
            error: "invalid_booking_code"
        };
    }

    if (familyName.toLowerCase() !== this.data.passengers.lastName.toLowerCase()) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid family name!' });

        return {
            error: "invalid_family_name"
        };
    }

    document.getElementById("left-div")?.classList.add("left-div-after");
    document.getElementById("left-div")?.classList.remove("left-div");

    document.getElementById("center-div")?.classList.add("center-div-after");
    document.getElementById("center-div")?.classList.remove("center-div");

    document.getElementById("right-div")?.classList.add("right-div-after");
    document.getElementById("right-div")?.classList.remove("right-div");

    document.getElementById("right-div")?.classList.add("border");
    document.getElementById("card")?.classList.add("slided");

    this.loaded = true;

    return {
        status: "ok"
    };
  }
}
