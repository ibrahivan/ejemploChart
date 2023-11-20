import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { Elecciones } from '../modelos/elecciones';
import { DatabaseService } from '../servicios/database.service';

@Component({
  selector: 'app-elecciones',
  templateUrl: './elecciones.component.html',
  styleUrls: ['./elecciones.component.css']
})
export class EleccionesComponent {

  chart:any;

  constructor(private dbs:DatabaseService){}

  ngOnInit(){
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("myChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['PSOE', 'PP', 'SUMAR','CATALINES',
								 'PMV', 'BLOS', 'UPD','IHU', ], 
	       datasets: [
          {
            label: "Escaños",
            data: ['112','142', '23', '15', '82',
								 '4', '56', '2'],
            backgroundColor: [
              'red','blue','orange','pink','lightblue','green','darkred','yellow'
            ]
          },
          
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  creaFirebase() {
    let juegoDatos:Elecciones;
    juegoDatos = {
      type: 'Pipe',
      labels:['Amarillos','Rojos','Azules','verdes'],
      label:"Escaños",
      data:['34','56','32','31'],
      backgroundColor:['yellow','red','blue','green']
    }
    this.dbs.newDocument(juegoDatos,'elecciones')
    .then(()=>console.log('DOCUMENTO CREADO'))
    .catch(error =>console.log(error));
    }
}
