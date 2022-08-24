import { Component } from "@angular/core";

@Component({
    selector:'app-persona',
    templateUrl:'./persona.component.html'
})

export class PersonaDatosComponent {

     // desde aquí
     run :number=1;
     nombres:String="Ramon";
     apPaterno:String="Leon"
     apMaterno:String="El Magnifico"
     title = 'Proyecto Persona';    
    // Hasta Acá  
    
    obtenerNombre():String{
        var palabra:String =   `${this.nombres} - ${this.apPaterno} - ${this.apMaterno}`
        return palabra.toUpperCase()
    }

    // Getter an Setter
    // No Amite ningún parámetro 
    get getCompleto():String{
        return `${this.nombres} - ${this.apPaterno} - ${this.apMaterno}`
    }
    
    // Solo admite un parámetro
    set setNombres(val:String){
        this.nombres= val
    }

    // Método utilizado en el HTML
    ponerHarrisita():void{
        this.nombres=" Harrisita  de las Mercedes";
    }
    
    // Método utilizado en el HTML
    ponerHarrisito():void{
        //this.nombres=" Carlos Mario";
        // Podemos utilizar el Setter, se utiliza con asignación
        this.setNombres = " Carlos Mario"
    }

}