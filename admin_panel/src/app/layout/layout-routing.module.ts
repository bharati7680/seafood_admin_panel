import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {  
    path: '', 
    component: LayoutComponent,
    children: [
      { path: 'country', loadChildren: () => import('../country/country.module').then(m => m.CountryModule)},
      { path: 'city', loadChildren: () => import('../city/city.module').then(m => m.CityModule)}

    ]
  },
    // { path: '', redirectTo: 'authentication/admin-login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
