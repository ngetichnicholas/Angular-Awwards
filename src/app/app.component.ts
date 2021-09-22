import { Component } from '@angular/core';

import { ApiService } from './services/api.service';
import { Projects } from './classess/projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Awwards';
  listprojects:Projects[];

  constructor(private apiService:ApiService) {

  }
  ngOnInit() {
    this.apiService.getprojects()
    .subscribe
    (
      data=>
      {
         this.listprojects = data;
      }

    );
  }
}
