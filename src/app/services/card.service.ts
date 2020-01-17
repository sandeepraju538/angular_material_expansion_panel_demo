import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  _URL = './assets/data/jobs.json';

  constructor(private  httpClient: HttpClient) { }

  getJobs(): Observable<any> {
    return this.httpClient.get(this._URL);
  }
}
