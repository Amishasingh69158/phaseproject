import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAadharcardComponent } from './new-aadharcard.component';

describe('NewAadharcardComponent', () => {
  let component: NewAadharcardComponent;
  let fixture: ComponentFixture<NewAadharcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAadharcardComponent]
    });
    fixture = TestBed.createComponent(NewAadharcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
