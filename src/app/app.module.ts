import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { AddsComponent } from './pages/adds/adds.component';
import { ResubalbuttonComponent } from './components/resubalbutton/resubalbutton.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FormComponent, SidebarComponent, SubscriptionComponent, AddsComponent, ResubalbuttonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
