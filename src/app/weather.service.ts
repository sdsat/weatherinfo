import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from './models/weather.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  cityName:string='lucknow';
  url='https://open-weather13.p.rapidapi.com/city/'
  constructor( private http: HttpClient) { }
    getWeatherData(cityName:string): Observable<WeatherData>{
      return this.http.get<WeatherData>((this.url.concat(cityName)),{
        headers:new HttpHeaders()
        .set(environment.xRapidAPIHeaderName,environment.xRapidApiHeadervalue)
        .set(environment.XRapidApiKeyHeadername,environment.XRapidApiKeyHeaderValue),
        params: new HttpParams()
        .set('city',cityName)
      })
      
    }
  }
