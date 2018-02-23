import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CarServiceModule } from '../car-service/car-service.module';
import { ServiceRequestComponent } from '../car-service/service-request/service-request.component';
import { ServiceRequestDetailsComponent } from '../car-service/service-request-details/service-request-details.component';
import { ServiceRequestFormComponent } from '../car-service/service-request-form/service-request-form.component';
import { HomeComponent } from '../home/home.component';


const appRoutes: Routes = [
  { path: 'CreateServiceRequest', component: ServiceRequestFormComponent },
  { path: 'ViewServiceRequests', component: ServiceRequestComponent },
  { path: 'ViewServiceRequestDetails', component: ServiceRequestDetailsComponent },
  { path: 'Home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [
    ServiceRequestComponent,
    ServiceRequestDetailsComponent,
    ServiceRequestFormComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
