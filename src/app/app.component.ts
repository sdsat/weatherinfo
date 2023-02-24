import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public weatherService:WeatherService){}

  WeatherData!: WeatherData;
  cityName: string='lucknow';
  public weather={
    temp:18,
    temp_min:16,
    temp_max:19,
    humidity:76,
    wind:11

 }
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  onSubmit(){
     this.getWeatherData(this.cityName);
     this.cityName='';
  }

  public getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next:(response)=>{
        this.WeatherData=response;
        console.log(response);
      }
    }); 
  }

   
}
