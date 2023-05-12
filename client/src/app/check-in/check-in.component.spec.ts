import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInComponent } from './check-in.component';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { AppModule } from '../app.module';
import { Validators } from '@angular/forms';

describe('CheckInComponent', () => {
  let component: CheckInComponent;
  let fixture: ComponentFixture<CheckInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckInComponent
      ],
      imports: [
        AppModule
      ],
      providers: [
        DatePipe,
        MessageService
      ],
    });
    fixture = TestBed.createComponent(CheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* booking code */

  it('[bookingCode] should trigger validation error [required]', () => {
    const bookingCode: any = component.form.controls['bookingCode'];

    expect(bookingCode.hasValidator(Validators.required)).toBeTrue();

    /* 
      Angular's hasValidator function uses a reference to check if validators exist (the only exception is the required validator). See: https://angular.io/api/forms/AbstractControl#hasValidator
      Other validatons are tested later in this test suite.
    */
  });

  it('[bookingCode] should trigger validation error [minlength]', () => {
    const bookingCode: any = component.form.controls['bookingCode'];
    bookingCode.setValue("2");

    expect(bookingCode.errors.minlength).toBeDefined();
  });

  it('[bookingCode] should trigger validation error [maxlength]', () => {
    const bookingCode: any = component.form.controls['bookingCode'];
    bookingCode.setValue("too_long_text_here");

    expect(bookingCode.errors.maxlength).toBeDefined();
  });

  it('[bookingCode] should trigger validation error [pattern]', () => {
    const bookingCode: any = component.form.controls['bookingCode'];
    bookingCode.setValue("123123");

    expect(bookingCode.errors.pattern).toBeDefined();
  });

  /* family name */

  it('[familyName] should trigger validation error [required]', () => {
    const familyName: any = component.form.controls['familyName'];

    expect(familyName.hasValidator(Validators.required)).toBeTrue();

    /* 
      Angular's hasValidator function uses a reference to check if validators exist (the only exception is the required validator). See: https://angular.io/api/forms/AbstractControl#hasValidator
      Other validatons are tested later in this test suite.
    */
  });

  it('[familyName] should trigger validation error [minlength]', () => {
    const familyName: any = component.form.controls['familyName'];
    familyName.setValue("2");

    expect(familyName.errors.minlength).toBeDefined();
  });

  it('[familyName] should trigger validation error [maxlength]', () => {
    const familyName: any = component.form.controls['familyName'];
    familyName.setValue("too_long_text_here_too_long_text_here_too_long_text_here_too_long_text_here_too_long_text_here");

    expect(familyName.errors.maxlength).toBeDefined();
  });

  it('[bookingCode] should trigger db check error [invalid_booking_code]', () => {
    component.form.controls['bookingCode'].setValue("wrong_value");
    component.form.controls['familyName'].setValue("wrong_value");

    const response: any = component.loadDetails();
    expect(response.error).toBe("invalid_booking_code");
  });

  it('[familyName] should trigger db check error [invalid_family_name]', () => {
    component.form.controls['bookingCode'].setValue("PZIGZ3");
    component.form.controls['familyName'].setValue("wrong_value");

    const response: any = component.loadDetails();
    expect(response.error).toBe("invalid_family_name");
  });

  it('[bookingCode] and [familyName] should be valid and booking data should be retrieved', () => {
    component.form.controls['bookingCode'].setValue("PZIGZ3");
    component.form.controls['familyName'].setValue("HESP");

    const response: any = component.loadDetails();
    expect(response.status).toBe("ok");
  });
});
