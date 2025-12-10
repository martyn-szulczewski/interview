import { TestBed } from '@angular/core/testing';

import { JournalsService } from './journals.service';

describe('Journals', () => {
  let service: JournalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
