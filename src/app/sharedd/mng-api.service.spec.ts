import { TestBed } from '@angular/core/testing';

import { MngApiService } from './mng-api.service';

describe('MngApiService', () => {
  let service: MngApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MngApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
