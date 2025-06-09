import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ToastController} from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  loadData(cityName: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.API_URL}/weather?q=${cityName}&appid=${environment.API_KEY}`);
  }
}
