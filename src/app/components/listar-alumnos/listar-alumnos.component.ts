import { Component, OnInit, Input } from '@angular/core';
import { Alumno } from '../../clases/Alumno';


@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {

  @Input() listaAlumnos : Alumno[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
