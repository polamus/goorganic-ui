

import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Component({
  selector: 'goorganic',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title: string;
 hello: string;
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient.get('/api/status').subscribe(data => {
      this.title = data.data;
    });
  }

}