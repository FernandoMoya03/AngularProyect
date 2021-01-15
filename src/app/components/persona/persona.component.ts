import { Component, OnInit } from '@angular/core';
import {Persona} from '../../Models/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  //persona:persona[];
public persona = new Persona();
public nombre="LUIS FERNANDO";
public apellido="MARTINEZ MOYA";
public sexo="MASCULINO";
public edad=20;

  constructor( ) {

    this.persona.setEdad(this.edad);
    this.persona.setApellido(this.apellido);
    this.persona.setNombre(this.nombre);
    this.persona.setSexo(this.sexo);

   }
        ngOnInit(): void {
  }
}
