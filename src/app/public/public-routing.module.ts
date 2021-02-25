import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPlaygroundComponent } from './components/first-playground/first-playground.component';
import { MainComponent } from './components/main/main.component';
import { SecondPlaygroundComponent } from './components/second-playground/second-playground.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'first-playground',
    component: FirstPlaygroundComponent
  },
  {
    path: 'second-playground',
    component: SecondPlaygroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
