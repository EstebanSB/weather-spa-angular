import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  apiKey = 'e98775a7e8b854639cf9d78d85b85774'; // clave API de OpenWeatherMap
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  obtenerClima(ciudad: string) {
    const url = `${this.apiUrl}?q=${ciudad}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).pipe(
      catchError((error) => {
        if (error.status === 404) {
          // La ciudad no fue encontrada, puedes personalizar el mensaje de error si lo deseas
          return throwError('Ciudad no encontrada. Verifica el nombre e intenta nuevamente.');
        } else {
          // Otro tipo de error, puedes personalizar el mensaje de error si lo deseas
          return throwError('Error al obtener el clima. Inténtalo de nuevo más tarde.');
        }
      })
    );
  }
}
