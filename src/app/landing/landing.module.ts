import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';
import { LandingPage } from './landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageRoutingModule,
    LandingPage
  ],
  declarations: []
})
export class LandingPageModule {}
