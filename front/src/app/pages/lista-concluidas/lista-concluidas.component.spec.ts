import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConcluidasComponent } from './lista-concluidas.component';

describe('ListaConcluidasComponent', () => {
  let component: ListaConcluidasComponent;
  let fixture: ComponentFixture<ListaConcluidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaConcluidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaConcluidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
