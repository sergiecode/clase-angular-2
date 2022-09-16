import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcordeonComponent } from 'src/app/components/acordeon/acordeon.component';
import { AcordeonesRoutingModule } from './acordeones.routing.module';


@NgModule({
  declarations: [
    AcordeonComponent
  ],
  imports: [
    CommonModule,
    AcordeonesRoutingModule
    //enrutador,
  ]
})
export class AcordeonesModule { }
