import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 apiStatus: string;
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient.get('localhost:3000/api/status').subscribe(data => {
      this.apiStatus = 'satish'
    });
  }

}