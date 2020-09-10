import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../clases/Alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {


  
  listaAlumnos : Alumno[] = [];
  caso;
  constructor() { }

  ngOnInit(): void {
  }

  nav(numero : number ){        
    this.caso=numero;
   
  }

  onCargar(alumno){
    this.listaAlumnos.push(alumno);
    console.log(this.listaAlumnos);
  }

  

}

export class SidenavAutosizeExample {
  showFiller = false;
}

