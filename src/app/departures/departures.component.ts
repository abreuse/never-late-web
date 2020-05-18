import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from '../toaster/toaster.service';

interface Departure {
  direction: string;
  line: string;
  departure: string;
}

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.less']
})
export class DeparturesComponent implements OnInit {

  trainStation: string;
  departures: Array<Departure>;

  constructor(private http: HttpClient, private toasterService: ToasterService) {}

  ngOnInit(): void {
    this.trainStation = '87381137';
  }

  public getDeparturesResponse() {
    return this.http.get<Departure[]>('http://localhost:8080/departures/' + this.trainStation)
      .pipe()
      .subscribe(response => this.departures = response,
        error => this.toasterService.toastErrorMessage(error.status));
  }
}
