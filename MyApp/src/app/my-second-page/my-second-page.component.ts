import { Component, OnInit } from '@angular/core';
import { MyApiService } from '../services/my-api.service';

@Component({
  selector: 'app-my-second-page',
  templateUrl: './my-second-page.component.html',
  styleUrls: ['./my-second-page.component.css']
})
export class MySecondPageComponent implements OnInit {
  apiValues: Array<string>;
  constructor(private myApiService$: MyApiService) {
  }

  ngOnInit() {
    this.myApiService$.getResults().subscribe(webResult => {
      this.apiValues = webResult;
    });
  }
}
