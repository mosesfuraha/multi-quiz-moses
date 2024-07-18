import { Component } from '@angular/core';
import { SubscriptionService } from '../services/subscription.service';
import { StepsService } from '../services/steps.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  showLastComponent = false;
  

  constructor(
    private subscriptionService: SubscriptionService,
    private stepsService: StepsService
  ) {}

  get isYearly() {
    return this.subscriptionService.getIsYearly();
  }

  get selectedPlan() {
    return this.subscriptionService.getSelectedPlan();
  }

  get addOns() {
    return this.subscriptionService.getAddOns();
  }

  get planPrice() {
    const planPrices: Record<string, { monthly: number; yearly: number }> = {
      Arcade: { monthly: 9, yearly: 90 },
      Advanced: { monthly: 12, yearly: 120 },
      Pro: { monthly: 15, yearly: 150 },
    };
    return this.isYearly
      ? planPrices[this.selectedPlan]?.yearly ?? 0
      : planPrices[this.selectedPlan]?.monthly ?? 0;
  }

  get addOnPrices() {
    const prices: Record<string, number> = {
      onlineService: this.isYearly ? 10 : 1,
      largerStorage: this.isYearly ? 20 : 2,
      customizableProfile: this.isYearly ? 20 : 2,
    };
    return Object.keys(this.addOns)
      .filter(
        (key) =>
          this.addOns[key as keyof typeof this.addOns] &&
          prices[key as keyof typeof prices]
      )
      .reduce(
        (total, key) => total + (prices[key as keyof typeof prices] || 0),
        0
      );
  }

  get totalPrice() {
    return this.planPrice + this.addOnPrices;
  }

  goBack() {
    this.subscriptionService.setAddOn('showAddsComponent', true);
    this.subscriptionService.setAddOn('showSummaryComponent', false);
    this.stepsService.setStep(3);
  }

  confirm() {
    this.showLastComponent = true;
  }
}
