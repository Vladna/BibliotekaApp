import { TestBed } from '@angular/core/testing';

import { ClanoviService } from './clanovi.service';

describe('ClanoviService', () => {
  let service: ClanoviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanoviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
