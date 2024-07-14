import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  registrationForm: FormGroup;
  showSubscription = false;

  constructor(
    private groupedForm: FormBuilder,
    private stepsService: StepsService
  ) {
    this.registrationForm = this.groupedForm.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  navigateToSubscription() {
    if (this.registrationForm.valid) {
      this.showSubscription = true;
      this.stepsService.setStep(2); // Assuming this is used for other purposes
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}
