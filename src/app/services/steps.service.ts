import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  private currentStepSubject = new BehaviorSubject<number>(1);
  currentStep$ = this.currentStepSubject.asObservable();

  setStep(step: number) {
    if (this.validateStep(step)) {
      this.currentStepSubject.next(step);
    } else {
      console.error('Step validation failed');
    }
  }

  getCurrentStep() {
    return this.currentStepSubject.value;
  }

  private validateStep(step: number): boolean {
    const currentStep = this.getCurrentStep();
    if (step === currentStep + 1 || step === currentStep - 1) {
      return true;
    }
    return false;
  }
}
