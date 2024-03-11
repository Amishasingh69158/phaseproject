import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueAadharComponent } from './issue-aadhar.component';

describe('IssueAadharComponent', () => {
  let component: IssueAadharComponent;
  let fixture: ComponentFixture<IssueAadharComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueAadharComponent]
    });
    fixture = TestBed.createComponent(IssueAadharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
