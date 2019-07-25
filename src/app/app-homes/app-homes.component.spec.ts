import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHomesComponent } from './app-homes.component';
import {DataService} from './data.service';
import {of} from 'rxjs';

describe('AppHomesComponent', () => {
  let component: AppHomesComponent;
  let fixture: ComponentFixture<AppHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHomesComponent ],
    }).overrideComponent(AppHomesComponent, {
      set: {
        providers: [{provide: DataService, useClass: MockDataService}]
      }
    });
    // .compileComponents();
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

class MockDataService {
  getHomeItems$() {
    return of([
      {
        title: 'Trulli',
        image: 'https://www.w3schools.com/html/pic_trulli.jpg',
        location: 'USA',
      },
      {
        title: 'Mac Computer',
        image: 'https://www.w3schools.com/w3images/mac.jpg',
        location: 'UK',
      },
      {
        title: 'Flowers in Chania',
        image: 'https://www.w3schools.com/html/img_chania.jpg',
        location: 'Chania',
      }
    ]);
  }
}


// https://stackoverflow.com/questions/40319045/mock-custom-service-in-angular2-during-unit-test
