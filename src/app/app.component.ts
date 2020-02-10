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
    this.cardService.getJobsFilters().subscribe((response) => {
      this.jobs = response;
    });
  }

  isActive(job) {
    return job.state === 'active';
  }

  private getJobs() {
    this.cardService.getJobs().subscribe(response  => {
      this.cardService.getJobsFilters();
    }, error  => {
    });
  }

  public getSelectedJob(selectedJob) {
    this.selectedJob = selectedJob;
  }
}
