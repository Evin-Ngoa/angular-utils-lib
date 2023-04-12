import { TestBed } from '@angular/core/testing';

import { NgstCommonUtilsService } from './ngst-common-utils.service';

describe('NgstCommonUtilsService', () => {
  let service: NgstCommonUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgstCommonUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
