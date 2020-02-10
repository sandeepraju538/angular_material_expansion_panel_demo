import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardService } from './services/card.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardComponent
      ],
      imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        FlexLayoutModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('ngOnInit should call cardService getJobs', inject([CardService], (cardService: CardService) => {
  //   spyOn(cardService, 'getJobs').and.callThrough();
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   app.ngOnInit();
  //   expect(cardService.getJobs).toHaveBeenCalled();
  // }));

  it('ngOnInit should call cardService getJobsFilters', inject([CardService], (cardService: CardService) => {
    spyOn(cardService, 'getJobsFilters').and.callThrough();
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(cardService.getJobsFilters).toHaveBeenCalled();
  }));
});
