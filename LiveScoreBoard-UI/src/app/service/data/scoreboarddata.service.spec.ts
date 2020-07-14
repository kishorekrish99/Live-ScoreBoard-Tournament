import { TestBed } from '@angular/core/testing';

import { ScoreboarddataService } from './scoreboarddata.service';

describe('ScoreboarddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScoreboarddataService = TestBed.get(ScoreboarddataService);
    expect(service).toBeTruthy();
  });
});
