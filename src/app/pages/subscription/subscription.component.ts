import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent {
  isYearly: boolean = false;
  selectedPlan: string = 'Arcade';
  showAddsComponent: boolean = false;

  toggleBilling() {
    this.isYearly = !this.isYearly;
  }

  selectPlan(plan: string) {
    this.selectedPlan = plan;
  }

  goBack() {
    this.showAddsComponent = false;
  }

  nextStep() {
    this.showAddsComponent = true;
  }
}
