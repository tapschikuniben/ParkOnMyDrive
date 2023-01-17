import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WebsiteRoutingModule } from './website.routing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MapPageComponent } from './map-page/map-page.component';
import { MatCardModule } from '@angular/material/card';
import { MapPageDetailComponent } from './map-page-detail/map-page-detail.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    LandingPageComponent,
    MapPageComponent,
    MapPageDetailComponent,
    ReservationPageComponent,
    PaymentPageComponent,
    VehiclePageComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    MatCardModule,
    NgbCarouselModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  // providers: [],
})
export class WebsiteModule { }
