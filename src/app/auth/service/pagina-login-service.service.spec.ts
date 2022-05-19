import { TestBed } from '@angular/core/testing';

import { PaginaLoginServiceService } from './pagina-login-service.service';

describe('PaginaLoginServiceService', () => {
  let service: PaginaLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginaLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
