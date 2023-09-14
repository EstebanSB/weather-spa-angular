import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClimaComponent } from './components/clima/clima.component';
import { ClimaService } from './services/clima.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Agrega esta línea para importar FormsModule
    HttpClientModule, BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ClimaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
