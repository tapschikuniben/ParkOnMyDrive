import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebLayoutComponent } from 'src/app/layouts/web-layout/web-layout/web-layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
const WebsiteRoutes: Routes = [

    {
        path: '', component: WebLayoutComponent, children: [
            {
                path: '', component: LandingPageComponent
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
