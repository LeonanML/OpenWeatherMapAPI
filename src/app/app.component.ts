import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather;

  constructor(private weatherServices: WeatherService){

  }

  ngOnInit(){
    
  }

  getWeather(city: string){
    this.weatherServices.getWeather(city)
    .subscribe(
      res => {
        console.log(res);
        this.weather = res},
      err => console.log(err)
    )
  }

  submitLocation(city: HTMLInputElement){


    this.getWeather(city.value);

    city.value = "";
    city.focus();

    return false;
  }


}
