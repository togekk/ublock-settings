import { Component, Injectable, ViewContainerRef } from '@angular/core';
import { Headers, Http } from '@angular/http'
import { Observable }     from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: any
  items: any
  row: any

  constructor(private http: Http) {}
  ngOnInit() {
    this.http.get('assets/my-ublock-backup.txt')
            .subscribe(res => {
              this.list = res.json().dynamicFilteringString.split("\n")
            })
  }
}
