import { TestBed } from '@angular/core/testing';

import { CreatematchService } from './creatematch.service';

describe('CreatematchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatematchService = TestBed.get(CreatematchService);
    expect(service).toBeTruthy();
  });
});
