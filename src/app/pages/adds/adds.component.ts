import { Component } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css'],
})
export class AddsComponent {
  showSubscription = false;

  constructor(
    private subscriptionService: SubscriptionService,
    private stepsService: StepsService
  ) {}

  get showSummaryComponent() {
    return this.subscriptionService.getAddOns()['showSummaryComponent'];
  }

  get isYearly() {
    return this.subscriptionService.getIsYearly();
  }

  get addOns() {
    return this.subscriptionService.getAddOns();
  }

  goToSummary() {
    this.subscriptionService.setAddOn('showSummaryComponent', true);
    this.stepsService.setStep(4);
  }

  toggleAddOn(addOn: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.subscriptionService.setAddOn(addOn, isChecked);
  }

  navigateToSubscription() {
    this.stepsService.setStep(2);
    this.subscriptionService.setShowAddsComponent(false);
    this.subscriptionService.setShowSubscriptionComponent(true);
  }
}
