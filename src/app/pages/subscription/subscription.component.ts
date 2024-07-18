import { Component, ChangeDetectorRef } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent {
  constructor(
    private subscriptionService: SubscriptionService,
    private stepsService: StepsService,
    private cd: ChangeDetectorRef
  ) {}

  get isYearly() {
    return this.subscriptionService.getIsYearly();
  }

  get selectedPlan() {
    return this.subscriptionService.getSelectedPlan();
  }

  get showAddsComponent() {
    return this.subscriptionService.getShowAddsComponent();
  }

  get showFormComponent() {
    return this.subscriptionService.getShowFormComponent();
  }

  toggleBilling() {
    this.subscriptionService.setIsYearly(!this.isYearly);
  }

  selectPlan(plan: string) {
    this.subscriptionService.setSelectedPlan(plan);
  }

  nextStep() {
    this.subscriptionService.setShowAddsComponent(true);
    this.subscriptionService.setShowFormComponent(false); // Ensure form component is hidden
    this.stepsService.setStep(3);
    this.cd.detectChanges();
  }

  previousStep() {
    this.subscriptionService.setShowFormComponent(true);
    this.subscriptionService.setShowAddsComponent(false); // Ensure add component is hidden
    this.stepsService.setStep(1);
    this.cd.detectChanges();
  }
}
