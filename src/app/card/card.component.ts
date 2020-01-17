import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() job: Job;
  constructor() { }

  ngOnInit() {
  }

}
