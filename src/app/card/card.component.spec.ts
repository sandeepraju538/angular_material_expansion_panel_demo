import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        FlexLayoutModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show Job Description', () => {
    // stub data
    const job = {
      id: '98969442',
      title: '90 m� Dach neu eindecken, Material ben�tigt',
      zip_code: '10115',
      city: 'Berlin',
      thumbnail: '//placekitten.com/150/150',
      attachments: [
        '//placekitten.com/300/200',
        '//placekitten.com/200/400',
        '//placekitten.com/250/250'
      ],
      counter: {
        messages_total: 4,
        messages_unread: 1
      },
      is_awarded: false,
      categories: [
        {
          id: '41'
        },
        {
          id: '58'
        }
      ],
      state: 'active',
      description: 'Eum accusata erroribus ei.',
      end_date: '2018-10-31T14:14:32+01:00',
      created_at: '2018-10-01T14:14:32+02:00'
    };
    component.job = job;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.job-description').innerText).toEqual(job.description);
  });
});
