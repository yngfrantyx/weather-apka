import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  imports: [
    IonicModule,
    RouterLink
  ]
})
export class LandingPage implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    console.log('LandingPage loaded');
  }

}
