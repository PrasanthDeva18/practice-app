import { TestBed } from '@angular/core/testing';

import { Di2Service } from './di-2-service';

describe('Di2Service', () => {
  let service: Di2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Di2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
