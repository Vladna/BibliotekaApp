import { TestBed } from '@angular/core/testing';

import { ClanServiceService } from './clan-service.service';

describe('ClanServiceService', () => {
  let service: ClanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
