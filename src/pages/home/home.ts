import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetFitProvider } from '../../providers/get-fit/get-fit';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [GetFitProvider]
})
export class HomePage {

public category: any;

  constructor(public navCtrl: NavController , public getFitCategories : GetFitProvider) {
    this.loadCategories();
  }

  loadCategories(){
    this.getFitCategories.load()
    .then(data => {
      this.category = data;
      console.log(data);
    });
  }

  checkCoach(){
    this.navCtrl.push(MainPage);
  }
}
