import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherServices: WeatherService){

  }

  ngOnInit(){
    this.weatherServices.getWeather('Curitiba')
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )


  }


}
