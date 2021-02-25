import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { FirstPlaygroundComponent } from './components/first-playground/first-playground.component';
import { SecondPlaygroundComponent } from './components/second-playground/second-playground.component';
import { MaterialModule } from './components/shared/material.module';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [FirstPlaygroundComponent, SecondPlaygroundComponent, MainComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule
  ]
})
export class PublicModule { }
