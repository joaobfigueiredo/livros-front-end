import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarLivroComponent } from './criar-livro.component';

describe('CriarLivroComponent', () => {
  let component: CriarLivroComponent;
  let fixture: ComponentFixture<CriarLivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarLivroComponent]
    });
    fixture = TestBed.createComponent(CriarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
