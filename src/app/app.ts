import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './shared/components/encabezado/encabezado';
import { Menu } from './shared/components/menu/menu';
import { Pie } from './shared/components/pie/pie';
import { ListadoSocios } from './socio/components/socio/listado-socios/listado-socios';
import { ReporteMensualidades } from './socio/components/reporte-mensualidades/reporte-mensualidades';
import { Calculadora } from './practica/components/practica1/calculadora/calculadora';
import { Edades } from './practica/components/practica2/edades/edades';
import { Frutas } from './practica/components/practica3/frutas/frutas';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Encabezado, Menu, Pie, ListadoSocios, ReporteMensualidades, Calculadora, Edades, Frutas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'prueba3';
}