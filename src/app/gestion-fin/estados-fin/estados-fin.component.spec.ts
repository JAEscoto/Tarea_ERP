import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosFinComponent } from './estados-fin.component';

describe('EstadosFinComponent', () => {
  let component: EstadosFinComponent;
  let fixture: ComponentFixture<EstadosFinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosFinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
