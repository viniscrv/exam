import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNaoConcluidasComponent } from './lista-nao-concluidas.component';

describe('ListaNaoConcluidasComponent', () => {
  let component: ListaNaoConcluidasComponent;
  let fixture: ComponentFixture<ListaNaoConcluidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNaoConcluidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNaoConcluidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
