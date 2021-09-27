import { Component } from '@angular/core';

import { ApiService } from './services/api.service';
import { Heroes } from './classess/heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heroes';
  listheros:Heroes[];

  constructor(private apiService:ApiService) {

  }
  ngOnInit() {
    this.apiService.getprojects()
    .subscribe
    (
      data=>
      {
         this.listheros = data;
      }

    );
  }
}
