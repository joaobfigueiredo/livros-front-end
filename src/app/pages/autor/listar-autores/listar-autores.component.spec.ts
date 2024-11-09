import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAutoresComponent } from './listar-autores.component';

describe('ListarAutoresComponent', () => {
  let component: ListarAutoresComponent;
  let fixture: ComponentFixture<ListarAutoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAutoresComponent]
    });
    fixture = TestBed.createComponent(ListarAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
