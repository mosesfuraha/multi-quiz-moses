import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  registrationForm: FormGroup;
  showSubscription = false;

  constructor(
    private groupedForm: FormBuilder,
    private formService: FormService
  ) {
    this.registrationForm = this.groupedForm.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formService.formStatus$.subscribe({
      next: (status) => {
        if (status) {
          this.showSubscriptionComponent();
        }
      },
      error: (err) => {
        console.error(err);
        this.registrationForm.markAllAsTouched();
      },
      complete: () => {
        console.log('Form validation complete');
      },
    });
  }

  navigateToSubscription(): void {
    if (this.registrationForm.valid) {
      this.showSubscriptionComponent();
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }

  showSubscriptionComponent(): void {
    this.showSubscription = true;
  }
}
