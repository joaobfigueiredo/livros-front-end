import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarAutorComponent } from './alterar-autor.component';

describe('AlterarAutorComponent', () => {
  let component: AlterarAutorComponent;
  let fixture: ComponentFixture<AlterarAutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarAutorComponent]
    });
    fixture = TestBed.createComponent(AlterarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
