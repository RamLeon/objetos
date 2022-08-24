import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main.component';
import { MiCompInputComponent } from './mi-comp-input/mi-comp-input.component';
import { MiCompOutputComponent } from './mi-comp-output/mi-comp-output.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    // Como siempre declaramos nuestro componente
    MainPageComponent,
    MiCompInputComponent,
    MiCompOutputComponent 
  ],
  exports:[
    // Lo Agregamos en el export, 
    //      ya que lo utilizaremos en la página principal, 
    //      fuera del módulo
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class C04ModuloModule { }