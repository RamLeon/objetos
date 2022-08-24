import { Component, OnInit } from '@angular/core';
import { iPersona } from 'src/componentes/c04_modulos/Interfaces/iPersona';
import { PersonaServices } from '../persona.servicio';
@Component({
  selector: 'app-serv-add',
  templateUrl: './mi-serv-add.component.html',
})
export class MiServAddComponent {
   // Creamos una variable, la cual nos permita vincularla, con los campos del HTML
  // Utilizamos iPersona, recordar Importar el archivo de la interface
  persona_serv:iPersona= {
    run:1,
    nombres:"Juan Servicio",
    apPaterno:"Service Harrys",
    apMaterno:"Materno Harrys",
    edad:100,
  }

  // Injectamos el servicio  Personas
  // Recordar importar el archivo del servicio
  constructor(public servPersonas:PersonaServices) { }

  // Método que permite enviar los datos al servicio
  agregarSinEvento(){
    // Solo una validación cualquiera
    if ( this.persona_serv.nombres.trim().length === 0 ) { return; }
    console.log("Persona Service",this.persona_serv)

    // Envia los datos al servicio
    this.servPersonas.addPersona(this.persona_serv)
    
    // Inicializo para que no quede como referencia
    this.persona_serv= {
      run:0,
      nombres:"",
      apPaterno:"",
      apMaterno:"",
      edad:0,
    }
  }
}  