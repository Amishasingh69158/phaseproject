import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizendashboardComponent } from './citizendashboard.component';

describe('CitizendashboardComponent', () => {
  let component: CitizendashboardComponent;
  let fixture: ComponentFixture<CitizendashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitizendashboardComponent]
    });
    fixture = TestBed.createComponent(CitizendashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
