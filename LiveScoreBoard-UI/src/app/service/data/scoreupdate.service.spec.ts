import { TestBed } from '@angular/core/testing';

import { ScoreupdateService } from './scoreupdate.service';

describe('ScoreupdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScoreupdateService = TestBed.get(ScoreupdateService);
    expect(service).toBeTruthy();
  });
});
