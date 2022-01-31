import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProiectantComponent } from './proiectant.component';

describe('ProiectantComponent', () => {
  let component: ProiectantComponent;
  let fixture: ComponentFixture<ProiectantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProiectantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProiectantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
