import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

describe('DataService', () => {
  let httpClient: HttpClient;
  let dataService: DataService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
  it('should return the list of item', () => {
    // Spy on and mock the HttpClient
    httpClient = TestBed.get(HttpClient);
    const itemsMock = [
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
    ];
    // Use our service to get items
    spyOn(httpClient, 'get').and.returnValue(of(itemsMock));
    dataService = TestBed.get(DataService);
    const spy = jasmine.createSpy('spy');
    dataService.getHomeItems$().subscribe(spy);
    // Verify that the service returned mocked data
    expect(spy).toHaveBeenCalledWith(itemsMock);
    // Verify that the service called the proper HTTP endpoint
    expect(httpClient.get).toHaveBeenCalledWith('home/items');
  });
});
