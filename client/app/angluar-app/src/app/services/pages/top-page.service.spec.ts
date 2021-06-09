import { TestBed } from '@angular/core/testing';

import { TopPageService } from './top-page.service';

describe('TopPageService', () => {
  let service: TopPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
