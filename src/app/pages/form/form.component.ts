import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepsService } from '../../services/steps.service';
import { SubscriptionService } from '../../services/subscription.service'; // Import SubscriptionService

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
    private stepsService: StepsService,
    private subscriptionService: SubscriptionService // Add SubscriptionService
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
      this.stepsService.setStep(2);
      this.subscriptionService.setShowFormComponent(false); // Hide form component
      this.subscriptionService.setShowAddsComponent(false); // Ensure add component is hidden
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}
