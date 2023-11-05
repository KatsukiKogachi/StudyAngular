import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloComponente1Component } from './modulo-componente1.component';

describe('ModuloComponente1Component', () => {
  let component: ModuloComponente1Component;
  let fixture: ComponentFixture<ModuloComponente1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloComponente1Component]
    });
    fixture = TestBed.createComponent(ModuloComponente1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
