import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetTypeProvider } from '../../providers/get-type/get-type';
import { DetailPage } from '../detail/detail';
/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
  providers : [GetTypeProvider]
})
export class MainPage {

	public coach : any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public getTypeCoach: GetTypeProvider) {
  	this.loadCoach();
  }

  loadCoach(){
  	this.getTypeCoach.load()
  	.then(data => {
  		this.coach = data;
  		console.log(data);
  	});
  }

  checkDetail(){
    this.navCtrl.push(DetailPage);
  }

}
