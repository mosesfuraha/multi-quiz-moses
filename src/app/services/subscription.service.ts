import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private isYearly: boolean = false;
  private selectedPlan: string = 'Arcade';
  private addOns: { [key: string]: boolean } = {
    showAddsComponent: false,
    showSummaryComponent: false,
    showLastComponent: false,
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  };

  getIsYearly() {
    return this.isYearly;
  }

  setIsYearly(value: boolean) {
    this.isYearly = value;
  }

  getSelectedPlan() {
    return this.selectedPlan;
  }

  setSelectedPlan(plan: string) {
    this.selectedPlan = plan;
  }

  getAddOns() {
    return this.addOns;
  }

  setAddOn(addOn: string, value: boolean) {
    this.addOns[addOn] = value;
    console.log(`${addOn} set to ${value}`);
  }

  setShowAddsComponent(value: boolean) {
    this.addOns['showAddsComponent'] = value;
  }

  getShowAddsComponent() {
    return this.addOns['showAddsComponent'];
  }
}
