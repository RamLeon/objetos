import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c03-persona-listar',
  // Ojo no se puede utilizar gion medio "-"
  //templateUrl: './ng-form.component.html',
  templateUrl: './ng_form.component.html',
  //styleUrls: ['./ng_form.component.css']
})
export class C03PersonaListarComponent {

    booleanA: boolean = true;
  booleanB: boolean = true;
  selectedValue: string= 'Two';  //ngSwitch  

     //Creamos un Arreglo de Personas, con 4 personas posición de 0 a 3
  public lPersonas:String[] =["Harrys","Marilaf","Pedreros","Cordova"] 

    // Creamos el Arreglo de los Eliminados
  public lPersonasEliminados:String[]=[]
  
  
  // Método que elimina el primer registro del arreglo
  borrarPrimerPersona(){
    // shift devuelve string o undefined, por eso colocamos || ''
    // si es undefined coloque ==> ''
    const borrado = this.lPersonas.shift() || ''
    // push agrega al final del registro
    this.lPersonasEliminados.push(borrado);
  }

  lPersonasPais: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];


}