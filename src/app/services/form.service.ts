import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private formStatusSubject = new BehaviorSubject<boolean>(false);
  formStatus$ = this.formStatusSubject.asObservable();
  private currentStepSubject = new BehaviorSubject<number>(1);
  currentStep$ = this.currentStepSubject.asObservable();
  validateForm(isValid: boolean): void {
    if (isValid) {
      this.formStatusSubject.next(true);
      this.formStatusSubject.complete();
    } else {
      this.formStatusSubject.error('Form is invalid');
    }
  }

  updateFormStatus(status: boolean): void {
    this.formStatusSubject.next(status);
  }

  updateCurrentStep(step: number): void {
    this.currentStepSubject.next(step);
  }
}
