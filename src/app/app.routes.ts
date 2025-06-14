import { Routes } from '@angular/router';
import { ListadoSocios } from './socio/components/socio/listado-socios/listado-socios';
import { ReporteMensualidades } from './socio/components/reporte-mensualidades/reporte-mensualidades';
import { Calculadora } from './practica/components/practica1/calculadora/calculadora';
import { Edades } from './practica/components/practica2/edades/edades';
import { Frutas } from './practica/components/practica3/frutas/frutas';

export const routes: Routes = [
  {path: '', component: ListadoSocios},
  {path: 'socio', component: ListadoSocios},
  {path: 'reportemensualidades', component: ReporteMensualidades},
  {path: 'calculadora', component: Calculadora},
  {path: 'edades', component: Edades},
  {path: 'frutas', component: Frutas},
  {path: '**', redirectTo: ''}
];

//indica las rutas de navegación