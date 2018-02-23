import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceRequestComponent } from './service-request/service-request.component';
import { ServiceRequestDetailsComponent } from './service-request-details/service-request-details.component';
import { ServiceRequestFormComponent } from './service-request-form/service-request-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServiceRequestComponent, ServiceRequestDetailsComponent, ServiceRequestFormComponent]
})
export class CarServiceModule { }
