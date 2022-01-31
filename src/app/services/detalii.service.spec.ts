import { TestBed } from '@angular/core/testing';

import { DetaliiService } from './detalii.service';

describe('DetaliiService', () => {
  let service: DetaliiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetaliiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
