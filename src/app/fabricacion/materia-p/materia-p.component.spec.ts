import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaPComponent } from './materia-p.component';

describe('MateriaPComponent', () => {
  let component: MateriaPComponent;
  let fixture: ComponentFixture<MateriaPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
