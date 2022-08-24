import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiServAddComponent } from './mi-serv-add/mi-serv-add.component';
import { MiServListComponent } from './mi-serv-lista/mi-serv-lista.component';
import { PersonaServices } from './persona.servicio';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    // Como siempre declaramos nuestro componente
    MiServListComponent,
    MiServAddComponent 
  ],
  exports:[
    // Lo Agregamos en el export, 
    //      ya que lo utilizaremos en la página principal, 
    //      fuera del módulos
    MiServListComponent,
    MiServAddComponent 
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [PersonaServices],
})
export class C05ModuloModule { }