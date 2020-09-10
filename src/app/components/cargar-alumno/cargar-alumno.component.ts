import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Alumno } from './../../clases/Alumno';


@Component({
  selector: 'app-cargar-alumno',
  templateUrl: './cargar-alumno.component.html',
  styleUrls: ['./cargar-alumno.component.css']
})
export class CargarAlumnoComponent implements OnInit {

  @Output()onCargar = new EventEmitter<Alumno>();
  legajo;
  nombre;
  apellido;
  materia;




  constructor() { }

  ngOnInit(): void {
  }

  
  cargar():void {
    const alumno  = new Alumno(this.nombre, this.apellido, this.legajo, this.materia);
    console.log(alumno)
    this.onCargar.emit(alumno);
    
    
  }
}
