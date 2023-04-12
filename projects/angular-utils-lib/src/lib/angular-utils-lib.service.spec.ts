import { TestBed } from '@angular/core/testing';

import { AngularUtilsLibService } from './angular-utils-lib.service';

describe('AngularUtilsLibService', () => {
  let service: AngularUtilsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularUtilsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
