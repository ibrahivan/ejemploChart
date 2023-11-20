import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EleccionesRoutingModule } from './elecciones-routing.module';
import { EleccionesComponent } from './elecciones.component';


@NgModule({
  declarations: [
    EleccionesComponent
  ],
  imports: [
    CommonModule,
    EleccionesRoutingModule
  ]
})
export class EleccionesModule { }
