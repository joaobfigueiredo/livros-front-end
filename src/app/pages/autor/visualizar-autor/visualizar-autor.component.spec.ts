import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarAutorComponent } from './visualizar-autor.component';

describe('VisualizarAutorComponent', () => {
  let component: VisualizarAutorComponent;
  let fixture: ComponentFixture<VisualizarAutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarAutorComponent]
    });
    fixture = TestBed.createComponent(VisualizarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
