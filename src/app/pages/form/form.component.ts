import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(private router: Router) {}

  navigateToSubscription() {
    this.router.navigate(['/subscription']);
  }
}
