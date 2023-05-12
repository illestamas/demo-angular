import { AppComponent } from './app.component';
import { CheckInComponent } from './check-in/check-in.component';
import { BookingComponent } from './booking/booking.component';
import { ErrorComponent } from './error/error.component';

export const appRoutes: any = [
  { path: "", redirectTo: "/checkin", pathMatch: "full" },
  { path: "home", redirectTo: "/checkin" },
  { path: "checkin", component: CheckInComponent },
  { path: "booking", component: BookingComponent },
  { path: "**", component: ErrorComponent },
];