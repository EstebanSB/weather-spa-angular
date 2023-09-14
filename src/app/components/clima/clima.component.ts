import { Component } from '@angular/core'; 
import { ClimaService } from '../../services/clima.service';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent {
  ciudadForm: FormGroup;
  clima: any;
  iconoURL: string = ''; // Cambiado el valor inicial a una cadena vacía
  errorMensaje: string = ''; // Cambiado el valor inicial a una cadena vacía

  constructor(private climaService: ClimaService) {
    this.ciudadForm = new FormGroup({
      ciudad: new FormControl('')
    });
  }
  
  obtenerFechaHora(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString(); // Puedes ajustar el formato de fecha y hora según tus necesidades
  }

  buscarClima() {
    const ciudad = this.ciudadForm?.get('ciudad')?.value;
    if (ciudad) {
      this.climaService.obtenerClima(ciudad)
        .subscribe(
          data => {
            this.clima = data;
            this.iconoURL = `https://openweathermap.org/img/w/${this.clima.weather[0].icon}.png`;
            this.errorMensaje = ''; // Cambiado el valor a una cadena vacía en caso de éxito
          },
          error => {
            this.clima = null; // Restablecer los datos del clima
            this.iconoURL = ''; // Cambiado el valor a una cadena vacía en caso de error
            this.errorMensaje = 'La ciudad no existe o verifica si está correctamente escrita.';
            console.error(error);
          }
        );
    }
  }  
}
