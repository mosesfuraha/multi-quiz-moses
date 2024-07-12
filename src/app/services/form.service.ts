import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private formStatusSubject = new BehaviorSubject<boolean>(false);
  formStatus$ = this.formStatusSubject.asObservable();

  validateForm(isValid: boolean): void {
    if (isValid) {
      this.formStatusSubject.next(true);
      this.formStatusSubject.complete();
    } else {
      this.formStatusSubject.error('Form is invalid');
    }
  }
}
