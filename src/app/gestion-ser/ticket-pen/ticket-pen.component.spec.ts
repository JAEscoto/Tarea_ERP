import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPenComponent } from './ticket-pen.component';

describe('TicketPenComponent', () => {
  let component: TicketPenComponent;
  let fixture: ComponentFixture<TicketPenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketPenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
