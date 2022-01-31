import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliiComponent } from './detalii.component';

describe('DetaliiComponent', () => {
  let component: DetaliiComponent;
  let fixture: ComponentFixture<DetaliiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaliiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaliiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
