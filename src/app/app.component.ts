import { Component, OnInit } from '@angular/core';
import { Job } from './models/card.model';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Angular Front-End Demo';
  jobs: Job[];
  selectedJob: Job;
  panelOpenState = false;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.getJobs();
  }

  isActive(job) {
    return job.state === 'active';
  }

  private getJobs() {
    this.cardService.getJobs().subscribe(response  => {
      console.log('GET Request JSON is successful ', response);
      // this.jobs = response.body;
      // filtering jobs on basis of state active
      this.jobs = response.body.filter((data) => data.state === 'active');
    }, error  => {
      console.log('Error', error);
    });
  }

  public getSelectedJob(event, selectedJob) {
    // console.log('***********event: ', event, '*********** selectedjob: ', selectedJob);
    this.selectedJob = selectedJob;
    this.panelOpenState = true;
  }
}
