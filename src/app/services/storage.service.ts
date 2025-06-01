import {Injectable} from '@angular/core';
import {Preferences} from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  async saveCity(city: string): Promise<void> {
    await Preferences.set({
      key: 'favoriteCity',
      value: city,
    });
  }

  async loadCity(): Promise<string | null> {
    const {value} = await Preferences.get({key: 'favoriteCity'});
    return value;
  }

  async deleteCity(): Promise<void> {
    await Preferences.remove({key: 'favoriteCity'});
  }
}
