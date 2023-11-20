import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'ventas', loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule) }, { path: 'elecciones', loadChildren: () => import('./elecciones/elecciones.module').then(m => m.EleccionesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
