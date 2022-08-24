import { Injectable } from "@angular/core";
import { iPersona } from "../c04_modulos/Interfaces/iPersona";
// Incorporamos la interface


// Decorador Injectable
@Injectable()
export class PersonaServices{
    //  Colo lo utilizamos para que usted se de cuenta que:
    //  Solo Cuando se invoca (Injecta) por primera vez se carga
    constructor(){
        console.log("Servicio Inicializado ***************************")
    }

    // Al poner private no puedo ver desde los demas
    // Iniciamos el arreglo con dos registros, solo para listar la primera vez
    private _lPersonas_SS:iPersona[]=[
        {nombres:"Carlos Ramon",apPaterno:"Vega",apMaterno:"Osorio",edad:109,run:90}
                        ,{nombres:"Pedro",apMaterno:"Pereira",edad:209,apPaterno:"Pinto",run:10}
    ]


    // Retorna los datos de _lPersonas_SS
    get getPersonas():iPersona[]{
        // Cuidado que javaScript manda los datos por referencia
        // por lo cual el cliente puede realizar cambios
        //     return this._lPersonas_SS;  // <==  Referencia

        // Al coloca 3 puntos
        //     Esto rompre la referencia, envia un objeto nuevo
        return [...this._lPersonas_SS];
        //return this._lPersonas_SS; // ==> Por referencia
    }
    
    
    
    // Recive  un registro del tipo iPersona
    // Agregar una persona al arreglo _lPersonas_SS
    addPersona(persona:iPersona){
        // Agrega al arreglo
        this._lPersonas_SS.push(persona)
        // Solo Imprime el contenido del arreglo, 
        // con el fin de visualizar que no se ha perdido ni uno        
       for (var i = 0; i < this._lPersonas_SS.length; i++) {
            console.log("Persona Arr",this._lPersonas_SS[i])
        }
    }
}