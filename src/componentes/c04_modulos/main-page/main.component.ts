import { Component, OnInit } from '@angular/core';
import { iPersona } from '../Interfaces/iPersona';

@Component({
  selector: 'app-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainPageComponent {

  persona_n1:iPersona = {
    run:0,
    nombres:"",
    apPaterno:"",
    apMaterno:"",
    edad:0,

  }

  // Creamos un Arreglo con Estructura
  //      estructura se la damos con las llaves, y los nombres de los campos
  lPersonas:iPersona[]=[{nombres:"Carlos",apPaterno:"Vega",apMaterno:"Osorio",edad:109,run:90}
                        ,{nombres:"Pedro",apMaterno:"Pereira",edad:209,apPaterno:"Pinto",run:10}]
                        agregarNgModel(){
                          this.lPersonas.push(this.persona_n1)
                          // Reinicializamos this.persona_n1
                          // De lo contrario causará error por Referencia
                      
                          this.persona_n1 = {
                            run:0,
                            nombres:"",
                            apPaterno:"",
                            apMaterno:"",
                            edad:0,
                        
                          }
                        }
                        // Método que se ejecutará cuando reciba el evento
  agregarPersonaOutput(persona_output:iPersona){
    console.log("Agregando Output",persona_output)
    // Agrega al Arreglo
    this.lPersonas.push(persona_output)
    // Reinicializamos this.persona_n1
    // De lo contrario causará error por Referencia
    this.persona_n1 = {
      run:0,
      nombres:"",
      apPaterno:"",
      apMaterno:"",
      edad:0,
  
  }
}
}