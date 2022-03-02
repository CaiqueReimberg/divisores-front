import { TestBed } from '@angular/core/testing';

import { CalculatorManagerService } from './calculator-manager.service';

describe('CalculatorManagerService', () => {
  let service: CalculatorManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
