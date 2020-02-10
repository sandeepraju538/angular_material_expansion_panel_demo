import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
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

  getJobsFilters() {
    return this.getJobs().pipe(map(data => data.body.filter((job: Job) => job.state === 'active')));
  }
}
