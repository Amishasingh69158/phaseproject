import { TestBed } from '@angular/core/testing';

import { AppcitizenService } from './appcitizen.service';

describe('AppcitizenService', () => {
  let service: AppcitizenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppcitizenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
