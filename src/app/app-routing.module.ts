import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { AddsComponent } from './pages/adds/adds.component';
import { SummaryComponent } from './summary/summary.component';
import { LastComponent } from './pages/last/last.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'add-ons', component: AddsComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'last', component: LastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
