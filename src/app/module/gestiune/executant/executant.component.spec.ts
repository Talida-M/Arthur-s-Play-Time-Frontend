import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutantComponent } from './executant.component';

describe('ExecutantComponent', () => {
  let component: ExecutantComponent;
  let fixture: ComponentFixture<ExecutantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
