import { TestBed } from '@angular/core/testing';

import { EagleServiceService } from './eagle-service.service';

describe('EagleServiceService', () => {
  let service: EagleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EagleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
