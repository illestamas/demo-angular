import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

/* modules */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckInComponent } from './check-in/check-in.component';
import { BookingComponent } from './booking/booking.component';
import { ErrorComponent } from './error/error.component';

/* primeng */
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

/* routing */
import { appRoutes } from './app.routes';
/* import { GraphQLModule } from './graphql.module'; */
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CheckInComponent,
    BookingComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    /* GraphQLModule, */
    HttpClientModule,
    InputTextModule,
    AccordionModule,
    StepsModule,
    TableModule,
    TooltipModule,
    ToastModule
  ],
  providers: [DatePipe, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
