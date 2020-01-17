import { TestBed, inject } from '@angular/core/testing';

import { CardService } from './card.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('CardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      BrowserModule,
      CommonModule,
      BrowserAnimationsModule,
      MaterialModule,
      HttpClientModule,
      FlexLayoutModule
    ]
  }));

  it('should be created', () => {
    const service: CardService = TestBed.get(CardService);
    expect(service).toBeTruthy();
  });

  it('cardService _URL should have expected', inject([CardService], (cardService: CardService) => {
    expect(cardService._URL).toBe('./assets/data/jobs.json');
  }));

  it('cardService getJobs should call httpClient get', inject([CardService, HttpClient],
    (cardService: CardService, httpClient: HttpClient) => {
    spyOn(httpClient, 'get').and.callThrough();
    cardService.getJobs();
    expect(httpClient.get).toHaveBeenCalled();
  }));
});
