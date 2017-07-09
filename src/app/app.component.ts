import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Screenshot } from './models/screenshot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spaceScreens: Screenshot[];
  url: string;

  constructor(private http: Http) {
    this.url = 'http://ng4pgmaterials.pro/angular_api';
    this.http.get(`${this.url}/getScreenShots`)
      .map((response: Response) => response.json().data.screenshots)
      .subscribe((response: Screenshot[]) => {
        this.spaceScreens = response;
        console.log(response);
      });
  }

  likeMe(i) {
    if (this.spaceScreens[i].liked === 0) {
      this.spaceScreens[i].liked = 1;
    } else {
      this.spaceScreens[i].liked = 0;
    }
  }

  deleteMe(i) {
    this.spaceScreens.splice(i, 1);
    console.log(i);
  }
}
