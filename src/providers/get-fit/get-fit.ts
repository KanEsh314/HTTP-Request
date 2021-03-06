import { Injectable } from '@angular/core';
import { Http , RequestOptions , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GetFitProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GetFitProvider {

data : any;

  constructor(public http: Http) {
    console.log('Hello GetFitProvider Provider');
  }

  load(){
  	if (this.data) {
  		//already loaded data
  		return Promise.resolve(this.data);
  	}

    let opt : RequestOptions;
    let myHeaders: Headers = new Headers

    myHeaders.set('Accept','application/json; charset-utf-8');
    myHeaders.append('Content-type','application/json; charset-utf-8');
    opt = new RequestOptions({
      headers: myHeaders
    })

  	return new Promise(resolve =>{
  	this.http.get('https://mysterious-beach-83937.herokuapp.com/categories' , opt)
  	.map(res => res.json())
  	.subscribe(data =>{
  		this.data = data;
  		resolve(this.data);
  	});
  });
  }
}

