import { TestBed } from '@angular/core/testing';

import { RegisterAngajatGuard } from './register-angajat.guard';

describe('RegisterAngajatGuard', () => {
  let guard: RegisterAngajatGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegisterAngajatGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
