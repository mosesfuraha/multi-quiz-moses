import { Component } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.css'],
})
export class AddsComponent {
  constructor(private subscriptionService: SubscriptionService) {}

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
  }

  toggleAddOn(addOn: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.subscriptionService.setAddOn(addOn, isChecked);
  }
}
