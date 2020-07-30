import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';  // Import it up here

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  }
);

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
