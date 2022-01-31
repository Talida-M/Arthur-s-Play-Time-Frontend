import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiuneComponent } from './gestiune.component';

describe('GestiuneComponent', () => {
  let component: GestiuneComponent;
  let fixture: ComponentFixture<GestiuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestiuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
