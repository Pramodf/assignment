import { TestBed, inject } from '@angular/core/testing';

import { ClassListService } from './class-list.service';

describe('ClassListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassListService]
    });
  });

  it('should be created', inject([ClassListService], (service: ClassListService) => {
    expect(service).toBeTruthy();
  }));
});
