import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloComponente2Component } from './modulo-componente2.component';

describe('ModuloComponente2Component', () => {
  let component: ModuloComponente2Component;
  let fixture: ComponentFixture<ModuloComponente2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloComponente2Component]
    });
    fixture = TestBed.createComponent(ModuloComponente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
