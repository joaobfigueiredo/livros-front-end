import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAutorComponent } from './criar-autor.component';

describe('CriarAutorComponent', () => {
  let component: CriarAutorComponent;
  let fixture: ComponentFixture<CriarAutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarAutorComponent]
    });
    fixture = TestBed.createComponent(CriarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
