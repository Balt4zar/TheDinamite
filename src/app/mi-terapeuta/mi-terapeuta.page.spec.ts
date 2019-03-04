import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiTerapeutaPage } from './mi-terapeuta.page';

describe('MiTerapeutaPage', () => {
  let component: MiTerapeutaPage;
  let fixture: ComponentFixture<MiTerapeutaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiTerapeutaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiTerapeutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
