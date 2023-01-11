import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebLayoutComponent } from 'src/app/layouts/web-layout/web-layout/web-layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MapPageDetailComponent } from './map-page-detail/map-page-detail.component';
import { MapPageComponent } from './map-page/map-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';
const WebsiteRoutes: Routes = [

    {
        path: '', component: WebLayoutComponent, children: [
            {
                path: '', component: LandingPageComponent
            },
            {
                path: 'map', component: MapPageComponent
            },
            {
                path: 'more-detail', component: MapPageDetailComponent
            },
            {
                path: 'payment', component: PaymentPageComponent
            },
            {
                path: 'vehicle', component: VehiclePageComponent
            },
            {
                path: 'reservation', component: ReservationPageComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(WebsiteRoutes),
    ],
    exports: [RouterModule]
})
export class WebsiteRoutingModule { }
