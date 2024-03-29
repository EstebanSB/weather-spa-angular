import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimaComponent } from './components/clima/clima.component';

const routes: Routes = [
  { path: '', component: ClimaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
