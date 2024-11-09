import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarLivroComponent } from './visualizar-livro.component';

describe('VisualizarLivroComponent', () => {
  let component: VisualizarLivroComponent;
  let fixture: ComponentFixture<VisualizarLivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarLivroComponent]
    });
    fixture = TestBed.createComponent(VisualizarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
