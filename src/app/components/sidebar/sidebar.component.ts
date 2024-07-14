import { Component, OnInit } from '@angular/core';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  currentStep = 1;
  steps = [
    { title: 'Your info' },
    { title: 'Select plan' },
    { title: 'Add-ons' },
    { title: 'Summary' },
  ];

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.stepsService.currentStep$.subscribe((step: number) => {
      this.currentStep = step;
    });
  }

  isActiveStep(step: number): boolean {
    return this.currentStep === step;
  }
}
