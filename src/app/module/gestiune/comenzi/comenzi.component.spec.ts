import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComenziComponent } from './comenzi.component';

describe('ComenziComponent', () => {
  let component: ComenziComponent;
  let fixture: ComponentFixture<ComenziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComenziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComenziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
