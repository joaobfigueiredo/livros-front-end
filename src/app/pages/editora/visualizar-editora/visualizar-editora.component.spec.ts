import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEditoraComponent } from './visualizar-editora.component';

describe('VisualizarEditoraComponent', () => {
  let component: VisualizarEditoraComponent;
  let fixture: ComponentFixture<VisualizarEditoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarEditoraComponent]
    });
    fixture = TestBed.createComponent(VisualizarEditoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
