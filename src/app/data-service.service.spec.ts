/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { DataServiceService } from './data-service.service';

describe('Service: DataService', () => {
  beforeEach(() => {
    addProviders([DataServiceService]);
  });

  it('should ...',
    inject([DataServiceService],
      (service: DataServiceService) => {
        expect(service).toBeTruthy();
      }));
});
