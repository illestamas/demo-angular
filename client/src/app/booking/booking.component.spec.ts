import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../app.module';
import { BookingComponent } from './booking.component';
import { CheckInComponent } from '../check-in/check-in.component';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let checkinComponent: CheckInComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckInComponent,
        BookingComponent
      ],
      imports: [
        AppModule
      ],
    });
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
