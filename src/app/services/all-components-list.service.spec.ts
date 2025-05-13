import { TestBed } from '@angular/core/testing';

import { AllComponentsListService } from './all-components-list.service';

describe('AllComponentsListService', () => {
  let service: AllComponentsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllComponentsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
