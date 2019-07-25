import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHomesComponent } from './app-homes.component';

describe('AppHomesComponent', () => {
  let component: AppHomesComponent;
  let fixture: ComponentFixture<AppHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
  it('should expect 3 items', () => {
    expect(fixture.nativeElement.querySelectorAll(`[data-test-home="item"]`).length).toBe(3);
  });
  it('should show home info', () => {
    expect(fixture.nativeElement.querySelector(`[data-test-home="title"]`).innerText).toEqual('Trulli');
    expect(fixture.nativeElement.querySelector(`[data-test-home="location"]`).innerText).toEqual('USA');
    expect(fixture.nativeElement.querySelector(`[data-test-home="image"]`)).toBeTruthy();
  });
});
