import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderComponent } from './app-header.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
  it('should show logo', () => {
    expect(fixture.nativeElement.querySelector('[data-header="logo"]')).toBeTruthy();
  });
  it('should show search', () => {
    expect(fixture.nativeElement.querySelector('[data-header="search"]')).toBeTruthy();
  });
  it('should show menu', () => {
    expect(fixture.nativeElement.querySelector('[data-header="menu"]')).toBeTruthy();
  });
});
