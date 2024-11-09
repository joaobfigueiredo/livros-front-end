import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEditorasComponent } from './listar-editoras.component';

describe('ListarEditorasComponent', () => {
  let component: ListarEditorasComponent;
  let fixture: ComponentFixture<ListarEditorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEditorasComponent]
    });
    fixture = TestBed.createComponent(ListarEditorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
