import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebLayoutRoutingModule } from './web-layout.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WebLayoutComponent } from './web-layout/web-layout.component';
import { WebsiteModule } from 'src/app/views/website/website.module';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    WebLayoutComponent,
  ],
  imports: [
    CommonModule,
    WebLayoutRoutingModule,
    BrowserModule,
    FormsModule,
    WebsiteModule,

    MatToolbarModule,
  ]
})
export class WebLayoutModule { }
