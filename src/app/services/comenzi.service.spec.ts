import { TestBed } from '@angular/core/testing';

import { ComenziService } from './comenzi.service';

describe('ComenziService', () => {
  let service: ComenziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComenziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
