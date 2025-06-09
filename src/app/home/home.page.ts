import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ToastController} from '@ionic/angular';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  weatherTemp: any;
  todayDate = new Date();
  cityName = "";
  weatherIcon: any;
  weatherDetails: any;
  name = "";
  loading = true;

  constructor(
    public httpClient: HttpClient,
    private toastController: ToastController
  ) {
  }

  loadData() {
    this.httpClient.get<any>(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`).subscribe(results => {
      this.weatherTemp = results['main'];
      this.name = results['name'];
      this.weatherDetails = results['weather'][0];
      this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`;
      this.loading = false;
    }, error => {



      this.toastController.create({
        message: 'Failed to load data. Check the city name.',
        duration: 2000,
        color: 'danger'
      }).then(toast => toast.present());
    });
  }
}
