import {Component} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {ToastController} from '@ionic/angular';

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
    private weatherService: WeatherService,
    private toastController: ToastController
  ) {
  }

  loadData() {
    this.loading = true;
    this.weatherService.loadData(this.cityName).subscribe(results => {
      this.weatherTemp = results['main'];
      this.name = results['name'];
      this.weatherDetails = results['weather'][0];
      this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`;
      this.loading = false;
    }, error => {
      this.loading = false;
      this.toastController.create({
        message: 'Failed to load data. Check the city name.',
        duration: 2000,
        color: 'danger'
      }).then(toast => toast.present());
    });
  }
}
