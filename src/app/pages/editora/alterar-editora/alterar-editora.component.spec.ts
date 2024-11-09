import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarEditoraComponent } from './alterar-editora.component';

describe('AlterarEditoraComponent', () => {
  let component: AlterarEditoraComponent;
  let fixture: ComponentFixture<AlterarEditoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarEditoraComponent]
    });
    fixture = TestBed.createComponent(AlterarEditoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
