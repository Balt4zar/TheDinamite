import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BSquedaPage } from './b-squeda.page';

describe('BSquedaPage', () => {
  let component: BSquedaPage;
  let fixture: ComponentFixture<BSquedaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BSquedaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BSquedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
