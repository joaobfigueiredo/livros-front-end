import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEditoraComponent } from './criar-editora.component';

describe('CriarEditoraComponent', () => {
  let component: CriarEditoraComponent;
  let fixture: ComponentFixture<CriarEditoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarEditoraComponent]
    });
    fixture = TestBed.createComponent(CriarEditoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
