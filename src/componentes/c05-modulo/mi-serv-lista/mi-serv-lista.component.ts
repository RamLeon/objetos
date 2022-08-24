import { Component, OnInit } from '@angular/core';
import { iPersona } from 'src/componentes/c04_modulos/Interfaces/iPersona';
import { PersonaServices } from '../persona.servicio';
@Component({
  selector: 'app-serv-lista',
  templateUrl: './mi-serv-lista.component.html'
})
export class MiServListComponent {
   // Nos permite injectar el Servicio de Personas
  // Queda como Público
  // Recordar realizar el import
  constructor(public ramon:PersonaServices) { }

  // Lo Utilizamos como puente, para que lo utilice el HTML
  // Retorna los registros desde el servicio
  get listaPersonas():iPersona[]{
    return this.ramon.getPersonas;
  }
}  