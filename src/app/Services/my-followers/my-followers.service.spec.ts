import { TestBed } from '@angular/core/testing';

import { MyFollowersService } from './my-followers.service';

describe('MyFollowersService', () => {
  let service: MyFollowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFollowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
