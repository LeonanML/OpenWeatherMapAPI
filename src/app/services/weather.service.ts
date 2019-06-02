import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  apiKey = '76d1b43ba3695cfae59aa9f7dc9b4877';
  URI: string = '';

  constructor(private http : HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather/?appid=${this.apiKey}&units=metric&q=`  

  }

  getWeather(cityName: string){
    return this.http.get(`${this.URI}${cityName}`);
  }

}
