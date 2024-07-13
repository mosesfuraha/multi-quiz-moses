import { Component } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent {
  constructor(private subscriptionService: SubscriptionService) {}

  get isYearly() {
    return this.subscriptionService.getIsYearly();
  }

  get selectedPlan() {
    return this.subscriptionService.getSelectedPlan();
  }

  get showAddsComponent() {
    return this.subscriptionService.getAddOns()['showAddsComponent'];
  }

  toggleBilling() {
    this.subscriptionService.setIsYearly(!this.isYearly);
  }

  selectPlan(plan: string) {
    this.subscriptionService.setSelectedPlan(plan);
  }

  goBack() {
    this.subscriptionService.setAddOn('showAddsComponent', false);
  }

  nextStep() {
    this.subscriptionService.setAddOn('showAddsComponent', true);
  }
}
