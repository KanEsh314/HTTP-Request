import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetTypeProvider } from '../../providers/get-type/get-type';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers : [GetTypeProvider]
})
export class DetailPage {

	public detail : any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public getTypeCoach: GetTypeProvider) {
  	this.loadDetail();
  }

  loadDetail(){
  	this.getTypeCoach.load()
  	.then(data => {
  		this.detail = data;
  		console.log(data);
  	});
  }
}
