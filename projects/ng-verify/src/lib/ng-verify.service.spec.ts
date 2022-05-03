import { TestBed } from '@angular/core/testing';

import { NgVerifyService } from './ng-verify.service';

describe('NgVerifyService', () => {
  let service: NgVerifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgVerifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
