import { TestBed } from '@angular/core/testing';

import { PersonalUserDataService } from './personal-user-data.service';

describe('PersonalUserDataService', () => {
  let service: PersonalUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
