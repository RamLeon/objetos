import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PersonaDatosComponent } from 'src/componentes/c01_persona/persona.component';
import { ContadorComponent } from 'src/componentes/c02_contador/contador.component';
import { C03PersonaListarComponent } from 'src/componentes/c03-ngform/ng_form.component';
import { C04ModuloModule } from 'src/componentes/c04_modulos/c04-modulo.module';
import { C05ModuloModule } from 'src/componentes/c05-modulo/c05-componentes.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonaDatosComponent,
    ContadorComponent,
    C03PersonaListarComponent
  ],
  imports: [
    BrowserModule,
    C04ModuloModule,
    C05ModuloModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
